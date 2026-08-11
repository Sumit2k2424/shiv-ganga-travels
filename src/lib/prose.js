/**
 * Canonical inline prose styles for blog articles.
 *
 * WHY THIS EXISTS
 * 37 of the 62 blog pages each declared their own module-scope `h2` / `h3` /
 * `p` style objects and spread them inline. Fifteen distinct definitions had
 * drifted apart: body at 15 and 15.5px with line-height 1.85 and 1.9; H2 at
 * `1.4rem`, `clamp(1.15,2.5vw,1.4)`, `clamp(1.2,2.8vw,1.5)`, `clamp(1.25,3vw,
 * 1.75)` and `clamp(1.3,2.5vw,1.75)`, at weight 600 *and* 700. Because inline
 * styles outrank every stylesheet rule, those objects — not globals.css — were
 * the site's real typography, and there were eight of them.
 *
 * WHY VALUES ARE CSS VARIABLES, NOT NUMBERS
 * Every value below resolves to a token defined in globals.css `:root`. The
 * scale therefore has exactly one source of truth: change --fs-h2 there and it
 * moves here too, with no risk of the two drifting apart again. These objects
 * intentionally mirror the `article h2 / h3 / p` rules rather than fighting
 * them — whichever wins the cascade, the computed value is identical.
 *
 * USAGE — unchanged from before, so no page markup had to be rewritten:
 *   import { h2, h3, p } from '@/lib/prose';
 *   <h2 id="cost" style={h2}>…</h2>
 *   <p style={p}>…</p>
 *   <p style={{ ...p, fontSize: 13.5 }}>…</p>   // deliberate small print
 *
 * The `--prose-*` tokens are scoped to `article` in globals.css, so each var
 * carries a literal fallback for the handful of spreads used outside one.
 */

/** Section heading — Inter, 26→36px. */
export const h2 = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-h2)',
  fontWeight: 700,
  lineHeight: 'var(--lh-h2)',
  letterSpacing: '-0.018em',
  color: 'var(--navy)',
  marginTop: '1.9em',
  marginBottom: '0.55em',
  maxWidth: 'var(--measure)',
};

/** Sub-heading — Inter at a true 650 off the variable weight axis, 21→28px. */
export const h3 = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-h3)',
  fontWeight: 650,
  lineHeight: 'var(--lh-h3)',
  letterSpacing: '-0.012em',
  color: 'var(--navy-mid)',
  marginTop: '1.7em',
  marginBottom: '0.45em',
  maxWidth: 'var(--measure)',
};

/** Running body copy — Source Serif 4, 17→18px. */
export const p = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'var(--fs-body)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--prose-text, #1A202C)',
  marginBottom: '1.25em',
  maxWidth: 'var(--measure)',
};

/** Opening paragraph — outranks body so the article starts at a pitch. */
export const lede = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'var(--fs-lead)',
  lineHeight: 'var(--lh-lead)',
  color: 'var(--prose-secondary, #2D3748)',
  marginBottom: '1.4em',
  maxWidth: 'var(--measure)',
};

/** Captions, bylines, source notes — Inter, 13→14px. */
export const meta = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-meta)',
  lineHeight: 'var(--lh-meta)',
  color: 'var(--prose-muted, #4A5568)',
};
