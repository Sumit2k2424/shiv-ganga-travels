'use client';
import { useState } from 'react';

/**
 * KedarnathTrekProfile — interactive elevation profile of the 16 km Gaurikund→
 * Kedarnath trek. Tap a checkpoint for distance, altitude, time and facilities.
 * No competitor has this; everyone else prints a static waypoint list. Same
 * differentiator philosophy as RouteMapInteractive.
 */

const PTS = [
  { name: 'Gaurikund',     km: 0,  alt: 1982, time: 'Start · 5:00 AM', fac: 'Trailhead, hot spring, shops, walking-stick rental, last reliable ATM is back at Guptkashi.' },
  { name: 'Jungle Chatti', km: 4,  alt: 2360, time: '~1.5–2 hrs',       fac: 'First major rest point. Tea stalls, snacks, toilets. The forest trail and the steeper incline begin here.' },
  { name: 'Bheembali',     km: 7,  alt: 2700, time: '~3 hrs',           fac: 'Medical aid post, GMVN tents, free water. Altitude starts to bite — a mandatory rest if you feel breathless.' },
  { name: 'Lincholi',      km: 11, alt: 3000, time: '~4.5–5 hrs',       fac: 'The "oxygen zone." Medical post, GMVN stay, food. Best place to break the trek over two days if you are tiring.' },
  { name: 'Base Camp',     km: 14, alt: 3400, time: '~6 hrs',           fac: 'Glacier views open up. Last major stop before the temple; GMVN camp and tents.' },
  { name: 'Kedarnath',     km: 16, alt: 3583, time: '~6–8 hrs',         fac: 'The temple. GMVN, dharamshalas, tented camps, a 10-bed hospital. Sparsh darshan before 3 PM.' },
];

const W = 680, H = 240, PADX = 36, PADY = 28;
const minA = 1900, maxA = 3650, maxKm = 16;
const x = (km) => PADX + (km / maxKm) * (W - PADX * 2);
const y = (alt) => H - PADY - ((alt - minA) / (maxA - minA)) * (H - PADY * 2);

export default function KedarnathTrekProfile() {
  const [sel, setSel] = useState(5);
  const s = PTS[sel];

  const line = PTS.map((p, i) => `${i ? 'L' : 'M'}${x(p.km)},${y(p.alt)}`).join(' ');
  const area = `${line} L${x(maxKm)},${H - PADY} L${x(0)},${H - PADY} Z`;

  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', marginBottom: 24 }}>
      <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 15.5, marginBottom: 2 }}>Interactive trek profile — Gaurikund to Kedarnath</div>
      <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 12, lineHeight: 1.6 }}>16 km · 1,601 m of climb. Tap any checkpoint for distance, altitude, timing and what's there.</p>

      <div style={{ overflowX: 'auto' }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ minWidth: 520, display: 'block' }} role="img" aria-label="Kedarnath trek elevation profile from Gaurikund 1982m to Kedarnath 3583m over 16km">
          <defs>
            <linearGradient id="ktp-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.30" />
              <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          {[2000, 2500, 3000, 3500].map(a => (
            <g key={a}>
              <line x1={PADX} y1={y(a)} x2={W - PADX} y2={y(a)} stroke="var(--border)" strokeWidth="1" strokeDasharray="3 4" />
              <text x={4} y={y(a) + 3} fontSize="9" fill="#94a3b8">{a}m</text>
            </g>
          ))}
          <path d={area} fill="url(#ktp-fill)" />
          <path d={line} fill="none" stroke="var(--teal)" strokeWidth="2.5" strokeLinejoin="round" />
          {PTS.map((p, i) => (
            <g key={p.name} style={{ cursor: 'pointer' }} onClick={() => setSel(i)}>
              <circle cx={x(p.km)} cy={y(p.alt)} r={sel === i ? 8 : 5} fill={sel === i ? 'var(--navy)' : '#fff'} stroke="var(--navy)" strokeWidth="2.5" />
              <text x={x(p.km)} y={H - 8} fontSize="9.5" fill={sel === i ? 'var(--navy)' : '#64748b'} fontWeight={sel === i ? 700 : 500} textAnchor="middle">{p.km}km</text>
            </g>
          ))}
        </svg>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '10px 0 12px' }}>
        {PTS.map((p, i) => (
          <button key={p.name} type="button" onClick={() => setSel(i)} style={{
            padding: '6px 11px', borderRadius: 7, border: '1.5px solid',
            borderColor: sel === i ? 'var(--navy)' : 'var(--border)',
            background: sel === i ? 'var(--navy)' : '#fff', color: sel === i ? '#fff' : 'var(--navy)',
            fontWeight: 700, fontSize: 12, cursor: 'pointer',
          }}>{p.name}</button>
        ))}
      </div>

      <div style={{ background: 'var(--navy-light, #f1f5f9)', borderRadius: 10, padding: '13px 15px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 6 }}>
          <span style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 15 }}>{s.name}</span>
          <span style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 700 }}>{s.alt.toLocaleString('en-IN')} m</span>
          <span style={{ fontSize: 12.5, color: '#64748b', fontWeight: 600 }}>{s.km} km from start</span>
          <span style={{ fontSize: 12.5, color: '#64748b', fontWeight: 600 }}>{s.time}</span>
        </div>
        <div style={{ fontSize: 13, color: '#334155', lineHeight: 1.6 }}>{s.fac}</div>
      </div>
      <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 9, lineHeight: 1.6 }}>
        Times are for an average pilgrim ascending; add rest stops. Last upward entry is enforced in the afternoon — start by 5 AM in peak season. Altitudes are approximate.
      </p>
    </div>
  );
}
