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
  title: { absolute: `Places to Visit in Chopta ${SITE.season} — Deoria Tal, Ukhimath & Makkumath` },
  description: 'What to see around Chopta besides the Tungnath climb — Deoria Tal above Sari village, the musk deer sanctuary, Ukhimath where Kedarnath winters, and Makkumath.',
  keywords: ['places to visit in chopta','chopta sightseeing','things to do in chopta','deoria tal','sari village chopta','ukhimath omkareshwar temple','makkumath','kanchula korak musk deer sanctuary'],
  alternates: { canonical: `${SITE.baseUrl}/chopta-sightseeing-places` },
  openGraph: {
    title: `Places to Visit in Chopta ${SITE.season} — Deoria Tal, Ukhimath & Makkumath`,
    description: 'Chopta is more than the Tungnath trek. Deoria Tal above Sari, the Kanchula Korak musk deer sanctuary, Ukhimath where Kedarnath spends the winter, and the meadows at Baniyakund and Dugalbitta.',
    url: `${SITE.baseUrl}/chopta-sightseeing-places`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Places to Visit in Chopta ${SITE.season} | Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Places to Visit in Chopta ${SITE.season}`,
    description: 'Deoria Tal, Ukhimath, Makkumath and the meadows around Chopta — what to see beyond the Tungnath climb.',
    images: [{ url: '/opengraph-image', alt: `Places to Visit in Chopta | ${SITE.name}` }],
  },
};

const SIGHTS = [
  {
    name: 'Deoria Tal',
    dist: '2.5–3 km walk from Sari',
    time: 'Half a day',
    href: null,
    what: 'A lake at about 2,438 m that holds the reflection of the Chaukhamba range on a still morning. The walk up from Sari village is short and steep. Camping beside it is permitted and it is the single best sunrise in this area.',
  },
  {
    name: 'Sari Village',
    dist: '~20 km from Chopta',
    time: 'Trailhead',
    href: null,
    what: 'Where the Deoria Tal path starts. A small Garhwali village with a few homestays, useful if you want to be at the lake for first light rather than driving out from Chopta in the dark.',
  },
  {
    name: 'Kanchula Korak Musk Deer Sanctuary',
    dist: 'On the Chopta road',
    time: '1 hr',
    href: null,
    what: 'A small protected patch of rhododendron and oak on the road below Chopta, set up for musk deer conservation. Sightings are genuinely rare — go for the forest rather than the animal.',
  },
  {
    name: 'Baniyakund & Dugalbitta',
    dist: '3–7 km',
    time: '1–2 hrs',
    href: null,
    what: 'The meadow stretches just below Chopta where most of the camps actually sit. Chopta itself is only a handful of buildings on a bend, so this is where people end up sleeping.',
  },
  {
    name: 'Ukhimath (Omkareshwar Temple)',
    dist: '~13 km',
    time: 'Half a day',
    href: '/ukhimath',
    what: 'At 1,311 m, this is where Kedarnath spends the winter — the deity is brought down here when the portals close in November. Also the winter seat of Madhyamaheshwar. A far more significant stop than its size suggests.',
  },
  {
    name: 'Makkumath',
    dist: '~10 km',
    time: '1–2 hrs',
    href: null,
    what: 'The winter seat of Tungnath, in a village off the Ukhimath road. When the Tungnath temple closes for the season, worship moves here. Almost nobody visits, which is much of its appeal.',
  },
  {
    name: 'Tungnath & Chandrashila',
    dist: '3.5 km and 5 km up',
    time: 'Full day',
    href: '/chopta-tungnath',
    what: 'The highest Shiva temple at 3,680 m, with the Chandrashila summit at 4,000 m another 1.5 km above it. This is the reason most people come to Chopta and it has a guide of its own.',
  },
  {
    name: 'Rohini Bugyal',
    dist: 'Short walk from Chopta',
    time: '2 hrs',
    href: null,
    what: 'A quiet meadow on the far side of the road from the Tungnath trail. Worth an hour if the weather has closed in on the summit and the main climb is off.',
  },
];

const FAQS = [
  { q: 'Is Chopta worth visiting apart from the Tungnath trek?',
    a: 'Yes, though most people never find that out. Deoria Tal is a genuinely good half-day on its own, Ukhimath 13 km away is where Kedarnath winters, and the meadows around Baniyakund and Dugalbitta are the reason the area is called the mini Switzerland of Uttarakhand. Two nights lets you do all of it without rushing the summit.' },
  { q: 'How do you get to Deoria Tal from Chopta?',
    a: 'Drive about 20 km to Sari village, then walk 2.5 to 3 km uphill. The path is short but steep and takes most people an hour to an hour and a half. If you want the Chaukhamba reflection at sunrise, sleep at Sari or camp by the lake rather than trying to drive out from Chopta before dawn.' },
  { q: 'What is the difference between Ukhimath and Kedarnath?',
    a: 'Ukhimath at 1,311 m is the winter seat. When the Kedarnath portals close in November the deity is carried down and worshipped at the Omkareshwar temple in Ukhimath until the shrine reopens in late April. Kedarnath itself is at 3,583 m and closed through those months.' },
  { q: 'When is the best time to visit Chopta?',
    a: 'April to June for rhododendrons and clear meadows, and September to November for the cleanest Himalayan views. December to March brings snow, which is beautiful and makes the Tungnath trail a proper winter walk needing gear. July and August are monsoon and best avoided on these roads.' },
  { q: 'Where do you actually stay in Chopta?',
    a: 'Chopta is a handful of buildings on a road bend, not a town. Most accommodation is camps and small lodges at Baniyakund and Dugalbitta a few kilometres below, or homestays at Sari if Deoria Tal is your priority. Ukhimath has the most conventional rooms.' },
  { q: 'Can Chopta be combined with a Char Dham trip?',
    a: 'Yes, and it fits neatly. Pilgrims who have finished Kedarnath and are heading for Badrinath can detour via Ukhimath, sleep at Chopta, walk to Tungnath the next morning and rejoin the highway afterwards. It adds a day and a half to a standard circuit.' },
];

const PAA = [
  { q: 'What is famous in Chopta?', a: 'Tungnath, the highest Shiva temple at 3,680 m, and the Chandrashila summit above it. Beyond the trek, Deoria Tal, the meadows at Baniyakund and Dugalbitta, and Ukhimath where Kedarnath spends the winter.' },
  { q: 'How far is Deoria Tal from Chopta?', a: 'About 20 km by road to Sari village, then a 2.5 to 3 km uphill walk of an hour or so to the lake.' },
  { q: 'Why is Chopta called mini Switzerland?', a: 'For the open high-altitude meadows — bugyals — that run either side of the road between Dugalbitta and Chopta at around 2,680 m, backed by the Chaukhamba and Kedarnath peaks.' },
  { q: 'How far is Chopta from Haridwar?', a: 'About 235 km via Rishikesh, Devprayag, Rudraprayag and Ukhimath, taking seven to eight hours. The final 13 km from Ukhimath is a narrow mountain road.' },
  { q: 'Is there snow in Chopta?', a: 'Yes, from around December through March, and the Tungnath trail becomes a snow walk needing proper footwear. Roads can close after heavy falls, so check conditions before setting out in mid-winter.' },
];

function Schema() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Places to Visit in Chopta ${SITE.season}`,
    itemListElement: SIGHTS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristAttraction',
        name: s.name,
        description: s.what,
        address: { '@type': 'PostalAddress', addressLocality: 'Chopta', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
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

export default function ChoptaSightseeingPlaces() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Chopta · Sightseeing Guide</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Places to Visit in Chopta
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto' }}>
            Deoria Tal · Sari Village · Ukhimath · Makkumath · Baniyakund & Dugalbitta
          </p>
        </div>
      </section>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'20px 20px 60px' }}>
        <Breadcrumb items={[{ label:'Chopta & Tungnath', href:'/chopta-tungnath' }, { label:'Places to Visit' }]} />

        <BlogAuthor variant="top" author="dhanesh" />

        <AnswerBox>
          Almost everyone comes to Chopta for the Tungnath climb and leaves the next morning. The
          area around it holds a full second day: Deoria Tal, a lake at about 2,438 m reached by a
          short steep walk from Sari village; Ukhimath 13 km away, where Kedarnath spends the winter;
          Makkumath, the winter seat of Tungnath; and the meadows at Baniyakund and Dugalbitta where
          most of the camps actually are.
        </AnswerBox>

        <p style={p}>
          Chopta is not really a town. It is a bend in the road at around 2,680 m with a few
          buildings on it, and the reason to be there is everything within twenty kilometres. The
          Tungnath and Chandrashila climb has its own guide on this site — this page is about the
          other day, the one most visitors never plan for.
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

        <h2 style={h2}>Deoria Tal needs its own morning</h2>
        <p style={p}>
          The lake sits at about 2,438 m above Sari village, which is roughly twenty kilometres from
          Chopta by road. The walk up is only two and a half to three kilometres but it is steep
          enough to take an hour and a half at an ordinary pace. What you are going for is the
          reflection of the Chaukhamba range on still water, and that means being there at sunrise.
        </p>
        <p style={p}>
          Driving out from Chopta before dawn to make it is possible and unpleasant. Sleeping at a
          homestay in Sari, or camping by the lake itself, is how people who have done it twice do
          it the second time.
        </p>

        <h3 style={h3}>The two winter seats</h3>
        <p style={p}>
          This corner of Garhwal holds two of them. Ukhimath at 1,311 m takes the Kedarnath deity
          when the portals close in November, and Madhyamaheshwar’s as well. Makkumath, a few
          kilometres off the same road, takes Tungnath’s. Between them they mean that in January,
          when both high shrines are under snow and shut, you can still have darshan of each within
          an hour’s drive of the other.
        </p>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', margin:'24px 0' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>What we tell our own groups</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.75 }}>
            Two nights, not one. Groups that give Chopta a single night arrive in the afternoon,
            walk to Tungnath at dawn, and drive out by noon — which means Deoria Tal and Ukhimath
            never happen. The second night costs very little here because the camps are cheap, and
            it is the difference between a stop and a place you have actually been.
          </div>
        </div>

        <h2 style={h2}>Nearby, on the way in or out</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:10, marginBottom:24 }}>
          {[
            ['/chopta-tungnath', 'Tungnath & Chandrashila', 'The 3,680 m temple climb and summit walk'],
            ['/ukhimath', 'Ukhimath', 'Where Kedarnath winters, 13 km away'],
            ['/madhyamaheshwar-temple', 'Madhyamaheshwar', 'The Panch Kedar shrine that also winters at Ukhimath'],
            ['/panch-kedar-yatra', 'Panch Kedar', 'The five Shiva shrines Tungnath belongs to'],
            ['/rudraprayag', 'Rudraprayag', 'The confluence town on the road in'],
            ['/kedarnath-yatra', 'Kedarnath Yatra', 'The circuit most visitors combine this with'],
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

        <nav aria-label="Related Chopta pages" style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:36 }}>
          <p style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', margin:'0 0 10px' }}>More in this valley</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {[
              ['/chopta-tungnath', 'Chopta Tungnath guide'],
              ['/kalpeshwar-temple', 'Kalpeshwar'],
              ['/rudranath-temple', 'Rudranath'],
              ['/guptkashi-guide', 'Guptkashi'],
              ['/gaurikund', 'Gaurikund'],
              ['/winter-char-dham-yatra', 'Winter Char Dham'],
              ['/uttarakhand-shiva-temples', 'Uttarakhand Shiva temples'],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ background:'#fff', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{label} →</Link>
            ))}
          </div>
        </nav>
        <SightseeingLinkMesh current="chopta" />
      </article>
    </>
  );
}
