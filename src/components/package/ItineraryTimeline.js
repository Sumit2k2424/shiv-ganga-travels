/**
 * Day-wise itinerary timeline.
 *
 * Deliberately built on native <details>/<summary> rather than the Radix
 * accordion: Radix unmounts collapsed content, which would strip the entire
 * itinerary out of the server-rendered HTML. This keeps every word in the
 * markup for crawlers while still collapsing visually, and ships 0 kB of JS.
 */
export default function ItineraryTimeline({ itinerary = [] }) {
  return (
    <div className="relative">
      {itinerary.map((day, idx) => {
        const isLast = idx === itinerary.length - 1;
        return (
          <details
            key={day.day}
            open={idx < 2}
            className="group/day relative"
          >
            <summary
              className="flex cursor-pointer list-none items-start gap-3 rounded-xl py-2 pr-2
                         transition-colors duration-200 hover:bg-navy-light/60
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30
                         [&::-webkit-details-marker]:hidden"
            >
              {/* Day marker + connector */}
              <span className="relative flex w-9 shrink-0 flex-col items-center self-stretch">
                <span
                  className="z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy
                             text-[11px] font-bold text-white shadow-[0_2px_8px_rgba(15,43,91,0.3)]
                             transition-transform duration-200 group-hover/day:scale-105"
                >
                  D{day.day}
                </span>
                {!isLast && (
                  <span aria-hidden="true" className="mt-1 w-0.5 flex-1 bg-slate-200" />
                )}
              </span>

              <span className="flex flex-1 items-start justify-between gap-3 pt-1">
                <span className="text-[14.5px] font-bold leading-snug text-navy">
                  {day.title}
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  className="mt-0.5 shrink-0 text-slate-400 transition-transform duration-300
                             group-open/day:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>

            <div
              className={[
                'grid grid-cols-[36px_1fr] gap-0',
                isLast ? 'pb-0' : 'pb-4',
              ].join(' ')}
            >
              {/* Continues the vertical rail behind the expanded body */}
              <span aria-hidden="true" className="flex justify-center">
                {!isLast && <span className="w-0.5 flex-1 bg-slate-200" />}
              </span>

              <div className="pb-1 pl-3 pt-1">
                <p className="text-[13.5px] leading-[1.75] text-slate-600">{day.desc}</p>

                {day.meals?.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {day.meals.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-navy-light px-2.5 py-0.5 text-[11px]
                                   font-semibold text-navy"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                {day.stay && (
                  <p className="mt-2 flex items-center gap-1.5 text-[12px] text-slate-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M3 21v-8h18v8M3 13V8a2 2 0 012-2h14a2 2 0 012 2v5M7 13v-2h10v2" />
                    </svg>
                    Stay: {day.stay}
                  </p>
                )}
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
