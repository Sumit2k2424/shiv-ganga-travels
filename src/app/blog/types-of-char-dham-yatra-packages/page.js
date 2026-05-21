import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Types of Char Dham Yatra Packages 2026 – Budget, Deluxe, Luxury & Helicopter Compared',
  description: 'All types of Char Dham Yatra packages 2026 compared: Budget (₹19,500), Deluxe (₹35,000), Premium (₹55,000), and Helicopter (₹1.8L+). What each includes and which one suits you best.',
  keywords: ['types of char dham yatra packages 2026', 'char dham yatra package types', 'budget char dham package', 'deluxe char dham package', 'char dham package comparison 2026', 'which char dham package to choose', 'char dham budget vs luxury'],
  alternates: { canonical: `${SITE.baseUrl}/blog/types-of-char-dham-yatra-packages` },
  openGraph: {
    title: 'Types of Char Dham Yatra Packages 2026 – Budget, Deluxe, Luxury & Helicopter Compared',
    description: 'Budget ₹19,500 · Deluxe ₹35,000 · Premium ₹55,000 · Helicopter ₹2.4L. What each type includes, who it suits, and how to choose. Honest guide from 15-year operator.',
    url: `${SITE.baseUrl}/blog/types-of-char-dham-yatra-packages`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Types of Char Dham Yatra Packages 2026 — Budget, Deluxe, Premium & Hel | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Types of Char Dham Yatra Packages 2026 — Budget vs Deluxe vs Helicopte',
    description: 'Budget ₹19,500 · Deluxe ₹35,000 · Premium ₹55,000 · Helicopter ₹2.4L. What each type includes, who it suits, and how to choose. Honest guide from 15-year o',
    images: [{ url: '/opengraph-image', alt: 'Types of Char Dham Yatra Packages 2026 — Budget vs Deluxe vs | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What types of Char Dham Yatra packages are available?', acceptedAnswer: { '@type': 'Answer', text: 'There are four main types of Char Dham Yatra packages: (1) Budget packages — ₹19,500–₹28,000/person, shared tempo traveller or sedan, standard guesthouses, all meals included. (2) Deluxe packages — ₹28,000–₹40,000/person, private Innova Crysta, 2-3 star hotels with hot water, buffet meals. (3) Premium packages — ₹40,000–₹65,000/person, premium SUV or Tempo Traveller, best available hotels, VIP darshan, dedicated guide. (4) Helicopter packages — ₹85,000–₹2.4 lakh/person, aerial transfers, luxury hotels, all 4 dhams in 5-6 days.' } },
      { '@type': 'Question', name: 'What is the difference between budget and deluxe Char Dham packages?', acceptedAnswer: { '@type': 'Answer', text: 'The main differences between budget and deluxe Char Dham packages are: Transport (budget uses shared tempo or basic sedan vs deluxe uses private Innova Crysta), Hotels (budget uses standard guesthouses with basic facilities vs deluxe uses 2-3 star hotels with attached bathrooms and hot water), Room sharing (budget rooms may have 3-4 per room vs deluxe guarantees twin sharing), and sometimes Meals (budget is standard dal-roti vs deluxe has proper buffet). The itinerary and dhams covered are identical.' } },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Types of Char Dham Yatra Packages', item: `${SITE.baseUrl}/blog/types-of-char-dham-yatra-packages` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} /></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function PackageTypes() {
  const tiers = [
    {
      type: 'Budget', emoji: '🎒', price: '₹19,500–₹28,000', perPerson: 'per person', duration: '9N/10D',
      color: '#0F766E', bg: 'rgba(15,118,110,0.06)',
      vehicle: 'Shared Tempo Traveller (10-12 pax) or Swift Dzire', hotel: 'Standard guesthouses, basic rooms, shared bathrooms possible', meals: 'Breakfast + dinner — basic vegetarian, fixed menu', vip: 'Standard darshan queue', guide: 'Shared guide or driver-guide',
      ideal: ['Solo pilgrims on a tight budget', 'Young groups (20s–30s) comfortable with basics', 'Repeat pilgrims who know the route', 'Those prioritizing devotion over comfort'],
      notFor: ['Senior citizens above 65', 'Anyone with joint/cardiac concerns', 'Families with children under 10'],
      honest: 'Budget packages deliver the same spiritual experience as premium — same temples, same darshan, same route. The difference is comfort during 6-8 hours of mountain driving and sleep quality. If you can physically handle basic accommodation after exhausting days, budget is fine.',
    },
    {
      type: 'Deluxe', emoji: '🏨', price: '₹28,000–₹40,000', perPerson: 'per person', duration: '9N/10D',
      color: 'var(--navy)', bg: 'rgba(15,43,91,0.05)',
      vehicle: 'Private Innova Crysta (6 pax) or Ertiga/Maruti', hotel: '2-3 star hotels, attached bathroom, hot water, AC at base cities', meals: 'Breakfast + dinner — better quality, sometimes buffet', vip: 'VIP darshan arrangement at all 4 dhams', guide: 'Dedicated Garhwali guide with group',
      ideal: ['Families with senior parents', 'Couples wanting some privacy', 'Anyone 50+ for whom comfort aids the experience', 'Groups of 4-6 travelling together'],
      notFor: ['Those needing premium/luxury (Deluxe is mid-range)', 'NRIs expecting hotel standards comparable to city 3-stars'],
      honest: 'Deluxe is the best value tier. The jump from budget to deluxe (roughly ₹8,000-10,000 extra) buys you private transport and hot-water rooms — both of which materially improve a 10-day mountain trip. This is our most recommended tier for families.',
    },
    {
      type: 'Premium', emoji: '👑', price: '₹40,000–₹65,000', perPerson: 'per person', duration: '9N/10D',
      color: '#854D0E', bg: 'rgba(133,77,14,0.06)',
      vehicle: 'Private Innova Crysta (exclusive, not shared)', hotel: 'Best available properties at each destination, scenic-view rooms', meals: 'Buffet meals, Jain options available, heater in rooms', vip: 'Guaranteed VIP darshan + Rudrabhishek/Abhishek arrangement', guide: 'Personal guide throughout + on-ground coordinator',
      ideal: ['NRI families on limited annual leave', 'Senior citizens 70+ needing full support', 'Corporate or high-net-worth pilgrim groups', 'Those who want everything handled without asking'],
      notFor: ['Budget-conscious first-timers (luxury does not make the yatra "better" spiritually)'],
      honest: 'Premium packages are about peace of mind and zero planning effort. Every stop, every room, every puja is pre-arranged. If you are traveling from the UK, US, or Singapore and have 12-14 days total, premium ensures none of those days are wasted on logistics.',
    },
    {
      type: 'Helicopter', emoji: '🚁', price: '₹85,000–₹2.4L', perPerson: 'per person', duration: '5N/6D',
      color: '#1D4ED8', bg: 'rgba(29,78,216,0.06)',
      vehicle: 'Helicopter (IRCTC-booked) + private car for transfers', hotel: 'Best available hotels at each dham (Sahastradhara departure)', meals: 'All meals included — breakfast, lunch, dinner', vip: 'VIP darshan all 4 dhams — no queue ever', guide: 'Personal guide + helicopter ground coordinator',
      ideal: ['Pilgrims 70+ who cannot trek at all', 'Working professionals with only 6-7 days', 'Those with cardiac, pulmonary, or joint conditions', 'Families wanting to complete yatra without physical strain'],
      notFor: ['Those who want the trek experience (helicopter bypasses it entirely)', 'Budget-conscious pilgrims (cost is 4-8x road packages)'],
      honest: 'Two important things: (1) Budget helicopter packages (₹85,000) are ground packages with IRCTC helicopter tickets arranged separately — you still do some road travel. Full charter packages (₹2.1-2.5L) include the helicopter ticket. Know what you are buying. (2) The helicopter skips the 16km Kedarnath trek entirely — which is both the point and the limitation. For many seniors, helicopter is the only viable option.',
    },
  ];

  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Honest Comparison · From a 15-Year Haridwar Operator
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Types of Char Dham Yatra Packages 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 640, margin: '0 auto 16px' }}>
            Budget · Deluxe · Premium · Helicopter. What each includes, who it is actually for, and the honest difference between them.
          </p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Blog</Link><span>›</span>
          <span>Types of Char Dham Packages</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> May 21, 2026 · ✍️ Shiv Ganga Travels (15 seasons, 50,000+ pilgrims)
        </div>

        <p style={p}>
          Every Char Dham Yatra package covers the same 4 temples in the same order. What differs between a ₹19,500 budget package and a ₹55,000 premium package is not the spiritual experience — it is the comfort, the vehicle, the hotel standard, and the level of hand-holding. This guide explains exactly what each tier includes, who genuinely needs it, and what the honest difference is (not the marketing version).
        </p>

        {tiers.map(tier => (
          <div key={tier.type} style={{ background: tier.bg, borderRadius: 14, padding: '20px 22px', border: `2px solid ${tier.color}`, marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: tier.color, margin: 0 }}>{tier.emoji} {tier.type} Package</h2>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800, fontSize: 20, color: tier.color }}>{tier.price}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{tier.perPerson} · {tier.duration}</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 10, marginBottom: 14 }}>
              {[['🚗 Vehicle', tier.vehicle], ['🏨 Hotels', tier.hotel], ['🍽️ Meals', tier.meals], ['🙏 Darshan', tier.vip], ['👤 Guide', tier.guide]].map(([k, v]) => (
                <div key={k} style={{ background: '#fff', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 3 }}>{k}</div>
                  <div style={{ fontSize: 13, color: '#334155', fontWeight: 500 }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
              <div style={{ background: 'rgba(29,158,117,0.08)', borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#15803D', marginBottom: 6 }}>✅ Ideal for</div>
                {tier.ideal.map(item => <div key={item} style={{ fontSize: 12.5, color: '#166534', padding: '2px 0' }}>• {item}</div>)}
              </div>
              <div style={{ background: 'rgba(163,45,45,0.06)', borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#A32D2D', marginBottom: 6 }}>❌ Not ideal for</div>
                {tier.notFor.map(item => <div key={item} style={{ fontSize: 12.5, color: '#7f1d1d', padding: '2px 0' }}>• {item}</div>)}
              </div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.04)', borderRadius: 8, padding: '10px 12px', fontSize: 13, color: '#334155', lineHeight: 1.7 }}>
              <strong>Honest take:</strong> {tier.honest}
            </div>
          </div>
        ))}

        <h2 style={h2}>Comparison at a Glance</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Feature', 'Budget', 'Deluxe', 'Premium', 'Helicopter'].map(h => (
                <th key={h} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Price/person', '₹19,500–28k', '₹28k–40k', '₹40k–65k', '₹85k–2.4L'],
                ['Duration', '9N/10D', '9N/10D', '9N/10D', '5N/6D'],
                ['Transport', 'Shared tempo', 'Private Innova', 'Private excl.', 'Heli + car'],
                ['Hotel tier', 'Standard', '2–3 star', 'Best available', 'Best available'],
                ['Hot water rooms', 'Not guaranteed', '✅ Yes', '✅ Yes', '✅ Yes'],
                ['VIP darshan', 'Standard queue', '✅ Arranged', '✅ Guaranteed', '✅ Guaranteed'],
                ['Kedarnath trek', 'Walking/pony', 'Walking/pony', 'Pony/heli option', '🚁 Helicopter'],
                ['Yamunotri trek', 'Walking/pony', 'Walking/pony', 'Pony', '🚁 Helicopter'],
                ['Best for', 'Young/solo', 'Families', 'NRIs/seniors', '70+/limited time'],
              ].map(([feat, ...vals], i) => (
                <tr key={feat} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 600, color: 'var(--navy)', fontSize: 13 }}>{feat}</td>
                  {vals.map((v, j) => (
                    <td key={j} style={{ padding: '8px 12px', color: '#475569', fontSize: 13 }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Which Package Should You Choose?</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {[
            { condition: 'You are 25–45, physically fit, travelling with friends', answer: '→ Budget or Deluxe. Save the difference for the pony at Kedarnath and the Gangnani hot spring stop.' },
            { condition: 'You are 50–65 with elderly parents', answer: '→ Deluxe. The private Innova and 3-star hot water rooms make a genuine difference across 10 days.' },
            { condition: 'You are 65+, or have heart/joint issues', answer: '→ Premium with helicopter add-on at Kedarnath, OR the full Helicopter package. Do not compromise on this.' },
            { condition: 'You are an NRI with only 12 days total including travel from UK/US', answer: '→ Premium or Helicopter. No margin for logistics failures on a short international trip.' },
            { condition: 'You want the cheapest possible option for spiritual yatra', answer: '→ Budget. The Ganga Aarti, Mahabhishek, and darshan at all 4 dhams are identical across all tiers.' },
          ].map(item => (
            <div key={item.condition} style={{ background: '#fff', borderRadius: 9, padding: '12px 14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 13.5, color: '#334155', marginBottom: 4 }}><strong>If:</strong> {item.condition}</div>
              <div style={{ fontSize: 13.5, color: 'var(--navy)', fontWeight: 600 }}>{item.answer}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>Tell Us Your Group — We Recommend the Right Package</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>WhatsApp us your group size, ages, and budget. We suggest the right tier — not the most expensive one.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want advice on which Char Dham package type suits us. Please help.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Get Package Advice</a>
            <Link href="/char-dham-yatra" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>View All Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[['Cost Breakdown', '/blog/char-dham-yatra-cost'], ['Budget vs Premium', '/blog/char-dham-yatra-budget-vs-premium'], ['Senior Citizen Guide', '/blog/senior-citizen-char-dham'], ['Helicopter Package', '/char-dham-helicopter'], ['Best Time to Visit', '/blog/best-time-char-dham']].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
