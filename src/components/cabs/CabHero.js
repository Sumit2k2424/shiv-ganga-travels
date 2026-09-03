/* ══════════════════════════════════════════════════════════════
   CabHero — the one hero for all five cab tiers.

   What was wrong with the old one: every cab page opened with a flat
   navy band, a centred pill, a centred h1 and a row of four identical
   pills. Nothing read first, because everything was the same weight
   and the same alignment. On a page whose whole job is "how far, how
   long, how much", the numbers were the least prominent thing on it.

   What this is instead. The subject is a road climbing out of the
   plains into the Himalaya, so the backdrop is that: a dawn gradient,
   three ridgelines receding into haze, and film grain over the top to
   kill the banding a wide gradient always produces. All of it is CSS
   and one inline SVG — no image to download, no WebGL, no client JS,
   and it costs the same on all 106 cab URLs.

   The numbers then get a proper spec rail: hairline-divided cells,
   micro-label above value, tabular numerals so the digits line up.
   The fare is the single gold element on the page, per the house rule
   that gold is punctuation rather than a fill.

   Server component. Motion is the existing data-lux-reveal contract
   that LuxMotion picks up, and it is transform-only on the headline
   and lede — those carry ranking copy and must never ship at
   opacity: 0. The ridges animate once on entrance and never loop;
   ambient looping is what made the old CTA surfaces feel cheap.
   ══════════════════════════════════════════════════════════════ */

import Link from 'next/link';

import { Reveal } from '@/components/lux/primitives';
import SpecRail from '@/components/lux/SpecRail';

/* Three ridgelines in one SVG, drawn back to front. preserveAspectRatio
   is 'none' so they stretch to any viewport without letterboxing — these
   are silhouettes, not diagrams, so the distortion is invisible and the
   alternative (a fixed aspect) would crop the peaks on mobile. */
function Ridges() {
  return (
    <svg
      className="cabhero__ridges"
      viewBox="0 0 1440 340"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* far range — highest, palest, most air in front of it */}
      <path
        className="cabhero__ridge cabhero__ridge--far"
        d="M0 226 L58 204 L104 218 L150 176 L198 208 L252 118 L300 186 L346 170 L400 214 L452 190 L510 148 L556 200 L610 182 L664 212 L716 96 L772 168 L820 200 L876 178 L930 210 L986 156 L1040 196 L1094 174 L1150 206 L1206 138 L1258 190 L1312 172 L1368 208 L1420 186 L1440 198 L1440 340 L0 340 Z"
      />
      {/* mid range */}
      <path
        className="cabhero__ridge cabhero__ridge--mid"
        d="M0 262 L54 246 L112 258 L168 228 L226 252 L286 214 L340 248 L398 234 L458 258 L516 226 L572 250 L630 238 L690 260 L748 220 L806 246 L864 232 L922 256 L980 236 L1038 254 L1096 222 L1152 248 L1210 240 L1268 260 L1326 234 L1384 252 L1440 242 L1440 340 L0 340 Z"
      />
      {/* near ridge — darkest, sits under the content */}
      <path
        className="cabhero__ridge cabhero__ridge--near"
        d="M0 296 L96 286 L182 296 L276 278 L360 292 L452 282 L540 294 L634 276 L722 290 L814 284 L906 296 L998 280 L1090 292 L1180 286 L1274 296 L1364 284 L1440 292 L1440 340 L0 340 Z"
      />
    </svg>
  );
}

/* The journey line: two marked points and the road between them.
   Only rendered when a page actually is a journey — route pages. On a
   destination or vehicle page there is no "from", and drawing one
   would be decoration pretending to be information. */
function JourneyLine({ from, to }) {
  if (!from || !to) return null;
  return (
    <Reveal variant="fade" className="cabhero__journey">
      <span className="cabhero__place">{from}</span>
      <span className="cabhero__road" aria-hidden="true">
        <i className="cabhero__dot" />
        <i className="cabhero__line" />
        <i className="cabhero__dot cabhero__dot--end" />
      </span>
      <span className="cabhero__place">{to}</span>
    </Reveal>
  );
}

/**
 * @param crumbs  [[label, href|null], …] — last entry is the current page
 * @param eyebrow short kicker line above the headline
 * @param title   the h1
 * @param lede    one sentence under it
 * @param from/to optional — draws the journey line
 * @param specs   [{ k, v, gold }] — the spec rail. Mark exactly one gold.
 */
export default function CabHero({ crumbs = [], eyebrow, title, lede, from, to, specs = [] }) {
  return (
    <section className="cabhero" data-ui="editorial">
      {/* ── backdrop, all decorative ── */}
      <div className="cabhero__sky" aria-hidden="true" />
      <div className="cabhero__dawn" aria-hidden="true" />
      <div className="cabhero__haze" aria-hidden="true" />
      <Ridges />
      <div className="cabhero__grain" aria-hidden="true" />
      <div className="cabhero__scrim" aria-hidden="true" />
      <div className="cabhero__floor" aria-hidden="true" />

      {/* ── content ── */}
      <div className="lux-wrap cabhero__inner">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="cabhero__crumb">
            <ol>
              {crumbs.map(([label, href], i) => (
                <li key={label}>
                  {href ? <Link href={href}>{label}</Link> : <span aria-current="page">{label}</span>}
                  {i < crumbs.length - 1 && <i aria-hidden="true">/</i>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <JourneyLine from={from} to={to} />

        {eyebrow && (
          <Reveal variant="fade">
            <p className="cabhero__eyebrow">{eyebrow}</p>
          </Reveal>
        )}

        <Reveal>
          <h1 className="cabhero__title">{title}</h1>
        </Reveal>

        {lede && (
          <Reveal>
            <p className="cabhero__lede">{lede}</p>
          </Reveal>
        )}

        <SpecRail items={specs} />
      </div>

      {/* A quiet affordance that there is more below — the spec rail is a
          natural stopping point to rest on. Drawn rather than iconised
          because the icon set has no chevron and one hairline is cheaper
          than adding one. */}
      <span className="cabhero__more" aria-hidden="true" />
    </section>
  );
}
