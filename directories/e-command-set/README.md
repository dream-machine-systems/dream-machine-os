---
id: dir-e-command-set
title: Practical Command Set (Exercise Repo)
book_ref: "Directory E (Practical Command Set: Exercise Repo)"
spec_status: STABLE
build: v0.9.5
related: [01-identity-bios, 02-operating-system, 03-processor, 04-security-auditing, 07-social-api, 08-cognitive-downclock, 09-love-protocol, 10-hardened-infrastructure, 11-wisdom-nodes, 12-data-sovereignty]
audit: https://www.dreammachine.systems/audit
---

# Directory E: Practical Command Set

**Deploy a raw Instruction Set Architecture of executable drills to maintain physical system integrity under live-fire conditions.**

This page is an **index**, not the command set. It lists every drill of Directory E with its objective and the module that specifies the underlying logic. The operational syntax of each drill stays in the book.

> **Deployment order.** Do not run all commands at once on day 1; that overheats the motherboard. Follow the tiered deployment of the Deployment Runbook and start with the BIOS (Tier 1). If the BIOS is glitching, an ice bath does not harden the system; it subjects a terrified animal to more trauma. Fix the foundation first, harden the structure second (Directory E, Carbon Log).

## 1. Abstract

Directory E is the Instruction Set Architecture for daily operation: when the system returns an error, locate the matching drill and execute it (E.0). Crash signature: the manual is read and the architecture understood, but the next morning the system stalls in complexity, unsure whether to single-thread, run the Love Protocol or unit-test. Status: Theoretical Bloat / Execution Paralysis (Directory E diagnostic). The [Human Debug Deck](https://www.dreammachine.systems/deck) is the optional analog peripheral for this command set during a live crash (E.0).

## 2. Index

**Module:** the module whose chapter specifies the concept. *(related)* = the drill exists only in Directory E; the module covers the surrounding logic.

### Tier 1: BIOS & OS Initialization (E.1)

| Drill | Mapping | Objective | Module |
| --- | --- | --- | --- |
| Sudo Admin | Radical Responsibility | Take ownership of the response script | [01](../../modules/01-identity-bios/) |
| Graceful Exit | Unresolvable Exception | `NOT_PATCHABLE`: stop optimizing a permanent constraint; harm reduction, accommodation, acceptance | [02](../../modules/02-operating-system/); incident `0x09` in [Directory F](../f-troubleshooting-guide/) |
| Debug 4NT | The 4 Noble Truths | Log the crash, trace the leak, deprioritize the process, verify the build | [02](../../modules/02-operating-system/) |
| Unit Test | CBT Refactoring | Test an automatic thought against raw data; archive and rewrite if none | [02](../../modules/02-operating-system/) |
| Syntax Linter | Internal Input Sanitization | Strip absolute typing from failure statements; keep state failures out of the permanent registry | [02](../../modules/02-operating-system/) *(related)* |
| Environment Sync | Learner Identity | `SET STATUS=LEARNER`: criticism as inbound telemetry | [01](../../modules/01-identity-bios/) |

### Tier 2: Processor Optimization (E.2)

| ID | Drill | Objective | Module |
| --- | --- | --- | --- |
| E.2.1 | Thread Monitoring Sprint (Meditation) | Single-threaded performance; daily, 10–20 minutes | [03](../../modules/03-processor/) |
| E.2.2 | Open Door Drill (Permeability) | Hold focus and peripheral awareness at once | [08](../../modules/08-cognitive-downclock/) |
| E.2.3 | Installing the Frankl Buffer | Inject a latency delay before reacting (target 500 ms) | [03](../../modules/03-processor/) |
| E.2.4 | Port Security (Deep Work) | 90-minute air-gapped sprint against the Context-Switching Penalty | [03](../../modules/03-processor/) |
| E.2.5 | Anxiety Thread Quarantine Protocol | Quarantine unverified future-threat threads; `kill -9` only for observable behavior, never for internal states | [03](../../modules/03-processor/) *(related)* |
| E.2.6 | Seven-Cycle Latency Delay | Check a major change seven cycles (generations) ahead; fail in cycle 1 what breaks in cycle 7 | [11](../../modules/11-wisdom-nodes/) *(related)* |

### Tier 3: Forensic Repair & Hardening (E.3)

| ID | Drill | Objective | Module |
| --- | --- | --- | --- |
| E.3.1 | Vulnerability Scan (Shadow Work) | Trace a trigger to its original install date; update permissions to the adult BIOS | [04](../../modules/04-security-auditing/) |
| E.3.2 | Controlled Fault Injection (Cold Exposure) | Autonomic resilience. **Safety:** only if medically cleared; lower-risk alternative is 15 seconds of cold water on the face (book) | [10](../../modules/10-hardened-infrastructure/) |
| E.3.3 | System Flush (Breathing Loop) | Discharge accumulated charge via breathing rounds with retention. **Safety:** never in Mode 0x02 or on a depleted system (Safe Mode Precedence, module 10); see [`SAFETY.md`](../../SAFETY.md) | [10](../../modules/10-hardened-infrastructure/) |
| E.3.4 | Infinite Loop Debugger | Drop below the linguistic layer to somatic telemetry and the Stateless Observer Mode | [08](../../modules/08-cognitive-downclock/) *(related)* |

### Tier 4: Networking & the Global OS (E.4)

| ID | Drill | Objective | Module |
| --- | --- | --- | --- |
| E.4.1 | Setting the Social SLA | Assign every node to Tier 1, 2 or 3 with response times | [07](../../modules/07-social-api/) |
| E.4.2 | Stateless Handshake | Refuse to load the Legacy Cache mid-conflict; process the current packet only | [09](../../modules/09-love-protocol/) |
| E.4.3 | Virus Scanning (Media Literacy) | Heuristic check of the newsfeed for amygdala hijacking | [12](../../modules/12-data-sovereignty/) |
| E.4.4 | Passive Packet Dropping (Macro-Resistance) | Withhold compliance from authoritarian networks without an aggressive return code | [12](../../modules/12-data-sovereignty/) *(related)* |
| E.4.5 | Kinetic Empathy DDoS (Asymmetric Disruption) | Answer an expected violent exploit with non-violent dignity | [12](../../modules/12-data-sovereignty/) *(related)* |
| E.4.6 | Legacy Database Reconciliation Sweep | No `rm -rf` against past administrators; exposure of errors in exchange for amnesty | [12](../../modules/12-data-sovereignty/) *(related)* |

### Daily Stand-Up (E.5)

A reference maintenance script from 07:00 boot-up to 22:00 cache archive (deep work blocks, micro cool-down, asynchronous I/O, shutdown command, Love Protocol with Tier 1 nodes). It is a reference architecture, not a mandate: fork it and adapt it to your own chassis and operating hours (E.5).

## 3. Related

- Incidents and their patches: [Directory F](../f-troubleshooting-guide/).
- Metrics for the drills: [Directory G](../g-telemetry-kpis/).
