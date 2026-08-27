// ═══════════════════════════════════════════════════════════════════════════
//  TOPIC CLUSTERS — informational spokes and the commercial hub they feed
//
//  Built from the Semrush organic export of 27 Aug 2026 (441 keywords, IN db).
//  The number that drove this file:
//
//    Informational   81.3%  (377 kw)  →  928 sessions
//    Transactional    7.5%  ( 35 kw)  →  435 sessions
//    Commercial       8.2%  ( 38 kw)  →   83 sessions
//    Branded traffic  0
//
//  Four in five ranking keywords are informational, and they are what brings
//  people in. But 35 transactional keywords carry nearly a third of the traffic
//  between them — each is worth roughly ten informational keywords. The site has
//  plenty of spokes and very little path from a spoke up to a page that takes a
//  booking.
//
//  So a cluster here is not "pages about the same topic". It is: one MONEY page,
//  one HUB that owns the topic, and the informational SPOKES that should link up
//  into both. `npm run clusters` reports which of those links are missing.
//
//  `vol` and `pos` are the Semrush figures for that spoke's own head term on the
//  export date — evidence for prioritising, not live data. Re-export before
//  trusting them. A spoke with no `vol` simply has not been measured yet; it is
//  still part of the cluster.
//
//  Keep slugs in sync with src/app/. The audit resolves every slug to a real
//  page file and reports the ones that do not exist rather than skipping them,
//  because a cluster pointing at a 404 is worse than no cluster.
// ═══════════════════════════════════════════════════════════════════════════

export const CLUSTERS = [
  {
    id: 'kumaon',
    name: 'Kainchi Dham & Kumaon',
    // The largest organic entry point on the domain and the weakest funnel:
    // a 165K/mo head term at position 17 delivering 21.8% of all sessions,
    // sitting in a cluster whose money page almost nothing links to.
    hub: '/kainchi-dham',
    money: '/packages/kainchi-dham-nainital-mukteshwar-3n-4d',
    spokes: [
      { slug: '/kainchi-dham', head: 'kainchi dham', vol: 165000, pos: 17 },
      { slug: '/chitai-golu-devta-temple', head: 'chitai golu devta temple', vol: 33100, pos: 15 },
      { slug: '/cabs/haridwar-to-nainital-cab', head: 'haridwar to neem karoli baba distance', vol: 1900, pos: 29 },
    ],
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath',
    hub: '/kedarnath-yatra',
    money: '/kedarnath-tour-package',
    spokes: [
      { slug: '/gaurikund', head: 'gaurikund', vol: 74000, pos: 31 },
      { slug: '/blog/kedarnath-helicopter-booking', head: 'kedarnath helicopter booking', vol: 27100, pos: 27 },
      { slug: '/blog/haridwar-to-kedarnath', head: 'haridwar to kedarnath distance', vol: 22200, pos: 15 },
      { slug: '/blog/kedarnath-trek-guide', head: 'kedarnath trek distance', vol: 12100, pos: 45 },
      { slug: '/blog/how-to-reach-kedarnath', head: 'kedarnath nearest railway station', vol: 6600, pos: 12 },
      { slug: '/blog/kedarnath-darshan-timing', head: 'kedarnath timings', vol: 1000, pos: 24 },
      { slug: '/kedarnath-vip-darshan', head: 'vip darshan kedarnath', vol: 720, pos: 5 },
      { slug: '/kedarnath-pony-palki-kandi-rates', head: 'kedarnath horse charges', vol: 170, pos: 3 },
      { slug: '/kedarnath-weather' },
      { slug: '/kedarnath-height' },
      { slug: '/kedarnath-temple' },
      { slug: '/kedarnath-hotels' },
      { slug: '/guptkashi-guide' },
      { slug: '/phata' },
    ],
  },
  {
    id: 'badrinath',
    name: 'Badrinath',
    hub: '/badrinath-yatra',
    money: '/badrinath-tour-package',
    spokes: [
      { slug: '/char-dham-road-status', head: 'badrinath road', vol: 1300, pos: 7 },
      { slug: '/badrinath-vip-darshan', head: 'badrinath vip darshan', vol: 590, pos: 7 },
      { slug: '/badrinath-temple', head: 'badrinath jyotirlinga', vol: 590, pos: 29 },
      { slug: '/how-to-reach-badrinath', head: 'how to reach badrinath temple', vol: 210, pos: 41 },
      { slug: '/badrinath-weather', head: 'badrinath temperature in june', vol: 210, pos: 14 },
      { slug: '/kedarnath-to-badrinath-distance' },
      { slug: '/badrinath-hotels' },
      { slug: '/tapt-kund' },
      { slug: '/govindghat' },
    ],
  },
  {
    id: 'gangotri',
    name: 'Gangotri',
    hub: '/gangotri-yatra',
    money: '/cabs/haridwar-to-gangotri-cab',
    spokes: [
      { slug: '/gangotri-weather', head: 'gangotri temperature', vol: 18100, pos: 21 },
      { slug: '/haridwar-to-gangotri-distance', head: 'haridwar to gangotri distance', vol: 3600, pos: 9 },
      { slug: '/gangotri-temple' },
      { slug: '/how-to-reach-gangotri' },
      { slug: '/harsil-valley' },
      { slug: '/gaumukh' },
      { slug: '/mukhba-gangotri-winter-seat' },
    ],
  },
  {
    id: 'yamunotri',
    name: 'Yamunotri',
    hub: '/yamunotri-yatra',
    money: '/cabs/haridwar-to-yamunotri-cab',
    spokes: [
      { slug: '/yamunotri-weather', head: 'yamunotri temperature', vol: 9900, pos: 22 },
      { slug: '/how-to-reach-yamunotri', head: 'janki chatti to yamunotri', vol: 170, pos: 23 },
      { slug: '/yamunotri-temple' },
      { slug: '/janki-chatti' },
      { slug: '/barkot' },
      { slug: '/yamunotri-pony-palki-rates' },
      { slug: '/kharsali-yamunotri-winter-seat' },
    ],
  },
  {
    id: 'haridwar-local',
    name: 'Haridwar local sightseeing',
    hub: '/haridwar-sightseeing-places',
    money: '/taxi-service-in-haridwar',
    spokes: [
      { slug: '/har-ki-pauri-guide', head: 'har ki pauri aarti time', vol: 2400, pos: 12 },
      { slug: '/mansa-devi-temple', head: 'har ki pauri to mansa devi temple distance', vol: 590, pos: 11 },
      { slug: '/chandi-devi-temple', head: 'chandi devi ropeway ticket price', vol: 480, pos: 7 },
      { slug: '/kumbh-mela-haridwar', head: 'ardh kumbh in haridwar', vol: 260, pos: 16 },
      { slug: '/daksh-mahadev-temple' },
      { slug: '/maya-devi-temple' },
      { slug: '/rajaji-national-park' },
      { slug: '/shantikunj-haridwar-guide' },
    ],
  },
  {
    id: 'char-dham-core',
    name: 'Char Dham circuit',
    hub: '/char-dham-yatra',
    money: '/uttarakhand-tour-packages',
    spokes: [
      { slug: '/char-dham-yatra-route-map', head: 'char dham yatra map with distance', vol: 110, pos: 47 },
      { slug: '/char-dham-road-status' },
      { slug: '/blog/char-dham-yatra-packing-list' },
      { slug: '/char-dham-yatra-scams' },
      { slug: '/altitude-sickness-char-dham' },
      { slug: '/char-dham-helicopter' },
      { slug: '/char-dham-yatra-emergency-contacts' },
      { slug: '/char-dham-yatra-cost-calculator' },
    ],
  },
];

// Every spoke carrying a measured head term, biggest first. The audit uses this
// to rank what a missing link actually costs.
export function spokesByVolume() {
  return CLUSTERS
    .flatMap((c) => c.spokes.map((s) => ({ ...s, cluster: c.id, hub: c.hub, money: c.money })))
    .filter((s) => typeof s.vol === 'number')
    .sort((a, b) => b.vol - a.vol);
}
