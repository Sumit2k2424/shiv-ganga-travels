import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

/**
 * LogoCloud — a quiet band of partner / accreditation marks.
 *
 * Tailark-style block on this project's tokens.
 *
 * Two modes, and the choice matters:
 *   - `static` (default) — a plain grid. Server component, zero JS. Correct
 *     for a handful of marks that should be read.
 *   - `marquee` — wraps `magicui/marquee` for a continuous scroll. Also zero
 *     JS (the scroll is a CSS animation), so the cost is not weight — it is
 *     that movement here is decoration. Only worth it past ~8 marks, where a
 *     static grid would dominate the section. Opt-in, never the default.
 *
 * Marks render at reduced opacity and lift to full on hover, so the band
 * supports the page rather than competing with it. Registration numbers and
 * accreditation IDs belong in the `label`, not as a separate line — they are
 * the part that actually builds trust.
 *
 * @param {{src: string, alt: string, label?: string, width?: number, height?: number}[]} items
 */
export default function LogoCloud({ items = [], variant = "static", className }) {
  const marks = items.map((item, i) => (
    <div
      key={item.alt ?? i}
      className="flex shrink-0 flex-col items-center justify-center gap-2 px-6 py-4"
      title={item.label}
    >
      {/* Plain <img>: these are small, fixed-size, mostly SVG marks. Routing
          them through next/image adds an optimisation round-trip for no
          measurable gain, and several are inline SVG data URIs already. */}
      <img
        src={item.src}
        alt={item.alt}
        width={item.width ?? 120}
        height={item.height ?? 40}
        loading="lazy"
        decoding="async"
        className={cn(
          "h-8 w-auto object-contain opacity-55 grayscale",
          "transition-[opacity,filter] [transition-duration:var(--ui-dur-base,250ms)]",
          "hover:opacity-100 hover:grayscale-0"
        )}
      />
      {item.label ? (
        <span className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--text-muted,#64748B)]">
          {item.label}
        </span>
      ) : null}
    </div>
  ));

  if (variant === "marquee") {
    // The edge mask belongs here rather than at the call site: a marquee whose
    // marks pop in and out at a hard boundary looks broken, so every consumer
    // would otherwise re-add the same gradient. `pauseOnHover` lets someone
    // actually read a mark they noticed.
    return (
      <Marquee
        pauseOnHover
        className={cn(
          "[--duration:40s] [--gap:1rem]",
          "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
          className
        )}
      >
        {marks}
      </Marquee>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-4 gap-y-2",
        className
      )}
    >
      {marks}
    </div>
  );
}
