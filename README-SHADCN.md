# shadcn/ui + MagicUI — install notes

Both libraries are installed and building cleanly against this project's
existing stack (Next 15 App Router, React 18, Tailwind 3.4, plain JavaScript).

Everything is **additive**. No existing file was rewritten except
`tailwind.config.js` and `robots.js`, and the original design system in
`globals.css` is untouched — the new tokens are appended in a marked block
at the bottom of the file.

Live reference page: **`/ui-kit`** (noindex, and excluded in `robots.js`).

---

## What was added

**Dependencies**

    class-variance-authority   clsx                tailwind-merge
    lucide-react               tailwindcss-animate motion
    @radix-ui/react-slot       @radix-ui/react-dialog
    @radix-ui/react-accordion  @radix-ui/react-tabs
    @radix-ui/react-select     @radix-ui/react-icons
    embla-carousel-react

**Files**

    components.json                  registry config (tsx: false)
    src/lib/utils.js                 cn() helper
    src/components/ui/*.jsx          10 shadcn components
    src/components/magicui/*.jsx     6 MagicUI components
    src/app/ui-kit/                  reference page (noindex)

**Components**

shadcn: button, card, dialog, accordion, tabs, input, select, badge, sheet, carousel
MagicUI: marquee, number-ticker, blur-fade, shimmer-button, animated-beam, bento-grid

---

## How the theme is wired

shadcn's semantic tokens are mapped to the Shiv Ganga palette in the
`:root` block at the bottom of `globals.css`, so components arrive
on-brand rather than slate-grey:

| shadcn token | resolves to        | hex       |
|--------------|--------------------|-----------|
| `primary`    | navy               | `#0F2B5B` |
| `secondary`  | gold               | `#E8920A` |
| `accent`     | navy-light         | `#E8F0FB` |
| `background` | page bg            | `#F8F9FC` |
| `foreground` | body text          | `#0F172A` |
| `muted-foreground` | meta text    | `#64748B` |
| `destructive`| red                | `#DC2626` |
| `border` / `input` | border       | `#E2E8F0` |
| `ring`       | navy               | `#0F2B5B` |
| `chart-1..5` | navy, gold, teal, navy-mid, gold-dark |

`--radius` is `0.75rem`, matching the site's existing `--r: 12px`.

**Why this was safe.** An audit of `src/` found *zero* Tailwind colour
utilities in use anywhere — the site styles entirely through inline
`style={{}}` objects and the hand-written classes in `globals.css`. The
`colors` block in the old `tailwind.config.js` was effectively unused. So
adopting standard shadcn token names collides with nothing, and it means
components copied from either registry work **verbatim**, with no
find-and-replace needed.

(Worth knowing: the 419 apparent `text-muted` hits in `src/` are 416
`var(--text-muted)` CSS-variable references plus 3 more in inline styles —
none of them are Tailwind classes.)

**Dark mode** is set to `darkMode: ['class']` and a `.dark` block exists
in `globals.css`, but nothing ever sets `dark` on `<html>`, so every
`dark:` variant is inert. It's there so shadcn components compile and so
dark mode is a one-line change if you ever want it.

---

## Cost of the install

Measured against a clean build of the original zip:

| | before | after | delta |
|---|---|---|---|
| Shared JS (every route) | 142 kB | 142 kB | **0** |
| Per-route JS (e.g. `/blog/*`) | 181 kB | 181 kB | **0** |
| CSS (raw) | 57,733 B | 84,674 B | +26,941 B |
| CSS (gzipped) | 12,789 B | 17,895 B | **+5,106 B** |

JS is unchanged because nothing in the production pages imports the new
components yet — they only get bundled into routes that actually use them.

CSS is different, and this is the one thing worth understanding: **Tailwind
generates utilities by scanning the `content` globs, not the import graph.**
`./src/components/**/*` now matches the 16 new component files, so their
classes (`data-[state=open]:…`, `focus-visible:ring-1`, the shimmer
conic-gradient, etc.) are compiled into the single global stylesheet that
every page loads — whether or not any page imports them.

So ~5 kB gzipped is currently dead weight on all 200+ routes. Once you
start using the components it stops being dead weight. If you want it back
now, delete the component files you aren't going to use — the CSS for them
disappears on the next build. Deleting `src/app/ui-kit/` alone only
recovers ~2 kB, since the component files themselves are what Tailwind is
scanning.

---

## Adding more components

The registry CDNs were unreachable from the machine this was installed on,
so components were taken from the GitHub sources directly. If `npx shadcn`
works from your network, the normal path is:

    npx shadcn@latest add <component>
    npx shadcn@latest add "https://magicui.design/r/<component>.json"

`components.json` has `"tsx": false`, so the CLI emits `.jsx` and this
project stays pure JavaScript — no `tsconfig.json`, no TypeScript
dependency.

### If you have to pull from GitHub again

Two things need fixing by hand, both because the upstream repos have moved
to Tailwind v4 while this project is on v3:

1. **Use the v3-era shadcn components.** The current `main` branch only
   ships `apps/v4/registry/new-york-v4`, which targets React 19 — it drops
   `forwardRef` and passes `ref` as a plain prop, which silently breaks on
   React 18. The last Tailwind-v3 / `forwardRef` versions live at commit
   `2bfc1c82^` under `apps/www/registry/new-york/ui/`. That is what is
   installed here.

2. **Rewrite Tailwind v4 syntax.** MagicUI's current source uses v4-only
   forms. The ones hit during this install:

   | v4 (upstream) | v3 (this project) |
   |---|---|
   | `gap-(--gap)` | `gap-[var(--gap)]` |
   | `inset-(--cut)` | `inset-[var(--cut)]` |
   | `@container-[size]` | `[container-type:size]` |
   | `bg-black/3` | `bg-black/[0.03]` |

Keyframes for `accordion-down/up`, `marquee`, `marquee-vertical`,
`spin-around` and `shimmer-slide` are already defined in
`tailwind.config.js`. New MagicUI components may need their own added
there — the CLI normally does this for you.

---

## Usage

```jsx
import { Button } from '@/components/ui/button';
import { Marquee } from '@/components/magicui/marquee';

<Button>Book now</Button>              {/* navy  */}
<Button variant="secondary">Enquire</Button>  {/* gold  */}

<Marquee pauseOnHover className="[--duration:25s]">
  {reviews.map(r => <ReviewCard key={r.id} {...r} />)}
</Marquee>
```

One gotcha: `ShimmerButton` sets `--radius` inline for its own border
radius, which shadows the global `--radius` for anything nested inside it.
If you put a `rounded-lg` child inside a `ShimmerButton`, it will inherit
the button's radius rather than the theme's.

---

## Existing components worth migrating

These hand-built components map cleanly onto what was just installed, if
you ever want to consolidate:

| existing | maps to |
|---|---|
| `FAQAccordion.js` | `ui/accordion` |
| `TestimonialSlider.js` | `ui/carousel` |
| `AutoScrollRow.js` | `magicui/marquee` |
| `CounterStat.js` | `magicui/number-ticker` |
| `ScrollReveal.js` | `magicui/blur-fade` |
| `LeadPopup.js` | `ui/dialog` |
| `PackageCard.js` | `ui/card` + `ui/badge` |

No migration has been done — the existing components are untouched and
still in use.
