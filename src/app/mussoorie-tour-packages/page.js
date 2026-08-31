import Link from 'next/link';
import { SITE } from '@/data/packages';
import { h2, p } from "@/lib/prose";
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: `Mussoorie Tour Package ${SITE.season} | From ₹6,350 | Kempty Falls` },
  description: `Mussoorie tour packages ${SITE.season} from ₹6,350/person. Direct Haridwar operator, 15+ yrs, zero commission. Kempty Falls, Mall Road, Gun Hill included.`,
  keywords: [
    'mussoorie tour packages','mussoorie tour package','mussoorie packages','mussoorie trip package',
    'mussoorie tour packages from delhi','mussoorie tour package from haridwar',
    'dehradun to mussoorie tour packages','mussoorie rishikesh tour package',
    'mussoorie honeymoon package','mussoorie family package',`mussoorie tour packages ${SITE.season}`,
    'haridwar rishikesh mussoorie tour package','mussoorie holiday package',
  ],
  alternates: { canonical: `${SITE.baseUrl}/mussoorie-tour-packages` },
  openGraph: {
    title: `Mussoorie Tour Packages ${SITE.season} — From ₹6,350 | Kempty Falls & Mall Road`,
    description: 'Mussoorie tour packages from ₹6,350. Kempty Falls, Mall Road, Gun Hill, Landour. Direct operator from Haridwar since 2010. Zero commission, 50,000+ travellers served.',
    url: `${SITE.baseUrl}/mussoorie-tour-packages`,
    type: 'website',
  
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Mussoorie Tour Packages ${SITE.season} — From ₹6,350 | Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Mussoorie Tour Packages ${SITE.season} — From ₹6,350 | Kempty Falls & Mall Road`,
    description: 'Mussoorie tour packages from ₹6,350. Kempty Falls, Mall Road, Gun Hill, Landour. Direct operator from Haridwar since 2010.',
    images: [{ url: '/opengraph-image', alt: `Mussoorie Tour Packages ${SITE.season} — From ₹6,350 | Shiv Ganga Travels` }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question', name: 'What is the cost of Mussoorie tour packages in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Mussoorie tour packages from Shiv Ganga Travels start at ₹6,350 per person for the 4N/5D Mussoorie + Rishikesh + Kanatal circuit. A 3N/4D Mussoorie + Dehradun + Dhanaulti trip is ₹7,500 per person, and the 4N/5D Haridwar + Rishikesh + Mussoorie combo is ₹8,200 per person. All prices are direct-operator rates with zero commission — tell us your dates for a custom 2N/3D Mussoorie-only quote.' },
      },
      {
        '@type': 'Question', name: 'How many days are needed for a Mussoorie trip?',
        acceptedAnswer: { '@type': 'Answer', text: 'A day trip from Haridwar, Rishikesh, or Dehradun covers Kempty Falls and Mall Road comfortably. For Mussoorie on its own, 2 nights/3 days lets you add Gun Hill, Camel\'s Back Road, and Landour unhurried. Combining it with Dhanaulti, Kanatal, or Rishikesh needs 4-5 days.' },
      },
      {
        '@type': 'Question', name: 'What is the best time to visit Mussoorie?',
        acceptedAnswer: { '@type': 'Answer', text: 'March to June and September to November are the most pleasant months, with clear skies and cool air. The monsoon (July-August) turns the hills misty and green but brings landslide risk on the approach roads. December to February can bring snow around Christmas and New Year, which is when Mussoorie gets its busiest and most expensive.' },
      },
      {
        '@type': 'Question', name: 'Is a Mussoorie day trip possible from Haridwar or Rishikesh?',
        acceptedAnswer: { '@type': 'Answer', text: 'Comfortably. From Haridwar (85 km, 2.5-3 hrs) or Rishikesh (77 km, 2.5 hrs), leave by 7 AM, take in Kempty Falls and Mall Road, and you are back by evening. An overnight stay is better if you want Gun Hill and the Camel\'s Back Road walk without rushing.' },
      },
      {
        '@type': 'Question', name: 'How far is Mussoorie from Delhi, and what is the best route?',
        acceptedAnswer: { '@type': 'Answer', text: 'About 290 km via the Delhi-Dehradun Expressway and Rajpur Road, roughly 6-7 hours by road. Most of our Delhi travellers break the drive with a stop in Haridwar or Dehradun rather than doing it in one push — it makes the hill climb at the end far less tiring.' },
      },
      {
        '@type': 'Question', name: 'Can the cab drive on Mall Road in Mussoorie?',
        acceptedAnswer: { '@type': 'Answer', text: 'Only outside the restricted hours — Mall Road has timed vehicle entry rules. Your driver knows the windows and drops you at the permitted parking; from there it is a short, pleasant walk to any hotel or the main market.' },
      },
      {
        '@type': 'Question', name: 'What is the best Mussoorie package from Delhi?',
        acceptedAnswer: { '@type': 'Answer', text: 'For a first visit, the 4N/5D Haridwar + Rishikesh + Mussoorie combo (₹8,200/person) is the best value from Delhi — it pairs the hill station with the two holy cities on the way, so the long drive from Delhi is not spent on Mussoorie alone. If you only want the hills, tell us your dates and we quote a direct Delhi-Mussoorie itinerary.' },
      },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Mussoorie Tour Packages 2026', item: `${SITE.baseUrl}/mussoorie-tour-packages` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}


export default function MussoorieTourPackages() {
  return (
    <>
      <Schema/>

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Mussoorie · Queen of the Hills · 2,005m
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Mussoorie Tour Packages 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Packages from <strong style={{ color: '#FFD166' }}>₹6,350/person</strong> · Kempty Falls · Mall Road · Gun Hill · Zero commission
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
            {['🏔️ Queen of the Hills','💦 Kempty Falls','🚡 Gun Hill ropeway','🛍️ Mall Road','⭐ 4.7/5 · 54 reviews'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a Mussoorie tour package 2026. Please share details.')}`}
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

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <span>Mussoorie Tour Packages 2026</span>
        </div>
      </nav>


        <AnswerBox>
          <strong>Mussoorie is 35km above Dehradun at 2,000m and works as a 3 to 4 night trip.</strong> Packages start around ₹2,500 from Haridwar. March to June and September to November are the comfortable months; the monsoon is heavy and the views disappear. The standard circuit is Kempty Falls, Gun Hill, Lal Tibba and Camel's Back Road, with Landour the quieter alternative if you want the hill station without the Mall Road crowds.
        </AnswerBox>
      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · ✍️ <strong>By Dhanesh Chandra Mishra</strong>, Founder</div>

        {/* Quick stats */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[
            ['From Delhi','~290 km · 6-7 hrs'],
            ['From Haridwar','85 km · 2.5-3 hrs'],
            ['From Rishikesh','77 km · 2.5 hrs'],
            ['From Dehradun','35 km · 1-1.5 hrs'],
            ['Packages from','₹6,350/person'],
            ['Altitude','2,005 metres'],
          ].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}>
          <strong>Mussoorie tour packages from Shiv Ganga Travels start at ₹6,350 per person</strong> for the 4N/5D Mussoorie + Rishikesh + Kanatal circuit. It is the fastest hill escape in Uttarakhand — 35 km and about an hour up Rajpur Road from Dehradun, or under three hours from Haridwar and Rishikesh. Sitting at 2,005 metres, Mussoorie earned its "Queen of the Hills" name under the British for the same reason it still works today: you leave the plains in the morning and you are drinking chai in mountain air by lunch.
        </p>
        <p style={p}>
          We are a Haridwar-based direct operator, not a Delhi aggregator subcontracting to local drivers on the ground. Our own vehicles run the Dehradun-Mussoorie climb daily, which means the price you are quoted is the price you pay — no markup, no platform fee, no commission layer.
        </p>

        <h2 style={h2}>Mussoorie Tour Packages 2026 — All Options</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            {
              name: 'Mussoorie + Rishikesh + Kanatal',
              duration: '4N/5D',
              price: '₹6,350',
              original: '₹10,000',
              badge: 'Best Value',
              includes: ['Kempty Falls & Mall Road', 'Gun Hill ropeway', 'Kanatal & Surkanda Devi', 'Rishikesh Ganga Aarti', 'AC Innova/Tempo throughout'],
              href: '/packages/mussoorie-rishikesh-kanatal-4n-5d',
            },
            {
              name: 'Mussoorie + Dehradun + Dhanaulti',
              duration: '3N/4D',
              price: '₹7,500',
              original: '₹12,000',
              badge: 'Most Popular',
              includes: ['Mall Road & Kempty Falls', 'Lal Tibba viewpoint', 'Dhanaulti Eco Park', 'Surkanda Devi Temple', 'Hotel + breakfast & dinner'],
              href: '/packages/mussoorie-dehradun-dhanaulti-3n-4d',
            },
            {
              name: 'Haridwar + Rishikesh + Mussoorie',
              duration: '4N/5D',
              price: '₹8,200',
              badge: 'Hills + Holy Combo',
              includes: ['Har Ki Pauri Ganga Aarti', 'Rishikesh ashrams & bridges', 'Mall Road Mussoorie', 'Kempty Falls', 'AC Innova throughout'],
              href: '/haridwar-tour-packages',
            },
            {
              name: 'Mussoorie-Only Weekend',
              duration: '2N/3D',
              price: 'Custom Quote',
              badge: 'Tell Us Your Dates',
              includes: ['Kempty Falls & Mall Road', 'Gun Hill ropeway', "Camel's Back Road walk", 'Landour café hop', 'Pickup from any city'],
              href: null,
            },
          ].map(pkg => (
            <div key={pkg.name} style={{ background: '#fff', borderRadius: 14, padding: '16px', border: '1px solid hsl(var(--border))', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ background: 'rgba(232,146,10,0.12)', color: '#92640a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, width: 'fit-content' }}>{pkg.badge}</span>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>{pkg.name}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{pkg.duration}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontWeight: 800, fontSize: 18, color: '#1D9E75' }}>{pkg.price}</span>
                {pkg.original && <span style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'line-through' }}>{pkg.original}</span>}
                {pkg.price !== 'Custom Quote' && <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>/person</span>}
              </div>
              <div style={{ borderTop: '1px solid var(--bg)', paddingTop: 8 }}>
                {pkg.includes.map(item => (
                  <div key={item} style={{ fontSize: 12.5, color: '#475569', padding: '3px 0', display: 'flex', gap: 6 }}>
                    <span style={{ color: '#1D9E75', flexShrink: 0 }}>✓</span>{item}
                  </div>
                ))}
              </div>
              {pkg.href && (
                <Link href={pkg.href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '8px', borderRadius: 8, fontWeight: 700, fontSize: 12.5, textDecoration: 'none', textAlign: 'center' }}>
                  View Full Itinerary →
                </Link>
              )}
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I want to book the ${pkg.name} (${pkg.duration}) Mussoorie package. Please share availability.`)}`}
                target="_blank" rel="nofollow noopener noreferrer"
                style={{ background: '#25D366', color: '#fff', padding: '9px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none', textAlign: 'center', marginTop: 4 }}>
                💬 Book This Package
              </a>
            </div>
          ))}
        </div>

        <h2 style={h2}>Places to Visit in Mussoorie — Complete Guide</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            { place: 'Mall Road', note: 'Timed vehicle entry', desc: 'The colonial-era spine of the town, lined with cafés, woollens shops, and the Library Bazaar. Vehicle entry is restricted at peak hours — your driver knows the windows and where to park. Evenings here, with the Doon valley lights below, are the reason most people remember Mussoorie fondly.' },
            { place: 'Gun Hill', note: 'Ropeway from Mall Road', desc: "Mussoorie's second-highest point, reached by a short ropeway ride from Mall Road. Best in the hour before sunset, when the Himalayan skyline turns gold and the Doon valley lights start coming on below." },
            { place: 'Kempty Falls', note: '15 km before town', desc: 'A 40-foot waterfall on the way up from Dehradun, popular for a cold-water dip and photos. It fills up by midday, so go early if you want it without the crowds — most of our itineraries build it in as the first stop on the drive up.' },
            { place: "Camel's Back Road", note: 'Flat 3 km walk', desc: 'A gentle, mostly flat walking trail with what is arguably the best uninterrupted Himalayan skyline view in town — no traffic, no vendors pushing souvenirs, just pine trees and the ridge line. Best walked at dusk.' },
            { place: 'Lal Tibba', note: 'Highest point, in Landour', desc: "Mussoorie's highest viewpoint at roughly 2,275 m, with a coin-operated telescope for closer views of Bandarpunch, Kedarnath, and Badrinath on a clear day. Quieter than Gun Hill and the better pick if you want an actual mountain panorama rather than a crowd." },
            { place: 'Company Garden', note: '3 km from Mall Road', desc: 'A landscaped municipal garden with a small lake, flower beds, and a low-key amusement area — an easy, unhurried couple of hours, popular with families travelling with kids or grandparents.' },
          ].map(item => (
            <div key={item.place} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', display: 'grid', gridTemplateColumns: '190px 1fr', gap: 16 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)' }}>{item.place}</div>
                <div style={{ fontSize: 11.5, color: '#E8920A', fontWeight: 600, marginTop: 2 }}>{item.note}</div>
              </div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Mussoorie Packages from Major Cities</h2>
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
                ['Delhi', '~290 km', 'Delhi-Dehradun Expressway → Rajpur Road', '6-7 hrs', '₹8,200'],
                ['Haridwar', '85 km', 'Haridwar → Dehradun → Rajpur Road', '2.5-3 hrs', '₹6,350'],
                ['Rishikesh', '77 km', 'Rishikesh → Dehradun → Rajpur Road', '2.5 hrs', '₹6,350'],
                ['Dehradun', '35 km', 'Direct via Rajpur Road', '1-1.5 hrs', '₹6,350'],
              ].map(([city, dist, route, time, price], i) => (
                <tr key={city} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
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

        <h2 style={h2}>Best Time to Visit Mussoorie</h2>
        <p style={p}>
          <strong>March to June and September to November</strong> are the most pleasant months — clear skies, cool air, and none of the landslide risk that hits the approach roads during monsoon. Summer (April-June) is peak season and the best window if you want reliable weather for sightseeing. The monsoon (July-August) turns the hills misty and green, genuinely beautiful in photos, but road conditions on the Rajpur Road climb can turn unpredictable after heavy rain — we track this daily and reroute or delay departures when needed. December to February brings the chance of snow, especially around Christmas and New Year, when Mussoorie gets its busiest and priciest; book hotels at least three weeks out if you want that window.
        </p>

        <h2 style={h2}>How Many Days Do You Need in Mussoorie?</h2>
        <p style={p}>
          A single day is enough if you are coming from Haridwar, Rishikesh, or Dehradun and just want Kempty Falls and Mall Road — leave early, be back by evening. Give it <strong>2 nights/3 days</strong> if Mussoorie is the whole trip: that adds Gun Hill, the Camel's Back Road walk, and an evening in Landour without rushing between stops. If you are combining it with Dhanaulti, Kanatal, or a Rishikesh/Haridwar loop — which is what most of our travellers actually book — plan on <strong>4 to 5 days</strong> so each stop gets a proper visit instead of a drive-through.
        </p>

        <h2 style={h2}>Where to Stay in Mussoorie</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            { area: 'Mall Road & Library Bazaar', desc: 'Walking distance to everything — cafés, shops, the ropeway. Also the busiest and noisiest part of town, especially on weekends.' },
            { area: 'Landour', desc: 'Above Mussoorie proper, a short drive or walk up. Quieter, better views, and better cafés — our pick for anyone who wants mountain air without the Mall Road crowds.' },
            { area: 'Barlowganj & Jharipani', desc: 'On the way up from Dehradun, cheaper and calmer than the town centre. A good base if you are driving yourself and do not mind a short commute into Mall Road.' },
          ].map(item => (
            <div key={item.area} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 4 }}>{item.area}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Why Book Mussoorie Tour Packages with Shiv Ganga Travels</h2>
        <p style={p}>
          Shiv Ganga Travels was founded in 2010 by Dhanesh Chandra Mishra, a retired Indian Army officer, and is based at Saptrishi Road, Bhupatwala, Haridwar — not in Delhi, not on an app. We have served 50,000+ travellers across 15 seasons and hold a 4.7/5 rating from 54 verified Google reviews. Our own vehicles run the Dehradun-Mussoorie climb regularly, which means real, current knowledge of road conditions, Mall Road entry timings, and which hotels are actually worth booking — not a script read off a database. Every Mussoorie package is quoted and operated directly: no agent, no platform commission, no markup.
        </p>

        <h2 style={h2}>FAQ — Mussoorie Tour Packages</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 8 }}>
          {[
            ['What is the cost of Mussoorie tour packages in 2026?', 'Packages start at ₹6,350 per person for the 4N/5D Mussoorie + Rishikesh + Kanatal circuit. A 3N/4D Mussoorie + Dehradun + Dhanaulti trip is ₹7,500 and the 4N/5D Haridwar + Rishikesh + Mussoorie combo is ₹8,200. Tell us your dates for a custom 2N/3D Mussoorie-only quote.'],
            ['How many days are needed for a Mussoorie trip?', "A day trip covers Kempty Falls and Mall Road. For Mussoorie alone, 2 nights/3 days lets you add Gun Hill and Camel's Back Road unhurried. Combining it with Dhanaulti, Kanatal, or Rishikesh needs 4-5 days."],
            ['What is the best time to visit Mussoorie?', 'March-June and September-November are the most pleasant, with clear skies and cool air. Monsoon (July-August) is scenic but carries landslide risk. December-February can bring snow, especially around Christmas and New Year.'],
            ['Is a Mussoorie day trip possible from Haridwar or Rishikesh?', "Yes, comfortably. From Haridwar (85 km) or Rishikesh (77 km), leave by 7 AM, see Kempty Falls and Mall Road, and you're back by evening. An overnight is better for Gun Hill and the Camel's Back Road walk."],
            ['How far is Mussoorie from Delhi, and what is the best route?', 'About 290 km via the Delhi-Dehradun Expressway and Rajpur Road, roughly 6-7 hours by road. Most travellers break the drive with a stop in Haridwar or Dehradun.'],
            ['Can the cab drive on Mall Road in Mussoorie?', 'Only outside restricted hours — Mall Road has timed vehicle entry rules. Your driver drops you at the permitted parking; from there it is a short walk to any hotel or the main market.'],
            ['What is the best Mussoorie package from Delhi?', 'The 4N/5D Haridwar + Rishikesh + Mussoorie combo (₹8,200/person) is the best first-visit value — it pairs the hill station with the two holy cities en route. For a Mussoorie-only trip from Delhi, tell us your dates for a direct quote.'],
          ].map(([q, a]) => (
            <div key={q} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>{q}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>🏔️ Mussoorie — Queen of the Hills</div>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Book Your Mussoorie Tour — Free Quote in 2 Hours</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Tell us your dates, group size, and which cities to combine. We'll send a detailed, no-obligation itinerary.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a Mussoorie tour package. Please share options and pricing.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
              💬 WhatsApp — Enquire Now
            </a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Related pages</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              ['Mussoorie + Rishikesh + Kanatal (4N/5D)', '/packages/mussoorie-rishikesh-kanatal-4n-5d'],
              ['Mussoorie + Dehradun + Dhanaulti (3N/4D)', '/packages/mussoorie-dehradun-dhanaulti-3n-4d'],
              ['Uttarakhand Tour Packages', '/uttarakhand-tour-packages'],
              ['Haridwar Tour Packages', '/haridwar-tour-packages'],
              ['Rishikesh Tour Packages', '/rishikesh-tour-packages'],
              ['Dehradun to Mussoorie Cab', '/cabs/dehradun-to-mussoorie-cab'],
              ['Haridwar to Mussoorie Cab', '/cabs/haridwar-to-mussoorie-cab'],
              ['Rishikesh to Mussoorie Cab', '/cabs/rishikesh-to-mussoorie-cab'],
              ['Char Dham Yatra 2026', '/char-dham-yatra'],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
