/* ══════════════════════════════════════════════════════════════
   /styleguide — the living design system for Shiv Ganga Travels.

   Phase 1 deliverable. Renders every token and component in the
   editorial `lux-` system so the whole language can be reviewed in
   the browser before any page is redesigned.

   · Server component (zero hydration except the shared motion runtime)
   · noindex — never linked in nav, never enters the sitemap
   · Imports the editorial layer route-locally, so reviving the system
     here does NOT touch the 157 live routes until Phase 2 is approved.
   ══════════════════════════════════════════════════════════════ */

import '../luxury.css';
import '../design-system.css';
import LuxMotion from '@/components/lux/LuxMotion';
import Icon from '@/components/Icon';
import {
  Section, SectionHead, Reveal, Stagger, Eyebrow, Pill, Rule, Facts, Frame,
} from '@/components/lux/primitives';

export const metadata = {
  title: 'Design System · Shiv Ganga Travels',
  description: 'The editorial luxury design system — tokens, components and motion.',
  robots: { index: false, follow: false, nocache: true },
};

const DEMO_IMG =
  'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=900';

/* ── small local scaffolding, kept out of the system files ─────── */
const SCAFFOLD = `
  .sg-body { background: var(--paper); color: var(--ink); }
  .sg-block { padding: clamp(48px,7vw,96px) 0; border-bottom: 1px solid var(--rule); }
  .sg-block:last-child { border-bottom: 0; }
  .sg-grid { display: grid; gap: 18px; }
  .sg-swatch { border: 1px solid var(--rule); border-radius: var(--ds-r-2); overflow: hidden; background:#fff; }
  .sg-swatch__chip { height: 84px; }
  .sg-swatch__meta { padding: 10px 12px; display:grid; gap:2px; }
  .sg-swatch__name { font-size: 0.8125rem; font-weight: 600; color: var(--ink); }
  .sg-swatch__val { font-size: 0.6875rem; letter-spacing:0.04em; color: var(--ink-faint); font-variant-numeric: tabular-nums; }
  .sg-tag { font-size:0.625rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--ink-faint); font-weight:600; }
  .sg-row { display:flex; flex-wrap:wrap; gap:16px; align-items:center; }
  .sg-tile { border:1px dashed var(--rule-strong); border-radius: var(--ds-r-2); padding:16px; background:#fff; }
  .sg-space-bar { background: var(--gold); height: 14px; border-radius: 2px; }
  .sg-elev-tile { background:#fff; border-radius: var(--ds-r-2); height:96px; display:grid; place-items:center; font-size:0.6875rem; letter-spacing:0.14em; text-transform:uppercase; color:var(--ink-faint); }
  .sg-ico-cell { display:grid; place-items:center; gap:8px; padding:16px 8px; border:1px solid var(--rule); border-radius:var(--ds-r-2); background:#fff; text-align:center; }
  .sg-ico-cell span { font-size:0.625rem; color:var(--ink-faint); letter-spacing:0.04em; word-break:break-word; }
  .sg-note { font-size:0.8125rem; color:var(--ink-faint); line-height:1.6; }
  .sg-legend { display:inline-flex; gap:8px; align-items:center; font-size:0.6875rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--ink-faint); }
`;

function Swatch({ name, value, dark }) {
  return (
    <div className="sg-swatch">
      <div className="sg-swatch__chip" style={{ background: value, borderBottom: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--rule)' }} />
      <div className="sg-swatch__meta">
        <span className="sg-swatch__name">{name}</span>
        <span className="sg-swatch__val">{value}</span>
      </div>
    </div>
  );
}

const BRAND = [
  ['Navy', '#0F2B5B'], ['Navy Mid', '#1A3E75'], ['Ink', '#0B1B38'],
  ['Sacred Gold', '#E8920A'], ['Gold Dark', '#C67A08'], ['Himalayan Teal', '#0B7B8B'],
];
const INK = [
  ['Ink', '#0B1B38'], ['Ink Soft', '#2C3E5C'], ['Ink Faint', '#7A8699'],
];
const PAPER = [
  ['Paper', '#FBFAF7'], ['Paper Deep', '#F3F1EC'], ['Paper Cool', '#F6F8FC'], ['White', '#FFFFFF'],
];
const SEMANTIC = [
  ['Success', '#1E7A4D'], ['Info (Teal)', '#0B7B8B'], ['Warning', '#B7791F'], ['Danger', '#C23A34'],
];
const SPACE = [
  ['space-1', 4], ['space-2', 8], ['space-3', 12], ['space-4', 16], ['space-5', 20],
  ['space-6', 24], ['space-8', 32], ['space-10', 40], ['space-12', 48], ['space-16', 64],
];
const RADII = [['r-0', 0], ['r-1', 1], ['r-2', 2], ['r-3', 4], ['r-4', 8], ['r-pill', 100]];
const ICONS = 'phone chat mail headset car helicopter route map mountain temple compass shield badgeCheck medal star calendar clipboard receipt rupee handshake medical meal users user ticket oxygen sun calculator book backpack megaphone alert info check arrowRight external city flower water leaf pray'.split(' ');

export default function StyleGuide() {
  return (
    <div className="sg-body lux-noscroll-x">
      <style dangerouslySetInnerHTML={{ __html: SCAFFOLD }} />
      <LuxMotion />

      {/* ── Masthead ─────────────────────────────────────────── */}
      <Section tone="ink" className="sg-block" style={{ paddingTop: 'clamp(72px,10vw,132px)' }}>
        <Reveal variant="fade"><Eyebrow light>Design System · Phase 1</Eyebrow></Reveal>
        <Reveal>
          <h1 className="lux-display lux-display--xl" style={{ color: '#fff', marginTop: 22, maxWidth: '16ch' }}>
            The editorial language of <span className="lux-accent">Shiv Ganga</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.72)', marginTop: 22 }}>
            One quiet, confident system — hairline surfaces, restrained gold, a single lightweight
            motion runtime. Every token and component below is production code. Nothing here is a
            mockup.
          </p>
        </Reveal>
        <div className="sg-row" style={{ marginTop: 34 }}>
          <Pill tone="light">Navy · Gold · Teal</Pill>
          <Pill tone="light">Playfair Display + Plus Jakarta Sans</Pill>
          <Pill tone="light">~4 KB motion runtime</Pill>
          <Pill tone="light">WCAG AA</Pill>
        </div>
      </Section>

      {/* ── Principles ───────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Foundations" title="Design principles" size="lg" />
        <div className="lux-grid lux-grid--3" data-lux-stagger>
          {[
            ['Quiet over loud', 'Hairlines and whitespace do the structural work. Shadows and colour are earned, never default. Gold appears once per view, as punctuation.'],
            ['Editorial rhythm', 'A serif display against a humanist sans, generous measure, a strict vertical cadence. It should read like a travel journal, not a booking funnel.'],
            ['Motion as luxury', 'One IntersectionObserver, one rAF loop. Content reveals on the way up the page; nothing bounces. Motion is GPU-only and fully reversible under reduced-motion.'],
            ['Trust through candour', 'Specificity reads as honesty on a pilgrimage booking — a hut is called a hut. The type system exists to make plain facts legible, not to dress them up.'],
            ['Server-first', 'Components render as static markup with data-attributes. The whole design layer costs almost no client JS, which is what keeps it fast on a Himalayan 3G connection.'],
            ['Accessible by default', 'AA contrast, visible focus rings, reduced-motion and reduced-transparency fallbacks, and a no-JS safety net so content is never trapped behind an animation.'],
          ].map(([h, b]) => (
            <div className="lux-mark" key={h}>
              <h3 className="lux-display lux-display--sm">{h}</h3>
              <p className="lux-body" style={{ marginTop: 10 }}>{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Colour ───────────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Tokens" title="Colour" lede="The palette is unchanged from the brand — deep navy for trust, sacred gold for devotion and calls to action, Himalayan teal as a cool secondary. Everything else is a derived ink or paper tone." />
        <p className="sg-tag" style={{ marginBottom: 12 }}>Brand</p>
        <div className="sg-grid lux-grid--3" style={{ marginBottom: 34 }}>{BRAND.map(([n, v]) => <Swatch key={n} name={n} value={v} />)}</div>
        <p className="sg-tag" style={{ marginBottom: 12 }}>Ink scale · text</p>
        <div className="sg-grid lux-grid--3" style={{ marginBottom: 34 }}>{INK.map(([n, v]) => <Swatch key={n} name={n} value={v} />)}</div>
        <p className="sg-tag" style={{ marginBottom: 12 }}>Paper · surfaces</p>
        <div className="sg-grid lux-grid--4" style={{ marginBottom: 34 }}>{PAPER.map(([n, v]) => <Swatch key={n} name={n} value={v} />)}</div>
        <p className="sg-tag" style={{ marginBottom: 12 }}>Semantic · status</p>
        <div className="sg-grid lux-grid--4">{SEMANTIC.map(([n, v]) => <Swatch key={n} name={n} value={v} />)}</div>
      </Section>

      {/* ── Typography ───────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Tokens" title="Typography" lede="Playfair Display for editorial headlines, Plus Jakarta Sans for everything else. The scale is fluid — it breathes with the viewport using clamp()." />
        <div className="lux-grid" style={{ gap: 26 }}>
          <div><span className="sg-tag">display · xl</span><p className="lux-display lux-display--xl">Char Dham Yatra</p></div>
          <Rule />
          <div><span className="sg-tag">display · lg</span><p className="lux-display lux-display--lg">Four shrines, one journey</p></div>
          <div><span className="sg-tag">display · md</span><p className="lux-display lux-display--md">Kedarnath &amp; Badrinath</p></div>
          <div><span className="sg-tag">display · sm</span><p className="lux-display lux-display--sm">Overnight at Gaurikund</p></div>
          <Rule />
          <div><span className="sg-tag">eyebrow</span><div style={{ marginTop: 8 }}><Eyebrow>Since 2009 · Haridwar</Eyebrow></div></div>
          <div><span className="sg-tag">figure · stat numeral</span><p className="lux-figure">12,400+</p></div>
          <Rule />
          <div><span className="sg-tag">lede</span><p className="lux-lede">The editorial lede sets the tone for a section — larger, looser, and held to a comfortable reading measure of about sixty characters.</p></div>
          <div><span className="sg-tag">body</span><p className="lux-body">Body copy runs at a relaxed line height for long-form legibility. It never exceeds sixty-eight characters wide, so the eye never loses its place across a line — the single most important typographic decision on a content-heavy site.</p></div>
          <div><span className="sg-tag">caption</span><p className="lux-caption">Photograph · Kedarnath temple at first light</p></div>
          <div><span className="sg-tag">accent · reserved for one word</span><p className="lux-display lux-display--md">A truly <span className="lux-accent">sacred</span> passage</p></div>
        </div>
      </Section>

      {/* ── Spacing ──────────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Tokens" title="Spacing &amp; rhythm" lede="Component spacing runs on a 4px rhythm. Section spacing is separate and cinematic — a fluid clamp from 72px to 148px that gives every section room to breathe." />
        <div className="sg-grid" style={{ gap: 12 }}>
          {SPACE.map(([n, px]) => (
            <div key={n} className="sg-row" style={{ gap: 20 }}>
              <span className="sg-swatch__val" style={{ width: 92, flex: 'none' }}>--ds-{n}</span>
              <span className="sg-swatch__val" style={{ width: 42, flex: 'none' }}>{px}px</span>
              <div className="sg-space-bar" style={{ width: px * 2 }} />
            </div>
          ))}
        </div>
      </Section>

      {/* ── Grid ─────────────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Tokens" title="Grid" lede="A single responsive grid primitive — 2, 3 or 4 columns that collapse to 2, then 1, at fixed breakpoints. Max content width 1320px, editorial reading measure 720px." />
        {[['lux-grid--4', 4], ['lux-grid--3', 3], ['lux-grid--2', 2]].map(([cls, n]) => (
          <div key={cls} style={{ marginBottom: 20 }}>
            <p className="sg-tag" style={{ marginBottom: 8 }}>{cls}</p>
            <div className={`lux-grid ${cls}`}>
              {Array.from({ length: n }).map((_, i) => <div key={i} className="sg-tile" style={{ textAlign: 'center' }} />)}
            </div>
          </div>
        ))}
      </Section>

      {/* ── Radius + Elevation ───────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Tokens" title="Radius &amp; elevation" lede="Corners stay nearly square — the editorial voice. Elevation is navy-tinted and used sparingly, only for surfaces that genuinely float." />
        <p className="sg-tag" style={{ marginBottom: 12 }}>Radius</p>
        <div className="sg-row" style={{ marginBottom: 40 }}>
          {RADII.map(([n, px]) => (
            <div key={n} style={{ textAlign: 'center' }}>
              <div style={{ width: 80, height: 60, background: '#fff', border: '1px solid var(--rule-strong)', borderRadius: px, borderBottomLeftRadius: px, borderBottomRightRadius: 2 }} />
              <span className="sg-swatch__val" style={{ display: 'block', marginTop: 8 }}>--ds-{n}</span>
            </div>
          ))}
        </div>
        <p className="sg-tag" style={{ marginBottom: 12 }}>Elevation</p>
        <div className="lux-grid lux-grid--4">
          <div className="sg-elev-tile lux-elev-1">elev-1</div>
          <div className="sg-elev-tile lux-elev-2">elev-2</div>
          <div className="sg-elev-tile lux-elev-3">elev-3</div>
          <div className="sg-elev-tile lux-elev-float">float</div>
        </div>
      </Section>

      {/* ── Glass + Overlays ─────────────────────────────────── */}
      <Section tone="paper" className="sg-block" wrap={false}>
        <div className="lux-wrap">
          <SectionHead eyebrow="Surfaces" title="Glass &amp; overlays" lede="Frosted surfaces for sticky rails and the booking bar, over a gradient scrim for text-over-image. Both degrade to opaque fallbacks on mobile and under reduced-transparency." />
        </div>
        <div className="lux-wrap">
          <div style={{ position: 'relative', borderRadius: 'var(--ds-r-4)', overflow: 'hidden', minHeight: 320 }} className="lux-scrim">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={DEMO_IMG} alt="Himalayan peaks above Kedarnath" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(20px,4vw,40px)', display: 'flex', gap: 16, flexWrap: 'wrap', minHeight: 320, alignItems: 'flex-end' }}>
              <div className="lux-glass" style={{ padding: 20, maxWidth: 300 }}>
                <p className="sg-tag" style={{ marginBottom: 6 }}>.lux-glass</p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--ink)' }}>Light frosted panel — sticky booking rail, filters bar.</p>
              </div>
              <div className="lux-glass lux-glass--dark" style={{ padding: 20, maxWidth: 300 }}>
                <p className="sg-tag" style={{ marginBottom: 6, color: 'rgba(255,255,255,0.6)' }}>.lux-glass--dark</p>
                <p style={{ fontSize: '0.9375rem' }}>Dark frosted panel over imagery — hero metadata, mobile book bar.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Buttons ──────────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Components" title="Buttons" lede="Uppercase, wide-tracked, square-cornered. Gold is the primary action and appears once per view. Every variant has hover, focus-visible, disabled and loading states." />
        <div className="sg-grid" style={{ gap: 26 }}>
          <div>
            <p className="sg-tag" style={{ marginBottom: 12 }}>Variants</p>
            <div className="sg-row">
              <button className="lux-btn lux-btn--gold">Book this yatra</button>
              <button className="lux-btn lux-btn--ink">View itinerary</button>
              <button className="lux-btn lux-btn--ghost">Download PDF</button>
            </div>
          </div>
          <div style={{ background: 'var(--ink)', padding: 24, borderRadius: 'var(--ds-r-2)' }}>
            <p className="sg-tag" style={{ marginBottom: 12, color: 'rgba(255,255,255,0.5)' }}>On dark</p>
            <div className="sg-row">
              <button className="lux-btn lux-btn--gold">Book this yatra</button>
              <button className="lux-btn lux-btn--ghost-light">Explore packages</button>
            </div>
          </div>
          <div>
            <p className="sg-tag" style={{ marginBottom: 12 }}>Sizes</p>
            <div className="sg-row">
              <button className="lux-btn lux-btn--gold lux-btn--sm">Small</button>
              <button className="lux-btn lux-btn--gold">Default</button>
              <button className="lux-btn lux-btn--gold lux-btn--lg">Large</button>
            </div>
          </div>
          <div>
            <p className="sg-tag" style={{ marginBottom: 12 }}>States</p>
            <div className="sg-row">
              <button className="lux-btn lux-btn--gold is-loading">Booking</button>
              <button className="lux-btn lux-btn--gold" disabled>Disabled</button>
              <button className="lux-btn lux-btn--ink is-loading">Loading</button>
              <span className="sg-note">Loading keeps the button width fixed — no layout shift.</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Links · Pills · Status ───────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Components" title="Links, pills &amp; status" />
        <div className="sg-grid" style={{ gap: 28 }}>
          <div>
            <p className="sg-tag" style={{ marginBottom: 12 }}>Editorial links</p>
            <div className="sg-row">
              <a className="lux-link" href="#">All packages <Icon name="arrowRight" size={14} /></a>
              <a className="lux-link" href="#">Read the guide <Icon name="arrowRight" size={14} /></a>
            </div>
          </div>
          <div>
            <p className="sg-tag" style={{ marginBottom: 12 }}>Pills</p>
            <div className="sg-row">
              <Pill>11 Nights · 12 Days</Pill>
              <Pill tone="gold">Bestseller</Pill>
              <Pill tone="solid">Featured</Pill>
            </div>
          </div>
          <div>
            <p className="sg-tag" style={{ marginBottom: 12 }}>Status chips</p>
            <div className="sg-row">
              <span className="lux-status lux-status--ok">Available</span>
              <span className="lux-status lux-status--info">Filling fast</span>
              <span className="lux-status lux-status--warn">Few seats</span>
              <span className="lux-status lux-status--danger">Sold out</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Cards + Facts ────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Components" title="Cards &amp; fact lists" lede="Surfaces are hairline-bordered, not shadowed. The fact list is the quiet-luxury spec device used throughout package pages." />
        <div className="lux-grid lux-grid--3" data-lux-stagger>
          <div className="lux-card lux-lift" style={{ overflow: 'hidden' }}>
            <Frame src={DEMO_IMG} alt="Kedarnath" ratio="3x2" />
            <div style={{ padding: 22 }}>
              <Eyebrow>Char Dham</Eyebrow>
              <h3 className="lux-display lux-display--sm" style={{ marginTop: 10 }}>Classic Char Dham</h3>
              <p className="lux-body" style={{ marginTop: 8, fontSize: '0.9rem' }}>Eleven nights across all four shrines, at an unhurried pace.</p>
              <div style={{ marginTop: 16 }}><a className="lux-link" href="#">View <Icon name="arrowRight" size={14} /></a></div>
            </div>
          </div>
          <div className="lux-card" style={{ padding: 22 }}>
            <p className="sg-tag" style={{ marginBottom: 14 }}>.lux-facts</p>
            <Facts items={[
              { k: 'Duration', v: '11 Nights · 12 Days' },
              { k: 'Transport', v: 'Private AC vehicle' },
              { k: 'Start', v: 'Haridwar' },
              { k: 'Difficulty', v: 'Moderate' },
              { k: 'Best season', v: 'May – Oct' },
            ]} />
          </div>
          <div className="lux-card lux-card--dark" style={{ padding: 22, background: 'var(--ink)' }}>
            <Eyebrow light>Assurance</Eyebrow>
            <h3 className="lux-display lux-display--sm" style={{ color: '#fff', marginTop: 10 }}>Direct operator</h3>
            <p className="lux-body" style={{ color: 'rgba(255,255,255,0.72)', marginTop: 8, fontSize: '0.9rem' }}>No aggregator markup. You speak to the team that runs the yatra.</p>
          </div>
        </div>
      </Section>

      {/* ── Icons ────────────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Components" title="Iconography" lede="One line-icon system — a single 1.8 stroke weight on a 24px grid, drawn in currentColor. No emoji, so iconography renders identically on every device." />
        <div className="lux-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))', gap: 12 }}>
          {ICONS.map((n) => (
            <div className="sg-ico-cell" key={n}>
              <Icon name={n} size={24} />
              <span>{n}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Form controls ────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Components" title="Form controls" lede="Hairline fields with a gold focus ring. Validation states are built in, ready for the Phase 5 booking wizard." />
        <div className="lux-grid lux-grid--3">
          <div className="lux-field">
            <label className="lux-label">Full name</label>
            <input className="lux-input" placeholder="Your name" defaultValue="" />
          </div>
          <div className="lux-field is-valid">
            <label className="lux-label">Travellers</label>
            <input className="lux-input" defaultValue="4 adults" />
            <span className="lux-hint">Looks good.</span>
          </div>
          <div className="lux-field is-invalid">
            <label className="lux-label">Phone</label>
            <input className="lux-input" defaultValue="12" />
            <span className="lux-hint lux-hint--error">Enter a valid 10-digit number.</span>
          </div>
        </div>
      </Section>

      {/* ── Loading ──────────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="States" title="Loading" lede="Async feedback in the editorial voice — a thin gold spinner, an indeterminate bar, and a three-dot thinking indicator for the chat assistant." />
        <div className="sg-row" style={{ gap: 40, alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}><span className="lux-spinner lux-spinner--sm" /><p className="sg-swatch__val" style={{ marginTop: 10 }}>sm</p></div>
          <div style={{ textAlign: 'center' }}><span className="lux-spinner" /><p className="sg-swatch__val" style={{ marginTop: 10 }}>default</p></div>
          <div style={{ textAlign: 'center' }}><span className="lux-spinner lux-spinner--lg" /><p className="sg-swatch__val" style={{ marginTop: 10 }}>lg</p></div>
          <div style={{ textAlign: 'center' }}><span className="lux-dots"><span /><span /><span /></span><p className="sg-swatch__val" style={{ marginTop: 10 }}>dots</p></div>
          <div style={{ flex: 1, minWidth: 200 }}><div className="lux-bar" /><p className="sg-swatch__val" style={{ marginTop: 10 }}>indeterminate bar</p></div>
        </div>
      </Section>

      {/* ── Skeletons ────────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="States" title="Skeletons" lede="Paper-toned loading placeholders that mirror the footprint of the real content — so when data arrives, nothing shifts (CLS stays at zero)." />
        <div className="lux-grid lux-grid--3">
          <div className="lux-skel-card">
            <div className="lux-skel lux-skel--img" />
            <div className="lux-skel-card__body">
              <div className="lux-skel lux-skel--chip" />
              <div className="lux-skel lux-skel--title" />
              <div className="lux-skel-stack">
                <div className="lux-skel lux-skel--text" />
                <div className="lux-skel lux-skel--text is-short" />
              </div>
            </div>
          </div>
          <div className="lux-card" style={{ padding: 22 }}>
            <div className="sg-row" style={{ gap: 12, marginBottom: 16 }}>
              <div className="lux-skel lux-skel--circle" />
              <div className="lux-skel-stack" style={{ flex: 1 }}>
                <div className="lux-skel lux-skel--text is-short" />
                <div className="lux-skel lux-skel--line" style={{ width: '40%' }} />
              </div>
            </div>
            <div className="lux-skel-stack">
              <div className="lux-skel lux-skel--text" />
              <div className="lux-skel lux-skel--text" />
              <div className="lux-skel lux-skel--text is-short" />
            </div>
          </div>
          <div className="lux-card" style={{ padding: 22 }}>
            <div className="lux-skel lux-skel--title" style={{ marginBottom: 16 }} />
            <div className="lux-skel-stack">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="sg-row" style={{ justifyContent: 'space-between', gap: 20 }}>
                  <div className="lux-skel lux-skel--line" style={{ width: '30%' }} />
                  <div className="lux-skel lux-skel--line" style={{ width: '45%' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Motion ───────────────────────────────────────────── */}
      <Section tone="paper" className="sg-block">
        <SectionHead eyebrow="Motion" title="Motion primitives" lede="Scroll into this section to watch the system move. Every effect is a data-attribute observed by one shared runtime — sections stay static server markup. Reduced-motion resolves all of it instantly." />

        <p className="sg-tag" style={{ marginBottom: 14 }}>Reveal · directions</p>
        <div className="lux-grid lux-grid--4" style={{ marginBottom: 40 }}>
          <div className="sg-tile" data-lux-reveal>up (default)</div>
          <div className="sg-tile" data-lux-reveal="fade">fade</div>
          <div className="sg-tile" data-lux-reveal="left">left</div>
          <div className="sg-tile" data-lux-reveal="scale">scale</div>
        </div>

        <p className="sg-tag" style={{ marginBottom: 14 }}>Stagger · children in sequence</p>
        <div className="lux-grid lux-grid--4" data-lux-stagger style={{ marginBottom: 40 }}>
          {Array.from({ length: 4 }).map((_, i) => <div key={i} className="sg-tile" style={{ textAlign: 'center' }}>{i + 1}</div>)}
        </div>

        <p className="sg-tag" style={{ marginBottom: 14 }}>Line-by-line headline</p>
        <h3 className="lux-lines lux-display lux-display--lg" style={{ marginBottom: 40 }}>
          <span className="lux-line"><span>A journey of four shrines,</span></span>
          <span className="lux-line"><span>told the way it deserves.</span></span>
        </h3>

        <p className="sg-tag" style={{ marginBottom: 14 }}>Image curtain reveal + slow zoom</p>
        <div className="lux-grid lux-grid--2">
          <Frame src={DEMO_IMG} alt="Himalayan valley" ratio="3x2" />
          <Frame src={DEMO_IMG} alt="Temple at dawn" ratio="3x2" parallax="0.12" />
        </div>
      </Section>

      {/* ── Accessibility ────────────────────────────────────── */}
      <Section tone="ink" className="sg-block">
        <SectionHead eyebrow="Non-negotiable" title="Accessibility" light lede="The design system is WCAG AA by construction, not by audit-afterthought." />
        <div className="lux-grid lux-grid--2" data-lux-stagger>
          {[
            ['Contrast', 'Body ink on paper clears 4.5:1; large display and UI clear 3:1. Gold is used for fills and accents, never for small body text on white.'],
            ['Focus', 'Every interactive element shows a 2px gold focus-visible ring at a 3px offset. Focus is never removed, only styled.'],
            ['Reduced motion', 'prefers-reduced-motion resolves all reveals, spinners, curtains and parallax instantly. Nothing depends on an animation completing.'],
            ['Reduced transparency & mobile', 'Glass drops its blur under prefers-reduced-transparency and on small screens, falling back to an opaque surface so text stays legible and the GPU stays free.'],
            ['No-JS safety net', 'A .no-js fallback forces revealed content visible, so a failed script never hides copy or a call to action.'],
            ['Semantic markup', 'Fact lists are real <dl> pairs; sections carry headings; icons are decorative currentColor SVG with text labels alongside.'],
          ].map(([h, b]) => (
            <div className="lux-card lux-card--dark" key={h} style={{ padding: 22 }}>
              <h3 className="lux-display lux-display--sm" style={{ color: '#fff' }}>{h}</h3>
              <p className="lux-body" style={{ color: 'rgba(255,255,255,0.72)', marginTop: 8, fontSize: '0.9rem' }}>{b}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <Rule tone="light" />
          <p className="lux-caption" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 20 }}>
            Phase 1 · Design system complete. Awaiting approval before Phase 2 (homepage).
          </p>
        </div>
      </Section>
    </div>
  );
}
