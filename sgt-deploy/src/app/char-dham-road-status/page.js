import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Road Status 2026 — Live Route Conditions',
  description: 'Live Char Dham road status 2026. Route conditions from Haridwar to Kedarnath, Badrinath, Gangotri and Yamunotri. Daily updates.',
  keywords: ['char dham road status','kedarnath road condition','char dham highway status 2026','sonprayag road open','joshimath road status','gangotri highway status','char dham yatra road blockage'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-road-status` },
  openGraph: {
    title: 'Char Dham Road Status 2026 — Live Route Conditions',
    description: 'Weekly updated road conditions for all Char Dham Yatra routes from Haridwar.',
    url: `${SITE.baseUrl}/char-dham-road-status`,
    type: 'website',
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is Kedarnath road open in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'The Kedarnath route via NH7 (Haridwar–Rudraprayag–Guptkashi–Sonprayag) is open for the 2026 season from late April. Sonprayag to Gaurikund (5km) operates on timed one-way slots enforced by police. Check the official SDRF helpline +91-9411112985 for daily updates. Shiv Ganga Travels monitors all routes daily for our groups.' }},
      { '@type': 'Question', name: 'What is the road condition on Badrinath highway 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Badrinath highway (NH58) via Joshimath is open for 2026 season. Joshimath continues to face ground subsidence monitoring — vehicles are permitted but speed limits apply. Travel time from Haridwar: 8–9 hours. For real-time updates call BRTF: +91-1389-222210.' }},
      { '@type': 'Question', name: 'Is Gangotri highway open?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gangotri highway (NH108) via Uttarkashi is open. Bhagirathi valley sections near Harsil are prone to rockfall during heavy rain — check weather before travel. PWDUK helpline: 1800-180-1811.' }},
      { '@type': 'Question', name: 'What should I do if the road is blocked during Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Do not attempt to clear blockages yourself. Wait at the nearest safe point — tea stalls and rest areas are available every 2–3km on all routes. Contact your operator immediately. Shiv Ganga Travels has 24/7 WhatsApp support (+91-7017082807) and knows all alternate routes. For emergencies: SDRF +91-9411112985, Police: 100, Ambulance: 108.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

const STATUS_DATA = [
  {
    route: 'Kedarnath Route',
    highway: 'NH7 via Rudraprayag–Guptkashi',
    distance: '218km from Haridwar',
    time: '6–7 hours',
    status: 'open',
    statusText: 'Open',
    detail: 'NH7 fully operational. Sonprayag to Gaurikund (5km) on timed one-way police slots — start by 7 AM to avoid afternoon queues. Jhari bypass (near Kund) has ongoing repair — 15-min delay possible.',
    checkpoints: ['Rishikesh — Devprayag', 'Rudraprayag junction', 'Tilwara — Agastmuni', 'Guptkashi — Kund', 'Sonprayag checkpoint', 'Gaurikund (trek base)'],
    helpline: 'SDRF: +91-9411112985',
    updated: 'May 4, 2026',
  },
  {
    route: 'Badrinath Route',
    highway: 'NH58 via Joshimath',
    distance: '320km from Haridwar',
    time: '8–9 hours',
    status: 'open',
    statusText: 'Open — Caution',
    detail: 'NH58 open. Joshimath road has speed limit 30 km/h through town due to subsidence monitoring. Pipalkoti section has some loose gravel — drive carefully. Mana village (3km beyond Badrinath) now accessible. Motor road goes all the way to Badrinath temple.',
    checkpoints: ['Rishikesh — Devprayag', 'Srinagar (Garhwal)', 'Rudraprayag — Chamoli', 'Pipalkoti', 'Joshimath', 'Badrinath temple'],
    helpline: 'BRTF: +91-1389-222210',
    updated: 'May 4, 2026',
  },
  {
    route: 'Gangotri Route',
    highway: 'NH108 via Uttarkashi',
    distance: '265km from Haridwar',
    time: '7–8 hours',
    status: 'caution',
    statusText: 'Open — Monitor Weather',
    detail: 'NH108 open. Harsil–Gangotri section (last 25km) has active rockfall zones — avoid travel after heavy rain or at night. Uttarkashi bypass operational. All-weather Rishikesh–Uttarkashi road significantly reduced journey time since 2024.',
    checkpoints: ['Rishikesh', 'Chamba', 'Uttarkashi', 'Bhatwari', 'Harsil', 'Gangotri'],
    helpline: 'PWDUK: 1800-180-1811',
    updated: 'May 4, 2026',
  },
  {
    route: 'Yamunotri Route',
    highway: 'Rishikesh–Barkot–Janki Chatti',
    distance: '175km from Haridwar',
    time: '5–6 hours',
    status: 'open',
    statusText: 'Open',
    detail: 'Route to Janki Chatti fully open. 6km trek from Janki Chatti to Yamunotri temple. Phoolchatti alternate (3km shorter) accessible on dry days. Barkot rest point has good facilities. Motor road ends at Janki Chatti — no vehicles beyond.',
    checkpoints: ['Rishikesh', 'Chamba', 'Barkot', 'Syanbachhan', 'Janki Chatti (road end)', 'Yamunotri (6km trek)'],
    helpline: 'Local Police: 01372-252300',
    updated: 'May 4, 2026',
  },
];

const STATUS_COLOR = { open: '#15803D', caution: '#D97706', closed: '#DC2626' };
const STATUS_BG    = { open: '#F0FDF4', caution: '#FFFBF3', closed: '#FFF1F2' };

export default function RoadStatus() {
  return (
    <>
      <Schema/>

      {/* Hero */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'48px 20px 36px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Live Updates · Season 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,4vw,2.4rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:12 }}>
            Char Dham Road Status 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:15, marginBottom:20 }}>
            Current conditions on all 4 Char Dham routes from Haridwar — updated weekly by Shiv Ganga Travels operations team
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap', fontSize:13 }}>
            <span style={{ background:'#F0FDF4', color:'#15803D', padding:'5px 14px', borderRadius:100, fontWeight:700 }}>🟢 Open</span>
            <span style={{ background:'#FFFBF3', color:'#D97706', padding:'5px 14px', borderRadius:100, fontWeight:700 }}>🟡 Open — Caution</span>
            <span style={{ background:'#FFF1F2', color:'#DC2626', padding:'5px 14px', borderRadius:100, fontWeight:700 }}>🔴 Blocked / Closed</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <span>Char Dham Road Status</span>
        </div>
      </nav>

      {/* Important callout */}
      <div style={{ background:'#FFF3CD', borderBottom:'2px solid #E8920A', padding:'12px 20px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', fontSize:13.5, color:'#7B3F00', display:'flex', gap:10, alignItems:'center' }}>
          <span style={{ fontSize:20, flexShrink:0 }}>⚠️</span>
          <span><strong>Important:</strong> Road conditions change daily during monsoon (July–August). Always verify with your operator 24 hours before travel. Shiv Ganga Travels sends real-time WhatsApp alerts to all our groups on the day of travel.</span>
        </div>
      </div>

      {/* Route cards */}
      <div style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 24px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
          {STATUS_DATA.map(r => (
            <div key={r.route} style={{ borderRadius:16, border:`2px solid ${STATUS_COLOR[r.status]}30`, overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.06)' }}>
              {/* Header */}
              <div style={{ background:STATUS_COLOR[r.status], padding:'14px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10 }}>
                <div>
                  <div style={{ fontWeight:700, fontSize:16, color:'#fff' }}>{r.route}</div>
                  <div style={{ fontSize:12.5, color:'rgba(255,255,255,0.8)', marginTop:2 }}>{r.highway} · {r.distance} · {r.time}</div>
                </div>
                <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                  <span style={{ background:'rgba(255,255,255,0.2)', color:'#fff', fontWeight:800, fontSize:13, padding:'4px 14px', borderRadius:100, border:'1.5px solid rgba(255,255,255,0.4)' }}>
                    {r.statusText}
                  </span>
                  <span style={{ fontSize:12, color:'rgba(255,255,255,0.65)' }}>Updated: {r.updated}</span>
                </div>
              </div>
              {/* Body */}
              <div style={{ background:STATUS_BG[r.status], padding:'16px 20px' }}>
                <p style={{ fontSize:14.5, color:'#334155', lineHeight:1.75, marginBottom:14 }}>{r.detail}</p>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:12 }}>
                  <div>
                    <div style={{ fontWeight:700, fontSize:12.5, color:'var(--navy)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.06em' }}>Route Checkpoints</div>
                    {r.checkpoints.map((cp,i) => (
                      <div key={cp} style={{ display:'flex', gap:8, fontSize:13, color:'#475569', padding:'3px 0' }}>
                        <span style={{ color:'var(--teal)', fontWeight:700, flexShrink:0 }}>{i+1}.</span> {cp}
                      </div>
                    ))}
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:8, justifyContent:'flex-end' }}>
                    <div style={{ background:'#fff', borderRadius:10, padding:'12px 14px', border:'1px solid var(--border)' }}>
                      <div style={{ fontSize:11.5, color:'var(--text-muted)', fontWeight:600, marginBottom:4 }}>EMERGENCY HELPLINE</div>
                      <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>{r.helpline}</div>
                    </div>
                    <div style={{ background:'#fff', borderRadius:10, padding:'12px 14px', border:'1px solid var(--border)' }}>
                      <div style={{ fontSize:11.5, color:'var(--text-muted)', fontWeight:600, marginBottom:4 }}>GENERAL EMERGENCY</div>
                      <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>SDRF: +91-9411112985</div>
                      <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>Ambulance: 108</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All emergency numbers */}
      <div style={{ background:'var(--navy)', padding:'32px 20px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <h2 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:700, marginBottom:20, textAlign:'center' }}>
            Emergency Contacts — Char Dham Yatra 2026
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:10 }}>
            {[
              { label:'SDRF Rescue', num:'+91-9411112985' },
              { label:'Ambulance', num:'108' },
              { label:'Police', num:'100' },
              { label:'GMVN Helpline', num:'+91-135-2559070' },
              { label:'Kedarnath Control', num:'+91-1364-262130' },
              { label:'Badrinath Control', num:'+91-1389-222210' },
              { label:'Gangotri Control', num:'+91-1374-222221' },
              { label:'AIIMS Air Ambulance', num:'+91-135-2462945' },
            ].map(c => (
              <div key={c.label} style={{ background:'rgba(255,255,255,0.08)', borderRadius:10, padding:'12px 14px', border:'1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ fontSize:11.5, color:'rgba(255,255,255,0.55)', marginBottom:4 }}>{c.label}</div>
                <a href={`tel:${c.num}`} style={{ fontWeight:700, fontSize:15, color:'#FFD166', textDecoration:'none' }}>{c.num}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth:860, margin:'0 auto', padding:'32px 20px 48px' }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:16 }}>
          Frequently Asked Questions
        </h2>
        {[
          ['How often is this road status updated?', 'Shiv Ganga Travels updates this page every Monday and after any major weather event during the yatra season (May–November). Our operations team in Haridwar and our drivers on the route send real-time updates. During monsoon (July–August), we update every 2–3 days.'],
          ['Can I travel to Kedarnath if there is a road blockage at Sonprayag?', 'No. Sonprayag is the mandatory checkpoint before Gaurikund. If Sonprayag is blocked, pilgrims must wait at Guptkashi or Rudraprayag. Shiv Ganga Travels has tie-ups with hotels at all these holding points so our pilgrims are never stranded without accommodation.'],
          ['Is the Joshimath road safe for travel in 2026?', 'Yes — the Joshimath road is open with a 30 km/h speed limit through the town due to ground subsidence monitoring that began in 2023. The situation is stable. All vehicles including our Innova Crystas and Tempo Travellers travel through Joshimath daily without issues.'],
          ['What is the best time to leave Haridwar for Kedarnath?', 'Leave Haridwar by 4–5 AM for Kedarnath. This gets you to Sonprayag before the police checkpoint fills (usually by 8–9 AM during peak season). Arriving at Gaurikund by 7–8 AM allows you to start the trek with the coolest morning temperatures.'],
        ].map(([q,a],i) => (
          <details key={i} style={{ background:'#fff', borderRadius:10, border:'1px solid var(--border)', overflow:'hidden', marginBottom:10 }}>
            <summary style={{ padding:'14px 16px', cursor:'pointer', listStyle:'none', fontWeight:600, fontSize:14.5, color:'var(--navy)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              {q} <span style={{ flexShrink:0, fontSize:18 }}>＋</span>
            </summary>
            <div style={{ padding:'0 16px 14px', paddingTop:12, fontSize:14.5, color:'#334155', lineHeight:1.8, borderTop:'1px solid var(--border)' }}>{a}</div>
          </details>
        ))}

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'22px 20px', textAlign:'center', marginTop:28 }}>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:14 }}>
            Travelling soon? Our team monitors all routes daily and will advise you on exact conditions.
          </p>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! What is the current road condition for Char Dham Yatra 2026?')}`}
            target="_blank" rel="nofollow noopener noreferrer"
            style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', display:'inline-block' }}>
            💬 Ask About Today&apos;s Road Conditions
          </a>
        </div>
      </div>
    </>
  );
}
