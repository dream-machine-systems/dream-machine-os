# Dream Machine OS | Open Specification

<p align="center">
  <img src="https://img.shields.io/badge/spec-v0.9.5-4A90E2?style=flat-square" alt="Spec version">
  <img src="https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey?style=flat-square" alt="License: CC BY-NC-SA 4.0">
  <img src="https://img.shields.io/badge/status-accepting%20pull%20requests-success?style=flat-square" alt="Accepting pull requests">
</p>

**Upstream manual:** *The Dream Machine – Operating System for the Soul* ([dreammachine.systems](https://www.dreammachine.systems))
**Short link:** [dreammachine.systems/source](https://www.dreammachine.systems/source)
**Spec build:** `v0.9.5` (tracks the book build, see [Version Control](https://www.dreammachine.systems/version-control))

---

## What this repository is

The book is the implementation. This repository is the specification.

It holds the machine-readable layer of the Dream Machine OS: one module per chapter, the system glossary, error codes, third-party patches and the evidence behind each claim. Every change is a commit. Every fix carries a name in the changelog.

It does **not** hold the manuscript. Prose, field stories, exercises and the audio edition stay in the book.

## Directory map

```text
modules/          One spec per book chapter (CH 1–12)
patches/          Third-party frameworks mapped onto the OS, with evidence tier
glossary/         System syntax (single source for dreammachine.systems/docs/syntax)
audit/            Empirical audit logs (claims, queries, sources)
rfcs/             Proposals for new modules or architectural changes
```

Module status lives in [`modules/README.md`](modules/README.md).

## How to contribute

Read [`CONTRIBUTING.md`](CONTRIBUTING.md). Short version:

| You found | Do this |
| --- | --- |
| A typo, wrong number, broken link | Open an **Errata** issue |
| A missing or contradicting source | Open an **Evidence** issue or a PR |
| A better model, a new patch, a structural change | Open an **RFC** issue first |
| A personal experience with the protocol | **Not here.** Use [dreammachine.systems/telemetry](https://www.dreammachine.systems/telemetry). Public issues are permanent. |

Pull requests require a signed [Contributor License Agreement](CLA.md).

## License

The specification is released under [**CC BY-NC-SA 4.0**](LICENSE).

| Use | Allowed under CC BY-NC-SA 4.0 |
| --- | --- |
| Personal use, study groups, non-profit communities | Yes, with attribution |
| Adapting and sharing the spec non-commercially | Yes, under the same license |
| Paid coaching, seminars, corporate training, commercial products | No. Requires an enterprise license, see [`COMMERCIAL-USE.md`](COMMERCIAL-USE.md) |

The text of the book is licensed separately (CC BY-NC-ND 4.0). Versions of this repository published before November 2026 under Apache 2.0 remain available under Apache 2.0.

## Trademarks

**Dream Machine®** (EU trade mark No. 019307121) and **Love Protocol®** (EU trade mark No. 019307122) are registered trade marks of Dream Machine Systems FlexCo. The license above covers the text, not the names. See [`TRADEMARKS.md`](TRADEMARKS.md).

## System boundary

This is an architectural framework, not psychotherapy. If you are in crisis, stop here and read [`SAFETY.md`](SAFETY.md).

---

© 2026 Robert Seyfriedsberger & Dream Machine Systems FlexCo
