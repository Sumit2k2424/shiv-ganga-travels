'use client';

/* ══════════════════════════════════════════════════════════════
   Animated route map — scroll-driven.

   The route draws itself as you scroll through the section, a marker
   travels the path, and each stop lights up as the line reaches it.
   Below the map, an elevation profile shows what the body is actually
   being asked to do across the circuit.

   Mapbox-ready: the node list carries real lat/lng. Set
   NEXT_PUBLIC_MAP_ENGINE=mapbox and add NEXT_PUBLIC_MAPBOX_TOKEN, and
   RouteMapMapbox is loaded in place of the SVG with the same props.
   The SVG is the default because it costs ~0 KB of JS against
   Mapbox GL's ~250 KB, and Lighthouse notices.
   ══════════════════════════════════════════════════════════════ */

import { useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react';
import { splinePath, elevationPath, routeDistanceKm } from '@/lib/route-geometry';

const MAP_ENGINE = process.env.NEXT_PUBLIC_MAP_ENGINE || 'svg';
const MapboxRoute = MAP_ENGINE === 'mapbox' ? lazy(() => import('./RouteMapMapbox')) : null;

const KIND_STYLE = {
  dham:     { r: 7.5, fill: 'var(--gold)',  ring: true,  label: 'Dham' },
  base:     { r: 5.5, fill: 'var(--navy)',  ring: true,  label: 'Base' },
  halt:     { r: 4.5, fill: 'var(--teal)',  ring: false, label: 'Overnight' },
  waypoint: { r: 3,   fill: '#94A3B8',      ring: false, label: 'En route' },
};

export default function RouteMap({ nodes, title = 'The route', category }) {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(null);
  const [len, setLen] = useState(1);

  /* Geometry is deterministic — compute once */
  const geo = useMemo(() => {
    const pts = nodes.map((n) => ({ x: n.x, y: n.y }));
    return {
      d: splinePath(pts, 0.55),
      elev: elevationPath(nodes),
      km: routeDistanceKm(nodes),
    };
  }, [nodes]);

  /* Measure the drawn length so dash animation is exact */
  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength() || 1);
  }, [geo.d]);

  /* Scroll progression through the section */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    let ticking = false;
    const paint = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the section top reaches 80% of the viewport,
      // 1 by the time its bottom passes 60%.
      const start = vh * 0.82;
      const end = -rect.height + vh * 0.6;
      const p = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  /* Which stop the line has reached */
  const reachedIndex = Math.round(progress * (nodes.length - 1));
  const traveller = nodes[Math.min(nodes.length - 1, reachedIndex)];
  const shown = active != null ? nodes[active] : traveller;

  if (MapboxRoute) {
    return (
      <Suspense fallback={<div style={{ aspectRatio: '16/10', background: 'var(--paper-deep)' }} />}>
        <MapboxRoute nodes={nodes} title={title} category={category} />
      </Suspense>
    );
  }

  return (
    <div ref={sectionRef}>
      <div className="lux-map">
        {/* ── Map plate ─────────────────────────────────── */}
        <div className="lux-map__plate">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            className="lux-map__svg"
            role="img"
            aria-label={`Route map showing ${nodes.map((n) => n.name).join(', ')}`}
          >
            <defs>
              <linearGradient id="lxRidge" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0F2B5B" stopOpacity="0.09" />
                <stop offset="100%" stopColor="#0F2B5B" stopOpacity="0.015" />
              </linearGradient>
              <linearGradient id="lxRoute" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#0B7B8B" />
                <stop offset="55%" stopColor="#E8920A" />
                <stop offset="100%" stopColor="#E8920A" />
              </linearGradient>
              <filter id="lxGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.4" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Stylised ridge lines — the Garhwal skyline, not a satellite tile */}
            <g aria-hidden="true">
              <path d="M0,44 L9,30 L15,38 L23,22 L31,34 L38,20 L46,32 L54,18 L62,30 L70,16 L78,26 L86,14 L94,24 L100,18 L100,100 L0,100 Z" fill="url(#lxRidge)" />
              <path d="M0,58 L8,48 L16,54 L26,40 L34,50 L44,38 L52,48 L62,36 L72,46 L82,34 L92,44 L100,38 L100,100 L0,100 Z" fill="url(#lxRidge)" />
              {/* Contour hairlines */}
              {[26, 38, 50, 62, 74, 86].map((y) => (
                <path
                  key={y}
                  d={`M0,${y} Q25,${y - 4} 50,${y} T100,${y}`}
                  fill="none"
                  stroke="var(--rule)"
                  strokeWidth="0.18"
                />
              ))}
            </g>

            {/* Route — ghost line then the drawn line */}
            <path d={geo.d} fill="none" stroke="var(--rule-strong)" strokeWidth="0.55" strokeLinecap="round" strokeDasharray="1.4 1.6" />
            <path
              ref={pathRef}
              d={geo.d}
              fill="none"
              stroke="url(#lxRoute)"
              strokeWidth="0.85"
              strokeLinecap="round"
              strokeDasharray={len}
              strokeDashoffset={len * (1 - progress)}
              style={{ transition: 'stroke-dashoffset .18s linear' }}
            />

            {/* Stops */}
            {nodes.map((n, i) => {
              const st = KIND_STYLE[n.kind] || KIND_STYLE.waypoint;
              const lit = i <= reachedIndex;
              const isActive = active === i;
              return (
                <g
                  key={n.id}
                  className="lux-map__node"
                  transform={`translate(${n.x} ${n.y})`}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${n.name}, ${n.alt} metres`}
                  style={{ cursor: 'pointer', outline: 'none' }}
                >
                  {st.ring && (
                    <circle
                      r={st.r * 1.85}
                      fill="none"
                      stroke={st.fill}
                      strokeWidth="0.28"
                      opacity={lit ? 0.55 : 0.16}
                      style={{ transition: 'opacity .5s' }}
                    />
                  )}
                  <circle
                    r={isActive ? st.r * 0.55 : st.r * 0.42}
                    fill={lit ? st.fill : '#CBD5E1'}
                    style={{ transition: 'fill .5s, r .3s' }}
                    filter={n.kind === 'dham' && lit ? 'url(#lxGlow)' : undefined}
                  />
                  {n.kind === 'dham' && (
                    <text
                      y={-st.r * 1.1}
                      textAnchor="middle"
                      fontSize="2.5"
                      fontWeight="600"
                      letterSpacing="0.12"
                      fill={lit ? 'var(--ink)' : '#94A3B8'}
                      style={{ transition: 'fill .5s', textTransform: 'uppercase' }}
                    >
                      {n.name}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Traveller marker */}
            {progress > 0.01 && progress < 0.995 && traveller && (
              <circle
                cx={traveller.x}
                cy={traveller.y}
                r="1.5"
                fill="#fff"
                stroke="var(--gold)"
                strokeWidth="0.7"
                style={{ transition: 'cx .35s cubic-bezier(.22,1,.36,1), cy .35s cubic-bezier(.22,1,.36,1)' }}
              />
            )}
          </svg>

          {/* Live caption */}
          <div className="lux-map__caption" aria-live="polite">
            <span className="lux-eyebrow lux-eyebrow--plain" style={{ color: 'var(--gold-dark)' }}>
              {shown?.day || 'On route'}
            </span>
            <strong className="lux-display lux-display--sm" style={{ display: 'block', marginTop: 8 }}>
              {shown?.name}
            </strong>
            <p className="lux-body" style={{ fontSize: 13.5, marginTop: 8, maxWidth: 380 }}>
              {shown?.note}
            </p>
            <div style={{ display: 'flex', gap: 22, marginTop: 14, flexWrap: 'wrap' }}>
              <Metric k="Altitude" v={`${shown?.alt?.toLocaleString('en-IN')} m`} />
              {shown?.driveIn && <Metric k="From last stop" v={shown.driveIn} />}
            </div>
          </div>
        </div>

        {/* ── Legend + totals ───────────────────────────── */}
        <div className="lux-map__meta">
          <div className="lux-map__legend">
            {['dham', 'base', 'halt', 'waypoint'].map((k) => (
              <span key={k} className="lux-map__legend-item">
                <i style={{ background: KIND_STYLE[k].fill }} />
                {KIND_STYLE[k].label}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            <Metric k="Circuit" v={`~${geo.km.toLocaleString('en-IN')} km`} />
            <Metric k="Stops" v={String(nodes.length)} />
            <Metric k="Highest point" v={`${geo.elev.maxAlt?.toLocaleString('en-IN')} m`} />
          </div>
        </div>
      </div>

      {/* ── Elevation profile ───────────────────────────── */}
      <div className="lux-elev">
        <div className="lux-elev__head">
          <span className="lux-eyebrow">Elevation profile</span>
          <span className="lux-caption">
            {geo.elev.minAlt?.toLocaleString('en-IN')} m → {geo.elev.maxAlt?.toLocaleString('en-IN')} m
          </span>
        </div>
        <svg viewBox="0 0 1000 190" className="lux-elev__svg" role="img" aria-label="Altitude profile across the route">
          <defs>
            <linearGradient id="lxElev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0B7B8B" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#0B7B8B" stopOpacity="0" />
            </linearGradient>
            <clipPath id="lxElevClip">
              <rect x="0" y="0" width={1000 * Math.max(0.02, progress)} height="190" />
            </clipPath>
          </defs>
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={f} x1="0" x2="1000" y1={190 * f} y2={190 * f} stroke="var(--rule)" strokeWidth="1" />
          ))}
          <g clipPath="url(#lxElevClip)">
            <path d={geo.elev.area} fill="url(#lxElev)" />
            <path d={geo.elev.line} fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
          </g>
          {geo.elev.points?.map((p, i) =>
            p.kind === 'dham' || p.kind === 'base' ? (
              <g key={p.id} opacity={i <= reachedIndex ? 1 : 0.25} style={{ transition: 'opacity .5s' }}>
                <line x1={p.px} x2={p.px} y1={p.py} y2="174" stroke="var(--rule-strong)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx={p.px} cy={p.py} r="4" fill={p.kind === 'dham' ? 'var(--gold)' : 'var(--navy)'} />
                <text x={p.px} y={p.py - 12} textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--ink)">
                  {p.alt.toLocaleString('en-IN')}m
                </text>
                <text x={p.px} y="188" textAnchor="middle" fontSize="13" fill="var(--ink-faint)" letterSpacing="0.5">
                  {p.name}
                </text>
              </g>
            ) : null
          )}
        </svg>
      </div>
    </div>
  );
}

function Metric({ k, v }) {
  return (
    <span style={{ display: 'block' }}>
      <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 600 }}>
        {k}
      </span>
      <strong style={{ display: 'block', fontSize: 15, color: 'var(--ink)', marginTop: 4, fontWeight: 600 }}>{v}</strong>
    </span>
  );
}
