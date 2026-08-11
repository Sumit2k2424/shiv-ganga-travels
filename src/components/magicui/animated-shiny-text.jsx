import { cn } from "@/lib/utils";

/**
 * AnimatedShinyText — a slow light sweep across text.
 *
 * Pure CSS: a background-clipped gradient moved by the `shiny-text` keyframe
 * in tailwind.config.js. No JS, no motion library, no layout work — it costs
 * one paint per frame on a masked element and nothing else.
 *
 * House use: trust chips and eyebrow labels ("Direct operator since 2010").
 * NOT for body copy or headlines — the sweep reduces contrast mid-pass, so
 * anything that has to be read carefully should stay static.
 *
 * Adapted from Magic UI. Changes from upstream:
 *   - default colours are brand ink/gold rather than neutral grey/white
 *   - `shinyWidth` is a prop rather than a hard-coded 100px
 *   - the sweep pauses for most of its cycle (see the keyframe) so it reads
 *     as an occasional glint rather than a running loop
 *
 * Reduced motion: `.animate-shiny-text` is stopped in ui-system.css.
 *
 * @param {number}  shinyWidth  width of the travelling highlight, px
 * @param {string}  duration    full cycle length, e.g. "6s"
 */
export function AnimatedShinyText({
  children,
  className,
  shinyWidth = 90,
  duration = "6s",
  ...props
}) {
  return (
    <span
      style={{
        "--shiny-width": `${shinyWidth}px`,
        "--shiny-duration": duration,
      }}
      className={cn(
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Ink base, gold glint. The transparent stops are what make it a
        // sweep rather than a permanent gradient.
        "text-[color:var(--ink-soft,#2C3E5C)]",
        "bg-gradient-to-r from-transparent via-[color:var(--gold,#E8920A)] via-50% to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default AnimatedShinyText;
