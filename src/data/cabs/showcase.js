// ══════════════════════════════════════════════════════════════
//  ROUTE-AWARE FLEET + SECTION COPY
// ══════════════════════════════════════════════════════════════
//  Why this exists: a crawl of the 34 published cab route pages
//  found ~400 words of body text rendered byte-identically on every
//  one of them — the fleet showcase, the cancellation table, the
//  operator card and five fixed section ledes. Against an average
//  page of 1,925 words that is ~21% of the body, and it is what
//  pushed the family to 42% average pairwise similarity (peaking at
//  62.7% for haridwar-to-yamunotri vs rishikesh-to-yamunotri).
//
//  The route DATA was never the problem — the intros, stops and FAQs
//  in routes.js are hand-written and genuinely distinct. So nothing
//  here removes a selling point. Instead each shared block is fed
//  facts the route already carries (distance, driving time, terrain,
//  where the road actually ends, destination altitude) so it renders
//  differently per route while saying the same true things.
//
//  VehicleShowcase is a client component whose SSR pass renders only
//  vehicles[0] in detail. Reordering that array per route is
//  therefore what changes the crawled HTML — see recommendedFor().

import { VEHICLES } from '@/data/experience';
import { getDestination } from '@/data/cabs';

const num = (s) => parseInt(String(s ?? '').replace(/[^0-9]/g, ''), 10) || 0;

/** Kilometres from a route's free-text distance ("235 km (to Gaurikund)"). */
export const routeKm = (r) => num(r.distance);

/** Destination altitude in metres, 0 when unknown. */
export function destAltitude(r) {
  const d = getDestination(r.destination);
  return num(d?.altitude);
}

/**
 * Which vehicle we would actually put this passenger in.
 *
 * Deliberately not a scoring model — these are the four calls our
 * drivers already make, written down:
 *   plains run          → the sedan; the road does not justify more
 *   short hill run      → the Ertiga, nimble above Uttarkashi
 *   high dham approach  → the Scorpio, for clearance on diversions
 *   long hill haul      → the Innova, the seat that survives 10 hours
 */
export function recommendedFor(r) {
  const km = routeKm(r);
  const alt = destAltitude(r);
  if (r.terrain === 'plains') return 'ertiga';
  if (alt >= 3000) return 'suv';
  if (km >= 250) return 'innova';
  return km < 180 ? 'ertiga' : 'innova';
}

/** VEHICLES reordered so the route's recommended vehicle leads. */
export function showcaseFor(r) {
  const id = recommendedFor(r);
  const lead = VEHICLES.filter((v) => v.id === id);
  return lead.length ? [...lead, ...VEHICLES.filter((v) => v.id !== id)] : VEHICLES;
}

const VEHICLE_LABEL = {
  innova: 'the Innova Crysta',
  tempo: 'the Tempo Traveller',
  ertiga: 'the Ertiga or a sedan',
  suv: 'the Scorpio',
};

/** One route-specific sentence explaining the lead vehicle. */
export function fleetLede(r, from, to) {
  const id = recommendedFor(r);
  const v = VEHICLE_LABEL[id];
  const km = routeKm(r);
  const alt = destAltitude(r);
  if (r.terrain === 'plains')
    return `${from} to ${to} stays on plains road the whole way, so ${v} is usually the sensible booking — the surface never asks for more vehicle than that. All four are available.`;
  if (alt >= 3000)
    return `${to} sits at ${getDestination(r.destination)?.altitude}, and the last stretch is where clearance starts to matter. We lead with ${v} on this route, especially in April and October when diversions leave the surface unpredictable.`;
  if (km >= 250)
    return `At ${r.distance} and ${r.time} behind the wheel, ${from} to ${to} is a long day in the seat. We lead with ${v} here for exactly that reason. All four are available.`;
  return `${from} to ${to} is a shorter hill run at ${r.distance}, which makes ${v} the easy default on the tighter corners. All four are available.`;
}

/** Route-specific lede for the fare table. */
export const fareLede = (r, from, to) =>
  `One-way bands by vehicle for the ${r.distance} run from ${from} to ${to}, ${r.time} behind the wheel. Fuel, driver, tolls, state taxes and parking are already inside the number.`;

/**
 * Route-specific caption under the fare table. Replaces the fixed
 * 34-word default in FareTable, which was one of the larger blocks
 * still rendering identically across all 34 route pages.
 */
export function fareCaption(r, from, to) {
  const hills = r.terrain !== 'plains';
  const end = r.endPoint ? ` The fare covers the drive as far as ${r.endPoint}.` : '';
  return hills
    ? `Indicative 2026 bands for ${from}–${to}. We confirm one fixed all-in price on enquiry — no per-km meter, and no hill surcharge appearing halfway up.${end} Round trips with an overnight halt are quoted as a package.`
    : `Indicative 2026 bands for the ${from}–${to} run. Plains route, so no hill surcharge applies at all.${end} We confirm one fixed all-in price on enquiry.`;
}

/** Route-specific answer-box closing line. */
export const answerBoxClose = (r, from, to) =>
  r.terrain === 'plains'
    ? `Booked direct with Shiv Ganga Travels — one fixed all-inclusive price for the ${from}–${to} transfer, tolls and driver included.`
    : `Booked direct with a Haridwar operator that runs this road all season — one fixed all-inclusive price to ${r.endPoint || to}, tolls and driver included.`;

/** Route-specific CTA lede. */
export const ctaLede = (r, from, to) =>
  `Send us your date and how many of you there are. You get one fixed all-in fare for the ${from}–${to} run, ${r.time} of driving, usually inside two hours.`;

/** Route-specific lede for the inclusions grid. */
export const inclusionsLede = (r, from, to) =>
  `What the ${from}–${to} fare does and does not cover, both columns, before you book rather than at the end of the trip.`;

/** Route-specific framing for the cancellation summary. */
export const cancellationLede = (r, from, to) =>
  `Plans change, and a ${r.time} mountain drive is the kind of thing weather rearranges. The ${from}–${to} booking runs on the same terms as every other cab we send out.`;

/** Route-specific framing for the operator card. */
export const operatorLede = (r, from, to) =>
  `The ${from} to ${to} run is operated by us directly — our vehicle, our driver, no broker taking a cut in between.`;

// ── Hub pages (/cabs/from/<city>, /cabs/to/<destination>) ─────
//
//  Same problem, smaller family: the 19 hub pages averaged 30%
//  pairwise similarity, peaking at 59.4% (ghaziabad ~ jaipur). An
//  origin hub has no terrain of its own — where you start does not
//  determine the vehicle, where you are going does — so the honest
//  differentiator there is the city and its route list, not a
//  invented recommendation. Destination hubs do carry an altitude,
//  so they get the same clearance logic the route pages use.

/** VEHICLES reordered for a destination hub, by its altitude. */
export function showcaseForDestination(d) {
  const alt = num(d?.altitude);
  const id = alt >= 3000 ? 'suv' : alt > 0 ? 'innova' : 'ertiga';
  const lead = VEHICLES.filter((v) => v.id === id);
  return lead.length ? [...lead, ...VEHICLES.filter((v) => v.id !== id)] : VEHICLES;
}

export function destinationFleetLede(d) {
  const alt = num(d?.altitude);
  if (alt >= 3000)
    return `${d.name} sits at ${d.altitude}, high enough that ground clearance stops being a detail on the final approach. We lead with the Scorpio for runs up here in April and October. All four are available from every origin below.`;
  if (alt > 0)
    return `Every cab to ${d.name} on this page is our own vehicle with our own driver. The Innova Crysta is the usual booking for the hill section — all four are available from any of the origins above.`;
  return `Every cab to ${d.name} is our own vehicle with our own driver, not a marketplace of whoever happens to be nearest.`;
}

export const destinationInclusionsLede = (d) =>
  `What a fare to ${d.name} covers, whichever city you start from — both columns, before you book.`;

export const destinationOperatorLede = (d) =>
  `Every ${d.name} transfer on this page is run by us directly — our vehicle, our driver, no broker in between.`;

export const originFleetLede = (o) =>
  `Every cab leaving ${o.name} is our own vehicle with our own driver. Which one suits you depends on where you are headed — the route pages above each carry the vehicle we would actually send.`;

export const originInclusionsLede = (o) =>
  `What a fare out of ${o.name} covers, on every route below. No airport surcharge, no station surcharge, no "outside city limits" line item.`;

export const originOperatorLede = (o) =>
  `Cabs from ${o.name} are operated by us directly — our vehicle, our driver, no broker taking a cut in between.`;

export const hubCancellationLede = (placeName) =>
  `Plans change, and mountain weather rearranges them more than most. Bookings to and from ${placeName} run on the same terms as every other cab we send out.`;
