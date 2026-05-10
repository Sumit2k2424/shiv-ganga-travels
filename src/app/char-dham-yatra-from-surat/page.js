import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra from Surat 2026 — Packages',
  description: 'Char Dham Yatra from Surat 2026. Train or flight to Haridwar, all-inclusive packages from ₹19,500. Direct Haridwar operator.',
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-surat` },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How to reach Haridwar from Surat for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Fly Surat to Delhi (1.5 hrs, IndiGo) then Delhi to Dehradun (1 hr) then taxi to Haridwar.' } },
      { '@type': 'Question', name: 'What is the cost of Char Dham Yatra from Surat?',
        acceptedAnswer: { '@type': 'Answer', text: 'All-inclusive Char Dham Yatra from Surat starts at ₹24,999 per person for 9N/10D from Haridwar.' } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Surat · Char Dham 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Package from Surat 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            Yamunotri · Gangotri · Kedarnath · Badrinath &mdash; from <strong style={{ color:'#FFD166' }}>{`₹24,999/person`}</strong> · Direct operator · Zero commission
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Surat</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Distance to Haridwar','1,230km'],['Best Route','Via NH48 via Vadodara'],['Yatra Duration','9N/10D'],['Total Trip','11-13 days'],['Package From','₹24,999/person'],['Season','Apr 19 – Nov 2026']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          How to Reach Haridwar from Surat
        </h2>
        <p style={{ fontSize:16, color:'#334155', lineHeight:1.85, marginBottom:20 }}>
          Surat to Haridwar is 1,230km via NH48 via Vadodara. Fly Surat to Delhi (1.5 hrs, IndiGo) then Delhi to Dehradun (1 hr) then taxi to Haridwar. Haridwar is the gateway to Char Dham Yatra — your package vehicle departs at 4–5 AM from Haridwar.
        </p>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Trains from Surat to Haridwar
        </h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','Route','Dep','Arr','Fare'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'#fff' }}>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>Dehradun Exp 19019</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>ST→DDN</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>13:15</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>12:00+1</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>SL ₹640</td>
              </tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'var(--bg)' }}>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>Yoga Exp via ADI</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>Change at ADI</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>Various</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>24+ hrs</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>SL ₹650</td>
              </tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'#fff' }}>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>Via Mumbai+Delhi</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>Multiple changes</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>Various</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>22+ hrs</td>
                <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>SL ₹700</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Vehicle Options from Haridwar — 9N/10D Circuit
        </h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Vehicle','Seats','Circuit Price','Per Day','Best For'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              {[['Ertiga','4P','₹22,000–25,000','₹2,100','Couples'],['Innova Crysta','6P','₹28,000–32,000','₹2,800','Families'],['Innova 7S','7P','₹30,000–34,000','₹3,000','Groups 6–7'],['Tempo 9S','9P','₹38,000–44,000','₹3,800','Medium groups'],['Tempo 12S','12P','₹44,000–52,000','₹4,400','Large groups']].map(([v,s,p,d,b],i)=>(
                <tr key={v} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)' }}>{v}</td>
                  <td style={{ padding:'9px 12px', color:'#475569' }}>{s}</td>
                  <td style={{ padding:'9px 12px', fontWeight:800, color:'var(--navy)' }}>{p}</td>
                  <td style={{ padding:'9px 12px', color:'#475569' }}>{d}</td>
                  <td style={{ padding:'9px 12px', color:'#475569' }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 }}>
          What Char Dham Yatra Includes — From Surat
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:10, marginBottom:24 }}>
          {[
            ['AC private vehicle', 'Dedicated Innova/Tempo for your group — no shared buses'],
            ['All hotels', '9 nights in pre-confirmed hotels. Ground-floor rooms for seniors.'],
            ['VIP darshan', 'Skip queues at all 4 dhams. Priest-arranged at Kedarnath and Badrinath.'],
            ['Local guide', 'Garhwali guide who knows every route, rest stop, and ritual.'],
            ['Pony at Kedarnath', 'Included for pilgrims 60+ or on request. Confirmed in advance.'],
            ['Oxygen cylinder', 'On every vehicle. Drivers trained for altitude emergencies.'],
          ].map(([title, desc]) => (
            <div key={title} style={{ background:'var(--bg)', border:'1px solid var(--border)', borderRadius:10, padding:'12px 14px' }}>
              <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:4 }}>{title}</div>
              <div style={{ fontSize:12.5, color:'#475569', lineHeight:1.6 }}>{desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 }}>
          Why Book Direct — Not Through an Aggregator
        </h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
          Sites like MakeMyTrip and Thrillophilia charge ₹25,000–30,000+ for the same package we run at ₹19,500. The difference is a 30–40% agent commission layered onto the operator's base price. We are the operator. You book us directly, you pay the operator price. That is not a marketing claim — we publish a side-by-side price comparison on our homepage.
        </p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
          We also own our vehicles. We don't sub-contract to local taxi operators as aggregators typically do. Our drivers work with us year after year. They know the Kedarnath route, the Gangotri highway, the mountain weather windows, and when to stop and when to push on.
        </p>
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Char Dham Yatra from Surat — Free Quote in 2 Hours</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Direct operator. Zero commission. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am from Surat and want to book Char Dham Yatra 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/char-dham-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Packages →</Link>
            <a href="tel:+917017082807" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 Call</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['How to Reach Haridwar','/how-to-reach-haridwar'],['Cost 2026','/blog/char-dham-yatra-cost'],['Registration','/blog/char-dham-yatra-registration'],['Group Packages','/blog/char-dham-group-package'],['Opening Dates','/blog/char-dham-yatra-opening-dates-2026']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
