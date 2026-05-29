'use client';
import { useState, useEffect } from 'react';
import { SITE } from '@/data/packages';

const STORAGE_KEY = 'sgt_popup_shown';

const MONTHS = [
  'May 2026','June 2026','July 2026','August 2026',
  'September 2026','October 2026','Not decided yet',
];

const PACKAGES_LIST = [
  'Char Dham Yatra','Do Dham Yatra','Kedarnath Yatra',
  'Badrinath Yatra','Yamunotri Yatra','Gangotri Yatra',
  'Helicopter Tour','Mussoorie Tour','Nainital Tour',
  'Rishikesh Adventure','Not decided yet',
];

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [step,    setStep]    = useState(1); // 1 = form, 2 = thank you
  const [form, setForm] = useState({
    name: '', phone: '', package: '', month: '', pilgrims: '2',
  });

  /* Show once per session after 5 s */
  useEffect(() => {
    const already = sessionStorage.getItem(STORAGE_KEY);
    if (already) return;
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  /* Lock background scroll while the modal is open */
  useEffect(() => {
    if (visible) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [visible]);

  function close() {
    setClosing(true);
    setTimeout(() => { setVisible(false); setClosing(false); }, 350);
    sessionStorage.setItem(STORAGE_KEY, '1');
  }

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Namaste! I am interested in a Char Dham Yatra package.\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Package: ${form.package || 'Not decided'}\n` +
      `Month: ${form.month || 'Not decided'}\n` +
      `Pilgrims: ${form.pilgrims}`
    );
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, '_blank');
    setStep(2);
    sessionStorage.setItem(STORAGE_KEY, '1');
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(10,20,40,0.65)',
          backdropFilter: 'blur(4px)',
          animation: closing ? 'fadeOut .35s ease forwards' : 'fadeIn .35s ease',
        }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Plan your yatra"
        style={{
          position: 'fixed',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1001,
          width: 'min(480px, 94vw)',
          maxHeight: '90dvh',
          background: '#fff',
          borderRadius: 20,
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          boxShadow: '0 32px 80px rgba(10,20,40,0.35)',
          animation: closing ? 'slideDown .35s var(--t-out) forwards' : 'slideUp .4s var(--t-out)',
        }}
      >
        {/* Gold top accent bar */}
        <div style={{
          height: 5,
          background: 'linear-gradient(90deg, var(--navy) 0%, var(--gold) 50%, var(--teal) 100%)',
        }}/>

        {step === 1 ? (
          <>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, var(--navy) 0%, #1A3E75 100%)',
              padding: '24px 24px 20px',
              position: 'relative',
            }}>
              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close"
                style={{
                  position: 'absolute', top: 14, right: 14,
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, lineHeight: 1,
                  transition: 'background .15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              >×</button>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'linear-gradient(135deg, var(--gold), #f5a623)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, flexShrink: 0,
                  boxShadow: '0 4px 14px rgba(232,146,10,0.4)',
                }}>🙏</div>
                <div>
                  <div style={{
                    color: '#FFD166', fontSize: 10.5, fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4,
                  }}>
                    Free Expert Consultation
                  </div>
                  <h2 style={{
                    color: '#fff', fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 600, lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}>
                    Plan Your Sacred<br/>
                    <em style={{ color: '#FFD166', fontStyle: 'italic' }}>Char Dham Yatra</em>
                  </h2>
                </div>
              </div>

              {/* Trust chips */}
              <div style={{
                display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14,
              }}>
                {['✓ Zero commission', '✓ Reply in 2 hrs', '✓ Free itinerary'].map(t => (
                  <span key={t} style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 10.5, fontWeight: 500,
                    padding: '3px 10px', borderRadius: 100,
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ padding: '22px 24px 24px' }}>
              <div className="lead-popup-form-row" style={{ display: 'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Full Name <span style={{ color: 'var(--gold)' }}>*</span></label>
                  <input
                    type="text" name="name" required
                    value={form.name} onChange={handleChange}
                    placeholder="Ramesh Sharma"
                    style={inputStyle}
                    onFocus={focusIn} onBlur={focusOut}
                  />
                </div>
                <div>
                  <label style={labelStyle}>WhatsApp No. <span style={{ color: 'var(--gold)' }}>*</span></label>
                  <input
                    type="tel" name="phone" required
                    value={form.phone} onChange={handleChange}
                    placeholder="+91-98765-43210"
                    style={inputStyle}
                    onFocus={focusIn} onBlur={focusOut}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Interested Package</label>
                <select name="package" value={form.package} onChange={handleChange} style={inputStyle}>
                  <option value="">— Select a package —</option>
                  {PACKAGES_LIST.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>

              <div className="lead-popup-form-row" style={{ display: 'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 12, marginBottom: 20 }}>
                <div>
                  <label style={labelStyle}>Travel Month</label>
                  <select name="month" value={form.month} onChange={handleChange} style={inputStyle}>
                    <option value="">— Select month —</option>
                    {MONTHS.map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>No. of Pilgrims</label>
                  <select name="pilgrims" value={form.pilgrims} onChange={handleChange} style={inputStyle}>
                    {['1','2','3','4','5','6','7','8','9','10+'].map(n => (
                      <option key={n} value={n}>{n} pilgrim{n !== '1' ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: '100%', padding: '13px',
                  background: 'linear-gradient(135deg, #25D366, #1ebe5d)',
                  color: '#fff', border: 'none', borderRadius: 10,
                  fontSize: 14, fontWeight: 700, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: 8, fontFamily: 'var(--font)',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
                  transition: 'all .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.35)'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.85L0 24l6.335-1.503A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.68-.49-5.23-1.35l-.374-.213-3.884.921.977-3.775-.233-.387A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Get Free Quote on WhatsApp
              </button>

              <p style={{
                textAlign: 'center', fontSize: 11, color: 'var(--text-muted)', marginTop: 10,
              }}>
                🔒 Your details are safe. We never share or spam.
              </p>
            </form>
          </>
        ) : (
          /* Thank You screen */
          <div style={{ padding: '40px 28px', textAlign: 'center' }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%', margin: '0 auto 18px',
              background: 'linear-gradient(135deg, #25D366, #1ebe5d)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 32,
              boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
              animation: 'popIn .4s var(--t-out)',
            }}>✓</div>

            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.5rem',
              fontWeight: 600, color: 'var(--navy)', marginBottom: 10,
            }}>
              Thank You, {form.name.split(' ')[0] || 'Pilgrim'}! 🙏
            </h3>
            <p style={{ fontSize: 14, color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 24 }}>
              Your WhatsApp has been opened with your details.<br/>
              Our yatra expert will reply within <strong>2 hours</strong>.
            </p>

            {/* What happens next */}
            <div style={{
              background: 'var(--bg)', borderRadius: 12,
              padding: '16px 18px', textAlign: 'left', marginBottom: 22,
            }}>
              {[
                { icon:'💬', text:'You\'ll get a personalised quote' },
                { icon:'📋', text:'Free custom itinerary for your dates' },
                { icon:'🎯', text:'VIP darshan arrangements confirmed' },
              ].map((s, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '7px 0',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ fontSize: 18 }}>{s.icon}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-mid)' }}>{s.text}</span>
                </div>
              ))}
            </div>

            <button onClick={close} style={{
              width: '100%', padding: '12px',
              background: 'var(--navy)', color: '#fff',
              border: 'none', borderRadius: 10,
              fontSize: 13.5, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'var(--font)',
            }}>
              Continue Browsing Packages
            </button>
          </div>
        )}
      </div>

      {/* Keyframe animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn   { from { opacity:0 }  to { opacity:1 } }
        @keyframes fadeOut  { from { opacity:1 }  to { opacity:0 } }
        @keyframes slideUp  { from { opacity:0; transform:translate(-50%,-46%) scale(.96) } to { opacity:1; transform:translate(-50%,-50%) scale(1) } }
        @keyframes slideDown{ from { opacity:1; transform:translate(-50%,-50%) scale(1) } to { opacity:0; transform:translate(-50%,-46%) scale(.96) } }
        @keyframes popIn    { from { transform:scale(.5); opacity:0 } to { transform:scale(1); opacity:1 } }
      `}}/>
    </>
  );
}

/* ── Shared input styles ── */
const inputStyle = {
  width: '100%', padding: '10px 13px',
  border: '1.5px solid var(--border)',
  borderRadius: 9, fontSize: 13.5,
  background: '#fff', color: 'var(--text)',
  outline: 'none', fontFamily: 'var(--font)',
  transition: 'border-color .15s, box-shadow .15s',
};
const labelStyle = {
  display: 'block', fontSize: 11, fontWeight: 700,
  color: 'var(--text-mid)', marginBottom: 6,
  textTransform: 'uppercase', letterSpacing: '0.07em',
};
const focusIn  = e => { e.target.style.borderColor = 'var(--navy)'; e.target.style.boxShadow = '0 0 0 3px rgba(15,43,91,0.1)'; };
const focusOut = e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; };
