import { cn } from "@/lib/utils";

/**
 * SectionShell — the container, rhythm and heading scaffold every marketing
 * section sits in.
 *
 * This is the piece that makes blocks from different sources look like one
 * site. Tailark, Aceternity and shadcn blocks each arrive with their own
 * `py-24 px-4 max-w-7xl mx-auto` baked in, at their own values. Strip that
 * from the block and wrap it in this, and the vertical rhythm, gutters,
 * container width and heading hierarchy come from one place.
 *
 * Server component. Zero client JS — the entrance is handled by `LuxMotion`,
 * already mounted once in layout.js.
 *
 * @param {'paper'|'white'|'ink'|'navy'} tone    background surface
 * @param {'default'|'wide'|'narrow'}    width   container width
 * @param {boolean}                      tight   55% vertical rhythm
 * @param {string}                       eyebrow micro-label above the title
 */
export default function SectionShell({
  children,
  eyebrow,
  title,
  lede,
  tone = "white",
  width = "default",
  tight = false,
  align = "left",
  className,
  headingLevel: Heading = "h2",
  ...props
}) {
  const surfaces = {
    white: "bg-white text-[color:var(--ink,#0B1B38)]",
    paper: "bg-[color:var(--paper,#FBFAF7)] text-[color:var(--ink,#0B1B38)]",
    ink: "bg-[color:var(--ink,#0B1B38)] text-white",
    navy: "bg-[color:var(--navy,#0F2B5B)] text-white",
  };
  const dark = tone === "ink" || tone === "navy";

  return (
    <section
      className={cn("ui-section", tight && "ui-section--tight", surfaces[tone], className)}
      {...props}
    >
      <div
        className={cn(
          "ui-container",
          width === "wide" && "ui-container--wide",
          width === "narrow" && "ui-container--narrow"
        )}
      >
        {(eyebrow || title || lede) && (
          <header
            data-lux-reveal="up"
            className={cn("mb-10 sm:mb-14", align === "center" && "mx-auto max-w-2xl text-center")}
          >
            {eyebrow ? (
              <p
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.15em]",
                  dark ? "text-[color:var(--gold,#E8920A)]" : "text-[color:var(--gold-dark,#C67A08)]"
                )}
              >
                {eyebrow}
              </p>
            ) : null}

            {title ? (
              <Heading
                className={cn(
                  "font-[family-name:var(--font-display)] leading-[1.15] tracking-[-0.01em]",
                  "text-[clamp(1.6rem,1.1rem+2vw,2.6rem)]",
                  eyebrow && "mt-3"
                )}
              >
                {title}
              </Heading>
            ) : null}

            {lede ? (
              <p
                className={cn(
                  "mt-4 max-w-[62ch] text-[15px] leading-relaxed sm:text-base",
                  align === "center" && "mx-auto",
                  dark ? "text-white/70" : "text-[color:var(--text-mid,#334155)]"
                )}
              >
                {lede}
              </p>
            ) : null}
          </header>
        )}

        {children}
      </div>
    </section>
  );
}
