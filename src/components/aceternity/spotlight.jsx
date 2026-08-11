import { cn } from "@/lib/utils";

/**
 * Spotlight — a single wide shaft of light settling over a dark hero.
 *
 * Pure SVG + one CSS keyframe (`spotlight` in tailwind.config.js). It plays
 * once on load and stops. No JS, no scroll listener, no motion library.
 *
 * House use: dark navy hero sections only — over a photograph of the Char
 * Dham route, or the booking hero. It needs a dark ground to read at all;
 * on the site's paper background it is invisible.
 *
 * Adapted from Aceternity UI. Changes from upstream:
 *   - the stock version is white at `fill-white` full strength, which blows
 *     out to the "glowing AI SaaS" look this project avoids. This one is warm
 *     gold at 9% and stops there.
 *   - plays ONCE (`forwards`, one iteration) instead of looping. A light that
 *     keeps re-sweeping reads as a loading state.
 *   - `aria-hidden` + `pointer-events-none` — it is pure decoration and must
 *     never be announced or interactive.
 *
 * Reduced motion: honoured via the `motion-reduce:` variants below, which
 * park it at its final position instead of animating in.
 */
export function Spotlight({ className, fill = "var(--gold, #E8920A)" }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={cn(
        "animate-spotlight pointer-events-none absolute -top-40 left-0 z-[1] h-[169%] w-[138%] opacity-0 lg:-top-20 lg:left-60",
        "motion-reduce:animate-none motion-reduce:opacity-100",
        className
      )}
      viewBox="0 0 3787 2842"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#spotlight-blur)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.09"
        />
      </g>
      <defs>
        <filter
          id="spotlight-blur"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}

export default Spotlight;
