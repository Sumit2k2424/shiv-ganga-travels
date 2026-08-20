import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Kedarnath Dharamshala & Budget Stays ${SITE.season} — GMVN, Ashrams, Tents` },
  description: 'Budget accommodation near Kedarnath: GMVN Tourist Rest House options, temple-trust dharamshalas, and tent stays at Kedarnath and along the trek route via Guptkashi and Gaurikund.',
  keywords: ['kedarnath dharamshala','kedarnath budget accommodation','gmvn kedarnath','kedarnath tent stay','kedarnath cheap hotel','kedarnath ashram stay'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-dharamshala` },
  openGraph: { title: `Kedarnath Dharamshala & Budget Stays ${SITE.season}`, description: 'GMVN, temple-trust dharamshalas and tent stays for a budget Kedarnath yatra.', url: `${SITE.baseUrl}/kedarnath-dharamshala`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath budget accommodation' }] },
  twitter: { card: 'summary_large_image', title: 'Kedarnath Dharamshala & Budget Stays', description: 'Budget accommodation options for a Kedarnath yatra.', images: [{ url: '/opengraph-image', alt: 'Kedarnath Dharamshala' }] },
};

const FAQS = [
  { q: 'What is a dharamshala?', a: 'A dharamshala is a pilgrim rest house — typically run by a temple trust, religious organisation, or government tourism body — offering basic, low-cost accommodation for pilgrims, usually simple rooms or dormitory beds without hotel-grade amenities. They exist specifically to make pilgrimage affordable, not to compete with commercial hotels on comfort.' },
  { q: 'Is there a GMVN guest house at Kedarnath?', a: 'Yes — Garhwal Mandal Vikas Nigam (GMVN), the Uttarakhand government tourism corporation, operates a Tourist Rest House at Kedarnath itself, along with facilities at the trek-route halts of Guptkashi and Gaurikund. GMVN accommodation is bookable online through their official portal and is generally the most reliable budget option on the route, since it is government-run rather than subject to the seasonal turnover that affects small private lodges.' },
  { q: 'Can you stay in a tent at Kedarnath?', a: 'Yes — tent accommodation, both basic and semi-deluxe, is available at Kedarnath itself during the yatra season, run by various operators including some government-affiliated camps, and is often the most cost-effective option directly at the shrine given limited permanent building capacity at that altitude.' },
  { q: 'Should I book Kedarnath accommodation in advance?', a: 'Strongly recommended, especially for GMVN properties and during the peak May–June and September–October windows — capacity at 3,583 m is genuinely limited, and pilgrims who arrive without a booking risk having no room at all on a night the yatra season is busy.' },
  { q: 'Are there budget options along the way, not just at Kedarnath itself?', a: 'Yes — Guptkashi and Gaurikund, the two main halts on the road/trek route, both have a range of budget lodges and GMVN facilities, useful for splitting the journey and acclimatising before the final trek to Kedarnath itself.' },
];

const PAA = [
  { q: 'What is the price range for dharamshala-style stays at Kedarnath?', a: 'Budget rooms and dormitory beds at GMVN and trust-run dharamshalas typically run considerably below commercial hotel rates for the region, though exact pricing varies by season and should be confirmed directly with GMVN\'s booking portal or the relevant trust, since rates are revised periodically.' },
  { q: 'Is GMVN accommodation reliable to book?', a: 'Yes — as a government tourism corporation, GMVN maintains a consistent, ongoing presence across Char Dham halts unlike small private lodges that can open, close or change hands between seasons, making it the more dependable budget option to reference in trip planning.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Kedarnath Yatra', item: `${SITE.baseUrl}/kedarnath-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Dharamshala & Budget Stays', item: `${SITE.baseUrl}/kedarnath-dharamshala` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: `Kedarnath Dharamshala & Budget Stays ${SITE.season}`, description: 'A guide to budget accommodation at Kedarnath: GMVN, dharamshalas, and tent stays.', mainEntityOfPage: `${SITE.baseUrl}/kedarnath-dharamshala`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function KedarnathDharamshala() {
  const waText = encodeURIComponent('Namaste! I want a budget Kedarnath yatra with dharamshala/GMVN-style accommodation. Please share options.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Kedarnath · Budget Accommodation</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Kedarnath Dharamshala &amp; Budget Stays</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>GMVN Tourist Rest Houses, trust dharamshalas and tent stays at Kedarnath and along the Guptkashi–Gaurikund route</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🏛️ GMVN Tourist Rest House', '⛺ Tent stays', '🛕 Trust dharamshalas', '💰 Budget-priced'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/kedarnath-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Kedarnath Yatra</Link><span>›</span>
          <span>Dharamshala &amp; Budget Stays</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}><strong>Not every Kedarnath pilgrim needs a hotel — many just need a clean, safe roof and a bed close to the shrine.</strong> Dharamshalas, GMVN guest houses and tent camps exist for exactly that, at a fraction of commercial hotel rates, and they carry their own logic: book early, expect basic, and understand that the value is proximity and affordability, not comfort.</p>

        <h2 style={h2}>What Counts as a Dharamshala Here</h2>
        <AnswerBox>
          A dharamshala is a pilgrim rest house run by a temple trust, religious organisation, or government body, offering basic low-cost rooms or dormitory beds. At Kedarnath, the main options are the government-run GMVN Tourist Rest House, temple-trust dharamshalas, and seasonal tent camps — all considerably cheaper than commercial hotels in Guptkashi or Sonprayag.
        </AnswerBox>

        <h2 style={h2}>GMVN — the Reliable Baseline</h2>
        <p style={p}><strong>Garhwal Mandal Vikas Nigam (GMVN)</strong>, the Uttarakhand government's own tourism corporation, operates a Tourist Rest House at Kedarnath, plus facilities along the route at Guptkashi and Gaurikund. Because it's a government institution rather than a small private business, GMVN accommodation carries a reliability that individual lodges can't — it doesn't close down, change hands, or vanish between seasons the way small private stays sometimes do. Rooms range from basic economy to slightly better family suites and dormitory beds, bookable through GMVN's official online portal.</p>

        <ExpertNote variant="warning">
          Book GMVN and dharamshala accommodation well ahead of your travel dates, especially for the peak May–June and September–October windows. Capacity at 3,583 m is genuinely limited — there is only so much permanent building that can exist at that altitude — and arriving without a confirmed booking during a busy stretch of the season is a real risk, not a hypothetical one.
        </ExpertNote>

        <h2 style={h2}>Trust Dharamshalas and Ashram Stays</h2>
        <p style={p}>Alongside GMVN, various religious trusts and ashrams maintain dharamshala-style accommodation both at Kedarnath and along the route, typically simpler still — shared rooms, minimal furnishing, and a price point built for pilgrims travelling on tight budgets rather than tourists. These are usually arranged informally or through the trust's own local contacts rather than a centralised booking system, so confirming availability close to your travel date, or through a local operator who knows the current options, works better than trying to book months in advance the way you would with GMVN.</p>

        <h2 style={h2}>Tent Stays at Kedarnath</h2>
        <p style={p}>Given the limited permanent building capacity directly at the shrine, <strong>tent accommodation</strong> — ranging from very basic to semi-deluxe — fills much of the gap during peak season, run by a mix of government-affiliated camps and private operators. For many budget pilgrims, a tent stay right at Kedarnath works out both cheaper and more convenient than a hotel room a day's walk away in Guptkashi.</p>

        <h2 style={h2}>Along the Route — Guptkashi and Gaurikund</h2>
        <p style={p}>Both <Link href="/guptkashi-guide">Guptkashi</Link> and <Link href="/gaurikund">Gaurikund</Link> — the main halts before the final trek — carry their own range of budget lodges and GMVN facilities, useful for splitting the journey, acclimatising properly, and reducing what would otherwise be a very long single push to the shrine.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want a budget Kedarnath itinerary sorted for you?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can arrange GMVN, dharamshala or tent stays alongside your trek and registration. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has arranged budget Kedarnath stays for pilgrims across every price band for fifteen seasons. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a budget Kedarnath yatra?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>More on Kedarnath</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Kedarnath Yatra', '/kedarnath-yatra'], ['Kedarnath Hotels', '/kedarnath-hotels'], ['Kedarnath Temple', '/kedarnath-temple'], ['Kedarnath Festivals', '/kedarnath-festivals'], ['Guptkashi Guide', '/guptkashi-guide'], ['Gaurikund', '/gaurikund']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
