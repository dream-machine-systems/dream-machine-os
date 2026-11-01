---
id: 01-identity-bios
title: Identity BIOS
book_ref: "CH 1 (Identity BIOS: Base Firmware)"
spec_status: DRAFT
build: v0.9.5
depends_on: []
audit: https://www.dreammachine.systems/audit
---

# Module 01: Identity BIOS

**Layer 0. Every other module depends on it.**

## 1. Abstract

The Identity BIOS is the base firmware of a Living Node. It handles incoming stimuli and generates controlled responses without defaulting to legacy blame loops.

## 2. Core Logic: Radical Responsibility

In legacy systems, stimulus (S) and response (R) are hard-wired: S => R. The BIOS inserts a processing gap G:

```math
G = t_{response} - t_{stimulus}
```

Radical Responsibility is the activation of the Agency flag A within that gap:

```math
O = f(A \cdot S), \quad A \in [0, 1]
```

At A = 0 the node runs in Reactive Mode (legacy). The gap is extended operationally by the Frankl Buffer (module 03).

## 3. System Requirements

- **Zero-Blame Policy:** External variables (other nodes, environment) are read-only data, not causal agents for internal state changes.
- **Root Access:** The node holds exclusive write access to its own emotional buffer.

## 4. Error Codes

| Code | Trigger |
| --- | --- |
| `ERROR_BLAME_LOOP` | Internal state changes are written to another node's config |
| `ERROR_VICTIM_MODE` | Signal attenuation from assuming zero agency (external dependency) |

## 5. Evidence

Audit logs: [dreammachine.systems/audit](https://www.dreammachine.systems/audit), Chapter 1.
