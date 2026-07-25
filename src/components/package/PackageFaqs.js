/**
 * Package FAQ list.
 *
 * Native <details>/<summary> again, for the same reason as the itinerary:
 * the answers must stay in the server-rendered HTML. These questions carry
 * FAQPage schema and are prime featured-snippet material, so they are not
 * worth hiding behind a component that unmounts collapsed content.
 * Zero JS.
 */
export default function PackageFaqs({ faqs = [] }) {
  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {faqs.map((faq, i) => (
        <details key={i} className="group/faq">
          <summary
            className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4
                       transition-colors duration-200 hover:bg-slate-50
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset
                       focus-visible:ring-navy/30 [&::-webkit-details-marker]:hidden"
          >
            <h3 className="text-[14px] font-bold leading-snug text-navy">{faq.q}</h3>
            <span
              aria-hidden="true"
              className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100
                         text-slate-500 transition-all duration-300
                         group-hover/faq:bg-navy-light group-hover/faq:text-navy
                         group-open/faq:rotate-45"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="3" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-4 pr-14">
            <p className="text-[13.5px] leading-[1.75] text-slate-600">{faq.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
