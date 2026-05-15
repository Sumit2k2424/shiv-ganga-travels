import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Packing List 2026',
  description: 'Complete Char Dham Yatra packing list 2026. Clothes, medicines, documents, shoes — exactly what to carry for 10–12 days in the Himalayas. Avoid these',
  keywords: ['char dham yatra packing list','what to carry for char dham yatra','char dham yatra essentials','char dham yatra preparation','what to pack for char dham yatra 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-packing-list` },
  openGraph: { title:'Char Dham Yatra Packing List 2026', description:'Exactly what to pack for Char Dham Yatra — clothes, medicines, documents.', url:`${SITE.baseUrl}/blog/char-dham-yatra-packing-list`, type:'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Packing List 2026 — What to Pack for Kedarnath Trek &  | Shiv Ganga Travels' }],
};

function Schema() {
  const article = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Char Dham Yatra Packing List 2026', author:{ '@type':'Person', name:'Dhanesh Chandra Mishra', jobTitle:'Founder, Shiv Ganga Travels — Retired Indian Army Officer', url:`${SITE.baseUrl}/about` }, publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl }, datePublished:'2025-02-15', dateModified:'2026-04-27', mainEntityOfPage:`${SITE.baseUrl}/blog/char-dham-yatra-packing-list` };

    const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question',
        name: 'What should I pack for Kedarnath in summer?',
        acceptedAnswer: { '@type': 'Answer', text: 'Summer packing for Kedarnath: thermal inners (2 sets — nights drop to 4°C even in June), fleece jacket, windproof outer layer, warm cap and gloves, waterproof trekking boots, wool socks (3–4 pairs), sunscreen SPF 50+, sunglasses, rain poncho, ORS sachets, trekking poles, headtorch, power bank, and enough cash (ATMs available only until Sonprayag). Personal medicines for 2 extra days beyond trip duration.' },
      },
      { '@type': 'Question',
        name: 'Do I need oxygen at Kedarnath?',
        acceptedAnswer: { '@type': 'Answer', text: 'Supplemental oxygen is not mandatory but is advisable for first-time high-altitude visitors and pilgrims over 60. Oxygen cans are available at Gaurikund and Kedarnath for ₹300–500 each. Symptoms of altitude sickness (headache, nausea, breathlessness) typically appear 6–12 hours after reaching altitude. If symptoms are severe, descend immediately. Shiv Ganga Travels carries oxygen cylinders in all vehicles.' },
      }
    ],
  };
  return (<>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>
    </>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function PackingList() {
  const categories = [
    {
      title: '🥾 Footwear — The Most Important Thing', color:'#dcfce7', border:'#86efac',
      items: [
        { item:'Trekking shoes or sturdy sneakers', why:'Non-negotiable. The trails at Yamunotri and Kedarnath are steep and uneven. Sandals or flats WILL cause injury.' },
        { item:'One pair of comfortable slippers', why:'For hotel wear, temples (where you remove shoes), and evening rest.' },
        { item:'2–3 pairs of thick trekking socks', why:'Prevent blisters. Wool socks are best — they don\'t smell and keep feet warm even when wet.' },
      ]
    },
    {
      title: '🧥 Clothing — Layer Up', color:'#dbeafe', border:'#93c5fd',
      items: [
        { item:'Heavy fleece jacket or sweater', why:'Mandatory even in May–June. Nights at 3,000m+ are genuinely cold (5–10°C). Don\'t let the sunny day photos fool you.' },
        { item:'Thermal innerwear (top + bottom)', why:'Essential base layer. Lightweight, takes no space, makes a huge difference.' },
        { item:'2–3 sets of comfortable daily wear', why:'Loose salwar/track pants work well. Jeans are uncomfortable on long drives and treks.' },
        { item:'Rain poncho or windcheater', why:'Mountain weather changes in 20 minutes. A ₹200 poncho has saved many a yatra.' },
        { item:'Woollen cap, gloves, muffler', why:'At Kedarnath and Badrinath, wind chill drops the temperature significantly. This trio costs ₹400 and is worth its weight in gold.' },
      ]
    },
    {
      title: '💊 Medicines — Carry More Than You Think', color:'#fef3c7', border:'#fcd34d',
      items: [
        { item:'Diamox (Acetazolamide) 125mg or 250mg', why:'For altitude sickness prevention at Kedarnath (3,583m) and Badrinath (3,133m). Consult your doctor before the trip.' },
        { item:'Disprin / Aspirin / Paracetamol', why:'Headaches are common at altitude. Have this ready.' },
        { item:'ORS sachets (at least 10)', why:'Dehydration from exertion + altitude is common. Mix one in a litre of water daily on trek days.' },
        { item:'All your regular medicines — DOUBLE the quantity', why:'You cannot buy most medicines in remote areas. Carry 20 days supply for a 12-day trip.' },
        { item:'Antacid / Digene', why:'Change of water and food during long trips causes stomach issues for many people.' },
        { item:'Bandages, antiseptic cream, blister plasters', why:'Minor cuts and blisters on treks. Basic first aid saves a lot of pain.' },
        { item:'Pulse oximeter (optional but highly recommended)', why:'Measures your blood oxygen at altitude. Costs ₹800–1,200. Essential for those above 60.' },
      ]
    },
    {
      title: '📋 Documents — Don\'t Forget Any of These', color:'#ede9fe', border:'#c4b5fd',
      items: [
        { item:'Aadhaar Card / Passport — Original + 3 photocopies', why:'Required for hotel check-in, Yatra registration checkpoints, helicopter booking. 3 copies minimum.' },
        { item:'Yatra registration card (we provide)', why:'Mandatory at every dham entry gate. Without it, you don\'t get in.' },
        { item:'Medical fitness certificate (if above 60 or with health conditions)', why:'Some checkpoints require this. Get it from your doctor before travel.' },
        { item:'Emergency contact card in your wallet', why:'Your name, blood group, allergies, and who to call if something happens. Simple but can save your life.' },
      ]
    },
    {
      title: '🎒 Essentials & Gadgets', color:'#f0fdf4', border:'#86efac',
      items: [
        { item:'Power bank (minimum 20,000 mAh)', why:'Charging points are limited in mountain towns. Camera + phone + oximeter will drain fast.' },
        { item:'Cash — ₹8,000–10,000 extra', why:'ATMs are scarce and often empty in peak season beyond Haridwar/Rishikesh. Digital payments rarely work.' },
        { item:'Small torch / headlamp', why:'4:30 AM temple visits at Kedarnath and Badrinath — bring your own light.' },
        { item:'Reusable water bottle (1 litre minimum)', why:'Single-use plastic is banned in most dham areas. Carry your own bottle. Fill at tea stalls.' },
        { item:'Sunscreen SPF 50+ and lip balm', why:'UV radiation is intense at altitude. Many pilgrims return with severe sunburn on their face and hands.' },
        { item:'Ziplock bags / plastic bags (5–6)', why:'For keeping electronics, documents, and clothes dry during rain. Priceless during unexpected showers.' },
      ]
    },
    {
      title: '❌ What NOT to Carry', color:'#fee2e2', border:'#fca5a5',
      items: [
        { item:'Heavy trolley bags / suitcases', why:'The roads are rough. Storage at hotels is limited. Carry a backpack or soft duffel. Maximum 10–12 kg total.' },
        { item:'Laptop or tablet', why:'There\'s no reliable wifi in most dham areas anyway. Use your phone for anything urgent.' },
        { item:'Too many clothes', why:'You\'ll find laundry services in Haridwar and major stops. 3 sets is enough for 12 days.' },
        { item:'Valuable jewellery', why:'You\'ll be removing shoes and bags at temples constantly. Theft risk, loss risk. Leave it at home.' },
        { item:'Non-veg food or alcohol', why:'Strictly prohibited in dham areas. This is a matter of respect for the place and the people.' },
      ]
    },
  ];
return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Preparation Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Char Dham Yatra Packing List 2026 — What to Carry
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Clothes · Shoes · Medicines · Documents · Gadgets — from 15 years of guiding pilgrims</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link>
          <span>›</span>
          <span>Char Dham Packing List</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Every year, without fail, at least three or four pilgrims in our groups call us from Guptkashi or Joshimath in a panic. They packed wrong. They brought their best formal salwars and forgot thermal innerwear. They have three suitcases but no rain poncho. They are freezing at 9 PM in June at 3,000 metres of altitude.</p>

        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This packing list comes from 15 years of guiding over 50,000 pilgrims through the Char Dham. It's not a generic "what to carry" list from the internet. It's what we actually tell our pilgrims the week before departure, after years of watching what people wish they'd brought and what they wish they'd left at home.</p>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:28, border:'1px solid rgba(15,43,91,0.1)' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>🎒 The Golden Rule of Char Dham Packing:</div>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', margin:0, lineHeight:1.7 }}>Keep your total luggage under <strong>10–12 kg</strong>. You will be loading and unloading your bags at 8–10 different hotels. The roads are bumpy. The porters charge ₹50–100 per bag at some stops. Travel light and your body will thank you for it.</p>
        </div>

        {categories.map(cat => (
          <div key={cat.title} style={{ marginBottom:28 }}>
            <h2 style={h2}>{cat.title}</h2>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {cat.items.map(item => (
                <div key={item.item} style={{ background:cat.color, border:`1px solid ${cat.border}`, borderRadius:10, padding:'12px 16px', display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:12 }}>
                  <div style={{ fontWeight:600, fontSize:13.5, color:'var(--text)' }}>{item.item}</div>
                  <div style={{ fontSize:14.5, color:'#334155', lineHeight:1.5 }}><strong style={{ color:'var(--navy)' }}>Why:</strong> {item.why}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 style={h2}>One Final Tip — Pack a Day Before, Not the Night Before</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Pack at least 24 hours before your departure. Lay everything out on your bed. Then remove 20% of it — you always pack more than you need. Sleep on it. In the morning you'll know what you actually need.</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>And if you forget something minor — toothbrush, a pair of socks, a torch — don’t panic. Haridwar and Rishikesh have everything you'd need. Even Guptkashi and Joshimath have decent shops. The Himalayas are not a wilderness expedition. You will not starve or freeze. Just travel light, travel safe, and travel with an open heart.</p>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:32, marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              { label:'Char Dham Complete Guide →', href:'/blog/char-dham-guide' },
              { label:'Best Time to Visit →', href:'/blog/best-time-char-dham' },
              { label:'Kedarnath Trek Guide →', href:'/blog/kedarnath-trek-guide' },
              { label:'View Char Dham Packages →', href:'/char-dham-yatra' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Book Your Char Dham Yatra 2026</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>We send a complete personalised packing list 7 days before your departure. ₹19,500 all-inclusive.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 WhatsApp Us</a>
            <Link href="/char-dham-yatra" style={{ background:'var(--gold)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>View Packages →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
