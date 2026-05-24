import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Places to See Near Kedarnath 2026 — Beyond the Main Temple',
  description: 'What to see around Kedarnath in 2026: Bhairavnath Temple, Vasuki Tal, Shankaracharya Samadhi, Gandhi Sarovar, Chorabari Glacier and more. Map of all key spots with distances.',
  keywords: ['places to see near kedarnath','kedarnath sightseeing','bhairavnath temple kedarnath','vasuki tal trek','shankaracharya samadhi kedarnath','gandhi sarovar kedarnath','chorabari glacier','kedarnath places to visit 2026','kedarnath tourism'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-places-to-see` },
  openGraph: {
    title: 'Places to See Near Kedarnath 2026 — Beyond the Main Temple',
    description: 'Bhairavnath Temple, Vasuki Tal, Shankaracharya Samadhi, Gandhi Sarovar and more — the complete Kedarnath sightseeing guide.',
    url: `${SITE.baseUrl}/blog/kedarnath-places-to-see`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Places to See Near Kedarnath 2026 | Shiv Ganga Travels' }],
  },
  twitter: { card: 'summary_large_image', title: 'Places to See Near Kedarnath 2026', description: 'Beyond the main temple — what to see and how to reach each spot.' },
};

const spots = [
  { name:'Kedarnath Temple', dist:'0 km — the centre of everything', desc:'The 8th-century stone temple dedicated to Lord Shiva sits in an open valley at 3,583m. Morning aarti at 4 AM is the most powerful experience on the circuit — the entire courtyard filled with devotees, the priest\'s conch echoing off the stone walls, the mountain silence all around. VIP darshan slots can be pre-booked online or through us. Allow 2–3 hours for a relaxed visit including the inner sanctum, circumambulation and seated meditation outside.' },
  { name:'Bhairavnath Temple', dist:'500m from Kedarnath — 15-minute walk', desc:'No visit to Kedarnath is complete without seeking the blessings of Bhairavnath, Lord Shiva\'s fierce protector. The tradition says Bhairavnath guards the valley when the main temple is closed for winter. The walk from Kedarnath is short but involves a small climb. Views from here are excellent — a full panorama of the Kedarnath valley and the glacier above.' },
  { name:'Shankaracharya Samadhi', dist:'50m behind the main temple', desc:'Adi Shankaracharya, the great 8th-century philosopher who unified Hindu philosophy and reinvigorated the four Dhams as a pilgrimage circuit, attained mahasamadhi (conscious death) at Kedarnath. His samadhi (memorial) is directly behind the temple. For the philosophically inclined, this is perhaps the most moving spot on the entire Char Dham circuit.' },
  { name:'Gandhi Sarovar (Chorabari Lake)', dist:'3.5 km from Kedarnath — 1.5 hours one-way', desc:'A glacial lake at 3,900m, named Gandhi Sarovar after Mahatma Gandhi\'s ashes were immersed here. The 3.5km trail from Kedarnath climbs steeply and is demanding after a full Yatra day. Most pilgrims who go do so on the morning after their darshan, when they are fresh. The lake is starkly beautiful — deep blue-green water surrounded by ice and rock. Note: access may be restricted by local authorities after the 2013 floods, always check current status.' },
  { name:'Vasuki Tal', dist:'8 km from Kedarnath — full-day trek', desc:'A high-altitude lake at 4,135m with extraordinary views of Kedarnath, Kedardome and Sumeru peaks. Vasuki Tal is not a standard pilgrimage stop — it is a trek for those with energy to spare and full acclimatisation. The trail beyond Gandhi Sarovar continues to Vasuki Tal. Very few pilgrims make it here, which means you will almost certainly have the lake to yourself.' },
  { name:'Triyuginarayan Temple', dist:'25 km by road from Sonprayag', desc:'The mythological site where Lord Shiva and Goddess Parvati married. A sacred fire (Akhand Dhuni) has reportedly been burning here since the time of their marriage. The temple is 25km by road from Sonprayag — most pilgrims combine it with the drive to or from Kedarnath. A visit here takes 1–2 hours and is deeply meaningful for those interested in the deeper mythology of the Kedarnath region.' },
  { name:'Gaurikund', dist:'16 km downhill — the trek base', desc:'The start point of the Kedarnath trek. Gaurikund is named after Goddess Gauri (Parvati) and has a hot spring where pilgrims traditionally bathe before the ascent. The spring water is genuinely warm and the experience of bathing here at dawn before starting the trek is something our customers consistently mention as a highlight.' },
];

const faqData = [
  { q: 'Can I visit all these places in one day at Kedarnath?', a: 'No. On a standard Yatra, most pilgrims spend one night at Kedarnath or use it as a long day-trip. In one day, you can comfortably do: main temple darshan, Bhairavnath Temple, Shankaracharya Samadhi, and if energy permits, Gandhi Sarovar. Vasuki Tal requires a full separate day. Factor in travel time from your base (Guptkashi or Sonprayag) — most pilgrims are on the trail from 5–6 AM.' },
  { q: 'Is Gandhi Sarovar open in 2026?', a: 'Access has varied since the 2013 Kedarnath floods. Check with us or the local authorities closer to your Yatra date. When open, the trail is well-marked and the lake is one of the most beautiful spots in the entire region.' },
  { q: 'How do I get from Kedarnath to Triyuginarayan?', a: 'Triyuginarayan is 25km from Sonprayag by road. If you are returning from Kedarnath via Sonprayag, you can stop at Triyuginarayan on the way. Share-jeeps from Sonprayag make the run regularly. The road is single-lane but paved.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: 'Places to See Near Kedarnath 2026 — Beyond the Main Temple',
    author: { '@type': 'Person', name: 'Sumit Mishra', url: `${SITE.baseUrl}/about` },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    datePublished: '2026-02-01', dateModified: '2026-05-01',
    mainEntityOfPage: `${SITE.baseUrl}/blog/kedarnath-places-to-see`,
    image: '/opengraph-image',
  };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function Page() {
  return (
    <main style={{ background:'var(--bg)', minHeight:'100vh' }}>
      <Schema/>
      <div style={{ maxWidth:820, margin:'0 auto', padding:'clamp(24px,5vw,60px) clamp(16px,4vw,24px)' }}>
        <nav style={{ fontSize:13, color:'var(--text-muted)', marginBottom:20 }}>
          <Link href="/" style={{ color:'var(--gold)', textDecoration:'none' }}>Home</Link> {' → '}
          <Link href="/blog" style={{ color:'var(--gold)', textDecoration:'none' }}>Blog</Link> {' → Places to See Near Kedarnath'}
        </nav>

        <div style={{ marginBottom:32 }}>
          <span style={{ background:'rgba(232,146,10,0.15)', color:'var(--gold)', fontSize:12, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'4px 14px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Kedarnath Guide</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.75rem,4vw,2.5rem)', fontWeight:700, color:'var(--navy)', lineHeight:1.2, letterSpacing:'-0.02em', marginBottom:16 }}>
            Places to See Near Kedarnath 2026 — Every Sacred &amp; Scenic Spot Explained
          </h1>
          <p style={{ ...p, fontSize:17, color:'#475569', marginBottom:0 }}>
            The Kedarnath Valley contains far more than a single temple. Most pilgrims who have been there will tell you that the half-hour they spent behind the temple at Shankaracharya's samadhi, or the view from Bhairavnath hill at golden hour, stayed with them longer than the main darshan. This guide covers every spot worth visiting — how far it is, how to get there, and what to expect.
          </p>
        </div>

        <BlogAuthor/>

        {spots.map((s, i) => (
          <div key={s.name} style={{ marginBottom:28, padding:'22px 24px', background:i%2===0?'#f8fafc':'#fff', borderRadius:'var(--r)', border:'1px solid #e2e8f0' }}>
            <div style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:10 }}>
              <span style={{ background:'var(--navy)', color:'#fff', width:28, height:28, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:13, flexShrink:0 }}>{i+1}</span>
              <div>
                <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.1rem,2vw,1.4rem)', fontWeight:700, color:'var(--navy)', marginBottom:4 }}>{s.name}</h2>
                <span style={{ fontSize:12.5, color:'var(--gold)', fontWeight:600 }}>📍 {s.dist}</span>
              </div>
            </div>
            <p style={{ ...p, marginBottom:0 }}>{s.desc}</p>
          </div>
        ))}

        <h2 style={h2}>Frequently Asked Questions</h2>
        {faqData.map(f => (
          <div key={f.q} style={{ marginBottom:20, padding:'18px 20px', background:'#f8fafc', borderRadius:'var(--r)', borderLeft:'3px solid var(--gold)' }}>
            <p style={{ fontWeight:700, color:'var(--navy)', fontSize:15, marginBottom:6 }}>{f.q}</p>
            <p style={{ ...p, marginBottom:0 }}>{f.a}</p>
          </div>
        ))}

        <BlogCTA/>

        <div style={{ marginTop:40, padding:'20px 24px', background:'rgba(15,43,91,0.04)', borderRadius:'var(--r)', borderLeft:'3px solid var(--navy)' }}>
          <p style={{ ...p, marginBottom:8, fontWeight:600 }}>Related Reading</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
            {[['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Kedarnath Darshan Timing','/blog/kedarnath-darshan-timing'],['Triyuginarayan Temple','/blog/triyuginarayan-temple'],['Kedarnath Yatra Guide','/blog/kedarnath-yatra-guide']].map(([t,h]) => (
              <Link key={h} href={h} style={{ fontSize:13.5, color:'var(--gold)', textDecoration:'none', fontWeight:600, background:'rgba(232,146,10,0.1)', padding:'6px 14px', borderRadius:8 }}>{t} →</Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
