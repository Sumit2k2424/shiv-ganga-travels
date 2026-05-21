import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Rishikesh Tour Packages 2026 — Rishikesh Trip',
  description: 'Rishikesh tour packages 2026 from ₹3,999. Rishikesh trip package — Haridwar + Rishikesh combo, adventure, Ganga Aarti, ashram stays.',
  keywords: [
    'rishikesh tour package','rishikesh package','rishikesh trip package','rishikesh travel packages',
    'rishikesh tours','trip to rishikesh','rishikesh tour','rishikesh haridwar tour package',
    'haridwar rishikesh tour package','rishikesh trip from delhi','rishikesh package from delhi',
    'rishikesh mussoorie package','rishikesh haridwar mussoorie tour package',
    'rishikesh package for 2 days','rishikesh package for 2 night 3 days',
    'travel agency in rishikesh','rishikesh tour and travels','haridwar rishikesh tour package from delhi',
  ],
  alternates: { canonical: `${SITE.baseUrl}/rishikesh-tour-packages` },
  openGraph: {
    title: 'Rishikesh Tour Packages 2026 — Trips from ₹3,999 | Haridwar + Rishikesh',
    description: 'Rishikesh tour packages from ₹3,999. Ganga Aarti, rafting, ashrams, Haridwar combo. Direct operator from Haridwar. Zero commission. 50,000+ pilgrims served.',
    url: `${SITE.baseUrl}/rishikesh-tour-packages`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishikesh Tour Packages 2026 — Trips from ₹3,999 | Haridwar + Rishikes',
    description: 'Rishikesh tour packages from ₹3,999. Ganga Aarti, rafting, ashrams, Haridwar combo. Direct operator from Haridwar. Zero commission. 50,000+ pilgrims served',
    images: [{ url: '/opengraph-image', alt: 'Rishikesh Tour Packages 2026 — Trips from ₹3,999 | Haridwar  | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question', name: 'What is the cost of a Rishikesh tour package in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Rishikesh tour packages start at ₹3,999 per person for a 1N/2D trip including hotel, Ganga Aarti visit, and Haridwar sightseeing. A 2N/3D Rishikesh + Haridwar combo costs ₹5,999–₹7,999. Add-ons like white water rafting (₹600–800/person), bungee jumping (₹3,500), and ashram stays are available at extra cost. All prices are from Shiv Ganga Travels, a direct operator with zero commission.' },
      },
      {
        '@type': 'Question', name: 'How many days are enough for a Rishikesh trip?',
        acceptedAnswer: { '@type': 'Answer', text: 'Minimum 2 days (1 night) for Rishikesh basics — Ram Jhula, Laxman Jhula, Triveni Ghat Aarti, Beatles Ashram. For a full experience including rafting, 3 days (2 nights) is ideal. If combining with Haridwar (Har Ki Pauri, Ganga Aarti) and Mussoorie, plan 4–5 days. Most pilgrims combine Rishikesh with a Char Dham Yatra start from Haridwar.' },
      },
      {
        '@type': 'Question', name: 'What is the best Rishikesh package from Delhi?',
        acceptedAnswer: { '@type': 'Answer', text: 'From Delhi (290–335km), a popular package is the Haridwar + Rishikesh 2N/3D tour starting at ₹6,999/person. It covers Delhi to Haridwar, Har Ki Pauri evening Ganga Aarti, next day Rishikesh (Ram Jhula, Laxman Jhula, rafting option, Beatles Ashram), and return. By train: Shatabdi from New Delhi to Haridwar (5.5hrs), then 30 min cab to Rishikesh.' },
      },
      {
        '@type': 'Question', name: 'Can I combine Rishikesh with Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — and this is the most popular combination. Rishikesh is just 24km from Haridwar, the Char Dham starting point. Most Char Dham Yatra groups from our company spend 1 night in Rishikesh before the yatra begins, attending Triveni Ghat Aarti and visiting Neelkanth Mahadev temple. We arrange Rishikesh pickup as part of all our Char Dham packages at no extra cost.' },
      },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Rishikesh Tour Packages 2026', item: `${SITE.baseUrl}/rishikesh-tour-packages` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.6rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 36 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function RishikeshTourPackages() {
  return (
    <>
      <Schema/>

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Rishikesh · Yoga Capital · Ganga Aarti · Adventure
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Rishikesh Tour Packages 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Rishikesh trip packages from <strong style={{ color: '#FFD166' }}>₹3,999/person</strong> · Haridwar + Rishikesh combo · Rafting · Ganga Aarti · Ashrams · Zero commission
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
            {['🙏 Triveni Ghat Aarti','🚣 White water rafting','🧘 Yoga & ashrams','⛰️ 24km from Haridwar','⭐ 4.9/5 · 850+ reviews'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a Rishikesh tour package 2026. Please share details.')}`}
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
          Home<span>›</span>
          <span>Rishikesh Tour Packages 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026</div>

        {/* Quick stats */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[
            ['From Haridwar','24 km · 30 min'],
            ['From Delhi','290–335 km · 5–6 hrs'],
            ['Packages from','₹3,999/person'],
            ['Best duration','2N/3D'],
            ['Rafting from','₹600/person'],
            ['Altitude','356 metres'],
          ].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}>
          <strong>Rishikesh tour packages from Shiv Ganga Travels start at ₹3,999/person</strong> for a 1N/2D trip covering Triveni Ghat Ganga Aarti, Ram Jhula, Laxman Jhula, and Haridwar sightseeing. The most popular option is the 2N/3D Haridwar + Rishikesh combo at ₹5,999–₹7,999, which many pilgrims book as a pre-Char Dham spiritual stay. Rishikesh sits at 356 metres on the banks of the Ganga, just 24km from Haridwar — the two cities are easily combined in one itinerary.
        </p>

        <h2 style={h2}>Rishikesh Tour Packages 2026 — All Options</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            {
              name: 'Rishikesh Weekend Escape',
              duration: '1N/2D',
              price: '₹3,999',
              original: '₹5,500',
              badge: 'Most Popular',
              includes: ['Hotel in Rishikesh', 'Triveni Ghat Aarti', 'Ram Jhula & Laxman Jhula', 'Neelkanth Mahadev visit', 'Breakfast included'],
              href: '/contact',
            },
            {
              name: 'Haridwar + Rishikesh Combo',
              duration: '2N/3D',
              price: '₹5,999',
              original: '₹8,000',
              badge: 'Best Value',
              includes: ['Haridwar Ganga Aarti', 'Har Ki Pauri darshan', 'Rishikesh full day', 'Ram Jhula, Beatles Ashram', 'AC cab throughout'],
              href: '/contact',
            },
            {
              name: 'Rishikesh Adventure Package',
              duration: '2N/3D',
              price: '₹7,499',
              original: '₹10,000',
              badge: 'Adventure',
              includes: ['White water rafting (16km)', 'Bungee jumping option', 'Camping on river bank', 'Yoga session', 'Haridwar evening Aarti'],
              href: '/contact',
            },
            {
              name: 'Haridwar + Rishikesh + Mussoorie',
              duration: '4N/5D',
              price: '₹12,999',
              original: '₹17,000',
              badge: 'Hill + Holy Combo',
              includes: ['All 3 destinations', 'Mall Road Mussoorie', 'Kempty Falls', 'Haridwar Aarti', 'Rishikesh ashrams', 'AC vehicle'],
              href: '/contact',
            },
          ].map(pkg => (
            <div key={pkg.name} style={{ background: '#fff', borderRadius: 14, padding: '16px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ background: 'rgba(232,146,10,0.12)', color: '#92640a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, width: 'fit-content' }}>{pkg.badge}</span>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>{pkg.name}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{pkg.duration}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontWeight: 800, fontSize: 18, color: '#1D9E75' }}>{pkg.price}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'line-through' }}>{pkg.original}</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>/person</span>
              </div>
              <div style={{ borderTop: '1px solid var(--bg)', paddingTop: 8 }}>
                {pkg.includes.map(item => (
                  <div key={item} style={{ fontSize: 12.5, color: '#475569', padding: '3px 0', display: 'flex', gap: 6 }}>
                    <span style={{ color: '#1D9E75', flexShrink: 0 }}>✓</span>{item}
                  </div>
                ))}
              </div>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I want to book the ${pkg.name} (${pkg.duration}) Rishikesh package. Please share details.`)}`}
                target="_blank" rel="nofollow noopener noreferrer"
                style={{ background: '#25D366', color: '#fff', padding: '9px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none', textAlign: 'center', marginTop: 4 }}>
                💬 Book This Package
              </a>
            </div>
          ))}
        </div>

        <h2 style={h2}>What to See in Rishikesh — Complete Guide</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { place: 'Triveni Ghat', type: 'Spiritual', desc: 'The most important ghat in Rishikesh — evening Ganga Aarti at Triveni Ghat (7 PM) draws thousands of devotees. Priests perform the ritual simultaneously with lamps, drums, and conch shells on the river bank. More intimate than Haridwar\'s Har Ki Pauri but equally moving.' },
            { place: 'Ram Jhula & Laxman Jhula', type: 'Landmark', desc: 'Two famous suspension bridges across the Ganga — Ram Jhula (450 feet, 1986) and Laxman Jhula (450 feet, 1939). Walk across both, visit the Trayambakeshwar Temple on the far bank. The views of the river from the bridges are classic Rishikesh. Laxman Jhula bridge closed for renovation — Ram Jhula is open.' },
            { place: 'Beatles Ashram (Chaurasi Kutia)', type: 'Historic', desc: 'The Maharishi Mahesh Yogi ashram where The Beatles stayed in 1968 and wrote most of the White Album. Now part of the Rajaji Tiger Reserve with entry fee ₹150. The meditation chambers and buildings are covered in colourful graffiti art. Unusual and historically fascinating.' },
            { place: 'Neelkanth Mahadev Temple', type: 'Temple', desc: '32km from Rishikesh, this Shiva temple marks the spot where Lord Shiva drank the poison (halahala) that turned his throat blue. At 1,330m altitude through dense forest. Best reached by the 14km trek from Swarg Ashram or by jeep. One of the most spiritually powerful temples in the region.' },
            { place: 'White Water Rafting', type: 'Adventure', desc: 'Rishikesh is the rafting capital of India. Three main stretches: Shivpuri to Rishikesh (16km, Grade 3–4, ₹600–800/person), Marine Drive to Rishikesh (24km, Grade 3–4, ₹800–1,000), and Kaudiyala to Rishikesh (36km, Grade 4–5, ₹1,200–1,500). Best season: September–June. Closed during July–August monsoon.' },
            { place: 'Parmarth Niketan Ashram', type: 'Ashram', desc: 'The largest ashram in Rishikesh with over 1,000 rooms. Famous for its evening Ganga Aarti on the ashram\'s private ghat. Yoga and meditation classes daily. Overnight ashram stays available from ₹800/night. Popular with international visitors and spiritual seekers.' },
          ].map(item => (
            <div key={item.place} style={{ background: '#fff', borderRadius: 12, padding: '14px 16px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)' }}>{item.place}</div>
                <span style={{ fontSize: 10.5, background: 'rgba(11,123,139,0.1)', color: 'var(--teal)', padding: '2px 8px', borderRadius: 20, fontWeight: 600, whiteSpace: 'nowrap' }}>{item.type}</span>
              </div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Rishikesh Packages from Major Cities</h2>
        <div style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'var(--navy)' }}>
                {['From city', 'Distance', 'Best route', 'Travel time', 'Package from'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Delhi', '290 km', 'NH58 via Meerut or via Haridwar', '5–6 hrs', '₹5,999'],
                ['Noida / Gurgaon', '270–320 km', 'NH334 via Muzaffarnagar → Haridwar', '4.5–5 hrs', '₹5,999'],
                ['Chandigarh', '220 km', 'NH7 via Roorkee → Haridwar', '4 hrs', '₹4,999'],
                ['Dehradun', '43 km', 'NH7 direct', '1 hr', '₹3,999'],
                ['Mumbai', 'Flight to Dehradun + road', 'Fly IndiGo/Air India to DED', '40 min + 1 hr', '₹7,999'],
                ['Jaipur', '570 km', 'Via Delhi → Haridwar', '9–10 hrs', '₹7,999'],
              ].map(([city, dist, route, time, price], i) => (
                <tr key={city} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 600, color: 'var(--navy)' }}>{city}</td>
                  <td style={{ padding: '9px 12px', color: '#475569' }}>{dist}</td>
                  <td style={{ padding: '9px 12px', color: '#475569', fontSize: 12 }}>{route}</td>
                  <td style={{ padding: '9px 12px', color: '#475569' }}>{time}</td>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: '#1D9E75' }}>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Why Book Rishikesh Tour with Shiv Ganga Travels</h2>
        <p style={p}>
          We are a Haridwar-based direct operator — 24km from Rishikesh. Unlike Delhi-based aggregators who subcontract to local operators, we run our own vehicles and coordinate every detail directly. Our drivers know every ashram, every ghat, and every restaurant worth stopping at in Rishikesh. We have been arranging Haridwar + Rishikesh trips for pilgrims since 2010, usually as a pre-Char Dham spiritual stay before the main yatra. For Rishikesh-specific bookings, our standard is the same as our Char Dham standard — AC vehicles, clean hotels, and no hidden costs.
        </p>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Book Your Rishikesh Trip — Free Quote</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Tell us your dates, city, and group size. We'll send a custom Rishikesh itinerary within 2 hours.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a Rishikesh tour package 2026. Please share options.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
              💬 WhatsApp — Book Now
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
              ['Char Dham from Rishikesh', '/char-dham-yatra-from-rishikesh'],
              ['Haridwar Tour Packages', '/haridwar-tour-packages'],
              ['Char Dham Yatra 2026', '/char-dham-yatra'],
              ['Kedarnath Yatra', '/kedarnath-yatra'],
              ['How to Reach Haridwar', '/how-to-reach-haridwar'],
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
