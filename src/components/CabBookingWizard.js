'use client';

/* ══════════════════════════════════════════════════════════════
   CabBookingWizard — premium multi-step cab enquiry.

   Same honest wizard pattern already proven at /book: step dots,
   option cards, sticky glass summary, WhatsApp handoff (this
   operator's real conversion path — no online payment, no live
   dispatch backend, so this collects the trip and hands it to a
   human with an itemised message, exactly like every other enquiry
   flow on the site).

   Vehicle prices come straight from CAB_ROUTES.fares for the chosen
   base + destination — real quoted bands, not invented figures. If a
   visitor picks a combination this site doesn't have a fare band for,
   the price line is honest about that ("shared in your WhatsApp
   quote") rather than showing a fabricated number.
   ══════════════════════════════════════════════════════════════ */

import { useState, useMemo } from 'react';
import { SITE } from '@/data/packages';
import { getBookableBases, getBookableRoutes, getBookableRoutesByBase } from '@/data/cabs';

const CAB_BASES = getBookableBases();
const CAB_ROUTES = getBookableRoutes();
const getCabRoutesByBase = getBookableRoutesByBase;
import Icon, { WhatsAppIcon } from '@/components/Icon';

const STEPS = ['Route', 'Trip', 'Vehicle', 'Contact'];
const TRIP_TYPES = ['One-way', 'Round trip', 'Multi-day circuit'];

// Honest, generic descriptors keyed by vehicle-class name fragments already
// used in CAB_ROUTES.fares — not per-vehicle claims this operator can't back.
const VEHICLE_NOTES = [
  { match: /dzire|sedan/i, best: 'Couples & small groups', features: ['AC in the plains', 'Nimble on narrow hill bends'] },
  { match: /ertiga/i,      best: 'Families of 4–6',         features: ['AC in the plains', 'Extra boot space'] },
  { match: /innova/i,      best: 'Families & senior travellers', features: ['Captain seats', 'Best ride quality on the circuit'] },
  { match: /tempo/i,       best: 'Groups of 8 and above',   features: ['Push-back seats', 'Roof carrier + overhead storage'] },
];
function vehicleNote(name) {
  return VEHICLE_NOTES.find((v) => v.match.test(name)) || { best: 'General use', features: ['AC in the plains'] };
}

const validPhone = (p) => /^(\+?91[-\s]?)?[6-9]\d{9}$/.test((p || '').replace(/[-\s]/g, ''));

const CW_CSS = `
  .cw { background:var(--paper); }
  .cw-steps { display:flex; gap:8px; margin-bottom:30px; }
  .cw-step-dot { flex:1; }
  .cw-step-dot__bar { height:2px; background:var(--rule); overflow:hidden; }
  .cw-step-dot__bar > i { display:block; height:100%; width:0; background:var(--gold); transition:width .5s var(--ease-lux); }
  .cw-step-dot.is-done .cw-step-dot__bar > i, .cw-step-dot.is-on .cw-step-dot__bar > i { width:100%; }
  .cw-step-dot__l { font-size:0.62rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--ink-faint); margin-top:8px; font-weight:600; }
  .cw-step-dot.is-on .cw-step-dot__l, .cw-step-dot.is-done .cw-step-dot__l { color:var(--ink); }
  @media (max-width:560px){ .cw-step-dot__l{ display:none; } }

  .cw-panel { animation:cwIn .45s var(--ease-lux); }
  @keyframes cwIn { from{ opacity:0; transform:translateY(10px);} to{ opacity:1; transform:none; } }
  @media (prefers-reduced-motion: reduce) { .cw-panel { animation:none; } }

  .cw-wrap { max-width:1140px; margin:0 auto; display:grid; grid-template-columns:minmax(0,1fr) 340px; gap:clamp(28px,4vw,56px); align-items:start; }
  @media (max-width:900px){ .cw-wrap{ grid-template-columns:1fr; padding-bottom:190px; } }

  .cw-opt-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:10px; }
  .cw-opt { text-align:left; padding:14px 16px; border:1px solid var(--rule-strong); border-radius:var(--ds-r-2); background:#fff; cursor:pointer; transition:border-color .3s var(--ease-lux), background .3s var(--ease-lux), transform .3s var(--ease-lux); }
  .cw-opt:hover { border-color:var(--ink); transform:translateY(-2px); }
  .cw-opt.is-on { border-color:var(--gold); background:var(--gold-wash); box-shadow:inset 0 0 0 1px var(--gold-hair); }
  .cw-opt__t { font-weight:600; font-size:0.88rem; color:var(--ink); }
  .cw-opt__s { font-size:0.72rem; color:var(--ink-faint); margin-top:3px; }

  .cw-vehicle-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:14px; }
  .cw-vehicle { text-align:left; padding:18px; border:1px solid var(--rule-strong); border-radius:var(--ds-r-3); background:#fff; cursor:pointer; transition:border-color .35s var(--ease-lux), box-shadow .35s var(--ease-lux), transform .35s var(--ease-lux); position:relative; }
  .cw-vehicle:hover { transform:translateY(-3px); box-shadow:var(--ds-elev-2); }
  .cw-vehicle.is-on { border-color:var(--gold); box-shadow:var(--ds-elev-gold); }
  .cw-vehicle__top { display:flex; justify-content:space-between; align-items:flex-start; gap:10px; }
  .cw-vehicle__name { font-weight:700; font-size:0.95rem; color:var(--ink); }
  .cw-vehicle__seats { font-size:0.72rem; color:var(--ink-faint); margin-top:2px; }
  .cw-vehicle__price { font-family:var(--font-display); font-size:1.15rem; color:var(--gold-dark); letter-spacing:-0.01em; white-space:nowrap; }
  .cw-vehicle__best { font-size:0.75rem; color:var(--teal-dark); font-weight:600; margin-top:10px; }
  .cw-vehicle__feats { list-style:none; padding:0; margin:8px 0 0; display:flex; flex-direction:column; gap:4px; }
  .cw-vehicle__feats li { font-size:0.72rem; color:var(--ink-soft); display:flex; align-items:center; gap:6px; }
  .cw-vehicle__check { position:absolute; top:14px; right:14px; width:20px; height:20px; border-radius:50%; border:1.5px solid var(--rule-strong); display:grid; place-items:center; transition:all .3s var(--ease-lux); }
  .cw-vehicle.is-on .cw-vehicle__check { background:var(--gold); border-color:var(--gold); color:#10203C; }

  .cw-count { display:flex; align-items:center; gap:14px; }
  .cw-count button { width:40px; height:40px; border-radius:var(--ds-r-pill); border:1px solid var(--rule-strong); background:#fff; cursor:pointer; font-size:1.1rem; color:var(--ink); display:grid; place-items:center; transition:border-color .3s var(--ease-lux); }
  .cw-count button:hover:not(:disabled){ border-color:var(--ink); }
  .cw-count button:disabled{ opacity:0.4; cursor:not-allowed; }
  .cw-count__v { font-family:var(--font-display); font-size:1.5rem; color:var(--ink); min-width:32px; text-align:center; }

  .cw-chips { display:flex; flex-wrap:wrap; gap:10px; }
  .cw-chip { padding:9px 16px; border:1px solid var(--rule-strong); border-radius:var(--ds-r-pill); background:#fff; cursor:pointer; font-size:0.8rem; color:var(--ink-soft); transition:all .3s var(--ease-lux); }
  .cw-chip.is-on { background:var(--ink); color:#fff; border-color:var(--ink); }

  .cw-field.is-invalid .lux-input { animation:cwShake .3s; }
  @keyframes cwShake { 0%,100%{transform:translateX(0);} 25%{transform:translateX(-5px);} 75%{transform:translateX(5px);} }
  @media (prefers-reduced-motion: reduce) { .cw-field.is-invalid .lux-input { animation:none; } }

  .cw-nav { display:flex; justify-content:space-between; gap:12px; margin-top:30px; padding-top:22px; border-top:1px solid var(--rule); }

  /* Keyboard focus — matches the site convention (.lux-btn:focus-visible).
     Without these the whole wizard is unnavigable by keyboard: nothing
     indicates which option, vehicle or chip is currently selected. */
  .cw-opt:focus-visible,
  .cw-vehicle:focus-visible,
  .cw-chip:focus-visible,
  .cw-count button:focus-visible { outline:2px solid var(--gold); outline-offset:3px; border-radius:var(--ds-r-2); }

  .cw-sum { position:sticky; top:96px; padding:24px; }
  @media (max-width:900px){
    .cw-sum { position:fixed; left:0; right:0; bottom:0; top:auto; z-index:40; border-radius:16px 16px 0 0; padding:16px 20px calc(16px + env(safe-area-inset-bottom)); max-height:60vh; overflow:auto; }
  }
  .cw-sum__row { display:flex; justify-content:space-between; gap:14px; padding:9px 0; border-bottom:1px solid var(--rule); font-size:0.82rem; }
  .cw-sum__row:last-of-type { border-bottom:0; }
  .cw-sum__k { color:var(--ink-faint); }
  .cw-sum__v { color:var(--ink); font-weight:500; text-align:right; }
  .cw-est { font-family:var(--font-display); font-size:1.6rem; color:var(--ink); letter-spacing:-0.02em; }

  .cw-success { max-width:560px; margin:0 auto; text-align:center; padding:clamp(40px,7vw,80px) var(--lux-gutter); }
`;

export default function CabBookingWizard() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [f, setF] = useState({
    base: 'Haridwar', destination: '', tripType: 'One-way', date: '', passengers: 2,
    vehicleName: '', name: '', phone: '', email: '', notes: '',
  });
  const set = (k, v) => setF((s) => ({ ...s, [k]: v }));

  const destinations = useMemo(
    () => Array.from(new Set(getCabRoutesByBase(f.base).map((r) => r.to))),
    [f.base]
  );

  const route = useMemo(
    () => CAB_ROUTES.find((r) => r.base === f.base && r.to === f.destination) || null,
    [f.base, f.destination]
  );

  const vehicleFare = useMemo(
    () => (route ? route.fares.find(([name]) => name === f.vehicleName) : null),
    [route, f.vehicleName]
  );

  const stepValid = (i = step) => {
    if (i === 0) return !!f.base && !!f.destination;
    if (i === 1) return !!f.tripType;
    if (i === 2) return !!f.vehicleName;
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
      'Namaste! I would like to book a cab:',
      '',
      `Route: ${f.base} → ${f.destination || 'Not decided yet'}`,
      `Trip type: ${f.tripType}`,
      f.date ? `Date: ${f.date}` : null,
      `Passengers: ${f.passengers}`,
      f.vehicleName ? `Vehicle: ${f.vehicleName}${vehicleFare ? ` (${vehicleFare[2]})` : ''}` : null,
      '',
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      f.email ? `Email: ${f.email}` : null,
      f.notes ? `Notes: ${f.notes}` : null,
    ].filter((l) => l !== null);
    return lines.join('\n');
  }, [f, vehicleFare]);

  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
  const mailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent('Cab booking enquiry')}&body=${encodeURIComponent(message)}`;

  const submit = () => {
    if (!stepValid(3)) { setAttempted(true); return; }
    if (typeof window !== 'undefined') window.open(waUrl, '_blank', 'noopener');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="cw">
        <style dangerouslySetInnerHTML={{ __html: CW_CSS }} />
        <div className="cw-success">
          <span className="lux-ico-chip" style={{ margin: '0 auto 22px', width: 60, height: 60 }}><Icon name="check" size={28} /></span>
          <h2 className="lux-display lux-display--lg">Enquiry ready</h2>
          <p className="lux-lede" style={{ margin: '16px auto 0' }}>
            We&rsquo;ve opened WhatsApp with your cab details. If it didn&rsquo;t open, use a button below — our team confirms the fixed fare within two hours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 30 }}>
            <a href={waUrl} target="_blank" rel="nofollow noopener noreferrer" className="lux-btn" style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }} data-magnetic>
              <WhatsAppIcon size={16} /> Open WhatsApp
            </a>
            <a href={mailUrl} className="lux-btn lux-btn--ink"><Icon name="mail" size={15} /> Send by email</a>
            <a href={`tel:+${SITE.whatsapp}`} className="lux-btn lux-btn--ghost"><Icon name="phone" size={15} /> {SITE.phone}</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cw">
      <style dangerouslySetInnerHTML={{ __html: CW_CSS }} />
      <div className="cw-wrap">
        <div>
          <div className="cw-steps" aria-hidden="true">
            {STEPS.map((s, i) => (
              <div key={s} className={`cw-step-dot${i === step ? ' is-on' : ''}${i < step ? ' is-done' : ''}`}>
                <div className="cw-step-dot__bar"><i /></div>
                <div className="cw-step-dot__l">{i + 1}. {s}</div>
              </div>
            ))}
          </div>
          <p className="lux-eyebrow" style={{ marginBottom: 18 }}>Step {step + 1} of {STEPS.length}</p>

          {/* STEP 0 — Route */}
          {step === 0 && (
            <div className="cw-panel">
              <h2 className="lux-display lux-display--md">Where from, where to?</h2>
              <label className="lux-label" style={{ display: 'block', margin: '22px 0 10px' }}>Pickup city</label>
              <div className="cw-opt-grid">
                {CAB_BASES.map((b) => (
                  <button key={b} type="button" className={`cw-opt${f.base === b ? ' is-on' : ''}`}
                    aria-pressed={f.base === b}
                    onClick={() => setF((s) => ({ ...s, base: b, destination: '' }))}>
                    <div className="cw-opt__t">{b}</div>
                  </button>
                ))}
              </div>

              <label className="lux-label" style={{ display: 'block', margin: '26px 0 10px' }}>Destination</label>
              <div className="cw-opt-grid">
                {destinations.map((d) => (
                  <button key={d} type="button" className={`cw-opt${f.destination === d ? ' is-on' : ''}`}
                    aria-pressed={f.destination === d}
                    onClick={() => set('destination', d)}>
                    <div className="cw-opt__t">{d}</div>
                  </button>
                ))}
              </div>
              {attempted && !f.destination && <p className="lux-hint lux-hint--error" style={{ marginTop: 14 }}>Please pick a destination.</p>}
            </div>
          )}

          {/* STEP 1 — Trip */}
          {step === 1 && (
            <div className="cw-panel">
              <h2 className="lux-display lux-display--md">Tell us about the trip</h2>
              <label className="lux-label" style={{ display: 'block', margin: '22px 0 10px' }}>Trip type</label>
              <div className="cw-chips">
                {TRIP_TYPES.map((t) => (
                  <button key={t} type="button" className={`cw-chip${f.tripType === t ? ' is-on' : ''}`} aria-pressed={f.tripType === t} onClick={() => set('tripType', t)}>{t}</button>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 28 }}>
                <div className="lux-field" style={{ maxWidth: 220 }}>
                  <label className="lux-label">Travel date (optional)</label>
                  <input className="lux-input" type="date" value={f.date} onChange={(e) => set('date', e.target.value)} />
                </div>
                <div>
                  <label className="lux-label" style={{ display: 'block', marginBottom: 10 }}>Passengers</label>
                  <div className="cw-count">
                    <button type="button" onClick={() => set('passengers', Math.max(1, f.passengers - 1))} disabled={f.passengers <= 1} aria-label="Fewer passengers">−</button>
                    <span className="cw-count__v">{f.passengers}</span>
                    <button type="button" onClick={() => set('passengers', Math.min(40, f.passengers + 1))} aria-label="More passengers">+</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 — Vehicle */}
          {step === 2 && (
            <div className="cw-panel">
              <h2 className="lux-display lux-display--md">Choose your vehicle</h2>
              <p className="lux-body" style={{ marginTop: 10, marginBottom: 20 }}>
                {route ? `Fares below are for ${route.from} → ${route.to} — the same fixed band we quote on WhatsApp.` : 'Pick a vehicle class — we’ll confirm the exact fare on WhatsApp.'}
              </p>
              <div className="cw-vehicle-grid">
                {(route ? route.fares : [['Sedan', '4', null], ['Ertiga', '6', null], ['Innova Crysta', '6', null], ['Tempo Traveller', '12', null]]).map(([name, seats, price]) => {
                  const note = vehicleNote(name);
                  const isOn = f.vehicleName === name;
                  return (
                    <button key={name} type="button" className={`cw-vehicle${isOn ? ' is-on' : ''}`} aria-pressed={isOn} onClick={() => set('vehicleName', name)}>
                      <span className="cw-vehicle__check" aria-hidden="true">{isOn && <Icon name="check" size={12} />}</span>
                      <div className="cw-vehicle__top">
                        <div>
                          <div className="cw-vehicle__name">{name}</div>
                          <div className="cw-vehicle__seats">{seats} seats · AC</div>
                        </div>
                      </div>
                      {price && <div className="cw-vehicle__price" style={{ marginTop: 10 }}>{price}</div>}
                      <div className="cw-vehicle__best">Best for: {note.best}</div>
                      <ul className="cw-vehicle__feats">
                        {note.features.map((ft) => <li key={ft}><Icon name="check" size={11} /> {ft}</li>)}
                      </ul>
                    </button>
                  );
                })}
              </div>
              {attempted && !f.vehicleName && <p className="lux-hint lux-hint--error" style={{ marginTop: 14 }}>Please choose a vehicle.</p>}
            </div>
          )}

          {/* STEP 3 — Contact */}
          {step === 3 && (
            <div className="cw-panel">
              <h2 className="lux-display lux-display--md">Where do we send the confirmation?</h2>
              <div style={{ display: 'grid', gap: 18, marginTop: 24, maxWidth: 520 }}>
                <div className={`cw-field lux-field${attempted && f.name.trim().length < 2 ? ' is-invalid' : ''}`}>
                  <label className="lux-label">Full name *</label>
                  <input className="lux-input" value={f.name} onChange={(e) => set('name', e.target.value)} placeholder="Your name" />
                  {attempted && f.name.trim().length < 2 && <span className="lux-hint lux-hint--error">Please enter your name.</span>}
                </div>
                <div className={`cw-field lux-field${attempted && !validPhone(f.phone) ? ' is-invalid' : ''}`}>
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
                  <textarea className="lux-textarea" value={f.notes} onChange={(e) => set('notes', e.target.value)} placeholder="Flight/train timing, child seat, extra luggage…" />
                </div>
              </div>
            </div>
          )}

          <div className="cw-nav">
            {step > 0
              ? <button type="button" className="lux-btn lux-btn--ghost" onClick={back}><Icon name="arrowRight" size={14} style={{ transform: 'rotate(180deg)' }} /> Back</button>
              : <span />}
            {step < STEPS.length - 1
              ? <button type="button" className="lux-btn lux-btn--ink" onClick={next} data-magnetic>Continue <Icon name="arrowRight" size={14} /></button>
              : <button type="button" className="lux-btn lux-btn--gold" onClick={submit} data-magnetic data-cursor="Send"><WhatsAppIcon size={15} /> Send my enquiry</button>}
          </div>
        </div>

        <aside className="cw-sum lux-glass" aria-label="Your cab enquiry summary">
          <span className="lux-eyebrow lux-eyebrow--plain" style={{ fontSize: '0.625rem' }}>Your trip</span>
          <div style={{ marginTop: 16 }}>
            <div className="cw-sum__row"><span className="cw-sum__k">Route</span><span className="cw-sum__v">{f.base} → {f.destination || '—'}</span></div>
            <div className="cw-sum__row"><span className="cw-sum__k">Trip type</span><span className="cw-sum__v">{f.tripType}</span></div>
            {f.date && <div className="cw-sum__row"><span className="cw-sum__k">Date</span><span className="cw-sum__v">{f.date}</span></div>}
            <div className="cw-sum__row"><span className="cw-sum__k">Passengers</span><span className="cw-sum__v">{f.passengers}</span></div>
            {f.vehicleName && <div className="cw-sum__row"><span className="cw-sum__k">Vehicle</span><span className="cw-sum__v">{f.vehicleName}</span></div>}
          </div>
          <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--rule)' }}>
            {vehicleFare ? (
              <>
                <span className="lux-caption">Fixed fare · one-way</span>
                <div className="cw-est" style={{ marginTop: 4 }}>{vehicleFare[2]}</div>
              </>
            ) : (
              <span className="lux-caption">Pick a route and vehicle to see the fixed fare band.</span>
            )}
          </div>
          <div style={{ marginTop: 18 }}>
            <span className="lux-status lux-status--ok">Zero commission · no surge pricing</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
