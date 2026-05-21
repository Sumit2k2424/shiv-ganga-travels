import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Kedarnath Pony Charges 2026 – Official Rates for Pony, Palki & Pitthu Kandi',
  description: 'Official Kedarnath pony charges 2026 from Gaurikund: pony ₹5,500–7,000, palki ₹7,500–10,000, pitthu kandi ₹1,500–2,500. How to book, how to avoid overcharging, and tips for elderly pilgrims.',
  keywords: ['kedarnath pony charges 2026', 'kedarnath pony rate 2026', 'kedarnath palki charges 2026', 'kedarnath pitthu kandi rate', 'gaurikund pony booking', 'kedarnath horse charges 2026', 'kedarnath palki booking'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-pony-palki-rates-2026` },
  openGraph: {
    title: 'Kedarnath Pony Charges 2026 – Official Rates for Pony, Palki & Pitthu Kandi',
    description: 'Pony ₹5,500–7,000 one way · Palki ₹7,500–10,000 · Pitthu ₹1,500–2,500. Kedarnath 2026 official rates. How to book, fraud warnings, best time to book.',
    url: `${SITE.baseUrl}/blog/kedarnath-pony-palki-rates-2026`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Pony Charges 2026 — Palki & Pitthu Rates from Gaurikund | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Pony Charges 2026 — Official Rates: Pony, Palki, Pitthu from',
    description: 'Pony ₹5,500–7,000 one way · Palki ₹7,500–10,000 · Pitthu ₹1,500–2,500. Kedarnath 2026 official rates. How to book, fraud warnings, best time to book.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Pony Charges 2026 — Official Rates: Pony, Palki, P | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the pony charge for Kedarnath in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath pony charges in 2026 are approximately ₹5,500–7,000 one way from Gaurikund to Kedarnath (16km). Return pony charges are ₹9,000–12,000 (round trip). Rates are regulated by the Uttarakhand government and are fixed at the prepaid counter at Gaurikund. Rates from Jungle Chatti (6km into the trek) are lower — around ₹3,500–4,500 one way.' } },
      { '@type': 'Question', name: 'What is the palki/doli charge for Kedarnath in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath palki (palanquin/doli) charges in 2026 are ₹7,500–10,000 one way from Gaurikund. A round-trip palki from Gaurikund to Kedarnath and back costs ₹14,000–18,000. Palki is carried by 4 porters and is recommended for elderly pilgrims who cannot ride a pony. Book only from the government-registered counter at Gaurikund — do not book from touts on the route.' } },
      { '@type': 'Question', name: 'Can I book a pony or palki for Kedarnath in advance online?', acceptedAnswer: { '@type': 'Answer', text: 'No. As of 2026, there is NO online booking for pony, palki, or pitthu (porter) services at Kedarnath. All bookings are done offline only at the prepaid government counter at Gaurikund. Arrive at Gaurikund early — ideally before 5 AM — to book before queues form. Any website claiming to offer online pony booking for Kedarnath is either outdated or fraudulent.' } },
      { '@type': 'Question', name: 'What is pitthu or kandi service at Kedarnath?', acceptedAnswer: { '@type': 'Answer', text: 'Pitthu (also called Kandi) is a basket-carrier service at Kedarnath where a porter carries a pilgrim on their back in a wicker basket/frame. It is the most affordable alternative to pony and palki — around ₹1,500–2,500 one way depending on the starting point. It is booked directly from service providers at Gaurikund, Jungle Chatti, or along the route. Best for pilgrims who cannot walk but find the pony uncomfortable.' } },
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
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} /></>);
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
            Kedarnath 2026 · Pony · Palki · Pitthu
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Kedarnath Pony & Palki Charges 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 640, margin: '0 auto 16px' }}>
            Official government rates from Gaurikund · Pony ₹5,500–7,000 · Palki ₹7,500–10,000 · Pitthu ₹1,500–2,500 · No online booking (offline counter only)
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🗓️ Updated May 2026', '⚠️ No online booking available', '📍 Gaurikund counter only', '🚫 Zero fraud tolerance'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Kedarnath Pony Palki Rates 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> May 21, 2026 · <strong>Author:</strong> Shiv Ganga Travels, Haridwar (15 seasons operating Kedarnath packages)
        </div>

        {/* Quick answer box */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 22px', marginBottom: 28 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginBottom: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>2026 Rate Summary</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 12 }}>
            {[
              ['🐴 Pony (one way)', '₹5,500–7,000', 'Gaurikund to Kedarnath'],
              ['🪑 Palki/Doli (one way)', '₹7,500–10,000', '4 porters, palanquin'],
              ['🎒 Pitthu/Kandi (one way)', '₹1,500–2,500', 'Porter carries you in basket'],
              ['🐴 Pony (return)', '₹9,000–12,000', 'Round trip both ways'],
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
          The trek from Gaurikund to Kedarnath is 16km at altitudes between 1,980m and 3,583m. Not everyone can or should walk it — and the good news is you don't have to. Pony, palki (palanquin), and pitthu (porter-carried basket) services have been operating this route for generations. Below are the 2026 official government-regulated rates, how to book, and what every pilgrim needs to know before reaching Gaurikund.
        </p>

        <h2 style={h2}>Complete Rate Table — Kedarnath 2026 (All Services)</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
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
                ['🐴 Pony (Ghoda/Khachhar)', 'Gaurikund', '₹5,500–7,000', '₹9,000–12,000', 'Most pilgrims, all ages', 'Gaurikund prepaid counter'],
                ['🐴 Pony', 'Jungle Chatti (6km in)', '₹3,500–4,500', '₹6,000–8,000', 'Those who walk first 6km', 'Jungle Chatti counter'],
                ['🪑 Palki / Doli', 'Gaurikund', '₹7,500–10,000', '₹14,000–18,000', 'Elderly, those with joint pain', 'Gaurikund govt. counter'],
                ['🎒 Pitthu / Kandi', 'Gaurikund', '₹1,500–2,500', '₹3,000–4,500', 'Budget option, lighter pilgrims', 'Directly from provider'],
                ['🎒 Pitthu / Kandi', 'Jungle Chatti', '₹1,000–1,800', '₹2,000–3,500', 'Those who walk to Jungle Chatti', 'Available on route'],
                ['🚁 Helicopter', 'Phata/Sirsi/Guptkashi', '₹7,500–9,500', '₹7,500–9,500 (incl. return)', 'Fastest, senior citizens', 'IRCTC heliyatra.irctc.co.in'],
              ].map(([service, from, oneWay, roundTrip, bestFor, bookAt], i) => (
                <tr key={service} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)', verticalAlign: 'top' }}>
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
          Note: Rates are government-regulated but subject to slight revision before season opening. Verify at the Gaurikund counter on arrival. 2025 rates were ₹3,500–4,500 one way — 2026 rates reflect seasonal inflation.
        </p>

        <h2 style={h2}>How to Book — Step by Step</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            { step: 'Step 1 — Arrive at Gaurikund before 5 AM', detail: 'The prepaid booking counter at Gaurikund opens around 4 AM. Pilgrims start queuing well before that. If you arrive after 7 AM in peak season (May–June), pony availability gets limited and prices may creep up from unlicensed providers. Stay at Sonprayag or Rampur the night before and take the shared jeep to Gaurikund (₹50, 5km, runs from 3 AM).' },
            { step: 'Step 2 — Use the government prepaid counter only', detail: 'The official prepaid booking counter (UCDDMB — Uttarakhand Char Dham Devasthanam Management Board) is the ONLY place to book at official rates. You receive a receipt with the service provider\'s ID, contact number, and the fixed price. This is your protection against overcharging and ensures accountability if anything goes wrong during the trek.' },
            { step: 'Step 3 — Palki: book the night before at Sonprayag', detail: 'Palki (4-porter palanquin) is in higher demand than pony. If you need palki, ask at your hotel in Sonprayag or Rampur the evening before if they have a confirmed palki arrangement. Some hotels can pre-arrange through registered operators. Otherwise, arrive at the Gaurikund counter by 4 AM.' },
            { step: 'Step 4 — Pitthu: can be arranged on-route', detail: 'Pitthu (basket/kandi) carriers are available at multiple points along the trek — Gaurikund, Jungle Chatti (6km), Bhimbali (9km). If you start walking and find the trek too difficult at any point, a pitthu carrier will be available to assist. Agree the price BEFORE starting — the on-route rate should match government guidelines.' },
            { step: 'Step 5 — Carry your booking receipt throughout', detail: 'Keep the prepaid booking receipt safe. If a provider demands extra money during the trek, show the receipt. If they insist, note their ID number and complain at the Kedarnath police post. Overcharging is a serious offence with financial penalties for providers.' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid var(--border)', borderLeft: '3px solid var(--navy)' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>{item.step}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Pony vs Palki vs Pitthu — Which Should You Choose?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { title: '🐴 Pony', tag: 'Most popular', points: ['Fastest option (4–5 hrs vs 6–8 hrs walking)', 'Suitable for most fitness levels', 'More comfortable on long stretches', 'Available from multiple start points', 'Choose if: you have basic balance and are comfortable on animals'] },
            { title: '🪑 Palki / Doli', tag: 'Best for elderly', points: ['No physical effort required at all', '4 trained porters, stable and secure', 'Takes 6–7 hours (slower than pony)', 'Weight limit — typically 80–90kg', 'Choose if: you cannot ride a pony or have significant mobility limitations'] },
            { title: '🎒 Pitthu / Kandi', tag: 'Budget option', points: ['Most affordable carrier service', 'Porter carries you in a wicker basket', 'Takes 6–8 hours', 'Weight limit approximately 70–80kg', 'Choose if: budget is tight and pony/palki unavailable'] },
            { title: '🚁 Helicopter', tag: 'Fastest — 30 min', points: ['30 minutes vs 5–7 hours', '5kg luggage limit strictly enforced', 'Book via IRCTC only (not agents)', 'Need Yatra Registration Number first', 'Choose if: limited time, senior citizens, or health restrictions'] },
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

        <h2 style={h2}>⚠️ Fraud Warning — Protect Yourself</h2>
        <div style={{ background: '#FCEBEB', border: '1px solid #F09595', borderRadius: 12, padding: '16px 18px', marginBottom: 28 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: '#A32D2D', marginBottom: 10 }}>Common scams at Kedarnath — know them before you arrive</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { scam: 'No online booking exists — EVER', detail: 'Any website or app claiming online pony/palki booking for Kedarnath is fraudulent. As of 2026, ALL bookings are offline only at the Gaurikund prepaid counter. Do not pay anyone in advance.' },
              { scam: 'Touts demanding higher rates on the trail', detail: 'If someone approaches you on the trek route offering pony or palki at a price different from the receipt you received at Gaurikund, refuse. They are unlicensed operators. Only providers booked from the prepaid counter are legitimate.' },
              { scam: 'VIP pony / "faster route" upsell', detail: 'There is no "VIP pony" or "express route" to Kedarnath. The 16km route is the same for everyone. Any provider claiming a special faster path and charging extra is lying.' },
              { scam: 'Abandonment mid-route', detail: 'Rare but reported — a provider abandons a pilgrim midway claiming illness or exhaustion, demanding extra payment. If this happens, complain at the nearest police check-post on the route (there are 4 between Gaurikund and Kedarnath).' },
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

        <h2 style={h2}>Practical Tips for Pony / Palki at Kedarnath</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 10, marginBottom: 28 }}>
          {[
            { tip: 'Night travel is banned', detail: 'Uttarakhand Police prohibits pony, palki, and foot traffic between 5 PM and 5 AM on the Kedarnath route. Plan your ascent to reach Kedarnath well before 3 PM (when the temple also closes for afternoon prayers).' },
            { tip: 'Start early for less crowd on the path', detail: 'The trail is narrow in sections. Ponies going up and coming down share the same path. Starting at 5–6 AM means less congestion. Peak congestion is 8 AM–12 PM when day-trippers arrive.' },
            { tip: 'Pack light if using pony', detail: 'Most pony providers include one small bag per passenger. Your main luggage can be left at your Gaurikund or Sonprayag hotel. Take only the essentials: ID, medicines, warm layer, water.' },
            { tip: 'Download BSNL SIM before coming', detail: 'BSNL is the only network that works reliably on the Kedarnath trek route and at the temple. Jio works at Gaurikund. Airtel and Vi typically do not work above Sonprayag. If you need to contact your operator during the trek, BSNL is essential.' },
            { tip: 'Altitude acclimatisation before the trek', detail: 'Kedarnath is at 3,583m. Even if you are on a pony, your body is still at altitude. Spend at least one night in Sonprayag or Guptkashi (1,319m) before ascending. Symptoms of AMS (altitude mountain sickness) can affect anyone regardless of fitness.' },
          ].map(item => (
            <div key={item.tip} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 5 }}>💡 {item.tip}</div>
              <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.7 }}>{item.detail}</div>
            </div>
          ))}
        </div>

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
              ['Kedarnath Darshan Timings', '/blog/kedarnath-darshan-timing'],
              ['Kedarnath Registration 2026', '/blog/kedarnath-registration-2026'],
              ['Kedarnath Yatra Package', '/kedarnath-yatra'],
              ['VIP Darshan Guide', '/blog/vip-darshan-kedarnath-booking'],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
