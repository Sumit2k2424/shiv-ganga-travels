'use client';
import { useEffect, useRef, useState } from 'react';
import { SITE } from '@/data/packages';

/* The float is the persistent ask. When one of the page's own conversion
   surfaces is on screen it is both redundant and physically on top of it —
   it landed over the "View all packages" button of the end-of-article CTA
   on mobile, and over the pilgrims field of the hero quote form. So it
   tucks away while any of them is visible and comes back once you scroll
   past. Sticky chrome (the header quote button) is excluded, or the float
   would never show on desktop.

   A quote form counts as a conversion surface as much as a WhatsApp link
   does — it is the ask, in a different shape. */
const CONVERSION_SURFACES = [
  'a[href^="https://wa.me"]',
  'a[href^="tel:"]',
  'form',
].join(', ');

function useTuckedNearCTAs(ref) {
  const [tucked, setTucked] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const targets = Array.from(
      document.querySelectorAll(CONVERSION_SURFACES)
    ).filter(el => el !== ref.current && !el.closest('header, nav, .wa-float'));

    if (!targets.length) return;

    const visible = new Set();
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setTucked(visible.size > 0);
    }, { threshold: 0 });

    targets.forEach(t => io.observe(t));
    return () => io.disconnect();
  }, [ref]);

  return tucked;
}

function fireEvent(action, label) {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: 'engagement',
        event_label: label,
        value: 1,
      });
    }
  } catch (e) {}
}

export default function WhatsAppButton() {
  const ref = useRef(null);
  const tucked = useTuckedNearCTAs(ref);

  const message = encodeURIComponent(
    'Namaste! I would like to enquire about Char Dham Yatra packages for 2026.'
  );
  return (
    <a
      ref={ref}
      href={`https://wa.me/${SITE.whatsapp}?text=${message}`}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`wa-float${tucked ? ' wa-float--tucked' : ''}`}
      aria-hidden={tucked ? 'true' : undefined}
      tabIndex={tucked ? -1 : undefined}
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      onClick={() => fireEvent('generate_lead', 'whatsapp_float_button')}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.85L0 24l6.335-1.503A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.68-.49-5.23-1.35l-.374-.213-3.884.921.977-3.775-.233-.387A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    </a>
  );
}
