import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found — Shiv Ganga Travels',
  description: 'This page has moved or no longer exists. Find Char Dham Yatra packages, guides and cab routes from Shiv Ganga Travels, Haridwar.',
  robots: { index: false, follow: true },
};

const POPULAR = [
  { label: 'Char Dham Yatra 2026', href: '/char-dham-yatra' },
  { label: 'All Yatra Packages', href: '/packages' },
  { label: 'Char Dham by Helicopter', href: '/char-dham-helicopter' },
  { label: 'Kedarnath Yatra', href: '/kedarnath-yatra' },
  { label: 'Badrinath Yatra', href: '/badrinath-yatra' },
  { label: 'Do Dham Yatra', href: '/do-dham-yatra' },
  { label: 'Cost Calculator', href: '/char-dham-yatra-cost-calculator' },
  { label: 'Cab & Taxi Routes', href: '/cabs' },
  { label: 'Travel Guides & Blog', href: '/blog' },
  { label: 'Full Sitemap', href: '/sitemap-page' },
];

export default function NotFound() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 20px 80px', textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 56, color: 'var(--gold)', margin: 0, lineHeight: 1 }}>404</p>

      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,4vw,2rem)', color: 'var(--navy)', margin: '14px 0 10px' }}>
        This page has moved on
      </h1>

      <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 28px' }}>
        The link you followed is either old or mistyped. Nothing is lost — the pages below cover
        almost everything pilgrims ask us before booking. Or call us on{' '}
        <a href="tel:+917817996730" style={{ color: 'var(--teal)', fontWeight: 600, textDecoration: 'none' }}>+91 78179 96730</a>{' '}
        and we will point you to the right one.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 8, textAlign: 'left', marginBottom: 32 }}>
        {POPULAR.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 10,
              padding: '11px 14px', fontSize: 13.5, fontWeight: 600,
              color: 'var(--navy)', textDecoration: 'none',
            }}
          >
            <span style={{ color: 'var(--gold)', fontSize: 10 }}>▸</span>
            {l.label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        style={{
          display: 'inline-block', background: 'var(--navy)', color: '#fff',
          padding: '13px 30px', borderRadius: 10, fontWeight: 700,
          fontSize: 14.5, textDecoration: 'none',
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
