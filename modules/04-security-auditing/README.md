---
id: 04-security-auditing
title: Security Auditing (Shadow Work)
book_ref: "CH 4 (Security Auditing: Shadow Work)"
spec_status: DRAFT
build: v0.9.5
depends_on: [03-processor, 06-hardware-calibration]
audit: https://www.dreammachine.systems/audit
---

# Module 04: Security Auditing (Shadow Work)

**A hardware fault cannot be patched with a cognitive software update.**

## 1. Abstract

Security Auditing decrypts quarantined legacy code. The Shadow is a set of emergency patches installed during the Alpha Build to survive a system shock. They keep running as Logic Bombs, the Ego Firewall and Projection. The module processes them somatically, not intellectually.

## 2. Core Logic

- **Required dependencies:** Frankl Buffer (module 03) and Hardware Calibration (module 06, minimum SEC 6.2 breath protocols and SEC 6.6.2 somatic discharge). Without them, abort (CH 4.0).
- **Data Lake vs. Relational Database:** The persona is the searchable database; the Shadow lives in the unstructured Data Lake (CH 4.1.1).
- **Deprecation, not deletion:** `rm -rf` on pain is not supported. Legacy patches are deprecated, not wiped (CH 4.1.2).
- **Ego Firewall:** Rigid rules that block incoming data and drain resources by constant self-monitoring (CH 4.2).
- **Projection:** A display mapping error that overlays internal threats onto external nodes; algorithms amplify it (Predictive Exploitation) (CH 4.3).
- **Analog Override:** The IT metaphors make pain observable. They are a map, not the territory (CH 4.5).

## 3. Procedures

### 3.1 Somatic Refactoring Protocol

Theory only at this layer. Execution is routed to the Deployment Runbook; do not run it on bare metal (CH 4.4).

1. **Catching the Ping (Intrusion Detection):** notice the trigger; insert the ~500 ms latency buffer.
2. **Hardware Localization (Somatic Scan):** drop the story, locate the sensation in the chassis.
3. **Somatic Compile:** breathe into the sensation without judging or ejecting into narrative.
4. **State Change:** let the energy transform; treat the Landauer analogy as a phenomenological heuristic only.

## 4. System Mapping

Source: CH 4.6 of the book.

| Component | Legacy configuration (deprecated) | Dream Machine OS (patched) |
| --- | --- | --- |
| Trauma Storage | Unstructured Data Lake | Integrated Data (Permissions Updated) |
| Processing Method | Intellectualization (Endless thinking) | Somatic Compilation (Physical processing) |
| Reaction Mode | Logic Bombs (Irrational outbursts) | Informed Response (Sudo Control) |
| Social Perception | Projection (Home Cinema) | Clarity (Seeing what is actually there) |
| Vitality Level | Exhausted (Energy trapped in defense) | High (Vitality Released) |
| Energy Usage | Massive (Maintaining the Ego Firewall / Repressing the Data Lake) | Optimized (Reclaimed Resources) |

## 5. Error Codes

Codes are defined once in [`errors/registry.json`](../../errors/registry.json). This module owns:

| Code | Name | Book | Definition |
| --- | --- | --- | --- |
| `EGO_FIREWALL` | Ego Firewall | CH 4.2 | [glossary](../../glossary/ego-firewall.md) |
| `EGO_ROOTKIT` | Ego Rootkit | CH 4; CH 18.1 | [glossary](../../glossary/ego-rootkit.md) |
| `LOGIC_BOMB` | Logic Bomb | CH 4.6 | [glossary](../../glossary/logic-bomb.md) |
| `PREDICTIVE_EXPLOITATION` | Predictive Exploitation | CH 4.3.1 | [glossary](../../glossary/predictive-exploitation.md) |
| `PROJECTION` | Projection | CH 4.3 | [glossary](../../glossary/projection.md) |
| `TRAUMA` | Trauma | CH 4.1 | [glossary](../../glossary/trauma.md) |

Also relevant here: `CULTURAL_TRANCE` (01), `LEGACY_SCRIPTS` (02), `VICTIM_MODE` (01).

## 6. Dependencies

- [03-processor](../03-processor/): Processor (Consciousness Management)
- [06-hardware-calibration](../06-hardware-calibration/): Hardware Calibration

## 7. Evidence

Each footnoted claim of CH 4 has an audit log: claim, research query, evidence summary and tier. Open one at `https://www.dreammachine.systems/audit/<section>`. To add or challenge a source, open an [Evidence issue](https://github.com/dream-machine-systems/dream-machine-os/issues/new?template=evidence.yml) with the section ID.

| Section | Tier | Primary sources |
| --- | --- | --- |
| [`sec4-1-1_1`](https://www.dreammachine.systems/audit/sec4-1-1_1) | `CONSENSUS` | Seligowski et al., 2015, Cognitive Behaviour Therapy; Littleton et al., 2007, Journal of Traumatic Stress |
| [`sec4-1-1_2`](https://www.dreammachine.systems/audit/sec4-1-1_2) | `CONSENSUS` | Milad et al., 2009, Biological Psychiatry; Garfinkel et al., 2014, The Journal of Neuroscience |
| [`sec4-2_1`](https://www.dreammachine.systems/audit/sec4-2_1) | `CONSENSUS` | Vohs et al., 2005, Journal of Personality and Social Psychology; Klotz et al., 2018, Journal of Applied Psychology |
| [`sec4-2_2`](https://www.dreammachine.systems/audit/sec4-2_2) | `CONSENSUS` | Taber & Lodge, 2006, American Journal of Political Science; Hart et al., 2009, Psychological Bulletin |
| [`sec4-3_1`](https://www.dreammachine.systems/audit/sec4-3_1) | `CONSENSUS` | Rauch et al., 2006, Biological Psychiatry; Liberzon & Abelson, 2016, Neuron |
| [`sec4-3_2`](https://www.dreammachine.systems/audit/sec4-3_2) | `CONSENSUS` | Keller et al., 2021, Frontiers in Psychiatry; Denny et al., 2015, Psychological Science |
| [`sec4-3-1`](https://www.dreammachine.systems/audit/sec4-3-1) | `CONSENSUS` | Morey et al., 2015, Translational Psychiatry; Rauch et al., 2006, Biological Psychiatry |
| [`sec4-4-1`](https://www.dreammachine.systems/audit/sec4-4-1) | `EMERGING` | Korolczuk et al., 2025, PLOS ONE; Herman et al., 2019, Psychopharmacology |
| [`sec4-4-3_1`](https://www.dreammachine.systems/audit/sec4-4-3_1) | `CONSENSUS` | Prengel et al., 1992, Critical Care Medicine; Heradstveit et al., 2023, Resuscitation |
| [`sec4-4-3_2`](https://www.dreammachine.systems/audit/sec4-4-3_2) | `CONSENSUS` | Pascoe et al., 2017, Psychoneuroendocrinology; Lindsay et al., 2017, Psychoneuroendocrinology |
| [`sec4-4-4`](https://www.dreammachine.systems/audit/sec4-4-4) | `CONSENSUS` | Asahina et al., 2015, Clinical Autonomic Research; Bigalke & Carter, 2025, Journal of Applied Physiology |

## 8. Human Debug Deck

Cards whose theory section compiles into this module ([`deck/cards.json`](../../deck/cards.json)):

[`core-10` RUNTIME_ENTROPY](https://www.dreammachine.systems/deck/core/runtime-entropy/), [`core-11` THE_UNIT_TEST](https://www.dreammachine.systems/deck/core/the-unit-test/), [`core-12` SYSTEM_IDLE_PROCESS](https://www.dreammachine.systems/deck/core/system-idle-process/), [`core-15` THE_EGO_ROOTKIT](https://www.dreammachine.systems/deck/core/the-ego-rootkit/), [`core-16` KERNEL_PANIC](https://www.dreammachine.systems/deck/core/kernel-panic/), [`core-17` SAFE_MODE_REBOOT](https://www.dreammachine.systems/deck/core/safe-mode-reboot/), [`core-18` FORENSIC_MEMORY_DUMP](https://www.dreammachine.systems/deck/core/forensic-memory-dump/), [`cpu-06` SAFE_MODE: DISASTER_RECOVERY](https://www.dreammachine.systems/deck/cpu/safe-mode-disaster-recovery/), [`net-06` SAFE_MODE: DISASTER_RECOVERY](https://www.dreammachine.systems/deck/net/safe-mode-disaster-recovery/), [`sys-01` INIT: LOGIC_BOOT](https://www.dreammachine.systems/deck/sys/init-logic-boot/), [`sys-02` BRANCH: COGNITIVE_DEADLOCK](https://www.dreammachine.systems/deck/sys/branch-cognitive-deadlock/), [`sys-04` CONTAINER: SYSTEM_SUSPEND](https://www.dreammachine.systems/deck/sys/container-system-suspend/), [`sys-06` SAFE_MODE: DISASTER_RECOVERY](https://www.dreammachine.systems/deck/sys/safe-mode-disaster-recovery/), [`sys-07` RCA: LOGIC_BYPASS](https://www.dreammachine.systems/deck/sys/rca-logic-bypass/), [`sys-08` CRON_JOB: INFINITE_LOOP](https://www.dreammachine.systems/deck/sys/cron-job-infinite-loop/), [`sys-10` EOF: KERNEL_PANIC](https://www.dreammachine.systems/deck/sys/eof-kernel-panic/), [`disk-04` CONTAINER: ASSET_QUARANTINE](https://www.dreammachine.systems/deck/disk/container-asset-quarantine/), [`disk-05` FAULT: VOLTAGE_DROP](https://www.dreammachine.systems/deck/disk/fault-voltage-drop/).
