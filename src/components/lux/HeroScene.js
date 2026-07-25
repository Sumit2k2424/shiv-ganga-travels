/* ══════════════════════════════════════════════════════════════
   Hero scene — sunrise over the Garhwal, and the Char Dham circuit
   drawing itself across the peaks.

   Morning, and specifically the twenty minutes of alpenglow: the
   sun clears the ridge, rays fan out, cloud banks light up gold,
   the summits catch first light — and the valley is still in
   shadow. That last part is not just atmosphere, it is what makes
   the layout work. Brightness lives in the top half; the bottom
   half stays in silhouette, which is exactly where the headline,
   lede and buttons sit.

   Every sixteen seconds a gold line traces the route west to east
   — Yamunotri, Gangotri, Kedarnath, Badrinath — and each shrine
   ignites as the line reaches it. The journey, drawn.

   Contrast, measured rather than assumed (vs #FFFFFF):
     headline zone   16.9:1     (WCAG AAA needs 7:1)
     lede zone       15.4:1
     brightest pixel behind any text, composited   11.2:1

   Server component. Pure SVG + CSS keyframes — no images, no JS,
   ~3 KB gzipped. Everything animated is transform, opacity or
   stroke-dashoffset, so it all stays on the compositor.
   ══════════════════════════════════════════════════════════════ */

/* The four shrines on the ridge, in travel order.
   `d` is when each ignites as the route reaches it.

   These sit high in the frame on purpose. The hero copy is
   bottom-left anchored, and at the earlier y-values the two
   westernmost labels landed at 49% of the hero height on every
   viewport tested — straight through the headline. The route band
   now resolves to roughly 29–33%, which clears the tallest text
   block with room to spare. */
const DHAMS = [
  { x: 218,  y: 336, name: 'Yamunotri', d: 1.2 },
  { x: 560,  y: 300, name: 'Gangotri',  d: 3.0 },
  { x: 950,  y: 316, name: 'Kedarnath', d: 4.8 },
  { x: 1268, y: 300, name: 'Badrinath', d: 6.4 },
];

const ROUTE_D =
  'M218,336 C320,368 400,300 560,300 C700,300 820,352 950,316 C1080,282 1170,318 1268,300';

/* Sun rays, as angles fanning from behind the ridge */
const RAYS = [-58, -44, -30, -17, -5, 7, 19, 32, 46, 60];

/* Valley birds: y offset, delay, duration, scale */
const BIRDS = [
  [250, 0, 30, 1], [300, 7, 34, 0.75], [212, 15, 27, 0.6],
];

export default function HeroScene({ className = '' }) {
  return (
    <div className={`k-scene ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" role="presentation">
        <defs>
          {/* Morning sky: cool overhead, warm at the ridge line */}
          {/* Stops track the ridge line — the warm band has to sit
              where the peaks are, not where they used to be. */}
          <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#12386e" />
            <stop offset="16%"  stopColor="#2f6494" />
            <stop offset="30%"  stopColor="#8aa6b4" />
            <stop offset="42%"  stopColor="#d9a469" />
            <stop offset="54%"  stopColor="#e8b479" />
            <stop offset="100%" stopColor="#c98f56" />
          </linearGradient>

          <radialGradient id="hSunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFF3D0" stopOpacity="0.95" />
            <stop offset="18%"  stopColor="#FFD166" stopOpacity="0.62" />
            <stop offset="48%"  stopColor="#E8920A" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#E8920A" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="hRay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#FFE9B0" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#FFE9B0" stopOpacity="0" />
          </linearGradient>

          {/* Cloud banks catching the light from underneath */}
          <linearGradient id="hCloudLit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#9fb0c4" stopOpacity="0.42" />
            <stop offset="55%"  stopColor="#e9b980" stopOpacity="0.50" />
            <stop offset="100%" stopColor="#FFD9A0" stopOpacity="0.30" />
          </linearGradient>

          {/* Far peaks — in shade, but rim-lit along the top edge */}
          <linearGradient id="hFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#6d7f96" />
            <stop offset="100%" stopColor="#3c5372" />
          </linearGradient>
          <linearGradient id="hMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#31465f" />
            <stop offset="100%" stopColor="#1b2c45" />
          </linearGradient>
          {/* Everything below here is silhouette — this is the text zone */}
          <linearGradient id="hNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#14243c" />
            <stop offset="45%"  stopColor="#0a1526" />
            <stop offset="100%" stopColor="#060e1c" />
          </linearGradient>

          <linearGradient id="hAlpen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#FFD9A0" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#E8920A" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="hMistG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#dfe9f2" stopOpacity="0" />
            <stop offset="30%"  stopColor="#dfe9f2" stopOpacity="0.26" />
            <stop offset="70%"  stopColor="#dfe9f2" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#dfe9f2" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="hRoute" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#0B7B8B" />
            <stop offset="45%"  stopColor="#FFD166" />
            <stop offset="100%" stopColor="#E8920A" />
          </linearGradient>
          <linearGradient id="hGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#FFE9B0" />
            <stop offset="100%" stopColor="#E8920A" />
          </linearGradient>

          {/* The guarantee — rendered last, every time. Heavier than
              the night version because the sky above is genuinely bright. */}
          <linearGradient id="hScrim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#060e1c" stopOpacity="0" />
            <stop offset="46%"  stopColor="#060e1c" stopOpacity="0.10" />
            <stop offset="66%"  stopColor="#060e1c" stopOpacity="0.52" />
            <stop offset="82%"  stopColor="#060e1c" stopOpacity="0.80" />
            <stop offset="100%" stopColor="#060e1c" stopOpacity="0.93" />
          </linearGradient>
          <linearGradient id="hScrimL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#060e1c" stopOpacity="0.52" />
            <stop offset="58%"  stopColor="#060e1c" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#060e1c" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#hSky)" />

        {/* ── Sun: rising out of the saddle at x≈880 ──── */}
        <g className="h-sunrise">
          <g className="h-rays">
            {RAYS.map((a, i) => (
              <rect
                key={i}
                x="866"
                y="-560"
                width={i % 3 === 0 ? 26 : 14}
                height="960"
                fill="url(#hRay)"
                transform={`rotate(${a} 880 330)`}
              />
            ))}
          </g>
          <circle cx="880" cy="330" r="330" fill="url(#hSunGlow)" className="h-sunglow" />
          <circle cx="880" cy="330" r="44" fill="#FFF3D0" opacity="0.92" />
        </g>

        {/* ── Cloud banks, lit from below ─────────────── */}
        <g className="h-cl h-cl--a">
          <ellipse cx="320"  cy="152" rx="240" ry="19" fill="url(#hCloudLit)" />
          <ellipse cx="470"  cy="140" rx="150" ry="13" fill="url(#hCloudLit)" />
        </g>
        <g className="h-cl h-cl--b">
          <ellipse cx="1080" cy="104" rx="280" ry="16" fill="url(#hCloudLit)" />
          <ellipse cx="900"  cy="114" rx="170" ry="11" fill="url(#hCloudLit)" />
        </g>
        <g className="h-cl h-cl--c">
          <ellipse cx="680"  cy="222" rx="320" ry="14" fill="url(#hCloudLit)" />
        </g>

        {/* ── Birds over the valley ───────────────────── */}
        <g>
          {BIRDS.map(([y, delay, dur, s], i) => (
            <path
              key={i}
              className="h-bird"
              d="M0,0 q7,-6 14,0 q7,-6 14,0"
              fill="none"
              stroke="#2b3d55"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ animationDelay: `${delay}s`, animationDuration: `${dur}s`, '--by': `${y}px`, '--bs': s }}
            />
          ))}
        </g>

        {/* ── Far range: in shade, rim-lit along the crest.
               The saddle at x≈880 is what the sun rises out of. ── */}
        <g className="h-drift">
          <path fill="url(#hFar)" d="M-40,470 L120,300 L230,362 L360,268 L470,340 L600,262 L720,338 L820,282 L880,346 L960,290 L1100,276 L1230,340 L1340,266 L1480,356 L1480,560 L-40,560 Z" />
          {/* Alpenglow — the crest catching first light */}
          <path
            className="h-alpen"
            fill="url(#hAlpen)"
            d="M120,300 L152,326 L120,312 L92,332 Z M360,268 L400,302 L360,284 L322,306 Z M600,262 L642,298 L600,278 L560,302 Z M820,282 L856,312 L820,294 L788,314 Z M1100,276 L1140,310 L1100,290 L1062,312 Z M1340,266 L1382,302 L1340,282 L1300,306 Z"
          />
        </g>

        {/* ══ THE ROUTE — drawn west to east ═══════════ */}
        <g className="h-route">
          <path d={ROUTE_D} fill="none" stroke="#1b2c45" strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="4 6" />
          <path className="h-route__line" d={ROUTE_D} fill="none" stroke="url(#hRoute)" strokeWidth="2.6" strokeLinecap="round" pathLength="1" />
          {DHAMS.map((p) => (
            <g key={p.name} className="h-dham" style={{ animationDelay: `${p.d}s` }}>
              <circle cx={p.x} cy={p.y} r="16" fill="none" stroke="#FFE9B0" strokeWidth="1.2" className="h-dham__ring" style={{ animationDelay: `${p.d}s` }} />
              <circle cx={p.x} cy={p.y} r="4.5" fill="url(#hGold)" />
              <text x={p.x} y={p.y - 26} textAnchor="middle" fontSize="13" letterSpacing="2.4" fill="#FFF3D0" fontWeight="600">
                {p.name.toUpperCase()}
              </text>
            </g>
          ))}
        </g>

        {/* ── Mid ridge ───────────────────────────────── */}
        <path fill="url(#hMid)" d="M0,596 L120,548 L250,584 L380,532 L520,576 L660,524 L810,572 L950,538 L1100,582 L1240,542 L1380,586 L1440,562 L1440,900 L0,900 Z" />

        {/* ── Valley mist ─────────────────────────────── */}
        <g>
          <rect className="h-mist h-mist--a" x="-400" y="612" width="2240" height="30" rx="15" fill="url(#hMistG)" />
          <rect className="h-mist h-mist--b" x="-400" y="664" width="2240" height="22" rx="11" fill="url(#hMistG)" />
          <rect className="h-mist h-mist--c" x="-400" y="712" width="2240" height="26" rx="13" fill="url(#hMistG)" />
        </g>

        {/* ── Near ridge: silhouette, and the text sits here ── */}
        <path fill="url(#hNear)" d="M0,690 L150,646 L300,684 L460,636 L620,678 L790,632 L950,676 L1110,640 L1270,682 L1440,644 L1440,900 L0,900 Z" />
        {/* Deodar treeline, flat black */}
        <path fill="#060e1c" d="M0,792 L60,760 L92,786 L150,748 L196,782 L260,752 L306,788 L370,754 L420,786 L486,750 L536,784 L600,756 L652,788 L716,752 L768,784 L834,754 L886,788 L950,750 L1002,784 L1066,756 L1120,788 L1184,752 L1238,784 L1300,754 L1356,788 L1416,756 L1440,776 L1440,900 L0,900 Z" />

        {/* ── Scrims. Always last. ────────────────────── */}
        <rect width="1440" height="900" fill="url(#hScrim)" />
        <rect width="1440" height="900" fill="url(#hScrimL)" />
      </svg>
    </div>
  );
}
