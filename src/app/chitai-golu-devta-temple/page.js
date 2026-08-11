import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import { h2, h3, p } from "@/lib/prose";

export const metadata = {
  title: { absolute: 'Chitai Golu Devta Temple 2026 | Timings & Route | Almora' },
  description: 'Chitai Golu Devta Temple, Almora — darshan timings & the letter ritual. Trusted operator, 15+ yrs experience, customizable itinerary & instant confirmation.',
  keywords: ['chitai golu devta temple','golu devta temple almora','chitai golu devta temple almora uttarakhand','chitai temple almora','golu devta god of justice','chitai golu devta temple timings','golu devta ki chitthi','golu devta mandir almora','how to reach chitai golu devta temple','chitai golu devta temple bells','goljyu','chitai vs ghorakhal golu devta'],
  alternates: { canonical: `${SITE.baseUrl}/chitai-golu-devta-temple` },
  openGraph: {
    title: 'Chitai Golu Devta Temple, Almora — The Court of Justice',
    description: 'The Kumaon shrine where people file written petitions to a god and hang a bell when the verdict comes. Timings, the letter ritual, distances and route.',
    url: `${SITE.baseUrl}/chitai-golu-devta-temple`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Chitai Golu Devta Temple, Almora — bells and petitions, Kumaon, Uttarakhand' }],
  },
  twitter: { card: 'summary_large_image', title: 'Chitai Golu Devta Temple 2026 — Timings, Letters & Route', description: 'Kumaon’s god of justice. Written petitions, thousands of bells, 8–10 km from Almora. Timings, route and distances.', images: [{ url: '/opengraph-image', alt: 'Chitai Golu Devta Temple, Almora' }] },
};

const PAA = [
  { q:'What is Chitai Golu Devta Temple famous for?', a:'It is famous as a court of justice. Instead of only praying, devotees write out their grievance (a property dispute, a stalled court case, an unpaid debt) and tie the letter to the temple railings. Many write on the same non-judicial stamp paper used for real legal petitions. When the matter is settled, they come back and hang a bell. The result is a courtyard covered in paper and roofed in brass, about 8–10 km from Almora in Kumaon.' },
  { q:'What are Chitai Golu Devta Temple darshan timings?', a:'Roughly 6:00 AM to 7:00 PM is the figure most travel sources give. One Uttarakhand operator publishes a fuller schedule — opening 5:00 AM, a midday break 12:00–2:00 PM, closing 8:00 PM, with aarti around 6:00–6:30 AM and 7:00–7:30 PM. There is no official temple website or government page confirming either, so treat both as indicative and confirm locally, especially in winter when the hills go dark by 5:30 PM. Entry is free.' },
  { q:'Why do devotees write letters to Golu Devta?', a:'Because the shrine is treated as a court and Golu Devta as the judge. The belief is straightforward: when the human system stalls, Goljyu does not. People write the grievance as an application: who wronged them, what outcome they want. Then they address it to the deity and hang it with the others. It is a petition, not a wish list, and that is why the language and the paper often mirror a real legal filing.' },
  { q:'How do I write a petition — do I need stamp paper?', a:'Plain paper is fine and most letters are on it. Stamp paper is a convention, not a rule. People use non-judicial stamp paper when the matter is an actual legal dispute, because it makes the petition feel formally filed. Write it in whatever language you think in, state the grievance and the outcome you are asking for, sign it, and tie it to the railings. Priests on site will show you where. If you cannot travel, people do post letters to Golu Devta Temple, Chitai, Almora, Uttarakhand 263601. There is no official online submission form, whatever some sites imply.' },
  { q:'Why are there so many bells at Chitai Golu Devta Temple?', a:'Every bell is a receipt, not a request. You hang the letter when you need justice and you come back and hang a bell when you get it. Generations of that have produced a canopy of brass over every path and beam. You will see “lakhs of bells” in print; nobody has counted them, so read that as folklore. Thousands is safe and still astonishing.' },
  { q:'Where is Chitai Golu Devta Temple and how far is Almora?', a:'It sits at about 1,633 m on the Almora–Pithoragarh road (NH-309B), near Falsima village, roughly 4 km short of the Binsar Wildlife Sanctuary gate. Sources quote 8, 9 and 10 km from Almora town — plan for a 20–30 minute drive rather than a fixed number. Coordinates are 29.6169°N, 79.7015°E.' },
  { q:'Chitai or Ghorakhal — which Golu Devta temple should I visit?', a:'Chitai if you have to pick one. It is the busiest of the Golu shrines, it has the letters and the bell canopy at full scale, and it pairs with Almora, Kasar Devi, Binsar and Jageshwar in a single trip. Ghorakhal, near Bhowali above Nainital, is the other big one: quieter, more local, popular with students, and far easier if you are already on the Nainital side. Champawat is the third, and the one with the deepest dynastic claim. Same deity in all three.' },
  { q:'What is the best time to visit?', a:'March to June and September to November. Clear skies, safe roads, and on a good morning a line of Himalayan peaks behind the ridge. Skip July and August — the Almora–Pithoragarh road takes landslides in the monsoon. Winter is cold and quiet and genuinely lovely if you can handle 5°C and pack for it. The Golu Devta fair falls in Chaitra (March–April) and is the loudest the courtyard gets.' },
];

function Schema() {
  const ld = [{
    '@context':'https://schema.org','@type':'HinduTemple',
    '@id':`${SITE.baseUrl}/chitai-golu-devta-temple#temple`,
    name:'Chitai Golu Devta Temple',
    alternateName:['Chitai Temple','Golu Devta Temple Almora','Chitai Golu Devta Mandir','Goljyu Temple','चितई गोलू देवता मंदिर'],
    url:`${SITE.baseUrl}/chitai-golu-devta-temple`,
    description:'Shrine of Golu Devta (Goljyu / Gwel), revered across Kumaon as the god of justice and worshipped as an incarnation of Gaur Bhairav, a form of Shiva. Located near Falsima village on the Almora–Pithoragarh road, about 8–10 km from Almora, Uttarakhand. Devotees hang written petitions — often on non-judicial stamp paper — and offer a brass bell once the matter is resolved.',
    address:{ '@type':'PostalAddress', streetAddress:'Chitai, Almora–Pithoragarh Road', addressLocality:'Almora', postalCode:'263601', addressRegion:'Uttarakhand', addressCountry:'IN' },
    geo:{ '@type':'GeoCoordinates', latitude:'29.6169', longitude:'79.7015', elevation:'1633' },
    openingHoursSpecification:[{ '@type':'OpeningHoursSpecification', dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens:'06:00', closes:'19:00' }],
    isAccessibleForFree:true,
    touristType:['Pilgrim','Cultural traveller'],
    hasMap:'https://www.google.com/maps?q=29.6169,79.7015',
    sameAs:['https://en.wikipedia.org/wiki/Golu_Devata','https://almora.nic.in/'],
    containedInPlace:{ '@type':'AdministrativeArea', name:'Almora district, Kumaon, Uttarakhand, India' },
  },{
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  },{
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Uttarakhand Tour Packages', item:`${SITE.baseUrl}/uttarakhand-tour-packages` },
      { '@type':'ListItem', position:3, name:'Chitai Golu Devta Temple', item:`${SITE.baseUrl}/chitai-golu-devta-temple` },
    ],
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const td = { padding:'10px 14px', borderBottom:'1px solid hsl(var(--border))', fontSize:14 };
const teal = { color:'var(--teal)', fontWeight:600 };

const FACTS = [
  ['Deity', 'Golu Devta (Goljyu / Golju / Gwel) — worshipped as an incarnation of Gaur Bhairav, a form of Shiva'],
  ['Known as', 'Nyaya ke Devta — the god of justice'],
  ['Location', 'Chitai, near Falsima village, on the Almora–Pithoragarh road (NH-309B)'],
  ['District', 'Almora, Kumaon division, Uttarakhand'],
  ['Distance from Almora', '8–10 km (sources vary) — 20–30 minutes by road'],
  ['Altitude', '≈1,633 m (5,358 ft)'],
  ['Coordinates', '29.6169° N, 79.7015° E'],
  ['Timings', 'Commonly cited 6:00 AM – 7:00 PM — confirm locally'],
  ['Entry fee', 'None'],
  ['Time needed', '1–2 hours; 2–3 if you write a petition'],
  ['What people offer', 'Written petitions (plain or stamp paper) · brass bells after a wish is granted'],
  ['Nearest railhead / airport', 'Kathgodam ≈90 km · Pantnagar ≈120–127 km'],
];

const DIST = [
  ['Almora town', '8–10 km', '20–30 min'],
  ['Kasar Devi Temple', '≈12 km', '35 min'],
  ['Binsar Sanctuary gate', '≈4 km', '15 min'],
  ['Katarmal Sun Temple', '≈20 km', '50 min'],
  ['Jageshwar Dham', '35–41 km', '1.5 hrs'],
  ['Nainital', '60–65 km', '2–2.5 hrs'],
  ['Kathgodam (railhead)', '≈90 km', '3–3.5 hrs'],
  ['Pantnagar (airport)', '120–127 km', '3.5–4 hrs'],
  ['Haridwar', '≈340 km', '9–10 hrs'],
  ['Delhi', '≈375 km', '9–10 hrs'],
];

const THREE = [
  ['Chitai', 'Almora–Pithoragarh road, 8–10 km from Almora', 'The letters and the bell canopy at full scale. Busiest by far.', 'Pairs with Almora, Kasar Devi, Binsar, Jageshwar'],
  ['Ghorakhal', 'Near Bhowali, above Nainital', 'Quieter, deeply local, a favourite of students before exams', 'Easy add-on if you are based in Nainital'],
  ['Champawat', 'Champawat town, east Kumaon', 'The oldest dynastic claim on the deity; far fewer visitors', 'Only worth it if you are already heading to Pithoragarh'],
];

const ITIN = [
  ['Day 1', 'Haridwar / Delhi → Nainital', 'Long highway day via Haldwani. Evening at Naini Lake.'],
  ['Day 2', 'Nainital + Kainchi Dham', 'Neem Karoli Baba ashram, 17 km on the Almora road. Night in Nainital.'],
  ['Day 3', 'Nainital → Almora', 'Cross the ridge. Afternoon at Chitai Golu Devta Temple — go late, the light is better and the crowd thins.'],
  ['Day 4', 'Jageshwar Dham + Katarmal', '124 stone temples in a deodar valley, then the 9th-century sun temple on the way back.'],
  ['Day 5', 'Binsar + Kasar Devi', 'Zero Point for the Himalayan skyline at sunrise, Kasar Devi and Almora bazaar after.'],
  ['Day 6', 'Almora → Haridwar / Delhi', 'Drive out via Haldwani. Bal mithai for the road.'],
];

export default function ChitaiGoluDevtaTemple() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🔔 Kumaon&rsquo;s Court of Justice</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Chitai Golu Devta Temple, Almora &mdash; Timings, the Letter Ritual &amp; How to Reach</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>The shrine where people file a written petition to a god and hang a bell when the verdict comes &mdash; updated {SITE.lastUpdated}</p>
      </div>
    </section>

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>&rsaquo;</span>
        <Link href="/uttarakhand-tour-packages" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Uttarakhand Tour Packages</Link><span>&rsaquo;</span>
        <span>Chitai Golu Devta Temple</span>
      </div>
    </nav>

    <article style={{ maxWidth:820, margin:'0 auto', padding:'32px 20px 60px' }}>
      <BlogAuthor variant="top" author="sumit" article={{ slug:'chitai-golu-devta-temple', title:'Chitai Golu Devta Temple 2026 — Timings, Letters & Route', description:'Chitai Golu Devta Temple near Almora — the god of justice, the petition ritual, darshan timings, distances and how to fit it into a Kumaon trip.', datePublished:'2026-07-27', dateModified: SITE.lastUpdatedISO, lang:'en-IN' }} />

      <AnswerBox>
        Chitai Golu Devta Temple sits <strong>8&ndash;10 km from Almora</strong> on the Almora&ndash;Pithoragarh road in Kumaon, Uttarakhand. It is dedicated to <strong>Golu Devta, the god of justice</strong>, and devotees do not simply pray here: they <strong>write out their grievance and tie it to the railings</strong>, often on legal stamp paper, then return to hang a <strong>brass bell</strong> once the matter is settled. Darshan is commonly <strong>6 AM to 7 PM</strong>, entry is free, and most people stay an hour or two.
      </AnswerBox>

      <h2 style={h2}>A Temple That Runs Like a Courtroom</h2>
      <p style={p}>Most temples ask you to be quiet. This one asks you to file.</p>
      <p style={p}>Walk into the Chitai courtyard and the first thing you notice is paper &mdash; thousands of handwritten sheets tied along every railing, fluttering the way prayer flags do elsewhere. Then you hear the brass. Bells hang from the beams, the gateway, the paths, in every size from a wrist bell to something you would need both arms to lift. The letters are the cases. The bells are the verdicts.</p>
      <p style={p}>People come here with the things that have gone wrong and stayed wrong: a land dispute with a cousin, a case that has been adjourned eleven times, wages that never arrived, a marriage that fell apart badly. They write it down the way you would write to a magistrate, sign it, and leave it with Goljyu. It is one of the few places in India where faith takes a documentary form &mdash; and once you have stood in that courtyard, no other temple quite reads the same way.</p>

      <h2 style={h2}>Chitai Golu Devta Temple at a Glance</h2>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))' }}>
          <tbody>
            {FACTS.map(([k,v]) => (
              <tr key={k}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)', width:'40%' }}>{k}</td>
                <td style={{ ...td, color:'#334155' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>Who Golu Devta Is, and Why Kumaon Calls Him the God of Justice</h2>
      <p style={p}>Golu Devta, who you will also hear called <strong>Goljyu</strong>, <strong>Golju</strong> or <strong>Gwel</strong>, is a folk deity of the Kumaon hills, worshipped as an incarnation of <strong>Gaur Bhairav</strong>, a fierce form of Shiva. He is shown on a white horse, and unlike deities you approach for prosperity or protection, he is approached for a ruling.</p>
      <p style={p}>The legend behind that reputation is worth knowing, because it explains the whole ritual. A king met a woman while out hunting and married her. His senior queens, jealous, stole her newborn son, put a stone in the cradle in his place, and set the child adrift in a river. A fisherman found the boy and raised him. Years later the child turned up with a wooden horse and led it to the water to drink. When the villagers laughed, because a wooden horse cannot drink, he answered that a woman likewise cannot give birth to a stone. The deception collapsed, his mother was cleared, and in time he was deified as the one who delivers the verdict nobody else will.</p>
      <p style={p}>That is the point. Golu was a victim of injustice first. Kumaonis do not treat him as a distant power to be flattered; they treat him as someone who has been on the wrong side of a fixed case and will therefore take yours seriously. His name still carries into daily speech in the hills, and in the <em>jagar</em> tradition (the all-night Kumaoni ritual singing where a deity is invoked through a medium) Golu is among the most frequently called.</p>

      <h2 style={h2}>How to Actually Write a Petition to Golu Devta</h2>
      <p style={p}>Every guide describes this ritual. Almost none of them tells you how to do it. Here is the practical version.</p>
      <h3 style={h3}>What to write it on</h3>
      <p style={p}><strong>Plain paper is completely fine</strong>, and most of the letters on those railings are exactly that &mdash; a page from a notebook, a printed sheet, a torn-off half. The <strong>non-judicial stamp paper</strong> you will see everywhere is a convention, not a requirement. People use it when the grievance is a live legal matter, because filing on the same paper you would use for a real petition makes the act feel formal. If that matters to you, stamp paper is sold by vendors and small legal shops in Almora town before you drive up. If it does not, do not bother.</p>
      <h3 style={h3}>What to say</h3>
      <p style={p}>Write it as an application, not a wish. In practice that means four things: who you are, what happened, who you believe wronged you, and what outcome you are asking for. Language does not matter &mdash; Hindi, Kumaoni, English, whatever you actually think in. People sign and date them. Some attach photocopies of case papers. Nobody reads them but the deity and, occasionally, a curious stranger, which is its own kind of exposure and part of why the ritual carries weight.</p>
      <h3 style={h3}>Where to put it, and what comes after</h3>
      <p style={p}>Tie or pin it to the railings with the rest. The priests on site will point you to a spot &mdash; they arrange these constantly and are used to first-timers. Then the second half of the deal: <strong>if the matter resolves, you come back and hang a bell.</strong> Bells are sold at the stalls on the approach road in every size and price. That return trip is the part people take most seriously, and it is why the temple is buried in brass.</p>
      <h3 style={h3}>If you cannot travel</h3>
      <p style={p}>Letters do arrive by post. The address people use is <strong>Golu Devta Temple, Chitai, Almora, Uttarakhand 263601</strong>. Be aware of what that is and is not: it is a postal delivery to a temple, not a registered submission system. A number of sites imply there is an official online form for sending a <em>chitthi</em> to Golu Devta. <strong>There is not.</strong> Anything charging you to file one online is not connected to the temple.</p>

      <h2 style={h2}>Why There Are Thousands of Bells</h2>
      <p style={p}>The bells are not requests. They are receipts.</p>
      <p style={p}>The loop is closed and simple: the letter opens the case, the bell closes it. You hang paper when you need justice; you hang brass when you have received it. Generations of that have produced the canopy you walk under &mdash; and it means the density of bells is, in local reading, a running tally of answered prayers rather than a decoration.</p>
      <p style={p}>One honest note. You will see &ldquo;lakhs of bells&rdquo; in a lot of writing about Chitai. Nobody has ever counted them, and no temple authority publishes a figure. <em>Thousands</em> is the safe word and it is still remarkable. Alongside the bells you will notice white cloth tied to the railings and small brass figurines left on ledges &mdash; the same gratitude, in other forms.</p>

      <h2 style={h2}>Darshan Timings, Entry Fee &amp; How Long to Allow</h2>
      <p style={p}>This is where published sources disagree, so here is the spread rather than a false certainty.</p>
      <p style={p}>Most travel pages give <strong>6:00 AM to 7:00 PM</strong>. One Uttarakhand operator publishes a fuller schedule &mdash; opening 5:00 AM, darshan until noon, a <strong>midday break from 12:00 to 2:00 PM</strong>, afternoon darshan until 8:00 PM, with aarti around 6:00&ndash;6:30 AM and again 7:00&ndash;7:30 PM. There is no official temple website or Uttarakhand Tourism page that settles it. Both are plausible; hill temples routinely shorten hours in winter and stretch them during fairs.</p>
      <p style={p}>What to do with that: <strong>plan for 6 AM to 7 PM, avoid arriving between noon and 2 PM, and confirm on the day</strong> &mdash; your driver or any Almora hotel desk will know the current hours. In December and January the light is gone by 5:30 PM anyway.</p>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>Entry fee:</strong> none. There is no ticket and no queue system.</li>
        <li style={{ marginBottom:8 }}><strong>Open:</strong> all seven days, year-round.</li>
        <li style={{ marginBottom:8 }}><strong>Time to allow:</strong> 1&ndash;2 hours normally. Make it 2&ndash;3 if you are writing a petition or want to actually read the letters, which is the most affecting thing you can do here.</li>
        <li style={{ marginBottom:8 }}><strong>Best hour:</strong> early morning or the last hour before dark. Midday is flat light and tour-bus traffic.</li>
      </ul>

      <h2 style={h2}>History &mdash; Katyuri or Chand? What the Record Actually Supports</h2>
      <p style={p}>Two traditions circulate, they do not agree, and it is worth saying so plainly rather than picking one and calling it fact.</p>
      <h3 style={h3}>The Katyuri version</h3>
      <p style={p}>Golu was the son of <strong>King Jhal Rai and Queen Kalinka</strong> and served as a general of the Katyuri kings, who are said to have invoked him before passing judgment. The Katyuris ruled Kumaon roughly between the 7th and 12th centuries.</p>
      <h3 style={h3}>The Chand version</h3>
      <p style={p}>Golu was a commander under the later <strong>Chand dynasty</strong>, named in some accounts as serving Baz Bahadur (r. 1638&ndash;1678), who died in battle. A separate strand of the same tradition says the deity appeared in the dream of a Pant Brahmin and asked for a temple at Chitai after the Chand capital moved from Champawat to Almora. Several travel sources credit a Chand commander with building the shrine in the 12th century.</p>
      <p style={p}>Notice the problem: the dynasty and the dates do not line up across versions, and the strongest written sources for Golu Devta are encyclopedic and folkloric rather than archaeological. <strong>Treat the founding century as tradition, not record.</strong> What every telling agrees on is the shape of the thing &mdash; a man wronged, who becomes the guarantor that others will not be. That consistency is more revealing than a date would be.</p>

      <h2 style={h2}>Chitai vs Ghorakhal vs Champawat &mdash; Which Golu Temple?</h2>
      <p style={p}>Golu Devta has shrines across Kumaon and three that matter. Same deity, very different visits.</p>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:560 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Temple','Where','What makes it different','Fits with'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {THREE.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[1]}</td>
                <td style={{ ...td, color:'#334155' }}>{r[2]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={p}>If you are choosing one and you are anywhere near Almora, choose Chitai. If your trip is built around Nainital and you have half a morning, Ghorakhal near Bhowali gives you the same deity with a fraction of the crowd.</p>

      <h2 style={h2}>How to Reach Chitai Golu Devta Temple</h2>
      <p style={p}>Everything funnels through Almora. Get to Almora, then it is 8&ndash;10 km up the Pithoragarh road &mdash; twenty to thirty minutes, tarmac the whole way, with the temple signposted and directly on the roadside. No trek, no climb.</p>
      <h3 style={h3}>By road</h3>
      <p style={p}>From Delhi it is roughly 375 km via Moradabad, Haldwani and Almora &mdash; a nine to ten hour drive that most people break at Nainital or Kathgodam. From <strong>Haridwar or Dehradun you are crossing Garhwal to Kumaon</strong>, about 340&ndash;360 km via Najibabad and Haldwani. That is a full day behind the wheel, which is why our Kumaon trips run it as an overnight to Nainital first. Shared jeeps and local taxis leave Almora for Chitai through the day; agree the fare and the waiting time before you get in.</p>
      <h3 style={h3}>By train</h3>
      <p style={p}><strong>Kathgodam (≈90 km)</strong> is the railhead, with overnight trains from Delhi, Lucknow and beyond. From the station it is a 3&ndash;3.5 hour drive up through Bhowali and Almora. Book the onward taxi in advance if you land early morning &mdash; the station taxi stand prices climb sharply once the Delhi trains empty.</p>
      <h3 style={h3}>By air</h3>
      <p style={p}><strong>Pantnagar (120&ndash;127 km)</strong> is the nearest airport, with limited connections. Most travellers fly into <strong>Delhi</strong> instead and drive or take the train, which usually works out faster door to door than waiting on a Pantnagar connection.</p>

      <h2 style={h2}>Distance &amp; Drive-Time Chart</h2>
      <p style={p}>Kilometres alone are misleading in Kumaon &mdash; 40 km of ridge road is not 40 km of highway. These are realistic driving times, not map estimates.</p>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:420 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['From / To','Distance','Drive time'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {DIST.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, ...teal, fontWeight:700 }}>{r[1]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>Where It Is on the Map</h2>
      <div style={{ borderRadius:14, overflow:'hidden', border:'1px solid hsl(var(--border))', marginBottom:10 }}>
        <iframe
          title="Chitai Golu Devta Temple location map — Almora, Uttarakhand"
          src="https://www.google.com/maps?q=29.6169,79.7015&hl=en&z=13&output=embed"
          width="100%" height="320" style={{ border:0, display:'block' }}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>29.6169&deg; N, 79.7015&deg; E &middot; Almora&ndash;Pithoragarh road (NH-309B), near Falsima village, ~4 km short of the Binsar Sanctuary gate.</p>

      <h2 style={h2}>Best Time to Visit &mdash; and the Golu Devta Fair</h2>
      <p style={p}><strong>March to June</strong> and <strong>September to November</strong> are the windows. Spring gives you rhododendron on the ridges and 15&ndash;30&deg;C days; autumn gives you the cleanest air of the year and, on a good morning, Nanda Devi and Trishul sitting on the horizon behind the temple.</p>
      <p style={p}><strong>Avoid July and August.</strong> The Almora&ndash;Pithoragarh road takes landslides in the monsoon and the hills fog in badly &mdash; the greenery is lovely and the roads are not. <strong>Winter</strong> (December to February) drops below 5&deg;C and is genuinely the quietest, most atmospheric time here if you pack for it; the crowds thin to locals and the bells sound different in cold air.</p>
      <p style={p}>Two dates worth planning around. The <strong>Golu Devta fair falls in Chaitra (March&ndash;April)</strong> and is when the courtyard is at full pitch &mdash; more petitions, more bells, more noise, and a fair share of chaos. Almora&rsquo;s own <strong>Nanda Devi fair in September</strong> is the other big draw and turns the whole town into an event. Come during either for the atmosphere; come outside them if you want to actually stand still and read the letters.</p>

      <h2 style={h2}>What to Expect On the Ground</h2>
      <p style={p}>Small practical things that nobody writes down and everybody asks about.</p>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>Parking</strong> is roadside and it is tight. On fair days and weekends cars back up along the Pithoragarh road &mdash; go early or be prepared to walk a few hundred metres.</li>
        <li style={{ marginBottom:8 }}><strong>Steps.</strong> There is a short flight up from the road into the complex, and the paths inside step up the hillside. It is manageable but not flat. <strong>For elderly parents</strong>, ask the driver to drop as close to the gate as traffic allows and take it slowly &mdash; there is no ramp.</li>
        <li style={{ marginBottom:8 }}><strong>Footwear off</strong> before the shrine, as everywhere. The stone gets hot in June and cold in January; socks help.</li>
        <li style={{ marginBottom:8 }}><strong>Photography</strong> in the courtyard is normal and nobody minds. Be decent about it near the sanctum and near people who are clearly there over something painful.</li>
        <li style={{ marginBottom:8 }}><strong>Bells, prasad and stamp paper</strong> come from the stalls on the approach, not inside. Prices are posted loosely; ask before you pick something up.</li>
        <li style={{ marginBottom:8 }}><strong>Mobile signal</strong> is patchy on this stretch. Download your map before you leave Almora.</li>
      </ul>

      <h2 style={h2}>What Else to See Nearby</h2>
      <p style={p}>Chitai is a stop, not a day. It sits in the middle of the densest cluster of temples and viewpoints in Kumaon, and everything below is within an easy drive.</p>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>Jageshwar Dham (35&ndash;41 km)</strong> &mdash; 124 stone Shiva temples from the 9th century onward, packed into a deodar valley. The single best half-day in Kumaon.</li>
        <li style={{ marginBottom:8 }}><strong>Binsar Wildlife Sanctuary (gate ≈4 km, Zero Point ≈30 km)</strong> &mdash; oak forest and a 300-km Himalayan panorama from the top. Go at sunrise.</li>
        <li style={{ marginBottom:8 }}><strong>Kasar Devi (≈12 km)</strong> &mdash; the hilltop shrine on Crank&rsquo;s Ridge that pulled in Bob Dylan, Timothy Leary and half the 1960s. The sunset is the reason to stay.</li>
        <li style={{ marginBottom:8 }}><strong>Katarmal Sun Temple (≈20 km)</strong> &mdash; a 9th-century sun temple, one of very few in India, and almost always empty.</li>
        <li style={{ marginBottom:8 }}><strong>Almora bazaar and Nanda Devi Temple (8&ndash;10 km)</strong> &mdash; stone-paved market lanes, copperware, and bal mithai you should buy more of than you plan to.</li>
      </ul>

      <h2 style={h2}>Fitting Chitai into a Kumaon Circuit</h2>
      <p style={p}>Almost nobody travels to Almora for Chitai alone, and they shouldn&rsquo;t. The temple is thirty minutes; Kumaon is a week. This is the circuit we run, and Chitai sits on Day 3 because arriving in the afternoon light with the crowd thinning is when the courtyard is at its best.</p>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:520 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Day','Route','What happens'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {ITIN.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:700, color:'var(--teal)', whiteSpace:'nowrap' }}>{r[0]}</td>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[1]}</td>
                <td style={{ ...td, color:'#334155' }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={p}>We have been running Uttarakhand routes out of Haridwar since 2010, mostly on the Garhwal side for <Link href="/char-dham-yatra" style={teal}>Char Dham</Link>. Kumaon is the other half of the state and a completely different trip: lower, greener, gentler roads, no altitude to worry about, and temples that are old rather than crowded. If you are already booking a <Link href="/cabs/haridwar-to-nainital-cab" style={teal}>Haridwar to Nainital cab</Link> or a <Link href="/cabs/dehradun-to-nainital-cab" style={teal}>Dehradun to Nainital run</Link>, extending it to Almora and Jageshwar adds two days and very little cost. Tell us your dates and we will send the itinerary and a fixed quote &mdash; no aggregator in the middle.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24, marginTop:28 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related on this route:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Uttarakhand Tour Packages',h:'/uttarakhand-tour-packages'},{l:'Haridwar to Nainital Cab',h:'/cabs/haridwar-to-nainital-cab'},{l:'Haridwar to Mukteshwar Cab',h:'/cabs/haridwar-to-mukteshwar-cab'},{l:'Dhari Devi Temple',h:'/dhari-devi-temple'},{l:'Kedarnath Temple',h:'/kedarnath-temple'},{l:'Char Dham Yatra',h:'/char-dham-yatra'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>{l.l} &rarr;</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Planning a Kumaon Trip? We&rsquo;ll Build the Route Around Chitai</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Nainital &middot; Almora &middot; Jageshwar &middot; Binsar &mdash; 5N/6D or your own dates &middot; Direct Haridwar operator since 2010</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want a Kumaon trip including Chitai Golu Devta Temple, Almora.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href="tel:+917817996730" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <p style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:20, lineHeight:1.7 }}>
        Sources: <a href="https://en.wikipedia.org/wiki/Golu_Devata" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Wikipedia &mdash; Golu Devata</a> (deity, lineage, shrine locations), <a href="https://almora.nic.in/" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>District Almora, Govt. of Uttarakhand</a>, <a href="https://www.euttaranchal.com/tourism/chitai-golu-devta-temple.php" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>euttaranchal &mdash; Chitai Golu Devta Temple</a>, <a href="https://www.google.com/maps?q=29.6169,79.7015" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Google Maps</a> (coordinates and drive times). Distances are road distances and vary by route and source; timings are as published by travel sources and are not confirmed by an official temple authority.
      </p>

      <div style={{ marginTop:32 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
