"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * StickyScrollReveal — text scrolls, a paired visual stays pinned and swaps
 * as each section comes into view.
 *
 * Adapted from Aceternity UI. Changes from upstream:
 *   - **IntersectionObserver, not a scroll listener.** Upstream drives this
 *     from `useScroll` + `useMotionValueEvent`, which runs a callback on every
 *     scroll frame and pulls in framer-motion. One observer costs nothing and
 *     never fires during idle scroll.
 *   - **All copy renders, always.** Upstream animates inactive sections to
 *     `opacity: 0`, which on a Next.js server render means the text ships
 *     invisible. Here inactive text dims to 45% — visible to crawlers, legible
 *     to a reader with JS off, and still clearly de-emphasised.
 *   - the pinned panel collapses to inline images below `lg`, because a sticky
 *     panel on a phone just eats the viewport.
 *
 * House use: destination presentation — Kedarnath / Badrinath / Gangotri /
 * Yamunotri, each with its own photograph. Four to six sections is the useful
 * range; beyond that the pinned panel stops feeling connected to the text.
 *
 * @param {{title: string, description: React.ReactNode, visual: React.ReactNode}[]} content
 */
export function StickyScrollReveal({ content = [], className }) {
  const [active, setActive] = React.useState(0);
  const refs = React.useRef([]);

  React.useEffect(() => {
    const nodes = refs.current.filter(Boolean);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // The section whose midpoint is nearest the viewport middle wins.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const i = nodes.indexOf(visible.target);
        if (i !== -1) setActive(i);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [content.length]);

  return (
    <div className={cn("relative lg:flex lg:gap-16", className)}>
      {/* Scrolling copy */}
      <div className="lg:w-1/2">
        {content.map((item, i) => (
          <div
            key={item.title ?? i}
            ref={(el) => (refs.current[i] = el)}
            className="py-12 lg:py-[28vh]"
          >
            <h3
              className={cn(
                "font-[family-name:var(--font-display)] text-2xl leading-snug text-[color:var(--ink,#0B1B38)] sm:text-3xl",
                "transition-opacity duration-300",
                i === active ? "opacity-100" : "opacity-45"
              )}
            >
              {item.title}
            </h3>
            <div
              className={cn(
                "mt-4 max-w-prose text-[15px] leading-relaxed text-[color:var(--text-mid,#334155)]",
                "transition-opacity duration-300",
                i === active ? "opacity-100" : "opacity-45"
              )}
            >
              {item.description}
            </div>

            {/* Mobile: the visual rides inline with its own copy. */}
            <div className="mt-6 lg:hidden">{item.visual}</div>
          </div>
        ))}
      </div>

      {/* Pinned visual — desktop only. */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="sticky top-24 h-[70vh] overflow-hidden rounded-[var(--radius)]">
          {content.map((item, i) => (
            <div
              key={item.title ?? i}
              aria-hidden={i !== active}
              className={cn(
                "absolute inset-0 transition-opacity duration-500 ease-out",
                i === active ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            >
              {item.visual}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StickyScrollReveal;
