# Audit Logs

Empirical audit data for every footnoted claim in the book: 150 sections in one JSON file per chapter or directory. The book (CH 27.4, SPOF boundary) commits to open-sourcing these logs; this directory keeps that promise. The website renders them at [dreammachine.systems/audit](https://www.dreammachine.systems/audit). The full audit PDFs stay on the website and are linked from each entry.

## File format

`chapter-01.json` to `chapter-12.json`, `directory-a.json`, `directory-d.json`:

```json
{
  "schema_version": 1,
  "build": "v0.9.5",
  "part": "chapter-1",
  "title": "CHAPTER 1: IDENTITY BIOS (Base Firmware)",
  "module": "01",
  "entries": {
    "sec1-1": { "...": "..." }
  }
}
```

Entries are keyed by the section ID of the book's footnote (`[^sec1-8-1]` => `sec1-8-1`).

| Field | Content |
| --- | --- |
| `title` | Section title |
| `core_claim` | The claim as stated in the book (Markdown) |
| `query` | The exact research query used |
| `controlled_studies` | `ON`, `OFF` or `N/A` |
| `tier` | `CONSENSUS`, `EMERGING` or `EXPERIMENTAL` |
| `primary_anchors` | Primary sources (author, year, journal) |
| `summary` | Evidence summary (Markdown) |
| `full_audit` | URL of the full audit PDF or paper |
| `aliases` | Optional. Former IDs that still resolve to this entry |

## Challenging a claim

Open an [Evidence issue](https://github.com/dream-machine-systems/dream-machine-os/issues/new?template=evidence.yml) with the section ID. A PR that changes a tier or a source follows the Consensus Gate in [CONTRIBUTING.md](../CONTRIBUTING.md#evidence-tiers). Run `node scripts/check-data.mjs` before you push.
