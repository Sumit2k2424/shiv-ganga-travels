import Link from 'next/link';
import { SITE } from '@/data/packages';
import { AARTI } from '@/data/localTaxi';
import { h2 } from "@/lib/prose";
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: `Har Ki Pauri Haridwar — Ganga Aarti Timings & Guide ${SITE.season}` },
  description: 'Har Ki Pauri Ganga Aarti is 6:30 PM in summer, 5:30 PM in winter. Where to sit, when to arrive, what it costs, and the mistakes first-timers make.',
  keywords: ['har ki pauri','har ki pauri haridwar','ganga aarti haridwar timing','har ki pauri aarti time','brahmakund haridwar','har ki pauri ganga aarti',`haridwar aarti timing ${SITE.season}`,'har ki pauri history','ganga snan haridwar'],
  alternates: { canonical: `${SITE.baseUrl}/har-ki-pauri-guide` },
  openGraph: {
    title: 'Har Ki Pauri — Ganga Aarti Timings and Visitor Guide',
    description: 'Aarti at 6:30 PM summer, 5:30 PM winter. Where to sit, when to arrive, and what nobody tells first-time visitors.',
    url: `${SITE.baseUrl}/har-ki-pauri-guide`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Har Ki Pauri Ganga Aarti, Haridwar — visitor guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Har Ki Pauri — Ganga Aarti Timings and Visitor Guide',
    description: 'Aarti at 6:30 PM summer, 5:30 PM winter. Where to sit and when to arrive.',
    images: [{ url: '/opengraph-image', alt: 'Har Ki Pauri Guide | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What time is the Ganga Aarti at Har Ki Pauri?',
    a:'Evening aarti is around 6:30 PM from April to September and around 5:30 PM from October to March. Morning aarti is at 5:30 AM in summer and 6:30 AM in winter. The times follow sunset and sunrise rather than a fixed clock, so they drift by fifteen minutes either way through the year and shift again on festival days. The evening ceremony runs about 30 to 40 minutes.' },
  { q:'What time should I arrive for the evening aarti?',
    a:'Forty-five minutes early on an ordinary day, and 90 minutes early between May and July or on any festival. The ghat fills from the front, and by twenty minutes before the aarti the good positions facing Brahmakund are gone. If you arrive as it starts you will watch it over several rows of heads from the bridge, which is a real experience but not the one you came for.' },
  { q:'Is there any entry fee for Har Ki Pauri?',
    a:'No. Har Ki Pauri is open to everyone, free of charge, at all hours. What you may be asked for is a donation to Shri Ganga Sabha, the body that has managed the ghat and performed the aarti since 1916 — that is legitimate and they will give you a receipt. Anyone demanding a fixed "entry fee", "camera fee" or "special darshan charge" is freelancing.' },
  { q:'What is Brahmakund and why does it matter?',
    a:'Brahmakund is the specific bathing tank at the centre of Har Ki Pauri, and it is the reason the whole site exists. Tradition holds that a drop of amrit — the nectar of immortality — fell here during the churning of the ocean, and that Vishnu left his footprint in the stone. It is where the aarti is performed and where the main Ganga snan is taken. When people say they bathed at Har Ki Pauri, they usually mean Brahmakund.' },
  { q:'Is it safe to bathe at Har Ki Pauri?',
    a:'It is safe if you use the chains and stay inside the bathing enclosure. The current at Brahmakund is far stronger than it looks — this is a canal-fed channel, not still water, and there are drownings every year, almost all of them people who let go of the chain or went in after dark. Hold the chain, do not go beyond the steps, and do not bathe alone at night. Nobody is judging how briefly you dip.' },
  { q:'Can I take photos and video during the aarti?',
    a:'Yes, phones and cameras are fine at the ghat and there is no official camera fee. Tripods and professional rigs draw attention from the volunteers during the ceremony. The one thing worth saying plainly: the aarti is 30 minutes long and it is genuinely better watched than filmed. Get your two minutes of video and then put the phone away.' },
  { q:'Where can I leave my shoes and belongings?',
    a:'Shoes come off before the ghat steps. There are paid shoe-minding stalls near the entrances charging ₹10 to ₹20 a pair, which is the sensible option. Leave valuables at your hotel. Har Ki Pauri at aarti time is one of the densest crowds in North India and pickpocketing is the single most common complaint we hear from pilgrims — carry your phone in a front pocket, not a back one.' },
  { q:'How do I get to Har Ki Pauri from Haridwar railway station?',
    a:'It is about 2 km, roughly a 25-minute walk or a ten-minute rickshaw ride for ₹30 to ₹50. Vehicles cannot reach the ghat itself — the whole area is pedestrianised, and during aarti hours the cordon extends several streets back. Any taxi, including ours, drops you at the nearest access point and you walk the last stretch. That is not the driver being lazy; it is how the town works.' },
  { q:'When is the best time of year to visit Har Ki Pauri?',
    a:'October to March for comfort — clear evenings, manageable crowds, cool but not freezing. Avoid Shravan, usually late July into August, unless the Kanwar Yatra is specifically what you have come for; the town is overwhelmed and the ghat is shoulder to shoulder for weeks. April to June is Char Dham season, so it is busy but has the best atmosphere if you do not mind heat and numbers.' },
];

function Schema() {
  const faq = {
    '@context':'https://schema.org', '@type':'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
  };
  const place = {
    '@context':'https://schema.org',
    '@type':['LandmarksOrHistoricalBuildings','PlaceOfWorship','TouristAttraction'],
    '@id': `${SITE.baseUrl}/har-ki-pauri-guide#place`,
    name:'Har Ki Pauri',
    alternateName:['Har Ki Pauri Ghat','Brahmakund'],
    description:'The principal bathing ghat on the Ganga at Haridwar, site of the daily Ganga Aarti and of Brahmakund, where tradition holds a drop of amrit fell during the churning of the ocean.',
    address:{ '@type':'PostalAddress', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249401', addressCountry:'IN' },
    geo:{ '@type':'GeoCoordinates', latitude:29.95778, longitude:78.17083 },
    isAccessibleForFree:true,
    publicAccess:true,
    touristType:['Pilgrims','Cultural tourists'],
  };
  // The aarti is a nightly ceremony with no start or end, which is exactly the
  // case schema.org's Schedule exists for — but Google still requires a literal
  // `startDate` on the Event itself, and this node had none. That is why Search
  // Console reported 1 invalid Event against the site's 3 (the other two,
  // /kedarnath-doli-yatra and /kumbh-mela-haridwar, both carry real dates).
  //
  // A perpetual event has no honest single start date, so the Event and the
  // Schedule are both anchored to the current season and expire with it. Those
  // bounds come from SITE.season, so the year rolls over with the rest of the
  // site rather than freezing at whatever year this was written in.
  const event = {
    '@context':'https://schema.org', '@type':'Event',
    name:'Ganga Aarti at Har Ki Pauri',
    description:'Daily evening lamp ceremony on the Ganga at Brahmakund, performed by Shri Ganga Sabha. Approximately 30–40 minutes.',
    startDate:`${SITE.season}-01-01T18:30:00+05:30`,
    endDate:`${SITE.season}-12-31T19:10:00+05:30`,
    eventSchedule:{
      '@type':'Schedule',
      startDate:`${SITE.season}-01-01`,
      endDate:`${SITE.season}-12-31`,
      repeatFrequency:'P1D',
      startTime:'18:30',
      endTime:'19:10',
      scheduleTimezone:'Asia/Kolkata',
      description:'Around 6:30 PM April–September; around 5:30 PM October–March. Times follow sunset.',
    },
    eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
    eventStatus:'https://schema.org/EventScheduled',
    location:{ '@id': `${SITE.baseUrl}/har-ki-pauri-guide#place` },
    isAccessibleForFree:true,
    offers:{
      '@type':'Offer',
      price:'0',
      priceCurrency:'INR',
      availability:'https://schema.org/InStock',
      url:`${SITE.baseUrl}/har-ki-pauri-guide`,
      validFrom:`${SITE.season}-01-01`,
    },
    image:[`${SITE.baseUrl}/opengraph-image`],
    organizer:{
      '@type':'Organization',
      name:'Shri Ganga Sabha, Haridwar',
      // Verified Aug 2026 — the Sabha has organised this aarti since 1916 and
      // shrigangasabha.org is its own site, not a tourism reseller's.
      url:'https://shrigangasabha.org',
    },
  };
  const article = {
    '@context':'https://schema.org', '@type':'Article',
    headline:'Har Ki Pauri — Ganga Aarti Timings and Visitor Guide',
    author:{ '@id': `${SITE.baseUrl}/#founder` },
    publisher:{ '@id': `${SITE.baseUrl}/#organization` },
    datePublished:'2026-08-10', dateModified:SITE.lastUpdatedISO,
    mainEntityOfPage:`${SITE.baseUrl}/har-ki-pauri-guide`,
  };
  const crumbs = {
    '@context':'https://schema.org', '@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Haridwar Tour Packages', item:`${SITE.baseUrl}/haridwar-tour-packages` },
      { '@type':'ListItem', position:3, name:'Har Ki Pauri Guide', item:`${SITE.baseUrl}/har-ki-pauri-guide` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}/>
    </>
  );
}

const H2 = ({ children }) => (
  <h2 style={h2}>{children}</h2>
);

export default function HarKiPauriGuide() {
  return (
    <>
      <Schema/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Haridwar · Free Entry · Aarti Twice Daily
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Har Ki Pauri, Haridwar
          </h1>
          <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15.5, lineHeight:1.75, maxWidth:700, margin:'0 auto 20px' }}>
            The evening Ganga Aarti is at <strong style={{ color:'#FFD166' }}>about 6:30 PM in summer and 5:30 PM in winter</strong>.
            Entry is free. Arrive 45 minutes early — 90 in season — and sit on the Brahmakund side.
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/haridwar-tour-packages" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Haridwar</Link><span>›</span>
          <span style={{ color:'var(--navy)', fontWeight:600 }}>Har Ki Pauri</span>
        </div>
      </nav>


        <AnswerBox>
          <strong>Har Ki Pauri is the main bathing ghat at Haridwar and the site of the evening Ganga Aarti</strong>, held daily around sunset — roughly 6pm in summer and 5.30pm in winter. It is free, needs no ticket, and is busiest on full-moon days and during Kumbh. The ghat marks the spot where the Ganga leaves the mountains for the plains, and it is where most Char Dham pilgrims begin or end the circuit.
        </AnswerBox>
      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <p style={{ fontSize:16.5, lineHeight:1.8, color:'var(--text-mid)', marginBottom:22 }}>
          Har Ki Pauri is the main bathing ghat on the Ganga at Haridwar and the site of the daily Ganga
          Aarti — around 6:30 PM in summer, around 5:30 PM in winter, free to attend, roughly 30 to 40
          minutes long. Our office is a fifteen-minute drive from the ghat and we send pilgrims here most
          evenings of the season, so what follows is practical rather than poetic: when to arrive, where
          to stand, and the handful of things that go wrong for people who turn up unprepared.
        </p>

        {/* Aarti timings */}
        <H2>Ganga Aarti Timings</H2>
        <div style={{ overflowX:'auto', marginBottom:10 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14.5, minWidth:420 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Season','Morning aarti','Evening aarti'].map(h=>(
                <th key={h} style={{ padding:'11px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {AARTI.map(a=>(
                <tr key={a.season} style={{ borderBottom:'1px solid hsl(var(--border))' }}>
                  <td style={{ padding:'11px', fontWeight:600, color:'var(--navy)' }}>{a.season}</td>
                  <td style={{ padding:'11px', color:'var(--text-mid)' }}>{a.morning}</td>
                  <td style={{ padding:'11px', fontWeight:700, color:'var(--teal)' }}>{a.evening}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, marginBottom:8 }}>
          These track sunrise and sunset rather than the clock, so treat them as accurate to about fifteen
          minutes. On Somvati Amavasya, Ganga Dussehra, Kartik Purnima and during Kumbh the schedule
          changes and the crowd multiplies. Shri Ganga Sabha, which has performed the aarti since 1916,
          sets the times — if you need certainty on a festival date, ask at their office by the ghat.
        </p>

        {/* Where to sit — real experience, OPPORTUNITY gap */}
        <H2>Where to Actually Stand or Sit</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          This is the part that decides whether you have a good evening. The ghat is a set of steps on
          both banks of a fast channel, with footbridges over it, and the aarti is performed at Brahmakund
          on the main side.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:8 }}>
          {[
            ['Brahmakund steps, main side','Best','The ceremony happens in front of you. Occupied by 45 minutes before in low season, 90 in high. This is where you want to be.'],
            ['Upper steps, main side','Good','You see over the crowd and can leave easily. A sensible compromise with children or elderly parents.'],
            ['Opposite bank','Fair','A clear view across the water of the whole ghat lit up — genuinely the better photograph, though you are further from the ritual itself.'],
            ['The footbridges','Poor','Where you end up if you arrive late. You will be moved along by volunteers keeping the bridge clear, repeatedly.'],
          ].map(([spot, rating, note])=>(
            <div key={spot} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:11, padding:'14px 16px' }}>
              <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:6, flexWrap:'wrap' }}>
                <span style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)' }}>{spot}</span>
                <span style={{
                  background: rating==='Best' ? '#DCFCE7' : rating==='Good' ? 'var(--navy-light)' : rating==='Fair' ? '#FEF3C7' : '#FEE2E2',
                  color: rating==='Best' ? '#15803D' : rating==='Good' ? 'var(--navy)' : rating==='Fair' ? '#92400E' : '#991B1B',
                  fontSize:11, fontWeight:700, padding:'3px 11px', borderRadius:100,
                }}>{rating}</span>
              </div>
              <div style={{ fontSize:14, color:'var(--text-muted)', lineHeight:1.7 }}>{note}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8 }}>
          There is no paid VIP seating at Har Ki Pauri in the way there is at some other aarti sites.
          Anyone offering you a reserved seat for a price is selling you a spot that is free.
        </p>

        {/* Brahmakund / history */}
        <H2>Brahmakund and Why This Spot</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          Har Ki Pauri translates roughly as "the steps of Hari" — Vishnu. Tradition holds that Vishnu
          left a footprint in the stone here, and that this is one of the four places where a drop of
          amrit fell from the pot carried during the churning of the ocean. The other three are Prayagraj,
          Nashik and Ujjain, which is precisely why the Kumbh Mela rotates between those four cities and
          why Haridwar's turn draws crowds measured in millions.
        </p>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          The ghat is also associated with King Vikramaditya, who is said to have built it in memory of
          his brother Bhartrihari, an ascetic who meditated on this bank. What you see today is much
          later — the channel is engineered, the steps have been rebuilt repeatedly, and the current
          arrangement dates largely from the colonial period and after. The continuity is in the practice,
          not the masonry.
        </p>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)' }}>
          For Char Dham pilgrims this matters practically: Haridwar is the traditional starting point of
          the yatra, and taking Ganga snan at Brahmakund before departing is how most families begin.
          Our packages build the evening aarti into the arrival day for exactly that reason.
        </p>

        {/* Practical */}
        <H2>Practical Details</H2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))', gap:12, marginBottom:8 }}>
          {[
            ['🎟️ Entry','Free, always. Ganga Sabha donations are voluntary and receipted.'],
            ['👟 Shoes','Off before the steps. Minding stalls charge ₹10–20 a pair.'],
            ['📷 Cameras','Allowed, no fee. Tripods discouraged during the ceremony.'],
            ['🚗 Vehicles','Cannot reach the ghat. Taxis drop at the cordon; you walk the last stretch.'],
            ['🧳 Valuables','Leave them at the hotel. Dense crowds, frequent pickpocketing.'],
            ['♿ Access','Steps throughout, no ramps at the main ghat. Upper level is easier for wheelchairs.'],
            ['🌊 Bathing','Hold the chains. The current is much stronger than it looks.'],
            ['🕐 Duration','Aarti runs 30–40 minutes. Allow 2 hours total with arrival and exit.'],
          ].map(([t,d])=>(
            <div key={t} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', borderRadius:11, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{t}</div>
              <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7 }}>{d}</div>
            </div>
          ))}
        </div>

        {/* Safety — OPPORTUNITY gap, nobody says this plainly */}
        <H2>The Two Real Risks</H2>
        <div style={{ background:'#FEF2F2', border:'1px solid #FCA5A5', borderRadius:12, padding:'16px 19px', marginBottom:14 }}>
          <div style={{ fontWeight:700, fontSize:14.5, color:'#991B1B', marginBottom:8 }}>The water</div>
          <p style={{ fontSize:14.5, color:'#7F1D1D', lineHeight:1.75, margin:0 }}>
            Brahmakund is fed by a fast canal channel, not slack river. It looks calm from the steps and
            it is not. There are drownings at Haridwar every year and the pattern is consistent: someone
            lets go of the chain, or bathes after dark, or goes in having eaten and rested badly after a
            long journey. Hold the chain. Stay inside the enclosure. Do not bathe at night.
          </p>
        </div>
        <div style={{ background:'#FFF7ED', border:'1px solid #FDBA74', borderRadius:12, padding:'16px 19px', marginBottom:8 }}>
          <div style={{ fontWeight:700, fontSize:14.5, color:'#9A3412', marginBottom:8 }}>The crowd</div>
          <p style={{ fontSize:14.5, color:'#9A3412', lineHeight:1.75, margin:0 }}>
            At aarti time this is one of the densest crowds in North India. Pickpocketing is the complaint
            we hear most from returning pilgrims — phones from back pockets, purses from open bags. Agree
            a meeting point with your group before you go in, because mobile signal at the ghat during
            aarti is unreliable and finding each other afterwards is genuinely difficult.
          </p>
        </div>

        {/* Nearby */}
        <H2>What Else Is Within Reach</H2>
        <div style={{ overflowX:'auto', marginBottom:8 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:500 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Place','Distance','Allow','Note'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Mansa Devi Temple','1.5 km','1.5–2 hrs','Ropeway from the base, or a 1.5 km climb.','/mansa-devi-temple'],
                ['Chandi Devi Temple','4 km','2 hrs','Ropeway or a 3 km trek up Neel Parvat.','/chandi-devi-temple'],
                ['Daksh Mahadev, Kankhal','4 km','1 hr','Quieter than the ghat. Major Shivratri site.','/daksh-mahadev-temple'],
                ['Maya Devi Temple','1 km','30 min','One of the Shakti Peethas. Often skipped, worth ten minutes.','/maya-devi-temple'],
                ['Shantikunj','6 km','1–2 hrs','Gayatri Pariwar headquarters. Our office is at its Gate No. 1.','/shantikunj-haridwar-guide'],
                ['Rishikesh','25 km','Half day','Ram Jhula, Lakshman Jhula, a second aarti at Parmarth Niketan.','/haridwar-to-rishikesh-taxi'],
              ].map(([a,b,c,d,href])=>(
                <tr key={a} style={{ borderBottom:'1px solid hsl(var(--border))' }}>
                  <td style={{ padding:'9px 10px', fontWeight:600 }}>
                    <Link href={href} style={{ color:'var(--teal)', textDecoration:'none' }}>{a}</Link>
                  </td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)' }}>{b}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)' }}>{c}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)', fontSize:13 }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8 }}>
          All of it fits in one day with a car, and the order matters — our{' '}
          <Link href="/haridwar-sightseeing-places" style={{ color:'var(--teal)', fontWeight:600 }}>Haridwar sightseeing itinerary</Link>{' '}
          sets out the sequence that avoids the queues and the midday closures. The{' '}
          <Link href="/taxi-service-in-haridwar" style={{ color:'var(--teal)', fontWeight:600 }}>Haridwar temple circuit</Link>{' '}
          covers the first four in five to six hours, and the{' '}
          <Link href="/haridwar-to-rishikesh-taxi" style={{ color:'var(--teal)', fontWeight:600 }}>Haridwar–Rishikesh day hire</Link>{' '}
          adds the ghats at Rishikesh if you want a longer day.
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
              ['Uttarakhand Tourism Development Board — Haridwar','https://uttarakhandtourism.gov.in/destination/haridwar'],
              ['Haridwar District Administration','https://haridwar.nic.in/'],
              ['Uttarakhand Tourism — Kumbh Mela','https://uttarakhandtourism.gov.in/'],
            ].map(([label,href])=>(
              <li key={href} style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7, marginBottom:5 }}>
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ color:'var(--teal)' }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>
            Seeing Haridwar properly?
          </h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>
            We run the temple circuit daily and our office is fifteen minutes from the ghat. Ask us for a
            car, or just ask what the aarti time is this week — we will tell you either way.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to visit Har Ki Pauri and the Haridwar temples. Please share options.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
              💬 WhatsApp Us
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
              ['Haridwar Tour Packages','/haridwar-tour-packages'],
              ['Taxi Service in Haridwar','/taxi-service-in-haridwar'],
              ['How to Reach Haridwar','/how-to-reach-haridwar'],
              ['Haridwar to Rishikesh Taxi','/haridwar-to-rishikesh-taxi'],
              ['Char Dham Yatra','/char-dham-yatra'],
              ['Online Puja Booking','/online-puja-booking'],
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
