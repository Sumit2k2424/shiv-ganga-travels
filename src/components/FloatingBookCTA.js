'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/packages';

const SOCIAL_PROOF = [
  'Direct operator · zero commission',
  'Sept–Oct batches booking now',
  '4.6★ on Google · 38 reviews',
  'Free cancellation up to 30 days',
  'Founder replies personally on WhatsApp',
];

export default function FloatingBookCTA({ packageName = '' }) {
  const [visible, setVisible] = useState(false);
  const [proof, setProof] = useState(SOCIAL_PROOF[0]);

  // Show after 350px scroll
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 350);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Rotate social proof every 4s
  useEffect(() => {
    const t = setInterval(() => {
      setProof(p => {
        const idx = SOCIAL_PROOF.indexOf(p);
        return SOCIAL_PROOF[(idx + 1) % SOCIAL_PROOF.length];
      });
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const waMsg = packageName
    ? `Namaste! I am interested in "${packageName}". Please share details and availability for 2026.`
    : 'Namaste! I want to book Char Dham Yatra 2026. Please share packages and availability.';

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 80,
        right: 16,
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 8,
        // Only show on mobile
        '@media (min-width: 768px)': { display: 'none' },
      }}
      className="float-book-cta"
    >
      {/* Social proof pill */}
      <div
        style={{
          background: 'var(--navy)',
          color: '#fff',
          fontSize: 11.5,
          fontWeight: 600,
          padding: '5px 12px',
          borderRadius: 100,
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 12px rgba(15,43,91,0.3)',
          animation: 'fadeInUp .3s ease',
        }}
        key={proof}
      >
        🔥 {proof}
      </div>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waMsg)}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
        onClick={() => { try { if(window.gtag) window.gtag('event','generate_lead',{event_category:'engagement',event_label:'whatsapp_floating_cta',value:1}); } catch(e){} }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#25D366',
          color: '#fff',
          padding: '12px 18px',
          borderRadius: 100,
          fontWeight: 700,
          fontSize: 14,
          textDecoration: 'none',
          boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
          border: '2px solid rgba(255,255,255,0.25)',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Book on WhatsApp
      </a>
    </div>
  );
}
