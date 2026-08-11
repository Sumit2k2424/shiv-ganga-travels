/**
 * Motion presets — the one animation vocabulary.
 *
 * Every registry ships its own easings and durations. Magic UI defaults to
 * spring physics, Aceternity to `ease-in-out` at 0.5–1s, React Bits to its own
 * cubic-beziers. Left alone, a page built from all three has four different
 * ideas about how fast a thing should move, and that is exactly what makes an
 * interface read as assembled rather than designed.
 *
 * So: imported components either use the CSS tokens in `ui-system.css`, or —
 * when they genuinely need `motion` — they import from here. Nothing invents
 * its own timing.
 *
 * These mirror the CSS tokens exactly:
 *   --ui-dur-fast / base / slow   →  DURATION.fast / base / slow
 *   --ui-ease / --ui-ease-out     →  EASE.standard / EASE.out
 *
 * If you change one, change the other.
 */

/** Seconds — `motion` takes seconds, CSS takes ms. */
export const DURATION = {
  fast: 0.15, // hover, focus, colour swaps
  base: 0.25, // the default
  slow: 0.45, // entrances, scale changes
};

export const EASE = {
  /** Symmetric. Anything that reverses — toggles, hovers. */
  standard: [0.4, 0, 0.2, 1],
  /** Decelerating. Anything that arrives — entrances, reveals. */
  out: [0.16, 1, 0.3, 1],
};

/**
 * Entrance variants for `motion` components.
 *
 * Note the deliberate absence of an `opacity: 0` initial state on `rise`.
 * `motion` writes initial values into the server-rendered HTML, so an
 * opacity-0 entrance ships ranking copy invisible in the raw markup. On this
 * site, use `rise` for anything containing text a crawler should read, and
 * `fade` only for decorative chrome.
 */
export const VARIANTS = {
  /** Transform-only. Safe for content — the text is visible in the SSR HTML. */
  rise: {
    hidden: { y: 16 },
    show: { y: 0, transition: { duration: DURATION.slow, ease: EASE.out } },
  },
  /** Decorative chrome only — hero ornaments, badges, dividers. */
  fade: {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.slow, ease: EASE.out },
    },
  },
  /** Parent wrapper for a sequence. */
  stagger: {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
  },
};

/**
 * True when the user has asked for reduced motion.
 *
 * The CSS in `ui-system.css` handles class-driven animation, but `motion`
 * animates through rAF-driven inline styles that no stylesheet can override.
 * Components using `motion` must check this themselves.
 *
 * Returns `false` during SSR, which is correct: the server should emit the
 * static, already-settled markup.
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
