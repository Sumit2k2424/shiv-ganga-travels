// Right-size Pexels CDN images at render time.
// Pexels resizes via query params, so one master URL can serve every
// breakpoint - we just rewrite w/h to match what the layout actually renders.
//
// NOTE (Aug 2026): Screaming Frog flags 34 of these crops as "over 100 kB".
// Routing them through Next's optimizer (/_next/image) was tried and reverted —
// measured, it is not a win. Pexels already negotiates AVIF, and re-encoding
// that AVIF at the same pixel width produced *larger* files (+17% on the 828px
// card tier, ±0% on the 1920px hero tier) while also spending Vercel image
// transformations. Pexels ignores `q` and `dpr` too (both verified no-ops), so
// the only real lever on these bytes is asking for a smaller crop — a design
// call, not a compression one. The sizes are inherent to full-bleed hero art
// (2000x875 ≈ 1.75 MP), not a missing optimization.
export function pxAt(url, w, h) {
  if (!url || !url.includes('images.pexels.com')) return url;
  try {
    const u = new URL(url);
    u.searchParams.set('w', String(w));
    u.searchParams.set('h', String(h));
    u.searchParams.set('fit', 'crop');
    return u.toString();
  } catch { return url; }
}

export const pxSrcSet = (url, pairs) =>
  url && url.includes('images.pexels.com')
    ? pairs.map(([w, h]) => `${pxAt(url, w, h)} ${w}w`).join(', ')
    : undefined;
