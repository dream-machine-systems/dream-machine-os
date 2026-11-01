---
id: 03-processor
title: Processor (Consciousness Management)
book_ref: "CH 3 (Processor: Consciousness Management)"
spec_status: DRAFT
build: v0.9.5
depends_on: [01-identity-bios, 02-operating-system]
audit: https://www.dreammachine.systems/audit
---

# Module 03: Processor (Consciousness Management)

**Environmental I/O cannot be throttled. Local routing can.**

## 1. Abstract

The Processor module tunes the mind as compute engine. The conscious foreground thread runs at ~10 bit/s; peripheral awareness monitors the rest. The module stabilises attention (Shamatha) before deep audits (Vipassana), parses live data with the See / Hear / Feel API, and inserts the Viktor Frankl Buffer between stimulus and response.

## 2. Core Logic

- **Attention vs. Awareness:** Foreground thread (spotlight, 10 bit/s) vs. background monitor (floodlight). Under threat the spotlight collapses (CH 3.1).
- **Transceiver Architecture:** The brain is modelled as a transceiver, not a standalone hard drive (CH 3.2). Model, not a clinical claim.
- **Safe Mode before Deep Surgery:** Stabilise the hardware before heavy configuration changes (retreats, psychedelics) (CH 3.3.1).
- **Shamatha Cooling System:** Sati, Samadhi, Piti, Passaddhi, Upekkha (CH 3.3.2).
- **Suffering = Pain x Resistance:** A mnemonic heuristic, not an algebraic identity. Pain is real; resistance is the variable under control (CH 3.4.2).
- **Viktor Frankl Buffer:** System Latency Buffer, target ~500 ms. Graceful Yielding when the limbic payload exceeds the 10-bit navigator (CH 3.5).
- **Single-Threaded Throughput:** Multitasking is context switching. Deep work runs in 90-120 minute sprints (CH 3.6).
- **Flow Logic Gate:** Challenge slightly above skill; Headless Mode shuts down the self-monitoring GUI (CH 3.7).
- **Utility Virus Failsafe:** Not every cycle needs ROI. Sandbox Mode runs unmetered (CH 3.9).

## 3. Procedures

### 3.1 CPU Tuning (TMI-style)

1. **Stabilise the primary thread:** attention on the breath at the nostrils. On drift, withdraw execution permission and redirect, without self-judgment.
2. **Increase resolution:** notice the granularity of the breath.
3. **Intrusion Detection System:** build a metacognitive monitor that catches thoughts before they execute.

### 3.2 Packet Sniffing (See / Hear / Feel)

Label each incoming packet as `SEE`, `HEAR` or `FEEL` (image, inner talk, body sensation). Labelling an unreadable stream reduces load.

### 3.3 Frankl Buffer

```text
ON stimulus:
    hold ~500ms
    IF limbic payload > navigator capacity => Graceful Yielding (Sudo Drop), no force
    ELSE choose response
```

### 3.4 Flow Logic Gate

```text
challenge >> skill  => Anxiety (CPU overload)
skill >> challenge  => Boredom (idle)
challenge ~ skill+  => Flow channel
```

## 4. System Mapping

Source: CH 3.10 of the book.

| Component | Legacy configuration (deprecated) | Dream Machine OS (patched) |
| --- | --- | --- |
| Attention | Hijacked by external interrupts (Scattered) | Primary Foreground Thread (Focused Spotlight) |
| Awareness | Collapsed bandwidth / Tunnel vision during stress | Background Monitor (Peripheral Floodlight) |
| Hardware | Standalone Local Hard Drive (Isolated) | Transceiver Antenna (Non-Local Cloud Interface) |
| Shamatha | Chronic Overheating / Kernel Panics | Baseline Cooling System (Safe Mode / Anesthesia) |
| Vipassana | Blind belief in the rendered reality | Deep Code Audit (Root-level GUI deletion) |
| Sati | Unmonitored execution of survival scripts | Intrusion Detection System (Real-Time Monitoring) |
| Sub-Minds | Internal CPU wars / Unmanaged conflicts | Process Synchronization (Background alignment) |
| Unified Mindfulness | Tangled, overwhelming emotional payloads | Real-Time Packet Sniffing (See/Hear/Feel API) |
| Shinzen Heuristic | High Friction (Maximizing Resistance) | Frictionless Logging (Accepting raw data) |
| Frankl Buffer | Zero Latency (Automatic Trigger-Response) | System Latency Buffer (Manual Choice Override) |
| Deep Work | Severe Context-Switching (RAM Thrashing) | Single-Threaded Mode (Zero Brain Fog) |
| Flow Channel | High-latency self-monitoring (GUI active) | Hardware-Native Execution (GUI Bypassed) |
| Default Mode Network | Overactive baseline / Chronic time-traveling | Regulated Ego Infrastructure (Idle management) |
| GUI Shutdown | Trapped inside the 10-bit rendering engine | Headless Mode (Maximum Bandwidth / Ego Offline) |
| Passion Loop | Initial Boot Error (Waiting for passion to start) | Compiled Feedback Loop (Mastery generates passion) |
| Utility Virus | Suffocating the system with mandatory ROI | Quarantined (Allowing unstructured execution) |
| Sandbox Mode | Blocked by productivity malware | Unmetered Bandwidth (Autotelic joy / Easter Eggs) |

## 5. Error Codes

Codes are defined once in [`errors/registry.json`](../../errors/registry.json). This module owns:

| Code | Name | Book | Definition |
| --- | --- | --- | --- |
| `COLLAPSED_AWARENESS` | Collapsed Awareness | CH 3.1.1 | A panicked background process hijacks the primary thread; the spotlight locks onto one threat vector and peripheral awareness goes dark. |
| `CONTEXT_SWITCHING_PENALTY` | Context-Switching Penalty | CH 3.6 | Multitasking is serial context switching; every switch terminates one thread and costs boot time. |
| `FEAR_BLOCKADE` | Fear Blockade | CH 3.1.2 | Under stress, fear or performance pressure the Boardroom (frontal lobe) is throttled. |
| `RESISTANCE` | Resistance | CH 3.4.2 | [glossary](../../glossary/resistance.md) |
| `THERMAL_THROTTLING` | Thermal Throttling (Burnout) (`0x01`) | CH 3.4.2; Directory F (F.1) | [glossary](../../glossary/thermal-throttling.md) |
| `UTILITY_VIRUS` | Utility Virus | CH 3.9 | [glossary](../../glossary/utility-virus.md) |

Also relevant here: `DDOS_ATTACK` (07), `EGO_ROOTKIT` (04), `KERNEL_PANIC` (01).

## 6. Dependencies

- [01-identity-bios](../01-identity-bios/): Identity BIOS
- [02-operating-system](../02-operating-system/): Operating System (Narrative Layer)

## 7. Evidence

Each footnoted claim of CH 3 has an audit log: claim, research query, evidence summary and tier. Open one at `https://www.dreammachine.systems/audit/<section>`. To add or challenge a source, open an [Evidence issue](https://github.com/dream-machine-systems/dream-machine-os/issues/new?template=evidence.yml) with the section ID.

| Section | Tier | Primary sources |
| --- | --- | --- |
| [`sec3-0`](https://www.dreammachine.systems/audit/sec3-0) | `CONSENSUS` | Ottaviani et al., 2016, Psychological Bulletin; Clancy et al., 2020, Health Psychology Review |
| [`sec3-1`](https://www.dreammachine.systems/audit/sec3-1) | `CONSENSUS` | Mashour et al., 2020, Neuron; Marois & Ivanoff, 2005, Trends in Cognitive Sciences |
| [`sec3-1-2`](https://www.dreammachine.systems/audit/sec3-1-2) | `CONSENSUS` | Arnsten, 2015, Nature Neuroscience; Qin et al., 2009, Biological Psychiatry |
| [`sec3-3-1`](https://www.dreammachine.systems/audit/sec3-3-1) | `EMERGING` | Cullen et al., 2021, PLOS ONE; Britton et al., 2017, Behaviour Research and Therapy |
| [`sec3-3-2`](https://www.dreammachine.systems/audit/sec3-3-2) | `CONSENSUS` | Zou et al., 2018, Journal of Clinical Medicine; Pascoe et al., 2017, Psychoneuroendocrinology |
| [`sec3-4-1`](https://www.dreammachine.systems/audit/sec3-4-1) | `CONSENSUS` | Quadt et al., 2021, EClinicalMedicine; Ginty et al., 2021, British Journal of Psychology |
| [`sec3-4-2`](https://www.dreammachine.systems/audit/sec3-4-2) | `CONSENSUS` | Veehof et al., 2016, Cognitive Behaviour Therapy; Ye et al., 2024, PLOS ONE |
| [`sec3-5`](https://www.dreammachine.systems/audit/sec3-5) | `CONSENSUS` | Creswell et al., 2007, Psychosomatic Medicine; Ironside et al., 2019, JAMA Psychiatry |
| [`sec3-5-2`](https://www.dreammachine.systems/audit/sec3-5-2) | `CONSENSUS` | Schäflein et al., 2018, European Journal of Psychotraumatology; Heekerens et al., 2023, Psychological Trauma |
| [`sec3-6`](https://www.dreammachine.systems/audit/sec3-6) | `CONSENSUS` | Szameitat, 2022, Frontiers in Psychology; Gergelyfi et al., 2021, NeuroImage |
| [`sec3-7-2`](https://www.dreammachine.systems/audit/sec3-7-2) | `CONSENSUS` | Ulrich et al., 2014, NeuroImage; Rosen et al., 2024, Neuropsychologia |
| [`sec3-8-1`](https://www.dreammachine.systems/audit/sec3-8-1) | `CONSENSUS` | Vansteenkiste et al., 2005, Child Development; Mrazek et al., 2018, Journal of Experimental Social Psychology |
| [`sec3-9`](https://www.dreammachine.systems/audit/sec3-9) | `CONSENSUS` | Sianoja et al., 2018, Journal of Occupational Health Psychology; Hu et al., 2020, Journal of Happiness Studies |

## 8. Human Debug Deck

Cards whose theory section compiles into this module ([`deck/cards.json`](../../deck/cards.json)):

[`core-07` MOMENTUM_PROTOCOL](https://www.dreammachine.systems/deck/core/momentum-protocol/), [`core-19` HEADLESS_EXECUTION](https://www.dreammachine.systems/deck/core/headless-execution/), [`cpu-01` INIT: KINETIC_START](https://www.dreammachine.systems/deck/cpu/init-kinetic-start/), [`cpu-03` COMPILE: ALPHA_BUILD](https://www.dreammachine.systems/deck/cpu/compile-alpha-build/), [`cpu-04` CONTAINER: AIR_GAPPED_SPRINT](https://www.dreammachine.systems/deck/cpu/container-air-gapped-sprint/), [`cpu-05` FAULT: CONTEXT_SWITCHING_PENALTY](https://www.dreammachine.systems/deck/cpu/fault-context-switching-penalty/), [`cpu-07` RCA: BOTTLENECK_AUDIT](https://www.dreammachine.systems/deck/cpu/rca-bottleneck-audit/), [`cpu-08` CRON_JOB: KAIZEN_LOOP](https://www.dreammachine.systems/deck/cpu/cron-job-kaizen-loop/), [`cpu-12` UNTHROTTLED_EXEC](https://www.dreammachine.systems/deck/cpu/unthrottled-exec/), [`cpu-13` SYS_ADMIN](https://www.dreammachine.systems/deck/cpu/sys-admin/), [`sys-11` GUEST_USER](https://www.dreammachine.systems/deck/sys/guest-user/), [`disk-03` COMPILE: INFRASTRUCTURE_BUILD](https://www.dreammachine.systems/deck/disk/compile-infrastructure-build/), [`disk-07` RCA: THROUGHPUT_AUDIT](https://www.dreammachine.systems/deck/disk/rca-throughput-audit/), [`disk-08` CRON_JOB: MVM_ROUTINE](https://www.dreammachine.systems/deck/disk/cron-job-mvm-routine/), [`disk-11` GUEST_USER](https://www.dreammachine.systems/deck/disk/guest-user/).
