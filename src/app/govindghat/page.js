import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Govindghat — The Base Town for Hemkund & Valley of Flowers' },
  description: 'Govindghat at 1,828 m on the Badrinath highway: where you leave the car, the jeep to Pulna, the gurudwara, and how it works as a base for Hemkund Sahib and Valley of Flowers.',
  keywords: ['govindghat','govind ghat','govindghat to ghangaria','govindghat altitude','govindghat gurudwara','govindghat parking','joshimath to govindghat','govindghat to badrinath','pulna','ghangaria','valley of flowers base','hemkund sahib base'],
  alternates: { canonical: `${SITE.baseUrl}/govindghat` },
  openGraph: {
    title: 'Govindghat — The Base Town for Hemkund & Valley of Flowers',
    description: 'Where the car stops and the trek starts. Parking, the Pulna jeep, the gurudwara, and its place on the Badrinath road.',
    url: `${SITE.baseUrl}/govindghat`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Govindghat — base town for Hemkund Sahib and the Valley of Flowers, Chamoli' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Govindghat — Base for Hemkund & Valley of Flowers',
    description: 'Parking, the Pulna jeep, the gurudwara, and where it sits on the Badrinath road.',
    images: [{ url: '/opengraph-image', alt: 'Govindghat, Chamoli' }],
  },
};

const FAQS = [
  {
    q: 'What is Govindghat?',
    a: 'Govindghat is a roadside town in Chamoli district at about 1,828 m, where the Lakshman Ganga joins the Alaknanda. It sits on the Badrinath highway and is the road head for both Hemkund Sahib and the Valley of Flowers. Everyone doing either leaves their vehicle here. It is a working base — parking, a large gurudwara, hotels, porters and jeeps — rather than a destination in itself.',
  },
  {
    q: 'How far is Govindghat from Joshimath?',
    a: 'About 20 km, roughly an hour by road on the Badrinath highway. Joshimath is where most people sleep if Govindghat is full, and it is also where the Auli ropeway and the winter seat of Badrinath are. The road between the two is prone to closure after heavy rain.',
  },
  {
    q: 'How far is Govindghat from Badrinath?',
    a: 'About 25 km, an hour or so further up the same highway. This is the detail most itineraries miss: Govindghat is on the way to Badrinath, not a detour from it. If you are already doing Badrinath, adding Hemkund Sahib or the Valley of Flowers costs you the trek days, not extra driving.',
  },
  {
    q: 'What is the trek distance from Govindghat to Ghangaria?',
    a: 'About 13 km in total. The first 4 km to Pulna is now motorable and covered by shared jeep in around 20 minutes, which saves you the flattest and least interesting part of the walk. From Pulna it is roughly 9 km on foot to Ghangaria, a steady climb along the Lakshman Ganga taking five to six hours.',
  },
  {
    q: 'Do you have to walk from Govindghat, or can you take a jeep?',
    a: 'You can take a shared jeep as far as Pulna, 4 km up, and almost everyone does. Beyond Pulna there is no vehicle access at all. Ponies, porters and palkis are available from Pulna for the climb to Ghangaria, and there is a helicopter service to Ghangaria in season for those who cannot walk it.',
  },
  {
    q: 'Is there parking at Govindghat?',
    a: 'Yes, and it is the main reason the town exists in its present form. There is a multi-level parking structure plus roadside space, and vehicles are left for two to four days while their owners are up at Ghangaria. In peak Hemkund season it gets tight. Leave nothing visible in the car.',
  },
  {
    q: 'What is the gurudwara at Govindghat?',
    a: 'Gurudwara Govind Dham, run by the Hemkund Sahib trust, and it is the anchor of the town. It provides langar and simple accommodation to anyone who turns up, Sikh or not, and in peak season it feeds and houses very large numbers of people. There is a matching gurudwara at Ghangaria and the shrine itself at Hemkund.',
  },
  {
    q: 'Where should you stay — Govindghat, Joshimath or Ghangaria?',
    a: 'Govindghat if you want to start walking early, which is the usual choice. Joshimath if Govindghat is full or you want a better room and do not mind an hour\'s drive at dawn. Ghangaria is where you sleep between the two trek days — it is not an alternative base, it is the mid-point, and both Hemkund and the Valley are day trips from there.',
  },
  {
    q: 'Was Govindghat damaged in the 2013 floods?',
    a: 'Badly. The June 2013 disaster took out the bridge and much of the low-lying part of the town where the Lakshman Ganga meets the Alaknanda, and thousands of pilgrims were stranded on the Ghangaria side. What you see today is largely rebuilt, with a new bridge and reorganised parking. Locals will tell you where the old town stood if you ask.',
  },
  {
    q: 'Is there a helicopter from Govindghat?',
    a: 'The helicopter service runs to Ghangaria, from a helipad near Govindghat, in season. It carries people who cannot manage the 13 km climb and it is weather-dependent in a valley where weather turns fast. It gets you to Ghangaria only — the 6 km from Ghangaria up to Hemkund Sahib still has to be walked or ridden.',
  },
  {
    q: 'When is Govindghat busiest?',
    a: 'Two overlapping peaks. Hemkund Sahib opens around late May and closes early October, and the Valley of Flowers is at its best from mid-July to late August. Late July and August is when both run together and the town is at its fullest, which is also monsoon — the flowers are the reason to accept the risk.',
  },
];

const PAA = [
  { q: 'Why is it called Govindghat?', a: 'It takes its name from Guru Gobind Singh, the tenth Sikh Guru, whose meditation in a previous birth at a lake ringed by seven peaks is described in the Dasam Granth. That lake was identified in the 1930s as Hemkund, and the road-head settlement that grew up to serve pilgrims heading there carries the Guru\'s name. The town is essentially a century old as a pilgrimage point.' },
  { q: 'Can you visit the Valley of Flowers and Hemkund Sahib on the same trip?', a: 'Yes, and most people do, because both are reached from Ghangaria. The usual pattern is trek to Ghangaria on day one, Valley of Flowers as a day trip on day two, Hemkund Sahib on day three, walk down on day four. Compressing that into three days is possible but leaves no margin for the weather turning.' },
  { q: 'How long does the Govindghat to Ghangaria trek take?', a: 'Five to six hours from Pulna for a reasonably fit walker, longer with children or in heavy rain. The gradient is steady rather than steep and the path is wide and well made, but 9 km uphill with a pack at altitude is a real day. Start early — afternoon cloud and rain in this valley are close to routine in season.' },
  { q: 'Are there ATMs and mobile signal at Govindghat?', a: 'Signal is patchy and unreliable, and there is nothing usable above Pulna. Carry cash: the jeep, the porters, the ponies and the shops at Ghangaria are cash businesses, and an ATM that is out of service in Govindghat means a very awkward four days. Draw what you need in Joshimath.' },
  { q: 'Is Govindghat worth stopping at on the way to Badrinath?', a: 'As a place to look at, not particularly — it is a functional road-head town. What is worth knowing is that it is on your route. If you are driving to Badrinath and have any interest in Hemkund Sahib or the Valley of Flowers, this is where you would peel off, and it costs no extra driving to build it in.' },
];

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Hemkund Sahib Yatra', item: `${SITE.baseUrl}/hemkund-sahib-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Govindghat', item: `${SITE.baseUrl}/govindghat` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: 'Govindghat',
    alternateName: ['Govind Ghat'],
    description: 'Road-head town in Chamoli district, Uttarakhand, at about 1,828 m on the Badrinath highway, at the confluence of the Lakshman Ganga and the Alaknanda. Base for the trek to Ghangaria, Hemkund Sahib and the Valley of Flowers.',
    url: `${SITE.baseUrl}/govindghat`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Govindghat', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.6247, longitude: 79.5658, elevation: '1828 m' },
    isAccessibleForFree: true,
    touristType: ['Pilgrims', 'Trekkers'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Govindghat — The Base Town for Hemkund and the Valley of Flowers',
    description: 'A practical guide to Govindghat: parking, the Pulna jeep, Gurudwara Govind Dham, the 13 km to Ghangaria, and its position on the Badrinath highway.',
    mainEntityOfPage: `${SITE.baseUrl}/govindghat`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    datePublished: SITE.lastUpdatedISO,
    dateModified: SITE.lastUpdatedISO,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl },
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 560 };

export default function Govindghat() {
  const waText = encodeURIComponent('Namaste! I want to add Hemkund Sahib / Valley of Flowers via Govindghat to a Badrinath trip. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Chamoli · 1,828 m · Badrinath highway
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Govindghat — Where You Leave the Car
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Road head for Hemkund Sahib and the Valley of Flowers · 13 km to Ghangaria · 25 km short of Badrinath
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🚙 Jeep to Pulna, 4 km', '🥾 9 km on to Ghangaria', '🛕 Gurudwara Govind Dham', '🅿️ Multi-day parking'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/hemkund-sahib-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Hemkund Sahib Yatra</Link><span>›</span>
          <span>Govindghat</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,828 m'], ['District', 'Chamoli'], ['From Joshimath', '20 km'], ['To Badrinath', '25 km'], ['To Ghangaria', '13 km'], ['Season', 'Late May – Oct']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Govindghat is a car park with a gurudwara attached, and that is not an insult.</strong> It exists to be the point where the road stops mattering. You arrive on the Badrinath highway, leave your vehicle for three or four days, and walk into a side valley that has no road in it at all — up to Ghangaria, and from there to <Link href="/hemkund-sahib-yatra">Hemkund Sahib</Link> and the <Link href="/blog/valley-of-flowers-trek">Valley of Flowers</Link>. Understanding what Govindghat does is most of what you need to plan either trip.
        </p>

        <h2 style={h2}>What Is Govindghat?</h2>
        <AnswerBox>
          Govindghat is a road-head town in Chamoli district, Uttarakhand, at about 1,828 m, where the
          Lakshman Ganga meets the Alaknanda on the Badrinath highway. It is the base for the 13 km
          route to Ghangaria, from which both Hemkund Sahib and the Valley of Flowers are reached.
          It has multi-day parking, Gurudwara Govind Dham, hotels, porters and shared jeeps to Pulna.
        </AnswerBox>
        <p style={p}>
          The name comes from Guru Gobind Singh. The Dasam Granth describes the tenth Guru meditating, in a previous birth, beside a lake ringed by seven peaks — and in the 1930s that lake was identified as Hemkund. Everything here follows from that identification. A century ago this was a bend in a mule track. Now it moves tens of thousands of pilgrims a season.
        </p>

        <h2 style={h2}>The Bit Most Itineraries Get Wrong</h2>
        <p style={p}>
          Govindghat is <strong>on the road to Badrinath</strong>, twenty-five kilometres short of it. It is not a detour, a separate trip, or somewhere you go instead. If you are already driving up the Alaknanda to <Link href="/badrinath-yatra">Badrinath</Link>, you will pass the Govindghat parking whether you stop or not.
        </p>
        <p style={p}>
          What that means practically: adding Hemkund Sahib or the Valley of Flowers to a Badrinath trip costs you <em>trek days</em>, not driving days. Three or four extra nights, no extra distance. A lot of people treat these as separate holidays taken years apart when they sit on the same road.
        </p>

        <ExpertNote variant="insider">
          The sequencing that works is Badrinath first, then Govindghat on the way back down. You gain height gradually, you have already spent a night at altitude before starting a 13 km climb, and if the weather closes the Ghangaria valley you have not lost Badrinath as well. Doing it the other way — trek first, Badrinath after — is how groups end up skipping the dham because they ran out of days waiting for cloud to lift.
        </ExpertNote>

        <h2 style={h2}>Govindghat to Ghangaria, Leg by Leg</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Leg', 'Distance', 'Time', 'How', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Govindghat → Pulna', '4 km', '~20 min', 'Shared jeep', 'Motorable. Skips the flattest, dullest part of the walk.'],
                ['Pulna → Ghangaria', '~9 km', '5–6 hrs', 'Trek / pony', 'Steady climb along the Lakshman Ganga. Porters available.'],
                ['Ghangaria → Hemkund Sahib', '6 km', '4–5 hrs up', 'Trek / pony', 'The hard part. ~1,100 m of gain on a stone staircase.'],
                ['Ghangaria → Valley of Flowers', '~3 km to the gate', '2–3 hrs', 'Trek only', 'No ponies inside the national park. Day trip, no camping.'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r[1]}</td>
                  <td style={TD}>{r[2]}</td>
                  <td style={TD}>{r[3]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Ghangaria is the hinge. It is not an alternative base to Govindghat — it is the mid-point where you sleep, and both Hemkund and the Valley run as day trips out of it. Anyone planning this properly books two or three nights at Ghangaria and treats Govindghat as the place the car waits.
        </p>

        <h2 style={h2}>Parking, and Leaving a Car for Four Days</h2>
        <p style={p}>
          There is structured multi-level parking plus roadside space, and vehicles routinely sit here for three to four days while their owners are up the valley. In the late-July to August overlap — when Hemkund season and the Valley of Flowers bloom coincide — it fills. Arrive early in the day if you are self-driving.
        </p>
        <p style={p}>
          Two practical points. Leave nothing visible inside. And take everything you need for four days out of the car before you walk away, because there is no going back for a forgotten charger from nine kilometres up a valley with no road.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Adding Hemkund or the Valley to a Badrinath trip?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Same road, three extra nights. We route it Badrinath first, Govindghat on the way down. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Gurudwara Govind Dham</h2>
        <p style={p}>
          The gurudwara is the institution that actually runs this town. It provides <strong>langar and simple accommodation to anyone who arrives</strong>, without regard to faith, and in peak season it feeds and shelters numbers that would defeat any commercial operation on that road. There is a matching gurudwara at Ghangaria and the shrine itself at Hemkund, and the three together are what make this pilgrimage possible for people with very little money.
        </p>
        <p style={p}>
          If you stay there, the etiquette is straightforward: cover your head, remove shoes, sit on the floor for langar with everyone else, and put something in the donation box on the way out even though nobody will ask you to. Sewa volunteers hand out hot tea on the trail in a way that will stay with you longer than the scenery.
        </p>

        <h2 style={h2}>2013, and What Was Rebuilt</h2>
        <p style={p}>
          Govindghat was hit hard in June 2013. The bridge went, the low ground at the confluence went with it, and several thousand pilgrims were cut off on the Ghangaria side and had to be lifted out by air over the following days. Much of what you walk through now is post-2013 construction — new bridge, reorganised parking, rebuilt frontage.
        </p>
        <p style={p}>
          It is worth knowing because it explains the geography. The town reads oddly, with buildings at strange heights above the water and gaps where things clearly used to be. Ask anyone who works there and they will point out where the old market stood. The same flood is why the <Link href="/gaurikund">Gaurikund</Link> and Kedarnath valley look the way they do.
        </p>

        <h2 style={h2}>Getting to Govindghat</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['From', 'Distance', 'Drive time', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Joshimath', '20 km', '~1 hr', 'Nearest town with decent rooms and ATMs'],
                ['Badrinath', '25 km', '~1 hr', 'Further up the same highway'],
                ['Haridwar', '~275 km', '9–10 hrs', 'Full driving day via Devprayag, Rudraprayag, Joshimath'],
                ['Rishikesh', '~255 km', '9 hrs', 'Same route, one hour less'],
                ['Dehradun', '~290 km', '10 hrs', 'Jolly Grant is the nearest airport'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r[1]}</td>
                  <td style={TD}>{r[2]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Draw cash at <strong>Joshimath</strong>. Signal at Govindghat is patchy and there is nothing usable above Pulna, and the jeeps, porters, ponies and Ghangaria shops all run on cash. An out-of-service ATM here makes for a difficult four days. Check the <Link href="/char-dham-road-status">road status page</Link> before setting out — this stretch of the Alaknanda highway closes for landslides more than most.
        </p>

        <h2 style={h2}>When to Come</h2>
        <p style={p}>
          Two seasons overlapping. <strong>Hemkund Sahib</strong> opens around late May and closes in early October, snow permitting at 4,572 m. The <strong>Valley of Flowers</strong> is technically open from June but only worth the walk from <strong>mid-July to late August</strong>, when the bloom is at its peak — which is also, unavoidably, the monsoon.
        </p>
        <p style={p}>
          That is the trade this valley asks you to make. Come in July or August for the flowers and accept rain, leeches and the real possibility of road closure. Come in September for stable weather and clear air, and see a valley that has mostly finished flowering. There is no window that gives you both.
        </p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {FAQS.map(f => (
            <details key={f.q} style={{ background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 10, padding: '12px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', cursor: 'pointer', lineHeight: 1.5 }}>{f.q}</summary>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.8, margin: '10px 0 0' }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', borderRadius: 12, padding: '18px 20px', marginBottom: 32, display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 17, flexShrink: 0 }}>DM</div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>Dhanesh Chandra Mishra</div>
            <div style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 600, marginBottom: 8 }}>Founder &amp; Director, {SITE.name}</div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He routes Badrinath before Govindghat on every combined itinerary, for reasons that have cost other operators their dham. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning Hemkund or the Valley of Flowers?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Combined with Badrinath on the same road · Free routed itinerary in 2 hours · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Up the Alaknanda</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Hemkund Sahib Yatra', '/hemkund-sahib-yatra'], ['Valley of Flowers Trek', '/blog/valley-of-flowers-trek'], ['Badrinath Yatra', '/badrinath-yatra'], ['Badrinath Temple', '/badrinath-temple'], ['How to Reach Badrinath', '/how-to-reach-badrinath'], ['Badrinath Hotels', '/badrinath-hotels'], ['Joshimath Narsingh Temple', '/joshimath-narsingh-temple'], ['Mana Village', '/blog/mana-village-badrinath'], ['Auli Skiing Package', '/auli-skiing-package'], ['Panch Badri Yatra', '/panch-badri-yatra'], ['Panch Prayag', '/panch-prayag'], ['Karnaprayag', '/karnaprayag'], ['Haridwar to Badrinath', '/haridwar-to-badrinath-distance'], ['Char Dham Yatra', '/char-dham-yatra'], ['Road Status', '/char-dham-road-status'], ['Altitude Sickness Guide', '/altitude-sickness-char-dham']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}>
          <PeopleAlsoAsk items={PAA} />
        </div>
      </article>
    </>
  );
}
