// ══════════════════════════════════════════════════════════════
//  CABS — selectors
// ══════════════════════════════════════════════════════════════
//  The only module pages should import from. Everything below is
//  pure and synchronous, so it runs fine inside generateStaticParams
//  and generateMetadata.
//
//  The publishability gates are the important part. A route, origin
//  or destination that has not been written properly yet is invisible
//  to generateStaticParams and to the sitemap — it does not 404, it
//  simply does not exist. That is what lets the route list grow
//  without the thin-page problem that dogs the big aggregators.

import { ROUTES, ROUTES_BY_SLUG } from './routes';
import { ORIGINS, ORIGINS_BY_SLUG, REGIONS } from './origins';
import { DESTINATIONS, DESTINATIONS_BY_SLUG } from './destinations';
import { computeFares, lowestFare, FLEET, FLEET_BY_ID } from './fleet';
import { getExpert, yearsOnRoad, DEFAULT_EXPERT } from './experts';
import * as POLICY from './policy';

export { ROUTES, ORIGINS, DESTINATIONS, REGIONS, FLEET, FLEET_BY_ID, POLICY };
export { getExpert, yearsOnRoad, computeFares, lowestFare };

// ── Lookups ───────────────────────────────────────────────────

export const getRoute = (slug) => ROUTES_BY_SLUG[slug] || null;
export const getOrigin = (slug) => ORIGINS_BY_SLUG[slug] || null;
export const getDestination = (slug) => DESTINATIONS_BY_SLUG[slug] || null;

/** Display names, resolved through the origin/destination tables. */
export const routeFrom = (r) => getOrigin(r.origin)?.name || r.origin;
export const routeTo = (r) => getDestination(r.destination)?.name || r.destination;
export const routeLabel = (r) => `${routeFrom(r)} to ${routeTo(r)}`;
export const routePath = (r) => `/cabs/${r.slug}`;
export const originPath = (o) => `/cabs/from/${o.slug || o}`;
export const destinationPath = (d) => `/cabs/to/${d.slug || d}`;

/** Hand-priced override if present, otherwise derived from the rate card. */
export function routeFares(r) {
  if (r.fares?.length) return r.fares;
  const km = parseInt(String(r.distance).replace(/[^0-9]/g, ''), 10);
  return computeFares(km, r.terrain || 'hills');
}

export const routeLowestFare = (r) => lowestFare(routeFares(r));

/** The expert credited on a route — falls back to the house team. */
export const routeExpert = (r) => getExpert(r.verifiedBy || DEFAULT_EXPERT);

// ── Publishability gates ──────────────────────────────────────

/**
 * A route is publishable only once it has been written properly.
 * Anything short of this is excluded from both generateStaticParams
 * and the sitemap, so incomplete entries can never reach the index.
 */
export function isPublishable(r) {
  return Boolean(
    r &&
    r.slug &&
    getOrigin(r.origin) &&
    getDestination(r.destination) &&
    r.distance &&
    r.time &&
    r.via &&
    r.intro?.length > 120 &&
    r.stops?.length >= 2 &&
    r.faqs?.length >= 2
  );
}

export const getPublishedRoutes = () => ROUTES.filter(isPublishable);

/** Routes out of a city, and routes into a place — both published-only. */
export const getRoutesFromOrigin = (slug) =>
  getPublishedRoutes().filter((r) => r.origin === slug);

export const getRoutesToDestination = (slug) =>
  getPublishedRoutes().filter((r) => r.destination === slug);

/**
 * An origin page needs its own copy AND somewhere to send people.
 * A city page listing zero routes is exactly the thin page we are
 * trying not to build.
 */
export function isOriginPublishable(o) {
  return Boolean(
    o &&
    o.intro?.length > 120 &&
    o.pickupPoints?.length >= 2 &&
    o.faqs?.length >= 1 &&
    getRoutesFromOrigin(o.slug).length >= 1
  );
}

export function isDestinationPublishable(d) {
  return Boolean(
    d &&
    d.intro?.length > 120 &&
    d.faqs?.length >= 2 &&
    getRoutesToDestination(d.slug).length >= 1
  );
}

export const getPublishedOrigins = () => ORIGINS.filter(isOriginPublishable);
export const getPublishedDestinations = () => DESTINATIONS.filter(isDestinationPublishable);

/**
 * A deterministic slice of the review wall for one cab page.
 *
 * Every cab page was rendering the same six testimonials — roughly 300 word-for-word
 * identical words, the single largest block of duplication in the section, on 30
 * pages that Google had discovered and declined to crawl. Showing a rotating three
 * keeps the social proof and the aggregate rating while making the block differ from
 * page to page. Keyed off the slug so a given URL always renders the same three
 * (stable across builds — important, since a set that shuffled every deploy would
 * look like churn to a crawler).
 */
export function reviewsForSlug(reviews, slug, n = 3) {
  const items = reviews?.items || [];
  if (items.length <= n) return reviews;
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const start = h % items.length;
  return { ...reviews, items: Array.from({ length: n }, (_, i) => items[(start + i) % items.length]) };
}

// ── Static params helpers ─────────────────────────────────────

export const getRouteParams = () => getPublishedRoutes().map((r) => ({ route: r.slug }));
export const getOriginParams = () => getPublishedOrigins().map((o) => ({ city: o.slug }));
export const getDestinationParams = () => getPublishedDestinations().map((d) => ({ destination: d.slug }));

// ── Grouping for hub and link-mesh rendering ──────────────────

/** Published origins bucketed by region, in REGIONS order. Empty regions dropped. */
export function getOriginsByRegion() {
  const published = getPublishedOrigins();
  return REGIONS
    .map((region) => ({ ...region, origins: published.filter((o) => o.region === region.id) }))
    .filter((g) => g.origins.length > 0);
}

/** Published destinations bucketed by kind — dham, hill, city. */
export function getDestinationsByKind() {
  const published = getPublishedDestinations();
  const kinds = [
    { id: 'dham', label: 'The four dhams' },
    { id: 'hill', label: 'Hill stations' },
    { id: 'city', label: 'Gateway cities' },
  ];
  return kinds
    .map((k) => ({ ...k, destinations: published.filter((d) => d.kind === k.id) }))
    .filter((g) => g.destinations.length > 0);
}

/**
 * Flattened view for the booking wizard, which reasons in city NAMES
 * rather than slugs and wants fares already resolved. Kept here so the
 * wizard never has to know about the origin/destination tables.
 */
export function getBookableRoutes() {
  return getPublishedRoutes().map((r) => ({
    slug: r.slug,
    base: routeFrom(r),
    from: routeFrom(r),
    to: routeTo(r),
    distance: r.distance,
    time: r.time,
    fares: routeFares(r),
  }));
}

export const getBookableBases = () => getPublishedOrigins().map((o) => o.name);

export const getBookableRoutesByBase = (name) =>
  getBookableRoutes().filter((r) => r.base === name);

/**
 * Sibling links for a route page: other ways to reach the same
 * destination, and other places from the same origin.
 */
export function getRouteSiblings(r, limit = 4) {
  return {
    sameDestination: getRoutesToDestination(r.destination).filter((x) => x.slug !== r.slug).slice(0, limit),
    sameOrigin: getRoutesFromOrigin(r.origin).filter((x) => x.slug !== r.slug).slice(0, limit),
  };
}
