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
  title: { absolute: `Places to Visit in Yamunotri ${SITE.season} — Surya Kund, Divya Shila & Kharsali` },
  description: 'What to see at Yamunotri beyond darshan — Divya Shila, the Surya Kund hot spring where pilgrims cook rice, Janki Chatti below and Kharsali across the river.',
  keywords: ['places to visit in yamunotri','yamunotri sightseeing','yamunotri tourist places','things to do in yamunotri','surya kund yamunotri','divya shila','kharsali village','janki chatti'],
  alternates: { canonical: `${SITE.baseUrl}/yamunotri-sightseeing-places` },
  openGraph: {
    title: `Places to Visit in Yamunotri ${SITE.season} — Surya Kund, Divya Shila & Kharsali`,
    description: 'The order pilgrims follow at Yamunotri — Divya Shila, then the hot springs, then darshan — plus Janki Chatti, Kharsali and Hanuman Chatti below. Distances and walking times.',
    url: `${SITE.baseUrl}/yamunotri-sightseeing-places`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Places to Visit in Yamunotri ${SITE.season} | Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Places to Visit in Yamunotri ${SITE.season}`,
    description: 'Divya Shila, Surya Kund, Janki Chatti and Kharsali — what to see at the first dham and the order to see it in.',
    images: [{ url: '/opengraph-image', alt: `Places to Visit in Yamunotri | ${SITE.name}` }],
  },
};

const SIGHTS = [
  {
    name: 'Divya Shila',
    dist: 'Beside the temple',
    time: '10 min',
    href: null,
    what: 'A revered rock pillar that pilgrims worship before entering the shrine. It comes first in the customary order, ahead of the springs and ahead of darshan — worth knowing so you are not moved along by the crowd in the wrong sequence.',
  },
  {
    name: 'Surya Kund',
    dist: 'At the temple',
    time: '20 min',
    href: null,
    what: 'The hot spring beside the shrine, far too hot to bathe in. Pilgrims lower rice and potatoes into it in muslin bundles and carry the cooked offering home as prasad. Watching this happen is most of the reason to stand here.',
  },
  {
    name: 'Gauri Kund',
    dist: 'At the temple',
    time: '20 min',
    href: null,
    what: 'The warmer pool next to Surya Kund, and the one actually used for bathing. Separate men’s and women’s sections. This is the bath most itineraries mean when they say a dip at Yamunotri.',
  },
  {
    name: 'Yamunotri Temple',
    dist: 'Trail end',
    time: '1 hr',
    href: '/yamunotri-temple',
    what: 'The shrine to Yamuna at 3,291 m, rebuilt more than once after avalanche damage. The idol is black marble. Darshan is quick; the queue moves faster than at Kedarnath in all but the busiest weeks.',
  },
  {
    name: 'Janki Chatti',
    dist: '5–6 km below',
    time: 'Base halt',
    href: '/janki-chatti',
    what: 'Where the road ends at 2,650 m and the walk begins. Parking, the prepaid pony and palki counter, and a hot spring of its own. Most groups sleep at Barkot and start from here at first light.',
  },
  {
    name: 'Kharsali',
    dist: 'Across the river from Janki Chatti',
    time: '1–2 hrs',
    href: '/kharsali-yamunotri-winter-seat',
    what: 'The village that holds the Yamuna idol through winter, with an old Someshwar Mahadev temple in stone and timber. It is a few minutes from the roadhead and almost nobody crosses over to see it.',
  },
  {
    name: 'Hanuman Chatti',
    dist: '13 km below Janki Chatti',
    time: '30 min',
    href: null,
    what: 'The confluence where the Hanuman Ganga joins the Yamuna, and the old start of the walk before the road was pushed up to Janki Chatti. A reasonable tea stop rather than a destination.',
  },
  {
    name: 'Saptarishi Kund',
    dist: '10 km on foot from the temple',
    time: 'Full day, hard',
    href: null,
    what: 'The glacial lake that is the Yamuna’s actual source, well above the shrine. A serious, unmarked, high-altitude walk for experienced trekkers with a local guide — not something to attempt off the back of a darshan trip.',
  },
];

const FAQS = [
  { q: 'What is the correct order to do things at Yamunotri?',
    a: 'Divya Shila first, then the hot springs, then darshan. That is the customary sequence and the one local priests follow. If you are with a guide they will walk you through it; if you are on your own the crowd tends to push you straight towards the shrine, so it is worth knowing in advance.' },
  { q: 'Can you bathe in Surya Kund at Yamunotri?',
    a: 'No — Surya Kund is far too hot. It is the spring pilgrims use to cook rice and potatoes in cloth bundles as prasad. The bathing pool is Gauri Kund beside it, which is warm rather than scalding and has separate sections for men and women.' },
  { q: 'How long is the Yamunotri trek?',
    a: 'Five to six kilometres each way from Janki Chatti, climbing to 3,291 m. Reckon three to four hours up at an ordinary pace and two to three down. Ponies, palkis and pitthus are all available from the prepaid counter at Janki Chatti.' },
  { q: 'Is Yamunotri the hardest of the four dhams?',
    a: 'No, Kedarnath is — that trek is 16 km against Yamunotri’s 5 to 6. But Yamunotri is steeper in stretches than people expect and the trail is narrow where ponies pass, so it is not the gentle stroll some itineraries imply.' },
  { q: 'Where do you stay for Yamunotri?',
    a: 'Barkot is the usual base, about 36 km and an hour and a half below Janki Chatti. There are simpler rooms at Janki Chatti itself for anyone wanting an earlier start, and a handful at Hanuman Chatti. Yamunotri village at the top has only basic huts.' },
  { q: 'Is Kharsali worth crossing over for?',
    a: 'If you have an afternoon, yes. It is minutes from the Janki Chatti roadhead, it holds the Yamuna idol for six months of the year, and the Someshwar Mahadev temple there is a genuinely old piece of Garhwali stone-and-timber work. Very few yatra groups make the crossing.' },
];

const PAA = [
  { q: 'What is famous in Yamunotri?', a: 'The Yamunotri temple at 3,291 m, Divya Shila beside it, and Surya Kund — the hot spring where pilgrims cook rice as prasad. Gauri Kund next to it is the pool used for bathing.' },
  { q: 'How far is Yamunotri temple from Janki Chatti?', a: 'Five to six kilometres on foot, three to four hours up for most pilgrims. Janki Chatti at 2,650 m is where the motor road ends and the prepaid pony counter sits.' },
  { q: 'Why do people cook rice at Yamunotri?', a: 'Surya Kund runs hot enough to cook in. Pilgrims tie rice or potatoes in a muslin cloth, lower it into the spring, and carry the cooked food home as prasad from the goddess.' },
  { q: 'Where does the Yamuna actually originate?', a: 'At Saptarishi Kund, a glacial lake roughly 10 km above the temple on a hard, unmarked trail. The shrine itself sits well below the true source, which almost no pilgrim visits.' },
  { q: 'Is Yamunotri open in winter?', a: 'No. The portals close on Bhai Dooj, two days after Diwali, and the idol of the goddess is carried down to Kharsali village for winter worship. The temple reopens on Akshaya Tritiya in late April.' },
];

function Schema() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Places to Visit in Yamunotri ${SITE.season}`,
    itemListElement: SIGHTS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristAttraction',
        name: s.name,
        description: s.what,
        address: { '@type': 'PostalAddress', addressLocality: 'Yamunotri', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
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

export default function YamunotriSightseeingPlaces() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Yamunotri · Sightseeing Guide</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Places to Visit in Yamunotri
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto' }}>
            Divya Shila · Surya Kund · Gauri Kund · Janki Chatti · Kharsali · Hanuman Chatti
          </p>
        </div>
      </section>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'20px 20px 60px' }}>
        <Breadcrumb items={[{ label:'Yamunotri', href:'/yamunotri-yatra' }, { label:'Places to Visit' }]} />

        <BlogAuthor variant="top" author="dhanesh" />

        <AnswerBox>
          Everything at Yamunotri sits within a few minutes of the shrine, and the order matters:
          Divya Shila first, then the hot springs, then darshan. Surya Kund is the spring where
          pilgrims cook rice as prasad — it is too hot to bathe in. Gauri Kund beside it is the
          bathing pool. Below the temple, Janki Chatti at 2,650 m is the roadhead, and Kharsali
          across the river holds the Yamuna idol through winter.
        </AnswerBox>

        <p style={p}>
          Yamunotri is the first dham in the traditional clockwise order and the one most groups
          treat purely as a trek to be got through. That is a shame, because the interesting part
          is not the shrine itself but the springs beside it, and the sequence pilgrims have been
          following there for generations.
        </p>

        <h2 style={h2}>What to see, and how long each takes</h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:640 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Place','Where','Time needed','What it is'].map(hd => (
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

        <h2 style={h2}>The rice at Surya Kund</h2>
        <p style={p}>
          This is the thing people remember about Yamunotri. Surya Kund runs hot enough to cook in,
          so pilgrims tie rice or potatoes into a square of muslin, lower the bundle on a string,
          and pull it out cooked a few minutes later. That food goes home as prasad from the
          goddess. There are always a few people doing it and the priests will show you how if you
          ask, but bring your own cloth and rice if you want to take part rather than watch.
        </p>
        <p style={p}>
          Gauri Kund, immediately beside it, is the pool people actually bathe in. Confusing the two
          is the most common mistake first-timers make here.
        </p>

        <h3 style={h3}>Below the temple</h3>
        <p style={p}>
          Janki Chatti is where vehicles stop and the five-to-six kilometre walk begins. It has the
          prepaid pony and palki counter, which is the only place worth arranging a ride — rates
          are fixed there and haggling on the trail generally ends badly. Kharsali is across the
          river and takes twenty minutes to reach, and it is the single most-skipped thing on this
          arm of the yatra.
        </p>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', margin:'24px 0' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>What we tell our own groups</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.75 }}>
            Start from Janki Chatti by six. The trail is narrow and shares its width with ponies, and
            by mid-morning in May and June you spend as much time standing aside as walking. Groups
            that leave at eight routinely take an hour longer for the same five kilometres.
          </div>
        </div>

        <h2 style={h2}>Nearby, on the way in or out</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:10, marginBottom:24 }}>
          {[
            ['/yamunotri-temple', 'Yamunotri Temple', 'Darshan timings, the idol and the opening date'],
            ['/janki-chatti', 'Janki Chatti', 'The roadhead, parking and prepaid pony counter'],
            ['/kharsali-yamunotri-winter-seat', 'Kharsali', 'Where the Yamuna idol winters after Bhai Dooj'],
            ['/yamunotri-pony-palki-rates', 'Pony & palki rates', 'What the counter charges and what it covers'],
            ['/barkot', 'Barkot', 'The usual overnight base, 36 km below'],
            ['/how-to-reach-yamunotri', 'How to reach Yamunotri', 'Road route, drive times and the nearest railhead'],
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

        <nav aria-label="Related Yamunotri pages" style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:36 }}>
          <p style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', margin:'0 0 10px' }}>More on Yamunotri</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {[
              ['/yamunotri-yatra', 'Yamunotri Yatra package'],
              ['/yamunotri-weather', 'Yamunotri weather'],
              ['/yamunotri-history-legends', 'History & legends'],
              ['/yamunotri-festivals', 'Festivals & dates'],
              ['/yamunotri-dharamshala', 'Dharamshalas'],
              ['/barkot-hotels', 'Barkot hotels'],
              ['/haridwar-to-yamunotri-distance', 'Haridwar to Yamunotri'],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ background:'#fff', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{label} →</Link>
            ))}
          </div>
        </nav>
        <SightseeingLinkMesh current="yamunotri" />
      </article>
    </>
  );
}
