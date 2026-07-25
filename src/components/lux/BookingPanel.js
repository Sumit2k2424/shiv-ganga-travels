'use client';

/* ══════════════════════════════════════════════════════════════
   Booking experience.

   Three surfaces, one price engine:
     · BookingRail   — sticky desktop panel beside the itinerary
     · BookingBar    — thumb-reachable mobile bar, appears past the hero
     · CostBuilder   — the full customiser further down the page

   Every control feeds the same `quote()` function, so the number in
   the sticky rail and the number in the builder can never disagree.
   The WhatsApp message is assembled from the live configuration, so
   an enquiry arrives already itemised.
   ══════════════════════════════════════════════════════════════ */

import { useState, useMemo, useEffect, useCallback, createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Phone, MessageCircle, Download, Minus, Plus, Check, ShieldCheck, Calendar } from 'lucide-react';
import { PRICING } from '@/data/experience';
import { SITE } from '@/data/packages';

const EASE = [0.22, 1, 0.36, 1];
const inr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;

/* ── Price engine ───────────────────────────────────────────── */

export function quote(base, cfg) {
  const hotel = PRICING.hotelTiers.find((t) => t.id === cfg.hotel) || PRICING.hotelTiers[0];
  const vehicle = PRICING.vehicleTiers.find((t) => t.id === cfg.vehicle) || PRICING.vehicleTiers[0];
  const pickup = PRICING.pickups.find((p) => p.id === cfg.pickup) || PRICING.pickups[0];

  const perPersonBase =
    base + hotel.delta + vehicle.delta + pickup.delta + cfg.extraNights * PRICING.extraNight;

  const extrasPerPerson = (cfg.extras || []).reduce((sum, id) => {
    const e = PRICING.extras.find((x) => x.id === id);
    if (!e) return sum;
    // Vehicle-level extras are split across the group, not charged per head
    return sum + (/vehicle/i.test(e.unit) ? e.price / Math.max(1, cfg.adults + cfg.children) : e.price);
  }, 0);

  const adultsTotal = (perPersonBase + extrasPerPerson) * cfg.adults;
  const childrenTotal = (perPersonBase + extrasPerPerson) * (1 - PRICING.childDiscount) * cfg.children;
  const gross = adultsTotal + childrenTotal;

  const heads = cfg.adults + cfg.children;
  const brk = [...PRICING.groupBreaks].reverse().find((g) => heads >= g.min);
  const discount = brk ? gross * brk.off : 0;

  const total = gross - discount;
  return {
    perPerson: heads ? total / heads : perPersonBase,
    total,
    discount,
    discountPct: brk ? brk.off : 0,
    heads,
    hotel,
    vehicle,
    pickup,
    perPersonBase,
    extrasPerPerson,
  };
}

const DEFAULT_CFG = {
  adults: 2,
  children: 0,
  hotel: 'standard',
  vehicle: 'tempo',
  pickup: 'haridwar',
  extraNights: 0,
  extras: [],
  date: '',
};

/* ── Shared config hook, so rail and builder stay in lockstep ── */

export function useBooking(pkg) {
  const [cfg, setCfg] = useState(DEFAULT_CFG);
  const q = useMemo(() => quote(pkg.price.discounted, cfg), [pkg.price.discounted, cfg]);

  const set = useCallback((patch) => setCfg((c) => ({ ...c, ...patch })), []);
  const toggleExtra = useCallback(
    (id) =>
      setCfg((c) => ({
        ...c,
        extras: c.extras.includes(id) ? c.extras.filter((x) => x !== id) : [...c.extras, id],
      })),
    []
  );

  const waHref = useMemo(() => {
    const lines = [
      `Namaste! I would like to book: ${pkg.name}`,
      `Duration: ${pkg.duration.nights}N / ${pkg.duration.days}D`,
      cfg.date ? `Preferred start: ${cfg.date}` : null,
      `Travellers: ${cfg.adults} adult${cfg.adults > 1 ? 's' : ''}${cfg.children ? ` + ${cfg.children} child${cfg.children > 1 ? 'ren' : ''}` : ''}`,
      `Hotels: ${q.hotel.label}`,
      `Vehicle: ${q.vehicle.label}`,
      `Pickup: ${q.pickup.label}`,
      cfg.extraNights ? `Extra nights: ${cfg.extraNights}` : null,
      cfg.extras.length
        ? `Add-ons: ${cfg.extras.map((id) => PRICING.extras.find((e) => e.id === id)?.label).filter(Boolean).join(', ')}`
        : null,
      `Indicative total: ${inr(q.total)} (${inr(q.perPerson)} per person)`,
      '',
      'Please confirm availability and send the final costing.',
    ].filter(Boolean);
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
  }, [pkg, cfg, q]);

  return { cfg, set, toggleExtra, q, waHref };
}

/* ══════════════════════════════════════════════════════════════
   Context — lets the rail, the mobile bar and the cost builder sit
   in three different places in a server-rendered page while sharing
   one configuration. The page stays a server component; only these
   three leaves hydrate.
   ══════════════════════════════════════════════════════════════ */

const BookingCtx = createContext(null);

export function BookingProvider({ pkg, children }) {
  const booking = useBooking(pkg);
  const value = useMemo(() => ({ pkg, ...booking }), [pkg, booking]);
  return <BookingCtx.Provider value={value}>{children}</BookingCtx.Provider>;
}

function useBookingCtx(component) {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error(`<${component}> must be rendered inside <BookingProvider>`);
  return ctx;
}

/* ══════════════════════════════════════════════════════════════
   Sticky desktop rail
   ══════════════════════════════════════════════════════════════ */

export function BookingRail() {
  const { pkg, cfg, set, q, waHref } = useBookingCtx('BookingRail');
  const save = pkg.price.original - pkg.price.discounted;

  return (
    <aside className="lux-rail-book" aria-label="Booking">
      <div className="lux-rail-book__inner">
        <span className="lux-eyebrow">From</span>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
          <span className="lux-figure">{inr(q.perPerson)}</span>
          <span className="lux-caption">per person</span>
        </div>

        {save > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
            <s style={{ color: 'var(--ink-faint)', fontSize: 14 }}>{inr(pkg.price.original)}</s>
            <span className="lux-pill lux-pill--gold">Save {inr(save)}</span>
          </div>
        )}

        <hr className="lux-rule" style={{ margin: '24px 0' }} />

        <label className="lux-field">
          <span className="lux-field__l">Preferred start date</span>
          <span className="lux-field__c">
            <Calendar size={15} aria-hidden="true" />
            <input
              type="date"
              value={cfg.date}
              min="2026-04-19"
              max="2026-11-13"
              onChange={(e) => set({ date: e.target.value })}
              aria-label="Preferred start date"
            />
          </span>
        </label>

        <div className="lux-field" style={{ marginTop: 16 }}>
          <span className="lux-field__l">Travellers</span>
          <div style={{ display: 'grid', gap: 10, marginTop: 8 }}>
            <Stepper label="Adults" value={cfg.adults} min={1} max={30} onChange={(v) => set({ adults: v })} />
            <Stepper label="Children under 10" value={cfg.children} min={0} max={12} onChange={(v) => set({ children: v })} />
          </div>
        </div>

        <dl className="lux-facts" style={{ marginTop: 22 }}>
          <div className="lux-facts__row"><dt className="lux-facts__k">Duration</dt><dd className="lux-facts__v">{pkg.duration.nights}N / {pkg.duration.days}D</dd></div>
          <div className="lux-facts__row"><dt className="lux-facts__k">Hotels</dt><dd className="lux-facts__v">{q.hotel.label}</dd></div>
          <div className="lux-facts__row"><dt className="lux-facts__k">Vehicle</dt><dd className="lux-facts__v">{q.vehicle.label}</dd></div>
          {q.discount > 0 && (
            <div className="lux-facts__row">
              <dt className="lux-facts__k">Group saving</dt>
              <dd className="lux-facts__v" style={{ color: 'var(--teal-dark)' }}>−{inr(q.discount)} ({Math.round(q.discountPct * 100)}%)</dd>
            </div>
          )}
          <div className="lux-facts__row">
            <dt className="lux-facts__k">Total</dt>
            <dd className="lux-facts__v" style={{ fontSize: 18, fontFamily: 'var(--font-display)' }}>{inr(q.total)}</dd>
          </div>
        </dl>

        <div style={{ display: 'grid', gap: 9, marginTop: 24 }}>
          <a href={waHref} target="_blank" rel="nofollow noopener noreferrer" className="lux-btn lux-btn--gold lux-btn--wide">
            <MessageCircle size={15} /> Check availability
          </a>
          <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="lux-btn lux-btn--ghost lux-btn--wide">
            <Phone size={14} /> {SITE.phone}
          </a>
          <a href="#cost" className="lux-btn lux-btn--ghost lux-btn--wide">
            Build your own costing
          </a>
        </div>

        <p className="lux-caption" style={{ marginTop: 18, display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.6 }}>
          <ShieldCheck size={14} style={{ flex: 'none', marginTop: 2, color: 'var(--teal)' }} />
          25% holds the booking. Written costing before you pay anything.
        </p>
      </div>
    </aside>
  );
}

/* ══════════════════════════════════════════════════════════════
   Mobile bar
   ══════════════════════════════════════════════════════════════ */

export function BookingBar() {
  const { q, waHref } = useBookingCtx('BookingBar');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="lux-bookbar"
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          exit={{ y: '110%' }}
          transition={{ duration: 0.42, ease: EASE }}
        >
          <div>
            <span className="lux-caption" style={{ display: 'block' }}>From · per person</span>
            <strong style={{ fontFamily: 'var(--font-display)', fontSize: 21, color: 'var(--ink)', display: 'block', marginTop: 2 }}>
              {inr(q.perPerson)}
            </strong>
          </div>
          <div style={{ display: 'flex', gap: 8, flex: 'none' }}>
            <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="lux-btn lux-btn--ghost" style={{ padding: '12px 16px', minHeight: 46 }} aria-label="Call us">
              <Phone size={16} />
            </a>
            <a href={waHref} target="_blank" rel="nofollow noopener noreferrer" className="lux-btn lux-btn--gold" style={{ padding: '12px 20px', minHeight: 46 }}>
              <MessageCircle size={15} /> Enquire
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ══════════════════════════════════════════════════════════════
   Full cost builder
   ══════════════════════════════════════════════════════════════ */

export function CostBuilder() {
  const { pkg, cfg, set, toggleExtra, q, waHref } = useBookingCtx('CostBuilder');

  return (
    <div className="lux-cost">
      <div className="lux-cost__controls">
        <Group title="Who is travelling">
          <Stepper label="Adults" value={cfg.adults} min={1} max={30} onChange={(v) => set({ adults: v })} />
          <Stepper label="Children under 10" value={cfg.children} min={0} max={12} onChange={(v) => set({ children: v })} />
          <p className="lux-caption" style={{ marginTop: 10 }}>
            Children under 10 sharing a bed are charged at {Math.round((1 - PRICING.childDiscount) * 100)}% of the adult rate.
            Groups of six or more earn an automatic discount.
          </p>
        </Group>

        <Group title="Hotels">
          <Choices options={PRICING.hotelTiers} value={cfg.hotel} onChange={(id) => set({ hotel: id })} name="hotel" />
        </Group>

        <Group title="Vehicle">
          <Choices options={PRICING.vehicleTiers} value={cfg.vehicle} onChange={(id) => set({ vehicle: id })} name="vehicle" />
        </Group>

        <Group title="Pickup city">
          <Choices options={PRICING.pickups} value={cfg.pickup} onChange={(id) => set({ pickup: id })} name="pickup" compact />
        </Group>

        <Group title="Extra nights">
          <Stepper label="Nights added to the itinerary" value={cfg.extraNights} min={0} max={7} onChange={(v) => set({ extraNights: v })} />
          <p className="lux-caption" style={{ marginTop: 10 }}>
            {inr(PRICING.extraNight)} per person per night, including hotel and meals.
          </p>
        </Group>

        <Group title="Add-ons">
          <div style={{ display: 'grid', gap: 2 }}>
            {PRICING.extras.map((e) => {
              const on = cfg.extras.includes(e.id);
              return (
                <button
                  key={e.id}
                  type="button"
                  className={`lux-choice${on ? ' is-on' : ''}`}
                  onClick={() => toggleExtra(e.id)}
                  aria-pressed={on}
                >
                  <span className="lux-choice__box" aria-hidden="true">{on && <Check size={12} strokeWidth={3} />}</span>
                  <span style={{ minWidth: 0 }}>
                    <span className="lux-choice__t">{e.label}</span>
                    <span className="lux-choice__d">{e.desc}</span>
                  </span>
                  <span className="lux-choice__p">
                    {inr(e.price)}
                    <span className="lux-caption" style={{ display: 'block', marginTop: 2 }}>{e.unit}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </Group>
      </div>

      {/* ── Live summary ─────────────────────────────── */}
      <div className="lux-cost__out">
        <div className="lux-cost__out-inner">
          <span className="lux-eyebrow">Your costing</span>

          <motion.span
            key={Math.round(q.total)}
            initial={{ opacity: 0.35, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="lux-figure"
            style={{ display: 'block', marginTop: 16, fontSize: 'clamp(2.4rem,4.6vw,3.4rem)' }}
          >
            {inr(q.total)}
          </motion.span>

          <span className="lux-caption" style={{ display: 'block', marginTop: 8 }}>
            {inr(q.perPerson)} per person · {q.heads} traveller{q.heads > 1 ? 's' : ''}
          </span>

          <dl className="lux-facts" style={{ marginTop: 26 }}>
            <Row k="Base rate" v={`${inr(pkg.price.discounted)} pp`} />
            <Row k="Hotels" v={`${q.hotel.label}${q.hotel.delta ? ` · +${inr(q.hotel.delta)} pp` : ''}`} />
            <Row k="Vehicle" v={`${q.vehicle.label}${q.vehicle.delta ? ` · +${inr(q.vehicle.delta)} pp` : ''}`} />
            <Row k="Pickup" v={`${q.pickup.label}${q.pickup.delta ? ` · +${inr(q.pickup.delta)} pp` : ''}`} />
            {cfg.extraNights > 0 && <Row k="Extra nights" v={`${cfg.extraNights} × ${inr(PRICING.extraNight)} pp`} />}
            {q.extrasPerPerson > 0 && <Row k="Add-ons" v={`+${inr(q.extrasPerPerson)} pp`} />}
            {q.discount > 0 && <Row k="Group discount" v={`−${inr(q.discount)}`} tone="teal" />}
          </dl>

          <div style={{ display: 'grid', gap: 9, marginTop: 26 }}>
            <a href={waHref} target="_blank" rel="nofollow noopener noreferrer" className="lux-btn lux-btn--gold lux-btn--wide">
              <MessageCircle size={15} /> Send this costing on WhatsApp
            </a>
            <button type="button" onClick={() => window.print()} className="lux-btn lux-btn--ghost lux-btn--wide">
              <Download size={14} /> Download itinerary PDF
            </button>
          </div>

          <p className="lux-caption" style={{ marginTop: 18, lineHeight: 1.65 }}>
            Indicative. Hill hotel rates move with the yatra calendar, so we confirm the final
            figure in writing against your dates before any payment.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Controls ───────────────────────────────────────────────── */

function Group({ title, children }) {
  return (
    <fieldset className="lux-group">
      <legend className="lux-eyebrow">{title}</legend>
      <div style={{ marginTop: 18 }}>{children}</div>
    </fieldset>
  );
}

function Row({ k, v, tone }) {
  return (
    <div className="lux-facts__row">
      <dt className="lux-facts__k">{k}</dt>
      <dd className="lux-facts__v" style={tone === 'teal' ? { color: 'var(--teal-dark)' } : undefined}>{v}</dd>
    </div>
  );
}

function Stepper({ label, value, min, max, onChange }) {
  return (
    <div className="lux-stepper">
      <span className="lux-stepper__l">{label}</span>
      <span className="lux-stepper__c">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`Decrease ${label}`}>
          <Minus size={14} strokeWidth={2} />
        </button>
        <output aria-live="polite">{value}</output>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`Increase ${label}`}>
          <Plus size={14} strokeWidth={2} />
        </button>
      </span>
    </div>
  );
}

function Choices({ options, value, onChange, name, compact = false }) {
  return (
    <div style={{ display: 'grid', gap: 2 }} role="radiogroup" aria-label={name}>
      {options.map((o) => {
        const on = value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={on}
            className={`lux-choice${on ? ' is-on' : ''}`}
            onClick={() => onChange(o.id)}
          >
            <span className="lux-choice__box lux-choice__box--radio" aria-hidden="true">
              {on && <span className="lux-choice__dot" />}
            </span>
            <span style={{ minWidth: 0 }}>
              <span className="lux-choice__t">{o.label}</span>
              {!compact && o.desc && <span className="lux-choice__d">{o.desc}</span>}
            </span>
            <span className="lux-choice__p">{o.delta ? `+${inr(o.delta)}` : 'Included'}</span>
          </button>
        );
      })}
    </div>
  );
}
