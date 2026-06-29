'use client';
import { useState } from 'react';

/**
 * KedarnathFareCalc — interactive prepaid-counter fare estimator.
 * No competitor on this query has a calculator; every other page is a static
 * table. This is our differentiator (same idea as RouteMapInteractive).
 *
 * Logic mirrors the Gaurikund prepaid counter's published structure:
 *  - a base one-way rate per service for the standard 16 km,
 *  - a weight surcharge of ~₹200 for every 15 kg over 75 kg,
 *  - round trip ≈ base ×2 minus a small return concession.
 * These are honest planning ranges, not a quote — the counter rate on the day
 * is final. We keep the maths transparent so pilgrims can sanity-check a quote.
 */

const SERVICES = {
  pony:  { label: 'Pony / Horse (Ghoda)', base: 3300, time: '3–4 hrs up' },
  palki: { label: 'Palki (Dandi, 4 carriers)', base: 9000, time: '5–7 hrs up' },
  kandi: { label: 'Kandi / Pitthu (basket)', base: 4200, time: '6–7 hrs up' },
};

function surcharge(weight) {
  if (weight <= 75) return 0;
  return Math.ceil((weight - 75) / 15) * 200;
}

const inr = (n) => '₹' + n.toLocaleString('en-IN');

export default function KedarnathFareCalc() {
  const [service, setService] = useState('pony');
  const [weight, setWeight] = useState(70);
  const [trip, setTrip] = useState('one');

  const s = SERVICES[service];
  const extra = surcharge(weight);
  const oneWay = s.base + extra;
  const round = Math.round(oneWay * 1.8); // small return concession baked in
  const estimate = trip === 'one' ? oneWay : round;
  const lo = Math.round(estimate * 0.9);
  const hi = Math.round(estimate * 1.15);

  const label = { fontSize: 12.5, fontWeight: 700, color: 'var(--navy)', display: 'block', marginBottom: 6, letterSpacing: '0.02em' };
  const pill = (active) => ({
    padding: '8px 14px', borderRadius: 8, border: '1.5px solid',
    borderColor: active ? 'var(--navy)' : 'var(--border)',
    background: active ? 'var(--navy)' : '#fff',
    color: active ? '#fff' : 'var(--navy)',
    fontWeight: 700, fontSize: 13, cursor: 'pointer', transition: 'var(--t, .15s)',
  });

  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '20px 18px', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 15.5, marginBottom: 4 }}>Estimate your prepaid-counter fare</div>
      <p style={{ fontSize: 12.5, color: '#64748b', marginBottom: 16, lineHeight: 1.6 }}>
        A planning estimate for Gaurikund → Kedarnath. The figure printed on your prepaid-counter slip is the one that counts.
      </p>

      <div style={{ marginBottom: 14 }}>
        <span style={label}>Service</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {Object.entries(SERVICES).map(([k, v]) => (
            <button key={k} onClick={() => setService(k)} style={pill(service === k)} type="button">{v.label.split(' (')[0]}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <span style={label}>Passenger weight — {weight} kg</span>
        <input type="range" min={40} max={130} value={weight} onChange={(e) => setWeight(+e.target.value)}
          style={{ width: '100%', accentColor: 'var(--navy)' }} aria-label="Passenger weight in kilograms" />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8', marginTop: 2 }}>
          <span>40 kg</span><span>130 kg</span>
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <span style={label}>Trip</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setTrip('one')} style={pill(trip === 'one')} type="button">One way</button>
          <button onClick={() => setTrip('round')} style={pill(trip === 'round')} type="button">Round trip</button>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg,var(--navy),#1A3E75)', borderRadius: 12, padding: '16px 18px', color: '#fff' }}>
        <div style={{ fontSize: 11.5, opacity: 0.8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Likely counter fare</div>
        <div style={{ fontSize: 26, fontWeight: 800, color: '#FFD166', lineHeight: 1.2, margin: '2px 0' }}>{inr(lo)} – {inr(hi)}</div>
        <div style={{ fontSize: 12.5, opacity: 0.9 }}>
          {s.label} · {trip === 'one' ? 'one way' : 'round trip'} · {s.time}
          {extra > 0 && <> · includes ~{inr(extra)} weight surcharge</>}
        </div>
      </div>
      <p style={{ fontSize: 11.5, color: '#94a3b8', marginTop: 10, lineHeight: 1.6 }}>
        Surcharge assumed at ₹200 per 15 kg over 75 kg, per the counter's published slab. Peak May–June demand can push real quotes to the top of this range. Always confirm at the counter.
      </p>
    </div>
  );
}
