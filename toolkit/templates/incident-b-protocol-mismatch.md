# Template B: Protocol Mismatch

Source: *The Dream Machine*, CH 22.2. Copy it, print it, rewrite it in your own words (Copy-Paste License, CH 20.3.3). A filled-in report is personal data: keep it on paper or a local drive, never in an issue or pull request.

**Use case:** a connection with another node returns a 400 Bad Request: icy silence or a slammed door (misunderstanding, conflict). This is a post-mortem, run after the conflict. During a live conflict, use [Active Triage](../README.md#51-active-triage-p2p-network-crash-live-conflict) instead.

> **Before you start.** Classify the conflict by behavior, not relationship role. Coercive control, violence, exploitation or repeated boundary violations are not a protocol mismatch: abort all connection protocols, get to safety and contact Tier-0 support ([`SAFETY.md`](../../SAFETY.md)). This template is for safe connections only (External Safety Gate, CH 22.2.1).

```text
INCIDENT_REPORT_TYPE_B: CONNECTION_ERROR (EXTERNAL)

[ SYSTEM METADATA ]
TARGET_NODE:   [Name of the other person]
ERROR_CODE:    [e.g., Screaming match, Icy silence, 400 Bad Request]

[ PACKET ANALYSIS ]
MY_TRANSMISSION (Intent):
  => [What did I actually want to say? e.g., "I am exhausted and miss you."]
THEIR_RECEPTION (Impact):
  => [What did they hear? e.g., "You are demanding and suffocating me."]
PACKET_LOSS:
  => [The significant gap between Intent and Impact.]

[ PROTOCOL CHECK (The Handshake) ]
MY_MODE:      [e.g., Cold Logic / Fixing the problem]
THEIR_MODE:   [e.g., Raw Emotion / Seeking validation]
RESULT:       [PROTOCOL MISMATCH DETECTED]

[ RESOLUTION COMMAND ]
1. Acknowledge the Mismatch ("I was trying to fix it; you just needed me to listen.")
2. Re-transmit using the correct Protocol.
```
