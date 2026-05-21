import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Road Status 2026 — Live Route Conditions Today',
  description: 'Live Char Dham road status May 2026. Current conditions on Kedarnath, Badrinath, Gangotri & Yamunotri routes from Haridwar. Peak season traffic advisory, trek trail status & emergency helplines.',
  keywords: ['char dham road status 2026','char dham road status today','kedarnath road open 2026','badrinath highway status','gangotri road condition','yamunotri route status','char dham yatra route update','sonprayag road condition','joshimath road open'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-road-status` },
  openGraph: {
    title: 'Char Dham Yatra Road Status 2026 — Live Route Conditions | Shiv Ganga Travels',
    description: 'Live road conditions for all 4 Char Dham routes. Updated May 21, 2026. Kedarnath, Badrinath, Gangotri, Yamunotri — full status with checkpoints, helplines and travel advisories.',
    url: `${SITE.baseUrl}/char-dham-road-status`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Road Status 2026 — Live Route Conditions | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Road Status 2026 — Live Route Conditions',
    description: 'Current road conditions on all 4 Char Dham routes. Peak season advisory, trek trail status & emergency helplines.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Road Status 2026 — Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question', name: 'Is Kedarnath road open in May 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Kedarnath route (NH7 via Rudraprayag–Guptkashi–Sonprayag) is fully open as of May 21, 2026. Sonprayag to Gaurikund (5km) operates on timed one-way police slots — start from Haridwar by 4 AM to reach Sonprayag before peak queue time. The Kedarnath trek (16km from Gaurikund) is open and in good condition. SDRF helpline: +91-9411112985.' },
      },
      {
        '@type': 'Question', name: 'What is the Badrinath highway condition in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Badrinath highway (NH58) is open and in good condition as of May 2026. Joshimath road has a 30 km/h speed limit through town due to ongoing subsidence monitoring, but all vehicles including Innova Crystas pass without issue. Mana Village (3km beyond Badrinath) is also accessible. Drive time from Haridwar: 8–9 hours.' },
      },
      {
        '@type': 'Question', name: 'Is it safe to travel to Char Dham in peak May season?',
        acceptedAnswer: { '@type': 'Answer', text: 'May is peak pilgrim season for Char Dham Yatra. Roads are open and weather is clear. The main challenge is heavy traffic — especially near Sonprayag (Kedarnath) and Joshimath (Badrinath). Leave Haridwar early (3–4 AM for Kedarnath, 5 AM for Badrinath) to beat the rush. Book hotels in advance as they fill up quickly in May.' },
      },
      {
        '@type': 'Question', name: 'What should I do if the road is blocked during Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Wait at the nearest safe point — dhabas and rest areas are every 2–3km on all routes. Call SDRF (+91-9411112985) for road updates and assistance. If you are travelling with Shiv Ganga Travels, our 24/7 WhatsApp support (+91-7017082807) monitors all routes in real time and will redirect your vehicle or arrange holding accommodation immediately.' },
      },
    ],
  };

  const announcement = {
    '@context': 'https://schema.org',
    '@type': 'SpecialAnnouncement',
    name: 'Char Dham Yatra 2026 — Peak Season Road Advisory',
    text: 'All four Char Dham routes are open as of May 21, 2026. Peak pilgrim traffic expected on all routes through June. Leave Haridwar before 5 AM for Kedarnath route to avoid Sonprayag queues. Joshimath 30 km/h limit in effect.',
    datePosted: '2026-05-21',
    expires: '2026-06-30',
    category: 'https://www.wikidata.org/wiki/Q81068910',
    announcementLocation: { '@type': 'AdministrativeArea', name: 'Uttarakhand, India' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(announcement) }} />
    </>
  );
}

const ROUTES = [
  {
    id: 'kedarnath',
    route: 'Kedarnath Route',
    highway: 'NH7 · Rudraprayag–Guptkashi–Sonprayag',
    distance: '218 km from Haridwar',
    driveTime: '6–7 hrs',
    status: 'open',
    statusLabel: '🟢 Open',
    trafficLevel: 'high',
    trafficLabel: '🔴 High Traffic',
    updated: 'May 21, 2026',
    roadDetail: 'NH7 is fully operational from Haridwar to Sonprayag. The Jhari bypass near Kund has a minor repair patch causing a 10–15 minute delay during peak hours — best avoided between 10 AM and 2 PM. Sonprayag to Gaurikund (5km) runs on timed one-way police slots with shared government jeeps (₹50/person). This is the busiest bottleneck in the entire yatra circuit right now.',
    trekStatus: '✅ Kedarnath Trek (16km from Gaurikund) — Open and in good condition. Mules and palkis operational.',
    peakTip: 'Leave Haridwar by 3–4 AM. Reach Sonprayag before 7 AM to avoid queue. SpO2 screening at Sonprayag checkpoint — bring your oximeter.',
    checkpoints: ['Rishikesh (42km)', 'Devprayag (73km)', 'Rudraprayag (142km)', 'Tilwara–Agastmuni (163km)', 'Guptkashi (188km)', 'Sonprayag (205km — checkpoint)', 'Gaurikund (210km — trek base)'],
    helplines: [{ label: 'SDRF Rescue', num: '+91-9411112985' }, { label: 'Kedarnath Control', num: '+91-1364-262130' }],
  },
  {
    id: 'badrinath',
    route: 'Badrinath Route',
    highway: 'NH58 · Rishikesh–Chamoli–Joshimath',
    distance: '320 km from Haridwar',
    driveTime: '8–9 hrs',
    status: 'caution',
    statusLabel: '🟡 Open — Caution',
    trafficLevel: 'high',
    trafficLabel: '🔴 High Traffic',
    updated: 'May 21, 2026',
    roadDetail: 'NH58 is open and in good condition. Joshimath town has a mandatory 30 km/h speed limit due to ongoing ground subsidence monitoring — the road itself is safe and all vehicles including heavy ones pass through daily. Pipalkoti to Chamoli section has some loose gravel patches after recent rain — drive carefully. Mana Village (3km beyond Badrinath temple, at 3,219m) is accessible by road.',
    trekStatus: '✅ Badrinath Temple — Motor road to main entrance. No trek required. Mana Village walk (3km, flat) accessible.',
    peakTip: 'Leave Haridwar by 5 AM. Arrive Joshimath before 2 PM for a comfortable drive through town before evening traffic peaks. Book Badrinath hotels 1 week in advance in May.',
    checkpoints: ['Rishikesh', 'Devprayag', 'Srinagar (Garhwal)', 'Rudraprayag', 'Chamoli', 'Pipalkoti', 'Joshimath (30 km/h limit)', 'Badrinath Temple'],
    helplines: [{ label: 'BRTF Control', num: '+91-1389-222210' }, { label: 'Joshimath DM', num: '+91-1389-222060' }],
  },
  {
    id: 'gangotri',
    route: 'Gangotri Route',
    highway: 'NH108 · Rishikesh–Uttarkashi–Harsil',
    distance: '265 km from Haridwar',
    driveTime: '7–8 hrs',
    status: 'caution',
    statusLabel: '🟡 Open — Monitor Weather',
    trafficLevel: 'medium',
    trafficLabel: '🟡 Moderate Traffic',
    updated: 'May 21, 2026',
    roadDetail: 'NH108 is open. The all-weather Rishikesh–Uttarkashi highway has significantly reduced journey time. The Harsil to Gangotri section (last 25km) remains the most exposed stretch — prone to rockfall in heavy rain. No incidents reported this week. Vehicle movement ban between 10 PM and 4 AM applies on the final stretch. Uttarkashi bypass is operational.',
    trekStatus: '✅ Gangotri Temple — Motor road all the way. Gomukh Glacier trek (19km beyond) requires separate permit from Forest Dept.',
    peakTip: 'Start from Haridwar by 6 AM and reach Gangotri before 2 PM to ensure you complete darshan before the evening weather window. Avoid the Harsil–Gangotri section after rain.',
    checkpoints: ['Rishikesh', 'Chamba', 'Dharasu Bend', 'Uttarkashi', 'Bhatwari', 'Harsil', 'Lanka', 'Gangotri Temple'],
    helplines: [{ label: 'PWDUK Helpline', num: '1800-180-1811' }, { label: 'Gangotri Control', num: '+91-1374-222221' }],
  },
  {
    id: 'yamunotri',
    route: 'Yamunotri Route',
    highway: 'NH7 + Yamuna Valley Road · Barkot–Janki Chatti',
    distance: '175 km from Haridwar',
    driveTime: '5–6 hrs',
    status: 'open',
    statusLabel: '🟢 Open',
    trafficLevel: 'medium',
    trafficLabel: '🟡 Moderate Traffic',
    updated: 'May 21, 2026',
    roadDetail: 'Road to Janki Chatti is fully open and in good condition. The NH7 to Barkot is a wide highway — fast drive. After Barkot, the road narrows through the Yamuna valley. NHAI widening work continues near the Dharasu section — 10-minute delays possible. Phoolchatti alternate route (3km shorter trek) is accessible on dry days.',
    trekStatus: '✅ Yamunotri Trek (6km from Janki Chatti) — Open and comfortable. Mules operational. Surya Kund hot spring flowing.',
    peakTip: 'Lightest traffic of the four dhams. Leave Haridwar by 5–6 AM for a comfortable half-day drive. Good option to combine with Gangotri on a two-dham stretch.',
    checkpoints: ['Rishikesh', 'Chamba', 'Barkot (base town)', 'Sayanachatti', 'Janki Chatti (road end, trek base)', 'Yamunotri Temple (6km trek)'],
    helplines: [{ label: 'Local Police', num: '01372-252300' }, { label: 'Yamunotri Control', num: '+91-1372-252325' }],
  },
];

const STATUS_COLOR  = { open: '#15803D', caution: '#D97706', closed: '#DC2626' };
const STATUS_BG     = { open: '#F0FDF4', caution: '#FFFBF3', closed: '#FFF1F2' };
const STATUS_BORDER = { open: '#BBF7D0', caution: '#FDE68A', closed: '#FECACA' };
const TRAFFIC_COLOR = { high: '#DC2626', medium: '#D97706', low: '#15803D' };

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.55rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 14, marginTop: 40, letterSpacing: '-0.02em' };

export default function RoadStatus() {
  return (
    <>
      <Schema />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '48px 20px 36px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            🟢 Peak Season 2026 — All Routes Open
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem,4.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.25 }}>
            Char Dham Yatra Road Status 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 15, marginBottom: 20, lineHeight: 1.7, maxWidth: 620, margin: '0 auto 20px' }}>
            Live road conditions on all 4 Char Dham routes from Haridwar — monitored daily by the Shiv Ganga Travels operations team on the ground
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
            <span style={{ background: '#F0FDF4', color: '#15803D', padding: '5px 16px', borderRadius: 100, fontWeight: 700, fontSize: 13 }}>🟢 Open</span>
            <span style={{ background: '#FFFBF3', color: '#D97706', padding: '5px 16px', borderRadius: 100, fontWeight: 700, fontSize: 13 }}>🟡 Open — Caution</span>
            <span style={{ background: '#FFF1F2', color: '#DC2626', padding: '5px 16px', borderRadius: 100, fontWeight: 700, fontSize: 13 }}>🔴 Blocked / Closed</span>
          </div>
          <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 10, padding: '8px 18px', fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
            🕐 Last updated: <strong style={{ color: '#FFD166', marginLeft: 4 }}>May 21, 2026</strong>
            <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>|</span>
            Next update: May 28, 2026
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Char Dham Yatra</Link>
          <span>›</span>
          <span>Road Status 2026</span>
        </div>
      </nav>

      {/* Peak season advisory banner */}
      <div style={{ background: '#FFF3CD', borderBottom: '2px solid #E8920A', padding: '12px 20px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', fontSize: 13.5, color: '#7B3F00', display: 'flex', gap: 10, alignItems: 'flex-start', lineHeight: 1.6 }}>
          <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>⚠️</span>
          <span>
            <strong>Peak Season Advisory (May–June 2026):</strong> All four routes are open but traffic is extremely heavy, especially on weekends. Sonprayag (Kedarnath) sees 2–3 hour queues after 9 AM during peak days.
            Road conditions can change within hours during afternoon showers — always verify with your operator before travel.{' '}
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Can you share today\'s road update for Char Dham Yatra?')}`}
              style={{ color: '#7B3F00', fontWeight: 700 }} target="_blank" rel="nofollow noopener noreferrer">
              WhatsApp us for today's update →
            </a>
          </span>
        </div>
      </div>

      {/* Season quick stats */}
      <div style={{ background: 'var(--navy-light)', borderBottom: '1px solid var(--border)', padding: '14px 20px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Season Week', val: 'Week 5 of 29' },
            { label: 'Kedarnath', val: '🟢 Trek Open' },
            { label: 'Badrinath', val: '🟡 Road Caution' },
            { label: 'Gangotri', val: '🟡 Weather Monitor' },
            { label: 'Yamunotri', val: '🟢 Open' },
            { label: 'Season Closes', val: 'Nov 11–13, 2026' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', minWidth: 100 }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)' }}>{s.val}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Route cards */}
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '36px 20px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {ROUTES.map(r => (
            <div key={r.id} style={{
              borderRadius: 16,
              border: `1.5px solid ${STATUS_BORDER[r.status]}`,
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}>
              {/* Card header */}
              <div style={{ background: STATUS_COLOR[r.status], padding: '14px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16.5, color: '#fff', marginBottom: 4 }}>{r.route}</div>
                  <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.78)', lineHeight: 1.5 }}>
                    {r.highway}<br />
                    {r.distance} · {r.driveTime} drive time
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                  <span style={{ background: 'rgba(255,255,255,0.22)', color: '#fff', fontWeight: 800, fontSize: 13, padding: '4px 14px', borderRadius: 100, border: '1.5px solid rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>
                    {r.statusLabel}
                  </span>
                  <span style={{ background: `rgba(${r.trafficLevel === 'high' ? '220,38,38' : '217,119,6'},0.2)`, color: '#fff', fontWeight: 600, fontSize: 12, padding: '2px 10px', borderRadius: 100 }}>
                    {r.trafficLabel}
                  </span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>Updated: {r.updated}</span>
                </div>
              </div>

              {/* Card body */}
              <div style={{ background: STATUS_BG[r.status], padding: '18px 20px' }}>
                {/* Road detail */}
                <p style={{ fontSize: 14.5, color: '#334155', lineHeight: 1.8, marginBottom: 14 }}>{r.roadDetail}</p>

                {/* Trek/temple status */}
                <div style={{ background: '#fff', borderRadius: 10, padding: '10px 14px', marginBottom: 14, border: `1px solid ${STATUS_BORDER[r.status]}`, fontSize: 13.5, color: '#334155', fontWeight: 500 }}>
                  {r.trekStatus}
                </div>

                {/* Peak season tip */}
                <div style={{ background: 'rgba(15,43,91,0.06)', borderRadius: 10, padding: '10px 14px', marginBottom: 16, border: '1px solid rgba(15,43,91,0.1)' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 4 }}>💡 Peak Season Tip</span>
                  <span style={{ fontSize: 13.5, color: '#334155', lineHeight: 1.7 }}>{r.peakTip}</span>
                </div>

                {/* Checkpoints + helplines grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 14 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 12, color: 'var(--navy)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Route Checkpoints</div>
                    {r.checkpoints.map((cp, i) => (
                      <div key={cp} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#475569', padding: '3px 0' }}>
                        <span style={{ color: 'var(--teal)', fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {cp}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {r.helplines.map(h => (
                      <div key={h.label} style={{ background: '#fff', borderRadius: 10, padding: '11px 14px', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: 11.5, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 3 }}>{h.label.toUpperCase()}</div>
                        <a href={`tel:${h.num}`} style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', textDecoration: 'none' }}>{h.num}</a>
                      </div>
                    ))}
                    <div style={{ background: '#fff', borderRadius: 10, padding: '11px 14px', border: '1px solid var(--border)' }}>
                      <div style={{ fontSize: 11.5, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 3 }}>UNIVERSAL EMERGENCY</div>
                      <a href="tel:+919411112985" style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', textDecoration: 'none' }}>SDRF: +91-9411112985</a>
                      <a href="tel:108" style={{ display: 'block', fontWeight: 700, fontSize: 13, color: 'var(--navy)', textDecoration: 'none' }}>Ambulance: 108</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How we monitor */}
        <div style={{ marginTop: 44 }}>
          <h2 style={h2}>How We Track Char Dham Road Conditions</h2>
          <p style={{ fontSize: 15, color: '#334155', lineHeight: 1.85, marginBottom: 14 }}>
            We&apos;ve been running Char Dham Yatra groups from Haridwar since 2010. Over 15 seasons, we&apos;ve learned that mountain road conditions can change within the span of a single afternoon shower. That&apos;s why we don&apos;t rely on official updates alone.
          </p>
          <p style={{ fontSize: 15, color: '#334155', lineHeight: 1.85, marginBottom: 14 }}>
            Our operations team in Haridwar is in constant contact with our drivers who are on these routes every single day. We also have ground contacts at Guptkashi (Kedarnath staging town), Uttarkashi (Gangotri base), and Joshimath (Badrinath base) who send us WhatsApp updates every morning and after any significant rain event.
          </p>
          <p style={{ fontSize: 15, color: '#334155', lineHeight: 1.85 }}>
            This page is updated every Monday during the season and immediately after major weather events or blockages. During monsoon (July–August), we update every 2–3 days because conditions change that quickly. If you&apos;re travelling with us, you&apos;ll receive a WhatsApp message the night before your travel day with current road conditions and any last-minute advisories.
          </p>
        </div>

        {/* Landslide zone reference */}
        <div style={{ marginTop: 40 }}>
          <h2 style={h2}>Known Landslide-Prone Stretches (Monsoon Season)</h2>
          <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, marginBottom: 16 }}>
            These stretches are clear during May–June and post-monsoon (September–October). Check before travel if visiting in July–August.
          </p>
          <div style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--border)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
              <thead>
                <tr style={{ background: 'var(--navy-light)' }}>
                  <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, fontSize: 12, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Location</th>
                  <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, fontSize: 12, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Route</th>
                  <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, fontSize: 12, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Dharasu Bend', 'Yamunotri (NH7)', 'Moderate'],
                  ['Harsil–Gangotri (last 25km)', 'Gangotri (NH108)', 'High in monsoon'],
                  ['Jhari Bypass, Kund', 'Kedarnath (NH7)', 'Low (repair in progress)'],
                  ['Tilwara–Agastmuni', 'Kedarnath (NH7)', 'Moderate'],
                  ['Pipalkoti–Chamoli', 'Badrinath (NH58)', 'Moderate'],
                  ['Vishnuprayag gorge', 'Badrinath (NH58)', 'Low–Moderate'],
                ].map(([loc, route, risk], i) => (
                  <tr key={loc} style={{ borderTop: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                    <td style={{ padding: '9px 16px', fontWeight: 600, color: 'var(--navy)' }}>{loc}</td>
                    <td style={{ padding: '9px 16px', color: '#475569' }}>{route}</td>
                    <td style={{ padding: '9px 16px', color: risk.includes('High') ? '#DC2626' : risk.includes('Low') ? '#15803D' : '#D97706', fontWeight: 600 }}>{risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* All emergency numbers */}
      <div style={{ background: 'var(--navy)', padding: '36px 20px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <h2 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, marginBottom: 20, textAlign: 'center' }}>
            Emergency Contacts — Char Dham Yatra 2026
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(195px,1fr))', gap: 10, marginBottom: 28 }}>
            {[
              { label: 'SDRF Rescue', num: '+91-9411112985' },
              { label: 'Ambulance', num: '108' },
              { label: 'Police', num: '100' },
              { label: 'GMVN Helpline', num: '+91-135-2559070' },
              { label: 'Kedarnath Control', num: '+91-1364-262130' },
              { label: 'Badrinath Control', num: '+91-1389-222210' },
              { label: 'Gangotri Control', num: '+91-1374-222221' },
              { label: 'AIIMS Air Ambulance', num: '+91-135-2462945' },
            ].map(c => (
              <div key={c.label} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '12px 14px', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)', marginBottom: 4 }}>{c.label}</div>
                <a href={`tel:${c.num}`} style={{ fontWeight: 700, fontSize: 15, color: '#FFD166', textDecoration: 'none' }}>{c.num}</a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 14 }}>
              Our team monitors all routes daily. Get today&apos;s road conditions directly from us.
            </p>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Can you share today\'s road condition update for Char Dham Yatra 2026?')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 26px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>
              💬 Get Today&apos;s Road Update on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '36px 20px 20px' }}>
        <h2 style={h2}>Frequently Asked Questions</h2>
        {[
          ['Is it safe to travel Char Dham Yatra in May 2026?', 'Yes — May is one of the best times for Char Dham Yatra. Weather is clear, all routes are open, and the temples have just opened for the season. The trade-off is heavy pilgrim traffic, especially near Sonprayag (Kedarnath) and Joshimath (Badrinath). Leave Haridwar by 3–4 AM for Kedarnath to avoid queues. Book hotels and vehicles well in advance.'],
          ['How often is this road status updated?', 'Every Monday during the yatra season (May–November), and immediately after any significant weather event or blockage reported by our drivers. During July–August monsoon, we update every 2–3 days. If you want today\'s real-time conditions, WhatsApp our team directly — we respond within minutes during business hours.'],
          ['Can I travel to Kedarnath if there is a blockage at Sonprayag?', 'No. Sonprayag is the mandatory checkpoint for Kedarnath. If Sonprayag is blocked, pilgrims wait at Guptkashi or Rudraprayag. Shiv Ganga Travels has pre-booked holding rooms at both locations — our pilgrims are never stranded without accommodation, even if roads are blocked for 24–48 hours.'],
          ['Is Joshimath safe to drive through in 2026?', 'Yes. The Joshimath highway is open with a mandatory 30 km/h speed limit through the town. The ground subsidence situation (which became critical in 2023) is now stable and being actively monitored by government agencies. Our vehicles travel through Joshimath daily without issues.'],
          ['What is the best departure time from Haridwar for each dham?', 'Kedarnath: 3–4 AM (reach Sonprayag before 7 AM to beat queues). Badrinath: 5 AM (reach Joshimath by early afternoon). Gangotri: 5–6 AM (reach Gangotri before 2 PM for darshan + weather window). Yamunotri: 6 AM (comfortable half-day drive, most relaxed route).'],
        ].map(([q, a], i) => (
          <details key={i} style={{ background: '#fff', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 10 }}>
            <summary style={{ padding: '14px 16px', cursor: 'pointer', listStyle: 'none', fontWeight: 600, fontSize: 14.5, color: 'var(--navy)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {q} <span style={{ flexShrink: 0, fontSize: 18 }}>＋</span>
            </summary>
            <div style={{ padding: '12px 16px 14px', fontSize: 14.5, color: '#334155', lineHeight: 1.8, borderTop: '1px solid var(--border)' }}>{a}</div>
          </details>
        ))}
      </div>

      {/* Internal links */}
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 20px 60px' }}>
        <h2 style={{ ...h2, marginTop: 24 }}>Related Resources</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            ['Book Char Dham Package 2026', '/char-dham-yatra'],
            ['Kedarnath Trek Guide', '/blog/kedarnath-trek-guide'],
            ['Route Map 2026', '/char-dham-yatra-route-map'],
            ['Opening Dates 2026', '/blog/char-dham-yatra-opening-dates-2026'],
            ['Packing List', '/blog/char-dham-yatra-packing-list'],
            ['Registration Guide', '/blog/char-dham-yatra-registration'],
            ['Road Conditions Blog', '/blog/char-dham-yatra-road-conditions-2026'],
          ].map(([label, href]) => (
            <Link key={href} href={href} style={{ background: '#fff', color: 'var(--navy)', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)' }}>
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
