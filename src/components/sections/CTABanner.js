import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * CTABanner — the closing conversion block.
 *
 * Tailark-style block rebuilt on this project's tokens. Deliberately plain:
 * the stock versions of this block are a gradient panel with a glow and a
 * rounded-3xl border, which on a pilgrimage booking site reads as an ad. This
 * one is a flat ink panel with one gold button, because specificity and calm
 * are what convert here.
 *
 * Server component. Uses `next/link` for internal hrefs so client navigation
 * and prefetch work; falls back to `<a>` for `tel:` / `https:` / `wa.me`.
 *
 * House rule: ONE primary (gold) action. The secondary is a ghost link. If a
 * block needs two equally-weighted CTAs, the page has not decided what it
 * wants the visitor to do.
 */
export default function CTABanner({
  eyebrow,
  title,
  lede,
  primary,   // { href, label }
  secondary, // { href, label }
  tone = "ink",
  className,
}) {
  const surfaces = {
    ink: "bg-[color:var(--ink,#0B1B38)]",
    navy: "bg-[color:var(--navy,#0F2B5B)]",
  };

  return (
    <div
      data-lux-reveal="up"
      className={cn(
        "relative overflow-hidden rounded-[var(--radius)] px-6 py-12 text-center sm:px-12 sm:py-16",
        surfaces[tone] ?? surfaces.ink,
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--gold,#E8920A)]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mx-auto mt-3 max-w-[20ch] font-[family-name:var(--font-display)] text-[clamp(1.5rem,1.1rem+1.8vw,2.3rem)] leading-[1.2] text-white">
        {title}
      </h2>

      {lede ? (
        <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-white/70">
          {lede}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {primary ? (
          <Button
            asChild
            size="lg"
            className="bg-[color:var(--gold,#E8920A)] text-[color:var(--navy,#0F2B5B)] hover:bg-[color:var(--gold-dark,#C67A08)] hover:text-white"
          >
            <SmartLink href={primary.href}>{primary.label}</SmartLink>
          </Button>
        ) : null}

        {secondary ? (
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <SmartLink href={secondary.href}>{secondary.label}</SmartLink>
          </Button>
        ) : null}
      </div>
    </div>
  );
}

/** Internal routes get `next/link`; protocol links stay plain anchors. */
function SmartLink({ href = "#", children, ...props }) {
  const external = /^(https?:|tel:|mailto:|wa\.me)/i.test(href);
  if (external) {
    return (
      <a
        href={href}
        rel={href.startsWith("http") ? "noopener" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
