/* ══════════════════════════════════════════════════════════════
   Kedarnath at Brahma Muhurta — animated hero scene.

   Stylised flat-vector illustration, not a cartoon: limited palette
   (the brand navy / teal / gold, plus snow), layered depth, and
   slow motion. The register to aim for is editorial illustration —
   the thing a luxury brand commissions — rather than anything
   bouncy.

   Server component. Pure SVG + CSS keyframes: no JS, no images, no
   network request, ~7 KB gzipped, and it is resolution-independent
   so it is sharp on any display.

   Everything animated is transform or opacity, so the whole scene
   lives on the compositor and never triggers layout.
   ══════════════════════════════════════════════════════════════ */

const STARS = [
  [140, 90, 1.6, 0], [260, 150, 1.1, 1.4], [380, 70, 1.3, 2.7], [520, 130, 1, 0.8],
  [660, 60, 1.5, 3.4], [820, 120, 1.1, 1.9], [960, 80, 1.4, 0.4], [1100, 150, 1, 2.2],
  [1240, 70, 1.5, 3.9], [1360, 130, 1.2, 1.1], [200, 220, 1, 2.5], [1020, 210, 1.2, 3.1],
  [700, 190, 1, 4.2], [460, 240, 1.1, 1.6],
];

const SNOWFLAKES = [
  [120, 0, 14], [310, 2.4, 17], [480, 5.1, 12], [640, 1.2, 19], [790, 3.6, 15],
  [930, 6.2, 13], [1090, 0.8, 18], [1250, 4.4, 16], [1380, 2.0, 20], [220, 7.1, 15],
  [560, 8.3, 17], [1170, 9.0, 14],
];

export default function KedarnathScene({ className = '' }) {
  return (
    <div className={`k-scene ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" role="presentation">
        <defs>
          {/* Pre-dawn sky: the twenty minutes before the peak turns gold */}
          <linearGradient id="kSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#050f24" />
            <stop offset="38%"  stopColor="#0B1B38" />
            <stop offset="68%"  stopColor="#16345c" />
            <stop offset="86%"  stopColor="#3d4a6b" />
            <stop offset="100%" stopColor="#8a6a44" />
          </linearGradient>

          <radialGradient id="kSunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#E8920A" stopOpacity="0.55" />
            <stop offset="45%"  stopColor="#E8920A" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#E8920A" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="kFarRange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#31527d" />
            <stop offset="100%" stopColor="#1d3355" />
          </linearGradient>
          <linearGradient id="kMidRange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1b3a5c" />
            <stop offset="100%" stopColor="#122744" />
          </linearGradient>
          <linearGradient id="kNearRange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0d1f3c" />
            <stop offset="100%" stopColor="#081428" />
          </linearGradient>
          <linearGradient id="kSnow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#cfe3f5" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="kGoldLight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#FFD166" />
            <stop offset="100%" stopColor="#E8920A" />
          </linearGradient>
          <linearGradient id="kStone" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#0a1830" />
            <stop offset="55%"  stopColor="#12294b" />
            <stop offset="100%" stopColor="#07122a" />
          </linearGradient>

          <radialGradient id="kDoorGlow" cx="50%" cy="60%" r="50%">
            <stop offset="0%"   stopColor="#FFD166" stopOpacity="0.95" />
            <stop offset="60%"  stopColor="#E8920A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#E8920A" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="kMist" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
            <stop offset="30%"  stopColor="#cfe0f2" stopOpacity="0.20" />
            <stop offset="70%"  stopColor="#cfe0f2" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Vignette keeps the headline legible over the lower third */}
          <linearGradient id="kVeil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0B1B38" stopOpacity="0.30" />
            <stop offset="45%"  stopColor="#0B1B38" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0B1B38" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* ── Sky ─────────────────────────────────────── */}
        <rect width="1440" height="900" fill="url(#kSky)" />

        {/* ── Stars ───────────────────────────────────── */}
        <g className="k-stars">
          {STARS.map(([x, y, r, delay], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              fill="#fff"
              className="k-star"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </g>

        {/* ── First light behind the massif ───────────── */}
        <circle cx="880" cy="560" r="300" fill="url(#kSunGlow)" className="k-dawn" />

        {/* ── Drifting cloud bands ────────────────────── */}
        <g className="k-cloud k-cloud--a" opacity="0.20">
          <ellipse cx="300" cy="330" rx="190" ry="17" fill="#8fb4dd" />
          <ellipse cx="430" cy="322" rx="120" ry="12" fill="#8fb4dd" />
        </g>
        <g className="k-cloud k-cloud--b" opacity="0.14">
          <ellipse cx="1050" cy="270" rx="230" ry="14" fill="#a8c6e8" />
          <ellipse cx="900" cy="278" rx="140" ry="10" fill="#a8c6e8" />
        </g>

        {/* ── Far range ───────────────────────────────── */}
        <g className="k-layer k-layer--far">
          <path
            fill="url(#kFarRange)"
            d="M0,600 L110,470 L190,520 L300,415 L400,500 L500,430 L620,505 L720,395 L830,490 L940,430 L1060,505 L1170,440 L1290,510 L1380,455 L1440,530 L1440,900 L0,900 Z"
          />
          <path
            fill="url(#kSnow)"
            d="M300,415 L340,455 L322,452 L300,437 L278,455 L260,458 Z M720,395 L768,443 L744,439 L720,418 L696,441 L672,445 Z M500,430 L534,464 L518,461 L500,449 L482,462 L466,465 Z M1170,440 L1202,472 L1187,469 L1170,458 L1153,470 L1138,473 Z"
          />
        </g>

        {/* ── Mid range: the Kedarnath massif ─────────── */}
        <g className="k-layer k-layer--mid">
          <path
            fill="url(#kMidRange)"
            d="M0,690 L140,560 L250,620 L380,505 L470,585 L560,520 L660,600 L780,470 L900,585 L1010,515 L1130,600 L1250,530 L1360,610 L1440,565 L1440,900 L0,900 Z"
          />
          {/* Snow fields — the peak that turns gold first */}
          <path
            fill="url(#kSnow)"
            d="M780,470 L845,535 L818,529 L796,508 L780,496 L762,510 L740,532 L716,538 Z
               M380,505 L432,562 L410,556 L392,538 L380,529 L366,540 L346,559 L326,564 Z
               M1010,515 L1058,568 L1038,563 L1022,547 L1010,538 L997,549 L979,566 L961,571 Z"
          />
          <path
            fill="#FFD166"
            fillOpacity="0.32"
            className="k-firstlight"
            d="M780,470 L845,535 L818,529 L796,508 L780,496 Z"
          />
        </g>

        {/* ── Mist ────────────────────────────────────── */}
        <g>
          <rect className="k-mist k-mist--a" x="-400" y="620" width="2240" height="34" rx="17" fill="url(#kMist)" />
          <rect className="k-mist k-mist--b" x="-400" y="686" width="2240" height="26" rx="13" fill="url(#kMist)" />
          <rect className="k-mist k-mist--c" x="-400" y="742" width="2240" height="30" rx="15" fill="url(#kMist)" />
        </g>

        {/* ── Near ridge ──────────────────────────────── */}
        <g className="k-layer k-layer--near">
          <path
            fill="url(#kNearRange)"
            d="M0,780 L170,700 L300,745 L430,675 L560,730 L700,665 L850,725 L990,680 L1140,740 L1280,690 L1440,750 L1440,900 L0,900 Z"
          />
        </g>

        {/* ══ TEMPLE ═════════════════════════════════════
            Kedarnath is a low stone mandapa with a stepped
            shikhara behind it, standing on a raised plinth.
            Drawn as silhouette so it reads at any size. */}
        <g className="k-temple">
          {/* Aarti glow spilling from the doorway */}
          <ellipse cx="720" cy="742" rx="150" ry="90" fill="url(#kDoorGlow)" className="k-aarti" />

          {/* Plinth */}
          <rect x="592" y="792" width="256" height="16" fill="#0a1830" />
          <rect x="606" y="778" width="228" height="16" fill="#0d1f3a" />

          {/* Shikhara — stepped tower */}
          <path fill="url(#kStone)" d="M672,780 L672,672 L688,672 L688,646 L704,646 L704,624 L720,600 L736,624 L752,646 L752,672 L768,672 L768,780 Z" />
          {/* Kalash + flag */}
          <circle cx="720" cy="592" r="7" fill="url(#kGoldLight)" className="k-kalash" />
          <rect x="718.5" y="546" width="3" height="46" fill="#E8920A" opacity="0.8" />
          <path d="M721.5,548 L760,558 L721.5,570 Z" fill="#E8920A" className="k-flag" />

          {/* Mandapa — the long hall in front */}
          <path fill="url(#kStone)" d="M624,780 L624,706 L720,660 L816,706 L816,780 Z" />
          {/* Roof edge highlight catching first light */}
          <path d="M624,706 L720,660 L816,706 L806,712 L720,671 L634,712 Z" fill="#2a4b7a" opacity="0.7" />

          {/* Doorway */}
          <path d="M702,780 L702,730 Q720,712 738,730 L738,780 Z" fill="#160f06" />
          <path d="M706,780 L706,732 Q720,717 734,732 L734,780 Z" fill="url(#kGoldLight)" className="k-door" />

          {/* Stone courses */}
          <g stroke="#1c3a63" strokeWidth="1.2" opacity="0.55">
            <line x1="624" y1="730" x2="816" y2="730" />
            <line x1="624" y1="754" x2="816" y2="754" />
            <line x1="672" y1="700" x2="768" y2="700" />
          </g>

          {/* Bhim Shila — the boulder that split the 2013 flood */}
          <path d="M868,792 Q882,754 912,762 Q938,770 934,792 Z" fill="#0a1830" />
        </g>

        {/* ── Lamps along the approach ────────────────── */}
        <g className="k-lamps">
          {[560, 606, 652, 788, 834, 880].map((x, i) => (
            <circle key={x} cx={x} cy={800} r="3.2" fill="#FFD166" className="k-lamp" style={{ animationDelay: `${i * 0.55}s` }} />
          ))}
        </g>

        {/* ── Foreground ──────────────────────────────── */}
        <path fill="#060e1e" d="M0,830 L180,806 L360,826 L540,808 L720,824 L900,806 L1080,826 L1260,808 L1440,828 L1440,900 L0,900 Z" />

        {/* ── Snow ────────────────────────────────────── */}
        <g className="k-snowfall">
          {SNOWFLAKES.map(([x, delay, dur], i) => (
            <circle
              key={i}
              cx={x}
              cy="-10"
              r={i % 3 === 0 ? 2.2 : 1.5}
              fill="#fff"
              className="k-flake"
              style={{ animationDelay: `${delay}s`, animationDuration: `${dur}s` }}
            />
          ))}
        </g>

        {/* ── Birds ───────────────────────────────────── */}
        <g className="k-birds">
          <path className="k-bird" d="M0,0 q6,-5 12,0 q6,-5 12,0" fill="none" stroke="#dce8f6" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path className="k-bird k-bird--2" d="M0,0 q5,-4 10,0 q5,-4 10,0" fill="none" stroke="#dce8f6" strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
          <path className="k-bird k-bird--3" d="M0,0 q4,-3.5 8,0 q4,-3.5 8,0" fill="none" stroke="#dce8f6" strokeWidth="1.6" strokeLinecap="round" opacity="0.35" />
        </g>

        {/* ── Veil for text legibility ────────────────── */}
        <rect width="1440" height="900" fill="url(#kVeil)" />
      </svg>
    </div>
  );
}
