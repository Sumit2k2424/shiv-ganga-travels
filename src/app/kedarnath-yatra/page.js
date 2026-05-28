import Link from 'next/link';
import { PACKAGES, SITE } from '@/data/packages';

export const metadata = {
  title: 'Kedarnath Yatra Package 2026 — Ek Dham Yatra',
  description: 'Kedarnath Yatra 2026 — Ek Dham package from ₹6,499/person. 16km trek guide, pony ₹3,500, helicopter ₹7,500. Group discounts.',
  keywords: ['Kedarnath Yatra 2026','ek dham yatra package','kedarnath ek dham yatra','kedarnath package','kedarnath tour package','kedarnath trip package','kedarnath trip','kedarnath tour','kedarnath travel package','Kedarnath package from Haridwar','kedarnath package from delhi','kedarnath package from mumbai','kedarnath package from bangalore','Kedarnath trek guide','Kedarnath helicopter booking 2026','kedarnath trip cost','kedarnath yatra package','haridwar to kedarnath package','vasuki tal kedarnath','gandhi sarovar kedarnath','triyuginarayan temple kedarnath','ardh narishwar guptkashi'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-yatra` },
  openGraph: {
    title: 'Kedarnath Yatra 2026 — Complete Trek, Packages & Helicopter Guide',
    description: 'Complete Kedarnath Yatra guide 2026. 16km trek, pony ₹3,500, helicopter ₹7,500, temple opens April 22. Packages from ₹6,499. Direct operator since 2010.',
    url: `${SITE.baseUrl}/kedarnath-yatra`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Yatra Package 2026 from Haridwar — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Yatra 2026 — Package from ₹6,499 | Direct Operator',
    description: 'Kedarnath Yatra 2026 from Haridwar from ₹6,499. 16km trek guide, pony, helicopter options. Zero commission.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Yatra Package 2026 from Haridwar' }],
  },
};

const kedarnathPkgs = PACKAGES.filter(p => p.tags?.includes('kedarnath') || p.slug?.includes('kedarnath')).slice(0, 4);

function Schema() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How long is the Kedarnath trek from Gaurikund?', acceptedAnswer: { '@type': 'Answer', text: 'The Kedarnath trek is 16km one way from Gaurikund (1,982m) to Kedarnath temple (3,583m), gaining 1,601 metres in altitude. Most healthy pilgrims take 5–7 hours for the ascent and 3–4 hours for the descent. The trail has rest points at Jungle Chatti (4km), Bheembali (6.5km), Lincholi (9km), and Base Camp (13km).' } },
      { '@type': 'Question', name: 'What is the cost of Kedarnath Yatra from Haridwar in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath Yatra from Haridwar costs ₹6,499 per person for a 3N/4D all-inclusive package with Shiv Ganga Travels. This includes AC cab, hotel at Guptkashi, breakfast and dinner, and VIP darshan. Pony (₹3,500–4,500 one way) and helicopter (₹7,500–9,500 round trip) are optional extras.' } },
      { '@type': 'Question', name: 'When does Kedarnath temple open in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath temple opens on April 22, 2026 for the summer season. The temple closes in November around Bhai Dooj. The exact opening muhurat (auspicious time) is announced by the Badrinath-Kedarnath Temple Committee (BKTC) in advance.' } },
      { '@type': 'Question', name: 'Is Kedarnath open for senior citizens?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. For pilgrims above 60 who cannot trek, pony (₹3,500–4,500 one way) or palki/doli (₹8,000–12,000 round trip) are available at Gaurikund. Helicopter (₹7,500–9,500 round trip from Phata/Sersi/Guptkashi) is the most comfortable. From 2026, pilgrims above 55 must carry a medical fitness certificate.' } },
      { '@type': 'Question', name: 'What are Kedarnath temple darshan timings?', acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath temple opens at 4:30 AM for the Mahabhishek puja. Regular darshan runs 7:00 AM to 1:00 PM and 5:00 PM to 9:00 PM. The temple closes 1:00–5:00 PM for the midday puja. Evening aarti at 7:00 PM is the most visually spectacular ritual of the day.' } },
      { '@type': 'Question', name: 'How do I register for Kedarnath Yatra 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Registration is mandatory at registrationandtouristcare.uk.gov.in. The fee is ₹150 per person. You need a government photo ID (Aadhaar/PAN/passport). Print the QR code registration certificate — police at Sonprayag checkpoint scan it and turn back pilgrims without it. Shiv Ganga Travels handles registration for all package pilgrims.' } },
    ],
  };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl }, { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` }, { '@type': 'ListItem', position: 3, name: 'Kedarnath Yatra', item: `${SITE.baseUrl}/kedarnath-yatra` }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 12, marginTop: 36 };
const h3 = { fontSize: 'clamp(1rem,2vw,1.2rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 20 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function KedarnathYatra() {
  return (
    <>
      <Schema/>
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '56px 20px 44px', textAlign: 'center' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>12th Jyotirlinga · 3,583m · Opens April 22, 2026</span>
          <h1 className="display-title" style={{ color: '#fff', fontSize: 'clamp(1.8rem,4.5vw,3rem)', marginBottom: 16 }}>Kedarnath Yatra 2026 — Complete Guide</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7 }}>Lord Shiva's highest Himalayan abode · 16km trek from Gaurikund<br/>Packages from <strong style={{ color: '#FFD166' }}>₹6,499</strong> · Pony · Helicopter · VIP Darshan</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Book Now</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          Home<span>›</span>
          Char Dham Yatra<span>›</span>
          <span>Kedarnath Yatra</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026 · Season Open — Trek Active</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '16px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude','3,583 metres'],['Jyotirlinga','12th of 12'],['Trek distance','16 km one way'],['Trek time','5–7 hrs ascent'],['From Haridwar','230 km · 7 hrs'],['Temple opens','April 22, 2026'],['Package from','₹6,499/person'],['Pony one-way','₹3,500–4,500']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Kedarnath temple opens on April 22, 2026</strong> and is accessible via a 16km trek from Gaurikund (1,982m) to the shrine at 3,583m. The one-way trek takes 5–7 hours on foot; pony is available for ₹3,500–4,500 one way; helicopter from Phata/Sersi/Guptkashi costs ₹7,500–9,500 round trip. A registered Haridwar operator like Shiv Ganga Travels offers complete 3N/4D packages from ₹6,499 per person all-inclusive. <strong>Biometric registration is mandatory</strong> — pilgrims without a printed QR certificate are turned back at Sonprayag, even after a 7-hour drive.</p>
        <p style={p}>Kedarnath is one of the 12 Jyotirlingas of Lord Shiva — the only one in the Himalayas. The current stone temple was built by Adi Shankaracharya in the 8th century CE on a site venerated since the Mahabharata era (the Pandavas sought Shiva's penance here after the Kurukshetra war). The structure survived the 2013 cloudburst that killed over 5,000 people in the valley — a massive boulder deflected the floodwaters around the shrine and still stands directly behind the temple. Every season, approximately 15–20 lakh pilgrims attempt the trek. On peak May days, the darshan queue stretches 4–6 hours for general pilgrims. Our VIP darshan arrangement, included in all packages, reduces this to under 30 minutes.</p>

        {kedarnathPkgs.length > 0 && (
          <>
            <h2 style={h2}>Kedarnath Yatra Packages 2026</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 10, marginBottom: 28 }}>
              {kedarnathPkgs.map(pkg => (
                <Link key={pkg.slug} href={`/packages/${pkg.slug}`} style={{ background: '#fff', padding: '14px 16px', borderRadius: 10, border: '1px solid var(--border)', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--navy)', lineHeight: 1.3 }}>{pkg.name}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>{pkg.duration?.nights}N/{pkg.duration?.days}D · {pkg.startCity}</div>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: '#1D9E75', whiteSpace: 'nowrap', marginLeft: 10 }}>₹{pkg.price?.discounted?.toLocaleString('en-IN')}</div>
                </Link>
              ))}
            </div>
          </>
        )}

        <h2 style={h2}>Kedarnath Trek — All 6 Stages, Exact Distances & What You'll See</h2>
        <p style={p}>The trek begins at <strong>Gaurikund</strong> (1,982m) — the roadhead 228km from Haridwar where private vehicles stop. Shared jeeps run Sonprayag to Gaurikund (₹40/person). The trail is stone-paved for most of its 16km length. In peak season, start before 6 AM — this is the single most important piece of timing advice we give every Kedarnath pilgrim. The queue at the temple grows sharply from 8 AM and peaks between 11 AM–2 PM with waits of 3–5 hours. Pilgrims leaving Gaurikund by 5:30 AM typically reach Kedarnath by 11–12 PM, attend the 1 PM aarti, and descend to Gaurikund the same evening before dark.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 28, border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ background: 'var(--navy)', display: 'grid', gridTemplateColumns: '2fr 80px 80px 3fr', padding: '10px 16px', gap: 10 }}>
            {['Stage','From start','Altitude','What to know'].map(h => (<div key={h} style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{h}</div>))}
          </div>
          {[
            ['Gaurikund', '0 km', '1,982m', 'Take dip in hot spring kund (48°C, believed sacred). Buy trekking stick ₹50–100. Get registration checked at police post. Pony booking counter is here.'],
            ['Jungle Chatti', '4 km', '2,350m', 'First rest point. Medical post with oxygen. Chai stalls. Take a 10-min rest. 45 min–1.5 hrs from start depending on pace. Good landmark to assess your group\'s fitness.'],
            ['Bheembali', '6.5 km', '2,750m', 'GMVN rest house with rooms. Best lunch stop — simple hot food available. Medical camp. This is roughly halfway. Altitude effects may begin here — watch for headache.'],
            ['Lincholi', '9 km', '3,200m', 'Last major stop before trail steepens sharply. Oxygen cylinder available (₹100–200). Fill water here — less reliable above. If anyone feels unwell, this is the last safe descent point.'],
            ['Base Camp', '13 km', '3,550m', 'Temporary huts and shelters. Last food and water. Trail is virtually flat from here to the temple. The tented accommodation here is the option if you want to stay overnight at Kedarnath.'],
            ['Kedarnath Temple', '16 km', '3,583m', 'One of 12 Jyotirlingas. Bag check at gate — no photography inside the garbhagriha. VIP queue is separate from general. Queue early morning or after 5 PM for shortest waits.'],
          ].map(([stage,dist,alt,note],i) => (
            <div key={stage} style={{ display: 'grid', gridTemplateColumns: '2fr 80px 80px 3fr', padding: '11px 16px', gap: 10, background: i%2===0?'#fff':'var(--bg)', borderTop:'1px solid var(--border)' }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--navy)' }}>{stage}</div>
              <div style={{ fontSize: 13, color: '#475569' }}>{dist}</div>
              <div style={{ fontSize: 13, color: '#475569' }}>{alt}</div>
              <div style={{ fontSize: 12.5, color: '#64748b' }}>{note}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Trek vs Pony vs Helicopter — Honest Comparison</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { mode:'🥾 On foot', cost:'Free', time:'5–7 hrs ascent', for:'Ages 18–65, good health', pros:'Most spiritually meaningful. See every metre. No booking. You control your pace.', cons:'Physically demanding. Rain makes trail slippery. Altitude sickness risk above 3,000m.' },
            { mode:'🐴 Pony (ghoda)', cost:'₹3,500–4,500 one way', time:'4–5 hrs up', for:'Anyone. Best 45–70 age', pros:'Less tiring. Government-fixed rate displayed at Gaurikund. Ponies know every stone.', cons:'One way only. Book at Gaurikund counter on the day — no advance booking. Descent separately.' },
            { mode:'🛕 Palki / Doli', cost:'₹8,000–12,000 round', time:'5–7 hrs (carried)', for:'Elderly, physically limited', pros:'Zero effort. 4–6 bearers rotate. Best non-air option for 70+ pilgrims.', cons:'Uncomfortable on steep sections. Negotiate price with registered porter cooperative before starting.' },
            { mode:'🚁 Helicopter', cost:'₹7,500–9,500 round', time:'7 min each way', for:'All ages. Mandatory 70+', pros:'No altitude stress. VIP darshan included. Views of Kedarnath valley from above are extraordinary. Weather delays possible.', cons:'Weather-dependent. Book via heli.irctc.co.in — May slots sell out by February. Early booking essential.' },
          ].map(item => (
            <div key={item.mode} style={{ background: '#fff', borderRadius: 12, padding: '16px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)', marginBottom: 3 }}>{item.mode}</div>
              <div style={{ fontWeight: 800, fontSize: 16, color: '#1D9E75', marginBottom: 2 }}>{item.cost}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>⏱ {item.time} · {item.for}</div>
              <div style={{ fontSize: 12.5, color: '#334155', marginBottom: 4 }}><strong style={{ color: '#1D9E75' }}>✓</strong> {item.pros}</div>
              <div style={{ fontSize: 12.5, color: '#334155' }}><strong style={{ color: '#D85A30' }}>✗</strong> {item.cons}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Temple Timings, Pujas & Darshan 2026</h2>
        <p style={p}>The Kedarnath temple schedule is set by the Badrinath-Kedarnath Temple Committee (BKTC). The <strong>Mahabhishek</strong> at 4:30 AM — where the Shivling is bathed with milk, curd, honey, and ghee by the head priest — is the most sacred ritual of the day. You can pre-book participation through your operator or directly at the BKTC desk. The <strong>evening aarti at 7 PM</strong> is the most visually dramatic: lamps, incense, conch shells, and drums in complete darkness at 3,583m. Every pilgrim who stays overnight rates it as the defining moment of their yatra.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 24, border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
          {[
            ['4:30 AM', 'Mahabhishek', 'Milk, curd, honey, ghee poured on Shivling by head priest. Can be booked ₹500–2,000. Most sacred time.'],
            ['6:00 AM', 'Abhishek & early darshan', 'For pilgrims who stayed overnight or arrived very early. Short queue.'],
            ['7:00 AM', 'Regular darshan opens', 'General queue begins. Arrive before 8 AM to avoid multi-hour wait. VIP queue separate.'],
            ['12:30 PM – 1:00 PM', 'Madhyahna Puja', 'Midday ritual. Temple briefly closed to visitors. Pilgrims wait outside.'],
            ['1:00 PM – 5:00 PM', 'Temple closed', 'Priests rest. Pilgrims explore Bhairavnath Temple, boulder behind Kedarnath, or rest in camps.'],
            ['5:00 PM', 'Evening darshan opens', 'Shorter queue than morning. Good for pilgrims who arrived late.'],
            ['7:00 PM', 'Aarti', 'Most visually stunning. 20–30 minutes. Darkness, lamps, and sacred chants at 3,583m.'],
            ['8:30 PM', 'Shayan Aarti', 'Final ritual — deity "put to sleep". Short but deeply moving. Last chance for darshan.'],
            ['9:00 PM', 'Temple closes', 'For the night.'],
          ].map(([time,puja,notes],i) => (
            <div key={time} style={{ display: 'grid', gridTemplateColumns: '130px 1fr 2fr', padding: '10px 16px', gap: 12, background: i%2===0?'#fff':'var(--bg)', borderTop: i>0?'1px solid var(--border)':'none' }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--navy)' }}>{time}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>{puja}</div>
              <div style={{ fontSize: 12.5, color: '#64748b' }}>{notes}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>2026 New Rules — Critical for All Pilgrims</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {[
            { rule:'📵 Phone ban inside the garbhagriha', detail:'Photography and mobile phones are strictly prohibited inside the inner sanctum. Confiscation has been reported since 2025. Put your phone in your bag before the main gate — not inside. This is a genuine enforcement, not a suggestion.' },
            { rule:'🏥 Medical certificate mandatory for 55+ pilgrims', detail:'Pilgrims aged 55 and above must carry a fitness certificate from a registered doctor (Government or AYUSH). The certificate must explicitly state the person is fit for high-altitude travel. BKTC checkpoints at Sonprayag and Gaurikund verify this. Introduced after multiple cardiac incidents on the 2024 trek.' },
            { rule:'📋 Biometric registration: print your QR code', detail:'Register at registrationandtouristcare.uk.gov.in (₹150/person). Police at Sonprayag scan the physical printout. A phone screenshot is not always accepted — print it. We\'ve seen families turned back at Sonprayag after driving 7 hours from Delhi because they had only a screenshot.' },
            { rule:'🧑‍🤝‍🧑 Daily pilgrim cap enforced at Gaurikund', detail:'When the daily Kedarnath cap is reached, new arrivals are stopped at Gaurikund. In peak May–June, this happens by 9–10 AM. Pilgrims with overnight bookings at Kedarnath camps get priority. This is why we always recommend 5:30 AM departures from Gaurikund.' },
            { rule:'🌱 No plastic above Sonprayag', detail:'Single-use plastic bottles and bags are banned above Sonprayag. Carry a refillable bottle. Reusable bags only. Fines ₹500–1,000. Water refill stations at Jungle Chatti and Bheembali.' },
          ].map(({ rule, detail }) => (
            <div key={rule} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid var(--border)', borderLeft: '3px solid var(--navy)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 6 }}>{rule}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>How to Register — Step by Step</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {[
            ['Step 1','Go to registrationandtouristcare.uk.gov.in','The official Uttarakhand Tourism portal. Avoid third-party sites that charge extra fees.'],
            ['Step 2','Create account with your mobile number','OTP verification. Use the mobile number you will carry on the yatra.'],
            ['Step 3','Enter details for each pilgrim','Name, age, address, Aadhaar number, emergency contact. Register all group members together.'],
            ['Step 4','Pay ₹150 per person','UPI, net banking, or card. You receive SMS and email confirmation immediately.'],
            ['Step 5','Download and PRINT your certificate','A QR-code document. Police checkpoints scan the physical printout. Do not rely only on a phone screenshot.'],
          ].map(([step,title,desc]) => (
            <div key={step} style={{ display: 'flex', gap: 12, background: '#fff', borderRadius: 10, padding: '13px 16px', border: '1px solid var(--border)' }}>
              <div style={{ background: 'var(--navy)', color: '#FFD166', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 20, alignSelf: 'flex-start', whiteSpace: 'nowrap' }}>{step}</div>
              <div><div style={{ fontWeight: 600, fontSize: 13.5, color: 'var(--navy)', marginBottom: 3 }}>{title}</div><div style={{ fontSize: 13, color: '#475569', lineHeight: 1.65 }}>{desc}</div></div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 13.5, background: 'rgba(29,158,117,0.08)', padding: '12px 16px', borderRadius: 8, borderLeft: '3px solid #1D9E75', marginBottom: 28, color: '#334155' }}>
          <strong>Included in all our packages:</strong> Shiv Ganga Travels handles the complete registration process for all pilgrims at no extra cost. You provide Aadhaar details when booking — we do the rest.
        </div>

        <h2 style={h2}>Kedarnath Weather — Month by Month</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['Month','Day temp','Night temp','Trail conditions','Verdict'].map(h => (<th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>))}</tr></thead>
            <tbody>
              {[
                ['April 22–30','5–12°C','-2 to 2°C','Snow patches. Very cold nights. Opening days.','⚠️ Experienced only'],
                ['May','10–18°C','2–6°C','Best weather. Clear skies. Rhododendrons. Most crowded.','✅ Excellent'],
                ['June 1–20','12–20°C','4–8°C','Good. Pre-monsoon clarity. Crowds thin mid-June.','✅ Very good'],
                ['June 20 – July','8–15°C','2–5°C','Monsoon starts. Trail slippery. Landslide risk.','⚠️ Caution'],
                ['August','6–13°C','1–4°C','Peak monsoon. Frequent cancellations.','❌ Avoid'],
                ['September','8–16°C','0–4°C','Post-monsoon. Best visibility. Crisp and clear.','✅ Excellent'],
                ['October','2–10°C','-4 to 0°C','Cold. Snowy slopes. Closing approaches.','✅ Good (warm layers essential)'],
              ].map(([month,day,night,cond,suit],i) => (
                <tr key={month} style={{ borderBottom:'1px solid var(--border)', background: i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)' }}>{month}</td>
                  <td style={{ padding:'9px 12px', color:'#334155' }}>{day}</td>
                  <td style={{ padding:'9px 12px', color:'#334155' }}>{night}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{cond}</td>
                  <td style={{ padding:'9px 12px', fontWeight:600 }}>{suit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>What to Carry for the Kedarnath Trek</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { cat:'🧥 Clothing', items:['Thermal inner layers (top + bottom)','Fleece jacket or woollen sweater','Waterproof rain jacket (no jeans — they stay wet)','Trekking trousers','Sturdy sports shoes (no sandals or heels)','Woollen socks × 3 pairs','Gloves and warm cap'] },
            { cat:'🎒 Trek gear', items:['Trekking pole / bamboo stick (₹50–100 at Gaurikund)','Refillable water bottle 1.5L (plastic ban above Sonprayag)','ORS sachets × 10 (altitude dehydration is rapid)','High-energy snacks: dry fruits, glucose biscuits','Sunscreen SPF 50+ and UV sunglasses','Headlamp with spare batteries (for 4 AM start)','Small first-aid kit: Paracetamol, Disprin, Diamox'] },
            { cat:'📄 Documents (originals)', items:['Registration printout (QR code — PRINTED not just phone)','Original ID: Aadhaar / PAN / Passport','Medical certificate if age 55+','Hotel booking confirmation','Emergency contacts written on paper'] },
            { cat:'💊 Health', items:['Diamox 250mg (altitude prevention — consult your doctor)','Sorbitrate (cardiac emergency tablet — 55+ carry on person)','Personal medicines + 2 extra days supply','Knee support bands (descent harder than ascent)','Pulse oximeter if available (check SpO2 at each rest stop)'] },
          ].map(({ cat, items }) => (
            <div key={cat} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>{cat}</div>
              {items.map(item => (<div key={item} style={{ fontSize: 12.5, color: '#475569', padding: '4px 0', borderBottom: '1px solid var(--bg)', display: 'flex', gap: 6, alignItems: 'flex-start' }}><span style={{ color: '#1D9E75', flexShrink: 0 }}>✓</span><span>{item}</span></div>))}
            </div>
          ))}
        </div>

        <h2 style={h2}>Places Worth Stopping Between Haridwar and Kedarnath</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { name:'Devprayag', dist:'75km', desc:'The most sacred of the five Prayags — the Alaknanda and Bhagirathi rivers visibly merge here (the water colours are different) to form the Ganga. The ancient Raghunath Temple on the confluence spit has stood here for over 1,200 years. Stop for 20 minutes — this is where the Ganga is born.' },
            { name:'Guptkashi', dist:'220km', desc:'Your overnight base before the trek. Guptkashi has its own Vishwanath Temple — where Shiva hid (gupt = hidden) from the Pandavas before being found at Kedarnath. The ridge road above town has Himalayan views that match Kedarnath itself. Most pilgrims rush through — don\'t.' },
            { name:'Triyuginarayan', dist:'12km from Sonprayag', desc:'The wedding site of Shiva and Parvati, with Vishnu as the officiating priest. A sacred fire in the courtyard is said to have burned since that wedding — through three cosmic ages (yugas). Almost never crowded. Worth the 30-minute detour from Sonprayag. This is the knowledge of an insider, not a guidebook.' },
            { name:'Ukhimath (winter Kedarnath)', dist:'Near Guptkashi', desc:'Lord Kedarnath "resides" here every winter after the November closing ceremony. The temple is small, intimate, and almost never crowded — even in summer. Pilgrims who visit Ukhimath often say the darshan here feels more personal than at the main temple.' },
            { name:'Gaurikund', dist:'228km', desc:'Named after Goddess Gauri (Parvati), who bathed here while awaiting Shiva. The natural hot spring kund (48°C year-round) is right at the trek start. Pilgrims take a ritual dip before climbing. The masala chai at the trail-mouth shops, at 2,000m, is genuinely excellent.' },
          ].map(pl => (
            <div key={pl.name} style={{ background: '#fff', borderRadius: 12, padding: '16px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 2 }}>{pl.name}</div>
              <div style={{ fontSize: 11.5, color: '#E8920A', fontWeight: 600, marginBottom: 8 }}>📍 {pl.dist} from Haridwar</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{pl.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>🏔️ Kedarnath 2026 · Opens April 22 · Limited seats per batch</div>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>Book Kedarnath Yatra — Direct Operator</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>Zero commission. Registration handled. Free itinerary in 2 hours. ₹6,499/person all-inclusive.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            View Package
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026 from Haridwar.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Deep-dive guides</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Darshan Timings','/blog/kedarnath-darshan-timing'],['Pony vs Helicopter','/blog/kedarnath-pony-vs-helicopter'],['Helicopter Booking','/blog/kedarnath-helicopter-booking'],['Medical Certificate','/blog/char-dham-yatra-medical-certificate'],['Registration Guide','/blog/char-dham-yatra-registration'],['Kedarnath Weather','/kedarnath-weather'],['Haridwar to Kedarnath','/haridwar-to-kedarnath-cab']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
