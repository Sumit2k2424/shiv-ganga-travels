'use client';
import Link from 'next/link';
import { SITE } from '@/data/packages';

/**
 * BlogCTA — full-width conversion block for blog articles
 * variant: 'inline' (mid-article strip) | 'footer' (end-of-article card)
 * intent: 'booking' | 'info' | 'cost' | 'route' | 'registration'
 */
export default function BlogCTA({ variant = 'footer', intent = 'booking', pkg = null }) {

  const messages = {
    booking:      `Namaste! I want to book Char Dham Yatra 2026. Please share packages and availability.`,
    info:         `Namaste! I have questions about Char Dham Yatra 2026. Can you help me plan?`,
    cost:         `Namaste! I want a complete cost breakdown for Char Dham Yatra 2026. Please share.`,
    route:        `Namaste! I was reading about the Char Dham route. I want to know about packages.`,
    registration: `Namaste! I need help with Char Dham Yatra registration and booking 2026.`,
    kedarnath:    `Namaste! I want to plan Kedarnath Yatra 2026. Please share packages and trek details.`,
    packing:      `Namaste! I want to book Char Dham Yatra 2026. Please share packages and a packing checklist.`,
  };

  const waMsg = encodeURIComponent(pkg
    ? `Namaste! I want to book "${pkg}" for Char Dham Yatra 2026. Please share details.`
    : (messages[intent] || messages.booking)
  );

  const waHref = `https://wa.me/${SITE.whatsapp}?text=${waMsg}`;

  if (variant === 'inline') {
    return (
      <div style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #1A3E75 60%, var(--teal) 100%)',
        borderRadius: 14,
        padding: '20px 22px',
        margin: '36px 0',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ flex: '1 1 240px' }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#FFD166', marginBottom: 5 }}>
            Ready to book? Get a personalised quote in 2 minutes.
          </div>
          <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.78)', lineHeight: 1.6 }}>
            Direct operator · No agent commission · 15 years on these routes
          </div>
        </div>
        <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', flexShrink: 0 }}>
          <a
            href={waHref}
            target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '10px 20px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            💬 WhatsApp Quote
          </a>
          <Link
            href="/char-dham-yatra"
            style={{ background: 'rgba(255,255,255,0.14)', color: '#fff', padding: '10px 18px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.28)', whiteSpace: 'nowrap' }}
          >
            View Packages →
          </Link>
        </div>
      </div>
    );
  }

  // variant === 'footer'
  return (
    <div style={{
      background: 'var(--navy)',
      borderRadius: 16,
      overflow: 'hidden',
      marginTop: 44,
    }}>
      {/* Top strip */}
      <div style={{ background: 'var(--gold)', padding: '10px 24px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 16 }}>🙏</span>
        <span style={{ fontWeight: 800, fontSize: 13, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Plan Your Yatra — Shiv Ganga Travels, Haridwar · Est. 2010
        </span>
      </div>

      <div style={{ padding: '24px 24px 28px' }}>
        {/* Headline */}
        <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem,2.5vw,1.4rem)', fontWeight: 700, lineHeight: 1.3, marginBottom: 10 }}>
          Don&apos;t just read about Char Dham Yatra — experience it.
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
          Thousands of pilgrims have trusted us from Haridwar since 2010. We handle everything — registration, hotels, vehicles, pony bookings, and 24×7 support on-route. All you carry is your devotion.
        </p>

        {/* Trust proof row */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 22 }}>
          {[
            ['⭐', '4.9/5 Rating', '1,200+ reviews'],
            ['✅', 'No Hidden Costs', 'All-inclusive price'],
            ['📞', '24×7 Support', 'On-route helpline'],
            ['🏆', 'Est. 2010', '15 years on these routes'],
          ].map(([icon, title, sub]) => (
            <div key={title} style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 140 }}>
              <span style={{ fontSize: 20 }}>{icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 12.5, color: '#FFD166' }}>{title}</div>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a
            href={waHref}
            target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '13px 24px', borderRadius: 10, fontWeight: 800, fontSize: 14.5, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            💬 Book on WhatsApp
          </a>
          <Link
            href="/char-dham-yatra"
            style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '13px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            View All Packages →
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', padding: '13px 18px', borderRadius: 10, fontWeight: 600, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)', display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            📞 {SITE.phone}
          </a>
        </div>

        {/* Price anchor */}
        <div style={{ marginTop: 14, fontSize: 12.5, color: 'rgba(255,255,255,0.45)' }}>
          Packages from <strong style={{ color: 'rgba(255,255,255,0.75)' }}>₹19,500 per person</strong> · All-inclusive · Haridwar pickup
        </div>
      </div>
    </div>
  );
}
