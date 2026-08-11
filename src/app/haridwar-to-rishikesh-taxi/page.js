import Link from 'next/link';
import { SITE } from '@/data/packages';
import { TRANSFERS, transferRows, FLEET, inr } from '@/data/localTaxi';
import { h2 } from "@/lib/prose";

const R = TRANSFERS['haridwar-rishikesh'];

export const metadata = {
  title: { absolute: 'Haridwar to Rishikesh Taxi — ₹900 One Way | 25 km' },
  description: 'Haridwar to Rishikesh taxi from ₹900 one way, 25 km in under an hour. Day-hire rates too, so the car waits while you see the ghats. Direct operator.',
  keywords: ['haridwar to rishikesh taxi','haridwar to rishikesh cab','haridwar to rishikesh distance','haridwar to rishikesh taxi fare','haridwar rishikesh car rental','rishikesh taxi from haridwar','haridwar to ram jhula taxi','haridwar to lakshman jhula cab'],
  alternates: { canonical: `${SITE.baseUrl}/haridwar-to-rishikesh-taxi` },
  openGraph: {
    title: 'Haridwar to Rishikesh Taxi — ₹900, 25 km',
    description: 'One-way drops from ₹900 and day hires that wait while you see Ram Jhula, Triveni Ghat and the evening aarti.',
    url: `${SITE.baseUrl}/haridwar-to-rishikesh-taxi`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Haridwar to Rishikesh taxi — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haridwar to Rishikesh Taxi — ₹900, 25 km',
    description: 'One-way drops from ₹900 and day hires that wait while you see the ghats.',
    images: [{ url: '/opengraph-image', alt: 'Haridwar to Rishikesh Taxi | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What is the taxi fare from Haridwar to Rishikesh?',
    a:'₹900 for a Swift Dzire one way, ₹1,300 for an Ertiga, ₹1,600 for an Innova Crysta and ₹2,400 for a 12-seat tempo traveller. That is a straight drop with tolls and parking included. If you want the car to wait and bring you back, book the 8-hour day hire instead — ₹1,600 for the same Dzire, which is far better value than paying for two separate drops.' },
  { q:'How far is Rishikesh from Haridwar?',
    a:'25 km by road on NH-34 through Raiwala and Shyampur, which takes 40 to 55 minutes depending on traffic at Raiwala crossing. You will see distances between 20 and 27 km quoted online because people measure to different points — Har Ki Pauri to Triveni Ghat is about 25 km, while Haridwar bus stand to Lakshman Jhula is closer to 30 km.' },
  { q:'Should I book a one-way drop or a full day hire?',
    a:'Almost everyone should book the day hire, and this is the single most useful thing on this page. Two one-way drops cost ₹1,800. An 8-hour day hire is ₹1,600, and the car stays with you the whole time — no hunting for a return taxi at Ram Jhula at nine at night, when local drivers know you have no alternative and price accordingly. The only case for a one-way drop is if you are staying overnight in Rishikesh.' },
  { q:'Where exactly can the taxi drop me in Rishikesh?',
    a:'Triveni Ghat and the main town are straightforward drops. Ram Jhula and Lakshman Jhula are not — both bridges are pedestrian only, so vehicles stop at the parking areas on either bank and you walk across. For Parmarth Niketan and the Swarg Ashram side, the drop is at Ram Jhula parking followed by a ten-minute walk. Tell us which ashram or ghat you want and we will send you to the right bank, which saves a very annoying extra crossing.' },
  { q:'Can I add Neelkanth Mahadev to the trip?',
    a:'Yes, and it is the most common add-on. Neelkanth Mahadev is 32 km beyond Rishikesh on a steep hill road that takes about 90 minutes each way. Combined with Rishikesh it pushes you past the 80 km slab, so budget ₹2,400 to ₹2,800 for the day in a sedan. Start by 7 AM — the temple gets crowded by mid-morning and the road is genuinely unpleasant in the dark.' },
  { q:'Is there a bus or shared taxi from Haridwar to Rishikesh?',
    a:'Yes. Uttarakhand Roadways buses run from Haridwar bus stand roughly every 20 minutes for ₹40 to ₹60, and shared Vikrams and jeeps run the same route for about ₹50 a seat. Both are perfectly usable if you are travelling light and alone. With luggage, children, or elderly parents, the taxi is worth the difference — the shared vehicles fill to capacity and drop you at the stand, not your ashram.' },
  { q:'What time is the Ganga Aarti at Rishikesh, and can the taxi wait?',
    a:'The Parmarth Niketan aarti at Ram Jhula starts around 6 PM in summer and 5:30 PM in winter, running about an hour. Triveni Ghat aarti is at a similar time. Our day-hire drivers wait as a matter of course — tell the driver you are staying for aarti and he will park up. Just be aware that a 6 PM aarti plus the drive back means an 8-hour hire that started at 11 AM will run into extra-hour charges.' },
  { q:'Can I do Haridwar and Rishikesh sightseeing in one day?',
    a:'Comfortably, and it is our most-booked local circuit. A typical day covers Har Ki Pauri, Mansa Devi ropeway, then Rishikesh for Ram Jhula, Lakshman Jhula and Triveni Ghat, finishing with the evening aarti. That runs about 95 km, so it crosses the 80 km slab — expect roughly ₹1,900 to ₹2,100 in a sedan once the extra kilometres are counted. We tell you that before you leave, not after.' },
];

function Schema() {
  const faq = {
    '@context':'https://schema.org', '@type':'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
  };
  const service = {
    '@context':'https://schema.org', '@type':'Service',
    '@id': `${SITE.baseUrl}/haridwar-to-rishikesh-taxi#service`,
    name:'Haridwar to Rishikesh Taxi Service',
    serviceType:'Local taxi transfer and day hire',
    provider:{ '@id': `${SITE.baseUrl}/#organization` },
    areaServed:[{ '@type':'City', name:'Haridwar' }, { '@type':'City', name:'Rishikesh' }],
    offers: transferRows('haridwar-rishikesh').map(r => ({
      '@type':'Offer',
      name:`${r.name} — Haridwar to Rishikesh one way`,
      price:r.fare, priceCurrency:'INR',
      priceSpecification:{ '@type':'UnitPriceSpecification', price:r.fare, priceCurrency:'INR', unitText:'one-way drop, 25 km' },
    })),
  };
  const article = {
    '@context':'https://schema.org', '@type':'Article',
    headline:'Haridwar to Rishikesh Taxi — Fare, Distance and Drop Points',
    author:{ '@id': `${SITE.baseUrl}/#founder` },
    publisher:{ '@id': `${SITE.baseUrl}/#organization` },
    datePublished:'2026-08-10', dateModified:SITE.lastUpdatedISO,
    mainEntityOfPage:`${SITE.baseUrl}/haridwar-to-rishikesh-taxi`,
  };
  const crumbs = {
    '@context':'https://schema.org', '@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Taxi Service in Haridwar', item:`${SITE.baseUrl}/taxi-service-in-haridwar` },
      { '@type':'ListItem', position:3, name:'Haridwar to Rishikesh Taxi', item:`${SITE.baseUrl}/haridwar-to-rishikesh-taxi` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}/>
    </>
  );
}

const H2 = ({ children }) => (
  <h2 style={h2}>{children}</h2>
);

export default function HaridwarToRishikeshTaxi() {
  const dzire = FLEET.find(v => v.id === 'dzire');
  return (
    <>
      <Schema/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            {R.km} km · {R.hours} · NH-34
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Haridwar to Rishikesh Taxi
          </h1>
          <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15.5, lineHeight:1.75, maxWidth:700, margin:'0 auto 20px' }}>
            <strong style={{ color:'#FFD166' }}>{inr(R.fares.dzire)} for a one-way sedan drop</strong> across {R.km} km,
            or {inr(dzire.local8)} for a full day with the car waiting. Read the next section before you pick.
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/taxi-service-in-haridwar" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Taxi Service in Haridwar</Link><span>›</span>
          <span style={{ color:'var(--navy)', fontWeight:600 }}>Haridwar to Rishikesh</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <p style={{ fontSize:16.5, lineHeight:1.8, color:'var(--text-mid)', marginBottom:22 }}>
          Haridwar to Rishikesh is {R.km} km and takes {R.hours} on NH-34. A one-way sedan drop is{' '}
          {inr(R.fares.dzire)}. But most people asking this question do not actually want a one-way drop —
          they want to see Rishikesh and come back the same evening, and for that the day hire is both
          cheaper and considerably less stressful. Here is the arithmetic, plus the drop-point detail
          nobody tells you until you are standing on the wrong side of a footbridge.
        </p>

        {/* The core insight — OPPORTUNITY gap */}
        <div style={{ background:'#F0FDF4', border:'1px solid #86EFAC', borderRadius:14, padding:'18px 20px', marginBottom:8 }}>
          <div style={{ fontWeight:700, fontSize:15, color:'#15803D', marginBottom:10 }}>💡 Two drops cost more than a whole day</div>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
              <tbody>
                <tr style={{ borderBottom:'1px solid #86EFAC' }}>
                  <td style={{ padding:'8px 0', color:'#166534' }}>Drop there + drop back (2 × {inr(R.fares.dzire)})</td>
                  <td style={{ padding:'8px 0', fontWeight:700, color:'#166534', textAlign:'right' }}>{inr(R.fares.dzire * 2)}</td>
                </tr>
                <tr>
                  <td style={{ padding:'8px 0', color:'#15803D', fontWeight:600 }}>8-hour day hire, car waits with you</td>
                  <td style={{ padding:'8px 0', fontWeight:700, color:'#15803D', textAlign:'right' }}>{inr(dzire.local8)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize:13.5, color:'#166534', lineHeight:1.7, margin:'10px 0 0' }}>
            Book the day hire unless you are staying overnight in Rishikesh. Finding a return taxi at Ram
            Jhula after the evening aarti is the part of this trip that goes wrong, and the drivers who
            are still there at 9 PM know exactly how few options you have.
          </p>
        </div>

        <H2>Haridwar to Rishikesh Taxi Fare</H2>
        <div style={{ overflowX:'auto', marginBottom:10 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14, minWidth:460 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Vehicle','Seats','One-way drop','Full day (8hr/80km)'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {transferRows('haridwar-rishikesh').map(r=>{
                const v = FLEET.find(f => f.id === r.id);
                return (
                  <tr key={r.id} style={{ borderBottom:'1px solid hsl(var(--border))' }}>
                    <td style={{ padding:'10px', fontWeight:600, color:'var(--navy)' }}>{r.name}</td>
                    <td style={{ padding:'10px', color:'var(--text-muted)' }}>{r.seats}</td>
                    <td style={{ padding:'10px', fontWeight:700, color:'var(--teal)' }}>{inr(r.fare)}</td>
                    <td style={{ padding:'10px', fontWeight:700, color:'var(--navy)' }}>{inr(v.local8)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize:12.5, color:'var(--text-muted)' }}>
          Tolls, parking and driver included. Night charge of ₹300 applies for pickups between 10 PM and 6 AM.
        </p>

        {/* OPPORTUNITY gap — drop points */}
        <H2>Where the Taxi Can Actually Drop You</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          Rishikesh confuses first-time visitors because the two famous bridges are pedestrian-only and
          the town sits on both banks of the Ganga. Getting dropped on the wrong side means a long walk
          back across a crowded footbridge, usually carrying something.
        </p>
        <div style={{ overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:540 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['You want','Vehicle drops at','Then'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Triveni Ghat','Directly at the ghat road','Two-minute walk. Easiest drop in Rishikesh.'],
                ['Parmarth Niketan / evening aarti','Ram Jhula parking, east bank','Walk across Ram Jhula, 10 minutes.'],
                ['Swarg Ashram, Geeta Bhawan','Ram Jhula parking, east bank','Same crossing, ashrams are on that side.'],
                ['Lakshman Jhula, Tera Manzil temple','Lakshman Jhula parking','Walk across, 10 minutes. Steep in places.'],
                ['Rafting camps (Shivpuri, Brahmpuri)','Camp gate directly','16–20 km past town. Add ₹500–800.'],
                ['Neelkanth Mahadev','Temple car park','32 km hill road past Rishikesh. 90 min each way.'],
              ].map(([a,b,c])=>(
                <tr key={a} style={{ borderBottom:'1px solid hsl(var(--border))' }}>
                  <td style={{ padding:'9px 10px', fontWeight:600, color:'var(--navy)' }}>{a}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)' }}>{b}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)', fontSize:13 }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize:14.5, lineHeight:1.8, color:'var(--text-mid)' }}>
          Tell us the ashram or ghat name when you book and the driver takes the correct bank. It costs
          nothing and saves the most common irritation of the day.
        </p>

        <H2>The Route</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          {R.highway}. It is a short, easy drive on a good road with the Rajaji forest on both sides for
          much of it. Two things slow it down: the Raiwala crossing, where the Dehradun and Rishikesh
          roads split, and the approach into Rishikesh town on weekends, when Delhi day-trippers arrive.
          Leave Haridwar before 8 AM and neither will trouble you.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:12, marginBottom:8 }}>
          {[
            ['🌲 Rajaji National Park','The road skirts the park. Elephant crossings are signposted and occasionally real — the drivers know where.'],
            ['🛣️ Raiwala','Where the Dehradun road splits off. The one reliable slow point on the route.'],
            ['🚦 Best departure','Before 8 AM for a clear run. After 5 PM on a Friday is the worst it gets.'],
            ['🌧️ Monsoon','July–September the road stays open but visibility drops. Add 15–20 minutes.'],
          ].map(([t,d])=>(
            <div key={t} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', borderRadius:11, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{t}</div>
              <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7 }}>{d}</div>
            </div>
          ))}
        </div>

        <H2>Cheaper Ways to Make the Same Trip</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          We run taxis, so treat this as coming from an interested party — but the honest picture is that
          this is a short route with good public transport, and for a solo traveller the taxi is a luxury
          rather than a necessity.
        </p>
        <div style={{ overflowX:'auto', marginBottom:8 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:500 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Option','Cost','Time','Honest verdict'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Uttarakhand Roadways bus','₹40–60','60–75 min','Fine alone with a backpack. Drops at the bus stand.'],
                ['Shared Vikram / jeep','~₹50','60 min','Cheapest. Cramped, leaves when full, not for luggage.'],
                ['Auto rickshaw','₹500–700','70 min','Negotiable, uncomfortable over 25 km. Rarely worth it.'],
                ['Taxi one-way drop', inr(R.fares.dzire), '40–55 min','Right choice with luggage, kids or elderly parents.'],
                ['Taxi day hire', inr(dzire.local8), 'Your day','Best value if you are returning the same evening.'],
              ].map(([a,b,c,d])=>(
                <tr key={a} style={{ borderBottom:'1px solid hsl(var(--border))' }}>
                  <td style={{ padding:'9px 10px', fontWeight:600, color:'var(--navy)' }}>{a}</td>
                  <td style={{ padding:'9px 10px', color:'var(--teal)', fontWeight:700 }}>{b}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)' }}>{c}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)', fontSize:13 }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>Frequently Asked Questions</H2>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {FAQS.map(f=>(
            <details key={f.q} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:11, overflow:'hidden' }}>
              <summary style={{ padding:'14px 17px', cursor:'pointer', listStyle:'none', fontWeight:700, fontSize:14.5, color:'var(--navy)' }}>{f.q}</summary>
              <div style={{ padding:'0 17px 15px', fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8 }}>{f.a}</div>
            </details>
          ))}
        </div>

        <div style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'16px 18px', marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:9 }}>Sources</div>
          <ul style={{ paddingLeft:18, margin:0 }}>
            {[
              ['Uttarakhand Transport Corporation — bus services','https://utconline.uk.gov.in/'],
              ['Uttarakhand Tourism — Rishikesh','https://uttarakhandtourism.gov.in/destination/rishikesh'],
              ['Rajaji Tiger Reserve — park and corridor information','https://rajajitigerreserve.uk.gov.in/'],
            ].map(([label,href])=>(
              <li key={href} style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7, marginBottom:5 }}>
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ color:'var(--teal)' }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>
            Book the Rishikesh run
          </h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>
            Tell us the ashram or ghat you are heading for and whether you are coming back the same day.
            We will send the right vehicle to the right bank.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need a Haridwar to Rishikesh taxi. Please share the fare.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
              💬 WhatsApp — Get the Fare
            </a>
            <a href="tel:+917817996730"
              style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Pages</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[
              ['Taxi Service in Haridwar','/taxi-service-in-haridwar'],
              ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
              ['Rishikesh Tour Packages','/rishikesh-tour-packages'],
              ['Haridwar to Delhi Taxi','/haridwar-to-delhi-taxi'],
              ['Dehradun Airport to Haridwar','/dehradun-airport-to-haridwar-taxi'],
              ['Rishikesh to Kedarnath Cab','/cabs/rishikesh-to-kedarnath-cab'],
            ].map(([label,href])=>(
              <Link key={href} href={href} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
