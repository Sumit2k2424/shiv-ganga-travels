import { cn } from "@/lib/utils";

/**
 * AuroraText — a soft multi-stop wash behind a single word or phrase.
 *
 * Pure CSS. Distinct from AnimatedGradientText: that one drifts a linear
 * gradient along the text, this one holds a wider, softer, slower field —
 * closer to a printed foil effect than a moving highlight.
 *
 * House use: ONE word inside a display headline, standing in for the
 * `.lux-accent` italic-gold device when a page wants slightly more warmth.
 * Never the whole headline — the point is contrast against plain ink.
 *
 * Adapted from Magic UI. Upstream renders four animated absolutely-positioned
 * blurred blobs behind the text (expensive: four composited layers, constant
 * repaint, and it produces the "random blobs" look this project explicitly
 * avoids). This version gets the same warmth from a single background-clipped
 * gradient — one layer, no blur filter, and it degrades to flat gold.
 *
 * Reduced motion: `.animate-gradient` is stopped in ui-system.css.
 */
export function AuroraText({ children, className, ...props }) {
  return (
    <span
      className={cn(
        "animate-gradient bg-clip-text text-transparent [--bg-size:220%]",
        "[background-image:linear-gradient(110deg,var(--gold,#E8920A),var(--gold-dark,#C67A08)_28%,var(--navy-mid,#1A3E75)_52%,var(--gold,#E8920A)_78%,var(--gold-dark,#C67A08))]",
        "[background-size:var(--bg-size)_100%]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default AuroraText;
