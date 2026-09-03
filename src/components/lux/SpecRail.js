/* ══════════════════════════════════════════════════════════════
   SpecRail — the facts strip under a hero headline.

   One rail, three heroes: the cab tiers, the packages catalogue and
   the package detail page. Before this they had three different
   treatments — cab pages used four identical icon pills, package
   detail used five identical `Pill tone="light"` chips, and the
   catalogue used a bare flex row — so on none of them did the number
   that actually matters read first.

   `.lux-hero__meta` already existed in luxury.css, written for this
   and wired to nothing. Rather than add a fourth vocabulary it now
   carries this component, upgraded from flex to grid so four cells
   fall to a clean 2x2 on a phone instead of wrapping raggedly.

   Server component. Exactly one cell should carry `gold: true` — the
   house rule is that gold is punctuation, not a fill, so it goes on
   the price or the fare and nothing else.
   ══════════════════════════════════════════════════════════════ */

export default function SpecRail({ items = [], className }) {
  const cells = items.filter((c) => c && c.v);
  if (!cells.length) return null;

  return (
    <dl className={className ? `lux-hero__meta ${className}` : 'lux-hero__meta'} data-lux-stagger="">
      {cells.map(({ k, v, gold }) => (
        <div key={k}>
          <dt className="lux-hero__k">{k}</dt>
          <dd className={gold ? 'lux-hero__v lux-hero__v--gold' : 'lux-hero__v'}>{v}</dd>
        </div>
      ))}
    </dl>
  );
}
