import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra from Patna 2026 — Train, Flight & Package',
  description: 'Char Dham Yatra from Patna 2026. Train to Haridwar (14 hrs), all-inclusive packages from ₹19,500. Direct operator, zero commission.',
  keywords: ['char dham yatra from patna','patna to haridwar char dham','char dham package patna 2026','bihar char dham yatra package','patna haridwar train char dham'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-patna` },
};

function Schema() {
  const faq = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      { '@type':'Question', name:'How to reach Haridwar from Patna for Char Dham Yatra?',
        acceptedAnswer:{ '@type':'Answer', text:'Best options: (1) Train — Patna to Haridwar via the Patna–Dehradun Express (19269) or via Varanasi–Haridwar route. Total 18–22 hours. (2) Fly Patna to Dehradun (1.5 hrs via Delhi) then 35km taxi to Haridwar. Distance by road is approximately 1,000km.' } },
      { '@type':'Question', name:'Is Char Dham Yatra popular from Bihar?',
        acceptedAnswer:{ '@type':'Answer', text:'Yes — Bihar and Jharkhand have one of the highest per-capita rates of pilgrimage travel in India. We have served hundreds of groups from Patna, Gaya, Muzaffarpur, and Bhagalpur. Many Bihar pilgrims also visit Gaya for pind-dan before or after the Char Dham Yatra.' } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>;
}

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Patna · Bihar · Char Dham 2026</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Package from Patna 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            Yamunotri · Gangotri · Kedarnath · Badrinath — from <strong style={{ color:'#FFD166' }}>₹22,999/person</strong> · Bihar groups welcome
          </p>
          {['📍 1,000km to Haridwar','✅ Zero commission','🙏 9N/10D circuit','🚂 Direct train available'].map(t=>(
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>
      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Patna</span>
        </div>
      </nav>
      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Distance','~1,000km'],['Best Train','Patna–Dehradun Exp'],['Train Time','~22 hrs'],['Total Trip','12–14 days'],['Package From','₹22,999/person'],['Season','Apr 19 – Nov 2026']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:20 }}>
          Bihar has always had a profound culture of pilgrimage. From Gaya — where Hindus perform pind-dan for their ancestors — to the Char Dham in the Himalayas, the journey northward carries deep meaning for people of this region. We receive some of our most devoted pilgrims from Patna, Gaya, Muzaffarpur, and Darbhanga. For many Bihar families, the Char Dham Yatra is a multi-generational event — grandparents finally making the journey they have planned for years, children accompanying them for the first time.
        </p>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>How to Reach Haridwar from Patna</h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Option','Route','Duration','Approx Cost'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              {[
                ['Train (best value)','Patna–Dehradun Express (19269): PNBE → DED','~22 hrs','SL ₹450 / 3A ₹1,200'],
                ['Train via Delhi','PNBE → NDLS (Rajdhani) + Shatabdi to HW','16 hrs total','₹1,500–2,500'],
                ['Flight','PAT → DED (via Delhi) + taxi to HW','~4 hrs total','₹3,500–6,000'],
              ].map(([opt,route,dur,cost],i)=>(
                <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>{opt}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{route}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{dur}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Combine with Gaya — A Common Bihar Pilgrimage Route</h2>
        <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:20 }}>
          Many Bihar pilgrims combine the Char Dham Yatra with a visit to Gaya for pind-dan — the sacred Hindu ritual of offering to ancestors at the Vishnupad Temple and the Phalgu river banks. The traditional sequence is Gaya first (pind-dan for ancestors), then Char Dham (blessings for the living). We can help you plan an itinerary that covers both. WhatsApp us and we will put together a custom plan.
        </p>
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book from Patna — Free Quote in 2 Hours</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Direct Haridwar operator. Bihar groups welcome. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am from Patna/Bihar and want to book Char Dham Yatra 2026. Please share package details.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <a href="tel:+917017082807" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['From Varanasi','/char-dham-yatra-from-varanasi'],['Cost 2026','/blog/char-dham-yatra-cost'],['Senior Package','/blog/senior-citizen-char-dham']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
