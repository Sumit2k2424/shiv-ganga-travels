import Link from 'next/link';
import CityLinkMesh from '@/components/CityLinkMesh';
import { SITE } from '@/data/packages';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import BlogAuthor from '@/components/BlogAuthor';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Char Dham Yatra from Haridwar 2026 | Shiv Ganga Travels',
  description: 'Char Dham Yatra from Haridwar 2026 — itinerary, cost, registration, route map & helicopter options. All-inclusive packages from ₹20,999. Direct Haridwar operator.',
  keywords: ['char dham yatra from haridwar','char dham yatra package from haridwar','char dham package haridwar 2026','haridwar char dham yatra','char dham yatra cost from haridwar','char dham itinerary from haridwar'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-haridwar` },
  openGraph: {
    title: 'Char Dham Yatra from Haridwar 2026 — Itinerary, Cost & Packages from ₹20,999',
    description: 'Everything for the Char Dham Yatra starting from Haridwar — day-by-day itinerary, cost breakdown, mandatory 2026 registration, route map and helicopter options. Direct Haridwar operator since 2010.',
    url: `${SITE.baseUrl}/char-dham-yatra-from-haridwar`, type:'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 from Haridwar — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra from Haridwar 2026 — Packages from ₹20,999',
    description: 'Itinerary, cost, registration, route map & helicopter options. Direct Haridwar operator, zero commission.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 from Haridwar — Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'When does the Char Dham Yatra open in 2026?', a:'The 2026 season opens on Akshaya Tritiya. Yamunotri and Gangotri open April 19, 2026; Kedarnath opens April 22; Badrinath opens April 23. All four dhams stay open until the second week of November 2026, closing around Bhai Dooj / Diwali. May–June and September–October are the most reliable windows for travel from Haridwar.' },
  { q:'How much does a Char Dham package from Haridwar cost in 2026?', a:'Our Char Dham Yatra from Haridwar starts at ₹20,999 per person for a 9N/10D all-inclusive road package — AC Tempo Traveller or Innova, hotels on twin sharing, daily breakfast and dinner, an experienced Garhwali guide, VIP darshan at all four dhams, and free biometric registration. Deluxe 11N/12D runs ₹45,000, and the 5N/6D helicopter package is ₹85,000. Prices are direct — no agent commission.' },
  { q:'How many days do I need for Char Dham Yatra from Haridwar?', a:'By road, plan 9 to 12 days starting and ending in Haridwar. The standard circuit is 9 nights / 10 days. Senior citizens should choose the 12N/13D pace, which adds an acclimatisation day before Kedarnath. By helicopter the entire yatra takes just 5N/6D, flying out of Dehradun rather than Haridwar.' },
  { q:'Is Char Dham Yatra registration mandatory in 2026?', a:'Yes. Registration is mandatory and enforced at police checkpoints such as Sonprayag on the Kedarnath route. Register online at the Uttarakhand government portal (registrationandtouristcare.uk.gov.in) or in person at the biometric centres in Haridwar and Rishikesh before you start. Unregistered pilgrims are turned back at checkpoints. We complete registration for every pilgrim in our packages at no extra cost.' },
  { q:'Is the Char Dham Yatra from Haridwar suitable for senior citizens?', a:'Yes, with the right pacing. Gangotri and Badrinath are fully motorable. Yamunotri (6 km) and Kedarnath (16 km) involve treks, but pony, palki and helicopter options cover these. Our Senior Citizen package includes ground-floor rooms, pony charges, an extra rest day, and oxygen cylinders in every vehicle. Over 30% of our pilgrims each year are 60 or older.' },
  { q:'Should I choose the road or helicopter Char Dham package?', a:'Choose road if you have 10–12 days, want the traditional immersive journey, and prefer a budget from ₹20,999. Choose helicopter if you are short on time or travelling with elderly pilgrims — it completes all four dhams in 5–6 days with VIP darshan, starting at ₹85,000 from Dehradun. Road departs directly from Haridwar; the helicopter yatra starts at Sahastradhara Helipad in Dehradun, 35 km away.' },
];

const PAA = [
  { q:'How many days are required for Char Dham Yatra from Haridwar?', a:'By road, 9 to 11 days is the standard from Haridwar — the most popular itinerary is 9 nights / 10 days. A fit adult can do it in 8 days at a hard pace, but that means 10+ hours in the vehicle some days. Senior citizens should allow 12–13 days with an acclimatisation day before Kedarnath. By helicopter the whole circuit takes just 5–6 days from Dehradun.' },
  { q:'What is the Char Dham Yatra distance from Haridwar?', a:'The full road circuit from Haridwar and back is roughly 1,100–1,400 km depending on the exact route. The longest single legs are Haridwar→Barkot (210 km), Uttarkashi→Guptkashi (220 km), and Badrinath→Haridwar (320 km). Yamunotri adds a 6 km trek and Kedarnath a 16 km trek on top of the drive.' },
  { q:'How much does Char Dham Yatra from Haridwar cost?', a:'Budget road packages from Haridwar start around ₹16,500–20,999 per person for 9–10 days, with deluxe (3-star hotels, Innova Crysta) running ₹26,500–45,000. The Char Dham by helicopter package is about ₹85,000 per person. Our 9N/10D all-inclusive from Haridwar starts at ₹20,999 with no agent commission.' },
  { q:'Why do most Char Dham tours start from Haridwar?', a:'Haridwar is one of Hinduism\'s seven holiest cities and the natural gateway to the dhams. It is densely connected by train and bus from Delhi, Mumbai, Ahmedabad and Kolkata, and Jolly Grant Airport (Dehradun) is about an hour away. Starting here — rather than connecting through Delhi the same morning — gives a calmer first day and better acclimatisation before the climbs.' },
  { q:'What is the correct order of the Char Dham Yatra?', a:'The traditional clockwise order is Yamunotri → Gangotri → Kedarnath → Badrinath. From Haridwar the route runs Haridwar → Barkot → Yamunotri → Uttarkashi → Gangotri → Guptkashi → Kedarnath → Rudraprayag → Badrinath, then back to Haridwar via Devprayag.' },
  { q:'Is Char Dham Yatra registration mandatory in 2026?', a:'Yes. Biometric registration is compulsory and checked at police barriers such as Sonprayag. Register online at the Uttarakhand portal (registrationandtouristcare.uk.gov.in) or at counters in Haridwar and Rishikesh before you travel. Unregistered pilgrims are turned back at checkpoints. We complete registration free for everyone in our packages.' },
];

function Schema() {
  const faq = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
  };
  const trip = {
    '@context':'https://schema.org','@type':'TouristTrip',
    name:'Char Dham Yatra from Haridwar 2026',
    description:'9 nights / 10 days all-inclusive Char Dham Yatra starting and ending in Haridwar — covering Yamunotri, Gangotri, Kedarnath and Badrinath.',
    touristType:['Pilgrims','Families','Senior Citizens'],
    provider:{ '@type':'TravelAgency', name:SITE.name, telephone:SITE.phone, url:SITE.baseUrl,
      address:{ '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' } },
    offers:{ '@type':'Offer', price:'20999', priceCurrency:'INR', availabilityStarts:'2026-04-19' },
    itinerary:{ '@type':'ItemList', itemListElement:[
      { '@type':'ListItem', position:1, name:'Haridwar → Barkot' },
      { '@type':'ListItem', position:2, name:'Yamunotri darshan' },
      { '@type':'ListItem', position:3, name:'Gangotri darshan' },
      { '@type':'ListItem', position:4, name:'Kedarnath darshan' },
      { '@type':'ListItem', position:5, name:'Badrinath darshan → Haridwar' },
    ] },
  };
  const paa = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1,
      acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Char Dham Yatra', item:`${SITE.baseUrl}/char-dham-yatra` },
      { '@type':'ListItem', position:3, name:'From Haridwar', item:`${SITE.baseUrl}/char-dham-yatra-from-haridwar` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(trip) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(paa) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/>
  </>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:12, marginTop:36 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 };
const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export default function Page() {
  return (
    <>
      <Schema/>

      {/* HERO */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px', textAlign:'center' }}>
        <div style={{ maxWidth:860, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Haridwar · Char Dham 2026 · Direct Operator Since 2010
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Packages from Haridwar — 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.85)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            Haridwar is the gateway to all four dhams · All-inclusive from <strong style={{ color:'#FFD166' }}>₹20,999/person</strong> · We are based here, not a reseller
          </p>
          <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap', marginBottom:22 }}>
            {['🚗 Road & helicopter','✅ Zero commission','🙏 VIP darshan included','🛕 Local Haridwar office','⭐ 4.8/5 reviews'].map(t=>(
              <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={wa('Namaste! I want to book the Char Dham Yatra 2026 from Haridwar.')} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'13px 24px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label:'Char Dham Yatra', href:'/char-dham-yatra' }, { label:'From Haridwar' }]}/>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'32px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:18, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 2026 · Season open: Apr 19 – Nov 2026</div>

        <BlogAuthor variant="top" author="sumit"/>

        {/* QUICK FACTS */}
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', margin:'24px 0 28px', display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Start / end','Haridwar'],['Circuit distance','~1,100 km'],['Standard trip','9N / 10D'],['Package from','₹20,999/person'],['Season 2026','Apr 19 – Nov'],['Registration','FREE · We handle']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Char Dham Yatra from Haridwar 2026:</strong> Haridwar is the traditional starting point of the Char Dham Yatra — every road itinerary to Yamunotri, Gangotri, Kedarnath and Badrinath begins here, on the banks of the Ganga. Our all-inclusive 9N/10D package starts at ₹20,999 per person and covers your AC vehicle, hotels, meals, guide, VIP darshan and free registration. We run this yatra from our own office in Bhupatwala, Haridwar — so everything on this page comes from groups we personally dispatch up the mountains every season.</p>

        <h2 style={h2}>What Is the Char Dham Yatra?</h2>
        <p style={p}>The Char Dham — literally "four abodes" — is Hinduism's most revered Himalayan pilgrimage circuit, set in the Garhwal region of Uttarakhand. You visit four shrines in a fixed clockwise order: <strong>Yamunotri</strong> (source of the Yamuna), <strong>Gangotri</strong> (source of the Ganga), <strong>Kedarnath</strong> (the twelfth Jyotirlinga of Shiva), and <strong>Badrinath</strong> (the abode of Vishnu). Completing the circuit is believed to wash away sins and grant moksha. From Haridwar the full road journey covers roughly 1,100 km over 9–12 days.</p>

        <h2 style={h2}>Our Char Dham Packages from Haridwar</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:12, marginBottom:24 }}>
          {[
            ['Char Dham 9N/10D — Standard','₹20,999','Most popular · Tempo Traveller / Innova · twin-sharing hotels','/packages/char-dham-yatra-9n-10d-haridwar'],
            ['Char Dham 11N/12D — Deluxe','₹45,000','Relaxed pace · 3-star hotels · Innova Crysta','/packages/char-dham-yatra-11n-12d-haridwar'],
            ['Senior Citizen 12N/13D','₹27,999','Extra rest day · pony/palki · ground-floor rooms','/packages/char-dham-yatra-senior-citizen-12n-13d'],
            ['Char Dham by Helicopter 5N/6D','₹85,000','Ex-Dehradun · VIP darshan · all 4 dhams by air','/packages/char-dham-yatra-helicopter-5n-6d-dehradun'],
          ].map(([name,price,desc,href])=>(
            <Link key={href} href={href} style={{ display:'block', background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:'16px 18px', textDecoration:'none' }}>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:4 }}>{name}</div>
              <div style={{ fontWeight:700, fontSize:16, color:'var(--teal)', marginBottom:6 }}>{price} <span style={{ fontSize:11, color:'var(--text-muted)', fontWeight:600 }}>/person</span></div>
              <div style={{ fontSize:12.5, color:'#475569', lineHeight:1.6 }}>{desc}</div>
              <div style={{ marginTop:8, fontSize:12.5, color:'var(--teal)', fontWeight:600 }}>View details →</div>
            </Link>
          ))}
        </div>

        <h2 style={h2}>Char Dham Yatra 2026 — Opening &amp; Closing Dates</h2>
        <div style={{ background:'#F0FDF4', border:'1px solid #86EFAC', borderRadius:12, padding:'16px 20px', marginBottom:24, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:12 }}>
          {[['🌊 Yamunotri','Opens Apr 19'],['🌿 Gangotri','Opens Apr 19'],['🏔️ Kedarnath','Opens Apr 22'],['🕌 Badrinath','Opens Apr 23']].map(([d,o])=>(
            <div key={d} style={{ textAlign:'center' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{d}</div>
              <div style={{ fontSize:12.5, color:'#15803D', fontWeight:600 }}>{o}</div>
              <div style={{ fontSize:12, color:'#64748b' }}>Closes Nov 2026</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Best Time to Visit</h2>
        <p style={p}>Two windows work best from Haridwar. <strong>May–June</strong> brings pleasant 10–20°C days, clear skies and the smoothest road conditions — ideal for first-timers and families, though it is peak season for crowds and hotel rates. <strong>September–October</strong> is the post-monsoon window: crisp visibility, fewer pilgrims and stable roads, best for senior citizens and a peaceful darshan. Avoid <strong>July–August</strong> — monsoon landslides regularly block the Kedarnath and Gangotri routes.</p>

        <h2 style={h2}>Day-by-Day Itinerary (from Haridwar)</h2>
        <div style={{ overflowX:'auto', marginBottom:20 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Day','Route','Highlight'].map(h=>(
                <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['1','Haridwar → Barkot','Drive via Mussoorie; overnight Barkot'],
                ['2','Barkot → Yamunotri → Barkot','6 km trek from Janki Chatti; Yamuna darshan'],
                ['3','Barkot → Uttarkashi','Vishwanath Temple; overnight Uttarkashi'],
                ['4','Uttarkashi → Gangotri → Uttarkashi','Ganga darshan on the Bhagirathi'],
                ['5','Uttarkashi → Guptkashi','Scenic drive via Tehri Dam'],
                ['6','Guptkashi → Kedarnath','16 km trek from Gaurikund (pony/heli optional)'],
                ['7','Kedarnath → Rudraprayag','Morning aarti; descend & drive'],
                ['8','Rudraprayag → Badrinath','Tapt Kund dip; Badrivishal darshan'],
                ['9','Badrinath → Rudraprayag','Mana village; return drive'],
                ['10','Rudraprayag → Haridwar','Drive back via Devprayag sangam'],
              ].map(([d,r,hl],i)=>(
                <tr key={d} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'8px 12px', fontWeight:700, color:'var(--navy)', fontSize:12.5 }}>{d}</td>
                  <td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{r}</td>
                  <td style={{ padding:'8px 12px', color:'#475569', fontSize:12.5 }}>{hl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Char Dham Route Map &amp; Distances</h2>
        <p style={p}>The clockwise circuit from Haridwar: Haridwar → Barkot → Janki Chatti → <strong>Yamunotri</strong> → Uttarkashi → <strong>Gangotri</strong> → Guptkashi → Gaurikund → <strong>Kedarnath</strong> → Rudraprayag → Joshimath → <strong>Badrinath</strong> → back to Haridwar.</p>
        <div style={{ overflowX:'auto', marginBottom:16 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Segment','Distance','Road time'].map(h=>(
                <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Haridwar → Barkot','210 km','7–8 hrs'],
                ['Barkot → Janki Chatti','45 km','1.5–2 hrs'],
                ['Barkot → Uttarkashi','100 km','4 hrs'],
                ['Uttarkashi → Gangotri','100 km','4 hrs'],
                ['Uttarkashi → Guptkashi','220 km','8–9 hrs'],
                ['Gaurikund → Kedarnath','16 km trek','6–8 hrs'],
                ['Guptkashi → Badrinath','215 km','8–9 hrs'],
                ['Badrinath → Haridwar','320 km','10–11 hrs'],
              ].map(([s,d,t],i)=>(
                <tr key={s} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{s}</td>
                  <td style={{ padding:'8px 12px', color:'#475569', fontSize:12.5 }}>{d}</td>
                  <td style={{ padding:'8px 12px', color:'#475569', fontSize:12.5 }}>{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>Our office is the starting point for pickups — here we are on the map in Bhupatwala, Haridwar:</p>
        <div style={{ marginBottom:8 }}><GoogleMapEmbed height={320}/></div>
        <p style={{ ...p, fontSize:13, color:'var(--text-muted)' }}>For a stop-by-stop visual, see our dedicated <Link href="/char-dham-yatra-route-map" style={{ color:'var(--teal)', fontWeight:600 }}>Char Dham route map</Link>.</p>

        <h2 style={h2}>Char Dham Yatra Cost &amp; What&apos;s Included</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:8, marginBottom:16 }}>
          {['✅ AC Tempo Traveller / Innova from Haridwar','✅ Pickup & drop at Haridwar station / bus stand','✅ Hotels all 9 nights (twin sharing)','✅ Daily breakfast + dinner (Jain options)','✅ VIP darshan — no queue at all 4 dhams','✅ Experienced Garhwali guide + pujari','✅ Biometric registration — completely free','✅ All tolls, parking, driver allowance','✅ Oxygen cylinder + first-aid kit in vehicle','✅ 24×7 WhatsApp support during the yatra'].map(item=>(
            <div key={item} style={{ background:'#fff', borderRadius:8, padding:'9px 12px', border:'1px solid var(--border)', fontSize:13, color:'#334155' }}>{item}</div>
          ))}
        </div>
        <div style={{ background:'rgba(29,158,117,0.08)', border:'1px solid #1D9E75', borderRadius:10, padding:'12px 16px', marginBottom:16, fontSize:13.5, color:'#0F5132' }}>
          <strong>From Haridwar:</strong> ₹20,999/person · 9N/10D · all-inclusive · 5% GST included · zero commission — you pay us directly
        </div>
        <p style={{ ...p, fontSize:13.5 }}>Not included: train/flight to Haridwar, pony/palki at Yamunotri &amp; Kedarnath, helicopter charges, personal expenses, and travel insurance. Full breakdown on our <Link href="/blog/char-dham-yatra-cost" style={{ color:'var(--teal)', fontWeight:600 }}>Char Dham cost guide</Link>.</p>

        <h2 style={h2}>Mandatory Yatra Registration 2026 (step-by-step)</h2>
        <p style={p}>Registration is compulsory and checked at police barriers like Sonprayag. You can register two ways:</p>
        <ul style={{ margin:'0 0 16px', paddingLeft:22, color:'#334155', fontSize:15, lineHeight:1.85 }}>
          <li style={{ marginBottom:6 }}><strong>Online:</strong> visit the Uttarakhand government portal at <a href="https://registrationandtouristcare.uk.gov.in/" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)', fontWeight:600 }}>registrationandtouristcare.uk.gov.in</a>, enter your details, upload Aadhaar, and download your e-pass.</li>
          <li style={{ marginBottom:6 }}><strong>Offline:</strong> biometric counters at Haridwar railway station, Rishikesh ISBT and Jolly Grant Airport, open daily 4 AM–9 PM.</li>
          <li style={{ marginBottom:6 }}><strong>Or leave it to us</strong> — we complete registration for every pilgrim in our packages, free of charge.</li>
        </ul>
        <p style={{ ...p, fontSize:13.5 }}>For full details see our <Link href="/blog/char-dham-yatra-registration" style={{ color:'var(--teal)', fontWeight:600 }}>Char Dham registration guide</Link> and the <Link href="/blog/green-card-char-dham-yatra-2026" style={{ color:'var(--teal)', fontWeight:600 }}>vehicle Green Card rules</Link>.</p>

        <h2 style={h2}>How to Reach Haridwar (air / rail / road / helicopter)</h2>
        <p style={p}><strong>By air:</strong> Jolly Grant Airport, Dehradun (DED) is 35 km away — about 1 hour by road. <strong>By train:</strong> Haridwar Junction is well connected to Delhi, Lucknow, Kolkata and Mumbai. <strong>By road:</strong> NH-334 from Delhi via Meerut and Roorkee, roughly 5.5 hours. <strong>By helicopter:</strong> the Char Dham heli yatra itself departs from Sahastradhara Helipad in Dehradun — we arrange transfers from Haridwar. If you are coming from a specific city, see our pickup pages for <Link href="/char-dham-yatra-from-delhi" style={{ color:'var(--teal)', fontWeight:600 }}>Delhi</Link>, <Link href="/char-dham-yatra-from-delhi" style={{ color:'var(--teal)', fontWeight:600 }}>Rishikesh</Link> and 20+ other cities.</p>

        {/* EXPERIENCE BOX — first-hand E-E-A-T */}
        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', margin:'24px 0' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>💡 What we know as a Haridwar-based operator (since 2010)</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.7 }}>Because our office and drivers are in Haridwar, our batches leave at first light and reach Barkot before the afternoon landslide-prone hours on NH-123. Hotels along the route are pre-blocked from March, well before peak May demand spikes. Pilgrims who start from Haridwar (rather than connecting through Delhi the same morning) consistently get the calmest first day and the best acclimatisation before the Kedarnath trek.</div>
        </div>

        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <div style={{ color:'#FFD166', fontSize:13, fontWeight:700, marginBottom:6 }}>🙏 Haridwar → All Four Dhams</div>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:8 }}>Book Your Char Dham Yatra from Haridwar</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:18 }}>Free custom itinerary in 2 hrs · from ₹20,999/person · zero commission · registration handled free</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={wa('Namaste! I want to book the Char Dham Yatra 2026 from Haridwar.')} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp — Book Now</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        {/* FAQ */}
        <h2 style={h2}>Frequently Asked Questions</h2>
        <FAQAccordion faqs={FAQS}/>

        {/* PEOPLE ALSO ASK — real Google PAA for this query */}
        <div style={{ marginTop:36 }}>
          <PeopleAlsoAsk items={PAA}/>
        </div>

        {/* AUTHOR BIO — bottom */}
        <div style={{ marginTop:32 }}><BlogAuthor variant="bottom" author="sumit"/></div>

        {/* SOURCES — citations (E-E-A-T gap) */}
        <div style={{ borderTop:'1px solid var(--border)', paddingTop:18, marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:12.5, color:'var(--navy)', marginBottom:8 }}>Sources &amp; official references</div>
          <ul style={{ margin:0, paddingLeft:18, fontSize:12.5, color:'#64748b', lineHeight:1.8 }}>
            <li>Uttarakhand Char Dham registration portal — <a href="https://registrationandtouristcare.uk.gov.in/" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>registrationandtouristcare.uk.gov.in</a></li>
            <li>Uttarakhand Tourism Development Board — <a href="https://uttarakhandtourism.gov.in/experiences/char-dham" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>uttarakhandtourism.gov.in</a></li>
            <li>2026 opening dates as announced for Akshaya Tritiya; verify before travel.</li>
          </ul>
        </div>

        {/* RELATED */}
        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>More guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Yatra 2026','/char-dham-yatra'],['Route Map','/char-dham-yatra-route-map'],['Registration Guide','/blog/char-dham-yatra-registration'],['Cost Breakdown','/blog/char-dham-yatra-cost'],['Best Time to Visit','/blog/best-time-char-dham'],['Packing List','/blog/char-dham-yatra-packing-list'],['By Helicopter','/char-dham-helicopter'],['Senior Citizen Guide','/blog/senior-citizen-char-dham']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
              <CityLinkMesh current="haridwar" />
      </article>
    </>
  );
}
