import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import BlogTOC from '@/components/BlogTOC';
import { h2, p } from "@/lib/prose";
export const metadata = {
  title: { absolute: `Rishikesh Adventure Guide ${SITE.season} | Rafting & Bungee` },
  description: `Rishikesh adventure guide ${SITE.season} — rafting, bungee, camping. Trusted operator, 15+ yrs experience, instant confirmation.`,
  keywords: [`rishikesh adventure guide ${SITE.season}`, `rishikesh river rafting price ${SITE.season}`, 'rishikesh bungee jumping price', 'rishikesh camping cost', 'rishikesh adventure package', 'rishikesh rafting booking', 'rishikesh best time to visit'],
  alternates: { canonical: `${SITE.baseUrl}/blog/rishikesh-adventure-guide` },
};
function Schema() {
  const a = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Rishikesh Adventure Guide 2026 — Rafting, Bungee, Camping & What It Really Costs', author:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, publisher:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, datePublished:'2025-03-28', dateModified:'2026-01-01', mainEntityOfPage:`${SITE.baseUrl}/blog/rishikesh-adventure-guide` };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(a) }}/>
}
export default function RishikeshAdventureGuide() {
  return (<>
    <Schema/>
    <ReadingProgress/>

    <BlogHero
      badge="Adventure Guide · 2026"
      title="Rishikesh Adventure Guide 2026 — Rafting, Bungee & Camping"
      dek="Adventure capital of India · White water rafting · 83m bungee · Beach camping · Yoga & spirituality"
      author="Dhanesh Chandra Mishra"
      updated="Updated 2026"
      readTime="7 min read"
      facts={[
        { label:'Rafting',  value:'₹500–900 pp' },
        { label:'Bungee',   value:'83 m jump' },
        { label:'Camping',  value:'Ganga beach' },
        { label:'Season',   value:'Sep–Jun (no monsoon)' },
      ]}
    />

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
        <span>Rishikesh Adventure Guide 2026</span>
      </div>
    </nav>
    <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" />
      <p className="blog-lede">Rishikesh is one of those rare places that genuinely delivers on its hype. The Ganga rushing through a gorge of forested hills. Ancient temples and modern ashrams side by side. Yoga studios next to bungee platforms. The same river that witnesses solemn Ganga aarti at sunset carries shrieking rafters through Grade IV rapids in the morning. It's a contradiction that somehow makes perfect sense.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This guide covers everything for an <strong>Rishikesh adventure trip in 2026</strong> — what activities are actually worth your money, the honest costs (not the inflated tourist prices), the best time to go, and what not to miss beyond the adventure sports.</p>

      <BlogTOC items={[
        { id:'rafting', label:'River rafting' },
        { id:'bungee',  label:'Bungee jumping' },
        { id:'camping', label:'Beach camping' },
        { id:'spiritual', label:'The spiritual side' },
      ]}/>

      <h2 id="rafting" style={h2}>River Rafting — The Main Event</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Rishikesh river rafting on the Ganga is one of the best white-water experiences in Asia. The stretch from Shivpuri to Rishikesh covers <strong>16 km</strong> with multiple rapids ranging from Grade II to Grade IV. No prior experience needed — trained instructors are always on board.</p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:10, marginBottom:20 }}>
        {[
          { route:'Marine Drive to Rishikesh', dist:'26 km', price:'₹700–900/pp', grade:'Grade III-IV', note:'Most popular. 3–4 hours. Best rapids.' },
          { route:'Shivpuri to Rishikesh', dist:'16 km', price:'₹500–700/pp', grade:'Grade II-III', note:'Moderate. Good for beginners.' },
          { route:'Brahampuri to Rishikesh', dist:'9 km', price:'₹300–450/pp', grade:'Grade II', note:'Gentle. Perfect for families.' },
        ].map(r => (
          <div key={r.route} style={{ background:'#fff', borderRadius:10, padding:'12px', border:'1px solid hsl(var(--border))' }}>
            <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:4 }}>{r.route}</div>
            <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:4 }}>{r.dist} · {r.grade}</div>
            <div style={{ fontWeight:700, fontSize:16, color:'var(--teal-dark)', marginBottom:4 }}>{r.price}</div>
            <div style={{ fontSize:12, color:'var(--text-mid)', fontStyle:'italic' }}>{r.note}</div>
          </div>
        ))}
      </div>
      <p style={{ ...p, fontSize:13.5 }}>💡 <strong>Best time for rafting:</strong> October to May. Avoid July–August (monsoon — water levels too high, safety risk). October–November has perfect water levels and weather.</p>

      <h2 id="bungee" style={h2}>Bungee Jumping — 83 Metres of Pure Terror</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Jumpin Heights at Mohan Chatti, 22km from Rishikesh, runs the <strong>highest fixed-platform bungee jump in India at 83 metres</strong>. It's genuinely terrifying and genuinely incredible. Price: <strong>₹3,550 per person</strong>. Includes certificate and video (optional extra). Weight limit: 40–110 kg. Minimum age: 18 years.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>They also operate Giant Swing (₹3,000) and Flying Fox zipline (₹1,500) at the same location. All bookings should be made in advance — they fill up on weekends and holidays. We pre-book Jumpin Heights slots for all our guests as part of the adventure package.</p>

      <h2 id="camping" style={h2}>Beach Camping on the Ganga</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This is the Rishikesh experience that most tourists miss. Spending a night in a camp on the Ganga riverbank — bonfire, stars overhead, the river 20 metres away, mountains on all sides. It sounds romantic because it is.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Our <strong>Rishikesh Adventure Package (2N/3D)</strong> includes two nights of beach camping with tents, sleeping bags, all meals, bonfire, and morning yoga. The camps are comfortable — not glamping luxury, but clean, safe, and genuinely beautiful.</p>

      <h2 id="spiritual" style={h2}>The Spiritual Side — Don't Miss This</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Rishikesh has two personalities and both are worth experiencing. Beyond the rafting and bungee, make time for:</p>
      <ul style={{ paddingLeft:20, color:'var(--text-mid)', fontSize:14.5, lineHeight:2.2, marginBottom:20 }}>
        <li><strong>Parmarth Niketan Ganga Aarti (6 PM):</strong> The largest Ganga Aarti in India. Hundreds of priests, fire bowls, chanting, floating diyas. Genuinely moving even for non-religious visitors.</li>
        <li><strong>Beatles Ashram (Maharishi Mahesh Yogi):</strong> The ashram where the Beatles stayed in 1968 and wrote much of the White Album. Now open as a cultural art park with murals and meditation spaces.</li>
        <li><strong>Laxman Jhula & Ram Jhula:</strong> Suspension bridges over the Ganga with temples on both banks. Best explored on foot in the early morning before the crowds arrive.</li>
        <li><strong>Morning Triveni Ghat dip:</strong> 5 AM, the Ganga glowing in the dawn light. Priests performing morning aarti. Possibly the most peaceful 30 minutes in India.</li>
      </ul>

      <BlogCTA
        variant="note"
        line="We run this as a 2N/3D package from Haridwar at ₹3,750 per person — rafting, camping and the Ganga Aarti evening."
        href="/rishikesh-tour-packages"
        linkLabel="See the Rishikesh package"
      />

        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
  </>);
}
