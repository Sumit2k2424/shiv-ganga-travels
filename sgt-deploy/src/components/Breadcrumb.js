import Link from 'next/link';
import { SITE } from '@/data/packages';

/**
 * Breadcrumb — SEO schema included.
 * Usage: <Breadcrumb items={[{label:'Packages', href:'/packages'}, {label:'Char Dham'}]} />
 */
export default function Breadcrumb({ items = [] }) {
  const all = [{ label: 'Home', href: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE.baseUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          padding: '9px 20px',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container)',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            flexWrap: 'wrap',
            fontSize: 12.5,
            color: 'var(--text-muted)',
          }}
        >
          {all.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {i > 0 && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M3.5 2L6.5 5L3.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              )}
              {item.href && i < all.length - 1 ? (
                <Link
                  href={item.href}
                  style={{ color: 'var(--navy)', textDecoration: 'none', fontWeight: 500 }}
                >
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: 'var(--text-mid)', fontWeight: i === all.length - 1 ? 600 : 400 }}>
                  {item.label}
                </span>
              )}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}
