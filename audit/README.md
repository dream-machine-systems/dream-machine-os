# Audit Logs

Empirical audit data for every footnoted claim in the book. Currently published at [dreammachine.systems/audit](https://www.dreammachine.systems/audit).

**Status:** `PLANNED`. The book (CH 27.4, SPOF boundary) commits to open-sourcing the empirical JSON logs. This directory is their target.

## Entry format

One entry per footnoted section, keyed by section ID (`sec1-8-1`):

| Field | Content |
| --- | --- |
| `core_claim` | The claim as stated in the book |
| `query` | The exact research query used |
| `controlled_studies` | `ON`, `OFF` or `N/A` |
| `summary` | Evidence summary |
| `meter` | Support level, e.g. `Strong Support (9/10)` |
| `tier` | `CONSENSUS`, `EMERGING` or `EXPERIMENTAL` |

Challenging a claim: open an Evidence issue with the section ID.
