import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra Registration 2026 – Free Step-by-Step Online, WhatsApp & Offline Guide',
  description: 'Char Dham Yatra 2026 registration is FREE. Step-by-step guide: online (registrationandtouristcare.uk.gov.in), WhatsApp, app, and offline counter. Documents required and daily pilgrim limits.',
  keywords: ['char dham yatra registration 2026', 'char dham yatra registration online', 'char dham yatra biometric registration', 'char dham yatra registration process', 'registrationandtouristcare.uk.gov.in', 'char dham registration free 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-registration` },
  openGraph: {
    title: 'Char Dham Yatra Registration 2026 – Free Step-by-Step Online, WhatsApp & Offline Guide',
    description: 'Everything you need to know about mandatory Char Dham Yatra registration 2026 — online process, documents, biometric centres, daily limits.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-registration`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Registration 2026 — Free Online Guide | 18,000/Day Lim | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Registration 2026 — Step-by-Step Guide',
    description: 'Everything you need to know about mandatory Char Dham Yatra registration 2026 — online process, documents, biometric centres, daily limits.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra Registration 2026 — Step-by-Step Guide | Shiv Ganga Travels' }],
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
        name: 'Sumit Mishra',
        jobTitle: 'Operations Manager, Shiv Ganga Travels',
        url: `${SITE.baseUrl}/about`,
        sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
      },
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: 'https://www.shivgangatravels.com/logo.png' },
    },
    datePublished: '2026-01-01',
    dateModified: '2026-05-09',
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
      { '@type': 'HowToStep', position: 5, name: 'Upload medical certificate', text: 'If any pilgrim is 55 years or above, upload the medical fitness certificate from a registered doctor.' },
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
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, biometric registration is mandatory for all four dhams in 2026 — Yamunotri, Gangotri, Kedarnath, and Badrinath. The yatra permit generated after registration is checked at multiple police checkpoints along the route. Without it, you will be turned back. Registration is completely FREE in 2026 (₹0) — no fee of any kind. Takes 15–20 minutes online at registrationandtouristcare.uk.gov.in, or via WhatsApp (type "Yatra" to +91-8394833833), or via the Tourist Care Uttarakhand mobile app.' },
      },
      {
        '@type': 'Question',
        name: 'What is the official website for Char Dham Yatra registration 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'The official and only legitimate website for Char Dham Yatra registration 2026 is registrationandtouristcare.uk.gov.in — run by the Uttarakhand Tourism Department. Do not pay money on any other website claiming to offer Char Dham registration. The official registration is completely free.' },
      },
      {
        '@type': 'Question',
        name: 'What documents are needed for Char Dham Yatra registration?',
        acceptedAnswer: { '@type': 'Answer', text: 'Required documents: (1) Aadhaar card — mandatory for all Indian pilgrims, (2) Mobile number linked to Aadhaar for OTP verification, (3) Medical fitness certificate from a registered doctor — mandatory for all pilgrims aged 55 and above, (4) Passport for foreign nationals. Foreign nationals must also register and carry their passport at all checkpoints.' },
      },
      {
        '@type': 'Question',
        name: 'Can I register for Char Dham Yatra offline?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Offline registration centres are available at: Haridwar — near Har Ki Pauri (20 counters), Rishikesh — near Ram Jhula (30 counters), Dehradun — near ISBT. You can also register at designated tourist care centres at Barkot (Yamunotri base), Uttarkashi (Gangotri base), Sonprayag (Kedarnath base), and Joshimath (Badrinath base). Bring original Aadhaar card. Registration at all centres is free. You can also register via WhatsApp: type "Yatra" and send to +91-8394833833. Helpline: 0135-1364.' },
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
      <Schema />

      {/* Hero */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'56px 20px 44px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>
            Step-by-Step Guide · Updated May 21, 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.2, marginBottom:16 }}>
            Char Dham Yatra Registration 2026<br/>
            <em style={{ color:'#FFD166', fontStyle:'italic' }}>Step-by-Step Guide</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15.5, lineHeight:1.75, maxWidth:700, margin:'0 auto 20px' }}>
            Register before you travel — not as a formality but as a hard requirement. Police checkpoints at Sonprayag, Gaurikund and Guptkashi turn back unregistered pilgrims. Your 6-hour drive from Haridwar counts for nothing without a valid registration. Here is the complete step-by-step process from operators who've helped 50,000+ pilgrims register successfully.
          </p>
          <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap' }}>
            {['⏱️ 20 min to complete','💰 Completely FREE — ₹0','📱 Online / WhatsApp / App / Offline','🪪 Aadhaar mandatory'].map(t => (
              <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Author + freshness strip */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', display:'flex', gap:20, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', fontSize:12.5, color:'var(--text-muted)' }}>
          <span>✍️ <strong style={{ color:'var(--navy)' }}>By Dhanesh Chandra Mishra</strong> — Founder, Shiv Ganga Travels · Retd. Indian Army Officer · 15 years, 50,000+ pilgrims</span>
          <span>🗓️ <strong style={{ color:'var(--navy)' }}>Last updated:</strong> May 9, 2026 · Verified for current season — fee confirmed FREE</span>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, alignItems:'center' }}>
          Home
          <span>›</span>
          Blog
          <span>›</span>
          <span>Char Dham Yatra Registration 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />

        {/* === CONVERSION HOOK — above fold, reduces bounce === */}
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:24, display:'flex', flexWrap:'wrap', gap:16, alignItems:'center', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontWeight:700, fontSize:14, color:'#FFD166', marginBottom:4 }}>✅ Don&apos;t want to do this yourself?</div>
            <div style={{ fontSize:13.5, color:'rgba(255,255,255,0.8)', lineHeight:1.6 }}>Shiv Ganga Travels completes registration for all our pilgrims — free with every package booking.</div>
          </div>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', flexShrink:0 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Please help me with Char Dham Yatra registration 2026.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'10px 18px', borderRadius:9, fontWeight:700, fontSize:13, textDecoration:'none', whiteSpace:'nowrap' }}>
              💬 Register via WhatsApp
            </a>
            <a href={`tel:${SITE.phone}`}
              style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'10px 18px', borderRadius:9, fontWeight:700, fontSize:13, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)', whiteSpace:'nowrap' }}>
              📞 Call Us
            </a>
          </div>
        </div>

        {/* Alert box */}
        <div style={{ background:'#FFF3CD', border:'2px solid #E8920A', borderRadius:12, padding:'16px 20px', marginBottom:32, display:'flex', gap:14, alignItems:'flex-start' }}>
          <span style={{ fontSize:26, flexShrink:0 }}>⚠️</span>
          <div>
            <div style={{ fontWeight:700, fontSize:14, color:'#7B3F00', marginBottom:6 }}>Mandatory from Day 1 of the Season</div>
            <p style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.7, margin:0 }}>
              Char Dham Yatra registration is <strong>not optional</strong> in 2026. Source: <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer" style={{color:"var(--teal)",fontWeight:600}}>Uttarakhand Tourism Registration Portal</a>. Police checkpoints at Sonprayag (Kedarnath), Joshimath (Badrinath), Barkot (Yamunotri), and Uttarkashi (Gangotri) will turn back any pilgrim without a valid yatra permit. There is <strong>no on-the-spot registration</strong> at these checkpoints.
            </p>
          </div>
        </div>

        {/* Table of contents */}
        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:36 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>📋 What This Guide Covers</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:6 }}>
            {[
              ['#why','Why registration is mandatory'],
              ['#official','Official website + 4 registration methods'],
              ['#online','How to register online — 6 steps'],
              ['#offline','Offline centres + helpline'],
              ['#documents','Documents required'],
              ['#limits','Daily pilgrim limits 2026'],
              ['#helicopter','Helicopter booking — register first'],
              ['#55plus','Special rules for 55+ pilgrims'],
              ['#foreign','Foreign nationals + non-Hindu rules'],
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
          <div style={{ background:'#F0FDF4', border:'2px solid #16A34A', borderRadius:12, padding:'16px 20px', marginBottom:16 }}>
            <div style={{ fontWeight:700, fontSize:14, color:'#15803D', marginBottom:8 }}>✅ Official Website — 100% FREE (₹0):</div>
            <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer"
              style={{ fontSize:16, fontWeight:700, color:'#15803D', display:'block', marginBottom:8 }}>
              registrationandtouristcare.uk.gov.in
            </a>
            <p style={{ fontSize:13.5, color:'#15803D', margin:0 }}>
              ⚠️ <strong>Registration is completely free — ₹0.</strong> Any website or person asking you to pay for Char Dham registration is running a scam. The government removed the ₹150 fee for 2026.
            </p>
          </div>

          {/* 4 registration methods */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10, marginBottom:28 }}>
            {[
              { icon:'🌐', method:'Online (Website)', detail:'registrationandtouristcare.uk.gov.in — best for first-time users. Works on mobile and desktop.', badge:'Recommended' },
              { icon:'💬', method:'WhatsApp', detail:'Type "Yatra" and send to +91-8394833833. Easiest for pilgrims not comfortable with web forms.', badge:'Easiest' },
              { icon:'📲', method:'Mobile App', detail:'"Tourist Care Uttarakhand" — available on Google Play Store and Apple App Store. Can register and re-download permit anytime.', badge:'Handy on journey' },
              { icon:'🏢', method:'Offline Centre', detail:'Walk-in registration at Haridwar, Rishikesh, Dehradun, and at each dham base. Bring original Aadhaar.', badge:'No internet needed' },
            ].map(m => (
              <div key={m.method} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
                  <span style={{ fontSize:22 }}>{m.icon}</span>
                  <span style={{ fontSize:10.5, fontWeight:700, background:'rgba(11,123,139,0.1)', color:'var(--teal)', padding:'2px 8px', borderRadius:20 }}>{m.badge}</span>
                </div>
                <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:4 }}>{m.method}</div>
                <div style={{ fontSize:12.5, color:'var(--text-muted)', lineHeight:1.55 }}>{m.detail}</div>
              </div>
            ))}
          </div>

          <h2 id="online" style={H2}>How to Register Online — 6 Simple Steps</h2>
          <p>The entire online process takes 15–20 minutes. Do it from a computer for the best experience — the mobile version can be slow during peak season.</p>

          <div style={{ display:'flex', flexDirection:'column', gap:12, margin:'16px 0 28px' }}>
            {[
              { n:'01', title:'Visit the official portal', desc:'Go to registrationandtouristcare.uk.gov.in on your browser. Click the "Yatra Registration" button on the homepage.' },
              { n:'02', title:'Create your account', desc:'Click "New Registration." Enter your mobile number — an OTP will be sent. Enter the OTP to verify. Create a password. Note: use the mobile number that is working and accessible during your yatra.' },
              { n:'03', title:'Enter pilgrim details', desc:'Fill in details for each traveller: Full name exactly as on Aadhaar, Aadhaar number, date of birth, gender, address. For groups, add each member separately. The system allows up to 6 members per registration.' },
              { n:'04', title:'Select dhams and travel dates', desc:'Choose which dhams you are planning to visit and your expected date at each. You can select all 4 (Char Dham) or fewer (Do Dham, single dham). You can update these dates later on the same portal without re-registering.' },
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

          <h2 id="offline" style={H2}>Offline Registration Centres — Walk-In, Free, No Internet Needed</h2>
          <p>If you prefer to register in person, bring your original Aadhaar card to any centre below. All centres are free. The government has set up <strong>30 counters in Rishikesh</strong> and <strong>20 counters in Haridwar</strong> for 2026 to handle peak demand. Helpline: <strong>0135-1364</strong> (Mon–Sat, 9 AM–6 PM).</p>

          <div style={{ overflowX:'auto', marginBottom:28 }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
              <thead>
                <tr style={{ background:'var(--navy)' }}>
                  {['Location','Centre Address','Counters / Notes'].map(h => (
                    <th key={h} style={{ padding:'11px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Haridwar','Near Har Ki Pauri, Tourist Information Centre','20 counters. Register here before departing — best option.'],
                  ['Rishikesh','Near Ram Jhula, Tourism office','30 counters. Largest centre. For pilgrims based in Rishikesh.'],
                  ['Dehradun','ISBT Bus Stand, Tourist Care Counter','For travellers arriving via Dehradun or Jolly Grant Airport.'],
                  ['Barkot','Tourist Rest House, Barkot','Yamunotri base — last registration point before Janki Chatti.'],
                  ['Uttarkashi','District Tourism Office','Gangotri base — register here before heading to Gangotri.'],
                  ['Sonprayag','Tourist Care Counter','Kedarnath base — register before the Sonprayag checkpoint.'],
                  ['Joshimath','Tourist Care Centre','Badrinath base — register before the Joshimath checkpoint.'],
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

          {/* Mid-page CTA — placed at peak intent moment */}
          <div style={{ background:'var(--navy)', borderRadius:14, padding:'20px 24px', margin:'24px 0 36px', display:'flex', gap:20, alignItems:'center', flexWrap:'wrap' }}>
            <div style={{ flex:1, minWidth:200 }}>
              <div style={{ fontWeight:700, fontSize:15, color:'#fff', marginBottom:4 }}>Worried about hitting the daily cap?</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.5 }}>Our team monitors daily counts and adjusts departure timing so your group is never turned back. Registration handled free with every package.</div>
            </div>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 and need help with registration and daily limit planning.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', whiteSpace:'nowrap', flexShrink:0 }}>
              💬 Ask Us
            </a>
          </div>

          {/* Helicopter registration dependency */}
          <div id="helicopter" style={{ background:'#EEF6FF', border:'1px solid #B5D4F4', borderRadius:12, padding:'16px 20px', marginBottom:28 }}>
            <div style={{ fontWeight:700, fontSize:14, color:'#0C447C', marginBottom:8 }}>🚁 Booking Kedarnath Helicopter? Register First.</div>
            <p style={{ fontSize:13.5, color:'#185FA5', lineHeight:1.7, margin:'0 0 10px' }}>
              From 2026, the IRCTC helicopter portal (<strong>heliyatra.irctc.co.in</strong>) requires your Yatra Registration Number to log in. You cannot book a Kedarnath helicopter slot without first completing Char Dham Yatra registration. The sequence is:
            </p>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="registration" />
            {['1. Complete Char Dham Yatra registration at registrationandtouristcare.uk.gov.in (free, takes 15 min)','2. Note your Yatra Registration Number from the confirmation','3. Go to heliyatra.irctc.co.in and log in using your Registration Number + Aadhaar','4. Book your helicopter slot (May slots sell out by February — book early)'].map((step, i) => (
              <div key={i} style={{ display:'flex', gap:8, fontSize:13.5, color:'#185FA5', padding:'5px 0', borderBottom:'1px solid rgba(21,95,165,0.12)' }}>
                <span style={{ fontWeight:700, flexShrink:0 }}>→</span> {step}
              </div>
            ))}
            <div style={{ marginTop:10 }}>
              
                Full helicopter booking guide →
              
            </div>
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

          {/* Non-Hindu restriction notice */}
          <div style={{ background:'#FFF3CD', border:'1px solid #E8920A', borderRadius:10, padding:'14px 16px', marginBottom:16 }}>
            <div style={{ fontWeight:700, fontSize:13.5, color:'#7B3F00', marginBottom:6 }}>⚠️ 2026 New Rule: Entry Restrictions for Non-Hindus</div>
            <p style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.7, margin:0 }}>
              The Uttarakhand government introduced religion-based entry conditions for 2026. <strong>Kedarnath, Badrinath, and Gangotri</strong> have restrictions — non-Hindu pilgrims may face conditions or be asked to declare their faith at the temple entry. <strong>Yamunotri remains open to all visitors</strong> without restriction. Foreign nationals and non-Hindu Indian pilgrims should check the latest BKTC notification before travelling to the three restricted dhams.
            </p>
          </div>

          {[
            'Register at registrationandtouristcare.uk.gov.in using passport number instead of Aadhaar',
            'Carry original passport at all checkpoints throughout the yatra',
            'No special permit is required beyond the yatra registration — Inner Line Permit is not needed for the standard Char Dham circuit',
            'Helicopter bookings via IRCTC (heliyatra.irctc.co.in) require a valid Indian phone number — international pilgrims should purchase a local SIM before booking',
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
              ['Is Char Dham Yatra registration free?', 'Yes — completely free in 2026. ₹0. The Uttarakhand government removed the previous ₹150 fee for the 2026 season. The official portal registrationandtouristcare.uk.gov.in charges nothing. Any website or person asking you to pay is running a scam.'],
              ['Can I register via WhatsApp?', 'Yes. Type "Yatra" and send to +91-8394833833. You will receive a step-by-step guide via WhatsApp to complete registration. This is the easiest method for pilgrims not comfortable with web forms. There is also an official mobile app: "Tourist Care Uttarakhand" on Google Play Store and Apple App Store.'],
              ['Can I register at the checkpoint itself?', 'No. There is no on-the-spot registration at Sonprayag, Joshimath, Barkot, or Uttarkashi checkpoints. You must register in advance — online, via WhatsApp, via the app, or at a centre in Haridwar, Rishikesh, or Dehradun. Helpline: 0135-1364.'],
              ['Do I need separate registration for each dham?', 'No. One registration covers all the dhams you plan to visit. You select which dhams during the registration process. If you add a dham later, you can update your registration on the same portal.'],
              ['What if I lose my yatra permit during the journey?', 'Log back into registrationandtouristcare.uk.gov.in with your mobile number and re-download the PDF. You can also re-download via the Tourist Care Uttarakhand mobile app. This is why registering with your own mobile number — not a relative\'s — is important.'],
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
      
        {/* Author bio card — E-E-A-T */}
        <BlogAuthor variant="bottom" author="sumit" />

        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="registration" />
</article>
    </>
  );
}
