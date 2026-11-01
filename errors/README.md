# Error Codes

[`registry.json`](registry.json) is the single register of every bug, malware and incident the book names: 81 codes. Modules list the codes they own in section 5; deck cards and glossary entries point here.

## Entry format

```json
{
  "code": "ZIP_FILE_ERROR",
  "name": "Zip-File Error",
  "hex": null,
  "module": "08",
  "also": [],
  "book_ref": "CH 8.3",
  "glossary": "zip-file-error",
  "summary": null
}
```

| Field | Content |
| --- | --- |
| `code` | Stable key, `UPPER_SNAKE_CASE`. Never renamed once released |
| `name` | Name as printed in the book |
| `hex` | Incident code of Directory F (Troubleshooting Guide), `0x01` to `0x09`, or `null` |
| `module` | Module that defines the code, or `null` when the book defines it outside CH 1-12 (runbook chapters, directories) |
| `also` | Other modules that use the code |
| `book_ref` | Where the book defines it |
| `glossary` | ID of the glossary entry with the definition, or `null` |
| `summary` | One-sentence definition, only when there is no glossary entry |

## Directory F incident codes

| Hex | Code | Incident |
| --- | --- | --- |
| `0x01` | `THERMAL_THROTTLING` | Burnout |
| `0x02` | `SOCIAL_LAG` | Social Lag (Connection Timed Out) |
| `0x03` | `RECURSIVE_WORRY_LOOP` | Recursive Worry Loop (CPU Overload) |
| `0x04` | `HESITATION_BUG` | Hesitation Bug (Procrastination) |
| `0x05` | `EGO_REBOOT` | Ego Reboot (Identity Hijack) |
| `0x06` | `PERMISSION_DENIED` | Permission Denied (Imposter Syndrome) |
| `0x07` | `DDOS_ATTACK` | Input Flood (DDoS Attack) |
| `0x08` | `BENCHMARK_FAILURE` | Benchmark Failure (Comparison Trap) |
| `0x09` | `UNRESOLVABLE_EXCEPTION` | Hardware Constraint (Unresolvable Exception) |

A new code needs the book reference it comes from. Codes that are not in the book go through an [RFC](../rfcs/README.md). Run `node scripts/check-data.mjs` before you push.
