# Company knowledge (dream-machine-wiki)

Durable company knowledge of Dream Machine | Systems (offer, audience, hook and messaging, trademarks, editions, platform rules) lives in the private repo dream-machine-systems/dream-machine-wiki. Read its INDEX.md first, then only the files the task needs. This repo’s own contracts stay here and win for this repo’s area. When a sprint produces a durable company-wide decision, propose one small wiki PR following the wiki’s CLAUDE.md and NEVER.md; the owner merges. This repo is public and the wiki is private: never copy, paraphrase or cite wiki content in a file, commit, issue or PR of this repo.

## Releases

- A release is one book build: `build` everywhere, `CHANGELOG.md` and the tag `vX.Y.Z` name the build of *The Dream Machine* published on Leanpub (`GOVERNANCE.md`). Corrections between builds go under `[Unreleased]`; there are no interim or pre-release tags.
- When the owner reports a new published build: open one release PR `chore(release): vX.Y.Z` that turns `## [Unreleased]` into `## [X.Y.Z] – YYYY-MM-DD` (the build date of the book) and raises every `build: vX.Y.Z` / `"build": "vX.Y.Z"` (modules, directories, runbook, toolkit, `modules/status.json`, `spec-status.json`, `audit/`, `errors/registry.json`, `deck/cards.json`, README badge and line, the errata placeholder). Keep each CHANGELOG entry detailed enough to serve as release notes: what changed, the old and the new wording, the book reference.
- Never set a tag or write a release by hand: after the merge, `.github/workflows/release.yml` tags the commit that added the heading and publishes the release with notes from `scripts/release.mjs` (CHANGELOG section, commits merged since the previous build, compare link). Check the run and the release page after the merge.
- Consumers that pin a commit of this repo (the loveprotocol.io snapshot of module 09) follow with their own PR after the release.
