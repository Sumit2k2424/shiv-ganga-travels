import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Kedarnath Trek Guide 2026 — Distance, Difficulty, Tips & What to Expect',
  description: 'Planning the Kedarnath trek? Complete guide covering the 16km route from Gaurikund, difficulty level, best time, what to carry, pony & helicopter options. Real tips from 15 years of experience.',
  keywords: ['kedarnath trek','kedarnath trek distance','kedarnath trek difficulty','gaurikund to kedarnath trek','kedarnath trek guide 2026','kedarnath yatra trek'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-trek-guide` },
  openGraph: {
    title: 'Kedarnath Trek Guide 2026 — Everything You Need to Know',
    description: 'Complete Kedarnath trek guide — 16km route, difficulty, what to carry, pony vs helicopter.',
    url: `${SITE.baseUrl}/blog/kedarnath-trek-guide`,
    type: 'article',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1200px-Kedarnathji-mandir.JPG'],
  },
};

const faqData = [
  { q: 'How long is the Kedarnath trek?', a: 'The Kedarnath trek is 16 km one way, starting from Gaurikund (1,982m) and ending at Kedarnath Temple (3,583m). The total elevation gain is approximately 1,600 metres. Most people take 5–7 hours to ascend and 4–5 hours to descend.' },
  { q: 'Is the Kedarnath trek difficult?', a: 'The Kedarnath trek is rated moderate to challenging. The trail is well-marked and not technical, but the steep incline, high altitude, and long distance make it physically demanding. Anyone with reasonable fitness can complete it — we have guided pilgrims aged 14 to 72 on this trek.' },
  { q: 'What is the best time for the Kedarnath trek?', a: 'May to June and September to October are the best months. The trail is clear, weather is stable, and the views are spectacular. Avoid July–August due to monsoon rains and slippery paths.' },
  { q: 'Can I do the Kedarnath trek without prior trekking experience?', a: 'Yes, absolutely. The Kedarnath trail is a pilgrim route, not a technical mountaineering route. It is well-paved for most of the way. Start your physical preparation 4–6 weeks before — daily walks of 5–8 km will be sufficient.' },
  { q: 'Is pony or helicopter better than trekking to Kedarnath?', a: 'It depends on your fitness and preference. Trekking is the most spiritually meaningful experience — pilgrims have done it for centuries. Pony is a good middle ground for those who cannot walk but want to experience the mountain journey. Helicopter is best for elderly pilgrims, those with medical conditions, or severe time constraints.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: 'Kedarnath Trek Guide 2026 — Distance, Difficulty, Tips & What to Expect',
    description: 'Complete guide to the Kedarnath trek from Gaurikund — distance, difficulty, tips, pony and helicopter options.',
    author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    datePublished: '2025-02-01', dateModified: '2026-01-01',
    mainEntityOfPage: `${SITE.baseUrl}/blog/kedarnath-trek-guide`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1200px-Kedarnathji-mandir.JPG',
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
    </>
  );
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const h3 = { fontSize:'1.1rem', fontWeight:700, color:'var(--text)', marginBottom:8, marginTop:22 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function KedarnathTrekGuide() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Trek Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Kedarnath Trek Guide 2026 — Everything You Need to Know Before You Go
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>16km from Gaurikund · Difficulty · Tips · Pony vs Helicopter · What to Carry</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link>
          <span>›</span>
          <span>Kedarnath Trek Guide 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth:860, margin:'0 auto', padding:'40px 20px 60px' }}>

        <p style={p}>I still remember the first time I guided a group to Kedarnath back in 2012. One of our pilgrims, a 58-year-old retired school teacher from Lucknow, was convinced she couldn't make it up the 16km trail. She had never trekked in her life. But somewhere around Linchauli — about 8km in, with the Mandakini river roaring below and the first glimpse of snow peaks ahead — she turned to me and said, "Yeh toh swarg hai." (This is heaven.) She reached the temple, touched the Shivalinga, and wept.</p>

        <p style={p}>That's what the <strong>Kedarnath trek</strong> does to people. It breaks you down physically and then builds you back up spiritually. This guide covers everything you need to know before you take your first step from Gaurikund — the distance, difficulty, what to carry, and how to prepare.</p>

        <h2 style={h2}>Kedarnath Trek Distance & Route</h2>
        <p style={p}>The trek covers <strong>16 kilometres one way</strong>, starting at <strong>Gaurikund</strong> (1,982m above sea level) and ending at <strong>Kedarnath Temple</strong> (3,583m). The total elevation gain is approximately 1,600 metres across 16km, which works out to a steady but steep climb throughout.</p>

        <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid var(--border)', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:12 }}>📍 Trail Waypoints</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:8 }}>
            {[
              { place:'Gaurikund', alt:'1,982m', dist:'0 km' },
              { place:'Jungle Chatti', alt:'2,550m', dist:'4 km' },
              { place:'Bheembali', alt:'2,800m', dist:'6.5 km' },
              { place:'Linchauli', alt:'2,900m', dist:'9 km' },
              { place:'Base Camp', alt:'3,400m', dist:'13 km' },
              { place:'Kedarnath', alt:'3,583m', dist:'16 km' },
            ].map(w => (
              <div key={w.place} style={{ background:'#fff', borderRadius:8, padding:'10px 12px', border:'1px solid var(--border)', textAlign:'center' }}>
                <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{w.place}</div>
                <div style={{ fontSize:11.5, color:'var(--teal)', fontWeight:600 }}>{w.alt}</div>
                <div style={{ fontSize:11, color:'var(--text-muted)' }}>{w.dist}</div>
              </div>
            ))}
          </div>
        </div>

        <p style={p}>The trail is well-paved with concrete and stone steps for a large portion. It can get extremely crowded in peak season (May–June) — we're talking thousands of pilgrims on the same path. Our team recommends starting the trek by <strong>5:00–5:30 AM</strong> to avoid the worst of the crowds and to give yourself enough daylight for a comfortable ascent.</p>

        <h2 style={h2}>How Difficult is the Kedarnath Trek?</h2>
        <p style={p}>Let's be honest with each other. The Kedarnath trek is <strong>not easy</strong>. Anyone who tells you it's a casual walk hasn't done it. The combination of high altitude, steep incline, and long distance makes it genuinely demanding. But here's the thing — it's not technical. There's no rock climbing, no river crossings, no scrambling. It's a walking trail, just a steep one.</p>

        <p style={p}>Our difficulty rating: <strong>Moderate to Challenging</strong>. Here's a realistic breakdown:</p>
        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:8, marginBottom:20 }}>
          {[
            { segment:'Gaurikund to Jungle Chatti (4km)', honest:'Steep and tiring from the very start. Your lungs will protest. Don\'t rush.' },
            { segment:'Jungle Chatti to Linchauli (5km)', honest:'The longest continuous stretch. Cafes/tea stalls every 1–2km. Mental game here.' },
            { segment:'Linchauli to Base Camp (4km)', honest:'The path opens up. You can see the peaks. Second wind kicks in for most people.' },
            { segment:'Base Camp to Kedarnath (3km)', honest:'Final stretch. Emotional. You can see the temple. This part almost runs itself.' },
          ].map(s => (
            <li key={s.segment} style={{ padding:'12px 16px', background:'#fff', borderRadius:10, border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:4 }}>{s.segment}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.5 }}>{s.honest}</div>
            </li>
          ))}
        </ul>

        <h2 style={h2}>Pony, Palki, or Helicopter? Honest Comparison</h2>
        <p style={p}>Every year we get asked this question. Here's what we tell our pilgrims — there's no shame in any option. The mountain doesn't judge. Shiva doesn't judge. The darshan is equally valid whether you walked, rode a pony, or flew in by helicopter.</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { mode:'On Foot 🥾', cost:'Free', time:'5–7 hrs up', who:'Fit pilgrims aged 15–65, those who want the full experience', note:'Most spiritually meaningful. Most exhausting. Most memorable.' },
            { mode:'Pony 🐴', cost:'₹3,500–4,500', time:'4–5 hrs up', who:'Those with knee/back issues, partial walkers', note:'Bumpy ride. Not comfortable for long distances. Good middle ground.' },
            { mode:'Palki 🛕', cost:'₹8,000–12,000', time:'5–6 hrs', who:'Elderly, those who cannot walk at all', note:'4–6 bearers carry you. Hard work for them — tip generously.' },
            { mode:'Helicopter 🚁', cost:'₹7,500–9,500', time:'7 minutes', who:'Those with heart/lung conditions, severe time constraints', note:'Departs Phata/Sersi/Guptkashi. Weather dependent. Book in advance.' },
          ].map(m => (
            <div key={m.mode} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{m.mode}</div>
              <div style={{ fontSize:12.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:4 }}>Cost: {m.cost}</div>
              <div style={{ fontSize:12, color:'var(--text-mid)', marginBottom:4 }}>Time: {m.time}</div>
              <div style={{ fontSize:11.5, color:'var(--text-muted)', lineHeight:1.5, marginBottom:6 }}>Best for: {m.who}</div>
              <div style={{ fontSize:11.5, color:'var(--teal-dark)', fontStyle:'italic' }}>{m.note}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>What to Carry for the Kedarnath Trek</h2>
        <p style={p}>This is where most first-timers go wrong — either carrying too much (your back will hate you) or too little (your body will hate you). Here's the Goldilocks list from 15 years of guiding pilgrims:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { cat:'✅ Must Carry', items:['Walking stick (rent at Gaurikund ₹100)', 'Rain poncho/jacket', 'Warm fleece or sweater', 'Trekking shoes (not sandals)', 'Water bottle (refill at stalls)', 'Dry snacks — nuts, energy bars, biscuits', 'Plastic bag to protect phone/documents'] },
            { cat:'💊 Medical Essentials', items:['Diamox 125mg (altitude sickness)', 'Disprin / paracetamol', 'Bandages and antiseptic', 'ORS sachets', 'Your regular medicines — extra supply', 'Lip balm (wind chaps lips badly)'] },
            { cat:'❌ Leave Behind', items:['Heavy trolley bags', 'Formal clothes', 'Laptop or tablet', 'Jewellery', 'Unnecessary gadgets', 'More than 7kg total load'] },
          ].map(c => (
            <div key={c.cat} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:8 }}>{c.cat}</div>
              <ul style={{ paddingLeft:14, margin:0 }}>
                {c.items.map(i => <li key={i} style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.7 }}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h2 style={h2}>How to Prepare for the Trek</h2>
        <p style={p}>Start training at least <strong>4–6 weeks before</strong> your yatra date. You don't need a gym membership or a personal trainer. Here's a simple plan that works:</p>
        <ul style={{ paddingLeft:20, marginBottom:20, color:'var(--text-mid)', fontSize:14.5, lineHeight:2 }}>
          <li><strong>Weeks 1–2:</strong> Walk 3–5 km daily at a brisk pace. Stairs instead of lift everywhere.</li>
          <li><strong>Weeks 3–4:</strong> Increase to 6–8 km. Find a hill nearby and walk up it repeatedly.</li>
          <li><strong>Week 5–6:</strong> Do a practice trek of 10–12 km with a light backpack. Your local hills or a nature trail works perfectly.</li>
          <li><strong>Daily:</strong> Pranayama (breathing exercises) for 15 minutes — this prepares your lungs for altitude.</li>
        </ul>
        <p style={p}>Cut out alcohol completely for the two weeks before the trek — it dehydrates you and impairs altitude acclimatisation. Drink 2–3 litres of water daily.</p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:0, background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflow:'hidden' }}>
          {faqData.map((f, i) => (
            <div key={i} style={{ padding:'18px 20px', borderBottom: i < faqData.length-1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>Q: {f.q}</div>
              <div style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.7 }}>A: {f.a}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:32, marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Reading:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              { label:'Kedarnath Yatra Package →', href:'/kedarnath-yatra' },
              { label:'Kedarnath Helicopter Guide →', href:'/blog/kedarnath-helicopter-booking' },
              { label:'Char Dham Packing List →', href:'/blog/char-dham-yatra-packing-list' },
              { label:'View Kedarnath Package →', href:'/packages/kedarnath-yatra-package-3n-4d-haridwar' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Kedarnath Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>We handle pony/palki/helicopter bookings, biometric registration, and VIP darshan. ₹6,499 all-inclusive.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 WhatsApp Us</a>
            <Link href="/kedarnath-yatra" style={{ background:'var(--gold)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>View Package →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
