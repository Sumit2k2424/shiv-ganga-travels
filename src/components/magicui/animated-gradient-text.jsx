import { cn } from "@/lib/utils";

/**
 * AnimatedGradientText — a slowly drifting gradient applied to text.
 *
 * Pure CSS: an oversized background-size plus the `gradient` keyframe, clipped
 * to the glyphs. No JS.
 *
 * House use: the single hero eyebrow, or a "2026 dates open" pill. The brand
 * rule is that gold is punctuation — one gradient per view, never two.
 *
 * Adapted from Magic UI. Changes from upstream: the stock version ships a
 * rainbow (pink → violet → cyan) which reads as generic AI-SaaS. This one
 * travels navy → gold → teal, so it stays inside the brand palette and looks
 * like a deliberate accent rather than a template default.
 *
 * Reduced motion: `.animate-gradient` is stopped in ui-system.css; the text
 * settles on a static two-tone gradient, which still reads correctly.
 */
export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "var(--navy, #0F2B5B)",
  colorVia = "var(--gold, #E8920A)",
  colorTo = "var(--teal, #0B7B8B)",
  ...props
}) {
  return (
    <span
      style={{
        "--bg-size": `${speed * 300}%`,
        "--color-from": colorFrom,
        "--color-via": colorVia,
        "--color-to": colorTo,
      }}
      className={cn(
        "animate-gradient bg-clip-text text-transparent",
        "[background-image:linear-gradient(90deg,var(--color-from),var(--color-via),var(--color-to),var(--color-via),var(--color-from))]",
        "[background-size:var(--bg-size)_100%]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default AnimatedGradientText;
