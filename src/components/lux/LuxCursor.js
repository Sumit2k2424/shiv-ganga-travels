'use client';
import { useEffect, useRef } from 'react';

/* ══════════════════════════════════════════════════════════════
   LuxCursor — a restrained take on the "magnetic cursor" pattern
   seen on agency sites like cuberto.com.

   Deliberately NOT a full custom-cursor replacement: this is a
   pilgrimage booking site, and hiding the native cursor site-wide
   is a real usability risk on forms and the WhatsApp checkout flow
   if this script ever misbehaves. Instead the native cursor stays,
   and a small gold ring trails it — growing into a text label over
   anything tagged `data-cursor="Label"`.

   Two independent, fully opt-in effects (inert everywhere until an
   element carries the attribute):
     · data-cursor="Label"  → the ring grows and shows the label
     · data-magnetic        → the element eases toward the pointer
                               while hovered, springs back on leave

   Fine-pointer devices only; a full no-op under prefers-reduced-motion
   or on touch. Follows the same seen-WeakSet + MutationObserver
   pattern as LuxMotion so late-mounted content (drawers, client
   widgets) gets wired up automatically.
   ══════════════════════════════════════════════════════════════ */
export default function LuxCursor() {
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ring = ringRef.current;
    if (!fine || reduced || !ring) return;

    document.documentElement.classList.add('lux-cursor-active');
    const cleanups = [];

    /* ── Ring follow — eased toward the real pointer ─────────── */
    let rx = -100, ry = -100, tx = -100, ty = -100, raf = null;
    const paint = () => {
      rx += (tx - rx) * 0.2;
      ry += (ty - ry) * 0.2;
      ring.style.transform = `translate3d(${rx.toFixed(1)}px, ${ry.toFixed(1)}px, 0)`;
      raf = requestAnimationFrame(paint);
    };
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(paint);
    cleanups.push(() => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); });

    const onWinLeave = () => ring.classList.add('lux-cursor__ring--hide');
    const onWinEnter = () => ring.classList.remove('lux-cursor__ring--hide');
    document.addEventListener('mouseleave', onWinLeave);
    document.addEventListener('mouseenter', onWinEnter);
    cleanups.push(() => {
      document.removeEventListener('mouseleave', onWinLeave);
      document.removeEventListener('mouseenter', onWinEnter);
    });

    /* ── Per-element wiring, re-scanned as new nodes mount ───── */
    const wiredLabel = new WeakSet();
    const wiredMag = new WeakSet();

    const wireLabel = (el) => {
      if (wiredLabel.has(el)) return;
      wiredLabel.add(el);
      const enter = () => {
        ring.classList.add('lux-cursor__ring--label');
        if (labelRef.current) labelRef.current.textContent = el.getAttribute('data-cursor') || '';
      };
      const leave = () => ring.classList.remove('lux-cursor__ring--label');
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
      cleanups.push(() => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave); });
    };

    const wireMagnetic = (el) => {
      if (wiredMag.has(el)) return;
      wiredMag.add(el);
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate3d(${(mx * 0.25).toFixed(1)}px, ${(my * 0.25).toFixed(1)}px, 0)`;
      };
      const leave = () => { el.style.transform = ''; };
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', leave);
      cleanups.push(() => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
        el.style.transform = '';
      });
    };

    const scan = (root = document) => {
      root.querySelectorAll('[data-cursor]').forEach(wireLabel);
      root.querySelectorAll('[data-magnetic]').forEach(wireMagnetic);
    };
    scan();

    const mo = new MutationObserver((records) => {
      for (const r of records) {
        for (const node of r.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.matches?.('[data-cursor]')) wireLabel(node);
          if (node.matches?.('[data-magnetic]')) wireMagnetic(node);
          scan(node);
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    cleanups.push(() => mo.disconnect());

    return () => {
      document.documentElement.classList.remove('lux-cursor-active');
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div ref={ringRef} className="lux-cursor__ring" aria-hidden="true">
      <span ref={labelRef} className="lux-cursor__ring-label" />
    </div>
  );
}
