import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra for Senior Citizens 2026 – Pony, Palki, VIP Darshan & Medical Tips',
  description: 'Complete guide for senior citizens doing Char Dham Yatra 2026: medical certificate for 55+, pony and palki costs, VIP darshan booking, oxygen stops, acclimatisation, and our senior package.',
  keywords: ['senior citizen char dham yatra 2026', 'char dham yatra for elderly', 'char dham yatra age limit 2026', 'char dham yatra senior citizen package', 'old age char dham yatra', 'char dham yatra 60 years'],
  alternates: { canonical: `${SITE.baseUrl}/blog/senior-citizen-char-dham` },
  openGraph: { title:'Char Dham Yatra for Senior Citizens 2026 – Pony, Palki, VIP Darshan & Medical Tips', description:'Can elderly people do Char Dham Yatra? Yes — with the right planning. Complete guide.', url:`${SITE.baseUrl}/blog/senior-citizen-char-dham`, type:'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra for Senior Citizens 2026 — 60+ | Pony, Palki, Helicopt | Shiv Ganga Travels' }],
};

function Schema() {
  const article = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Senior Citizen Char Dham Yatra 2026 — Tips, Special Package & Safety Guide', author: {
        '@type': 'Person',
        name: 'Sumit Mishra',
        jobTitle: 'Operations Manager, Shiv Ganga Travels',
        url: `${SITE.baseUrl}/about`,
        sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
      }, publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl }, datePublished:'2025-03-01', dateModified:'2026-04-27', mainEntityOfPage:`${SITE.baseUrl}/blog/senior-citizen-char-dham` };

    const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question',
        name: 'Is Char Dham Yatra safe for senior citizens above 70?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, with proper preparation and a specialised package. Shiv Ganga Travels has completed yatras with pilgrims aged 75–82. Key requirements: helicopter for Kedarnath (avoids 16km trek), medical certificate, ground-floor rooms, slower pace 12N/13D itinerary, medical attendant, and oxygen cylinder. Badrinath and Gangotri are accessible by motor road with no trekking. A medical fitness certificate from a doctor is mandatory for pilgrims 55+.' },
      },
      { '@type': 'Question',
        name: 'What is the special provision for senior citizens at Kedarnath?',
        acceptedAnswer: { '@type': 'Answer', text: 'Senior citizens at Kedarnath can use: (1) Pony/horse — ₹3,000–5,000 one way from Gaurikund, (2) Palki/doli — ₹8,000–12,000 one way, carried by 4 porters, most comfortable option, (3) Helicopter — ₹7,000–9,000 one way from Phata helipad, book via IRCTC. A dedicated "Divyangjan and Senior Citizen" queue is available for darshan inside the temple — speak to our guide to access this queue.' },
      }
    ],
  };
  return (<>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>
    </>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function SeniorCitizenCharDham() {
return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>For Elderly Pilgrims · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Char Dham Yatra for Senior Citizens — Yes, It Is Possible. Here's How.
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Age 60–85+ · Safety tips · Medical support · Pony & helicopter · Special package</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Senior Citizen Char Dham Yatra</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Our oldest ever Char Dham pilgrim was 86 years old. Sardar Gurpreet Singh from Amritsar. His family was terrified. His doctor was concerned. He himself had a bad knee and was on blood pressure medication. But he had waited 60 years for this yatra and was not going to wait any longer.</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>He completed all four dhams in 14 days. He took ponies at Yamunotri and Kedarnath. Our medical attendant monitored his oxygen levels every evening. He slept in ground-floor rooms with attached bathrooms at every stop. On the last day at Badrinath, watching the Tapt Kund steam rise in the morning mist, he folded his hands and said — "Ab jaana ho sakta hai. Darshan ho gaye." (Now I can go. I have had the darshan.)</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Sardar Gurpreet Singh is why we created our <strong>Senior Citizen Special Package</strong>. Not as an afterthought, but as a central part of what we do.</p>

        <h2 style={h2}>Is There an Age Limit for Char Dham Yatra?</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}><strong>There is no official age limit for Char Dham Yatra.</strong> However, the Uttarakhand government does recommend that pilgrims above 60 years with pre-existing medical conditions (heart disease, severe BP, recent surgery) get a fitness certificate from their doctor before travelling. This is good advice, not a barrier.</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The reality is: every year, thousands of pilgrims aged 70–80+ complete the Char Dham Yatra safely. With proper planning, the right pacing, and a good operator, it is very much achievable.</p>

        <h2 style={h2}>Our Senior Citizen Special Package — ₹24,500 (12N/13D)</h2>
        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'20px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:15, color:'var(--navy)', marginBottom:14 }}>What makes it different:</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10 }}>
            {[
              { feature:'3 Extra Rest Days', detail:'Standard 9N/10D becomes 12N/13D — your body gets time to adjust to altitude gradually.' },
              { feature:'Pony/Palki Included', detail:'At both Yamunotri (6km) and Kedarnath (16km). No extra charge. Pre-booked.' },
              { feature:'Medical Attendant', detail:'A trained attendant with a medical kit travels with your group throughout.' },
              { feature:'Oxygen Cylinder', detail:'Available on the vehicle at all times. Refilled if used.' },
              { feature:'Pulse Oximeters', detail:'We monitor blood oxygen levels at each stop — especially important at Kedarnath and Badrinath.' },
              { feature:'Ground Floor Rooms', detail:'We specifically request ground-floor accommodation at every hotel. Stairs are a genuine issue at altitude.' },
              { feature:'Compression Socks', detail:'We provide compression socks for the trek days — reduces swelling and DVT risk on long drives.' },
              { feature:'Slower Pace', detail:'We don\'t rush. Temple visits are at a comfortable time. Meals are never skipped.' },
            ].map(f => (
              <div key={f.feature} style={{ background:'#fff', borderRadius:8, padding:'12px', border:'1px solid var(--border)' }}>
                <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:4 }}>✅ {f.feature}</div>
                <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.5 }}>{f.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={h2}>Medical Conditions — What Can & Cannot Travel</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}><strong>Can travel with precautions:</strong> Controlled blood pressure, Type 2 diabetes, mild asthma, arthritis, knee replacements, hip replacements (within 6+ months), controlled thyroid. Consult your doctor and carry medications.</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}><strong>Should consider helicopter package:</strong> Heart stents or bypass surgery (within 12 months), severe COPD, recent stroke, uncontrolled diabetes, oxygen dependency at sea level. The helicopter package eliminates altitude stress by minimising time at high elevation.</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}><strong>Should postpone:</strong> Active cancer treatment, very recent major surgery (under 3 months), severe unstable heart conditions. Your health comes first. The dhams will be there next year.</p>

        <h2 style={h2}>10 Practical Tips for Senior Pilgrims</h2>
        <ol style={{ paddingLeft:22, marginBottom:24, color:'var(--text-mid)', fontSize:14.5, lineHeight:2.5 }}>
          <li><strong>Visit your doctor 4 weeks before departure.</strong> Get a full checkup. Adjust any medications if needed. Carry the doctor’s contact number.</li>
          <li><strong>Start daily walks 6 weeks before.</strong> Even 20–30 minutes daily builds the stamina for driving and short walks between vehicles and temples.</li>
          <li><strong>Book the pony or helicopter in advance.</strong> Don't decide on the day — pre-booking ensures availability and avoids price gouging.</li>
          <li><strong>Carry at least 3 months' supply of medicines.</strong> Don't rely on finding your specific medication in mountain towns.</li>
          <li><strong>Drink water constantly.</strong> At altitude, dehydration happens faster and quietly. 2.5–3 litres daily minimum.</li>
          <li><strong>Avoid altitude sickness with Diamox.</strong> Ask your doctor about taking 125mg Diamox from 1 day before Kedarnath/Badrinath.</li>
          <li><strong>Never skip meals.</strong> At altitude, eating keeps your energy and oxygen levels stable. Even if you’re not hungry, eat something.</li>
          <li><strong>Inform your guide immediately if you feel unwell.</strong> Headache, confusion, vomiting at altitude are warning signs. Our team knows exactly what to do.</li>
          <li><strong>Descend if severe symptoms appear.</strong> Altitude sickness resolved at lower altitude — every time. Never "push through" significant symptoms.</li>
          <li><strong>Rest the first evening at Kedarnath.</strong> Do not rush straight to the temple the moment you arrive. Rest 2–3 hours, drink water, then visit.</li>
        </ol>


        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Book the Senior Citizen Package</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>₹24,500 per person · 12N/13D · Pony included · Medical attendant · No worries.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book the Senior Citizen Char Dham package for 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href='tel:+917017082807' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Senior-Friendly Packages','/char-dham-yatra'],['Medical Certificate Guide','/blog/char-dham-yatra-medical-certificate'],['Kedarnath Helicopter','/blog/kedarnath-helicopter-booking'],['Packing List','/blog/char-dham-yatra-packing-list'],['Budget vs Premium','/blog/char-dham-yatra-budget-vs-premium'],['Cancellation Policy','/cancellation-policy']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
