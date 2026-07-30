import Icon from '@/components/Icon';
import { Section } from '@/components/lux/primitives';

/* ══════════════════════════════════════════════════════════════
   WhyBookDirect — the site-wide "why book with us" reassurance band.

   Originally the homepage's own trust-counter row, which repeated
   figures already shown in the hero's trust strip. Rebuilt as three
   plain claims (no numbers to duplicate) and promoted to global site
   chrome — mounted once in app/layout.js, just above the footer, so
   it renders on every route without per-page duplication.

   Server component: the stagger-reveal and hover/glow motion are all
   CSS (`.lux-pillars` in luxury.css), driven by the `data-lux-stagger`
   attribute the already-global LuxMotion engine observes. No client
   JS of its own.
   ══════════════════════════════════════════════════════════════ */

const PILLARS = [
  { icon: 'handshake', t: 'Direct Operator', d: 'You book with the people who run your yatra — no reseller in between, no reseller markup either.' },
  { icon: 'receipt',   t: 'Zero Commission', d: 'The price you see is the price we charge. No agent cut quietly folded into the quote.' },
  { icon: 'compass',   t: 'Local Handling',  d: 'Haridwar-based, on the ground every season — hotels, drivers and guides we know personally.' },
];

export default function WhyBookDirect() {
  return (
    <Section tone="paper-deep" tight>
      <div className="lux-pillars" data-lux-stagger="">
        {PILLARS.map((p) => (
          <div key={p.t} className="lux-pillar lux-glass">
            <span className="lux-pillar__glow" aria-hidden="true" />
            <span className="lux-pillar__ico"><Icon name={p.icon} size={22} /></span>
            <h3 className="lux-display lux-display--sm">{p.t}</h3>
            <p className="lux-body" style={{ fontSize: '0.875rem', margin: 0 }}>{p.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
