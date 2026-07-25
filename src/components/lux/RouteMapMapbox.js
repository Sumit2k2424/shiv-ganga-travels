'use client';

/* ══════════════════════════════════════════════════════════════
   Mapbox adapter — opt-in, and deliberately not a build dependency.

   To switch the route map over to Mapbox GL:
     1. NEXT_PUBLIC_MAP_ENGINE=mapbox
     2. NEXT_PUBLIC_MAPBOX_TOKEN=pk.…
     3. Add to the CSP in next.config.js:
          script-src  … https://api.mapbox.com
          style-src   … https://api.mapbox.com
          connect-src … https://api.mapbox.com https://events.mapbox.com
          worker-src  blob: 'self'          (already present)

   mapbox-gl is pulled from the CDN at runtime rather than bundled, so
   the default SVG build stays at zero cost and `npm install` does not
   carry a 250 KB dependency the site may never use. Same props as
   RouteMap, so the two are drop-in interchangeable.
   ══════════════════════════════════════════════════════════════ */

import { useEffect, useRef, useState } from 'react';

const GL_VERSION = '3.9.0';
const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const PAINT = {
  dham:     { color: '#E8920A', size: 9 },
  base:     { color: '#0F2B5B', size: 7 },
  halt:     { color: '#0B7B8B', size: 6 },
  waypoint: { color: '#94A3B8', size: 4 },
};

function loadGl() {
  if (typeof window === 'undefined') return Promise.reject(new Error('server'));
  if (window.mapboxgl) return Promise.resolve(window.mapboxgl);

  return new Promise((resolve, reject) => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = `https://api.mapbox.com/mapbox-gl-js/v${GL_VERSION}/mapbox-gl.css`;
    document.head.appendChild(css);

    const s = document.createElement('script');
    s.src = `https://api.mapbox.com/mapbox-gl-js/v${GL_VERSION}/mapbox-gl.js`;
    s.async = true;
    s.onload = () => (window.mapboxgl ? resolve(window.mapboxgl) : reject(new Error('mapbox-gl missing')));
    s.onerror = () => reject(new Error('mapbox-gl failed to load'));
    document.head.appendChild(s);
  });
}

export default function RouteMapMapbox({ nodes = [] }) {
  const hostRef = useRef(null);
  const mapRef = useRef(null);
  const [failed, setFailed] = useState(!TOKEN);

  useEffect(() => {
    if (!TOKEN || !hostRef.current || mapRef.current) return;
    let dead = false;

    loadGl()
      .then((mapboxgl) => {
        if (dead || !hostRef.current) return;
        mapboxgl.accessToken = TOKEN;

        const coords = nodes.map((n) => [n.lng, n.lat]);
        const bounds = coords.reduce(
          (b, c) => b.extend(c),
          new mapboxgl.LngLatBounds(coords[0], coords[0])
        );

        const map = new mapboxgl.Map({
          container: hostRef.current,
          style: 'mapbox://styles/mapbox/light-v11',
          bounds,
          fitBoundsOptions: { padding: 64 },
          cooperativeGestures: true,   // page scroll keeps working on mobile
          attributionControl: true,
        });
        mapRef.current = map;
        map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');

        map.on('load', () => {
          map.addSource('route', {
            type: 'geojson',
            data: { type: 'Feature', geometry: { type: 'LineString', coordinates: coords } },
          });
          map.addLayer({
            id: 'route-casing',
            type: 'line',
            source: 'route',
            paint: { 'line-color': '#ffffff', 'line-width': 7, 'line-opacity': 0.9 },
            layout: { 'line-cap': 'round', 'line-join': 'round' },
          });
          map.addLayer({
            id: 'route-line',
            type: 'line',
            source: 'route',
            paint: { 'line-color': '#E8920A', 'line-width': 3 },
            layout: { 'line-cap': 'round', 'line-join': 'round' },
          });

          for (const n of nodes) {
            const paint = PAINT[n.kind] || PAINT.waypoint;
            const el = document.createElement('span');
            Object.assign(el.style, {
              display: 'block',
              width: `${paint.size * 2}px`,
              height: `${paint.size * 2}px`,
              borderRadius: '50%',
              background: paint.color,
              border: '2px solid #fff',
              boxShadow: '0 2px 8px rgba(15,43,91,.28)',
            });
            new mapboxgl.Marker({ element: el })
              .setLngLat([n.lng, n.lat])
              .setPopup(
                new mapboxgl.Popup({ offset: 16, closeButton: false }).setHTML(
                  `<strong style="font-family:var(--font-display);font-size:15px">${n.name}</strong>
                   <div style="font-size:12px;color:#64748B;margin-top:4px">${n.alt} m · ${n.day}</div>
                   <div style="font-size:12.5px;margin-top:6px;max-width:220px;line-height:1.5">${n.note}</div>`
                )
              )
              .addTo(map);
          }
        });
      })
      .catch(() => setFailed(true));

    return () => {
      dead = true;
      mapRef.current?.remove?.();
      mapRef.current = null;
    };
  }, [nodes]);

  if (failed) {
    return (
      <div className="lux-card" style={{ padding: 28 }}>
        <p className="lux-body" style={{ fontSize: 14 }}>
          Interactive map unavailable. Set <code>NEXT_PUBLIC_MAPBOX_TOKEN</code> to enable it, or leave{' '}
          <code>NEXT_PUBLIC_MAP_ENGINE</code> unset to use the built-in route map.
        </p>
      </div>
    );
  }

  return <div ref={hostRef} className="lux-map__gl" aria-label="Interactive route map" />;
}
