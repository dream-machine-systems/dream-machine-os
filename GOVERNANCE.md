# Governance

- **Maintainer:** Robert Seyfriedsberger (The System Architect), [@seyfro](https://github.com/seyfro). Final decision on every merge.
- **Model:** Benevolent dictator. This is an author-led specification tied to a published book, not a committee standard.
- **Source of truth:** The latest tagged build. `main` is the next build: it already carries the corrections made in the manuscript since that build, listed under `[Unreleased]` in [CHANGELOG.md](CHANGELOG.md).
- **Version numbers:** `build` (module and directory front matter, `modules/status.json`, `spec-status.json`, README) names the last book build published on Leanpub and changes only with the next one. There are no interim tags. The release PR turns `[Unreleased]` into the new version and raises `build` everywhere; the tag `vX.Y.Z` follows its merge.
- **Changes to modules:** Errata and evidence fixes merge directly after review. New modules, new patches and changes to core logic go through an [RFC](rfcs/README.md).
- **Consensus Gate:** A change that introduces a new falsifiable scientific or psychological claim is not merged until it carries a source and an evidence tier.
- **Credit:** Every merged contribution is named in [CHANGELOG.md](CHANGELOG.md) and, where it reaches the book, in the acknowledgements of the next build.
