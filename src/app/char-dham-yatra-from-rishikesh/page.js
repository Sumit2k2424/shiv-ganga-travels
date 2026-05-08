import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra from Rishikesh 2026 — Packages from ₹19,500',
  description: 'Char Dham Yatra from Rishikesh 2026. 24km from Haridwar. All-inclusive packages from ₹19,500/person. Direct operator, zero commission. Rishikesh pickup available.',
  keywords: [
    'char dham yatra from rishikesh', 'char dham yatra package rishikesh 2026',
    'rishikesh to char dham yatra', 'char dham tour from rishikesh',
    'rishikesh char dham package', 'chardham yatra rishikesh',
  ],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-rishikesh` },
  openGraph: {
    title: 'Char Dham Yatra from Rishikesh 2026 — Route, Distance & Packages',
    description: 'Char Dham Yatra from Rishikesh 2026. Just 24km from Haridwar. Packages from ₹19,500. Direct operator, zero commission. Rishikesh door pickup available.',
    url: `${SITE.baseUrl}/char-dham-yatra-from-rishikesh`,
    type: 'website',
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How far is Rishikesh from the Char Dham starting point?',
        acceptedAnswer: { '@type': 'Answer', text: 'Rishikesh is just 24km from Haridwar, the traditional Char Dham Yatra starting point. Most Rishikesh pilgrims are picked up from Rishikesh (Ram Jhula, Laxman Jhula, or ISBT) and travel to Haridwar first to attend Ganga Aarti, then begin the Char Dham circuit the next morning.' },
      },
      {
        '@type': 'Question',
        name: 'What is the cost of Char Dham Yatra from Rishikesh?',
        acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra from Rishikesh starts at ₹19,500 per person for a 9N/10D all-inclusive package with Shiv Ganga Travels. This includes AC vehicle, hotels, meals, VIP darshan, and guide from Haridwar onwards. Rishikesh-to-Haridwar pickup can be added at minimal cost.' },
      },
      {
        '@type': 'Question',
        name: 'What is the Char Dham route from Rishikesh?',
        acceptedAnswer: { '@type': 'Answer', text: 'The Char Dham route from Rishikesh follows the same clockwise circuit as from Haridwar: Rishikesh → Haridwar → Barkot → Yamunotri → Uttarkashi → Gangotri → Guptkashi → Kedarnath → Joshimath → Badrinath → Haridwar/Rishikesh. Total distance approximately 1,150km over 9-10 days.' },
      },
      {
        '@type': 'Question',
        name: 'Is Rishikesh a good starting point for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — Rishikesh is an excellent starting point for Char Dham Yatra. It is a major railway hub with good train connections from Delhi, Mumbai, and other cities. Many pilgrims combine Rishikesh ashram stay and Ganga Aarti with their Char Dham journey. Shiv Ganga Travels provides doorstep pickup from all Rishikesh locations.' },
      },
      {
        '@type': 'Question',
        name: 'Which train goes to Rishikesh from Delhi for Char Dham?',
        acceptedAnswer: { '@type': 'Answer', text: 'Several trains connect Delhi to Haridwar (Rishikesh station is nearby): Mussoorie Express (12h), Jan Shatabdi from Delhi Cantt (5.5h), Dehradun Express. From Haridwar railway station, a 30-min cab ride takes you to Rishikesh (₹300–400). We coordinate your pickup from either station.' },
      },
    ],
  };

  const bc = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: 'From Rishikesh', item: `${SITE.baseUrl}/char-dham-yatra-from-rishikesh` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/>
    </>
  );
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.8vw,1.5rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 14, marginTop: 32 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.85, marginBottom: 16 };

export default function Page() {
  return (
    <>
      <Schema/>

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Rishikesh · Yoga Capital of the World · Char Dham 2026
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Char Dham Yatra Package from Rishikesh 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Yamunotri · Gangotri · Kedarnath · Badrinath — from <strong style={{ color: '#FFD166' }}>₹19,500/person</strong> · Rishikesh pickup · Direct operator · Zero commission
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            {['📍 24km from Haridwar', '✅ Zero commission', '🚗 Doorstep pickup', '🙏 9N/10D circuit', '⭐ 4.9/5 · 850+ reviews'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am from Rishikesh and want to book Char Dham Yatra 2026. Please share packages and Rishikesh pickup details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              💬 Book on WhatsApp
            </a>
            <a href={`tel:${SITE.phone}`}
              style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '13px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Rishikesh</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '36px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>

        {/* Quick stats */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[
            ['Rishikesh → Haridwar', '24 km · 30 min'],
            ['Best Route', 'NH58 via Haridwar'],
            ['Yatra Duration', '9N/10D'],
            ['Package From', '₹19,500/person'],
            ['Pickup Available', 'Ram Jhula, ISBT'],
            ['Season 2026', 'Apr 19 – Nov'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          Rishikesh — the gateway to the Himalayas and the yoga capital of the world — is the most spiritually charged starting point for Char Dham Yatra. Just 24km from Haridwar, Rishikesh has excellent rail and road connectivity from across India. Many pilgrims choose to spend 1–2 nights here before their Char Dham journey, attending evening Ganga Aarti at Triveni Ghat, visiting Neelkanth Mahadev temple, or simply meditating by the river. Shiv Ganga Travels offers doorstep pickup from all major Rishikesh locations — Ram Jhula, Laxman Jhula, Tapovan, and the ISBT bus stand.
        </p>

        <h2 style={h2}>How to Reach Haridwar from Rishikesh</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {[
            { icon: '🚗', mode: 'Cab / Auto (Easiest)', time: '30–40 min', cost: '₹300–400 by cab', desc: 'The simplest option. Our AC Innova picks you up from your Rishikesh hotel or ashram and takes you directly to the yatra vehicle in Haridwar. No extra charge when part of a package.' },
            { icon: '🚌', mode: 'Shared Cab / Bus', time: '45–60 min', cost: '₹40–80 per person', desc: 'Vikas Nagar–Haridwar shared cabs run every 15 minutes from Rishikesh bus stand. UP Roadways buses also connect the two cities. Budget option for solo travellers.' },
            { icon: '🚂', mode: 'Train (Rishikesh Railway Station)', time: '45 min', cost: '₹25–40 per person', desc: 'Rishikesh station is connected to Haridwar by local DEMU trains (a few daily). Limited service — check IRCTC for timings. More reliable trains come directly from Delhi to Haridwar station.' },
          ].map(r => (
            <div key={r.mode} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                <strong style={{ fontSize: 13.5, color: 'var(--navy)' }}>{r.icon} {r.mode}</strong>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span style={{ background: 'var(--navy-light)', color: 'var(--navy)', fontSize: 12, padding: '2px 10px', borderRadius: 20, fontWeight: 600 }}>{r.time}</span>
                  <span style={{ background: 'rgba(232,146,10,0.12)', color: '#92640a', fontSize: 12, padding: '2px 10px', borderRadius: 20, fontWeight: 600 }}>{r.cost}</span>
                </div>
              </div>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={h2}>Char Dham Yatra Route from Rishikesh</h2>
        <p style={p}>
          The full Char Dham circuit from Rishikesh covers approximately 1,150km over 9 nights and 10 days, following the traditional clockwise order:
        </p>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: 'var(--navy)' }}>
                {['Day', 'Route', 'Distance', 'Overnight'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Day 1', 'Rishikesh → Haridwar → Barkot', '200 km', 'Barkot'],
                ['Day 2', 'Barkot → Janki Chatti → Yamunotri darshan', '36 km + 6 km trek', 'Barkot'],
                ['Day 3', 'Barkot → Uttarkashi', '100 km', 'Uttarkashi'],
                ['Day 4', 'Uttarkashi → Gangotri darshan', '100 km', 'Uttarkashi'],
                ['Day 5', 'Uttarkashi → Guptkashi', '190 km', 'Guptkashi'],
                ['Day 6', 'Guptkashi → Gaurikund → Kedarnath trek', '30 km + 16 km trek', 'Kedarnath / base'],
                ['Day 7', 'Kedarnath darshan → Sonprayag', 'Return trek', 'Rudraprayag'],
                ['Day 8', 'Rudraprayag → Joshimath', '170 km', 'Joshimath'],
                ['Day 9', 'Joshimath → Badrinath darshan', '46 km', 'Badrinath'],
                ['Day 10', 'Badrinath → Rishikesh (Return)', '290 km', 'Home'],
              ].map(([day, route, dist, night], i) => (
                <tr key={day} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 600, color: 'var(--navy)', fontSize: 13, whiteSpace: 'nowrap' }}>{day}</td>
                  <td style={{ padding: '9px 12px', color: '#334155', fontSize: 13 }}>{route}</td>
                  <td style={{ padding: '9px 12px', color: '#475569', fontSize: 13, whiteSpace: 'nowrap' }}>{dist}</td>
                  <td style={{ padding: '9px 12px', fontWeight: 600, color: '#1D9E75', fontSize: 13 }}>{night}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Char Dham Packages from Rishikesh 2026</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { name: 'Char Dham Classic', duration: '9N/10D', price: '₹19,500', badge: 'Most Popular', href: '/packages/char-dham-yatra-9n-10d-haridwar' },
            { name: 'Char Dham Deluxe', duration: '11N/12D', price: '₹45,000', badge: 'Best Value', href: '/packages/char-dham-yatra-11n-12d-haridwar' },
            { name: 'Senior Citizen Special', duration: '12N/13D', price: '₹27,999', badge: 'With Pony', href: '/packages/char-dham-yatra-senior-citizen-12n-13d' },
            { name: 'Char Dham Helicopter', duration: '5N/6D', price: '₹85,000', badge: 'Premium', href: '/char-dham-helicopter' },
          ].map(pkg => (
            <Link key={pkg.href} href={pkg.href}
              style={{ background: '#fff', borderRadius: 12, padding: '16px', border: '1px solid var(--border)', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ background: 'rgba(232,146,10,0.12)', color: '#92640a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, width: 'fit-content' }}>{pkg.badge}</span>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)' }}>{pkg.name}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{pkg.duration}</div>
              <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--gold)' }}>{pkg.price}<span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 400 }}> /person</span></div>
            </Link>
          ))}
        </div>

        <h2 style={h2}>Rishikesh Pickup — How It Works</h2>
        <p style={p}>
          We collect pilgrims from Rishikesh the evening before the yatra departs, or early morning on Day 1. Our AC vehicle picks you up from your hotel, ashram, or the Rishikesh ISBT (Inter-State Bus Terminal). You join the main group in Haridwar, attend the evening Ganga Aarti at Har Ki Pauri, and begin the Yatra the next morning. There is no extra charge for Rishikesh pickup when booking a complete package with us.
        </p>

        <h2 style={h2}>Why Shiv Ganga Travels — For Rishikesh Pilgrims</h2>
        <p style={p}>
          We are a Haridwar-based direct operator, not an online aggregator. Rishikesh and Haridwar are both in the same valley — we know every ashram, every pickup point, and every shortcut on the route. Since 2010, we've picked up thousands of pilgrims from Rishikesh's yoga schools, ashrams, and guesthouses. Our drivers know Rishikesh traffic patterns and coordinate departure times so you never miss a temple opening.
        </p>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Book Char Dham from Rishikesh — Free Quote</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Tell us your dates, group size, and Rishikesh pickup point. We'll send a detailed itinerary within 2 hours.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am in Rishikesh and want to book Char Dham Yatra 2026. Please share packages and Rishikesh pickup availability.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
              💬 WhatsApp — Enquire Now
            </a>
            <a href={`tel:${SITE.phone}`}
              style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              ['Char Dham from Haridwar', '/char-dham-yatra'],
              ['Char Dham from Delhi', '/char-dham-yatra-from-delhi'],
              ['Kedarnath Yatra', '/kedarnath-yatra'],
              ['Route Map 2026', '/char-dham-yatra-route-map'],
              ['Cost Calculator', '/char-dham-yatra-cost-calculator'],
              ['Registration Guide', '/blog/char-dham-yatra-registration'],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
