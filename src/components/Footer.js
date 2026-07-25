/* ══════════════════════════════════════════════════════════════
   Footer.

   Two jobs, in this order: close the sale, then carry the internal
   link graph. Every route from the previous footer survives in
   footerLinks.js — the presentation changed, the link architecture
   did not, because that is what the site's crawl depth depends on.

   Server component. No client JS.
   ══════════════════════════════════════════════════════════════ */

import Link from 'next/link';
import { SITE } from '@/data/packages';
import { REVIEWS } from '@/data/experience';
import Icon, { WhatsAppIcon } from '@/components/Icon';
import { COLS, LANGUAGE_COL } from '@/components/footerLinks';

const WA_HREF = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  'Namaste! I want to plan a Char Dham Yatra for 2026. Please share options.'
)}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.6)' }}>
      {/* ── Closing call ──────────────────────────────── */}
      <div className="lux-wrap" style={{ paddingTop: 'clamp(56px, 7vw, 96px)', paddingBottom: 'clamp(44px, 5vw, 68px)' }}>
        <div className="lux-footer__top">
          <div style={{ maxWidth: 520 }}>
            <span className="lux-eyebrow lux-eyebrow--light">Shiv Ganga Travels</span>
            <p className="lux-display lux-display--md" style={{ color: '#fff', marginTop: 20 }}>
              Speak to the people who actually run the trip.
            </p>
            <p className="lux-body" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14.5, marginTop: 18 }}>
              Haridwar’s Char Dham specialist since {SITE.established}. Fifty thousand pilgrims,
              zero agent commission, and one phone number that a person answers.
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 30 }}>
              <a href={WA_HREF} target="_blank" rel="nofollow noopener noreferrer" className="lux-btn lux-btn--gold">
                <WhatsAppIcon size={15} /> WhatsApp us
              </a>
              <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="lux-btn lux-btn--ghost-light">
                <Icon name="phone" size={14} /> {SITE.phone}
              </a>
            </div>
          </div>

          <dl className="lux-facts lux-footer__facts">
            <div className="lux-facts__row">
              <dt className="lux-facts__k">Office</dt>
              <dd className="lux-facts__v">{SITE.address}</dd>
            </div>
            <div className="lux-facts__row">
              <dt className="lux-facts__k">Hours</dt>
              <dd className="lux-facts__v">7:00 AM – 9:00 PM, every day</dd>
            </div>
            <div className="lux-facts__row">
              <dt className="lux-facts__k">Email</dt>
              <dd className="lux-facts__v">
                <a href={`mailto:${SITE.email}`} style={{ color: 'inherit' }}>{SITE.email}</a>
              </dd>
            </div>
            <div className="lux-facts__row">
              <dt className="lux-facts__k">Second number</dt>
              <dd className="lux-facts__v">
                <a href={`tel:${SITE.phone2.replace(/-/g, '')}`} style={{ color: 'inherit' }}>{SITE.phone2}</a>
              </dd>
            </div>
            <div className="lux-facts__row">
              <dt className="lux-facts__k">Rating</dt>
              <dd className="lux-facts__v">
                <a href={REVIEWS.url} target="_blank" rel="nofollow noopener noreferrer" style={{ color: 'inherit' }}>
                  {REVIEWS.rating} / 5 · {REVIEWS.count} Google reviews
                </a>
              </dd>
            </div>
            <div className="lux-facts__row">
              <dt className="lux-facts__k">2026 season</dt>
              <dd className="lux-facts__v">April 19 – November 13</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ── Link architecture ─────────────────────────── */}
      <div style={{ borderTop: '1px solid var(--rule-light-soft)' }}>
        <div className="lux-wrap" style={{ paddingTop: 'clamp(40px, 5vw, 60px)', paddingBottom: 'clamp(36px, 4vw, 52px)' }}>
          <nav className="lux-footer__grid" aria-label="Footer">
            {COLS.map((col) => (
              <div key={col.heading}>
                <h2 className="lux-footer__h">{col.heading}</h2>
                <ul className="lux-footer__list">
                  {col.links.map((l) => (
                    <li key={l.h + l.l}>
                      <Link href={l.h}>{l.l}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="lux-footer__h">{LANGUAGE_COL.heading}</h2>
              <ul className="lux-footer__list">
                {LANGUAGE_COL.links.map((l) => (
                  <li key={l.h}>
                    <Link href={l.h}>{l.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* ── Legal ─────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid var(--rule-light-soft)' }}>
        <div className="lux-wrap lux-footer__legal">
          <p style={{ margin: 0 }}>
            © {year} {SITE.name}. Registered with the Uttarakhand Tourism Development Board.
          </p>
          <div style={{ display: 'flex', gap: '10px 24px', flexWrap: 'wrap' }}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/sitemap-page">Sitemap</Link>
            <Link href="/review">Leave a review</Link>
            <a href={REVIEWS.url} target="_blank" rel="nofollow noopener noreferrer">Google</a>
            <a href="https://www.instagram.com/shivgangatravels/" target="_blank" rel="nofollow noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
