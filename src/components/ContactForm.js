'use client';
import { useState } from 'react';
import { SITE } from '@/data/packages';

/* The /contact enquiry form.
   Posts to /api/lead with `ack: true`, so the route waits for the Google
   Sheet webhook and tells us whether the row landed — the beacon path used
   by LeadTracker fires and forgets, which is right for a click and wrong
   for a form someone just spent two minutes filling in. On success the
   form is replaced by a confirmation; on failure the visitor is told
   plainly and handed the WhatsApp and phone routes that always work.

   Until 13 Sep 2026 this form posted to a Formspree placeholder URL and
   every submission failed with an error page. Keep the delivery test in
   the PR checklist: submit once from the live site after any change here
   and confirm the row in the sheet. */

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  border: '1.5px solid hsl(var(--border))',
  borderRadius: 10,
  fontSize: 13.5,
  background: '#fff',
  color: 'var(--text)',
  outline: 'none',
  fontFamily: 'var(--font)',
  transition: 'border-color .15s, box-shadow .15s',
};

function FormRow({ children }) {
  return (
    <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 12 }}>
      {children}
    </div>
  );
}

function FormField({ label, required, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} style={{
        display: 'block', fontSize: 11.5, fontWeight: 600,
        color: 'var(--mid)', marginBottom: 6,
        textTransform: 'uppercase', letterSpacing: '0.06em',
      }}>
        {label} {required && <span style={{ color: 'var(--saffron)' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const MONTHS = ['May 2026', 'June 2026', 'July 2026', 'August 2026', 'September 2026', 'October 2026', 'Not sure yet'];

export default function ContactForm({ packages = [] }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [sent, setSent] = useState(null);       // { name, phone } after success

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    const f = new FormData(e.currentTarget);

    // Honeypot: real visitors never see this field.
    if (f.get('company')) { setStatus('sent'); return; }

    const name = String(f.get('name') || '').trim();
    const phone = String(f.get('phone') || '').trim();
    const email = String(f.get('email') || '').trim();
    const pkg = String(f.get('package') || '').trim();
    const month = String(f.get('month') || '').trim();
    const pilgrims = String(f.get('pilgrims') || '').trim();
    const message = String(f.get('message') || '').trim();

    const detail = [
      email && `email: ${email}`,
      month && `month: ${month}`,
      pilgrims && `pilgrims: ${pilgrims}`,
      message && `msg: ${message}`,
    ].filter(Boolean).join(' | ');

    setStatus('sending');
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ack: true,
          type: 'Form',
          page: '/contact',
          package: pkg === 'custom' ? 'Custom / undecided' : pkg,
          number: phone,
          name,
          detail,
        }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.reason || `HTTP ${r.status}`);

      try {
        if (window.gtag) {
          window.gtag('event', 'generate_lead', {
            event_category: 'engagement', event_label: 'Form', lead_type: 'Form',
            lead_page: '/contact', lead_package: pkg || '(none)', value: 1,
          });
        }
      } catch { /* analytics must never block the confirmation */ }

      setSent({ name, phone });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const waText = encodeURIComponent('Namaste! I would like to enquire about Char Dham Yatra packages for 2026.');
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${waText}`;

  if (status === 'sent') {
    return (
      <div role="status" aria-live="polite" style={{ padding: '8px 0' }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>🙏</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--text)', marginBottom: 8, letterSpacing: '-0.02em' }}>
          Sent{sent?.name ? `, ${sent.name.split(' ')[0]}` : ''}. We have your enquiry.
        </h3>
        <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.7, marginBottom: 16 }}>
          A member of the team replies within 2 hours between 9 AM and 8 PM, on the number you gave
          {sent?.phone ? ` (${sent.phone})` : ''}. If it is urgent, WhatsApp us now and mention you sent the form.
        </p>
        <a href={waHref} target="_blank" rel="nofollow noopener noreferrer" className="btn-primary"
          style={{ display: 'inline-block', padding: '12px 18px', fontSize: 14, fontWeight: 700, background: '#25D366', borderColor: '#25D366', color: '#fff' }}>
          💬 Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <FormRow>
        <FormField label="Full Name" required htmlFor="cf-name">
          <input id="cf-name" type="text" name="name" required autoComplete="name" placeholder="Ramesh Kumar Sharma" style={inputStyle} />
        </FormField>
        <FormField label="Phone / WhatsApp" required htmlFor="cf-phone">
          <input id="cf-phone" type="tel" name="phone" required autoComplete="tel" inputMode="tel" placeholder="+91-98765-43210" style={inputStyle} />
        </FormField>
      </FormRow>

      <FormField label="Email Address" htmlFor="cf-email">
        <input id="cf-email" type="email" name="email" autoComplete="email" placeholder="you@example.com" style={inputStyle} />
      </FormField>

      <FormField label="Package Interested In" htmlFor="cf-package">
        <select id="cf-package" name="package" style={inputStyle} defaultValue="">
          <option value="" disabled>— Select a package —</option>
          {packages.map(p => (
            <option key={p.slug} value={p.name}>{p.name} ({p.nights}N/{p.days}D)</option>
          ))}
          <option value="custom">Custom / Not decided yet</option>
        </select>
      </FormField>

      <FormRow>
        <FormField label="Travel Month" htmlFor="cf-month">
          <select id="cf-month" name="month" style={inputStyle} defaultValue="">
            <option value="" disabled>— Select month —</option>
            {MONTHS.map(m => <option key={m}>{m}</option>)}
          </select>
        </FormField>
        <FormField label="Number of Pilgrims" htmlFor="cf-pilgrims">
          <input id="cf-pilgrims" type="number" name="pilgrims" min="1" max="50" inputMode="numeric" placeholder="e.g. 4" style={inputStyle} />
        </FormField>
      </FormRow>

      <FormField label="Message (optional)" htmlFor="cf-message">
        <textarea id="cf-message" name="message" rows={4} maxLength={400}
          placeholder="Any specific requirements — senior pilgrims, dietary needs, preferred starting city..."
          style={{ ...inputStyle, resize: 'vertical', minHeight: 90, fontFamily: 'var(--font)' }} />
      </FormField>

      {/* Honeypot — hidden from people, filled by bots. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <div role="alert" style={{ background: '#FDF2F0', border: '1px solid #F3C9C0', color: '#8A2E1C', borderRadius: 10, padding: '12px 14px', fontSize: 13.5, lineHeight: 1.6 }}>
          We could not confirm that your enquiry reached us. To be sure, please send it on WhatsApp:{' '}
          <a href={waHref} target="_blank" rel="nofollow noopener noreferrer" style={{ color: '#8A2E1C', fontWeight: 700 }}>+91 78179 96730</a>,
          or call the same number. If it did arrive, we will not contact you twice.
        </div>
      )}

      <button type="submit" className="btn-primary" disabled={status === 'sending'}
        style={{ padding: '14px', fontSize: 14, marginTop: 4, fontWeight: 700, opacity: status === 'sending' ? 0.7 : 1 }}>
        {status === 'sending' ? 'Sending…' : 'Send Enquiry →'}
      </button>

      <p style={{ fontSize: 11.5, color: 'var(--text-muted)', textAlign: 'center', marginTop: 4 }}>
        🔒 Your details go straight to our Haridwar office. We reply within 2 hours during working hours. No spam.
      </p>
    </form>
  );
}
