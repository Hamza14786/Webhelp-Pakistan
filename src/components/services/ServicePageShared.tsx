import { Link } from "@tanstack/react-router";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";
import { HeroTitle } from "@/components/HeroTitle";
import { ClientVisual } from "@/components/three/ClientVisual";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";

import "./ServicePageShared.css";

/* ============================================================
   ServiceHero
   ============================================================ */
export function ServiceHero({
  eyebrow,
  title,
  lead,
  ctaText,
  ctaSlug,
  visual,
  category = "services",
}: {
  eyebrow: string;
  title: string;
  lead: string;
  ctaText: string;
  ctaSlug: string;
  visual?: ReactNode;
  category?: "services" | "products";
}) {
  return (
    <section data-site-hero className="subpage-hero relative overflow-hidden border-b border-border">
      <ClientVisual />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"
        aria-hidden="true"
      />
      <div className={`relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24${visual ? " svc-hero-layout" : ""}`}>
        <div className="svc-hero-copy">
        <Link
          to={category === "products" ? "/products" : "/services"}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← All {category}
        </Link>
        <Reveal>
          <p className="svc-eyebrow mt-6">{eyebrow}</p>
          <h1 className="svc-hero-title mt-4 max-w-4xl"><HeroTitle title={title} /></h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>
          <Link
            to="/contact"
            search={{ service: ctaSlug }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {ctaText} <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        </div>
        {visual && <Reveal className="svc-hero-visual" y={18}>{visual}</Reveal>}
      </div>
    </section>
  );
}

/* ============================================================
   FeatureCard
   ============================================================ */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  number,
  compact,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  number?: string;
  compact?: boolean;
}) {
  return (
    <div className={`svc-card${compact ? " svc-card-compact" : ""}`}>
      {number && <span className="svc-card-number">{number}</span>}
      <div className="svc-card-icon">
        <Icon size={compact ? 20 : 24} />
      </div>
      <h3 className="svc-card-title">{title}</h3>
      <p className="svc-card-desc">{description}</p>
    </div>
  );
}

/* ============================================================
   ProcessTimeline
   ============================================================ */
export function ProcessTimeline({
  steps,
}: {
  steps: { number: string; title: string; description: string }[];
}) {
  return (
    <div className="svc-timeline">
      {steps.map((step) => (
        <div key={step.number} className="svc-timeline-step">
          <div className="svc-timeline-dot">{step.number}</div>
          <div>
            <p className="svc-timeline-label">{step.title}</p>
            <p className="svc-timeline-desc">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   ServiceFaq
   ============================================================ */
export function ServiceFaq({
  eyebrow = "FAQS",
  title = "Frequently Asked Questions",
  items,
  idPrefix,
}: {
  eyebrow?: string;
  title?: string;
  items: FaqItem[];
  idPrefix: string;
}) {
  return (
    <section className="svc-section">
      <div className="svc-container svc-faq-layout">
        <div className="svc-faq-intro">
          <Reveal>
            <p className="svc-eyebrow">{eyebrow}</p>
            <h2 className="svc-section-title mt-3">{title}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <img
              src="/images/faq-character-small.png"
              alt="Do I have any Question?"
              width={400}
              height={478}
              loading="lazy"
              decoding="async"
              className="svc-faq-character"
            />
          </Reveal>
        </div>
        <Reveal className="svc-faq-accordion">
          <FaqAccordion items={items} idPrefix={idPrefix} />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   ServiceCta
   ============================================================ */
export function ServiceCta({
  title,
  description,
  buttonText = "Get in Touch",
  slug,
}: {
  title: string;
  description: string;
  buttonText?: string;
  slug: string;
}) {
  return (
    <section className="svc-cta">
      <div className="svc-container">
        <Reveal>
          <h2 className="svc-cta-title">{title}</h2>
          <p className="svc-cta-desc">{description}</p>
          <Link
            to="/contact"
            search={{ service: slug }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {buttonText} <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   SectionBlock — consistent section wrapper
   ============================================================ */
export function SectionBlock({
  children,
  className = "",
  glow,
  border,
}: {
  children: ReactNode;
  className?: string;
  glow?: "right" | "left";
  border?: boolean;
}) {
  const glowClass = glow === "left" ? "svc-bg-glow svc-bg-glow-left" : glow === "right" ? "svc-bg-glow" : "";
  return (
    <section
      className={`svc-section ${glowClass} ${border ? "border-t border-border" : ""} ${className}`}
    >
      <div className="svc-container">{children}</div>
    </section>
  );
}

/* ============================================================
   SectionHeader — eyebrow + title + optional lead
   ============================================================ */
export function SectionHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal>
      {eyebrow && <p className="svc-eyebrow">{eyebrow}</p>}
      <h2 className="svc-section-title mt-3">{title}</h2>
      {lead && <p className="svc-section-lead">{lead}</p>}
    </Reveal>
  );
}
