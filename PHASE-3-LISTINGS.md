# Phase 3 — Package listing pages

Two listing surfaces redesigned in the editorial system.

## A · Category listings — `/packages/[category]`
(e.g. `/packages/char-dham`, `/do-dham`, `/single-dham`, `/helicopter`, `/uttarakhand`)

The repo already contained a **complete, dormant editorial category view** (`CategoryView.js`) — it was never wired in. Phase 3 revives it:
- `packages/[slug]/page.js` category branch now renders `<CategoryView …>` + mounts `<LuxMotion/>`, replacing the old commercial (navy-gradient + save-badge grid) render.
- `CategoryView` delivers: a full-bleed parallax masthead, an alternating editorial "collection" (large image + price + view link per package), an assurances band, cross-links to the other collections, and planning-guide links.
- **Preserved:** `generateMetadata` (category title/description/canonical) untouched; every package link, guide link, and now additional cross-collection links. The package **detail** branch (Phase 4) is untouched.

## B · Main catalogue — `/packages`
Editorial rewrite of the client listing page. **All logic preserved verbatim** (the `filtered` useMemo: category filter + name/tag/city/highlight search + 5-way sort; `lowestPrice`; `hasFilters`).
- Editorial ink masthead with eyebrow/headline/lede and three stats.
- **Glass sticky filter bar** (`lux-glass`): search (`lux-input`), 5-option sort (`lux-select`, native + accessible), horizontally-scrollable category pills with live counts and an active state.
- Editorial results grid using the new shared card, result count + clear-filters, editorial empty state, and a bespoke-quote CTA (WhatsApp + phone).
- Metadata still supplied by `packages/layout.js` (unchanged) — the page stays a client component for the filters.
- Dropped the shadcn `Input`/`Select` + magicui `BlurFade`/`NumberTicker` deps on this page (components remain in the repo for other pages).

## New shared component
`src/components/PackageCardLux.js` — editorial, equal-height grid card (badge, duration chip, meta eyebrow, title, from-price with strike-through + savings, view link, hover lift + slow image zoom). Backed by new `.lux-gcard*` classes in `design-system.css`. Distinct from the homepage rail card (`.lux-pcard`).

## Verification
- esbuild parse clean on all four files; no dangling refs to removed deps.
- All referenced classes exist (`lux-glass`, `lux-select`, `lux-gcard*`, `lux-eyebrow--center`); `design-system.css` brace-balanced (109/109); `PKG_CSS` balanced.
- Category branch preserves metadata + all links; detail branch untouched.
- Micro-interactions: card lift + image zoom, pill hover/active transitions, search/sort/clear — all CSS/state, no hidden-content risk (no scroll-reveal on the interactive grid).
- ⚠️ Live render not captured (OneDrive `next dev` won't boot — see Phase 1). Run `npm run dev` and open `/packages` and `/packages/char-dham` locally.
