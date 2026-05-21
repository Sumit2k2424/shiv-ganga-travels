import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';

export const metadata = {
  title: 'Kedarnath Trek Timings 2026 – Start Time, Cut-Off Points & Night Trek Rules',
  description: 'Official Kedarnath trek timings 2026: start before 1:30 PM from Gaurikund to descend safely. Cut-off times at each checkpoint, last entry rules at Kedarnath, and why starting at 5 AM is best.',
  keywords: ['kedarnath trek timings 2026', 'kedarnath trek timing', 'kedarnath trek start time 2026', 'gaurikund to kedarnath trek timing', 'kedarnath trek last time', 'kedarnath trek cut off time', 'when to start kedarnath trek'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-trek-timings-2026` },
  openGraph: {
    title: 'Kedarnath Trek Timings 2026 – Start Time, Cut-Off Points & Night Trek Rules',
    description: 'Official Kedarnath trek timings 2026: last entry 1:30 PM from Gaurikund, descent deadline 5 PM. 16km route cut-off times at each checkpoint. DM Rudraprayag order explained.',
    url: `${SITE.baseUrl}/blog/kedarnath-trek-timings-2026`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Trek Timings 2026 — Start Time, Cut-off & Night Trek Rules | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Trek Timings 2026 — Cut-off Times, Rules & Night Trek Policy',
    description: 'Official Kedarnath trek timings 2026: last entry 1:30 PM from Gaurikund, descent deadline 5 PM. 16km route cut-off times at each checkpoint. DM Rudraprayag',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Trek Timings 2026 — Cut-off Times, Rules & Night T | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the last time to start Kedarnath trek from Gaurikund?', acceptedAnswer: { '@type': 'Answer', text: 'The last permitted time to start the Kedarnath trek from Gaurikund is 1:30 PM. No pilgrim will be allowed to begin the trek after this time. This rule is enforced by the Rudraprayag district administration for safety reasons — to ensure all trekkers reach Kedarnath before dark or return to lower camps safely.' } },
      { '@type': 'Question', name: 'What time should I start the Kedarnath trek for Maha Abhishek?', acceptedAnswer: { '@type': 'Answer', text: 'To attend the Maha Abhishek (4:30 AM puja) at Kedarnath, you must either already be at Kedarnath (overnight stay) or begin the trek the previous afternoon. The Maha Abhishek is only accessible to pilgrims who have stayed overnight at Kedarnath or in the camps near the temple. Starting the trek at 5–6 AM the same morning will result in arriving around 12–1 PM — too late for Abhishek.' } },
      { '@type': 'Question', name: 'What time does the Kedarnath temple open and close?', acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath temple opens at 4:00 AM for the Maha Abhishek puja. General darshan starts at 6:00 AM. The temple closes at 3:00 PM strictly for afternoon prayers and reopens at 5:00 PM for evening darshan. The evening Aarti is at 7:30–8:00 PM. The temple closes for the night at 9:00 PM.' } },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Kedarnath Trek Timings 2026', item: `${SITE.baseUrl}/blog/kedarnath-trek-timings-2026` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} /></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function TrekTimings() {
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Official DM Rudraprayag Order · 2026 Season
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Kedarnath Trek Timings 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 640, margin: '0 auto 16px' }}>
            Last trek start: 1:30 PM from Gaurikund · Descent deadline: 5:00 PM from Kedarnath · No night trek permitted · Cut-off points at each checkpoint
          </p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Kedarnath Trek Timings 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> May 21, 2026 · ✍️ Verified by Shiv Ganga Travels, Haridwar
        </div>

        {/* Critical timing box */}
        <div style={{ background: '#FCEBEB', border: '2px solid #F09595', borderRadius: 14, padding: '18px 22px', marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#791F1F', marginBottom: 10 }}>⚠️ Critical: Official Trek Timings (DM Rudraprayag Order 2026)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 12 }}>
            {[
              ['Start trek from Gaurikund', 'Any time from 4 AM'],
              ['Last time to start trek', '1:30 PM (strict cut-off)'],
              ['Leave Kedarnath for descent', 'By 5:00 PM'],
              ['Night trek/movement', 'BANNED (5 PM – 5 AM)'],
              ['Helicopter last flight', '~3:00 PM (weather permitting)'],
            ].map(([k, v]) => (
              <div key={k} style={{ background: 'rgba(163,45,45,0.08)', borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ fontSize: 11.5, color: '#A32D2D', marginBottom: 3, fontWeight: 600 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: '#791F1F' }}>{v}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#7f1d1d', lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>
            These timings can change based on weather, pilgrim density, or emergency conditions. The DM of Rudraprayag issues a fresh order each season. Check the Kedarnath checkpost notice board at Sonprayag or Gaurikund on the day of your trek.
          </p>
        </div>

        <p style={p}>
          The Kedarnath trek from Gaurikund is 16km at altitude between 1,980m and 3,583m. The Rudraprayag district administration sets fixed cut-off timings every season to prevent pilgrims from being stranded in the dark on the Himalayan route. Understanding these timings before you leave Haridwar is essential — arriving at Gaurikund late will mean turning back without darshan.
        </p>

        <h2 style={h2}>Trek Stage-by-Stage: Distance, Time & Cut-off Points</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Stage', 'Location', 'From Gaurikund', 'Altitude', 'Walk time (fit pilgrim)', 'Latest arrival for return same day'].map(h => (
                <th key={h} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Start', 'Gaurikund (hot spring + base)', '0 km', '1,982m', '—', 'Start by 7 AM for same-day return'],
                ['Stage 1', 'Rambara / Jungle Chatti', '4 km', '2,440m', '1.5–2 hrs', 'Arrive by 9–10 AM'],
                ['Stage 2', 'Bhimbali (rest point)', '6.5 km', '2,760m', '2.5–3 hrs', 'Arrive by 10–11 AM'],
                ['Stage 3', 'Lincholi', '9 km', '3,143m', '3.5–4 hrs', 'Arrive by 11 AM–12 PM'],
                ['Stage 4', 'Kedarnath Base Camp', '13 km', '3,394m', '5–6 hrs', 'Arrive by 12–1 PM'],
                ['Destination', 'Kedarnath Temple', '16 km', '3,583m', '6–8 hrs', 'Arrive by 1:30 PM (last cut-off)'],
              ].map(([stage, loc, dist, alt, time, cutoff], i) => (
                <tr key={stage} style={{ borderBottom: '1px solid var(--border)', background: i === 5 ? 'rgba(220,38,38,0.05)' : i % 2 === 0 ? '#fff' : 'var(--bg)', verticalAlign: 'top' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: 'var(--navy)' }}>{stage}</td>
                  <td style={{ padding: '9px 12px', color: '#475569' }}>{loc}</td>
                  <td style={{ padding: '9px 12px', fontWeight: 600, color: '#1D9E75' }}>{dist}</td>
                  <td style={{ padding: '9px 12px', color: '#7C3AED', fontWeight: 600 }}>{alt}</td>
                  <td style={{ padding: '9px 12px', color: '#475569' }}>{time}</td>
                  <td style={{ padding: '9px 12px', fontSize: 12.5, color: '#D85A30', fontWeight: 600 }}>{cutoff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Why These Timings Are Enforced</h2>
        <p style={p}>
          The 2013 Kedarnath disaster (June 16, 2013) killed over 5,000 people. A significant factor was that thousands of pilgrims were caught on the 16km route when catastrophic flooding and landslides struck. Since then, the Uttarakhand government has systematically tightened safety protocols, including strict daily pilgrim caps (18,000/day) and movement cut-off times.
        </p>
        <p style={p}>
          The 1:30 PM cut-off is calculated so that even a slow pilgrim (walking at 2km/hr) who starts at 1:30 PM from Gaurikund can reach Kedarnath by 9:30 PM — but the administration errs on the side of caution and enforces turnaround at the checkpoint. The 5 PM descent cut-off ensures all foot traffic is off the mountain by dark (sunset at approximately 7 PM in season).
        </p>

        <h2 style={h2}>Best Time to Start the Trek</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12, marginBottom: 24 }}>
          {[
            { time: '4:00–5:00 AM', badge: 'Best for same-day return', color: '#1D9E75', detail: 'Start at 4 AM if you want to reach Kedarnath by 11–12 PM, attend the afternoon darshan, and return to Gaurikund the same evening. This is the timetable most pilgrims on a day-trip basis follow. The trail is cool, quiet, and clear at this hour. Bring a torch.' },
            { time: '5:00–7:00 AM', badge: 'Standard departure', color: 'var(--navy)', detail: 'The most common departure window. Gaurikund to Kedarnath in 6-7 hours = arrival 11 AM–2 PM. Enough time for darshan, prasad, and either overnight stay or return. The trail has other pilgrims by 6 AM but is not yet crowded.' },
            { time: '7:00 AM–12:00 PM', badge: 'Late start — overnight recommended', color: '#E8920A', detail: 'Starting after 7 AM means you arrive in the afternoon. Darshan may have a longer queue. If starting after 9 AM, plan to stay overnight at Kedarnath — attempting a same-day return from a late start is exhausting and cuts it close to the descent cut-off.' },
            { time: 'After 12 PM', badge: 'Turnaround risk', color: '#D85A30', detail: 'You may be stopped at checkposts. The 1:30 PM cut-off is strictly enforced during peak season. Some checkposts may turn you back as early as noon if the daily pilgrim count is near the cap. Do not rely on being allowed through.' },
          ].map(item => (
            <div key={item.time} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: `1px solid var(--border)`, borderLeft: `3px solid ${item.color}` }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                <strong style={{ fontSize: 14, color: 'var(--navy)' }}>{item.time}</strong>
                <span style={{ fontSize: 11, background: 'var(--bg)', color: item.color, fontWeight: 700, padding: '2px 8px', borderRadius: 20 }}>{item.badge}</span>
              </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="kedarnath" />
              <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.7 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Overnight Stay vs Same-Day Return — Which Is Better?</h2>
        <p style={p}>
          This is the single most important decision for your Kedarnath visit. From 15 seasons of sending pilgrims to Kedarnath, our honest advice is this: if you can manage it physically, <strong>stay overnight at Kedarnath</strong>. The reasons are not logistical — they are experiential.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {[
            'The 4:30 AM Maha Abhishek puja — milk, curd, ghee poured directly on the Shivling — is the most sacred ritual at Kedarnath. It requires overnight stay. This is not available to day visitors.',
            'After the tourist groups leave (approximately 4 PM), the temple becomes profoundly quiet. 50–200 pilgrims, no noise, the Shivling lit by candles and oil lamps. This is Kedarnath as it was meant to be experienced.',
            'The Shankaracharya Samadhi behind the temple is rarely visited because day-trippers are rushing for the descent. It takes 10 minutes and is among the most spiritually significant structures in India.',
            'The 2013 flood boulder (just behind the temple) deflected the flood waters that killed thousands in the valley below. The temple was untouched. You can touch this rock. Day-tippers almost never find it.',
          ].map((point, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid var(--border)', display: 'flex', gap: 10, fontSize: 13.5, color: '#334155', lineHeight: 1.7 }}>
              <span style={{ color: 'var(--navy)', fontWeight: 700, flexShrink: 0 }}>→</span>{point}
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>Book Kedarnath Package with Overnight Stay</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Our Kedarnath 3N/4D package includes overnight at Kedarnath, 4 AM Maha Abhishek arrangement, and Guptkashi base. From ₹6,999/person.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want Kedarnath package with overnight stay. Please share details.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Book Package</a>
            View Kedarnath Package →
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[['Kedarnath Trek Guide', '/blog/kedarnath-trek-guide'], ['Pony & Palki Rates', '/blog/kedarnath-pony-palki-rates-2026'], ['VIP Darshan', '/blog/vip-darshan-kedarnath-booking'], ['Kedarnath Registration', '/blog/kedarnath-registration-2026'], ['Kedarnath Darshan Timings', '/blog/kedarnath-darshan-timing']].map(([l, h]) => (
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
