#!/usr/bin/env node
// Release plan and release notes for the build tags vX.Y.Z.
//
// A build is released when CHANGELOG.md has a section "## [X.Y.Z] – YYYY-MM-DD".
// Its tag vX.Y.Z belongs on the commit of main that added that heading: the
// squash commit of the release PR. The Release workflow
// (.github/workflows/release.yml) creates every missing tag from this plan and
// publishes each GitHub release with these notes. Only plain X.Y.Z versions
// are tagged automatically; a version with a suffix (X.Y.Z-ALPHA) is never
// tagged by the workflow.
//
// Usage (needs the full history and the tags: actions/checkout fetch-depth 0):
//   node scripts/release.mjs plan            one line per build, oldest first:
//                                            "<tag> <commit> <tagged|missing> <latest|older>"
//   node scripts/release.mjs notes <tag>     the release notes of <tag> in Markdown
// No dependencies.

import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const repo = process.env.GITHUB_REPOSITORY || 'dream-machine-systems/dream-machine-os';
const STABLE = /^\d+\.\d+\.\d+$/;

const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
const die = (msg) => {
  console.error(`release: ${msg}`);
  process.exit(1);
};

// Released sections of CHANGELOG.md in file order (newest first).
function sections() {
  const lines = readFileSync(join(root, 'CHANGELOG.md'), 'utf8').split('\n');
  const out = [];
  let cur = null;
  for (const line of lines) {
    const m = /^## \[([^\]]+)\](?:\s+[–-]\s+(\d{4}-\d{2}-\d{2}))?/.exec(line);
    if (m) {
      cur = m[1] === 'Unreleased' ? null : { version: m[1], date: m[2] ?? null, body: [] };
      if (cur) out.push(cur);
      continue;
    }
    if (cur) cur.body.push(line);
  }
  for (const s of out) s.body = s.body.join('\n').trim();
  return out;
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// First commit on the first-parent line of HEAD that added the version heading.
function commitFor(version) {
  const out = git(
    'log', '--first-parent', '--reverse', '--format=%H',
    '-G', `^## \\[${escapeRe(version)}\\]`, 'HEAD', '--', 'CHANGELOG.md',
  );
  return out.split('\n')[0] || null;
}

function tagCommit(tag) {
  try {
    return git('rev-parse', '-q', '--verify', `refs/tags/${tag}^{commit}`);
  } catch {
    return null;
  }
}

function plan() {
  const stable = sections().filter((s) => STABLE.test(s.version));
  const newest = stable[0]?.version;
  const rows = [];
  for (const s of [...stable].reverse()) {
    const tag = `v${s.version}`;
    const commit = tagCommit(tag) ?? commitFor(s.version);
    if (!commit) die(`no commit on this branch adds "## [${s.version}]" to CHANGELOG.md`);
    rows.push(`${tag} ${commit} ${tagCommit(tag) ? 'tagged' : 'missing'} ${s.version === newest ? 'latest' : 'older'}`);
  }
  console.log(rows.join('\n'));
}

function notes(tag) {
  if (!tag?.startsWith('v')) die('usage: node scripts/release.mjs notes vX.Y.Z');
  const version = tag.slice(1);
  const all = sections();
  const i = all.findIndex((s) => s.version === version);
  if (i < 0 || !all[i].body) die(`CHANGELOG.md has no section "## [${version}]"`);
  const s = all[i];
  const commit = tagCommit(tag) ?? commitFor(version);
  // The previous build is the next older plain X.Y.Z section whose tag exists.
  const prev = all
    .slice(i + 1)
    .filter((p) => STABLE.test(p.version))
    .map((p) => `v${p.version}`)
    .find((t) => tagCommit(t));

  const out = [];
  if (STABLE.test(version)) {
    const when = s.date ? `, published on Leanpub on ${s.date}` : '';
    out.push(
      `Specification build **${tag}**. It mirrors build ${tag} of *The Dream Machine – Operating System for the Soul*${when}.`,
      '',
    );
  }
  out.push(s.body);
  if (prev && commit) {
    const log = git('log', '--first-parent', '--format=- %s (%h)', `${prev}..${commit}`);
    if (log) out.push('', `### Merged since ${prev}`, '', log);
  }
  out.push('', '---', '');
  if (prev) out.push(`**Full diff:** https://github.com/${repo}/compare/${prev}...${tag}  `);
  out.push(`**Changelog:** https://github.com/${repo}/blob/${tag}/CHANGELOG.md`);
  console.log(out.join('\n'));
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === 'plan') plan();
else if (cmd === 'notes') notes(arg);
else die('usage: node scripts/release.mjs plan | notes vX.Y.Z');
