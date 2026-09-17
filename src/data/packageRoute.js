// ══════════════════════════════════════════════════════════════
//  PER-PACKAGE ROUTE, HOTELS AND DHAM DATES
// ══════════════════════════════════════════════════════════════
//  Why this exists: the map, the elevation profile, the circuit
//  stats and the hotel cards were all keyed by CATEGORY, not by
//  package. ROUTE_BY_CATEGORY['single-dham'] is the Kedarnath node
//  list, so all four single-dham pages drew the same road — the
//  Yamunotri 2N/3D page rendered a route ending at Kedarnath with a
//  highest point of 3,583 m, a shrine that trip never approaches.
//  do-dham had the same fault: yamunotri-gangotri-do-dham showed
//  Kedarnath and Badrinath. HotelShowcase rendered all six cards on
//  every yatra page, putting the Kedarnath GMVN huts on a Gangotri
//  package that sleeps in Uttarkashi.
//
//  That is a factual bug first and a duplicate-content problem
//  second — it is also most of why the 15 yatra pages sat at up to
//  86.3% pairwise similarity.
//
//  Each package already carries the truth: its itinerary names the
//  towns it sleeps in and the stops it makes, its tags name the
//  dhams. So we read the stop list off the package rather than off
//  its category. Nothing is invented and no selling point is
//  removed — the pages simply stop claiming places they never go.

import { ROUTE, ROUTE_BY_CATEGORY, HOTELS } from '@/data/experience';

/**
 * Aliases per node. A stop counts as visited when the package text
 * names it or a place that only exists because of it — Janki Chatti
 * is the Yamunotri trailhead, Gaurikund the Kedarnath one, Harsil
 * sits on the Gangotri road and Mana is past Badrinath.
 */
const NODE_ALIASES = {
  haridwar:    ['haridwar', 'har ki pauri'],
  rishikesh:   ['rishikesh', 'laxman jhula', 'ram jhula'],
  barkot:      ['barkot'],
  yamunotri:   ['yamunotri', 'janki chatti', 'surya kund'],
  uttarkashi:  ['uttarkashi'],
  gangotri:    ['gangotri', 'harsil', 'bhagirathi'],
  devprayag:   ['devprayag'],
  rudraprayag: ['rudraprayag'],
  guptkashi:   ['guptkashi'],
  sonprayag:   ['sonprayag', 'gaurikund'],
  kedarnath:   ['kedarnath'],
  joshimath:   ['joshimath', 'auli'],
  badrinath:   ['badrinath', 'tapt kund'],
  mana:        ['mana village', 'mana gaon'],
};

/**
 * The text a package uses to describe itself. Deliberately excludes
 * `highlights`, which sometimes name a neighbouring dham for context
 * ("Kempty Falls en route") rather than as a stop actually made.
 */
function packageText(pkg) {
  return [
    pkg.name, pkg.subtitle, pkg.seoHeading, pkg.altitude, pkg.startCity, pkg.endCity,
    ...(pkg.tags || []),
    ...(pkg.itinerary || []).flatMap((d) => [d.title, d.desc]),
  ].filter(Boolean).join(' \n ').toLowerCase();
}

/**
 * Whether the package names this place as somewhere it goes.
 *
 * A mention is not always a visit. The Teen Dham package sells itself
 * on "No Kedarnath Trek" in its subtitle and tags — naming the shrine
 * precisely because it skips it. A place counts only if at least one
 * mention is not preceded by a negation.
 */
function mentions(text, alias) {
  const re = new RegExp(`(^|[^a-z])${alias}([^a-z]|$)`, 'gi');
  const NEG = /(^|[^a-z])(no|not|without|excluding|excludes|except|skip|skips|skipping|instead of|other than)[^.]{0,20}$/i;
  let m;
  while ((m = re.exec(text)) !== null) {
    const before = text.slice(Math.max(0, m.index - 28), m.index + m[1].length);
    if (!NEG.test(before)) return true;
  }
  return false;
}

/** Node ids this package actually visits, in canonical circuit order. */
export function nodeIdsForPackage(pkg) {
  const text = packageText(pkg);
  const hit = ROUTE.nodes
    .filter((n) => (NODE_ALIASES[n.id] || [n.id]).some((a) => mentions(text, a)))
    .map((n) => n.id);

  // A package that names fewer than two stops cannot draw a road.
  // Fall back to the old category list rather than render nothing.
  if (hit.length < 2) return ROUTE_BY_CATEGORY[pkg.category] || [];
  return hit;
}

/** ROUTE nodes for the map, elevation profile and circuit stats. */
export function nodesForPackage(pkg) {
  const ids = nodeIdsForPackage(pkg);
  return ROUTE.nodes.filter((n) => ids.includes(n.id));
}

/**
 * The stays this package can actually put you in.
 *
 * Keyed to the stops the package makes, not to its category, so the
 * Kedarnath GMVN huts stop appearing on a Gangotri trip that sleeps
 * in Uttarkashi. We deliberately do NOT narrow this to overnight
 * halts: most itineraries write a bare "Overnight." and leave the
 * town to the day title, so parsing for it silently drops real
 * properties and understates a 12-night package. The one hard rule
 * is that a day trip has no stays at all.
 */
export function hotelsForPackage(pkg) {
  if (!(pkg.duration?.nights > 0)) return [];
  const ids = nodeIdsForPackage(pkg);
  const mine = HOTELS.filter((h) => ids.includes(h.id));
  return mine.length ? mine : HOTELS;
}

/** The dhams this package visits, in circuit order. */
export function dhamsForPackage(pkg) {
  const ids = nodeIdsForPackage(pkg);
  return ROUTE.nodes.filter((n) => n.kind === 'dham' && ids.includes(n.id)).map((n) => n.name);
}

/** The opening/closing rows that apply to this package. */
export function dhamDatesForPackage(pkg, rows) {
  const mine = dhamsForPackage(pkg);
  const kept = rows.filter((r) => mine.includes(r.dham));
  return kept.length ? kept : rows;
}

/**
 * The AMS warning, named to the shrines this package actually climbs.
 * Altitudes come straight off the ROUTE nodes, so nothing is invented:
 * a Yamunotri trip should not be warned about Kedarnath at 3,583 m.
 */
export function altitudeLede(pkg) {
  const ids = nodeIdsForPackage(pkg);
  const high = ROUTE.nodes
    .filter((n) => n.kind === 'dham' && ids.includes(n.id) && n.alt >= 3000)
    .map((n) => `${n.name} (${n.alt.toLocaleString('en-IN')}m)`);
  const acclim = ids.includes('guptkashi')
    ? ' Spend one night at Guptkashi (1,319m) before ascending to acclimatize.'
    : ids.includes('barkot')
      ? ' Spend one night at Barkot (1,220m) before ascending to acclimatize.'
      : ids.includes('uttarkashi')
        ? ' Spend one night at Uttarkashi (1,165m) before ascending to acclimatize.'
        : '';
  const subject = high.length === 0
    ? 'This itinerary stays below the altitudes where AMS usually bites, but the road still climbs hard.'
    : high.length === 1
      ? `${high[0]} is a high-altitude shrine.`
      : `${high.slice(0, -1).join(', ')} and ${high[high.length - 1]} are high-altitude shrines.`;
  return `${subject} AMS symptoms — headache, nausea, dizziness, breathlessness — can affect anyone regardless of fitness. Our driver carries an oxygen cylinder.${acclim} If symptoms worsen, descend immediately.`;
}
