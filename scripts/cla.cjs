// CLA check for pull requests. Called by .github/workflows/cla.yml through
// actions/github-script. No dependencies.
//
// - Collects the GitHub logins of all commit authors of a pull request.
// - Compares them with the signature file in the private repository
//   dream-machine-systems/cla-signatures.
// - Records a signature when a commit author posts the signing sentence.
// - Sets the commit status "cla" and keeps one bot comment up to date.
//
// The signature repository is read and written with the fine-grained token
// CLA_SIGNATURES_TOKEN (contents read/write on that repository only).

const CLA_VERSION = '1.0';
const SENTENCE = `I have read the Dream Machine OS CLA v${CLA_VERSION}, I am at least 18 years old and I agree to it.`;
const SIG_OWNER = 'dream-machine-systems';
const SIG_REPO = 'cla-signatures';
const SIG_PATH = `signatures/v${CLA_VERSION}.json`;
const ALLOWLIST = ['seyfro'];
const MARKER = '<!-- dream-machine-os:cla -->';
const STATUS_CONTEXT = 'cla';

const normalize = (s) => (s || '').replace(/\s+/g, ' ').trim();
const isBot = (login) => /\[bot\]$/.test(login || '');
const isAllowed = (login) => ALLOWLIST.includes(login) || isBot(login);

async function sigApi(token, method, body) {
  const url = `https://api.github.com/repos/${SIG_OWNER}/${SIG_REPO}/contents/${SIG_PATH}`;
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'dream-machine-os-cla',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res;
}

async function loadSignatures(token) {
  const res = await sigApi(token, 'GET');
  if (res.status === 404) return { sha: undefined, signatures: [] };
  if (!res.ok) throw new Error(`Reading ${SIG_REPO}/${SIG_PATH} failed: HTTP ${res.status}`);
  const data = await res.json();
  const signatures = JSON.parse(Buffer.from(data.content, 'base64').toString('utf8'));
  return { sha: data.sha, signatures };
}

async function saveSignature(token, record) {
  // Two attempts: a concurrent signature on another PR can change the sha.
  for (let attempt = 0; attempt < 2; attempt++) {
    const { sha, signatures } = await loadSignatures(token);
    if (signatures.some((s) => s.id === record.id)) return signatures;
    const next = [...signatures, record];
    const res = await sigApi(token, 'PUT', {
      message: `sign: ${record.login} (CLA v${CLA_VERSION}, ${record.pull_request})`,
      content: Buffer.from(JSON.stringify(next, null, 2) + '\n').toString('base64'),
      sha,
    });
    if (res.ok) return next;
    if (res.status !== 409 && res.status !== 422) {
      throw new Error(`Writing ${SIG_REPO}/${SIG_PATH} failed: HTTP ${res.status}`);
    }
  }
  throw new Error('Writing the signature failed twice because of concurrent updates.');
}

module.exports = async ({ github, context, core }) => {
  const token = process.env.SIGNATURES_TOKEN;
  if (!token) {
    core.setFailed('Secret CLA_SIGNATURES_TOKEN is missing. See CLA.md and CONTRIBUTING.md.');
    return;
  }
  const { owner, repo } = context.repo;
  const number = context.payload.pull_request?.number ?? context.payload.issue?.number;
  const { data: pr } = await github.rest.pulls.get({ owner, repo, pull_number: number });
  if (pr.state !== 'open') {
    core.info('Pull request is not open, nothing to do.');
    return;
  }

  // 1. Authors to check.
  const commits = await github.paginate(github.rest.pulls.listCommits, {
    owner, repo, pull_number: number, per_page: 100,
  });
  const authors = new Map(); // id -> login
  const unlinked = new Set();
  for (const c of commits) {
    if (c.author?.login) authors.set(c.author.id, c.author.login);
    else unlinked.add(c.commit?.author?.name || c.commit?.author?.email || c.sha.slice(0, 7));
  }
  if (!authors.size && !unlinked.size) authors.set(pr.user.id, pr.user.login);

  // Maintainer pull requests: commits there are written by or for the maintainer.
  const maintainerPr = isAllowed(pr.user.login);

  // 2. Record a signature from a comment.
  let { signatures } = await loadSignatures(token);
  const comment = context.payload.comment;
  if (comment && normalize(comment.body) === normalize(SENTENCE)) {
    const signer = comment.user;
    if (authors.has(signer.id) || signer.id === pr.user.id) {
      signatures = await saveSignature(token, {
        login: signer.login,
        id: signer.id,
        cla_version: CLA_VERSION,
        signed_at: comment.created_at,
        pull_request: pr.html_url,
        comment_url: comment.html_url,
        comment_body: comment.body,
      });
      core.info(`Recorded signature of ${signer.login}.`);
    } else {
      core.info(`${signer.login} posted the sentence but is not an author of this pull request.`);
    }
  }

  // 3. Evaluate.
  const signedIds = new Set(signatures.map((s) => s.id));
  const missing = maintainerPr
    ? []
    : [...authors].filter(([id, login]) => !isAllowed(login) && !signedIds.has(id)).map(([, login]) => login);
  const blockedUnlinked = maintainerPr ? [] : [...unlinked];
  const ok = missing.length === 0 && blockedUnlinked.length === 0;

  const claUrl = `https://github.com/${owner}/${repo}/blob/${pr.base.ref}/CLA.md`;
  await github.rest.repos.createCommitStatus({
    owner, repo, sha: pr.head.sha,
    state: ok ? 'success' : 'failure',
    context: STATUS_CONTEXT,
    target_url: claUrl,
    description: ok
      ? `All authors signed CLA v${CLA_VERSION}`
      : `Signature missing: ${[...missing, ...blockedUnlinked].join(', ')}`.slice(0, 140),
  });

  // 4. One bot comment per pull request, updated in place.
  const comments = await github.paginate(github.rest.issues.listComments, {
    owner, repo, issue_number: number, per_page: 100,
  });
  const existing = comments.find((c) => c.body?.includes(MARKER));
  let body;
  if (ok) {
    if (!existing) return; // Nothing to say on a clean pull request.
    body = `${MARKER}\nAll commit authors have signed the [Contributor License Agreement v${CLA_VERSION}](${claUrl}). Thank you.`;
  } else {
    const lines = [
      MARKER,
      `Thank you for your contribution. Before it can be merged, every commit author needs to sign our [Contributor License Agreement v${CLA_VERSION}](${claUrl}) once. Please read it and post this sentence as a new comment, exactly as written:`,
      '',
      '```text',
      SENTENCE,
      '```',
      '',
    ];
    if (missing.length) lines.push(`Not signed yet: ${missing.map((l) => `@${l}`).join(', ')}`);
    if (blockedUnlinked.length) {
      lines.push(
        `Commits by ${blockedUnlinked.join(', ')} are not linked to a GitHub account. Add the commit e-mail address to your GitHub account, or amend the commits, then push again.`,
      );
    }
    body = lines.join('\n');
  }
  if (existing) {
    if (existing.body !== body) await github.rest.issues.updateComment({ owner, repo, comment_id: existing.id, body });
  } else {
    await github.rest.issues.createComment({ owner, repo, issue_number: number, body });
  }
};

module.exports.SENTENCE = SENTENCE;
