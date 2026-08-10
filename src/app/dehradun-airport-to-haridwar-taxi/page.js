import Link from 'next/link';
import { SITE } from '@/data/packages';
import { TRANSFERS, transferRows, inr } from '@/data/localTaxi';

const R = TRANSFERS['airport-haridwar'];

export const metadata = {
  title: { absolute: 'Dehradun Airport to Haridwar Taxi — ₹1,200 | 35 km' },
  description: 'Jolly Grant airport to Haridwar taxi from ₹1,200, 35 km in about an hour. Meet-and-greet at arrivals, flight tracked, fixed fare. Direct operator.',
  keywords: ['dehradun airport to haridwar taxi','jolly grant airport to haridwar','dehradun airport to haridwar cab','ded airport haridwar taxi fare','jolly grant to haridwar distance','dehradun airport taxi haridwar','airport pickup haridwar','jolly grant airport prepaid taxi'],
  alternates: { canonical: `${SITE.baseUrl}/dehradun-airport-to-haridwar-taxi` },
  openGraph: {
    title: 'Dehradun Airport to Haridwar Taxi — ₹1,200 Fixed',
    description: '35 km from Jolly Grant to Haridwar in about an hour. Flight-tracked pickup, name board at arrivals, fixed fare.',
    url: `${SITE.baseUrl}/dehradun-airport-to-haridwar-taxi`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dehradun Jolly Grant airport to Haridwar taxi — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dehradun Airport to Haridwar Taxi — ₹1,200 Fixed',
    description: '35 km, about an hour. Flight-tracked pickup with a name board at arrivals.',
    images: [{ url: '/opengraph-image', alt: 'Dehradun Airport to Haridwar Taxi | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'How much is a taxi from Dehradun airport to Haridwar?',
    a:'₹1,200 for a Swift Dzire, ₹1,600 for an Ertiga, ₹1,900 for an Innova Crysta and ₹2,800 for a 12-seat tempo traveller. Fixed fares including toll, parking and the airport entry charge. Booked in advance the price is locked — it does not rise because your flight landed at midnight or because it is yatra season.' },
  { q:'How far is Haridwar from Jolly Grant airport?',
    a:'35 km on NH-7 through Doiwala and Raiwala, taking 50 to 70 minutes. Jolly Grant (airport code DED) is actually closer to Haridwar than it is to central Dehradun in driving time, which surprises most first-time visitors. It is the nearest airport to Haridwar — there is no airstrip in Haridwar itself.' },
  { q:'Is there a prepaid taxi counter at Jolly Grant airport?',
    a:'Yes, inside the arrivals hall, and it is a legitimate option — rates run roughly ₹1,200 to ₹1,450 for a sedan to Haridwar. The counter is fine if you land during the day and do not mind queueing. Where it fails is late arrivals: the counter thins out after the last evening flights, and the drivers still waiting at 11 PM price by desperation. Pre-booking removes that entirely.' },
  { q:'Will the driver wait if my flight is delayed?',
    a:'Yes. We track the flight number you give us at booking, so the driver leaves for the airport based on actual landing time, not the schedule. There is no waiting charge for a delay that is the airline\'s fault — 60 minutes of free waiting from touchdown, and in practice we do not clock-watch on a delayed flight. What we do ask is that you send the flight number, because without it we are guessing.' },
  { q:'Where does the driver meet me at Jolly Grant?',
    a:'At the arrivals exit with a name board. Jolly Grant is a small terminal with a single arrivals gate, so you cannot really miss each other — this is not Delhi T3. You get the driver\'s name, phone number and vehicle registration by WhatsApp the evening before, and he calls once you land.' },
  { q:'Can the taxi drop me at Shantikunj or Patanjali instead of Haridwar town?',
    a:'Yes, at the same fare. Shantikunj is on the Bhupatwala side, which the road reaches first, so it is marginally shorter than the town centre. Patanjali Yogpeeth at Bahadrabad is about 8 km the other side of Haridwar — add ₹200. Our own office sits on Saptrishi Road right by Shantikunj Gate No. 1, so this is territory we cover daily.' },
  { q:'Are there buses from Dehradun airport to Haridwar?',
    a:'Not directly from the terminal. You would walk out to the NH-7 highway and flag a Dehradun–Haridwar bus, which costs ₹60 to ₹80 and takes around 90 minutes with stops. With luggage, after a flight, it is a miserable option and almost nobody does it. Shared taxis from outside the terminal charge ₹300 to ₹400 a seat and leave when full.' },
  { q:'Which flights land at Jolly Grant, and when should I book the return?',
    a:'IndiGo and Air India run daily from Delhi (1 hour), Mumbai (about 1.5 hours), Bangalore and Hyderabad. For the return leg, leave Haridwar three hours before a domestic departure — that is 70 minutes of driving plus a genuine buffer, because Jolly Grant is a single-runway airport where one weather hold backs everything up. In winter, fog delays at Jolly Grant are routine between late December and early February.' },
];

function Schema() {
  const faq = {
    '@context':'https://schema.org', '@type':'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
  };
  const service = {
    '@context':'https://schema.org', '@type':'Service',
    '@id': `${SITE.baseUrl}/dehradun-airport-to-haridwar-taxi#service`,
    name:'Dehradun Airport to Haridwar Taxi Service',
    serviceType:'Airport transfer',
    provider:{ '@id': `${SITE.baseUrl}/#organization` },
    areaServed:[
      { '@type':'City', name:'Haridwar' },
      { '@type':'City', name:'Dehradun' },
    ],
    offers: transferRows('airport-haridwar').map(r => ({
      '@type':'Offer',
      name:`${r.name} — Jolly Grant airport to Haridwar`,
      price:r.fare, priceCurrency:'INR',
      priceSpecification:{ '@type':'UnitPriceSpecification', price:r.fare, priceCurrency:'INR', unitText:'one-way transfer, 35 km' },
    })),
  };
  const article = {
    '@context':'https://schema.org', '@type':'Article',
    headline:'Dehradun Airport to Haridwar Taxi — Fare, Timing and Pickup',
    author:{ '@id': `${SITE.baseUrl}/#founder` },
    publisher:{ '@id': `${SITE.baseUrl}/#organization` },
    datePublished:'2026-08-10', dateModified:SITE.lastUpdatedISO,
    mainEntityOfPage:`${SITE.baseUrl}/dehradun-airport-to-haridwar-taxi`,
  };
  const crumbs = {
    '@context':'https://schema.org', '@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Taxi Service in Haridwar', item:`${SITE.baseUrl}/taxi-service-in-haridwar` },
      { '@type':'ListItem', position:3, name:'Dehradun Airport to Haridwar Taxi', item:`${SITE.baseUrl}/dehradun-airport-to-haridwar-taxi` },
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
  <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:36 }}>{children}</h2>
);

export default function DehradunAirportToHaridwarTaxi() {
  return (
    <>
      <Schema/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            {R.km} km · {R.hours} · Flight tracked
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Dehradun Airport to Haridwar Taxi
          </h1>
          <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15.5, lineHeight:1.75, maxWidth:700, margin:'0 auto 20px' }}>
            Jolly Grant to Haridwar is {R.km} km and takes {R.hours}. A sedan is a fixed{' '}
            <strong style={{ color:'#FFD166' }}>{inr(R.fares.dzire)}</strong> — booked ahead, tracked to
            your flight, with a name board waiting at arrivals.
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/taxi-service-in-haridwar" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Taxi Service in Haridwar</Link><span>›</span>
          <span style={{ color:'var(--navy)', fontWeight:600 }}>Dehradun Airport to Haridwar</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <p style={{ fontSize:16.5, lineHeight:1.8, color:'var(--text-mid)', marginBottom:22 }}>
          Jolly Grant Airport (DED) is {R.km} km from Haridwar — about {R.hours} on NH-7 — and a
          pre-booked sedan transfer costs {inr(R.fares.dzire)} all in. It is the nearest airport to
          Haridwar, and in driving time it is closer to Haridwar than to much of Dehradun. If you are
          flying in to start a Char Dham Yatra, this is almost certainly your first ground leg, so the
          detail below is written for someone landing here for the first time.
        </p>

        <H2>Airport Transfer Fare</H2>
        <div style={{ overflowX:'auto', marginBottom:10 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14, minWidth:480 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Vehicle','Seats','Fixed transfer','Luggage capacity'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {transferRows('airport-haridwar').map((r,i)=>(
                <tr key={r.id} style={{ borderBottom:'1px solid var(--border)' }}>
                  <td style={{ padding:'10px', fontWeight:600, color:'var(--navy)' }}>{r.name}</td>
                  <td style={{ padding:'10px', color:'var(--text-muted)' }}>{r.seats}</td>
                  <td style={{ padding:'10px', fontWeight:700, color:'var(--teal)' }}>{inr(r.fare)}</td>
                  <td style={{ padding:'10px', color:'var(--text-muted)', fontSize:13 }}>
                    {['2 large + 2 cabin','4 large + cabin bags','4 large, roomier','4 large + 2 cabin','10–12 bags + roof carrier','15+ bags + roof carrier'][i]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize:12.5, color:'var(--text-muted)' }}>
          Includes toll, parking, airport entry fee and 60 minutes of free waiting from touchdown.
          No night surcharge on airport pickups — we know you did not choose the arrival slot.
        </p>

        {/* OPPORTUNITY gap — honest take on the prepaid counter */}
        <H2>Prepaid Counter, App Cab, or Pre-Booked? An Honest Comparison</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          There are three real ways to get from Jolly Grant to Haridwar and each is right in different
          circumstances. We are obviously one of them, so here is the comparison with our own weaknesses
          left in.
        </p>
        <div style={{ overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:560 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Option','Typical cost','Works well when','Fails when'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Airport prepaid counter','₹1,200–1,450','Daytime landing, no advance planning, you want a receipt','After the last evening flight, when the queue and the choice both vanish'],
                ['Ola / Uber','₹900–1,400','Off-peak, you are flexible and travelling light','Driver availability at Jolly Grant is thin and cancellations on a 35 km outbound fare are common'],
                ['Pre-booked transfer', inr(R.fares.dzire) + '–' + inr(R.fares.crysta), 'Late arrival, family, luggage, elderly parents, yatra start','You need a car in the next ten minutes with no notice — book us the day before'],
              ].map(([a,b,c,d])=>(
                <tr key={a} style={{ borderBottom:'1px solid var(--border)' }}>
                  <td style={{ padding:'9px 10px', fontWeight:600, color:'var(--navy)' }}>{a}</td>
                  <td style={{ padding:'9px 10px', color:'var(--teal)', fontWeight:700, whiteSpace:'nowrap' }}>{b}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)', fontSize:13 }}>{c}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)', fontSize:13 }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize:14.5, lineHeight:1.8, color:'var(--text-mid)' }}>
          If you land at 2 PM with a backpack, use the prepaid counter and save yourself the planning.
          If you land at 10:40 PM with three generations of family and yatra luggage, do not improvise at
          Jolly Grant — there is very little waiting outside that terminal late at night.
        </p>

        {/* OPPORTUNITY gap — the arrival walkthrough */}
        <H2>What Happens When You Land</H2>
        <div style={{ display:'flex', flexDirection:'column', gap:0, marginBottom:8 }}>
          {[
            ['Before you fly','Send us the flight number, date and how many bags. You get back a fixed fare in writing.'],
            ['Evening before','WhatsApp with the driver\'s name, mobile number and the vehicle registration. Check the registration when the car arrives — it should match.'],
            ['On landing','Driver is already at the terminal; we watch the flight, not the timetable. He calls as you taxi in.'],
            ['At arrivals','Single exit gate, name board with your surname on it. Jolly Grant is small — thirty seconds of looking, not thirty minutes.'],
            ['The drive','50–70 minutes on NH-7 through Doiwala and Raiwala. Tea stop if you want one; nobody is counting minutes.'],
            ['Drop','Your hotel, ashram, Shantikunj or our office on Saptrishi Road. Pay the driver at the end — cash, UPI or card.'],
          ].map(([step, detail], i)=>(
            <div key={step} style={{ display:'flex', gap:14, padding:'13px 0', borderBottom:'1px solid var(--border)' }}>
              <div style={{ background:'var(--navy)', color:'#fff', width:26, height:26, borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center', fontSize:12.5, fontWeight:700, flexShrink:0 }}>{i+1}</div>
              <div>
                <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{step}</div>
                <div style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.75 }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <H2>Flights into Jolly Grant, and the Fog Season</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          IndiGo and Air India fly daily from Delhi (about an hour), Mumbai, Bangalore and Hyderabad.
          Jolly Grant is a single-runway airport in a valley, which matters in two seasons. Between late
          December and early February, morning fog regularly delays or diverts the first arrivals. During
          heavy monsoon, low cloud does the same thing. Neither is common enough to plan around, but both
          are common enough that you should not schedule a Char Dham departure for the morning after a
          winter or monsoon flight.
        </p>
        <div style={{ background:'#FFF7ED', border:'1px solid #FDBA74', borderRadius:12, padding:'15px 18px', marginBottom:8 }}>
          <p style={{ fontSize:14.5, color:'#9A3412', lineHeight:1.75, margin:0 }}>
            <strong>Flying out again?</strong> Leave Haridwar three hours before a domestic departure. That
            is 70 minutes of driving and a real buffer. Jolly Grant has one runway — a single weather hold
            backs up the whole schedule, and there is no second flight later the same day on most routes.
          </p>
        </div>

        <H2>Onward from Haridwar</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          Most people landing at Jolly Grant for Haridwar are here to start a yatra. If that is you, the
          airport transfer is leg one of a longer plan and we can quote the whole thing as a single
          package rather than a string of separate bookings.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))', gap:12 }}>
          {[
            ['Char Dham Yatra','All four dhams from Haridwar, 9N/10D','/char-dham-yatra'],
            ['Do Dham Yatra','Kedarnath and Badrinath, 5N/6D','/do-dham-yatra'],
            ['Haridwar Local Taxi','Day hire for temples and ghats','/taxi-service-in-haridwar'],
            ['Har Ki Pauri','Aarti timings and what to expect','/har-ki-pauri-guide'],
          ].map(([t,d,href])=>(
            <Link key={href} href={href} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:11, padding:'14px 16px', textDecoration:'none', display:'block' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:5 }}>{t}</div>
              <div style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.6 }}>{d}</div>
            </Link>
          ))}
        </div>

        <H2>Frequently Asked Questions</H2>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {FAQS.map(f=>(
            <details key={f.q} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:11, overflow:'hidden' }}>
              <summary style={{ padding:'14px 17px', cursor:'pointer', listStyle:'none', fontWeight:700, fontSize:14.5, color:'var(--navy)' }}>{f.q}</summary>
              <div style={{ padding:'0 17px 15px', fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8 }}>{f.a}</div>
            </details>
          ))}
        </div>

        <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 18px', marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:9 }}>Sources</div>
          <ul style={{ paddingLeft:18, margin:0 }}>
            {[
              ['Airports Authority of India — Dehradun (Jolly Grant) airport','https://www.aai.aero/en/airports/dehradun'],
              ['Uttarakhand Transport Department','https://transport.uk.gov.in/'],
              ['India Meteorological Department — Dehradun forecasts','https://mausam.imd.gov.in/'],
            ].map(([label,href])=>(
              <li key={href} style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7, marginBottom:5 }}>
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ color:'var(--teal)' }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>
            Book your airport pickup
          </h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>
            Send the flight number and landing time. Fixed fare in writing, driver details the night
            before, name board at arrivals.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need an airport pickup from Jolly Grant (Dehradun) to Haridwar. My flight details: ')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
              💬 WhatsApp Flight Details
            </a>
            <a href="tel:+917817996730"
              style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Pages</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[
              ['Taxi Service in Haridwar','/taxi-service-in-haridwar'],
              ['How to Reach Haridwar','/how-to-reach-haridwar'],
              ['Haridwar to Rishikesh Taxi','/haridwar-to-rishikesh-taxi'],
              ['Haridwar to Delhi Taxi','/haridwar-to-delhi-taxi'],
              ['Char Dham from Dehradun','/char-dham-yatra-from-dehradun'],
              ['Char Dham Helicopter','/char-dham-helicopter'],
            ].map(([label,href])=>(
              <Link key={href} href={href} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
