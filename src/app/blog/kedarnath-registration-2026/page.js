import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Kedarnath Yatra Registration 2026 – Online Process, Documents & WhatsApp Registration',
  description: 'Step-by-step Kedarnath Yatra registration 2026: free at registrationandtouristcare.uk.gov.in or WhatsApp 8394833833. Documents needed, daily pilgrim limits, and 55+ age rules explained.',
  keywords: ['kedarnath yatra registration 2026', 'kedarnath registration 2026', 'kedarnath yatra registration online', 'kedarnath registration process', 'kedarnath yatra biometric', 'kedarnath registration documents'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-registration-2026` },
  openGraph: {
    title: 'Kedarnath Yatra Registration 2026 – Online Process, Documents & WhatsApp Registration',
    description: 'Mandatory registration for Kedarnath 2026. Step-by-step online guide, WhatsApp option, daily 18,000 pilgrim cap. Free e-pass with QR code. Portal opened March 6.',
    url: `${SITE.baseUrl}/blog/kedarnath-registration-2026`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Yatra Registration 2026 — Online, WhatsApp & Offline Guide | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Yatra Registration 2026 — Complete Guide (Online + WhatsApp ',
    description: 'Mandatory registration for Kedarnath 2026. Step-by-step online guide, WhatsApp option, daily 18,000 pilgrim cap. Free e-pass with QR code. Portal opened Ma',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Yatra Registration 2026 — Complete Guide (Online + | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is Kedarnath Yatra registration mandatory in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kedarnath Yatra registration is 100% mandatory for 2026. Without a valid QR-coded Yatra Registration Letter (e-pass), you will be turned back at the Sonprayag checkpoint before even reaching Gaurikund. Registration is free — there is no fee for the e-pass.' } },
      { '@type': 'Question', name: 'How to register for Kedarnath Yatra online in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Visit registrationandtouristcare.uk.gov.in. Create an account with your mobile number and OTP. Click "Create/Manage Tour Info" → Select "Char Dham Yatra 2026" → Select Kedarnath → Enter traveller details including name, age, gender, and Aadhaar number → Upload ID proof → Submit. Download the QR-coded Yatra Certificate. Print it or save on your phone.' } },
      { '@type': 'Question', name: 'What is the daily pilgrim limit for Kedarnath in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The daily pilgrim limit for Kedarnath in 2026 is approximately 18,000 pilgrims per day. This limit is why registering early is critical — May and June slots fill within days of the portal opening. If your preferred date is full, you will be placed on a waitlist. Book as soon as the portal opens (March 6) for peak season dates.' } },
      { '@type': 'Question', name: 'Can I register for Kedarnath via WhatsApp?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Send the word "YATRA" to +91-8394833833 on WhatsApp. The government\'s automated chatbot guides you through registration — name, age, ID details, travel date, and Dham selection. This method is often faster than the website during peak portal traffic. The QR-coded e-pass is sent directly to your WhatsApp.' } },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Kedarnath Registration 2026', item: `${SITE.baseUrl}/blog/kedarnath-registration-2026` },
    ],
  };
  const howto = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: 'How to Register for Kedarnath Yatra Online in 2026',
    description: 'Step-by-step guide to complete free Kedarnath Yatra registration on the official Uttarakhand government portal in 2026.',
    image: `${SITE.baseUrl}/opengraph-image`,
    totalTime: 'PT10M',
    estimatedCost: { '@type':'MonetaryAmount', currency:'INR', value:'0' },
    supply: [
      { '@type':'HowToSupply', name:'Aadhaar Card (mandatory)' },
      { '@type':'HowToSupply', name:'Mobile number linked to Aadhaar' },
      { '@type':'HowToSupply', name:'Medical fitness certificate (required for age 55+)' },
      { '@type':'HowToSupply', name:'Recent passport-size photograph (digital)' },
    ],
    tool: [{ '@type':'HowToTool', name:'Smartphone or computer with internet' }],
    step: [
      { '@type':'HowToStep', position:1, name:'Open the official portal', text:'Visit registrationandtouristcare.uk.gov.in — the only official Char Dham registration portal of the Uttarakhand Tourism Department.', url:`${SITE.baseUrl}/blog/kedarnath-registration-2026#step1` },
      { '@type':'HowToStep', position:2, name:'Create account with OTP', text:'Click "New Registration". Enter your mobile number, verify with OTP, and create a password.', url:`${SITE.baseUrl}/blog/kedarnath-registration-2026#step2` },
      { '@type':'HowToStep', position:3, name:'Select Char Dham 2026 → Kedarnath', text:'After login, click "Create/Manage Tour Info" → "Char Dham Yatra 2026" → check "Kedarnath".', url:`${SITE.baseUrl}/blog/kedarnath-registration-2026#step3` },
      { '@type':'HowToStep', position:4, name:'Add pilgrim details', text:'Enter each pilgrim\'s name exactly as on Aadhaar, age, gender, and Aadhaar number. Pilgrims aged 55+ must also upload a medical fitness certificate (PDF, under 2MB).', url:`${SITE.baseUrl}/blog/kedarnath-registration-2026#step4` },
      { '@type':'HowToStep', position:5, name:'Pick darshan date', text:'Choose your Kedarnath darshan date from available slots. The daily cap is approximately 18,000 pilgrims. Peak May–June slots fill within days of portal opening.', url:`${SITE.baseUrl}/blog/kedarnath-registration-2026#step5` },
      { '@type':'HowToStep', position:6, name:'Download QR-coded e-pass', text:'After submission, download the QR-coded Yatra Registration Letter (e-pass). Print it or save it on your phone. You will need to show this at the Sonprayag checkpoint.', url:`${SITE.baseUrl}/blog/kedarnath-registration-2026#step6` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howto) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
  </>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };


export default function KedarnathRegistration() {
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(29,158,117,0.25)', color: '#6EFFD0', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Registration opens March 6 · 100% free · QR e-pass
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Kedarnath Yatra Registration 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 640, margin: '0 auto 16px' }}>
            Step-by-step guide: Online · WhatsApp (8394833833) · Offline counter. Daily limit: 18,000 pilgrims. Without a valid QR pass, you are turned back at Sonprayag.
          </p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Kedarnath Registration 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> May 2026
        </div>

        {/* Critical facts box */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 22px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 12 }}>
          {[
            ['Portal opened', 'March 6, 2026'],
            ['Temple opened', 'April 22, 2026'],
            ['Daily limit', '~18,000/day'],
            ['Cost', 'FREE — ₹0'],
            ['WhatsApp', 'Send YATRA to 8394833833'],
            ['Website', 'registrationandtouristcare.uk.gov.in'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 12.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#FCEBEB', border: '1px solid #F09595', borderRadius: 12, padding: '14px 16px', marginBottom: 24, fontSize: 13.5, color: '#791F1F' }}>
          <strong>Critical:</strong> Without a valid QR-coded Yatra Registration Letter, you will be turned back at the <strong>Sonprayag barrier</strong> — even if you have reached Sonprayag from across India. Register before you travel, not at the last minute.
        </div>

        <h2 style={h2}>Method 1 — Online Registration (Recommended)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {[
            { n: '1', title: 'Go to the official portal', detail: 'Open registrationandtouristcare.uk.gov.in in your browser. This is the ONLY government-authorised portal. Beware of fake registration sites — check the URL carefully. The .uk.gov.in domain is Uttarakhand government.' },
            { n: '2', title: 'Create your account', detail: 'Click "Register/Login" → Enter your mobile number → Verify with OTP → Set a password. One mobile number can register a group of up to 5–8 pilgrims under a single account.' },
            { n: '3', title: 'Create Tour Info', detail: 'After logging in, click "Create/Manage Tour Info" → Select "Char Dham Yatra 2026" → Choose Kedarnath as your destination → Select your travel date. Choose a date that gives you flexibility — the portal allows some date changes.' },
            { n: '4', title: 'Add pilgrim details', detail: 'Enter: Full name (exactly as per ID), age, gender, address, Aadhaar number. Upload a passport-size photo (JPG/PNG, 10KB–150KB). If registering a group, add each member individually.' },
            { n: '5', title: 'Download your QR-coded e-pass', detail: 'After submission, your Yatra Certificate generates immediately with a unique QR code. Download and save it. Print a physical copy AND keep it on your phone. The QR code is scanned at Sonprayag, at the helipad (if flying), and at the temple entry point.' },
          ].map(item => (
            <div key={item.n} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: '1px solid var(--border)', display: 'flex', gap: 12 }}>
              <div style={{ width: 28, height: 28, background: 'var(--navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFD166', fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 2 }}>{item.n}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: '#EEF6FF', border: '1px solid #B5D4F4', borderRadius: 10, padding: '12px 16px', marginBottom: 24, fontSize: 13, color: '#0C447C' }}>
          <strong>Pro tip:</strong> The portal sees the highest traffic in the first week of March and again in late April. Register between <strong>5:30–7:30 AM IST</strong> for the smoothest server experience.
        </div>

        <h2 style={h2}>Method 2 — WhatsApp Registration (Fastest During Peak)</h2>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: 12, padding: '16px 18px', marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#15803D', marginBottom: 10 }}>💬 WhatsApp — Often Faster Than the Website</div>
          <div style={{ fontSize: 13.5, color: '#166534', lineHeight: 1.8 }}>
            <div>1. Save <strong>+91-8394833833</strong> in your contacts</div>
            <div>2. Open WhatsApp and send the word: <strong>YATRA</strong></div>
            <div>3. The government chatbot guides you through a structured question sequence — name, age, ID, travel date, Kedarnath as destination</div>
            <div>4. The QR-coded e-pass is sent back to you on WhatsApp</div>
            <div style={{ marginTop: 8, fontSize: 12.5, color: '#15803D' }}>This method works when the website is slow or overloaded — which happens frequently during peak registration windows.</div>
          </div>
        </div>

        <h2 style={h2}>Method 3 — Offline Counter Registration</h2>
        <p style={p}>
          If you cannot register online, offline biometric counters are available at multiple locations. However, in peak season (May–June), queues at offline counters can be 2–4 hours long. Online or WhatsApp registration is always preferred.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8, marginBottom: 24 }}>
          {['Haridwar (main centre)', 'Rishikesh', 'Sonprayag', 'Guptkashi', 'Dehradun airport'].map(loc => (
            <div key={loc} style={{ background: '#fff', borderRadius: 8, padding: '10px 12px', border: '1px solid var(--border)', fontSize: 13, color: 'var(--navy)', fontWeight: 600 }}>
              📍 {loc}
            </div>
          ))}
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="registration" />
        <p style={{ fontSize: 13, color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 24 }}>Offline counters open from April 15, 2026. Carry original Aadhaar + passport photo. Biometric scan done on-site.</p>

        <h2 style={h2}>Why the 18,000/Day Limit Matters</h2>
        <p style={p}>
          The government set a daily pilgrim cap after the 2013 Kedarnath floods, which killed over 5,000 people — in part because the area was completely overwhelmed with unregistered pilgrims. The 2026 cap is approximately <strong>18,000 pilgrims per day at Kedarnath</strong> (15,000 at Badrinath). This is a hard limit enforced at the Sonprayag barrier.
        </p>
        <p style={p}>
          In May and June, this cap fills within days of slots opening. If you plan to travel in May (peak season) or during school holidays, you may find your exact dates unavailable. Register as early as possible — ideally in the first week of March when the portal opens. If your preferred date is full, the system places you on a waitlist. Cancellations do open up regularly.
        </p>

        <h2 style={h2}>Helicopter Yatra — Special Registration Notes</h2>
        <div style={{ background: '#EAF3DE', border: '1px solid #86EFAC', borderRadius: 12, padding: '14px 16px', marginBottom: 24, fontSize: 13.5, color: '#27500A' }}>
          <strong>Critical — helicopter booking requires registration first:</strong> In 2026, you CANNOT book a Kedarnath helicopter ticket on IRCTC without a Yatra Registration Number. Complete the registration first at registrationandtouristcare.uk.gov.in, get your registration number, then go to heliyatra.irctc.co.in to book the helicopter ticket. Anyone claiming to sell helicopter tickets without this registration is operating a scam.
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>Book Kedarnath Yatra — We Handle Registration for You</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>All our Kedarnath packages include free registration assistance. We handle the portal, the e-pass download, and checkpoint preparation.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026. Please help with registration too.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
              💬 Book on WhatsApp
            </a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              ['Char Dham Registration', '/blog/char-dham-yatra-registration'],
              ['Kedarnath Yatra Package', '/kedarnath-yatra'],
              ['Kedarnath Trek Guide', '/blog/kedarnath-trek-guide'],
              ['Pony & Palki Rates', '/blog/kedarnath-pony-palki-rates-2026'],
              ['Helicopter Booking', '/blog/kedarnath-helicopter-booking'],
              ['New Rules 2026', '/blog/char-dham-yatra-2026-new-rules'],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="registration" />
</article>
    </>
  );
}
