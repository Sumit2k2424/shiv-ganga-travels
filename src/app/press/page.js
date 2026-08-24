import Link from 'next/link';
import { SITE } from '@/data/packages';
import { MEDIA_KIT, getPublishedReleases } from '@/data/press';
import AnswerBox from '@/components/AnswerBox';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Press Office & Newsroom | Shiv Ganga Travels' },
  description: 'Media resources for journalists covering the Char Dham Yatra: press releases, a sixteen-year operator dataset free to use, boilerplate, and a named spokesperson available for comment.',
  keywords: ['shiv ganga travels press','char dham yatra press release','char dham data journalists','uttarakhand tourism operator comment','char dham media contact','char dham yatra statistics source','newsroom'],
  alternates: { canonical: `${SITE.baseUrl}/press` },
  openGraph: {
    title: 'Press Office & Newsroom — Shiv Ganga Travels',
    description: 'Press releases, a sixteen-year Char Dham dataset free for news organisations to use, and a named operator available for comment.',
    url: `${SITE.baseUrl}/press`, type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Shiv Ganga Travels press office' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press Office — Shiv Ganga Travels',
    description: 'Char Dham press releases, a free operator dataset, and a named spokesperson.',
    images: [{ url: '/opengraph-image', alt: 'Shiv Ganga Travels press office' }],
  },
};

function Schema({ releases }) {
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Press Office', item: `${SITE.baseUrl}/press` },
    ],
  };
  const list = {
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    name: 'Press Office & Newsroom',
    description: 'Press releases and media resources from Shiv Ganga Travels, a Char Dham Yatra operator in Haridwar, Uttarakhand.',
    url: `${SITE.baseUrl}/press`,
    isPartOf: { '@id': `${SITE.baseUrl}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: releases.map((r, i) => ({
        '@type': 'ListItem', position: i + 1,
        url: `${SITE.baseUrl}/press/${r.slug}`,
        name: r.headline,
      })),
    },
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(list) }} />
  </>);
}

const CARD = { background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 12, padding: '18px 20px' };
const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 480 };

export default function PressOffice() {
  const releases = getPublishedReleases();
  const waText = encodeURIComponent('Hello — I am a journalist. I would like to request the Char Dham operator dataset / arrange an interview.');

  return (
    <>
      <Schema releases={releases} />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            For journalists &amp; news desks
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Press Office
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Sixteen years of Char Dham operator data, free to use · a named spokesperson who answers the phone · releases written to be lifted, not rewritten
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 WhatsApp the founder</a>
            <a href={`mailto:${SITE.email}?subject=Press%20enquiry`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>✉️ {SITE.email}</a>
            {/* The feed is the only thing on this page a journalist can
                subscribe to. Everything else waits to be found again. */}
            <a href="/press/feed.xml" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📡 RSS feed</a>
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <span>Press Office</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>

        <h2 style={h2}>What We Can Give You</h2>
        <AnswerBox>
          Shiv Ganga Travels is a Char Dham Yatra operator in Haridwar, Uttarakhand, running the
          circuit since 2010. We hold sixteen years of route, cost, footfall and safety data and
          make it available to news organisations free of charge, with attribution. Our founder is
          available for comment on yatra logistics, road conditions, pilgrim safety and helicopter
          operations, in Hindi or English.
        </AnswerBox>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 32 }}>
          {[
            { t: '📊 Data, free to use', d: 'Sixteen years of operator records — pilgrim volumes, route distances, real cost breakdowns, hotel booking patterns, weather-related closures. Available as a spreadsheet on request. Attribution is all we ask.' },
            { t: '🗣️ A named person, on the record', d: 'Dhanesh Chandra Mishra, founder, retired Indian Army officer, sixteen seasons on this route. Not a press office. He will give you a straight answer, including when the answer is unhelpful to us.' },
            { t: '📰 Releases in wire format', d: 'Dateline, nut graf, sourced figures, attributable quote, boilerplate. Written so a sub-editor can lift them without rewriting. No adjectives you would have to strip.' },
            { t: '🏔️ Ground access during season', d: 'April to November we have vehicles and staff on the route daily. If you need a photograph, a condition check or someone at Gaurikund this morning, ask.' },
          ].map(x => (
            <div key={x.t} style={{ ...CARD, borderLeft: '4px solid var(--teal)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 6 }}>{x.t}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{x.d}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Press Releases</h2>
        <p style={{ ...p, fontSize: 14 }}>
          Full text, sourced figures and the boilerplate ride in the{' '}
          <a href="/press/feed.xml" style={{ color: 'var(--teal)', fontWeight: 600 }}>RSS feed</a>{' '}
          — so a release can be filed accurately without coming back here. Everything is
          free to reproduce with attribution.
        </p>
        {releases.length === 0 ? (
          <p style={p}>
            No releases are currently published. For data requests or comment, contact us directly using the details below.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {releases.map(r => (
              <Link key={r.slug} href={`/press/${r.slug}`} style={{ ...CARD, display: 'block', textDecoration: 'none', borderLeft: '4px solid #E8920A' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--navy)', color: '#FFD166', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 100 }}>{r.category}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r.dateHuman}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15.5, color: 'var(--navy)', lineHeight: 1.45, marginBottom: 6 }}>{r.headline}</div>
                <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7, marginBottom: 8 }}>{r.summary}</div>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--teal)' }}>Read the full release →</span>
              </Link>
            ))}
          </div>
        )}

        <h2 style={h2}>Spokesperson</h2>
        <div style={{ ...CARD, marginBottom: 28, display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 17, flexShrink: 0 }}>DM</div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>{MEDIA_KIT.spokesperson.name}</div>
            <div style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 600, marginBottom: 8 }}>{MEDIA_KIT.spokesperson.title}, {SITE.name}</div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: '0 0 10px' }}>{MEDIA_KIT.spokesperson.bio}</p>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Available for comment on</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: '#475569', lineHeight: 1.85 }}>
              {MEDIA_KIT.spokesperson.availableFor.map(x => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </div>

        <h2 style={h2}>Fast Facts</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['', ''].map((x, i) => <th key={i} style={TH}>{i === 0 ? 'Detail' : 'Value'}</th>)}
            </tr></thead>
            <tbody>
              {MEDIA_KIT.fastFacts.map((f, i) => (
                <tr key={f[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{f[0]}</td>
                  <td style={TD}>{f[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Boilerplate</h2>
        <p style={p}>Copy and paste. Short version, for a standard story foot:</p>
        <div style={{ ...CARD, marginBottom: 16, background: 'var(--bg)', fontSize: 13.5, color: '#334155', lineHeight: 1.8 }}>
          {MEDIA_KIT.boilerplateShort}
        </div>
        <p style={p}>Long version, for profiles and features:</p>
        <div style={{ ...CARD, marginBottom: 28, background: 'var(--bg)', fontSize: 13.5, color: '#334155', lineHeight: 1.8 }}>
          {MEDIA_KIT.boilerplateLong}
        </div>

        <h2 style={h2}>Using Our Images and Figures</h2>
        <p style={p}>{MEDIA_KIT.assetPolicy}</p>

        <h2 style={h2}>Background Resources</h2>
        <p style={p}>
          These are the pages journalists ask for most often. All are maintained rather than published once and abandoned.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
          {[['Char Dham statistics 2010–2026', '/char-dham-yatra-statistics'], ['Live road status', '/char-dham-road-status'], ['Opening dates 2026', '/blog/char-dham-yatra-opening-dates-2026'], ['Closing dates 2026', '/blog/char-dham-yatra-closing-dates-2026'], ['Registration rules', '/blog/char-dham-yatra-registration'], ['Booking scams and fake portals', '/char-dham-yatra-scams'], ['Emergency contacts', '/char-dham-yatra-emergency-contacts'], ['Helicopter fares and booking', '/blog/kedarnath-helicopter-booking'], ['Altitude and medical screening', '/altitude-sickness-char-dham'], ['About the company', '/about']].map(([l, href]) => (
            <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>On deadline?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>
            {MEDIA_KIT.contact.note}
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
            <a href={`mailto:${SITE.email}?subject=Press%20enquiry`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>✉️ Email</a>
          </div>
        </div>

      </article>
    </>
  );
}
