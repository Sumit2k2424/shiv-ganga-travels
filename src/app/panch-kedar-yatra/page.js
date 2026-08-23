import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import { h2, p } from '@/lib/prose';

/* Altitudes match src/data/packages.js and src/data/botConfig.js — Rudranath in
   particular is 3,600m (Wikipedia, Chamoli district) and was wrong across four
   files until Aug 2026. If you change one, change all of them. */
const EASY = { bg:'#dcfce7', ink:'#15803d' };
const HARD = { bg:'#fee2e2', ink:'#991b1b' };

const PANCH = [
  { name:'Kedarnath',       part:'Hump',        alt:'3,583m', base:'Gaurikund',  trek:'16 km',  diff:'Hard',     tone:HARD, open:'22 Apr – 11 Nov' },
  { name:'Tungnath',        part:'Arms',        alt:'3,680m', base:'Chopta',     trek:'3.5 km', diff:'Easy',     tone:EASY, open:'May – Nov' },
  { name:'Rudranath',       part:'Face',        alt:'3,600m', base:'Sagar',      trek:'20 km',  diff:'Hardest',  tone:HARD, open:'May – Oct' },
  { name:'Madhyamaheshwar', part:'Navel',       alt:'3,497m', base:'Ransi',      trek:'16 km',  diff:'Hard',     tone:HARD, open:'May – Nov' },
  { name:'Kalpeshwar',      part:'Hair/locks',  alt:'2,134m', base:'Urgam',      trek:'2 km',   diff:'Easy',     tone:EASY, open:'Year-round' },
];

export const metadata = {
  title: { absolute: `Panch Kedar Yatra Package ${SITE.season} | Price Starts at ₹16,500 | All 5 Shiva Temples` },
  description: `Panch Kedar Yatra ${SITE.season} — Kedarnath, Tungnath, Rudranath, Madmaheshwar & Kalpeshwar, 9N/10D from ₹16,500/person. Trusted operator, 15+ yrs experience, fixed departures.`,
  keywords: [`panch kedar yatra, panch kedar yatra ${SITE.season}, panch kedar trek, 5 kedar yatra, tungnath yatra, rudranath trek`],
  alternates: { canonical: `${SITE.baseUrl}/panch-kedar-yatra` },
  openGraph: { title:`Panch Kedar Yatra ${SITE.season} — All 5 Shiva Temples Trek Guide & Package`, description:`Complete Panch Kedar Yatra guide ${SITE.season}. Kedarnath, Tungnath, Rudranath, Madmaheshwar & Kalpeshwar — all 5 Shiva temples. Package ₹16,500. 9N/10D.`, url:`${SITE.baseUrl}/panch-kedar-yatra`, type:'website', 
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Panch Kedar Yatra ${SITE.season} — All 5 Shiva Temples Trek Guide & Pa | Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Panch Kedar Yatra ${SITE.season} — All 5 Shiva Temples Trek Guide & Package`,
    description: `Complete Panch Kedar Yatra guide ${SITE.season}. Kedarnath, Tungnath, Rudranath, Madmaheshwar & Kalpeshwar — all 5 Shiva temples. Package ₹16,500. 9N/10D.`,
    images: [{ url: '/opengraph-image', alt: `Panch Kedar Yatra ${SITE.season} — All 5 Shiva Temples Trek Guide & Pa | Shiv Ganga Travels` }],
  },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org','@type':'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    address:{ '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' },
    // NO aggregateRating — the sitewide rating for Shiv Ganga Travels
    // already lives on the organization node in layout.js.
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
      {'@type':'ListItem',position:2,name:'Panch Kedar Yatra 2026 — Five Sacred Shiva Shrines',item:`${SITE.baseUrl}/panch-kedar-yatra`},
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/></>);
}

const PAA = [
  { q:'What is the Panch Kedar Yatra?', a:'Panch Kedar is a circuit of five Shiva temples in the Garhwal Himalayas: Kedarnath, Tungnath, Rudranath, Madhyamaheshwar and Kalpeshwar. Legend ties them to the Pandavas seeking Shiva, who appeared in five body-parts across these sites.' },
  { q:'How many days does Panch Kedar take?', a:'Ten days on a guided circuit that keeps the transfers tight, which is how our 9N/10D itinerary is built. Planned independently it usually runs 12–16 days, because Rudranath and Madhyamaheshwar each need a night camped at the temple and public transport between the valleys is slow. Either way it is far more demanding than Char Dham and suits people with trekking experience.' },
  { q:'When are the Panch Kedar temples open?', a:'Four of the five open roughly May to October/November, closing for winter snow. Kalpeshwar is the exception — it stays accessible year-round. Exact opening dates follow the Hindu calendar each season.' },
  { q:'Is Panch Kedar harder than Char Dham?', a:'Yes, considerably. Panch Kedar involves long, remote Himalayan treks to Rudranath and Madhyamaheshwar with basic facilities, whereas Char Dham has motorable access to most shrines and only two treks. Good fitness and trekking experience are essential.' },
  { q:'Which is the most difficult Panch Kedar temple?', a:'Rudranath is generally considered the toughest, requiring a long, steep trek through alpine meadows and forest. Madhyamaheshwar is also a multi-day trek. Kedarnath, Tungnath and Kalpeshwar are comparatively more accessible.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  // These PAA questions are the only Q&A on the page, so this IS the page's
  // single FAQPage node. (It used to `return null` on the assumption that a
  // main FAQ node existed further down — on this page there isn't one, so the
  // answers were rendering to readers and staying invisible to search and AI
  // engines. Do not re-add a second FAQPage node here.)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(paa) }} />;
}

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Yatra Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Panch Kedar Yatra 2026 — Five Sacred Shiva Shrines</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Kedarnath · Tungnath · Rudranath · Madmaheshwar · Kalpeshwar · 9N/10D · ₹16,500</p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Panch Kedar Yatra 2026 — Five Sacred Shiva Shrines</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <AnswerBox>
          <strong>Panch Kedar is a circuit of five Shiva temples in the Garhwal Himalayas</strong> — Kedarnath
          (3,583m), Tungnath (3,680m), Rudranath (3,600m), Madhyamaheshwar (3,497m) and Kalpeshwar (2,134m) —
          each said to enshrine a different part of Shiva&apos;s body. Completing all five takes about
          <strong> 10 days guided</strong> or 12–16 planned independently, and involves roughly 90km of trekking.
          Four open May to October or November; Kalpeshwar is the only one reachable year-round.
        </AnswerBox>

        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The <strong>Panch Kedar</strong> is a circuit of five sacred Shiva temples in the Garhwal Himalayas of Uttarakhand, each believed to enshrine a different part of Lord Shiva’s body that fell here after the Mahabharata. According to legend, the Pandavas sought Shiva’s blessing after the Kurukshetra war, but Shiva evaded them by hiding as a bull. When cornered, he dived into the earth — different body parts emerging at five locations now known as the Panch Kedar.</p>
        <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'24px'}}>
          <div style={{background:'var(--navy-light)',borderRadius:'10px',padding:'14px 16px',border:'1px solid rgba(15,43,91,0.1)'}}>
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--navy)',marginBottom:'4px'}}>1️⃣ Kedarnath (3,583m) — Shiva&apos;s Hump</div>
            <div style={{fontSize:'13px',color:'var(--text-mid)'}}>The most famous of the five. 16km trek from Gaurikund. 12th Jyotirlinga.</div>
          </div>
          <div style={{background:'var(--navy-light)',borderRadius:'10px',padding:'14px 16px',border:'1px solid rgba(15,43,91,0.1)'}}>
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--navy)',marginBottom:'4px'}}>2️⃣ Tungnath (3,680m) — Shiva&apos;s Arms</div>
            <div style={{fontSize:'13px',color:'var(--text-mid)'}}>World's highest Shiva temple. 3.5km trek from Chopta. Stunning 360° Himalayan views.</div>
          </div>
          <div style={{background:'var(--navy-light)',borderRadius:'10px',padding:'14px 16px',border:'1px solid rgba(15,43,91,0.1)'}}>
            {/* Rudranath is 3,600 m (Wikipedia, en.wikipedia.org/wiki/Rudranath — 11,800 ft,
                Chamoli district). This card read 2,286 m until Aug 2026, which is Mukteshwar's
                altitude in packages.js and almost certainly where it was copied from. It matters:
                Rudranath is the hardest of the five, and a sub-2,300 m figure invites pilgrims to
                under-plan fitness and acclimatisation. Same figure also corrected in
                src/data/botConfig.js and src/data/packages.js — keep all four in step. */}
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--navy)',marginBottom:'4px'}}>3️⃣ Rudranath (3,600m) — Shiva&apos;s Face</div>
            <div style={{fontSize:'13px',color:'var(--text-mid)'}}>Most remote of the five. 20km forest trek. Ancient temple with dramatic setting.</div>
          </div>
          <div style={{background:'var(--navy-light)',borderRadius:'10px',padding:'14px 16px',border:'1px solid rgba(15,43,91,0.1)'}}>
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--navy)',marginBottom:'4px'}}>4️⃣ <Link href="/madhyamaheshwar-temple" style={{color:'var(--teal)',textDecoration:'none'}}>Madmaheshwar (3,497m)</Link> — Shiva&apos;s Navel</div>
            <div style={{fontSize:'13px',color:'var(--text-mid)'}}>Trek through alpine meadows from Ransi. Located between Kedarnath and Rudranath valleys. <Link href="/madhyamaheshwar-temple" style={{color:'var(--teal)'}}>Full trek guide →</Link></div>
          </div>
          <div style={{background:'var(--navy-light)',borderRadius:'10px',padding:'14px 16px',border:'1px solid rgba(15,43,91,0.1)'}}>
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--navy)',marginBottom:'4px'}}>5️⃣ Kalpeshwar (2,134m) — Shiva&apos;s Hair</div>
            <div style={{fontSize:'13px',color:'var(--text-mid)'}}>The only Panch Kedar open all year. 2km trek. Located in Urgam valley near Joshimath.</div>
          </div>
        </div>

        <h2 style={h2}>The five temples compared</h2>
        <p style={p}>
          The five are not equally hard, and most people underestimate the gap between them. Tungnath is a
          3.5km walk that a reasonably fit family manages in a morning. Rudranath is a 20km forest and meadow
          trek each way that needs a night at the temple. Planning the circuit is mostly a matter of getting
          that difference right.
        </p>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:20 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:740 }}>
            <caption className="sr-only">Panch Kedar temples compared by altitude, trek base, distance, difficulty and season</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Temple','Body part','Altitude','Trek base','Trek (one way)','Difficulty','Open'].map(x=>(
                  <th key={x} scope="col" style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PANCH.map((t,i)=>(
                <tr key={t.name} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0?'#fff':'var(--bg)' }}>
                  <th scope="row" style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{t.name}</th>
                  <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5 }}>{t.part}</td>
                  <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5, fontFamily:'monospace' }}>{t.alt}</td>
                  <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5 }}>{t.base}</td>
                  <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5 }}>{t.trek}</td>
                  <td style={{ padding:'10px 12px', fontSize:12.5 }}>
                    <span style={{ background:t.tone.bg, color:t.tone.ink, fontSize:11, fontWeight:700, padding:'3px 9px', borderRadius:100, whiteSpace:'nowrap' }}>{t.diff}</span>
                  </td>
                  <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5 }}>{t.open}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          Trek distances are one way from the road head. Totalled both ways the circuit is roughly 90km on
          foot, which is why it is a genuinely different proposition from{' '}
          <Link href="/char-dham-yatra" style={{ color:'var(--teal)' }}>Char Dham</Link>, where only Kedarnath
          and Yamunotri involve any real walking.
        </p>

        <h2 style={h2}>How long it actually takes</h2>
        <p style={p}>
          Published answers to this range from 8 days to a fortnight, and both are defensible depending on
          how you travel. Our own circuit runs <strong>9 nights and 10 days</strong> from Haridwar, which
          works because the vehicle repositions between valleys while the group is trekking, and because
          Rudranath gets a night camped at the temple rather than being forced into a single brutal day. We
          ran it as 8N/9D until 2026 and moved it out by a night for exactly that reason — the old day 3 was a
          20km descent followed by a 70km drive, which nobody enjoyed.
        </p>
        <p style={p}>
          Planned independently, budget <strong>12 to 16 days</strong>. The trekking is the same; the extra
          time goes on public transport between Guptkashi, Chopta, Sagar, Ransi and the Urgam valley, which
          are connected by shared jeeps running on their own schedule. Two of the five &mdash;{' '}
          <Link href="/madhyamaheshwar-temple" style={{ color:'var(--teal)' }}>Madhyamaheshwar</Link> and
          Rudranath &mdash; are also the two where weather most often costs a day.
        </p>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:8}}>📦 Our Featured Package:</div>
          <Link href={`/packages/panch-kedar-yatra-9n-10d-haridwar`} style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',padding:'16px 18px',borderRadius:10,border:'1px solid hsl(var(--border))',textDecoration:'none',gap:12}}>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--text)',marginBottom:3}}>View 9N/10D Package →</div>
              <div style={{fontSize:12.5,color:'var(--text-muted)'}}>Full itinerary · Inclusions · FAQs · Book online</div>
            </div>
            <div style={{fontWeight:800,fontSize:22,color:'var(--navy)',whiteSpace:'nowrap'}}>From ₹16,500</div>
          </Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/blog/kedarnath-trek-guide" href="/blog/kedarnath-trek-guide" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid hsl(var(--border))'}}>{"Kedarnath Trek Guide"}<span> →</span></Link>
              <Link key="/char-dham-yatra" href="/char-dham-yatra" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid hsl(var(--border))'}}>{"Char Dham Yatra 2026"}<span> →</span></Link>
              <Link key="/blog/best-time-char-dham" href="/blog/best-time-char-dham" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid hsl(var(--border))'}}>{"Best Time to Visit"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-packing-list" href="/blog/char-dham-yatra-packing-list" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid hsl(var(--border))'}}>{"Char Dham Packing List"}<span> →</span></Link>
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h2 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h2>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Panch Kedar Yatra 2026 — Five Sacred Shiva Shrines.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href='tel:+917817996730' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
              <div style={{ marginTop:36 }}>
          <PAASchema/>
          <PeopleAlsoAsk items={PAA}/>
        </div>
      </article>
    </>
  );
}
