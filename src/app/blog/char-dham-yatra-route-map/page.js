import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Route Map 2026 – Complete Road Guide from Haridwar with Distances',
  description: 'Char Dham Yatra 2026 route map from Haridwar: Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath. Total distances, drive times, stopovers, and alternate route options explained.',
  keywords: ['char dham yatra route map 2026', 'char dham yatra route from haridwar', 'char dham route map haridwar', 'char dham yatra distance', 'char dham yatra road map', 'haridwar to char dham distance', 'char dham yatra total km'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-route-map` },
  openGraph: {
    title: 'Char Dham Yatra Route Map 2026 – Complete Road Guide from Haridwar with Distances',
    description: 'Complete Char Dham Yatra route from Haridwar. 1,500km total. Day-wise distances, driving times, key stops, altitude at each dham. Operator-verified 2026 guide.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-route-map`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Route Map 2026 — Complete Road Guide from Haridwar wit | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Route Map 2026 — Road Guide with Distances & Travel Ti',
    description: 'Complete Char Dham Yatra route from Haridwar. 1,500km total. Day-wise distances, driving times, key stops, altitude at each dham. Operator-verified 2026 gu',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra Route Map 2026 — Road Guide with Distances & | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the total distance of Char Dham Yatra route from Haridwar?', acceptedAnswer: { '@type': 'Answer', text: 'The total distance of Char Dham Yatra route from Haridwar is approximately 1,500km (round trip, Haridwar to Haridwar). The route covers: Haridwar to Barkot (210km), Barkot to Yamunotri and back (90km round trip trek), Barkot to Uttarkashi (90km), Uttarkashi to Gangotri and back (100km round trip), Uttarkashi to Guptkashi (220km), Guptkashi to Kedarnath and back (60km drive + 32km trek), Guptkashi to Badrinath (160km), Badrinath to Haridwar (290km). Total driving distance approximately 1,250km plus 38km of trekking.' } },
      { '@type': 'Question', name: 'What is the correct order of Char Dham Yatra?', acceptedAnswer: { '@type': 'Answer', text: 'The correct (traditional and auspicious) order for Char Dham Yatra is: (1) Yamunotri — first, as it is the source of Yamuna, (2) Gangotri — second, source of Ganga, (3) Kedarnath — third, Jyotirlinga of Lord Shiva, (4) Badrinath — fourth, abode of Lord Vishnu. The journey goes in a clockwise direction from west to east. Starting with Yamunotri and ending at Badrinath is considered the most spiritually complete sequence.' } },
      { '@type': 'Question', name: 'How many days does the Char Dham Yatra route take?', acceptedAnswer: { '@type': 'Answer', text: 'The Char Dham Yatra route from Haridwar takes 9 nights and 10 days minimum to complete comfortably. 11N/12D is the recommended duration for a relaxed, comfortable yatra with proper rest. Rushing in 7-8 days is possible but means less time at each dham and more physical exhaustion. The route involves significant mountain driving — 6-8 hours per day on winding roads.' } },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Char Dham Yatra Route Map 2026', item: `${SITE.baseUrl}/blog/char-dham-yatra-route-map` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} /></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function RouteMap() {
  const route = [
    { day: 'Day 1', from: 'Haridwar', to: 'Barkot', km: '210 km', time: '7–8 hrs', alt: '1,352m', highway: 'NH7 via Mussoorie bypass', stops: 'Kempty Falls (optional), Prakeshwar Mahadev Temple', stay: 'Barkot' },
    { day: 'Day 2', from: 'Barkot', to: 'Yamunotri → Barkot', km: '45 km drive + 6 km trek', time: '6–7 hrs total', alt: '3,291m (Yamunotri)', highway: 'Janki Chatti road', stops: 'Janki Chatti (trek start), Surya Kund hot spring 47°C, Divya Shila', stay: 'Barkot' },
    { day: 'Day 3', from: 'Barkot', to: 'Uttarkashi', km: '90 km', time: '3.5–4 hrs', alt: '1,352m', highway: 'Yamuna Valley Road', stops: 'Kashi Vishwanath Temple Uttarkashi, Nehru Institute of Mountaineering', stay: 'Uttarkashi' },
    { day: 'Day 4', from: 'Uttarkashi', to: 'Gangotri → Uttarkashi', km: '100 km each way', time: '3–4 hrs each way', alt: '3,048m (Gangotri)', highway: 'NH108', stops: 'Gangnani Hot Spring, Harsil Valley, Bhagirathi River view, Vishwanath Temple Uttarkashi', stay: 'Uttarkashi' },
    { day: 'Day 5', from: 'Uttarkashi', to: 'Guptkashi', km: '220 km', time: '8–9 hrs', alt: '1,319m', highway: 'NH134 via Tehri, Srinagar', stops: 'Devprayag confluence (optional), Dhari Devi Temple, Tilwara, Ardh Narishwar Temple Guptkashi', stay: 'Guptkashi' },
    { day: 'Day 6', from: 'Guptkashi', to: 'Kedarnath', km: '30 km drive + 16 km trek', time: 'Drive 1hr + Trek 5–7 hrs', alt: '3,583m', highway: 'Sonprayag road', stops: 'Sonprayag checkpoint, Gaurikund hot spring, Jungle Chatti (4km), Bhimbali (9km)', stay: 'Kedarnath' },
    { day: 'Day 7', from: 'Kedarnath', to: 'Rudraprayag', km: 'Trek 16km + 30km drive', time: 'Trek 4–5 hrs + 1hr drive', alt: '895m (Rudraprayag)', highway: 'Sonprayag → Rudraprayag NH58', stops: '4 AM Mahabhishek darshan, Gaurikund descent, Shankaracharya Samadhi', stay: 'Rudraprayag' },
    { day: 'Day 8', from: 'Rudraprayag', to: 'Badrinath', km: '160 km', time: '5–6 hrs', alt: '3,133m', highway: 'NH58 via Chamoli, Joshimath', stops: 'Karnaprayag, Nandprayag, Vishnuprayag, Joshimath (Narsingh Temple), Tapt Kund 45°C', stay: 'Badrinath' },
    { day: 'Day 9', from: 'Badrinath', to: 'Rudraprayag/Rishikesh', km: '215 km', time: '6–7 hrs', alt: '—', highway: 'NH58 back toward Haridwar', stops: 'Mana Village (last Indian village), Vyas Gufa, Bhim Pul, Brahma Kapal (Pind Daan)', stay: 'Rudraprayag or Rishikesh' },
    { day: 'Day 10', from: 'Return', to: 'Haridwar', km: '160 km', time: '4–5 hrs', alt: '249m', highway: 'NH58 via Rishikesh', stops: 'Devprayag (Ganga confluence — Bhagirathi + Alaknanda), Ram Jhula Rishikesh, Har Ki Pauri', stay: 'Home / Departure' },
  ];

  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Operator-Verified Route Guide · 2026 · Updated May
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Char Dham Yatra Route Map 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 640, margin: '0 auto 16px' }}>
            Complete road route from Haridwar — 1,500km total, 10 days, day-wise distances, altitudes, highway numbers, and key stops. Written by operators who drive this route every season.
          </p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Blog</Link><span>›</span>
          <span>Char Dham Yatra Route Map 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> May 2026 · ✍️ <strong>By:</strong> Shiv Ganga Travels, Haridwar (15 seasons on this route)
        </div>

        {/* Quick route summary */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 22px', marginBottom: 28 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>The Route at a Glance</div>
          <div style={{ fontSize: 14, color: '#FFD166', fontWeight: 600, lineHeight: 2 }}>
            Haridwar → Barkot → <strong>Yamunotri</strong> → Uttarkashi → <strong>Gangotri</strong> → Guptkashi → <strong>Kedarnath</strong> → Joshimath → <strong>Badrinath</strong> → Rishikesh → Haridwar
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))', gap: 10, marginTop: 14 }}>
            {[['Total distance', '~1,500 km (RT)'], ['Duration', '9N/10D min'], ['Route direction', 'Clockwise'], ['Start/End', 'Haridwar'], ['Trek sections', '2 (Yamunotri 6km, Kedarnath 16km)'], ['Altitude range', '249m → 3,583m']].map(([k, v]) => (
              <div key={k}><div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 12.5, color: '#fff' }}>{v}</div></div>
            ))}
          </div>
        </div>

        <p style={p}>
          The Char Dham Yatra route covers 1,500km round trip from Haridwar, visiting the four sacred dhams of Uttarakhand in the traditional clockwise sequence: Yamunotri first (source of Yamuna), Gangotri second (source of Ganga), Kedarnath third (Shiva Jyotirlinga), and Badrinath last (Vishnu abode). Below is the complete day-by-day road route with actual highway numbers, driving distances, altitudes, and what to see at each stop — compiled from 15 seasons of operating this route.
        </p>

        <h2 style={h2}>Day-by-Day Route — Distances, Times & Key Stops</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
          {route.map((day, i) => (
            <div key={day.day} style={{ background: '#fff', borderRadius: 12, padding: '14px 16px', border: '1px solid var(--border)', borderLeft: `4px solid ${i < 2 ? '#f59e0b' : i < 4 ? '#0D9488' : i < 6 ? '#DC2626' : i < 8 ? '#7C3AED' : 'var(--navy)'}` }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 8 }}>
                <span style={{ background: 'var(--navy)', color: '#FFD166', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, whiteSpace: 'nowrap' }}>{day.day}</span>
                <strong style={{ fontSize: 14, color: 'var(--navy)' }}>{day.from} → {day.to}</strong>
                <span style={{ fontSize: 12.5, color: '#1D9E75', fontWeight: 600 }}>{day.km}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>⏱ {day.time}</span>
                {day.alt !== '—' && <span style={{ fontSize: 12, color: '#7C3AED', fontWeight: 600 }}>↑ {day.alt}</span>}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 4, fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>Highway:</span>
                <span style={{ color: '#475569' }}>{day.highway}</span>
                <span style={{ color: 'var(--text-muted)' }}>Stops:</span>
                <span style={{ color: '#475569' }}>{day.stops}</span>
                <span style={{ color: 'var(--text-muted)' }}>Overnight:</span>
                <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{day.stay}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Road Conditions & Highway Guide</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { route: 'Haridwar → Barkot (NH7)', condition: 'Good', detail: 'Well-maintained 4-lane highway from Haridwar to Dehradun bypass, then NH7 via Vikasnagar and Yamuna Valley. Road narrows after Barkot. Kempty Falls and Mussoorie bypass available for sightseeing.' },
            { route: 'Barkot → Uttarkashi (NH108)', condition: 'Good', detail: 'NH108 follows the Yamuna and Bhagirathi valleys. Well-maintained in most sections with regular NHAI improvements. Occasional landslide zones near Dharasu bend — extra caution in monsoon.' },
            { route: 'Uttarkashi → Gangotri (NH108)', condition: 'Good-Fair', detail: 'Scenic drive along Bhagirathi. Road is single-lane in sections above Harsil. BRTF (Border Roads Task Force) maintains this route. Beautiful apple orchards at Harsil (18km before Gangotri). No heavy vehicle permitted beyond Gangotri town.' },
            { route: 'Guptkashi → Sonprayag → Kedarnath', condition: 'Fair-Restricted', detail: 'Private vehicles are restricted beyond Sonprayag (government checkpoint). Shared jeeps operate Sonprayag to Gaurikund (₹50 per person). From Gaurikund, foot/pony/helicopter only. Road to Sonprayag is good; route is often congested in peak season.' },
            { route: 'Rudraprayag → Joshimath → Badrinath (NH58)', condition: 'Good', detail: 'NH58 is the main Badrinath highway — NHAI maintained, mostly good except during monsoon landslides. Joshimath land subsidence (2023 crisis) is monitored; current status is stable. Mana village road (4km beyond Badrinath) is open and accessible.' },
            { route: 'Badrinath → Haridwar (NH58)', condition: 'Good', detail: 'Return route via Chamoli, Srinagar (not Kashmir — Pauri Garhwal), Devprayag, Rishikesh. 290km, 7-8 hours. Devprayag is worth a 20-minute stop both ways. Rishikesh city traffic can add 30-45 minutes during evening hours.' },
          ].map(item => (
            <div key={item.route} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)' }}>{item.route}</div>
                <span style={{ fontSize: 11, background: item.condition === 'Good' ? '#EAF3DE' : item.condition === 'Fair-Restricted' ? '#FCEBEB' : '#FFF8F0', color: item.condition === 'Good' ? '#27500A' : item.condition === 'Fair-Restricted' ? '#791F1F' : '#7B3F00', padding: '2px 8px', borderRadius: 20, fontWeight: 700 }}>{item.condition}</span>
              </div>
              <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.7 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Key Confluences (Prayags) on the Route</h2>
        <p style={p}>The Char Dham route passes through the Panch Prayag — five sacred river confluences in Garhwal. Each is worth a brief stop. They are listed in the order you encounter them on the route from Haridwar:</p>
        <div style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Prayag', 'Rivers meeting', 'Location', 'Distance from Haridwar', 'Worth stopping?'].map(h => (
                <th key={h} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Devprayag', 'Bhagirathi + Alaknanda = Ganga', 'NH58, on route', '94 km', '✅ Yes — where Ganga begins. 20-min stop.'],
                ['Rudraprayag', 'Mandakini + Alaknanda', 'NH58, on route', '153 km', '✅ Yes — visible from the road bridge. Quick stop.'],
                ['Karnaprayag', 'Pindar + Alaknanda', 'NH58, on route to Badrinath', '195 km', '⬜ Optional — visible from road, brief stop'],
                ['Nandprayag', 'Nandakini + Alaknanda', 'NH58, on route to Badrinath', '205 km', '⬜ Optional — small but sacred'],
                ['Vishnuprayag', 'Dhauliganga + Alaknanda', 'NH58, just before Joshimath', '243 km', '✅ Yes — dramatic gorge view, visible from road'],
              ].map(([name, rivers, loc, dist, stop], i) => (
                <tr key={name} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: 'var(--navy)' }}>{name}</td>
                  <td style={{ padding: '9px 12px', color: '#475569', fontSize: 13 }}>{rivers}</td>
                  <td style={{ padding: '9px 12px', color: '#64748b', fontSize: 12 }}>{loc}</td>
                  <td style={{ padding: '9px 12px', color: '#1D9E75', fontWeight: 600 }}>{dist}</td>
                  <td style={{ padding: '9px 12px', color: '#475569', fontSize: 13 }}>{stop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Insider Route Tips — 15 Seasons on This Road</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {[
            { tip: 'Leave Haridwar before 6 AM on Day 1', detail: 'The stretch from Haridwar to Rishikesh (24km) and onward to the hills gets congested after 8 AM in peak season. An early start means reaching Barkot by 2-3 PM with time to rest before the trek day.' },
            { tip: 'Stay at Guptkashi, not Sitapur or Sonprayag', detail: 'Many operators push cheaper stays at Sitapur or Sonprayag (closer to the trek). Guptkashi (30km away) has better hotels, proper restaurants, and is at lower altitude (1,319m vs 1,829m). Better acclimatization, better rest, better food.' },
            { tip: 'Day 5 (Uttarkashi to Guptkashi) is the longest drive — budget 9 hours', detail: '220km through the Tehri reservoir bypass and Srinagar valley. The road is good but traffic near Tehri dam on weekends can add 2-3 hours. Some operators try to do this in one day after Gangotri darshan — we always break Day 4 (Gangotri) and Day 5 (drive) to avoid this.' },
            { tip: 'Do Devprayag twice — going and coming back', detail: 'On Day 1 heading out, Devprayag is on your left going north. On the return (Day 9-10), stop on the other bank for the full face-on confluence view. The color difference between the two rivers (green Alaknanda, blue-grey Bhagirathi) is most visible in the morning sun.' },
            { tip: 'Fuel: Fill up at Uttarkashi and Joshimath', detail: 'These are the last reliable full-service fuel stations before Gangotri and Badrinath respectively. Fuel is available at both dhams but at higher rates and sometimes from private vendors. Fill your tank at Uttarkashi before heading to Gangotri, and at Joshimath before Badrinath.' },
          ].map(item => (
            <div key={item.tip} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: '1px solid var(--border)', borderLeft: '3px solid var(--teal)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 5 }}>💡 {item.tip}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>Book Your Char Dham Yatra — We Drive This Route Every Season</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Our drivers have done this route 100+ times. All the stops, shortcuts, and fuel points above come from firsthand experience — not from Google Maps.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 package. Please share details.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[['Char Dham Package 2026', '/char-dham-yatra'], ['Packing List', '/blog/char-dham-yatra-packing-list'], ['Best Time to Visit', '/blog/best-time-char-dham'], ['Registration Guide', '/blog/char-dham-yatra-registration'], ['Cost Breakdown', '/blog/char-dham-yatra-cost'], ['Road Conditions', '/blog/char-dham-yatra-road-conditions-2026']].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
