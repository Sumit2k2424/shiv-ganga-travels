# Competitor backlink exports

One CSV per competitor, named for the competitor's domain:

```
chardhamtourism.com.csv
euttaranchal.com.csv
thrillophilia.com.csv
```

`gap.mjs` sniffs the header, so any of these export shapes work as-is:

| Source | Where | Cost |
|---|---|---|
| Ahrefs free backlink checker | `ahrefs.com/backlink-checker` | free, top 100 referring domains |
| Moz Link Explorer | `moz.com/link-explorer` | free, 10 queries/month |
| Semrush | Backlink Analytics → Referring Domains → Export | subscription |
| Search Console (ours) | Links → Top linking sites → Export | free |

Put **our own** referring domains in `../ours.csv` in the same shape. Without it
the gap report cannot tell which opportunities are already closed, and it will
say so rather than quietly reporting a link we already have as a gap.

This directory is deliberately empty of data. It briefly held hand-made sample
rows while the parser was being tested; those were deleted rather than left in
place, because a fabricated export sitting next to real ones is indistinguishable
from a real one three months later.
