# UI Component Guide

How to build UI on this project. Read the hierarchy in §2 before writing a
component; it answers "where does this come from" in almost every case.

Live reference: **`/ui-kit`** (noindex). Design language reference:
**`/styleguide`**. The written companion to the latter is `DESIGN-SYSTEM.md`.

---

## 1 · The stack

| | |
|---|---|
| Framework | Next.js 15 App Router, React 18, **plain JavaScript** (no TypeScript) |
| Styling | Tailwind CSS **v3.4** + `tailwindcss-animate` |
| Registry config | `components.json`, `"tsx": false` → the CLI emits `.jsx` |
| Icons | `Icon.js` (41 hand-drawn glyphs) for UI; `lucide-react` inside registry components |
| Motion | `motion` v12, plus the `LuxMotion` runtime mounted once in `layout.js` |

**React 18, not 19.** This matters. Upstream shadcn/Aceternity/Magic UI have
moved to React 19 (`ref` as a plain prop) and Tailwind v4. Components written
that way break silently here — a dropped `ref` doesn't throw, it just stops
working. See §6.

---

## 2 · The decision hierarchy

Work down this list. Stop at the first level that answers the need.

### 1. An existing project component
Check `src/components/` first. The project already has a lot, and a second
version of something is worse than an imperfect first version.

Things that already exist and should not be rebuilt:

| Need | Use |
|---|---|
| Collapsible itinerary / FAQ | `package/ItineraryTimeline.js`, `package/PackageFaqs.js`, `FAQAccordion.js` |
| Featured-quote carousel | `TestimonialSlider.js` |
| Scroll reveal | `Reveal.js`, `ScrollReveal.js`, or `data-lux-reveal` |
| Count-up figure | `CountUp.js` (~1 kB, SSR-safe) |
| Section primitives | `lux/primitives.js` — `Section`, `SectionHead`, `Frame`, `Facts`, `Pill` |
| Icons | `Icon.js` |
| Cab booking flow | `CabBookingWizard.js`, `cabs/CabSections.js` |

### 2. shadcn/ui — the default primitive
`src/components/ui/`. Anything with behaviour and an accessibility contract:
buttons, dialogs, menus, forms, tables. **Never hand-roll a primitive shadcn
provides.** Add with:

```bash
npx shadcn@latest add <component>
```

Installed: `accordion, alert, badge, breadcrumb, button, calendar, card,
carousel, dialog, drawer, dropdown-menu, form, input, label, navigation-menu,
popover, select, separator, sheet, skeleton, sonner, table, tabs, textarea,
tooltip`.

### 3. Magic UI — animation and premium interaction
`src/components/magicui/`. Reach here when a *primitive already exists* and the
need is specifically motion or emphasis.

| Component | Use for | Cost |
|---|---|---|
| `marquee` | Continuous logo/review scroll | **zero JS** (CSS animation) |
| `number-ticker` | Hero stat count-up | client + `motion` |
| `blur-fade` | Chrome entrance | client + `motion` |
| `shimmer-button` | High-emphasis CTA | client (`forwardRef`) |
| `bento-grid` | Asymmetric feature grid | **zero JS** (server) |
| `animated-beam` | Connecting two nodes | client + `motion` |
| `animated-shiny-text` | Trust chips, eyebrows | **CSS only** |
| `animated-gradient-text` | One hero eyebrow per view | **CSS only** |
| `aurora-text` | One accent word in a headline | **CSS only** |
| `border-beam` | THE primary conversion surface | **CSS only** |

### 4. Aceternity UI — advanced visual sections
`src/components/aceternity/`. Whole-section treatments, not primitives.

| Component | Use for | Cost |
|---|---|---|
| `spotlight` | Dark hero light shaft | **CSS only** |
| `timeline` | Journey / milestone narrative | **zero JS** (server) |
| `card-3d` | Destination cards that tilt | client, ~1 kB |
| `sticky-scroll-reveal` | Destination presentation | client, 1 observer |

### 5. React Bits — distinctive interaction
`src/components/reactbits/`. Surface and pointer treatments.

| Component | Use for | Cost |
|---|---|---|
| `spotlight-card` | Pointer-following card highlight | client, no re-render |
| `glare-hover` | Sheen on photographic tiles | **zero JS** (server) |
| `magnet` | The one primary CTA | client, rAF-throttled |

### 6. Tailark-style blocks — complete sections
`src/components/sections/`. Composed blocks, rebuilt on this project's tokens
rather than copied.

`SectionShell` (container + rhythm + heading — **wrap every marketing section
in it**), `FeatureGrid`, `CTABanner`, `StatBand`, `TestimonialWall`,
`LogoCloud`.

### 7. Custom
Only when nothing above fits. Put it in the domain folder (§4), build it on the
tokens in §3, and add a line to this file explaining why it had to be new.

---

## 3 · The design system

One token contract: **`src/app/ui-system.css`**. Every imported component
resolves through it. Load order in `layout.js`:

```
globals.css        brand palette + the live commercial system
luxury.css         editorial layer (.lux-*)
design-system.css  editorial token scales (--ds-*)
ui-system.css      ← the contract. Last, so it reconciles the above.
```

### Two density contexts, one system

The site is mid-migration (`DESIGN-SYSTEM.md` phases 2–7). Geometry is a
*context*, not a second design system:

| Context | Radius | Border | Shadow | Where |
|---|---|---|---|---|
| `:root` (default) | 12px | slate | soft | the ~190 live routes |
| `[data-ui="editorial"]` | 2px | navy hairline | none | redesigned pages |

Opt in by putting the attribute on any wrapper. Everything inside inherits —
same components, same tokens, only the geometry moves.

```jsx
<section data-ui="editorial">
  <Card />   {/* 2px, hairline, no shadow */}
</section>
```

**A third context is not allowed.** If a component needs a look neither
provides, the look is wrong, not missing.

### The scales

| | Values |
|---|---|
| **Spacing** | 4px rhythm: `--ui-space-1…20` (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80) |
| **Section rhythm** | `--ui-section-y` `clamp(56px, 7vw, 112px)`; gutter `clamp(20px, 5vw, 64px)` |
| **Containers** | `--ui-max` 1280px · `--ui-max-wide` 1440px · `--ui-narrow` 720px. Three, and only three. |
| **Radius** | sharp 0 · tight 2px · soft 8px · card 12px · pill 100px |
| **Elevation** | `--ui-elev-1/2/3/float`. Navy-tinted, never neutral grey. |
| **Duration** | fast 150ms (hover) · base 250ms (default) · slow 450ms (entrance) |
| **Easing** | `--ui-ease` symmetric (reversible) · `--ui-ease-out` decelerating (arrivals) |
| **Hover** | `.ui-lift` — −3px + elev-3. Every interactive card uses it, so they all move alike. |
| **Breakpoints** | Tailwind defaults: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 |

### Typography

Playfair Display (`--font-display`) for display headlines, Plus Jakarta Sans
(`--font`) for everything else. Headline scale is fluid:
`text-[clamp(1.6rem,1.1rem+2vw,2.6rem)]` for section titles — `SectionShell`
applies it, so you rarely set it by hand.

### Colour

Palette is fixed and **must not change without explicit permission**: navy
`#0F2B5B`, gold `#E8920A`, teal `#0B7B8B`. shadcn semantics map onto it in
`globals.css` — `primary` → navy, `secondary` → gold, `accent` → navy-light.

**Gold is punctuation.** One gold element per view. It is not a fill.

### Motion

`components/animations/motion-presets.js` holds the shared durations, easings
and variants for anything using `motion`. Components either use the CSS tokens
or import from there — nothing invents its own timing.

---

## 4 · Folder layout

```
src/components/
  ui/           shadcn/ui primitives              ← don't hand-roll these
  magicui/      Magic UI                          ← animation / emphasis
  aceternity/   Aceternity UI                     ← section-scale visual effects
  reactbits/    React Bits                        ← pointer / surface interaction
  sections/     Tailark-style composed blocks     ← whole marketing sections
  animations/   shared motion vocabulary
  lux/          editorial server primitives + LuxMotion runtime
  package/      package-detail domain components
  cabs/         cab-booking domain components
```

The ~50 components at the root of `src/components/` are the existing
domain layer. They are imported by ~200 routes and were deliberately **not**
moved — the churn would be large and the benefit cosmetic. As pages are
redesigned, relocate them into domain folders:

| Destination | Belongs there |
|---|---|
| `travel/` | `PackageCard`, `PackageCardLux`, `DistancePage`, `KedarnathFareCalc`, `CharDhamRoadChecker`, `DoDhamConfigurator`, `GoogleMapEmbed` |
| `marketing/` | `TrustStrip`, `LeadPopup`, `WhyOurPrice`, `DirectOperatorStrip`, `GoogleReviews`, `TestimonialSlider` |
| `navigation/` | `Navbar`, `Footer`, `Breadcrumb`, `footerLinks`, `CityLinkMesh`, `LanguageLinkMesh` |

Move them when you are already editing them. Not as a separate refactor.

---

## 5 · Performance rules

These are not suggestions — the site has 200+ routes and ranks on most of them.

1. **CSS before JS.** Tailwind's `content` globs scan `src/components/**`, so a
   component's classes compile into the *global* stylesheet whether or not any
   page imports it. The current registry set costs **~5 kB gzipped on every
   route**. Delete component files you will not use; the CSS goes with them.
2. **Never ship ranking copy at `opacity: 0`.** `motion` writes initial values
   into the SSR HTML. Wrapping itinerary or FAQ text in a fade means shipping it
   invisible to crawlers. Use transform-only reveals (`VARIANTS.rise`) for
   content; `VARIANTS.fade` is for decorative chrome only.
3. **Never unmount content to collapse it.** Radix Accordion removes collapsed
   children from the DOM. On the itinerary and FAQ pages that would strip the
   ranking copy — which is why `ItineraryTimeline.js` and `PackageFaqs.js` use
   native `<details>` instead.
4. **`NumberTicker` renders `0` in the SSR HTML.** Fine in a hero if you also
   emit the real figure in an `sr-only` span. Not fine in a trust band — use
   static text or `CountUp.js`.
5. **Prefer server components.** Everything in `sections/`, plus
   `aceternity/timeline`, `reactbits/glare-hover`, `magicui/marquee` and
   `magicui/bento-grid`, ships zero client JS. Check the directive before
   assuming otherwise — several registry components animate entirely in CSS
   and only *look* like they need a client boundary. The inverse trap is worse:
   a file using `forwardRef` or a hook **must** carry `'use client'` or it
   throws the moment a server component imports it.
6. **Reduced motion is handled in two places.** Class-driven animation is
   stopped by `ui-system.css`. Components animating via rAF inline styles
   (`blur-fade`, `number-ticker`) carry a `LOCAL PATCH` in their own source —
   **re-running `npx shadcn add` on those overwrites the patch.**
7. **Lazy-load the heavy primitives.** `form` (react-hook-form + zod) and
   `calendar` (react-day-picker + date-fns) are ~45 kB gzipped together. Import
   them with `next/dynamic` on any route where they're below the fold.

---

## 6 · Adding from a registry

```bash
npx shadcn@latest add <component>                              # shadcn
npx shadcn@latest add "https://magicui.design/r/<name>.json"   # Magic UI
```

The CLI detects Tailwind v3 and serves the v3 registry, which uses
`forwardRef` — React 18-safe. Verify that anyway: if the generated component
takes `ref` as a plain function parameter instead of `React.forwardRef`, it is
the React 19 build and **will silently drop refs**.

**Aceternity and React Bits are copy-paste, not CLI.** Their published sources
target React 19 + Tailwind v4. Port before use:

| v4 (upstream) | v3 (here) |
|---|---|
| `gap-(--gap)` | `gap-[var(--gap)]` |
| `size-(--x)` | `size-[var(--x)]` |
| `shadow-xs` | `shadow-sm` |
| `has-focus:` | `has-[:focus]:` |
| `**:[…]` (universal descendant) | no equivalent — rewrite or drop |
| `@container-[size]` | `[container-type:size]` |
| `bg-black/3` | `bg-black/[0.03]` |
| `ref` as a prop | wrap in `React.forwardRef` |

Note `bg-[--my-var]` **is** valid in v3.3+ — it does not need rewriting.

Also: `duration-[var(--x)]` and `ease-[var(--x)]` are ambiguous in v3 and
warn at build. Use `[transition-duration:var(--x)]` instead.

New keyframes go in `tailwind.config.js` under `theme.extend.keyframes` —
and add the class name to the reduced-motion block in `ui-system.css`.

### Registry selection criteria

Only add a registry component when it solves a real requirement, is
maintained, adds no new dependency, and is MIT or equivalent. Deliberately
**not** taken:

- anything requiring `three.js`, `gsap`, or `@tabler/icons-react` — a second
  animation or icon library for one effect is not a trade worth making
- Aceternity `moving-border` — duplicates `border-beam`'s technique
- Aceternity `background-beams`, `glowing-cards` — the neon-SaaS look the
  brief rules out
- React Bits `SplitText`, `ScrollFloat` — GSAP-dependent

---

## 7 · Working agreement

When asked to build UI:

1. Inspect existing components first.
2. Check shadcn/ui before creating any primitive.
3. Check the registries in §2 before writing custom.
4. Reuse before adapting; adapt before creating.
5. Style through the tokens in §3 — never hard-code a colour, radius or duration.
6. Keep dependencies minimal. A pretty demo is not a reason to install anything.
7. No animation without a reason. Decoration that moves is still decoration.
8. No generic SaaS layouts, no glow, no random blobs, no glassmorphism by default.
9. Do not change brand identity — palette, fonts, logo — without explicit permission.
10. Do not touch business logic, SEO metadata, JSON-LD or routing for a UI change.
