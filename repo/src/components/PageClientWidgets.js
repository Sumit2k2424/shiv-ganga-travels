'use client';
import dynamic from 'next/dynamic';

// ssr: false requires a Client Component in Next.js 15+
// Keeps LeadPopup, ChatBot, HeroSearch etc out of initial JS bundle

export const HeroSearch = dynamic(() => import('@/components/HeroSearch'), {
  ssr: false,
  loading: () => (
    <div style={{ height:160, background:'rgba(255,255,255,0.06)', borderRadius:16 }}/>
  ),
});

export const GoogleReviews = dynamic(() => import('@/components/GoogleReviews'), {
  ssr: false,
  loading: () => (
    <div style={{ height:300, display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.4)', fontSize:14 }}>
      Loading reviews…
    </div>
  ),
});

export const AutoScrollRow = dynamic(() => import('@/components/AutoScrollRow'), {
  ssr: false,
  loading: () => <div style={{ height:240, overflowX:'hidden' }}/>,
});
