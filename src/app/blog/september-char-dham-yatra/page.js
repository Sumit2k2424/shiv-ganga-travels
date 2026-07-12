import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'September Char Dham Yatra 2026: Post-Monsoon Packages & Pre-Booking',
  description: 'Skip the monsoon, catch the best views of the year. September Char Dham Yatra 2026 — weather week by week, package prices from ₹21,000, and why autumn seats fill by August.',
  keywords: ['september char dham yatra package 2026', 'post monsoon char dham yatra', 'char dham yatra in september', 'pre-book char dham autumn packages', 'char dham yatra september weather', 'post monsoon uttarakhand tour'],
  alternates: { canonical: `${SITE.baseUrl}/blog/september-char-dham-yatra` },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p = { fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 };

const FAQS = [
  { q:'Is September a good month for Char Dham Yatra?', a:'The second half of September is one of the two best windows of the year (the other is early October). The monsoon withdraws, skies clear, peaks carry fresh snow, and the May–June crowds are long gone. The first week of September can still catch the monsoon tail, so we advise starting from around September 15 onwards.' },
  { q:'What is the price of a September Char Dham package from Haridwar?', a:'Our 9 nights / 10 days Char Dham package starts at ₹21,000 per person (budget) and ₹30,000 per person (deluxe) from Haridwar. September pricing is the same as our published rates — we do not add season surcharges — and off-season hotel savings are already built in.' },
  { q:'When should I book a September or October Char Dham trip?', a:'By early August, ideally. Everyone who postponed a monsoon trip aims for the same mid-September to mid-October window, so good hotels in Guptkashi, Badrinath and Barkot fill first. Pre-booking costs nothing extra with us and locks your dates, vehicle and hotels.' },
  { q:'How is the weather at Kedarnath in September?', a:'Daytime 10–15°C, nights 3–7°C, occasional light showers in the first half of the month and mostly clear after mid-September. Carry proper warm layers for early mornings — the 4 AM Mahabhishek queue is cold even when the day is pleasant.' },
  { q:'Is the Kedarnath trek open in September?', a:'Yes, the trek, ponies, palkis and helicopter services all operate through September and October until the temple closes in November. Helicopters actually fly more reliably after the monsoon because visibility improves.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'September Char Dham Yatra 2026: Post-Monsoon Packages & Pre-Booking',
    description: 'Why mid-September to mid-October is the best window of the year for Char Dham, weather week by week, and how post-monsoon pre-booking works.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-07-12',
    dateModified: SITE.lastUpdatedISO,
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
    mainEntityOfPage: `${SITE.baseUrl}/blog/september-char-dham-yatra`,
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <Schema />
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Beat the Monsoon · Autumn 2026 Pre-Booking Open</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>September Char Dham Yatra 2026 — The Window Locals Wait For</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Clear skies · Fresh snow on the peaks · Thin crowds · Packages from ₹21,000 · Book by August</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>September Char Dham Yatra</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>

        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24, border:'2px solid var(--teal)' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>Short answer from our team</div>
          <div style={{ fontSize:14.5, color:'#334155', lineHeight:1.7 }}>If we could pick the dates for every pilgrim who calls us, we would put most of them between September 15 and October 15. The monsoon has just rinsed the mountains, the air is the clearest it gets all year, the peaks have new snow, and the temple queues that run to hours in May take minutes. The only catch: everyone who postponed a monsoon trip is aiming for the same four weeks, so hotels in the small halt towns fill by August. That is why we open autumn pre-booking in July.</div>
        </div>

        <h2 style={h2}>Why Post-Monsoon Beats Peak Season</h2>
        <p style={p}>May and June get the crowds because of school holidays, not because the mountains are at their best. Ask anyone who has done both. In June you share the Kedarnath trek with thousands of people and the valley haze hides the peaks by 9 AM. In late September you can stand at Badrinath in the evening and see Neelkanth glowing without a cloud near it. Our drivers — who have no reason to flatter any month — call the post-monsoon weeks "dhulai ke baad ka pahad": the mountains after their wash.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { icon:'🏔️', title:'Clearest views of the year', desc:'The monsoon scrubs dust and haze from the air. September–October gives you the longest sightlines and the most reliable peak views — Neelkanth from Badrinath, Kedar dome from the trek, Bandarpunch from the Yamunotri road.' },
            { icon:'🚶', title:'Darshan without the queue', desc:'Peak-season waits of 2–4 hours drop to 20–40 minutes. Aarti feels like a temple ceremony again instead of crowd management.' },
            { icon:'🏨', title:'Hotels cost 25–40% less', desc:'Off-season rates in Guptkashi, Barkot and Badrinath are genuinely lower, and we pass that straight into the package instead of pocketing the gap.' },
            { icon:'🛣️', title:'Roads at their calmest', desc:'Monsoon repairs are done, slide activity drops sharply after the rain withdraws, and traffic is a fraction of June. Driving days that take 10 hours in peak season take 7–8.' },
          ].map(c=>(
            <div key={c.title} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)' }}>
              <div style={{ fontSize:24, marginBottom:8 }}>{c.icon}</div>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>{c.title}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.65 }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>September 2026, Week by Week</h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Window','Weather reality','Our verdict'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              {[
                ['Sept 1–10','Monsoon tail — showers still likely, some slide risk remains','Travel is possible with monsoon discipline, but wait if you can'],
                ['Sept 11–20','Rain tapering fast, skies opening, first crisp mornings','Good — the season turns in this window most years'],
                ['Sept 21–30','Withdrawn monsoon, washed air, fresh snow above 4,500m','Excellent — our favourite ten days of the whole calendar'],
                ['Oct 1–15','Crisp, clear, cold nights setting in at Kedarnath','Excellent — covered in detail in our October guide'],
              ].map(([w,wx,v],i)=>(
                <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{w}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{wx}</td>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--gold-dark)', fontSize:12.5 }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>One honesty note: monsoon withdrawal dates move a little every year. Some years the rain lingers to September 20, some years it is gone by the 12th. This is why we keep September itineraries flexible on the front end — if the forecast says wait two days, we wait two days. For live conditions closer to your dates, check our <Link href="/char-dham-road-status" style={{ color:'var(--teal)', fontWeight:600 }}>road status page</Link>.</p>

        <h2 style={h2}>September Package Prices from Haridwar</h2>
        <p style={p}>Our published prices hold for September — no season surcharge, no "festive pricing". The off-season hotel savings are already inside these numbers:</p>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Package','Duration','Price per person','Best for'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              {[
                ['Char Dham Budget','9N / 10D','₹21,000','Families and groups who want the full circuit at honest cost'],
                ['Char Dham Deluxe','9N / 10D','₹30,000','Better hotels, more comfort on the long driving days'],
                ['Do Dham (Kedarnath + Badrinath)','5N / 6D','₹10,999','Limited leave — the two most-visited dhams'],
                ['Kedarnath','3N / 4D','₹6,999','Short focused darshan trip'],
                ['Badrinath','2N / 3D','₹5,999','Easiest dham — no trek, drive right up'],
              ].map(([pkg,dur,price,fit],i)=>(
                <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{pkg}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{dur}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--gold-dark)', fontSize:13 }}>{price}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>Full itineraries, hotel lists and inclusions are on our <Link href="/char-dham-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>Char Dham Yatra packages page</Link>. We are the direct operator — our own vehicles, our own drivers, zero broker commission in the price.</p>

        <BlogCTA variant="inline" intent="booking" />

        <h2 style={h2}>How Autumn Pre-Booking Works (and Why July–August Is the Time)</h2>
        <p style={p}>Every year the same thing happens. Pilgrims postpone their July plans because of the rain — sensible — and then in late August everyone tries to book the same mid-September dates at once. The bottleneck is never our vehicles; it is rooms in the small halt towns. Guptkashi, Barkot and Badrinath have limited good hotels, and the decent ones are committed weeks ahead for the autumn window.</p>
        <p style={p}>Pre-booking with us is simple and costs nothing extra. You lock your dates with a token advance, we block the hotels and vehicle immediately, and the balance is due closer to travel as per our <Link href="/cancellation-policy" style={{ color:'var(--teal)', fontWeight:600 }}>cancellation policy</Link>. If the monsoon lingers over your start date, we shift your departure within the season at no charge — we would rather move your trip two days than send you into rain we warned you about on this very page.</p>
        <p style={p}>To be clear about what pre-booking is not: there is no fake countdown here, no "only 3 seats left" banner. The pressure is real but boring — small towns, few rooms, one good month. Book when you are ready; just know that in our 15 seasons, "ready" in mid-September has usually meant "compromising on hotels".</p>

        <h2 style={h2}>September Yatra FAQs</h2>
        {FAQS.map((f,i)=>(
          <div key={i} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:'16px 18px', marginBottom:12 }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{f.q}</div>
            <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>{f.a}</div>
          </div>
        ))}

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Lock Your Post-Monsoon Dates Now</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>September 15 – October 15 is the best month of the Char Dham year. Token advance, flexible start date, direct-operator pricing from ₹21,000.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to pre-book a September/October 2026 Char Dham package. Please share dates and availability.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 Pre-Book on WhatsApp</a>
            <Link href="/char-dham-yatra" style={{ background:'#fff', color:'var(--navy)', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>📖 View Autumn Itineraries →</Link>
          </div>
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'Char Dham in October',h:'/blog/char-dham-yatra-in-october'},{l:'Monsoon Safety Guide',h:'/blog/char-dham-monsoon-safety'},{l:'Best Time for Char Dham',h:'/blog/best-time-char-dham'},{l:'Closing Dates 2026',h:'/blog/char-dham-yatra-closing-dates-2026'},{l:'Packing List',h:'/blog/char-dham-yatra-packing-list'}].map(l=>(
              <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
            ))}
          </div>
        </div>

        <BlogCTA variant="footer" intent="booking" />
      </article>
    </>
  );
}
