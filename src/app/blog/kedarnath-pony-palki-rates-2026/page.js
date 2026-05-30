import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Kedarnath Pony, Palki & Horse Rates 2026 — Gaurikund Prices & Time',
  description: 'Kedarnath horse/pony charges 2026 from Gaurikund: ₹3,000–4,500 one way, takes 3–4 hrs. Palki ₹8,000–12,000, kandi ₹3,500–5,000. No online booking, no horse from Sonprayag, no heli from Gaurikund — here is how it actually works.',
  keywords: ['kedarnath pony charges 2026', 'kedarnath horse price', 'gaurikund to kedarnath by horse price', 'gaurikund to kedarnath by horse time taken', 'kedarnath horse ride time', 'sonprayag to kedarnath horse ride price', 'palki in kedarnath price', 'kedarnath palki booking online', 'gaurikund to kedarnath by helicopter price', 'kedarnath pitthu kandi rate'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-pony-palki-rates-2026` },
  openGraph: {
    title: 'Kedarnath Pony, Palki & Horse Rates 2026 — Gaurikund Prices & Time',
    description: 'Horse/pony ₹3,000–4,500 one way (3–4 hrs) · Palki ₹8,000–12,000 · Kandi ₹3,500–5,000. No online booking, no horse from Sonprayag, no heli from Gaurikund. The honest 2026 guide.',
    url: `${SITE.baseUrl}/blog/kedarnath-pony-palki-rates-2026`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Pony, Palki & Horse Rates 2026 — Gaurikund Prices, Time & Booking | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Pony, Palki & Horse Rates 2026 — Prices & Time',
    description: 'Horse ₹3,000–4,500 one way (3–4 hrs) · Palki ₹8,000–12,000 · Kandi ₹3,500–5,000. No online booking, no horse from Sonprayag. Honest 2026 guide.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Pony & Palki Rates 2026 | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the horse/pony price from Gaurikund to Kedarnath in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The official prepaid-counter rate for a horse (pony/ghoda) from Gaurikund to Kedarnath in 2026 is roughly ₹3,000–4,500 one way for the full 16km. Round trip runs about ₹6,000–9,000. A weight surcharge of around ₹200 applies for every 15kg over 75kg. In peak May–June these are the regulated rates at the Gaurikund counter — verify the exact figure on arrival, as the Rudraprayag administration revises rates each season.' } },
      { '@type': 'Question', name: 'How long does the horse ride from Gaurikund to Kedarnath take?', acceptedAnswer: { '@type': 'Answer', text: 'A horse/pony takes about 3–4 hours uphill from Gaurikund to Kedarnath and 2.5–3 hours coming down — compared to 6–8 hours on foot. Total time depends on crowd on the trail, weather, and rest stops. Start by 5–6 AM to beat congestion and reach Kedarnath before the afternoon temple closing at 3 PM.' } },
      { '@type': 'Question', name: 'What is the Sonprayag to Kedarnath horse ride price?', acceptedAnswer: { '@type': 'Answer', text: 'There is no horse from Sonprayag. The trek and all pony/palki/kandi services start at Gaurikund, not Sonprayag. From Sonprayag you take a shared jeep 5km to Gaurikund (about ₹50–60 per person) — private vehicles are not allowed beyond Sonprayag. Once at Gaurikund, the horse rate to Kedarnath is ₹3,000–4,500 one way. So "Sonprayag to Kedarnath by horse" really means the Gaurikund-to-Kedarnath ride plus the short jeep hop.' } },
      { '@type': 'Question', name: 'What is the palki/doli price at Kedarnath in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath palki (palanquin/doli) charges in 2026 are roughly ₹8,000–12,000 one way from Gaurikund, carried by 4 porters, with round trip around ₹16,000–22,000. It is the most expensive option because four people carry you the full 16km. Best for elderly pilgrims or anyone who cannot ride a pony. Book only at the government prepaid counter at Gaurikund.' } },
      { '@type': 'Question', name: 'Can I book a Kedarnath pony or palki online?', acceptedAnswer: { '@type': 'Answer', text: 'No. As of 2026 there is no online booking for pony, palki or kandi at Kedarnath. All bookings are offline at the government prepaid counters at Sonprayag and Gaurikund, or directly from registered providers on the route. Carry cash — mobile network is poor and online payment often fails. Any website claiming online pony/palki booking is fraudulent. Only the helicopter is booked online, via IRCTC.' } },
      { '@type': 'Question', name: 'What is the kandi (pitthu) rate at Kedarnath?', acceptedAnswer: { '@type': 'Answer', text: 'Kandi (also called pitthu) — where a porter carries you in a basket on their back — costs roughly ₹3,500–5,000 one way from Gaurikund in 2026, less for children or lighter pilgrims, and cheaper if you start from Jungle Chatti. It suits those who find a pony uncomfortable but cannot walk the steep sections. Book at the prepaid counter or agree the price with a registered provider before starting.' } },
      { '@type': 'Question', name: 'What is the Gaurikund to Kedarnath helicopter price?', acceptedAnswer: { '@type': 'Answer', text: 'Helicopters do not fly from Gaurikund. Kedarnath choppers operate from Phata, Sersi and Guptkashi helipads and land near the temple, costing about ₹6,000–9,999 round trip per person depending on the helipad. From Gaurikund itself there is no helicopter — your only options there are walking, pony, palki or kandi. Book the helicopter only through the official IRCTC heliyatra portal.' } },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Kedarnath Pony Palki Rates 2026', item: `${SITE.baseUrl}/blog/kedarnath-pony-palki-rates-2026` },
    ],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Kedarnath Pony, Palki & Horse Rates 2026 — Gaurikund Prices & Time',
    author: { '@type': 'Person', name: 'Sumit Mishra', jobTitle: 'Operations Manager, Shiv Ganga Travels' },
    publisher: { '@type': 'Organization', name: 'Shiv Ganga Travels', url: SITE.baseUrl },
    datePublished: '2026-03-05', dateModified: '2026-05-28',
    mainEntityOfPage: `${SITE.baseUrl}/blog/kedarnath-pony-palki-rates-2026`,
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };


export default function KedarnathPonyRates() {
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Kedarnath 2026 · Horse · Pony · Palki · Kandi
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Kedarnath Pony, Palki & Horse Rates 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 660, margin: '0 auto 16px' }}>
            Official Gaurikund rates · Horse ₹3,000–4,500 one way (3–4 hrs) · Palki ₹8,000–12,000 · Kandi ₹3,500–5,000 · Offline booking only · No horse from Sonprayag · No heli from Gaurikund
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🗓️ Updated May 2026', '⚠️ No online booking', '📍 Gaurikund counter only', '🚫 Zero fraud tolerance'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link><span>›</span>
          <span>Kedarnath Pony Palki Rates 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> May 28, 2026 · 15 seasons running Kedarnath packages from Haridwar
        </div>

        {/* Direct answer first — GEO */}
        <p style={{ ...p, fontSize: 16.5, color: '#1e293b', background: '#F8FAFC', borderLeft: '4px solid var(--gold)', padding: '14px 18px', borderRadius: '0 10px 10px 0' }}>
          Short answer: a <strong>horse (pony) from Gaurikund to Kedarnath costs about ₹3,000–4,500 one way</strong> and takes 3–4 hours. A palki runs ₹8,000–12,000, a kandi basket ₹3,500–5,000. There's <strong>no online booking</strong> — you book at the government prepaid counter at Gaurikund. Two things people get wrong: horses don't start from Sonprayag (you jeep 5km to Gaurikund first), and helicopters don't fly from Gaurikund (they go from Phata, Sersi or Guptkashi). Everything below is the 2026 detail.
        </p>

        {/* Quick answer box */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 22px', marginBottom: 28 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginBottom: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>2026 Rate Summary (Gaurikund → Kedarnath)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 12 }}>
            {[
              ['🐴 Horse / Pony (one way)', '₹3,000–4,500', '3–4 hrs · 16km'],
              ['🐴 Horse / Pony (return)', '₹6,000–9,000', 'Up + down'],
              ['🪑 Palki / Doli (one way)', '₹8,000–12,000', '4 porters · 6–7 hrs'],
              ['🎒 Kandi / Pitthu (one way)', '₹3,500–5,000', 'Porter + basket'],
              ['📍 Booking', 'Offline only', 'Gaurikund prepaid counter'],
              ['⏰ Best time to book', '4:30–5:30 AM', 'Before queues form'],
            ].map(([k, v, sub]) => (
              <div key={k}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#FFD166' }}>{v}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>

        <p style={p}>
          The trek from Gaurikund to Kedarnath is 16km, climbing from about 1,980m to 3,583m. Plenty of pilgrims can't or shouldn't walk it — and they don't have to. Horses (called pony, ghoda, or khachar locally), palki (a 4-porter palanquin), and kandi (a porter carrying you in a basket) have worked this route for generations. The rates are set and monitored by the Rudraprayag district administration, so the price is the same whether you're 25 or 75. Here's what each costs in 2026, how long it takes, and the booking traps to avoid.
        </p>

        <h2 style={h2}>Complete Rate Table — Kedarnath 2026 (All Services)</h2>
        <div style={{ overflowX: 'auto', marginBottom: 16 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: 'var(--navy)' }}>
                {['Service', 'From', 'One-way rate', 'Round-trip rate', 'Best for', 'Book at'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['🐴 Horse / Pony (Ghoda)', 'Gaurikund', '₹3,000–4,500', '₹6,000–9,000', 'Most pilgrims, all ages', 'Gaurikund prepaid counter'],
                ['🐴 Horse / Pony', 'Jungle Chatti (6km in)', '₹2,200–3,200', '₹4,000–6,000', 'Those who walk first 6km', 'Jungle Chatti counter'],
                ['🪑 Palki / Doli', 'Gaurikund', '₹8,000–12,000', '₹16,000–22,000', 'Elderly, severe joint pain', 'Gaurikund govt. counter'],
                ['🎒 Kandi / Pitthu (adult)', 'Gaurikund', '₹3,500–5,000', '₹7,000–9,500', 'Can\'t ride pony, lighter pilgrims', 'Counter / registered provider'],
                ['🎒 Kandi / Pitthu (child)', 'Gaurikund', '₹2,000–3,000', '₹4,000–5,500', 'Children, very light adults', 'Counter / registered provider'],
                ['🚁 Helicopter', 'Phata/Sersi/Guptkashi', '—', '₹6,000–9,999', 'Fastest, senior citizens', 'IRCTC heliyatra portal'],
              ].map(([service, from, oneWay, roundTrip, bestFor, bookAt], i) => (
                <tr key={service + from} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)', verticalAlign: 'top' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 600, color: 'var(--navy)' }}>{service}</td>
                  <td style={{ padding: '9px 12px', color: '#475569', fontSize: 13 }}>{from}</td>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: '#1D9E75' }}>{oneWay}</td>
                  <td style={{ padding: '9px 12px', color: '#475569' }}>{roundTrip}</td>
                  <td style={{ padding: '9px 12px', color: '#475569', fontSize: 13 }}>{bestFor}</td>
                  <td style={{ padding: '9px 12px', color: '#64748b', fontSize: 12 }}>{bookAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24, fontStyle: 'italic' }}>
          Note: These are the government-regulated prepaid-counter rates and are revised before each season by the Rudraprayag administration. A weight surcharge of about ₹200 applies for every 15kg above 75kg (up to ~90kg). Verify the exact figure at the Gaurikund counter on arrival — peak-season effective prices can run at the top of each range.
        </p>

        {/* ── PAA gap: how long does it take ── */}
        <h2 style={h2}>How Long Does Each Option Take?</h2>
        <p style={p}>This is the question that decides your day. The horse is the quickest of the assisted options; palki and kandi are slower because humans carry the load. Plan to reach Kedarnath well before the temple's 3 PM afternoon closing.</p>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: 'var(--teal)' }}>
                {['Mode', 'Time uphill', 'Time downhill', 'Notes'].map(h => (
                  <th key={h} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['🚶 On foot', '6–8 hrs', '4–5 hrs', 'Depends heavily on fitness and breaks'],
                ['🐴 Horse / Pony', '3–4 hrs', '2.5–3 hrs', 'Fastest assisted option'],
                ['🪑 Palki / Doli', '6–7 hrs', '4–5 hrs', 'Porters rest often; slower but effortless'],
                ['🎒 Kandi / Pitthu', '6–8 hrs', '4–6 hrs', 'Pace of a single porter carrying you'],
                ['🚁 Helicopter', '8–10 min', '8–10 min', 'From Phata/Sersi/Guptkashi, not Gaurikund'],
              ].map(([mode, up, down, notes], i) => (
                <tr key={mode} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: 'var(--navy)', whiteSpace: 'nowrap' }}>{mode}</td>
                  <td style={{ padding: '9px 12px', color: '#1D9E75', fontWeight: 600 }}>{up}</td>
                  <td style={{ padding: '9px 12px', color: '#334155' }}>{down}</td>
                  <td style={{ padding: '9px 12px', color: '#64748b', fontSize: 13 }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── PAA gap: Sonprayag clarification ── */}
        <h2 style={h2}>"Sonprayag to Kedarnath by Horse" — Read This First</h2>
        <div style={{ background: '#EFF6FF', border: '1px solid #93C5FD', borderRadius: 12, padding: '14px 16px', marginBottom: 24 }}>
          <p style={{ fontSize: 14, color: '#1E3A8A', lineHeight: 1.8, margin: 0 }}>
            A lot of people search for the Sonprayag-to-Kedarnath horse price, so let's clear it up: <strong>there are no horses from Sonprayag.</strong> Private vehicles aren't allowed past Sonprayag, and the trek officially begins at <strong>Gaurikund</strong>, 5km further up. You cover that 5km by <strong>shared jeep (about ₹50–60 per person)</strong> — they run from around 3 AM. Horses, palki and kandi all start at Gaurikund. So "Sonprayag to Kedarnath by horse" = the short jeep to Gaurikund, then the ₹3,000–4,500 horse ride to the temple. Budget for both.
          </p>
        </div>

        <h2 style={h2}>How to Book — Step by Step</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            { step: 'Step 1 — Reach Gaurikund before 5 AM', detail: 'The prepaid counter opens around 4 AM and pilgrims queue before that. Arrive after 7 AM in peak season (May–June) and pony availability tightens. Stay at Sonprayag or Rampur the night before and take the shared jeep (5km, ₹50–60) up to Gaurikund.' },
            { step: 'Step 2 — Use the government prepaid counter only', detail: 'The official prepaid counters at Sonprayag and Gaurikund are the only places to book at fixed rates. You get a computerised slip showing the horse number and the operator\'s ID — your protection against overcharging and your record if anything goes wrong on the trail.' },
            { step: 'Step 3 — Carry cash, keep your registration ready', detail: 'Network is patchy and online payment often fails, so carry enough cash. Kedarnath Yatra Registration is required to book — keep your registration number handy at the counter.' },
            { step: 'Step 4 — Palki is limited, ask the evening before', detail: 'Palki demand outstrips supply. If you need it, ask your Sonprayag/Rampur hotel the previous evening whether they can pre-arrange through a registered operator, then confirm at the Gaurikund counter by 4 AM.' },
            { step: 'Step 5 — Agree on-route kandi prices before starting', detail: 'Kandi carriers are available at Gaurikund, Jungle Chatti and Bhimbali. If the walk gets too hard midway, you can hire one on the spot — but fix the price first and check it matches the government rate.' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid var(--border)', borderLeft: '3px solid var(--navy)' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>{item.step}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        {/* ── PAA gap: online booking ── */}
        <h2 style={h2}>Can You Book Kedarnath Pony or Palki Online?</h2>
        <p style={p}>
          No — and this matters because the scams target exactly this search. As of 2026 there is <strong>no official online booking</strong> for pony, palki or kandi at Kedarnath. Every booking happens offline at the prepaid counters (Sonprayag and Gaurikund) or directly with a registered provider on the route. The <strong>only</strong> Kedarnath service you book online is the helicopter, through the IRCTC heliyatra portal. If a website or WhatsApp number offers "online palki booking" and asks for advance payment, it's fraudulent. Don't pay anyone before you're standing at the counter with a slip in hand.
        </p>

        <h2 style={h2}>Horse vs Palki vs Kandi vs Helicopter — Which to Choose</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { title: '🐴 Horse / Pony', tag: 'Most popular', points: ['Quickest assisted option (3–4 hrs up)', 'Suits most fitness levels', 'Steadier on the long middle stretch', 'Available from Gaurikund and Jungle Chatti', 'Pick if: you have basic balance and are okay on animals'] },
            { title: '🪑 Palki / Doli', tag: 'Best for elderly', points: ['Zero physical effort — you\'re carried', '4 trained porters, stable and secure', 'Slower: 6–7 hours up', 'Weight limit roughly 80–90kg', 'Pick if: you can\'t ride a pony or have major mobility limits'] },
            { title: '🎒 Kandi / Pitthu', tag: 'Mid-budget', points: ['Porter carries you in a back basket', 'Good when a pony feels unsafe', 'Takes 6–8 hours', 'Weight limit around 70–80kg', 'Pick if: pony is uncomfortable but you can\'t walk'] },
            { title: '🚁 Helicopter', tag: 'Fastest — 10 min', points: ['8–10 minutes vs hours on the trail', '5kg luggage limit, strictly enforced', 'From Phata/Sersi/Guptkashi (not Gaurikund)', 'Needs Yatra Registration; book via IRCTC', 'Pick if: short on time, senior, or health limits'] },
          ].map(item => (
            <div key={item.title} style={{ background: '#fff', borderRadius: 12, padding: '14px 16px', border: '1px solid var(--border)', borderTop: '3px solid var(--navy)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--navy)' }}>{item.title}</div>
                <span style={{ fontSize: 10.5, background: 'rgba(232,146,10,0.12)', color: '#7B3F00', padding: '2px 8px', borderRadius: 20, fontWeight: 700 }}>{item.tag}</span>
              </div>
              {item.points.map(pt => (
                <div key={pt} style={{ fontSize: 13, color: '#475569', padding: '3px 0', display: 'flex', gap: 6, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span style={{ color: '#1D9E75', flexShrink: 0 }}>✓</span>{pt}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="kedarnath" />

        {/* ── PAA gap: helicopter from Gaurikund clarification ── */}
        <h2 style={h2}>"Gaurikund to Kedarnath by Helicopter" — There Isn't One</h2>
        <p style={p}>
          Another common mix-up. There is <strong>no helicopter from Gaurikund</strong>. Kedarnath choppers fly from three helipads further down the valley — <strong>Phata, Sersi and Guptkashi</strong> — and land near the temple, skipping the trek entirely. Round-trip fares run about ₹6,000–9,999 per person depending on the helipad (Phata is usually cheapest). If you're already at Gaurikund, your only ways up are foot, pony, palki or kandi. To fly, you'd book from one of those helipads instead — see our <Link href="/blog/kedarnath-helicopter-booking" style={{ color: 'var(--teal)', fontWeight: 600 }}>Kedarnath helicopter booking guide</Link> for the IRCTC process and current fares.
        </p>

        <h2 style={h2}>⚠️ Fraud Warning — Protect Yourself</h2>
        <div style={{ background: '#FCEBEB', border: '1px solid #F09595', borderRadius: 12, padding: '16px 18px', marginBottom: 28 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: '#A32D2D', marginBottom: 10 }}>Common scams at Kedarnath — know them before you arrive</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { scam: 'No online booking exists — ever', detail: 'Any site or app claiming online pony/palki/kandi booking is fraudulent. All bookings are offline at the Gaurikund/Sonprayag prepaid counters. Don\'t pay in advance.' },
              { scam: 'Touts quoting higher rates on the trail', detail: 'If someone on the route offers a price different from your counter slip, refuse — they\'re unregistered. Only providers booked from the prepaid counter are legitimate.' },
              { scam: '"VIP pony" or "faster route" upsell', detail: 'There is no VIP pony or express path. The 16km route is the same for everyone. Anyone charging extra for a "special faster way" is lying.' },
              { scam: 'Abandonment mid-route', detail: 'Rare but reported — a provider drops a pilgrim midway demanding extra money. If it happens, complain at the nearest police check-post (there are several between Gaurikund and Kedarnath).' },
            ].map(item => (
              <div key={item.scam} style={{ borderBottom: '1px solid rgba(163,45,45,0.1)', paddingBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#A32D2D', marginBottom: 3 }}>❌ {item.scam}</div>
                <div style={{ fontSize: 13, color: '#7f1d1d', lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, fontSize: 13, color: '#A32D2D', fontWeight: 600 }}>
            📞 Complaints: DM Rudraprayag helpline — 01364-233626 · Kedarnath police post — available on route
          </div>
        </div>

        <h2 style={h2}>Practical Tips for Horse / Palki at Kedarnath</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 10, marginBottom: 28 }}>
          {[
            { tip: 'Night travel is banned', detail: 'Pony, palki and foot traffic are stopped between 5 PM and 5 AM on the route. Plan your ascent to reach Kedarnath before 3 PM, when the temple also closes for afternoon prayers.' },
            { tip: 'Start early for a clearer trail', detail: 'The path is narrow in places and ponies going up share it with those coming down. Leaving at 5–6 AM means less congestion; the crush is 8 AM–noon when day-trippers arrive.' },
            { tip: 'Pack light if riding', detail: 'Leave your main luggage at the Gaurikund or Sonprayag hotel. Carry only ID, medicines, a warm layer and water — a heavy bag also pushes you over the weight surcharge.' },
            { tip: 'BSNL is the only reliable network', detail: 'BSNL works on the trek and at the temple; Jio works around Gaurikund; Airtel and Vi usually don\'t go above Sonprayag. Keep a BSNL SIM if you need to stay reachable.' },
            { tip: 'Acclimatise before you climb', detail: 'Kedarnath sits at 3,583m. Even on a pony you\'re at altitude. Spend a night at Sonprayag or Guptkashi first — AMS can hit anyone, fit or not.' },
          ].map(item => (
            <div key={item.tip} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 5 }}>💡 {item.tip}</div>
              <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.7 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Frequently Asked Questions</h2>
        {[
          ['What is the Kedarnath horse price in 2026?', 'About ₹3,000–4,500 one way from Gaurikund for the full 16km, with round trip around ₹6,000–9,000. A weight surcharge of roughly ₹200 per 15kg over 75kg applies. These are the regulated prepaid-counter rates — confirm at Gaurikund on arrival.'],
          ['How long does the Gaurikund to Kedarnath horse ride take?', 'Around 3–4 hours uphill and 2.5–3 hours down, versus 6–8 hours walking. Crowd on the trail and weather can stretch it, so start by 5–6 AM.'],
          ['Is there a horse from Sonprayag to Kedarnath?', 'No. The trek and all pony/palki/kandi services begin at Gaurikund. From Sonprayag you take a shared jeep 5km to Gaurikund (₹50–60), then the horse from there.'],
          ['Can I book a Kedarnath palki online?', 'No. There is no online palki booking. Book at the government prepaid counters at Sonprayag or Gaurikund, or from a registered provider on the route. Only the helicopter is booked online, via IRCTC.'],
          ['What is the cheapest way up for someone who can\'t walk?', 'The kandi (pitthu) basket, roughly ₹3,500–5,000 one way for an adult and less for a child — cheaper than both pony and palki, though slower.'],
          ['Is the helicopter available from Gaurikund?', 'No. Helicopters fly from Phata, Sersi and Guptkashi, not Gaurikund, at about ₹6,000–9,999 round trip. From Gaurikund your options are foot, pony, palki or kandi.'],
        ].map(([q, a]) => (
          <div key={q} style={{ borderBottom: '1px solid var(--border)', padding: '14px 0' }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)', marginBottom: 6 }}>{q}</div>
            <div style={{ fontSize: 14, color: '#475569', lineHeight: 1.8 }}>{a}</div>
          </div>
        ))}

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>Planning Your Kedarnath Yatra?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Our Kedarnath packages include pony coordination, VIP darshan arrangement, Gaurikund hotel, and 24hr WhatsApp support throughout the trek.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026. Please share package details including pony/palki options.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
              💬 WhatsApp Us
            </a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              ['Kedarnath Trek Guide', '/blog/kedarnath-trek-guide'],
              ['Pony vs Helicopter', '/blog/kedarnath-pony-vs-helicopter'],
              ['Kedarnath Helicopter Booking', '/blog/kedarnath-helicopter-booking'],
              ['Kedarnath Darshan Timings', '/blog/kedarnath-darshan-timing'],
              ['Kedarnath Registration 2026', '/blog/kedarnath-registration-2026'],
              ['VIP Darshan Guide', '/blog/vip-darshan-kedarnath-booking'],
              ['Kedarnath Yatra Package', '/kedarnath-yatra'],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="kedarnath" />
</article>
    </>
  );
}
