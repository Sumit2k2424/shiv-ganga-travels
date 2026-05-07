import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Helicopter Package 2026 — All 4 Dhams, 6 Days',
  description: 'Char Dham helicopter tour 2026. All 4 dhams in 6 days from Dehradun. VIP darshan, luxury stays. Packages from ₹85,000 per person.',
  keywords: ['char dham helicopter package, char dham helicopter tour 2026, char dham yatra by helicopter, helicopter char dham price 2026'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-helicopter` },
  openGraph: { title: 'Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days', description:'Book Char Dham by helicopter 2026. All 4 dhams in 5N/6D from Dehradun. ₹85,000 per person. VIP darshan, luxury hotels, no queues.', url:`${SITE.baseUrl}/char-dham-helicopter`, type:'website' },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org','@type':'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    address:{ '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' },
    aggregateRating:{ '@type':'AggregateRating', ratingValue:4.3, reviewCount:30, bestRating:5 },
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
      {'@type':'ListItem',position:2,name:'Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days',item:`${SITE.baseUrl}/char-dham-helicopter`},
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/></>);
}

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Yatra Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>5N/6D · Dehradun base · ₹85,000/person · VIP darshan · Luxury hotels · No queues</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
          <div style={{fontSize:12,color:'var(--text-muted)',marginBottom:16,textAlign:'right'}}>🗓️ <strong>Last updated:</strong> May 4, 2026</div>

        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The <strong>Char Dham Helicopter Package</strong> is for pilgrims who want to complete all four sacred dhams — Yamunotri, Gangotri, Kedarnath, and Badrinath — in maximum comfort, minimum time, and with VIP darshan at every shrine. You fly by helicopter between each dham. No long mountain drives. No queues. Luxury hotels at every stop.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>This package is popular with senior pilgrims, corporate executives, and families where members have medical conditions that make mountain travel difficult. It's also a genuinely incredible experience — seeing the Himalayas from the air, watching Kedarnath temple appear below you in the snow, is something that sticks with you for life.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>What Makes This Package Different</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'12px',marginBottom:'20px'}}>
          <div style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)'}}>
            <div style={{fontWeight:700,fontSize:'13px',color:'var(--navy)',marginBottom:'4px'}}>🚁 Helicopter Between All Dhams</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>No road travel between shrines. Each dham by air — 7–20 minute flights.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)'}}>
            <div style={{fontWeight:700,fontSize:'13px',color:'var(--navy)',marginBottom:'4px'}}>🎫 VIP Darshan Guaranteed</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>Pre-arranged priority darshan at all 4 temples. No 3-hour queues.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)'}}>
            <div style={{fontWeight:700,fontSize:'13px',color:'var(--navy)',marginBottom:'4px'}}>🏨 Luxury Hotels</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>Best available hotels at each overnight stop. All meals included.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)'}}>
            <div style={{fontWeight:700,fontSize:'13px',color:'var(--navy)',marginBottom:'4px'}}>💊 Medical Support</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>Oxygen equipment, pulse oximeters, medical attendant throughout.</div>
          </div>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:8}}>📦 Our Featured Package:</div>
          <Link href={`/packages/char-dham-yatra-helicopter-5n-6d-dehradun`} style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',padding:'16px 18px',borderRadius:10,border:'1px solid var(--border)',textDecoration:'none',gap:12}}>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--text)',marginBottom:3}}>View 5N/6D Package →</div>
              <div style={{fontSize:12.5,color:'var(--text-muted)'}}>Full itinerary · Inclusions · FAQs · Book online</div>
            </div>
            <div style={{fontWeight:800,fontSize:22,color:'var(--navy)',whiteSpace:'nowrap'}}>From ₹85,000</div>
          </Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/blog/kedarnath-helicopter-booking" href="/blog/kedarnath-helicopter-booking" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Kedarnath Helicopter Booking Guide"}<span> →</span></Link>
              <Link key="/char-dham-yatra" href="/char-dham-yatra" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham 2026 Complete Guide"}<span> →</span></Link>
              <Link key="/blog/senior-citizen-char-dham" href="/blog/senior-citizen-char-dham" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Senior Citizen Char Dham"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-cost" href="/blog/char-dham-yatra-cost" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Cost Breakdown"}<span> →</span></Link>
          </div>
        </div>


        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.4rem',fontWeight:700,color:'var(--navy)',marginBottom:14,marginTop:32}}>
          Helipads — Locations, Distance &amp; Details
        </h2>
        <div style={{overflowX:'auto',marginBottom:28}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
            <thead>
              <tr style={{background:'var(--navy)'}}>
                {['Dham','Helipad Name','Location','Distance from Temple','Notes'].map(h=>(
                  <th key={h} style={{padding:'11px 14px',textAlign:'left',color:'#fff',fontWeight:700,fontSize:12.5}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Yamunotri','Kharsali Helipad','Kharsali Village (1km from Janki Chatti)','6km trek to temple (pony/doli from helipad)','Altitude 2,675m. IRCTC booking not required for this helipad in 2026.'],
                ['Gangotri','Harsil / Jhalla Helipad','Harsil, 23km from Gangotri','Road transfer 23km (45 min) to Gangotri temple','No IRCTC booking needed. Road to Gangotri fully open.'],
                ['Kedarnath','Phata Helipad','Phata Village, 19km from Gaurikund','Fly to temple helipad — 7 min flight','Primary helipad 2026. IRCTC booking mandatory. 2,700m altitude.'],
                ['Kedarnath','Sersi Helipad','Sersi, Guptkashi area','Fly to temple helipad — 12 min flight','Alternate to Phata. IRCTC booking mandatory. Altitude 1,800m.'],
                ['Kedarnath','Guptkashi Helipad','Near Guptkashi town','Fly to temple helipad — 15 min flight','Third option. IRCTC mandatory. Road base for Kedarnath pilgrims.'],
                ['Badrinath','No helipad needed','Motor road reaches temple directly','0 — road goes to temple','No helicopter needed. Motor road reaches Badrinath at 3,133m.'],
              ].map(([dh,hp,loc,dist,notes],i)=>(
                <tr key={hp} style={{borderBottom:'1px solid var(--border)',background:i%2===0?'#fff':'var(--bg)'}}>
                  <td style={{padding:'10px 14px',fontWeight:700,color:'var(--navy)',fontSize:14}}>{dh}</td>
                  <td style={{padding:'10px 14px',fontWeight:600,color:'var(--teal)',fontSize:13.5}}>{hp}</td>
                  <td style={{padding:'10px 14px',color:'var(--text-mid)',fontSize:13}}>{loc}</td>
                  <td style={{padding:'10px 14px',color:'var(--text-mid)',fontSize:13}}>{dist}</td>
                  <td style={{padding:'10px 14px',color:'var(--text-muted)',fontSize:12.5}}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.4rem',fontWeight:700,color:'var(--navy)',marginBottom:14,marginTop:32}}>
          How to Book Kedarnath Helicopter via IRCTC (Mandatory 2026)
        </h2>
        <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:24}}>
          {[
            ['1','Visit irctc.co.in','Go to Tourism section → Helicopter Services → Kedarnath'],
            ['2','Create IRCTC account','Mobile OTP verification required. Use an active Indian mobile number.'],
            ['3','Select helipad and date','Choose Phata, Sersi, or Guptkashi. Select departure date and time slot.'],
            ['4','Enter passenger details','Name as per Aadhaar, age, ID proof details for each passenger.'],
            ['5','Pay online','₹7,000–9,000 per person one-way. Card, UPI, or net banking.'],
            ['6','Download ticket','Print or save digital ticket. Carry to helipad — QR code is scanned.'],
          ].map(([n,t,d])=>(
            <div key={n} style={{display:'flex',gap:0,borderRadius:10,overflow:'hidden',border:'1px solid var(--border)'}}>
              <div style={{background:'var(--navy)',minWidth:44,display:'flex',alignItems:'center',justifyContent:'center',padding:'12px 8px'}}>
                <span style={{color:'#FFD166',fontWeight:800,fontSize:16}}>{n}</span>
              </div>
              <div style={{padding:'12px 14px',flex:1}}>
                <div style={{fontWeight:700,fontSize:13.5,color:'var(--navy)',marginBottom:3}}>{t}</div>
                <div style={{fontSize:13,color:'var(--text-muted)'}}>{d}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:'#FEF3E2',border:'2px solid var(--gold)',borderRadius:12,padding:'14px 18px',marginBottom:28,fontSize:13.5,color:'#7B3F00'}}>
          <strong>Important 2026 rule:</strong> Kedarnath helicopter bookings at helipads are being eliminated. All bookings must be via irctc.co.in. Walk-in bookings are no longer accepted. Shiv Ganga Travels assists all pilgrims with IRCTC helicopter booking — included in our packages at no extra charge.
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href='tel:+917017082807' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </article>

      <section style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'32px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>Useful Resources</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Helicopter Booking Guide','/blog/kedarnath-helicopter-booking'],['Pony vs Helicopter','/blog/kedarnath-pony-vs-helicopter'],['Char Dham Packages','/char-dham-yatra'],['Road Status','/char-dham-road-status']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'8px 16px', borderRadius:8, fontSize:13, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
