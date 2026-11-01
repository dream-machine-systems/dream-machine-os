# Admin's Daily Log (Minimum Viable Maintenance)

Source: *The Dream Machine*, CH 23.2 to 23.4. Copy it, print it, rewrite it in your own words (Copy-Paste License, CH 20.3.3). Your log is personal data: keep it on paper or a local drive, never in an issue or pull request.

About 15 minutes a day: your individual vital 20% (Pareto Protocol, CH 23.1). The physical mechanics (box breathing and the other drills) are indexed in [Directory E](../../directories/e-command-set/).

> **Compassion Patch.** Missed it for three days? Three weeks? There is no penalty subroutine. The moment you log back in, you are succeeding (CH 23.1). Below 10% battery the log stops at Safe Mode. In an acute crisis, contact a person: [`SAFETY.md`](../../SAFETY.md).

## Phase 1: System Boot (morning script)

Timing: 0 to 15 minutes after your eyes open. Do not touch the phone first.

<!-- verbatim: CH 23.2 -->
```text
SYSTEM_BOOT_SEQUENCE

[ > BATTERY_CHECK ]
IF System_Battery < 10% (Clinical Freeze / Deep Burnout):
  => EXECUTE Boot_SafeMode.sh
  [ ] Hydrate: Drink 500ml of cold water to shock the gut.
  [ ] Breathe: Box breathing to stabilize pulse.
  [ ] Survive: MVM ends here. Preserve the motherboard.
IF System_Battery > 10% (Normal Operations):
  => EXECUTE Boot_Standard.sh

[ 1. HARDWARE_INIT ]
[ ] Master Clock Sync: View natural sunlight outside within 30–60 minutes of waking
    to set the circadian OS and trigger the cortisol baseline.
[ ] Hydrate: Drink 500ml of cold water.
[ ] Structural De-frag: Stretch until the spinal fascia pops.
[ ] Clock Speed Sync: Box breathing until the heart rate visibly drops.

[ 2. BIOS_FLASH (3 Core Prompts) ]
> GRATITUDE_LOG (Stable Base):
  => "I am grateful for...", "I am grateful for...", "I am grateful for..."
> IDENTITY_SELECT (Who holds the keyboard today?):
  => [ e.g., "I am a calm Sudo Admin." ]
> PRIME_DIRECTIVE (One Goal):
  => [ e.g., "The single highest-priority thread I will execute today is [Task]
       —unless thermal load requires an autonomic shutdown." ]

[ 3. STATUS: ONLINE ]
```

## Phase 2: CPU Load Balancing (mid-day check)

Timing: noon (lunch break).

<!-- verbatim: CH 23.3 -->
```text
> RUN SYSTEM_DIAGNOSTIC

STATUS_CHECK:
1. Am I executing the Prime Directive, or am I putting out someone else's fire?
   [ ] ON TARGET
   [ ] DRIFTING (Yank the steering wheel back now)

2. Thermal Load Check (Stress):
   [ ] NOMINAL
   [ ] OVERHEATING (Drop the mouse. Execute 2-minute Box Breathing script)
```

## Phase 3: Cache Clear & Shutdown (evening ritual)

Timing: end of workday or before sleep.

<!-- verbatim: CH 23.4 -->
```text
SYSTEM_SHUTDOWN_SEQUENCE

[ 1. REFLECTION_LOG (Reviewing the Boot) ]
> Did I embody my selected Identity?   [YES/NO]
> Did I ship the Prime Directive?      [YES/NO]
> What survived the blast? (Wins):     [List 1 concrete victory]

[ 2. EOD_LOG_AUDIT (Batch Processing) ]
> [LATENCY CHECK]: What triggered the Ego Rootkit today?
> [EXECUTION]: Log the error objectively. Zero judgment.

[ 3. PRE-COMPILED_SCRIPT (Implementation Intentions) ]
> IF   [Trigger X happens tomorrow]
> THEN [Execute Behavior Y]
> [STATUS: Response moved to automatic execution.]

[ 4. RAM_DUMP (Closing Open Loops) ]
> [Write down every single pending task and paranoid worry for tomorrow.]
> [REQUIREMENT: Tag each task to securely format the data.]
  => [CRITICAL_QUEUE] (Must execute tomorrow)
  => [DEFERRED] (Pushed to a later sprint)
  => [DEPRECATED] (Deleted / Not doing it)
> [Once the ink is on the paper and tagged, the OS is permitted to drop the thread.]

[ 5. FINAL_COMMAND (Physical Trigger) ]
> Slam the laptop shut.
> Say out loud: "SYSTEM SHUTDOWN COMPLETE."
```
