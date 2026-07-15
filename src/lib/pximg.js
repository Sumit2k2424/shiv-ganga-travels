// Right-size Pexels CDN images at render time.
// Pexels resizes via query params, so one master URL can serve every
// breakpoint - we just rewrite w/h to match what the layout actually renders.
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
