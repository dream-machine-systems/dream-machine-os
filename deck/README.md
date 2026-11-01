# Human Debug Deck Mapping

[`cards.json`](cards.json) maps the 78 cards of *The Human Debug Deck* to the modules of this specification and to error codes in [`errors/registry.json`](../errors/registry.json).

The card texts (stack trace, sudo command, theory) are part of the deck and are not in this repository. Each entry links to the card's page on [dreammachine.systems/deck](https://www.dreammachine.systems/deck/).

## Entry format

```json
{
  "id": "net-04",
  "suit": "net",
  "num": "04",
  "class": "PROT",
  "title": "CONTAINER: THE_BUNKER_BUG",
  "url": "https://www.dreammachine.systems/deck/net/container-the-bunker-bug/",
  "deck_module": "FIREWALL_PROTOCOLS",
  "modules": ["10"],
  "errors": ["BUNKER_BUG"]
}
```

| Field | Content |
| --- | --- |
| `id` | Card ID `{suit}-{num}`. Frozen: printed QR codes depend on it |
| `suit` | `core` (22 cards), `cpu`, `net`, `sys`, `disk` (14 each) |
| `class` | `HW`, `EXEC`, `PROT` or `FAULT` |
| `deck_module` | The `man dream_machine --module=` reference printed on the card |
| `modules` | Spec modules of that deck module, as listed in `deck_modules` |
| `errors` | Error codes the card names. Empty when it names none |

A card's modules follow its `deck_module`; to move a card, change the reference on the card first. Missing error codes on a card are a good first contribution. Run `node scripts/check-data.mjs` before you push.
