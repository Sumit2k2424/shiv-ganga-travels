import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import LanguageLinkMesh from '@/components/LanguageLinkMesh';

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 36, letterSpacing: '-0.02em' };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.95, marginBottom: 16 };

function Schema({ c, slug }) {
  const url = `${SITE.baseUrl}/${slug}`;
  const org = {
    '@context': 'https://schema.org', '@type': 'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    '@id': `${SITE.baseUrl}/#organization`,
    address: { '@type': 'PostalAddress', streetAddress: 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality: 'Haridwar', addressRegion: 'Uttarakhand', postalCode: '249410', addressCountry: 'IN' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.7, reviewCount: 54, bestRating: 5 },
    areaServed: [{ '@type': 'State', name: c.region }, { '@type': 'State', name: 'Uttarakhand' }],
    inLanguage: c.code,
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: c.faq.map(x => ({ '@type': 'Question', name: x.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: c.breadcrumbLabel, item: url },
    ],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: c.h1, inLanguage: c.code, url,
    datePublished: '2026-07-12', dateModified: SITE.lastUpdatedISO,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    mainEntityOfPage: url,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    </>
  );
}

/**
 * CharDhamLanguagePage — shared layout for all 6 regional-language Char Dham
 * pages. Each /char-dham-yatra-<language>/page.js supplies a fully localized
 * `content` object (see /src/data/langContent/*.js for the schema) plus a
 * `fontClassName` from a per-page next/font/google Noto Sans script loader,
 * so every language renders with correct native glyphs regardless of the
 * visitor's device fonts.
 */
export default function CharDhamLanguagePage({ content: c, slug, fontClassName = '' }) {
  return (
    <div className={fontClassName}>
      <Schema c={c} slug={slug} />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>{c.badge}</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,4vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 14, lineHeight: 1.3 }}>
            {c.h1}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15.5, lineHeight: 1.8, maxWidth: 720, margin: '0 auto 20px' }}>
            {c.heroSub}
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(c.whatsappMsg)}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 {c.ctaWhatsapp}</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>📞 {c.ctaCall}</a>
          </div>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span lang={c.code}>{c.breadcrumbLabel}</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '36px 20px 60px' }} lang={c.code}>
        <BlogAuthor variant="top" author="dhanesh" />

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {c.quickFacts.map(([label, value]) => (
            <div key={label}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{label}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{value}</div></div>
          ))}
        </div>

        <p style={{ ...p, fontStyle: 'italic', borderLeft: '3px solid var(--teal)', paddingLeft: 16, background: 'var(--navy-light)', padding: '14px 16px', borderRadius: '0 10px 10px 0', marginBottom: 24 }}>
          {c.pullQuote}
        </p>

        <h2 style={h2}>{c.whyHeading}</h2>
        <p style={p}>{c.whyBody}</p>

        <h2 style={h2}>{c.whatIsHeading}</h2>
        <p style={p}>{c.whatIsBody}</p>

        <div style={{ overflowX: 'auto', marginBottom: 20 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {c.dhamsTableHead.map(hh => (<th key={hh} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 11.5, whiteSpace: 'nowrap' }}>{hh}</th>))}
            </tr></thead>
            <tbody>
              {c.dhams.map((d, i) => (
                <tr key={d.name} style={{ borderBottom: '1px solid var(--border)', background: i % 2 ? 'var(--bg)' : '#fff' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: 'var(--navy)', fontSize: 13 }}>{d.name}</td>
                  <td style={{ padding: '8px 12px', color: '#475569', fontSize: 12.5 }}>{d.altitude}</td>
                  <td style={{ padding: '8px 12px', color: '#475569', fontSize: 12.5 }}>{d.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <BlogCTA variant="inline" intent="booking" />

        <h2 style={h2}>{c.seasonHeading}</h2>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: 12, padding: '16px 20px', marginBottom: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12 }}>
          {[['🌊 Yamunotri', 'Apr 19', 'Nov 7'], ['🌿 Gangotri', 'Apr 19', 'Nov 7'], ['🏔️ Kedarnath', 'Apr 22', 'Nov 11'], ['🕌 Badrinath', 'Apr 23', 'Nov 13']].map(([dh, o, cl]) => (
            <div key={dh} style={{ textAlign: 'center' }}><div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>{dh}</div><div style={{ fontSize: 12.5, color: '#15803D', fontWeight: 600 }}>{o}</div><div style={{ fontSize: 12, color: '#64748b' }}>{cl}</div></div>
          ))}
        </div>
        <p style={{ ...p, fontSize: 14 }}>{c.seasonNote}</p>

        <h2 style={h2}>{c.inclusionsHeading}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 8, marginBottom: 16 }}>
          {c.inclusions.map(item => (<div key={item} style={{ background: '#fff', borderRadius: 8, padding: '9px 12px', border: '1px solid var(--border)', fontSize: 13.5, color: '#334155' }}>✅ {item}</div>))}
        </div>
        <div style={{ background: 'rgba(29,158,117,0.08)', border: '1px solid #1D9E75', borderRadius: 10, padding: '12px 16px', marginBottom: 24, fontSize: 13.5, color: '#0F5132' }}>
          {c.priceNote}
        </div>

        <h2 style={h2}>{c.tiersHeading}</h2>
        <p style={p}>{c.tiersIntro}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginBottom: 20 }}>
          {c.tiers.map(t => (
            <div key={t.tier} style={{ background: '#fff', borderRadius: 12, padding: '16px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--navy)', marginBottom: 4 }}>{t.tier}</div>
              <div style={{ fontWeight: 800, fontSize: 19, color: 'var(--navy)', lineHeight: 1, marginBottom: 6 }}>{t.range}</div>
              <div style={{ fontSize: 12, color: 'var(--text-mid)', marginBottom: 2 }}>{t.vehicle}</div>
              <div style={{ fontSize: 12, color: 'var(--text-mid)', marginBottom: 2 }}>{t.hotel}</div>
              <div style={{ fontSize: 12, color: 'var(--text-mid)' }}>{t.best}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>{c.reachHeading}</h2>
        <p style={p}>{c.reachIntro}</p>
        {c.reachOptions.map(o => (
          <div key={o.title} style={{ background: '#fff', borderRadius: 10, padding: '12px 16px', border: '1px solid var(--border)', borderLeft: '3px solid var(--teal)', marginBottom: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 4 }}>{o.icon} {o.title}</div>
            <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{o.body}</div>
          </div>
        ))}

        <div style={{ background: 'rgba(232,146,10,0.07)', border: '1px solid rgba(232,146,10,0.25)', borderRadius: 10, padding: '14px 16px', marginTop: 8, marginBottom: 28 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: '#7B3F00', marginBottom: 4 }}>{c.cultureHeading}</div>
          <div style={{ fontSize: 13.5, color: '#7B3F00', lineHeight: 1.8 }}>{c.cultureBody}</div>
        </div>

        <h2 style={h2}>{c.registrationHeading}</h2>
        <p style={p}>{c.registrationBody}</p>

        <BlogAuthor variant="bottom" author="dhanesh" />
        <BlogCTA variant="footer" intent="booking" />

        <div style={{ marginTop: 36 }}>
          <PeopleAlsoAsk items={c.faq} heading={c.faqHeading} subtext={c.faqIntro} />
        </div>

        <LanguageLinkMesh current={slug} />
      </article>
    </div>
  );
}
