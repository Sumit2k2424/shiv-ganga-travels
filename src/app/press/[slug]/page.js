import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE } from '@/data/packages';
import { MEDIA_KIT, getRelease, getReleaseParams, getPublishedReleases } from '@/data/press';
import { h2, p } from '@/lib/prose';

export function generateStaticParams() {
  return getReleaseParams();
}

export function generateMetadata({ params }) {
  const r = getRelease(params.slug);
  if (!r) return {};
  return {
    title: { absolute: `${r.headline} | Press Release` },
    description: r.summary.slice(0, 155),
    alternates: { canonical: `${SITE.baseUrl}/press/${r.slug}` },
    openGraph: {
      title: r.headline,
      description: r.summary,
      url: `${SITE.baseUrl}/press/${r.slug}`,
      type: 'article',
      publishedTime: r.dateISO,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: r.headline }],
    },
    twitter: {
      card: 'summary_large_image',
      title: r.headline,
      description: r.summary,
      images: [{ url: '/opengraph-image', alt: r.headline }],
    },
  };
}

function Schema({ r }) {
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Press Office', item: `${SITE.baseUrl}/press` },
      { '@type': 'ListItem', position: 3, name: r.headline, item: `${SITE.baseUrl}/press/${r.slug}` },
    ],
  };
  // NewsArticle rather than Article: this is dated, datelined, single-event copy
  // intended for republication. Google's news surfaces read the type.
  const article = {
    '@context': 'https://schema.org', '@type': 'NewsArticle',
    headline: r.headline.slice(0, 110),
    alternativeHeadline: r.subhead,
    description: r.summary,
    articleSection: r.category,
    mainEntityOfPage: `${SITE.baseUrl}/press/${r.slug}`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    datePublished: r.dateISO,
    dateModified: r.dateISO,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: MEDIA_KIT.spokesperson.name },
    publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl },
    isAccessibleForFree: true,
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

const CARD = { background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 12, padding: '18px 20px' };
const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 520 };

export default function PressRelease({ params }) {
  const r = getRelease(params.slug);
  if (!r) notFound();

  const others = getPublishedReleases().filter(x => x.slug !== r.slug);
  const waText = encodeURIComponent(`Hello — I am a journalist enquiring about: ${r.headline}`);

  return (
    <>
      <Schema r={r} />

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/press" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Press Office</Link><span>›</span>
          <span>Release</span>
        </div>
      </nav>

      <article style={{ maxWidth: 820, margin: '0 auto', padding: '36px 20px 60px' }}>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14, flexWrap: 'wrap' }}>
          <span style={{ background: 'var(--navy)', color: '#FFD166', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100 }}>
            Press release · {r.category}
          </span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>For immediate release</span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3.6vw,2.2rem)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.28, letterSpacing: '-0.015em', marginBottom: 12 }}>
          {r.headline}
        </h1>
        <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.65, fontWeight: 500, marginBottom: 22 }}>
          {r.subhead}
        </p>

        <div style={{ borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: '12px 0', marginBottom: 26, fontSize: 13, color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{r.dateline}</strong>
          {' · '}{r.dateHuman}
        </div>

        {r.body.map((para, i) => (
          <p key={i} style={{ ...p, ...(i === 0 ? { fontSize: 16, fontWeight: 500, color: '#1e293b' } : null) }}>{para}</p>
        ))}

        {r.quotes.map((q, i) => (
          <blockquote key={i} style={{ margin: '24px 0', padding: '16px 20px', borderLeft: '4px solid var(--teal)', background: 'var(--bg)', borderRadius: '0 10px 10px 0' }}>
            <p style={{ fontSize: 15, color: '#1e293b', lineHeight: 1.75, fontStyle: 'italic', margin: '0 0 10px' }}>&ldquo;{q.text}&rdquo;</p>
            <footer style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--navy)' }}>{q.by}</strong>, {q.role}
            </footer>
          </blockquote>
        ))}

        <h2 style={h2}>Figures in this release</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Figure', 'Value', 'Source'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {r.facts.map((f, i) => (
                <tr key={f.fact} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{f.fact}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{f.value}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{f.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {r.links?.length ? (
          <>
            <h2 style={h2}>Referenced pages</h2>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
              {r.links.map(l => (
                <Link key={l.href} href={l.href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l.label} →</Link>
              ))}
            </div>
          </>
        ) : null}

        <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 15, fontWeight: 700, letterSpacing: '0.3em', margin: '32px 0' }}>ENDS</div>

        {r.notesToEditors?.length ? (
          <div style={{ ...CARD, marginBottom: 24, borderLeft: '4px solid #E8920A' }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 10 }}>Notes to editors</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: '#475569', lineHeight: 1.85 }}>
              {r.notesToEditors.map(n => <li key={n}>{n}</li>)}
            </ul>
          </div>
        ) : null}

        <div style={{ ...CARD, marginBottom: 24, background: 'var(--bg)' }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 10 }}>About {SITE.name}</div>
          <p style={{ fontSize: 13.5, color: '#334155', lineHeight: 1.8, margin: 0 }}>{MEDIA_KIT.boilerplateShort}</p>
        </div>

        <div style={{ ...CARD, marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 10 }}>Media contact</div>
          <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.85, margin: '0 0 10px' }}>
            <strong style={{ color: 'var(--navy)' }}>{MEDIA_KIT.contact.name}</strong>, {MEDIA_KIT.contact.role}<br />
            {SITE.name}, {SITE.address}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href={`tel:${SITE.phone}`} style={{ background: 'var(--navy)', color: '#fff', padding: '9px 18px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>📞 {SITE.phone}</a>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '9px 18px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>💬 WhatsApp</a>
            <a href={`mailto:${SITE.email}?subject=Press%20enquiry`} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '9px 18px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>✉️ {SITE.email}</a>
          </div>
          <p style={{ fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.7, margin: '12px 0 0' }}>{MEDIA_KIT.contact.note}</p>
        </div>

        {others.length ? (
          <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 8 }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Other releases</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {others.map(o => (
                <Link key={o.slug} href={`/press/${o.slug}`} style={{ ...CARD, display: 'block', textDecoration: 'none' }}>
                  <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginBottom: 4 }}>{o.dateHuman} · {o.category}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', lineHeight: 1.45 }}>{o.headline}</div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <Link href="/press" style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--teal)', textDecoration: 'none' }}>← All press releases and media resources</Link>
            </div>
          </div>
        ) : null}

      </article>
    </>
  );
}
