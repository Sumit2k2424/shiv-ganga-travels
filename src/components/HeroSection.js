'use client';
import HeroSearch from '@/components/HeroSearch';
import { SITE } from '@/data/packages';
import { pxAt, pxSrcSet } from '@/lib/pximg';

/*
 * Hero — photographic, journey-first.
 * The former flat-cartoon scene repositioned the brand down-market; a real
 * Himalayan temple photograph with a navy scrim restores the emotional
 * register of the journey. Swap HERO_PHOTO for the operator's own
 * photography when available — the treatment (scrim + type) stays the same.
 */
const HERO_PHOTO = 'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb';

export default function HeroSection() {
  return (
    <section style={{
      position:'relative',
      minHeight:'clamp(560px,72vh,720px)',
      background:'var(--navy)',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      padding:'clamp(56px,6vw,80px) 16px clamp(48px,6vw,72px)',
      overflow:'hidden',
    }}>
      {/* Photographic backdrop */}
      <img
        src={pxAt(HERO_PHOTO, 1600, 1000)}
        srcSet={pxSrcSet(HERO_PHOTO, [[800,560],[1200,780],[1600,1000],[2000,1250]])}
        sizes="100vw"
        alt="Kedarnath Temple against the Himalayan peaks — Char Dham Yatra"
        fetchPriority="high"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 30%' }}
      />
      {/* Scrims — deep navy, heavier at the base, so white type stays AAA-readable */}
      <div aria-hidden="true" style={{ position:'absolute', inset:0,
        background:'linear-gradient(180deg, rgba(9,22,48,0.55) 0%, rgba(9,22,48,0.35) 40%, rgba(9,22,48,0.72) 100%)' }}/>
      <div aria-hidden="true" style={{ position:'absolute', inset:0,
        background:'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(9,22,48,0.45) 0%, rgba(9,22,48,0) 75%)' }}/>

      <div className="hero-content" style={{ maxWidth:920, width:'100%', position:'relative', zIndex:10, textAlign:'center' }}>

        {/* One quiet credential badge — stated once, proven later */}
        <div style={{
          display:'inline-flex', alignItems:'center', gap:8,
          background:'rgba(9,22,48,0.45)',
          border:'1px solid rgba(255,255,255,0.22)',
          backdropFilter:'blur(8px)',
          color:'rgba(255,255,255,0.92)', fontSize:11.5, fontWeight:600,
          letterSpacing:'0.08em', textTransform:'uppercase',
          padding:'7px 18px', borderRadius:100,
          marginBottom:22,
        }}>
          Uttarakhand Tourism Registered · Est. {SITE.established}
        </div>

        <h1 className="display-title speakable-answer" style={{
          color:'#fff', fontSize:'clamp(2rem,4.8vw,3.4rem)',
          fontWeight:600, lineHeight:1.08, marginBottom:16,
          textShadow:'0 2px 24px rgba(0,0,0,0.45)',
        }}>
          Char Dham Yatra 2026,<br/>from Haridwar
        </h1>

        <p className="speakable-answer" style={{
          color:'rgba(255,255,255,0.88)', fontSize:'clamp(15px,1.8vw,17px)', lineHeight:1.7,
          marginBottom:32, maxWidth:560, margin:'0 auto 32px',
          textShadow:'0 1px 12px rgba(0,0,0,0.35)',
        }}>
          Yamunotri · Gangotri · Kedarnath · Badrinath — with the operator who has
          carried 50,000+ pilgrims since {SITE.established}. From ₹18,500 per person, all-inclusive.
        </p>

        <HeroSearch/>

        {/* One reassurance line under the enquiry card */}
        <div style={{
          display:'flex', justifyContent:'center', gap:'8px 22px', flexWrap:'wrap',
          marginTop:48, fontSize:13, color:'rgba(255,255,255,0.85)',
        }}>
          {['Only 25% advance to confirm','Free cancellation up to 30 days','Full price breakdown before you pay'].map(t => (
            <span key={t} style={{ display:'inline-flex', alignItems:'center', gap:6, whiteSpace:'nowrap' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED9A0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4.5 12.5 5 5 10-11"/></svg>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div className="hero-wave" aria-hidden="true" style={{ zIndex:10 }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:56 }}>
          <path d="M0,32 C480,56 960,8 1440,32 L1440,56 L0,56 Z" fill="var(--bg)"/>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html:`
        @keyframes sgRise { from{opacity:0; transform:translateY(18px)} to{opacity:1; transform:translateY(0)} }
        .hero-content { animation: sgRise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        @media (prefers-reduced-motion: reduce) { .hero-content { animation: none; } }
      `}}/>
    </section>
  );
}
