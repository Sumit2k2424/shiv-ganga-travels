import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Gangotri Yatra 2026 — Package, Route, Temple',
  description: 'Plan Gangotri Yatra 2026 from Haridwar. ₹5,699 per person. Route via Uttarkashi, Harsil valley, Gaumukh glacier option. Motor road to temple — no trek',
  keywords: ['gangotri yatra, gangotri yatra 2026, gangotri yatra package, haridwar to gangotri, gangotri temple guide'],
  alternates: { canonical: `${SITE.baseUrl}/gangotri-yatra` },
  openGraph: { title: 'Gangotri Yatra 2026 — Package, Route, Temple Guide', description: 'Plan Gangotri Yatra 2026 from Haridwar. ₹5,699 per person. Route via Uttarkashi, Harsil valley, Gaumukh glacier option. Motor road to temple — no trek', url:`${SITE.baseUrl}/gangotri-yatra`, type:'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Gangotri Yatra 2026 — Package, Route, Temple Guide',
    description: 'Plan Gangotri Yatra 2026 from Haridwar. ₹5,699 per person. Route via Uttarkashi, Harsil valley, Gaumukh glacier option. Motor road to temple — no trek',
    images: [{ url: '/opengraph-image', alt: 'Gangotri Yatra 2026 — Package, Route, Temple Guide | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org','@type':'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    address:{ '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' },
    aggregateRating:{ '@type':'AggregateRating', ratingValue:4.6, reviewCount:38, bestRating:5 },
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
      {'@type':'ListItem',position:2,name:'Gangotri Yatra 2026 — Sacred Origin of the Ganga',item:`${SITE.baseUrl}/gangotri-yatra`},
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/></>);
}

const PAA = [
  { q:'When does Gangotri open in 2026?', a:'Gangotri Temple opens on April 19, 2026, on Akshaya Tritiya, alongside Yamunotri. It closes around November 10–11, 2026 (Diwali/Bhai Dooj), when the deity is moved to Mukhba village for winter worship.' },
  { q:'Is there a trek to reach Gangotri?', a:'No. Gangotri is fully motorable right up to the temple — no trek is required, which makes it the most accessible of the four dhams. A trek only comes in if you continue 19 km upstream to Gaumukh, the actual glacial source of the Bhagirathi.' },
  { q:'How do I reach Gangotri?', a:'By road via Haridwar → Rishikesh → Uttarkashi → Harsil → Gangotri, about 288 km from Haridwar. Nearest airport is Jolly Grant, Dehradun (~250 km); nearest railhead is Haridwar. Most pilgrims break the drive overnight at Uttarkashi or Harsil.' },
  { q:'What is the best time to visit Gangotri?', a:'May–June and September–October, when the weather is stable and roads are clear. Summer days are mild (15–29°C) with cold nights; avoid the July–August monsoon, when landslides and slippery roads make the journey risky.' },
  { q:'What are the Gangotri darshan timings?', a:'Roughly 6:15 AM to 2:00 PM and 3:00 PM to 9:30 PM during the season, with Mangala Aarti in the morning and Sandhya Aarti in the evening. Timings can shift on the opening day and major festival days.' },
  { q:'Is registration mandatory for Gangotri?', a:'Yes. Char Dham registration is compulsory for all four shrines, including Gangotri. It\'s free — register online at registrationandtouristcare.uk.gov.in, on the Tourist Care Uttarakhand app, or at biometric counters before you travel.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  return null; // one FAQPage per page — PAA answers stay visible in the accordion, schema lives in the main FAQ node
}

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Yatra Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Gangotri Yatra 2026 — Sacred Origin of the Ganga</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Motor road to temple · Bhagirathi gorge · Harsil valley · Gaumukh glacier option</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home<span>›</span>
          <span>Gangotri Yatra 2026 — Sacred Origin of the Ganga</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
          <div style={{fontSize:12,color:'var(--text-muted)',marginBottom:16,textAlign:'right'}}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Gangotri sits at 3,415 metres in the Uttarkashi district of Uttarakhand, on the banks of the Bhagirathi river. It is the mythological and geographical origin of the Ganga — the river that has shaped Indian civilisation for millennia. The temple here, dedicated to Goddess Ganga, is one of the Char Dham shrines and draws hundreds of thousands of pilgrims every year between May and November.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Unlike Yamunotri and Kedarnath, Gangotri requires <strong>no trekking</strong>. A well-maintained motor road leads directly to the temple town. This makes it one of the most accessible of the four dhams, suitable for all ages and fitness levels.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'36px 0 12px'}}>The Story Behind Gangotri — Why a King Brought the Ganga to Earth</h2>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The legend of Gangotri is really the story of a king named Bhagirath and sixty thousand cursed ancestors. King Sagar of the Ikshvaku dynasty performed a great ritual called Ashwamedha Yagna, but his sacred horse was stolen (by Indra, the king of gods, as a test). Sagar's sixty thousand sons were sent to search for it. They eventually found it near the meditation spot of the sage Kapila — and suspecting him of theft, they disturbed his penance. Sage Kapila, with the power of his meditation, reduced all sixty thousand princes to ash with a single glance.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Their descendant, King Bhagirath, was consumed by the need to secure liberation for his ancestors' souls. The only way was to bring the sacred Ganga from the heavens to Earth so her waters could touch their ashes. Bhagirath meditated for thousands of years at this very spot — the rock at Gangotri called Bhagirathi Shila — until Brahma granted his wish. But there was a problem: the force of Ganga descending from the heavens would destroy the Earth. Only Lord Shiva could absorb that impact. More penance, more years of prayer, and Shiva agreed — catching Ganga in his matted hair and releasing her slowly in seven streams. The river that flows past Gangotri temple today is the Bhagirathi, named after the king who gave everything to free his family. His name also gave us the word <em>bhagirath prayas</em> — extraordinary, seemingly impossible effort.</p>

        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'36px 0 12px'}}>Places to Visit Around Gangotri</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14, marginBottom:28 }}>
          {[
            { name:'Bhagirathi Shila', dist:'At the temple', desc:'The flat rock where King Bhagirath is said to have meditated for thousands of years to bring the Ganga to earth. You can stand on it. It is submerged during monsoon season when the river rises — which is also why it looks so polished and worn.' },
            { name:'Suryakund & Brahma Kund', dist:'Near the temple', desc:'Two natural pools fed by the Bhagirathi. Pilgrims take a dip here before entering the temple. The water in May–June is bitterly cold — snowmelt from the glacier upstream. The ritual dip is brief and bracing, and considered highly purifying.' },
            { name:'Harsil Valley', dist:'25km before Gangotri', desc:'Ask our drivers to stop here on the way up. Apple and walnut orchards line the valley, deodar forests rise on both banks of the Bhagirathi, and the river here is a brilliant turquoise — wider and calmer than anywhere else on the route. One of the most beautiful valleys in Uttarakhand. The Tibetan village of Harsil itself has a quiet, other-worldly quality.' },
            { name:'Gaumukh Glacier', dist:'19km trek from Gangotri', desc:'The actual snout of the Gangotri glacier — the physical source of the Bhagirathi river. Ice, rock, and roaring water at 3,892m. A permit is required (₹150 per person, issued at the Forest Office in Gangotri). This is not part of the standard yatra — it is a serious two-day trek — but for those who have the fitness, it is among the most profound places in the Himalayas.' },
            { name:'Bhairon Ghati', dist:'10km before Gangotri', desc:'A narrow gorge where the Jadhganga river meets the Bhagirathi. The confluence is dramatic — two rivers of completely different colours meeting in a narrow, roaring gorge. There is a small Bhairon temple here. The approach road hugs the cliff edge and is genuinely spectacular.' },
            { name:'Uttarkashi', dist:'100km from Gangotri', desc:'The overnight base for most Gangotri pilgrims. More than just a transit point — Uttarkashi has the ancient Vishwanath Temple (a replica of the Kashi Vishwanath), a thriving bazaar, and a peaceful ghat on the Bhagirathi. Worth an evening walk.' },
          ].map(pl => (
            <div key={pl.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{pl.name}</div>
              <div style={{ fontSize:11.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:8 }}>📍 {pl.dist}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>{pl.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'36px 0 12px'}}>Wildlife & Natural Sightings on the Route</h2>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The drive from Uttarkashi to Gangotri passes through dense deodar and oak forests — a rarity in an era when Himalayan forest cover has sharply declined. <strong>Langurs</strong> (grey monkeys with black faces) are almost guaranteed sightings at lower elevations, often sitting on road-side boulders in the morning sun. As you gain altitude past Harsil, watch the sky for the <strong>Himalayan griffon vulture</strong> — a bird with a 2.5-metre wingspan that rides thermals above the gorge with barely a wingbeat.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The Gangotri National Park, which begins just before the temple town, is the last stronghold of the <strong>snow leopard</strong> in Uttarakhand. You will almost certainly not see one from the road — but knowing you are in their territory changes how you look at every rocky outcrop. Our group that visited in late September 2024 spotted fresh pugmarks on the trail toward Gaumukh, which the forest guard confirmed. Brown bears also inhabit these forests and are occasionally spotted in the early morning on the road above Uttarkashi.</p>


        <ul style={{paddingLeft:'20px',color:'var(--text-mid)',fontSize:'14.5px',lineHeight:2.3,marginBottom:'20px'}}>
          <li><strong>Gangotri Temple</strong> — 18th century temple enshrining Goddess Ganga. Pre-dawn aarti at 6 AM is particularly moving.</li>
          <li><strong>Bhagirathi Shila</strong> — The sacred rock where King Bhagirath is said to have meditated to bring Ganga to earth.</li>
          <li><strong>Suryakund & Brahma Kund</strong> — Two sacred pools near the temple. Pilgrims take a holy dip before entering the shrine.</li>
          <li><strong>Harsil Valley</strong> — 25 km before Gangotri. Apple orchards, cedar forests, and the most serene stretch of the Bhagirathi. Worth a stop.</li>
          <li><strong>Gaumukh Glacier</strong> — 20 km trek from Gangotri — the actual snout of the Gangotri glacier, the source of the Bhagirathi/Ganga. A permit is required. Available as add-on.</li>
        </ul>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>Route from Haridwar</h2>
        <div style={{background:'var(--bg)',borderRadius:'12px',padding:'16px 20px',border:'1px solid var(--border)',fontSize:'14px',lineHeight:2.2,marginBottom:'20px'}}>
          <strong>Haridwar</strong> → Rishikesh → Tehri → <strong>Uttarkashi</strong> (overnight, 185 km) → Harsil Valley → <strong>Gangotri</strong> Temple Darshan → return to Uttarkashi overnight → Haridwar
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:8}}>📦 Our Featured Package:</div>
          <Link href={`/packages/gangotri-yatra-package-2n-3d-haridwar`} style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',padding:'16px 18px',borderRadius:10,border:'1px solid var(--border)',textDecoration:'none',gap:12}}>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--text)',marginBottom:3}}>View 2N/3D Package →</div>
              <div style={{fontSize:12.5,color:'var(--text-muted)'}}>Full itinerary · Inclusions · FAQs · Book online</div>
            </div>
            <div style={{fontWeight:800,fontSize:22,color:'var(--navy)',whiteSpace:'nowrap'}}>From ₹5,699</div>
          </Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/char-dham-yatra" href="/char-dham-yatra" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Yatra 2026"}<span> →</span></Link>
              <Link key="/gangotri-temple" href="/gangotri-temple" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Gangotri Temple Guide"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-registration" href="/blog/char-dham-yatra-registration" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Registration Guide"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-packing-list" href="/blog/char-dham-yatra-packing-list" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Packing List"}<span> →</span></Link>
          </div>
        </div>


        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.4rem',fontWeight:700,color:'var(--navy)',marginBottom:14,marginTop:32}}>
          Recommended Hotels Near Gangotri (Uttarkashi / Harsil)
        </h2>
        <p style={{fontSize:'14.5px',color:'var(--text-muted)',marginBottom:16}}>Most pilgrims stay in Uttarkashi (100km before Gangotri) or Harsil (24km). Gangotri town has limited accommodation.</p>
        <div style={{overflowX:'auto',marginBottom:28}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:13.5}}>
            <thead><tr style={{background:'var(--navy)'}}>
              {['Hotel','Location','Rating','Price/Night','Notes'].map(h=>(
                <th key={h} style={{padding:'10px 12px',textAlign:'left',color:'#fff',fontWeight:700,fontSize:12}}></th>
              ))}
            </tr></thead>
            <tbody>
              <tr style={{borderBottom:'1px solid var(--border)',background:'#fff'}}>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>GMVN Uttarkashi</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:13}}>Uttarkashi</td>
                <td style={{padding:'10px 12px',color:'#E8920A',fontWeight:700,fontSize:13}}>★★</td>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>₹1,200–2,000/night</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:12.5}}>Government guest house. Central location. Good base for Gangotri. Uttarkashi has best amenities on this route.</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--bg)'}}>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>Hotel Himalayan Star</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:13}}>Uttarkashi</td>
                <td style={{padding:'10px 12px',color:'#E8920A',fontWeight:700,fontSize:13}}>★★★</td>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>₹2,000–3,500/night</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:12.5}}>Best hotel in Uttarkashi. Hot water, restaurant, reliable WiFi. 100km from Gangotri.</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'#fff'}}>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>GMVN Harsil</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:13}}>Harsil</td>
                <td style={{padding:'10px 12px',color:'#E8920A',fontWeight:700,fontSize:13}}>★★</td>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>₹1,500–2,200/night</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:12.5}}>Beautiful apple-orchard setting. 24km from Gangotri. Serene alternative to Uttarkashi. Cold nights.</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--bg)'}}>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>Hotel New Tourist</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:13}}>Gangotri town</td>
                <td style={{padding:'10px 12px',color:'#E8920A',fontWeight:700,fontSize:13}}>★</td>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>₹800–1,500/night</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:12.5}}>Basic accommodation in Gangotri town itself. Very limited options — book only via operator.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Gangotri Yatra 2026 — Sacred Origin of the Ganga.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href='tel:+917817996730' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
              <div style={{ marginTop:36 }}>
          <PAASchema/>
          <PeopleAlsoAsk items={PAA}/>
        </div>
      </article>

      <section style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'32px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>Useful Resources</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['Road Status','/char-dham-road-status'],['Opening Dates','/blog/char-dham-yatra-opening-dates-2026'],['Weather Guide','/blog/uttarakhand-weather-guide'],['Haridwar to Gangotri Cab','/haridwar-to-gangotri-cab']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'8px 16px', borderRadius:8, fontSize:13, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
