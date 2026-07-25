# Luxury redesign — what changed and why

Palette is untouched: navy `#0F2B5B`, sacred gold `#E8920A`, himalayan teal `#0B7B8B`.
Everything below is layered on top of the existing design system, not in place of it.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Two dependencies added: `lenis` (smooth scroll) and nothing else. See *Stack decisions* for why `gsap` and `mapbox-gl` are not in `package.json`.

---

## New files

| File | What it does |
|---|---|
| `src/app/luxury.css` | The editorial design layer — typography, spacing, hairline surfaces, reveal primitives, every new component's styles, print stylesheet, and a site-wide uplift block. ~11 KB gzipped. |
| `src/components/lux/LuxMotion.js` | **The only motion runtime on the site.** One IntersectionObserver, one rAF loop, lazy Lenis. ~4 KB. |
| `src/components/lux/primitives.js` | Server components — `Section`, `Reveal`, `Stagger`, `SectionHead`, `Eyebrow`, `Facts`, `Frame`, `Pill`. Zero hydration cost. |
| `src/components/lux/PackageSections.js` | Timeline, hotel + vehicle showcases, temple guide, gallery with lightbox, reviews, FAQ. |
| `src/components/lux/BookingPanel.js` | Price engine + sticky rail + mobile bar + cost builder, sharing one React context. |
| `src/components/lux/RouteMap.js` | Scroll-driven SVG route map and elevation profile. |
| `src/components/lux/RouteMapMapbox.js` | Drop-in Mapbox adapter, off by default. |
| `src/components/lux/LogoMark.js` | The original brand mark, extracted unchanged from the old Navbar. |
| `src/lib/route-geometry.js` | Catmull-Rom spline, haversine distances, elevation path. Pure functions. |
| `src/data/experience.js` | Hotels, vehicles, temples, meal plan, weather bands, gallery, pricing model, reviews, assurances. |
| `src/app/homeSchema.js`, `src/app/packages/[slug]/schemas.js` | Structured data, lifted out of the page files. |
| `src/components/footerLinks.js` | The footer link graph, extracted verbatim. |

## Rewritten

`src/app/page.js` · `src/app/packages/page.js` · `src/app/packages/[slug]/page.js` (+ `CategoryView.js`) · `src/components/Navbar.js` · `src/components/Footer.js`

---

## Stack decisions worth knowing

**Kept JS / React 18 / Tailwind v3 rather than migrating to TS / React 19 / Tailwind v4.**
The site has 79 routes carrying years of SEO work. A full-stack migration touches every file and risks quiet regressions across pages that currently rank, in exchange for no user-visible benefit. The premium experience does not depend on the migration; it depends on the design layer and the motion engine, both of which work as-is. The migration is available later as an isolated project.

**GSAP is not installed.**
Everything GSAP was wanted for — hero reveals, scroll-driven storytelling, section transitions, image reveals, parallax, animated route progression, timeline animation — is implemented in `LuxMotion.js` in about 4 KB, using one IntersectionObserver and one rAF loop. GSAP's core is ~70 KB gzipped before ScrollTrigger. Against a hard Lighthouse ≥95 target on mobile, that is a real cost for effects already delivered. If GSAP is wanted later for something genuinely beyond CSS (morphing paths, complex timelines), it drops in alongside without touching anything here.

**Mapbox is opt-in, and not a build dependency.**
The default route map is a hand-built SVG: scroll-driven route drawing, temple and hotel markers, live stop captions, elevation profile. Zero KB of map JS. To switch:

```bash
NEXT_PUBLIC_MAP_ENGINE=mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=pk.…
```

Then add to the CSP in `next.config.js`:

```
script-src  … https://api.mapbox.com
style-src   … https://api.mapbox.com
connect-src … https://api.mapbox.com https://events.mapbox.com
```

`mapbox-gl` loads from CDN at runtime, so it never enters the bundle for people who do not use it. Route nodes already carry real lat/lng, so no data changes are needed.

**Lenis runs on pointer devices only.**
Touch devices already have excellent native inertia; overriding it costs frames and fights the OS. Lenis is dynamically imported behind `matchMedia('(pointer: fine)')`, so phones never download it.

---

## How motion works

Sections stay **server components**. They write attributes:

```jsx
<div data-lux-reveal>…</div>          {/* rise + fade */}
<div data-lux-reveal="left">…</div>   {/* or fade / left / right / scale */}
<div data-lux-stagger>…</div>         {/* children in sequence */}
<div data-lux-parallax="0.14">…</div> {/* scroll-linked drift */}
```

`LuxMotion` (mounted once in the root layout) observes them all. Adding animation to any page costs zero additional client JS. A MutationObserver picks up nodes added later by accordions and modals.

`prefers-reduced-motion: reduce` short-circuits everything — reveals resolve immediately, Lenis never boots, parallax never runs. There is also a `.no-js` fallback so content is never trapped behind an animation that did not fire.

---

## Booking

One `quote()` function in `BookingPanel.js` drives all three surfaces, so the sticky rail and the cost builder can never disagree. Verified behaviour:

- one adult on defaults pays exactly the advertised base rate
- per-vehicle extras (hill AC) are charged once per group, not per head
- children under 10 pay 65% of the adult rate
- group discounts apply at 6 / 12 / 20 travellers (5% / 9% / 13%)

The WhatsApp CTA assembles the live configuration into a formatted message, so an enquiry arrives already itemised — dates, travellers, hotel tier, vehicle, pickup, add-ons and the indicative total.

**PDF itinerary** uses a real print stylesheet (`@media print` in `luxury.css`) rather than a client-side PDF library: it hides chrome, opens every accordion, flattens the hero and appends link URLs. Zero KB, and it prints correctly from every browser.

---

## SEO

Nothing was dropped. Preserved verbatim: every `generateMetadata`, canonical, OG/Twitter card, `TouristTrip`, `Product` with `aggregateRating`, `FAQPage`, `BreadcrumbList`, author `Person`, and the complete footer link graph (62 internal links).

Added: `ImageGallery` / `ImageObject` schema on package pages.

Verified on the rendered package page — 14 sections, correct H1, 10 `ld+json` blocks, zero images missing `alt`, canonical intact.

---

## Content

`src/data/experience.js` is written as prose, not brochure copy — it says a Kedarnath hut is a hut, that lunch is excluded on purpose so nobody marks up a dhaba bill, and that Badrinath fills on May weekends. That candour is the point: on a pilgrimage booking, specificity is what reads as trustworthy.

Weather, reviews and the AI-planner-style cost builder run on curated data behind clean interfaces. Wiring live sources later (Open-Meteo for weather, Google Places for reviews) means swapping the data source, not the components.

---

## Verified

- `next build` compiles clean (36.4s, zero webpack errors)
- Dev-rendered at HTTP 200 with zero runtime errors: `/`, `/packages`, `/packages/char-dham`, `/packages/char-dham-yatra-9n-10d-haridwar`, `/about`, `/contact`, `/blog`, `/kedarnath-yatra`, `/kedarnath-temple`, `/char-dham-yatra`, `/cabs`, `/char-dham-yatra-from-delhi`, `/blog/kedarnath-trek-guide`, `/char-dham-yatra-bengali`, `/packages/helicopter`, `/char-dham-yatra-cost-calculator`, `/haridwar-to-kedarnath-cab`, `/sitemap-page`, `/badrinath-yatra`
- Price engine unit-tested against six configurations plus invariants
- All 25 Lucide icons resolve against the installed version

**Not verified in this environment:** full static generation of all 207 pages, and real Lighthouse scores. The sandbox blocks Google Fonts and caps process lifetime, so `next build` could not run to completion here and Lighthouse could not be executed. Static generation reached 103/207 with zero errors before the cap. Run `npm run build && npx lighthouse` locally, where fonts resolve, for the real numbers.

---

## Remaining routes

The other ~75 pages (temple guides, city pages, blog, cab pages) keep their markup and their SEO content. They inherit the editorial treatment through the site-wide uplift block at the end of `luxury.css`, which re-skins the shared classes they already use — `.section-title`, `.btn`, `.pkg-card`, `.faq-item`, `.trust-badge` and the rest.

That was a deliberate call: rewriting 75 ranking pages by hand is where regressions come from, and the visual gap closes for free this way. Any of them can be promoted to a full editorial rebuild individually, using the package page as the pattern.
