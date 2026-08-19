import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Gaumukh — The Actual Source of the Ganga | Trek & Permit Guide' },
  description: 'Gaumukh is the snout of the Gangotri glacier, 18 km above Gangotri, where the Bhagirathi emerges. Permits, the 150-a-day cap, the Tapovan extension and what the trek really asks.',
  keywords: ['gaumukh','gomukh','gaumukh trek','gangotri to gaumukh','gaumukh tapovan trek','source of ganga','gangotri glacier','bhagirathi source','gaumukh permit','gaumukh altitude','bhojbasa','chirbasa','gangotri national park permit'],
  alternates: { canonical: `${SITE.baseUrl}/gaumukh` },
  openGraph: {
    title: 'Gaumukh — The Actual Source of the Ganga',
    description: 'The snout of the Gangotri glacier, 18 km above the temple. Permits, the daily cap, Bhojbasa, and the Tapovan extension.',
    url: `${SITE.baseUrl}/gaumukh`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Gaumukh — snout of the Gangotri glacier, source of the Bhagirathi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaumukh — The Actual Source of the Ganga',
    description: 'Snout of the Gangotri glacier, 18 km above Gangotri. Permits, the daily cap, and the Tapovan extension.',
    images: [{ url: '/opengraph-image', alt: 'Gaumukh, Gangotri glacier' }],
  },
};

const FAQS = [
  {
    q: 'What is Gaumukh?',
    a: 'Gaumukh is the snout of the Gangotri glacier — the ice cave at its lower end where the Bhagirathi river flows out. It sits about 18 km up-valley from Gangotri town at roughly 3,900 m. This is the physical source of the river that becomes the Ganga. The temple at Gangotri is where the source is worshipped; Gaumukh is where it actually happens.',
  },
  {
    q: 'Is Gaumukh the same as Gangotri?',
    a: 'No, and this trips up more people than any other detail on this page. Gangotri is a temple town at 3,100 m with a motorable road to it. Gaumukh is 18 km further up a trail, with no road, no phone signal and no permanent settlement. Plenty of pilgrims arrive at Gangotri believing they have reached the source. They have reached the shrine to it.',
  },
  {
    q: 'Do you need a permit for the Gaumukh trek?',
    a: 'Yes. Gaumukh lies inside Gangotri National Park and you cannot pass the check post above Gangotri without a forest permit. It is issued by the Uttarakhand Forest Department, either online or at the offices in Uttarkashi and Gangotri. Carry the printout and photo ID — the barrier staff check both, and they turn people back.',
  },
  {
    q: 'How many people are allowed to Gaumukh per day?',
    a: 'One hundred and fifty. The National Green Tribunal capped daily entry beyond Gangotri at 150 trekkers to slow the damage to the valley floor, and the forest department enforces it through the permit system. In peak May–June the quota goes early, so apply ahead rather than turning up at the Gangotri office hoping for a slot.',
  },
  {
    q: 'How long is the Gaumukh trek and how hard is it?',
    a: 'Eighteen kilometres each way, usually split over two or three days. The first 9 km to Chirbasa is a graded forest path and genuinely pleasant. Chirbasa to Bhojbasa is another 5 km, more exposed. The last 4 km from Bhojbasa is the one that surprises people — a slow scramble across loose moraine and boulders with no real path, at close to 3,900 m. Short on paper, slow in reality.',
  },
  {
    q: 'What is the difference between Gaumukh and Gaumukh–Tapovan?',
    a: 'Tapovan is a high meadow about 4 km beyond Gaumukh at roughly 4,460 m, reached by climbing the moraine wall beside the glacier. It is a serious step up in difficulty and exposure, and it is where you get the full face of Shivling and the Bhagirathi peaks. Gaumukh alone is a hard walk. Gaumukh–Tapovan is mountaineering-adjacent trekking and needs a guide.',
  },
  {
    q: 'When is Gaumukh open?',
    a: 'Roughly May to October, in two halves. Mid-May to late June is the first window; the park then effectively shuts through the worst of the monsoon, when the moraine section is genuinely dangerous. September to mid-October is the better window — clear air, firm ground, long views. The park closes for winter around Diwali and the valley is under snow until spring.',
  },
  {
    q: 'Can you stay overnight on the Gaumukh trek?',
    a: 'At Bhojbasa, 14 km in, and nowhere else. There is a GMVN rest house and an ashram there, both basic and both heavily booked in season. Camping is restricted inside the park. Day-tripping to Gaumukh and back from Gangotri is 36 km at altitude — people attempt it and some manage it, but it is a poor idea and the forest staff discourage it.',
  },
  {
    q: 'Is Gaumukh safe to stand at?',
    a: 'Not right at the snout, no. The ice face calves without warning and the ground in front of it is unstable rock and buried ice. There have been fatalities. Guides keep groups back from the mouth for good reason, and the sensible view is from a distance across the outflow, not from underneath an ice wall that is actively falling apart.',
  },
  {
    q: 'How much has the Gangotri glacier retreated?',
    a: 'A lot, and it is measurable. Survey and satellite work over the past several decades puts the retreat of the Gaumukh snout at well over a kilometre since the mid-twentieth century, at an average of roughly 15–20 m a year, with the rate varying by study and period. Old photographs taken from the same rock show it plainly. It is the single most sobering thing about the walk.',
  },
];

const PAA = [
  { q: 'Why is it called Gaumukh?', a: 'Gaumukh means "cow\'s mouth". The name describes the shape the ice cave once had — a low, wide opening that looked like a muzzle with the river pouring out of it. That shape has largely gone as the snout has retreated and collapsed, so most people arriving today are looking at a ragged ice face rather than the mouth the name describes.' },
  { q: 'Can you drink the water at Gaumukh?', a: 'People do, and it is treated as tirtha — many carry a sealed bottle home. It is glacial meltwater, heavy with rock flour, and cold enough to hurt. If you are collecting it to drink rather than for puja, let the sediment settle first. Most trekking groups fill from the side streams at Bhojbasa instead, which run clearer.' },
  { q: 'Is the Gaumukh trek suitable for beginners?', a: 'The first 14 km to Bhojbasa is within reach of a fit beginner who has walked hills before. The last 4 km across the moraine is not really a beginner section — it is unmarked, unstable underfoot and at altitude. If it is your first Himalayan trek, go with a guide and treat Bhojbasa as a legitimate turnaround point rather than a failure.' },
  { q: 'Do you need a guide for Gaumukh?', a: 'For Gaumukh itself, not strictly — the trail to Bhojbasa is obvious and there is usually company on it. For Tapovan, yes, and anyone who tells you otherwise is selling something. The climb up the moraine wall to Tapovan changes with rockfall from season to season and there is no fixed line up it.' },
  { q: 'What is Bhojbasa?', a: 'The overnight stop, 14 km from Gangotri at about 3,800 m, on a bare terrace above the river. It is named for the bhojpatra — Himalayan birch — that once covered the slope, the bark used for manuscripts. There is a GMVN rest house, an ashram, and nothing else. It is cold, exposed and the night sky is exceptional.' },
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
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Gaumukh', item: `${SITE.baseUrl}/gaumukh` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: 'Gaumukh',
    alternateName: ['Gomukh', 'Gangotri Glacier Snout', 'Source of the Bhagirathi'],
    description: 'The terminal snout of the Gangotri glacier in Uttarkashi district, Uttarakhand, where the Bhagirathi river emerges. Reached by an 18 km trek from Gangotri inside Gangotri National Park.',
    url: `${SITE.baseUrl}/gaumukh`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Gangotri', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.9256, longitude: 79.0797, elevation: '3900 m' },
    isAccessibleForFree: false,
    touristType: ['Trekkers', 'Pilgrims'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Gaumukh — The Actual Source of the Ganga',
    description: 'A guide to the Gaumukh trek from Gangotri: the 18 km route via Chirbasa and Bhojbasa, forest permits and the 150-a-day cap, the Tapovan extension, and glacier retreat.',
    mainEntityOfPage: `${SITE.baseUrl}/gaumukh`,
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

const LEGS = [
  { leg: 'Gangotri → Chirbasa', dist: '9 km', gain: '~150 m', time: '3–4 hrs', note: 'Graded forest path above the Bhagirathi. The easy, pretty half.' },
  { leg: 'Chirbasa → Bhojbasa', dist: '5 km', gain: '~250 m', time: '2–3 hrs', note: 'Tree cover thins out. Wind picks up. First real view of Bhagirathi I.' },
  { leg: 'Bhojbasa → Gaumukh', dist: '4 km', gain: '~100 m', time: '2–3 hrs', note: 'Loose moraine and boulders, no fixed path. Slower than the distance suggests.' },
  { leg: 'Gaumukh → Tapovan', dist: '~4 km', gain: '~560 m', time: '4–5 hrs', note: 'Steep moraine wall then meadow. Guide essential. Optional extension.' },
];

export default function Gaumukh() {
  const waText = encodeURIComponent('Namaste! I want to plan a Gaumukh trek from Gangotri — permits, Bhojbasa stay and transport. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Uttarkashi · ~3,900 m · Gangotri National Park
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Gaumukh — The Actual Source of the Ganga
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            The snout of the Gangotri glacier, 18 km above the temple · forest permit required · 150 people a day, no exceptions
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🏔️ 18 km from Gangotri', '📋 Forest permit required', '👥 150/day cap', '🚫 No road, no signal'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Gaumukh</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '~3,900–4,000 m'], ['From Gangotri', '18 km'], ['Overnight stop', 'Bhojbasa (14 km)'], ['Daily cap', '150 trekkers'], ['Permit', 'Forest Dept'], ['Season', 'May–Jun, Sep–Oct']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Gaumukh is where the Ganga physically starts.</strong> Not Gangotri — Gaumukh, eighteen kilometres further up the valley, where the Gangotri glacier ends in a broken wall of ice and the Bhagirathi pours out from underneath it. Every year thousands of people reach the temple at <Link href="/gangotri-temple">Gangotri</Link>, take darshan, and go home believing they have been to the source. They have been to the shrine. The source is a two-day walk away and needs a permit.
        </p>

        <h2 style={h2}>What Is Gaumukh?</h2>
        <AnswerBox>
          Gaumukh is the terminal snout of the Gangotri glacier in Uttarkashi district, Uttarakhand,
          at roughly 3,900 m. The Bhagirathi — the headstream that becomes the Ganga at Devprayag —
          emerges from the ice here. It lies 18 km on foot above Gangotri town, inside Gangotri
          National Park, and entry needs a forest permit capped at 150 people a day.
        </AnswerBox>
        <p style={p}>
          On the altitude, you will see anything from about 3,890 m to 4,020 m quoted, and none of those sources is being careless. The snout is retreating and losing height as it goes, so a figure measured in 1990 is not describing the same piece of ice as one measured last year. Anywhere in the 3,900–4,000 m band is a fair statement of where you end up standing.
        </p>
        <p style={p}>
          The name means <em>cow&rsquo;s mouth</em>, and it used to be literal. Old photographs show a low, wide ice cave with the river running out of it like water from a muzzle. That shape has largely gone. The snout has retreated and collapsed in on itself, and what most people walk up to now is a ragged, dirty ice face with meltwater channels cut through the rubble in front of it. It is still one of the most affecting places in the Garhwal. It just is not the postcard any more.
        </p>

        <h2 style={h2}>Gaumukh Is Not Gangotri — and the Difference Matters</h2>
        <p style={p}>
          This is the single most common misunderstanding about the Bhagirathi valley, so it is worth being blunt about it. <strong>Gangotri</strong> is a temple town at 3,100 m with a road running to it; you can be dropped at the gate by taxi and walk to the shrine in five minutes. That is what the <Link href="/gangotri-yatra">Gangotri leg of the Char Dham</Link> means, and for the overwhelming majority of pilgrims it is the right and complete experience.
        </p>
        <p style={p}>
          <strong>Gaumukh</strong> is a trek. There is no road, no vehicle access, no mobile signal past the first couple of kilometres and one basic place to sleep. It sits inside a national park with a hard entry cap. Confusing the two costs people either a wasted day at a check post they cannot pass, or a badly planned attempt at 36 km of high-altitude walking with no permit and no acclimatisation.
        </p>

        <ExpertNote variant="warning">
          If your Char Dham itinerary says &ldquo;Gangotri&rdquo;, it does not include Gaumukh, and no standard yatra package has time for it. Gaumukh needs two to three extra days built in from Gangotri, plus a permit applied for in advance. If someone has sold you a Char Dham tour that claims to cover Gaumukh in the normal schedule, ask them exactly which night you sleep at Bhojbasa. There is no other answer that works.
        </ExpertNote>

        <h2 style={h2}>The Route, Leg by Leg</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Leg', 'Distance', 'Height gain', 'Time', 'What it is like'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {LEGS.map((r, i) => (
                <tr key={r.leg} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r.leg}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r.dist}</td>
                  <td style={TD}>{r.gain}</td>
                  <td style={TD}>{r.time}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          The honest summary: the first fourteen kilometres are a walk, and the last four are not. Chirbasa and Bhojbasa are reached on a made path with a steady, forgiving gradient — if you have done any hill walking you will be fine. Past Bhojbasa the path stops existing. You cross lateral moraine, which is a slope of loose rock dumped by the glacier, following cairns and whatever line looks least likely to slide. It is only four kilometres. Budget two to three hours for it anyway.
        </p>

        <h2 style={h2}>Permits, and the 150-a-Day Cap</h2>
        <p style={p}>
          Gaumukh sits inside <strong>Gangotri National Park</strong>, and the check post above Gangotri town is a real barrier with staff who turn people back. You need a permit from the Uttarakhand Forest Department, obtained online through the state forest portal or in person at the divisional offices in Uttarkashi or at Gangotri itself. Take a printout and photo ID; both get checked, and a phone screenshot is not always accepted when there is no signal to verify it.
        </p>
        <p style={p}>
          The daily entry limit beyond Gangotri is <strong>150 trekkers</strong>, a cap imposed to slow the physical damage to the valley. In practice that means mid-May to late June sells out, and September fills more slowly. Apply ahead. Fees are modest — a few hundred rupees for Indian nationals, several times that for foreign nationals, with per-day charges beyond the first two — but they are revised, so treat any figure you read online, including ours, as indicative and confirm at the office.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want Gaumukh added to a Gangotri trip?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We arrange the permit, the Bhojbasa night and transport from Haridwar or Uttarkashi. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Where You Sleep: Bhojbasa</h2>
        <p style={p}>
          Fourteen kilometres in, at about 3,800 m, on an open terrace above the river. There is a <strong>GMVN rest house</strong> and an ashram, and that is the entire accommodation stock of the valley. Both are basic, both are cold, and both are booked out in season — this is not somewhere to arrive and improvise. Camping inside the park is restricted, so if Bhojbasa is full your trip does not happen.
        </p>
        <p style={p}>
          The name comes from <em>bhojpatra</em>, the Himalayan birch whose bark was used as writing material for centuries. There is very little of it left on that slope now. What there is instead is one of the better night skies in India, because there is no settlement, no light and usually no cloud in the post-monsoon window.
        </p>

        <h2 style={h2}>The Tapovan Extension</h2>
        <p style={p}>
          Beyond Gaumukh, a steep climb up the moraine wall on the true right of the glacier leads to <strong>Tapovan</strong>, a high meadow at roughly 4,460 m facing the sheer granite of Shivling. Sadhus have wintered there. It is, by common consent, one of the finest campsites in the Himalaya.
        </p>
        <p style={p}>
          It is also a genuine step up. The climb gains around 560 m on unstable rock, the line changes season to season as the moraine shifts, and there is nothing resembling a marked path. <strong>Take a guide.</strong> Gaumukh alone is a hard walk that a fit, sensible person can do unguided. Gaumukh–Tapovan is not in the same category, and treating it as a slightly longer version of the same trek is how people get hurt.
        </p>

        <h2 style={h2}>The Glacier Is Retreating, and You Can See It</h2>
        <p style={p}>
          The Gaumukh snout has pulled back well over a kilometre since the middle of the twentieth century. Survey-of-India records, later satellite work and repeat photography all point the same way, with the average rate usually put somewhere around 15–20 m a year and individual studies differing on the period and the method. The exact number is argued over. The direction is not.
        </p>
        <p style={p}>
          What that means on the ground is that the walk from Bhojbasa gets longer every decade, and the rock you cross for the final stretch is ground the ice occupied within living memory. Guides who have worked the valley for twenty years will point at a boulder and tell you where the snout stood when they started. It is the most direct encounter with climate change available to an ordinary visitor in India, and it is worth going for that reason alone.
        </p>

        <ExpertNote variant="insider">
          Do not stand at the mouth of the ice for a photograph. The face calves without warning, the ground in front of it is rubble over buried ice, and people have died there. Guides hold groups back across the outflow and are right to. Get your picture from thirty metres downstream with the river in the frame — it is a better photograph anyway, and you will be alive to show it to people.
        </ExpertNote>

        <h2 style={h2}>When to Go</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Window', 'Conditions', 'Verdict'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Mid-May – late June', 'Snow patches early, warm days, heavy demand on permits', 'Good, but book the permit well ahead'],
                ['July – August', 'Monsoon. Moraine unstable, landslides on the Gangotri road', 'Avoid. The park effectively shuts down'],
                ['September – mid-October', 'Clear air, firm ground, cold nights, thin crowds', 'The best window, comfortably'],
                ['Late October – April', 'Snowbound, park closed, Gangotri temple shut', 'Not possible'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={TD}>{r[1]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Because the temple and the park run on roughly the same calendar, a Gaumukh trek slots naturally onto the end of a Gangotri visit. Check current conditions on our <Link href="/gangotri-weather">Gangotri weather page</Link> and the <Link href="/char-dham-road-status">road status page</Link> before you commit — the Bhagirathi valley road above Uttarkashi is one of the more landslide-prone stretches in Garhwal.
        </p>

        <h2 style={h2}>Getting to the Trailhead</h2>
        <p style={p}>
          Everything starts at Gangotri, so the logistics are the same as any Gangotri trip: Haridwar or Rishikesh to Uttarkashi, then up the Bhagirathi valley through <Link href="/harsil-valley">Harsil</Link> to the road head. It is a long two-day drive from Haridwar for most people — see <Link href="/how-to-reach-gangotri">how to reach Gangotri</Link> and the <Link href="/haridwar-to-gangotri-distance">Haridwar–Gangotri distance breakdown</Link> for the legs. Uttarkashi is where you sort permits if you did not do it online, and <Link href="/uttarkashi-hotels">where most people sleep</Link> on the way up.
        </p>
        <p style={p}>
          Give yourself a night at Gangotri before starting. At 3,100 m it is high enough that arriving from the plains and walking uphill the same day is a bad plan — our <Link href="/altitude-sickness-char-dham">altitude sickness guide</Link> covers what that actually does to you.
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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He has run groups up the Bhagirathi valley since before the daily cap existed, and is firm that Bhojbasa is a legitimate place to turn around. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning Gangotri with a Gaumukh trek?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Permit help · Bhojbasa booking · Free routed itinerary in 2 hours · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Up the same valley</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Gangotri Temple', '/gangotri-temple'], ['Gangotri Yatra', '/gangotri-yatra'], ['How to Reach Gangotri', '/how-to-reach-gangotri'], ['Gangotri Weather', '/gangotri-weather'], ['Harsil Valley', '/harsil-valley'], ['Uttarkashi Hotels', '/uttarkashi-hotels'], ['Haridwar to Gangotri', '/haridwar-to-gangotri-distance'], ['Gangotri to Yamunotri', '/gangotri-to-yamunotri-distance'], ['Mukhba Winter Seat', '/mukhba-gangotri-winter-seat'], ['Char Dham Yatra', '/char-dham-yatra'], ['Do Dham Yatra', '/do-dham-yatra'], ['Altitude Sickness Guide', '/altitude-sickness-char-dham'], ['Valley of Flowers Trek', '/blog/valley-of-flowers-trek'], ['Road Status', '/char-dham-road-status'], ['Devprayag', '/devprayag'], ['Char Dham Route Map', '/char-dham-yatra-route-map']].map(([l, href]) => (
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
