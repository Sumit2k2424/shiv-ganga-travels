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
  { q: 'How much does a dharamshala at Gangotri cost?', a: 'Ashram and trust dharamshalas are the cheapest at nothing to about ₹500, usually taken as a donation rather than a fixed rate. The GMVN Gangotri Rest House runs roughly ₹800–1,500 for a private room with attached bath, and private budget lodges ₹1,000–2,000. Rates move sharply with demand — a room that is ₹800 in late September can be ₹2,000 on a peak June weekend.' },
  { q: 'Is there a GMVN guest house at Gangotri?', a: 'Yes, and it is the most reliable bed at the shrine. The GMVN Gangotri Rest House is run by Uttarakhand\'s government tourism corporation and books through the official GMVN portal or by phone, which means a reservation actually holds — unlike an ashram room, which is allocated on arrival. It is also the first thing to sell out for May and June, so book six to eight weeks ahead for those months.' },
  { q: 'Are there ashram stays at Gangotri?', a: 'Yes. Several ashrams and trusts in and around Gangotri offer simple rooms or dormitory beds, usually with shared bathrooms, blankets and often a simple meal, in exchange for a donation or a nominal charge. They are arranged directly with the ashram close to your travel date and generally cannot be reserved months ahead — so treat one as the cheap option you hope for, not the only plan you have.' },
  { q: 'Should I stay in Uttarkashi or Harsil instead of Gangotri itself?', a: 'For most budget pilgrims, yes. Harsil is 25km away at 2,620m and Uttarkashi 100km at 1,158m; both have far more rooms and lower prices than the shrine, and both break the climb so you are not going from 1,158m to sleeping at 3,415m in a single move. The one argument for staying at Gangotri is the morning aarti, which is a different experience before the day\'s vehicles arrive from the valley.' },
  { q: 'Is there heating or hot water at Gangotri?', a: 'Not heating, in budget accommodation — you get extra blankets instead. Hot water usually comes in a bucket on request rather than from a tap. Electricity often runs on generator hours in the evening rather than around the clock. Gangotri is at 3,415m in a settlement that shuts down for half the year, and this is what that allows; carry a headtorch and a charged power bank.' },
];

const PAA = [
  { q: 'What is the cheapest way to visit Gangotri?', a: 'Sleep at Uttarkashi or Harsil and treat Gangotri as a day trip. Rooms lower down the valley run ₹500–1,200 against ₹800–2,000 at the shrine itself, there are many more of them, and the drive up is 45 minutes from Harsil. If you do want to stay at Gangotri, the GMVN rest house and the ashram dharamshalas are the cheapest options — private lodges there cost more than the equivalent government or ashram room.' },
  { q: 'Is there an ATM at Gangotri?', a: 'No reliable one. Card machines exist but depend on a mobile network that is frequently down. The last dependable cash point on this road is Uttarkashi, 100km back — draw what you need there, including something for donations and the pony stand.' },
  { q: 'Do dharamshalas at Gangotri charge a fixed rate?', a: 'Often not. Ashram and trust dharamshalas commonly take a donation or a nominal charge rather than a published tariff, and rooms are allocated on arrival rather than reserved months ahead. That makes them cheap and makes them impossible to guarantee — which is why most itineraries hold a GMVN or private room as the fallback.' },
];

/* No property names on this page, by policy — hotel stock at Gangotri turns
   over yearly and naming a lodge that has since closed is worse than naming
   none, which is exactly why competitor pages here read as stale. Options are
   compared by type, price band, booking route and what the room actually
   provides. If we ever publish names, they have to be places we currently use. */
const STAYS = [
  {
    type: 'GMVN Rest House',
    price: '₹800–1,500',
    book: 'GMVN official portal, or by phone. Advance booking holds.',
    gets: 'Private room, attached bath, blankets, bucket hot water on request.',
    note: 'The most reliable bed at Gangotri, and the first to sell out for May–June.',
  },
  {
    type: 'Ashram / trust dharamshala',
    price: '₹0–500 (donation)',
    book: 'Directly with the ashram, close to the date. Rarely reservable far ahead.',
    gets: 'Simple room or dormitory, shared bathroom, blankets. Often a simple meal.',
    note: 'Cheapest option by a distance. Allocation is on arrival, so never the only plan.',
  },
  {
    type: 'Private budget lodge',
    price: '₹1,000–2,000',
    book: 'On arrival, or by phone a few days out. Limited online presence.',
    gets: 'Private room, attached bath, extra blankets, generator-hour electricity.',
    note: 'Rates swing hardest with demand — the same room doubles on a peak June weekend.',
  },
];

const BASES = [
  { place: 'Harsil',     alt: '2,620m', dist: '25 km',  why: 'The prettiest option and the best of the three for acclimatisation before the shrine. Deodar forest on the Bhagirathi. Room supply is limited and it does sell out, so it is not a walk-up plan in June.' },
  { place: 'Uttarkashi', alt: '1,158m', dist: '100 km', why: 'The practical base. Full range of budget lodges, ATMs, a district hospital, and the Gangotri National Park permit office if you are continuing to Gaumukh. Leaves a 3-hour run to the temple in the morning.' },
  { place: 'Gangotri',   alt: '3,415m', dist: '—',      why: 'Worth it for one reason: the morning aarti before the day\'s vehicles arrive. Otherwise the coldest, priciest and most limited of the three, with a real chance of a poor night if you have come straight up from Uttarkashi.' },
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

        <AnswerBox>
          <strong>Budget accommodation at Gangotri runs roughly ₹400 to ₹1,500 a night</strong>, and there is
          very little of it. The realistic options are the GMVN Gangotri Rest House (government-run, bookable
          on the GMVN portal), a handful of ashram and trust dharamshalas taking donations or a nominal
          charge, and a small number of private lodges. Gangotri sits at 3,415m and effectively empties in
          winter, so nothing here operates year-round. Most pilgrims on a budget stay lower — at{' '}
          <strong>Harsil (2,620m, 25km away)</strong> or <strong>Uttarkashi (1,158m, 100km away)</strong> — where
          there are far more rooms and prices are lower still.
        </AnswerBox>

        <p style={p}>
          Gangotri is a settlement of a few hundred permanent structures strung along one road, most of it
          shuttered from November to April. It is not a town with a hotel district. That single fact governs
          everything on this page: supply is tight, it is tightest in May and June, and the further down the
          valley you are willing to sleep, the more choice and the lower the price.
        </p>

        <h2 style={h2}>The three options, compared</h2>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:700 }}>
            <caption className="sr-only">Budget accommodation options at Gangotri compared by price, booking method and what is provided</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Option','Typical price','How to book','What you get','Worth knowing'].map(x => (
                  <th key={x} scope="col" style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STAYS.map((s, i) => (
                <tr key={s.type} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                  <th scope="row" style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{s.type}</th>
                  <td style={{ padding:'10px 12px', color:'var(--teal)', fontWeight:700, whiteSpace:'nowrap' }}>{s.price}</td>
                  <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5 }}>{s.book}</td>
                  <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5 }}>{s.gets}</td>
                  <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12.5 }}>{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          Price bands are what we have been quoted across recent seasons, not a published tariff. Ashram
          dharamshalas in particular often take a donation rather than a fixed rate, and rates at Gangotri
          move sharply with demand — a room that is ₹800 in late September can be ₹2,000 on a peak June
          weekend.
        </p>

        <h2 style={h2}>What &ldquo;basic&rdquo; actually means here</h2>
        <p style={p}>
          Most complaints we hear about Gangotri accommodation come from an expectation gap rather than a bad
          room. At 3,415m, in a settlement that is off-grid for half the year, budget accommodation means:
          no room heating beyond extra blankets, hot water in a bucket on request rather than from a tap,
          electricity that runs on generator hours in the evening, no mobile data worth the name, and a shared
          bathroom in the cheaper ashram rooms. None of that is a fault. It is what the altitude and the
          season allow.
        </p>
        <p style={p}>
          Practical consequence: bring a sleeping bag liner or your own inner sheet if you are fussy, a
          headtorch, a power bank charged before you leave Uttarkashi, and enough cash. There is no reliable
          ATM at Gangotri and card machines depend on a network that frequently is not there — the last
          dependable cash point on this road is Uttarkashi.
        </p>

        <ExpertNote variant="insider">
          If budget is the priority but Gangotri itself feels too basic, stay at Harsil or Uttarkashi and make
          Gangotri a focused day trip. Both have meaningfully more choice, and the drive up is short enough
          not to feel like a compromise. The one reason to sleep at Gangotri anyway is the morning aarti — it
          is a different experience before the day&apos;s vehicles arrive from the valley.
        </ExpertNote>

        <h2 style={h2}>Sleeping lower: Harsil and Uttarkashi</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(260px,100%),1fr))', gap:12, marginBottom:22 }}>
          {BASES.map(b => (
            <div key={b.place} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'15px 17px' }}>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)' }}>{b.place}</div>
              <div style={{ fontSize:11.5, color:'var(--teal)', fontWeight:700, fontFamily:'monospace', marginBottom:8 }}>{b.alt} · {b.dist} from Gangotri</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.7 }}>{b.why}</div>
            </div>
          ))}
        </div>
        <p style={p}>
          <Link href="/uttarkashi-hotels" style={{ color:'var(--teal)' }}>Uttarkashi</Link> and{' '}
          <Link href="/harsil-valley" style={{ color:'var(--teal)' }}>Harsil</Link> both split a long
          single-day push into a comfortable two-stage journey, and the acclimatisation is a genuine benefit
          rather than a consolation — going from Uttarkashi at 1,158m to sleeping at 3,415m in one move is
          exactly the altitude profile that produces a bad night.
        </p>

        <h2 style={h2}>When to book</h2>
        <p style={p}>
          Supply at Gangotri is fixed and demand is not, so timing matters more than it would anywhere with a
          real hotel market. For <strong>May and June</strong>, book six to eight weeks out — the GMVN rest
          house in particular goes early, and it is the one option people specifically want. For{' '}
          <strong>September and October</strong>, one to two weeks is usually enough and you will pay less.
          April and November are quiet but a chunk of the accommodation simply has not opened or has already
          closed, so confirm rather than assume. Ashram stays cannot be booked far ahead at all in most cases;
          they are arranged directly, close to the date.
        </p>

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
