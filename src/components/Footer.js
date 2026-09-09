'use client';

import Link from 'next/link';
import { SITE } from '@/data/packages';
import { COLS, LANGUAGE_COL } from '@/components/footerLinks';
import Icon, { WhatsAppIcon, SocialIcon } from '@/components/Icon';
import { SOCIAL_LIVE, SOCIAL_COMMUNITY } from '@/data/social';
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
            {/* Icon row is generated from src/data/social.js, the module that
                already feeds sameAs and /llms.txt. Hardcoding these five URLs
                here meant that file's "editing this updates the footer" claim
                was false, and an account set verified:false stayed linked in
                the footer after being dropped everywhere else. Community
                properties (the subreddit) render in the row but stay out of
                sameAs — see the note in social.js for why. */}
            <div style={{ display: 'flex', gap: 6 }}>
              {[...SOCIAL_LIVE, ...SOCIAL_COMMUNITY].map(s => (
                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label} title={`${s.label} — ${s.handle}`} className="eq-foot-social">
                  <SocialIcon id={s.id} size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Link columns — the SEO backbone, verbatim */}
        {[...COLS, LANGUAGE_COL].map(col => (
          <nav key={col.heading} aria-label={col.heading}>
            <h3 className="eq-foot__h">{col.heading}</h3>
            <ul className="eq-foot__list">
              {col.links.map(l => (
                <li key={l.h}><Link prefetch={false} href={l.h} className="eq-foot-link">{l.l}</Link></li>
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
