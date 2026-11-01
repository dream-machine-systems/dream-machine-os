---
id: toolkit
title: Operational Toolkit
book_ref: "Operational Toolkit (CH 20 to 24)"
spec_status: STABLE
build: v0.9.5
related: [01-identity-bios, 02-operating-system, 03-processor, 04-security-auditing, 07-social-api, 09-love-protocol, 10-hardened-infrastructure]
audit: https://www.dreammachine.systems/audit
---

# Operational Toolkit

**Deploy raw, unformatted scripts to minimize cognitive load and restore system uptime after a crash.**

> **Safety boundary.** The toolkit is for self-observation, not crisis support. In an acute crisis, stop and contact a person: see [`SAFETY.md`](../SAFETY.md). Every template starts with the Emergency Protocol gate (section 2). Filled-in templates are personal data: keep them on paper or a local drive, never in an issue or pull request (Directory G.2, [Public Payload Schema](../directories/g-telemetry-kpis/#3-localhost-constraint-public-payload-schema)).

## 1. Abstract

The Operational Toolkit is the library of executable scripts of the Dream Machine OS: an emergency interrupt, a one-page dashboard, incident report templates, a daily maintenance log and a catalog of legacy scripts. Crash signature: the system parses theory perfectly in a quiet room, but in a live crisis working memory evaporates and it reverts to legacy survival scripts; to compensate it starts Over-Tooling, color-coding dashboards instead of executing. Status: Runtime Volatility / High Probability of Crash (CH 20 diagnostic).

**Cognitive offloading (CH 20.2):** under heavy emotional load the ability to form a logical sentence evaporates. Theory requires significant RAM; the toolkit requires zero RAM: fill in the blank boxes on paper.

The physical mechanics (breath counts, postures, somatic release) are not part of the toolkit; they are indexed in [Directory E](../directories/e-command-set/). External libraries are listed in Directory I on the website's [Bill of Materials](https://www.dreammachine.systems/docs/bom/).

## 2. Emergency Protocol

Source: CH 20.1. When the visual field narrows, breathing is restricted and the internal dashboard shows critical alerts, run the **3-Way Triage Gate** first. Do not start local regulation or disconnect (Airplane Mode) until the safety state is resolved.

```text
3-WAY TRIAGE GATE
  PATH 1  external danger, abuse, coercive control
          => MAINTAIN COMMUNICATIONS; immediate physical extraction; contact Tier-0 emergency support
  PATH 2  unfamiliar, severe or possibly medical symptoms (suspected cardiac event,
          severe asthma, psychiatric crisis)
          => DO NOT DISCONNECT; route to a clinical / medical assessment immediately
  PATH 3  verified safe environment AND a known, familiar panic episode
          => Emergency Interrupt Sequence (below), and only then

EMERGENCY INTERRUPT SEQUENCE (PATH 3 ONLY)
  DISCONNECT   close the hardware; only when confirmed safe, Airplane Mode or mute non-emergency payloads
  COOLING      immerse the face in cold water (Mammalian Dive Reflex)
  SHUTDOWN     leave high-stress visual interfaces; rest or sleep if possible
  RESULT       the processor dumps the corrupted RAM cache during rest; a fresh, stable instance on waking
```

## 3. Rules of the Toolkit

Source: CH 20.3.

| Rule | Name | Logic |
| --- | --- | --- |
| #1 | Stop Polishing the Hammer (Avoid Over-Tooling) | Organizing tools instead of executing is a primary failure point. A furious note on a coffee napkin that resolves a conflict beats a sterile template that stays empty. |
| #2 | Format Agnosticism (Syntax > Medium) | Spiral notebook, text file or database: the medium is irrelevant; execution of the syntax is the only metric. |
| #3 | Copy-Paste License | "This code is Open Source. Execute it." Rewrite the templates in your own words, tape them to the mirror, adapt them to your hardware. |

The repository license ([CC BY-NC-SA 4.0](../LICENSE)) covers personal copies and adaptations of the templates; commercial use: [`COMMERCIAL-USE.md`](../COMMERCIAL-USE.md).

## 4. Protocol Dashboard

Source: CH 21. A one-pane Network Operations Center: one look shows which layer is failing. Outbound networking (layer 4) on a corrupted BIOS (layer 1) is an architectural impossibility; inbound emergency help (layer 0) is always authorized, regardless of system state (CH 21.0).

### 4.1 Full Stack Architecture

Source: CH 21.1, verbatim. Layers 0 to 4 match tiers 0 to 4 of the [runbook](../runbook/#5-tiered-deployment). This is not the L0 to L5 stack of [Directory A](../directories/a-backend-schematic/).

```yaml
system_topology:
  layer_0:
    component: "OOB SUPPORT (Clinical & Community Co-Regulation)"
    status_options: ["Supported", "Isolated"]
    protocol: "Inbound Assistance"
    tools: ["Therapy", "Caregivers", "Medical Support"]
    goal: "Emergency baseline stability when the local hardware cannot self-regulate."

  layer_1:
    component: "BIOS & KERNEL (Identity & Foundation)"
    status_options: ["Admin", "User"]
    protocol: "Radical Responsibility"
    tools: ["'Sudo Admin' Patch", "CBT (Unit Testing)", "Gratitude"]
    goal: "Stable Root Access. 'I own the hardware.'"

  layer_2:
    component: "PROCESSOR (Focus & Execution)"
    status_options: ["Flow", "Throttled"]
    protocol: "Deep Work, Single-Threading"
    tools: ["Frankl Buffer (The Pause)", "Flow State", "Input Throttling"]
    goal: "Maximum cognitive throughput without overheating."

  layer_3:
    component: "HARDENING (Security & Infrastructure)"
    status_options: ["Secure", "Vulnerable"]
    protocol: "Shadow Work, Chaos Engineering"
    tools: ["Mirror Server (Projection)", "Cold Exposure", "Breathwork"]
    goal: "System resilience against environmental stress."

  layer_4:
    component: "THE NETWORK (Connection & Scaling)"
    status_options: ["Online", "Offline"]
    protocol: "Love (Stateless)"
    tools: ["NVC", "Quality of Service (QoS)", "Community Cluster"]
    goal: "High-Bandwidth Resonance with The Unified Field."
```

### 4.2 Troubleshooting Logic (If-Then Matrix)

Source: CH 21.2, verbatim. Do not guess; follow the signal path to the broken layer.

| Symptom & layer | Debug question | System command (action) |
| --- | --- | --- |
| **Drowning / Total Failure** (Layer 0: OOB Support) | "Is my system currently too damaged to self-repair?" | Plug into an external, regulated node. Seek clinical or community support. |
| **Helpless / Victim** (Layer 1: BIOS) | "Who actually holds Root Access right now?" | Execute `sudo chown`. Reclaim the Admin keys. |
| **Overwhelmed / Scattered** (Layer 2: Processor) | "Am I aggressively Rapid Context Switching?" | Kill the background tabs. Force Single-Thread mode. |
| **Triggered / Angry** (Layer 3: Hardening) | "Is this a real external threat, or a Mirror Reflection of my code?" | **Triage.** If hostile: Drop connection (Iron Gate). If safe: Audit the Shadow Rootkit. |
| **Lonely / Misunderstood** (Layer 4: Network) | "Is the target node toxic, or am I transmitting Corrupted Data?" | **Triage.** If hostile: Secure ports. If safe: Switch to Clean Data (NVC). |
| **Chronic Pain / Grief** (Hardware Constraint) | "Is this a software bug I can fix, or a permanent physical/environmental reality?" | **Execute `NOT_PATCHABLE`.** Cease optimization. Route to Graceful Degradation, accommodation, and radical acceptance. |

## 5. Incident Reports

Source: CH 22. **System Crash + Root Cause Analysis = Optimization.** The goal is learning, never blaming (CH 22.0). If the bug cannot be identified, look it up in [Directory F](../directories/f-troubleshooting-guide/).

> **Hardware cooling required (CH 22.1).** No logical root cause analysis on a melting motherboard. `IF System_State == PANIC`: close the template and run the Emergency Protocol (section 2). `IF System_Voltage == NOMINAL`: proceed.

| Template | Use case | Method | Copy |
| --- | --- | --- | --- |
| A: Logic Bomb (Ego Trigger Analysis) | A minor event triggers a disproportionate reaction (rage, defensiveness, withdrawing) | 5 Whys, from surface noise to the legacy script | [incident-a-logic-bomb.md](templates/incident-a-logic-bomb.md) |
| B: Protocol Mismatch | A connection returns 400 Bad Request: silent treatment, slammed door | Packet analysis: intent vs. impact, my mode vs. their mode | [incident-b-protocol-mismatch.md](templates/incident-b-protocol-mismatch.md) |
| C: Execution Block (Skill vs. Belief) | Deployment stalls: missed deadlines, endless research, procrastination | Isolate skill gap, belief gap or hardware constraint | [incident-c-execution-block.md](templates/incident-c-execution-block.md) |

### 5.1 Active Triage: P2P Network Crash (Live Conflict)

Source: CH 22.2.1. Template B is a post-mortem. During an active conflict, stop sending data and run the **Heart-Interface Handshake**, in this order; do not skip to step 4.

1. **Terminate Active Output (close the 10-bit port):** stop speaking. Any string generated while thermal-throttling compiles as malware at the receiving node.
2. **Establish Physical Line-of-Sight (SYN):** face the other node, uncross the arms, drop the shoulders. *Consent override:* if eye contact spikes either system, drop the gaze to the floor. Presence is required; staring is not.
3. **Synchronize Clock Speed:** visibly run the Physiological Sigh (deep nasal inhale, second short inhale, long slow exhale through the mouth).
4. **Verify the Secure Tunnel (ACK):** wait until the tension drops, then send a minimal payload without history or accusation: "I am here. I am listening." Touch only if explicitly welcomed.

**Safety gate (CH 22.2.1, `EXTERNAL_SAFETY_GATE`):** classify the traffic by behavior, not by relationship role. Path 1, abuse or coercion: abort all connection protocols, extract, route to Tier-0 support; do not wait for the other system to exhaust its load. Path 2, safe but dysregulated (a verbal DDoS): do not force the handshake; end the connection gracefully, route yourself to Safe Mode, ping again once their system is stable.

### 5.2 Extended templates

Templates D (Thermal Throttling Log), E (Intrusion Detection) and F (Infinite Loop / Decision Paralysis) are maintained online at [dreammachine.systems/uplink/p2p](https://www.dreammachine.systems/uplink/p2p), not in the book or this repository (CH 22.4).

## 6. Admin's Daily Log

Source: CH 23. **Minimum Viable Maintenance (MVM):** a server rarely crashes from one explosion; a thousand small memory leaks eat the RAM. The daily log plugs the leaks, built for days when the system runs on empty (CH 23.0).

- **Pareto Protocol (CH 23.1):** 15 minutes of your individual vital 20% beat an abandoned perfect routine.
- **Compassion Patch (CH 23.1):** missed the MVM for three days or three weeks? There is no penalty subroutine. Logging back in is succeeding; Admin rights cannot be revoked.
- **Battery gate:** below 10% (clinical freeze, deep burnout) the log stops at Safe Mode: hydrate, breathe, preserve the motherboard.

| Phase | Timing | Rule |
| --- | --- | --- |
| 1 System Boot (morning script) | 0 to 15 minutes after waking | No phone first. Waking is a Dual-Boot Environment: the feed auto-loads the Legacy OS; the script loads the Dream Machine OS. |
| 2 CPU Load Balancing (mid-day check) | Noon | Verify the CPU is not hijacked by other people's urgency. |
| 3 Cache Clear & Shutdown (evening ritual) | End of workday / before sleep | Write the day's garbage to disk (journal) and tag it, or the hardware cycles through it at 3 AM. |

Copy: [daily-log.md](templates/daily-log.md). Long-term metrics from the daily log: [Directory G](../directories/g-telemetry-kpis/).

## 7. Legacy Script Library

Source: CH 24.1. The CVE database for wetware: historical wounds are not malware but legacy code running in the wrong environment. Killing the process is an invalid command; open the source code, trace the anxiety to the system it was designed to protect, and write an integration patch (CH 24.0).

Use: **Identify** the code that matches the physical glitch, **decompile** the legacy script (the lie the hardware runs), **patch** with the refactored command. Codes and diagnoses are in [`errors/registry.json`](../errors/registry.json); legacy script and patch are verbatim from the book.

| Code | Diagnosis | Legacy script | Patch |
| --- | --- | --- | --- |
| `ERR_ROOT_ACCESS_DENIED` | Imposter Syndrome: System rejects valid Admin credentials and runs in guest mode. | "I am faking this. Soon they will find out I don't know what I'm doing." | `sudo chmod 744 /identity && ./run_learner_protocol.sh` |
| `ERR_IDLE_GUILT` | Productivity Malware: Assuming the system is only valid when actively compiling tasks. | "If I am sitting here doing nothing, I am wasting time, falling behind, and failing the network." | `top -n 1 \| grep CPU && sudo killall -STOP hustle_daemon` |
| `ERR_COMPILATION_STUCK` | Perfectionism: Infinite loop blocking deployment due to microscopic syntax errors. | "It's not ready yet. If it's not perfect, it's garbage." | `git commit -m "Ugly but functional" --no-verify && git push origin main` |
| `ERR_OPEN_PORT` | People Pleasing: ACL collapse. Allowing unauthorized traffic to drain the internal battery. | "If I say 'No', they will completely disconnect from the network and leave me isolated." | `sudo ufw deny in from IP_ENERGY_VAMPIRE` |
| `ERR_BUFFER_OVERFLOW` | Catastrophizing: Processing a microscopic typo as a Sev-1, unrecoverable motherboard fire. | "This mistake will ruin my career. Everything is ending." | `./unit_test.sh --isolate-bug --ignore-global-panic` |
| `ERR_NETWORK_ENVY` | Comparison: Scraping the highly edited front-end of an external server to judge your own messy backend. | "Look at their stats. They are running so much faster and cleaner than me." | `sudo ip link set eth0 down && clear` |
| `ERR_HIGH_LATENCY` | Procrastination: Significant ping. Refusing to execute a script out of pure dread. | "I will execute the task later when my cache is clear and I feel motivated." | `nohup ./execute_task.sh &` |
| `ERR_READ_ONLY` | Victimhood: Critical permissions error. Assuming the local node has zero write-access to its own hard drive. | "I cannot change this. The entire architecture is rigged against me." | `sudo chown -R admin:admin /response` |

The patches are metaphors, not shell commands to run. The extended catalog and printable cheatsheets live at [dreammachine.systems/uplink/p2p](https://www.dreammachine.systems/uplink/p2p) (CH 24.2).

## 8. Not in this repository

- **P2P Living Node Cluster (CH 25):** the community and the extended templates and catalog, on the website.
- **Book illustrations** of CH 22 (third-party works, see [`TRADEMARKS.md`](../TRADEMARKS.md) and Directory J).

## 9. Related

- Migration path and tier checklists: [runbook](../runbook/).
- Drills: [Directory E](../directories/e-command-set/). Incidents: [Directory F](../directories/f-troubleshooting-guide/). Metrics: [Directory G](../directories/g-telemetry-kpis/).
- Modules: [01](../modules/01-identity-bios/) (Sudo Admin, Learner), [02](../modules/02-operating-system/) (Unit Test, Graceful Degradation), [03](../modules/03-processor/) (Frankl Buffer, Single-Threading), [04](../modules/04-security-auditing/) (Logic Bomb, Shadow Work), [07](../modules/07-social-api/) (SLA, QoS), [09](../modules/09-love-protocol/) (Handshake, External Safety Gate), [10](../modules/10-hardened-infrastructure/) (Hesitation Bug, Chaos Engineering).

## 10. Glossary

[Root Cause Analysis](../glossary/root-cause-analysis.md), [Logic Bomb](../glossary/logic-bomb.md), [Network Operations Center](../glossary/network-operations-center.md), [Minimum Viable Maintenance](../glossary/minimum-viable-maintenance.md), [Physiological Sigh](../glossary/physiological-sigh.md), [Graceful Degradation](../glossary/graceful-degradation.md), [Hardware Constraints](../glossary/hardware-constraints.md), [Safe Mode](../glossary/safe-mode.md), [Ego Rootkit](../glossary/ego-rootkit.md), [Sudo Admin](../glossary/sudo-admin.md).
