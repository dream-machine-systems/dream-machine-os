# RFCs

Changes to core logic, new modules and new patches start as a Request for Comments.

## Process

1. Open an [RFC issue](https://github.com/dream-machine-systems/dream-machine-os/issues/new?template=rfc.yml). Discuss the problem before the solution.
2. If the maintainer labels it `rfc:accepted-for-draft`, copy [`0000-template.md`](0000-template.md) to `rfcs/NNNN-short-title.md` and open a PR.
3. The maintainer merges, rejects or defers. Accepted RFCs land in the next minor or major build.

| State | Meaning |
| --- | --- |
| `DRAFT` | Under discussion |
| `ACCEPTED` | Scheduled for a build |
| `IMPLEMENTED` | Merged into a module and released |
| `REJECTED` / `DEFERRED` | Closed with reasoning |
