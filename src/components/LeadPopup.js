'use client';
import { useState, useEffect, useRef } from 'react';
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

  /* Show once per session — only after real engagement (60% scroll AND 30s).
     A 5s full-screen popup is exactly what Google's mobile intrusive-
     interstitial penalty targets; engagement-gating keeps the lead capture
     without the ranking risk. */
  useEffect(() => {
    const already = sessionStorage.getItem(STORAGE_KEY);
    if (already) return;
    let timeOk = false, scrollOk = false, fired = false;
    function maybeShow() {
      if (timeOk && scrollOk && !fired) { fired = true; setVisible(true); cleanup(); }
    }
    const t = setTimeout(() => { timeOk = true; maybeShow(); }, 30000);
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= 0.6) { scrollOk = true; maybeShow(); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    function cleanup() { clearTimeout(t); window.removeEventListener('scroll', onScroll); }
    return cleanup;
  }, []);

  /* Lock background scroll while the modal is open */
  useEffect(() => {
    if (visible) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [visible]);

  /* Keyboard support: Escape dismisses; focus moves into the dialog on
     open and returns to wherever the visitor was when it closes. */
  const closeBtnRef = useRef(null);
  const restoreFocusRef = useRef(null);
  useEffect(() => {
    if (!visible) return;
    restoreFocusRef.current = document.activeElement;
    closeBtnRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      restoreFocusRef.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // Report the lead (with the visitor's own number) to the tracking sheet
    try {
      window.dispatchEvent(new CustomEvent('sgt:lead', { detail: {
        type: 'Popup Form', name: form.name, number: form.phone,
        package: form.package || 'Not decided',
        detail: `Month: ${form.month || 'Not decided'} | Pilgrims: ${form.pilgrims}`,
      }}));
    } catch {}
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
          width: 'min(400px, 92vw)',
          maxHeight: '86dvh',
          background: '#fff',
          borderRadius: 16,
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          boxShadow: '0 24px 60px rgba(10,20,40,0.32)',
          animation: closing ? 'slideDown .35s var(--t-out) forwards' : 'slideUp .4s var(--t-out)',
        }}
      >
        {/* Gold top accent bar */}
        <div style={{
          height: 4,
          background: 'linear-gradient(90deg, var(--navy) 0%, var(--gold) 50%, var(--teal) 100%)',
        }}/>

        {step === 1 ? (
          <>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, var(--navy) 0%, #1A3E75 100%)',
              padding: '17px 20px 15px',
              position: 'relative',
            }}>
              {/* Close button */}
              <button
                ref={closeBtnRef}
                onClick={close}
                aria-label="Close"
                style={{
                  position: 'absolute', top: 11, right: 11,
                  width: 30, height: 30, borderRadius: '50%',
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

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 11,
                  background: 'linear-gradient(135deg, var(--gold), #f5a623)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 21, flexShrink: 0,
                  boxShadow: '0 3px 11px rgba(232,146,10,0.4)',
                }}>🙏</div>
                <div>
                  <div style={{
                    color: '#FFD166', fontSize: 9.5, fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 3,
                  }}>
                    Free Expert Consultation
                  </div>
                  <h2 style={{
                    color: '#fff', fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.98rem, 2.6vw, 1.15rem)',
                    fontWeight: 600, lineHeight: 1.22,
                    letterSpacing: '-0.02em',
                  }}>
                    Plan Your Sacred<br/>
                    <em style={{ color: '#FFD166', fontStyle: 'italic' }}>Char Dham Yatra</em>
                  </h2>
                </div>
              </div>

              {/* Trust chips */}
              <div style={{
                display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 11,
              }}>
                {['✓ Zero commission', '✓ Reply in 2 hrs', '✓ Free itinerary'].map(t => (
                  <span key={t} style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 9.5, fontWeight: 500,
                    padding: '2px 8px', borderRadius: 100,
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ padding: '15px 20px 18px' }}>
              {/* 150px min so name/phone pair up side by side instead of
                  stacking (the old 280px min never fit, so every field ran
                  full width and the form ran long). Phones ≤500px are forced
                  back to one column by .lead-popup-form-row in globals.css. */}
              <div className="lead-popup-form-row" style={{ display: 'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,150px),1fr))', gap: 10, marginBottom: 10 }}>
                <div>
                  <label style={labelStyle} htmlFor="lead-name">Full Name <span style={{ color: 'var(--gold)' }}>*</span></label>
                  <input
                    id="lead-name" type="text" name="name" required autoComplete="name"
                    value={form.name} onChange={handleChange}
                    placeholder="Ramesh Sharma"
                    style={inputStyle}
                    onFocus={focusIn} onBlur={focusOut}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="lead-phone">WhatsApp No. <span style={{ color: 'var(--gold)' }}>*</span></label>
                  <input
                    id="lead-phone" type="tel" name="phone" required autoComplete="tel"
                    value={form.phone} onChange={handleChange}
                    placeholder="+91-98765-43210"
                    style={inputStyle}
                    onFocus={focusIn} onBlur={focusOut}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 10 }}>
                <label style={labelStyle} htmlFor="lead-package">Interested Package</label>
                <select id="lead-package" name="package" value={form.package} onChange={handleChange} style={inputStyle}>
                  <option value="">— Select a package —</option>
                  {PACKAGES_LIST.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>

              <div className="lead-popup-form-row lead-popup-form-row--pair" style={{ display: 'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,140px),1fr))', gap: 10, marginBottom: 15 }}>
                <div>
                  <label style={labelStyle} htmlFor="lead-month">Travel Month</label>
                  <select id="lead-month" name="month" value={form.month} onChange={handleChange} style={inputStyle}>
                    <option value="">— Select month —</option>
                    {MONTHS.map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="lead-pilgrims">No. of Pilgrims</label>
                  <select id="lead-pilgrims" name="pilgrims" value={form.pilgrims} onChange={handleChange} style={inputStyle}>
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
                  width: '100%', padding: '11px',
                  background: 'linear-gradient(135deg, #25D366, #1ebe5d)',
                  color: '#fff', border: 'none', borderRadius: 9,
                  fontSize: 13.5, fontWeight: 700, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: 8, fontFamily: 'var(--font)',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
                  transition: 'all .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.35)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.85L0 24l6.335-1.503A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.68-.49-5.23-1.35l-.374-.213-3.884.921.977-3.775-.233-.387A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Get Free Quote on WhatsApp
              </button>

              <p style={{
                textAlign: 'center', fontSize: 10.5, color: 'var(--text-muted)', marginTop: 8,
              }}>
                🔒 Your details are safe. We never share or spam.
              </p>
            </form>
          </>
        ) : (
          /* Thank You screen */
          <div style={{ padding: '30px 24px', textAlign: 'center' }}>
            <div style={{
              width: 58, height: 58, borderRadius: '50%', margin: '0 auto 14px',
              background: 'linear-gradient(135deg, #25D366, #1ebe5d)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 26,
              boxShadow: '0 6px 18px rgba(37,211,102,0.35)',
              animation: 'popIn .4s var(--t-out)',
            }}>✓</div>

            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.25rem',
              fontWeight: 600, color: 'var(--navy)', marginBottom: 8,
            }}>
              Thank You, {form.name.split(' ')[0] || 'Pilgrim'}! 🙏
            </h3>
            <p style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.65, marginBottom: 18 }}>
              Your WhatsApp has been opened with your details.<br/>
              Our yatra expert will reply within <strong>2 hours</strong>.
            </p>

            {/* What happens next */}
            <div style={{
              background: 'var(--bg)', borderRadius: 10,
              padding: '12px 14px', textAlign: 'left', marginBottom: 16,
            }}>
              {[
                { icon:'💬', text:'You\'ll get a personalised quote' },
                { icon:'📋', text:'Free custom itinerary for your dates' },
                { icon:'🎯', text:'VIP darshan arrangements confirmed' },
              ].map((s, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 9,
                  padding: '6px 0',
                  borderBottom: i < 2 ? '1px solid hsl(var(--border))' : 'none',
                }}>
                  <span style={{ fontSize: 16 }}>{s.icon}</span>
                  <span style={{ fontSize: 12.5, color: 'var(--text-mid)' }}>{s.text}</span>
                </div>
              ))}
            </div>

            <button onClick={close} style={{
              width: '100%', padding: '10px',
              background: 'var(--navy)', color: '#fff',
              border: 'none', borderRadius: 9,
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
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
  width: '100%', padding: '8px 11px',
  border: '1.5px solid hsl(var(--border))',
  borderRadius: 8,
  // Stays 16px: anything smaller makes iOS Safari zoom the page on focus.
  fontSize: 16,
  background: '#fff', color: 'var(--text)',
  outline: 'none', fontFamily: 'var(--font)',
  transition: 'border-color .15s, box-shadow .15s',
};
const labelStyle = {
  display: 'block', fontSize: 10, fontWeight: 700,
  color: 'var(--text-mid)', marginBottom: 4,
  textTransform: 'uppercase', letterSpacing: '0.07em',
};
const focusIn  = e => { e.target.style.borderColor = 'var(--navy)'; e.target.style.boxShadow = '0 0 0 3px rgba(15,43,91,0.1)'; };
const focusOut = e => { e.target.style.borderColor = 'hsl(var(--border))'; e.target.style.boxShadow = 'none'; };
