import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";

/**
 * FeatureGrid — an icon/title/description grid.
 *
 * Tailark-style block, rebuilt on this project's tokens rather than copied.
 * The stock versions of this block ship rounded-2xl cards with coloured icon
 * chips and a gradient border, which is the generic SaaS feature section the
 * brief rules out. This one is hairline-bordered, uses the site's own 41-glyph
 * `Icon` system rather than importing a second icon set, and lets the copy
 * carry the section.
 *
 * Server component, zero client JS. Reveals via `LuxMotion`.
 *
 * @param {{icon?: string, title: string, description: React.ReactNode}[]} items
 * @param {2|3|4} columns
 * @param {boolean} bordered  hairline card treatment vs. plain columns
 */
export default function FeatureGrid({
  items = [],
  columns = 3,
  bordered = true,
  className,
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      data-lux-stagger
      className={cn("grid grid-cols-1 gap-px", cols[columns], !bordered && "gap-8", className)}
    >
      {items.map((item, i) => (
        <div
          key={item.title ?? i}
          data-lux-reveal="up"
          className={cn(
            "relative",
            bordered &&
              // A 1px gap over a rule-coloured grid gives hairline dividers
              // without doubled borders at the seams.
              "bg-white p-6 outline outline-1 outline-[color:var(--rule,rgba(15,43,91,.12))] sm:p-8"
          )}
        >
          {item.icon ? (
            <Icon
              name={item.icon}
              size={24}
              className="text-[color:var(--gold-dark,#C67A08)]"
            />
          ) : null}

          <h3
            className={cn(
              "font-semibold leading-snug text-[color:var(--ink,#0B1B38)]",
              "text-[17px]",
              item.icon && "mt-4"
            )}
          >
            {item.title}
          </h3>

          <div className="mt-2 text-[15px] leading-relaxed text-[color:var(--text-mid,#334155)]">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}
