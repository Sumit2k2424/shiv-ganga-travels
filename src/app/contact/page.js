import Link from 'next/link';
import { SITE, PACKAGES } from '@/data/packages';

export const metadata = {
  title: 'Contact Shiv Ganga Travels — Haridwar Char Dham Yatra Booking',
  description: 'Contact Shiv Ganga Travels, Haridwar for Char Dham Yatra 2026. Call +91-7017082807, WhatsApp, or visit our office at Saptrishi Road, Bhupatwala, Haridwar. Reply within 2 hours, 7 AM–9 PM, 7 days.',
  keywords: ['contact shiv ganga travels','char dham yatra booking haridwar','shiv ganga travels haridwar phone','char dham yatra operator contact','haridwar tour operator contact'],
  alternates: { canonical: 'https://www.shivgangatravels.com/contact' },
  openGraph: {
    title: 'Contact Shiv Ganga Travels — Char Dham Yatra 2026 Booking, Haridwar',
    description: 'Call or WhatsApp +91-7017082807. Saptrishi Road, Bhupatwala, Haridwar. 7 days, 7 AM–9 PM. Reply within 2 hours.',
    url: 'https://www.shivgangatravels.com/contact',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Contact Shiv Ganga Travels Haridwar' }],
  },
};

function Schema() {
  // ── ContactPage schema ─────────────────────────────────────
  const contactPage = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Shiv Ganga Travels — Char Dham Yatra Booking',
    url: 'https://www.shivgangatravels.com/contact',
    description: 'Book Char Dham Yatra packages directly with Shiv Ganga Travels, Haridwar. Call, WhatsApp, or visit our office at Saptrishi Road, Bhupatwala.',
    mainEntity: {
      '@type': 'TravelAgency',
      '@id': `${SITE.baseUrl}/#organization`,
      name: SITE.name,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE.baseUrl}/contact` },
      ],
    },
  };

  // ── LocalBusiness — contact-page-specific ─────────────────
  const localBiz = {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': `${SITE.baseUrl}/#organization`,
    name: SITE.name,
    url: SITE.baseUrl,
    telephone: ['+91-7017082807', '+91-8859123961'],
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala',
      addressLocality: 'Haridwar',
      addressRegion: 'Uttarakhand',
      postalCode: '249410',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 29.98968, longitude: 78.19274 },
    hasMap: 'https://www.google.com/maps?cid=16074078434377735602',
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '07:00', closes: '21:00',
    }],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.6, reviewCount: 38, bestRating: 5 },
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+91-7017082807', contactType: 'customer service', areaServed: 'IN', availableLanguage: ['Hindi','English'], hoursAvailable: { '@type': 'OpeningHoursSpecification', opens: '07:00', closes: '21:00', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] } },
      { '@type': 'ContactPoint', url: `https://wa.me/${SITE.whatsapp}`, contactType: 'sales', availableLanguage: ['Hindi','English'] },
    ],
    // ── Key contacts — machine-readable person entities ──────
    employee: [
      {
        '@type': 'Person',
        '@id': `${SITE.baseUrl}/about#dhanesh-mishra`,
        name: 'Dhanesh Chandra Mishra',
        jobTitle: 'Founder & Director',
        telephone: '+91-7017082807',
        worksFor: { '@id': `${SITE.baseUrl}/#organization` },
      },
      {
        '@type': 'Person',
        '@id': `${SITE.baseUrl}/about#sumit-mishra`,
        name: 'Sumit Mishra',
        jobTitle: 'Co-Founder & Co-Founder & Operations Manager',
        telephone: '+91-7017082807',
        sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
        worksFor: { '@id': `${SITE.baseUrl}/#organization` },
      },
    ],
  };

  // ── FAQ schema — contact-specific questions ───────────────
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the phone number of Shiv Ganga Travels Haridwar?',
        acceptedAnswer: { '@type': 'Answer', text: 'Shiv Ganga Travels can be reached at +91-7017082807 (primary) or +91-8859123961 (alternate). Available 7 days a week, 7 AM to 9 PM IST. WhatsApp is the fastest way to get a response — usually within 30 minutes.' }
      },
      {
        '@type': 'Question',
        name: 'Where is the Shiv Ganga Travels office in Haridwar?',
        acceptedAnswer: { '@type': 'Answer', text: 'Shiv Ganga Travels is located at Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar, Uttarakhand 249410. It is about 2km from Har Ki Pauri on the Rishikesh side. GPS: 29.98968, 78.19274.' }
      },
      {
        '@type': 'Question',
        name: 'How quickly does Shiv Ganga Travels respond to enquiries?',
        acceptedAnswer: { '@type': 'Answer', text: 'WhatsApp enquiries get a response within 30 minutes during working hours (7 AM–9 PM). Email enquiries are responded to within 2 hours. You will receive a personalised itinerary and price quote within the same call or WhatsApp session in most cases.' }
      },
      {
        '@type': 'Question',
        name: 'Can I book Char Dham Yatra directly without a middleman?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — Shiv Ganga Travels is a direct operator, not an aggregator or agent. There is no middleman and zero commission. You pay the operator directly, get a proper receipt, and deal with the same team from enquiry to return. This is why our prices are lower than online travel platforms for the same quality of service.' }
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBiz) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

export default function ContactPage() {
  const whatsappMsg = encodeURIComponent('Namaste! I would like to enquire about Char Dham Yatra packages for 2026.');

  return (
    <>
      <Schema />

      {/* HERO */}
      <section style={{
        background:'linear-gradient(145deg, var(--deep) 0%, var(--deep-mid) 60%, var(--gold-dark) 100%)',
        padding:'60px 16px 50px', textAlign:'center',
      }}>
        <div style={{ maxWidth:720, margin:'0 auto' }}>
          <span style={{
            background:'rgba(6,182,212,0.18)', color:'var(--teal)',
            fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase',
            padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:18,
            border:'1px solid rgba(6,182,212,0.3)',
          }}>Get in touch</span>
          <h1 className="font-display" style={{
            color:'#fff', fontWeight:600, fontSize:'clamp(2rem, 5vw, 3rem)',
            lineHeight:1.15, marginBottom:14, letterSpacing:'-0.02em',
          }}>
            Plan Your <em style={{ fontStyle:'italic', color:'var(--teal)', fontWeight:700 }}>Sacred Journey</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:15, lineHeight:1.7 }}>
            Our yatra experts are available 7 days a week, 7 AM – 9 PM IST.<br/>
            We reply within 2 hours during working hours.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section style={{ background:'var(--bg)', padding:'50px 16px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr', gap:24 }}>

          {/* Quick contact methods — 4 cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(180px, 1fr))', gap:14 }}>
            {[
              { icon:'📞', label:'Phone', value:'+91-7017082807', href:'tel:+917017082807', sub:'Tap to call directly', color:'var(--navy)' },
              { icon:'📞', label:'Phone 2', value:'+91-8859123961', href:'tel:+918859123961', sub:'Alternate number', color:'var(--navy)' },
              { icon:'💬', label:'WhatsApp', value:'+91-7017082807', href:`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`, sub:'Fastest response', color:'#25D366', external:true },
              { icon:'✉️', label:'Email', value:SITE.email, href:`mailto:${SITE.email}`, sub:'We reply within 2 hrs', color:'var(--navy)' },
              { icon:'📸', label:'Instagram', value:'@shivgangatravels', href:'https://www.instagram.com/shivgangatravels/', sub:'Follow for yatra updates', color:'#C13584', external:true },
              { icon:'📍', label:'Office', value:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar', sub:'Uttarakhand 249410, India', color:'var(--gold-dark)' },
            ].map(c => {
              const inner = (
                <div style={{
                  background:'#fff', padding:'22px 20px',
                  borderRadius:14, border:'1px solid var(--border)',
                  boxShadow:'var(--shadow)',
                  display:'flex', flexDirection:'column', gap:10,
                  cursor: c.href ? 'pointer' : 'default',
                  transition:'all .25s var(--ease-out)', height:'100%',
                }}>
                  <div style={{
                    width:46, height:46, borderRadius:12,
                    background:'var(--navy-light)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:22,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:11, color:'var(--muted)', fontWeight:500, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:4 }}>
                      {c.label}
                    </div>
                    <div style={{ fontWeight:700, fontSize:14, color:c.color, lineHeight:1.3, marginBottom:3 }}>
                      {c.value}
                    </div>
                    <div style={{ fontSize:11.5, color:'var(--muted)' }}>{c.sub}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href}
                   target={c.external ? '_blank' : undefined}
                   rel={c.external ? 'noopener noreferrer' : undefined}
                   style={{ textDecoration:'none', color:'inherit' }}>
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          {/* Main content: form + side panel */}
          <div className="contact-grid-inner" style={{ display:'grid', gap:20, alignItems:'start' }}>
            <style dangerouslySetInnerHTML={{ __html: `
              @media (max-width: 860px) {
                .contact-grid { grid-template-columns: 1fr !important; }
              }
            ` }}/>

            {/* LEFT: Enquiry form */}
            <div style={{
              background:'#fff', padding:'28px 26px', borderRadius:16,
              border:'1px solid var(--border)', boxShadow:'var(--shadow)',
            }}>
              <div style={{ marginBottom:20 }}>
                <span className="section-tag">Send enquiry</span>
                <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:600, color:'var(--text)', letterSpacing:'-0.02em', lineHeight:1.2, marginTop:6 }}>
                  Tell us about your <em style={{ color:'var(--navy)', fontStyle:'italic' }}>journey</em>
                </h2>
              </div>

              {/* Form — Formspree ready */}
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                style={{ display:'flex', flexDirection:'column', gap:14 }}
              >
                <FormRow>
                  <FormField label="Full Name" required>
                    <input type="text" name="name" required placeholder="Ramesh Kumar Sharma" style={inputStyle}/>
                  </FormField>
                  <FormField label="Phone / WhatsApp" required>
                    <input type="tel" name="phone" required placeholder="+91-98765-43210" style={inputStyle}/>
                  </FormField>
                </FormRow>

                <FormField label="Email Address">
                  <input type="email" name="email" placeholder="you@example.com" style={inputStyle}/>
                </FormField>

                <FormField label="Package Interested In">
                  <select name="package" style={inputStyle} defaultValue="">
                    <option value="" disabled>— Select a package —</option>
                    {PACKAGES.map(p => (
                      <option key={p.slug} value={p.name}>{p.name} ({p.duration.nights}N/{p.duration.days}D)</option>
                    ))}
                    <option value="custom">Custom / Not decided yet</option>
                  </select>
                </FormField>

                <FormRow>
                  <FormField label="Travel Month">
                    <select name="month" style={inputStyle} defaultValue="">
                      <option value="" disabled>— Select month —</option>
                      {['May 2026','June 2026','July 2026','August 2026','September 2026','October 2026','Not sure yet'].map(m => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </FormField>
                  <FormField label="Number of Pilgrims">
                    <input type="number" name="pilgrims" min="1" max="50" placeholder="e.g. 4" style={inputStyle}/>
                  </FormField>
                </FormRow>

                <FormField label="Message (optional)">
                  <textarea name="message" rows={4}
                    placeholder="Any specific requirements — senior pilgrims, dietary needs, preferred starting city..."
                    style={{ ...inputStyle, resize:'vertical', minHeight:90, fontFamily:'var(--font)' }}/>
                </FormField>

                <button type="submit" className="btn-primary"
                  style={{ padding:'14px', fontSize:14, marginTop:4, fontWeight:700 }}>
                  Send Enquiry →
                </button>

                <p style={{ fontSize:11.5, color:'var(--muted)', textAlign:'center', marginTop:4 }}>
                  🔒 Your details are safe with us. We reply within 2 hours during working hours. No spam.
                </p>
              </form>
            </div>

            {/* RIGHT: Side info panel */}
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>

              {/* Working hours + social */}
              <div style={{
                background:'linear-gradient(135deg, var(--deep) 0%, var(--gold-dark) 100%)',
                padding:'24px 22px', borderRadius:16, color:'#fff',
                boxShadow:'var(--shadow-md)',
              }}>
                <div style={{ fontSize:22, marginBottom:10 }}>🕐</div>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.25rem', fontWeight:600, marginBottom:12, letterSpacing:'-0.02em' }}>
                  Working Hours
                </h3>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:6 }}>
                  <li style={{ display:'flex', justifyContent:'space-between', fontSize:13 }}>
                    <span style={{ color:'rgba(255,255,255,0.7)' }}>Monday – Saturday</span>
                    <span style={{ fontWeight:600 }}>7 AM – 9 PM</span>
                  </li>
                  <li style={{ display:'flex', justifyContent:'space-between', fontSize:13 }}>
                    <span style={{ color:'rgba(255,255,255,0.7)' }}>Sunday</span>
                    <span style={{ fontWeight:600 }}>8 AM – 8 PM</span>
                  </li>
                  <li style={{ display:'flex', justifyContent:'space-between', fontSize:13, paddingTop:6, marginTop:2, borderTop:'1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ color:'rgba(255,255,255,0.7)' }}>WhatsApp Support</span>
                    <span style={{ fontWeight:600, color:'var(--teal)' }}>24 / 7</span>
                  </li>
                </ul>

                <div style={{ marginTop:18, paddingTop:16, borderTop:'1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize:11, color:'rgba(255,255,255,0.5)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>
                    Peak season hours
                  </div>
                  <p style={{ fontSize:12, color:'rgba(255,255,255,0.8)', lineHeight:1.5 }}>
                    During May–June &amp; Sept–Oct, our phones are answered 6 AM – 10 PM daily.
                  </p>
                </div>
              </div>

              {/* Trust block */}
              <div style={{
                background:'#fff', padding:'22px 20px',
                borderRadius:16, border:'1px solid var(--border)', boxShadow:'var(--shadow)',
              }}>
                <h3 style={{ fontWeight:700, fontSize:14, color:'var(--text)', marginBottom:14 }}>
                  Why book with us?
                </h3>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                  {[
                    '✓  Zero commission, direct operator',
                    '✓  15 years, 50,000+ pilgrims served',
                    '✓  Uttarakhand Tourism registered',
                    '✓  Free cancellation up to 30 days prior',
                    '✓  Transparent pricing, no hidden fees',
                  ].map(t => (
                    <li key={t} style={{ fontSize:12.5, color:'var(--mid)', lineHeight:1.5 }}>{t}</li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div style={{ borderRadius:16, overflow:'hidden', border:'1px solid var(--border)', boxShadow:'var(--shadow)' }}>
                {/* Address header strip */}
                <div style={{ background:'var(--navy)', padding:'14px 18px', display:'flex', alignItems:'center', gap:12 }}>
                  <span style={{ fontSize:22 }}>📍</span>
                  <div>
                    <div style={{ fontWeight:700, fontSize:13.5, color:'#fff' }}>Shiv Ganga Travels — Haridwar Office</div>
                    <div style={{ fontSize:12, color:'rgba(255,255,255,0.65)', marginTop:2 }}>
                      Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar — 249410
                    </div>
                  </div>
                  <a href={`https://www.google.com/maps?cid=16074078434377735602`}
                     target="_blank" rel="noopener noreferrer"
                     style={{ marginLeft:'auto', background:'rgba(255,255,255,0.12)', color:'#fff', padding:'6px 14px', borderRadius:8, fontSize:12, fontWeight:600, textDecoration:'none', whiteSpace:'nowrap', border:'1px solid rgba(255,255,255,0.2)', flexShrink:0 }}>
                    Get Directions →
                  </a>
                </div>
                {/* ── Meet the team — E-E-A-T signal ───────────────────── */}
                <div style={{ background:'var(--navy-light)', border:'1px solid var(--border)', borderRadius:14, padding:'18px 20px', marginBottom:18 }}>
                  <div style={{ fontWeight:700, fontSize:12, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:14 }}>Who You&apos;ll Be Talking To</div>

                  {/* Sumit Mishra */}
                  <div style={{ display:'flex', gap:12, alignItems:'flex-start', marginBottom:14, paddingBottom:14, borderBottom:'1px solid var(--border)' }}
                    itemScope itemType="https://schema.org/Person">
                    <div style={{ width:44, height:44, borderRadius:'50%', background:'var(--teal)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:15, color:'#fff', flexShrink:0 }}>SM</div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap', marginBottom:2 }}>
                        <span style={{ fontWeight:700, fontSize:14, color:'var(--navy)' }} itemProp="name">Sumit Mishra</span>
                        <a href="https://www.linkedin.com/in/sumit-mishra-863734171/" target="_blank" rel="noopener noreferrer" itemProp="sameAs"
                          style={{ fontSize:11.5, color:'#0A66C2', fontWeight:600, textDecoration:'none' }}>LinkedIn ↗</a>
                        <a href="https://www.facebook.com/sumi2112" target="_blank" rel="noopener noreferrer" itemProp="sameAs"
                          style={{ fontSize:11.5, color:'#1877F2', fontWeight:600, textDecoration:'none' }}>Facebook ↗</a>
                      </div>
                      <div style={{ fontSize:12.5, color:'var(--teal)', fontWeight:700, marginBottom:4 }} itemProp="jobTitle">Co-Founder &amp; Co-Founder & Operations Manager</div>
                      <p style={{ fontSize:13, color:'#475569', margin:0, lineHeight:1.65 }} itemProp="description">
                        Handles all bookings, route planning and customer coordination. Has managed Char Dham Yatra operations since 2015 — 500+ groups annually. Your first point of contact on WhatsApp and phone.
                      </p>
                      <div style={{ marginTop:6, display:'flex', gap:6, flexWrap:'wrap' }}>
                        <a href={`tel:${SITE.phone}`} style={{ fontSize:12.5, color:'var(--navy)', fontWeight:700, textDecoration:'none' }}>📞 {SITE.phone}</a>
                        <span style={{ color:'var(--border)' }}>·</span>
                        <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste Sumit ji! I want to enquire about Char Dham Yatra 2026.')}`}
                          target="_blank" rel="nofollow noopener noreferrer"
                          style={{ fontSize:12.5, color:'#25D366', fontWeight:700, textDecoration:'none' }}>💬 WhatsApp</a>
                      </div>
                    </div>
                  </div>

                  {/* Dhanesh Mishra */}
                  <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}
                    itemScope itemType="https://schema.org/Person">
                    <div style={{ width:44, height:44, borderRadius:'50%', background:'var(--navy)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:15, color:'#FFD166', flexShrink:0 }}>DM</div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:2 }} itemProp="name">Dhanesh Chandra Mishra</div>
                      <div style={{ fontSize:12.5, color:'var(--gold)', fontWeight:700, marginBottom:4 }} itemProp="jobTitle">Founder &amp; Director</div>
                      <p style={{ fontSize:13, color:'#475569', margin:0, lineHeight:1.65 }} itemProp="description">
                        Retired Indian Army Officer. Founded Shiv Ganga Travels in Roorkee in 2010. Personally oversees quality, vehicle maintenance and guide training for every season.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive map */}
                <iframe
                  title="Shiv Ganga Travels — Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.32!2d78.19274539999999!3d29.9896838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390947a06d69b471%3A0xdf12992c04da1db2!2sShiv%20Ganga%20Travels!5e0!3m2!1sen!2sin!4v1714203600000!5m2!1sen!2sin"
                  width="100%"
                  height="360"
                  style={{ border:0, display:'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Form helpers ─── */
const inputStyle = {
  width:'100%',
  padding:'11px 14px',
  border:'1.5px solid var(--border)',
  borderRadius:10,
  fontSize:13.5,
  background:'#fff',
  color:'var(--text)',
  outline:'none',
  fontFamily:'var(--font)',
  transition:'border-color .15s, box-shadow .15s',
};

function FormField({ label, required, children }) {
  return (
    <div>
      <label style={{
        display:'block', fontSize:11.5, fontWeight:600,
        color:'var(--mid)', marginBottom:6,
        textTransform:'uppercase', letterSpacing:'0.06em',
      }}>
        {label} {required && <span style={{ color:'var(--saffron)' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function FormRow({ children }) {
  return (
    <div className="contact-form-row" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:12 }}>
      {children}
    </div>
  );
}
