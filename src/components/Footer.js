import Link from 'next/link';
import { SITE } from '@/data/packages';
import { COLS, LANGUAGE_COL } from '@/components/footerLinks';
import Icon, { WhatsAppIcon } from '@/components/Icon';

/* Editorial footer. Ink surface, hairline columns. The entire internal-link
   backbone (COLS + LANGUAGE_COL from footerLinks.js) is preserved verbatim —
   it is the site's SEO link graph and must not be pruned. */

const FOOT_CSS = `
  .eq-foot { background:var(--ink); color:rgba(255,255,255,0.6); }
  .eq-foot__grid { max-width:var(--lux-max,1320px); margin:0 auto; padding:clamp(52px,6vw,76px) clamp(20px,4vw,40px) 40px; display:grid; grid-template-columns:repeat(auto-fill,minmax(196px,1fr)); gap:40px 28px; }
  .eq-foot__h { color:#fff; font-size:0.625rem; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid var(--rule-light-soft); display:flex; align-items:center; gap:10px; }
  .eq-foot__h::before { content:''; width:16px; height:1px; background:var(--gold); flex:none; }
  .eq-foot__list { list-style:none; display:grid; gap:9px; }
  .eq-foot-link { color:rgba(255,255,255,0.6); font-size:0.82rem; text-decoration:none; transition:color .3s var(--ease-lux), padding-left .3s var(--ease-lux); }
  .eq-foot-link:hover { color:#fff; padding-left:4px; }
  .eq-foot-mark { width:44px; height:44px; border-radius:var(--ds-r-2); flex-shrink:0; background:linear-gradient(135deg,var(--navy-mid),var(--gold)); display:grid; place-items:center; color:#fff; font-size:20px; }
  .eq-foot-social { width:36px; height:36px; border-radius:100px; background:rgba(255,255,255,0.06); border:1px solid var(--rule-light-soft); color:rgba(255,255,255,0.78); display:grid; place-items:center; flex-shrink:0; transition:background .3s var(--ease-lux), color .3s var(--ease-lux); }
  .eq-foot-social:hover { background:var(--gold); color:var(--ink); border-color:var(--gold); }
  .eq-foot-cta { display:inline-flex; align-items:center; gap:7px; padding:9px 14px; border-radius:var(--ds-r-2); font-size:0.72rem; font-weight:600; letter-spacing:0.06em; text-decoration:none; white-space:nowrap; }
  .eq-foot__bottom { border-top:1px solid var(--rule-light-soft); max-width:var(--lux-max,1320px); margin:0 auto; padding:18px clamp(20px,4vw,40px); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; }
  .eq-foot__bottom span { font-size:0.72rem; color:rgba(255,255,255,0.4); }
`;

export default function Footer() {
  return (
    <footer className="eq-foot">
      <style dangerouslySetInnerHTML={{ __html: FOOT_CSS }} />

      <div className="eq-foot__grid">
        {/* Brand column */}
        <div style={{ gridColumn: 'span 1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div className="eq-foot-mark" aria-hidden="true">ॐ</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, color: '#fff' }}>{SITE.name}</div>
              <div style={{ fontSize: 11, color: 'var(--gold)', fontWeight: 500, marginTop: 2 }}>{SITE.tagline}</div>
            </div>
          </div>
          <p style={{ fontSize: '0.8rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', marginBottom: 18, maxWidth: 240 }}>
            Haridwar’s trusted Char Dham Yatra specialist since {SITE.established}. 50,000+ blessed pilgrims. Zero commission.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="tel:+917817996730" aria-label="Call us" className="eq-foot-cta" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid var(--rule-light-soft)' }}>
              <Icon name="phone" size={13} /> Call
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="nofollow noopener noreferrer" aria-label="WhatsApp" className="eq-foot-cta" style={{ background: '#25D366', color: '#fff' }}>
              <WhatsAppIcon size={13} /> WhatsApp
            </a>
            <div style={{ display: 'flex', gap: 6 }}>
              <a href="https://www.instagram.com/shivgangatravels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="eq-foot-social">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100083198213052" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="eq-foot-social">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/@Shivgangatravelsharidwar" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" className="eq-foot-social">
                <svg width="16" height="11" viewBox="0 0 24 17" fill="currentColor" aria-hidden="true"><path d="M23.495 2.656A3.016 3.016 0 0 0 21.37.516C19.505 0 12 0 12 0S4.495 0 2.63.516A3.016 3.016 0 0 0 .505 2.656C0 4.532 0 8.45 0 8.45s0 3.918.505 5.794a3.016 3.016 0 0 0 2.125 2.14C4.495 16.9 12 16.9 12 16.9s7.505 0 9.37-.516a3.016 3.016 0 0 0 2.125-2.14C24 12.368 24 8.45 24 8.45s0-3.918-.505-5.794zM9.545 12.027V4.873l6.272 3.577-6.272 3.577z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Link columns — the SEO backbone, verbatim */}
        {[...COLS, LANGUAGE_COL].map(col => (
          <nav key={col.heading} aria-label={col.heading}>
            <h3 className="eq-foot__h">{col.heading}</h3>
            <ul className="eq-foot__list">
              {col.links.map(l => (
                <li key={l.h}><Link href={l.h} className="eq-foot-link">{l.l}</Link></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="eq-foot__bottom">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved. Made with ❤️ in Haridwar.</span>
        <span>{SITE.address}</span>
      </div>
    </footer>
  );
}
