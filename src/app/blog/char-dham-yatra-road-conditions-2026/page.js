import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Road Conditions 2026 — Current Status, Landslide Zones & All-Weather Road',
  description: 'Char Dham Yatra road conditions 2026: current status of all 4 routes, landslide-prone zones, All-Weather Road project update, Joshimath situation, and driving tips for mountain roads.',
  keywords: ['char dham yatra road condition 2026','char dham road status 2026','char dham yatra route condition','kedarnath route road condition','badrinath road condition 2026','char dham all weather road','char dham road closure 2026','joshimath road condition'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-road-conditions-2026` },
  openGraph: {
    title: 'Char Dham Yatra Road Conditions 2026 — Live Status & All-Weather Road Update',
    description: 'Current road conditions for all 4 Char Dham routes 2026. Landslide zones, All-Weather Road project status, Joshimath update, and mountain driving tips.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-road-conditions-2026`, type: 'article',
  },
};

function Schema() {
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Char Dham Road Conditions 2026', item: `${SITE.baseUrl}/blog/char-dham-yatra-road-conditions-2026` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />;
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function RoadConditions() {
  const routes = [
    {
      route: 'Haridwar → Barkot (Yamunotri route)', highway: 'NH7 + Yamuna Valley Road', dist: '210 km',
      status: 'Good', statusColor: '#15803D', statusBg: '#EAF3DE',
      desc: 'NH7 from Haridwar to Vikasnagar/Barkot is a well-maintained highway. Road narrows significantly after Barkot. The final 30km before Janki Chatti (Yamunotri base) is a narrow mountain road with some blind curves. NHAI has been widening this stretch — some construction zones with 10–15 minute delays possible.',
      caution: 'Monsoon (July–August): this route has moderate landslide risk around the Dharasu Bend area. Check BRO/NHAI updates if traveling in July–August.',
      tip: 'From Janki Chatti, private vehicles cannot go further — the 6km trek begins here. Official shared jeeps run from Sankri Road to Janki Chatti.',
    },
    {
      route: 'Uttarkashi → Gangotri', highway: 'NH108', dist: '100 km',
      status: 'Good (post-monsoon)', statusColor: '#15803D', statusBg: '#EAF3DE',
      desc: 'NH108 from Uttarkashi to Gangotri is mostly single-lane mountain road along the Bhagirathi. The road is well maintained by BRO (Border Roads Organisation) as this is also the route to the Gangotri glacier research stations. Several small bridges en route — heavy vehicles are restricted beyond Gangotri town.',
      caution: 'Above Harsil (18km before Gangotri), the road becomes more exposed to rockfall. Avoid stopping in marked rockfall zones. The 10 PM–4 AM vehicle movement ban applies here.',
      tip: 'Gangotri is at 3,048m. The road ends at the temple parking area. No vehicles beyond the main temple gate. The Gangotri Glacier (Gomukh source, 19km further) requires a separate trek permit.',
    },
    {
      route: 'Guptkashi → Sonprayag → Gaurikund (Kedarnath route)', highway: 'State road', dist: '30 km to Sonprayag',
      status: 'Restricted (Sonprayag barrier)', statusColor: '#D85A30', statusBg: '#FCEBEB',
      desc: 'Private vehicles are not permitted beyond the Sonprayag checkpost. All pilgrims park at Sonprayag (free GMVN parking) and take government-run shared jeeps to Gaurikund (₹50/person, 5km). From Gaurikund, only foot/pony/helicopter. The Sonprayag–Gaurikund road is a narrow single-lane mountain road maintained for the shared jeep service.',
      caution: 'This is the most congested point in the entire Char Dham circuit during peak season. Arrive at Sonprayag before 7 AM to avoid 1–2 hour queues for the shared jeep. The checkpost also does SpO2 screening — carry your pulse oximeter.',
      tip: 'Some operators park at Sitapur or Phata (cheaper parking) instead of Sonprayag. Phata has the Phata Helipad if you plan helicopter. Sonprayag is closer to Gaurikund.',
    },
    {
      route: 'Joshimath → Badrinath', highway: 'NH58', dist: '46 km',
      status: 'Good (monitored)', statusColor: '#0C447C', statusBg: '#EEF6FF',
      desc: 'NH58 from Joshimath to Badrinath is a well-maintained NHAI highway in most sections. The Joshimath land subsidence crisis (2023) affected the town but the highway through and beyond is stable. Regular monitoring by Joshimath Disaster Management Authority. Road from Vishnuprayag onwards follows the Alaknanda gorge — spectacular but narrow in sections.',
      caution: 'Joshimath subsidence: as of 2026, the situation in Joshimath town is stable but monitored. The highway through Joshimath is open and functional. The area near Niti Valley and some old residential sections remain restricted.',
      tip: 'From Mana Village (3km beyond Badrinath temple, 3,219m), the road ends at the Indo-Tibet border. This is the highest accessible point by road on the Char Dham circuit. A short walk gives you views of the Saraswati river source.',
    },
  ];

  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Updated May 2026 · Season Open
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Char Dham Yatra Road Conditions 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 640, margin: '0 auto 16px' }}>
            Current status of all 4 routes, landslide-prone zones, All-Weather Road project update, Joshimath situation, and mountain driving rules.
          </p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Blog</Link><span>›</span>
          <span>Road Conditions 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 2026 · Season opened April 19–23</div>

        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: 12, padding: '14px 16px', marginBottom: 24, fontSize: 13.5, color: '#15803D' }}>
          <strong>2026 Season Status:</strong> All four Char Dham routes are open as of April 2026. Yamunotri and Gangotri opened April 19, Kedarnath April 22, Badrinath April 23. No major road closures reported at time of writing. Monsoon season (July–August) is when conditions deteriorate — plan accordingly.
        </div>

        <p style={p}>Mountain roads are fundamentally different from plains highways. Char Dham routes cross geological zones with active seismicity, heavy snowmelt in spring, and monsoon-triggered landslides in July–August. Understanding the current conditions and the specific hazard zones on each route is essential for safe travel. Below is the 2026 status for each route compiled from BRO (Border Roads Organisation) updates, NHAI bulletins, and our own driver reports.</p>

        <h2 style={h2}>Route-by-Route Road Condition Status</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
          {routes.map(route => (
            <div key={route.route} style={{ background: '#fff', borderRadius: 12, padding: '16px 18px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', margin: 0, marginBottom: 4 }}>{route.route}</h3>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{route.highway} · {route.dist}</div>
                </div>
                <span style={{ background: route.statusBg, color: route.statusColor, fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>● {route.status}</span>
              </div>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75, marginBottom: 10 }}>{route.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div style={{ background: '#FCEBEB', borderRadius: 8, padding: '9px 12px', fontSize: 13, color: '#7f1d1d' }}>
                  <strong>⚠️ Caution:</strong> {route.caution}
                </div>
                <div style={{ background: 'rgba(232,146,10,0.07)', borderRadius: 8, padding: '9px 12px', fontSize: 13, color: '#7B3F00' }}>
                  <strong>💡 Tip:</strong> {route.tip}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>All-Weather Road Project — 2026 Status</h2>
        <p style={p}>
          The Char Dham All-Weather Road project (officially: Char Dham Pariyojana) is an NHAI infrastructure initiative to upgrade all four Char Dham routes to double-lane, all-weather connectivity. The project has been under construction since 2018 and is still partially underway in 2026, with most of the work on the Kedarnath (Rishikesh–Gangotri–Yamunotri) and Badrinath corridors. Completed sections of the widened road significantly reduce travel times and improve safety. Under-construction sections have intermittent delays of 15–30 minutes at construction zones.
        </p>
        <div style={{ background: '#EEF6FF', border: '1px solid #B5D4F4', borderRadius: 10, padding: '14px 16px', marginBottom: 24, fontSize: 13.5, color: '#0C447C' }}>
          <strong>Important note from the Supreme Court (2020):</strong> The Supreme Court of India ordered that roads in the Char Dham project should be widened to 5.5m carriageway maximum (not the originally proposed 10m) to protect the Himalayan ecology and reduce landslide risk. This narrower specification is now standard for the project. The road remains single-lane + passing zones in many sections by design, not by neglect.
        </div>

        <h2 style={h2}>Mountain Driving Rules — 2026</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 10, marginBottom: 28 }}>
          {[
            { rule: '10 PM–4 AM vehicle ban', detail: 'All vehicles (private and commercial) are banned from all Char Dham routes between 10 PM and 4 AM. Plan to reach your overnight stop by 9 PM maximum.' },
            { rule: 'Heavy vehicle restrictions', detail: 'Commercial trucks over 7.5 tonnes are restricted on several sections. Large tourist buses are often directed via alternate routes during peak season.' },
            { rule: 'Vehicle fitness certification', detail: 'All commercial vehicles must have valid Uttarakhand Tourism permits. Private vehicles require valid PUC certificates and should carry a spare tyre.' },
            { rule: 'No stopping in rockfall zones', detail: 'Yellow/red marked zones on the road mean active rockfall risk. Do not stop, photograph, or walk in these areas. Keep moving.' },
            { rule: 'No overtaking on narrow sections', detail: 'On single-lane stretches, follow the traffic marshal direction. Aggressive overtaking on mountain bends is the #1 cause of accidents on these routes.' },
            { rule: 'Green Card for non-UK vehicles', detail: 'Vehicles registered outside Uttarakhand need the ₹50 Green Card permit from greencard.uk.gov.in. Checked at entry checkposts.' },
          ].map(item => (
            <div key={item.rule} style={{ background: '#fff', borderRadius: 9, padding: '12px 14px', border: '1px solid var(--border)', borderLeft: '3px solid var(--navy)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 4 }}>{item.rule}</div>
              <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.65 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>How to Check Live Road Status</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {[
            { source: 'NHAI Helpline', detail: '1033 — National Highways Authority helpline for road status queries on NH58 and NH108.' },
            { source: 'BRO Road Status', detail: 'BRO (Border Roads Organisation) maintains the Gangotri and Yamunotri routes. Check bro.gov.in or call local BRO office in Uttarkashi.' },
            { source: 'Uttarakhand Police Twitter/X', detail: '@uttarakhandpolice posts real-time road closure updates during landslides and events.' },
            { source: 'WhatsApp our drivers', detail: 'Our Haridwar-based drivers get direct updates from the mountains. WhatsApp us the morning before any stretch — we confirm conditions from our own vehicle network on route.' },
          ].map(item => (
            <div key={item.source} style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid var(--border)', display: 'flex', gap: 10, fontSize: 13.5 }}>
              <span style={{ fontWeight: 700, color: 'var(--navy)', whiteSpace: 'nowrap' }}>{item.source}:</span>
              <span style={{ color: '#475569' }}>{item.detail}</span>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>Our Drivers Know These Roads Better Than Google Maps</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>15 seasons, 50,000+ pilgrims. Our Haridwar-based drivers have daily contact with the BRO, police checkposts, and fellow operators on these routes. Real-time updates are part of every package.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Can you check the current Char Dham road conditions? I am planning travel soon.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Ask Road Status</a>
            <Link href="/char-dham-yatra" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>Book Package →</Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[['Route Map 2026', '/blog/char-dham-yatra-route-map'], ['Green Card Guide', '/blog/green-card-char-dham-yatra-2026'], ['New Rules 2026', '/blog/char-dham-yatra-2026-new-rules'], ['Best Time to Visit', '/blog/best-time-char-dham'], ['Packing List', '/blog/char-dham-yatra-packing-list']].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
