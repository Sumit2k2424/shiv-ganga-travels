'use client';
import { useEffect } from 'react';

/* Sitewide lead-event tracker.
   One global click listener (event delegation) catches every WhatsApp,
   tel: and enquire CTA across all ~200 pages — no per-page wiring needed.
   Events are beaconed to /api/lead which appends a row to the owner's
   Google Sheet (date, time, type, page, package, number, name, detail).
   Also listens for the custom 'sgt:lead' event so form components
   (LeadPopup etc.) can report visitor name + phone on submit. */

const RECENT = new Map(); // dedupe double-fires (touch + click)

function packageFromPath(path) {
  const p = path.toLowerCase();
  if (p.startsWith('/packages/')) {
    return p.split('/')[2].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
  const MAP = [
    ['char-dham-helicopter', 'Char Dham Helicopter'],
    ['do-dham',              'Do Dham Yatra'],
    ['char-dham',            'Char Dham Yatra'],
    ['kedarnath',            'Kedarnath Yatra'],
    ['badrinath',            'Badrinath Yatra'],
    ['yamunotri',            'Yamunotri Yatra'],
    ['gangotri',             'Gangotri Yatra'],
    ['chopta',               'Chopta Tungnath'],
    ['cab',                  'Cab Booking'],
    ['hotel',                'Hotel Enquiry'],
  ];
  for (const [k, v] of MAP) if (p.includes(k)) return v;
  return '';
}

function send(payload) {
  const key = payload.type + payload.number + payload.package;
  const now = Date.now();
  if (RECENT.get(key) > now - 5000) return; // same tap within 5s
  RECENT.set(key, now);
  try {
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/lead', new Blob([body], { type: 'application/json' }));
    } else {
      fetch('/api/lead', { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'application/json' } });
    }
  } catch { /* never break the UI for tracking */ }
}

export default function LeadTracker() {
  useEffect(() => {
    function onClick(e) {
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      let type = '', number = '', detail = '';

      if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
        type = 'WhatsApp';
        const m = href.match(/wa\.me\/(\d+)/) || href.match(/phone=(\d+)/);
        number = m ? '+' + m[1] : '';
        try {
          const txt = new URL(href, location.origin).searchParams.get('text') || '';
          detail = decodeURIComponent(txt).replace(/\n/g, ' | ').slice(0, 200);
        } catch {}
      } else if (href.startsWith('tel:')) {
        type = 'Call';
        number = href.slice(4);
      } else if (a.dataset.enquire !== undefined || /enquir/i.test(a.textContent || '')) {
        type = 'Enquire';
        detail = (a.textContent || '').trim().slice(0, 100);
      } else return;

      // package: explicit data-package on the link or any ancestor wins,
      // then the quoted package name inside the WhatsApp message,
      // then inference from the page URL.
      const holder = e.target.closest('[data-package]');
      let pkg = holder ? holder.dataset.package : '';
      if (!pkg && detail) {
        const q = detail.match(/["“]([^"”]{3,60})["”]/);
        if (q) pkg = q[1];
      }
      if (!pkg) pkg = packageFromPath(location.pathname);

      send({ type, page: location.pathname, package: pkg, number, name: '', detail });
    }

    function onLeadEvent(e) {
      const d = e.detail || {};
      send({
        type   : d.type || 'Form',
        page   : location.pathname,
        package: d.package || packageFromPath(location.pathname),
        number : d.number || '',
        name   : d.name || '',
        detail : d.detail || '',
      });
    }

    document.addEventListener('click', onClick, true);
    window.addEventListener('sgt:lead', onLeadEvent);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('sgt:lead', onLeadEvent);
    };
  }, []);

  return null;
}
