# Phase 4 — Package detail pages (`/packages/[slug]`)

The detail page is the most SEO-dense on the site (5 JSON-LD blocks + ~20 engineered content
sections: Quick Answer for AI Overviews, pricing tiers, vehicle-fare tables, dham dates,
E-E-A-T signals, tips, etc.). Because a live render couldn't be captured here, Phase 4 was done
as a **controlled transformation**: preserve every content section and schema verbatim, and
deliver the premium elements as targeted swaps/additions — not a blind full rewrite.

## Delivered (premium / editorial)
- **Editorial cinematic hero** — reuses the `lux-hero` masthead (parallax cover, scrim, editorial
  breadcrumb, display H1 from `seoHeading`, `lux-pill` fact chips). Preserves every breadcrumb
  link, the badge, and all five meta facts.
- **Animated itinerary** — swapped `ItineraryTimeline` → lux **`DayTimeline`** (accordion day cards
  with distance/hours parsed from titles, meal + overnight facts). "Itinerary at a glance" kept.
- **Interactive route map** — added lux **`RouteMap`** (scroll-drawn SVG + elevation) for yatra
  packages, nodes filtered by `ROUTE_BY_CATEGORY[category]`.
- **Hotel showcase** — added lux **`HotelShowcase`** carousel for yatra packages (the page had no
  hotel visuals before).
- **Editorial FAQ** — swapped `PackageFaqs` → lux **`FaqList`** (animated accordion).
- **Editorial sticky booking rail** — right column rebuilt on `lux-card`: ink price block (range/
  single/savings/per-couple), WhatsApp + Call + Enquiry (`/contact`) CTAs, `lux-facts` list,
  assurances, and helpful-guide links — all preserved.
- **One-line header restyle** — the shared `SH` style now renders every one of the ~15 section
  headings as an editorial serif header with a hairline rule.
- Editorial bottom CTA; `LuxMotion` mounted for reveals/parallax.

## Preserved verbatim (SEO / functionality)
- `<Schemas pkg>` — all **5** JSON-LD blocks (TouristTrip, Product+aggregateRating+reviews,
  FAQPage, BreadcrumbList, author Person).
- `generateMetadata` (package + category), untouched.
- Every content section: Quick Answer, pricing tiers + vehicle-fare table, AC policy, highlights,
  inclusions/exclusions, travel tips, local insights, related guides, related packages, packing
  list, 15 travel tips, emergency contacts, season-pricing table, altitude/health, why-Haridwar,
  Delhi travel options, 2026 registration + dham dates, optional add-ons, both E-E-A-T operator
  sections + review quotes.
- All CTAs and links: mobile `sticky-book-bar`, `FloatingBookCTA`, `WhyOurPrice`, `/contact`,
  `/cancellation-policy`, add-on links, external gov registration + Google Maps links.
- The **category branch** (Phase 3 `CategoryView`) is unchanged.

## Deliberate note
The dense SEO content sections (colored info callouts, comparison tables) keep their existing
inner styling under the new editorial serif headers — a conscious choice to protect ranking
content on the highest-value page rather than re-transcribe ~700 lines blind. They can be
individually re-skinned later once a live preview is available.

## Verification
- esbuild parse **clean**; **5/5** JSON-LD blocks; all premium components wired; all 12 content
  sentinels + all internal/external links preserved; no dangling refs (`ItineraryTimeline`,
  `PackageFaqs` imports removed after swap); Icon names valid.
- ⚠️ Live render not captured (OneDrive `next dev` won't boot — see Phase 1). Run `npm run dev`
  and open a package page, e.g. `/packages/char-dham-yatra-9n-10d-haridwar`, locally.
