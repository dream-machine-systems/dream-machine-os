# Glossary

The system syntax of the Dream Machine OS: 227 terms from Directory B of the book. This directory is the single source for [dreammachine.systems/docs/syntax](https://www.dreammachine.systems/docs/syntax/).

## Entry format

One file per term, file name in kebab-case (`ceo-bug.md`). The file name is the term's stable ID; do not rename it.

```yaml
---
term: "CEO BUG (THE)"
category: "Bugs & Vulnerabilities"
modules: ["01", "12"]
error_code: "CEO_BUG"
book_ref: "Directory B"
short: "The foundational rendering error of experiencing the Self as a single, unified executive process."
---
```

Followed by the full definition in Markdown.

| Key | Content |
| --- | --- |
| `term` | Term as printed in the book |
| `legacy_syntax` | Optional. The traditional name the term translates (`Amor Fati`) |
| `category` | `Core Architecture`, `Protocols & Software`, `Bugs & Vulnerabilities` or `Hardware & Telemetry` |
| `modules` | IDs of the modules that use the term. Empty list when not yet mapped |
| `error_code` | Code in [`errors/registry.json`](../errors/registry.json), or `null` |
| `book_ref` | Where the book defines the term |
| `short` | One-sentence definition |

Values are double-quoted strings, lists or `null`. Run `node scripts/check-data.mjs` before you push.

Errata and missing terms: open an issue. A new term needs the book reference it comes from; terms that are not in the book go through an [RFC](../rfcs/README.md).
