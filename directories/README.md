# Directories

The book closes with eleven System Directories, A to K. Modules specify the twelve theory chapters; this folder specifies the directories that carry their own system logic. Every other directory either lives in another folder of this repository or stays in the book.

| Dir | Book title | Partition | In this repository | Spec status | Briefing |
| --- | --- | --- | --- | --- | --- |
| A | Backend Schematic (Multi-Agent Architecture) | I | [a-backend-schematic](a-backend-schematic/) | `STABLE` | [dira](https://www.dreammachine.systems/briefings/dira) |
| B | System Glossary (A-Z Index) | I | [`glossary/`](../glossary/) | – | – |
| C | Technical Specification: Love Protocol | I | [`modules/09-love-protocol`](../modules/09-love-protocol/): sections C.3 to C.7 are procedures 3.1 to 3.6 | – | [ch9](https://www.dreammachine.systems/briefings/ch9) |
| D | Theoretical Sandbox: End-of-Lifecycle Theories (Receiver Hypothesis) | I | [d-theoretical-sandbox](d-theoretical-sandbox/) | `STABLE` | [dird](https://www.dreammachine.systems/briefings/dird) |
| E | Practical Command Set (Exercise Repo) | II | [e-command-set](e-command-set/): index of all drills with objective and module; the operational syntax stays in the book | `STABLE` | – |
| F | Troubleshooting Guide (System Error Logs) | II | [f-troubleshooting-guide](f-troubleshooting-guide/): runbook for incidents `0x01` to `0x09` and the Incident Response Matrix; codes in [`errors/registry.json`](../errors/registry.json) | `STABLE` | – |
| G | System Telemetry & KPIs | II | [g-telemetry-kpis](g-telemetry-kpis/): the ten KPIs and the Public Payload Schema; personal KPI values never enter a public repository (G.2) | `STABLE` | – |
| H | System Peripherals & Utilities (Hardware & Software) | III | Website: [dreammachine.systems/docs/bom](https://www.dreammachine.systems/docs/bom/) | – | – |
| I | Resource Repositories (Third-Party Libraries) | III | Website: [dreammachine.systems/docs/bom](https://www.dreammachine.systems/docs/bom/) | – | – |
| J | Visual Schematics (The Carbon/Silicon Synthesis) | III | Book only. The illustrations are third-party works and not licensed for this repository; marks and logos: [`TRADEMARKS.md`](../TRADEMARKS.md) | – | – |
| K | Network: Acknowledgments & Support Cluster | III | Book only (names of private persons) | – | – |

**Status values:** as for modules. `DRAFT` = spec exists, not yet audited line by line against the current build; `STABLE` = matches the tagged build. Directory status is kept in this table, in each page's `spec_status` front matter and, machine-readable, in [`spec-status.json`](../spec-status.json) (with the runbook and the toolkit); it is not part of [`modules/status.json`](../modules/status.json), which lists the twelve modules only. A status change touches all three in the same PR; CI runs `node scripts/check-spec-status.mjs` and fails when they disagree. [dreammachine.systems/source](https://www.dreammachine.systems/source) reads `spec-status.json` at build time, so keep its path and keys stable.

## Directory format

A directory page follows the [module format](../modules/README.md#module-format) with three differences:

- `id` starts with `dir-`, and `book_ref` names the directory instead of a chapter.
- `related` replaces `depends_on`: a directory is reference material for the modules it lists, not a runtime dependency.
- Audit logs and error codes of a directory keep `"module": null` in [`audit/`](../audit/) and [`errors/registry.json`](../errors/registry.json); the page links them by section ID and code.
