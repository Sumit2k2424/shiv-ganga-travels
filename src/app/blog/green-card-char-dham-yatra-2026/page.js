import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Green Card for Char Dham Yatra 2026 – Vehicle Permit Rules, How to Apply & Cost',
  description: 'Green Card (Trip Card) is mandatory for all non-Uttarakhand vehicles on Char Dham routes in 2026. How to apply, cost, which routes require it, and consequences of not having one.',
  keywords: ['green card char dham yatra 2026', 'green card uttarakhand vehicle permit 2026', 'char dham trip card 2026', 'char dham vehicle permit', 'uttarakhand green card apply online', 'char dham yatra car permit'],
  alternates: { canonical: `${SITE.baseUrl}/blog/green-card-char-dham-yatra-2026` },
  openGraph: {
    title: 'Green Card for Char Dham Yatra 2026 – Vehicle Permit Rules, How to Apply & Cost',
    description: 'All vehicles registered outside Uttarakhand need a Green Card to drive on Char Dham routes in 2026. Apply at greencard.uk.gov.in. ₹50 fee. Step-by-step guide.',
    url: `${SITE.baseUrl}/blog/green-card-char-dham-yatra-2026`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Green Card for Char Dham Yatra 2026 — Vehicle Permit for Non-Uttarakha | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Card / Trip Permit for Char Dham Yatra 2026 — Complete Guide',
    description: 'All vehicles registered outside Uttarakhand need a Green Card to drive on Char Dham routes in 2026. Apply at greencard.uk.gov.in. ₹50 fee. Step-by-step gui',
    images: [{ url: '/opengraph-image', alt: 'Green Card / Trip Permit for Char Dham Yatra 2026 — Complete | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the Green Card for Char Dham Yatra 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The Green Card (also called Trip Card or Travel Permit) is a mandatory permit for all private and commercial vehicles registered outside Uttarakhand that enter Char Dham Yatra routes in 2026. Vehicles with DL (Delhi), HR (Haryana), UP (Uttar Pradesh), RJ (Rajasthan), MH (Maharashtra), and all other non-UK registration plates must obtain this permit. It costs ₹50 and is applied online at greencard.uk.gov.in.' } },
      { '@type': 'Question', name: 'How to apply for Green Card for Char Dham Yatra?', acceptedAnswer: { '@type': 'Answer', text: 'Apply online at greencard.uk.gov.in. You need: vehicle registration number, vehicle owner\'s name, vehicle type, driver\'s licence number, entry point (date and checkpost), exit point, and contact mobile number. The Green Card is issued digitally. Fee is ₹50. Print or save the digital copy — it is checked at route checkposts.' } },
      { '@type': 'Question', name: 'Which vehicles need a Green Card for Char Dham Yatra?', acceptedAnswer: { '@type': 'Answer', text: 'All private cars, jeeps, SUVs, buses, and tempo travellers registered outside Uttarakhand (non-UK plates) need the Green Card for Char Dham routes. This includes vehicles with Delhi (DL), Haryana (HR), Uttar Pradesh (UP), Rajasthan (RJ), Maharashtra (MH), Gujarat (GJ), and all other state plates except Uttarakhand (UK). Vehicles rented from Haridwar-based operators (UK plates) do NOT need the permit — one reason to book a local operator.' } },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Green Card Char Dham 2026', item: `${SITE.baseUrl}/blog/green-card-char-dham-yatra-2026` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} /></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };


export default function GreenCard() {
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(29,158,117,0.25)', color: '#6EFFD0', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            New 2026 Rule · Non-UK Vehicles · ₹50 Permit
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Green Card for Char Dham Yatra 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 640, margin: '0 auto 16px' }}>
            All vehicles with non-Uttarakhand registration (DL, HR, UP, RJ, MH, and all others) must obtain this ₹50 vehicle permit before entering Char Dham routes.
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🚗 DL · HR · UP · RJ and all non-UK plates', '💰 Only ₹50', '🌐 Apply at greencard.uk.gov.in', '⚠️ Checked at route checkposts'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Green Card Char Dham 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: '#FCEBEB', border: '1px solid #F09595', borderRadius: 12, padding: '14px 16px', marginBottom: 24, fontSize: 13.5, color: '#791F1F' }}>
          <strong>Important:</strong> If your vehicle is registered outside Uttarakhand and you are driving to Haridwar for Char Dham Yatra, you need this permit. Vehicles checked without it at route checkposts face fines and may be turned back.
        </div>

        <p style={p}>
          In 2026, the Uttarakhand government introduced the Green Card (officially: Trip Card) system for all Char Dham Yatra routes. It requires every vehicle with a non-Uttarakhand registration plate to register the trip in advance through the online portal. The permit is ₹50, takes 5 minutes to apply for, and is valid for the duration of your yatra. This is a crowd management and safety measure — the registration system helps authorities track vehicles on fragile Himalayan roads.
        </p>

        <h2 style={h2}>Who Needs a Green Card?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 8, marginBottom: 24 }}>
          {[
            { needs: true, label: 'Delhi — DL plates', detail: 'All DL registration vehicles' },
            { needs: true, label: 'Haryana — HR plates', detail: 'All HR registration vehicles' },
            { needs: true, label: 'UP — UP plates', detail: 'Lucknow, Noida, Agra, etc.' },
            { needs: true, label: 'Rajasthan — RJ plates', detail: 'Jaipur, Jodhpur, etc.' },
            { needs: true, label: 'Maharashtra — MH plates', detail: 'Mumbai, Pune, Nagpur' },
            { needs: true, label: 'All other non-UK states', detail: 'GJ, KA, TN, WB, etc.' },
            { needs: false, label: 'Uttarakhand — UK plates', detail: 'NO permit needed' },
            { needs: false, label: 'Haridwar operator vehicles', detail: 'UK-registered, no permit' },
          ].map(item => (
            <div key={item.label} style={{ background: item.needs ? '#FCEBEB' : '#F0FDF4', border: `1px solid ${item.needs ? '#F09595' : '#86EFAC'}`, borderRadius: 8, padding: '10px 12px' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontWeight: 700, fontSize: 16 }}>{item.needs ? '✅ Need it' : '❌ Not needed'}</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 13, color: item.needs ? '#791F1F' : '#15803D' }}>{item.label}</div>
              <div style={{ fontSize: 12, color: item.needs ? '#A32D2D' : '#166534' }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>How to Apply — Step by Step</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {[
            { n: '1', title: 'Go to greencard.uk.gov.in', detail: 'Open the official Uttarakhand government portal. This is the only legitimate site for the Green Card. Do not apply through third-party agents.' },
            { n: '2', title: 'Select vehicle type and entry point', detail: 'Choose private car, taxi, bus, or tempo traveller. Select your planned entry checkpost (typically Haridwar for most pilgrims coming from Delhi/UP/Rajasthan).' },
            { n: '3', title: 'Enter vehicle details', detail: 'Vehicle registration number (exact as on RC), owner name, driver\'s licence number, contact mobile number, and the Yatra Registration Number from your Char Dham e-pass.' },
            { n: '4', title: 'Select route and dates', detail: 'Enter your planned travel dates and the dhams you plan to visit. The permit is valid for the declared duration — apply 1–2 days before departure.' },
            { n: '5', title: 'Pay ₹50 and download', detail: 'Pay the ₹50 fee online. Download the Green Card as PDF. Print a copy AND save digitally. The QR code is checked at checkposts on the Char Dham route.' },
          ].map(item => (
            <div key={item.n} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: '1px solid var(--border)', display: 'flex', gap: 12 }}>
              <div style={{ width: 28, height: 28, background: 'var(--teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 2 }}>{item.n}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Why This Rule Exists — and Why You Should Care</h2>
        <p style={p}>
          The Char Dham Yatra routes pass through some of the most geologically fragile terrain in India. The roads to Kedarnath (via Sonprayag), Badrinath (via Joshimath), Gangotri (via Uttarkashi), and Yamunotri (via Barkot) are single-lane mountain roads with regular landslides, rockfall, and weather closures. In 2022–2023, road congestion on the Kedarnath route created backups stretching 40–60km, stranding pilgrims for 24–48 hours.
        </p>
        <p style={p}>
          The Green Card system gives Uttarakhand traffic management real-time visibility into how many vehicles are entering the mountains. During heavy congestion or road closures, the system enables dynamic routing — directing vehicles away from blocked roads before they enter the bottleneck. For pilgrims, this means faster response times during emergencies and fewer "stuck on a mountain road for 24 hours" situations.
        </p>

        <div style={{ background: '#EAF3DE', border: '1px solid #86EFAC', borderRadius: 12, padding: '14px 16px', marginBottom: 24, fontSize: 13.5, color: '#27500A' }}>
          <strong>💡 Book a Haridwar-based operator and skip the Green Card entirely:</strong> Our vehicles are registered in Uttarakhand (UK plates) and do not require the Green Card permit. When you book a Char Dham package with Shiv Ganga Travels, your transport is handled in our vehicles — no permit hassle, no checkpost delays, no online applications needed.
        </div>

        <h2 style={h2}>Complete 2026 New Rules Summary</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {[
            { rule: 'Green Card / Trip Permit', detail: 'Non-UK vehicles must register at greencard.uk.gov.in before entering Char Dham routes. Fee ₹50. Online only.' },
            { rule: 'Vehicle movement ban after 10 PM', detail: 'All commercial and private vehicles are banned from Char Dham roads between 10 PM and 4 AM. Plan overnight stops at Sonprayag, Uttarkashi, or Guptkashi.' },
            { rule: 'Technical fitness test for vehicles', detail: 'All vehicles (private and commercial) must have a valid Pollution Under Control (PUC) certificate and fitness certificate. Checked at entry checkposts.' },
            { rule: 'SpO2 screening at Sonprayag', detail: 'Health screening at Sonprayag checkpoint. Pilgrims with SpO2 below 85% may be restricted from proceeding to Kedarnath. Carry a pulse oximeter.' },
            { rule: 'Mandatory Yatra Registration for all', detail: 'Registration at registrationandtouristcare.uk.gov.in required for ALL pilgrims including helicopter passengers. Free e-pass with QR code.' },
          ].map(item => (
            <div key={item.rule} style={{ background: '#fff', borderRadius: 9, padding: '12px 14px', border: '1px solid var(--border)', borderLeft: '3px solid var(--navy)', display: 'flex', gap: 10 }}>
              <span style={{ color: '#1D9E75', fontWeight: 700, flexShrink: 0 }}>✓</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 3 }}>{item.rule}</div>
                <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.65 }}>{item.detail}</div>
              </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>Skip the Paperwork — Book with a Local Haridwar Operator</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Our UK-registered vehicles need no Green Card. We handle registration, checkpost protocols, and route planning for you.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026. I have a non-UK vehicle. Can you help?')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Book Now</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              ['2026 New Rules', '/blog/char-dham-yatra-2026-new-rules'],
              ['Registration Guide', '/blog/char-dham-yatra-registration'],
              ['Medical Certificate', '/blog/char-dham-yatra-medical-certificate'],
              ['Char Dham Package', '/char-dham-yatra'],
              ['How to Reach Haridwar', '/how-to-reach-haridwar'],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
