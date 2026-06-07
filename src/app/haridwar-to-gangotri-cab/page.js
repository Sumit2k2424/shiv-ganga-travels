import Link from 'next/link';
import { SITE } from '@/data/packages';

const CANON = `${SITE.baseUrl}/haridwar-to-gangotri-cab`;
const TITLE = 'Haridwar to Gangotri Cab & Taxi 2026 — Fare, Distance';
const DESC  = 'Haridwar to Gangotri cab from ₹4,000/day. ~280 km, 9–11 hrs via Uttarkashi & Harsil. All-inclusive Dzire/Innova/tempo fares, route, no trek, 2026 tips.';

export const metadata = {
  title: TITLE,
  description: DESC,
  keywords: ['haridwar to gangotri cab','haridwar to gangotri taxi','haridwar to gangotri distance','haridwar gangotri taxi fare','haridwar to gangotri tempo traveller','gangotri cab from haridwar 2026'],
  alternates: { canonical: CANON },
  openGraph: { title: 'Haridwar to Gangotri Cab & Taxi 2026 — Fare, Distance, Route', description: DESC, url: CANON, type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Haridwar to Gangotri Cab & Taxi 2026', description: DESC, images: [{ url: '/opengraph-image', alt: 'Haridwar to Gangotri cab & taxi — Shiv Ganga Travels' }] },
};

const WA = (t) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t)}`;
const waMain = WA('Namaste! I want to book a Haridwar to Gangotri cab for 2026. Please share the all-inclusive fare and a driver who knows the hill road.');

const FARES = [
  { v:'Swift Dzire / Etios', t:'Sedan', s:'3 + driver', best:'Couples, small families', day:'₹4,000', trip:'₹8,500' },
  { v:'Maruti Ertiga', t:'SUV', s:'6 + driver', best:'Families with luggage', day:'₹5,000', trip:'₹10,500' },
  { v:'Toyota Innova', t:'SUV', s:'6 + driver', best:'Senior pilgrims, comfort', day:'₹6,000', trip:'₹12,500' },
  { v:'Innova Crysta', t:'Premium SUV', s:'6 + driver', best:'Best ride on hill bends', day:'₹7,000', trip:'₹14,500' },
  { v:'Tempo Traveller (12)', t:'Mini-coach', s:'12 + driver', best:'Group / joint family', day:'₹9,500', trip:'₹19,000' },
  { v:'Tempo Traveller (17)', t:'Mini-coach', s:'17 + driver', best:'Large groups', day:'₹13,000', trip:'₹26,000' },
];

const ROUTE = [
  ['Haridwar','0 km','Start point. Pick-up from railway station, bus stand or your hotel.'],
  ['Rishikesh','25 km','Cross the Ganga, then the hills begin in earnest at Narendranagar.'],
  ['Chamba / New Tehri','95 km','First proper mountain stretch, views over the Tehri lake.'],
  ['Dharasu Bend','130 km','The road forks here — left for Yamunotri, right (our way) for Gangotri.'],
  ['Uttarkashi','175 km','The big town on this route. Most pilgrims break the journey here.'],
  ['Gangnani','215 km','A hot-spring stop. Tea, a stretch, and the gorge gets dramatic.'],
  ['Harsil','255 km','Apple country, deodar forest, the prettiest village on the road.'],
  ['Gangotri','~280 km','Cab drops you at the temple gate. No trek — the road goes all the way.'],
];

const FAQS = [
  { q:'What is the Haridwar to Gangotri distance and how long does the cab take?',
    a:'Haridwar to Gangotri is about 280 km by road and takes 9 to 11 hours of driving. It is a full-day mountain route through Rishikesh, Tehri, Uttarkashi and Harsil. Honestly, doing it in one stretch is tiring — most of our pilgrims stop overnight at Uttarkashi or Harsil and reach Gangotri fresh the next morning.' },
  { q:'How much does a Haridwar to Gangotri taxi cost in 2026?',
    a:'A Swift Dzire sedan starts at ₹4,000 per day all-inclusive, an Innova around ₹6,000, and a 12-seater tempo traveller around ₹9,500 per day. A typical 2-day Gangotri trip runs roughly ₹8,500 for a sedan and ₹12,500 for an Innova. Our fares include fuel, driver, tolls, parking and state taxes — no per-kilometre meter surprises at the end.' },
  { q:'Is there a one-way (drop) cab from Haridwar to Gangotri?',
    a:'Yes, but for a hill route like this a round trip is almost always cheaper and safer than a one-way drop, because the driver still has to return empty either way. Tell us your plan on WhatsApp and we will quote both so you can compare.' },
  { q:'Which car is best for the Haridwar–Gangotri road — sedan, Innova or tempo traveller?',
    a:'For 2–3 people a Dzire is fine. For four or more, or for parents and grandparents, take an Innova or Crysta — the higher ground clearance and softer suspension matter a lot on the bends past Uttarkashi. Groups of 8 or more should book a tempo traveller.' },
  { q:'Do I need Tourist registration for Gangotri in 2026, and do you arrange it?',
    a:'Yes. Char Dham registration through the Tourist Care Uttarakhand portal is compulsory in 2026, and it is checked on the road. If you book your cab and trip with us we do the whole registration for you — send a photo and a government ID and we hand you the slip before departure. You never touch the portal.' },
  { q:'Is there any trek to reach Gangotri temple, or does the cab go all the way?',
    a:'No trek. Gangotri is the most road-friendly of the four dhams — the motor road runs right up to the temple gate, so your cab drops you within a short walk of darshan. That is the big difference from Kedarnath and Yamunotri, both of which need a climb on foot, pony or palki.' },
];

function Schema() {
  const taxi = {
    '@context':'https://schema.org','@type':'TaxiService',
    name:'Haridwar to Gangotri Cab & Taxi — Shiv Ganga Travels',
    serviceType:'Outstation cab / taxi (Haridwar to Gangotri)',
    url:CANON, telephone:SITE.phone,
    areaServed:[{'@type':'City',name:'Haridwar'},{'@type':'Place',name:'Gangotri'},{'@type':'Place',name:'Uttarkashi'},{'@type':'State',name:'Uttarakhand'}],
    provider:{ '@type':'TravelAgency', name:SITE.name, url:SITE.baseUrl, telephone:SITE.phone, address:{'@type':'PostalAddress',streetAddress:'Saptrishi Road, Bhupatwala',addressLocality:'Haridwar',addressRegion:'Uttarakhand',postalCode:'249410',addressCountry:'IN'},
      aggregateRating:{'@type':'AggregateRating',ratingValue:'4.6',reviewCount:'38'} },
    offers:{'@type':'Offer',priceCurrency:'INR',price:'4000',priceSpecification:{'@type':'UnitPriceSpecification',price:'4000',priceCurrency:'INR',unitText:'per day, all-inclusive (sedan)'}},
  };
  const bc = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
    {'@type':'ListItem',position:2,name:'Char Dham Cab Booking',item:`${SITE.baseUrl}/char-dham-yatra-cab-booking`},
    {'@type':'ListItem',position:3,name:'Haridwar to Gangotri Cab',item:CANON},
  ]};
  const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity: FAQS.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})) };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(taxi) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>
  </>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:40 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function Page() {
  const tel = `tel:${SITE.phone.replace(/[^+\d]/g,'')}`;
  return (<>
    <Schema/>

    {/* Hero */}
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'52px 20px 40px', textAlign:'center' }}>
      <div style={{ maxWidth:840, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>🚙 Cab &amp; Taxi Booking · 2026</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.6rem,4vw,2.6rem)', marginBottom:12 }}>Haridwar to Gangotri Cab &amp; Taxi</h1>
        <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15.5, lineHeight:1.7, maxWidth:680, margin:'0 auto 22px' }}>
          Around <strong>280 km</strong> and a <strong>9–11 hour</strong> mountain drive through Uttarkashi and Harsil — with a Haridwar driver who actually knows the road. Sedans from <strong>₹4,000/day</strong>, all-inclusive.
        </p>
        <div style={{ display:'flex', justifyContent:'center', gap:10, flexWrap:'wrap', marginBottom:24 }}>
          {[{i:'📏',v:'~280 km'},{i:'⏱',v:'9–11 hrs'},{i:'🛣️',v:'Via Uttarkashi → Harsil'},{i:'🚶',v:'No trek — road to temple'}].map(c=>(
            <span key={c.v} style={{ background:'rgba(255,255,255,0.12)', backdropFilter:'blur(6px)', color:'#fff', fontSize:12.5, padding:'6px 14px', borderRadius:100, display:'flex', gap:6, alignItems:'center' }}>{c.i} {c.v}</span>
          ))}
        </div>
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={waMain} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'13px 26px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Get Free Quote on WhatsApp</a>
          <a href={tel} style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'13px 26px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>📞 {SITE.phone}</a>
        </div>
        <p style={{ color:'rgba(255,255,255,0.6)', fontSize:12, marginTop:14 }}>⚡ Dhanesh ji (founder) replies personally, usually within 10 min · ⭐ 4.6/5 on Google · 🪖 Run by a retd. Army officer since 2010</p>
      </div>
    </section>

    {/* Breadcrumb */}
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/char-dham-yatra-cab-booking" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Char Dham Cab Booking</Link><span>›</span>
        <span style={{ color:'var(--navy)', fontWeight:600 }}>Haridwar to Gangotri</span>
      </div>
    </nav>

    <article style={{ maxWidth:840, margin:'0 auto', padding:'8px 20px 56px' }}>

      {/* Direct answer (GEO) */}
      <div style={{ background:'var(--navy-light)', border:'1px solid var(--border)', borderLeft:'4px solid var(--gold)', borderRadius:12, padding:'16px 18px', marginTop:24 }}>
        <p style={{ fontSize:15, color:'var(--text)', lineHeight:1.8, margin:0 }}>
          A <strong>Haridwar to Gangotri cab</strong> covers roughly <strong>280 km in 9–11 hours</strong>, climbing through Rishikesh, Tehri and Uttarkashi to drop you at the Gangotri temple gate — there is no trek. Fares start at <strong>₹4,000/day</strong> for a Swift Dzire and around <strong>₹6,000/day</strong> for an Innova, all-inclusive of fuel, driver, tolls and taxes. We run this route out of Haridwar, so you get a driver who has done it dozens of times, not a stranger sent up the hill for the first time.
        </p>
      </div>

      <p style={{ ...p, marginTop:22 }}>
        I will be straight with you about this drive, because the meter-rate aggregators usually are not. Gangotri is the gentlest of the four dhams to reach by car, but it is still a long Himalayan day. The first two hours out of Haridwar feel easy. After Uttarkashi the road narrows, the river drops away on one side, and you want a driver who knows where the bad patches and the good tea stops are. That is the whole reason to book local.
      </p>

      {/* Fares */}
      <h2 style={h2}>Haridwar to Gangotri taxi fare (2026, all-inclusive)</h2>
      <p style={p}>
        These are our real season rates. Everything is included — fuel, driver night charge, all tolls, parking and Uttarakhand state taxes. No “₹X per km” running on a meter, no return-fare games at the end of the trip. The “2-day trip” column is the common Haridwar → Gangotri → back booking with one overnight at Uttarkashi or Harsil.
      </p>
      <div style={{ overflowX:'auto', WebkitOverflowScrolling:'touch', border:'1px solid var(--border)', borderRadius:12, marginBottom:14 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:560 }}>
          <thead>
            <tr style={{ background:'var(--navy)', color:'#fff' }}>
              {['Vehicle','Type','Capacity','Best for','Per day','2-day Gangotri trip'].map(th=>(
                <th key={th} style={{ padding:'11px 12px', textAlign:'left', fontWeight:600, whiteSpace:'nowrap' }}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FARES.map((f,i)=>(
              <tr key={f.v} style={{ background:i%2?'var(--bg)':'#fff', borderTop:'1px solid var(--border)' }}>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)' }}>{f.v}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-mid)' }}>{f.t}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-mid)', whiteSpace:'nowrap' }}>{f.s}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-mid)' }}>{f.best}</td>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--gold-dark)', whiteSpace:'nowrap' }}>{f.day}</td>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--teal)', whiteSpace:'nowrap' }}>{f.trip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:18 }}>Fares are indicative for the 2026 season and move a little with peak dates (mid-May to June) and fuel. WhatsApp us your dates for a firm, written quote — it is free and there is no advance to ask.</p>
      <div style={{ background:'var(--bg)', border:'1px dashed var(--border)', borderRadius:12, padding:'16px 18px', marginBottom:8 }}>
        <a href={waMain} target="_blank" rel="nofollow noopener noreferrer" style={{ display:'inline-block', background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Get my exact Gangotri fare</a>
        <span style={{ display:'block', fontSize:12.5, color:'var(--text-muted)', marginTop:8 }}>🔒 ₹0 to enquire · no pushy sales · founder answers, not a call centre</span>
      </div>

      {/* Distance & route */}
      <h2 style={h2}>Distance, drive time &amp; the exact road route</h2>
      <p style={p}>
        Different websites quote anywhere from 256 to 288 km for this route, which confuses people. The honest answer: it is about <strong>280 km</strong> from Haridwar, and you should budget <strong>9 to 11 hours</strong> of actual driving, not the optimistic “7 hours” some listings show. Mountain roads do not care about your average speed. The route runs Haridwar → Rishikesh → Narendranagar → Chamba → Tehri → Dharasu → Uttarkashi → Gangnani → Harsil → Gangotri, on what is now <a href="https://uttarakhandtourism.gov.in/" target="_blank" rel="noopener nofollow" style={{ color:'var(--navy)', fontWeight:600 }}>the main Gangotri highway</a> (NH-34 past Dharasu).
      </p>
      <div style={{ display:'flex', flexDirection:'column', gap:0, border:'1px solid var(--border)', borderRadius:12, overflow:'hidden', marginBottom:18 }}>
        {ROUTE.map((r,i)=>(
          <div key={r[0]} style={{ display:'flex', gap:12, padding:'12px 16px', background:i%2?'var(--bg)':'#fff', borderTop:i?'1px solid var(--border)':'none' }}>
            <div style={{ minWidth:62, fontWeight:700, color:'var(--gold-dark)', fontSize:13 }}>{r[1]}</div>
            <div>
              <div style={{ fontWeight:700, color:'var(--navy)', fontSize:14 }}>{r[0]}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.55 }}>{r[2]}</div>
            </div>
          </div>
        ))}
      </div>
      <p style={p}>
        Uttarkashi sits a little past the halfway mark and is where almost everyone stops for the night. From there it is roughly <Link href="/how-to-reach-gangotri" style={{ color:'var(--navy)', fontWeight:600 }}>100 km and 3–4 hours on to Gangotri</Link> — a slow, scenic stretch you will not want to rush after dark.
      </p>

      {/* Itinerary options */}
      <h2 style={h2}>How most people do the trip</h2>
      <p style={p}>There is no single “correct” plan. These are the three we book most often:</p>
      <div style={{ display:'grid', gap:12, marginBottom:18 }}>
        {[
          { t:'2-day round trip (most popular)', d:'Day 1 Haridwar → Uttarkashi/Harsil overnight; Day 2 early darshan at Gangotri, then drive back. Comfortable, and you reach the temple rested.' },
          { t:'One-way drop', d:'We drive you up and you continue with your own plan. Doable, but for one car it rarely costs less than a round trip — ask and we will show you both numbers.' },
          { t:'Gangotri + Yamunotri (Do Dham)', d:'4–5 days covering both western dhams from Haridwar. The natural pairing, since both branch off near Dharasu. See our ', link:{href:'/do-dham-yatra', label:'Do Dham Yatra packages'} },
        ].map(o=>(
          <div key={o.t} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px' }}>
            <div style={{ fontWeight:700, color:'var(--navy)', fontSize:14.5, marginBottom:5 }}>{o.t}</div>
            <div style={{ fontSize:14, color:'var(--text-mid)', lineHeight:1.7 }}>{o.d}{o.link && <Link href={o.link.href} style={{ color:'var(--navy)', fontWeight:600 }}>{o.link.label}</Link>}{o.link && '.'}</div>
          </div>
        ))}
      </div>

      {/* Inclusions */}
      <h2 style={h2}>What the fare includes (and what it doesn’t)</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap:14, marginBottom:18 }}>
        <div style={{ background:'#F0FAF4', border:'1px solid #BBE9CF', borderRadius:12, padding:'14px 16px' }}>
          <div style={{ fontWeight:700, color:'#15803D', marginBottom:8 }}>✓ Included</div>
          {['Fuel for the full trip','Experienced hill driver + his allowance/night stay','All tolls, parking and state taxes','Pick-up & drop at Haridwar station/hotel','Well-maintained, sanitised vehicle','GST invoice on request'].map(x=>(
            <div key={x} style={{ fontSize:13.5, color:'var(--text-mid)', padding:'3px 0' }}>• {x}</div>
          ))}
        </div>
        <div style={{ background:'#FFF6F0', border:'1px solid #F3D2BE', borderRadius:12, padding:'14px 16px' }}>
          <div style={{ fontWeight:700, color:'#B45309', marginBottom:8 }}>✗ Not included</div>
          {['Your hotel rooms & meals (we can book these too)','Temple donations / special puja','Anything personal — shopping, tips','Extra sightseeing detours beyond the agreed route','Travel insurance'].map(x=>(
            <div key={x} style={{ fontSize:13.5, color:'var(--text-mid)', padding:'3px 0' }}>• {x}</div>
          ))}
        </div>
      </div>
      <p style={p}>If you would rather not piece it together yourself, we also run a fully-handled <Link href="/gangotri-yatra" style={{ color:'var(--navy)', fontWeight:600 }}>Gangotri Yatra package</Link> with hotels, meals and the cab in one price.</p>

      {/* Best time */}
      <h2 style={h2}>Best time to go</h2>
      <p style={p}>
        The Gangotri temple opens on <strong>19 April 2026</strong> (Akshaya Tritiya) and closes around Diwali in early November. May and June are peak — clear weather but full hotels and a busy road, so book the cab three or four weeks ahead. The monsoon weeks of <strong>mid-July to August</strong> are the one stretch I genuinely caution people about: landslides and roadblocks past Uttarkashi are common, and a hill driver who knows when to wait it out is worth a lot. September and October are my own favourite — thin crowds, golden light on the deodars at Harsil, and stable roads. Check current conditions on our <Link href="/gangotri-weather" style={{ color:'var(--navy)', fontWeight:600 }}>Gangotri weather page</Link> before you lock dates.
      </p>

      {/* Practical 2026 */}
      <h2 style={h2}>Practical notes for 2026</h2>
      <p style={p}>
        <strong>Registration is compulsory.</strong> Every pilgrim needs a Tourist Care Uttarakhand registration, and it is checked on the road to Gangotri. If you book with us we handle it for you — you send a photo and an ID, we hand you the slip at Haridwar. You can read the rules straight from the source on the <a href="https://registrationandtouristcare.uk.gov.in/" target="_blank" rel="noopener nofollow" style={{ color:'var(--navy)', fontWeight:600 }}>official Uttarakhand registration portal</a>.
      </p>
      <p style={p}>
        <strong>No helicopter, no trek.</strong> Unlike Kedarnath, Gangotri has no regular helicopter service — and unlike Kedarnath and Yamunotri, it needs no walking. The road ends at the temple. That makes Gangotri the easiest dham for senior pilgrims and anyone who cannot climb.
      </p>
      <p style={p}>
        <strong>Where to stay.</strong> Uttarkashi has the most hotels and is the practical overnight; Harsil is prettier and quieter if you want to splurge a night. We can book either along with your cab.
      </p>

      {/* Why direct */}
      <h2 style={h2}>Why book a Haridwar operator direct</h2>
      <p style={p}>
        The big aggregators list this route too, but here is what changes when you book us instead. The driver is ours, based here, and has driven the Gangotri road many times — not a random car dispatched on a per-km meter. The price is one all-inclusive number agreed up front, so there is no “extra distance” bill waiting at the end. And when something shifts on the mountain — a roadblock, a weather day, a parent who needs to stop more often — you reach the person who owns the company, not a support queue. We have run Char Dham trips since 2010, and we hold a <strong>4.6/5 rating across 38 Google reviews</strong> for exactly this kind of trip.
      </p>
      <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:8 }}>
        <a href={waMain} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book your Gangotri cab</a>
        <a href={tel} style={{ background:'var(--navy)', color:'#fff', padding:'12px 24px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 Call {SITE.phone}</a>
      </div>

      {/* Related routes */}
      <h2 style={h2}>Other routes &amp; guides</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap:10, marginBottom:8 }}>
        {[
          ['/haridwar-to-yamunotri-cab','Haridwar to Yamunotri cab'],
          ['/haridwar-to-kedarnath-cab','Haridwar to Kedarnath cab'],
          ['/haridwar-to-badrinath-cab','Haridwar to Badrinath cab'],
          ['/gangotri-temple','Gangotri Temple guide'],
          ['/how-to-reach-gangotri','How to reach Gangotri'],
          ['/char-dham-yatra','Full Char Dham Yatra packages'],
        ].map(([href,label])=>(
          <Link key={href} href={href} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'11px 14px', fontSize:13.5, fontWeight:600, color:'var(--navy)', textDecoration:'none' }}>→ {label}</Link>
        ))}
      </div>

      {/* FAQ */}
      <h2 style={h2}>Haridwar to Gangotri cab — FAQ</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {FAQS.map(f=>(
          <details key={f.q} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px' }}>
            <summary style={{ fontWeight:700, color:'var(--navy)', fontSize:14.5, cursor:'pointer' }}>{f.q}</summary>
            <p style={{ fontSize:14, color:'var(--text-mid)', lineHeight:1.8, marginTop:10 }}>{f.a}</p>
          </details>
        ))}
      </div>

      {/* Author / E-E-A-T */}
      <div style={{ display:'flex', gap:14, alignItems:'flex-start', background:'var(--bg)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 18px', marginTop:32 }}>
        <div style={{ width:46, height:46, borderRadius:'50%', background:'linear-gradient(135deg,var(--navy),var(--teal))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, flexShrink:0 }}>🪖</div>
        <div>
          <div style={{ fontWeight:700, color:'var(--navy)', fontSize:14 }}>Written by Dhanesh Chandra Mishra</div>
          <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.65, marginTop:3 }}>
            Founder of Shiv Ganga Travels, Haridwar — a retired Army officer who has run Char Dham road trips for 15 seasons and personally knows the Gangotri route. <span style={{ color:'var(--text-muted)' }}>Last updated: {SITE.lastUpdated}.</span>
          </div>
        </div>
      </div>

    </article>
  </>);
}
