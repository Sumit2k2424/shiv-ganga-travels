import Link from 'next/link';
import { SITE } from '@/data/packages';
import Breadcrumb from '@/components/Breadcrumb';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import BlogCTA from '@/components/BlogCTA';
import FAQAccordion from '@/components/FAQAccordion';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import SightseeingLinkMesh from '@/components/SightseeingLinkMesh';
import { h2, h3, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Places to Visit in Gangotri ${SITE.season} — Gaumukh & Harsil` },
  description: 'What to see at Gangotri beyond the temple — the submerged Shivling in the riverbed, Bhagirath Shila, the 18 km Gaumukh trail and Harsil valley 25 km back down.',
  keywords: ['places to visit in gangotri','gangotri sightseeing','gangotri tourist places','things to do in gangotri','gaumukh trek gangotri','harsil valley','submerged shivling gangotri','gangotri nearby places'],
  alternates: { canonical: `${SITE.baseUrl}/gangotri-sightseeing-places` },
  openGraph: {
    title: `Places to Visit in Gangotri ${SITE.season} — Gaumukh, Harsil & the Submerged Shivling`,
    description: 'Bhagirath Shila, the Shivling that only shows in low water, Pandav Gufa, the 18 km walk to Gaumukh and Harsil valley on the way back. Distances, permits and how long each takes.',
    url: `${SITE.baseUrl}/gangotri-sightseeing-places`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Places to Visit in Gangotri ${SITE.season} | Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Places to Visit in Gangotri ${SITE.season}`,
    description: 'The submerged Shivling, Bhagirath Shila, Gaumukh at 18 km and Harsil valley — what is actually worth stopping for around Gangotri.',
    images: [{ url: '/opengraph-image', alt: `Places to Visit in Gangotri | ${SITE.name}` }],
  },
};

const SIGHTS = [
  {
    name: 'Gangotri Temple',
    dist: 'The town centre',
    time: '1 hr',
    href: '/gangotri-temple',
    what: 'The white granite shrine at 3,415 m, rebuilt by the Gorkha commander Amar Singh Thapa in the early 1800s. Darshan here is unhurried compared with Kedarnath — there is rarely a queue worth the name.',
  },
  {
    name: 'Submerged Shivling',
    dist: 'In the riverbed',
    time: '15 min',
    href: null,
    what: 'A natural rock Shivling in the Bhagirathi below the temple, held to be where Shiva received the descending Ganga in his hair. It is under water most of the season and only shows when the flow drops in early winter, so treat a sighting as luck rather than an itinerary item.',
  },
  {
    name: 'Bhagirath Shila',
    dist: 'Beside the temple',
    time: '15 min',
    href: null,
    what: 'The slab where King Bhagirath is said to have done the penance that brought the Ganga down. Pilgrims sit here for a few minutes before or after darshan; it needs no planning.',
  },
  {
    name: 'Surya Kund',
    dist: '200 m below the temple',
    time: '20 min',
    href: null,
    what: 'The gorge where the Bhagirathi drops through a narrow rock channel. The noise is the point. There is a viewing spot and a small bridge, and it is the best photograph in the town.',
  },
  {
    name: 'Pandav Gufa',
    dist: '1.5 km on foot',
    time: '1–2 hrs return',
    href: null,
    what: 'A cave on the trail out of town where the Pandavas are said to have meditated on their way to the mountains. A short, gentle walk that most pilgrims never make, which is largely the appeal.',
  },
  {
    name: 'Gaumukh',
    dist: '18 km on foot',
    time: '2 days',
    href: '/gaumukh',
    what: 'The snout of the Gangotri glacier and the actual source of the Bhagirathi. This is a permitted trek with a daily cap on numbers, not a day trip — plan an overnight at Bhojbasa and apply for the permit in advance.',
  },
  {
    name: 'Kedar Tal',
    dist: '18 km on foot',
    time: '3 days',
    href: null,
    what: 'A glacial lake below Thalay Sagar, reached by a steep and genuinely hard trail out of Gangotri. Experienced trekkers with a guide only. It has nothing in common with the Gaumukh walk except the distance.',
  },
  {
    name: 'Harsil & Dharali',
    dist: '25 km back down',
    time: 'Half a day',
    href: '/harsil-valley',
    what: 'Apple orchards and deodar on the Bhagirathi at 2,620 m, about forty-five minutes below Gangotri. A flash flood tore through Dharali in August 2025, destroying much of the village and striking the army camp at Harsil, and the valley has been rebuilt over the year since — roads and services are restored and the orchards are bearing again. Almost every pilgrim drives through twice and stops neither time.',
  },
  {
    name: 'Mukhba',
    dist: '25 km back down',
    time: '1 hr',
    href: '/mukhba-gangotri-winter-seat',
    what: 'The village near Harsil that holds the Ganga idol through winter, once the Gangotri portals close in November. Worth pairing with Harsil on the same stop.',
  },
];

const FAQS = [
  { q: 'How many days do you need at Gangotri?',
    a: 'One night is enough for the temple, Surya Kund, Bhagirath Shila and a stop at Harsil on the way out. Gaumukh changes that completely — it needs a permit, two days and an overnight at Bhojbasa, so budget three nights on this arm if the glacier is the reason you came.' },
  { q: 'Can you see the submerged Shivling at Gangotri?',
    a: 'Only when the Bhagirathi runs low, which generally means early winter as the season closes. Through May and June, and all through the monsoon, it is under water. Anyone promising you a sighting in peak season is guessing.' },
  { q: 'Do you need a permit for the Gaumukh trek?',
    a: 'Yes. Gaumukh sits inside the Gangotri National Park and entry is capped at 150 trekkers a day, issued through the forest office at Gangotri or online in advance. Peak-season dates go early, so do not arrive expecting to walk in the same morning.' },
  { q: 'Is Harsil worth stopping at?',
    a: 'Yes, and it is the most-skipped stop on the whole Char Dham circuit. It is 25 km below Gangotri on the road you are already driving, so it costs you no detour — only the decision to stop. Apple season in September and October is the best of it. Worth knowing before you go: the August 2025 flash flood destroyed a large part of neighbouring Dharali and the highway was breached in several places. Reconstruction has run through the year since, the Gangotri highway is open and the valley is receiving visitors again, but do not expect it to look the way older photographs show it.' },
  { q: 'What is the altitude of Gangotri?',
    a: 'The temple stands at about 3,415 m. That is high enough that pilgrims arriving the same day from Uttarkashi at 1,158 m sometimes feel it, so take the first evening slowly rather than walking straight up to Pandav Gufa.' },
  { q: 'How far is Gangotri from Uttarkashi?',
    a: 'About 100 km, taking three to four hours on a road that narrows steadily after Harsil. Most itineraries overnight at Uttarkashi or Harsil rather than driving Gangotri in a single push from Barkot.' },
];

const PAA = [
  { q: 'What is famous in Gangotri?', a: 'The Gangotri temple at 3,415 m, the submerged Shivling in the riverbed below it, Bhagirath Shila where the penance is said to have happened, and Gaumukh — the glacier snout 18 km upstream that is the Bhagirathi’s true source.' },
  { q: 'How far is Gaumukh from Gangotri?', a: 'Eighteen kilometres on foot, with no road. Most trekkers break the walk at Bhojbasa at 14 km and finish the last stretch the next morning. A permit is required and daily numbers are capped.' },
  { q: 'Is Gangotri temple open in winter?', a: 'No. The portals close around 10 November and the Ganga idol moves down to Mukhba near Harsil for the winter. Gangotri itself is snowbound until the temple reopens in late April.' },
  { q: 'What can you see between Uttarkashi and Gangotri?', a: 'Harsil and Dharali at 2,620 m are the main stop, with apple orchards and deodar forest. Gartang Gali, the restored cliff-face timber staircase on the old Tibet trade route, sits beyond Harsil and needs a permit.' },
  { q: 'Is Gangotri suitable for elderly pilgrims?', a: 'Yes — more so than Kedarnath or Yamunotri, because the temple is a short walk from where vehicles park and there is no trek involved. The altitude is the only real consideration, so build in a night at Uttarkashi or Harsil rather than climbing in one day.' },
];

function Schema() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Places to Visit in Gangotri ${SITE.season}`,
    itemListElement: SIGHTS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristAttraction',
        name: s.name,
        description: s.what,
        address: { '@type': 'PostalAddress', addressLocality: 'Gangotri', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
      },
    })),
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

export default function GangotriSightseeingPlaces() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Gangotri · Sightseeing Guide</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Places to Visit in Gangotri
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto' }}>
            Submerged Shivling · Bhagirath Shila · Surya Kund · Gaumukh · Harsil & Mukhba
          </p>
        </div>
      </section>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'20px 20px 60px' }}>
        <Breadcrumb items={[{ label:'Gangotri', href:'/gangotri-yatra' }, { label:'Places to Visit' }]} />

        <BlogAuthor variant="top" author="dhanesh" />

        <AnswerBox>
          Gangotri is the easiest of the four dhams to see, because the temple is a short walk from
          where the vehicle stops and there is no trek to reach it. Beyond darshan, the sights are
          the submerged Shivling in the riverbed, Bhagirath Shila, the Surya Kund gorge, and — for
          anyone willing to walk — Gaumukh, 18 km upstream at the glacier snout. Harsil, 25 km back
          down the road, is the stop most pilgrims drive past twice.
        </AnswerBox>

        <p style={p}>
          Gangotri gets less time than it deserves on most itineraries. It is usually slotted as a
          morning darshan between two long drives, which is a pity, because it is the one dham where
          an unhurried afternoon is actually possible. Nothing here involves a queue or a climb.
        </p>

        <h2 style={h2}>What to see, and how long each takes</h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:640 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Place','Distance','Time needed','What it is'].map(hd => (
                  <th key={hd} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{hd}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SIGHTS.map((s, i) => (
                <tr key={s.name} style={{ borderBottom:'1px solid hsl(var(--border))', background: i % 2 ? 'var(--bg)' : '#fff', verticalAlign:'top' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5, whiteSpace:'nowrap' }}>
                    {s.href ? <Link href={s.href} style={{ color:'var(--navy)' }}>{s.name}</Link> : s.name}
                  </td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12, whiteSpace:'nowrap' }}>{s.dist}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12, whiteSpace:'nowrap' }}>{s.time}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5, lineHeight:1.65, minWidth:280 }}>{s.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <BlogCTA variant="inline" intent="info" />

        <h2 style={h2}>Gaumukh is a trek, not a viewpoint</h2>
        <p style={p}>
          This is the one thing on the list people consistently underestimate. Gaumukh is eighteen
          kilometres from the temple with no road, inside the Gangotri National Park, and entry is
          capped at 150 trekkers a day on a permit issued from the forest office. Almost nobody
          does it as a single push — the sensible shape is Gangotri to Bhojbasa at 14 km on day one,
          the glacier and back the next morning.
        </p>
        <p style={p}>
          If you have one spare day rather than two, walk an hour up the trail towards Chirbasa and
          turn around. The valley opens out early and you get most of the view without committing
          to the permit and the overnight.
        </p>

        <h3 style={h3}>The stop everyone misses</h3>
        <p style={p}>
          Harsil sits at 2,620 m on the Bhagirathi, twenty-five kilometres and about forty-five
          minutes below Gangotri, which means it is on the road you are already driving. Apple
          orchards, deodar, and the river running clear through the middle of it. Mukhba, the
          village that holds the Ganga idol through the winter, is a few minutes further. Between
          them they make the best half-day on this arm of the circuit and cost no detour at all.
        </p>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', margin:'24px 0' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>What we tell our own groups</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.75 }}>
            When a group wants a slower Char Dham, this is where we add the night. Harsil instead of
            a second night at Uttarkashi costs the same and turns the Gangotri leg from a drive-in,
            drive-out into an actual day. The trade-off is a longer run to Yamunotri afterwards, so
            we only suggest it to groups that are not also trying to fit Kedarnath into ten days.
          </div>
        </div>

        <h2 style={h2}>Nearby, on the way in or out</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:10, marginBottom:24 }}>
          {[
            ['/gangotri-temple', 'Gangotri Temple', 'Darshan timings, aarti and the opening date'],
            ['/gaumukh', 'Gaumukh', 'The 18 km glacier trek and its permit rules'],
            ['/harsil-valley', 'Harsil Valley', 'Apple orchards and Gartang Gali, 25 km below'],
            ['/mukhba-gangotri-winter-seat', 'Mukhba', 'Where the Ganga idol winters after November'],
            ['/uttarkashi-hotels', 'Uttarkashi', 'The main base town, 100 km down the valley'],
            ['/how-to-reach-gangotri', 'How to reach Gangotri', 'Road route, drive times and the nearest railhead'],
          ].map(([href, title, sub]) => (
            <Link key={href} href={href} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:10, padding:'12px 14px', textDecoration:'none', display:'block' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>{title} →</div>
              <div style={{ fontSize:12.5, color:'#64748b', lineHeight:1.6 }}>{sub}</div>
            </Link>
          ))}
        </div>

        <h2 style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={FAQS} />

        <div style={{ marginTop:36 }}>
          <PeopleAlsoAsk items={PAA} />
        </div>

        <BlogAuthor variant="bottom" author="dhanesh" />
        <BlogCTA variant="footer" intent="booking" />

        <nav aria-label="Related Gangotri pages" style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:36 }}>
          <p style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', margin:'0 0 10px' }}>More on Gangotri</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {[
              ['/gangotri-yatra', 'Gangotri Yatra package'],
              ['/gangotri-weather', 'Gangotri weather'],
              ['/gangotri-history-legends', 'History & legends'],
              ['/gangotri-festivals', 'Festivals & dates'],
              ['/gangotri-dharamshala', 'Dharamshalas'],
              ['/haridwar-to-gangotri-distance', 'Haridwar to Gangotri'],
              ['/gangotri-to-yamunotri-distance', 'Gangotri to Yamunotri'],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ background:'#fff', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{label} →</Link>
            ))}
          </div>
        </nav>
        <SightseeingLinkMesh current="gangotri" />
      </article>
    </>
  );
}
