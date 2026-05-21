import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';

export const metadata = {
  title: 'Kedarnath Trek Guide 2026 – 16 KM Route, Stay Options & Best Time to Visit',
  description: 'Complete Kedarnath trek guide 2026: 16km route from Gaurikund, difficulty, stay options at Kedarnath, best time to visit, pony vs helicopter, and what to pack.',
  keywords: ['kedarnath trek guide 2026','kedarnath trek route','kedarnath trek distance','gaurikund to kedarnath','kedarnath stay options','kedarnath best time to visit','kedarnath trek preparation','kedarnath helicopter','kedarnath trek tips','kedarnath yatra 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-trek-guide` },
  openGraph: {
    title: 'Kedarnath Trek Guide 2026 – 16 KM Route, Stay Options & Best Time to Visit',
    description: 'Complete Kedarnath trek guide — 16km route from Gaurikund, difficulty, stay options, best time to visit, and what to carry.',
    url: `${SITE.baseUrl}/blog/kedarnath-trek-guide`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Trek Guide 2026 – 16 KM Route & Stay Options | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Trek Guide 2026 – 16 KM Route, Stay Options & Best Time to Visit',
    description: 'Complete Kedarnath trek guide — 16km route, difficulty, stay options, best time to visit, and what to carry.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Trek Guide 2026 | Shiv Ganga Travels' }],
  },
};

const faqData = [
  { q: 'How long is the Kedarnath trek?', a: 'The Kedarnath trek is 16 km one way from Gaurikund (1,982m) to Kedarnath Temple (3,583m) — a total elevation gain of around 1,600 metres. Most trekkers take 5–7 hours to ascend and 4–5 hours to descend.' },
  { q: 'Is the Kedarnath trek difficult?', a: 'Moderate to challenging. The trail is well-marked and not technical, but the steep incline and high altitude make it physically demanding. We have guided pilgrims aged 14 to 72 on this trail — anyone with reasonable fitness and 4–6 weeks of preparation can complete it.' },
  { q: 'What is the best time for the Kedarnath trek?', a: 'May–June and September–October are the ideal months. The trail is clear, weather is stable, and views are spectacular. Avoid July–August due to monsoon rains and slippery paths. September is the single best month — post-monsoon clarity, fewer crowds, stunning views.' },
  { q: 'Where can I stay near Kedarnath Temple?', a: 'Three main options: GMVN Tourist Rest House (government-run, ₹800–₹1,500/room — book in advance at gmvnl.in), private guesthouses (₹600–₹2,500/night, quality varies), and tented camps (₹300–₹600/person, very basic). Families are better off staying at Guptkashi or Sonprayag and doing the trek as a day trip.' },
  { q: 'How do I reach Gaurikund from Haridwar?', a: 'Take a shared or private cab from Haridwar to Sonprayag (about 230km, 7–8 hours). Route goes via Devprayag, Rudraprayag, Augustmuni, Sonprayag. From Sonprayag, government shuttles run to Gaurikund (5km). There is no direct bus to Gaurikund from Haridwar.' },
  { q: 'Can I do the Kedarnath trek without prior trekking experience?', a: 'Yes. The Kedarnath trail is a pilgrim route, not a technical mountaineering route. It is well-paved for most of the way. Start physical preparation 4–6 weeks before — daily walks of 5–8 km are sufficient.' },
  { q: 'Is pony or helicopter better than trekking to Kedarnath?', a: 'Trekking is the most spiritually meaningful experience. Pony is a good middle ground for those who cannot walk the full distance. Helicopter is best for elderly pilgrims, those with medical conditions, or very tight time constraints. All options result in equally valid darshan.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: 'Kedarnath Trek Guide 2026 – 16 KM Route, Stay Options & Best Time to Visit',
    description: 'Complete guide to the Kedarnath trek from Gaurikund — distance, difficulty, stay options, best time to visit, pony and helicopter options.',
    author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    datePublished: '2025-02-01', dateModified: '2026-04-27',
    mainEntityOfPage: `${SITE.baseUrl}/blog/kedarnath-trek-guide`,
    image: '/opengraph-image',
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const howTo = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: 'How to Prepare for the Kedarnath Trek',
    description: 'A 6-week training plan to prepare for the 16km Kedarnath trek from Gaurikund.',
    totalTime: 'P42D',
    step: [
      { '@type': 'HowToStep', name: 'Week 1–2: Build Base Fitness', text: 'Walk 3–5 km daily at a brisk pace. Take stairs instead of lifts everywhere.' },
      { '@type': 'HowToStep', name: 'Week 3–4: Increase Distance', text: 'Increase daily walks to 6–8 km. Find a hill and walk up it repeatedly to simulate incline.' },
      { '@type': 'HowToStep', name: 'Week 5–6: Practice Trek', text: 'Complete a 10–12 km trek with a light backpack on a local trail or hill.' },
      { '@type': 'HowToStep', name: 'Daily: Breathwork', text: 'Practise 15 minutes of pranayama daily to prepare your lungs for high altitude.' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}/>
    </>
  );
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function KedarnathTrekGuide() {
  return (
    <>
      <Schema/>

      {/* HERO */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Trek Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Kedarnath Trek Guide 2026 — 16 KM Route, Stay Options &amp; Best Time to Visit
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>16km Gaurikund to Kedarnath · Difficulty Breakdown · Stay Options · Best Time · Pony vs Helicopter</p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home
          <span>›</span>
          Blog
          <span>›</span>
          <span>Kedarnath Trek Guide 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* INTRO */}
        <p style={p}>I still remember the first time I guided a group to Kedarnath back in 2012. One of our pilgrims — a 58-year-old retired school teacher from Lucknow — was convinced she couldn't make it up the 16km trail. She had never trekked in her life. But somewhere around Linchauli, with the Mandakini river roaring below and the first glimpse of snow peaks ahead, she turned to me and said, <em>"Yeh toh swarg hai."</em> She reached the temple, touched the Shivalinga, and wept.</p>
        <p style={p}>That's what the <strong>Kedarnath trek</strong> does to people. It breaks you down physically and builds you back up spiritually. This guide covers the complete 16km route, difficulty, best time to visit, how to reach Gaurikund, stay options at Kedarnath, and everything you need to pack.</p>

        {/* TABLE OF CONTENTS */}
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'16px 20px', border:'1px solid var(--border)', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:10, textTransform:'uppercase', letterSpacing:'0.06em' }}>In This Guide</div>
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            {[
              ['#route','Kedarnath Trek Route & Waypoints'],
              ['#difficulty','Difficulty — Honest Segment Breakdown'],
              ['#best-time','Best Time to Visit Kedarnath (Month-by-Month)'],
              ['#how-to-reach','How to Reach Gaurikund'],
              ['#stay','Where to Stay at Kedarnath'],
              ['#transport','Pony, Palki or Helicopter?'],
              ['#packing','What to Carry'],
              ['#preparation','6-Week Training Plan'],
              ['#faq','Frequently Asked Questions'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ fontSize:13.5, color:'var(--navy)', textDecoration:'none', display:'flex', gap:8, alignItems:'center' }}>
                <span style={{ color:'var(--gold)', fontSize:10 }}>▶</span>{label}
              </a>
            ))}
          </div>
        </div>

        {/* ROUTE */}
        <h2 id="route" style={h2}>Kedarnath Trek Route & Distance</h2>
        <p style={p}>The trek covers <strong>16 kilometres one way</strong> from <strong>Gaurikund</strong> (1,982m) to <strong>Kedarnath Temple</strong> (3,583m) — a total elevation gain of roughly 1,600 metres. Most trekkers take 5–7 hours to ascend and 4–5 hours to descend. The trail is well-paved with concrete and stone steps for the majority of the route.</p>

        <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid var(--border)', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:12 }}>📍 Trail Waypoints</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:8 }}>
            {[
              { place:'Gaurikund', alt:'1,982m', dist:'0 km', note:'Start point. Shops, chai, walking stick rental.' },
              { place:'Jungle Chatti', alt:'2,550m', dist:'4 km', note:'Rest stop. Tea and snacks available.' },
              { place:'Bheembali', alt:'2,800m', dist:'6.5 km', note:'GMVN rest point. Last reliable water refill.' },
              { place:'Linchauli', alt:'2,900m', dist:'9 km', note:'First views of the Kedarnath valley.' },
              { place:'Base Camp', alt:'3,400m', dist:'13 km', note:'Last major stop before the temple.' },
              { place:'Kedarnath', alt:'3,583m', dist:'16 km', note:'Temple, GMVN, camps and guesthouses.' },
            ].map(w => (
              <div key={w.place} style={{ background:'#fff', borderRadius:8, padding:'10px 12px', border:'1px solid var(--border)', textAlign:'center' }}>
                <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{w.place}</div>
                <div style={{ fontSize:11.5, color:'var(--teal)', fontWeight:600 }}>{w.alt}</div>
                <div style={{ fontSize:11, color:'var(--text-muted)', marginBottom:4 }}>{w.dist}</div>
                <div style={{ fontSize:11, color:'#64748b', lineHeight:1.5 }}>{w.note}</div>
              </div>
            ))}
          </div>
        </div>

        <p style={p}>In peak season (May–June) the trail gets extremely crowded. Start by <strong>5:00–5:30 AM</strong> to avoid the worst of it and to give yourself enough daylight for a comfortable ascent and descent.</p>

        {/* DIFFICULTY */}
        <h2 id="difficulty" style={h2}>How Difficult Is the Kedarnath Trek?</h2>
        <p style={p}>Let's be honest — the Kedarnath trek is <strong>not easy</strong>. The combination of altitude, steep incline, and 16km distance makes it genuinely demanding. But it is not technical. No rock climbing, no river crossings. Our rating: <strong>Moderate to Challenging.</strong></p>
        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:8, marginBottom:20 }}>
          {[
            { s:'Gaurikund → Jungle Chatti (4km)', t:'Steep from the very first step. Your lungs will protest. Set a slow, steady pace — do not rush.' },
            { s:'Jungle Chatti → Linchauli (5km)', t:'The longest continuous stretch. Tea stalls every 1–2km. This is the mental game section.' },
            { s:'Linchauli → Base Camp (4km)', t:'The path opens up. Snow peaks come into view. Most people find their second wind here.' },
            { s:'Base Camp → Kedarnath (3km)', t:'Final stretch. You can see the temple. Emotional. This part almost walks itself.' },
          ].map(s => (
            <li key={s.s} style={{ padding:'12px 16px', background:'#fff', borderRadius:10, border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:4 }}>{s.s}</div>
              <div style={{ fontSize:14.5, color:'#334155', lineHeight:1.5 }}>{s.t}</div>
            </li>
          ))}
        </ul>

        {/* BEST TIME */}
        <h2 id="best-time" style={h2}>Best Time to Visit Kedarnath in 2026</h2>
        <p style={p}>Kedarnath temple opens around <strong>Akshaya Tritiya (April–May)</strong> and closes on <strong>Bhai Dooj (October–November)</strong>. Outside this window the shrine is under snow. Here is a month-by-month breakdown so you can plan around your schedule:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:10, marginBottom:20 }}>
          {[
            { month:'May (Opening)', rating:'⭐⭐⭐⭐⭐', temp:'5–15°C', crowd:'Very High', verdict:'Best weather — but book everything 3 months in advance.', bg:'#dcfce7' },
            { month:'June', rating:'⭐⭐⭐⭐', temp:'8–17°C', crowd:'High', verdict:'Good weather but peak crowds. Avoid last 2 weeks (monsoon onset).', bg:'#dcfce7' },
            { month:'July – Aug', rating:'⭐⭐', temp:'10–15°C', crowd:'Low', verdict:'Monsoon. Landslide risk, slippery trail. Not recommended.', bg:'#fee2e2' },
            { month:'September', rating:'⭐⭐⭐⭐⭐', temp:'5–13°C', crowd:'Moderate', verdict:'Best month overall — clear skies, fewer crowds, stunning views.', bg:'#dcfce7' },
            { month:'October (Closing)', rating:'⭐⭐⭐⭐', temp:'0–8°C', crowd:'Moderate', verdict:'Very cold nights. Bring heavy woolens. Temple closes mid-November.', bg:'#fef9c3' },
          ].map(m => (
            <div key={m.month} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:4 }}>{m.month}</div>
              <div style={{ fontSize:14, marginBottom:4 }}>{m.rating}</div>
              <div style={{ fontSize:11.5, color:'var(--teal)', fontWeight:600, marginBottom:2 }}>Temp: {m.temp}</div>
              <div style={{ fontSize:11.5, color:'#64748b', marginBottom:6 }}>Crowd: {m.crowd}</div>
              <div style={{ fontSize:11.5, color:'#334155', lineHeight:1.5, background:m.bg, borderRadius:6, padding:'4px 8px' }}>{m.verdict}</div>
            </div>
          ))}
        </div>
        <p style={p}><strong>Our recommendation:</strong> September is the sweet spot. Post-monsoon, the trail is dry, the air is crystal clear, temperatures are cool but not freezing, and crowds are a fraction of May–June. If you have any flexibility in your schedule, plan for late September.</p>

        {/* HOW TO REACH */}
        <h2 id="how-to-reach" style={h2}>How to Reach Gaurikund (Kedarnath Base Camp)</h2>
        <p style={p}>Gaurikund is the only starting point for the Kedarnath trek. There is no railway station or airport near Kedarnath — all routes converge through Haridwar or Rishikesh.</p>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:24 }}>
          {[
            { from:'From Delhi / NCR', how:'Drive or train to Haridwar/Rishikesh (5–6 hrs), then road to Sonprayag (~230km from Haridwar, 7–8 hrs). From Sonprayag, government shuttles run to Gaurikund (5km).', tip:'Shiv Ganga Travels offers Haridwar–Sonprayag–Haridwar cab packages. WhatsApp us to book.' },
            { from:'From Haridwar / Rishikesh', how:'Private cab or shared taxi to Sonprayag via Devprayag → Rudraprayag → Augustmuni (5–6 hrs). Shared taxi costs ₹400–500/person; private cab ₹4,500–6,000 one way.', tip:'Start by 4AM from Haridwar to reach Gaurikund by noon — this lets you begin the trek same day.' },
            { from:'From Dehradun', how:'2.5 hours to Rishikesh, then follow Haridwar route above. Jolly Grant Airport is the nearest airport — 250km from Sonprayag.', tip:'Book a cab from Jolly Grant directly to Sonprayag for convenience.' },
            { from:'By Air (Helicopter)', how:'Helicopter services from Phata, Sersi, or Guptkashi reach Kedarnath in just 7 minutes — completely bypassing the road journey.', tip:'Best for elderly pilgrims or those on tight schedules. Book at least 4–6 weeks ahead.' },
          ].map(r => (
            <div key={r.from} style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>{r.from}</div>
              <div style={{ fontSize:14, color:'#334155', lineHeight:1.6, marginBottom:6 }}>{r.how}</div>
              <div style={{ fontSize:12.5, color:'var(--teal)', fontStyle:'italic' }}>💡 {r.tip}</div>
            </div>
          ))}
        </div>

        {/* STAY OPTIONS */}
        <h2 id="stay" style={h2}>Where to Stay at Kedarnath — Options & Prices 2026</h2>
        <p style={p}>Accommodation at Kedarnath is basic by design — you are at 3,583m, and electricity and heating are limited. Manage your expectations accordingly. That said, there are good options for every budget:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12, marginBottom:20 }}>
          {[
            { type:'GMVN Tourist Rest House', price:'₹800 – ₹1,500/room', stars:'⭐⭐⭐', pros:'Government-run and most reliable. Clean bedding, attached bathrooms in some rooms.', cons:'Books up fast. Reserve online at gmvnl.in at least 2–3 months in advance in peak season.', tag:'Most Reliable' },
            { type:'Private Guesthouses', price:'₹600 – ₹2,500/night', stars:'⭐⭐', pros:'More options near the temple. Some include blankets and basic room service.', cons:'Quality varies significantly. Confirm before paying. No fixed pricing — negotiate.', tag:'Budget Pick' },
            { type:'Tented Camps', price:'₹300 – ₹600/person', stars:'⭐⭐', pros:'Cheapest option. Fine for young, experienced trekkers comfortable with basic conditions.', cons:'Very cold at night, especially October. Shared facilities, no hot water.', tag:'Backpacker' },
            { type:'Stay at Guptkashi / Sonprayag', price:'₹1,200 – ₹3,500/night', stars:'⭐⭐⭐⭐', pros:'Much better comfort, good restaurants, warm rooms. Trek Kedarnath as a day trip.', cons:'Requires an early 4–5AM start to reach Kedarnath by midday.', tag:'Best for Families' },
          ].map(s => (
            <div key={s.type} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', position:'relative' }}>
              <div style={{ position:'absolute', top:10, right:10, background:'var(--navy-light)', color:'var(--navy)', fontSize:10, fontWeight:700, padding:'3px 8px', borderRadius:20, letterSpacing:'0.06em' }}>{s.tag}</div>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4, paddingRight:80 }}>{s.type}</div>
              <div style={{ fontSize:13, color:'var(--gold-dark)', fontWeight:700, marginBottom:4 }}>{s.price}</div>
              <div style={{ fontSize:12, marginBottom:8 }}>{s.stars}</div>
              <div style={{ fontSize:12.5, color:'#16a34a', lineHeight:1.65, marginBottom:6 }}>✅ {s.pros}</div>
              <div style={{ fontSize:12.5, color:'#dc2626', lineHeight:1.65 }}>⚠️ {s.cons}</div>
            </div>          ))}

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="kedarnath" />

        </div>
        <p style={p}><strong>Our honest advice:</strong> If you are travelling with family or elderly parents, stay at <strong>Guptkashi or Sonprayag</strong> and do the trek as a day trip. Start at 4–5AM, reach Kedarnath by noon, complete darshan, and descend by evening. Comfort at the base is dramatically better, and the trek itself is unchanged.</p>

        {/* TRANSPORT */}
        <h2 id="transport" style={h2}>Pony, Palki, or Helicopter? Honest Comparison</h2>
        <p style={p}>There is no shame in any option. The mountain doesn't judge. Shiva doesn't judge. The darshan is equally valid whether you walked, rode a pony, or flew in by helicopter.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(175px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { mode:'On Foot 🥾', cost:'Free', time:'5–7 hrs up', who:'Fit pilgrims aged 15–65', note:'Most spiritually meaningful. Most exhausting. Most memorable.' },
            { mode:'Pony 🐴', cost:'₹3,500–4,500', time:'4–5 hrs up', who:'Those with knee or back issues', note:'Bumpy, not comfortable for long distances. Good middle ground.' },
            { mode:'Palki 🛕', cost:'₹8,000–12,000', time:'5–6 hrs', who:'Elderly, those who cannot walk', note:'4–6 bearers carry you. Physically hard for them — tip generously.' },
            { mode:'Helicopter 🚁', cost:'₹7,500–9,500', time:'7 minutes', who:'Medical conditions, tight schedule', note:'From Phata/Sersi/Guptkashi. Weather dependent. Book 4–6 weeks ahead.' },
          ].map(m => (
            <div key={m.mode} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{m.mode}</div>
              <div style={{ fontSize:12.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:4 }}>Cost: {m.cost}</div>
              <div style={{ fontSize:12, color:'var(--text-mid)', marginBottom:4 }}>Time: {m.time}</div>
              <div style={{ fontSize:11.5, color:'var(--text-muted)', lineHeight:1.75, marginBottom:6 }}>Best for: {m.who}</div>
              <div style={{ fontSize:11.5, color:'var(--teal-dark)', fontStyle:'italic' }}>{m.note}</div>
            </div>
          ))}
        </div>

        {/* PACKING */}
        <h2 id="packing" style={h2}>What to Carry for the Kedarnath Trek</h2>
        <p style={p}>This is where most first-timers go wrong — either carrying too much (your back will hate you) or too little (your body will hate you). Here's the list refined over 15 years of guiding pilgrims on this route:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { cat:'✅ Must Carry', items:['Walking stick (rent at Gaurikund ₹100)','Rain poncho or jacket','Warm fleece or sweater','Trekking shoes — not sandals','Water bottle (refill at tea stalls)','Dry snacks — nuts, energy bars, biscuits','Plastic bag for phone and documents'] },
            { cat:'💊 Medical Essentials', items:['Diamox 125mg (altitude sickness)','Disprin / paracetamol','Bandages and antiseptic cream','ORS sachets for electrolytes','Your regular medicines — carry extra','Lip balm (wind chaps lips badly at altitude)'] },
            { cat:'❌ Leave Behind', items:['Heavy trolley bags','Formal clothes','Laptop or tablet','Jewellery','Unnecessary gadgets','Anything pushing over 7kg total load'] },
          ].map(c => (
            <div key={c.cat} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:8 }}>{c.cat}</div>
              <ul style={{ paddingLeft:14, margin:0 }}>
                {c.items.map(i => <li key={i} style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.7 }}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* PREPARATION */}
        <h2 id="preparation" style={h2}>6-Week Kedarnath Trek Preparation Plan</h2>
        <p style={p}>Start training at least <strong>4–6 weeks before</strong> your yatra. You do not need a gym membership — just consistency:</p>
        <ul style={{ paddingLeft:20, marginBottom:20, color:'var(--text-mid)', fontSize:14.5, lineHeight:2 }}>
          <li><strong>Weeks 1–2:</strong> Walk 3–5 km daily at a brisk pace. Take stairs instead of lifts everywhere.</li>
          <li><strong>Weeks 3–4:</strong> Increase to 6–8 km. Find a hill and walk up it repeatedly to simulate incline.</li>
          <li><strong>Weeks 5–6:</strong> Complete a 10–12 km practice trek with a light backpack on any local trail.</li>
          <li><strong>Daily:</strong> 15 minutes of pranayama (breathing exercises) to prepare your lungs for altitude.</li>
        </ul>
        <p style={p}>Cut out alcohol completely two weeks before the trek — it dehydrates you and impairs acclimatisation. Drink 2–3 litres of water daily.</p>

        {/* FAQ */}
        <h2 id="faq" style={h2}>Frequently Asked Questions</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:0, background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflow:'hidden' }}>
          {faqData.map((f, i) => (
            <div key={i} style={{ padding:'18px 20px', borderBottom: i < faqData.length-1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>Q: {f.q}</div>
              <div style={{ fontSize:15, color:'#334155', lineHeight:1.7 }}>A: {f.a}</div>
            </div>
          ))}
        </div>

        {/* RELATED LINKS */}
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:32, marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Reading:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              { label:'Kedarnath Yatra Package →', href:'/kedarnath-yatra' },
              { label:'Kedarnath Helicopter Booking →', href:'/blog/kedarnath-helicopter-booking' },
              { label:'Kedarnath Registration 2026 →', href:'/blog/kedarnath-registration-2026' },
              { label:'Pony & Palki Rates 2026 →', href:'/blog/kedarnath-pony-palki-rates-2026' },
              { label:'View Kedarnath Package →', href:'/packages/kedarnath-yatra-package-3n-4d-haridwar' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.label}</Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Kedarnath Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>We handle pony/palki/helicopter bookings, biometric registration, and VIP darshan. ₹6,499 all-inclusive.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 WhatsApp Us</a>
            View Package →
          </div>
        </div>

      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="kedarnath" />
</article>
    </>
  );
}
