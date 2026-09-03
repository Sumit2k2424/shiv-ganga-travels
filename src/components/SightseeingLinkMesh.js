import Link from 'next/link';

// Cross-link mesh for the "places to visit in <place>" cluster.
//
// Why this exists: the same reason as TempleLinkMesh. Six sightseeing hubs
// built in one go, each linked only from its own parent page, is an island —
// Google finds them in sitemap.xml, sees one vouching link each, and parks
// them under "Discovered — currently not indexed". Rendering this on every
// page of the set gives each one five sibling inbound links from pages that
// are topically about the same thing.
//
// Keep PLACES in sync with the pages that render it. A slug listed here but
// not built is a 404 on six pages at once; a page that stops rendering this
// drops its five siblings back towards the island.

const PLACES = [
  ['haridwar',  'Haridwar',  '/haridwar-sightseeing-places'],
  ['rishikesh', 'Rishikesh', '/rishikesh-sightseeing-places'],
  ['badrinath', 'Badrinath', '/badrinath-sightseeing-places'],
  ['gangotri',  'Gangotri',  '/gangotri-sightseeing-places'],
  ['yamunotri', 'Yamunotri', '/yamunotri-sightseeing-places'],
  ['joshimath', 'Joshimath', '/joshimath-sightseeing-places'],
  ['chopta',    'Chopta',    '/chopta-sightseeing-places'],
  ['kedarnath', 'Kedarnath', '/blog/kedarnath-places-to-see'],
];

const chip = {
  background: '#fff', border: '1px solid hsl(var(--border))', color: 'var(--navy)',
  padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none',
};

export default function SightseeingLinkMesh({ current = '' }) {
  const others = PLACES.filter(([key]) => key !== current);
  return (
    <nav aria-label="Sightseeing guides" style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 28 }}>
      <p style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', margin: '0 0 10px' }}>
        Places to visit — the rest of the circuit
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {others.map(([key, label, href]) => (
          <Link prefetch={false} key={key} href={href} style={chip}>Places to Visit in {label} →</Link>
        ))}
      </div>
    </nav>
  );
}
