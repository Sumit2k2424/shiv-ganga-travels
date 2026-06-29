'use client';
import { useState } from 'react';

/**
 * DoDhamConfigurator — pick start city × tier × group size for a transparent
 * per-person estimate and a pre-filled WhatsApp enquiry. The Do Dham SERP is
 * dominated by big OTAs with one flat (high) price and no transparency; a quick
 * honest configurator is both a differentiator and a conversion tool.
 */

const TIERS = {
  standard: { label: 'Standard (shared Tempo Traveller)', dur: '5N/6D', base: 10999 },
  private:  { label: 'Private (Innova Crysta)',           dur: '5N/6D', base: 14999 },
  heli:     { label: '+ Kedarnath Helicopter',            dur: '5N/6D', base: 22999 },
  senior:   { label: 'Senior Special (slow pace)',        dur: '6N/7D', base: 13999 },
};
const CITY = { Haridwar: 0, Rishikesh: 0, Delhi: 1800 }; // Delhi transfer add-on per person
const GROUP = { '2 (couple)': 0.10, '3–6 (family)': 0, '7+ (group)': -0.08 };

const wa = (phone, msg) => `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
const inr = (n) => '₹' + Math.round(n / 10) * 10;

export default function DoDhamConfigurator({ whatsapp }) {
  const [tier, setTier] = useState('standard');
  const [city, setCity] = useState('Haridwar');
  const [group, setGroup] = useState('3–6 (family)');

  const t = TIERS[tier];
  const per = t.base * (1 + GROUP[group]) + CITY[city];
  const lo = per, hi = per * 1.12;

  const msg = `Namaste! Do Dham (Kedarnath + Badrinath) enquiry — ${t.label}, ${t.dur}, starting ${city}, group: ${group}. Please share the exact per-person price and dates.`;

  const pill = (active) => ({
    padding: '7px 12px', borderRadius: 8, border: '1.5px solid',
    borderColor: active ? 'var(--navy)' : 'var(--border)',
    background: active ? 'var(--navy)' : '#fff', color: active ? '#fff' : 'var(--navy)',
    fontWeight: 700, fontSize: 12, cursor: 'pointer',
  });
  const lab = { fontSize: 12.5, fontWeight: 700, color: 'var(--navy)', display: 'block', marginBottom: 6 };

  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', marginBottom: 16 }}>
      <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 15.5, marginBottom: 4 }}>Build your Do Dham package &amp; see the price</div>
      <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 14, lineHeight: 1.6 }}>Pick your options for an honest per-person estimate — no sign-up, no obligation.</p>

      <div style={{ marginBottom: 12 }}>
        <span style={lab}>Package tier</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {Object.entries(TIERS).map(([k, v]) => (<button key={k} type="button" onClick={() => setTier(k)} style={pill(tier === k)}>{v.label.split(' (')[0]}</button>))}
        </div>
      </div>
      <div style={{ marginBottom: 12 }}>
        <span style={lab}>Starting from</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {Object.keys(CITY).map(c => (<button key={c} type="button" onClick={() => setCity(c)} style={pill(city === c)}>{c}</button>))}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <span style={lab}>Group size</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {Object.keys(GROUP).map(g => (<button key={g} type="button" onClick={() => setGroup(g)} style={pill(group === g)}>{g}</button>))}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg,var(--navy),#1A3E75)', borderRadius: 12, padding: '16px 18px', color: '#fff' }}>
        <div style={{ fontSize: 11.5, opacity: 0.8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Estimated per person</div>
        <div style={{ fontSize: 25, fontWeight: 800, color: '#FFD166', lineHeight: 1.2, margin: '2px 0' }}>{inr(lo)} – {inr(hi)}</div>
        <div style={{ fontSize: 12.5, opacity: 0.9, marginBottom: 12 }}>{t.label} · {t.dur} · from {city} · {group}</div>
        <a href={wa(whatsapp, msg)} target="_blank" rel="nofollow noopener noreferrer"
          style={{ display: 'inline-block', background: '#25D366', color: '#fff', padding: '10px 20px', borderRadius: 8, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
          💬 Get this exact quote on WhatsApp
        </a>
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 10, lineHeight: 1.6 }}>
        Includes AC vehicle, twin-share hotels, breakfast + dinner, VIP darshan, guide, toll &amp; parking, 5% GST. Kedarnath pony/heli is optional extra. Final price confirmed on enquiry — ₹0 to ask, no advance to talk.
      </p>
    </div>
  );
}
