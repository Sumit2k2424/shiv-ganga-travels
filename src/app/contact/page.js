import { SITE, PACKAGES } from '@/data/packages';

export const metadata = {
  title: 'Contact Us — Book Your Char Dham Yatra',
  description: 'Contact Shiv Ganga Travels for Char Dham, Do Dham & Single Dham Yatra packages. Call, WhatsApp, or email us. Office near Har Ki Pauri, Haridwar.',
};

export default function ContactPage() {
  const whatsappMsg = encodeURIComponent('Namaste! I would like to enquire about Char Dham Yatra packages for 2026.');

  return (
    <>
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
              { icon:'📞', label:'Phone', value:SITE.phone, href:`tel:${SITE.phone}`, sub:'Tap to call directly', color:'var(--navy)' },
              { icon:'💬', label:'WhatsApp', value:SITE.phone, href:`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`, sub:'Fastest response', color:'#25D366', external:true },
              { icon:'✉️', label:'Email', value:SITE.email, href:`mailto:${SITE.email}`, sub:'We reply within 2 hrs', color:'var(--cyan-dark)' },
              { icon:'📍', label:'Office', value:'Har Ki Pauri, Haridwar', sub:'Uttarakhand — 249401', color:'var(--gold-dark)' },
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

              {/* Address */}
              <div style={{
                background:'#fff', padding:'22px 20px',
                borderRadius:16, border:'1px solid var(--border)', boxShadow:'var(--shadow)',
              }}>
                <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                  <div style={{
                    width:40, height:40, background:'var(--navy-light)', borderRadius:10, flexShrink:0,
                    display:'flex', alignItems:'center', justifyContent:'center', fontSize:20,
                  }}>📍</div>
                  <div>
                    <h3 style={{ fontWeight:700, fontSize:13, color:'var(--text)', marginBottom:4 }}>Visit Our Office</h3>
                    <p style={{ fontSize:12.5, color:'var(--mid)', lineHeight:1.6 }}>
                      Near Har Ki Pauri<br/>
                      Haridwar, Uttarakhand<br/>
                      PIN — 249401
                    </p>
                    <a href="https://maps.google.com/?q=Har+Ki+Pauri+Haridwar" target="_blank" rel="noopener noreferrer"
                       className="btn-ghost" style={{ marginTop:10, paddingLeft:0 }}>
                      View on Google Maps
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
                    </a>
                  </div>
                </div>
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
    <div className="contact-form-row" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
      {children}
    </div>
  );
}
