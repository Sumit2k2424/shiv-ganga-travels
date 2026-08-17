import Link from 'next/link';
import { SITE } from '@/data/packages';
import { COLS, LANGUAGE_COL } from '@/components/footerLinks';
import Icon, { WhatsAppIcon } from '@/components/Icon';
import LogoBadge from '@/components/lux/LogoBadge';

/* Editorial footer. Ink surface, hairline columns. The entire internal-link
   backbone (COLS + LANGUAGE_COL from footerLinks.js) is preserved verbatim —
   it is the site's SEO link graph and must not be pruned. */

const FOOT_CSS = `
  .eq-foot { background:var(--ink); color:rgba(255,255,255,0.6); }
  .eq-foot__grid { max-width:var(--lux-max,1320px); margin:0 auto; padding:clamp(52px,6vw,76px) clamp(20px,4vw,40px) 40px; display:grid; grid-template-columns:repeat(auto-fill,minmax(196px,1fr)); gap:40px 28px; }
  .eq-foot__h { color:#fff; font-size:0.625rem; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid var(--rule-light-soft); display:flex; align-items:center; gap:10px; }
  .eq-foot__h::before { content:''; width:16px; height:1px; background:var(--gold); flex:none; }
  .eq-foot__list { list-style:none; display:grid; gap:9px; }
  /* translateX, not padding-left. The old rule animated a layout property on
     every link in the footer's SEO backbone — each hover forced layout +
     paint on the largest link set on the page. transform composites instead.
     inline-block is required: transforms do not apply to inline elements. */
  .eq-foot-link { display:inline-block; color:rgba(255,255,255,0.6); font-size:0.82rem; text-decoration:none; transition:color .3s var(--ease-lux), transform .3s var(--ease-lux); }
  .eq-foot-social { width:36px; height:36px; border-radius:100px; background:rgba(255,255,255,0.06); border:1px solid var(--rule-light-soft); color:rgba(255,255,255,0.78); display:grid; place-items:center; flex-shrink:0; transition:background .3s var(--ease-lux), color .3s var(--ease-lux), transform .14s var(--ease-lux); }
  .eq-foot-cta { display:inline-flex; align-items:center; gap:7px; padding:9px 14px; border-radius:var(--ds-r-2); font-size:0.72rem; font-weight:600; letter-spacing:0.06em; text-decoration:none; white-space:nowrap; transition:transform .14s var(--ease-lux); }

  /* Press feedback — the footer Call / WhatsApp pair had no pressed state at
     all, on the surface a pilgrim reaches for last. */
  .eq-foot-cta:active, .eq-foot-social:active { transform:scale(0.97); }

  @media (hover: hover) and (pointer: fine) {
    .eq-foot-link:hover { color:#fff; transform:translateX(4px); }
    .eq-foot-social:hover { background:var(--gold); color:var(--ink); border-color:var(--gold); }
    .eq-foot-cta:hover { transform:translateY(-1px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .eq-foot-link { transition:color .3s var(--ease-lux); }
    .eq-foot-link:hover { transform:none; }
    .eq-foot-cta:hover { transform:none; }
    .eq-foot-cta:active, .eq-foot-social:active { transform:none; }
  }
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
            <LogoBadge size={44} />
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
              <a href="https://www.reddit.com/r/CharDham_Guide/" target="_blank" rel="noopener noreferrer" aria-label="Reddit" title="Reddit" className="eq-foot-social">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.596.596-1.842.7-2.512.7-.67 0-1.928-.104-2.512-.7a.326.326 0 0 0-.232-.095z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/shiv-ganga-travels" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="eq-foot-social">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
