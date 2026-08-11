import { cn } from "@/lib/utils";

/**
 * StatBand — a row of proof figures.
 *
 * Tailark-style block on this project's tokens. Server component, zero JS.
 *
 * A deliberate note on counters: this renders the real figure as static text
 * rather than animating up from zero. `magicui/number-ticker` exists and is
 * the right tool inside a hero, but it renders `0` into the SSR HTML, so a
 * band of trust figures — "50,000+ pilgrims", "since 2010" — would ship as a
 * row of zeroes to crawlers and to anyone whose JS has not run. On a page
 * whose whole job is credibility, that trade is not worth 400ms of movement.
 *
 * If you do want the count-up here, use `components/CountUp.js` (~1 kB,
 * IntersectionObserver-based) and pass the real value as children so it is
 * present in the markup.
 *
 * @param {{value: string, label: string, note?: string}[]} items
 */
export default function StatBand({ items = [], tone = "paper", className }) {
  const dark = tone === "ink" || tone === "navy";

  return (
    <dl
      data-lux-stagger
      className={cn(
        "grid grid-cols-2 gap-px lg:grid-cols-4",
        "bg-[color:var(--rule,rgba(15,43,91,.12))]",
        className
      )}
    >
      {items.map((item, i) => (
        <div
          key={item.label ?? i}
          data-lux-reveal="up"
          className={cn(
            "px-5 py-8 text-center sm:px-6 sm:py-10",
            dark ? "bg-[color:var(--ink,#0B1B38)]" : "bg-[color:var(--paper,#FBFAF7)]"
          )}
        >
          <dt className="sr-only">{item.label}</dt>
          <dd>
            <span
              className={cn(
                "block font-[family-name:var(--font-display)] tabular-nums",
                "text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] leading-none",
                dark ? "text-white" : "text-[color:var(--ink,#0B1B38)]"
              )}
            >
              {item.value}
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "mt-3 block text-xs font-semibold uppercase tracking-[0.13em]",
                dark ? "text-white/60" : "text-[color:var(--ink-faint,#7A8699)]"
              )}
            >
              {item.label}
            </span>
            {item.note ? (
              <span
                className={cn(
                  "mt-2 block text-[13px] leading-snug",
                  dark ? "text-white/50" : "text-[color:var(--text-muted,#64748B)]"
                )}
              >
                {item.note}
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
