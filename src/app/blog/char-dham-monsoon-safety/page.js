import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra in Monsoon 2026: Safety Guide by Local Drivers',
  description: 'Travelling Char Dham in July–August rain? Honest monsoon safety guide from Haridwar hill drivers — why we leave at sunrise, landslide zones, what to pack, live route checks.',
  keywords: ['char dham monsoon travel safety', 'kedarnath route live updates', 'safe mountain drivers uttarakhand', 'monsoon pilgrimage taxi haridwar', 'best time of day to travel char dham', 'kedarnath weather advisory', 'char dham yatra in rain', 'himalayan road trip safety july'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-monsoon-safety` },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p = { fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 };

const FAQS = [
  { q:'Is Char Dham Yatra safe during monsoon (July–August)?', a:'It is possible but demands respect. All four dhams stay open through the monsoon, and pilgrims travel every day. But landslides do block roads for hours at a time, and afternoon rain is heavy. Safe monsoon travel means an experienced hill driver, sunrise departures, a buffer day, and checking route status the morning you move. If your dates are flexible, mid-September onwards is easier.' },
  { q:'What time should we start driving on Char Dham routes in monsoon?', a:'Leave the hotel by 5:30–6:00 AM. Landslides and heavy showers concentrate between roughly 2 PM and night. A sunrise start means you cover the exposed stretches while the hillside is still stable, and you reach the next halt before the afternoon rain builds.' },
  { q:'Where can I check Kedarnath route live updates?', a:'Our live road status page compiles BRO and district updates with our own driver reports each morning. You can also call the Uttarakhand disaster helpline 1070 or police 112. Never rely on a week-old news article — mountain roads change daily in monsoon.' },
  { q:'What happens if a landslide blocks the road during our yatra?', a:'Usually you wait. JCB machines are stationed at known slide zones and most blockages clear in 1–4 hours. Our drivers know the alternate routes where they exist (for example via Tilwara or the old Srinagar alignment) and we adjust the halt for the night if needed. This is exactly why we build a buffer day into monsoon itineraries.' },
  { q:'Do helicopters to Kedarnath fly in monsoon?', a:'They fly, but with frequent weather holds. Morning slots have the best completion rate. If the valley clouds over, flights pause until visibility returns — sometimes for the whole day. Book a morning slot and keep the trek as backup.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Char Dham Yatra in Monsoon 2026: Safety Guide by Local Drivers',
    description: 'Monsoon safety guide for Char Dham Yatra — sunrise departures, landslide zones, packing, live route checks. Written from 15 seasons of hill driving.',
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
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-monsoon-safety`,
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
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Monsoon 2026 · Written by Hill Drivers</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>Char Dham Yatra in Monsoon — How We Keep Pilgrims Safe</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Sunrise departures · Landslide zones · What to pack · Live route checks · The honest version</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Monsoon Safety Guide</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>

        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24, border:'2px solid var(--teal)' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>Short answer from our team</div>
          <div style={{ fontSize:14.5, color:'#334155', lineHeight:1.7 }}>Yes, pilgrims complete Char Dham in July and August every year — the dhams stay open right through the monsoon. But this is the one season where who is driving you matters more than which hotel you booked. Our rule is simple: wheels rolling by 6 AM, off the exposed stretches before afternoon rain, one buffer day in the plan, and the route status checked every single morning. Follow that discipline and the monsoon yatra is quiet, green, and surprisingly beautiful. Ignore it and you will spend an evening parked behind a landslide.</div>
        </div>

        <h2 style={h2}>First, the Honest Picture of Monsoon 2026</h2>
        <p style={p}>The southwest monsoon over Uttarakhand this July has been strong. IMD has been issuing heavy-rain alerts for the hill districts, and stretches of the Kedarnath highway around Sonprayag have seen short closures after slides. None of this is unusual — it happens every monsoon — but it means you should not plan a July yatra the way you would plan a May one.</p>
        <p style={p}>We will not tell you monsoon travel is risk-free, because it is not, and our own <Link href="/char-dham-yatra-scams" style={{ color:'var(--teal)', fontWeight:600 }}>scams page</Link> exists precisely because operators who oversell get pilgrims into trouble. What we can tell you is what 15 seasons of driving these roads in the rain has taught us, and what we actually do differently between July and mid-September.</p>

        <h2 style={h2}>The 6 AM Rule — Why Our Monsoon Convoys Leave at Sunrise</h2>
        <p style={p}>If you remember one thing from this page, make it this. Mountain rain in Uttarakhand has a daily rhythm: mornings are usually the calmest, cloud builds through midday, and the heavy downpours — the ones that loosen hillsides — concentrate in the afternoon and evening. Landslides need saturated slopes, and slopes saturate as the day's rain accumulates.</p>
        <p style={p}>So in monsoon we leave hotels at 5:30–6:00 AM without exception. Not because we enjoy waking pilgrims early, but because a 6 AM start from Guptkashi means you cross the slide-prone Sonprayag stretch before 8, while a 10 AM start puts you on the same stretch at noon with rain already falling. Same road, completely different risk. Our drivers also aim to have the vehicle parked at the night halt by 3–4 PM. Whatever sightseeing gets squeezed by this, we squeeze it. Darshan and safe roads come first; the photo stops can wait for your next trip.</p>
        <p style={p}>There is a bonus nobody mentions: early morning is also when the valleys are clearest. Some of the best views our pilgrims have ever had of the Mandakini valley came at 6:30 AM in August, between two days of rain.</p>

        <h2 style={h2}>Where the Roads Actually Give Trouble</h2>
        <p style={p}>Slides do not happen randomly. The same zones act up every monsoon, and every local driver knows them by name:</p>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Route','Known trouble zones in monsoon','What our drivers do'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              {[
                ['Kedarnath (Rudraprayag–Sonprayag)','Banswara, Munkatia and the approach to Sonprayag','Cross before 9 AM; use the Tilwara side where diversions apply'],
                ['Badrinath (Srinagar–Joshimath)','Sirobagad, Lambagad, patches near Pipalkoti','Confirm BRO clearance at breakfast; time Lambagad for late morning'],
                ['Gangotri (Uttarkashi road)','Netala and slide zones past Bhatwari','Watch for shooting stones after overnight rain; no stopping under cut slopes'],
                ['Yamunotri (Damta–Barkot)','Ojri–Dabarkot stretch','Earliest possible crossing; this zone closes most often'],
              ].map(([route,zone,action],i)=>(
                <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{route}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{zone}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>These zones shift a little year to year as BRO stabilises one slope and the rain finds another. That is exactly why a driver who did this route last week is worth more in monsoon than any itinerary PDF. Check today's conditions on our <Link href="/char-dham-road-status" style={{ color:'var(--teal)', fontWeight:600 }}>live Char Dham road status page</Link> — we update it from driver reports and official bulletins.</p>

        <h2 style={h2}>Why the Driver Matters More Than the Vehicle</h2>
        <p style={p}>A common mistake: pilgrims book a taxi from Delhi or a broker's "all India" fleet, and the driver who turns up has done the Char Dham circuit twice in his life. In dry May weather he manages. In August he is a liability. He does not know that you never park under a fresh cut slope. He does not know the Tilwara diversion exists. He drives the same speed in rain that he drives in sun.</p>
        <p style={p}>Every driver in our monsoon rotation is Uttarakhand-based and has driven these specific routes across multiple rainy seasons. They talk to each other on WhatsApp all day — one convoy hits a blockage at Sirobagad at 7 AM, every Shiv Ganga vehicle behind them knows by 7:10 and re-plans. That informal driver network clears more problems than any app. It is also, frankly, the part of our service no competitor can copy-paste from our website.</p>

        <BlogCTA variant="inline" intent="info" />

        <h2 style={h2}>Monsoon Packing — Beyond the Usual List</h2>
        <p style={p}>Our full <Link href="/blog/char-dham-yatra-packing-list" style={{ color:'var(--teal)', fontWeight:600 }}>packing list</Link> covers the basics. For July–August, add these:</p>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'20px 22px', border:'1px solid var(--border)', marginBottom:24 }}>
          {[
            ['Heavy-duty poncho','Not a thin ₹100 raincoat — it shreds in the first hour of the Kedarnath trek. A thick poncho that covers your daypack too. Umbrellas are useless in valley wind.'],
            ['Extra footwear grip','The trek path stones turn slick. Shoes with worn-flat soles cause most monsoon trek injuries we see. Anti-slip crampon bands cost ₹200 in Sonprayag and are worth it.'],
            ['Dry bags / thick polythene','One for documents and phone, one for a change of clothes. Assume everything else will get damp.'],
            ['Buffer day','Not a thing you pack, but the most important item. One flexible day absorbs a road blockage or a helicopter weather hold. Without it, a 3-hour slide becomes a missed train.'],
            ['ORS and basic medicines','Pharmacies at halts run low mid-season. Carry your own strip of essentials.'],
          ].map(([k,v],i)=>(
            <div key={i} style={{ display:'grid', gridTemplateColumns:'170px 1fr', gap:12, borderTop:i>0?'1px solid var(--border)':'none', padding:'10px 0' }}>
              <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{k}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.6 }}>{v}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Checking Route Status the Right Way</h2>
        <p style={p}>Every monsoon morning follows the same drill in our office: driver reports come in by 5 AM, we cross-check with BRO and district control room updates, and departures adjust before pilgrims have finished their tea. You can run a lighter version of the same drill yourself:</p>
        <p style={p}>1. Check our <Link href="/char-dham-road-status" style={{ color:'var(--teal)', fontWeight:600 }}>road status page</Link> after 6 AM. 2. If something looks blocked, call the state disaster helpline <strong>1070</strong> or police <strong>112</strong> — they have the freshest ground truth. 3. Keep our <Link href="/char-dham-yatra-emergency-contacts" style={{ color:'var(--teal)', fontWeight:600 }}>emergency contacts page</Link> saved offline, because network drops in exactly the places you need it. What you should not do is trust a news article from four days ago or a WhatsApp forward. Monsoon roads change faster than headlines.</p>

        <h2 style={h2}>And If Your Dates Are Flexible…</h2>
        <p style={p}>Skip the monsoon entirely. The window from mid-September to mid-October is, in our honest opinion, the finest time of the whole year — washed skies, snow-dusted peaks, thin crowds, cheaper hotels. We have written a separate guide on <Link href="/blog/september-char-dham-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>September Char Dham Yatra and post-monsoon pre-booking</Link>, and autumn seats do fill early because everyone who postponed their July trip lands in the same window. Worth reading before you decide.</p>

        <h2 style={h2}>Monsoon Yatra FAQs</h2>
        {FAQS.map((f,i)=>(
          <div key={i} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:'16px 18px', marginBottom:12 }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{f.q}</div>
            <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>{f.a}</div>
          </div>
        ))}

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Travelling This Monsoon? Talk to a Hill Driver First</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>We run monsoon yatras every year with Uttarakhand-based drivers, sunrise departures and daily route checks. Ask us anything — the consultation is free, the advice is honest.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am planning Char Dham Yatra during monsoon 2026. Please advise on safe dates and packages.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp for Monsoon Advice</a>
            <Link href="/char-dham-road-status" style={{ background:'#fff', color:'var(--navy)', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>Live Road Status →</Link>
          </div>
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'Live Road Status',h:'/char-dham-road-status'},{l:'Road Conditions 2026',h:'/blog/char-dham-yatra-road-conditions-2026'},{l:'September Yatra Guide',h:'/blog/september-char-dham-yatra'},{l:'Weather Month by Month',h:'/blog/char-dham-weather-guide'},{l:'Emergency Contacts',h:'/char-dham-yatra-emergency-contacts'}].map(l=>(
              <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
            ))}
          </div>
        </div>

        <BlogCTA variant="footer" intent="info" />
      </article>
    </>
  );
}
