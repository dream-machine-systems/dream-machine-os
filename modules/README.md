# Modules

One module per chapter of *The Dream Machine*. A module specifies the logic; the chapter implements it in prose.

| ID | Module | Book | Spec status | Briefing |
| --- | --- | --- | --- | --- |
| 01 | [Identity BIOS](01-identity-bios/) | CH 1 | `STABLE` | [ch1](https://www.dreammachine.systems/briefings/ch1) |
| 02 | [Operating System (Narrative Layer)](02-operating-system/) | CH 2 | `STABLE` | [ch2](https://www.dreammachine.systems/briefings/ch2) |
| 03 | [Processor (Consciousness Management)](03-processor/) | CH 3 | `STABLE` | [ch3](https://www.dreammachine.systems/briefings/ch3) |
| 04 | [Security Auditing (Shadow Work)](04-security-auditing/) | CH 4 | `STABLE` | [ch4](https://www.dreammachine.systems/briefings/ch4) |
| 05 | [Low-Level Utilities](05-low-level-utilities/) | CH 5 | `STABLE` | [ch5](https://www.dreammachine.systems/briefings/ch5) |
| 06 | [Hardware Calibration](06-hardware-calibration/) | CH 6 | `STABLE` | [ch6](https://www.dreammachine.systems/briefings/ch6) |
| 07 | [Social API](07-social-api/) | CH 7 | `STABLE` | [ch7](https://www.dreammachine.systems/briefings/ch7) |
| 08 | [Cognitive Downclock](08-cognitive-downclock/) | CH 8 | `STABLE` | [ch8](https://www.dreammachine.systems/briefings/ch8) |
| 09 | [Love Protocol](09-love-protocol/) | CH 9, Directory C | `STABLE` | [ch9](https://www.dreammachine.systems/briefings/ch9) |
| 10 | [Hardened Infrastructure](10-hardened-infrastructure/) | CH 10 | `STABLE` | [ch10](https://www.dreammachine.systems/briefings/ch10) |
| 11 | [Wisdom Nodes](11-wisdom-nodes/) | CH 11 | `STABLE` | [ch11](https://www.dreammachine.systems/briefings/ch11) |
| 12 | [Data Sovereignty](12-data-sovereignty/) | CH 12 | `STABLE` | [ch12](https://www.dreammachine.systems/briefings/ch12) |

**Status values:** `PLANNED` (no spec yet), `DRAFT` (spec exists, not yet audited against the current build), `STABLE` (matches the tagged build).

## Phases

The book groups the twelve theory chapters into four phases. Each phase opens with a required dependency, an exit condition and a somatic checksum. Phases order the theory; the deployment order on the running system is the tier model of the [runbook](../runbook/) (Tiers 0 to 4).

| Phase | Modules | Required dependency | Exit condition | Somatic checksum |
| --- | --- | --- | --- | --- |
| I Architecture of the Self | 01 to 03 | Radical Responsibility (CH 1.4) | The Sudo Admin can isolate internal background processes and parse cognitive error logs without a Kernel Panic. | Mapping trauma on a whiteboard is not enough: the chassis must have discharged autonomic tension before ports open to the network. |
| II System Integration & Networking | 04 to 09 | The Viktor Frankl Buffer (CH 3.5). Battery dead: return to Phase I and run Safe Mode. | An active P2P connection with another node holds without the Ego Firewall dropping packets or defaulting to defensive routing. | The hardware stays down-regulated while processing high-voltage emotional I/O; shallow chest breathing in conflict means still in Sandbox Mode. |
| III Deployment & Hardening | 10 to 11 | The Love Protocol (CH 9) and Stateless Communication | The macro-topology of the environment is mapped and network-wide routing (The Honorable Harvest) runs without zero-sum hoarding. | Deploy to the live grid with the hardware you have, honoring physical limits without shame. |
| IV Unified Field | 12 | The Validation Protocol (Anti-Spiritual Bypassing) | No endpoint: runtime is permanent; success is MTBF and the speed of Graceful Degradation recovery. | Intellectualizing physical pain or using the metaphors to avoid biological reality means the system is compromised: log off, discharge the hardware. |

Source: the phase introductions of the book (Phase I to IV).

## Status source

[`status.json`](status.json) is the single machine-readable source of module status. [dreammachine.systems/source](https://www.dreammachine.systems/source) reads it at build time from `main`, so keep its path and keys stable.

A status change touches three places in the same PR: `status.json`, the table above and the module's `spec_status` front matter. CI runs `node scripts/check-module-status.mjs` and fails when they disagree. Run it locally before you push.

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

Sections in order: Abstract, Core Logic, Procedures, System Mapping, Error Codes, Dependencies, Evidence, Human Debug Deck.

- **System Mapping** is the Legacy vs. Patched table that closes each chapter of the book.
- **Error Codes** lists the codes the module owns in [`errors/registry.json`](../errors/registry.json). `node scripts/check-data.mjs` fails when the table and the registry disagree.
- **Evidence** lists the audit sections of the chapter ([`audit/`](../audit/)).

## Scope rule

A module specifies what the tagged build of the book contains, nothing more. Section references (`CH 3.5`) point to the book. New logic, new error codes or new procedures go through an [RFC](../rfcs/README.md) first and land in the book and the spec together.
