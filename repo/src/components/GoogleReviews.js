'use client';
import { useState, useEffect, useRef } from 'react';

function Stars({ n }) {
  return (
    <div style={{ display:'flex', gap:2, alignItems:'center' }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14"
          fill={i <= n ? '#F59E0B' : '#E5E7EB'} style={{ flexShrink:0 }}>
          <path d="M7 0l2.163 4.383 4.837.703-3.5 3.411.826 4.815L7 11.04 2.674 13.312l.826-4.815L0 5.086l4.837-.703L7 0z"/>
        </svg>
      ))}
    </div>
  );
}

function Avatar({ author, photo }) {
  const initials = author?.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase() || '?';
  const [imgOk, setImgOk] = useState(!!photo);

  return (
    <div style={{ width:44, height:44, borderRadius:'50%', flexShrink:0, overflow:'hidden',
      background:'#e8eaf0', display:'flex', alignItems:'center', justifyContent:'center' }}>
      {photo && imgOk ? (
        <img src={photo} alt={author} width={44} height={44}
          style={{ width:44, height:44, objectFit:'cover', borderRadius:'50%' }}
          loading="lazy" decoding="async"
          onError={() => setImgOk(false)} referrerPolicy="no-referrer"/>
      ) : (
        <span style={{ fontSize:15, fontWeight:700, color:'#4a5568' }}>{initials}</span>
      )}
    </div>
  );
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const text = review.text || '';
  const long = text.length > 220;
  const shown = (!long || expanded) ? text : text.slice(0, 220) + '…';

  return (
    <div style={{
      background:'#fff', borderRadius:14, padding:'20px', border:'1px solid #e8ecf2',
      display:'flex', flexDirection:'column', gap:12, minWidth:0,
      flex:'0 0 300px', scrollSnapAlign:'start',
    }}>
      {/* Top row */}
      <div style={{ display:'flex', gap:12, alignItems:'center' }}>
        <Avatar author={review.author} photo={review.photo}/>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#0f2b5b',
            overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
            {review.author}
          </div>
          <div style={{ fontSize:11.5, color:'#8898a6', marginTop:1 }}>
            {review.time}
          </div>
        </div>
        {/* Google G icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" style={{ flexShrink:0, opacity:.7 }}>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>

      <Stars n={review.rating}/>

      <p style={{ fontSize:13.5, color:'#334155', lineHeight:1.75, margin:0 }}>
        {shown}
        {long && (
          <button onClick={() => setExpanded(!expanded)}
            style={{ background:'none', border:'none', color:'#0f2b5b', fontWeight:700,
              fontSize:13, cursor:'pointer', padding:'0 0 0 4px' }}>
            {expanded ? ' less' : ' more'}
          </button>
        )}
      </p>
    </div>
  );
}

// Fallback static reviews — shown while API loads or if key not set
const STATIC = [
  { author:'Rakesh & Sunita Sharma', photo:null, rating:5, time:'October 2025',
    text:'Our entire family of 12 went for Char Dham with Shiv Ganga. The VIP darshan at Kedarnath saved us 4 hours of queuing. My 78-year-old mother completed the yatra comfortably because of the palki arrangements they handled for us.' },
  { author:'Dr. Priya Menon', photo:null, rating:5, time:'September 2025',
    text:'As a solo woman traveller I was nervous about the Kedarnath trek. The team assigned me a group of other solo pilgrims and a female guide. The hotel at Guptkashi was clean and the food was pure sattvic. Will book again for Badrinath.' },
  { author:'Vivek Agarwal', photo:null, rating:5, time:'May 2025',
    text:'The helicopter package was worth every rupee. 6 days, all 4 dhams, VIP darshan at every stop. Even though one flight got delayed by 2 hours due to clouds, the team kept us informed and we made up time the next day.' },
  { author:'Ganesh Iyer Family', photo:null, rating:5, time:'June 2025',
    text:'Three generations travelled together — my parents in 70s, us, and our teenagers. Oxygen cylinder was readily available when my father felt breathless at Kedarnath. Pure Tamil vegetarian food was arranged at 2 hotels on request.' },
  { author:'Arjun & Neha Kapoor', photo:null, rating:5, time:'February 2025',
    text:'Auli skiing with Shiv Ganga was a perfect winter holiday. The skiing instructor was patient with beginners. Gondola views were breathtaking — Nanda Devi at sunrise is something I will never forget.' },
];

const MAPS_REVIEW_URL = 'https://www.google.com/maps?cid=16074078434377735602#reviews';
const WRITE_REVIEW_URL = 'https://www.google.com/maps?cid=16074078434377735602&action=writeareview';

export default function GoogleReviews() {
  const [data, setData]       = useState({ reviews: STATIC, rating: 4.7, total: 54, mapsUrl: MAPS_REVIEW_URL, source: 'static' });
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(true);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(r => r.json())
      .then(d => {
        if (d.reviews && d.reviews.length > 0) {
          setData({ ...d, source: 'live' });
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanL(el.scrollLeft > 4);
    setCanR(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => { el.removeEventListener('scroll', updateArrows); window.removeEventListener('resize', updateArrows); };
  }, [data]);

  const scroll = dir => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  const reviews = data.reviews || STATIC;

  return (
    <div>
      {/* Header row with live stats */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
        flexWrap:'wrap', gap:12, marginBottom:20 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          {/* Google G */}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div>
            <div style={{ display:'flex', alignItems:'baseline', gap:6 }}>
              <span style={{ fontSize:22, fontWeight:700, color:'#0f2b5b', lineHeight:1 }}>
                {data.rating || '4.7'}
              </span>
              <Stars n={Math.round(data.rating || 4.7)}/>
            </div>
            <div style={{ fontSize:12, color:'#8898a6', marginTop:2 }}>
              {data.total ? `${data.total.toLocaleString('en-IN')}+` : '54+'} reviews on Google
              {data.source === 'live' && (
                <span style={{ marginLeft:6, background:'#dcfce7', color:'#15803d',
                  fontSize:10, fontWeight:700, padding:'1px 6px', borderRadius:20 }}>LIVE</span>
              )}
            </div>
          </div>
        </div>

        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          {/* Nav arrows */}
          {[{ dir:-1, can:canL }, { dir:1, can:canR }].map(({ dir, can }) => (
            <button key={dir} onClick={() => scroll(dir)} disabled={!can}
              style={{ width:36, height:36, borderRadius:'50%', border:'1px solid #e8ecf2',
                background: can ? '#fff' : '#f8f9fa', cursor: can ? 'pointer' : 'default',
                display:'flex', alignItems:'center', justifyContent:'center', opacity: can ? 1 : .4 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d={dir === -1 ? 'M10 3L5 8l5 5' : 'M6 3l5 5-5 5'}
                  stroke="#0f2b5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
          <a href={data.mapsUrl || MAPS_REVIEW_URL} target="_blank" rel="noopener noreferrer"
            style={{ fontSize:13, fontWeight:600, color:'#0f2b5b', textDecoration:'none',
              padding:'7px 14px', borderRadius:8, border:'1px solid #e8ecf2',
              background:'#fff', display:'flex', alignItems:'center', gap:6 }}>
            All reviews
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H4M11 1v7" stroke="#0f2b5b" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Cards scroll */}
      <div ref={scrollRef}
        className="google-reviews-scroll" style={{ display:'flex', gap:14, overflowX:'auto', scrollSnapType:'x mandatory',
          paddingBottom:8, scrollbarWidth:'none', msOverflowStyle:'none' }}>
        {(loading ? STATIC : reviews).map((r, i) => (
          <ReviewCard key={i} review={r}/>
        ))}
      </div>

      {/* Write a review CTA */}
      <div style={{ marginTop:16, textAlign:'center' }}>
        <a href={data.reviewUrl || WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer"
          style={{ fontSize:13, color:'#8898a6', textDecoration:'none', display:'inline-flex',
            alignItems:'center', gap:5 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1l6 6-6 6M13 7H1" stroke="#8898a6" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          Visited us? Leave a Google review
        </a>
      </div>

      <style>{`.scroll-container::-webkit-scrollbar{display:none}`}</style>
    </div>
  );
}
