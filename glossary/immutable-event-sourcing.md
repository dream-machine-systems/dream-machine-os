---
term: "IMMUTABLE EVENT SOURCING"
legacy_syntax: "Karma"
category: "Core Architecture"
modules: []
error_code: null
book_ref: "Directory B"
short: "The logic constraint defining the historical log."
---

The logic constraint defining the historical log. The current OS state is calculated by replaying the entire ledger of previous events. You cannot run a cheap `UPDATE user SET status = 'healed'` command. To change the output, you must add new, resolving transactions to the ledger rather than attempting to delete the past.
