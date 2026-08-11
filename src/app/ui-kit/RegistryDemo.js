// Server component — no 'use client'. That is the point: everything rendered
// here that is NOT inside an explicit client island ships zero JS, which is
// how the claims in UI_COMPONENT_GUIDE.md get verified rather than asserted.

// ── Magic UI (additions) ──
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { AuroraText } from '@/components/magicui/aurora-text';
import { BorderBeam } from '@/components/magicui/border-beam';

// ── Aceternity ──
import { Spotlight } from '@/components/aceternity/spotlight';
import { Timeline } from '@/components/aceternity/timeline';
import { CardContainer, CardBody, CardItem } from '@/components/aceternity/card-3d';
import { StickyScrollReveal } from '@/components/aceternity/sticky-scroll-reveal';

// ── React Bits ──
import { SpotlightCard } from '@/components/reactbits/spotlight-card';
import { GlareHover } from '@/components/reactbits/glare-hover';
import { Magnet } from '@/components/reactbits/magnet';

// ── Sections (Tailark-style, rebuilt on project tokens) ──
import SectionShell from '@/components/sections/SectionShell';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTABanner from '@/components/sections/CTABanner';
import StatBand from '@/components/sections/StatBand';
import TestimonialWall from '@/components/sections/TestimonialWall';
import LogoCloud from '@/components/sections/LogoCloud';

import ShadcnIsland from './ShadcnIsland';

const FEATURES = [
  { icon: 'shieldCheck', title: 'Direct operator', description: 'You pay us, not an aggregator. No commission layer, no handoff.' },
  { icon: 'route',       title: 'Route-tested drivers', description: 'Every driver has run the Kedarnath and Badrinath legs before.' },
  { icon: 'medical',     title: 'Altitude support', description: 'Oxygen on board above Guptkashi, and a doctor on call.' },
];

const MILESTONES = [
  { label: 'Day 1', title: 'Haridwar to Barkot', content: 'Ganga aarti the previous evening, early departure, overnight at Barkot.' },
  { label: 'Day 2', title: 'Yamunotri darshan',  content: 'Janki Chatti trailhead, 6 km ascent. Ponies and palki available.' },
  { label: 'Day 3', title: 'On to Uttarkashi',   content: 'Descent and transfer, with a stop at Prakateshwar cave.' },
];

const STATS = [
  { value: '50,000+', label: 'Pilgrims', note: 'Since 2010' },
  { value: '4.8',     label: 'Google rating', note: 'Across 1,200 reviews' },
  { value: '16',      label: 'Years running' },
  { value: '₹0',      label: 'Commission', note: 'Booked direct' },
];

const REVIEWS = [
  { quote: 'Every transfer was on time and the price never moved from the quote.', name: 'Anita R.', meta: 'Bengaluru', rating: 5 },
  { quote: 'Our driver knew the Kedarnath route better than the map did.', name: 'Suresh M.', meta: 'Kolkata', rating: 5 },
  { quote: 'Booked for my parents. They were genuinely looked after the whole way.', name: 'Farah K.', meta: 'Noida', rating: 4 },
];

const DESTINATIONS = [
  { title: 'Kedarnath', description: 'The 16 km walk from Gaurikund, or six minutes by helicopter from Phata.', visual: <Swatch label="Kedarnath" /> },
  { title: 'Badrinath', description: 'The only dham reachable by road to the temple door.', visual: <Swatch label="Badrinath" /> },
];

// Placeholder marks. The site ships no partner logos yet, and inventing
// accreditation badges — even on a noindex reference page — is not a thing to
// do. These are obviously-blank wordmarks; real marks go in /public.
function placeholderMark(text) {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">` +
    `<rect width="120" height="40" fill="none" stroke="#0F2B5B" stroke-width="1"/>` +
    `<text x="60" y="24" text-anchor="middle" font-family="sans-serif" font-size="11" ` +
    `letter-spacing="1.5" fill="#0F2B5B">${text}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const ALL_MARKS = [
  'UTDB', 'IATO', 'ADTOI', 'GRC', 'MOT',
  'TAAI', 'ITTA', 'UKTB', 'GMVN',
].map((t) => ({
  src: placeholderMark(t),
  alt: `${t} (placeholder mark)`,
  label: t,
}));

// Five reads as a grid. Nine is where the grid starts to dominate the section
// and the marquee earns its place — the two demos below are that threshold.
const MARKS = ALL_MARKS.slice(0, 5);

function Swatch({ label }) {
  return (
    <div className="flex h-full min-h-[180px] w-full items-center justify-center bg-[color:var(--navy,#0F2B5B)] text-sm uppercase tracking-[0.2em] text-white/70">
      {label}
    </div>
  );
}

function Note({ children }) {
  return <p className="mb-5 max-w-[68ch] text-[13px] leading-relaxed text-[color:var(--text-muted,#64748B)]">{children}</p>;
}

export default function RegistryDemo() {
  return (
    <>
      {/* ── Editorial context. Everything below renders at 2px radius,
             hairline borders, no shadow — same components, same tokens. ── */}
      <div data-ui="editorial">
        <SectionShell
          tone="ink"
          eyebrow="Aceternity · Spotlight"
          title="Dark hero treatments"
          lede="Spotlight needs a dark ground to read at all. It plays once and stops."
          className="relative overflow-hidden"
        >
          <Spotlight />
          <div className="relative z-10 space-y-4">
            <p className="font-[family-name:var(--font-display)] text-3xl text-white">
              Char Dham, <AuroraText>done properly</AuroraText>
            </p>
            <p className="text-sm text-white/60">
              AuroraText above — one word, not the whole headline.
            </p>
          </div>
        </SectionShell>

        <SectionShell
          tone="paper"
          eyebrow="Magic UI · text"
          title="Text treatments"
          lede="All three are pure CSS. No motion library, no JS."
        >
          <div className="space-y-6">
            <p className="text-lg">
              <AnimatedShinyText>Direct operator since 2010</AnimatedShinyText>
              <span className="ml-3 text-xs text-[color:var(--text-muted,#64748B)]">AnimatedShinyText — trust chips</span>
            </p>
            <p className="font-[family-name:var(--font-display)] text-3xl">
              <AnimatedGradientText>2026 dates now open</AnimatedGradientText>
            </p>
          </div>
        </SectionShell>

        <SectionShell
          tone="white"
          eyebrow="Magic UI · BorderBeam"
          title="One per view. Never two."
          lede="The most attention-grabbing device in the kit, reserved for the primary conversion surface."
        >
          <div className="relative max-w-sm overflow-hidden rounded-[var(--radius)] border bg-white p-6">
            <p className="font-semibold">Char Dham 11N / 12D</p>
            <p className="mt-1 text-sm text-[color:var(--text-muted,#64748B)]">From ₹18,500 per person</p>
            <BorderBeam />
          </div>
        </SectionShell>

        <SectionShell tone="paper" eyebrow="Sections" title="FeatureGrid" lede="Tailark-style block rebuilt on project tokens — hairline, not rounded SaaS cards.">
          <FeatureGrid items={FEATURES} columns={3} />
        </SectionShell>

        <SectionShell tone="white" eyebrow="Sections" title="StatBand">
          <Note>
            Static figures, deliberately. NumberTicker renders 0 into the SSR HTML,
            which would ship a trust band as a row of zeroes to crawlers.
          </Note>
          <StatBand items={STATS} />
        </SectionShell>

        <SectionShell tone="paper" eyebrow="Sections" title="LogoCloud" tight>
          <Note>
            Static grid by default. Both variants are server components — the
            marquee scroll is a CSS animation, so the reason it stays opt-in is
            that movement here is decoration, not that it costs weight. Marks
            sit at 55% opacity and grayscale so the band supports the page
            instead of competing with it.
          </Note>
          <LogoCloud items={MARKS} />

          <p className="mb-5 mt-14 text-[13px] font-semibold uppercase tracking-[0.15em] text-[color:var(--text-muted,#64748B)]">
            variant=&quot;marquee&quot;
          </p>
          <Note>
            Nine marks. Pauses on hover, and `animate-marquee` is in the
            reduced-motion block in `ui-system.css`, so it stops dead for anyone
            who has asked for that. The band cancels the container gutter — a
            scroll that visibly starts and stops inside a column reads as broken
            rather than continuous — and fades at both edges so marks enter and
            leave instead of appearing.
          </Note>
          <div className="mx-[calc(var(--ui-gutter)*-1)]">
            <LogoCloud items={ALL_MARKS} variant="marquee" />
          </div>
        </SectionShell>

        <SectionShell tone="paper" eyebrow="Aceternity · Timeline" title="Journey narrative">
          <Note>Server component. Entrance handled by the LuxMotion runtime already in layout.js — zero added client JS.</Note>
          <Timeline items={MILESTONES} />
        </SectionShell>

        <SectionShell tone="white" eyebrow="React Bits" title="Surface interactions">
          <Note>
            SpotlightCard writes CSS custom properties on pointer move rather than
            calling setState, so the pointer never re-renders React. GlareHover is
            pure CSS and ships no JS at all.
          </Note>
          <div className="grid gap-6 sm:grid-cols-3">
            <SpotlightCard className="ui-lift p-6">
              <p className="font-semibold">SpotlightCard</p>
              <p className="mt-2 text-sm text-[color:var(--text-muted,#64748B)]">Gold highlight follows the pointer.</p>
            </SpotlightCard>

            <GlareHover className="border">
              <Swatch label="GlareHover" />
            </GlareHover>

            <CardContainer className="h-full w-full">
              <CardBody className="h-full rounded-[var(--radius)] border bg-white p-6">
                <CardItem translateZ={28}>
                  <p className="font-semibold">Card3D</p>
                </CardItem>
                <CardItem translateZ={14}>
                  <p className="mt-2 text-sm text-[color:var(--text-muted,#64748B)]">Tilt capped at 6°, off on touch.</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </SectionShell>

        <SectionShell tone="paper" eyebrow="Sections" title="TestimonialWall">
          <Note>CSS columns, not a JS masonry library. Distinct from TestimonialSlider — never use both on one page.</Note>
          <TestimonialWall items={REVIEWS} />
        </SectionShell>

        <SectionShell tone="white" eyebrow="Aceternity · StickyScrollReveal" title="Destination presentation">
          <Note>
            Inactive copy dims to 45% rather than 0% opacity, so every destination
            description is present in the server HTML and readable with JS off.
          </Note>
          <StickyScrollReveal content={DESTINATIONS} />
        </SectionShell>

        <SectionShell tone="white" eyebrow="React Bits · Magnet" title="Primary CTA">
          <Note>One per view. Never on nav links — a moving target is harder to hit.</Note>
          <Magnet>
            <span className="inline-flex h-12 items-center rounded-[var(--radius)] bg-[color:var(--gold,#E8920A)] px-8 font-semibold text-[color:var(--navy,#0F2B5B)]">
              Check 2026 availability
            </span>
          </Magnet>
        </SectionShell>

        <SectionShell tone="white" eyebrow="Sections" title="CTABanner" width="narrow">
          <CTABanner
            eyebrow="Booking now for 2026"
            title="Talk to the people who run the trip"
            lede="No call centre, no aggregator. You reach the operator."
            primary={{ href: '/contact', label: 'Get a quote' }}
            secondary={{ href: 'tel:+919876543210', label: 'Call directly' }}
          />
        </SectionShell>
      </div>

      {/* ── Commercial context (default). Same components, 12px radius,
             soft shadow — what the ~190 live routes render in today. ── */}
      <SectionShell
        tone="white"
        eyebrow="shadcn/ui · additions"
        title="New primitives, commercial geometry"
        lede="The identical components as above, outside data-ui=&quot;editorial&quot;. Only the geometry moves."
      >
        <ShadcnIsland />
      </SectionShell>
    </>
  );
}
