import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Haridwar Tour Package 2026 — Haridwar Tour from ₹2,999 | Shiv Ganga',
  description: 'Haridwar tour packages 2026 from ₹2,999. Har Ki Pauri, Ganga Aarti, Mansa Devi, Chandi Devi. Haridwar + Rishikesh combo. Direct operator, zero commission.',
  keywords: [
    'haridwar tour package','haridwar tour and travels','haridwar tour','haridwar package',
    'haridwar trip package','haridwar rishikesh tour package','haridwar tour package from delhi',
    'haridwar rishikesh tour package from delhi','haridwar rishikesh mussoorie tour package',
    'travel agency in haridwar','travel agency in haridwar for chardham yatra',
    'best travel agency in haridwar for chardham yatra','uttarakhand travel agency',
    'haridwar tour and travels haridwar','tours and travels haridwar',
  ],
  alternates: { canonical: `${SITE.baseUrl}/haridwar-tour-packages` },
  openGraph: {
    title: 'Haridwar Tour Package 2026 — Ganga Aarti, Har Ki Pauri | From ₹2,999',
    description: 'Haridwar tour packages from ₹2,999. Har Ki Pauri Ganga Aarti, Mansa Devi, Chandi Devi, Rishikesh combo. Shiv Ganga Travels — Haridwar\'s trusted direct operator since 2010.',
    url: `${SITE.baseUrl}/haridwar-tour-packages`,
    type: 'website',
  },
};

function Schema() {
  const org = {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    name: 'Shiv Ganga Travels',
    description: 'Haridwar-based travel agency and tour operator. Specialising in Char Dham Yatra, Haridwar tour packages, Rishikesh tours, and Uttarakhand pilgrimages since 2010.',
    url: SITE.baseUrl,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala',
      addressLocality: 'Haridwar', addressRegion: 'Uttarakhand', postalCode: '249410', addressCountry: 'IN',
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.9, reviewCount: 850, bestRating: 5 },
    priceRange: '₹₹',
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question', name: 'What is the cost of a Haridwar tour package?',
        acceptedAnswer: { '@type': 'Answer', text: 'Haridwar tour packages start at ₹2,999 per person for a 1N/2D trip including hotel, Har Ki Pauri Ganga Aarti, Mansa Devi temple by ropeway, and Chandi Devi visit. A 2N/3D Haridwar + Rishikesh combo costs ₹5,999. Three-night packages combining Haridwar, Rishikesh, and Mussoorie start at ₹10,999. All prices are from Shiv Ganga Travels, Haridwar\'s direct operator.' },
      },
      {
        '@type': 'Question', name: 'What is the best travel agency in Haridwar for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Shiv Ganga Travels is one of Haridwar\'s most trusted Char Dham Yatra operators, founded in 2010 by a retired Indian Army officer. With 50,000+ pilgrims served, a 4.9/5 Google rating from 850+ reviews, and Uttarakhand Tourism registration, we are a direct operator with zero commission. Located at Saptrishi Road, Bhupatwala, Haridwar. Contact: +91-7017082807.' },
      },
      {
        '@type': 'Question', name: 'How many days are needed for a Haridwar trip?',
        acceptedAnswer: { '@type': 'Answer', text: 'One full day is enough to cover Haridwar\'s main attractions: Har Ki Pauri, Mansa Devi temple, Chandi Devi temple, and the evening Ganga Aarti. For a relaxed visit including Rishikesh (24km away), plan 2 nights/3 days. Most pilgrims combine Haridwar with Rishikesh as a pre-Char Dham spiritual stay before the main yatra.' },
      },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Haridwar Tour Packages 2026', item: `${SITE.baseUrl}/haridwar-tour-packages` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.6rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 36 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function HaridwarTourPackages() {
  return (
    <>
      <Schema/>

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Haridwar · Gateway to Char Dham · Ganga Aarti Capital
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Haridwar Tour Packages 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Packages from <strong style={{ color: '#FFD166' }}>₹2,999/person</strong> · Har Ki Pauri · Ganga Aarti · Mansa Devi · Haridwar + Rishikesh combo
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
            {['🙏 Har Ki Pauri','🔥 Ganga Aarti','⛡ Mansa Devi ropeway','🌊 Sacred Ganga dip','⭐ 4.9/5 · 850+ reviews'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a Haridwar tour package 2026. Please share details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              💬 Book Now
            </a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '13px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <span>Haridwar Tour Packages 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['From Delhi','210 km · 4–5 hrs'],['From Dehradun','54 km · 1.5 hrs'],['Packages from','₹2,999/person'],['Ganga Aarti','6:30–7:00 PM daily'],['Altitude','249 metres'],['Best combo','+ Rishikesh 24km']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}>
          <strong>Haridwar tour packages start at ₹2,999/person</strong> for a 1N/2D visit covering Har Ki Pauri, the evening Ganga Aarti, Mansa Devi temple (ropeway), and Chandi Devi. The most popular option is the Haridwar + Rishikesh 2N/3D combo at ₹5,999 per person, which many pilgrims book as a spiritual pre-trip before their Char Dham Yatra. Haridwar is 210km from Delhi and serves as the traditional starting point for all four Char Dhams — Kedarnath, Badrinath, Gangotri, and Yamunotri.
        </p>
        <p style={p}>
          As a travel agency based in Haridwar since 2010, Shiv Ganga Travels knows every ghat, every temple, and every shortcut in the city. We are not a Delhi-based aggregator subcontracting to local operators — we are the local operator. This means better coordination, honest pricing, and no markup.
        </p>

        <h2 style={h2}>Haridwar Tour Packages 2026</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            {
              name: 'Haridwar Darshan',
              duration: '1N/2D',
              price: '₹2,999',
              badge: 'Budget',
              includes: ['Har Ki Pauri Ganga Aarti', 'Mansa Devi by ropeway', 'Chandi Devi temple', 'Ganga snan (holy dip)', 'Hotel + breakfast'],
            },
            {
              name: 'Haridwar + Rishikesh',
              duration: '2N/3D',
              price: '₹5,999',
              badge: 'Most Popular',
              includes: ['Full Haridwar darshan', 'Ram Jhula & Laxman Jhula', 'Triveni Ghat Aarti', 'Neelkanth Mahadev', 'AC cab + hotels'],
            },
            {
              name: 'Haridwar + Rishikesh + Mussoorie',
              duration: '4N/5D',
              price: '₹10,999',
              badge: 'Best Value',
              includes: ['Both holy cities', 'Mall Road Mussoorie', 'Kempty Falls', 'Lal Tibba viewpoint', 'AC Innova throughout'],
            },
            {
              name: 'Haridwar Pre-Char Dham Stay',
              duration: '1N/2D add-on',
              price: '₹1,999',
              badge: 'Char Dham Add-on',
              includes: ['Night before yatra', 'Har Ki Pauri Aarti', 'Ganga snan', 'Early morning departure', 'Included with all CDY packages'],
            },
          ].map(pkg => (
            <div key={pkg.name} style={{ background: '#fff', borderRadius: 14, padding: '16px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ background: 'rgba(232,146,10,0.12)', color: '#92640a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, width: 'fit-content' }}>{pkg.badge}</span>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>{pkg.name}</div>
              <div style={{ fontWeight: 800, fontSize: 18, color: '#1D9E75' }}>{pkg.price}<span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 400 }}> /person · {pkg.duration}</span></div>
              <div style={{ borderTop: '1px solid var(--bg)', paddingTop: 8 }}>
                {pkg.includes.map(item => (
                  <div key={item} style={{ fontSize: 12.5, color: '#475569', padding: '3px 0', display: 'flex', gap: 6 }}>
                    <span style={{ color: '#1D9E75', flexShrink: 0 }}>✓</span>{item}
                  </div>
                ))}
              </div>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I want to book ${pkg.name} Haridwar package. Please share availability.`)}`}
                target="_blank" rel="nofollow noopener noreferrer"
                style={{ background: '#25D366', color: '#fff', padding: '9px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none', textAlign: 'center', marginTop: 4 }}>
                💬 Book This Package
              </a>
            </div>
          ))}
        </div>

        <h2 style={h2}>Must-Visit Places in Haridwar</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            { place: 'Har Ki Pauri', note: 'Main ghat', desc: 'The most sacred ghat in Haridwar — literally "feet of Lord Hari (Vishnu)." The evening Ganga Aarti at Har Ki Pauri (6:30–7 PM) is one of India\'s most powerful spiritual experiences: fire, incense, drums, and thousands of floating earthen lamps on the river. The main Brahma Kund here is where pilgrims take the ritual holy dip before Char Dham Yatra.' },
            { place: 'Mansa Devi Temple', note: 'Ropeway + 3km trek', desc: 'Temple of Goddess Mansa Devi on Bilwa Parvat hill. Accessible by ropeway (₹130 return) or 3km trek. One of the Shakti Peethas. The temple is tied by thousands of sacred threads (manat ke dhage) where pilgrims tie a thread while making a wish and return to untie it when fulfilled. Views of the entire Haridwar valley from the top.' },
            { place: 'Chandi Devi Temple', note: 'Ropeway 3km away', desc: 'Located on Neel Parvat, the temple of Goddess Chandi Devi is reached by ropeway (₹155 return) from Chandi Ghat. One of the Siddha Peethas of Uttarakhand — considered especially powerful for wish fulfillment. Best visited after Mansa Devi as part of a full day temple circuit.' },
            { place: 'Maya Devi Temple', note: 'At the city centre', desc: 'One of the oldest temples in Haridwar, dating back over 1,000 years. The Maya Devi temple is believed to mark the spot where the heart and navel of Goddess Sati fell in the Daksha Yagna legend. A Shakti Peetha with no commercial activity — small, quiet, and profoundly sacred.' },
            { place: 'Daksha Mahadev Temple', note: 'Kankhal, 4km from Har Ki Pauri', desc: 'Temple marking the site of King Daksha\'s yagna (sacrificial fire) where Goddess Sati immolated herself — the origin story of the 51 Shakti Peethas. In Kankhal, a quieter neighbourhood 4km from the main ghat area. Often skipped by tourists, never crowded, deeply significant in Hindu mythology.' },
          ].map(item => (
            <div key={item.place} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)' }}>{item.place}</div>
                <div style={{ fontSize: 11.5, color: '#E8920A', fontWeight: 600, marginTop: 2 }}>{item.note}</div>
              </div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Haridwar Ganga Aarti — Timings & What to Expect</h2>
        <p style={p}>
          The Ganga Aarti at <strong>Har Ki Pauri</strong> happens every evening, year-round, regardless of weather. In summer (April–September), the aarti begins around <strong>7:00–7:30 PM</strong>. In winter (October–March), it moves earlier to <strong>6:00–6:30 PM</strong>. The ceremony lasts 30–40 minutes. Arrive at least 45 minutes early to get a good spot on the main ghat steps. The ritual involves 7 priests performing simultaneous fire worship (deepa aarti) with large brass lamps, conch shells, and drums as the smoke and light reflects off the river. It is genuinely one of the most visually and spiritually overwhelming experiences in India — every pilgrim who has seen it describes it as the defining memory of their Haridwar visit.
        </p>

        <h2 style={h2}>About Shiv Ganga Travels — Haridwar's Direct Operator</h2>
        <p style={p}>
          We are based at Saptrishi Road, Bhupatwala, Haridwar — 5 minutes from Har Ki Pauri. Founded in 2010 by Dhanesh Chandra Mishra, a retired Indian Army officer, Shiv Ganga Travels has served 50,000+ pilgrims across 15 seasons. We are registered with Uttarakhand Tourism Development Board and hold a 4.9/5 rating from 850+ verified Google reviews. For Haridwar tour packages, you call us, we arrange — no middleman, no platform fee, no commission markup.
        </p>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>🙏 Haridwar — Gateway to Char Dham</div>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Book Your Haridwar Tour — Free Quote in 2 Hours</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Tell us your dates, group size, and which cities. We'll send a detailed, no-obligation itinerary.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a Haridwar tour package. Please share options and pricing.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
              💬 WhatsApp — Enquire Now
            </a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Related pages</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              ['Char Dham Yatra', '/char-dham-yatra'],
              ['Rishikesh Tour Packages', '/rishikesh-tour-packages'],
              ['Char Dham from Haridwar', '/char-dham-yatra'],
              ['How to Reach Haridwar', '/how-to-reach-haridwar'],
              ['Delhi to Haridwar Cab', '/delhi-to-haridwar-cab'],
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
