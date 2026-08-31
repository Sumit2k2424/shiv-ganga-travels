import { SITE } from '@/data/packages';

/**
 * CITABLE REFERENCE PAGES — schema.org Dataset + an explicit CC BY 4.0 grant.
 *
 * WHY THIS EXISTS
 * An answer engine will happily read any page. What decides whether it *quotes*
 * you, with a link, is whether the page looks like a citable source: structured
 * data that says "this is a dataset", a named creator, a modification date, and
 * a licence that grants reuse. /char-dham-yatra-statistics has carried that
 * treatment since Aug 2026 and it is the single most-quoted page on the site;
 * this helper makes the same treatment one import rather than 40 lines of
 * hand-copied JSON-LD per page.
 *
 * WHAT MAY CARRY IT — and what may not
 * CC BY is a licence grant, so it may only be applied to data that is actually
 * ours to license: our own recorded observations (route timings, temperature
 * bands our drivers log, distances we drive weekly).
 *
 * It must NOT be applied to:
 *   · official rate cards set by the district administration (pony, palki,
 *     kandi, helicopter) — those are the state's figures, not ours
 *   · government advisories such as road status or registration rules
 *   · third-party statistics we merely quote
 * Publishing someone else's figures under our licence would be a false claim,
 * and on a page whose whole purpose is to be trusted that is the one mistake
 * worth avoiding. Those pages still get Dataset schema elsewhere if useful —
 * just never the licence line.
 */

const CC_BY = 'https://creativecommons.org/licenses/by/4.0/';

/**
 * Build a Dataset node for a page whose facts we recorded ourselves.
 *
 * @param {object}   o
 * @param {string}   o.name         Dataset title, e.g. "Haridwar to Badrinath road distance"
 * @param {string}   o.description  One sentence on what is measured.
 * @param {string}   o.path         Site-root-relative path, e.g. "/haridwar-to-badrinath-distance"
 * @param {string}   o.modified     ISO date the figures were last verified.
 * @param {string[]} [o.measured]   Variables measured, e.g. ["Road distance","Driving time"]
 * @param {object}   [o.place]      { name, lat, lon } for spatialCoverage.
 * @param {string}   [o.temporal]   ISO interval, e.g. "2026-04-19/2026-11-13"
 */
export function citableDataset({ name, description, path, modified, measured = [], place, temporal }) {
  const node = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name,
    description,
    url: `${SITE.baseUrl}${path}`,
    license: CC_BY,
    isAccessibleForFree: true,
    dateModified: modified,
    creator: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      '@id': `${SITE.baseUrl}/#organization`,
    },
  };
  if (measured.length) node.variableMeasured = measured;
  if (temporal) node.temporalCoverage = temporal;
  if (place) {
    node.spatialCoverage = {
      '@type': 'Place',
      name: place.name,
      ...(place.lat != null && place.lon != null
        ? { geo: { '@type': 'GeoCoordinates', latitude: place.lat, longitude: place.lon } }
        : {}),
    };
  }
  return node;
}

/** The licence URL, for the visible attribution line. */
export const CC_BY_URL = CC_BY;
