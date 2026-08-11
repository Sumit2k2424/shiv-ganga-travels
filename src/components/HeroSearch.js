'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/packages';
import { WhatsAppIcon } from '@/components/Icon';

/*
 * HeroSearch — simplified enquiry widget.
 * The old five-tab / four-dropdown "SEARCH" card promised a results engine
 * the site doesn't have (the conversion model is enquiry). This version asks
 * only what the operator actually needs — month and group size — and labels
 * the CTA with what really happens next. Cab & helicopter intents are links.
 */
const MONTHS = ['July 2026','August 2026','September 2026','October 2026'];
const CITIES = ['Haridwar','Delhi','Rishikesh','Dehradun'];

export default function HeroSearch() {
  const [city,     setCity]     = useState('Haridwar');
  const [month,    setMonth]    = useState('');
  const [pilgrims, setPilgrims] = useState('2');

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `Namaste! I want to plan a Char Dham Yatra from ${city} for ${pilgrims} pilgrim(s) in ${month || 'the upcoming season'}. Please share the itinerary and price.`;
    try {
      window.dispatchEvent(new CustomEvent('sgt:lead', { detail: {
        type: 'Hero Enquiry', package: 'Char Dham', number: '+' + SITE.whatsapp,
        detail: `From: ${city} | Month: ${month||'—'} | Pilgrims: ${pilgrims}`,
      }}));
    } catch {}
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,'_blank');
  }

  // Border, background and transition moved to the .hs-field rule below.
  // They were declared inline, which meant the :hover/:focus-within states
  // could never take effect — an inline style beats a stylesheet rule for the
  // same property, so the transition sat here animating nothing. Dimensions
  // are unchanged; only the properties that need to be overridable moved.
  const fieldWrap = {
    flex:'1 1 150px', minWidth:130,
    borderRadius:10,
    padding:'10px 32px 8px 14px',
    position:'relative', textAlign:'left',
  };
  const chevron = (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-25%)', pointerEvents:'none' }}>
      <path d="M2 4l4 4 4-4" fill="none" stroke="var(--text-muted)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const labelStyle = {
    display:'block', fontSize:10.5, fontWeight:700,
    color:'var(--text-muted)', marginBottom:2,
    textTransform:'uppercase', letterSpacing:'0.08em',
  };
  const bigSelect = {
    width:'100%', border:'none', outline:'none', background:'transparent',
    fontSize:17, fontWeight:700, color:'var(--text)',
    fontFamily:'var(--font)', cursor:'pointer', padding:0,
    appearance:'none', WebkitAppearance:'none',
  };

  return (
    <div style={{
      background:'#fff',
      borderRadius:16,
      boxShadow:'0 24px 64px rgba(15,43,91,0.3), 0 4px 12px rgba(15,43,91,0.1)',
      maxWidth:860, margin:'0 auto',
      position:'relative', padding:'20px 20px 14px',
      textAlign:'left',
    }}>
      <form onSubmit={handleSubmit} className="hero-search-form" style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'stretch' }}>
        <div className="hs-field" style={fieldWrap}>
          {chevron}
          <label style={labelStyle} htmlFor="hs-city">Starting from</label>
          <select id="hs-city" value={city} onChange={e=>setCity(e.target.value)} style={bigSelect}>
            {CITIES.map(c=><option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="hs-field" style={fieldWrap}>
          {chevron}
          <label style={labelStyle} htmlFor="hs-month">Travel month</label>
          <select id="hs-month" value={month} onChange={e=>setMonth(e.target.value)} style={{ ...bigSelect, color: month ? 'var(--text)' : 'var(--text-muted)', fontWeight: month ? 700 : 600 }}>
            <option value="">Any month</option>
            {MONTHS.map(m=><option key={m}>{m}</option>)}
          </select>
        </div>
        <div className="hs-field" style={fieldWrap}>
          {chevron}
          <label style={labelStyle} htmlFor="hs-pax">Pilgrims</label>
          <select id="hs-pax" value={pilgrims} onChange={e=>setPilgrims(e.target.value)} style={bigSelect}>
            {['1','2','3','4','5','6','7','8','9','10+'].map(n=>(
              <option key={n} value={n}>{n} {n==='1'?'Pilgrim':'Pilgrims'}</option>
            ))}
          </select>
        </div>

        {/* Primary action — gold, labelled with what actually happens. The
            hs-cta class adds one soft glow every ~9s (never a nagging pulse),
            drawing the eye to the action calmly. Glow is disabled under
            prefers-reduced-motion in the style block below. */}
        <button type="submit" className="hs-cta" data-magnetic data-cursor="Go" style={{
          flex:'1 1 200px', minWidth:190,
          background:'var(--gold)',
          color:'#fff', border:'none', cursor:'pointer',
          padding:'14px 22px', borderRadius:10,
          fontSize:15, fontWeight:700,
          fontFamily:'var(--font)',
          transition:'background .15s, transform .15s, box-shadow .3s',
        }}
          onMouseEnter={e=>{e.currentTarget.style.background='var(--gold-dark)'; e.currentTarget.style.transform='translateY(-1px)'}}
          onMouseLeave={e=>{e.currentTarget.style.background='var(--gold)'; e.currentTarget.style.transform='translateY(0)'}}>
          Get My Itinerary &amp; Price
        </button>
      </form>

      <style dangerouslySetInnerHTML={{ __html:`
        /* Resting border, moved off the inline style so it is overridable.
           hsl(), not a bare var(): --border is stored as an HSL triplet
           ("214 32% 91%") in the shadcn convention, so "solid var(--border)"
           is invalid CSS and the browser drops the whole shorthand — which is
           why these fields have never had a visible border. Tailwind wraps it
           as hsl(var(--border)); hand-written CSS has to do the same.
           NB: no backticks anywhere in this block — it is a template literal.

           FOCUS IS NOT DEFINED HERE. globals.css already owns
           .hs-field:focus-within (navy border + navy ring) sitewide. A gold
           focus state here only half-won — their border-color carries
           !important, this block loads later so its box-shadow won — leaving
           a navy border wearing a gold ring. One focus treatment, theirs. */
        .hs-field {
          background: #fff;
          border: 1px solid hsl(var(--border));
          transition: border-color .18s ease, box-shadow .18s ease;
        }
        /* Hover is genuinely new — globals defines focus but not hover. Kept
           to a warm tint rather than full gold so it reads as "reachable"
           without competing with the focus state that follows it. */
        .hs-field:hover { border-color: rgba(232,146,10,0.55); }

        @keyframes hsGlow {
          0%, 82%, 100% { box-shadow: 0 0 0 0 rgba(232,146,10,0); }
          90%           { box-shadow: 0 0 22px 2px rgba(232,146,10,0.5); }
        }
        .hs-cta { animation: hsGlow 9s ease-in-out 3s infinite; position: relative; overflow: hidden; }
        .hs-cta:hover { box-shadow: 0 8px 22px rgba(232,146,10,0.45); }

        /* Light sweep on hover only — a one-pass gloss across the CTA, not a
           loop. It reads as the surface catching light when you reach for it;
           on a loop it would read as a banner ad. */
        .hs-cta::after {
          content: '';
          position: absolute; top: 0; bottom: 0; left: -60%;
          width: 45%;
          background: linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.34) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-18deg);
          pointer-events: none;
          opacity: 0;
        }
        .hs-cta:hover::after { animation: hsSweep .75s cubic-bezier(0.22,1,0.36,1); }
        @keyframes hsSweep {
          from { left: -60%; opacity: 1; }
          to   { left: 115%; opacity: 0; }
        }

        /* .hs-field transition is already killed under reduced motion by
           globals.css; only the CTA needs handling here. */
        @media (prefers-reduced-motion: reduce) {
          .hs-cta { animation: none; }
          .hs-cta:hover::after { animation: none; }
        }
      `}}/>

      {/* hsl(var(--border)), see the .hs-field note above — the bare var()
          form silently dropped this rule too, so this divider never drew. */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8, marginTop:12, paddingTop:10, borderTop:'1px solid hsl(var(--border))' }}>
        <span style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:12, color:'var(--text-muted)' }}>
          <WhatsAppIcon size={13} color="#25D366"/>
          Replies on WhatsApp within 2 hours · No login, no payment to enquire
        </span>
        <span style={{ fontSize:12.5, color:'var(--text-mid)' }}>
          Need something else?{' '}
          <Link href="/char-dham-yatra-cab-booking" style={{ color:'var(--navy)', fontWeight:600 }}>Cab only</Link>
          {' · '}
          <Link href="/char-dham-helicopter" style={{ color:'var(--navy)', fontWeight:600 }}>Helicopter yatra</Link>
        </span>
      </div>
    </div>
  );
}
