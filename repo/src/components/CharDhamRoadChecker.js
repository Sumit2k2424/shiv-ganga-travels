'use client';
import { useState } from 'react';

/**
 * CharDhamRoadChecker — pick your route and month, get an honest risk read and
 * the right official source to verify on the day. No competitor (or our old
 * page) has this; everyone else prints a static "open/closed" line.
 * Verdicts reflect on-ground 2026 conditions and project-completion status.
 */

const ROUTES = {
  Yamunotri: { base: 'caution', why: 'NH-134 is the least-finished corridor (~57% widened) with narrow single-lane patches Dharasu→Janki Chatti and the most frequent monsoon closures of the four.' },
  Gangotri:  { base: 'ok',      why: 'Largely motorable to the temple via Uttarkashi–Harsil; a few quick-clearing slide spots near Gangnani, plus early/late-season snow.' },
  Kedarnath: { base: 'ok',      why: 'Road runs to Sonprayag/Gaurikund then a 16 km trek. Fata–Sitapur is ~99% widened, but Sirobgad, Munkatiya (Sonprayag) and Sitapur are landslide-sensitive in rain.' },
  Badrinath: { base: 'ok',      why: 'Fully motorable to the gate. The gated Joshimath–Badrinath cuttings run one-way; Lambagad, Helang and Pipalkoti can jam in peak rush.' },
};

const SEASON = {
  'Apr–Jun': { mult: 'good', label: 'Peak season — clear & dry' },
  'Jul–Aug': { mult: 'bad',  label: 'Monsoon — landslide risk' },
  'Sep–Nov': { mult: 'good', label: 'Post-monsoon — most stable' },
};

const VERDICT = {
  green:  { c: '#15803d', bg: '#f0fdf4', bd: '#bbf7d0', t: 'Good to go', src: 'Still confirm the morning you drive — UTDB advisories + IMD district warning.' },
  amber:  { c: '#b45309', bg: '#fffbeb', bd: '#fde68a', t: 'Go, but plan buffers', src: 'Check UTDB + IMD the night before and that morning. Keep a rest-day buffer.' },
  red:    { c: '#b91c1c', bg: '#fef2f2', bd: '#fecaca', t: 'High risk — verify daily', src: 'Call the district control room before moving: SDRF 1070 · Rudraprayag 01364-233727. Never cross active debris — wait for JCB clearance.' },
};

function verdict(route, season) {
  const r = ROUTES[route].base, s = SEASON[season].mult;
  if (s === 'bad') return route === 'Yamunotri' || route === 'Kedarnath' ? 'red' : 'amber';
  if (s === 'good') return r === 'caution' ? 'amber' : 'green';
  return 'amber';
}

export default function CharDhamRoadChecker() {
  const [route, setRoute] = useState('Kedarnath');
  const [season, setSeason] = useState('Apr–Jun');
  const v = VERDICT[verdict(route, season)];

  const pill = (active) => ({
    padding: '8px 13px', borderRadius: 8, border: '1.5px solid',
    borderColor: active ? 'var(--navy)' : 'var(--border)',
    background: active ? 'var(--navy)' : '#fff',
    color: active ? '#fff' : 'var(--navy)',
    fontWeight: 700, fontSize: 12.5, cursor: 'pointer', transition: '.15s',
  });
  const lab = { fontSize: 12.5, fontWeight: 700, color: 'var(--navy)', display: 'block', marginBottom: 6 };

  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', marginBottom: 16 }}>
      <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 15.5, marginBottom: 4 }}>Should I drive it now? Quick risk check</div>
      <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 14, lineHeight: 1.6 }}>Pick a route and travel month for an honest read — and exactly which source to verify on the day.</p>

      <div style={{ marginBottom: 12 }}>
        <span style={lab}>Route</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {Object.keys(ROUTES).map(r => (<button key={r} type="button" onClick={() => setRoute(r)} style={pill(route === r)}>{r}</button>))}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <span style={lab}>When are you travelling?</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {Object.keys(SEASON).map(s => (<button key={s} type="button" onClick={() => setSeason(s)} style={pill(season === s)}>{s}</button>))}
        </div>
        <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 6 }}>{SEASON[season].label}</div>
      </div>

      <div style={{ background: v.bg, border: `1px solid ${v.bd}`, borderRadius: 12, padding: '14px 16px' }}>
        <div style={{ fontSize: 15, fontWeight: 800, color: v.c, marginBottom: 6 }}>● {v.t} — {route}, {season}</div>
        <div style={{ fontSize: 13, color: '#334155', lineHeight: 1.65, marginBottom: 8 }}>{ROUTES[route].why}</div>
        <div style={{ fontSize: 12.5, color: v.c, fontWeight: 600, lineHeight: 1.6 }}>{v.src}</div>
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 10, lineHeight: 1.6 }}>
        Planning aid only — not a live feed. Roads can shut within hours during monsoon. Verify with UTDB, IMD and the district control room before you set off.
      </p>
    </div>
  );
}
