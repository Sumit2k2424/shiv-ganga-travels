'use client';
import Link from 'next/link';
import { SITE } from '@/data/packages';
import { WhatsAppIcon } from '@/components/Icon';

/**
 * BlogCTA — the conversion surfaces for editorial pages.
 *
 * An article gets at most two of these, and they are deliberately unequal:
 *
 *   note    a single hairline sentence. Costs the reader nothing.
 *   inline  a quiet paper card, mid-article. Offer stated, not shouted.
 *   footer  the one loud moment, at the end, where the ask is expected.
 *
 * The earlier version repeated a saturated green block three or four times
 * per page with animated gold shimmer on every one, so nothing read as the
 * primary action. Restraint here IS the premium: one ask, in its place.
 *
 * variant: 'note' | 'inline' | 'footer'
 * intent:  'booking' | 'info' | 'cost' | 'route' | 'registration' | 'kedarnath'
 *         | 'packing' | 'char-dham' | 'badrinath'
 */

const MESSAGES = {
  booking:      `Namaste! I want to book Char Dham Yatra ${SITE.season}. Please share packages and availability.`,
  info:         `Namaste! I have questions about Char Dham Yatra ${SITE.season}. Can you help me plan?`,
  cost:         `Namaste! I want a complete cost breakdown for Char Dham Yatra ${SITE.season}. Please share.`,
  route:        `Namaste! I was reading about the Char Dham route. I want to know about packages.`,
  registration: `Namaste! I need help with Char Dham Yatra registration and booking ${SITE.season}.`,
  kedarnath:    `Namaste! I want to plan Kedarnath Yatra ${SITE.season}. Please share packages and trek details.`,
  packing:      `Namaste! I want to book Char Dham Yatra ${SITE.season}. Please share packages and a packing checklist.`,
  // 'char-dham' and 'badrinath' were in use on 11 pages without ever being
  // defined here, so both silently fell through to the generic booking copy.
  'char-dham':  `Namaste! I want to book the full Char Dham Yatra ${SITE.season}. Please share packages and availability.`,
  badrinath:    `Namaste! I want to plan a Badrinath yatra ${SITE.season}. Please share packages and darshan details.`,
};

/* Per-intent copy. The ask changes with what the reader was just reading —
   a cost article gets a quote offer, a registration article gets help with
   the portal. Same component, no second block needed. */
const COPY = {
  booking:      { eyebrow: 'Plan this yatra',   line: 'Dates, seats and a written quote — usually back within the hour.' },
  info:         { eyebrow: 'Ask before you go', line: 'Tell us your month and group size. We answer with a real itinerary, not a brochure.' },
  cost:         { eyebrow: 'Get the numbers',   line: 'A line-by-line quote for your group size — no deposit, no obligation.' },
  route:        { eyebrow: 'Plan the route',    line: 'We drive these roads all season. Ask us what your days will actually look like.' },
  registration: { eyebrow: 'Need a hand?',      line: 'We complete registration for every guest we carry — portal, permits and checkpoints.' },
  kedarnath:    { eyebrow: 'Plan Kedarnath',    line: 'Trek, pony, palki or helicopter — we book the leg that suits your group.' },
  packing:      { eyebrow: 'Plan this yatra',   line: 'Send us your dates and we will send back a kit list built for that week.' },
  'char-dham':  { eyebrow: 'Plan the full circuit', line: 'All four dhams from Haridwar, in our own vehicles. Tell us your month and group size.' },
  badrinath:    { eyebrow: 'Plan Badrinath',    line: 'The one dham with no trek. We time the itinerary around an early darshan.' },
};

function waLink(intent, pkg) {
  const text = encodeURIComponent(pkg
    ? `Namaste! I want to book "${pkg}" for Char Dham Yatra 2026. Please share details.`
    : (MESSAGES[intent] || MESSAGES.booking));
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export default function BlogCTA({
  variant = 'footer',
  intent = 'booking',
  pkg = null,
  /* Overrides for pages whose hook is genuinely specific — a daily-cap
     worry, a package price. They keep that copy instead of rebuilding a
     second card around it. `href`/`linkLabel` apply to the note variant. */
  eyebrow = null,
  line = null,
  href = null,
  linkLabel = 'See the package',
}) {
  const waHref = waLink(intent, pkg);
  const copy = COPY[intent] || COPY.booking;

  /* ── note ──────────────────────────────────────────────────────
     A rule and a sentence. For articles that already carry a full
     CTA elsewhere but want one soft hand-off mid-scroll. */
  if (variant === 'note') {
    return (
      <p className="blog-cta blog-cta--note">
        <span className="blog-cta__mark" aria-hidden="true" />
        {line || copy.line}{' '}
        {href ? (
          <Link className="blog-cta__inlinelink" href={href}>{linkLabel}</Link>
        ) : (
          <>
            <a className="blog-cta__inlinelink" href={waHref} target="_blank" rel="nofollow noopener noreferrer">Ask on WhatsApp</a>
            <span className="blog-cta__sep" aria-hidden="true">·</span>
            <Link className="blog-cta__inlinelink" href="/char-dham-yatra">See packages</Link>
          </>
        )}
      </p>
    );
  }

  /* ── inline ────────────────────────────────────────────────────
     Paper, hairline, one gold rule. Reads as a margin note in the
     article rather than an advertisement dropped into it. */
  if (variant === 'inline') {
    return (
      <aside className="blog-cta blog-cta--inline" aria-label="Plan your yatra">
        <div className="blog-cta__body">
          <span className="blog-cta__eyebrow">{eyebrow || copy.eyebrow}</span>
          <p className="blog-cta__lede">{line || copy.line}</p>
        </div>
        <div className="blog-cta__actions">
          <a
            className="blog-cta__wa-quiet"
            href={waHref}
            target="_blank" rel="nofollow noopener noreferrer"
          >
            <WhatsAppIcon size={15} color="currentColor" />
            WhatsApp us
          </a>
          <Link className="blog-cta__link" href="/char-dham-yatra">
            View packages
          </Link>
        </div>
      </aside>
    );
  }

  /* ── footer ────────────────────────────────────────────────────
     The single loud surface on the page. Proof is set as a ledger,
     not as emoji chips; the only colour that shouts is the one
     button we actually want pressed. */
  return (
    <aside className="blog-cta blog-cta--footer" aria-label="Book with Shiv Ganga Travels">
      <span className="blog-cta__rule" aria-hidden="true" />
      <span className="blog-cta__eyebrow blog-cta__eyebrow--dark">
        Shiv Ganga Travels · Haridwar · since 2010
      </span>

      <h3 className="blog-cta__title">
        Plan it with the operator, not a reseller.
      </h3>
      <p className="blog-cta__copy">
        Registration, hotels, vehicles, pony and palki bookings, and someone on the
        phone when you are standing at Sonprayag at six in the morning. You carry
        only your devotion.
      </p>

      <dl className="blog-cta__ledger">
        {[
          ['4.7 / 5', '54 Google reviews'],
          ['2010', 'Operating since'],
          ['0%', 'Agent commission'],
          ['24×7', 'On-route support'],
        ].map(([value, label]) => (
          <div key={label} className="blog-cta__ledger-item">
            <dt className="blog-cta__ledger-value">{value}</dt>
            <dd className="blog-cta__ledger-label">{label}</dd>
          </div>
        ))}
      </dl>

      <div className="blog-cta__actions">
        <a
          className="blog-cta__wa"
          href={waHref}
          target="_blank" rel="nofollow noopener noreferrer"
        >
          <WhatsAppIcon size={17} color="currentColor" />
          Book on WhatsApp
        </a>
        <Link className="blog-cta__ghost" href="/char-dham-yatra">
          View all packages
        </Link>
      </div>

      <p className="blog-cta__foot">
        From <strong>₹13,900 per person</strong>, all-inclusive, Haridwar pickup
        <span className="blog-cta__sep" aria-hidden="true">·</span>
        or call <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
      </p>
    </aside>
  );
}
