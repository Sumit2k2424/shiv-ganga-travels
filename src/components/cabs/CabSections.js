/* ══════════════════════════════════════════════════════════════
   Cab section building blocks — ALL server components.

   No 'use client' anywhere in this file, so none of it ships JS.
   Motion comes from the data-lux-* attributes that the single
   LuxMotion island in the root layout picks up, exactly like
   components/lux/primitives.js.

   These render on all three cab page tiers — route, destination
   and origin — which is the whole point: the trust blocks that
   competitors omit (verified-by, exclusions, cancellation terms,
   operator identity) appear everywhere for free.
   ══════════════════════════════════════════════════════════════ */

import Link from 'next/link';
import Icon from '@/components/Icon';
import { Reveal, Eyebrow, Pill } from '@/components/lux/primitives';
import { SITE } from '@/data/packages';
import { FARE_INCLUDES, FARE_EXCLUDES, EXTRAS, CANCELLATION, ROAD_RULES, OPERATOR } from '@/data/cabs/policy';
import { yearsOnRoad } from '@/data/cabs/experts';

/* ── Hero fact pills ───────────────────────────────────────── */

export function FactPills({ items = [] }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 22 }}>
      {items.filter(Boolean).map(([icon, value]) => (
        <Pill key={value} tone="light">
          <Icon name={icon} size={13} /> {value}
        </Pill>
      ))}
    </div>
  );
}

/* ── Road-checked-by strip ─────────────────────────────────────
   The single biggest gap in every competing route page we looked
   at: none of them put a human or a date on the content. We only
   claim what is true — if no individual is credited on the route,
   this attributes to the house team and stamps the review date
   from SITE.lastUpdated rather than inventing a drive date.      */

export function VerifiedStrip({ expert, lastDrivenOn, subject }) {
  const years = yearsOnRoad(expert);
  const driven = lastDrivenOn
    ? new Date(lastDrivenOn).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
    : null;

  return (
    <Reveal>
      <div
        className="lux-card"
        style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 18px', margin: '4px 0 8px' }}
      >
        <span style={{ color: 'var(--teal)', flex: 'none', marginTop: 2 }}>
          <Icon name="badgeCheck" size={20} />
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink)' }}>
            {driven
              ? `Road-checked by ${expert.name} · last driven ${driven}`
              : `Written and checked by ${expert.name}`}
          </div>
          <div className="lux-caption" style={{ marginTop: 3 }}>
            {expert.role}
            {years ? ` · ${years} years running ${subject || 'these routes'}` : ''}
          </div>
          <p className="lux-body" style={{ fontSize: '0.84rem', marginTop: 8 }}>
            {expert.bio}{' '}
            <Link href={expert.url || '/about'} className="lux-link">
              About us <Icon name="arrowRight" size={12} />
            </Link>
          </p>
          <p className="lux-caption" style={{ marginTop: 8 }}>
            Fares and road notes on this page reviewed {SITE.lastUpdated}.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ── Fare table ────────────────────────────────────────────────
   Takes the [name, seats, band] tuples that both the hand-priced
   overrides and computeFares() produce.                          */

export function FareTable({ fares = [], caption }) {
  if (!fares.length) return null;
  return (
    <>
      <div className="lux-matrix-wrap">
        <table className="lux-matrix">
          <thead>
            <tr>
              <th scope="col">Vehicle</th>
              <th scope="col">Seats</th>
              <th scope="col">One-way fare</th>
            </tr>
          </thead>
          <tbody>
            {fares.map(([name, seats, band]) => (
              <tr key={name}>
                <th scope="row">{name}</th>
                <td>{seats}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{band}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="lux-caption" style={{ marginTop: 12 }}>
        {caption ||
          'Indicative 2026 one-way bands. We confirm one fixed all-in price on enquiry — no per-km surprises, no hill surcharge sprung on you at Rudraprayag. Round trips with halts are quoted as a package.'}
      </p>
    </>
  );
}

/* ── Fare comparison across origins (destination pages) ──────── */

export function OriginFareTable({ rows = [] }) {
  if (!rows.length) return null;
  return (
    <div className="lux-matrix-wrap">
      <table className="lux-matrix">
        <thead>
          <tr>
            <th scope="col">From</th>
            <th scope="col">Distance</th>
            <th scope="col">Drive time</th>
            <th scope="col">Sedan from</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.href}>
              <th scope="row">{r.from}</th>
              <td>{r.distance}</td>
              <td style={{ whiteSpace: 'nowrap' }}>{r.time}</td>
              <td style={{ whiteSpace: 'nowrap', color: 'var(--gold-dark)', fontWeight: 600 }}>{r.fare}</td>
              <td>
                <Link href={r.href} className="lux-link">
                  Fares &amp; route <Icon name="arrowRight" size={12} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── What the fare covers ──────────────────────────────────────
   Publishing exclusions is unusual in this market and it is the
   cheapest credibility on the page. It also removes the single
   most common post-booking argument.                             */

export function InclusionsGrid({ extras = true }) {
  return (
    <>
      <div className="lux-grid lux-grid--2" data-lux-stagger="">
        <div className="lux-card" style={{ padding: 22 }}>
          <Eyebrow plain>Included in the fare</Eyebrow>
          <ul className="lux-list lux-list--check" style={{ marginTop: 14 }}>
            {FARE_INCLUDES.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div className="lux-card" style={{ padding: 22 }}>
          <Eyebrow plain>Not included</Eyebrow>
          <ul className="lux-list lux-list--cross" style={{ marginTop: 14 }}>
            {FARE_EXCLUDES.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      {extras && (
        <div className="lux-grid lux-grid--2" style={{ marginTop: 18 }} data-lux-stagger="">
          {EXTRAS.map((e) => (
            <div key={e.label} className="lux-minifact">
              <span className="lux-minifact__i">
                <Icon name="rupee" size={16} />
              </span>
              <span>
                <span className="lux-minifact__k">{e.label}</span>
                <span className="lux-minifact__v">{e.value}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/* ── Cancellation terms ─────────────────────────────────────── */

/**
 * `compact` renders a two-line summary and defers the full grid to
 * /cancellation-policy, which is the canonical page for these terms.
 *
 * The route and hub templates pass compact, because the full table was
 * rendering byte-identically on 53 cab pages and was a measurable share
 * of why the family read as near-duplicate to Google. The terms are not
 * being hidden — the headline still states the 48-hour rule up front and
 * the link is one click. Pages that are ABOUT the terms render the table.
 */
export function CancellationTerms({ compact = false, lede }) {
  if (compact) {
    return (
      <div className="lux-card" style={{ padding: 22 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
          <span style={{ color: 'var(--teal)', flex: 'none' }}>
            <Icon name="shieldCheck" size={18} />
          </span>
          <strong style={{ fontSize: '0.95rem', color: 'var(--ink)' }}>{CANCELLATION.headline}</strong>
        </div>
        {lede && <p className="lux-body" style={{ fontSize: '0.86rem', marginBottom: 10 }}>{lede}</p>}
        <p className="lux-caption" style={{ margin: 0 }}>
          {CANCELLATION.note}{' '}
          <Link href="/cancellation-policy" className="lux-link">
            Full cancellation terms
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="lux-card" style={{ padding: 22 }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
        <span style={{ color: 'var(--teal)', flex: 'none' }}>
          <Icon name="shieldCheck" size={18} />
        </span>
        <strong style={{ fontSize: '0.95rem', color: 'var(--ink)' }}>{CANCELLATION.headline}</strong>
      </div>
      <div className="lux-matrix-wrap">
        <table className="lux-matrix" style={{ minWidth: 420 }}>
          <tbody>
            {CANCELLATION.rows.map(([when, what]) => (
              <tr key={when}>
                <th scope="row">{when}</th>
                <td>{what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="lux-caption" style={{ marginTop: 12 }}>
        {CANCELLATION.note}
      </p>
    </div>
  );
}

/* ── Route stops ───────────────────────────────────────────── */

export function RouteStops({ via, stops = [] }) {
  return (
    <>
      {via && (
        <Reveal>
          <div className="lux-card" style={{ padding: '14px 18px', marginBottom: 18, display: 'flex', gap: 10 }}>
            <span style={{ color: 'var(--teal)', flex: 'none', marginTop: 2 }}>
              <Icon name="route" size={16} />
            </span>
            <span className="lux-body" style={{ fontSize: '0.88rem' }}>
              <strong style={{ color: 'var(--ink)' }}>Via:</strong> {via}
            </span>
          </div>
        </Reveal>
      )}
      <div className="lux-grid lux-grid--3" data-lux-stagger="">
        {stops.map(([place, why]) => (
          <div key={place} className="lux-card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--ink)' }}>{place}</div>
            <p className="lux-body" style={{ fontSize: '0.84rem', marginTop: 6 }}>
              {why}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Rules of the road ─────────────────────────────────────── */

export function RoadRules({ items = ROAD_RULES }) {
  return (
    <div className="lux-grid lux-grid--2" data-lux-stagger="">
      {items.map((r) => (
        <div key={r.title} className="lux-card" style={{ padding: 22 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: 'var(--gold-dark)', flex: 'none' }}>
              <Icon name="alert" size={16} />
            </span>
            <strong style={{ fontSize: '0.92rem', color: 'var(--ink)' }}>{r.title}</strong>
          </div>
          <p className="lux-body" style={{ fontSize: '0.86rem' }}>
            {r.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Local tip callout ─────────────────────────────────────── */

export function LocalTip({ children }) {
  if (!children) return null;
  return (
    <Reveal>
      <div
        className="lux-card"
        style={{ padding: '16px 18px', display: 'flex', gap: 12, borderLeft: '3px solid var(--gold)' }}
      >
        <span style={{ color: 'var(--gold-dark)', flex: 'none', marginTop: 2 }}>
          <Icon name="info" size={17} />
        </span>
        <span className="lux-body" style={{ fontSize: '0.9rem' }}>
          <strong style={{ color: 'var(--ink)' }}>From our drivers:</strong> {children}
        </span>
      </div>
    </Reveal>
  );
}

/* ── Operator identity ─────────────────────────────────────────
   Address, years, permits, a real phone number. Every aggregator
   page we studied omitted all of it.                             */

/**
 * `lede` is a route- or hub-specific sentence naming the journey this
 * card is vouching for, so the block is not identical across the 53 cab
 * pages that render it. `credentials` collapses to a link when the full
 * list would just repeat what /about already says.
 */
export function OperatorCard({ lede, showCredentials = true }) {
  return (
    <div className="lux-card" style={{ padding: 24 }}>
      <Eyebrow plain>Who you are booking with</Eyebrow>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.15rem',
          color: 'var(--ink)',
          margin: '12px 0 6px',
        }}
      >
        {OPERATOR.legalName}
      </div>
      <p className="lux-body" style={{ fontSize: '0.86rem' }}>
        {lede || `${OPERATOR.role}. Operating from Haridwar since ${OPERATOR.since}.`}
      </p>
      {showCredentials ? (
        <ul className="lux-list lux-list--check" style={{ marginTop: 14 }}>
          {OPERATOR.credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      ) : (
        <p className="lux-caption" style={{ marginTop: 12 }}>
          {OPERATOR.role}, operating from Haridwar since {OPERATOR.since}.{' '}
          <Link href="/about" className="lux-link">
            Registration, fleet and credentials
          </Link>
          .
        </p>
      )}
      <div style={{ display: 'grid', gap: 10, marginTop: 18 }}>
        <div className="lux-minifact">
          <span className="lux-minifact__i">
            <Icon name="map" size={16} />
          </span>
          <span>
            <span className="lux-minifact__k">Office</span>
            <span className="lux-minifact__v">{SITE.address}</span>
          </span>
        </div>
        <div className="lux-minifact">
          <span className="lux-minifact__i">
            <Icon name="phone" size={16} />
          </span>
          <span>
            <span className="lux-minifact__k">Speak to us</span>
            <span className="lux-minifact__v">
              <a href={`tel:${SITE.phone}`} className="lux-link">
                {SITE.phone}
              </a>
              {' · '}
              <a href={`tel:${SITE.phone2}`} className="lux-link">
                {SITE.phone2}
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Internal link mesh ────────────────────────────────────────
   Grouped the way the SERP thinks about it: other ways to reach
   the same place, other places from the same city, and the
   informational guides that answer the non-transactional half of
   the query without cannibalising this page.                     */

function LinkRow({ label, links }) {
  if (!links?.length) return null;
  return (
    <div style={{ marginBottom: 22 }}>
      <Eyebrow plain>{label}</Eyebrow>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 12 }}>
        {links.map(([text, href]) => (
          <Link key={href} href={href} className="lux-funnel-link">
            {text}
            <Icon name="arrowRight" size={13} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CabLinkMesh({ groups = [] }) {
  return (
    <div>
      {groups.map((g) => (
        <LinkRow key={g.label} label={g.label} links={g.links} />
      ))}
    </div>
  );
}

/* ── Closing CTA ───────────────────────────────────────────── */

export function CabCTA({ title, lede, message }) {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
  return (
    <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
      <Reveal>
        <h2 className="lux-display lux-display--lg" style={{ color: '#fff', marginBottom: 16 }}>
          {title}
        </h2>
      </Reveal>
      <Reveal>
        <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.74)', margin: '0 auto 30px' }}>
          {lede}
        </p>
      </Reveal>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a
          href={wa}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="lux-btn"
          style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}
          data-magnetic
          data-cursor="Chat"
        >
          <Icon name="chat" size={16} /> WhatsApp for a fixed quote
        </a>
        <a href={`tel:${SITE.phone}`} className="lux-btn lux-btn--ghost-light">
          <Icon name="phone" size={15} /> {SITE.phone}
        </a>
      </div>
    </div>
  );
}
