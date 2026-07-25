'use client';

/* Brand logo mark — extracted from the original Navbar, unchanged. */


export function LogoMark({ size = 36 }) {
  return (
    <div style={{ position:'relative', width:size, height:size + 14, flexShrink:0 }} aria-hidden="true">
      <style dangerouslySetInnerHTML={{ __html:`
        @keyframes logoAura {
          0%,100% { opacity:.55; transform:scale(1); }
          50%      { opacity:.9;  transform:scale(1.08); }
        }
        @keyframes logoSpin {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes omPulse {
          0%,100% { opacity:.7; }
          50%      { opacity:1; }
        }
        @keyframes riverFlow {
          0%   { stroke-dashoffset: 120; opacity:.35; }
          50%  { opacity:.75; }
          100% { stroke-dashoffset: -120; opacity:.35; }
        }
        @keyframes ripple1 {
          0%   { transform:scaleX(1)   translateY(0); opacity:.6; }
          100% { transform:scaleX(1.3) translateY(2px); opacity:0; }
        }
        @keyframes ripple2 {
          0%   { transform:scaleX(.8)  translateY(0); opacity:.5; }
          100% { transform:scaleX(1.1) translateY(3px); opacity:0; }
        }
        @keyframes snowGlint {
          0%,100% { opacity:.55; }
          50%      { opacity:1; }
        }
        @keyframes peakShimmer {
          0%   { stop-color:#E8920A; }
          50%  { stop-color:#FFD166; }
          100% { stop-color:#E8920A; }
        }
        .logo-aura   { animation: logoAura   3.5s ease-in-out infinite; transform-origin:22px 22px; }
        .logo-ring   { animation: logoSpin   18s linear infinite; transform-origin:22px 22px; }
        .logo-om     { animation: omPulse    2.8s ease-in-out infinite; }
        .river-main  { animation: riverFlow  2.2s ease-in-out infinite; stroke-dasharray:40 80; }
        .river-side  { animation: riverFlow  2.8s ease-in-out .4s infinite; stroke-dasharray:25 60; }
        .rip1        { animation: ripple1    1.8s ease-out .2s infinite; transform-origin:22px 52px; }
        .rip2        { animation: ripple2    1.8s ease-out .9s infinite; transform-origin:22px 52px; }
        .snow-glint  { animation: snowGlint  2s ease-in-out infinite; }
      `}}/>

      {/* Main logo mark */}
      <svg width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ display:'block' }}>
        <defs>
          <radialGradient id="lgAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#E8920A" stopOpacity=".3"/>
            <stop offset="100%" stopColor="#E8920A" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="lgBg" cx="40%" cy="35%" r="70%">
            <stop offset="0%"   stopColor="#1a3d7c"/>
            <stop offset="100%" stopColor="#0F2B5B"/>
          </radialGradient>
          <linearGradient id="lgPeak" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#FFD166"/>
            <stop offset="100%" stopColor="#E8920A"/>
          </linearGradient>
          <linearGradient id="lgSnow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#fff"   stopOpacity=".95"/>
            <stop offset="100%" stopColor="#d8eeff" stopOpacity=".7"/>
          </linearGradient>
          <clipPath id="lgClip">
            <circle cx="22" cy="22" r="19"/>
          </clipPath>
        </defs>

        {/* Outer aura glow */}
        <circle cx="22" cy="22" r="21" fill="url(#lgAura)" className="logo-aura"/>

        {/* Rotating dotted ring */}
        <circle cx="22" cy="22" r="20" stroke="#E8920A" strokeWidth="1"
          strokeDasharray="3 5" strokeOpacity=".5" fill="none" className="logo-ring"/>

        {/* Main circle bg */}
        <circle cx="22" cy="22" r="19" fill="url(#lgBg)"/>

        {/* Inner content clipped */}
        <g clipPath="url(#lgClip)">
          {/* Far mountain — blue-grey */}
          <path d="M4,34 L13,20 L18,26 L23,14 L28,22 L33,16 L40,30 L40,36 L4,36 Z"
            fill="rgba(11,123,139,0.35)"/>
          {/* Near mountain peaks — gold gradient */}
          <path d="M4,36 L14,22 L19,28 L22,10 L25,28 L30,20 L40,36 Z"
            fill="url(#lgPeak)"/>
          {/* Snow caps */}
          <path d="M19,28 L22,10 L25,28 L23.5,24 L22,18 L20.5,24 Z"
            fill="url(#lgSnow)" className="snow-glint"/>
          <path d="M27,22 L30,20 L33,24 L31,22.5 L30,21 Z"
            fill="rgba(255,255,255,.6)" className="snow-glint"/>
          <path d="M11,24 L14,22 L17,26 L15.5,24.5 L14,23 Z"
            fill="rgba(255,255,255,.6)" className="snow-glint"/>
        </g>

        {/* Border ring */}
        <circle cx="22" cy="22" r="19" stroke="#E8920A" strokeWidth="1.2" fill="none" strokeOpacity=".6"/>

        {/* Om symbol */}
        <text x="22" y="37" textAnchor="middle" fontSize="9" fontWeight="700"
          fontFamily="serif" fill="#FFD166" className="logo-om">ॐ</text>
      </svg>

      {/* River flowing downward from logo */}
      <svg width={size} height={16} viewBox="0 0 44 16" fill="none"
        style={{ display:'block', marginTop:-2, overflow:'visible' }}>
        <defs>
          <linearGradient id="rvGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0B7B8B" stopOpacity=".9"/>
            <stop offset="100%" stopColor="#0B7B8B" stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* Main river stream */}
        <path d="M22,0 Q20,4 22,8 Q24,12 22,16"
          stroke="url(#rvGrad)" strokeWidth="2.5" strokeLinecap="round"
          fill="none" className="river-main"/>

        {/* Side tributary left */}
        <path d="M22,2 Q18,5 16,9 Q14,12 15,14"
          stroke="#0B7B8B" strokeWidth="1.2" strokeLinecap="round"
          fill="none" opacity=".5" className="river-side"/>

        {/* Side tributary right */}
        <path d="M22,2 Q26,5 28,9 Q30,12 29,14"
          stroke="#0B7B8B" strokeWidth="1.2" strokeLinecap="round"
          fill="none" opacity=".5" className="river-side"/>

        {/* Ripple at base */}
        <ellipse cx="22" cy="14.5" rx="6" ry="1.5"
          stroke="#0B7B8B" strokeWidth="1" fill="none" opacity=".4" className="rip1"/>
        <ellipse cx="22" cy="14.5" rx="9" ry="2.2"
          stroke="#0B7B8B" strokeWidth=".7" fill="none" opacity=".25" className="rip2"/>
      </svg>
    </div>
  );
}

export default LogoMark;
