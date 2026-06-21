import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Shiv Ganga Travels — Char Dham Yatra 2026 from Haridwar';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0F2B5B 0%, #1a3d7c 50%, #0B7B8B 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position:'absolute', top:'-80px', right:'-80px', width:'400px', height:'400px', borderRadius:'50%', background:'rgba(232,146,10,0.12)', display:'flex' }} />
        <div style={{ position:'absolute', bottom:'-60px', left:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'rgba(11,123,139,0.2)', display:'flex' }} />

        {/* Top bar */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'36px 60px 0', gap:'12px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
            <div style={{ width:'52px', height:'52px', borderRadius:'50%', background:'#E8920A', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', color:'#fff', fontWeight:'700' }}>ॐ</div>
            <div style={{ display:'flex', flexDirection:'column' }}>
              <span style={{ fontSize:'22px', fontWeight:'700', color:'#FFFFFF', letterSpacing:'0.02em' }}>SHIV GANGA TRAVELS</span>
              <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.7)', letterSpacing:'0.08em' }}>HARIDWAR · EST. 2010</span>
            </div>
          </div>
          <div style={{ display:'flex', gap:'8px' }}>
            <span style={{ background:'rgba(232,146,10,0.25)', border:'1px solid rgba(232,146,10,0.5)', color:'#E8920A', fontSize:'12px', padding:'4px 12px', borderRadius:'20px' }}>Uttarakhand Tourism Registered</span>
            <span style={{ background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.25)', color:'rgba(255,255,255,0.9)', fontSize:'12px', padding:'4px 12px', borderRadius:'20px' }}>Zero Commission</span>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 60px' }}>
          <div style={{ fontSize:'16px', color:'#E8920A', letterSpacing:'0.1em', marginBottom:'12px', fontWeight:'600' }}>CHAR DHAM YATRA 2026</div>
          <div style={{ fontSize:'56px', fontWeight:'800', color:'#FFFFFF', lineHeight:'1.1', marginBottom:'16px' }}>
            Your Sacred Journey<br />
            <span style={{ color:'#E8920A' }}>Starts in Haridwar</span>
          </div>
          <div style={{ fontSize:'20px', color:'rgba(255,255,255,0.85)', marginBottom:'32px' }}>
            Yamunotri · Gangotri · Kedarnath · Badrinath
          </div>

          {/* Stats row */}
          <div style={{ display:'flex', gap:'32px' }}>
            {[
              { num:'₹21,000', label:'Starting price' },
              { num:'50,000+', label:'Happy pilgrims' },
              { num:'15 Years', label:'Of trust' },
              { num:'4.6/5 ★', label:'Google rating' },
            ].map(s => (
              <div key={s.num} style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
                <span style={{ fontSize:'22px', fontWeight:'700', color:'#E8920A' }}>{s.num}</span>
                <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.65)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 60px 32px' }}>
          <span style={{ fontSize:'15px', color:'rgba(255,255,255,0.6)' }}>📞 +91-7817996730 · shivgangatravels.com</span>
          <span style={{ fontSize:'14px', color:'rgba(255,255,255,0.5)' }}>Founded by Retired Army Officer</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
