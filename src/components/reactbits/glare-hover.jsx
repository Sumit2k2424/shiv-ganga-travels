import { cn } from "@/lib/utils";

/**
 * GlareHover — a diagonal sheen that sweeps across a surface once on hover.
 *
 * Adapted from React Bits (MIT). Changes from upstream:
 *   - **zero JS.** Upstream tracks hover in React state and animates with an
 *     inline transition; the same effect is a `::after` translate on
 *     `:hover`, which the compositor handles on its own. This is a server
 *     component.
 *   - the sheen is white at 18% over a 22deg diagonal, tuned for photography
 *     — the intended surface is an image tile, not a flat colour panel.
 *   - stops on reduced motion.
 *
 * House use: photographic tiles — destination thumbnails, hotel and vehicle
 * cards, gallery items. On flat surfaces the sheen has nothing to catch and
 * looks like a rendering artefact; use SpotlightCard there instead.
 *
 * Requires a positioned, clipping parent — it supplies both.
 */
export function GlareHover({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius)]",
        // The sheen: a wide, soft, rotated band parked off the left edge.
        "after:pointer-events-none after:absolute after:inset-y-[-60%] after:left-[-75%] after:w-1/2 after:content-['']",
        "after:rotate-[22deg] after:[background:linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]",
        // Arbitrary *properties* rather than the duration/ease shorthands:
        // with a CSS var inside, those are ambiguous between transition-* and
        // animation-*, and Tailwind warns at build time.
        "after:transition-transform after:[transition-duration:var(--ui-dur-slow,450ms)] after:[transition-timing-function:cubic-bezier(0.16,1,0.30,1)]",
        "hover:after:translate-x-[420%]",
        "motion-reduce:after:hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default GlareHover;
