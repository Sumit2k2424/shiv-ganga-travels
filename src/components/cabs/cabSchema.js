/* ══════════════════════════════════════════════════════════════
   JSON-LD builders for the three cab page tiers.

   House rule, inherited from the rest of the site: the rated
   TravelAgency organization node is emitted exactly ONCE, in
   layout.js. Everything here references it by @id and carries no
   aggregateRating of its own — a second rated org node is what
   produced Google's "multiple aggregate ratings" error before.
   Reviews still appear as visible page content, which is what
   both readers and LLMs actually consume.
   ══════════════════════════════════════════════════════════════ */

import { SITE } from '@/data/packages';

const ORG_ID = `${SITE.baseUrl}/#organization`;
const abs = (path) => `${SITE.baseUrl}${path}`;

const provider = {
  '@type': 'TravelAgency',
  '@id': ORG_ID,
  name: SITE.name,
  url: SITE.baseUrl,
  telephone: SITE.phone,
};

/** Strip a fare band like "₹4,500–₹5,500" down to 4500. */
function priceFrom(band) {
  if (!band) return undefined;
  const digits = String(band).split('–')[0].replace(/[^0-9]/g, '');
  return digits || undefined;
}

export function breadcrumb(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: abs(path),
    })),
  };
}

export function faqPage(faqs) {
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/**
 * Author reference for a cab page. Points at the sitewide Person node
 * already emitted in layout.js when the expert has one, so the entity
 * resolves rather than being re-declared; falls back to the org.
 */
export function authorRef(expert) {
  return expert?.schemaId
    ? { '@id': `${SITE.baseUrl}/${expert.schemaId}` }
    : { '@type': 'Organization', '@id': ORG_ID, name: SITE.name };
}

/** Route page — a specific journey we sell. */
export function routeService({ route, from, to, fares, url, expert }) {
  const low = priceFrom(fares?.[0]?.[2]);
  const high = priceFrom(fares?.[fares.length - 1]?.[2]?.split('–')[1]);
  return {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: `${from} to ${to} Taxi Service`,
    description: `${from} to ${to} cab — ${route.distance}, ${route.time}. Fixed all-inclusive fares, hill-experienced drivers, pickup anywhere in ${from}.`,
    url: abs(url),
    provider,
    ...(expert && { author: authorRef(expert), dateModified: SITE.lastUpdatedISO }),
    areaServed: [from, to, 'Uttarakhand'].filter(Boolean).map((n) => ({ '@type': 'Place', name: n })),
    ...(low && {
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: low,
        ...(high && { highPrice: high }),
        offerCount: String(fares.length),
        url: abs(url),
      },
    }),
  };
}

/** Destination page — the place, plus the service of getting there. */
export function destinationSchema({ destination, routes, url }) {
  const place = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: destination.name,
    description: destination.intro,
    address: { '@type': 'PostalAddress', addressRegion: destination.state, addressCountry: 'IN' },
    url: abs(url),
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: `${destination.name} Taxi Service`,
    description: `Cab and taxi service to ${destination.name} from ${routes.length} pickup cities. Fixed fares, experienced hill drivers.`,
    url: abs(url),
    provider,
    areaServed: { '@type': 'Place', name: destination.name },
  };

  return [place, service];
}

/** Origin page — the city we pick up in. */
export function originService({ origin, routes, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: `Cab Service in ${origin.name}`,
    description: `Outstation cab and taxi hire from ${origin.name} — ${routes.length} routes across Uttarakhand with fixed all-inclusive fares.`,
    url: abs(url),
    provider,
    areaServed: { '@type': 'Place', name: origin.name, address: { '@type': 'PostalAddress', addressRegion: origin.state, addressCountry: 'IN' } },
  };
}

/** A linked list of routes — used on both hub-style tiers. */
export function routeItemList({ name, routes, label }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: routes.length,
    itemListElement: routes.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: label(r),
      url: abs(`/cabs/${r.slug}`),
    })),
  };
}

/** Renders any number of schema objects, skipping nulls. */
export function JsonLd({ items = [] }) {
  return (
    <>
      {items.filter(Boolean).flat().map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  );
}
