import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import BlogTOC from '@/components/BlogTOC';
import { h2, p } from "@/lib/prose";
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: `Char Dham Yatra in October ${SITE.season} | Weather, Crowds & Dates` },
  description: `October Char Dham — monsoon gone, crowds gone, rooms cheaper, but Kedarnath nights hit −2°C and the temples close 10–13 November. Go in the first two weeks.`,
  keywords: [`char dham yatra in october ${SITE.season}`, 'kedarnath yatra october', 'char dham yatra october weather', 'char dham october closing dates', 'char dham off season october', 'best time char dham october'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-in-october` },
};


function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Char Dham Yatra in October: Weather, Crowds & Dates',
    description: '',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2025-01-01',
    dateModified: '2026-05-21',
    author: {
      '@type': 'Person',
      '@id': `${SITE.baseUrl}/#founder`,
      name: 'Dhanesh Chandra Mishra',
      jobTitle: 'Founder & Director, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/dhanesh-chandra-635564429/'],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-yatra-in-october`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />;
}


export default function Page() {
  return (
    <>
      <Schema />
      <ReadingProgress/>

      <BlogHero
        badge="October · Off-Season Honest Guide"
        title="Char Dham Yatra in October 2026 — Is It Worth It?"
        dek="Less crowd · Cheaper hotels · Early snowfall risk · Closing dates · Our honest assessment"
        author="Dhanesh Chandra Mishra"
        updated={`Updated ${SITE.lastUpdated}`}
        readTime="6 min read"
        facts={[
          { label:'Crowds',   value:'70% fewer than May' },
          { label:'Hotels',   value:'25–40% cheaper' },
          { label:'Views',    value:'Clearest of the year' },
          { label:'Watch',    value:'Early-Nov closing' },
        ]}
      />

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Char Dham in October</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" />

        <AnswerBox>
          <strong>October is one of the two best months for Char Dham, and the best for mountain views.</strong> Post-monsoon air gives visibility that routinely runs to 100km, crowds are a fraction of May's, and rooms cost noticeably less. The trade-off is cold: nights at Kedarnath drop to −2°C and lower by late month. The temples close between 10 and 13 November, so an October trip is also the last comfortable window of the season.
        </AnswerBox>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24, border:'2px solid var(--teal)' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>Short answer from our team</div>
          <div style={{ fontSize:14.5, color:'#334155', lineHeight:1.7 }}>October is excellent if you go in the first two weeks. The monsoon has cleared, mountains are freshly washed and crystal clear, crowds are gone, and hotels are cheaper. The risk is early snowfall in the third and fourth week of October that can disrupt the Kedarnath trek. We would rather send you in early October than late October. Here is the full picture.</div>
        </div>

        <BlogTOC items={[
          { id:'closing-dates',   label:'2026 closing dates' },
          { id:'why-best',        label:'Why October can be best' },
          { id:'risks',           label:'The risks — be honest' },
          { id:'recommendation',  label:'Our recommendation' },
        ]}/>

        <h2 id="closing-dates" style={h2}>2026 Closing Dates — What You Are Working Against</h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Dham','Opening 2026','Closing 2026','Notes'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              {[
                ['Yamunotri','April 19','Nov 11, 2026','Usually closes on Diwali / Yama Dwitiya'],
                ['Gangotri','April 19','Nov 10, 2026','Closes on Diwali'],
                ['Kedarnath','April 22','Nov 11, 2026','Closes on Bhai Dooj — exact date announced annually'],
                ['Badrinath','April 23','Nov 13, 2026','Last to close — usually 2 days after Kedarnath'],
              ].map(([dham,open,close,note],i)=>(
                <tr key={i} style={{ borderBottom:'1px solid hsl(var(--border))', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>{dham}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{open}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--gold-dark)', fontSize:13 }}>{close}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>For October, this means you have most of the month available. A group starting October 1 can comfortably complete all four dhams and be back in Haridwar by October 12–14. Starting October 15 is still fine but getting closer to the risk zone. We do not recommend starting the full Char Dham circuit after October 20.</p>

        <h2 id="why-best" style={h2}>Why October Can Be the Best Month</h2>
        <p style={p}>September and early October are genuinely our favourite window to send pilgrims. Here is why we tell our regular customers to consider it seriously:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { icon:'🏔️', title:'Crystal clear skies', desc:'The monsoon has just ended. The air is washed clean. Snow has freshly dusted the peaks. The views from the trek path to Kedarnath and from the Badrinath valley in October are arguably better than any other time of year.' },
            { icon:'👥', title:'No crowds', desc:'May-June sees lakhs of pilgrims on the same roads and in the same queues. In October, you walk into the temple with 30 people in front of you instead of 300. The darshan is slower, more personal, more contemplative.' },
            { icon:'🏨', title:'Hotels 30–40% cheaper', desc:'Off-season rates at our partner hotels are significantly lower than peak season. The same room at Guptkashi that costs ₹3,500 in May costs ₹2,200 in October. We pass these savings on directly.' },
            { icon:'🛣️', title:'Better roads', desc:'The heaviest vehicle traffic on the Char Dham route is May–June. In October, the roads are far less congested. Our drivers consistently report shorter travel times and less stress on October trips.' },
          ].map(c=>(
            <div key={c.title} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid hsl(var(--border))' }}>
              <div style={{ fontSize:24, marginBottom:8 }}>{c.icon}</div>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>{c.title}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.65 }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <h2 id="risks" style={h2}>The Risks — Be Honest with Yourself</h2>
        <p style={p}>We are a Haridwar operator that depends on pilgrims having a good experience. So we will not oversell October without giving you the full picture.</p>
        <p style={p}><strong>Snowfall risk:</strong> Kedarnath can receive early snowfall from mid-October onwards. Heavy snowfall can close the trek for 1–2 days at a time. If you have a fixed return date with no buffer, and snowfall delays you at Kedarnath, you will miss flights or trains. We always build a 1-day buffer into October itineraries and strongly recommend you do the same.</p>
        <p style={p}><strong>Temperature:</strong> October nights at Kedarnath can drop to -5°C or below. Badrinath nights hover around 0–5°C. Yamunotri and Gangotri are similar. You need proper warm clothing — a thin fleece jacket is not enough. We share a packing list when you book.</p>
        <p style={p}><strong>Some facilities close early:</strong> A few dhabas and shops on the Kedarnath trek route begin to close in early October as operators head home. Tea stalls at the midpoint may be shut. Carry your own snacks and water for the trek.</p>


        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
        <h2 id="recommendation" style={h2}>Our Recommendation for October Travel</h2>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'20px 22px', border:'1px solid hsl(var(--border))', marginBottom:24 }}>
          {[
            ['Start date','October 1–10 is ideal. October 11–18 is fine with a buffer day. After October 18, we strongly advise against starting.'],
            ['Buffer day','Always keep 1 extra day in the itinerary for weather. Do not book a flight home the day after Badrinath darshan.'],
            ['Kedarnath option','If you are anxious about the trek in October, the helicopter option from Phata/Sersi is excellent — and helicopter operators actually run more reliably in October because there is less monsoon cloud.'],
            ['Warm clothes','We share a full packing list for October travel. Minimum: 2 heavy sweaters, a down or heavy synthetic jacket, thermal inner layers, gloves, and a woollen hat.'],
            ['Group size','October is ideal for smaller groups and couples — you get more personal attention and the roads are quieter. Large groups (15+) might find some facilities limited.'],
          ].map(([k,v],i)=>(
            <div key={i} style={{ display:'grid', gridTemplateColumns:'160px 1fr', gap:12, borderTop:i>0?'1px solid hsl(var(--border))':'none', padding:'10px 0' }}>
              <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{k}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.6 }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'September Yatra & Pre-Booking',h:'/blog/september-char-dham-yatra'},{l:'Best Time for Char Dham',h:'/blog/best-time-char-dham'},{l:'Char Dham Opening Dates',h:'/blog/char-dham-yatra-opening-dates-2026'},{l:'Uttarakhand Weather Guide',h:'/blog/uttarakhand-weather-guide'},{l:'Packing List',h:'/blog/char-dham-yatra-packing-list'}].map(l=>(
              <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>{l.l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
