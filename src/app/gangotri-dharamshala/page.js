import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Gangotri Dharamshala & Budget Stays ${SITE.season} — GMVN, Ashram Guest Houses` },
  description: 'Budget accommodation at Gangotri: the GMVN Rest House, ashram and trust dharamshalas near the temple, and budget lodges at Uttarkashi and Harsil on the approach.',
  keywords: ['gangotri dharamshala','gangotri budget accommodation','gmvn gangotri rest house','gangotri cheap hotel','gangotri ashram stay'],
  alternates: { canonical: `${SITE.baseUrl}/gangotri-dharamshala` },
  openGraph: { title: `Gangotri Dharamshala & Budget Stays ${SITE.season}`, description: 'GMVN and ashram dharamshalas for a budget Gangotri yatra.', url: `${SITE.baseUrl}/gangotri-dharamshala`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Gangotri budget accommodation' }] },
  twitter: { card: 'summary_large_image', title: 'Gangotri Dharamshala & Budget Stays', description: 'Budget accommodation options for a Gangotri yatra.', images: [{ url: '/opengraph-image', alt: 'Gangotri Dharamshala' }] },
};

const FAQS = [
  { q: 'Is there a GMVN guest house at Gangotri?', a: 'Yes — the GMVN Gangotri Rest House is one of the more established government-run budget options on this leg of the Char Dham circuit, generally recommended to book in advance given how quickly it fills during peak season.' },
  { q: 'Are there ashram stays at Gangotri?', a: 'Yes — several ashrams in and around Gangotri offer basic pilgrim accommodation, typically at very low cost, arranged through the ashram directly rather than a commercial booking platform. Standards and availability vary, so confirming close to your travel date is sensible.' },
  { q: 'Should I stay in Uttarkashi or Harsil instead of Gangotri itself?', a: 'Both are viable budget bases with more accommodation variety than Gangotri itself, and many pilgrims split the journey — a night in Uttarkashi or Harsil, then a shorter final push to Gangotri — rather than trying to reach the shrine directly in one long day from further down the valley.' },
];

const PAA = [
  { q: 'What is the cheapest way to visit Gangotri?', a: 'A combination of GMVN or ashram accommodation at Gangotri itself, or a base at Harsil or Uttarkashi with a day trip to the temple, kept most pilgrims\' costs down — private hotel rooms directly at Gangotri, where they exist, generally cost more than the equivalent government or ashram options.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Gangotri Yatra', item: `${SITE.baseUrl}/gangotri-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Dharamshala & Budget Stays', item: `${SITE.baseUrl}/gangotri-dharamshala` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: `Gangotri Dharamshala & Budget Stays ${SITE.season}`, description: 'A guide to budget accommodation at Gangotri: GMVN, ashrams, and nearby bases.', mainEntityOfPage: `${SITE.baseUrl}/gangotri-dharamshala`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function GangotriDharamshala() {
  const waText = encodeURIComponent('Namaste! I want a budget Gangotri yatra with dharamshala/GMVN-style accommodation. Please share options.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Gangotri · Budget Accommodation</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Gangotri Dharamshala &amp; Budget Stays</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>The GMVN Rest House, ashram guest houses at Gangotri, and budget bases at Uttarkashi and Harsil</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🏛️ GMVN Gangotri Rest House', '🛕 Ashram stays', '📍 Harsil / Uttarkashi bases', '💰 Budget-priced'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/gangotri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Gangotri Yatra</Link><span>›</span>
          <span>Dharamshala &amp; Budget Stays</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}><strong>Gangotri is small, and its accommodation reflects that.</strong> There is no sprawling hotel district at 3,100 m — budget pilgrims rely on the GMVN Rest House, a handful of ashram guest houses, or a base further down the valley at Harsil or Uttarkashi with a shorter final push to the shrine.</p>

        <h2 style={h2}>GMVN Gangotri Rest House</h2>
        <AnswerBox>
          The GMVN Gangotri Rest House, run by Uttarakhand's government tourism corporation, is the most established budget accommodation option directly at Gangotri. Bookable through GMVN's official portal, it is best reserved in advance, especially during the peak season.
        </AnswerBox>

        <h2 style={h2}>Ashram Guest Houses</h2>
        <p style={p}>Several ashrams in and around Gangotri offer basic pilgrim accommodation at low cost, typically arranged directly with the ashram rather than through a centralised booking system. Standards vary considerably between them, and availability is best confirmed close to your actual travel dates rather than assumed months in advance.</p>

        <ExpertNote variant="insider">
          If budget is the priority but Gangotri itself feels too basic or too uncertain for your comfort level, staying a night in Harsil or Uttarkashi and making Gangotri a focused day trip works well — both towns have meaningfully more accommodation choice, and the drive up is short enough not to feel like a compromise.
        </ExpertNote>

        <h2 style={h2}>Uttarkashi and Harsil as Bases</h2>
        <p style={p}><Link href="/uttarkashi-hotels">Uttarkashi</Link> and <Link href="/harsil-valley">Harsil</Link>, both on the approach road, carry a wider spread of budget lodges than Gangotri itself and function as sensible overnight bases — splitting a long single-day push into a more comfortable two-stage journey, with the added benefit of proper acclimatisation before the higher altitude at Gangotri.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want a budget Gangotri itinerary sorted for you?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can arrange GMVN, ashram or Harsil/Uttarkashi-based stays. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has arranged budget Gangotri stays across every price band for fifteen seasons. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a budget Gangotri yatra?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>More on Gangotri</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Gangotri Yatra', '/gangotri-yatra'], ['Gangotri Temple', '/gangotri-temple'], ['Gangotri Festivals', '/gangotri-festivals'], ['Uttarkashi Hotels', '/uttarkashi-hotels'], ['Harsil Valley', '/harsil-valley'], ['Gaumukh', '/gaumukh']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
