import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Yamunotri Dharamshala & Budget Stays ${SITE.season} — GMVN, Janki Chatti Options` },
  description: 'Budget accommodation for Yamunotri: GMVN facilities at Janki Chatti and Barkot, ashram dharamshalas, and how the trek from Janki Chatti shapes where to stay.',
  keywords: ['yamunotri dharamshala','yamunotri budget accommodation','gmvn janki chatti','yamunotri cheap hotel','yamunotri ashram stay','barkot budget hotel'],
  alternates: { canonical: `${SITE.baseUrl}/yamunotri-dharamshala` },
  openGraph: { title: `Yamunotri Dharamshala & Budget Stays ${SITE.season}`, description: 'GMVN and ashram dharamshalas for a budget Yamunotri yatra.', url: `${SITE.baseUrl}/yamunotri-dharamshala`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Yamunotri budget accommodation' }] },
  twitter: { card: 'summary_large_image', title: 'Yamunotri Dharamshala & Budget Stays', description: 'Budget accommodation options for a Yamunotri yatra.', images: [{ url: '/opengraph-image', alt: 'Yamunotri Dharamshala' }] },
};

const FAQS = [
  { q: 'Where do budget pilgrims stay for Yamunotri?', a: 'Since there is no permanent town at the temple itself — pilgrims trek in and out the same day or stay at the base — budget accommodation for Yamunotri centres on Janki Chatti, the trailhead village, and Barkot, a larger town further down the road, both of which have GMVN and other low-cost options.' },
  { q: 'Is there a GMVN guest house near Yamunotri?', a: 'Yes — GMVN operates facilities at Janki Chatti and Barkot, both on the approach to Yamunotri, bookable through GMVN\'s official portal and generally the most dependable budget choice on this leg of the circuit.' },
  { q: 'Can I trek to Yamunotri and back in one day from Janki Chatti?', a: 'Yes — the trek to Yamunotri temple from Janki Chatti is a manageable day trip for most reasonably fit pilgrims, which is exactly why so little permanent accommodation exists at the temple itself: Janki Chatti absorbs almost all overnight demand.' },
  { q: 'Are there ashram stays on this route?', a: 'Yes, a number of ashrams around Janki Chatti and Barkot offer basic pilgrim accommodation, generally arranged directly rather than through formal booking channels.' },
];

const PAA = [
  { q: 'Should I stay in Janki Chatti or Barkot?', a: 'Janki Chatti puts you right at the trailhead, minimising the trek-day logistics; Barkot, larger and further down, has a wider range of accommodation and services but adds driving time before the trek itself. Budget-focused pilgrims often prefer Janki Chatti for convenience despite Barkot\'s greater choice.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Yamunotri Yatra', item: `${SITE.baseUrl}/yamunotri-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Dharamshala & Budget Stays', item: `${SITE.baseUrl}/yamunotri-dharamshala` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: `Yamunotri Dharamshala & Budget Stays ${SITE.season}`, description: 'A guide to budget accommodation for Yamunotri: GMVN, ashrams, and the Janki Chatti / Barkot base choice.', mainEntityOfPage: `${SITE.baseUrl}/yamunotri-dharamshala`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function YamunotriDharamshala() {
  const waText = encodeURIComponent('Namaste! I want a budget Yamunotri yatra with dharamshala/GMVN-style accommodation. Please share options.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Yamunotri · Budget Accommodation</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Yamunotri Dharamshala &amp; Budget Stays</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>GMVN facilities at Janki Chatti and Barkot, ashram dharamshalas, and how the trek shapes where budget pilgrims actually stay</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🏛️ GMVN Janki Chatti/Barkot', '🥾 Day-trek base', '🛕 Ashram stays', '💰 Budget-priced'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/yamunotri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Yamunotri Yatra</Link><span>›</span>
          <span>Dharamshala &amp; Budget Stays</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}><strong>Yamunotri is a day-trek dham, and its accommodation follows that shape.</strong> There is no real town at the temple itself — pilgrims walk in and out from the trailhead — so budget stays cluster at <Link href="/janki-chatti">Janki Chatti</Link>, right at the trek's start, and at the larger town of <Link href="/barkot">Barkot</Link> further down the road.</p>

        <h2 style={h2}>GMVN at Janki Chatti and Barkot</h2>
        <AnswerBox>
          GMVN, Uttarakhand's government tourism corporation, operates facilities at Janki Chatti, the Yamunotri trailhead, and at Barkot further down the approach road. Bookable through GMVN's official portal, these are generally the most dependable budget option on this leg of the Char Dham circuit.
        </AnswerBox>

        <h2 style={h2}>Janki Chatti or Barkot — Which Base</h2>
        <p style={p}>Janki Chatti puts you directly at the trailhead, cutting out the extra driving time and letting you start the trek fresh; Barkot, larger and better served, offers considerably more accommodation and service variety but adds a drive before the walk even begins. Most budget-focused pilgrims choose Janki Chatti for the convenience, accepting the smaller range of options in exchange for simplicity on trek day.</p>

        <ExpertNote variant="tip">
          The Yamunotri trek from Janki Chatti is genuinely doable as a same-day round trip for most reasonably fit pilgrims — factor that into your accommodation plan. Many budget travellers stay just one night at Janki Chatti (or even push through the trek without an overnight there at all if arriving early enough), rather than assuming a multi-night stay is required.
        </ExpertNote>

        <h2 style={h2}>Ashram Dharamshalas</h2>
        <p style={p}>A number of ashrams around Janki Chatti and Barkot maintain basic pilgrim accommodation at low cost, typically arranged directly rather than through a formal booking channel — worth asking about locally if GMVN capacity is full during peak season.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want a budget Yamunotri itinerary sorted for you?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can arrange GMVN or ashram-style stays at Janki Chatti or Barkot. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has arranged budget Yamunotri stays across every price band for fifteen seasons. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a budget Yamunotri yatra?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>More on Yamunotri</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Yamunotri Yatra', '/yamunotri-yatra'], ['Yamunotri Temple', '/yamunotri-temple'], ['Yamunotri Festivals', '/yamunotri-festivals'], ['Janki Chatti', '/janki-chatti'], ['Barkot', '/barkot'], ['Barkot Hotels', '/barkot-hotels']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
