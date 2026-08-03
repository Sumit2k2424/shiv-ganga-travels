// ══════════════════════════════════════════════════════════════
//  EXPERTS — the people behind the routes
// ══════════════════════════════════════════════════════════════
//  Powers the "road-checked by" strip and the schema.org `author` /
//  `reviewedBy` fields. This is the single biggest gap in every
//  competing cab page we looked at: aggregators publish route pages
//  with no human attached to them at all.
//
//  ⚠️  ONLY PUT REAL PEOPLE IN HERE.
//  A fabricated byline is worse than no byline — it is the exact
//  thing Google's reviewer guidelines are written to catch, and one
//  customer asking for "Ramesh" at the counter turns it into a
//  credibility problem. Until a named driver is confirmed, routes
//  fall back to HOUSE below, which is true as written.
//
//  To add a real person:
//    1. add an entry here with their actual years on the road
//    2. set `verifiedBy: '<id>'` on the routes they actually drive
//    3. set `lastDrivenOn` on those routes to a date they were there

export const EXPERTS = {
  // The founder, already published as the sitewide Person node in
  // layout.js (@id .../#founder) — so this is a real, verifiable name
  // and the schema author reference resolves to an entity Google has
  // already seen elsewhere on the site.
  founder: {
    id: 'founder',
    schemaId: '#founder',
    name: 'Dhanesh Chandra Mishra',
    role: 'Founder & Managing Director, Shiv Ganga Travels',
    since: 2010,
    bio: 'A retired Indian Army officer who founded Shiv Ganga Travels in Haridwar in 2010 and pioneered the zero-commission model for Char Dham operators here.',
    url: '/about',
  },

  // Company-level attribution — truthful with no individual named.
  // Use it for pages where no one person is the right author.
  house: {
    id: 'house',
    name: 'The Shiv Ganga Travels road team',
    role: 'Our own drivers, based in Haridwar',
    since: 2010,
    bio: 'Every route on this site is one we run ourselves, in our own vehicles. Road notes come from the drivers who were last on it, not from a map.',
    url: '/about',
  },

  // ── Add real drivers below in this shape ──
  // Only once the person is confirmed, and only with their real years.
  //
  // ramesh: {
  //   id: 'ramesh',
  //   name: 'Ramesh Negi',
  //   role: 'Senior driver — Kedarnath & Badrinath valleys',
  //   since: 2012,
  //   bio: 'Named by passengers in our Google reviews more than anyone else on the team.',
  //   url: '/about',
  // },
};

export const DEFAULT_EXPERT = 'founder';

export function getExpert(id) {
  return EXPERTS[id] || EXPERTS[DEFAULT_EXPERT];
}

/** "17 years on these roads" — computed so it never goes stale. */
export function yearsOnRoad(expert, now = new Date()) {
  if (!expert?.since) return null;
  return Math.max(1, now.getFullYear() - expert.since);
}
