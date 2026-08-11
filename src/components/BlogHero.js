import WhyBookDirect from '@/components/lux/WhyBookDirect';

/**
 * BlogHero — premium editorial hero for blog articles.
 *
 * Ownable, fully inline "Himalayan dawn" scene: layered sky gradient + aurora
 * glow + starfield + god rays + a sun setting behind four parallax ranges with
 * gold rim-light, snow caps and drifting valley mist. No photos, no external
 * assets, no JS — pure CSS/SVG, so it works offline on the OneDrive FS, costs
 * nothing at runtime and can never break LCP. All motion is disabled by the
 * global prefers-reduced-motion rule in globals.css.
 *
 * Props:
 *   badge          — eyebrow pill text (e.g. "Travel Guide · 2026")
 *   title          — H1 headline
 *   dek            — one-line subtitle / deck
 *   author         — display name (e.g. "Sumit Mishra")
 *   authorInitials — 2 letters for the avatar (default: derived from author)
 *   updated        — freshness label (e.g. "Updated Jan 2026")
 *   readTime       — e.g. "8 min read"
 *   facts          — array of { label, value } for the quick-facts strip
 */
export default function BlogHero({
  badge,
  title,
  dek,
  author,
  authorInitials,
  updated,
  readTime,
  facts = [],
  lang, // BCP-47 tag when the title/dek aren't in the site language (e.g. "hi")
}) {
  const initials =
    authorInitials ||
    (author ? author.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() : '');

  return (
    <>
      <header className="blog-hero" lang={lang}>
        {/* Atmosphere: aurora + starfield + film grain (CSS layers, no assets) */}
        <div className="blog-hero__sky" aria-hidden="true" />

        <div className="blog-hero__inner">
          {badge && <span className="blog-hero__badge">{badge}</span>}
          <h1 className="blog-hero__title">{title}</h1>
          {dek && <p className="blog-hero__dek">{dek}</p>}

          {(author || updated || readTime) && (
            <div className="blog-hero__meta">
              {author && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span className="blog-hero__avatar">{initials}</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{author}</span>
                </span>
              )}
              {author && (updated || readTime) && <span className="dot" />}
              {updated && <span>{updated}</span>}
              {updated && readTime && <span className="dot" />}
              {readTime && <span>{readTime}</span>}
            </div>
          )}
        </div>

        {/* Signature Himalayan dawn — four parallax ranges, sun behind the ridge */}
        <svg
          className="blog-hero__scene"
          viewBox="0 0 1440 340"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="bhFar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#C7DDF6" stopOpacity="0.34" />
              <stop offset="1" stopColor="#C7DDF6" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="bhMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5B8CC4" stopOpacity="0.52" />
              <stop offset="1" stopColor="#102C58" stopOpacity="0.30" />
            </linearGradient>
            <linearGradient id="bhNear" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#143465" />
              <stop offset="1" stopColor="#07142E" />
            </linearGradient>
            <linearGradient id="bhFore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#050F24" />
              <stop offset="1" stopColor="#020713" />
            </linearGradient>
            <linearGradient id="bhSnow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.90" />
              <stop offset="1" stopColor="#CFE4FF" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="bhRim" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#E8920A" stopOpacity="0" />
              <stop offset="0.3" stopColor="#FFC46B" stopOpacity="0.7" />
              <stop offset="0.54" stopColor="#FFEFCB" stopOpacity="1" />
              <stop offset="0.8" stopColor="#FFC46B" stopOpacity="0.55" />
              <stop offset="1" stopColor="#E8920A" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="bhRay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFD79A" stopOpacity="0" />
              <stop offset="1" stopColor="#FFD79A" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="bhMist" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#DCEBFF" stopOpacity="0" />
              <stop offset="0.5" stopColor="#DCEBFF" stopOpacity="0.30" />
              <stop offset="1" stopColor="#DCEBFF" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="bhSunGlow">
              <stop offset="0" stopColor="#FFF4DC" stopOpacity="0.85" />
              <stop offset="0.34" stopColor="#FFC46B" stopOpacity="0.42" />
              <stop offset="1" stopColor="#E8920A" stopOpacity="0" />
            </radialGradient>
            <filter id="bhGlow" x="-25%" y="-90%" width="150%" height="320%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="bhSoft" x="-30%" y="-30%" width="160%" height="180%">
              <feGaussianBlur stdDeviation="16" />
            </filter>
          </defs>

          {/* far range — hazy, catches the first light */}
          <polygon
            fill="url(#bhFar)"
            points="0,340 0,214 96,178 168,200 262,150 340,186 452,128 560,182 648,158 742,104 848,166 942,142 1046,190 1140,156 1246,196 1348,168 1440,192 1440,340"
          />

          {/* sun bloom low on the horizon */}
          <ellipse cx="880" cy="238" rx="330" ry="150" fill="url(#bhSunGlow)" />

          {/* god rays fanning up from the sun */}
          <g className="blog-hero__rays" fill="url(#bhRay)" filter="url(#bhSoft)">
            <polygon points="880,246 604,-120 706,-120" />
            <polygon points="880,246 800,-120 872,-120" />
            <polygon points="880,246 942,-120 1030,-120" />
            <polygon points="880,246 1108,-120 1224,-120" />
          </g>

          {/* mid range */}
          <polygon
            fill="url(#bhMid)"
            points="0,340 0,246 110,214 214,238 322,192 430,232 540,206 646,168 760,214 872,190 980,236 1092,200 1200,240 1310,214 1440,246 1440,340"
          />

          {/* high valley mist, drifting behind the near ridge */}
          <g className="blog-hero__mist blog-hero__mist--far" fill="url(#bhMist)">
            <ellipse cx="360" cy="252" rx="330" ry="16" />
            <ellipse cx="1010" cy="240" rx="290" ry="13" />
          </g>

          {/* the sun itself — half-swallowed by the near ridge */}
          <circle cx="880" cy="232" r="17" fill="#FFE9BC" opacity="0.9" filter="url(#bhGlow)" />
          <circle cx="880" cy="232" r="11" fill="#FFF6E4" opacity="0.95" />

          {/* near range — the hero silhouette */}
          <polygon
            fill="url(#bhNear)"
            points="0,340 0,282 130,250 250,276 372,238 486,272 604,244 716,206 832,250 946,228 1060,268 1180,240 1300,278 1440,254 1440,340"
          />

          {/* snow caps on the three dominant summits */}
          <g fill="url(#bhSnow)">
            <polygon points="664,250 716,206 768,250 747,238 729,248 708,232 690,246" />
            <polygon points="332,272 372,238 412,272 396,262 382,270 366,258 352,269" />
            <polygon points="1144,270 1180,240 1216,270 1202,262 1189,268 1175,258 1162,268" />
          </g>

          {/* gold rim-light along the near ridge (soft halo + crisp edge) */}
          <polyline
            fill="none" stroke="url(#bhRim)" strokeWidth="6" strokeLinejoin="round"
            opacity="0.55" filter="url(#bhGlow)"
            points="0,282 130,250 250,276 372,238 486,272 604,244 716,206 832,250 946,228 1060,268 1180,240 1300,278 1440,254"
          />
          <polyline
            fill="none" stroke="url(#bhRim)" strokeWidth="1.6" strokeLinejoin="round"
            points="0,282 130,250 250,276 372,238 486,272 604,244 716,206 832,250 946,228 1060,268 1180,240 1300,278 1440,254"
          />

          {/* low mist pooling in the valleys, in front of the near range */}
          <g className="blog-hero__mist blog-hero__mist--near" fill="url(#bhMist)">
            <ellipse cx="520" cy="292" rx="400" ry="15" />
            <ellipse cx="1140" cy="300" rx="360" ry="13" />
          </g>

          {/* foreground ridge — anchors the composition */}
          <polygon
            fill="url(#bhFore)"
            points="0,340 0,316 160,296 320,312 470,290 620,308 780,284 940,306 1100,288 1260,310 1440,292 1440,340"
          />
        </svg>
      </header>

      {facts.length > 0 && (
        <div className="blog-facts-wrap">
          <div className="blog-facts">
            {facts.map(f => (
              <div key={f.label} className="blog-facts__item">
                <div className="blog-facts__label">{f.label}</div>
                <div className="blog-facts__value">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Why book direct — always immediately below the hero */}
      <WhyBookDirect />
    </>
  );
}
