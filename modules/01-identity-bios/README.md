---
id: 01-identity-bios
title: Identity BIOS
book_ref: "CH 1 (Identity BIOS: Base Firmware)"
spec_status: STABLE
build: v0.9.5
depends_on: []
audit: https://www.dreammachine.systems/audit
---

# Module 01: Identity BIOS

**Layer 0. Every other module inherits its permissions.**

## 1. Abstract

The Identity BIOS is the base firmware of a Living Node: the instruction set that defines survival parameters before any higher software runs. If it is corrupted, no software patch holds. The module replaces inherited victim-mode logic with Radical Responsibility, replaces the monolithic "CEO" self with a multi-agent model, and sets the worldview toggle before the OS boots.

## 2. Core Logic

- **Radical Responsibility:** Fault and responsibility are separate variables. A node is responsible for processing the aftermath and its own responses, not for the fault. It never means staying in or out-debugging active abuse, coercion or violence (CH 1.4.2).
- **Sudo Admin vs. End-User:** The node operates as Sudo Admin of its own system, not as a passive End-User waiting for rescue. Therapy runs with Root Access, not instead of it (CH 1.4).
- **Multi-Agent Architecture:** There is no single executive "CEO" in the skull. Willpower-based control crashes the system; the patch is observation from the System Hypervisor (CH 1.4.3).
- **Latency Defense:** The buffer between stimulus and response is a cybersecurity control, not only emotional regulation. Target: ~500 ms delay (CH 1.3.1, operationalised in module 03).
- **Identity Lock "Learner":** Mistakes return `Status 202: Processing`, not a fatal crash (CH 1.6).
- **Einstein Toggle:** The primary binary switch of the BIOS. `Hostile` spends CPU on threat detection; `Friendly` is hardcoded manually (CH 1.7).
- **Stoic Kernel:** Dichotomy of Control (0 % write access to external inputs), Amor Fati (a crash is telemetry for the next update), Inner Citadel (air-gapped partition under polycrisis) (CH 1.8).

## 3. Procedures

### 3.1 Root Directory Audit

1. Decompile the crashed drive: locate the misconfigured ACLs (open ports, suppressed local needs).
2. Classify inherited defaults as Ancestral Legacy Debt, not as personal defects.
3. Separate fault from responsibility. Take responsibility for the response only.

### 3.2 Base-Level Configuration

```text
IF environment == active abuse OR coercion OR violence
    => Radical Responsibility does not apply; route to safety and external support
ELSE
    SET control_level   = SUDO_ADMIN
    SET identity        = LEARNER
    SET einstein_toggle = FRIENDLY
    SET latency_target  = 500ms
```

## 4. System Mapping

Source: CH 1.9 of the book.

| Component | Legacy configuration (deprecated) | Dream Machine OS (patched) |
| --- | --- | --- |
| Control Level | End-User (Victim Mode / Waiting for Rescue) | Sudo Admin (Radical Responsibility / Carrying the Toolkit) |
| Backend Architecture | CEO Bug (Monolithic Self / Willpower) | Multi-Agent Network (System Hypervisor / Pure Awareness) |
| Bandwidth Limits | Delusional Bio-hacking (100% Control) | 10-Bit Write Access (Conscious Buffer) |
| Worldview Switch | Undefined / Default Hostile | Einstein Toggle (Friendly Universe) |
| Reaction Time | Instant Reaction (Triggered / Flinching) | Optimized Latency (Frankl Buffer / Pause) |
| Algorithmic Defense | Deterministic Execution | Latency Defense (Target 500ms Delay) |
| Conflict Handling | System Crash / Fight Scripts | Logic-Based Error Handling |
| Data Integrity | Ancestral Debt (Inherited Garbage) | Refactored Code (Clean Signal) |
| Identity Lock | Fixed (Brittle Roles / Static) | Dynamic (Learner / Unfolding) |
| Overall Uptime | Fragile / Prone to Burnout | Hardened / Chaos-Resistant |

## 5. Error Codes

Codes are defined once in [`errors/registry.json`](../../errors/registry.json). This module owns:

| Code | Name | Book | Definition |
| --- | --- | --- | --- |
| `ANCESTRAL_LEGACY_DEBT` | Ancestral Legacy Debt | CH 1.2 | [glossary](../../glossary/ancestral-legacy-debt.md) |
| `CEO_BUG` | CEO Bug | CH 1.4.3 | [glossary](../../glossary/ceo-bug.md) |
| `CULTURAL_TRANCE` | Cultural Trance | CH 1 | [glossary](../../glossary/cultural-trance.md) |
| `KERNEL_PANIC` | Kernel Panic | CH 1.1 | [glossary](../../glossary/kernel-panic.md) |
| `PERMISSION_DENIED` | Permission Denied (Imposter Syndrome) (`0x06`) | Directory F (F.6) | Current credentials are verified against an outdated database instead of the deployed track record. |
| `SMALL_LIFE_THROTTLE` | Small Life Throttle | CH 1.5 | [glossary](../../glossary/small-life-throttle.md) |
| `VICTIM_MODE` | Victim Mode | CH 1.4.1 | [glossary](../../glossary/victim-mode.md) |

Also relevant here: `CALCULATION_FALLACY` (08), `EGO_ROOTKIT` (04), `TRAUMA` (04).

## 6. Dependencies

None. Every other module depends on this one.

## 7. Evidence

Each footnoted claim of CH 1 has an audit log: claim, research query, evidence summary and tier. Open one at `https://www.dreammachine.systems/audit/<section>`. To add or challenge a source, open an [Evidence issue](https://github.com/dream-machine-systems/dream-machine-os/issues/new?template=evidence.yml) with the section ID.

| Section | Tier | Primary sources |
| --- | --- | --- |
| [`sec1-1`](https://www.dreammachine.systems/audit/sec1-1) | `CONSENSUS` | Turner et al., 2020, Psychoneuroendocrinology; O'Connor et al., 2020, Annual Review of Psychology |
| [`sec1-2`](https://www.dreammachine.systems/audit/sec1-2) | `EXPERIMENTAL` | Yehuda et al., 2016, Biological Psychiatry; El-Khalil et al., 2025, BMC Psychology |
| [`sec1-3_1`](https://www.dreammachine.systems/audit/sec1-3_1) | `CONSENSUS` | Jawahar et al., 2015, Clinical Epigenetics; Peña, 2025, Neuropsychopharmacology |
| [`sec1-3_2`](https://www.dreammachine.systems/audit/sec1-3_2) | `CONSENSUS` | Albares et al., 2014, Human Brain Mapping; Korolczuk et al., 2025, PLOS ONE |
| [`sec1-4-1`](https://www.dreammachine.systems/audit/sec1-4-1) | `CONSENSUS` | Castillo et al., 2026, International Journal of Environmental Research and Public Health; Papoulidi & Maniadaki, 2025, European Journal of Investigation in Health, Psychology and Education |
| [`sec1-4-2`](https://www.dreammachine.systems/audit/sec1-4-2) | `CONSENSUS` | Rogerson et al., 2023, Psychoneuroendocrinology; Caplin et al., 2021, Psychoneuroendocrinology |
| [`sec1-4-3`](https://www.dreammachine.systems/audit/sec1-4-3) | `CONSENSUS` | Menon, 2023, Neuron; Bertolero et al., 2018, Nature Human Behaviour |
| [`sec1-5`](https://www.dreammachine.systems/audit/sec1-5) | `CONSENSUS` | Tibbetts et al., 2022, Philosophical Transactions of the Royal Society B; Keltner et al., 1997, Aggressive Behavior |
| [`sec1-6`](https://www.dreammachine.systems/audit/sec1-6) | `CONSENSUS` | Schroder et al., 2014, Biological Psychology; Yeager et al., 2022, Nature |
| [`sec1-7`](https://www.dreammachine.systems/audit/sec1-7) | `CONSENSUS` | Graham, 2024, SSM - Population Health; Daniels et al., 2023, Journal of Health and Social Behavior |
| [`sec1-8-1`](https://www.dreammachine.systems/audit/sec1-8-1) | `EMERGING` | Zheng & Meister, 2024, Neuron |
| [`sec1-8-2`](https://www.dreammachine.systems/audit/sec1-8-2) | `CONSENSUS` | Eisma & Stroebe, 2020, Behavior Therapy; Keser & Boelen, 2025, BMC Psychology |

## 8. Human Debug Deck

Cards whose theory section compiles into this module ([`deck/cards.json`](../../deck/cards.json)):

[`core-00` GUEST_USER](https://www.dreammachine.systems/deck/core/guest-user/), [`core-01` SUDO_ADMIN](https://www.dreammachine.systems/deck/core/sudo-admin/), [`core-08` THE_FRANKL_BUFFER](https://www.dreammachine.systems/deck/core/the-frankl-buffer/), [`cpu-02` HANDSHAKE: LATENCY_CALIBRATION](https://www.dreammachine.systems/deck/cpu/handshake-latency-calibration/), [`cpu-11` GUEST_USER](https://www.dreammachine.systems/deck/cpu/guest-user/), [`sys-14` LEAD_ARCHITECT](https://www.dreammachine.systems/deck/sys/lead-architect/).
