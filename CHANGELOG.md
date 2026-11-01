# Changelog

All notable changes to the specification. Versions track the build of *The Dream Machine* ([Version Control](https://www.dreammachine.systems/version-control)). Format based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased] – target v0.9.5

### Changed

- **Scope:** Repository renamed from `love-protocol` to `dream-machine-os`. It now specifies the whole OS; the Love Protocol is module 09.
- **License:** Specification relicensed from Apache 2.0 to CC BY-NC-SA 4.0, aligned with the book's dual-track licensing. Commercial use requires an enterprise license. Earlier versions remain available under Apache 2.0.
- **Bandwidth constants:** Updated from 50 bit/s vs. 11 million bit/s to 10 bit/s vs. ~1 billion bit/s (Zheng & Meister, 2024, *Neuron*).
- **Structure:** `core/` moved to `modules/01-identity-bios` and `modules/08-cognitive-downclock`. Patches renamed and tagged with evidence tiers.

### Added

- `modules/09-love-protocol`: specification derived from Directory C of the book.
- Governance: `CONTRIBUTING.md`, `GOVERNANCE.md`, `CODE_OF_CONDUCT.md`, `SAFETY.md`, `TRADEMARKS.md`, `COMMERCIAL-USE.md`, `CLA.md`.
- `CLA.md` version 1.0: non-exclusive licence to Dream Machine Systems FlexCo, public availability of every accepted contribution under CC BY-NC-SA 4.0 or a more permissive Creative Commons license, opt-out for future contributions at any time.
- CLA check (`.github/workflows/cla.yml`, `scripts/cla.cjs`): signature by PR comment, stored in a private repository. Inactive until switched on.
- `COMMERCIAL-USE.md`: CC definition of NonCommercial, examples, license tiers (Community, Solo Practitioner, Studio, Corporate, Product).
- Issue forms (Errata, Evidence, RFC), PR template, `CODEOWNERS`.
- `glossary/`, `audit/`, `rfcs/` as entry points.
- Labels as code (`.github/labels.json`, synced by CI) and a release workflow that publishes each tag with its CHANGELOG section.
- `modules/status.json`: machine-readable module status, read by dreammachine.systems/source. CI check `scripts/check-module-status.mjs` keeps it in sync with `modules/README.md` and the module front matter.

### Removed

- `book-metadata/`: described a standalone "Love Protocol" book that was merged into *The Dream Machine*.
- `ARCHITECTURE.md`, `DIRECTORY.md`: replaced by `modules/README.md`.
- Unenforceable "Vesting-Protokoll" clause and the liability statement from the README.

## [0.2.0-ALPHA] – 2026-06-15

### Changed

- README: Anti-Amnesia patch (Stateless API vs. Stateful DB), 10-bit / 1-billion-bit constants, compassion parameter in the handshake CLI.

Last version under Apache 2.0. It stays available under that license at tag `v0.2.0-ALPHA`.

## [0.1.0-ALPHA] – 2026-01-17

### Added

- Initial repository: Identity BIOS, Communication Filter, Gottman, Terry Real and Dispenza patches. Licensed under Apache 2.0.
