'use client';
import { useState } from 'react';
import { KEDARNATH_TREK, ZP_DANDI_2026, ZP_KANDI_2026 } from '@/data/trekRates';

/**
 * KedarnathFareCalc — looks up the printed fare for a route and weight.
 * No competitor on this query has a calculator; every other page is a static
 * table. This is our differentiator (same idea as RouteMapInteractive).
 *
 * It reads the three official cards directly, so there is no estimating:
 *  - dandi (palki): Zila Panchayat 2026 board, five passenger-weight slabs,
 *    +₹2,000 on the 101–120 kg rate above 120 kg;
 *  - kandi: Zila Panchayat 2026 board, up to 25 kg / up to 50 kg, nothing above;
 *  - mule: District Magistrate's card (2024 notice, still in force), one fare
 *    per leg with no weight slabs.
 * Until Sep 2026 this estimated from a base fare plus "₹200 per 15 kg over
 * 75 kg" — a rule with no source, which the 2026 dandi board contradicts.
 */

const CARD = KEDARNATH_TREK.officialCard;
const inr = (n) => '₹' + n.toLocaleString('en-IN');
const place = (s) => s.replace('Kedarnath base camp', 'Kedarnath (base camp)');

const SERVICES = {
  palki: { label: 'Dandi / Palki', board: ZP_DANDI_2026 },
  kandi: { label: 'Kandi', board: ZP_KANDI_2026 },
  pony:  { label: 'Mule / Pony' },
};

const boardRouteLabel = (r) => `${r.from} → ${r.to} · ${r.trip.toLowerCase()} · ${r.km} km`;
const muleLegLabel = (l) => `${place(l.from)} → ${place(l.to)} · ${l.km} km`;

function dandiSlab(kg) {
  if (kg <= 60) return 0;
  if (kg <= 75) return 1;
  if (kg <= 90) return 2;
  if (kg <= 100) return 3;
  return 4;
}

function lookup(service, routeIdx, kg) {
  if (service === 'pony') {
    const leg = CARD.legs[routeIdx];
    return { total: leg.total, parts: [['Mule owner’s fee', leg.total - CARD.arrangementFee], ['Arrangement fee', CARD.arrangementFee]],
      note: 'The mule card has no weight slabs — one fare per leg, whatever you weigh.' };
  }
  const B = SERVICES[service].board;
  const r = B.routes[routeIdx];
  if (service === 'kandi') {
    if (kg > B.maxKg) return { none: `The kandi board stops at ${B.maxKg} kg. Above that, the dandi board applies — switch to Dandi / Palki.` };
    const slab = kg <= 25 ? 0 : 1;
    const total = r.totals[slab];
    return { total, slab: B.slabs[slab], parts: [['Porter’s wages', total - B.arrangementFee], ['Arrangement fee', B.arrangementFee]],
      note: r.alt50 && slab === 1 ? `The board lists this leg twice; the other row says ${inr(r.alt50)}.` : null };
  }
  const slab = dandiSlab(kg);
  const base = r.totals[slab];
  if (base === null) return { none: 'This cell is unreadable in our photo of the board. Ask at the prepaid counter.' };
  const extra = kg > 120 ? B.over120Extra : 0;
  const total = base + extra;
  const parts = [['Bearers’ wages', base - B.arrangementFee - B.dandiFee], ['Arrangement fee', B.arrangementFee], ['Dandi with cushion', B.dandiFee]];
  if (extra) parts.push(['Over 120 kg', extra]);
  return { total, slab: kg > 120 ? 'over 120 kg' : B.slabs[slab], parts };
}

export default function KedarnathFareCalc() {
  const [service, setService] = useState('palki');
  const [routeIdx, setRouteIdx] = useState(0);
  const [weight, setWeight] = useState(70);

  const s = SERVICES[service];
  const routes = service === 'pony'
    ? CARD.legs.map(muleLegLabel)
    : s.board.routes.map(boardRouteLabel);
  // Mule legs start with Sonprayag; open on the Gaurikund leg most people take.
  const pick = (k) => { setService(k); setRouteIdx(k === 'pony' ? CARD.legs.findIndex((l) => l.from === 'Gaurikund') : 0); };
  const res = lookup(service, routeIdx, weight);
  const source = service === 'pony'
    ? `${CARD.issuer}, ${CARD.notice}`
    : `${s.board.issuer}, ${s.board.season} rate board`;

  const label = { fontSize: 12.5, fontWeight: 700, color: 'var(--navy)', display: 'block', marginBottom: 6, letterSpacing: '0.02em' };
  const pill = (active) => ({
    padding: '8px 14px', borderRadius: 8, border: '1.5px solid',
    borderColor: active ? 'var(--navy)' : 'hsl(var(--border))',
    background: active ? 'var(--navy)' : '#fff',
    color: active ? '#fff' : 'var(--navy)',
    fontWeight: 700, fontSize: 13, cursor: 'pointer', transition: 'var(--t, .15s)',
  });

  return (
    <div style={{ background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '20px 18px', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 15.5, marginBottom: 4 }}>Look up your printed fare</div>
      <p style={{ fontSize: 12.5, color: '#64748b', marginBottom: 16, lineHeight: 1.6 }}>
        Reads straight off the three official cards on this page. The total on your prepaid-counter receipt should match it.
      </p>

      <div style={{ marginBottom: 14 }}>
        <span style={label}>Service</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {Object.entries(SERVICES).map(([k, v]) => (
            <button key={k} onClick={() => pick(k)} style={pill(service === k)} type="button" aria-pressed={service === k}>{v.label}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label htmlFor="kfc-route" style={label}>Route</label>
        <select id="kfc-route" value={routeIdx} onChange={(e) => setRouteIdx(+e.target.value)}
          style={{ width: '100%', padding: '9px 10px', borderRadius: 8, border: '1.5px solid hsl(var(--border))', fontSize: 14, color: 'var(--navy)', background: '#fff' }}>
          {routes.map((r, i) => <option key={r} value={i}>{r}</option>)}
        </select>
      </div>

      {service !== 'pony' && (
        <div style={{ marginBottom: 18 }}>
          <span style={label}>Passenger weight — {weight} kg</span>
          <input type="range" min={10} max={140} value={weight} onChange={(e) => setWeight(+e.target.value)}
            style={{ width: '100%', accentColor: 'var(--navy)' }} aria-label="Passenger weight in kilograms" />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8', marginTop: 2 }}>
            <span>10 kg</span><span>140 kg</span>
          </div>
        </div>
      )}

      <div style={{ background: 'linear-gradient(135deg,var(--navy),#1A3E75)', borderRadius: 12, padding: '16px 18px', color: '#fff' }} aria-live="polite">
        <div style={{ fontSize: 11.5, opacity: 0.8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Printed fare</div>
        {res.none ? (
          <div style={{ fontSize: 14.5, fontWeight: 700, color: '#FFD166', lineHeight: 1.5, margin: '6px 0 2px' }}>{res.none}</div>
        ) : (
          <>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#FFD166', lineHeight: 1.2, margin: '2px 0' }}>{inr(res.total)}</div>
            <div style={{ fontSize: 12.5, opacity: 0.9 }}>
              {s.label}{res.slab ? <> · {res.slab}</> : null}
            </div>
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 8, lineHeight: 1.6 }}>
              {res.parts.map(([k, v], i) => <span key={k}>{i > 0 && ' + '}{k} {inr(v)}</span>)}
            </div>
          </>
        )}
      </div>
      <p style={{ fontSize: 11.5, color: '#94a3b8', marginTop: 10, lineHeight: 1.6 }}>
        Source: {source}.{res.note ? <> {res.note}</> : null} Touts on the trail quote above these figures; the counter charges the printed rate.
      </p>
    </div>
  );
}
