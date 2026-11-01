---
id: dir-f-troubleshooting-guide
title: Troubleshooting Guide (System Error Logs)
book_ref: "Directory F (Troubleshooting Guide: System Error Logs)"
spec_status: STABLE
build: v0.9.5
related: [01-identity-bios, 02-operating-system, 03-processor, 04-security-auditing, 07-social-api, 09-love-protocol, 10-hardened-infrastructure]
audit: https://www.dreammachine.systems/audit
---

# Directory F: Troubleshooting Guide

**Execute rigorous Root Cause Analysis on recurring behavioral glitches and push real-time patches before motherboard meltdown.**

> **Safety boundary.** This guide is a self-observation tool, not crisis support. In an acute crisis, stop and contact a person: see [`SAFETY.md`](../../SAFETY.md). Incident `0x09` routes to Tier-0 support by design.

## 1. Abstract

The Troubleshooting Guide is the incident runbook of the Dream Machine OS: nine error codes, each with symptom, root cause and patch, plus a matrix that maps symptoms to a diagnosis and a utility. Crash signature: the system hits a wall (burnout, a procrastination block, a 3 AM anxiety loop) and the Ego Rootkit panics, assuming the whole architecture has failed and the hardware is permanently defective. Every minor glitch feels like a Sev-1 meltdown. Status: Unhandled Runtime Errors (Directory F diagnostic).

Error logs are successful telemetry: they show the heuristic monitors installed in Phase I are working. A system without error logs is failing silently. Matching a symptom to a predefined patch removes the emotional overhead of a crash; system stability is a capacity-based practice, not a permanent destination (Directory F, Carbon and Silicon Logs).

## 2. Incidents

Codes and names are defined once in [`errors/registry.json`](../../errors/registry.json); this section specifies the runbook for each.

### 0x01 Burnout (`THERMAL_THROTTLING`)

- **Symptom:** Bone-deep exhaustion, hating your job and everyone in your house, persistent low voltage, staring blankly at the wall.
- **Root cause:** Heavy, high-priority background processes on an empty battery while refusing to archive the cache (sleep); the hardware monitors are ignored (CH 6.4).

```text
1. IMMEDIATE KILL     suspend all non-essential Tier 3 background tasks; drop the packets
2. VOLTAGE RECOVERY   force a System Reset: 12 hours of uninterrupted, blackout sleep
3. SLA AUDIT          restrict Social API permissions; battery bled to low-priority nodes is a Sev-1 vulnerability
```

### 0x02 Social Lag (`SOCIAL_LAG`)

- **Symptom:** Crushing isolation, bitter resentment, or high-friction arguments caused by protocol mismatches in relationships.
- **Root cause:** Running a Stateful Connection: ten years of legacy data and grudges shoved into the current handshake (CH 9).

```text
1. EXTERNAL_SAFETY_GATE   verify the friction is not abuse; coercion, violence or repeated boundary violations
                          => abort this patch, execute immediate extraction; if safe, continue
2. CACHE PURGE            journal the historical baggage onto paper
3. HANDSHAKE SYNC         "Are we debugging this problem, or do you just need me to shut up and listen?"
4. LOVE PROTOCOL          switch to Stateless Communication; archive the grudge; drop the firewall
```

### 0x03 Recursive Worry Loop (`RECURSIVE_WORRY_LOOP`)

- **Symptom:** Heart hammering at 3 AM while simulating getting fired or going bankrupt.
- **Root cause:** The Catastrophizing Bug: an infinite "What-If" loop without a termination command.

```text
1. INTERRUPT SIGNAL   parasympathetic grounding; do NOT inject new stress (no freezing showers, no hyperventilation);
                      splash cool water on the face or force an extended, slow exhalation
2. LOGIC AUDIT        Unit Test (CH 2.4.1): "Do I have hard, empirical data for this disaster, or is my hardware hallucinating?"
3. PROCESS KILL       if the data is null, gracefully spin down the thread; return focus to the breath
```

### 0x04 Hesitation Bug (`HESITATION_BUG`)

- **Symptom:** A high-priority file sits in the queue, but a wall of dread prevents execution (procrastination).
- **Root cause:** A security firewall triggered by fear of failure; the system protects the ego by remaining permanently idle.

```text
1. 5-SECOND OVERRIDE       do not wait to feel motivated; count 5-4-3-2-1 and trigger the first execution step
2. IDENTITY SHIFT          SET STATUS=LEARNER; a failure is raw telemetry, not a character flaw
3. SINGLE-THREADED FOCUS   do not build the entire app; write the first ugly line of code
```

### 0x05 Ego Reboot (`EGO_REBOOT`)

- **Symptom:** Sudden, vicious defensiveness, the need to be right, oscillating between superiority and worthlessness (identity hijack).
- **Root cause:** An Ego Rootkit has bypassed the ACL and gained root access; the legacy self defends its partition (CH 18.1).

```text
1. VULNERABILITY SCAN   "What specific insecurity am I desperately trying to protect right now?"
2. SUDO OVERRIDE        re-initialize the Identity BIOS; assume Admin status, not the noisy script
3. FORENSIC MODE (3A)   if the Rootkit refuses to terminate, do NOT force a high-stress extraction;
                        quarantine it in the journal and schedule Forensic Repair only at a safe,
                        down-regulated Mode 0x01 baseline
```

### 0x06 Permission Denied (`PERMISSION_DENIED`)

- **Symptom:** The nauseating fear of being a fraud whose Admin privileges are about to be revoked (imposter syndrome).
- **Root cause:** A Legacy Authentication Script: current credentials are verified against an outdated database ("I am just a clueless kid") instead of the deployed track record.

```text
1. UPDATE CREDENTIALS   review shipped projects and survival logs; force the kernel to recognize earned root access
2. SUDO COMMAND         say out loud: "I am the Sudo Admin. I wrote the code. My access is valid."
```

### 0x07 Input Flood (`DDOS_ATTACK`)

- **Symptom:** Paralyzing brain fog; three hours lost to scrolling, bloated with garbage data and incapable of action.
- **Root cause:** A DDoS attack on active attention: algorithmic feeds slam open ports with outrage packets.

```text
1. AIR-GAP PROTOCOL   sever the connection instantly; move the device to another room
2. SYSTEM FLUSH       walk outside and stare at the horizon; let the RAM buffer discharge before the next input
```

### 0x08 Benchmark Failure (`BENCHMARK_FAILURE`)

- **Symptom:** A sudden, severe drop in self-worth after scrolling another node's curated highlight reel (comparison trap).
- **Root cause:** A logic error: comparing your own messy backend source code with another node's filtered, rendered frontend GUI.

```text
1. TERMINATE COMPARISON   a polished feed is not an unredacted system log
2. RETURN TO LOCALHOST    is the local system running cleaner than yesterday? That is the only valid benchmark
```

### 0x09 Hardware Constraint (`UNRESOLVABLE_EXCEPTION`)

- **Symptom:** Exhaustion from trying to "fix" a pain point that never responds to patches; feeling like a failure because mindfulness or productivity hacks cannot cure it.
- **Root cause:** A permanent physical limitation, chronic illness, disability, profound clinical grief or an unchangeable environment. The system works exactly as it must under extreme, permanent constraints.

```text
EXECUTE NOT_PATCHABLE
1. CEASE OPTIMIZATION     stop debugging a permanent hardware reality; drop the demand for a cure
2. GRACEFUL DEGRADATION   shift from optimization to accommodation: harm reduction, daily battery management,
                          radical acceptance of the current specs
3. TIER-0 SUPPORT         route to out-of-band support (clinical care, caregivers, community),
                          not lone-wolf self-improvement
```

## 3. Incident Response Matrix

Source: Directory F.10 of the book.

<!-- verbatim: Directory F.10 -->
| Symptom | Diagnosis | Recommended utility |
| --- | --- | --- |
| Anxiety | High System Heat | Box Breathing (Voltage Regulation) |
| Depression | System Shutdown / Brownout | Behavioral Activation (Forced Execute) |
| Anger | Security Breach / Logic Bomb | The Viktor Frankl Buffer (Latency Control) |
| Confusion | Logic Jam | Divination / Archetypal Mapping (Chapter 11.1) |
| Loneliness | Port Closure / Network Isolation | The Love Protocol Handshake (Chapter 9.2) |
| Grief / Illness | Permanent Hardware Constraint | Execute `NOT_PATCHABLE` (Graceful Degradation / Tier 0) |

## 4. Error Codes

All nine codes carry their hex in [`errors/registry.json`](../../errors/registry.json); see also the table in [`errors/README.md`](../../errors/README.md#directory-f-incident-codes). Codes whose concept a chapter defines first keep that module as owner (`THERMAL_THROTTLING` 03, `SOCIAL_LAG` 09, `HESITATION_BUG` 10, `PERMISSION_DENIED` 01, `DDOS_ATTACK` 07); the other four are defined by Directory F (`module: null`).

## 5. Related Modules

- [01-identity-bios](../../modules/01-identity-bios/): Identity BIOS (Sudo Admin, `STATUS=LEARNER`)
- [02-operating-system](../../modules/02-operating-system/): Operating System (Unit Test, Graceful Degradation)
- [03-processor](../../modules/03-processor/): Processor (Thermal Throttling, Frankl Buffer)
- [04-security-auditing](../../modules/04-security-auditing/): Security Auditing (Ego Rootkit, Forensic Repair)
- [07-social-api](../../modules/07-social-api/): Social API (SLA tiers, DDoS)
- [09-love-protocol](../../modules/09-love-protocol/): Love Protocol (External Safety Gate, handshake)
- [10-hardened-infrastructure](../../modules/10-hardened-infrastructure/): Hardened Infrastructure (Hesitation Bug, 5-Second Rule)

## 6. Simulator

[Instance 03 "The Data Lake"](https://www.dreammachine.systems/vm3): a live Root Cause Analysis that sweeps the Subconscious Data Lake for the anomalies of this directory (F.0).
