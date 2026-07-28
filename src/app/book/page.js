'use client';

/* ══════════════════════════════════════════════════════════════
   /book — premium multi-step enquiry wizard (Phase 5)

   Business model is enquiry-first (no online payment): the wizard
   collects the trip configuration and submits it as a fully-itemised
   WhatsApp message — the site's actual working conversion path (the
   old /contact Formspree action was never configured). An email
   fallback is offered in case WhatsApp is blocked.

   Client component. Glass sticky summary, animated per-step
   validation, mobile bottom-sheet summary. Prefill via ?pkg=<slug>.
   ══════════════════════════════════════════════════════════════ */

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { PACKAGES, CATEGORIES, SITE } from '@/data/packages';
import Icon, { WhatsAppIcon } from '@/components/Icon';

const STEPS = ['Journey', 'Travellers', 'Comfort', 'Your details'];
const MONTHS = ['May 2026', 'June 2026', 'July 2026', 'August 2026', 'September 2026', 'October 2026', 'Not sure yet'];
const TIERS = [
  { id: 'Budget',  desc: 'Clean guesthouses · shared/standard vehicle' },
  { id: 'Deluxe',  desc: '2–3★ hotels · Innova / Ertiga' },
  { id: 'Premium', desc: 'Best available · private Innova Crysta' },
];
const VEHICLES = ['Ertiga / Sedan', 'Innova Crysta', 'Tempo Traveller', 'Not sure yet'];
const ADDONS = [
  { id: 'heli', label: 'Kedarnath helicopter' },
  { id: 'pony', label: 'Pony / palki at Kedarnath' },
  { id: 'vip',  label: 'VIP darshan / special puja' },
  { id: 'rest', label: 'Extra acclimatisation day' },
];

const inr = (n) => `₹${Number(n).toLocaleString('en-IN')}`;
const validPhone = (p) => /^(\+?91[-\s]?)?[6-9]\d{9}$/.test((p || '').replace(/[-\s]/g, ''));

const BOOK_CSS = `
  .bk { background:var(--paper); min-height:100vh; }
  .bk-hero { background:var(--ink); color:#fff; padding:clamp(48px,7vw,88px) var(--lux-gutter) clamp(32px,4vw,52px); }
  .bk-hero__in { max-width:var(--lux-max,1320px); margin:0 auto; }
  .bk-wrap { max-width:1140px; margin:0 auto; padding:clamp(28px,4vw,52px) var(--lux-gutter) 120px; display:grid; grid-template-columns:1fr 360px; gap:clamp(28px,4vw,56px); align-items:start; }
  @media (max-width:900px){ .bk-wrap{ grid-template-columns:1fr; padding-bottom:200px; } }

  .bk-steps { display:flex; gap:8px; margin-bottom:34px; }
  .bk-step-dot { flex:1; }
  .bk-step-dot__bar { height:2px; background:var(--rule); overflow:hidden; }
  .bk-step-dot__bar > i { display:block; height:100%; width:0; background:var(--gold); transition:width .5s var(--ease-lux); }
  .bk-step-dot.is-done .bk-step-dot__bar > i, .bk-step-dot.is-on .bk-step-dot__bar > i { width:100%; }
  .bk-step-dot__l { font-size:0.62rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--ink-faint); margin-top:8px; font-weight:600; }
  .bk-step-dot.is-on .bk-step-dot__l, .bk-step-dot.is-done .bk-step-dot__l { color:var(--ink); }
  @media (max-width:560px){ .bk-step-dot__l{ display:none; } }

  .bk-panel { animation:bkIn .45s var(--ease-lux); }
  @keyframes bkIn { from{ opacity:0; transform:translateY(10px);} to{ opacity:1; transform:none; } }

  .bk-opt-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:12px; }
  .bk-opt { text-align:left; padding:16px; border:1px solid var(--rule-strong); border-radius:var(--ds-r-2); background:#fff; cursor:pointer; transition:border-color .3s var(--ease-lux), background .3s var(--ease-lux); }
  .bk-opt:hover { border-color:var(--ink); }
  .bk-opt.is-on { border-color:var(--gold); background:var(--gold-wash); box-shadow:inset 0 0 0 1px var(--gold-hair); }
  .bk-opt__t { font-weight:600; font-size:0.9rem; color:var(--ink); }
  .bk-opt__s { font-size:0.72rem; color:var(--ink-faint); margin-top:3px; line-height:1.4; }

  .bk-count { display:flex; align-items:center; gap:14px; }
  .bk-count button { width:40px; height:40px; border-radius:var(--ds-r-pill); border:1px solid var(--rule-strong); background:#fff; cursor:pointer; font-size:1.1rem; color:var(--ink); display:grid; place-items:center; transition:border-color .3s var(--ease-lux); }
  .bk-count button:hover:not(:disabled){ border-color:var(--ink); }
  .bk-count button:disabled{ opacity:0.4; cursor:not-allowed; }
  .bk-count__v { font-family:var(--font-display); font-size:1.5rem; color:var(--ink); min-width:32px; text-align:center; }

  .bk-chips { display:flex; flex-wrap:wrap; gap:10px; }
  .bk-chip { padding:9px 16px; border:1px solid var(--rule-strong); border-radius:var(--ds-r-pill); background:#fff; cursor:pointer; font-size:0.8rem; color:var(--ink-soft); transition:all .3s var(--ease-lux); }
  .bk-chip.is-on { background:var(--ink); color:#fff; border-color:var(--ink); }

  .bk-field.is-invalid .lux-input, .bk-field.is-invalid .lux-select { animation:bkShake .3s; }
  @keyframes bkShake { 0%,100%{transform:translateX(0);} 25%{transform:translateX(-5px);} 75%{transform:translateX(5px);} }

  .bk-nav { display:flex; justify-content:space-between; gap:12px; margin-top:32px; padding-top:24px; border-top:1px solid var(--rule); }

  /* Summary */
  .bk-sum { position:sticky; top:96px; padding:24px; }
  @media (max-width:900px){
    .bk-sum { position:fixed; left:0; right:0; bottom:0; top:auto; z-index:40; border-radius:16px 16px 0 0; padding:16px 20px calc(16px + env(safe-area-inset-bottom)); max-height:64vh; overflow:auto; }
  }
  .bk-sum__row { display:flex; justify-content:space-between; gap:14px; padding:9px 0; border-bottom:1px solid var(--rule); font-size:0.82rem; }
  .bk-sum__row:last-of-type { border-bottom:0; }
  .bk-sum__k { color:var(--ink-faint); }
  .bk-sum__v { color:var(--ink); font-weight:500; text-align:right; }
  .bk-est { font-family:var(--font-display); font-size:1.8rem; color:var(--ink); letter-spacing:-0.02em; }

  .bk-success { max-width:560px; margin:0 auto; text-align:center; padding:clamp(40px,7vw,80px) var(--lux-gutter); }
`;

export default function BookPage() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [f, setF] = useState({
    category: '', pkgSlug: '', adults: 2, children: 0, month: '',
    tier: 'Deluxe', vehicle: 'Not sure yet', addons: [], pickup: '',
    name: '', phone: '', email: '', notes: '',
  });

  // Prefill from ?pkg= (client-only; avoids Suspense requirement of useSearchParams)
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('pkg');
    if (!slug) return;
    const pkg = PACKAGES.find((p) => p.slug === slug);
    if (pkg) setF((s) => ({ ...s, pkgSlug: pkg.slug, category: pkg.category }));
  }, []);

  const set = (k, v) => setF((s) => ({ ...s, [k]: v }));
  const toggleAddon = (id) =>
    setF((s) => ({ ...s, addons: s.addons.includes(id) ? s.addons.filter((a) => a !== id) : [...s.addons, id] }));

  const pkg = useMemo(() => PACKAGES.find((p) => p.slug === f.pkgSlug), [f.pkgSlug]);
  const catPkgs = useMemo(
    () => (f.category ? PACKAGES.filter((p) => p.category === f.category) : []),
    [f.category]
  );

  // Honest indicative estimate: the package's own budget-tier base × travellers
  // (children at 65%). Tier/add-ons are captured and quoted exactly on enquiry.
  const est = useMemo(() => {
    if (!pkg) return null;
    const base = pkg.price.discounted;
    return Math.round(base * f.adults + base * 0.65 * f.children);
  }, [pkg, f.adults, f.children]);

  const stepValid = (i = step) => {
    if (i === 0) return !!f.category;
    if (i === 1) return f.adults >= 1 && !!f.month;
    if (i === 2) return !!f.tier;
    if (i === 3) return f.name.trim().length > 1 && validPhone(f.phone);
    return true;
  };

  const next = () => {
    if (!stepValid()) { setAttempted(true); return; }
    setAttempted(false);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const back = () => { setAttempted(false); setStep((s) => Math.max(s - 1, 0)); };

  const message = useMemo(() => {
    const lines = [
      'Namaste! I would like to enquire / book a yatra:',
      '',
      `Journey: ${pkg ? `${pkg.name} (${pkg.duration.nights}N/${pkg.duration.days}D)` : (CATEGORIES[f.category]?.name || 'Not decided yet')}`,
      `Travel month: ${f.month || 'Not sure'}`,
      `Travellers: ${f.adults} adult${f.adults > 1 ? 's' : ''}${f.children ? `, ${f.children} child${f.children > 1 ? 'ren' : ''}` : ''}`,
      `Comfort tier: ${f.tier}`,
      `Vehicle: ${f.vehicle}`,
      f.addons.length ? `Add-ons: ${f.addons.map((a) => ADDONS.find((x) => x.id === a)?.label).join(', ')}` : null,
      f.pickup ? `Pickup: ${f.pickup}` : null,
      '',
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      f.email ? `Email: ${f.email}` : null,
      f.notes ? `Notes: ${f.notes}` : null,
      est ? `Indicative (budget tier): ${inr(est)} for the group` : null,
    ].filter((l) => l !== null);
    return lines.join('\n');
  }, [pkg, f, est]);

  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
  const mailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent('Yatra booking enquiry')}&body=${encodeURIComponent(message)}`;

  const submit = () => {
    if (!stepValid(3)) { setAttempted(true); return; }
    if (typeof window !== 'undefined') window.open(waUrl, '_blank', 'noopener');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bk">
        <style dangerouslySetInnerHTML={{ __html: BOOK_CSS }} />
        <div className="bk-success">
          <span className="lux-ico-chip" style={{ margin: '0 auto 22px', width: 60, height: 60 }}><Icon name="check" size={28} /></span>
          <h1 className="lux-display lux-display--lg">Enquiry ready</h1>
          <p className="lux-lede" style={{ margin: '16px auto 0' }}>
            We’ve opened WhatsApp with your itemised enquiry. If it didn’t open, use a button below —
            our team replies within two hours during working hours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 30 }}>
            <a href={waUrl} target="_blank" rel="nofollow noopener noreferrer" className="lux-btn" style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}>
              <WhatsAppIcon size={16} /> Open WhatsApp
            </a>
            <a href={mailUrl} className="lux-btn lux-btn--ink"><Icon name="mail" size={15} /> Send by email</a>
            <a href={`tel:+${SITE.whatsapp}`} className="lux-btn lux-btn--ghost"><Icon name="phone" size={15} /> {SITE.phone}</a>
          </div>
          <p className="lux-caption" style={{ marginTop: 26 }}><Link href="/packages" className="lux-link">Back to all packages</Link></p>
        </div>
      </div>
    );
  }

  return (
    <div className="bk">
      <style dangerouslySetInnerHTML={{ __html: BOOK_CSS }} />

      <header className="bk-hero">
        <div className="bk-hero__in">
          <span className="lux-eyebrow lux-eyebrow--light">Plan your yatra</span>
          <h1 className="lux-display lux-display--lg" style={{ color: '#fff', marginTop: 16 }}>
            Build your journey, <span className="lux-accent">step by step</span>
          </h1>
          <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.72)', marginTop: 14, maxWidth: '52ch' }}>
            Four quick steps. No payment now — you’ll get an exact, itemised quote back on WhatsApp, and only a 25% advance confirms your dates.
          </p>
        </div>
      </header>

      <div className="bk-wrap">
        {/* ── Wizard ── */}
        <div>
          <div className="bk-steps" aria-hidden="true">
            {STEPS.map((s, i) => (
              <div key={s} className={`bk-step-dot${i === step ? ' is-on' : ''}${i < step ? ' is-done' : ''}`}>
                <div className="bk-step-dot__bar"><i /></div>
                <div className="bk-step-dot__l">{i + 1}. {s}</div>
              </div>
            ))}
          </div>

          <p className="lux-eyebrow" style={{ marginBottom: 18 }}>Step {step + 1} of {STEPS.length}</p>

          {/* STEP 0 — Journey */}
          {step === 0 && (
            <div className="bk-panel">
              <h2 className="lux-display lux-display--md">Which journey?</h2>
              <p className="lux-body" style={{ marginTop: 10, marginBottom: 22 }}>Pick a type of yatra. You can choose an exact package next — or leave it to us.</p>
              <div className="bk-opt-grid">
                {Object.values(CATEGORIES).map((c) => (
                  <button key={c.slug} type="button" className={`bk-opt${f.category === c.slug ? ' is-on' : ''}`}
                    onClick={() => setF((s) => ({ ...s, category: c.slug, pkgSlug: PACKAGES.find((p) => p.slug === s.pkgSlug)?.category === c.slug ? s.pkgSlug : '' }))}>
                    <div className="bk-opt__t">{c.name}</div>
                    <div className="bk-opt__s">{c.desc}</div>
                  </button>
                ))}
              </div>
              {attempted && !f.category && <p className="lux-hint lux-hint--error" style={{ marginTop: 14 }}>Please choose a journey type.</p>}

              {catPkgs.length > 0 && (
                <div style={{ marginTop: 28 }}>
                  <label className="lux-label" style={{ marginBottom: 8, display: 'block' }}>Exact package (optional)</label>
                  <select className="lux-select" value={f.pkgSlug} onChange={(e) => set('pkgSlug', e.target.value)}>
                    <option value="">Not decided — recommend one for me</option>
                    {catPkgs.map((p) => <option key={p.slug} value={p.slug}>{p.name} ({p.duration.nights}N/{p.duration.days}D · {inr(p.price.discounted)})</option>)}
                  </select>
                </div>
              )}
            </div>
          )}

          {/* STEP 1 — Travellers */}
          {step === 1 && (
            <div className="bk-panel">
              <h2 className="lux-display lux-display--md">Who’s travelling, and when?</h2>
              <div style={{ display: 'grid', gap: 28, marginTop: 24 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40 }}>
                  <div>
                    <label className="lux-label" style={{ display: 'block', marginBottom: 10 }}>Adults</label>
                    <div className="bk-count">
                      <button type="button" onClick={() => set('adults', Math.max(1, f.adults - 1))} disabled={f.adults <= 1} aria-label="Fewer adults">−</button>
                      <span className="bk-count__v">{f.adults}</span>
                      <button type="button" onClick={() => set('adults', Math.min(50, f.adults + 1))} aria-label="More adults">+</button>
                    </div>
                  </div>
                  <div>
                    <label className="lux-label" style={{ display: 'block', marginBottom: 10 }}>Children (under 10)</label>
                    <div className="bk-count">
                      <button type="button" onClick={() => set('children', Math.max(0, f.children - 1))} disabled={f.children <= 0} aria-label="Fewer children">−</button>
                      <span className="bk-count__v">{f.children}</span>
                      <button type="button" onClick={() => set('children', Math.min(20, f.children + 1))} aria-label="More children">+</button>
                    </div>
                  </div>
                </div>
                <div className={`bk-field lux-field${attempted && !f.month ? ' is-invalid' : ''}`}>
                  <label className="lux-label">Travel month</label>
                  <select className="lux-select" value={f.month} onChange={(e) => set('month', e.target.value)}>
                    <option value="" disabled>— Select month —</option>
                    {MONTHS.map((m) => <option key={m}>{m}</option>)}
                  </select>
                  {attempted && !f.month && <span className="lux-hint lux-hint--error">Please pick a travel month.</span>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 — Comfort */}
          {step === 2 && (
            <div className="bk-panel">
              <h2 className="lux-display lux-display--md">Your comfort level</h2>
              <p className="lux-body" style={{ marginTop: 10, marginBottom: 20 }}>All tiers cover the same temples and route — the difference is hotels and vehicle.</p>
              <div className="bk-opt-grid">
                {TIERS.map((t) => (
                  <button key={t.id} type="button" className={`bk-opt${f.tier === t.id ? ' is-on' : ''}`} onClick={() => set('tier', t.id)}>
                    <div className="bk-opt__t">{t.id}</div>
                    <div className="bk-opt__s">{t.desc}</div>
                  </button>
                ))}
              </div>

              <label className="lux-label" style={{ display: 'block', margin: '26px 0 10px' }}>Preferred vehicle</label>
              <div className="bk-chips">
                {VEHICLES.map((v) => (
                  <button key={v} type="button" className={`bk-chip${f.vehicle === v ? ' is-on' : ''}`} onClick={() => set('vehicle', v)}>{v}</button>
                ))}
              </div>

              <label className="lux-label" style={{ display: 'block', margin: '26px 0 10px' }}>Add-ons (optional)</label>
              <div className="bk-chips">
                {ADDONS.map((a) => (
                  <button key={a.id} type="button" className={`bk-chip${f.addons.includes(a.id) ? ' is-on' : ''}`} onClick={() => toggleAddon(a.id)}>{a.label}</button>
                ))}
              </div>

              <div className="lux-field" style={{ marginTop: 26, maxWidth: 320 }}>
                <label className="lux-label">Pickup city (optional)</label>
                <input className="lux-input" value={f.pickup} onChange={(e) => set('pickup', e.target.value)} placeholder="e.g. Haridwar, Delhi, Dehradun" />
              </div>
            </div>
          )}

          {/* STEP 3 — Details */}
          {step === 3 && (
            <div className="bk-panel">
              <h2 className="lux-display lux-display--md">Where do we send the quote?</h2>
              <div style={{ display: 'grid', gap: 18, marginTop: 24, maxWidth: 520 }}>
                <div className={`bk-field lux-field${attempted && f.name.trim().length < 2 ? ' is-invalid' : ''}`}>
                  <label className="lux-label">Full name *</label>
                  <input className="lux-input" value={f.name} onChange={(e) => set('name', e.target.value)} placeholder="Your name" />
                  {attempted && f.name.trim().length < 2 && <span className="lux-hint lux-hint--error">Please enter your name.</span>}
                </div>
                <div className={`bk-field lux-field${attempted && !validPhone(f.phone) ? ' is-invalid' : ''}`}>
                  <label className="lux-label">Phone / WhatsApp *</label>
                  <input className="lux-input" type="tel" value={f.phone} onChange={(e) => set('phone', e.target.value)} placeholder="10-digit mobile number" />
                  {attempted && !validPhone(f.phone) && <span className="lux-hint lux-hint--error">Enter a valid Indian mobile number.</span>}
                </div>
                <div className="lux-field">
                  <label className="lux-label">Email (optional)</label>
                  <input className="lux-input" type="email" value={f.email} onChange={(e) => set('email', e.target.value)} placeholder="you@example.com" />
                </div>
                <div className="lux-field">
                  <label className="lux-label">Anything we should know? (optional)</label>
                  <textarea className="lux-textarea" value={f.notes} onChange={(e) => set('notes', e.target.value)} placeholder="Senior pilgrims, dietary needs, preferred hotels…" />
                </div>
              </div>
            </div>
          )}

          {/* Nav */}
          <div className="bk-nav">
            {step > 0
              ? <button type="button" className="lux-btn lux-btn--ghost" onClick={back}><Icon name="arrowRight" size={14} style={{ transform: 'rotate(180deg)' }} /> Back</button>
              : <span />}
            {step < STEPS.length - 1
              ? <button type="button" className="lux-btn lux-btn--ink" onClick={next}>Continue <Icon name="arrowRight" size={14} /></button>
              : <button type="button" className="lux-btn lux-btn--gold" onClick={submit}><WhatsAppIcon size={15} /> Send my enquiry</button>}
          </div>
        </div>

        {/* ── Sticky glass summary ── */}
        <aside className="bk-sum lux-glass" aria-label="Your enquiry summary">
          <span className="lux-eyebrow lux-eyebrow--plain" style={{ fontSize: '0.625rem' }}>Your enquiry</span>
          <div style={{ marginTop: 16 }}>
            <div className="bk-sum__row"><span className="bk-sum__k">Journey</span><span className="bk-sum__v">{pkg ? pkg.name.replace(' Package', '') : (CATEGORIES[f.category]?.name || '—')}</span></div>
            {pkg && <div className="bk-sum__row"><span className="bk-sum__k">Duration</span><span className="bk-sum__v">{pkg.duration.nights}N / {pkg.duration.days}D</span></div>}
            <div className="bk-sum__row"><span className="bk-sum__k">Travellers</span><span className="bk-sum__v">{f.adults} adult{f.adults > 1 ? 's' : ''}{f.children ? ` · ${f.children} child` : ''}</span></div>
            <div className="bk-sum__row"><span className="bk-sum__k">Month</span><span className="bk-sum__v">{f.month || '—'}</span></div>
            <div className="bk-sum__row"><span className="bk-sum__k">Tier</span><span className="bk-sum__v">{f.tier}</span></div>
            {f.addons.length > 0 && <div className="bk-sum__row"><span className="bk-sum__k">Add-ons</span><span className="bk-sum__v">{f.addons.length}</span></div>}
          </div>
          <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--rule)' }}>
            {est ? (
              <>
                <span className="lux-caption">Indicative · budget tier</span>
                <div className="bk-est" style={{ marginTop: 4 }}>{inr(est)}</div>
                <span className="lux-caption" style={{ display: 'block', marginTop: 4 }}>for the group · exact quote on enquiry</span>
              </>
            ) : (
              <span className="lux-caption">Pick a package to see an indicative estimate. We’ll send an exact, itemised quote.</span>
            )}
          </div>
          <div style={{ marginTop: 18 }}>
            <span className="lux-status lux-status--ok">Zero commission · reply in 2 hrs</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
