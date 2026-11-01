# Template A: Logic Bomb (Ego Trigger Analysis)

Source: *The Dream Machine*, CH 22.1. Copy it, print it, rewrite it in your own words (Copy-Paste License, CH 20.3.3). A filled-in report is personal data: keep it on paper or a local drive, never in an issue or pull request.

**Use case:** a passing comment or minor event triggers a disproportionate reaction (rage, defensiveness, withdrawing).

> **Before you start.** IF System_State == PANIC (narrow vision, racing heart, shutdown): close this template and run the [Emergency Protocol](../README.md#2-emergency-protocol). IF System_Voltage == NOMINAL: proceed. In an acute crisis, contact a person: [`SAFETY.md`](../../SAFETY.md).

```text
INCIDENT_REPORT_TYPE_A: LOGIC_BOMB (INTERNAL)

[ SYSTEM METADATA ]
INCIDENT_ID:        [Date & Time]
TRIGGER (INPUT):    [Specific external event. e.g., "Boss publicly criticized my slide."]
SYMPTOM (OUTPUT):   [Your physical/verbal reaction. e.g., "Screamed at my junior dev, then hid in the bathroom."]

[ ROOT CAUSE ANALYSIS (The 5 Whys) ]
1. Why did I react?
   => [e.g., "He made me look incompetent in front of the board."]
2. Why does looking incompetent matter?
   => [e.g., "They might fire me."]
3. Why does that terrify my system?
   => [e.g., "I have exactly zero dollars in savings."]
4. Why does that make me scream at a junior dev?
   => [e.g., "I feel completely powerless and need to exert control."]
5. Why do I feel powerless? (ROOT CAUSE)
   => [e.g., "Legacy Script: My survival depends on absolute perfection."]

[ PERMISSION STATUS ]
DID_SCRIPT_HAVE_ROOT?   [YES / NO]

[ THE PATCH (Refactoring) ]
OLD_SCRIPT:   "My survival depends on absolute perfection."
NEW_SCRIPT:   "I am a Learner. Critical feedback is raw data, not a physical threat."
```
