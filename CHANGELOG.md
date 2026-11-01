# Changelog

All notable changes to the specification. Versions track the build of *The Dream Machine* ([Version Control](https://www.dreammachine.systems/version-control)). Format based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased] – target v0.9.5

### Changed

- **Scope:** Repository renamed from `love-protocol` to `dream-machine-os`. It now specifies the whole OS; the Love Protocol is module 09.
- **License:** Specification relicensed from Apache 2.0 to CC BY-NC-SA 4.0, aligned with the book's dual-track licensing. Commercial use requires an enterprise license. Earlier versions remain available under Apache 2.0.
- **Bandwidth constants:** Updated from 50 bit/s vs. 11 million bit/s to 10 bit/s vs. ~1 billion bit/s (Zheng & Meister, 2024, *Neuron*).
- **Structure:** `core/` moved to `modules/01-identity-bios` and `modules/08-cognitive-downclock`. Patches renamed and tagged with evidence tiers.
- **Module 02:** Reviewed line by line against CH 2 and set to `STABLE`. Root-cause analysis is credited to the 4 Noble Truths, the Belief Loop and the Unit Test follow the book's wording, the Depletion path runs the Gentle Boot Protocol. Added: The Lens, Epistemic Bottleneck, Logic Bypass and Kernel Panic Failsafe, the scope limit of Fuzzy Logic, the critique clause.
- **Module 11:** Reviewed line by line against CH 11 and set to `STABLE`. The Open Source Test now carries all criteria of CH 11.4 and the Architect's Rule; Container First follows CH 11.5 and the `Container_Integrity` failsafe of CH 11.3. Added: the Localhost diagnostic boundary for divination, the Legacy ROM libraries and their epistemic status, Data Recovery at Scale, the DMN mechanism, the Human Debug Deck as optional peripheral, relational topology and the Honorable Harvest, and `09-love-protocol` as Phase III dependency.
- **Module 10:** Reviewed line by line against CH 10 and set to `STABLE`. The Extreme Stress Suite now carries the book's medical boundary (optional, contraindications, medical clearance, neurodivergent accessibility), and Safe Mode Precedence cites the Mode 0x02 Lockout. Added: chaos engineering vs. DDoS, Compassion Patch, hardening vs. callousing, return to baseline, SPOF Bug, no trauma stacking and the escalator exemption in the load test gate, procedure 3.3 Stress Suite Runs, and `09-love-protocol` as Phase III dependency.
- **Module 09:** Reviewed line by line against CH 9 and Directory C; stays `STABLE`. All statements matched. Added: TCP vs. UDP and the Relational Network Stack, the Git Merge Conflict rule, Upekkha as prerequisite, Tech-Bro Malware, Headless Mode, the Ikigai Protocol, trainable compassion, Autonomic Phase Sync with the Hardware Override as step 0 of the handshake, the Bunker Bug, and the Compassion Patch with the Disconnect Protocol.
- **Module 08:** Reviewed line by line against CH 8; stays `STABLE`. Corrected the namespace split to `SENSORY_INTAKE` vs. `AFFECTIVE_BANDWIDTH`. Added: User Illusion and Calculation Fallacy (logic for codes the module already owned), the Dissociation Exploit and Buffer Overflow warnings, Tier-0 routing in procedure 3.1, and the Legacy OS handshake.
- **Module 07:** Reviewed line by line against CH 7 and set to `STABLE`. All statements matched. Added: Strict Input Sanitization as countermeasure to algorithmic domestication, `403 Forbidden` and the semi-permeable membrane, the eye-level patch of the Subject-Object Rule, and the Personal README as procedure 3.4. The SLA tiers follow the table in CH 7.2.
- **Module 06:** Reviewed line by line against CH 6 and set to `STABLE`. The HIIT gate describes short, measured bursts (cross-stressor adaptation), not a cortisol burn. Added: the chapter's five warning boxes (Titration, respiratory anatomy and dysautonomia, Dissociative Bypass, blood panel before supplements, Tier 3 for induced tremoring), the non-ableist scope, the Biohacker Trap, Latency Defense, and the Grounding Wire as procedure 3.4.
- **Module 05:** Reviewed line by line against CH 5 and set to `STABLE`. Reality Testing lists the book's three tests and the offline rehearsal. Added: Mechanical Integration as procedure 3.3, the security disclaimer, unconditional worth at the value-output boundary, the Somatic Execution failsafe for Heuristic Avatars, the Partition Error and practitioner guidance for Data Recovery, the no-Kill-Command rule for Unburdening.
- **Module 04:** Reviewed line by line against CH 4 and set to `STABLE`. The Ego Firewall is the defence that keeps the patches locked away, an unmet dependency means a jump to module 06 (not an abort), the Somatic Refactoring Protocol routes to Tier 3 and now carries the 90 to 120 second hold, the discharge and the Permissions Update. Added: the Deprecation Protocol as procedure 3.1, the rebound effect, the 10-bit limit in the Data Lake, the Shadow as quarantined Sub-Minds, the Update Block, the Compassion Patch and the grief clause.
- **Module 03:** Reviewed line by line against CH 3 and set to `STABLE`. Collapsed Awareness now reads as in CH 3.1.1 (awareness collapses, not the spotlight), the Transceiver carries the book's epistemic status, Packet Sniffing uses the book's three questions. Added: Fear Blockade, Anti-Spiritual Bypassing, Process Synchronization, the Somatic Feedback Loop failsafe (also in the Frankl Buffer procedure), Passion Build, the weekly Sandbox Command, the Compassion Patch.
- **Module 01:** Reviewed line by line against CH 1. The tagline now quotes CH 1.0 ("Layer 0" contradicted CH 21, where the BIOS is Layer 1). Added: the Structural Reality limit and the somatic cost to Radical Responsibility, the Small Life Throttle with Network Refactoring, the Upstream Patch, and the two limits of the Stoic Kernel (no write access to the initial flinch, Safe Mode before Amor Fati).
- **Modules 01, 08, 09:** Aligned with build v0.9.5 and set to `STABLE`. Formulas and error codes that are not in the book were removed (`ERROR_BLAME_LOOP`, `ERROR_VICTIM_MODE`, `OVERFLOW_ERROR`, `LATENCY_SPIKE`, `STATEFUL_OVERHEAD`, `ROOT_ACCESS_LEAK`, `SAFETY_GATE_BYPASS`) and replaced by the book's terms (e.g. `VICTIM_MODE`, `CEO_BUG`, `ZIP_FILE_ERROR`, `SOCIAL_LAG`). Module 09 now covers CH 9 as well as Directory C, including the Iron Gate (`DROP`) level of the ACL.
- **Scope rule:** The specification mirrors the tagged book build. New logic goes through an RFC (`modules/README.md`).
- **Audit ID:** `sec3-1-1` is now `sec3-1-2`, as in the book's footnote; the old ID stays as an alias.

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
- Modules 02–07 and 10–12 (`DRAFT`), derived from CH 2–7 and CH 10–12: abstract, core logic, procedures, the chapter's System Mapping table, error codes, audit sections and deck cards. All 12 chapters now have a spec.
- `errors/registry.json`: 80 error codes in one register, including the Directory F incident codes `0x01`–`0x09`.
- `glossary/`: all 227 terms of Directory B, one file per term. Source for dreammachine.systems/docs/syntax.
- `audit/`: all 150 audit logs of the book's footnoted claims, one JSON file per chapter or directory.
- `deck/cards.json`: the 78 Human Debug Deck cards mapped to modules and error codes (IDs and titles only, no card texts).
- CI check `scripts/check-data.mjs`: schema and cross-references of registry, glossary, audit, deck and module error tables.
- Markdown lint on every PR (`.github/workflows/markdown.yml`, rules in `.markdownlint.jsonc`) and a weekly link check (`.github/workflows/links.yml`) that opens an errata issue when a link breaks.

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
