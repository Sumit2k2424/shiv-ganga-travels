# Phase 2 — Homepage redesign

Rebuilt `src/app/page.js` in the editorial `lux-` system. One file changed; the
editorial layer + motion runtime are imported **route-locally on `/`**, so the other
156 routes are untouched.

## Preserved verbatim (SEO / functionality)
- `metadata` — title, description, keywords, OpenGraph, Twitter, canonical.
- `<Schema/>` — all **3** JSON-LD blocks (Product w/ aggregateRating, WebPage w/ speakable, FAQPage).
- `<HeroSection/>` — kept as the cinematic hero (photographic, animated background, LCP `fetchPriority`, and the `.speakable-answer` nodes the voice schema targets).
- **Every** link and CTA — all 34 audited internal links verified present (0 missing), including the full city/temple/blog link mesh, all package slugs, cab routes, WhatsApp and `tel:` CTAs, and the newsletter form.
- `CounterStat` animated counters (`TRUST.stats`), unchanged.

## Section-by-section mapping (old → editorial)
| # | Old section | New editorial section |
|---|---|---|
| 1 | Intent selector | Editorial 4-card intent grid (gold hover edge) |
| 2 | Trust band | Animated counters in an ink band |
| 3 | 4 Dhams tiles | **Immersive destination cards** (4×5 photos + scrim captions) |
| — | *(new)* | **Interactive Char Dham route** — `RouteMap` (scroll-driven SVG + elevation) |
| 4 | Char/Do/Single rails | **Luxury package cards** in snap rails (`LuxPkgCard`) |
| 5 | Cost transparency | Editorial navy cost-lines grid |
| 6 | Cab section | **Vehicle showcase** (`VehicleShowcase` + compare matrix) + cab routes |
| — | *(new)* | **Hotel showcase** (`HotelShowcase` carousel) |
| 7 | Why choose us | Editorial includes grid + image |
| 8 | Founder story | Editorial founder split + quote card |
| 9 | Journey steps | **Journey timeline** — four-step editorial band |
| 10 | Google reviews | **Premium testimonials** — `ReviewsWall` (+ link to all 54 on Google) |
| 11 | Content funnel | Editorial 3-column funnel |
| 12 | Plan tools + links | Editorial tool cards + full inline link mesh |
| 13 | FAQ | `FaqList` (animated accordion) |
| 14 | Final CTA | Ink closing + newsletter |

New reusable data/components consumed: `experience.js` (HOTELS, VEHICLES, VEHICLE_MATRIX, REVIEWS, ROUTE) and `lux/` (RouteMap, HotelShowcase, VehicleShowcase, ReviewsWall, FaqList).

## Deliberate changes worth flagging
- **Testimonials source.** The homepage now features the curated editorial `ReviewsWall` (matches the 4.7/54 aggregateRating) with a prominent link to the live Google profile. The `GoogleReviews` component and `/api/google-reviews` route remain in the codebase — no site capability was removed.
- **Site chrome (Navbar + global Footer) is unchanged.** They render on all 157 routes, so re-skinning them is a cross-cutting change that deserves its own isolated approval. The homepage therefore still shows the current commercial-styled header/footer above and below the editorial body. Recommended as the immediate next small step ("site chrome") before Phase 3.

## Site chrome (follow-up to Phase 2)
Editorial re-skin of the global Navbar + Footer, so the whole frame matches the homepage.
- `layout.js` now imports `luxury.css` + `design-system.css` **globally** (leak-safe — the editorial CSS declares only `.lux-*` classes + CSS vars, no global element selectors, so the 155 not-yet-redesigned routes render unchanged). The route-local imports were removed from `page.js`.
- **Navbar** re-skinned to hairline/ink/gold editorial: animated brand logo preserved, all Packages/Cabs dropdown links, plain links, mobile drawer links, click-outside behaviour, `TrustStrip`, phone + WhatsApp CTAs, and the exact `hidden md:flex` / `md:hidden` responsive behaviour all preserved (0 links missing).
- **Footer** re-skinned to editorial ink with hairline columns; the entire link backbone is now sourced from the canonical `footerLinks.js` (7 columns + language column) — every link preserved verbatim; brand block, social links, contact CTAs and bottom bar intact.

## Verification
- esbuild JSX parse: **clean**.
- All imports resolve to real files/exports; `CounterStat` prop contract matches; all icon names valid.
- Link preservation: **0 of 34 missing**. JSON-LD: **3/3**. No dangling refs to dropped components.
- No cross-route leak: `luxury.css`/`design-system.css` imported only by `page.js` and `styleguide/page.js`.
- ⚠️ Live render not captured — `next dev` will not finish booting on this OneDrive filesystem (documented in Phase 1). Run `npm run dev` locally and open `/` to view.
