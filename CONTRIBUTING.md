# Contributing to the Dream Machine OS

The system ships as a book. The specification evolves here. Every accepted contribution lands in the next build and carries your name in the changelog.

## Before you push anything

1. **No personal data.** Issues and PRs are public and permanent. No health data, relationship details or third-party identifiers. Field reports go to [dreammachine.systems/telemetry](https://www.dreammachine.systems/telemetry).
2. **No Guru Standard.** Every claim needs a source or is labelled as a model, metaphor or hypothesis. Opinions without telemetry are not merged.
3. **Spec, not prose.** This repository holds definitions, logic, error codes and evidence. Narrative and exercises belong in the book.

## Contribution types

| Type | Channel | Review |
| --- | --- | --- |
| **Errata:** typo, wrong number, broken link, contradiction between modules | [Errata issue](https://github.com/dream-machine-systems/dream-machine-os/issues/new?template=errata.yml) or a direct PR | Maintainer, fast track |
| **Evidence:** add, correct or challenge a source; propose an evidence tier | [Evidence issue](https://github.com/dream-machine-systems/dream-machine-os/issues/new?template=evidence.yml) or PR to `audit/` or the module | Consensus Gate (see below) |
| **Glossary and error codes** | PR to `glossary/` or the module | Maintainer |
| **New patch, new module, change to core logic** | [RFC issue](https://github.com/dream-machine-systems/dream-machine-os/issues/new?template=rfc.yml) first, then PR to `rfcs/` | Maintainer decides |

Readers without a GitHub account can use the [feedback form](https://www.dreammachine.systems/feedback). It feeds the same backlog.

## Evidence tiers

The repository uses the tiers of the book's dependency index:

| Tier | Meaning |
| --- | --- |
| `TIER 1: CLINICAL` | Empirically validated neuroscience, biology, behavioural psychology |
| `TIER 2: PHILOSOPHICAL` | Memoir, logic, systems frameworks. High value, subjective |
| `TIER 3: EXPERIMENTAL` | Non-standard or unverified frameworks. Sandbox only |
| `UNAUDITED` | Not yet run through the audit pipeline |

**Consensus Gate:** A PR that introduces a new falsifiable scientific or psychological claim states the claim in one sentence, names at least one primary source (author, year, journal) and proposes a tier. Without that, it stays open.

## Workflow

1. Fork, branch from `main`.
2. Commit with [Conventional Commits](https://www.conventionalcommits.org): `fix(09-love-protocol): correct ACL level numbering`, `feat(glossary): add Frankl Buffer`, `docs(audit): add source for sec8-1`.
3. Open a PR using the template. One topic per PR.
4. Sign the [CLA](CLA.md) when the bot asks (first PR only).
5. The maintainer reviews, squashes and merges. Your name goes into [CHANGELOG.md](CHANGELOG.md).

## Style

- English, Markdown, one module per directory, YAML front matter as in the existing modules.
- A new module or a status change updates `modules/status.json`, the table in `modules/README.md` and the front matter together. Check with `node scripts/check-module-status.mjs`.
- Active voice. No "you should", no "we must". Runbook imperative or If/Then logic.
- ASCII arrows only (`=>`), no Unicode arrows.

## Code of Conduct

[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) applies everywhere in this repository.
