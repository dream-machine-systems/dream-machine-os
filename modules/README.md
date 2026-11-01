# Modules

One module per chapter of *The Dream Machine*. A module specifies the logic; the chapter implements it in prose.

| ID | Module | Book | Spec status | Briefing |
| --- | --- | --- | --- | --- |
| 01 | [Identity BIOS](01-identity-bios/) | CH 1 | `DRAFT` | [ch1](https://www.dreammachine.systems/briefings/ch1) |
| 02 | Operating System (Narrative Layer) | CH 2 | `PLANNED` | [ch2](https://www.dreammachine.systems/briefings/ch2) |
| 03 | Processor (Consciousness Management) | CH 3 | `PLANNED` | [ch3](https://www.dreammachine.systems/briefings/ch3) |
| 04 | Security Auditing (Shadow Work) | CH 4 | `PLANNED` | [ch4](https://www.dreammachine.systems/briefings/ch4) |
| 05 | Low-Level Utilities | CH 5 | `PLANNED` | [ch5](https://www.dreammachine.systems/briefings/ch5) |
| 06 | Hardware Calibration | CH 6 | `PLANNED` | [ch6](https://www.dreammachine.systems/briefings/ch6) |
| 07 | Social API | CH 7 | `PLANNED` | [ch7](https://www.dreammachine.systems/briefings/ch7) |
| 08 | [Cognitive Downclock](08-cognitive-downclock/) | CH 8 | `DRAFT` | [ch8](https://www.dreammachine.systems/briefings/ch8) |
| 09 | [Love Protocol](09-love-protocol/) | CH 9, Directory C | `DRAFT` | [ch9](https://www.dreammachine.systems/briefings/ch9) |
| 10 | Hardened Infrastructure | CH 10 | `PLANNED` | [ch10](https://www.dreammachine.systems/briefings/ch10) |
| 11 | Wisdom Nodes | CH 11 | `PLANNED` | [ch11](https://www.dreammachine.systems/briefings/ch11) |
| 12 | Data Sovereignty | CH 12 | `PLANNED` | [ch12](https://www.dreammachine.systems/briefings/ch12) |

**Status values:** `PLANNED` (no spec yet), `DRAFT` (spec exists, not yet audited against the current build), `STABLE` (matches the tagged build).

## Module format

Each module is a directory with a `README.md` that starts with YAML front matter:

```yaml
---
id: 09-love-protocol
title: Love Protocol
book_ref: "CH 9; Directory C"
spec_status: DRAFT
build: v0.9.5
depends_on: [01-identity-bios, 08-cognitive-downclock]
audit: https://www.dreammachine.systems/audit
---
```

Sections in order: Abstract, Core Logic, Interfaces or Procedures, Error Codes, Dependencies, Evidence.
