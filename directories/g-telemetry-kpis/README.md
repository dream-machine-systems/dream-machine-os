---
id: dir-g-telemetry-kpis
title: System Telemetry & KPIs
book_ref: "Directory G (System Telemetry & KPIs)"
spec_status: STABLE
build: v0.9.5
related: [02-operating-system, 03-processor, 07-social-api, 09-love-protocol]
audit: https://www.dreammachine.systems/audit
---

# Directory G: System Telemetry & KPIs

**Force objective measurement via hard Key Performance Indicators. Verify actual code compilation on the biological hardware.**

> **Value-Output Boundary.** In the corporate world a KPI measures profitability. In the Dream Machine architecture a KPI strictly measures *peace*: system stability, so the motherboard does not melt, not a ruthlessly efficient corporate drone. Poor metrics this week are an error log requesting a reboot and rest, not a moral failure. Your worth as a Living Node is unconditional and decoupled from your daily metrics (G.0).

## 1. Abstract

Directory G defines the telemetry dashboard of the Dream Machine OS: ten KPIs that replace vague feelings of progress with measured behavior, and the privacy rule for what may leave the Localhost. Crash signature: a false-positive state of progress built on consuming books, podcasts and therapeutic buzzwords. The GUI displays "healing", but real-world load testing triggers the same legacy panic scripts. Status: Blind Operations / Hallucinated Progress (Directory G diagnostic).

Optimizing what is unmeasured is an architectural impossibility. If the numbers show a degrading system, the code is failing: pull the error logs and write a new patch (G.0). Sensors and apps to gather the data are listed in Directory H, on the website's [Bill of Materials](https://www.dreammachine.systems/docs/bom/).

## 2. Telemetry Dashboard

Track these metrics regularly. Do not judge the output; record the physics of behavior (G.1). Source: Directory G.1 of the book, verbatim.

```yaml
operational_kpis:
  - kpi: "01. System Latency"
    it_metric: "The Frankl Buffer"
    biological_measurement: "Physical time delay before reacting. Counting the seconds between a hostile text message arriving and your fingers touching the cold glass to type a reply."

  - kpi: "02. MTTR"
    it_metric: "Mean Time To Recovery"
    biological_measurement: "Recovery efficiency. When a Sev-1 crash inevitably occurs (a panic attack or depressive freeze), tracking how quickly you drop the shame, deploy Safe Mode, and rest without punishing yourself for the downtime."

  - kpi: "03. Thermal Load"
    it_metric: "Baseline Autonomic Tension"
    biological_measurement: "Somatic audits. Is your jaw currently clenched tight enough to damage a molar? Are your shoulders pinned rigidly to your neck?"

  - kpi: "04. Packet Loss"
    it_metric: "Conflict Resolution Efficiency"
    biological_measurement: "Tracking domestic incidents. Did the disagreement end in a synchronized handshake, or did it result in dropped packets (the silent treatment and a slammed door)?"

  - kpi: "05. Port Security"
    it_metric: "Boundary Enforcement"
    biological_measurement: "Execution of the `kill -9` command on toxic inbound API calls. The exact number of unauthorized, Tier 3 requests you explicitly rejected this week to protect your primary bandwidth."

  - kpi: "06. Malware Detection"
    it_metric: "Cognitive Thread Termination"
    biological_measurement: "Execution of the quarantine command on verified-false cognitive bugs. The exact number of internal, unverified anxiety threads you manually deprecated this week to free up active RAM."

  - kpi: "07. RAM Drain"
    it_metric: "Process Termination Speed"
    biological_measurement: "How many minutes you spend staring at the ceiling at 3 AM replaying a five-year-old argument before you manually force-quit the thread."

  - kpi: "08. Context Switching"
    it_metric: "Single-Threaded Endurance"
    biological_measurement: "The consecutive minutes you can stare at a complex work file without your hand twitching to check a social media feed."

  - kpi: "09. Garbage Collection"
    it_metric: "Cache Archiving Efficiency"
    biological_measurement: "Measuring your physical voltage upon morning boot. Do you wake up with a quiet processor, or are yesterday's errors already compiling before your feet hit the floor?"

  - kpi: "10. Graceful Degradation"
    it_metric: "Hardware Constraint Management (NOT_PATCHABLE)"
    biological_measurement: "The frequency at which you actively accept a permanent physical, chronic, or environmental limitation without executing 'Shame.exe'. Tracking how successfully you deploy accommodations and rest rather than attempting impossible optimizations."
```

## 3. Localhost Constraint: Public Payload Schema

Personal KPIs (domestic incidents, anxiety threads, trauma loops) are classified bare-metal telemetry (G.2).

- **Do not export raw KPI logs** to the network: no uploads of behavioral data to public LLMs, no uncompiled relationship metrics in a central database or public forum. Raw data stays air-gapped on the Localhost (a physical journal or a secure local drive).
- **Voluntary sharing** of progress (e.g. MTBF doubled, System Latency stabilized) goes to the [P2P Living Node Cluster](https://www.dreammachine.systems/uplink/p2p), only with explicit consent and only under the `PUBLIC_PAYLOAD_SCHEMA`:

```text
PUBLIC_PAYLOAD_SCHEMA
  ALLOW   sanitized structural lessons only: the structural learning or the operational patch itself
  DENY    raw emotional payloads, active-crisis content, health data,
          personally identifiable information (PII), third-party identifiers (e.g. relationship logs)
  ROUTE   active crises and unmitigated trauma => NEVER the community tracker;
          private, qualified clinical or emergency support only (Tier-0)
```

The same rule applies to this repository: issues and pull requests are public and permanent ([`SAFETY.md`](../../SAFETY.md)).

## 4. Related Modules

- [02-operating-system](../../modules/02-operating-system/): Operating System (Graceful Degradation)
- [03-processor](../../modules/03-processor/): Processor (Frankl Buffer, single-threading, Thermal Throttling)
- [07-social-api](../../modules/07-social-api/): Social API (port security, SLA tiers)
- [09-love-protocol](../../modules/09-love-protocol/): Love Protocol (handshake, packet loss)
