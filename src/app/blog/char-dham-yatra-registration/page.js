import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Registration 2026 — Step-by-Step',
  description: 'Step-by-step Char Dham Yatra registration guide 2026. IRCTC and state portal process, documents needed, tips to avoid errors.',
  keywords: [
    'char dham yatra registration 2026','char dham yatra registration online',
    'how to register for char dham yatra','char dham yatra biometric registration',
    'char dham yatra permit 2026','chardham yatra registration process',
    'registrationandtouristcare.uk.gov.in','char dham yatra registration documents',
  ],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-registration` },
  openGraph: {
    title: 'Char Dham Yatra Registration 2026 — Step-by-Step Guide',
    description: 'Everything you need to know about mandatory Char Dham Yatra registration 2026 — online process, documents, biometric centres, daily limits.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-registration`,
    type: 'article',
  },
};

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Register for Char Dham Yatra 2026',
    description: 'Step-by-step process to complete mandatory Char Dham Yatra biometric registration online at registrationandtouristcare.uk.gov.in or at designated',
    author: {
      '@type': 'Person',
      name: 'Dhanesh Chandra Mishra',
      jobTitle: 'Founder, Shiv Ganga Travels — Retired Indian Army Officer',
      url: `${SITE.baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    datePublished: '2026-01-01',
    dateModified: '2026-04-27',
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-yatra-registration`,
    totalTime: 'PT20M',
    supply: [
      { '@type': 'HowToSupply', name: 'Aadhaar Card (mandatory)' },
      { '@type': 'HowToSupply', name: 'Mobile number linked to Aadhaar' },
      { '@type': 'HowToSupply', name: 'Medical fitness certificate (mandatory for 55+ years)' },
      { '@type': 'HowToSupply', name: 'Passport-size photograph' },
      { '@type': 'HowToSupply', name: 'Emergency contact details' },
    ],
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Visit the official portal', text: 'Go to registrationandtouristcare.uk.gov.in — the only official registration website for Char Dham Yatra 2026.' },
      { '@type': 'HowToStep', position: 2, name: 'Create your account', text: 'Click "New Registration". Enter your mobile number and verify with OTP. Create a password.' },
      { '@type': 'HowToStep', position: 3, name: 'Fill pilgrim details', text: 'Enter all traveller details — name as on Aadhaar, Aadhaar number, date of birth, address. Repeat for each member of your group.' },
      { '@type': 'HowToStep', position: 4, name: 'Select dhams and dates', text: 'Choose which dhams you are visiting and your expected dates. You can select all 4 (Char Dham) or fewer.' },
      { '@type': 'HowToStep', position: 5, name: 'Upload medical certificate', text: 'If any pilgrim is 55 years or above, upload the <Link href="/blog/char-dham-yatra-medical-certificate" style={{color:"var(--teal)",fontWeight:600,textDecoration:"underline",textDecorationColor:"rgba(11,123,139,0.3)",textUnderlineOffset:2}}>medical fitness certificate</Link> from a registered doctor.' },
      { '@type': 'HowToStep', position: 6, name: 'Download yatra permit', text: 'After submission, download and print your Char Dham Yatra permit. Carry physical and digital copies — it is checked at multiple checkpoints.' },
    ],
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Char Dham Yatra registration mandatory in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, biometric registration is mandatory for all four dhams in 2026 — Yamunotri, Gangotri, Kedarnath, and Badrinath. The yatra permit generated after registration is checked at multiple police checkpoints along the route. Without it, you will be turned back. Registration is free and takes 15–20 minutes online at registrationandtouristcare.uk.gov.in.' },
      },
      {
        '@type': 'Question',
        name: 'What is the official website for Char Dham Yatra registration 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'The official and only legitimate website for Char Dham Yatra registration 2026 is registrationandtouristcare.uk.gov.in — run by the Uttarakhand Tourism Department. Do not pay money on any other website claiming to offer <Link href="/blog/char-dham-yatra-registration" style={{color:"var(--teal)",fontWeight:600,textDecoration:"underline",textDecorationColor:"rgba(11,123,139,0.3)",textUnderlineOffset:2}}>Char Dham registration</Link>. The official registration is completely free.' },
      },
      {
        '@type': 'Question',
        name: 'What documents are needed for Char Dham Yatra registration?',
        acceptedAnswer: { '@type': 'Answer', text: 'Required documents: (1) Aadhaar card — mandatory for all Indian pilgrims, (2) Mobile number linked to Aadhaar for OTP verification, (3) Medical fitness certificate from a registered doctor — mandatory for all pilgrims aged 55 and above, (4) Passport for foreign nationals. Foreign nationals must also register and carry their passport at all checkpoints.' },
      },
      {
        '@type': 'Question',
        name: 'Can I register for Char Dham Yatra offline?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Offline registration centres are available at: Haridwar — near Har Ki Pauri, Rishikesh — near Ram Jhula, Dehradun — near ISBT. You can also register at designated tourist care centres at Barkot (Yamunotri base), Uttarkashi (Gangotri base), Sonprayag (Kedarnath base), and Joshimath (Badrinath base). Bring original Aadhaar card. Registration at these centres is also free.' },
      },
      {
        '@type': 'Question',
        name: 'What is the daily pilgrim limit for Char Dham Yatra 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Daily pilgrim limits for 2026: Kedarnath — 15,000 to 17,000 pilgrims per day. Badrinath — 20,000 pilgrims per day. Gangotri — 7,000 to 8,000 pilgrims per day. Yamunotri — 7,000 to 8,000 pilgrims per day. These limits are strictly enforced. If the daily limit is reached, pilgrims at checkpoints will be held back — even with a valid registration. This is why booking packages with an experienced operator who monitors daily counts is important.' },
      },
      {
        '@type': 'Question',
        name: 'What happens if I go to Char Dham without registration?',
        acceptedAnswer: { '@type': 'Answer', text: 'If you attempt to travel to any of the four dhams without a valid yatra permit in 2026, you will be stopped at the checkpoints and turned back. The Uttarakhand Police and Tourism Department enforce this at Sonprayag (Kedarnath), Joshimath (Badrinath), Barkot (Yamunotri), and Uttarkashi (Gangotri). There is no on-the-spot registration at these checkpoints — you must register in advance.' },
      },
      {
        '@type': 'Question',
        name: 'Can a travel operator register on my behalf for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. A registered tour operator like Shiv Ganga Travels can complete biometric registration on your behalf when provided with your Aadhaar details and required documents. This is included in our packages at no extra charge. However, the physical biometric verification (fingerprint) must be done by the pilgrim themselves at a registration centre — the operator can submit the initial online application.' },
      },
      {
        '@type': 'Question',
        name: 'How far in advance should I register for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Register as early as possible — ideally 30–60 days before your planned departure date. During peak season (May–June), registration servers can be slow. Registering in advance also helps if there are any corrections needed to your documents. Shiv Ganga Travels recommends completing registration at least 2 weeks before departure.' },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
    </>
  );
}

const H2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.5vw,1.55rem)', fontWeight:700, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const H3 = { fontFamily:'var(--font-display)', fontSize:'clamp(1rem,2vw,1.2rem)', fontWeight:700, color:'var(--teal)', marginBottom:8, marginTop:24 };

export default function RegistrationBlog() {
  return (
    <>
      <Schema/>

      {/* Hero */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'56px 20px 44px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>
            Step-by-Step Guide · Updated April 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.2, marginBottom:16 }}>
            Char Dham Yatra Registration 2026<br/>
            <em style={{ color:'#FFD166', fontStyle:'italic' }}>Step-by-Step Guide</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15.5, lineHeight:1.75, maxWidth:700, margin:'0 auto 20px' }}>
            Register before you travel — not as a formality but as a hard requirement. Police checkpoints at Sonprayag, Gaurikund and Guptkashi turn back unregistered pilgrims. Your 6-hour drive from Haridwar counts for nothing without a valid registration. Here is the complete step-by-step process from operators who've helped 50,000+ pilgrims register successfully.
          </p>
          <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap' }}>
            {['⏱️ 20 min to complete','💰 Completely free','📱 Online or offline','🪪 Aadhaar mandatory'].map(t => (
              <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Author + freshness strip */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', display:'flex', gap:20, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', fontSize:12.5, color:'var(--text-muted)' }}>
          <span>✍️ <strong style={{ color:'var(--navy)' }}>By Dhanesh Chandra Mishra</strong> — Founder, Shiv Ganga Travels · Retd. Indian Army Officer · 15 years, 50,000+ pilgrims</span>
          <span>🗓️ <strong style={{ color:'var(--navy)' }}>Last updated:</strong> April 27, 2026 · Verified for current season</span>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, alignItems:'center' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link>
          <span>›</span>
          <span>Char Dham Yatra Registration 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Alert box */}
        <div style={{ background:'#FFF3CD', border:'2px solid #E8920A', borderRadius:12, padding:'16px 20px', marginBottom:32, display:'flex', gap:14, alignItems:'flex-start' }}>
          <span style={{ fontSize:26, flexShrink:0 }}>⚠️</span>
          <div>
            <div style={{ fontWeight:700, fontSize:14, color:'#7B3F00', marginBottom:6 }}>Mandatory from Day 1 of the Season</div>
            <p style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.7, margin:0 }}>
              Char Dham Yatra registration is <strong>not optional</strong> in 2026. Police checkpoints at Sonprayag (Kedarnath), Joshimath (Badrinath), Barkot (Yamunotri), and Uttarkashi (Gangotri) will turn back any pilgrim without a valid yatra permit. There is <strong>no on-the-spot registration</strong> at these checkpoints.
            </p>
          </div>
        </div>

        {/* Table of contents */}
        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:36 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>📋 What This Guide Covers</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:6 }}>
            {[
              ['#why','Why registration is mandatory'],
              ['#official','Official registration website'],
              ['#online','How to register online — 6 steps'],
              ['#offline','Offline registration centres'],
              ['#documents','Documents required'],
              ['#limits','Daily pilgrim limits 2026'],
              ['#55plus','Special rules for 55+ pilgrims'],
              ['#foreign','Foreign nationals guide'],
              ['#mistakes','5 common registration mistakes'],
              ['#operator','How Shiv Ganga Travels helps'],
            ].map(([href, text]) => (
              <a key={href} href={href} style={{ color:'var(--navy)', fontSize:13, fontWeight:500, textDecoration:'none', display:'flex', gap:6, alignItems:'center' }}>
                <span style={{ color:'var(--gold)', fontWeight:700, fontSize:10 }}>→</span> {text}
              </a>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ fontSize:15.5, color:'var(--text-mid)', lineHeight:1.85 }}>

          <h2 id="why" style={H2}>Why Is Char Dham Yatra Registration Mandatory?</h2>
          <p>The mandatory registration system was introduced by the Uttarakhand government after the tragic 2013 Kedarnath floods, when thousands of unregistered pilgrims were stranded and it was impossible to account for them. Today, the biometric registration system serves three purposes:</p>
          <div style={{ display:'flex', flexDirection:'column', gap:10, margin:'16px 0 24px' }}>
            {[
              ['1️⃣','Safety tracking','If a disaster occurs, authorities know exactly how many people are at which dham and can mount a targeted rescue.'],
              ['2️⃣','Daily limit enforcement','Each dham has a maximum daily capacity. Registration allows the government to enforce these limits and prevent dangerous overcrowding.'],
              ['3️⃣','Medical screening','Pilgrims above 55 must submit a medical certificate. Registration creates a health record that helps emergency responders.'],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ display:'flex', gap:12, padding:'14px 16px', background:'var(--bg)', borderRadius:10, border:'1px solid var(--border)' }}>
                <span style={{ fontSize:20, flexShrink:0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>{title}</div>
                  <div style={{ fontSize:15, color:'#4A5568' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background:'var(--navy-light)', borderRadius:10, padding:'14px 18px', marginBottom:24 }}>
            <p style={{ margin:0, fontSize:14, color:'var(--navy)', fontStyle:'italic' }}>
              "In 2013, we lost pilgrims whose families had no idea where exactly they were on the route. That tragedy changed everything. Today, registration means we know every pilgrim by name, Aadhaar, and location. It is the single best safety system this pilgrimage has ever had."
            </p>
            <p style={{ margin:'8px 0 0', fontSize:12.5, color:'var(--text-muted)', fontWeight:600 }}>— Dhanesh Chandra Mishra, Shiv Ganga Travels, Haridwar</p>
          </div>

          <h2 id="official" style={H2}>The Only Official Registration Website</h2>
          <div style={{ background:'#F0FDF4', border:'2px solid #16A34A', borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
            <div style={{ fontWeight:700, fontSize:14, color:'#15803D', marginBottom:8 }}>✅ Official Website (Free):</div>
            <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer"
              style={{ fontSize:16, fontWeight:700, color:'#15803D', display:'block', marginBottom:8 }}>
              registrationandtouristcare.uk.gov.in
            </a>
            <p style={{ fontSize:13.5, color:'#15803D', margin:0 }}>
              ⚠️ <strong>Do not pay money on any other website.</strong> Many scam sites charge ₹200–500 for "registration assistance." Char Dham Yatra registration is 100% free. If any website asks for money, it is not the official portal.
            </p>
          </div>

          <h2 id="online" style={H2}>How to Register Online — 6 Simple Steps</h2>
          <p>The entire online process takes 15–20 minutes. Do it from a computer for the best experience — the mobile version can be slow during peak season.</p>

          <div style={{ display:'flex', flexDirection:'column', gap:12, margin:'16px 0 28px' }}>
            {[
              { n:'01', title:'Visit the official portal', desc:'Go to registrationandtouristcare.uk.gov.in on your browser. Click the "Yatra Registration" button on the homepage.' },
              { n:'02', title:'Create your account', desc:'Click "New Registration." Enter your mobile number — an OTP will be sent. Enter the OTP to verify. Create a password. Note: use the mobile number that is working and accessible during your yatra.' },
              { n:'03', title:'Enter pilgrim details', desc:'Fill in details for each traveller: Full name exactly as on Aadhaar, Aadhaar number, date of birth, gender, address. For groups, add each member separately. The system allows up to 6 members per registration.' },
              { n:'04', title:'Select dhams and travel dates', desc:'Choose which dhams you are planning to visit. Select your expected date of visit at each dham. You can edit these dates later if your plans change — re-registration is not required for date changes.' },
              { n:'05', title:'Upload medical certificate (if 55+)', desc:'If any group member is aged 55 years or above, upload a scanned copy of the medical fitness certificate from a registered MBBS doctor. The certificate must confirm fitness for high-altitude travel.' },
              { n:'06', title:'Download and print your yatra permit', desc:'After successful submission, download your Char Dham Yatra Permit as a PDF. Print it and carry it throughout the journey. Also save a digital copy on your phone. It will be checked at checkpoints before each dham.' },
            ].map(s => (
              <div key={s.n} style={{ display:'flex', gap:0, borderRadius:12, overflow:'hidden', border:'1px solid var(--border)' }}>
                <div style={{ background:'var(--navy)', minWidth:52, display:'flex', alignItems:'center', justifyContent:'center', padding:'16px 12px' }}>
                  <span style={{ color:'#FFD166', fontWeight:800, fontSize:18, fontFamily:'var(--font-display)' }}>{s.n}</span>
                </div>
                <div style={{ padding:'14px 16px', flex:1 }}>
                  <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:5 }}>{s.title}</div>
                  <div style={{ fontSize:15, color:'#4A5568', lineHeight:1.85 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="offline" style={H2}>Offline Registration Centres — If You Cannot Register Online</h2>
          <p>If you are not comfortable with online registration, you can register in person at these designated centres. Bring original Aadhaar card.</p>

          <div style={{ overflowX:'auto', marginBottom:28 }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
              <thead>
                <tr style={{ background:'var(--navy)' }}>
                  {['Location','Centre Address','When to Use'].map(h => (
                    <th key={h} style={{ padding:'11px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Haridwar','Near Har Ki Pauri, Tourist Information Centre','Best — register before starting your journey'],
                  ['Rishikesh','Near Ram Jhula, Tourism office','Alternate if staying in Rishikesh'],
                  ['Dehradun','ISBT Bus Stand, Tourist Care Counter','For travellers arriving via Dehradun'],
                  ['Barkot','Tourist Rest House, Barkot','Yamunotri base — last chance before Yamunotri'],
                  ['Uttarkashi','District Tourism Office','Gangotri base — register before Gangotri'],
                  ['Sonprayag','Tourist Care Counter','Kedarnath base — register before Sonprayag checkpoint'],
                  ['Joshimath','Tourist Care Centre','Badrinath base — register before Badrinath checkpoint'],
                ].map(([loc, addr, tip], i) => (
                  <tr key={loc} style={{ background:i%2===0?'#fff':'var(--bg)', borderBottom:'1px solid var(--border)' }}>
                    <td style={{ padding:'10px 14px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{loc}</td>
                    <td style={{ padding:'10px 14px', color:'var(--text-muted)', fontSize:13 }}>{addr}</td>
                    <td style={{ padding:'10px 14px', color:'var(--text-muted)', fontSize:13 }}>{tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="documents" style={H2}>Documents Required — Complete Checklist</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:10, marginBottom:28 }}>
            {[
              { icon:'🪪', title:'Aadhaar Card', note:'Mandatory for all Indian pilgrims. Name and details must match exactly what you enter in the registration form.' },
              { icon:'📱', title:'Aadhaar-linked Mobile', note:'OTP will be sent to this number for verification. Must be active and in your possession during the yatra.' },
              { icon:'🏥', title:'Medical Certificate (55+)', note:'From a registered MBBS doctor. Must state "fit for high-altitude travel." Valid for the current season.' },
              { icon:'📷', title:'Passport Photo', note:'May be required at physical registration centres. Digital copy for online registration.' },
              { icon:'🚨', title:'Emergency Contact', note:'Name and mobile number of a family member not travelling with you.' },
              { icon:'🛂', title:'Passport (Foreign Nationals)', note:'Foreign passport holders must also complete Char Dham registration. Passport number is used instead of Aadhaar.' },
            ].map(d => (
              <div key={d.title} style={{ padding:'14px', background:'var(--bg)', borderRadius:10, border:'1px solid var(--border)', display:'flex', gap:12 }}>
                <span style={{ fontSize:22, flexShrink:0, marginTop:2 }}>{d.icon}</span>
                <div>
                  <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:4 }}>{d.title}</div>
                  <div style={{ fontSize:12.5, color:'var(--text-muted)', lineHeight:1.5 }}>{d.note}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="limits" style={H2}>Daily Pilgrim Limits 2026 — Know Before You Go</h2>
          <p>This is the detail most pilgrims overlook until it is too late. Each dham has a strict daily limit enforced at checkpoints. If the limit is reached, pilgrims at the checkpoint are held back — even with a valid registration permit.</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:10, marginBottom:16 }}>
            {[
              { dham:'Kedarnath', limit:'15,000–17,000', icon:'🏔️', note:'Most sought-after — book packages early' },
              { dham:'Badrinath', limit:'20,000', icon:'🕌', note:'Higher capacity, fewer day-limit issues' },
              { dham:'Gangotri', limit:'7,000–8,000', icon:'🌊', note:'Lower limit — plan dates carefully' },
              { dham:'Yamunotri', limit:'7,000–8,000', icon:'⛩️', note:'Smallest capacity — avoid peak May dates' },
            ].map(d => (
              <div key={d.dham} style={{ background:'var(--navy)', borderRadius:12, padding:'16px', textAlign:'center' }}>
                <div style={{ fontSize:28, marginBottom:6 }}>{d.icon}</div>
                <div style={{ fontWeight:700, fontSize:15, color:'#fff', marginBottom:4 }}>{d.dham}</div>
                <div style={{ fontWeight:800, fontSize:20, color:'#FFD166', marginBottom:6, fontFamily:'var(--font-display)' }}>{d.limit}</div>
                <div style={{ fontSize:11.5, color:'rgba(255,255,255,0.65)' }}>pilgrims/day</div>
                <div style={{ fontSize:11.5, color:'rgba(255,255,255,0.5)', marginTop:6 }}>{d.note}</div>
              </div>
            ))}
          </div>

          <h2 id="55plus" style={H2}>Special Rules for Pilgrims Aged 55 and Above</h2>
          <div style={{ background:'#FEF3E2', border:'1px solid var(--gold)', borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
            <div style={{ fontWeight:700, fontSize:14, color:'#7B3F00', marginBottom:10 }}>🏥 Medical Certificate is Non-Negotiable</div>
            {[
              'Must be issued by a registered MBBS doctor (government or private hospital)',
              'Must explicitly state the pilgrim is "fit for high-altitude travel to Kedarnath/Char Dham"',
              'Must mention the pilgrim\'s name, age, and date of issue',
              'Date of issue should be within 30 days of your yatra start date',
              'Carry original + photocopy — checkpoints may retain a copy',
            ].map(r => (
              <div key={r} style={{ display:'flex', gap:8, fontSize:13.5, color:'#7B3F00', padding:'4px 0', borderBottom:'1px solid rgba(123,63,0,0.1)' }}>
                <span style={{ flexShrink:0, fontWeight:700 }}>→</span> {r}
              </div>
            ))}
            <p style={{ fontSize:13, color:'#7B3F00', marginTop:12, marginBottom:0, fontStyle:'italic' }}>
              Note: Pilgrims with heart disease, high blood pressure, or diabetes should carry medical certificates regardless of age and inform their tour operator in advance.
            </p>
          </div>

          <h2 id="foreign" style={H2}>Char Dham Yatra Registration for Foreign Nationals</h2>
          <p>Foreign nationals can complete Char Dham Yatra in 2026. Here is what is different for international pilgrims:</p>
          {[
            'Register at registrationandtouristcare.uk.gov.in using passport number instead of Aadhaar',
            'Carry original passport at all checkpoints throughout the yatra',
            'No special permit is required beyond the yatra registration — Inner Line Permit is not needed for the standard Char Dham circuit',
            'Helicopter bookings via IRCTC require a valid Indian phone number — international pilgrims should purchase a local SIM before attempting IRCTC registration',
            'Some hotels close to the dhams may request passport copy at check-in — carry photocopies',
          ].map(r => (
            <div key={r} style={{ display:'flex', gap:8, fontSize:15, color:'#4A5568', padding:'7px 0', borderBottom:'1px solid var(--border)' }}>
              <span style={{ color:'var(--teal)', fontWeight:700, flexShrink:0 }}>✓</span> {r}
            </div>
          ))}

          <h2 id="mistakes" style={H2}>5 Most Common Registration Mistakes — Avoid These</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28, marginTop:16 }}>
            {[
              { num:'01', mistake:'Name mismatch with Aadhaar', fix:'Enter your name exactly as it appears on your Aadhaar card — including middle name if present. Mismatch causes rejection at checkpoints.' },
              { num:'02', mistake:'Registering on a fake/paid website', fix:'Only registrationandtouristcare.uk.gov.in is official. Any website charging money for registration is a scam.' },
              { num:'03', mistake:'Forgetting to add all group members', fix:'Registration is individual — each pilgrim in your group must be registered. One registration per person. Groups of more than 6 need separate registrations.' },
              { num:'04', mistake:'Not carrying physical copy', fix:'A screenshot on your phone may not be accepted if connectivity is poor at mountain checkpoints. Always print a physical copy.' },
              { num:'05', mistake:'Not uploading medical certificate for 55+', fix:'Without the medical certificate, 55+ pilgrims will be turned back at the checkpoint regardless of their yatra permit. Get the certificate from a doctor at least 1 week before registration.' },
            ].map(e => (
              <div key={e.num} style={{ display:'flex', gap:0, borderRadius:12, overflow:'hidden', border:'1px solid var(--border)' }}>
                <div style={{ background:'#DC2626', minWidth:52, display:'flex', alignItems:'center', justifyContent:'center', padding:'16px 12px' }}>
                  <span style={{ color:'#fff', fontWeight:800, fontSize:16 }}>{e.num}</span>
                </div>
                <div style={{ padding:'14px 16px', flex:1 }}>
                  <div style={{ fontWeight:700, fontSize:14, color:'#DC2626', marginBottom:5 }}>❌ {e.mistake}</div>
                  <div style={{ fontSize:15, color:'#4A5568', lineHeight:1.85 }}>✅ <strong>Fix:</strong> {e.fix}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="operator" style={H2}>How Shiv Ganga Travels Handles Your Registration</h2>
          <p>Every Char Dham Yatra package booked with Shiv Ganga Travels includes full registration assistance at no extra charge. Here is exactly what we do:</p>
          {[
            'We send you a registration checklist 30 days before your departure',
            'Our team submits the online registration application on your behalf using your provided documents',
            'We guide 55+ pilgrims through obtaining the correct medical certificate format',
            'We carry physical copies of all registration permits in the vehicle throughout the yatra',
            'If daily limits are hit at a checkpoint, our drivers know alternate timing strategies and holding points',
            'We monitor the official Char Dham daily count portal and alert groups in advance',
          ].map(r => (
            <div key={r} style={{ display:'flex', gap:8, fontSize:15, color:'#334155', padding:'7px 0', borderBottom:'1px solid var(--border)' }}>
              <span style={{ color:' var(--navy)', fontWeight:700, flexShrink:0 }}>✓</span> {r}
            </div>
          ))}
        </div>

        {/* Bottom FAQ accordion */}
        <div style={{ marginTop:44, marginBottom:36 }}>
          <h2 style={{ ...H2, marginTop:0 }}>Frequently Asked Questions</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {[
              ['Is Char Dham Yatra registration free?', 'Yes, 100% free. The official portal registrationandtouristcare.uk.gov.in charges nothing. Any website or person asking you to pay for registration is a scam.'],
              ['Can I register at the checkpoint itself?', 'No. There is no on-the-spot registration at Sonprayag, Joshimath, Barkot, or Uttarkashi checkpoints. You must register in advance — online or at a centre in Haridwar, Rishikesh, or Dehradun.'],
              ['Do I need separate registration for each dham?', 'No. One registration covers all the dhams you plan to visit. You select which dhams during the registration process. If you add a dham later, you can update your registration on the same portal.'],
              ['What if I lose my yatra permit during the journey?', 'Log back into registrationandtouristcare.uk.gov.in with your mobile number and re-download the PDF. This is why registering with your own mobile number — not a relative\'s — is important.'],
              ['Can I change my travel dates after registration?', 'Yes. Log into the portal and update your expected dates. You do not need to re-register — just edit the dates and re-download the updated permit.'],
            ].map(([q, a], i) => (
              <details key={i} style={{ background:'#fff', borderRadius:10, border:'1px solid var(--border)', overflow:'hidden' }}>
                <summary style={{ padding:'14px 16px', cursor:'pointer', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', fontWeight:600, fontSize:14, color:'var(--navy)' }}>
                  {q} <span style={{ flexShrink:0, fontSize:18, color:'var(--navy)' }}>＋</span>
                </summary>
                <div style={{ padding:'0 16px 14px', fontSize:15.5, color:'#2D3748', lineHeight:1.75, borderTop:'1px solid var(--border)', paddingTop:12 }}>{a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginBottom:40 }}>
          <div style={{ fontWeight:700, fontSize:20, color:'#fff', fontFamily:'var(--font-display)', marginBottom:8 }}>
            Let Us Handle Your Registration
          </div>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>
            Every Shiv Ganga Travels package includes complete registration assistance — free. Speak directly with Dhanesh ji.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need help with Char Dham Yatra registration 2026. Please guide me.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
              💬 WhatsApp — Get Help Now
            </a>
            <a href='tel:+917017082807'
              style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
          <p style={{ color:'rgba(255,255,255,0.5)', fontSize:11.5, marginTop:14, marginBottom:0 }}>
            Shiv Ganga Travels · Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar, Uttarakhand 249410, India
          </p>
        </div>

        {/* Related links */}
        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:14 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[
              ['Char Dham Yatra Cost 2026', '/blog/char-dham-yatra-cost'],
              ['2026 New Rules', '/blog/char-dham-yatra-2026-new-rules'],
              ['Complete FAQ — 50 Questions', '/blog/char-dham-yatra-faq'],
              ['Senior Citizen Guide', '/blog/senior-citizen-char-dham'],
              ['Kedarnath Helicopter Booking', '/blog/kedarnath-helicopter-booking'],
            ].map(([label, href]) => (
              <Link key={href} href={href}
                style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
