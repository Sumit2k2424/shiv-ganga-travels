import { cn } from "@/lib/utils";

/**
 * Timeline — a sticky-label vertical timeline for journeys and milestones.
 *
 * Adapted from Aceternity UI. Changes from upstream, all deliberate:
 *   - **Server component.** Upstream is a client component that measures the
 *     container with a ref and drives a progress line off `useScroll`. That
 *     ships framer-motion and a scroll listener to render what is essentially
 *     a list. This version is static markup; the entrance animation is handed
 *     to `LuxMotion` via `data-lux-reveal`, the runtime already mounted once
 *     in layout.js. **Adding this component costs zero client JS.**
 *   - **All content is in the SSR HTML.** Nothing is unmounted or hidden
 *     behind a scroll threshold. On a site where these pages rank, the
 *     itinerary text has to be in the markup.
 *   - the stock version fades entries in from `opacity: 0`, which writes
 *     invisible ranking copy into the server HTML. Reveals here are
 *     transform-only, so the text is present and readable with JS off.
 *
 * House use: "how the yatra unfolds" narratives, company milestones, day-by-day
 * route overviews where each step needs a heading. For a bookable itinerary
 * with collapsible days, use `components/package/ItineraryTimeline.js` instead
 * — it keeps every day's copy in the HTML and ships no JS either.
 *
 * @param {{label: string, title?: string, content: React.ReactNode}[]} items
 */
export function Timeline({ items = [], className }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[var(--ui-narrow)]", className)}>
      {items.map((item, i) => (
        <div
          key={item.label ?? i}
          data-lux-reveal="up"
          className="relative flex gap-6 pb-12 last:pb-0 sm:gap-10"
        >
          {/* Rail + node. The rail is drawn by the node's ::before so it
              never outlives the last item. */}
          <div className="relative flex w-16 shrink-0 justify-center sm:w-28">
            <div className="sticky top-28 self-start">
              <span
                aria-hidden="true"
                className="block h-3 w-3 rounded-full border-2 border-[color:var(--gold,#E8920A)] bg-[color:var(--card-bg,#fff)]"
              />
            </div>
            {/* Connector: stops at the last item. */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-28 h-full w-px -translate-x-1/2 bg-[color:var(--rule,rgba(15,43,91,.12))] [[data-lux-reveal]:last-child_&]:hidden"
            />
          </div>

          <div className="min-w-0 flex-1 pb-2">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--gold,#E8920A)]">
              {item.label}
            </p>
            {item.title ? (
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl leading-snug text-[color:var(--ink,#0B1B38)] sm:text-2xl">
                {item.title}
              </h3>
            ) : null}
            <div className="mt-3 text-[15px] leading-relaxed text-[color:var(--text-mid,#334155)]">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
