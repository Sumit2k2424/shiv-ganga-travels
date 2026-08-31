import Link from 'next/link';
import { SITE } from '@/data/packages';
import { TRANSFERS, transferRows, inr } from '@/data/localTaxi';
import { h2 } from "@/lib/prose";
import AnswerBox from '@/components/AnswerBox';

const R = TRANSFERS['haridwar-delhi'];

export const metadata = {
  title: { absolute: 'Haridwar to Delhi Taxi — ₹3,800 One Way | Fixed Fare' },
  description: 'Haridwar to Delhi taxi at a fixed ₹3,800 in a sedan, tolls included. 210 km, 5–6 hours, direct operator. Airport and station drops. No surge pricing.',
  keywords: ['haridwar to delhi taxi','haridwar to delhi cab','haridwar to delhi taxi fare','haridwar to delhi one way taxi','haridwar to delhi airport cab','haridwar to delhi car rental','haridwar delhi distance by road','taxi from haridwar to delhi'],
  alternates: { canonical: `${SITE.baseUrl}/haridwar-to-delhi-taxi` },
  openGraph: {
    title: 'Haridwar to Delhi Taxi — Fixed ₹3,800, Tolls Included',
    description: '210 km, 5–6 hours. Fixed one-way fare from a Haridwar operator with its own fleet. Airport drops included.',
    url: `${SITE.baseUrl}/haridwar-to-delhi-taxi`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Haridwar to Delhi taxi — fixed fare, Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haridwar to Delhi Taxi — Fixed ₹3,800, Tolls Included',
    description: '210 km, 5–6 hours. Fixed one-way fare, direct operator.',
    images: [{ url: '/opengraph-image', alt: 'Haridwar to Delhi Taxi | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What is the taxi fare from Haridwar to Delhi?',
    a:'₹3,800 for a Swift Dzire, ₹5,200 for an Ertiga, ₹6,500 for an Innova Crysta and ₹9,500 for a 12-seat tempo traveller. Those are fixed one-way fares with tolls, state tax and parking already inside them. There is no per-kilometre meter running and no charge for the driver\'s return leg added at the end.' },
  { q:'How far is Delhi from Haridwar by road?',
    a:'210 km via NH-334 to Roorkee and then NH-58 through Muzaffarnagar and Meerut. Allow 5 to 6 hours door to door. The route is four-lane almost the whole way, but the stretch through Muzaffarnagar and Meerut city is where the time goes — expect 45 minutes of slow traffic there on any weekday.' },
  { q:'Why do booking websites quote ₹2,100 when you quote ₹3,800?',
    a:'Because they are selling you a return-load seat, not a dedicated car. Aggregators pool one-way trips: a driver who brought a passenger up to Haridwar wants anything rather than drive back empty, so the platform sells that leg cheap. It works when a return car happens to exist at your time. When one does not, the booking gets reassigned, delayed, or cancelled an hour before pickup. We quote a dedicated vehicle that leaves when you say it leaves. If your schedule is loose and your budget is tight, the pooled option is genuinely cheaper — we would rather tell you that than pretend otherwise.' },
  { q:'Can the taxi drop me at Delhi airport?',
    a:'Yes, at Terminal 1, 2 or 3, and the fare is the same as a city drop — Delhi airport sits on the near side of the city coming from Haridwar. Tell us your flight time when booking. We leave Haridwar six hours before departure for a domestic flight and seven for an international one, which sounds cautious until you have sat in the Meerut bypass on a Friday evening.' },
  { q:'Does the Kanwar Yatra affect this route?',
    a:'Heavily, and this is the single most important thing to know about the Haridwar–Delhi road. Through the month of Shravan, usually late July into August, millions of kanwariyas walk this exact corridor and the NH-58 carriageway is progressively closed to vehicles. Traffic diverts, journey times can double or triple, and on peak days the route effectively shuts. If you are travelling in Shravan, ask us for the current diversion before you fix your plans — we run this road daily and will tell you straight if you should take the train instead.' },
  { q:'Is a night drive from Haridwar to Delhi safe?',
    a:'The highway is fine and well-trafficked, but we add ₹300 for departures between 10 PM and 6 AM and we use a second driver on request. The genuine risk on this road at night is not crime, it is fatigue and the volume of unlit trucks between Muzaffarnagar and Meerut. If you are catching an early flight, leaving Haridwar at 2 AM is common and we do it regularly.' },
  { q:'Can I stop at Roorkee, Muzaffarnagar or Meerut on the way?',
    a:'Short stops for tea or a meal are included — the fare is for the journey, not a stopwatch. A genuine detour, say into Meerut city for two hours, is charged at the extra-hour rate for the vehicle. Tell us at booking and we will price it upfront rather than argue about it at the end.' },
  { q:'Do you offer a return Delhi to Haridwar taxi?',
    a:'Yes, and it is the same fixed structure in reverse. Many pilgrims book the Delhi pickup on arrival and the Haridwar drop after the yatra as one round trip, which is cheaper than two separate one-ways. Our Delhi to Haridwar cab page carries that pricing.' },
];

function Schema() {
  const faq = {
    '@context':'https://schema.org', '@type':'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
  };
  const service = {
    '@context':'https://schema.org', '@type':'Service',
    '@id': `${SITE.baseUrl}/haridwar-to-delhi-taxi#service`,
    name:'Haridwar to Delhi Taxi Service',
    serviceType:'One-way intercity taxi transfer',
    provider:{ '@id': `${SITE.baseUrl}/#organization` },
    areaServed:[{ '@type':'City', name:'Haridwar' }, { '@type':'City', name:'Delhi' }],
    offers: transferRows('haridwar-delhi').map(r => ({
      '@type':'Offer',
      name:`${r.name} — Haridwar to Delhi one way`,
      price:r.fare, priceCurrency:'INR',
      priceSpecification:{ '@type':'UnitPriceSpecification', price:r.fare, priceCurrency:'INR', unitText:'one-way drop, 210 km' },
    })),
  };
  const trip = {
    '@context':'https://schema.org', '@type':'Trip',
    name:'Haridwar to Delhi by road',
    itinerary:[
      { '@type':'Place', name:'Haridwar, Uttarakhand' },
      { '@type':'Place', name:'Roorkee' },
      { '@type':'Place', name:'Muzaffarnagar' },
      { '@type':'Place', name:'Meerut' },
      { '@type':'Place', name:'Delhi' },
    ],
    provider:{ '@id': `${SITE.baseUrl}/#organization` },
  };
  const article = {
    '@context':'https://schema.org', '@type':'Article',
    headline:'Haridwar to Delhi Taxi — Fare, Route and Timing',
    author:{ '@id': `${SITE.baseUrl}/#founder` },
    publisher:{ '@id': `${SITE.baseUrl}/#organization` },
    datePublished:'2026-08-10', dateModified:SITE.lastUpdatedISO,
    mainEntityOfPage:`${SITE.baseUrl}/haridwar-to-delhi-taxi`,
  };
  const crumbs = {
    '@context':'https://schema.org', '@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Taxi Service in Haridwar', item:`${SITE.baseUrl}/taxi-service-in-haridwar` },
      { '@type':'ListItem', position:3, name:'Haridwar to Delhi Taxi', item:`${SITE.baseUrl}/haridwar-to-delhi-taxi` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trip) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}/>
    </>
  );
}

const H2 = ({ children }) => (
  <h2 style={h2}>{children}</h2>
);

export default function HaridwarToDelhiTaxi() {
  return (
    <>
      <Schema/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            {R.km} km · {R.hours} · Fixed fare
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Haridwar to Delhi Taxi
          </h1>
          <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15.5, lineHeight:1.75, maxWidth:700, margin:'0 auto 20px' }}>
            A one-way drop from Haridwar to Delhi costs <strong style={{ color:'#FFD166' }}>{inr(R.fares.dzire)} in a sedan</strong>,
            tolls and state tax included. {R.km} km, {R.hours}, dedicated vehicle — not a pooled return load.
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/taxi-service-in-haridwar" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Taxi Service in Haridwar</Link><span>›</span>
          <span style={{ color:'var(--navy)', fontWeight:600 }}>Haridwar to Delhi</span>
        </div>
      </nav>


        <AnswerBox>
          <strong>Haridwar to Delhi is about 220km and takes 4 to 5 hours on NH334 via Roorkee and Meerut.</strong> A one-way sedan runs roughly ₹3,500–4,500 and an Innova ₹5,000–6,500, with tolls included in our quotes. The drive is entirely plains, so it is the easy leg of any Char Dham trip. Leave Haridwar before 6am or after 10am to miss the worst of the Delhi approach, and allow an extra hour on Sunday evenings.
        </AnswerBox>
      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <p style={{ fontSize:16.5, lineHeight:1.8, color:'var(--text-mid)', marginBottom:22 }}>
          The Haridwar to Delhi run is {R.km} km and takes {R.hours} in normal conditions. We charge a
          fixed {inr(R.fares.dzire)} for a sedan with everything included, and the number does not move
          because it is a Sunday, a festival, or because you booked at 11 PM. What follows is the fare
          chart, the route as it actually drives, and the two things that will ruin your timing if
          nobody warns you about them.
        </p>

        <H2>Haridwar to Delhi Taxi Fare</H2>
        <div style={{ overflowX:'auto', marginBottom:10 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14, minWidth:480 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Vehicle','Seats','One-way fare','Best for'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {transferRows('haridwar-delhi').map((r,i)=>(
                <tr key={r.id} style={{ borderBottom:'1px solid hsl(var(--border))' }}>
                  <td style={{ padding:'10px', fontWeight:600, color:'var(--navy)' }}>{r.name}</td>
                  <td style={{ padding:'10px', color:'var(--text-muted)' }}>{r.seats}</td>
                  <td style={{ padding:'10px', fontWeight:700, color:'var(--teal)' }}>{inr(r.fare)}</td>
                  <td style={{ padding:'10px', color:'var(--text-muted)', fontSize:13 }}>
                    {['Couple, light luggage','Family of 4–5 with bags','Family plus extra luggage','Seniors, long comfort','Group of 10–12','Temple group / extended family'][i]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize:12.5, color:'var(--text-muted)' }}>
          Included: fuel, driver, all tolls, UP and Uttarakhand state tax, parking. Not included: your
          meals, and a ₹300 night charge if you depart between 10 PM and 6 AM.
        </p>

        <H2>The Route, and Where the Time Actually Goes</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          {R.highway}. Four-lane nearly the whole way. On paper it is a five-hour drive; in practice
          the clock is decided by three towns.
        </p>
        <div style={{ overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:520 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Leg','Distance','Typical time','What to expect'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Haridwar → Roorkee','30 km','40 min','Easy running on NH-334. Cheetal Grand for a tea stop.'],
                ['Roorkee → Muzaffarnagar','60 km','1 hr 15 min','Good highway. Sugarcane trucks in season slow things down.'],
                ['Muzaffarnagar → Meerut','60 km','1 hr 30 min','The slow section. City traffic, unavoidable.'],
                ['Meerut → Delhi','60 km','1 hr 30 min','NH-58 into Ghaziabad, then whichever Delhi entry suits your drop.'],
              ].map(([a,b,c,d])=>(
                <tr key={a} style={{ borderBottom:'1px solid hsl(var(--border))' }}>
                  <td style={{ padding:'9px 10px', fontWeight:600, color:'var(--navy)' }}>{a}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)' }}>{b}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)' }}>{c}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)', fontSize:13 }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* OPPORTUNITY gap — nobody explains the pooling economics */}
        <H2>Why Booking Sites Quote ₹2,100 and We Quote ₹3,800</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          This deserves a straight answer rather than a sales line. Aggregators pool one-way trips. A
          driver who brought someone up to Haridwar does not want to drive 210 km home empty, so the
          platform sells that empty leg at close to fuel cost. When a matching return car exists at your
          time, it is a genuine bargain and you should take it.
        </p>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          The catch is what happens when one does not exist. The booking gets reassigned to a different
          driver, pushed by an hour, or cancelled outright — usually the evening before, which is exactly
          when you cannot fix it. It is a fine trade if your day is flexible. It is a poor trade if you
          have a flight, a train, or an eighty-year-old parent waiting in the sun.
        </p>
        <div style={{ background:'#FFF7ED', border:'1px solid #FDBA74', borderRadius:12, padding:'15px 18px', marginBottom:14 }}>
          <p style={{ fontSize:14.5, color:'#9A3412', lineHeight:1.75, margin:0 }}>
            <strong>Our honest position:</strong> if you are a young couple with a loose schedule, book the
            pooled fare and save ₹1,700. If you are moving a family, catching a flight, or travelling with
            elderly parents, pay for the dedicated car. We would rather lose the booking than have you
            stranded at Har Ki Pauri at 5 AM.
          </p>
        </div>

        {/* OPPORTUNITY gap — Kanwar Yatra */}
        <H2>Kanwar Yatra — the Month This Road Stops Working</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          Through Shravan, roughly late July into August, millions of kanwariyas walk from Har Ki Pauri
          down this exact corridor carrying Ganga water. The administration progressively closes NH-58
          carriageways to vehicles as the numbers build toward Shivratri. Journey times double. On peak
          days the route is effectively shut and everything diverts.
        </p>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          Almost no taxi booking site mentions this, and every year people book a Haridwar–Delhi car in
          Shravan and discover it at 6 AM. If your travel falls in that window, call us and ask what the
          road is doing that week. Often the honest answer is to take the Shatabdi from Haridwar Junction
          and let us drop you at the station for ₹300 instead.
        </p>

        <H2>Delhi Drop Points</H2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:12, marginBottom:8 }}>
          {[
            ['✈️ IGI Airport (T1/T2/T3)','Same fare as a city drop. Leave Haridwar 6 hours before a domestic departure, 7 before international.'],
            ['🚉 New Delhi & Nizamuddin','Straightforward drops. Tell us the platform side so the driver picks the right gate.'],
            ['🏙️ South & Central Delhi','Included in the fixed fare. Anywhere inside the Ring Road, no surcharge.'],
            ['🏢 Noida, Gurugram, Ghaziabad','Add ₹400–800 depending on sector. We quote it before you book, never after.'],
          ].map(([t,d])=>(
            <div key={t} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', borderRadius:11, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{t}</div>
              <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7 }}>{d}</div>
            </div>
          ))}
        </div>

        <H2>Taxi or Train? An Honest Comparison</H2>
        <div style={{ overflowX:'auto', marginBottom:8 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:520 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Option','Cost','Time','Worth it when'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Taxi (sedan)', inr(R.fares.dzire), '5–6 hrs', 'Door to door, luggage, family, odd hours, no ticket to chase'],
                ['Shatabdi Express','₹680–1,285','4 hrs 10 min','Fastest and cheapest for 1–2 people — if seats exist'],
                ['Overnight train','₹245–950','6–7 hrs','Budget travel, arriving Delhi early morning'],
                ['Volvo bus','₹600–1,100','6–8 hrs','Cheapest option, no booking needed, least comfortable'],
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
        <p style={{ fontSize:14.5, lineHeight:1.8, color:'var(--text-mid)' }}>
          For two people with light bags, the Shatabdi beats us on both cost and time and we will say so.
          The taxi wins when there are four of you, when you have yatra luggage, when the train is full,
          or when you are leaving at an hour no train serves. Full options on our{' '}
          <Link href="/how-to-reach-haridwar" style={{ color:'var(--teal)', fontWeight:600 }}>how to reach Haridwar guide</Link>.
        </p>

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
              ['National Highways Authority of India — NH-58 corridor','https://nhai.gov.in/'],
              ['IRCTC — Haridwar to Delhi train schedules and fares','https://www.irctc.co.in/'],
              ['Uttarakhand Transport Department','https://transport.uk.gov.in/'],
            ].map(([label,href])=>(
              <li key={href} style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7, marginBottom:5 }}>
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ color:'var(--teal)' }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>
            Book the Haridwar → Delhi drop
          </h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>
            Send us your date, pickup point and flight or train time. Fixed fare confirmed in writing,
            with the driver's number the evening before.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need a Haridwar to Delhi taxi. Please share the fare and availability.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
              💬 WhatsApp — Confirm Fare
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
              ['Delhi to Haridwar Cab','/cabs/delhi-to-haridwar-cab'],
              ['Haridwar to Rishikesh Taxi','/haridwar-to-rishikesh-taxi'],
              ['Dehradun Airport to Haridwar','/dehradun-airport-to-haridwar-taxi'],
              ['How to Reach Haridwar','/how-to-reach-haridwar'],
              ['Char Dham from Delhi','/char-dham-yatra-from-delhi'],
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
