---
id: 07-social-api
title: Social API
book_ref: "CH 7 (Standardizing Connection: Social API)"
spec_status: STABLE
build: v0.9.5
depends_on: [01-identity-bios, 03-processor]
audit: https://www.dreammachine.systems/audit
---

# Module 07: Social API

**An unsecured port is an architectural failure, not empathy.**

## 1. Abstract

The Social API defines how a node interacts with other nodes: the cell membrane of boundaries, tiered Service Level Agreements, an explicit README, handshake protocols and ITIL-style incident and problem management. Its main threat is not a single toxic contact but algorithmic domestication of inbound attention.

## 2. Core Logic

- **Cell Membrane:** Boundaries let the node meet dysregulated relatives and colleagues without importing their state. The membrane is semi-permeable, not a brick wall: it lets regulated connection in and keeps toxins out; prolonged isolation degrades the hardware too (CH 7.0, 7.1). `403 Forbidden`: the power of "No" is a security policy, not an insult; it keeps bandwidth for the Tier 1 nodes (CH 7.1).
- **Strict Input Sanitization:** Predictive algorithms amplify outrage and feed the Ego Rootkit. Letting an algorithm curate inbound social and political traffic hands Root Access to a hostile botnet; choose raw, uncurated sources deliberately (CH 7.1.1).
- **Service Level Agreements:** Quality of service per tier, not walls (CH 7.2). Tier 3 limits response time and bandwidth; it never licenses treating a person as an object.
- **README.md:** Explicit documentation of how to interact with the node (CH 7.3).
- **Handshake:** `SYN`/`ACK` bids for connection, bandwidth check before heavy payloads, protocol verification (vent vs. fix) (CH 7.4.1-7.4.3).
- **Subject-Object Rule:** Every node is authenticated as a sovereign subject; manipulation is a security violation. Development and connection only compile at eye level: invite, encourage and inspire instead of reprogramming another node by force (CH 7.4.4).
- **Data Serialization:** Send in the recipient's format (love languages) (CH 7.4.5).
- **Social ITIL:** Incident management restores service first; problem management runs the root-cause analysis later (CH 7.5).

## 3. Procedures

### 3.1 SLA Tiers

| Tier | Nodes | SLA / QoS | Protocol |
| --- | --- | --- | --- |
| 1 (Core) | Partner, children | Real-time, low latency | Total presence |
| 2 (Authenticated) | Close friends, family | Standard, 4-12 hours | Compassion, support |
| 3 (Public) | Work, acquaintances | Best effort, 24-48 hours | Professional empathy, metered bandwidth |

### 3.2 Protocol Verification

```text
BEFORE payload:
    check receiver RAM before a heavy payload
    query intent: "Are we debugging this problem, or do you just need me to listen?"
IF intent == VENT and response == FIX  => 400 Bad Request
```

### 3.3 Incident vs. Problem

1. **Incident:** de-escalate and regulate first; restore service.
2. **Problem:** once stable, run the RCA and patch the logic error.

### 3.4 Personal README

Hand a short user manual to the people you live with (CH 7.3):

- **Current Status:** "I am currently processing a massive work crisis in the background."
- **Input Requirements:** "I need you to just listen right now, I do not need you to fix the problem."
- **Known Bugs:** "If I go completely silent during an argument, I am not ignoring you. My system is overheating and I need ten minutes to reboot."

## 4. System Mapping

Source: CH 7.6 of the book.

| Component | Legacy configuration (deprecated) | Dream Machine OS (patched) |
| --- | --- | --- |
| API Endpoint | Missing boundaries / Absorbing toxic external inputs | Cell Membrane (Setting healthy interaction standards) |
| SLA / QoS | Treating all requests equally / Depleting energy on strangers | Response Prioritization (Protecting your energy for partner/kids) |
| Input Sanitization | Unfiltered data intake / Vulnerable to echo-chambers | Protection Protocol (Bypassing algorithmic domestication) |
| README.md | Undocumented expectations / Assuming telepathic networking | User Manual (Explicit documentation to stop fights early) |
| SYN/ACK | Dropped packets / Ignoring pings (Staring at the screen) | Bids for Connection (Acknowledging the ping / Looking up) |
| Bandwidth Check | Unsolicited trauma dumping / Overloading receiver RAM | Checking Receiver RAM (Verifying capacity before heavy payloads) |
| Protocol Verification | Error 400 / Executing "Fix" scripts when user needs "Vent" | Matching Communication Intent (Preventing mismatch errors) |
| Subject-Object Rule | Treating humans as utility resources or NPCs | Anti-Manipulation Boundary (Treating humans as sovereign nodes) |
| Data Serialization | Transmitting unreadable formats / Ignoring recipient specs | Translating Love Languages (Matching outbound formats to recipient APIs) |
| Root Cause Analysis | Recurring surface-level crashes / Sweeping errors under the rug | Post-Conflict Debugging (Fixing the relationship bugs permanently) |

## 5. Error Codes

Codes are defined once in [`errors/registry.json`](../../errors/registry.json). This module owns:

| Code | Name | Book | Definition |
| --- | --- | --- | --- |
| `BAD_REQUEST_400` | 400 Bad Request | CH 7.4.3 | The receiver needs a compassion protocol (vent) and gets a debugging protocol (fix), or the other way round. |
| `DDOS_ATTACK` | DDoS Attack (Social) (`0x07`) | CH 7.1.1; Directory F (F.7) | [glossary](../../glossary/ddos-attack.md) |
| `MEMORY_LEAK` | Memory Leak | CH 7.6 | [glossary](../../glossary/memory-leak.md) |

Also relevant here: `PREDICTIVE_EXPLOITATION` (04), `SPOF` (10), `VICTIM_MODE` (01).

## 6. Dependencies

- [01-identity-bios](../01-identity-bios/): Identity BIOS
- [03-processor](../03-processor/): Processor (Consciousness Management)

## 7. Evidence

Each footnoted claim of CH 7 has an audit log: claim, research query, evidence summary and tier. Open one at `https://www.dreammachine.systems/audit/<section>`. To add or challenge a source, open an [Evidence issue](https://github.com/dream-machine-systems/dream-machine-os/issues/new?template=evidence.yml) with the section ID.

| Section | Tier | Primary sources |
| --- | --- | --- |
| [`sec7-1`](https://www.dreammachine.systems/audit/sec7-1) | `CONSENSUS` | Lindsay et al., 2017, Psychoneuroendocrinology; Oveis et al., 2018, Journal of Experimental Psychology: General |
| [`sec7-1-1`](https://www.dreammachine.systems/audit/sec7-1-1) | `CONSENSUS` | Rathje et al., 2021, Proceedings of the National Academy of Sciences; Guess et al., 2023, Science |
| [`sec7-3`](https://www.dreammachine.systems/audit/sec7-3) | `CONSENSUS` | Doss et al., 2020, Journal of Consulting and Clinical Psychology; Ditzen et al., 2009, Biological Psychiatry |
| [`sec7-4-2`](https://www.dreammachine.systems/audit/sec7-4-2) | `CONSENSUS` | Levy-Gigi & Shamay-Tsoory, 2017, Journal of Behavior Therapy and Experimental Psychiatry; Brown et al., 2020, Personality and Social Psychology Bulletin |
| [`sec7-4-3`](https://www.dreammachine.systems/audit/sec7-4-3) | `CONSENSUS` | Caceros et al., 2025, Cultural Diversity and Ethnic Minority Psychology; Verhofstadt et al., 2008, Emotion |
| [`sec7-4-4`](https://www.dreammachine.systems/audit/sec7-4-4) | `CONSENSUS` | Alexander et al., 2007, Journal of Cognitive Neuroscience; Rahapsari & Levita, 2024, Trauma, Violence & Abuse |
| [`sec7-4-5`](https://www.dreammachine.systems/audit/sec7-4-5) | `CONSENSUS` | Chen et al., 2025, BMC Psychology; Algoe & Zhaoyang, 2015, The Journal of Positive Psychology |
| [`sec7-5`](https://www.dreammachine.systems/audit/sec7-5) | `CONSENSUS` | Ben-Naim et al., 2013, Emotion; Hesser et al., 2017, Clinical Psychology & Psychotherapy |
| [`sec7-6`](https://www.dreammachine.systems/audit/sec7-6) | `CONSENSUS` | Castelo et al., 2025, PNAS Nexus; Upshaw et al., 2023, Biological Psychology |

## 8. Human Debug Deck

Cards whose theory section compiles into this module ([`deck/cards.json`](../../deck/cards.json)):

[`core-14` ASYMMETRIC_LOAD_BALANCING](https://www.dreammachine.systems/deck/core/asymmetric-load-balancing/), [`cpu-14` LEAD_ARCHITECT](https://www.dreammachine.systems/deck/cpu/lead-architect/), [`net-02` HANDSHAKE: SYN_ACK_SYNC](https://www.dreammachine.systems/deck/net/handshake-syn-ack-sync/), [`net-03` COMPILE: CLEAN_DATA_TX](https://www.dreammachine.systems/deck/net/compile-clean-data-tx/), [`net-05` FAULT: PACKET_LOSS](https://www.dreammachine.systems/deck/net/fault-packet-loss/), [`net-07` RCA: BLAMELESS_POST_MORTEM](https://www.dreammachine.systems/deck/net/rca-blameless-post-mortem/), [`net-09` REDLINE: ASYMMETRIC_LOAD](https://www.dreammachine.systems/deck/net/redline-asymmetric-load/), [`net-12` UNTHROTTLED_EXEC](https://www.dreammachine.systems/deck/net/unthrottled-exec/), [`sys-05` FAULT: ZERO_SUM_EXECUTION](https://www.dreammachine.systems/deck/sys/fault-zero-sum-execution/), [`sys-12` UNTHROTTLED_EXEC](https://www.dreammachine.systems/deck/sys/unthrottled-exec/).
