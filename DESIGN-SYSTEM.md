# Shiv Ganga Travels — Design System

**Phase 1 deliverable · the editorial luxury language.**
Live showcase: **`/styleguide`** (run `npm run dev`, open `http://localhost:3000/styleguide`).

This document is the written companion to that page. It records the principles, the
tokens, the component contracts, the motion model and the accessibility guarantees — so
Phases 2–7 build on one language instead of reinventing it per page.

---

## 0 · Where the system lives

| File | Role | Status |
|---|---|---|
| `src/app/globals.css` | Brand vars (`--navy/--gold/--teal`), fonts, reset, the existing commercial UI. Loaded site-wide. | Live (untouched) |
| `src/app/luxury.css` | **The editorial layer** — typography, spacing, surfaces, media, reveals, controls, header, package/booking/route/gallery/FAQ/weather blocks, print, a11y. 22 sections. | **Revived** in Phase 1 |
| `src/app/design-system.css` | **New in Phase 1.** Formal token scales + the pieces the editorial layer lacked: glass, elevation, skeletons, loaders, button states, form controls, status chips. | New |
| `src/components/lux/primitives.js` | Server-component primitives: `Section`, `SectionHead`, `Reveal`, `Stagger`, `Lines`, `Eyebrow`, `Frame`, `Facts`, `Pill`, `Rule`. Zero hydration. | Revived |
| `src/components/lux/LuxMotion.js` | The single client motion runtime (~4 KB): Lenis + one IntersectionObserver + rAF parallax. | Revived |
| `src/components/Icon.js` | The 41-glyph line-icon system — 1.8 stroke, 24px grid, `currentColor`. | Live (adopted) |

### Why "revived"

A complete editorial redesign already existed in this repo but was **switched off** —
`luxury.css` was imported nowhere and the `lux/` components were dead code. Phase 1's chosen
strategy was to *revive and elevate* it rather than build a third system from scratch.

**Scoping guarantee:** in Phase 1 the editorial layer is imported **only** by
`src/app/styleguide/page.js`. Next.js code-splits CSS per route, so none of it loads on the
157 live routes. The live site is visually unchanged until you approve Phase 2. Wiring the
editorial layer into the root layout happens page-by-page as each page is redesigned.

---

## 1 · Principles

1. **Quiet over loud.** Hairlines and whitespace carry structure. Shadows and colour are
   earned. Gold appears once per view, as punctuation — never as a default fill.
2. **Editorial rhythm.** Playfair Display against Plus Jakarta Sans, a generous reading
   measure, a strict vertical cadence. It should read like a travel journal.
3. **Motion is a luxury, never a barrier.** One runtime, GPU-only transforms, fully
   reversible under `prefers-reduced-motion`.
4. **Trust through candour.** On a pilgrimage booking, specificity reads as honesty. The
   type system exists to make plain facts legible.
5. **Server-first.** Components are static markup + data-attributes. Almost no client JS —
   which is what keeps it fast on a Himalayan mobile connection.
6. **Accessible by construction**, not by afterthought (see §12).

---

## 2 · Colour tokens

Palette is **unchanged** from the brand. Everything non-brand is a derived ink or paper tone.

| Token | Value | Use |
|---|---|---|
| `--navy` | `#0F2B5B` | Primary brand, trust |
| `--navy-mid` | `#1A3E75` | Secondary navy surfaces |
| `--ink` | `#0B1B38` | Display headlines, deepest text |
| `--ink-soft` | `#2C3E5C` | Body copy on light |
| `--ink-faint` | `#7A8699` | Captions, meta, labels |
| `--gold` / `--gold-dark` | `#E8920A` / `#C67A08` | CTAs, accents, focus ring |
| `--teal` / `--teal-dark` | `#0B7B8B` / `#09666F` | Cool secondary / info |
| `--paper` / `--paper-deep` / `--paper-cool` | `#FBFAF7` / `#F3F1EC` / `#F6F8FC` | Section surfaces |
| `--rule` / `--rule-strong` | `rgba(15,43,91,.12)` / `.22` | Hairlines, borders |
| `--gold-hair` / `--gold-wash` | `rgba(232,146,10,.32)` / `.07` | Restrained gold edges/tints |

**Semantic / status** (`design-system.css`): `--ds-ok #1E7A4D`, `--ds-info` (teal),
`--ds-warn #B7791F`, `--ds-danger #C23A34`, each with a matching `-tint`.

**Contrast:** ink/ink-soft on paper clear WCAG AA (≥4.5:1). Gold is used for fills and
large/UI text only — never small body text on white.

---

## 3 · Typography

Fonts load via `next/font` (self-hosted, non-blocking): **Playfair Display** (`--font-display`,
headlines) and **Plus Jakarta Sans** (`--font`, everything else). The scale is fluid (`clamp`).

| Class | Role |
|---|---|
| `.lux-display--xl/lg/md/sm` | Display headlines (fluid 1.15rem → 3.5rem) |
| `.lux-eyebrow` | Micro-label — the signature luxury device |
| `.lux-lede` | Section intro, ~62ch measure |
| `.lux-body` | Long-form copy, ≤68ch measure |
| `.lux-caption` | Photo credits, meta |
| `.lux-figure` | Big stat numerals (tabular) |
| `.lux-accent` | Italic gold — **one word per headline, sparingly** |

---

## 4 · Spacing, grid & radius

- **Component spacing** — 4px rhythm: `--ds-space-1…20` (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80).
- **Section rhythm** — cinematic & separate: `--lux-y` = `clamp(72px, 9vw, 148px)`,
  `--lux-gutter` = `clamp(20px, 5vw, 64px)`.
- **Grid** — `.lux-grid` + `--2/--3/--4`, collapsing to 2 then 1 at 980px / 620px.
  Max content `--lux-max` 1320px; reading measure `--lux-narrow` 720px.
- **Radius** — editorial = tight: `--ds-r-0/1/2/3/4/pill` = 0, 1, 2, 4, 8, 100px.
  The house default for cards/frames is `--ds-r-2` (2px). Pills and floating glass are the
  only rounded surfaces.

---

## 5 · Elevation & glass

Elevation is **navy-tinted** (never neutral grey) and used only for surfaces that float.

| Utility | Token | Use |
|---|---|---|
| `.lux-elev-1` | `--ds-elev-1` | Resting cards that need a hint of lift |
| `.lux-elev-2` | `--ds-elev-2` | Popovers, dropdowns |
| `.lux-elev-3` | `--ds-elev-3` | Sticky booking rail, hover-lifted cards |
| `.lux-elev-float` | `--ds-elev-float` | Drawers, modals, glass |
| `.lux-lift` | — | Card lifts −4px + elev-3 on hover |

**Glass** — `.lux-glass`, `.lux-glass--dark`, `.lux-glass--gold`. Uses `backdrop-filter`
behind `@supports`, and **falls back to an opaque surface** on screens ≤680px and under
`prefers-reduced-transparency` (keeps text legible, frees the mobile GPU).

**Overlays** — `.lux-overlay` (fixed dark veil for modals/drawers, `.is-open` toggles) vs.
`.lux-scrim` (gradient for text-over-image, from `luxury.css`).

---

## 6 · Buttons & controls

`.lux-btn` — uppercase, wide-tracked (0.15em), 1px radius, min-height 48px.

- **Variants:** `--gold` (primary, once per view), `--ink`, `--ghost`, `--ghost-light` (on dark).
- **Sizes:** `--sm` (38px), default (48px), `--lg` (56px). `--wide` = full width.
- **States:** hover + `:focus-visible` (2px gold ring) built in; Phase 1 adds `:disabled`
  / `.is-disabled` (0.45 opacity) and `.is-loading` (label → transparent, inline spinner,
  **fixed width so there's no layout shift**).

Also: `.lux-link` (editorial underline anchor), `.lux-pill` (`--gold/--light/--solid`),
`.lux-status` chips (`--ok/--info/--warn/--danger`).

**Form controls** (`design-system.css`, for Phase 5): `.lux-field` / `.lux-label` /
`.lux-input` / `.lux-select` / `.lux-textarea` with a gold focus ring, plus `.is-valid` /
`.is-invalid` field states and `.lux-hint`.

---

## 7 · Surfaces & cards

- `.lux-card` — hairline border, 2px radius, border darkens on hover. `--dark` for ink
  sections, `--flush` for zero radius.
- `.lux-mark` — 2px gold left edge for emphasis blocks.
- `.lux-facts` — the quiet-luxury spec list, rendered as a real `<dl>` via the `Facts`
  primitive.
- `.lux-frame` — cinematic image container with aspect ratios (`3x2/4x5/16x9/…`), slow
  hover zoom, and curtain-wipe reveal via the `Frame` primitive.

---

## 8 · Icons

One system: **`Icon.js`**, 41 glyphs, 1.8 stroke on a 24px grid, drawn in `currentColor`.
No emoji — iconography renders identically on every OS. Sizing helpers:
`.lux-ico-sm/md/lg/xl` (16/20/24/32) and `.lux-ico-chip` (gold-wash circular chip).

Usage: `<Icon name="mountain" size={24} />`. Names are decorative; always pair with a text
label for meaning.

---

## 9 · Loading & skeletons

- **Spinner** — `.lux-spinner` (`--sm/--lg/--light`): thin gold ring.
- **Indeterminate bar** — `.lux-bar`.
- **Dots** — `.lux-dots` (chat/async thinking indicator).
- **Skeletons** — `.lux-skel` + `--line/--text/--title/--figure/--circle/--img/--chip`,
  plus ready-made `.lux-skel-card`. Paper-toned wash, one shimmer. Skeletons **mirror the
  real content's footprint** so CLS stays at zero when data arrives.

All loaders degrade under `prefers-reduced-motion` (spinner slows, skeleton/bar/dots stop).

---

## 10 · Motion model

Sections stay **server components** and write attributes; `LuxMotion` (mounted once) animates
them. Adding motion to a page costs **zero** extra client JS.

| Attribute / class | Effect |
|---|---|
| `data-lux-reveal` (`up`\|`fade`\|`left`\|`right`\|`scale`) | Rise/fade in on scroll |
| `data-lux-stagger` | Children reveal in sequence |
| `.lux-lines` (via `Lines`) | Headline rises line-by-line |
| `.lux-reveal-img` (via `Frame`) | Curtain wipe + scale settle |
| `data-lux-parallax="0.14"` | Scroll-linked drift (rAF-batched) |

Principles: GPU-only (`transform`/`opacity`), no layout shift, content reveals on the way
**up** the page, nothing bounces. A `.no-js` fallback forces content visible if the runtime
never boots. Lenis smooth-scroll runs on `pointer:fine` devices only (phones keep native
inertia).

**Library stance:** GSAP and Mapbox are intentionally **not** dependencies — their target
effects are delivered by `LuxMotion` (~4 KB) and a hand-built SVG route map. Either can be
added later for something genuinely beyond CSS without disturbing this system.

---

## 11 · Component & primitive reference

Server primitives (`@/components/lux/primitives`):

```jsx
<Section tone="paper|paper-deep|ink|navy" tight wrapWidth="narrow|wide">…</Section>
<SectionHead eyebrow="…" title="…" lede="…" light size="lg" aside={…} />
<Reveal variant="up|fade|left|right|scale" delay={0.1}>…</Reveal>
<Stagger>…children…</Stagger>
<Lines lines={['line one','line two']} />
<Eyebrow light plain>…</Eyebrow>
<Frame src sizes srcSet ratio="3x2" priority zoom parallax="0.12" alt="…" />
<Facts items={[{k:'Duration', v:'11N · 12D'}]} />
<Pill tone="gold|light|solid">…</Pill>
<Rule tone="light|gold" />
```

---

## 12 · Accessibility (WCAG AA)

- **Contrast** — body/ink on paper ≥4.5:1; large display & UI ≥3:1.
- **Focus** — every interactive element shows a 2px gold `:focus-visible` ring at 3px offset;
  focus is styled, never removed.
- **Reduced motion** — `prefers-reduced-motion` resolves all reveals, spinners, curtains and
  parallax instantly; nothing depends on an animation completing.
- **Reduced transparency & mobile** — glass drops blur → opaque fallback.
- **No-JS safety net** — `.no-js` forces revealed content visible.
- **Semantics** — fact lists are `<dl>`; sections carry headings; icons are decorative SVG
  with text labels.

---

## 13 · Phase 1 change log

**Added**
- `src/app/design-system.css` — token scales (space/radius/elevation/z-index/semantic/motion/
  icon), glass, overlays, elevation utils, skeletons, loaders, button `disabled`/`loading`,
  form controls, status chips. Additive, `lux-` namespaced, brace-balanced.
- `src/app/styleguide/page.js` — living showcase route (server component, `noindex`, mounts
  `LuxMotion`, imports the editorial layer route-locally).
- `DESIGN-SYSTEM.md` — this document.

**Revived (already existed, wired into the showcase only)**
- `luxury.css` + the `lux/` primitive & runtime suite.

**Unchanged**
- Brand palette, fonts, `globals.css`, all 157 live routes, all SEO/metadata/business logic.

**Verification**
- JSX parses clean (esbuild); `design-system.css` brace-balanced; all imports resolve to real
  exports; all 41 icon names valid.
- ⚠️ A live HTTP 200 render could **not** be captured in the build environment — `next dev`
  would not finish booting on the OneDrive-backed filesystem (the homepage failed to serve
  too, confirming a global startup hang unrelated to this code). Run `npm run dev` locally to
  view `/styleguide`.

---

## 14 · Roadmap (post-approval)

- **Phase 2** Homepage — cinematic hero, destination sections, luxury package cards, counters,
  testimonials, hotel/vehicle showcases, journey timeline, interactive Char Dham route, footer.
- **Phase 3** Package listing — filters, editorial cards, smart sorting, micro-interactions.
- **Phase 4** Package detail — Remote Lands itinerary, sticky booking panel, animated timeline,
  interactive map, galleries, hotel/vehicle cards, FAQs, reviews.
- **Phase 5** Booking flow — multi-step glass wizard, sticky summary, animated validation.
- **Phase 6** Motion polish across the site.
- **Phase 7** Performance — Lighthouse 95+, CLS <0.05, LCP <2s, INP <200ms.

Each phase: **audit first, then redesign; preserve content, SEO and functionality; stop for
approval before the next.**
