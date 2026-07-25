/* ══════════════════════════════════════════════════════════════
   Route geometry helpers.

   Pure functions, no DOM — so the SVG path can be built on the
   server and shipped as a string, and the same node list can be
   handed to Mapbox later without touching this file.
   ══════════════════════════════════════════════════════════════ */

import { ROUTE, ROUTE_BY_CATEGORY } from '@/data/experience';

/** Nodes for a package category, in travel order. */
export function nodesForCategory(category) {
  const ids = ROUTE_BY_CATEGORY[category] || ROUTE_BY_CATEGORY['char-dham'];
  const byId = new Map(ROUTE.nodes.map((n) => [n.id, n]));
  return ids.map((id) => byId.get(id)).filter(Boolean);
}

/**
 * Catmull-Rom spline through the points, emitted as cubic béziers.
 * A straight polyline between hill towns looks like a network diagram;
 * a spline looks like a road, which is what this is.
 */
export function splinePath(points, tension = 0.5) {
  if (!points || points.length < 2) return '';
  const p = points;
  let d = `M ${p[0].x.toFixed(2)} ${p[0].y.toFixed(2)}`;

  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] || p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] || p2;

    const c1x = p1.x + ((p2.x - p0.x) / 6) * tension * 2;
    const c1y = p1.y + ((p2.y - p0.y) / 6) * tension * 2;
    const c2x = p2.x - ((p3.x - p1.x) / 6) * tension * 2;
    const c2y = p2.y - ((p3.y - p1.y) / 6) * tension * 2;

    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return d;
}

/** Great-circle distance in km — used for the route total. */
export function haversineKm(a, b) {
  const R = 6371;
  const toRad = (v) => (v * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/**
 * Straight-line total, then a winding factor. Garhwal roads run roughly
 * 1.9× the crow-flies distance — the published 1,100 km circuit figure
 * lines up with that, so it is a fair multiplier rather than a guess.
 */
export function routeDistanceKm(nodes, winding = 1.9) {
  let sum = 0;
  for (let i = 0; i < nodes.length - 1; i++) sum += haversineKm(nodes[i], nodes[i + 1]);
  return Math.round((sum * winding) / 10) * 10;
}

/** Elevation profile as an SVG area path, normalised to a viewBox. */
export function elevationPath(nodes, w = 1000, h = 190, pad = 16) {
  if (!nodes?.length) return { area: '', line: '', points: [] };

  const maxAlt = Math.max(...nodes.map((n) => n.alt));
  const minAlt = Math.min(...nodes.map((n) => n.alt));
  const range = Math.max(1, maxAlt - minAlt);

  const points = nodes.map((n, i) => ({
    ...n,
    px: pad + (i / (nodes.length - 1)) * (w - pad * 2),
    py: h - pad - ((n.alt - minAlt) / range) * (h - pad * 2),
  }));

  const line = splinePath(points.map((p) => ({ x: p.px, y: p.py })), 0.4);
  const area = `${line} L ${points[points.length - 1].px.toFixed(2)} ${h} L ${points[0].px.toFixed(2)} ${h} Z`;

  return { area, line, points, maxAlt, minAlt };
}
