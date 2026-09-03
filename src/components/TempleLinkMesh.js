import Link from 'next/link';

// Contextual internal-link mesh for the temple, shrine and waypoint guides.
//
// Why this exists: a crawl of the live site found 27 pages that were in
// sitemap.xml but unreachable from the homepage by any <a href>. They were not
// zero-inbound-link pages — they formed a closed island that only linked to
// itself (the four Panch Badri shrines linked each other and nothing else;
// /kedarnath-dharamshala was linked only by /kedarnath-festivals and
// /kedarnath-history-legends). Google discovered them via XML, found nothing on
// the site vouching for them, and parked them under "Discovered — currently not
// indexed".
//
// The island existed because the natural parent pages never linked down into it:
// /panch-badri-yatra linked none of the four secondary Badri shrines it is about,
// and /panch-kedar-yatra was missing Rudranath and Kalpeshwar. This mesh closes
// that gap from the parent side. Anchor text is taken from each target's own H1
// so the link says what the page actually is.
//
// Keep MESH keys in sync with the pages that render them — a group whose parent
// page stops rendering it puts those targets straight back on the island.

const chip = {
  background: '#fff', border: '1px solid hsl(var(--border))', color: 'var(--navy)',
  padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none',
};
const heading = { fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', margin: '0 0 10px' };
const row = { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 };

// Per-dham deep-dive pages. Each dham's yatra page renders its own group.
// `sightseeing` is passed per dham rather than derived from the slug because
// Kedarnath's equivalent page predates the cluster and lives under /blog.
const dham = (name, slug, sightseeing) => [
  {
    title: `${name} in depth`,
    links: [
      ...(sightseeing ? [[`Places to Visit in ${name}`, sightseeing]] : []),
      [`${name} History & Legends`, `/${slug}-history-legends`],
      [`${name} Festivals & Rituals`, `/${slug}-festivals`],
      [`${name} Dharamshalas & Budget Stays`, `/${slug}-dharamshala`],
    ],
  },
];

export const MESH = {
  kedarnath: dham('Kedarnath', 'kedarnath', '/blog/kedarnath-places-to-see'),
  gangotri: dham('Gangotri', 'gangotri', '/gangotri-sightseeing-places'),
  yamunotri: dham('Yamunotri', 'yamunotri', '/yamunotri-sightseeing-places'),

  // Badrinath additionally owns Tapt Kund, the hot spring at the temple steps.
  badrinath: [
    ...dham('Badrinath', 'badrinath', '/badrinath-sightseeing-places'),
    {
      title: 'At the temple',
      links: [['Tapt Kund — the spring that never runs cold', '/tapt-kund']],
    },
  ],

  // The four secondary Badris. /badrinath-temple is the fifth and is already
  // linked from this page, so it is not repeated here.
  panchBadri: [
    {
      title: 'The five Badri shrines',
      links: [
        ['Adi Badri — oldest of the Badris', '/adi-badri-temple'],
        ['Yogdhyan Badri — where Badrinath winters', '/yogdhyan-badri-temple'],
        ['Vridh Badri — Vishnu’s first darshan to Narada', '/vridh-badri-temple'],
        ['Bhavishya Badri — the future Badrinath', '/bhavishya-badri-temple'],
        ['Tapt Kund', '/tapt-kund'],
      ],
    },
  ],

  // Tungnath, Madhyamaheshwar and Kedarnath are already linked from this page.
  panchKedar: [
    {
      title: 'The remaining Panch Kedar shrines',
      links: [
        ['Rudranath — Shiva’s face, the toughest Panch Kedar', '/rudranath-temple'],
        ['Kalpeshwar — Shiva’s hair, open all year', '/kalpeshwar-temple'],
        ['Gopeshwar — the last town before Rudranath', '/gopeshwar'],
      ],
    },
  ],

  // Road-trip waypoints along the Char Dham circuit, in the order a yatri meets
  // them driving up from Haridwar.
  waypoints: [
    {
      title: 'Towns & halts along the route',
      links: [
        ['Srinagar Garhwal', '/srinagar-garhwal'],
        ['Augustmuni', '/augustmuni'],
        ['Chamoli Town', '/chamoli-town'],
        ['Pipalkoti', '/pipalkoti'],
        ['Gopeshwar', '/gopeshwar'],
        ['New Tehri', '/tehri-town'],
      ],
    },
  ],

  temples: [
    {
      title: 'Temple round-ups',
      links: [
        ['Every major Shiva temple in Uttarakhand', '/uttarakhand-shiva-temples'],
        ['Every major Devi temple in Uttarakhand', '/uttarakhand-devi-temples'],
      ],
    },
  ],
};

export default function TempleLinkMesh({ groups, label = 'Related guides' }) {
  if (!groups?.length) return null;
  return (
    <nav aria-label={label} style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 36 }}>
      {groups.map(g => (
        <div key={g.title}>
          <p style={heading}>{g.title}</p>
          <div style={row}>
            {g.links.map(([l, h]) => (
              <Link prefetch={false} key={h} href={h} style={chip}>{l} →</Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
