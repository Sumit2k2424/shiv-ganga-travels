import Link from 'next/link';
import { SITE } from '@/data/packages';
import AnswerBox from '@/components/AnswerBox';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from "@/lib/prose";

const PAGE = '/yamunotri-weather';
const VERIFIED = 'August 22, 2026';
const VERIFIED_ISO = '2026-08-22';

/* NOTE ON DATED COPY
   This page used to open with a "Yamunotri temperature right now (July)" box
   whose month was hard-coded. It was written in July and was still claiming to
   be "right now" in late August. A static page cannot say "right now" — so the
   framing is month-by-month throughout, and the one dated claim on the page is
   an explicit "last verified" stamp that is obviously a stamp.

   Sibling pages carrying live season data are listed in the content-freshness
   set; this is one of them. See /kedarnath-weather for the same treatment. */

/* Day/night split, because at Yamunotri the complaint is always the night and
   the trek start, not the afternoon at the temple. */
const weather = [
  { month:'April',     day:'6°C to 12°C',  night:'−2°C to 2°C', snow:'Lying snow on the upper trek', rain:'Low',                  crowd:'Light',       verdict:'caution', note:'Temple opens 19 April. The trek is cold and can still hold packed snow in the last 2km; the hot spring is the best thing about arriving.' },
  { month:'May',       day:'13°C to 18°C', night:'4°C to 8°C',  snow:'Melting out',                  rain:'Low to medium',        crowd:'Very heavy',  verdict:'best',    note:'The classic window. Rhododendrons in flower along the lower trek and the path fully open. Also the busiest — the pony queue at Janki Chatti can take an hour on itself.' },
  { month:'June',      day:'16°C to 22°C', night:'8°C to 12°C', snow:'None',                         rain:'Medium, rising late',  crowd:'Very heavy',  verdict:'best',    note:'Warmest and easiest walking. The monsoon usually arrives in the last week, and the risk profile changes sharply once it does.' },
  { month:'July',      day:'14°C to 20°C', night:'9°C to 13°C', snow:'None',                         rain:'Heavy — peak monsoon', crowd:'Light',       verdict:'avoid',   note:'The Yamunotri route is the most landslide-prone of the four. The Barkot–Janki Chatti road closes repeatedly and the trek turns to running water.' },
  { month:'August',    day:'13°C to 19°C', night:'9°C to 12°C', snow:'None',                         rain:'Heavy — peak monsoon', crowd:'Light',       verdict:'avoid',   note:'Wettest stretch of the season and the highest landslide risk month on this sector. Build spare days in if your dates are fixed.' },
  { month:'September', day:'12°C to 17°C', night:'6°C to 9°C',  snow:'None',                         rain:'Light to medium',      crowd:'Moderate',    verdict:'best',    note:'Monsoon withdraws through the first fortnight. From mid-month the trek is dry, the air is clear and the crowds have gone home.' },
  { month:'October',   day:'8°C to 12°C',  night:'0°C to 4°C',  snow:'Upper peaks only',             rain:'Very low',             crowd:'Moderate',    verdict:'best',    note:'Autumn colour along the Yamuna and the clearest views of the season. Nights reach freezing, so this is a thermals month.' },
  { month:'November',  day:'2°C to 5°C',   night:'−7°C to −3°C',snow:'Heavy',                        rain:'Very low',             crowd:'Light',       verdict:'caution', note:'Temple closes 11 November on Bhai Dooj, after which the deity moves to Kharsali for the winter. The final week is severe and the trek can snow in without warning.' },
];

const VERDICT = {
  best:    { label:'Good time to go', bg:'#dcfce7', ink:'#15803d', mark:'✅' },
  caution: { label:'Go prepared',     bg:'#fef3c7', ink:'#92400e', mark:'⚠️' },
  avoid:   { label:'Not advised',     bg:'#fee2e2', ink:'#991b1b', mark:'⛔' },
};

/* The gradient that actually matters here: Janki Chatti to the temple is only
   6km but climbs 641m, and almost every "how cold will it be" question is
   really about that stretch. */
const ladder = [
  { place:'Barkot',       alt:'1,220m', may:'12°C to 26°C', oct:'6°C to 20°C', note:'Usual overnight halt. Warm enough to sleep without heating.' },
  { place:'Janki Chatti', alt:'2,650m', may:'6°C to 19°C',  oct:'1°C to 13°C', note:'Road ends, trek starts. Cold at the 6am start even in June.' },
  { place:'Yamunotri',    alt:'3,291m', may:'4°C to 18°C',  oct:'0°C to 12°C', note:'641m above the road head. Surya Kund is the only warm thing up here.' },
];

const faqs = [
  { q:'What is the best month to visit Yamunotri?', a:'Late September and October for clear views and light crowds, or May and early June if you want the warmest weather. Both windows work. September–October is the better choice for anyone who dislikes queueing, because the pony and doli waits at Janki Chatti in May and June can run to an hour before you even start walking.' },
  { q:'How cold does Yamunotri get?', a:'Daytime at the temple runs from about 6°C in April to 22°C in June. Nights are the part people underestimate: −2°C in April, 4–8°C in May, and back down to freezing in October and −7°C in November. Janki Chatti, where the trek starts, is around 5°C colder than Barkot where you slept.' },
  { q:'Can you visit Yamunotri during the monsoon?', a:'You can, but of the four dhams this is the sector we most strongly advise against in July and August. The Barkot to Janki Chatti road is the most landslide-prone stretch on the whole circuit, and the 6km trek becomes a watercourse. The temple stays open; the problem is reaching it and getting back on schedule.' },
  { q:'How hot is the Surya Kund hot spring at Yamunotri?', a:'About 88°C — hot enough to cook with, which is exactly what pilgrims do. Rice or potatoes are tied in a cloth bag, dipped in the kund for a few minutes, offered to the deity and then carried home as prasad. It holds that temperature year-round regardless of the air temperature outside, which in November can be 90 degrees colder.' },
  { q:'How long does the Yamunotri trek take?', a:'Two and a half to three hours up for a moderately fit walker in dry conditions, and around two hours down. In rain the same 6km stretches past four hours, because the path is rock and it gets slick. Ponies and dolis are available both ways from Janki Chatti; in May and June book them the evening before rather than turning up and joining the queue.' },
  { q:'What should I wear for Yamunotri?', a:'Layers, and waterproof footwear with real grip in every month. You will start the trek at Janki Chatti in the cold before dawn, warm up considerably on the climb, and then stand still in the wind at the temple while you wait for darshan — which is when people get cold. Carry a windproof shell you can put on at the top even in June, and add thermals for April, October and November.' },
];

function Schema() {
  const article = {
    '@context':'https://schema.org','@type':'Article',
    headline:`Yamunotri Weather ${SITE.season}: Month-by-Month Temperature Guide`,
    description:'Month-by-month day and night temperatures, snow, rainfall and crowd levels for Yamunotri at 3,291m, with temperature along the Janki Chatti trek.',
    image:`${SITE.baseUrl}/opengraph-image`,
    datePublished:'2026-02-18', dateModified:VERIFIED_ISO,
    author:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, '@id':`${SITE.baseUrl}/#organization` },
    publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, logo:{ '@type':'ImageObject', url:`${SITE.baseUrl}/logo.png` } },
    mainEntityOfPage:`${SITE.baseUrl}${PAGE}`,
    about:{ '@type':'Place', name:'Yamunotri Temple', geo:{ '@type':'GeoCoordinates', latitude:31.0139, longitude:78.4600, elevation:'3291' } },
    speakable:{ '@type':'SpeakableSpecification', cssSelector:['.speakable-answer'] },
  };
  const dataset = {
    '@context':'https://schema.org','@type':'Dataset',
    name:`Yamunotri monthly temperature and conditions, ${SITE.season} season`,
    description:'Month-by-month daytime and night-time temperature bands, snow, rainfall and crowd levels for Yamunotri (3,291m), plus temperature by elevation from Barkot to the temple.',
    url:`${SITE.baseUrl}${PAGE}`,
    license:'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree:true, dateModified:VERIFIED_ISO,
    creator:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, '@id':`${SITE.baseUrl}/#organization` },
    variableMeasured:['Daytime temperature','Night-time temperature','Snowfall','Rainfall','Crowd level','Elevation'],
    spatialCoverage:{ '@type':'Place', name:'Yamunotri, Uttarkashi district, Uttarakhand, India', geo:{ '@type':'GeoCoordinates', latitude:31.0139, longitude:78.4600 } },
    temporalCoverage:'2026-04-19/2026-11-11',
  };
  const faqSchema = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: faqs.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
  };
  const breadcrumb = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Yamunotri Yatra', item:`${SITE.baseUrl}/yamunotri-yatra` },
      { '@type':'ListItem', position:3, name:'Weather Guide', item:`${SITE.baseUrl}${PAGE}` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  </>);
}

const th = { padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' };
const td = { padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5, verticalAlign:'top' };

export const metadata = {
  title: { absolute: `Yamunotri Weather ${SITE.season} | Month-wise Temperature Guide` },
  description: `Yamunotri weather month by month at 3,291m — what to pack each season, from fleece and rain ponchos to thermals and gloves. Best windows and monsoon risk.`,
  keywords: ['yamunotri weather','yamunotri temperature','yamunotri weather in may','yamunotri best time to visit',`yamunotri weather ${SITE.season}`,'yamunotri trek weather'],
  alternates: { canonical: `${SITE.baseUrl}/yamunotri-weather` },
  openGraph: {
    title: `Yamunotri Weather ${SITE.season} — Month-wise Temperature Guide`,
    description: 'Month-by-month Yamunotri weather guide. Best time to visit, what to pack, temperature ranges.',
    url: `${SITE.baseUrl}/yamunotri-weather`, type: 'article',
  
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Yamunotri Weather ${SITE.season} — Month-wise Temperature Guide | Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Yamunotri Weather ${SITE.season} — Month-wise Temperature Guide`,
    description: 'Month-by-month Yamunotri weather guide. Best time to visit, what to pack, temperature ranges.',
    images: [{ url: '/opengraph-image', alt: `Yamunotri Weather ${SITE.season} — Month-wise Temperature Guide | Shiv Ganga Travels` }],
  },
};



export default function YamunotriWeather() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🌤️ Weather Guide · 3,291m</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Yamunotri Weather 2026 — Month-wise Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Temperature, snowfall, rainfall and the best visiting windows for each month
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/yamunotri-yatra" style={{ color:'var(--teal)', textDecoration:'none' }}>Yamunotri Yatra</Link><span>›</span>
          <span>Weather Guide</span>
        </div>
      </nav>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'32px 20px 60px' }}>

        <AnswerBox>
          <strong>Yamunotri sits at 3,291m and the season runs 19 April to 11 November 2026.</strong> Daytime
          temperatures at the temple range from about 6°C in April to 22°C in June; nights run from −7°C in
          November to 13°C in July. The best windows are <strong>May to mid-June</strong> (warmest, busiest)
          and <strong>mid-September to October</strong> (clear, far quieter). July and August are peak monsoon
          and this is the most landslide-prone of the four routes. The Surya Kund hot spring at the temple
          holds about 88°C year-round.
        </AnswerBox>

        <p style={p}>
          Yamunotri, the westernmost shrine of the Char Dham circuit and the source of the Yamuna River, sits at 3,291 metres in the Uttarkashi district of Uttarakhand. The final stretch of the pilgrimage involves a 6km trek from Janki Chatti — and weather plays a huge role in how comfortable (or challenging) that trek is. Rain, snow, or sudden cloud cover can make the rocky mountain trail slippery and exhausting. Knowing what to expect each month is the difference between a comfortable darshan and a stressful one.
        </p>

        <p style={p}>
          At 3,291m Yamunotri stays 15–20 degrees colder than Haridwar in every month of the season, and the
          part that catches people out is not the temple — it is the 6km trek from Janki Chatti, which starts
          before dawn at the coldest point of the day and climbs 641m. Below is what to expect month by
          month, and how much the temperature drops between where you slept and where you are standing.
        </p>

        <h2 id="month-by-month" style={h2}>Month-by-month conditions</h2>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:12 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:720 }}>
            <caption className="sr-only">Yamunotri monthly day and night temperatures, snow, rain and crowd levels</caption>
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

        <h2 id="altitude" style={h2}>How much colder it gets on the trek</h2>
        <p style={p}>
          Janki Chatti is 1,430m above Barkot, where most groups spend the night, and the temple is another
          641m above that. That is the gradient people pack for badly: they judge the day from how it felt at
          breakfast in Barkot and arrive at the road head underdressed for a 6am start.
        </p>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:600 }}>
            <caption className="sr-only">Temperature by elevation from Barkot to Yamunotri temple, May and October</caption>
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

        <h2 style={h2}>The Janki Chatti to Yamunotri Trek — Weather Impact</h2>
        <p style={p}>
          The 6km mountain trek from Janki Chatti to the Yamunotri temple is the part of the pilgrimage most affected by weather. The path climbs from roughly 2,650m to 3,291m through dense forests and rocky terrain alongside the Yamuna River. In dry weather, most moderately fit pilgrims complete it in 2.5–3 hours. In rain, the same trail becomes slippery and the time stretches to 4+ hours. Ponies and dolis are available year-round but advance bookings are recommended in peak season.
        </p>

        <h2 style={h2}>Surya Kund — the natural hot spring</h2>
        <p style={p}>
          The most unusual weather fact about Yamunotri is that the coldest shrine on the circuit contains the
          hottest water. The Surya Kund at the temple complex holds at roughly <strong>88°C</strong> year-round,
          independent of the air temperature — which in November is close to 90 degrees colder. Pilgrims tie
          rice or potatoes in a cloth bag, dip it in the kund for a few minutes, offer the cooked food to the
          deity and carry it home as prasad.
        </p>
        <p style={p}>
          Published figures for the kund vary between about 88°C and boiling, partly because the water is
          hottest at the source and cools across the pool. We publish 88°C because that is the figure the
          state tourism material uses and it matches what a thermometer reads at the drawing point. Practical
          consequence: it will scald. Use the cloth bag and the stick, not your hand, and keep children back
          from the edge.
        </p>

        <h3 style={h3}>Where these figures come from</h3>
        <p style={{ ...p, fontSize:'0.97em' }}>
          There is no observing station at Yamunotri itself. Published temperatures for the shrine are
          interpolated from Barkot and Uttarkashi and adjusted for altitude, which is why sites disagree by
          several degrees for the same month. The bands here are what our drivers and guides have recorded on
          the route since {SITE.established}, cross-checked against IMD regional data, and are given as ranges
          rather than single figures for that reason.
        </p>

        <h2 style={h2}>What to Pack for Yamunotri (Weather-based)</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10, marginBottom:24 }}>
          {[
            { season:'May–June', icon:'🌸', items:'Light fleece, windproof jacket, rain poncho, layering base, trekking shoes, sunscreen SPF 50+' },
            { season:'September–October', icon:'🍂', items:'Heavy fleece, warm jacket, thermal inner, woollen cap, gloves, trekking poles for rocky path' },
            { season:'July–August', icon:'🌧️', items:'Full waterproof rain suit, waterproof backpack cover, dry bag for phone/documents, extra pair of shoes' },
          ].map(s => (
            <div key={s.season} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:10, padding:'14px' }}>
              <div style={{ fontWeight:700, color:'var(--navy)', fontSize:13.5, marginBottom:8 }}>{s.icon} {s.season}</div>
              <p style={{ margin:0, fontSize:13, color:'#475569', lineHeight:1.65 }}>{s.items}</p>
            </div>
          ))}
        </div>

        <h2 id="faq" style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ marginTop:30, borderTop:'1px solid hsl(var(--border))', paddingTop:18, fontSize:12.5, color:'var(--text-muted)', lineHeight:1.8 }}>
          <strong>Last verified:</strong> {VERIFIED} · <strong>Season:</strong> 19 April – 11 November 2026 ·{' '}
          <strong>Sources:</strong> Shiv Ganga Travels route records ({SITE.established}–{SITE.season}), IMD
          regional data, Uttarakhand Tourism. Published under{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/" rel="nofollow noopener" target="_blank" style={{ color:'var(--teal)' }}>CC BY 4.0</a> — free to cite with attribution.
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Planning a Yamunotri Yatra in 2026?</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>Get a free package quote for your dates — we'll tell you exactly what weather to expect.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Yamunotri Yatra 2026. Please share packages.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/yamunotri-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>View Yamunotri Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Gangotri Weather','/gangotri-weather'],['Kedarnath Weather','/kedarnath-weather'],['Best Time to Visit','/blog/best-time-char-dham'],['Packing List','/blog/char-dham-yatra-packing-list'],['Yamunotri Yatra','/yamunotri-yatra']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
