import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Panch Badri Yatra 2026 — All 5 Badri Shrines',
  description: 'Panch Badri Yatra 2026. Visit all 5 Badri shrines: Badrinath, Yogadhyan Badri, Bhavishya Badri, Vriddha Badri, Adi Badri. Packages from Haridwar.',
  keywords: ['panch badri yatra','panch badri yatra 2026','panch badri route','panch badri package from haridwar','5 badri temples uttarakhand','badri panchayatan'],
  alternates: { canonical: `${SITE.baseUrl}/panch-badri-yatra` },
  openGraph: {
    title: 'Panch Badri Yatra 2026 — Complete Guide & Packages',
    description: 'Visit all 5 sacred Badri shrines of Uttarakhand. Route, best time, package details and booking from Haridwar.',
    url: `${SITE.baseUrl}/panch-badri-yatra`, type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panch Badri Yatra 2026 — Complete Guide & Packages',
    description: 'Visit all 5 sacred Badri shrines of Uttarakhand. Route, best time, package details and booking from Haridwar.',
    images: [{ url: '/opengraph-image', alt: 'Panch Badri Yatra 2026 — Complete Guide & Packages | Shiv Ganga Travels' }],
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

const temples = [
  {
    num: 1, name: 'Badrinath', alt: '3,133m', dist: '320km from Haridwar',
    deity: 'Lord Vishnu (Badri Narayan)',
    desc: 'The most important of the Panch Badri and the fourth and final stop of the Char Dham Yatra. The Badrinarayan temple is open April to November. Tapt Kund hot spring is at the base. Mana Village (3km away) is the last Indian village before the Tibet border.',
    opens: 'Apr 23, 2026', tip: 'The most visited — arrive early to beat the queue. VIP darshan tickets are worth it here.'
  },
  {
    num: 2, name: 'Yogadhyan Badri (Pandukheshwar)', alt: '1,920m', dist: '24km from Joshimath',
    deity: 'Lord Vishnu in meditative posture',
    desc: 'The winter seat of the Badrinath deity. When Badrinath temple closes each November, the idol is ceremonially moved to Pandukheshwar. The temple is associated with the Pandavas — legend says Yudhishthira performed Yoga here after the Mahabharata war.',
    opens: 'Year-round', tip: 'Often combined with Badrinath as it is on the same road. Takes 45 minutes from Joshimath.'
  },
  {
    num: 3, name: 'Bhavishya Badri (Subhain)', alt: '2,744m', dist: '22km from Joshimath via Tapovan',
    deity: 'Future incarnation of Lord Vishnu',
    desc: 'The most remote and least visited of the five. Accessible by a 6km trek from Tapovan village. According to prophecy, Bhavishya Badri will become the main seat of Badrinath when the mountains collapse in Kali Yuga — hence the name (Bhavishya = future).',
    opens: 'May–November', tip: 'Requires a full day trip from Joshimath. Trek is manageable but not for elderly pilgrims. Very peaceful and uncrowded.'
  },
  {
    num: 4, name: 'Vriddha Badri (Animath)', alt: '1,380m', dist: '7km from Joshimath',
    deity: 'Lord Vishnu in ancient (elderly) form',
    desc: 'Very easily accessible — just 7km from Joshimath on the main highway. Legend says this is where Narada had Lord Vishnu\'s first darshan before the Badrinarayan shrine was established. The temple is old and modest — a refreshing contrast to the larger, busier shrines.',
    opens: 'Year-round', tip: 'The easiest of the five to visit. Takes only 30 minutes from Joshimath. Do not skip — it has a distinctly peaceful, unhurried atmosphere.'
  },
  {
    num: 5, name: 'Adi Badri (Chamoli)', alt: '1,000m', dist: '170km from Haridwar via Karnprayag',
    deity: 'Lord Vishnu with 14 temple complex',
    desc: 'A complex of 14 ancient temples, with the main Adi Narayan temple at the centre. Unlike the others, Adi Badri is at a lower altitude and accessible year-round. It is the most architecturally interesting of the five — the cluster of small stone temples in mountain forest is genuinely beautiful. Open year-round, making it the ideal winter Badri pilgrimage.',
    opens: 'Year-round', tip: 'The only one of the five open in winter. Often combined with the Char Dham return journey via Karnprayag.'
  },
];

const PAA = [
  { q:'What is the Panch Badri Yatra?', a:'Panch Badri is a circuit of five Vishnu temples in the Garhwal region: Badrinath (Vishal Badri), Yogadhyan Badri, Bhavishya Badri, Vridha Badri and Adi Badri. Together they form an important Vaishnavite pilgrimage around the Badrinath area.' },
  { q:'How many days does Panch Badri take?', a:'Plan about 6–9 days from Haridwar, as the five temples are spread across the Chamoli district with some requiring short treks (notably Bhavishya Badri). It\'s less strenuous than Panch Kedar but still involves hill travel.' },
  { q:'When is the best time for Panch Badri Yatra?', a:'May–June and September–October, matching the Badrinath season. Badrinath itself opens April 23, 2026. Avoid the monsoon for the trek sections and the high-altitude roads.' },
  { q:'Is Badrinath part of Panch Badri?', a:'Yes — Badrinath (also called Vishal Badri) is the principal and most famous of the five. The other four (Yogadhyan, Bhavishya, Vridha and Adi Badri) are lesser-known shrines visited around it.' },
  { q:'Is registration needed for Panch Badri?', a:'Badrinath requires the standard free Char Dham e-pass registration. The smaller Badri temples don\'t have the same checkpoint system, but it\'s wise to register for the main route. We handle Badrinath registration in our packages.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'QAPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(paa) }}/>);
}

export default function PanchBadriYatra() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity: [
          { '@type':'Question', name:'What is Panch Badri?',
            acceptedAnswer:{ '@type':'Answer', text:'Panch Badri refers to the five sacred shrines of Lord Vishnu in the Garhwal Himalayas of Uttarakhand: Badrinath (Vishal Badri), Yogadhyan Badri (Pandukheshwar), Bhavishya Badri (Subhain), Vriddha Badri (Animath), and Adi Badri (Chamoli). Completing all five is considered highly auspicious.' }},
          { '@type':'Question', name:'How many days are needed for Panch Badri Yatra?',
            acceptedAnswer:{ '@type':'Answer', text:'Minimum 5–6 days from Haridwar for a comfortable Panch Badri Yatra. This covers Adi Badri (Day 1–2), Joshimath as base (Day 3–4) for Vriddha Badri and Yogadhyan Badri, Badrinath (Day 4–5), and Bhavishya Badri (Day 5, if fit). A relaxed 7N/8D itinerary is recommended.' }},
          { '@type':'Question', name:'What is the cost of Panch Badri Yatra from Haridwar?',
            acceptedAnswer:{ '@type':'Answer', text:'Panch Badri Yatra from Haridwar starts from approximately ₹18,000–₹25,000 per person for a 6N/7D package including transport, accommodation, and meals. Contact Shiv Ganga Travels at +91-7817996730 for a customised quote.' }},
        ],
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🕌 5 Sacred Badri Shrines</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Panch Badri Yatra 2026 — Complete Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            All 5 Badri shrines · Route, best time, what to expect & packages from Haridwar
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home<span>›</span>
          Uttarakhand Tours<span>›</span>
          <span>Panch Badri Yatra</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ Last updated: May 21, 2026</div>

        <p style={p}>
          The Panch Badri — five sacred shrines of Lord Vishnu scattered across the Garhwal Himalayas — is one of the most spiritually comprehensive pilgrimages in Hinduism, yet far less known than the Char Dham or Panch Kedar. Each of the five shrines represents a different form or aspect of Lord Vishnu. Completing all five in sequence is considered to bring moksha and is especially meaningful for Vaishnava devotees.
        </p>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:10 }}>
          {[['Duration','6–8 Days'],['From Haridwar','Full circuit'],['Best Season','May–June, Sept–Oct'],['Difficulty','Easy–Moderate'],['Price From','₹18,000/person'],['Accessibility','All motorable']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize:11, color:'var(--text-muted)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>{v}</div></div>
          ))}
        </div>

        <h2 style={h2}>The Five Badri Shrines</h2>
        {temples.map(t => (
          <div key={t.name} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:14, padding:'20px', marginBottom:16, position:'relative' }}>
            <div style={{ position:'absolute', top:16, right:16, width:32, height:32, borderRadius:'50%', background:'var(--navy)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:14, color:'#FFD166' }}>{t.num}</div>
            <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:8 }}>
              <span style={{ background:'var(--navy-light)', color:'var(--navy)', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:20 }}>{t.alt}</span>
              <span style={{ background:'rgba(11,123,139,0.1)', color:'var(--teal)', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:20 }}>{t.dist}</span>
              <span style={{ background:'rgba(232,146,10,0.12)', color:'#92640a', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:20 }}>Opens: {t.opens}</span>
            </div>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:700, color:'var(--navy)', marginBottom:4 }}>{t.name}</h3>
            <div style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:10 }}>Deity: {t.deity}</div>
            <p style={{ fontSize:14, color:'#475569', lineHeight:1.75, marginBottom:10 }}>{t.desc}</p>
            <div style={{ background:'var(--bg)', borderRadius:8, padding:'8px 12px', fontSize:13, color:'var(--navy)', borderLeft:'3px solid var(--gold)' }}>
              <strong>Tip:</strong> {t.tip}
            </div>
          </div>
        ))}

        <h2 style={h2}>Suggested Panch Badri Itinerary (7 Nights)</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:6, marginBottom:24 }}>
          {[
            { day:'Day 1', plan:'Haridwar → Karnprayag → Adi Badri darshan → Karnprayag night halt' },
            { day:'Day 2', plan:'Karnprayag → Joshimath (with Vriddha Badri en route) — halt at Joshimath' },
            { day:'Day 3', plan:'Morning: Bhavishya Badri day trek from Tapovan → Return to Joshimath' },
            { day:'Day 4', plan:'Joshimath → Yogadhyan Badri (Pandukheshwar) → Badrinath — halt at Badrinath' },
            { day:'Day 5', plan:'Badrinath: Abhishek Puja (4:30 AM), Badrinath darshan, Mana Village, Evening Aarti' },
            { day:'Day 6', plan:'Badrinath → Joshimath → Rudraprayag → night halt' },
            { day:'Day 7', plan:'Rudraprayag → Haridwar' },
          ].map(({day, plan}) => (
            <div key={day} style={{ display:'flex', gap:12, alignItems:'flex-start', padding:'10px 14px', background:'#fff', borderRadius:10, border:'1px solid var(--border)' }}>
              <span style={{ background:'var(--navy)', color:'#FFD166', fontSize:11, fontWeight:700, padding:'4px 10px', borderRadius:20, flexShrink:0, whiteSpace:'nowrap' }}>{day}</span>
              <span style={{ fontSize:14, color:'#334155', lineHeight:1.6 }}>{plan}</span>
            </div>
          ))}
        </div>

        <h2 style={h2}>Best Time for Panch Badri Yatra</h2>
        <p style={p}>
          May–June and September–October are ideal. Adi Badri and Vriddha Badri are year-round (lower altitude) — making a partial Panch Badri possible even in winter. Bhavishya Badri is accessible only May–November (requires trekking). Badrinath and Yogadhyan Badri are open April–November.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Panch Badri Yatra — Customised for Your Group</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>Tell us your dates and preferred pace. We design the complete circuit with all transport, hotels and darshan arrangements.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Panch Badri Yatra 2026. Please share packages and itinerary details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp — Get a Free Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related pilgrimages</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Panch Kedar Yatra','/panch-kedar-yatra'],['Badrinath Temple','/badrinath-temple'],['Char Dham Yatra','/char-dham-yatra'],['Badrinath Weather','/badrinath-weather'],['Uttarakhand Tours','/uttarakhand-tour-packages']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
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
