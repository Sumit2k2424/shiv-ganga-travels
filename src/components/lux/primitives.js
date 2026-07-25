/* ══════════════════════════════════════════════════════════════
   Luxury primitives — ALL server components.

   These render plain markup with data-attributes. LuxMotion (the
   single client island in the root layout) animates them. No
   'use client' here means these cost zero hydration bytes.
   ══════════════════════════════════════════════════════════════ */

const cx = (...a) => a.filter(Boolean).join(' ');

/* ── Reveal ─────────────────────────────────────────────────── */
export function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay,
  className,
  style,
  children,
  ...rest
}) {
  return (
    <Tag
      data-lux-reveal={variant}
      className={className}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── Stagger — children animate in sequence ─────────────────── */
export function Stagger({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag data-lux-stagger="" className={className} {...rest}>
      {children}
    </Tag>
  );
}

/* ── Lines — headline that rises line by line ───────────────── */
export function Lines({ lines = [], as: Tag = 'h2', className, ...rest }) {
  return (
    <Tag className={cx('lux-lines', className)} {...rest}>
      {lines.map((line, i) => (
        <span className="lux-line" key={i}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

/* ── Eyebrow ────────────────────────────────────────────────── */
export function Eyebrow({ children, light, plain, className, ...rest }) {
  return (
    <span
      className={cx(
        'lux-eyebrow',
        light && 'lux-eyebrow--light',
        plain && 'lux-eyebrow--plain',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

/* ── Section header block ───────────────────────────────────── */
export function SectionHead({
  eyebrow,
  title,
  lede,
  aside,
  light = false,
  size = 'lg',
  className,
}) {
  return (
    <header className={cx('lux-head', className)}>
      <div className="lux-head__top">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, minWidth: 0 }}>
          {eyebrow && (
            <Reveal variant="fade">
              <Eyebrow light={light}>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          {title && (
            <Reveal>
              <h2
                className={cx('lux-display', `lux-display--${size}`)}
                style={light ? { color: '#fff' } : undefined}
              >
                {title}
              </h2>
            </Reveal>
          )}
        </div>
        {aside && (
          <Reveal variant="fade" style={{ flex: 'none' }}>
            {aside}
          </Reveal>
        )}
      </div>
      {lede && (
        <Reveal>
          <p className="lux-lede" style={light ? { color: 'rgba(255,255,255,0.74)' } : undefined}>
            {lede}
          </p>
        </Reveal>
      )}
    </header>
  );
}

/* ── Frame — cinematic image container with curtain reveal ──── */
export function Frame({
  src,
  alt = '',
  ratio = '3x2',
  sizes = '100vw',
  srcSet,
  priority = false,
  zoom = true,
  parallax,
  className,
  children,
  ...rest
}) {
  return (
    <div className={cx('lux-reveal-img', className)} {...rest}>
      <div className={cx('lux-frame', `lux-frame--${ratio}`, zoom && 'lux-frame--zoom')}>
        {src && (
          /* Plain <img> on purpose: these are remote Pexels URLs already
             CDN-resized, so next/image adds a proxy hop without benefit. */
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding={priority ? 'sync' : 'async'}
            data-lux-parallax={parallax || undefined}
          />
        )}
        {children}
      </div>
    </div>
  );
}

/* ── Facts — the quiet-luxury spec list ─────────────────────── */
export function Facts({ items = [], className }) {
  return (
    <dl className={cx('lux-facts', className)}>
      {items.filter(Boolean).map((it, i) => (
        <div className="lux-facts__row" key={i}>
          <dt className="lux-facts__k">{it.k}</dt>
          <dd className="lux-facts__v">{it.v}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ── Pill ───────────────────────────────────────────────────── */
export function Pill({ tone, children, className, ...rest }) {
  return (
    <span className={cx('lux-pill', tone && `lux-pill--${tone}`, className)} {...rest}>
      {children}
    </span>
  );
}

/* ── Rule ───────────────────────────────────────────────────── */
export function Rule({ tone, style }) {
  return <hr className={cx('lux-rule', tone && `lux-rule--${tone}`)} style={style} />;
}

/* ── Section wrapper ────────────────────────────────────────── */
export function Section({
  tone,
  tight = false,
  id,
  className,
  children,
  wrap = true,
  wrapWidth,
  style,
  ...rest
}) {
  const inner = wrap ? (
    <div className={cx('lux-wrap', wrapWidth && `lux-wrap--${wrapWidth}`)}>{children}</div>
  ) : (
    children
  );
  return (
    <section
      id={id}
      className={cx('lux-section', tight && 'lux-section--tight', tone && `lux-section--${tone}`, className)}
      style={style}
      {...rest}
    >
      {inner}
    </section>
  );
}

export { cx };
