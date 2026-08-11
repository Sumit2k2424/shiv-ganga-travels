import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";

/**
 * TestimonialWall — a masonry-ish wall of reviews.
 *
 * Tailark-style block on this project's tokens. Server component, zero JS.
 *
 * Distinct from the existing `TestimonialSlider.js`, which is a client
 * carousel for a single featured quote. Use the slider in a hero where space
 * is tight; use this wall on a reviews or trust page where the *volume* of
 * testimony is itself the argument. Do not put both on one page.
 *
 * CSS columns rather than a JS masonry library: the reflow is free, it
 * degrades to a single column, and reading order stays top-to-bottom within
 * each column, which is what a screen reader announces.
 *
 * @param {{quote: string, name: string, meta?: string, rating?: number}[]} items
 */
export default function TestimonialWall({ items = [], className }) {
  return (
    <div
      className={cn(
        "gap-4 [column-count:1] sm:[column-count:2] lg:[column-count:3] lg:gap-6",
        className
      )}
    >
      {items.map((item, i) => (
        <figure
          key={item.name ? `${item.name}-${i}` : i}
          data-lux-reveal="up"
          className={cn(
            "mb-4 break-inside-avoid rounded-[var(--radius)] border bg-white p-5 lg:mb-6 lg:p-6",
            "ui-lift"
          )}
        >
          {typeof item.rating === "number" ? (
            <div
              className="flex gap-0.5 text-[color:var(--gold,#E8920A)]"
              aria-label={`${item.rating} out of 5`}
            >
              {Array.from({ length: 5 }, (_, s) => (
                <Icon
                  key={s}
                  name="star"
                  size={14}
                  className={s < item.rating ? "opacity-100" : "opacity-25"}
                />
              ))}
            </div>
          ) : null}

          <blockquote
            className={cn(
              "text-[15px] leading-relaxed text-[color:var(--text-mid,#334155)]",
              typeof item.rating === "number" && "mt-3"
            )}
          >
            {item.quote}
          </blockquote>

          <figcaption className="mt-4 border-t pt-3 text-[13px]">
            <span className="font-semibold text-[color:var(--ink,#0B1B38)]">
              {item.name}
            </span>
            {item.meta ? (
              <span className="ml-2 text-[color:var(--text-muted,#64748B)]">
                {item.meta}
              </span>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
