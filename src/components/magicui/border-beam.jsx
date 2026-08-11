import { cn } from "@/lib/utils";

/**
 * BorderBeam — a single point of light travelling the border of its parent.
 *
 * Pure CSS via `offset-path`. Drop it inside any `position: relative`
 * container; it paints on top of the border and ignores pointer events.
 *
 * House use: exactly one per view, on the primary conversion surface — the
 * booking panel or the main CTA card. It is the most attention-grabbing
 * device in this kit, which is precisely why it must stay rare. Two beams on
 * one screen and the page reads as a crypto landing page.
 *
 * Adapted from Magic UI. Changes from upstream:
 *   - default colours are brand gold rather than the stock violet/cyan
 *   - `duration` slowed 12s → the beam should be noticed on the second look,
 *     not the first
 *   - browsers without `offset-path` (Safari < 16) simply render nothing,
 *     which is the correct degradation for pure decoration
 *
 * Reduced motion: `.animate-border-beam` is stopped in ui-system.css, which
 * parks the beam at its start position rather than removing it.
 *
 * @param {number} size       length of the light trail, px
 * @param {number} duration   seconds for one full lap
 * @param {number} borderWidth
 */
export function BorderBeam({
  className,
  size = 180,
  duration = 12,
  borderWidth = 1.5,
  colorFrom = "var(--gold, #E8920A)",
  colorTo = "rgba(232,146,10,0)",
  delay = 0,
  ...props
}) {
  return (
    <div
      style={{
        "--size": size,
        "--duration": duration,
        "--border-width": borderWidth,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      }}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        // The mask is what confines the gradient to the border ring itself.
        "[border:calc(var(--border-width)*1px)_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect]",
        "[mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        // The travelling light.
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)]",
        "after:animate-border-beam after:[animation-delay:var(--delay)]",
        "after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)]",
        "after:[offset-anchor:90%_50%]",
        "after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )}
      {...props}
    />
  );
}

export default BorderBeam;
