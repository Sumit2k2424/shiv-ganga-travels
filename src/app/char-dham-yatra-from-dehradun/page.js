import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra from Dehradun 2026',
  description: 'Char Dham Yatra from Dehradun 2026. Jolly Grant Airport gateway. Road & helicopter packages from ₹19,500. 54km to Haridwar.',
  keywords: [
    'char dham yatra from dehradun', 'char dham yatra package dehradun 2026',
    'dehradun to char dham yatra', 'char dham helicopter dehradun',
    'char dham tour from dehradun', 'chardham yatra dehradun',
    'jolly grant airport char dham', 'char dham yatra sahastradhara',
  ],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-dehradun` },
  openGraph: {
    title: 'Char Dham Yatra from Dehradun 2026 — Road & Helicopter Packages',
    description: 'Char Dham Yatra from Dehradun 2026. Jolly Grant Airport 54km from Haridwar. Road packages from ₹19,500. Helicopter packages from ₹85,000. Direct operator.',
    url: `${SITE.baseUrl}/char-dham-yatra-from-dehradun`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 from Dehradun — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra from Dehradun 2026',
    description: 'Char Dham Yatra from Dehradun. Closest city to Haridwar. Direct operator.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 from Dehradun — Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How far is Dehradun from Haridwar for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Dehradun city is approximately 54km from Haridwar via NH72. The drive takes 1.5–2 hours depending on traffic. Jolly Grant Airport (DED) is about 24km from Haridwar, making it even more convenient — a direct 40-minute cab ride. We offer Dehradun city and airport pickup for all packages.' },
      },
      {
        '@type': 'Question',
        name: 'Does the Char Dham Helicopter package depart from Dehradun?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — the Char Dham Yatra by Helicopter package departs from Sahastradhara Helipad, Dehradun. All 4 dhams are covered in 5N/6D with helicopter flights to Phata/Sersi (Kedarnath), Harsil (Gangotri), Kharsali (Yamunotri), and Badrinath. Price: ₹85,000 per person all-inclusive. Ground transfers within Dehradun are included.' },
      },
      {
        '@type': 'Question',
        name: 'What is the cost of Char Dham Yatra from Dehradun?',
        acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra from Dehradun starts at ₹19,500 per person (road package, 9N/10D from Haridwar with Dehradun pickup). Helicopter package starts at ₹85,000 per person (5N/6D, all 4 dhams from Sahastradhara Helipad). All packages are zero commission — you pay the operator directly.' },
      },
      {
        '@type': 'Question',
        name: 'Which flights go to Dehradun (Jolly Grant Airport) from major cities?',
        acceptedAnswer: { '@type': 'Answer', text: 'Jolly Grant Airport (DED) has daily flights from Delhi (IndiGo, Air India, SpiceJet — 40 min), and connections from Mumbai, Bangalore, Hyderabad, and Chennai. From the airport, Haridwar is just 24km (40-min cab ride). We coordinate Jolly Grant Airport pickup for all our packages.' },
      },
    ],
  };

  const bc = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: 'From Dehradun', item: `${SITE.baseUrl}/char-dham-yatra-from-dehradun` },
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
            Dehradun · Uttarakhand Capital · Char Dham 2026
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Char Dham Yatra from Dehradun 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Road packages from <strong style={{ color: '#FFD166' }}>₹19,500</strong> · Helicopter from <strong style={{ color: '#FFD166' }}>₹85,000</strong> · Airport pickup · Zero commission
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            {['✈️ Jolly Grant Airport pickup', '🚁 Helicopter departs Dehradun', '📍 54km from Haridwar', '⭐ 4.6/5 · 38 reviews'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am from Dehradun and want to book Char Dham Yatra 2026. Please share road and helicopter package details.')}`}
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
          Home<span>›</span>
          Char Dham Yatra<span>›</span>
          <span>From Dehradun</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '36px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[
            ['Dehradun → Haridwar', '54 km · 1.5 hrs'],
            ['Airport → Haridwar', '24 km · 40 min'],
            ['Yatra Duration', '9N/10D (road)'],
            ['Road Package From', '₹19,500/person'],
            ['Helicopter From', '₹85,000/person'],
            ['Season 2026', 'Apr 19 – Nov'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          Dehradun — the capital of Uttarakhand — is one of the best-positioned cities in India for Char Dham Yatra. It's just 54km from Haridwar by road and only 24km from the Jolly Grant Airport. Pilgrims flying in from Mumbai, Bangalore, Chennai, or Hyderabad land at Dehradun and are in Haridwar within 40 minutes. Dehradun is also the <strong>departure point for all Char Dham helicopter packages</strong> — flights depart from Sahastradhara Helipad, just 10km from city centre.
        </p>

        <h2 style={h2}>Two Ways to Do Char Dham from Dehradun</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            {
              type: '🚗 By Road',
              price: 'From ₹19,500/person',
              duration: '9N/10D',
              desc: 'Our AC vehicle picks you up from Dehradun city or Jolly Grant Airport and drives you to Haridwar (1.5 hrs), where the Char Dham circuit begins. Full circuit — Yamunotri, Gangotri, Kedarnath, Badrinath. Best for pilgrims who want the complete immersive experience.',
              badge: 'Most Popular',
              href: '/char-dham-yatra',
            },
            {
              type: '🚁 By Helicopter',
              price: 'From ₹85,000/person',
              duration: '5N/6D',
              desc: 'All 4 dhams in 6 days — helicopter departs from Sahastradhara Helipad, Dehradun. Visits all 4 sacred shrines with helicopter landings near each temple. VIP darshan at every stop. Ideal for seniors and those with limited time.',
              badge: 'Premium',
              href: '/char-dham-helicopter',
            },
          ].map(pkg => (
            <Link key={pkg.href} href={pkg.href}
              style={{ background: '#fff', borderRadius: 14, padding: '20px', border: '1px solid var(--border)', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--navy)' }}>{pkg.type}</span>
                <span style={{ background: 'rgba(232,146,10,0.12)', color: '#92640a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{pkg.badge}</span>
              </div>
              <div style={{ fontWeight: 800, fontSize: 18, color: '#1D9E75', marginBottom: 4 }}>{pkg.price}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 8 }}>Duration: {pkg.duration}</div>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.65, margin: 0 }}>{pkg.desc}</p>
            </Link>
          ))}
        </div>

        <h2 style={h2}>Jolly Grant Airport (DED) — Char Dham Pickup</h2>
        <p style={p}>
          Jolly Grant Airport (IATA: DED) is the closest airport to the Char Dham region — just 24km from Haridwar and 8km from Rishikesh. IndiGo, Air India, and SpiceJet operate daily flights from Delhi (40 min). Indigo also has direct connections from Mumbai and Bangalore. We provide airport pickup at Arrivals, so you can fly in and begin your yatra the same day or the next morning.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 8, marginBottom: 24 }}>
          {[
            ['Delhi → Dehradun', '40 min · ₹2,500–4,500'],
            ['Mumbai → Dehradun', '1.5 hrs · ₹4,000–8,000'],
            ['Bangalore → Dehradun', '2.5 hrs (via Delhi) · ₹5,000+'],
            ['Airport → Haridwar', '24 km · 40 min cab'],
          ].map(([route, detail]) => (
            <div key={route} style={{ background: 'var(--bg)', borderRadius: 8, padding: '10px 12px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 600, fontSize: 12.5, color: 'var(--navy)', marginBottom: 2 }}>{route}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Sahastradhara Helipad — Helicopter Departure Point</h2>
        <p style={p}>
          All government-approved Char Dham helicopter packages depart from <strong>Sahastradhara Helipad</strong>, approximately 10km from Dehradun city centre. Helicopter slots are allocated by IRCTC through the official heli.irishtc.in portal — slots sell out quickly in April and May. Shiv Ganga Travels handles all ground arrangements, hotel bookings, local transfers, and VIP darshan coordination — you only need your confirmed helicopter slot.
        </p>

        <h2 style={h2}>Packages from Dehradun 2026</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { name: 'Char Dham Classic (Road)', duration: '9N/10D', price: '₹19,500', badge: 'Most Popular', href: '/packages/char-dham-yatra-9n-10d-haridwar' },
            { name: 'Char Dham by Helicopter', duration: '5N/6D', price: '₹85,000', badge: 'From Dehradun', href: '/packages/char-dham-yatra-helicopter-5n-6d-dehradun' },
            { name: 'Senior Citizen Special', duration: '12N/13D', price: '₹27,999', badge: 'With Pony', href: '/packages/char-dham-yatra-senior-citizen-12n-13d' },
            { name: 'Kedarnath Yatra', duration: '3N/4D', price: '₹6,999', badge: 'Single Dham', href: '/kedarnath-yatra' },
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

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Book Your Char Dham from Dehradun</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Road or helicopter — tell us your dates and we'll set up everything from Jolly Grant Airport pickup to Char Dham completion.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am from Dehradun and want to book Char Dham Yatra 2026. Please share road and helicopter package details with Dehradun pickup.')}`}
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
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Related pages</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              ['Char Dham Helicopter', '/char-dham-helicopter'],
              ['Char Dham from Haridwar', '/char-dham-yatra'],
              ['Char Dham from Rishikesh', '/char-dham-yatra-from-rishikesh'],
              ['Route Map 2026', '/char-dham-yatra-route-map'],
              ['Cost Calculator', '/char-dham-yatra-cost-calculator'],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
