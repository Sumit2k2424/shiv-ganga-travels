/* Brand badge — the circular mark: gold ring, navy field, three gold summits
   with a cream spire, Om below the horizon.

   This is the site's one brand mark: navbar at 40px, footer at 44px.

   LogoMark.js is the older animated mark (dotted rotating ring, river tail)
   that the navbar used until this replaced it. It is now unreferenced —
   kept because it is brand work, not because anything needs it.

   Server component on purpose. It carries no <defs> and therefore no ids:
   the mountains are drawn to terminate exactly on the navy disc rather than
   being clipped to it. That is deliberate — LogoMark needed useId() (and a
   client boundary) precisely because duplicate SVG ids on one page made its
   gradients fall back to grey and dropped the clipPath on mobile Safari.
   Rendering this one twice is safe, and it costs no client JS.

   Geometry note: the horizon sits at y=74 on a 100×100 box with the navy
   disc at r=43.5, so the mountain bases meet the circle at x=13.72/86.28.
   Those are not round numbers; they are the intersection. Moving the horizon
   means recomputing them, or the mountains will poke out of the disc. */

const NAVY = '#0F2B5B';
const GOLD = '#E8920A';
const SHADOW = '#6B5A2F'; // the olive cast on each western slope
const CREAM = '#F8F1E3';

export default function LogoBadge({ size = 44, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ display: 'block', flexShrink: 0 }}
      aria-hidden="true"
      focusable="false"
    >
      {/* Gold ring, then the navy field it surrounds. */}
      <circle cx="50" cy="50" r="50" fill={GOLD} />
      <circle cx="50" cy="50" r="43.5" fill={NAVY} />

      {/* Shadow ridge first — it shows as the rim up the left of each summit
          and as the wedge flanking the spire. */}
      <path d="M13.72,74 L25,50 L36,61 L50,34 L57,61 L68,46 L86.28,74 Z" fill={SHADOW} />

      {/* Gold ridge, offset right of the shadow so the rim stays visible. */}
      <path d="M13.72,74 L29,53 L40,63 L50,39 L61,63 L72,48 L86.28,74 Z" fill={GOLD} />

      {/* The spire. Notched at the base so it reads as a peak rather than a
          triangle sitting on the ridge. */}
      <path d="M50,32 L54.5,60 L50,53 L45.5,60 Z" fill={CREAM} />

      {/* Hairline, drawn after the mountains so it rides over them the way it
          does in the artwork. */}
      <circle cx="50" cy="50" r="40.8" fill="none" stroke={GOLD} strokeOpacity="0.5" strokeWidth="0.9" />

      {/* Serif stack matches LogoMark. If a system has no Devanagari face this
          falls back to a missing glyph — the mark still reads without it. */}
      <text
        x="50"
        y="90"
        textAnchor="middle"
        fontSize="15"
        fontWeight="600"
        fontFamily="Georgia, 'Times New Roman', serif"
        fill={CREAM}
      >
        ॐ
      </text>
    </svg>
  );
}
