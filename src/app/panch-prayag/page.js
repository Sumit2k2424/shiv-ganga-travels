import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Panch Prayag — The Five Confluences, In Order' },
  description: 'Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, Devprayag: which rivers meet where, in what order, and how to see all five on one drive.',
  keywords: ['panch prayag','panch prayag uttarakhand','five confluences alaknanda','vishnuprayag','nandprayag','karnaprayag','rudraprayag','devprayag','panch prayag yatra','panch prayag order','panch prayag route'],
  alternates: { canonical: `${SITE.baseUrl}/panch-prayag` },
  openGraph: {
    title: 'Panch Prayag — The Five Confluences, In Order',
    description: 'The five sacred confluences of the Alaknanda, upstream to downstream, and how to see all of them on one Char Dham drive.',
    url: `${SITE.baseUrl}/panch-prayag`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Panch Prayag — the five confluences of the Alaknanda, Uttarakhand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panch Prayag — The Five Confluences, In Order',
    description: 'Which rivers meet where, in what order, and how to see all five on one drive.',
    images: [{ url: '/opengraph-image', alt: 'Panch Prayag confluences' }],
  },
};

/* Upstream → downstream. Elevations are the published town figures; the note
   in the page explains why they do not descend cleanly. */
const PRAYAGS = [
  {
    n: 1, name: 'Vishnuprayag', href: null,
    rivers: 'Alaknanda + Dhauliganga', elev: '1,372 m', fromRishikesh: '~285 km',
    near: 'Below Joshimath, on the Badrinath road',
    note: 'The highest and least visited. The Dhauliganga arrives from the Niti valley and the gorge here is the narrowest of the five. There is a Vishnu temple and a chain-railed viewing point below the road.',
  },
  {
    n: 2, name: 'Nandprayag', href: null,
    rivers: 'Alaknanda + Nandakini', elev: '914 m', fromRishikesh: '~193 km',
    near: 'Chamoli district, on the Badrinath road',
    note: 'The Nandakini comes off the Nanda Devi massif. Associated with King Nanda, and with the Nanda Raj Jat, the twelve-yearly pilgrimage that passes through this valley.',
  },
  {
    n: 3, name: 'Karnaprayag', href: '/karnaprayag',
    rivers: 'Alaknanda + Pindar', elev: '860 m', fromRishikesh: '172 km',
    near: 'Where the Kumaon road splits off',
    note: 'Named for Karna of the Mahabharata, who did penance here. Also the junction for Gwaldam, Ranikhet and Almora — and the future terminus of the Rishikesh rail line.',
  },
  {
    n: 4, name: 'Rudraprayag', href: '/rudraprayag',
    rivers: 'Alaknanda + Mandakini', elev: '690 m', fromRishikesh: '140 km',
    near: 'Where the Kedarnath road splits off',
    note: 'The Mandakini comes down from Kedarnath, so this is where Shiva\'s river joins Vishnu\'s. The most consequential fork on the circuit, and the site of Corbett\'s man-eating leopard.',
  },
  {
    n: 5, name: 'Devprayag', href: '/devprayag',
    rivers: 'Alaknanda + Bhagirathi', elev: '830 m', fromRishikesh: '70 km',
    near: 'The Ganga begins here',
    note: 'The last and most significant. Below this point the river is called the Ganga. The only one of the five where the combined river changes its name.',
  },
];

const FAQS = [
  {
    q: 'What is Panch Prayag?',
    a: 'The five sacred confluences of the Alaknanda river in Garhwal, Uttarakhand. In order from the top: Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag and Devprayag. At each one the Alaknanda takes in a tributary; at the last of them it meets the Bhagirathi and the combined river becomes the Ganga.',
  },
  {
    q: 'What is the correct order of the Panch Prayag?',
    a: 'Going downstream — the direction the water flows — it is Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, Devprayag. Driving up from Rishikesh you meet them in exactly the reverse order, which is why half the lists online contradict each other. Both sequences are correct; they just describe different directions.',
  },
  {
    q: 'Which rivers meet at each prayag?',
    a: 'Vishnuprayag: Alaknanda and Dhauliganga. Nandprayag: Alaknanda and Nandakini. Karnaprayag: Alaknanda and Pindar. Rudraprayag: Alaknanda and Mandakini. Devprayag: Alaknanda and Bhagirathi. The Alaknanda is the constant — it is present at all five, absorbing a tributary each time.',
  },
  {
    q: 'Can you visit all five Panch Prayag in one trip?',
    a: 'Yes, and if you are doing a road Char Dham you already do. All five sit on the highway between Rishikesh and Badrinath. As a dedicated trip it is comfortable in three days from Haridwar; four if you want to stop properly at each rather than photograph them from the road.',
  },
  {
    q: 'Which Panch Prayag is the most important?',
    a: 'Devprayag, by most reckonings, because the Ganga takes its name there. Rudraprayag matters most practically, being the fork between Kedarnath and Badrinath. Vishnuprayag is the one almost nobody stops at, which is a reasonable argument for stopping.',
  },
  {
    q: 'Do I need a separate trip for Panch Prayag?',
    a: 'Not unless you want one. Every road route to Badrinath crosses all five, so the question is really whether you stop. Most operators do not. Building twenty minutes at each into a Char Dham itinerary costs you a couple of hours across the whole trip and is, in our view, the best value those hours ever buy.',
  },
  {
    q: 'What is the best time for a Panch Prayag trip?',
    a: 'April to June and September to November. All five sit low enough — none above about 1,400 m — that they are accessible for much longer than the dhams above them, so a Panch Prayag drive works in late March or even winter when Kedarnath and Badrinath are shut. Avoid July and August, when the rivers run brown and this highway is landslide-prone.',
  },
  {
    q: 'Is there a Panch Prayag in Prayagraj too?',
    a: 'Different thing. Prayagraj in Uttar Pradesh has the Triveni Sangam, where the Ganga, Yamuna and the mythical Saraswati meet, and it is the site of the Kumbh Mela. The Panch Prayag are five separate Himalayan confluences on the Alaknanda, several hundred kilometres upstream. Both use the word prayag, which simply means confluence.',
  },
  {
    q: 'Why do published elevations for the Panch Prayag disagree?',
    a: 'Because most sources quote town elevations rather than the height of the water. These hill towns climb steeply from their riverbanks, so a town average can sit hundreds of metres above its own confluence. Devprayag is the clearest case: the town averages around 830 m while the sangam itself is nearer 470 m, which is why it appears to sit higher than Rudraprayag despite being downstream of it.',
  },
  {
    q: 'Where does the Alaknanda itself start?',
    a: 'At the Satopanth and Bhagirath Kharak glaciers above Badrinath, near Mana. It runs about 190 km from there to Devprayag, gathering the five tributaries on the way. It is the longer and larger of the two rivers that form the Ganga — the Bhagirathi gets the name, but the Alaknanda supplies more of the water.',
  },
];

const PAA = [
  { q: 'What does prayag mean?', a: 'Confluence — the meeting of two rivers. In Hindu tradition such a meeting point is inherently sacred, which is why a bathing ghat and usually a temple sits at each one. The word carries the same sense in Prayagraj.' },
  { q: 'How many days do you need for Panch Prayag?', a: 'Three from Haridwar at a reasonable pace, four if you want to walk down to each sangam and sit for a while. One long day gets you Devprayag, Rudraprayag and Karnaprayag if that is all you have.' },
  { q: 'Which prayag is closest to Rishikesh?', a: 'Devprayag, about 70 km and two hours up NH-7. It is easily done as a day trip from Rishikesh, which none of the other four are.' },
  { q: 'Can you bathe at the Panch Prayag?', a: 'At all five, and there are steps and in places chains at each. Treat the current with respect — two Himalayan rivers meeting produces a pull that does not look like much from the road, and the water is cold in every month. Do not attempt any of them during or just after the monsoon.' },
  { q: 'Are the Panch Prayag connected to the Panch Kedar?', a: 'Only geographically. The Panch Prayag are five river confluences on the Alaknanda, all roadside. The Panch Kedar are five Shiva temples — Kedarnath, Madhyamaheshwar, Tungnath, Rudranath and Kalpeshwar — most of which need serious trekking. They overlap on the map but they are unrelated circuits.' },
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
      { '@type': 'ListItem', position: 3, name: 'Panch Prayag', item: `${SITE.baseUrl}/panch-prayag` },
    ],
  };
  const list = {
    '@context': 'https://schema.org', '@type': 'ItemList',
    name: 'Panch Prayag — the five confluences of the Alaknanda',
    description: 'The five sacred river confluences of the Alaknanda in Garhwal, Uttarakhand, listed upstream to downstream.',
    url: `${SITE.baseUrl}/panch-prayag`,
    numberOfItems: 5,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: PRAYAGS.map(pr => ({
      '@type': 'ListItem',
      position: pr.n,
      item: {
        '@type': 'TouristAttraction',
        name: pr.name,
        description: `Confluence of the ${pr.rivers}, at approximately ${pr.elev}. ${pr.near}.`,
        ...(pr.href ? { url: `${SITE.baseUrl}${pr.href}` } : {}),
        address: { '@type': 'PostalAddress', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
      },
    })),
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Panch Prayag — The Five Confluences, In Order',
    description: 'A guide to the five sacred confluences of the Alaknanda: which rivers meet where, the correct order, and how to see all five on one drive.',
    mainEntityOfPage: `${SITE.baseUrl}/panch-prayag`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    datePublished: SITE.lastUpdatedISO,
    dateModified: SITE.lastUpdatedISO,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl },
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(list) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 620 };

export default function PanchPrayag() {
  const waText = encodeURIComponent('Namaste! I want an itinerary that stops at all five Panch Prayag. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Five confluences · one river · one highway
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Panch Prayag — The Five Confluences, In Order
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Vishnuprayag · Nandprayag · Karnaprayag · Rudraprayag · Devprayag — and you already drive past all five
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🌊 All on the Alaknanda', '🛣️ All roadside', '📅 3 days from Haridwar', '🕉️ The Ganga starts at #5'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Panch Prayag</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <p style={p}>
          <strong>The Panch Prayag are five river confluences on one river, strung along one road.</strong> The Alaknanda comes down from Badrinath and takes in a tributary five times before it meets the Bhagirathi and becomes the Ganga. Every one of those meetings has a name, a temple and a set of steps down to the water &mdash; and if you are driving to Badrinath you pass all five whether you notice them or not. Most people do not notice them.
        </p>

        <h2 style={h2}>What Are the Panch Prayag?</h2>
        <AnswerBox>
          The Panch Prayag are the five sacred confluences of the Alaknanda river in Garhwal,
          Uttarakhand. Upstream to downstream they are Vishnuprayag, Nandprayag, Karnaprayag,
          Rudraprayag and Devprayag. At the last of them the Alaknanda meets the Bhagirathi and the
          combined river is renamed the Ganga.
        </AnswerBox>
        <p style={p}>
          <em>Prayag</em> simply means confluence, and in Hindu tradition the meeting of two rivers is sacred in itself &mdash; which is why each of the five has a ghat and a shrine. The Alaknanda is the constant through all of them. It arrives at each junction having already absorbed the last one, gathering the Dhauliganga, the Nandakini, the Pindar, the Mandakini and finally the Bhagirathi.
        </p>

        <h2 style={h2}>The Five, In Order</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['#', 'Prayag', 'Rivers that meet', 'Elevation', 'From Rishikesh', 'Why it matters'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {PRAYAGS.map((pr, i) => (
                <tr key={pr.name} style={{ borderBottom: '1px solid hsl(var(--border))', background: pr.n === 5 ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--teal)' }}>{pr.n}</td>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--navy)' }}>
                    {pr.href ? <Link href={pr.href} style={{ color: 'var(--teal)' }}>{pr.name}</Link> : pr.name}
                  </td>
                  <td style={TD}>{pr.rivers}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{pr.elev}</td>
                  <td style={TD}>{pr.fromRishikesh}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{pr.near}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 28 }}>
          Elevations are published <strong>town</strong> figures, not the height of the water &mdash; which is why they do not descend cleanly. See the note below.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {PRAYAGS.map(pr => (
            <div key={pr.name} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: '4px solid var(--navy)' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--navy)', color: '#FFD166', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{pr.n}</span>
                <strong style={{ fontSize: 14.5, color: 'var(--navy)' }}>
                  {pr.href ? <Link href={pr.href} style={{ color: 'var(--navy)' }}>{pr.name}</Link> : pr.name}
                </strong>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{pr.rivers}</span>
              </div>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75, margin: 0 }}>{pr.note}</p>
              {pr.href && (
                <Link href={pr.href} style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--teal)', textDecoration: 'none', display: 'inline-block', marginTop: 8 }}>
                  Full {pr.name} guide →
                </Link>
              )}
            </div>
          ))}
        </div>

        <ExpertNote variant="tip">
          A note on the elevation column, because it will look wrong to anyone paying attention. Published figures for these towns do not descend neatly &mdash; Devprayag appears to sit higher than Rudraprayag even though it is downstream of it. That is not an error in the river; it is what happens when you quote town elevations. These places climb steeply from their riverbanks, so a town average can sit hundreds of metres above its own sangam. Devprayag is the extreme case: the town averages around 830 m while the confluence itself is nearer 470 m. Almost every Panch Prayag list online copies these numbers without noticing the contradiction.
        </ExpertNote>

        <h2 style={h2}>Which Order Is Correct?</h2>
        <p style={p}>
          Both, and this is why half the lists online disagree with the other half. <strong>Downstream</strong> &mdash; the direction the water actually flows &mdash; runs Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, Devprayag. That is the order used in scripture and on this page.
        </p>
        <p style={p}>
          <strong>Driving up from Rishikesh</strong>, you meet them in exact reverse: Devprayag first at 70 km, then Rudraprayag, Karnaprayag, Nandprayag and finally Vishnuprayag below Joshimath. Neither sequence is wrong. They just answer different questions, and nobody says which one they are answering.
        </p>

        <h2 style={h2}>Seeing All Five on One Drive</h2>
        <p style={p}>
          You do not need a special trip. Every road route to <Link href="/badrinath-yatra">Badrinath</Link> crosses all five, so the only question is whether you stop. Here is how it falls out from Haridwar.
        </p>
        <div style={SCROLL}>
          <table style={{ ...TABLE, minWidth: 560 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Day', 'Route', 'Prayags covered', 'Night'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Day 1', 'Haridwar → Rudraprayag', 'Devprayag, Rudraprayag', 'Rudraprayag'],
                ['Day 2', 'Rudraprayag → Joshimath', 'Karnaprayag, Nandprayag, Vishnuprayag', 'Joshimath'],
                ['Day 3', 'Joshimath → Haridwar', 'Second pass at all five, going down', 'Haridwar'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={TD}>{r[1]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[2]}</td>
                  <td style={TD}>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Three days is comfortable; four lets you walk down to each sangam and sit rather than photographing it from the road. Bolted onto a full <Link href="/char-dham-yatra">Char Dham</Link> itinerary the marginal cost is about twenty minutes at each &mdash; call it two hours across a ten-day trip. In our view those are the best two hours on the whole circuit, and the ones most operators skip.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want the halts actually built into your itinerary?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We schedule all five into every road route rather than driving past them. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>When to Go</h2>
        <p style={p}>
          The useful thing about the Panch Prayag is that none of them is high. The tallest, Vishnuprayag, sits around 1,372 m, which means the whole circuit is open and comfortable for far longer than the dhams above it. <strong>April to June and September to November</strong> are the best windows, but a Panch Prayag drive works in March, and even in winter when <Link href="/kedarnath-temple">Kedarnath</Link> and Badrinath are shut and their deities have moved down to <Link href="/ukhimath">Ukhimath</Link> and Joshimath.
        </p>
        <p style={p}>
          Avoid <strong>July and August</strong>. The rivers run uniformly brown, so the thing you came to see &mdash; two distinct waters meeting &mdash; disappears entirely, and this highway is among the most landslide-prone in Garhwal. Check the <Link href="/char-dham-road-status">road status page</Link> before any monsoon-season drive.
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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He has driven this highway several hundred times over fifteen seasons and builds the sangam halts into every road itinerary we run. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>See all five, properly</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>On and around this road</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Devprayag', '/devprayag'], ['Rudraprayag', '/rudraprayag'], ['Karnaprayag', '/karnaprayag'], ['Dhari Devi Temple', '/dhari-devi-temple'], ['Joshimath Narsingh Temple', '/joshimath-narsingh-temple'], ['Ukhimath', '/ukhimath'], ['Gaurikund', '/gaurikund'], ['Guptkashi Guide', '/guptkashi-guide'], ['Char Dham Yatra', '/char-dham-yatra'], ['Do Dham Yatra', '/do-dham-yatra'], ['Teen Dham Yatra', '/teen-dham-yatra'], ['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Panch Badri Yatra', '/panch-badri-yatra'], ['Badrinath Yatra', '/badrinath-yatra'], ['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Road Status', '/char-dham-road-status']].map(([l, href]) => (
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
