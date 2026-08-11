"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * SpotlightCard — a soft highlight that follows the pointer across a card.
 *
 * Adapted from React Bits (MIT). Changes from upstream:
 *   - writes two CSS custom properties and lets a `radial-gradient` do the
 *     rest, so the browser never re-runs React on pointer move. Upstream sets
 *     component state per mousemove, which re-renders the whole card at
 *     pointer frequency.
 *   - the highlight is gold at 8% rather than white at 25%. On this site's
 *     white cards a white spotlight is invisible; on dark ones the stock
 *     opacity reads as a glow, which the brief rules out.
 *   - fades in on enter rather than snapping, so a fast pointer sweeping over
 *     a grid doesn't strobe.
 *   - no-ops on coarse pointers.
 *
 * House use: package and destination cards, feature tiles. Pairs with
 * `.ui-lift` for the house hover elevation — the spotlight is the surface
 * treatment, `.ui-lift` is the movement.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(232, 146, 10, 0.08)",
  ...props
}) {
  const ref = React.useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // Custom properties only — no setState, so no re-render.
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      style={{ "--spot-color": spotlightColor }}
      className={cn(
        "group relative overflow-hidden",
        "rounded-[var(--radius)] border bg-card",
        // The spotlight layer. Hidden on coarse pointers, where there is no
        // pointer to follow.
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0",
        "before:transition-opacity before:duration-300 before:content-['']",
        "before:[background:radial-gradient(320px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),var(--spot-color),transparent_70%)]",
        "hover:before:opacity-100",
        "[@media(pointer:coarse)]:before:hidden",
        "motion-reduce:before:transition-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default SpotlightCard;
