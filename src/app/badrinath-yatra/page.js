import Link from 'next/link';
import { PACKAGES, SITE } from '@/data/packages';

export const metadata = {
  title: 'Badrinath Yatra Package 2026',
  description: 'Badrinath Yatra package from Haridwar 2026. 2N/3D all-inclusive from ₹5,999. Direct operator, zero commission. VIP darshan, AC cab, hotel.',
  keywords: [
    'badrinath yatra package','badrinath yatra from haridwar','badrinath yatra 2026',
    'badrinath package from haridwar','badrinath dham yatra','badrinath tour package',
    'badrinath yatra cost','how to reach badrinath','badrinath yatra haridwar 2026',
  ],
  alternates: { canonical: `${SITE.baseUrl}/badrinath-yatra` },
  openGraph: {
    title: 'Badrinath Yatra Package 2026 — 2N/3D from Haridwar | ₹5,999',
    description: 'Book Badrinath Yatra from Haridwar 2026. All-inclusive 2N/3D from ₹5,999. Zero commission, direct operator. 50,000+ pilgrims served since 2010.',
    url: `${SITE.baseUrl}/badrinath-yatra`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Badrinath Yatra Package 2026 — 2N/3D from Haridwar | ₹5,999',
    description: 'Book Badrinath Yatra from Haridwar 2026. All-inclusive 2N/3D from ₹5,999. Zero commission, direct operator. 50,000+ pilgrims served since 2010.',
    images: [{ url: '/opengraph-image', alt: 'Badrinath Yatra Package 2026 — 2N/3D from Haridwar | ₹5,999 | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const pkg = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Badrinath Yatra Package 2026 from Haridwar — 2N/3D',
    description: 'Badrinath Yatra package from Haridwar. All-inclusive 2 nights 3 days. Includes AC cab, hotel near Badrinath, VIP darshan arrangement, sattvic meals. Operated directly with zero commission.',
    url: `${SITE.baseUrl}/badrinath-yatra`,
    touristType: { '@type': 'Audience', name: 'Hindu Pilgrims' },
    itinerary: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Day 1: Haridwar → Joshimath (270km)' },
        { '@type': 'ListItem', position: 2, name: 'Day 2: Joshimath → Badrinath — Darshan & Tapt Kund' },
        { '@type': 'ListItem', position: 3, name: 'Day 3: Mana Village → Return to Haridwar' },
      ],
    },
    offers: {
      '@type': 'Offer',
      price: '5999',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-23',
      validThrough: '2026-11-20',
      seller: { '@type': 'TravelAgency', name: SITE.name, url: SITE.baseUrl },
    },
    provider: {
      '@type': 'TravelAgency',
      name: SITE.name,
      url: SITE.baseUrl,
      telephone: SITE.phone,
      aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.9, reviewCount: 850, bestRating: 5 },
    },
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the cost of Badrinath Yatra from Haridwar in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Badrinath Yatra from Haridwar starts at ₹5,999 per person for a 2N/3D all-inclusive package with Shiv Ganga Travels. This includes AC cab, hotel stay, VIP darshan arrangement, and sattvic meals. No hidden charges, zero commission.' },
      },
      {
        '@type': 'Question',
        name: 'How many days are required for Badrinath Yatra from Haridwar?',
        acceptedAnswer: { '@type': 'Answer', text: 'Minimum 2 nights / 3 days are required for a comfortable Badrinath Yatra from Haridwar. Day 1: Haridwar to Joshimath (270km, ~8hrs). Day 2: Joshimath to Badrinath — darshan, Tapt Kund, Mana Village. Day 3: Return to Haridwar. Pilgrims with more time often combine this with Kedarnath for a Do Dham Yatra (5N/6D).' },
      },
      {
        '@type': 'Question',
        name: 'Is Badrinath accessible by road?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — Badrinath is fully motorable. The temple is right on the roadside at 3,133m altitude. No trekking is required, making it accessible for senior citizens and pilgrims with physical limitations. The route from Haridwar follows NH7 via Rishikesh, Devprayag, Rudraprayag, Chamoli, and Joshimath.' },
      },
      {
        '@type': 'Question',
        name: 'When does Badrinath temple open in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Badrinath temple opens on April 23, 2026 for the summer season and closes in November 2026 (exact closing date announced closer to Diwali). The best time to visit is May, June, September, and October — avoiding the monsoon months of July–August when landslide risk is high.' },
      },
      {
        '@type': 'Question',
        name: 'Can I do Badrinath and Kedarnath together?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is called the Do Dham Yatra and is our most popular 2-dham combination. The 5N/6D package from Haridwar covers Kedarnath (with 16km trek) and Badrinath, starting from ₹10,999 per person. It can be extended to include Gangotri and Yamunotri for the full Char Dham experience.' },
      },
    ],
  };

  const bc = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Badrinath Yatra', item: `${SITE.baseUrl}/badrinath-yatra` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pkg) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/>
    </>
  );
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.8vw,1.5rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 14, marginTop: 32 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.85, marginBottom: 16 };

export default function BadrinathYatraPage() {
  const badrinathPkgs = PACKAGES.filter(p =>
    p.slug?.includes('badrinath') || p.category === 'single-dham'
  ).slice(0, 4);

  return (
    <>
      <Schema/>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Lord Vishnu · Badrinath Dham · 3,133m
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Badrinath Yatra Package 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Haridwar to Badrinath — <strong style={{ color: '#FFD166' }}>2N/3D from ₹5,999/person</strong> · No trekking · All-inclusive · Zero commission
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            {['🕌 Fully motorable', '✅ VIP darshan', '🚗 AC cab included', '🍱 Sattvic meals', '⭐ 4.9/5 · 850+ reviews'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Badrinath Yatra 2026 from Haridwar. Please share packages and dates.')}`}
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

      {/* Breadcrumb */}
      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Badrinath Yatra</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '36px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026 · Season open: Apr 23 – Nov 2026</div>

        {/* Quick stats */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[
            ['Altitude', '3,133 metres'],
            ['Trekking', 'None — motorable'],
            ['Distance from HW', '320 km'],
            ['Drive Time', '8–9 hrs'],
            ['Package from', '₹5,999/person'],
            ['Temple opens', 'Apr 23, 2026'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          Badrinath — the abode of Lord Vishnu in the Garhwal Himalayas — is one of the most sacred dhams in Hinduism and the final stop on the Char Dham Yatra circuit. Set at 3,133 metres on the banks of the Alaknanda river, the Badrinath temple is fully motorable — meaning pilgrims of all ages, including those who cannot trek, can reach the temple by road. The famous <strong>Tapt Kund</strong> natural hot spring sits just below the temple, where devotees take a ritual bath before darshan.
        </p>

        <h2 style={h2}>Badrinath Yatra Itinerary — 2N/3D from Haridwar</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            {
              day: 'Day 1', title: 'Haridwar → Joshimath (270 km)',
              desc: 'Depart Haridwar early morning via Rishikesh, Devprayag (Alaknanda-Bhagirathi confluence), Rudraprayag, Chamoli. Arrive Joshimath by evening. Overnight stay. Visit Narasimha Temple if time permits.',
              tags: ['270 km drive', '8–9 hrs', 'Overnight Joshimath'],
            },
            {
              day: 'Day 2', title: 'Joshimath → Badrinath — Darshan Day',
              desc: 'Drive 46km to Badrinath (1 hr). Take dip in Tapt Kund hot spring. VIP darshan at Badrinath temple. Visit Brahma Kapal, Mana Village (last Indian village before Tibet border), Vyas Gufa, Bhim Pul, and the source of Saraswati river. Evening aarti. Overnight stay near Badrinath.',
              tags: ['Temple darshan', 'Tapt Kund bath', 'Mana Village', 'VIP darshan'],
            },
            {
              day: 'Day 3', title: 'Badrinath → Haridwar (Return)',
              desc: 'Morning prayer at the temple. Drive back to Haridwar via the same scenic route. Arrive Haridwar by evening. End of yatra.',
              tags: ['Return journey', 'Arrive evening'],
            },
          ].map(item => (
            <div key={item.day} style={{ background: '#fff', borderRadius: 12, padding: '16px 18px', border: '1px solid var(--border)', borderLeft: '4px solid var(--navy)' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                <span style={{ background: 'var(--navy)', color: '#FFD166', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{item.day}</span>
                <strong style={{ fontSize: 14, color: 'var(--navy)' }}>{item.title}</strong>
              </div>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7, margin: '0 0 10px' }}>{item.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {item.tags.map(t => (
                  <span key={t} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', fontSize: 11, fontWeight: 600, padding: '2px 10px', borderRadius: 20 }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Badrinath Yatra Packages 2026</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { name: 'Badrinath Yatra', duration: '2N/3D', price: '₹5,999', original: '₹8,000', badge: 'Most Popular', href: '/packages/badrinath-yatra-package-2n-3d-haridwar', desc: 'AC cab + hotel + meals + VIP darshan' },
            { name: 'Do Dham — Kedarnath + Badrinath', duration: '5N/6D', price: '₹10,999', original: '₹14,000', badge: 'Best Value', href: '/packages/kedarnath-badrinath-do-dham-5n-6d', desc: 'Both sacred dhams in one trip' },
            { name: 'Badrinath + Hemkund Sahib', duration: '3N/4D', price: '₹8,499', original: '₹11,000', badge: 'Combo', href: '/packages', desc: 'Badrinath + Sikh pilgrimage' },
            { name: 'Char Dham Yatra', duration: '9N/10D', price: '₹19,500', original: '₹24,000', badge: 'Full Circuit', href: '/char-dham-yatra', desc: 'All 4 dhams including Badrinath' },
          ].map(pkg => (
            <Link key={pkg.href} href={pkg.href}
              style={{ background: '#fff', borderRadius: 12, padding: '16px', border: '1px solid var(--border)', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ background: 'rgba(232,146,10,0.12)', color: '#92640a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, width: 'fit-content' }}>{pkg.badge}</span>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>{pkg.name}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{pkg.desc}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Duration: {pkg.duration}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontWeight: 800, fontSize: 17, color: '#1D9E75' }}>{pkg.price}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'line-through' }}>{pkg.original}</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 400 }}>/person</span>
              </div>
            </Link>
          ))}
        </div>

        <h2 style={h2}>What's Included in the Package</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 8, marginBottom: 28 }}>
          {[
            ['✅ Included', ['AC cab (Innova/Ertiga)', 'Hotel accommodation', 'Breakfast + dinner', 'VIP darshan arrangement', 'Experienced driver', 'All toll & parking', 'GST & taxes']],
            ['❌ Not Included', ['Flight/train to Haridwar', 'Tapt Kund entry fee (₹50)', 'Personal expenses', 'Camera fee at temple', 'Tips for driver/guide', 'Personal insurance']],
          ].map(([title, items]) => (
            <div key={title} style={{ background: '#fff', borderRadius: 12, padding: '16px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 10 }}>{title}</div>
              {items.map(item => (
                <div key={item} style={{ fontSize: 13, color: '#475569', padding: '4px 0', borderBottom: '1px solid var(--bg)' }}>{item}</div>
              ))}
            </div>
          ))}
        </div>

        <h2 style={h2}>Badrinath Temple — Essential Information</h2>
        <p style={p}>
          The <strong>Badrinath Temple</strong> is dedicated to Lord Badrinarayan (Vishnu) and is one of the Char Dhams and also part of the Chota Char Dham circuit. The temple was built in the 8th century CE and sits on the right bank of the Alaknanda river. The presiding deity, Badrivishal, is a 1-metre tall black stone image of Lord Vishnu in a meditative pose. Morning <em>Abhishek puja</em> begins at 4:30 AM and the temple remains open until 9 PM.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 10, marginBottom: 24 }}>
          {[
            ['Temple timing', 'Opens 4:30 AM · Closes 9:00 PM'],
            ['Morning Abhishek', '4:30 AM — 6:00 AM (special puja)'],
            ['Darshan time', '7:00 AM — 1:00 PM · 3:00 PM — 9:00 PM'],
            ['Tapt Kund bath', 'Before temple entry (natural hot spring)'],
            ['Dress code', 'Traditional attire preferred; no shorts'],
            ['Phone restriction', 'Photography restricted inside sanctum'],
          ].map(([k, v]) => (
            <div key={k} style={{ background: 'var(--bg)', borderRadius: 8, padding: '12px 14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 3 }}>{k}</div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--navy)' }}>{v}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Places to See Near Badrinath</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {[
            { place: 'Mana Village', dist: '3 km', desc: 'Last Indian village before the Tibet border. Visit Vyas Gufa (cave where the Mahabharata was composed) and Bhim Pul (natural rock bridge). A must-visit.' },
            { place: 'Brahma Kapal', dist: '0.5 km', desc: 'Sacred platform on the bank of Alaknanda where Hindu pilgrims perform Pind Daan (ancestral rites) for departed souls.' },
            { place: 'Tapt Kund', dist: 'At temple', desc: 'Natural sulphur hot spring where water temperature stays around 45°C. Devotees take a holy dip before darshan — believed to cure skin ailments.' },
            { place: 'Narad Kund', dist: 'Near temple', desc: 'Where the original Badrivishal idol was found by Adi Shankaracharya. Small but spiritually important.' },
            { place: 'Vasudhara Falls', dist: '9 km trek', desc: '145-metre waterfall on the Saraswati river. The walk from Mana village takes about 3 hours round trip. Only water falls on the pure of heart (legend).' },
          ].map(item => (
            <div key={item.place} style={{ background: '#fff', borderRadius: 10, padding: '13px 16px', border: '1px solid var(--border)', display: 'flex', gap: 12 }}>
              <div style={{ minWidth: 80 }}>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)' }}>{item.place}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{item.dist}</div>
              </div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Best Time to Visit Badrinath</h2>
        <p style={p}>
          The Badrinath temple opens in late April and closes in November. The best months are <strong>May</strong> and <strong>September–October</strong>. May offers clear skies, manageable crowds, and excellent weather (8–14°C). September and October bring post-monsoon visibility and fewer pilgrims. Avoid July–August — the monsoon brings heavy rainfall, frequent landslides on the Joshimath route, and disrupted travel.
        </p>

        <h2 style={h2}>How to Reach Badrinath from Haridwar</h2>
        <p style={p}>
          The route from Haridwar to Badrinath is 320km via NH7, passing through Rishikesh, Devprayag (Ganga confluence), Srinagar Garhwal, Rudraprayag, Chamoli, and Joshimath. The drive takes 8–9 hours. There is no direct train or flight to Badrinath. The nearest airport is Jolly Grant Airport, Dehradun (300km). We provide AC cab service from Haridwar, Rishikesh, and Delhi for your yatra.
        </p>

        {/* CTA */}
        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>🕌 Badrinath Yatra 2026 — Season Open Apr 23</div>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Book Your Badrinath Yatra — Direct Operator</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Zero commission. Free itinerary within 2 hours. 25% advance confirms your booking.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Badrinath Yatra 2026 package from Haridwar. Please share details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
              💬 WhatsApp — Book Now
            </a>
            <a href={`tel:${SITE.phone}`}
              style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>

        {/* Related links */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Related pages</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              ['Char Dham Yatra', '/char-dham-yatra'],
              ['Kedarnath Yatra', '/kedarnath-yatra'],
              ['Do Dham Package', '/do-dham-yatra'],
              ['Badrinath Temple Guide', '/badrinath-temple'],
              ['How to Reach Badrinath', '/how-to-reach-badrinath'],
              ['Badrinath Hotels', '/badrinath-hotels'],
              ['Char Dham Helicopter', '/char-dham-helicopter'],
            ].map(([label, href]) => (
              <Link key={href} href={href}
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
