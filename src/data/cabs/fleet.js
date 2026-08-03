// ══════════════════════════════════════════════════════════════
//  FLEET — rate card, single source of truth for cab pricing
// ══════════════════════════════════════════════════════════════
//  The rich vehicle copy (photos, comfort notes, ride character)
//  already lives in `src/data/experience.js` → VEHICLES. This file
//  adds only what pricing needs, and points at that entry via
//  `showcaseId` so the two never drift apart.
//
//  Fares on a route page are either:
//    a) the route's own `fares` override — hand-priced, always wins
//    b) computed from this rate card — used for newly added routes
//       until someone prices them by hand
//
//  Rates are calibrated against our 2026 hand-priced routes. They
//  produce an indicative band; every enquiry is quoted a fixed
//  all-in price, which is what the customer actually pays.

export const FLEET = [
  {
    id: 'dzire',
    name: 'Swift Dzire',
    klass: 'Sedan',
    showcaseId: 'ertiga',          // closest entry in experience.js VEHICLES
    seats: 4,
    seatsLabel: '4 + driver',
    luggage: '2 large + 2 cabin bags',
    base: 800,
    perKm: { plains: 13, hills: 16 },
    idealFor: 'Couples and small families',
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga',
    klass: 'Compact MPV',
    showcaseId: 'ertiga',
    seats: 6,
    seatsLabel: '6 + driver',
    luggage: '3 large + 2 cabin bags',
    base: 1000,
    perKm: { plains: 17, hills: 21 },
    idealFor: 'Families of 4–6 on a budget',
  },
  {
    id: 'innova',
    name: 'Innova Crysta',
    klass: 'Premium SUV',
    showcaseId: 'innova',
    seats: 6,
    seatsLabel: '6 + driver',
    luggage: '4 large + 2 cabin bags',
    base: 1200,
    perKm: { plains: 20, hills: 25 },
    idealFor: 'Families and senior travellers — the smoothest hill ride',
  },
  {
    id: 'tempo',
    name: 'Tempo Traveller',
    klass: 'Group coach',
    showcaseId: 'tempo',
    seats: 12,
    seatsLabel: '12 / 17 / 20 + driver',
    luggage: 'Roof carrier plus rear boot',
    base: 1800,
    perKm: { plains: 29, hills: 36 },
    idealFor: 'Groups of 8 and above, joint families, temple sanghs',
  },
];

export const FLEET_BY_ID = Object.fromEntries(FLEET.map((v) => [v.id, v]));

// Vehicles quoted by default on a route page, in display order.
export const DEFAULT_QUOTED = ['dzire', 'ertiga', 'innova', 'tempo'];

// ── Fare helpers ──────────────────────────────────────────────

const inr = (n) => `₹${n.toLocaleString('en-IN')}`;
const to500 = (n) => Math.round(n / 500) * 500;

/**
 * Indicative one-way band for a single vehicle on a given distance.
 * Returns e.g. "₹4,500–₹5,500".
 */
export function fareBand(vehicleId, km, terrain = 'hills') {
  const v = FLEET_BY_ID[vehicleId];
  if (!v || !km) return null;
  const low = to500(v.base + v.perKm[terrain] * km);
  const high = to500(low * 1.25);
  return `${inr(low)}–${inr(high)}`;
}

/**
 * Full fare table for a route. Shape matches the legacy hand-written
 * arrays — [vehicleName, seats, band] — so both sources render through
 * the same table component.
 */
export function computeFares(km, terrain = 'hills', quoted = DEFAULT_QUOTED) {
  return quoted
    .map((id) => {
      const v = FLEET_BY_ID[id];
      const band = fareBand(id, km, terrain);
      return band ? [v.name, String(v.seats), band] : null;
    })
    .filter(Boolean);
}

/** The headline "from ₹x" figure — lowest number in the cheapest band. */
export function lowestFare(fares) {
  if (!fares?.length) return null;
  return fares[0][2].split('–')[0];
}
