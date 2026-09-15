import DATES from '@/data/pageDates.json';

/* Real per-page dates, read from src/data/pageDates.json, which
   `npm run dates` derives from git history (see scripts/page-dates.mjs).

   Every page that prints a "Last updated" stamp or emits dateModified /
   datePublished goes through here with its own route, so two pages edited on
   different days show different dates. The four live-season pages
   (road status, statistics, monsoon safety, helicopter) keep their own
   hand-set bulletin dates on top of this; nothing else may hard-code a date.

   `route` is the App Router path exactly as the directory spells it:
   '/', '/devprayag', '/blog/char-dham-guide', '/packages/[slug]'. Dynamic
   routes resolve to the pattern, whose date is the newer of the page file
   and the data module that feeds it. */

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

/** '2026-09-13' → 'September 13, 2026' — the format the site's copy already uses. */
export function humanDate(iso) {
  const [y, m, d] = String(iso).split('-').map(Number);
  if (!y || !m || !d) return String(iso);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export function pageDates(route) {
  const r = DATES.routes[route];
  // A route the generator has not seen (new page, JSON not regenerated yet)
  // falls back to the newest change in the file rather than to "today":
  // claiming the build date would be the exact false-freshness signal this
  // module exists to remove.
  const modifiedISO = r?.modified || DATES.latest;
  const createdISO  = r?.created  || modifiedISO;
  return {
    createdISO,
    modifiedISO,
    createdHuman : humanDate(createdISO),
    modifiedHuman: humanDate(modifiedISO),
    known: !!r,
  };
}

/** The newest content change anywhere on the site — for llms.txt and the like. */
export const SITE_CONTENT_UPDATED_ISO = DATES.latest;
export const SITE_CONTENT_UPDATED = humanDate(DATES.latest);

/** Dates for the cab pages, which share the cab data layer with the /cabs hub. */
export const CAB_DATES = pageDates('/cabs');
