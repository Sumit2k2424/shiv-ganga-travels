import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra from Varanasi 2026 — Train, Route & Package',
  description: 'Char Dham Yatra from Varanasi 2026. Distance to Haridwar 750km. Best trains: Varanasi–Haridwar Express. All-inclusive packages from ₹22,999/person. Direct operator, zero commission.',
  keywords: ['char dham yatra from varanasi','varanasi to haridwar char dham','varanasi char dham yatra package 2026','char dham yatra varanasi haridwar train'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-varanasi` },
  openGraph: { title:'Char Dham Yatra from Varanasi 2026', description:'Book Char Dham Yatra from Varanasi. 750km to Haridwar. Train & flight options. All-inclusive packages from ₹22,999/person.', url:`${SITE.baseUrl}/char-dham-yatra-from-varanasi`, type:'website' },
};

function Schema() {
  const faq = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      { '@type':'Question', name:'How to reach Haridwar from Varanasi for Char Dham Yatra?',
        acceptedAnswer:{ '@type':'Answer', text:'Best options: (1) Train — Varanasi–Haridwar Express (15013) departs 18:05, arrives Haridwar 10:30 next day. (2) Fly Varanasi to Dehradun (1.5 hrs, IndiGo/Air India) then 35km taxi to Haridwar. (3) Drive via Prayagraj–Lucknow–Moradabad, approximately 750km (13–15 hrs).' } },
      { '@type':'Question', name:'What is the cost of Char Dham Yatra from Varanasi?',
        acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra package from Varanasi starts at ₹22,999/person (9N/10D from Haridwar all-inclusive). Add Varanasi–Haridwar travel separately: train ₹350–1,000 per person, flight ₹2,500–5,000.' } },
      { '@type':'Question', name:'How many days should I plan for Char Dham Yatra from Varanasi?',
        acceptedAnswer:{ '@type':'Answer', text:'Plan 12–14 days total: 1 day travel Varanasi to Haridwar, 9–10 days for the Char Dham circuit, 1–2 days return buffer. If flying, you can reduce to 11–12 days.' } },
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
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Varanasi · Char Dham 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Package from Varanasi 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            Yamunotri · Gangotri · Kedarnath · Badrinath — from <strong style={{ color:'#FFD166' }}>₹22,999/person</strong> · Direct operator · Zero commission
          </p>
          {['📍 750km to Haridwar','✅ Zero commission','🙏 9N/10D circuit','🚂 Direct train available'].map(t=>(
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Varanasi</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Distance to Haridwar','750km'],['Best Route','Via Prayagraj–Lucknow'],['Yatra Duration','9N/10D'],['Total Trip','12–14 days'],['Package From','₹22,999/person'],['Season','Apr 19 – Nov 2026']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:20 }}>
          For pilgrims from Varanasi — the holiest city in India — the Char Dham Yatra is a natural extension of a life lived in devotion. Varanasi to Haridwar is 750km, and the journey carries its own spiritual weight: you are moving from the city where the Ganga is worshipped as a goddess to the mountains where she is born. Many Varanasi pilgrims tell us this journey between the two cities is one of the most powerful transitions of their lives.
        </p>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>How to Reach Haridwar from Varanasi</h2>
        <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
          The overnight train is by far the best option for most pilgrims — affordable, comfortable in 3A/2A class, and you wake up in Haridwar without wasting a day. The flight option is quick but adds cost. If travelling as a group in a private vehicle, the drive via NH19 through Prayagraj and Lucknow is straightforward but long.
        </p>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Trains from Varanasi to Haridwar</h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','Route','Dep','Arr','Duration','Fare'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              {[
                ['Varanasi–Haridwar Exp (15013)','BSB → HW','18:05','10:30+1','16.5 hrs','SL ₹350 / 3A ₹950'],
                ['Amarnath Express (14649)','BSB → HW','22:55','18:00+1','~19 hrs','SL ₹330 / 3A ₹900'],
                ['Via Delhi (Rajdhani)','BSB → NDLS then taxi','Various','~14 hrs total','2 legs','CC ₹1,800+₹500 taxi'],
                ['Fly BSB → DED + taxi','Varanasi Airport → Dehradun','1.5 hr flight','Dehradun + 35km taxi','~4 hrs total','₹2,500–5,000'],
              ].map(([train,route,dep,arr,dur,fare],i)=>(
                <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>{train}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{route}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{dep}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{arr}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{dur}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>A Note for Varanasi Pilgrims</h2>
        <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
          We have served hundreds of pilgrims from Varanasi, Mirzapur, and the Purvanchal region over the years. There is something particular about how pilgrims from the Ganga heartland approach the Char Dham — a quieter intensity, a sense that they already know the river and now want to find her source. Several of our groups from Varanasi have specifically requested to stop at the Devprayag confluence — where the Bhagirathi and Alaknanda merge to form the Ganga — simply to stand at that spot and reflect. We always accommodate this.
        </p>
        <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:24 }}>
          If you are a senior pilgrim or travelling with elderly parents, we strongly recommend the train option combined with our package — it is easier on the body, more economical, and our team receives you at Haridwar station directly.
        </p>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Our Packages</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:12, marginBottom:28 }}>
          {[
            { name:'Classic 9N/10D', price:'₹22,999', note:'Most popular', desc:'All 4 dhams, standard hotels, all meals, AC cab from Haridwar' },
            { name:'Deluxe 11N/12D', price:'₹30,999', note:'Extra comfort', desc:'3-star hotels, slower pace, more rest days, VIP puja' },
            { name:'Senior Special 12N/13D', price:'₹27,999', note:'60+ pilgrims', desc:'Ground-floor rooms, medical attendant, oxygen, pony included' },
            { name:'Helicopter 5N/6D', price:'₹88,000', note:'Premium', desc:'All 4 dhams by helicopter from Dehradun. No trekking.' },
          ].map(p=>(
            <div key={p.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:2 }}>{p.name}</div>
              <div style={{ fontWeight:800, fontSize:20, color:'var(--gold)', marginBottom:4 }}>{p.price}<span style={{ fontSize:12, fontWeight:500, color:'var(--text-muted)' }}>/person</span></div>
              <div style={{ fontSize:11.5, fontWeight:600, color:'var(--teal)', marginBottom:6 }}>{p.note}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.6 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book from Varanasi — Free Quote in 2 Hours</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Direct operator. Zero commission. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am from Varanasi and want to book Char Dham Yatra 2026. Please share details.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <a href="tel:+917017082807" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['How to Reach Haridwar','/how-to-reach-haridwar'],['Senior Package','/blog/senior-citizen-char-dham'],['Registration Guide','/blog/char-dham-yatra-registration'],['Cost Breakdown','/blog/char-dham-yatra-cost']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
