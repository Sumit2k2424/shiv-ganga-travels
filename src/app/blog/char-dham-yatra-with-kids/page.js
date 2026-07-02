import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra with Kids: Age & Altitude Safety',
  description: 'Char Dham Yatra with children in 2026: altitude safety for kids, which dhams are child-friendly, what to pack and keeping young pilgrims comfortable.',
  keywords: ['char dham yatra with kids 2026', 'char dham yatra with children', 'kedarnath yatra with family', 'char dham yatra family package', 'char dham with small children', 'kids char dham yatra altitude safety'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-with-kids` },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p = { fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 };

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Char Dham Yatra with Kids: Age & Altitude Safety',
    description: '',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2025-01-01',
    dateModified: '2026-05-21',
    author: {
      '@type': 'Person',
      name: 'Sumit Mishra',
      jobTitle: 'Operations Manager, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-yatra-with-kids`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />;
}


export default function Page() {
  return (
    <>
      <Schema />
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Family Travel · Honest Guide</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>Char Dham Yatra with Kids — What Parents Need to Know</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Age guidelines · Altitude safety · Which dhams are kid-friendly · Packing for children · Our honest take</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Char Dham with Kids</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24, border:'2px solid var(--teal)' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>Our honest answer</div>
          <div style={{ fontSize:14.5, color:'#334155', lineHeight:1.7 }}>Yes, children can do the Char Dham Yatra — but the experience varies a lot by age, fitness, and which dhams you prioritise. Badrinath and Gangotri are very manageable for children of all ages. Yamunotri involves a 6km trek. Kedarnath involves a 16km trek at altitude — which is genuinely difficult and not appropriate for children under 10. Helicopter is the right option if you want to include Kedarnath with young children.</div>
        </div>

        <h2 style={h2}>Dham-by-Dham: What to Expect with Children</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12, marginBottom:28 }}>
          {[
            { dham:'Yamunotri', age:'8+ recommended', trek:'6km from Janki Chatti', verdict:'Doable for fit children 8+. Ponies available from ₹1,800 for those who cannot walk. The trek through forest is actually the most child-friendly of all — shorter, cooler, and interesting (hot spring cooking ritual at the top is a huge hit with kids).' },
            { dham:'Gangotri', age:'All ages', trek:'No trek — motor road to temple', verdict:'The easiest dham for families. No trekking at all. Children can manage this at any age. The Bhagirathi river gorge and the Harsil Valley drive are genuinely beautiful and children respond to the landscape well.' },
            { dham:'Kedarnath', age:'12+ for trek', trek:'16km trek at 3,583m', verdict:'The 16km trek at high altitude is not appropriate for children under 10. For 10–14 year olds, pony is available. For younger children, the helicopter option from Phata or Sersi (20-minute flight) is the right choice and is actually thrilling for kids.' },
            { dham:'Badrinath', age:'All ages', trek:'No trek — motor road to temple', verdict:'Like Gangotri, fully accessible by car. The Mana Village walk (3km from temple) is excellent for children — the Bhim Pul boulder bridge, the caves, and the "last dhaba before Tibet" sign all make for memorable moments.' },
          ].map(d=>(
            <div key={d.dham} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:800, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{d.dham}</div>
              <div style={{ fontSize:11.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:3 }}>Min. age: {d.age}</div>
              <div style={{ fontSize:11.5, color:'var(--text-muted)', marginBottom:8 }}>Trek: {d.trek}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.65 }}>{d.verdict}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Altitude Sickness in Children — What Parents Must Know</h2>
        <p style={p}>Children are actually more susceptible to altitude sickness (AMS) than adults, and they are often less able to communicate how they are feeling. The key altitudes are Kedarnath (3,583m), Badrinath (3,133m), Gangotri (3,415m), and Yamunotri (3,291m) — all above 3,000m. AMS symptoms to watch for include headache, vomiting, loss of appetite, irritability (beyond normal), and breathlessness at rest.</p>
        <p style={p}>Our standard precautions for children: ascend slowly and give an extra half-day acclimatisation at an intermediate altitude (Guptkashi for Kedarnath, Joshimath for Badrinath). Ensure constant hydration — children dehydrate faster. Avoid any physical exertion in the first 4–6 hours at high altitude. We carry oxygen cylinders on all our vehicles and have basic medical training. If a child shows symptoms, we descend immediately — non-negotiable.</p>

        <h2 style={h2}>Packing List for Children on Char Dham Yatra</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:10, marginBottom:24 }}>
          {['Warm inner thermals (2 pairs)','Heavy fleece or down jacket','Waterproof outer jacket','Woollen hat and gloves','Comfortable trekking shoes (not new)','Extra socks (wool preferred)','Child-specific altitude sickness medicine (consult doctor)','Oral rehydration salts','High-energy snacks (dry fruits, energy bars)','Small backpack child can carry themselves','Sunscreen SPF 50+ (altitude UV is intense)','Wet wipes and hand sanitiser'].map(i=>(
            <div key={i} style={{ display:'flex', gap:8, alignItems:'flex-start', fontSize:13, color:'var(--text-mid)', background:'var(--bg)', padding:'8px 12px', borderRadius:8, border:'1px solid var(--border)' }}>
              <span style={{ color:'var(--teal)', fontWeight:700, flexShrink:0 }}>✓</span>{i}
            </div>
          ))}
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />

        <h2 style={h2}>Making the Yatra Meaningful for Children</h2>
        <p style={p}>The Char Dham Yatra is not just a physical journey — it is a story. Children who understand the stories respond to it completely differently from those who are just being taken along. Before the trip, tell them the stories: why the Pandavas went to Kedarnath, why King Bhagirath performed penance at Gangotri, who Adi Shankaracharya was. The trek to Kedarnath becomes an adventure when a child knows they are following in the footsteps of the Pandavas.</p>
        <p style={p}>The Surya Kund at Yamunotri — where you cook rice in a 94°C natural hot spring — is genuinely magical for children. The Bhim Pul boulder bridge at Mana Village. The marmots that pop out of their burrows along the Kedarnath valley. The Himalayan monals (the jewel-coloured pheasants) that cross the path. A child who comes home from the Char Dham Yatra has experienced things that most adults never will.</p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Planning Char Dham with Your Family?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Tell us the ages of your children and we will design the right itinerary — with pony arrangements, helicopter if needed, and appropriate pacing.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan Char Dham Yatra with my children. Please help me plan a family-friendly itinerary.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            View Packages →
          </div>
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'Packing List',h:'/blog/char-dham-yatra-packing-list'},{l:'Senior Citizen Package',h:'/blog/senior-citizen-char-dham'},{l:'Kedarnath Helicopter',h:'/blog/kedarnath-helicopter-booking'},{l:'Char Dham Yatra Cost',h:'/blog/char-dham-yatra-cost'}].map(l=>(
              <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
