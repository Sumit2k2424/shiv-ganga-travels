"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Magnet — a control that leans toward the pointer as it approaches.
 *
 * Adapted from React Bits (MIT). Changes from upstream:
 *   - writes `transform` directly on the node instead of holding position in
 *     React state, so pointer movement never re-renders.
 *   - the listener lives on the element, not `window`. Upstream attaches a
 *     global `mousemove` per instance, so N magnets on a page means N global
 *     handlers running on every frame of every scroll.
 *   - pull is capped at 8px (upstream is unbounded × strength). Past ~10px a
 *     button visibly detaches from its layout slot, which looks broken rather
 *     than responsive.
 *   - inert on coarse pointers and under `prefers-reduced-motion`.
 *
 * House use: the single primary CTA in a hero or a sticky booking bar. It is
 * a "this is the button" signal — using it on more than one control per view
 * destroys the signal. Never on nav links; a moving target is harder to hit,
 * and `padding` is the honest way to make something easier to click.
 *
 * Accessibility: movement is decorative. The element keeps its real hit area
 * and focus outline, and keyboard users see no movement at all.
 */
export function Magnet({
  children,
  className,
  /** How far outside the element the pull starts, px. */
  range = 90,
  /** Peak displacement at full pull, px. Keep ≤ 10. */
  strength = 8,
  ...props
}) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;

    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const reach = Math.max(r.width, r.height) / 2 + range;

        if (dist > reach) {
          el.style.transform = "translate3d(0,0,0)";
          return;
        }
        // Falls off linearly, so the pull eases as the pointer nears centre.
        const pull = (1 - dist / reach) * strength;
        el.style.transform = `translate3d(${(dx / dist || 0) * pull}px, ${
          (dy / dist || 0) * pull
        }px, 0)`;
      });
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      el.style.transform = "translate3d(0,0,0)";
    };

    // Scoped to a wrapper sized `range` larger than the child, so this is not
    // a document-wide listener.
    const zone = el.parentElement;
    zone.addEventListener("mousemove", onMove);
    zone.addEventListener("mouseleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      zone.removeEventListener("mousemove", onMove);
      zone.removeEventListener("mouseleave", reset);
    };
  }, [range, strength]);

  return (
    <span className="inline-block" style={{ padding: range / 2 , margin: -range / 2 }}>
      <span
        ref={ref}
        className={cn(
          "inline-block will-change-transform",
          // Arbitrary properties rather than the duration/ease shorthands:
          // with a CSS var inside, those are ambiguous between transition-*
          // and animation-*, and Tailwind warns at build time.
          "transition-transform [transition-duration:var(--ui-dur-base,250ms)] [transition-timing-function:cubic-bezier(0.16,1,0.30,1)]",
          className
        )}
        {...props}
      >
        {children}
      </span>
    </span>
  );
}

export default Magnet;
