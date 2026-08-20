import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Badrinath Dharamshala & Budget Stays ${SITE.season} — GMVN, Trust Guest Houses` },
  description: 'Budget accommodation at Badrinath: GMVN Tourist Rest House, Badrinath-Kedarnath Temple Committee (BKTC) guest houses, and trust dharamshalas near the temple.',
  keywords: ['badrinath dharamshala','badrinath budget accommodation','gmvn badrinath','bktc guest house badrinath','badrinath cheap hotel','badrinath ashram stay'],
  alternates: { canonical: `${SITE.baseUrl}/badrinath-dharamshala` },
  openGraph: { title: `Badrinath Dharamshala & Budget Stays ${SITE.season}`, description: 'GMVN, BKTC guest houses and trust dharamshalas for a budget Badrinath yatra.', url: `${SITE.baseUrl}/badrinath-dharamshala`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Badrinath budget accommodation' }] },
  twitter: { card: 'summary_large_image', title: 'Badrinath Dharamshala & Budget Stays', description: 'Budget accommodation options for a Badrinath yatra.', images: [{ url: '/opengraph-image', alt: 'Badrinath Dharamshala' }] },
};

const FAQS = [
  { q: 'Is there a GMVN guest house at Badrinath?', a: 'Yes — GMVN operates a Tourist Rest House at Badrinath itself, along with facilities at Joshimath, the main halt before the final approach. As a government tourism corporation, GMVN accommodation is bookable through their official portal and offers a consistency that small private lodges can\'t always guarantee season to season.' },
  { q: 'What is BKTC and does it run accommodation?', a: 'The Badrinath-Kedarnath Temple Committee (BKTC) is the statutory body managing both temples\' affairs, including some pilgrim guest house facilities near the shrine, typically allotted to pilgrims through the temple administration rather than a standard commercial booking system.' },
  { q: 'Are there dharamshalas run by trusts at Badrinath?', a: 'Yes, various religious trusts and regional community associations maintain basic dharamshala accommodation at Badrinath, generally arranged locally rather than through centralised online booking, and best confirmed close to travel dates or through a local operator familiar with current availability.' },
  { q: 'How far in advance should I book budget accommodation at Badrinath?', a: 'As early as possible for the May–June and September–October peak windows — Badrinath\'s pilgrim volume is among the highest of the four dhams, and budget capacity fills fast during those stretches.' },
];

const PAA = [
  { q: 'Is GMVN Badrinath more reliable than private budget hotels?', a: 'Generally yes, for the same reason as everywhere else on the Char Dham circuit — it\'s a permanent government institution rather than a small business that can close or change between seasons, making it a safer default to plan around.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Badrinath Yatra', item: `${SITE.baseUrl}/badrinath-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Dharamshala & Budget Stays', item: `${SITE.baseUrl}/badrinath-dharamshala` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: `Badrinath Dharamshala & Budget Stays ${SITE.season}`, description: 'A guide to budget accommodation at Badrinath: GMVN, BKTC guest houses, and trust dharamshalas.', mainEntityOfPage: `${SITE.baseUrl}/badrinath-dharamshala`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function BadrinathDharamshala() {
  const waText = encodeURIComponent('Namaste! I want a budget Badrinath yatra with dharamshala/GMVN-style accommodation. Please share options.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Badrinath · Budget Accommodation</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Badrinath Dharamshala &amp; Budget Stays</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>GMVN Tourist Rest Houses, BKTC guest houses and trust dharamshalas at Badrinath and Joshimath</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🏛️ GMVN Tourist Rest House', '🛕 BKTC guest houses', '⛪ Trust dharamshalas', '💰 Budget-priced'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/badrinath-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Badrinath Yatra</Link><span>›</span>
          <span>Dharamshala &amp; Budget Stays</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}><strong>Badrinath sees some of the heaviest pilgrim volume of any Char Dham shrine, and its budget accommodation reflects that scale.</strong> Between GMVN's government-run guest houses, temple-committee facilities, and trust dharamshalas, there is a genuine low-cost path through Badrinath — it just needs booking earlier than the comfort-tier hotels do.</p>

        <h2 style={h2}>GMVN — the Reliable Baseline</h2>
        <AnswerBox>
          GMVN, Uttarakhand's government tourism corporation, operates a Tourist Rest House at Badrinath and at Joshimath, the main halt before the final approach. Bookable through GMVN's official online portal, it offers a consistency across seasons that small private lodges can't always match.
        </AnswerBox>

        <h2 style={h2}>BKTC Guest Houses</h2>
        <p style={p}>The <strong>Badrinath-Kedarnath Temple Committee (BKTC)</strong>, the statutory body managing both shrines, maintains some pilgrim guest house facilities near the temple itself. These are generally allotted through the temple administration rather than a standard commercial booking channel, so confirming availability directly, or through a local operator with current contacts, works better than assuming online booking is available.</p>

        <ExpertNote variant="warning">
          Book as early in your planning as possible if budget accommodation is the plan — Badrinath's pilgrim numbers are among the heaviest of the four dhams across the peak May–June and September–October windows, and low-cost capacity is the first to fill.
        </ExpertNote>

        <h2 style={h2}>Trust Dharamshalas</h2>
        <p style={p}>Various religious trusts and regional community associations maintain basic dharamshala-style accommodation at Badrinath, arranged largely through local contacts rather than centralised booking. These carry the lowest price points on the route but the least predictability — worth confirming close to your actual travel dates rather than relying on advance reservation.</p>

        <h2 style={h2}>Joshimath as a Base</h2>
        <p style={p}><Link href="/joshimath-narsingh-temple">Joshimath</Link>, the last major town before Badrinath, carries a wider range of budget lodges and GMVN facilities than the shrine itself, and functions as a natural overnight base for pilgrims managing a tighter budget across the full journey.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want a budget Badrinath itinerary sorted for you?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can arrange GMVN or dharamshala-style stays alongside your full itinerary. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {FAQS.map(f => (
            <details key={f.q} style={{ background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 10, padding: '12px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', cursor: 'pointer', lineHeight: 1.5 }}>{f.q}</summary>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.8, margin: '10px 0 0' }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', borderRadius: 12, padding: '18px 20px', marginBottom: 32, display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 17, flexShrink: 0 }}>DM</div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>Dhanesh Chandra Mishra</div>
            <div style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 600, marginBottom: 8 }}>Founder &amp; Director, {SITE.name}</div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has arranged budget Badrinath stays for pilgrims across every price band for fifteen seasons. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a budget Badrinath yatra?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>More on Badrinath</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Badrinath Yatra', '/badrinath-yatra'], ['Badrinath Hotels', '/badrinath-hotels'], ['Badrinath Temple', '/badrinath-temple'], ['Badrinath Festivals', '/badrinath-festivals'], ['Joshimath Narsingh Temple', '/joshimath-narsingh-temple'], ['Tapt Kund', '/tapt-kund']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
