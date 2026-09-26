import Link from 'next/link';
import { SITE } from '@/data/packages';
import CiteThis from '@/components/CiteThis';
import { citableDataset } from '@/lib/citable';
import AnswerBox from '@/components/AnswerBox';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from '@/lib/prose';
import { pageDates } from '@/lib/pageDates';
import OfficialLink from '@/components/OfficialLink';

const PAGE_DATES = pageDates('/badrinath-weather');
const PAGE = '/badrinath-weather';
const VERIFIED = 'September 21, 2026';
const VERIFIED_ISO = '2026-09-21';

/* Deepened 21 Sep 2026 to the same shape as /yamunotri-weather: a day/night
   split (the complaint at Badrinath is always the evening aarti and the 5 am
   Tapt Kund bath, never the afternoon), a verdict per month, and the
   temperature ladder from Joshimath, where you slept, to Mana beyond the
   temple. The earlier version had a single temperature band per month that
   disagreed with its own answer box. */
const weather = [
  { month:'April',     day:'7°C to 13°C',  night:'−3°C to 2°C',  snow:'Lying snow above Hanuman Chatti',  rain:'Low',                  crowd:'Light',      verdict:'caution', note:'Temple opens 23 April. Cold, clear and quiet — the best Nilkantha views of the year and the emptiest queues — but nights are below freezing and the Joshimath road can still ice in the first week.' },
  { month:'May',       day:'12°C to 18°C', night:'2°C to 7°C',   snow:'Melting on the peaks',              rain:'Low to medium',        crowd:'Very heavy', verdict:'best',    note:'The classic window. Warm afternoons, the valley in flower, and Nilkantha usually clear until noon. Also the busiest month: the gate queue at Joshimath is longest in the last fortnight.' },
  { month:'June',      day:'15°C to 21°C', night:'6°C to 10°C',  snow:'None on the route',                 rain:'Medium, rising late',  crowd:'Very heavy', verdict:'best',    note:'Warmest month at the temple and the most comfortable for elderly pilgrims. The monsoon usually arrives in the last week and the Helang stretch starts closing.' },
  { month:'July',      day:'14°C to 19°C', night:'8°C to 11°C',  snow:'None',                              rain:'Heavy — peak monsoon', crowd:'Light',      verdict:'avoid',   note:'The Chamoli–Joshimath road is the one that closes. Mild at the temple, but reaching it on schedule is a gamble, and the peaks are in cloud most days.' },
  { month:'August',    day:'13°C to 18°C', night:'8°C to 11°C',  snow:'None',                              rain:'Heavy — peak monsoon', crowd:'Light',      verdict:'avoid',   note:'Wettest month and the highest landslide risk on the approach. If your dates are fixed, build in spare days at Joshimath rather than at Badrinath.' },
  { month:'September', day:'11°C to 16°C', night:'4°C to 8°C',   snow:'None',                              rain:'Light to medium',      crowd:'Moderate',   verdict:'best',    note:'Monsoon withdraws through the first fortnight. From mid-month the air is washed clean, Nilkantha stands clear all day and the crowds have gone home. Our favourite month here.' },
  { month:'October',   day:'7°C to 12°C',  night:'−1°C to 3°C',  snow:'Upper peaks only',                  rain:'Very low',             crowd:'Moderate',   verdict:'best',    note:'Sharp, clear and cold. The evening aarti at 7 pm is the coldest hour of a pilgrim\'s day — this is a thermals month, and the Tapt Kund bath at dawn is genuinely welcome.' },
  { month:'November',  day:'2°C to 6°C',   night:'−6°C to −2°C', snow:'Likely; road can close',            rain:'Very low',             crowd:'Light',      verdict:'caution', note:'Temple expected to close around 13 November, two days after Bhai Dooj (the BKTC confirms the date on Vijayadashami), after which the deity moves to Joshimath. The last week is severe and the gate road can shut for snow with a day\'s notice.' },
];

const VERDICT = {
  best:    { label:'Good time to go', bg:'#dcfce7', ink:'#15803d', mark:'✅' },
  caution: { label:'Go prepared',     bg:'#fef3c7', ink:'#92400e', mark:'⚠️' },
  avoid:   { label:'Not advised',     bg:'#fee2e2', ink:'#991b1b', mark:'⛔' },
};

/* Badrinath is the lowest dham, but Joshimath is 1,250 m below it, and the
   temperature drop between the two is what people pack for badly. */
const ladder = [
  { place:'Joshimath', alt:'1,890 m', may:'10°C to 24°C', oct:'6°C to 19°C',  note:'Usual overnight halt. Warm enough that people leave the fleece in the bag.' },
  { place:'Badrinath', alt:'3,133 m', may:'2°C to 18°C',  oct:'−1°C to 12°C', note:'1,250 m higher and 8–10 degrees colder than where you woke up. Wind off the Alaknanda at the temple steps.' },
  { place:'Mana',      alt:'3,310 m', may:'1°C to 16°C',  oct:'−2°C to 10°C', note:'3 km on and only 180 m higher, but an open valley facing the border — windier than the temple in every month.' },
];

const faqs = [
  { q:'What is the best month to visit Badrinath?', a:'Mid-September to October for clear views and light crowds, or May and early June if you want the warmest weather. Both windows work. September–October is the better choice for anyone who dislikes queueing — the Joshimath gate wait in late May can run to an hour — and it is when Nilkantha is visible all day rather than only until noon.' },
  { q:'How cold does Badrinath get?', a:'Daytime at the temple runs from about 7°C in April to 21°C in June. Nights are the part people underestimate: −3°C in April, 2–7°C in May, and back to freezing in October and −6°C in November. The evening aarti at 7 pm and the dawn bath at Tapt Kund are the two cold hours of the day, and both are the reason you came.' },
  { q:'Is Badrinath colder than Kedarnath?', a:'No. Badrinath at 3,133 m is the lowest of the four dhams and 450 m below Kedarnath, so it runs 3–4 degrees warmer in every month and has no trek. That, plus the road to the temple door, is why it is the dham we send elderly pilgrims to first. Gangotri at 3,415 m and Yamunotri at 3,291 m are both colder too.' },
  { q:'Can you visit Badrinath during the monsoon?', a:'You can, and the temple stays open, but July and August are the months we advise against. The problem is not the weather at Badrinath, which is mild, but the Chamoli–Joshimath road through Helang, which closes repeatedly for slides and can hold you at Joshimath for a day or more. If your dates are fixed, keep a spare day.' },
  { q:'Does it snow at Badrinath?', a:'In the season, rarely at the temple itself — lying snow is on the peaks and above Hanuman Chatti in April, and the first falls come in early November as the season closes. Outside the season, heavily: Badrinath is under snow from December to March, which is why the temple closes and the deity winters at Joshimath.' },
  { q:'How hot is the Tapt Kund at Badrinath?', a:'About 55°C at the source, cooling across the pool to a temperature you can sit in. The custom is to bathe before darshan, and in October, when the air is near freezing at dawn, it is the best moment of the day. It holds that temperature year-round regardless of the weather outside.' },
  { q:'What should I wear for Badrinath?', a:'Layers, in every month. You will leave Joshimath in a shirt, arrive at the temple in a fleece, and stand at the evening aarti wishing you had a jacket — the drop between the two towns is 8–10 degrees. Add thermals, a cap and gloves for April, October and November, and a rain shell for June onwards. Footwear matters less than at the trek dhams; the walk from the car park is a few minutes.' },
];

const th = { padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' };
const td = { padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5, verticalAlign:'top' };

export const metadata = {
  title: { absolute: 'Badrinath Weather | Month-wise Temperature Guide' },
  description: 'Badrinath weather month by month at 3,133 m — day and night temperatures, snow, rain and crowds for every month of the season, how much colder it is than Joshimath, and what to pack. Best windows and monsoon risk.',
  keywords: ['badrinath weather','badrinath temperature','badrinath weather in may','badrinath weather in october','badrinath best time to visit','badrinath snowfall','joshimath temperature'],
  alternates: { canonical: `${SITE.baseUrl}${PAGE}` },
  openGraph: {
    title: `Badrinath Weather ${SITE.season} — Month-wise Temperature Guide`,
    description: 'Day and night temperatures, snow, rain and crowds for every month at Badrinath, how much colder it is than Joshimath, and what to pack.',
    url: `${SITE.baseUrl}${PAGE}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Badrinath Weather ${SITE.season} — Month-wise Temperature Guide | ${SITE.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Badrinath Weather ${SITE.season} — Month-wise Temperature Guide`,
    description: 'Day and night temperatures, snow, rain and crowds for every month at Badrinath, and what to pack.',
    images: [{ url: '/opengraph-image', alt: `Badrinath Weather ${SITE.season} — Month-wise Temperature Guide | ${SITE.name}` }],
  },
};

export default function BadrinathWeather() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Article',
        headline:`Badrinath Weather ${SITE.season}: Month-by-Month Temperature Guide`,
        description:'Month-by-month day and night temperatures, snow, rainfall and crowd levels for Badrinath at 3,133 m, with the temperature drop from Joshimath to Mana.',
        image:`${SITE.baseUrl}/opengraph-image`,
        datePublished:PAGE_DATES.createdISO, dateModified:VERIFIED_ISO,
        author:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, '@id':`${SITE.baseUrl}/#organization` },
        publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, logo:{ '@type':'ImageObject', url:`${SITE.baseUrl}/logo.png` } },
        mainEntityOfPage:`${SITE.baseUrl}${PAGE}`,
        about:{ '@type':'Place', name:'Badrinath Temple', geo:{ '@type':'GeoCoordinates', latitude:30.7446, longitude:79.4938, elevation:'3133' } },
        speakable:{ '@type':'SpeakableSpecification', cssSelector:['.speakable-answer'] },
      })}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citableDataset({
        name: `Badrinath monthly temperature and conditions, ${SITE.season} season`,
        description: 'Month-by-month daytime and night-time temperature bands, snow, rainfall and crowd levels for Badrinath (3,133 m), plus temperature by elevation from Joshimath to Mana, recorded on the route by Shiv Ganga Travels.',
        path: PAGE,
        modified: VERIFIED_ISO,
        measured: ['Daytime temperature', 'Night-time temperature', 'Snowfall', 'Rainfall', 'Crowd level', 'Elevation'],
        place: { name: 'Badrinath, Chamoli district, Uttarakhand, India', lat: 30.7446, lon: 79.4938 },
        temporal: '2026-04-23/2026-11-13',
      })) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BreadcrumbList',
        itemListElement:[
          { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
          { '@type':'ListItem', position:2, name:'Badrinath Yatra', item:`${SITE.baseUrl}/badrinath-yatra` },
          { '@type':'ListItem', position:3, name:'Weather Guide', item:`${SITE.baseUrl}${PAGE}` },
        ],
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🌤️ Weather Guide · 3,133 m</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Badrinath Weather {SITE.season} — Month-wise Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Day and night temperatures, snowfall, rainfall and the best visiting windows for each month
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link prefetch={false} href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link prefetch={false} href="/badrinath-yatra" style={{ color:'var(--teal)', textDecoration:'none' }}>Badrinath Yatra</Link><span>›</span>
          <span>Weather Guide</span>
        </div>
      </nav>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'32px 20px 60px' }}>

        <AnswerBox>
          <strong>Badrinath sits at 3,133 m — the lowest of the four dhams — and the season runs 23 April to around 13 November 2026, with the exact closing date announced on Vijayadashami.</strong>{' '}
          Daytime temperatures at the temple range from about 7°C in April to 21°C in June; nights run from −6°C in
          November to 11°C in July. The best windows are <strong>May to mid-June</strong> (warmest, busiest) and{' '}
          <strong>mid-September to October</strong> (clearest, far quieter). July and August are peak monsoon and the
          Chamoli–Joshimath road is the one that closes. The Tapt Kund hot spring at the temple holds about 55°C
          year-round.
        </AnswerBox>

        <p style={p}>
          Badrinath is the warmest of the four dhams by a small margin and the one where weather matters least to
          the darshan itself — there is no trek, and the walk from the car park is a few minutes. What weather decides
          here is the road. The 45 km from Joshimath is gate-controlled and closes for snow at either end of the
          season and for slides in the middle of it, and the Chamoli–Joshimath stretch below is the most
          landslide-prone road on the Badrinath side of the circuit.
        </p>
        <p style={p}>
          The other thing the numbers hide is the evening. Pilgrims judge the day from a warm afternoon at Joshimath
          and arrive for the 7 pm aarti at the temple steps, 1,250 m higher and with the wind off the Alaknanda, in
          a shirt. Below is what to expect month by month, split into day and night for that reason, and how much
          the temperature drops between where you slept and where you are standing.
        </p>

        <h2 id="month-by-month" style={h2}>Month-by-month conditions</h2>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:12 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:720 }}>
            <caption className="sr-only">Badrinath monthly day and night temperatures, snow, rain and crowd levels</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Month','Day','Night','Snow','Rain','Crowds','Verdict'].map(x => <th key={x} scope="col" style={th}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {weather.map((w, i) => {
                const v = VERDICT[w.verdict];
                return (
                  <tr key={w.month} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                    <th scope="row" style={{ ...td, fontWeight:700, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{w.month}</th>
                    <td style={td}>{w.day}</td>
                    <td style={td}>{w.night}</td>
                    <td style={td}>{w.snow}</td>
                    <td style={td}>{w.rain}</td>
                    <td style={td}>{w.crowd}</td>
                    <td style={td}><span style={{ background:v.bg, color:v.ink, fontSize:11, fontWeight:700, padding:'3px 9px', borderRadius:100, whiteSpace:'nowrap' }}>{v.mark} {v.label}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{ display:'grid', gap:8, marginBottom:30 }}>
          {weather.map(w => (
            <div key={w.month} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderLeft:`3px solid ${VERDICT[w.verdict].ink}`, borderRadius:'0 10px 10px 0', padding:'11px 15px' }}>
              <span style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>{w.month} — </span>
              <span style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.7 }}>{w.note}</span>
            </div>
          ))}
        </div>

        <h2 id="altitude" style={h2}>How much colder it gets from Joshimath to the temple</h2>
        <p style={p}>
          Joshimath, where nearly every group sleeps, is 1,250 m below Badrinath. That is the gradient people pack
          for badly: they judge the day from a warm morning in Joshimath and arrive at the temple, and then at Mana
          beyond it, underdressed by two layers.
        </p>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:600 }}>
            <caption className="sr-only">Temperature by elevation from Joshimath to Mana village, May and October</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Stop','Elevation','May (night–day)','October (night–day)','What that means'].map(x => <th key={x} scope="col" style={th}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {ladder.map((l, i) => (
                <tr key={l.place} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                  <th scope="row" style={{ ...td, fontWeight:700, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{l.place}</th>
                  <td style={{ ...td, fontFamily:'monospace' }}>{l.alt}</td>
                  <td style={td}>{l.may}</td>
                  <td style={td}>{l.oct}</td>
                  <td style={td}>{l.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>The road, not the temple, is the weather problem</h2>
        <p style={p}>
          Of the four approach roads, the Badrinath one is the longest and has the single worst stretch: Chamoli to
          Joshimath through Helang, 50 km that has been under widening and slide repair for years and is the first
          section to close when it rains. In July and August it shuts repeatedly, sometimes for a day. Above
          Joshimath the gate road to the temple closes for snow in the first week of the season and the last, and
          does not run after dark in any month. Check{' '}
          <Link prefetch={false} href="/char-dham-road-status" style={{ color:'var(--teal)' }}>today&rsquo;s road status</Link>{' '}
          before you leave Rudraprayag, and read the{' '}
          <Link prefetch={false} href="/how-to-reach-badrinath" style={{ color:'var(--teal)' }}>route guide</Link> for
          how the gate system works.
        </p>

        <h2 style={h2}>Tapt Kund — the hot spring at the temple</h2>
        <p style={p}>
          The one warm thing at Badrinath is the water. The Tapt Kund beside the temple steps holds at roughly{' '}
          <strong>55°C</strong> at the source, cooling across the pool to a temperature you can sit in, and the
          custom is to bathe before darshan. In October, when the air at dawn is near freezing, it is the best moment
          of a pilgrim&rsquo;s day. It holds that temperature year-round regardless of the weather outside; in
          November the air can be sixty degrees colder than the water.
        </p>

        <h3 style={h3}>Where these figures come from</h3>
        <p style={{ ...p, fontSize:'0.97em' }}>
          There is no observing station at Badrinath itself. Published temperatures for the shrine are interpolated
          from Joshimath and Chamoli and adjusted for altitude, which is why sites disagree by several degrees for
          the same month. The bands here are what our drivers and guides have recorded on the route over many
          seasons, cross-checked against <OfficialLink k="imd">IMD</OfficialLink> regional data, and are given as ranges rather than single figures for
          that reason.
        </p>

        <h2 style={h2}>What to pack for Badrinath, by month</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10, marginBottom:24 }}>
          {[
            { season:'April & November', icon:'❄️', items:'Thermals top and bottom, heavy fleece, down or padded jacket, woollen cap, gloves, a scarf for the aarti. Ice-grip footwear for the temple steps at dawn.' },
            { season:'May–June', icon:'🌸', items:'Light fleece, windproof jacket, a warm layer for the 7 pm aarti, sunscreen SPF 50+ (the UV at 3,100 m is fierce), sunglasses, a rain shell from mid-June.' },
            { season:'July–August', icon:'🌧️', items:'Full waterproofs, a dry bag for phone and documents, a spare pair of shoes, and a spare day in the itinerary — the road is the risk, not the cold.' },
            { season:'September–October', icon:'🍂', items:'Heavy fleece, warm jacket, thermal inner for October, cap and gloves. The clearest skies of the year, so a camera; and a towel for Tapt Kund.' },
          ].map(s => (
            <div key={s.season} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:10, padding:'14px' }}>
              <div style={{ fontWeight:700, color:'var(--navy)', fontSize:13.5, marginBottom:8 }}>{s.icon} {s.season}</div>
              <p style={{ margin:0, fontSize:13, color:'#475569', lineHeight:1.65 }}>{s.items}</p>
            </div>
          ))}
        </div>

        <h2 id="faq" style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={faqs} />

        <CiteThis verified={VERIFIED} sources="Shiv Ganga Travels route records (multi-season), IMD regional data, Uttarakhand Tourism" />

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Planning a Badrinath Yatra in {SITE.season}?</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>Get a package quote for your dates — we&rsquo;ll tell you exactly what weather to expect and which halt to sleep at.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Badrinath Yatra. Please share packages.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link prefetch={false} href="/badrinath-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>Badrinath yatra package →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['How to Reach Badrinath','/how-to-reach-badrinath'],['Badrinath Temple','/badrinath-temple'],['Gangotri Weather','/gangotri-weather'],['Yamunotri Weather','/yamunotri-weather'],['All four shrines compared','/blog/uttarakhand-weather-guide'],['Best Time to Visit','/blog/best-time-char-dham']].map(([l,h]) => (
              <Link prefetch={false} key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
