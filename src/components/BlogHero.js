/**
 * BlogHero — premium editorial hero for blog articles.
 *
 * Ownable inline-SVG Himalayan skyline + layered brand gradient (no photos,
 * no external assets, no licensing risk — works offline on the OneDrive FS).
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
}) {
  const initials =
    authorInitials ||
    (author ? author.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() : '');

  return (
    <>
      <header className="blog-hero">
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

        {/* Signature Himalayan skyline — atmospheric depth via three ranges */}
        <svg
          className="blog-hero__mountains"
          viewBox="0 0 1440 240"
          preserveAspectRatio="xMidYMax meet"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* far range — hazy, lightest */}
          <polygon
            fill="#ffffff" fillOpacity="0.10"
            points="0,240 0,150 180,90 360,140 540,80 760,150 980,70 1180,130 1440,95 1440,240"
          />
          {/* mid range */}
          <polygon
            fill="#ffffff" fillOpacity="0.06"
            points="0,240 0,190 220,120 430,175 650,110 880,180 1120,120 1320,170 1440,140 1440,240"
          />
          {/* near range — dark silhouette */}
          <polygon
            fill="#0A1F45" fillOpacity="0.55"
            points="0,240 0,215 260,150 520,205 760,150 1020,210 1280,155 1440,195 1440,240"
          />
          {/* snow caps on the near peaks */}
          <g fill="#ffffff" fillOpacity="0.9">
            <polygon points="249,171 260,150 271,171" />
            <polygon points="749,171 760,150 771,171" />
            <polygon points="1269,176 1280,155 1291,176" />
          </g>
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
    </>
  );
}
