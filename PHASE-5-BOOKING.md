# Phase 5 — Booking flow

## Model (audited)
The site is **enquiry-first, no online payment** (25% advance arranged manually). Critically, the
existing `/contact` form posts to `https://formspree.io/f/YOUR_FORM_ID` — an **unconfigured
placeholder that never submits**. The real working conversion path is **WhatsApp** (+ `tel:`).
So the wizard submits a fully-itemised **WhatsApp** message (with an email fallback), matching the
actual mechanism and the business model. No payment integration was invented.

## Deliverable — `/book` (new route, additive)
A premium **4-step enquiry wizard** (`src/app/book/page.js`, client) + `book/layout.js` (metadata,
`noindex` — thin transactional page):

1. **Journey** — choose a category; optionally pick an exact package.
2. **Travellers** — adults/children steppers + travel month.
3. **Comfort** — tier (Budget/Deluxe/Premium), preferred vehicle, add-ons (heli, pony/palki, VIP puja, extra rest day), pickup city.
4. **Your details** — name + phone (validated) + optional email/notes.

Features:
- **Glass sticky summary** (`lux-glass`) that updates live — journey, duration, travellers, month, tier, add-ons, and an **honest indicative estimate** (the package's own budget-tier base × travellers, children at 65%, clearly labelled "exact quote on enquiry"). On mobile it becomes a fixed bottom sheet.
- **Animated per-step validation** — required-field gating, inline errors, a shake on invalid advance; a segmented progress indicator.
- **Submit** → opens WhatsApp with the itemised enquiry; a success panel offers WhatsApp / email / phone fallbacks.
- Prefill via `?pkg=<slug>` (read from `window` in `useEffect`, so no `useSearchParams`/Suspense needed).
- Built entirely on the editorial design system (`lux-glass`, `lux-input/select/textarea`, `lux-field/hint`, `lux-btn`, `lux-status`, `lux-eyebrow`).

## Wiring
The package detail sticky-rail secondary CTA now points to `/book?pkg={slug}` ("Build your booking")
— a richer, prefilled enquiry that still ends in WhatsApp. `/contact` is unchanged and remains
reachable from the footer and nav.

## Verification
- esbuild parse clean (wizard, layout, edited detail page); `BOOK_CSS` brace-balanced; all icon names + design-system classes resolve; submission builds a `wa.me` URL; prefill logic present.
- No existing route/content/SEO removed; `/contact` intact.
- ⚠️ Live render not captured (OneDrive `next dev` won't boot — see Phase 1). Run `npm run dev` and open `/book` (and `/book?pkg=char-dham-yatra-9n-10d-haridwar`) locally.
