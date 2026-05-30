import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra Cost 2026 – Complete Price Breakdown Per Person (Budget to Luxury)',
  description: 'Exact Char Dham Yatra cost 2026 per person: budget package ₹19,500, pony ₹3,500, helicopter ₹7,500, VIP darshan ₹1,100. No hidden costs — full breakdown by a Haridwar yatra specialist.',
  keywords: ['char dham yatra cost 2026', 'char dham yatra total cost per person', 'char dham yatra package price 2026', 'char dham yatra budget breakdown', 'kedarnath pony cost 2026', 'char dham helicopter cost 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-cost` },
  openGraph: { title: 'Char Dham Yatra Cost 2026 – Complete Price Breakdown Per Person (Budget to Luxury)', description: 'Char Dham Yatra cost 2026 per person: budget ₹19,500–₹28,000, deluxe ₹28,000–₹40,000, luxury ₹45,000–₹65,000, helicopter ₹1.5L–₹2.5L. Pony ₹5,500, helicopter ₹8,500. Every rupee explained.', url: `${SITE.baseUrl}/blog/char-dham-yatra-cost`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Cost 2026 — Complete Price Breakdown (Every Rupee) | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the total cost of Char Dham Yatra 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The total cost of Char Dham Yatra 2026 from Haridwar is ₹22,000–₹28,000 per person for a budget pilgrim, and ₹30,000–₹40,000 for a comfortable experience. This includes: package cost ₹19,500–₹27,500, Kedarnath pony ₹3,500–₹4,500 (if not trekking), registration FREE (₹0), personal expenses ₹1,500–₹2,000, and train/bus to Haridwar ₹500–₹2,500 depending on your city.' } },
      { '@type': 'Question', name: 'What is the cost of Char Dham Yatra package from Haridwar?', acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra packages from Haridwar start at ₹19,500 per person (9N/10D, standard) with Shiv Ganga Travels. This is an all-inclusive direct-operator price with zero commission — it covers AC vehicle, hotels, breakfast and dinner, guide, VIP darshan at all 4 dhams, and all toll/parking charges. Deluxe packages (Innova, 3-star hotels) start at ₹27,500.' } },
      { '@type': 'Question', name: 'What is the cost of Kedarnath pony in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath pony (horse ride) costs ₹3,500–₹4,500 for one way (Gaurikund to Kedarnath, 16km). For round trip the cost is ₹7,000–₹9,000. These are government-regulated rates displayed at the Gaurikund booking counter. Booking is done on the day at Gaurikund — no advance booking available. In peak May–June, ponies get booked out by 7–8 AM.' } },
      { '@type': 'Question', name: 'Is the Char Dham registration fee included in the package price?', acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra registration is completely FREE in 2026 — ₹0. The Uttarakhand government removed the previous ₹150 fee for this season. You register at registrationandtouristcare.uk.gov.in at no cost. Shiv Ganga Travels handles the entire registration process for all our package pilgrims — you just provide your Aadhaar details.' } },
    ],
  };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Char Dham Yatra Cost 2026 — Complete Price Breakdown', author: {
        '@type': 'Person',
        name: 'Sumit Mishra',
        jobTitle: 'Operations Manager, Shiv Ganga Travels',
        url: `${SITE.baseUrl}/about`,
        sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
      }, datePublished: '2024-01-15', dateModified: '2026-05-01', publisher: { '@type': 'Organization', name: SITE.name }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.baseUrl}/blog/char-dham-yatra-cost` } };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` }, { '@type': 'ListItem', position: 3, name: 'Char Dham Yatra Cost 2026', item: `${SITE.baseUrl}/blog/char-dham-yatra-cost` }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 36 };
const h3 = { fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 20 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function CharDhamCost() {
  return (
    <>
      <Schema/>
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Pricing Guide · 2026</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, marginBottom: 14 }}>Char Dham Yatra Cost 2026 — Every Rupee Explained</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>Package price · Pony & helicopter · Registration · Train fare · Hidden costs · Budget scenarios</p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Char Dham Yatra Cost 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · By Shiv Ganga Travels</div>

        {/* Intent-first answer */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '20px 24px', marginBottom: 28 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Quick Answer — Total Char Dham Yatra Cost 2026</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 10 }}>
            {[['Package (9N/10D)','₹19,500–₹27,500'],['Kedarnath pony (1 way)','₹3,500–₹4,500'],['Kedarnath helicopter (RT)','₹7,500–₹9,500'],['Registration fee','FREE (₹0)'],['Train Delhi–Haridwar','₹200–₹700'],['Personal expenses (10 days)','₹1,500–₹3,000'],['Total (budget pilgrim)','₹22,000–₹28,000'],['Total (comfortable)','₹30,000–₹40,000']].map(([k,v]) => (
              <div key={k}><div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
            ))}
          </div>
        </div>

        <p style={p}><strong>The total cost of Char Dham Yatra 2026 from Haridwar is ₹22,000–₹28,000 per person</strong> for a budget-conscious pilgrim, and ₹30,000–₹40,000 for a comfortable experience with a private vehicle and better hotels. The biggest variable is the Kedarnath section: pilgrims who trek on foot spend ₹0 extra; those who take pony add ₹3,500–₹4,500; those who take helicopter add ₹7,500–₹9,500. Everything else — registration (free in 2026), VIP darshan, meals, temples — is included in a good all-inclusive package. Here is every cost, broken down.</p>

        <h2 style={h2}>1. Package Cost — What's Included and What's Not</h2>
        <p style={p}>A <strong>reputable all-inclusive Char Dham Yatra package</strong> from a registered direct operator covers the following — this is what Shiv Ganga Travels includes in our packages. If a price lower than ₹17,000 is quoted, something from this list is missing.</p>

        <div style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['Package','Price/person','Vehicle','Hotels','Meals'].map(h => (<th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>))}</tr></thead>
            <tbody>
              {[
                ['Standard 9N/10D','₹19,500','Shared Tempo Traveller','Budget/standard hotels','Breakfast + dinner'],
                ['Deluxe 11N/12D','₹27,500','Private AC Innova Crysta','3-star hotels, better rooms','Breakfast + dinner'],
                ['Senior Special 12N/13D','₹24,500','Private AC, ground floor priority','Ground floor preferred','Breakfast + dinner + pony at Kedarnath'],
                ['Helicopter 5N/6D','₹85,000','Helicopter (Sahastradhara)','3-star hotels throughout','Breakfast + dinner + VIP darshan all 4 dhams'],
              ].map(([pkg,price,vehicle,hotel,meals],i) => (
                <tr key={pkg} style={{ borderBottom:'1px solid var(--border)', background: i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)' }}>{pkg}</td>
                  <td style={{ padding:'10px 12px', fontWeight:800, color:'#1D9E75' }}>{price}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:13 }}>{vehicle}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:13 }}>{hotel}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:13 }}>{meals}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={p}>All packages include: AC vehicle (shared or private as listed), hotels with breakfast and dinner, experienced guide, VIP darshan at all 4 dhams (skips general queue), all tolls and parking fees, driver allowance, and GST. Registration is handled by us — completely free (₹0 government fee in 2026).</p>

        <h2 style={h2}>2. Kedarnath Extras — The Biggest Variable Cost</h2>
        <p style={p}>The Kedarnath section is where costs vary most between pilgrims. The 16km trek from Gaurikund is free, but most pilgrims above 50 or those with joint/cardiac issues opt for pony or helicopter. Here are the exact costs in 2026:</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {[
            { item:'🥾 Trek on foot', cost:'Free', detail:'The entire 16km trek from Gaurikund to Kedarnath costs nothing. Takes 5–7 hours upward. No pre-booking required.' },
            { item:'🐴 Pony — one way (ascent only)', cost:'₹3,500–₹4,500', detail:'Government-regulated rate, displayed at Gaurikund counter. Book at Gaurikund on the day — no advance booking. In peak May, ponies are fully booked by 7–8 AM. We advise arriving at Gaurikund by 5:30–6 AM.' },
            { item:'🐴 Pony — round trip (up + down)', cost:'₹7,000–₹9,000', detail:'Separate bookings for ascent and descent. Descent pony is usually easier to book (less demand).' },
            { item:'🛕 Palki/Doli — round trip', cost:'₹8,000–₹12,000', detail:'4–6 bearers carry you in a palanquin. Best for pilgrims who absolutely cannot walk any distance. Price is negotiable — book through the registered porter cooperative, not random operators at the trail.' },
            { item:'🚁 Helicopter — round trip (Phata/Sersi/Guptkashi)', cost:'₹7,500–₹9,500', detail:'7 minutes from helipad to Kedarnath. Includes VIP darshan slot on arrival. Book at heli.irctc.co.in — not through any third party. May slots sell out by February.' },
            { item:'🏠 Overnight at Kedarnath (GMVN tents)', cost:'₹800–₹1,500/night', detail:'Staying overnight gives you first-priority darshan the next morning at 4:30 AM Mahabhishek — without the queue. Worth considering if you have the energy.' },
            { item:'🙏 Mahabhishek puja booking', cost:'₹500–₹2,000', detail:'The dawn abhishek ritual — milk, ghee, honey on the Shivling. Can be booked through BKTC or your operator. The most sacred Kedarnath experience. Not the same as standard darshan.' },
          ].map(({ item, cost, detail }) => (
            <div key={item} style={{ display: 'flex', gap: 14, background: '#fff', borderRadius: 10, padding: '13px 16px', border: '1px solid var(--border)', flexWrap: 'wrap' }}>
              <div style={{ minWidth: 200 }}>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)' }}>{item}</div>
                <div style={{ fontWeight: 800, fontSize: 15, color: '#1D9E75' }}>{cost}</div>
              </div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7, flex: 1, minWidth: 200 }}>{detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>3. Registration — FREE in 2026 (₹0, Government Removed the Fee)</h2>
        <p style={p}><strong>All Char Dham pilgrims must register</strong> at registrationandtouristcare.uk.gov.in before reaching checkpoints. <strong>Registration is completely free in 2026 — ₹0.</strong> The Uttarakhand government removed the previous ₹150 fee this season. Register online, via WhatsApp (type "Yatra" to +91-8394833833), or via the Tourist Care Uttarakhand mobile app. Police checkpoints at Sonprayag (Kedarnath), Uttarkashi (Gangotri), Barkot (Yamunotri), and Joshimath (Badrinath) verify the printed QR certificate. Pilgrims without it are turned back regardless of how far they have driven.</p>
        <p style={{ ...p, fontSize: 13.5, background: 'rgba(29,158,117,0.08)', padding: '12px 16px', borderRadius: 8, borderLeft: '3px solid #1D9E75' }}>
          <strong>Included in every Shiv Ganga Travels package:</strong> We handle registration for all pilgrims at no cost. You provide Aadhaar details — we do the rest, including printing and carrying permits in the vehicle.
        </p>

        <h2 style={h2}>4. Getting to Haridwar — Train & Flight Costs</h2>
        <p style={p}>The package cost starts from Haridwar. Getting to Haridwar from your city is a separate cost. Here are the typical ranges in 2026:</p>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['From city','By train','By flight (to Dehradun)','By road (self-drive)'].map(h => (<th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>))}</tr></thead>
            <tbody>
              {[
                ['Delhi / Noida / Gurgaon','₹180–₹450 (SL/3AC), 5.5 hrs','₹2,500–₹5,000 + cab ₹1,500','₹1,500–₹2,500 fuel (300km)'],
                ['Mumbai','₹700–₹1,800 (3AC/2AC), 28 hrs','₹3,500–₹8,000 + cab ₹1,500','Not practical'],
                ['Bangalore','₹900–₹2,500 (3AC/2AC), 35–40 hrs','₹4,000–₹9,000 + cab ₹1,500','Not practical'],
                ['Kolkata','₹600–₹1,500 (3AC), 18 hrs','₹4,000–₹9,000 + cab ₹1,500','Not practical'],
                ['Chandigarh','₹150–₹400 (SL/3AC), 3.5 hrs','No direct flight','₹800–₹1,200 fuel (200km)'],
                ['Ahmedabad','₹450–₹1,200 (3AC), 15 hrs','₹3,000–₹7,000 + cab ₹1,500','Not practical'],
              ].map(([city,train,flight,road],i) => (
                <tr key={city} style={{ borderBottom:'1px solid var(--border)', background: i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)' }}>{city}</td>
                  <td style={{ padding:'9px 12px', color:'#334155' }}>{train}</td>
                  <td style={{ padding:'9px 12px', color:'#334155' }}>{flight}</td>
                  <td style={{ padding:'9px 12px', color:'#334155' }}>{road}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>5. Costs Not in the Package — What to Budget Separately</h2>
        <p style={p}>Every genuine operator lists inclusions. What they don't always list upfront are the mandatory extras you will encounter. Here is our honest breakdown — the same list we share with every Shiv Ganga Travels pilgrim before booking:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {[
            ['Kedarnath pony (if not trekking)','₹3,500–4,500 one way','Booked at Gaurikund counter on the day. Not bookable in advance.'],
            ['Yamunotri pony (6km trek)','₹1,800–2,500 one way','Available at Janki Chatti. Most pilgrims above 55 use this.'],
            ['Temple VIP darshan (Gangotri/Badrinath)','₹150–300 per person','VIP queue tokens. Your operator handles this; confirm it is included.'],
            ['Registration (2026)','FREE — ₹0','Government removed the fee for 2026. Register at registrationandtouristcare.uk.gov.in or WhatsApp +91-8394833833.'],
            ['Tapt Kund entry (Badrinath)','₹50','Small BKTC entry fee for the hot spring bath before Badrinath darshan.'],
            ['Personal expenses (10 days)','₹1,500–3,000','Chai, snacks, souvenirs, tips for driver/guide (discretionary), puja donations.'],
            ['Medical certificate (age 55+)','₹100–500','Doctor consultation fee. Required by government from 2026.'],
            ['Tips for driver and guide','₹500–1,000 per person (suggested)','Not mandatory, but our drivers and guides are genuinely excellent. Appreciated.'],
          ].map(([item, cost, note]) => (
            <div key={item} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 3fr', gap: 12, padding: '10px 14px', background: '#fff', borderRadius: 8, border: '1px solid var(--border)', flexWrap: 'wrap' }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--navy)' }}>{item}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#D85A30' }}>{cost}</div>
              <div style={{ fontSize: 12.5, color: '#64748b' }}>{note}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>6. Total Budget — Four Realistic Scenarios</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            {
              title: '🎒 Budget pilgrim',
              total: '₹22,000–₹25,000',
              color: '#1D9E75',
              breakdown: ['Package 9N/10D: ₹19,500', 'Trek on foot (no pony)', 'Registration: FREE (₹0)', 'Train from Delhi (SL): ₹350', 'Personal expenses: ₹1,500', 'No optional upgrades'],
              note: 'For fit pilgrims who can do the 16km trek. Shared vehicle, budget hotels. Fully comfortable and dignified.',
            },
            {
              title: '👨‍👩‍👧 Average family (with pony)',
              total: '₹28,000–₹33,000',
              color: '#BA7517',
              breakdown: ['Package 9N/10D: ₹19,500', 'Kedarnath pony (1 way): ₹4,000', 'Yamunotri pony (1 way): ₹2,000', 'Registration: FREE (₹0)', 'Train: ₹500–700', 'Personal expenses: ₹2,500'],
              note: 'Most families with mixed ages. Pony at Kedarnath and Yamunotri. Good hotels.',
            },
            {
              title: '👴 Senior / comfort traveller',
              total: '₹35,000–₹45,000',
              color: '#533AB7',
              breakdown: ['Deluxe package 11N/12D: ₹27,500', 'Kedarnath helicopter: ₹8,500', 'Yamunotri pony RT: ₹4,500', 'Registration: FREE (₹0)', 'Flight Bangalore-Dehradun: ₹6,000', 'Personal expenses: ₹3,000'],
              note: 'Maximum comfort. Private vehicle, 3-star hotels, helicopter at Kedarnath. For seniors and those with health concerns.',
            },
            {
              title: '🚁 Premium helicopter',
              total: '₹88,000–₹95,000',
              color: '#0F2B5B',
              breakdown: ['Helicopter package 5N/6D: ₹85,000', 'Flight to Dehradun: ₹4,000', 'Registration: FREE (₹0)', 'Personal expenses: ₹3,000', 'All 4 dhams in 6 days', 'VIP darshan included'],
              note: 'Complete helicopter package. All 4 dhams by air from Sahastradhara Helipad, Dehradun. 6 days total.',
            },
          ].map(({ title, total, color, breakdown, note }) => (
            <div key={title} style={{ background: '#fff', borderRadius: 14, padding: '18px', border: `1px solid var(--border)`, borderTop: `3px solid ${color}` }}>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)', marginBottom: 4 }}>{title}</div>
              <div style={{ fontWeight: 900, fontSize: 20, color, marginBottom: 12 }}>{total}</div>
              {breakdown.map(line => (<div key={line} style={{ fontSize: 12.5, color: '#475569', padding: '3px 0', borderBottom: '1px solid var(--bg)', display: 'flex', gap: 6 }}><span style={{ color, flexShrink: 0 }}>•</span>{line}</div>))}
              <div style={{ fontSize: 12.5, color: '#64748b', marginTop: 8, fontStyle: 'italic' }}>{note}</div>
            </div>          ))}

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="cost" />

        </div>

        <h2 style={h2}>7. What Drives the Price Up — and How to Keep Costs Down</h2>
        <h3 style={h3}>Why prices vary by 40–50% between operators</h3>
        <p style={p}>When you see a Char Dham package for ₹12,000 and another for ₹19,500, you are usually comparing different things. Budget packages often exclude VIP darshan (₹1,500–₹2,500 value per pilgrim), use non-AC or shared vehicles with overcrowded seats, book hotel rooms that accommodate 4–6 pilgrims (not 2), and omit the guide. The ₹19,500 direct-operator price is genuinely all-inclusive. The ₹12,000 price is a base that grows to ₹18,000 with unavoidable additions.</p>

        <h3 style={h3}>Five ways to reduce your cost without sacrificing experience</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {[
            ['Book in January or February for May', 'Prices are 10–15% lower when booked 90+ days ahead. Better rooms and vehicles available. Most pilgrims wait until March — don\'t.'],
            ['Travel in September–October', 'Same temples, same darshan. 10–15% cheaper than May–June. Post-monsoon clarity means the mountains are actually more visible. Fewer crowds at every dham.'],
            ['Group of 6 or more', 'Groups of 6+ get 5% off per person. Groups of 12+ get 8% off. For a family of 6 booking a 9N/10D package, this saves ₹5,850 total.'],
            ['Trek Kedarnath instead of pony', 'If you are 18–55 and reasonably fit, the trek is free. The pony saves physical effort but costs ₹3,500–₹4,500 per person one way. A group of 4 saves ₹14,000–₹18,000 by trekking.'],
            ['Book direct with the operator', 'Aggregator platforms (MakeMyTrip, Thrillophilia) add 15–20% commission to the operator\'s price. The same package from the operator directly costs ₹5,000–₹10,000 less per person.'],
          ].map(([tip, detail]) => (
            <div key={tip} style={{ background: '#fff', borderRadius: 10, padding: '13px 16px', border: '1px solid var(--border)', borderLeft: '3px solid #1D9E75' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 4 }}>{tip}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>8. Aggregator vs Direct Operator — Price Comparison</h2>
        <p style={p}>The following comparison is for the same 9N/10D Char Dham Yatra package from Haridwar, same itinerary, same inclusions. These are approximate market prices as of April 2026:</p>
        <div style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['Booking channel','Price/person','Commission included','You pay operator','Support'].map(h => (<th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>))}</tr></thead>
            <tbody>
              {[
                ['MakeMyTrip','₹29,000–₹32,000','15–20%','₹24,000–₹26,000 goes to operator','Platform chat'],
                ['Thrillophilia','₹24,000–₹27,000','12–18%','₹20,000–₹22,000 goes to operator','Email + chat'],
                ['Local agent (middleman)','₹22,000–₹25,000','8–15%','₹19,000–₹21,000 goes to operator','Agent WhatsApp'],
                ['Shiv Ganga Travels (direct)','₹19,500','0%','₹19,500 (full amount goes to operation)','Operator direct'],
              ].map(([channel,price,comm,pays,support],i) => (
                <tr key={channel} style={{ borderBottom:'1px solid var(--border)', background: i===3?'rgba(29,158,117,0.06)':i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'10px 12px', fontWeight: i===3?800:600, color:'var(--navy)' }}>{channel}{i===3 && <span style={{ background:'rgba(29,158,117,0.15)', color:'#1D9E75', fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:20, marginLeft:8 }}>Best price</span>}</td>
                  <td style={{ padding:'10px 12px', fontWeight:800, color: i===3?'#1D9E75':'var(--navy)' }}>{price}</td>
                  <td style={{ padding:'10px 12px', color: i===3?'#1D9E75':'#D85A30', fontWeight:600 }}>{comm}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:13 }}>{pays}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:13 }}>{support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>Get Your Personalised Cost Estimate</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>Tell us your group size, city, and dates. We send a complete line-by-line cost breakdown within 2 hours. Zero obligation.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want a complete cost breakdown for Char Dham Yatra 2026. Please share.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 Get Free Quote</a>
            🧮 Cost Calculator →
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['All Packages','/packages'],['Pony vs Helicopter','/blog/kedarnath-pony-vs-helicopter'],['Registration Guide','/blog/char-dham-yatra-registration'],['Best Time to Visit','/blog/best-time-char-dham'],['Senior Citizen Guide','/blog/senior-citizen-char-dham'],['Budget vs Premium','/blog/char-dham-yatra-budget-vs-premium']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* Author bio card — E-E-A-T */}
        <BlogAuthor variant="bottom" author="sumit" />

        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="cost" />
</article>
    </>
  );
}
