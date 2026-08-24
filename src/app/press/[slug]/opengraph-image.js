import { ImageResponse } from 'next/og';
import { getRelease, getReleaseParams } from '@/data/press';

// ── Per-release share card ─────────────────────────────────────────────────
//
// WHY THIS EXISTS
// Every release used to point og:image at the homepage /opengraph-image — a
// marketing card reading "Your Sacred Journey Starts in Haridwar", with a price
// and a star rating on it. That is the wrong artefact in two places that
// matter: WhatsApp, which is how this newsroom actually reaches Indian desks,
// and any news surface that requires an image per article. A reporter pasting a
// release link into a newsroom group saw an advert, not a story.
//
// This card carries the headline, the dateline and the word PRESS RELEASE, so
// the preview does the same job as the page.
//
// TWO SATORI TRAPS, BOTH ALREADY PAID FOR ONCE HERE
// 1. Any <div> with more than one child needs an explicit `display`. Satori
//    throws otherwise, and the route then serves 200 with a zero-byte body —
//    a silently broken image rather than an error. Every container below sets
//    display explicitly.
// 2. The bundled font has no rupee sign (U+20B9) and no arrows. These headlines
//    are full of both ("₹18,500 → ₹13,900"), and they render as tofu boxes. So
//    text is sanitised before it reaches the renderer, not after someone
//    notices the boxes. See `plain()`.

// NOTE: no `export const runtime = 'edge'` here, unlike the homepage card.
// Next refuses edge runtime together with generateStaticParams, and for a
// newsroom that publishes a handful of times a season, prerendering every card
// at build time beats rendering each one on demand: the image is then a static
// file on the CDN when a journalist pastes the link into WhatsApp, with no cold
// start on the first share — which is the exact moment it has to be fast.
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Press release — Shiv Ganga Travels, Char Dham Yatra operator, Haridwar';

export function generateStaticParams() {
  return getReleaseParams();
}

// NOTE: deliberately no `generateImageMetadata`. Adding it would nest the image
// under an id segment (…/opengraph-image/<id>), and the NewsArticle schema in
// page.js has to name this URL literally. A predictable
// /press/<slug>/opengraph-image is worth more than a per-release `alt`, since
// the headline is rendered into the card itself anyway.

/**
 * Strip glyphs the bundled font cannot draw. Every substitution keeps the
 * meaning readable in plain ASCII — a share card saying "Rs 18,500 to Rs
 * 13,900" is correct; one showing two empty boxes is not.
 */
function plain(s) {
  return String(s)
    .replace(/₹\s*/g, 'Rs ')      // ₹
    .replace(/[→⟶➔]/g, '->') // → ⟶ ➔
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')   // en/em dash
    .replace(/★/g, '*')           // ★
    .replace(/\s+/g, ' ')
    .trim();
}

const clamp = (s, n) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);

export default async function Image({ params }) {
  const r = getRelease(params.slug);

  const headline = r ? clamp(plain(r.headline), 118) : 'Press release';
  const dateline = r ? plain(`${r.dateline} · ${r.dateHuman}`) : '';
  const category = r ? plain(r.category) : 'Press';

  // Long headlines need to give up a few points rather than overflow the card.
  const headlineSize = headline.length > 88 ? 40 : headline.length > 62 ? 46 : 54;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0F2B5B 0%, #1a3d7c 55%, #0B7B8B 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '-90px', right: '-90px', width: '420px', height: '420px', borderRadius: '50%', background: 'rgba(232,146,10,0.12)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: '-70px', left: '-70px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(11,123,139,0.20)', display: 'flex' }} />

        {/* Masthead */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '38px 60px 0', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#E8920A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '23px', color: '#fff', fontWeight: '700' }}>ॐ</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '21px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.02em' }}>SHIV GANGA TRAVELS</span>
              <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.68)', letterSpacing: '0.08em' }}>HARIDWAR · EST. 2010</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ background: 'rgba(232,146,10,0.25)', border: '1px solid rgba(232,146,10,0.5)', color: '#FFD166', fontSize: '12px', padding: '5px 13px', borderRadius: '20px' }}>
              PRESS RELEASE
            </span>
            <span style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.9)', fontSize: '12px', padding: '5px 13px', borderRadius: '20px' }}>
              {category}
            </span>
          </div>
        </div>

        {/* Headline block */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px' }}>
          <div style={{ display: 'flex', fontSize: '15px', color: '#FFD166', letterSpacing: '0.12em', marginBottom: '18px', fontWeight: '600' }}>
            FOR IMMEDIATE RELEASE
          </div>
          <div style={{ display: 'flex', fontSize: `${headlineSize}px`, fontWeight: '800', color: '#FFFFFF', lineHeight: '1.16', letterSpacing: '-0.02em' }}>
            {headline}
          </div>
        </div>

        {/* Dateline foot */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 60px 34px', gap: '16px' }}>
          <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)' }}>{dateline}</span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>shivgangatravels.com/press</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
