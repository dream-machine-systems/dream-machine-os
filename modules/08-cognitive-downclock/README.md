---
id: 08-cognitive-downclock
title: Cognitive Downclock
book_ref: "CH 8 (Cognitive Downclock: 10 Bits vs. 1 Billion)"
spec_status: DRAFT
build: v0.9.5
depends_on: [01-identity-bios]
audit: https://www.dreammachine.systems/audit
---

# Module 08: Cognitive Downclock

**The conscious processor is the primary computational bottleneck.**

## 1. Abstract

The sensory periphery of a human node ingests on the order of 1 billion bits per second. Conscious processing runs at roughly 10 bits per second. Most communication crashes are buffer overflows: one node pushes a high-resolution emotional payload through a low-bandwidth logic gate.

## 2. Core Logic

The effective transmission rate is capped by the conscious gate C:

```math
T_{eff} = \min(S_{input}, C),\quad C \approx 10\ \text{bit/s}
```

Two consequences:

- **Zip-File Error:** Language compresses state lossily. Words alone cannot carry the payload.
- **Carrier Wave:** Presence, tone and timing carry the bandwidth that words cannot (exformation).

## 3. Procedure: Presence-Driven Handshake

Before transmitting high-value data:

1. **Sync check:** Is the receiving node present?
2. **Bandwidth allocation:** Is its conscious gate free of background processes?
3. **ACK/NACK:** The receiver confirms readiness before the payload is sent.

## 4. Error Codes

| Code | Trigger |
| --- | --- |
| `OVERFLOW_ERROR` | Emotional payload exceeds the conscious gate (blame pushed through logic) |
| `LATENCY_SPIKE` | Processing attempted while the BIOS is in Reactive Mode |
| `ZIP_FILE_ERROR` | Meaning lost through verbal compression |

## 5. Evidence

| Claim | Tier | Source |
| --- | --- | --- |
| Conscious throughput ~10 bit/s vs. ~10^9 bit/s sensory intake | EMERGING | Zheng & Meister, 2024, *Neuron* ("The unbearable slowness of being") |

Full audit: [dreammachine.systems/audit](https://www.dreammachine.systems/audit), section `sec1-8-1`.
