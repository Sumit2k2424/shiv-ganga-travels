"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card3D — a card that tilts very slightly toward the pointer, with children
 * that can sit at different depths.
 *
 * Adapted from Aceternity UI's `3d-card`. Changes from upstream:
 *   - no framer-motion. Upstream imports the whole library to set two CSS
 *     transforms; this writes them directly and costs ~1 kB.
 *   - tilt clamped to 6deg (upstream is 25deg). At 25deg the card reads as a
 *     toy; at 6deg it reads as glass catching light, which is the intent.
 *   - disabled entirely on coarse pointers — a tilt that responds to touch
 *     just fights the scroll.
 *   - honours `prefers-reduced-motion` by never attaching the listener.
 *
 * House use: destination and package cards in a feature row. Not for anything
 * containing a form field — tilting inputs is unpleasant to use.
 *
 * SSR-safe: renders flat markup on the server, so all card content is in the
 * HTML for crawlers. The tilt is added after hydration.
 */

const Card3DContext = React.createContext(false);

export function CardContainer({ children, className, containerClassName }) {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);

  // Coarse pointer or reduced motion → stay flat, attach nothing.
  const enabled = React.useSyncExternalStore(
    subscribeToMediaChange,
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false // server snapshot
  );

  const handleMove = (e) => {
    if (!ref.current || !enabled) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    // -1..1 from centre, then clamped to a 6deg swing.
    const x = ((e.clientX - left) / width - 0.5) * 2;
    const y = ((e.clientY - top) / height - 0.5) * 2;
    ref.current.style.transform = `rotateY(${x * 6}deg) rotateX(${y * -6}deg)`;
  };

  const reset = () => {
    setActive(false);
    if (ref.current) ref.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <Card3DContext.Provider value={active}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={ref}
          onMouseEnter={() => enabled && setActive(true)}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          className={cn(
            "relative flex items-center justify-center transition-transform duration-200 ease-out",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </Card3DContext.Provider>
  );
}

export function CardBody({ children, className }) {
  return (
    <div
      className={cn("[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}
    >
      {children}
    </div>
  );
}

/**
 * A child that lifts out of the card plane while the pointer is over it.
 * `translateZ` is the depth in px — keep it under 40 or the parallax breaks
 * the illusion that these are one object.
 */
export function CardItem({
  as: Tag = "div",
  children,
  className,
  translateZ = 0,
  ...rest
}) {
  const active = React.useContext(Card3DContext);
  return (
    <Tag
      className={cn("transition-transform duration-200 ease-out", className)}
      style={{ transform: active ? `translateZ(${translateZ}px)` : "translateZ(0px)" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Shared across every CardContainer on the page — one listener pair, not one
// per card.
function subscribeToMediaChange(onChange) {
  const fine = window.matchMedia("(pointer: fine)");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  fine.addEventListener("change", onChange);
  motion.addEventListener("change", onChange);
  return () => {
    fine.removeEventListener("change", onChange);
    motion.removeEventListener("change", onChange);
  };
}
