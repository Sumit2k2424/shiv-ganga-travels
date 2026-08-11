'use client';

/* ══════════════════════════════════════════════════════════════
   LuxCursorGate — keeps LuxCursor out of the bundle on phones.

   LuxCursor is fine-pointer-only by design: its effect() bails
   immediately on touch and under prefers-reduced-motion. But bailing
   at runtime still means every phone downloads, parses and mounts it
   for nothing, and it renders two DOM nodes that never become visible.

   Importing it through a dynamic import behind the same two media
   queries moves that cost off the initial bundle entirely — the chunk
   is only ever requested by a device that will actually use it.

   The gate itself is deliberately tiny, because whatever is in here
   DOES ship to every device. Keep it that way: no imports beyond
   React, no logic beyond the two matchMedia checks.
   ══════════════════════════════════════════════════════════════ */

import { useEffect, useState } from 'react';

export default function LuxCursorGate() {
  const [Cursor, setCursor] = useState(null);

  useEffect(() => {
    // Same two conditions LuxCursor checks internally. Kept in sync
    // deliberately — if it grows a third condition, add it here too, or
    // the chunk gets fetched for a device that will not use it.
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let alive = true;
    import('@/components/lux/LuxCursor')
      .then((m) => { if (alive) setCursor(() => m.default); })
      .catch(() => { /* decorative — a missing ring is not worth an error */ });

    return () => { alive = false; };
  }, []);

  return Cursor ? <Cursor /> : null;
}
