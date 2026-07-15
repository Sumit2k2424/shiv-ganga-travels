import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: 'Kedarnath Height: 3,583 m (11,755 ft) — Location, State & Facts',
  description: 'Kedarnath temple stands at 3,583 metres (11,755 ft) above sea level in Rudraprayag district, Uttarakhand — PIN 246445. Where it is, how high the trek climbs, oxygen levels and why the altitude matters.',
  keywords: ['kedarnath height','kedarnath altitude','kedarnath height in km','kedarnath sea level height','kedarnath which state','kedarnath location','kedarnath district','kedarnath uttarakhand 246445','elevation of kedarnath'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-height` },
  openGraph: {
    title: 'Kedarnath Height — 3,583 m Above Sea Level | Location & Facts',
    description: 'How high is Kedarnath, where exactly is it, and what does the altitude do to your body? Every number a pilgrim actually needs, from an operator who runs the route.',
    url: `${SITE.baseUrl}/kedarnath-height`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Height and Location Facts — Shiv Ganga Travels' }],
  },
  twitter: { card: 'summary_large_image', title: 'Kedarnath Height: 3,583 m (11,755 ft) — Location & Facts', description: 'Altitude, state, district, PIN code, oxygen levels and trek elevation gain — the complete Kedarnath facts page.', images: [{ url: '/opengraph-image', alt: 'Kedarnath Height and Location Facts' }] },
};

const PAA = [
  { q:'What is the height of Kedarnath temple?', a:'Kedarnath temple stands at 3,583 metres (11,755 feet) above sea level. In kilometres, that is about 3.58 km high. It is the highest of the four Char Dham shrines of Uttarakhand — higher than Badrinath (3,133 m), Yamunotri (3,293 m) and Gangotri (3,048 m).' },
  { q:'In which state is Kedarnath located?', a:'Kedarnath is in Uttarakhand, in the Rudraprayag district of the Garhwal Himalayas. The full postal address reads Kedarnath, Rudraprayag, Uttarakhand — PIN code 246445. It is not in Himachal Pradesh, a common mix-up because both states sit in the western Himalayas.' },
  { q:'How much do you climb on the Kedarnath trek?', a:'The trek starts at Gaurikund (1,982 m) and ends at the temple (3,583 m) — a gain of roughly 1,600 metres over 16 km. Most pilgrims feel the thinner air after Lincholi, around the 11 km mark, which is why a slow, steady pace matters more than fitness.' },
  { q:'Is there less oxygen at Kedarnath?', a:'Yes. At 3,583 m the air holds roughly 65% of the oxygen available at sea level. Healthy pilgrims adjust within a day, but breathlessness on stairs, mild headache and poor sleep on the first night are normal. Anyone with heart or lung conditions should get a doctor\u2019s clearance before the yatra.' },
  { q:'Which river flows at Kedarnath?', a:'The Mandakini river originates from the Chorabari glacier just above Kedarnath and flows past the temple town, down through Gaurikund, Sonprayag and Guptkashi, before meeting the Alaknanda at Rudraprayag.' },
  { q:'Is Kedarnath the temple the same as Kedarnath the peak?', a:'No. The temple sits at 3,583 m, while the Kedarnath peak (Kedarnath parvat) behind it rises to 6,940 m and the Kedarnath Dome to 6,831 m. The snow wall pilgrims photograph behind the shrine is this massif — nobody treks up the peak itself on the yatra.' },
];

function Schema() {
  const ld = [{
    '@context':'https://schema.org','@type':'TouristAttraction',
    '@id':`${SITE.baseUrl}/kedarnath-height#place`,
    name:'Kedarnath', url:`${SITE.baseUrl}/kedarnath-height`,
    description:'Kedarnath temple town at 3,583 m (11,755 ft) above sea level in Rudraprayag district, Uttarakhand, India — PIN 246445. Home to the Kedarnath Jyotirlinga, the highest of the Char Dham shrines.',
    geo:{ '@type':'GeoCoordinates', latitude:'30.7352', longitude:'79.0669', elevation:'3583' },
    touristType:'Pilgrim',
    sameAs:['https://en.wikipedia.org/wiki/Kedarnath','https://www.wikidata.org/wiki/Q1330332'],
    containedInPlace:{ '@type':'AdministrativeArea', name:'Rudraprayag, Uttarakhand, India' },
  },{
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  },{
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Kedarnath Yatra', item:`${SITE.baseUrl}/kedarnath-yatra` },
      { '@type':'ListItem', position:3, name:'Kedarnath Height & Location', item:`${SITE.baseUrl}/kedarnath-height` },
    ],
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };
const td = { padding:'10px 14px', borderBottom:'1px solid var(--border)', fontSize:14 };

const FACTS = [
  ['Height above sea level', '3,583 m · 11,755 ft · ~3.58 km'],
  ['State', 'Uttarakhand (Garhwal region)'],
  ['District', 'Rudraprayag'],
  ['PIN code', '246445'],
  ['Coordinates', '30.7352° N, 79.0669° E'],
  ['River', 'Mandakini (from the Chorabari glacier)'],
  ['Nearest roadhead', 'Gaurikund, 1,982 m — 16 km trek below'],
  ['Trek elevation gain', '≈1,600 m from Gaurikund to the temple'],
  ['Peak behind the temple', 'Kedarnath parvat, 6,940 m'],
  ['Temple status', 'One of the 12 Jyotirlingas · highest Char Dham shrine'],
];

export default function KedarnathHeight() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>⛰️ 3,583 m · 11,755 ft</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Kedarnath Height, Location &amp; the Facts That Matter</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>How high it is, where exactly it sits, and what the altitude does to you — updated {SITE.lastUpdated}</p>
      </div>
    </section>

    <article style={{ maxWidth:820, margin:'0 auto', padding:'36px 20px 60px' }}>
      <AnswerBox>
        Kedarnath temple stands at <strong>3,583 metres (11,755 feet) above sea level</strong> in Rudraprayag district, Uttarakhand — PIN 246445. It is the highest of the four Char Dham shrines, reached by a 16 km trek from Gaurikund that climbs about 1,600 metres. The Kedarnath peak behind the temple is a separate mountain, 6,940 m tall.
      </AnswerBox>

      <h2 style={h2}>Kedarnath at a Glance — Every Number in One Table</h2>
      <div style={{ overflowX:'auto', marginBottom:8 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid var(--border)' }}>
          <tbody>
            {FACTS.map(([k,v]) => (
              <tr key={k}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)', width:'42%' }}>{k}</td>
                <td style={{ ...td, color:'#334155' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:24 }}>Elevation figures are the ones used by BKTC and the Survey of India; you will see 3,553–3,584 m quoted in older sources depending on where the measurement was taken.</p>

      <h2 style={h2}>How High Is 3,583 Metres, Really?</h2>
      <p style={p}>Numbers on a page do not mean much until you feel them in your lungs. At 11,755 feet, Kedarnath is higher than any hill station most Indians have visited — Shimla is around 2,200 m, Nainital 2,084 m, even Auli tops out near 3,000 m. Of the four dhams, only Kedarnath crosses 3,500 m: Badrinath sits at 3,133 m, Yamunotri at 3,293 m and Gangotri at 3,048 m. That extra height is exactly why Kedarnath is the only dham you cannot drive to.</p>
      <p style={p}>For context on the world stage: the temple stands higher than the base of most European ski resorts and roughly two-thirds of the way to Everest Base Camp (5,364 m). It is genuinely high mountain territory, held by a town that functions for only six months a year.</p>

      <h2 style={h2}>Where Exactly Is Kedarnath? State, District &amp; PIN Code</h2>
      <p style={p}>Kedarnath is in <strong>Uttarakhand</strong>, not Himachal Pradesh — the two get mixed up constantly because both are western Himalayan states. Within Uttarakhand it falls in <strong>Rudraprayag district</strong>, in the Garhwal division, near the head of the Mandakini valley. The official postal PIN code is <strong>246445</strong>, which you will need for helicopter bookings, hotel forms and the yatra registration portal.</p>
      <p style={p}>On a map, the temple sits at 30.7352° N, 79.0669° E. From Haridwar it is about 240 km by road to Gaurikund, then 16 km on foot. There is no motorable road, no railway station and no airport at Kedarnath itself — the nearest airport is Jolly Grant, Dehradun, about 250 km away. If a website offers to drive you "to Kedarnath temple", treat it as the red flag it is; our <Link href="/char-dham-yatra-scams" style={{ color:'var(--teal)', fontWeight:600 }}>yatra scams guide</Link> covers this exact trick.</p>

      <h2 style={h2}>The Climb: Gaurikund (1,982 m) to the Temple (3,583 m)</h2>
      <p style={p}>The famous 16 km trek is really a 1,600-metre staircase spread over a morning. You start at Gaurikund at 1,982 m, pass Jungle Chatti (2,300 m), Bheembali (2,700 m) and Lincholi (3,200 m), and arrive at the temple gates at 3,583 m. The gradient is manageable till Bheembali; the stretch after Lincholi is where the thinner air starts asking questions. Most fit pilgrims take 6–8 hours up and 4–5 down.</p>
      <p style={p}>If the climb is not for you, ponies, palkis and kandis run at BKTC-fixed rates — current prices are on our <Link href="/kedarnath-pony-palki-kandi-rates" style={{ color:'var(--teal)', fontWeight:600 }}>pony &amp; palki rates page</Link> — and helicopters fly from Phata, Sersi and Guptkashi. The full route logistics are in our <Link href="/blog/how-to-reach-kedarnath" style={{ color:'var(--teal)', fontWeight:600 }}>how to reach Kedarnath guide</Link>.</p>

      <h2 style={h2}>What the Altitude Does to Your Body</h2>
      <p style={p}>At 3,583 m the air carries roughly 65% of the oxygen you get at sea level. For most healthy people this means breathlessness on stairs, a mild headache on the first evening and lighter sleep — all of which settle within a day. The rule that actually protects you is pacing: walk slower than feels necessary, drink more water than feels necessary, and do not race the pony track.</p>
      <p style={p}>Pilgrims over 55, and anyone with heart, lung or blood pressure conditions, must carry a doctor's fitness note — health screening posts at Sonprayag do check. Diamox helps some people but talk to your doctor first; do not borrow a co-passenger's strip. Our packages build a night at Guptkashi (1,319 m) before the climb precisely so your body gets a halfway acclimatisation step rather than jumping from Haridwar's 314 m to 3,583 m in one day.</p>

      <h2 style={h2}>Temple vs Peak — Two Different Kedarnaths</h2>
      <p style={p}>A quiet source of confusion: the shrine and the mountain share a name. The <strong>temple</strong> is at 3,583 m. The <strong>Kedarnath peak</strong> — the massive snow wall in every photo behind the shrine — rises to 6,940 m, with the neighbouring Kedarnath Dome at 6,831 m. The peak is a serious mountaineering objective requiring IMF permits; no part of the pilgrimage goes up it. When someone says they "climbed Kedarnath", they mean the trek to the temple, and that is achievement enough at this altitude.</p>
      <p style={p}>Just above the town lies the Chorabari glacier, source of the Mandakini river, and the site of Chorabari Tal — the lake whose breach caused the June 2013 flood. The temple survived, shielded by a massive boulder now worshipped as Bhim Shila. The rebuilt town, trail and the protective walls you see today all date from the reconstruction that followed.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24, marginTop:28 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Kedarnath Temple Guide',h:'/kedarnath-temple'},{l:'Kedarnath Tour Package',h:'/kedarnath-tour-package'},{l:'How to Reach Kedarnath',h:'/blog/how-to-reach-kedarnath'},{l:'Kedarnath Weather',h:'/kedarnath-weather'},{l:'Gaurikund Guide',h:'/gaurikund-guide'},{l:'Registration 2026',h:'/blog/kedarnath-registration-2026'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Kedarnath Package with Acclimatisation Night Built In</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>3N/4D from ₹6,999 · Guptkashi halt before the climb · Direct Haridwar operator since 2010</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want details for the Kedarnath 3N/4D package.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href="tel:+917817996730" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <div style={{ marginTop:36 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
