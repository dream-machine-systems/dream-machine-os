---
id: runbook
title: Deployment Runbook
book_ref: "Deployment Runbook (CH 13 to 19)"
spec_status: DRAFT
build: v0.9.5
related: [01-identity-bios, 02-operating-system, 03-processor, 04-security-auditing, 07-social-api, 09-love-protocol, 10-hardened-infrastructure, 11-wisdom-nodes, 12-data-sovereignty]
audit: https://www.dreammachine.systems/audit
---

# Deployment Runbook

**Push the specification to the live system in tiers: event-driven deployments, gated by physical stability, never by a calendar.**

> **Safety boundary.** The runbook is a self-observation framework, not treatment. Tier 0 (out-of-band support: clinical care, caregivers, therapy) is authorized from day 1 and stays open for the whole lifecycle. In an acute crisis, stop and contact a person: see [`SAFETY.md`](../SAFETY.md).

## 1. Abstract

The modules specify the architecture in book order (Phases I to IV). The Deployment Runbook specifies the **migration path**: in which order the patches go live on the running system, and when a tier counts as done. It replaces the Waterfall approach (a rigid blueprint for a conflict-free life, abandoned in guilt by Wednesday) with Agile CI/CD: event-driven deployments, ugly but functional code, daily bugs accepted as the cost of doing business (CH 13.0).

Layer scope: the runbook operates at the Phase I to III abstraction layer and addresses the reader as the Sudo Admin, the local interface needed for hardware repairs. The Phase IV realization (the Admin is a rendered tool) remains true and does not conflict: use the tool to clean the system, then drop it. Deprecate the Admin only after the system is stable (CH 13.0, Layer Scope).

## 2. Rules of Engagement

Source: CH 13.1.

| Rule | Name | Logic |
| --- | --- | --- |
| #1 | No Hot-Fixes (Patience) | Patching a twenty-year-old trauma bug over a long weekend is a system impossibility. Let the system compile slowly. |
| #2 | Respect Dependencies (Order of Operations) | Do not execute Tier 4 (Love Protocol) while Tier 1 (Identity BIOS) still runs corrupted survival scripts. Follow the sequence. |
| #3 | System Restore Protocol (Blameless Post-Mortem) | Crashes are inevitable. "Runtime Error on line 42. Rebooting." A bug is a log file, not a moral failure: load the last stable Restore Point, run a blameless post-mortem, type the next line. |

Crash lookup for rule #3: [Directory F](../directories/f-troubleshooting-guide/) and the [incident templates](../toolkit/#5-incident-reports).

## 3. Execution Failsafe: Gantt Chart Fallacy

Source: CH 13.2. Error code `GANTT_CHART_FALLACY` in [`errors/registry.json`](../errors/registry.json).

The Gantt Chart Fallacy is the belief that psychological healing can be forced onto a calendar sprint, and that enough protocol execution guarantees a 100% "healed" status. It does not.

- **Unresolvable Exceptions (CH 13.2.1):** The loss of a loved one, a terminal illness, a physical disability or a severe betrayal can cause Permanent Hardware Damage. Demanding a software patch for it is a failure of psychological humility.
- **Graceful Degradation (CH 13.2.2):** If the bug cannot be fixed, keep the core functions running around the crater: acknowledge the loss, grieve the missing bandwidth, route the remaining life around it. The schedules of this runbook are scaffolding to keep the servers online, not a cure. Operational form: `NOT_PATCHABLE` ([Directory F, incident `0x09`](../directories/f-troubleshooting-guide/#0x09-hardware-constraint-unresolvable_exception)).

## 4. Command Syntax

Source: CH 14.4. The translation tables of CH 14.1 to 14.3 (Rosetta Stone) stay in the book.

### 4.1 Process Management: `kill -15` vs. `kill -9`

Separate an **Analog Payload** (somatic emotion) from a **Cognitive Bug** (hallucinated anxiety) before terminating a process.

| Signal | Scope | Execution |
| --- | --- | --- |
| `kill -15` (SIGTERM, graceful) | All internal telemetry: feelings and thoughts | Do not suppress. Drop attention from the story, breathe into the physical tension, let the process spin down and archive itself. A hard kill on internal telemetry leaves orphaned trauma running as a memory leak in the body. |
| `kill -9` (SIGKILL, hard) | Observable, external behavioral scripts only | Doomscrolling at 2 AM, a toxic text, a screaming match: terminate the action instantly (drop the phone, leave the room, close the laptop). |

Hard-kill the action, gracefully deprecate the feeling.

### 4.2 Security Policy (Access Control)

```text
INPUT  furious, dysregulated communication

1. EXTERNAL_SAFETY_GATE   coercive, abusive, violent or exploiting safety?
                          YES => abort all connection protocols; IP_DROP (extraction); Tier-0 support
2. ROOT POLICY            "Do I have Write Access to this person's behavior?"  => NO
3. TRAFFIC TYPE
   PATH 1  malicious payload, toxic client (safe but malicious)   => IP_DROP (The Iron Gate)
   PATH 2  messy organic traffic (safe, dysregulated, non-abusive) => Grace Protocol:
           hold the port open, absorb the data without taking it personally,
           help the node stabilize (Asymmetric Load Balancing)
```

### 4.3 Cognitive Refactoring: Unit Test

| Step | Example |
| --- | --- |
| Input | "I failed this specific task." |
| Buggy output (biological LLM) | "I am going to die alone and broke." |
| Refactored code | "This iteration failed. I'll patch the bug and push a new build tomorrow." |

Module logic: [02-operating-system](../modules/02-operating-system/) (Unit Test).

## 5. Tiered Deployment

Source: CH 15. A "Big Bang" overnight personality update guarantees a Sev-1 crash (`BIG_BANG_ROLLOUT`); the migration runs in sprints (tiers), each tested and stabilized before more load goes on the stack (CH 15.0).

| Tier (status) | Focus | State-based trigger (Definition of Done) |
| --- | --- | --- |
| **Tier 0** OOB Support (always active) | Clinical support, caregivers, therapy | **Baseline Stability.** External support received to prevent complete system collapse. |
| **Tier 1** Foundation (base install) | Identity Lock, Stoicism, CBT | Victim-mode logic purged; Local Dump File (Journaling) established. |
| **Tier 2** Optimization (requires Tier 1) | Attention Management, Frankl Buffer | Latency Buffer operational under load. |
| **Tier 3A** Forensic Repair (requires Tier 2) | Shadow Work, Data Lake Integration | Quarantined data safely remounted without systemic panic. |
| **Tier 3B** Hardening (optional; requires Tier 3A and Mode 0x01) | Cold Exposure, Chaos Engineering | Autonomic regulation stable during controlled physical stress. |
| **Tier 4** Networking (requires Tier 3) | Love Protocol, Wisdom Nodes | Stateless transmission node deployed. |

Source of the table: CH 15.1, verbatim.

### 5.1 Deployment rules

- **Critical Dependency (CH 15.1):** Skipping layers is an invalid operation. Healing runs on a pipeline triggered exclusively by physical stability, not on a release schedule.
- **Defending System Idle (CH 15.1):** CI/CD here does not mean relentless zero-downtime output; that resurrects the Hustle-Culture Malware. Pausing the pipeline to rest is a mandatory cache-clear, not a deployment failure. Deploy when the hardware is stable, rest when the system is under heavy load.
- **Definition of Done (CH 15.2):** Advancing to the next tier is authorized only when the current tier executes without Thermal Throttling. Neuroplasticity cannot be sprint-planned.
- **Trauma-Stacking (CH 15.2):** Tier 3B (cold exposure) while Tier 1 returns victim-mode errors or while Tier 3A processes raw trauma is a Sev-1 Overclock Error. **Stability First.** Never run 3A and 3B simultaneously (CH 15.6).
- **Pareto Patch (CH 15.2.1):** 80% of stability comes from an individual 20% of the protocols. Ship the messy 20%, patch the rest in production; perfectionism is `ERR_COMPILATION_STUCK`.
- **Pareto Limit (CH 15.2.1, QA Restriction):** Messy is authorized for Localhost routines only (habits, journal entries, morning routines). Emotional packets routed to other nodes (Tier 4) still pass the Frankl Buffer. Shipping messy habits is authorized; shipping messy collateral damage is not.
- **KPIs:** "Done" is verified with metrics, not feelings: [Directory G](../directories/g-telemetry-kpis/).

### 5.2 Tier 0: Out-of-Band Support

Source: CH 15.3. Gating Tier 4 behind Tiers 1 to 3 creates the **Lone Wolf Fallacy**: the idea that you must heal alone before you may connect. Therapy, medication or a caregiver are not Tier 4 networking; they are Tier 0, the mandatory *inbound* support that keeps the server running while the code compiles. Tier 4 is *outbound* connection. Tier 0 is authorized on day 1, and the port stays open for the entire lifecycle.

### 5.3 Tiers 1 to 4

| Tier | Mission | Definition of Done |
| --- | --- | --- |
| 1 Foundation (CH 15.4) | Lock down the Identity BIOS; integrate Stoicism (RAM only for controllable variables) and CBT. Without Radical Responsibility every later protocol crashes with permission errors. | Drop the victim-mode narrative; acknowledge the damage, reclaim the keyboard; process raw telemetry in a Local Dump File (journal) instead of the public network. |
| 2 Optimization (CH 15.5) | Decouple the Spotlight (attention) from the Floodlight (awareness); process a screaming boss without a heart-rate spike. | Feel the physical trigger and force a half-second pause before speaking. |
| 3A Forensic Repair (CH 15.6) | Walk into the Data Lake (Shadow Work) only in a warm, down-regulated, parasympathetic environment. | Sit with intense friction or a heated argument with slow breathing, holding boundaries without dissociating or escalating. |
| 3B Hardening (CH 15.6, optional) | Only once 3A is stable, in Mode 0x01 and with medical clearance: controlled stressors (cold water). Not required for Tier 4. | As 3A, under controlled physical stress. |
| 4 Networking (CH 15.7) | Open the high-bandwidth ports to the people you care about; query Wisdom Nodes; push the Love Protocol to the grid. | Operate as a stateless transmission node, decoupled from the error logs returned by external users. |

## 6. Tier Checklists

The checklists that close CH 16 to 19 are the exit criteria of each tier. Source: CH 16.5, 17.5, 18.5, 19.5, verbatim.

### Tier 1: BIOS & OS Migration (CH 16)

| Frequency | System check | Task / deliverable |
| --- | --- | --- |
| Daily | Flash BIOS | Wake up, plant your feet on the floor, and state: "I hold the Root Access to my own nervous system." |
| Daily | Log Integrity | Catch at least 1 "Logic Error" when your chest tightens and rewrite it in your Bug Tracker. |
| Integration | Sudo Command | Rephrase a conflict using "I choose" instead of the helpless "I have to." |
| Event-Based | HTTP 202 Override | When a daily execution fails, manually log "Status 202: Processing" instead of executing the Shame.exe Fatal Error script. |
| Tier Review | System Status | Did your physical reaction time to stress slow down? (Yes/No). |

Boundary (CH 16): `chmod 744`. Not `777` (the world gets write access to the Identity BIOS: codependency), not `700` (peers lose read access: the Bunker Bug).

### Tier 2: Processor Tuning (CH 17)

| Frequency | System check | Task / deliverable |
| --- | --- | --- |
| Daily | Single-Threading | Complete 10 minutes of "Process Monitoring" (Meditation). Count the redirects. |
| Daily | Access Control Lists (ACL) Rule | Keep the phone out of the bedroom for 7 consecutive nights. |
| Event | Latency Control | Successfully use The Viktor Frankl Buffer (Pause) during one stressful interaction. |
| Event | Flow State (Dynamic Scaling) | **IF** Mode 0x02 (Incident Response) OR Battery < 20% **THEN** Safe Mode (0m); **ELSE IF** Battery 20–50% **THEN** Optional Deep_Work(15m); **ELSE** Deep_Work(90m). *Do not attempt to overclock a motherboard that is actively sparking.* |

Boundaries (CH 17): processor tuning is efficiency for sustainable uptime, not a hustle-culture script. Neurodivergent hardware runs on a different dopamine economy: brown noise, pacing or stimming can be load-bearing, and the switching penalty applies primarily to neurotypical configurations. Flow is a state of a stable chassis, never an escape hatch from a trauma response.

### Tier 3: Forensic Repair & Hardening (CH 18)

| Frequency | System check | Task / deliverable |
| --- | --- | --- |
| Routine | Deep Audit | Decompile one furious reaction using the Mirror Server logic in your journal. |
| Routine | Chaos Test (Optional 3B) | Complete 3 Cold Exposures *(Only from Mode 0x01 baseline)*. Target: Overcome the initial autonomic urge to quit (typically 30–90 seconds). Focus entirely on slowing your heart rate. |
| Deep Scan | Forensic Mode | Execute one 20-minute breathwork session to hunt for quarantined data. |
| Event-Based | Voltage Reg | Successfully down-clock your nervous system using Box Breathing before sleep. |

Boundaries (CH 18):

- **Threat Triage Gateway:** before Shadow Work on a conflict with another node, check external safety first. Coercion, abuse, exploitation or boundary violations: Iron Gate (block, extract), no Shadow Work, the threat is real. Only a safe environment with a disproportionate internal spike goes to Shadow Work.
- **Physical Safety Constraints:** never run 3B together with 3A or in Mode 0x02. No cold exposure when pregnant, with a history of epilepsy or with cardiovascular vulnerabilities; never in deep or unmonitored water; consult a physician first. See [`SAFETY.md`](../SAFETY.md) and [module 10](../modules/10-hardened-infrastructure/).

### Tier 4: Networking & Unified Field (CH 19)

| Frequency | System check | Task / deliverable |
| --- | --- | --- |
| One-Time | SLA Audit | Hardcode every person in your life to Tier 1, 2, or 3. Ruthlessly throttle the bandwidth of the 3s. |
| Daily | Threshold Reset | Physically flush the voltage in the driveway via Box Breathing. Zero percent work residue allowed inside the house. |
| Event | Clean Data | Strip a furious criticism down to the bare physical facts before opening your mouth—using NVC format (Observation + Feeling + Request). |
| Event | Handshake | Explicitly ask your partner: "Debug Mode or Telemetry Mode?" before giving unwanted advice. |

## 7. Tier to Module Map

Derived from the sections of CH 16 to 19; the book has no such table. The drills per tier are indexed in [Directory E](../directories/e-command-set/).

| Tier | Chapter sections | Modules |
| --- | --- | --- |
| 0 | CH 15.3 | none: out-of-band support, [`SAFETY.md`](../SAFETY.md) |
| 1 | 16.1 Sudo Admin, 16.2 Four Noble Truths, 16.3 Unit Testing (CBT), 16.4 Learner Identity | [01](../modules/01-identity-bios/), [02](../modules/02-operating-system/) |
| 2 | 17.1 Myth of Multitasking, 17.2 Frankl Buffer, 17.3 Input Throttling (ACL), 17.4 Flow Protocol | [03](../modules/03-processor/) |
| 3A | 18.1 Ego Rootkit, 18.2 Forensic Mode (Shadow Work) | [04](../modules/04-security-auditing/) |
| 3B | 18.3 Cold Validator, 18.4 Voltage Regulation | [10](../modules/10-hardened-infrastructure/) |
| 4 | 19.1 QoS, 19.2 Clean Data (NVC), 19.3 Love Protocol, 19.4 Unified Field | [07](../modules/07-social-api/), [02](../modules/02-operating-system/) (NVC), [09](../modules/09-love-protocol/), [11](../modules/11-wisdom-nodes/), [12](../modules/12-data-sovereignty/) |

Tiers are not phases. Phases I to IV order the theory chapters ([`modules/README.md`](../modules/README.md#phases)); tiers order the deployment. Module 10 belongs to Phase III but deploys in Tier 3B; Love Protocol (Phase II) deploys in Tier 4.

## 8. Error Codes

Codes are defined once in [`errors/registry.json`](../errors/registry.json). The runbook chapters are the book source of:

| Code | Name | Book |
| --- | --- | --- |
| `GANTT_CHART_FALLACY` | Gantt Chart Fallacy | CH 13.2 |
| `BIG_BANG_ROLLOUT` | Big Bang Rollout | CH 15 |
| `FALSE_GROWTH_MINDSET` | False Growth Mindset | CH 16.4.2 |

Also relevant here: `THERMAL_THROTTLING` (03), `ERR_COMPILATION_STUCK` ([toolkit](../toolkit/#7-legacy-script-library)).

## 9. Not in this repository

- **EULA: Sudo Admin Agreement (CH 13.3)** and the **Rosetta Stone tables (CH 14.1 to 14.3)** stay in the book.
- **Deployment Masterclass:** an interactive pipeline that compiles a personal Somatic Runbook, at [dreammachine.systems/masterclass](https://www.dreammachine.systems/masterclass) (CH 13.1).

## 10. Glossary

[Gantt Chart Fallacy](../glossary/gantt-chart-fallacy.md), [Unresolvable Exception](../glossary/unresolvable-exception.md), [Graceful Degradation](../glossary/graceful-degradation.md), [Big Bang Rollout](../glossary/big-bang-rollout.md), [Grace Protocol](../glossary/grace-protocol.md), [Unit Test](../glossary/unit-test.md), [Sudo Admin](../glossary/sudo-admin.md), [Thermal Throttling](../glossary/thermal-throttling.md), [Safe Mode](../glossary/safe-mode.md), [Chaos Engineering](../glossary/chaos-engineering.md), [Forensic Mode](../glossary/forensic-mode.md), [Somatic Checksum](../glossary/somatic-checksum.md).
