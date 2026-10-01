import { Reveal } from "@/components/Reveal";
import { HeroTitle } from "@/components/HeroTitle";
import { ClientVisual } from "@/components/three/ClientVisual";

export function PageHero({
  eyebrow,
  title,
  lead,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  centered?: boolean;
}) {
  return (
    <section data-site-hero className="subpage-hero relative overflow-hidden border-b border-border">
      <ClientVisual />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className={centered ? "text-center" : ""}>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
          <h1 className={`mt-4 max-w-3xl text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl ${centered ? "mx-auto" : ""}`}>
            <HeroTitle title={title} />
          </h1>
          <p className={`mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg ${centered ? "mx-auto" : ""}`}>
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className = "",
  titleClassName = "text-3xl sm:text-4xl",
  eyebrowClassName = "text-xs",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
}) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p
          className={`${eyebrowClassName} font-semibold tracking-[0.2em] text-primary uppercase`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 font-semibold text-balance ${titleClassName}`}>{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p>}
    </Reveal>
  );
}
