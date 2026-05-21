import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';

export const metadata = {
  title: 'Triyuginarayan Temple 2026 – Where Shiva Married Parvati, Route & Darshan Guide',
  description: 'Complete guide to Triyuginarayan Temple 2026 — where Lord Shiva and Goddess Parvati were married. Located 12km from Sonprayag, darshan timings, how to reach, and best time to visit.',
  keywords: ['triyuginarayan temple 2026', 'triyuginarayan temple kedarnath', 'triyuginarayan shiva parvati wedding', 'triyuginarayan temple guide', 'triyuginarayan yatra', 'sonprayag to triyuginarayan', 'triyuginarayan temple distance'],
  alternates: { canonical: `${SITE.baseUrl}/blog/triyuginarayan-temple` },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p = { fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function Page() {
  return (
    <>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--gold-dark) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🔥 Eternal Flame · 1,900m</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>Triyuginarayan Temple — Shiva and Parvati's Wedding Site</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Near Kedarnath · Eternal fire burning since the divine wedding · Vishnu as priest · 12km from Sonprayag</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Triyuginarayan Temple</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026</div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:10, marginBottom:28 }}>
          {[{icon:'📍',label:'Location',val:'Triyuginarayan village, Rudraprayag'},{icon:'🏔️',label:'Altitude',val:'1,980m'},{icon:'🚗',label:'Distance',val:'12km from Sonprayag'},{icon:'🔥',label:'Feature',val:'Eternal sacred fire'},{icon:'🙏',label:'Deity',val:'Lord Vishnu (as Narayana)'},{icon:'📅',label:'Best Time',val:'May–June, Sept–Oct'}].map(s=>(
            <div key={s.label} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px', textAlign:'center' }}>
              <div style={{ fontSize:18, marginBottom:3 }}>{s.icon}</div>
              <div style={{ fontSize:10.5, color:'var(--text-muted)', marginBottom:2 }}>{s.label}</div>
              <div style={{ fontSize:12, fontWeight:700, color:'var(--navy)', lineHeight:1.3 }}>{s.val}</div>
            </div>
          ))}
        </div>

        <p style={p}>If you ask a hundred people visiting Kedarnath what Triyuginarayan is, perhaps five will know. And yet this small village temple — 12km from Sonprayag on the way to Kedarnath — contains one of the most beautiful and least-known stories in all of Hindu mythology: this is where Lord Shiva and Goddess Parvati were married.</p>
        <p style={p}>Not symbolically. Not in a general "Shiva and Parvati existed in this region" sense. According to Skanda Purana, the actual divine wedding took place here, in this village, on this ground. Lord Vishnu officiated as the brother of the bride (Parvati). Brahma was the priest. The Himalayan peaks and rivers were the witnesses. And a fire was lit for the wedding havan — which has not gone out since. Through three yugas (cosmic ages). Which is how the village and temple got the name Triyuginarayan: tri (three) yugas, Narayan (Vishnu).</p>

        <h2 style={h2}>The Eternal Fire — Akhand Dhuni</h2>
        <p style={p}>The most extraordinary feature of Triyuginarayan is the <strong>Akhand Dhuni</strong> — the eternal fire in the temple courtyard that is said to have been burning continuously since the divine wedding. Priests maintain it day and night, adding wood and ghee. The ash from this fire, called <em>vibhuti</em>, is distributed to devotees and is considered exceptionally sacred — ash from the same fire that burned when Shiva married Parvati.</p>
        <p style={p}>Pilgrims bring small logs of wood to add to the fire as an offering — you can buy them near the temple entrance. Adding your piece of wood to a flame that (in tradition) has been burning for three cosmic ages is one of the most quietly moving things you can do on the entire Char Dham circuit. No queue, no rush, no crowd. Just the fire, the mountains, and the story.</p>

        <h2 style={h2}>The Story — Why Vishnu is the Presiding Deity</h2>
        <p style={p}>The name of the presiding deity at Triyuginarayan is Narayana (Vishnu), not Shiva — which surprises most visitors who expect a Shiva temple near Kedarnath. The reason is that Vishnu was here as Parvati's brother, giving her away in marriage. He is the host deity of this occasion. Shiva and Parvati are the bride and groom, and there are separate shrines for them, but the main temple honours Vishnu in his role as the presiding guardian of the wedding.</p>
        <p style={p}>Three sacred ponds near the temple — the Brahma Kund, Vishnu Kund, and Rudra Kund — are where the divine beings are said to have bathed before the ceremony. Pilgrims traditionally dip in the Rudra Kund before entering the temple. The water is glacier-fed and extremely cold, but the ritual is short and considered highly auspicious — particularly for couples praying for a blessed marriage or for those recently married.</p>

        <h2 style={h2}>Triyuginarayan as a Wedding Blessing Site</h2>
        <p style={p}>In recent years, Triyuginarayan has become a quietly popular destination for Hindu couples — a pilgrimage to seek blessings at the site of the divine marriage. Some couples come here after their wedding, some before. Some come with their parents to seek marital blessings. A small number of real weddings are conducted here each year, officiated by the temple priests. If this interests you, contact the temple trust or let us know — our team can help arrange the puja.</p>

        <h2 style={h2}>How to Visit Triyuginarayan</h2>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'20px 22px', border:'1px solid var(--border)', marginBottom:24 }}>
          {[
            ['From Haridwar','220km via Rishikesh–Devprayag–Rudraprayag–Sonprayag, then 12km to Triyuginarayan. About 8–9 hours drive total.'],
            ['From Guptkashi','32km, approximately 1.5 hours drive via Sonprayag. Guptkashi is the standard overnight base for Kedarnath pilgrims.'],
            ['From Sonprayag','12km, 40-minute drive on a narrow but paved road. Shared jeeps are available but infrequent — private cab is better.'],
            ['Best combined with','Most visitors combine with Kedarnath — visit Triyuginarayan on arrival or departure day from Guptkashi.'],
            ['Entry & timing','Open sunrise to sunset. No entry fee. Puja for ₹100–500 available from temple priests.'],
            ['Accommodation','Basic guesthouses in the village for those wanting to stay overnight. Our packages include an optional Triyuginarayan stop on request.'],
          ].map(([k,v],i)=>(
            <div key={i} style={{ display:'grid', gridTemplateColumns:'160px 1fr', gap:12, borderTop:i>0?'1px solid var(--border)':'none', padding:'10px 0' }}>
              <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{k}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.6 }}>{v}</div>
            </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
          ))}
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>💡 Our Tip</div>
          <div style={{ fontSize:13.5, color:'#334155', lineHeight:1.7 }}>Triyuginarayan is not on most standard Char Dham itineraries because most operators do not bother to include it. We do. If you are booking with us and want this stop added, simply mention it when you WhatsApp — there is no extra charge for the detour when you are already overnighting in Guptkashi.</div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Add Triyuginarayan to Your Kedarnath Package</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>We include this on request — no extra charge. Mention it when you book.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to include Triyuginarayan Temple in my Kedarnath/Char Dham itinerary.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            Kedarnath Package →
          </div>
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'Kedarnath Temple Guide',h:'/kedarnath-temple'},{l:'Kedarnath Yatra Package',h:'/kedarnath-yatra'},{l:'Panch Kedar Yatra',h:'/panch-kedar-yatra'},{l:'Char Dham Yatra',h:'/char-dham-yatra'}].map(l=>(
              <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
