'use client';
import { useState } from 'react';

/**
 * KedarnathPujaPicker — interactive "which VIP darshan / puja is right for me".
 * Competitors only print a static table. This turns the confusing puja list into
 * a one-tap recommendation, the way we'd advise a pilgrim on the phone.
 * Rates mirror the BKTC committee-set figures used across this site.
 */

const RESULTS = {
  budget_quick: { name: 'Special Darshan Parchi', price: '₹1,100 / person', note: 'Priority lane + brief sanctum access and a short Abhishek. The default choice for most families who just want to skip the queue.' },
  budget_min:   { name: 'Basic Special Darshan', price: '₹300 / person', note: 'The committee-set minimum. Priority entry without a big ritual — fine if you only want to avoid the long wait.' },
  ritual:       { name: 'Rudrabhishek', price: '~₹1,700', note: 'A dedicated Rudra puja with sanctum access. The most-loved ritual at a Jyotirlinga — performed pre-dawn.' },
  family:       { name: 'Shodashopachar Puja', price: 'from ₹7,500 (up to 5)', note: '16-step group puja with shared inner-sanctum time. Best value when 4–5 of the same gotra travel together.' },
  premium:      { name: 'Maha Abhishek (4 AM) / Full-Day Puja', price: '₹5,500+ up to ₹28,600', note: 'The pre-dawn ritual bathing of the Shivling, or the full-day puja. Maximum time and closeness inside the Garbha Griha.' },
  aarti:        { name: 'Sampoorna / Evening Aarti', price: '₹3,100 / person', note: 'A reserved place at the evening aarti — the most visually moving ritual of the day.' },
  free:         { name: 'Free General Darshan', price: '₹0', note: 'In September–October the crowd is thin and the free queue is calm. Paid priority adds little — save your money.' },
};

const Q = [
  { key: 'who', label: 'Who is travelling?', opts: [['Family / group', 'family'], ['Senior / unwell', 'senior'], ['Just me / a couple', 'solo']] },
  { key: 'want', label: 'What matters most?', opts: [['Skip the queue cheaply', 'budget'], ['A proper ritual (abhishek)', 'ritual'], ['The aarti experience', 'aarti'], ['Maximum sanctum time', 'premium']] },
  { key: 'when', label: 'When are you visiting?', opts: [['Peak May–June', 'peak'], ['Sept–Oct (quieter)', 'off']] },
];

function recommend(a) {
  if (a.when === 'off' && a.want === 'budget') return RESULTS.free;
  if (a.want === 'premium') return RESULTS.premium;
  if (a.want === 'aarti') return RESULTS.aarti;
  if (a.want === 'ritual') return a.who === 'family' ? RESULTS.family : RESULTS.ritual;
  // budget
  if (a.who === 'family') return RESULTS.family;
  if (a.who === 'senior') return RESULTS.budget_quick;
  return RESULTS.budget_min;
}

export default function KedarnathPujaPicker() {
  const [a, setA] = useState({});
  const done = Q.every(q => a[q.key]);
  const rec = done ? recommend(a) : null;

  const pill = (active) => ({
    padding: '8px 13px', borderRadius: 8, border: '1.5px solid',
    borderColor: active ? 'var(--navy)' : 'var(--border)',
    background: active ? 'var(--navy)' : '#fff',
    color: active ? '#fff' : 'var(--navy)',
    fontWeight: 700, fontSize: 12.5, cursor: 'pointer', transition: 'var(--t, .15s)',
  });

  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '20px 18px', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 15.5, marginBottom: 4 }}>Which VIP darshan suits you?</div>
      <p style={{ fontSize: 12.5, color: '#64748b', marginBottom: 14, lineHeight: 1.6 }}>Three taps for a plain recommendation — the same advice we'd give on the phone.</p>

      {Q.map(q => (
        <div key={q.key} style={{ marginBottom: 14 }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--navy)', display: 'block', marginBottom: 6 }}>{q.label}</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {q.opts.map(([label, val]) => (
              <button key={val} type="button" onClick={() => setA({ ...a, [q.key]: val })} style={pill(a[q.key] === val)}>{label}</button>
            ))}
          </div>
        </div>
      ))}

      {rec && (
        <div style={{ background: 'linear-gradient(135deg,var(--navy),#1A3E75)', borderRadius: 12, padding: '16px 18px', color: '#fff', marginTop: 4 }}>
          <div style={{ fontSize: 11.5, opacity: 0.8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our pick for you</div>
          <div style={{ fontSize: 19, fontWeight: 800, color: '#FFD166', lineHeight: 1.25, margin: '2px 0' }}>{rec.name}</div>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{rec.price}</div>
          <div style={{ fontSize: 13, opacity: 0.92, lineHeight: 1.6 }}>{rec.note}</div>
        </div>
      )}
      {!rec && (
        <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 4 }}>Answer all three to see a recommendation. Every option is booked on the official BKTC portal.</p>
      )}
      <p style={{ fontSize: 11.5, color: '#94a3b8', marginTop: 10, lineHeight: 1.6 }}>
        Planning aid only — book the actual puja on badrinath-kedarnath.gov.in. Rates are BKTC committee figures and may be revised each season.
      </p>
    </div>
  );
}
