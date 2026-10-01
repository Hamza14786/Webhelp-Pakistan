import { createFileRoute, Link } from "@tanstack/react-router";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Braces from "lucide-react/dist/esm/icons/braces";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import Code2 from "lucide-react/dist/esm/icons/code-2";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import Eye from "lucide-react/dist/esm/icons/eye";
import Grid from "lucide-react/dist/esm/icons/grid";
import LayoutList from "lucide-react/dist/esm/icons/layout-list";
import Lock from "lucide-react/dist/esm/icons/lock";
import Maximize2 from "lucide-react/dist/esm/icons/maximize-2";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import X from "lucide-react/dist/esm/icons/x";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { ClientVisual } from "@/components/three/ClientVisual";
import "./work.css";

const title = "Selected Projects | WebHelp Pakistan";
const description =
  "A showcase of high-performance digital platforms, web systems, and custom applications engineered for scale.";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }] }),
  component: WorkPage,
});

export type Project = {
  number: string;
  name: string;
  category: "E-Commerce" | "News & Editorial" | "Corporate & Services" | "Property";
  domain: string;
  url: string;
  description: string;
  detailedCase: string;
  tags: string[];
  highlights: string[];
  tone: "green" | "coral" | "gold" | "blue" | "cyan";
  accentColor: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  clientLocation: string;
  year: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Infusions",
    category: "E-Commerce",
    domain: "infusions.pk",
    url: "https://infusions.pk",
    image: "/images/projects/infusions.png",
    imageWidth: 1280,
    imageHeight: 1280,
    description:
      "A natural wellness commerce experience with clear product discovery, confident storytelling, and effortless ordering.",
    detailedCase:
      "Engineered an end-to-end luxury wellness commerce experience designed for rapid conversions and high repeat customer engagement. Features tailored product bundle selectors, seamless cart persistence, and lightning-fast page transitions.",
    highlights: [
      "Custom WooCommerce headless-ready setup",
      "Sub-second First Contentful Paint",
      "Streamlined 2-step checkout flow",
    ],
    tags: ["WooCommerce", "UX Design", "Custom Checkout", "Performance"],
    tone: "green",
    accentColor: "#10b981",
    clientLocation: "Pakistan",
    year: "2024",
  },
  {
    number: "02",
    name: "Narrative",
    category: "News & Editorial",
    domain: "narrativepakistan.com",
    url: "https://narrativepakistan.com",
    image: "/images/projects/narrative.png",
    description:
      "An editorial platform for ideas from Pakistan and South Asia, designed to make timely stories easy to explore.",
    detailedCase:
      "Built a high-traffic editorial destination with reading-focused typography, responsive content hierarchies, dynamic author archives, and an automated newsletter dispatch system for thousands of daily readers.",
    highlights: [
      "Dynamic article indexing & tagging",
      "Distraction-free editorial reader view",
      "Optimized CDN delivery for media assets",
    ],
    tags: ["News Portal", "Web Development", "Editorial UX", "High Traffic"],
    tone: "coral",
    accentColor: "#f97316",
    clientLocation: "South Asia",
    year: "2023",
  },
  {
    number: "03",
    name: "Legal Diaries",
    category: "News & Editorial",
    domain: "legaldiaries.pk",
    url: "https://legaldiaries.pk",
    image: "/images/projects/legal-diaries.png",
    description:
      "A professional legal-media platform created to simplify commentary, case analysis, and public-interest knowledge.",
    detailedCase:
      "Developed a dedicated legal knowledge portal featuring structured search for legal precedents, categorized article digests, judicial opinion forums, and mobile-first readability for attorneys and law scholars.",
    highlights: [
      "Categorized legal precedent repository",
      "Structured search & taxonomy engine",
      "Compliant, accessible design architecture",
    ],
    tags: ["Legal Portal", "Content Platform", "Search Engine", "Publishing"],
    tone: "gold",
    accentColor: "#eab308",
    clientLocation: "Pakistan",
    year: "2023",
  },
  {
    number: "04",
    name: "Pavilion Financials",
    category: "Corporate & Services",
    domain: "pavilionfinancials.com",
    url: "https://pavilionfinancials.com",
    image: "/images/projects/pavilion-financials.png",
    imageWidth: 1280,
    imageHeight: 1280,
    description:
      "A refined financial-services presence built to communicate institutional expertise, trust, and a premium client experience.",
    detailedCase:
      "Crafted an institutional digital presence for a private wealth consultancy. Features secure client consultation intake, interactive services matrix, multi-currency display, and enterprise-grade security protocols.",
    highlights: [
      "Institutional-grade trust signals & security",
      "Interactive advisory consultation pipeline",
      "Multi-tiered corporate service matrix",
    ],
    tags: ["Wealth Management", "Financial Services", "Web Design", "Development"],
    tone: "blue",
    accentColor: "#0ea5e9",
    clientLocation: "Global",
    year: "2024",
  },
  {
    number: "05",
    name: "Pind Brand",
    category: "E-Commerce",
    domain: "pindbrand.com",
    url: "https://pindbrand.com",
    image: "/images/projects/pind-brand.png",
    description:
      "A culture-led fashion store balancing heritage, traditional pieces, and everyday wear with a modern shopping journey.",
    detailedCase:
      "Launched an authentic fashion retail experience uniting cultural tradition with high-speed modern digital storefronts. Features dynamic sizing guides, rapid filter drawers, and integrated regional payment processors.",
    highlights: [
      "Fast regional payment gateway integration",
      "Interactive visual lookbook gallery",
      "Inventory sync & low-stock alerts",
    ],
    tags: ["WooCommerce", "Fashion Store", "E-Commerce", "Lookbook"],
    tone: "coral",
    accentColor: "#f43f5e",
    clientLocation: "Worldwide",
    year: "2024",
  },
  {
    number: "06",
    name: "Skyline Limo",
    category: "Corporate & Services",
    domain: "skylinelimo.ca",
    url: "https://skylinelimo.ca",
    image: "/images/projects/skyline-limo.png",
    imageWidth: 1280,
    imageHeight: 1280,
    description:
      "A polished digital experience for a luxury chauffeur service, with direct booking and clear service discovery.",
    detailedCase:
      "Engineered an effortless executive transportation booking portal. Features dynamic route fare estimation, vehicle fleet showcases with high-res galleries, airport transfer booking forms, and immediate dispatch notifications.",
    highlights: [
      "Interactive fleet preview & specifications",
      "Automated booking inquiry dispatcher",
      "Optimized for quick mobile reservations",
    ],
    tags: ["Transportation", "Booking Engine", "Luxury Fleet", "Web Development"],
    tone: "gold",
    accentColor: "#f59e0b",
    clientLocation: "Canada",
    year: "2023",
  },
  {
    number: "07",
    name: "Gulberg Office",
    category: "Property",
    domain: "gulbergoffice.com",
    url: "https://gulbergoffice.com",
    image: "/images/projects/gulberg-office.png",
    imageWidth: 1280,
    imageHeight: 1280,
    description:
      "A focused commercial-property experience helping businesses discover office opportunities in Gulberg, Islamabad.",
    detailedCase:
      "Designed a modern commercial real estate showcase facilitating property exploration, floor plan evaluations, direct broker communication, and dynamic location amenity maps.",
    highlights: [
      "High-resolution floor plans & specifications",
      "Direct broker lead capture workflow",
      "Interactive district amenities breakdown",
    ],
    tags: ["Commercial Property", "Real Estate", "Web Design", "Lead Gen"],
    tone: "cyan",
    accentColor: "#06b6d4",
    clientLocation: "Islamabad",
    year: "2024",
  },
];

const categoryFilters = [
  "All",
  "E-Commerce",
  "News & Editorial",
  "Corporate & Services",
  "Property",
] as const;

type FilterCategory = (typeof categoryFilters)[number];

export function BrowserMockup({
  project,
  priority = false,
  onOpenPreview,
}: {
  project: Project;
  priority?: boolean;
  onOpenPreview?: (project: Project) => void;
}) {
  const optimizedImage = project.image.replace(/\.png$/, "-1280.jpg");
  const responsiveImages = `${project.image.replace(/\.png$/, "-720.jpg")} 720w, ${optimizedImage} 1280w`;

  return (
    <div
      className="browser-frame group"
      style={{ "--accent": project.accentColor } as React.CSSProperties}
    >
      {/* Ambient background glow */}
      <div
        className="browser-frame__glow"
        style={{ background: `radial-gradient(circle, ${project.accentColor}25 0%, transparent 70%)` }}
        aria-hidden="true"
      />

      {/* macOS Browser Header */}
      <div className="browser-frame__header">
        <div className="browser-frame__traffic-lights">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>

        <div className="browser-frame__url-bar">
          <Lock className="h-3 w-3 text-emerald-400 shrink-0" />
          <span className="browser-frame__url-text">https://{project.domain}</span>
          <span className="browser-frame__live-pulse" title="Live Website" />
        </div>

        <div className="browser-frame__actions">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="browser-frame__icon-btn"
            title={`Open ${project.domain} in new tab`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Web Preview Content */}
      <div className="browser-frame__viewport">
        <img
          className="browser-frame__img"
          src={optimizedImage}
          srcSet={responsiveImages}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
          alt={`${project.name} website preview`}
          width={project.imageWidth ?? 1280}
          height={project.imageHeight ?? 720}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />

        {/* Hover Action Overlay */}
        <div className="browser-frame__overlay">
          <div className="browser-frame__overlay-content">
            {onOpenPreview && (
              <button
                type="button"
                onClick={() => onOpenPreview(project)}
                className="browser-overlay-btn browser-overlay-btn--preview"
              >
                <Eye className="h-4 w-4" />
                <span>Quick View</span>
              </button>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="browser-overlay-btn browser-overlay-btn--visit"
            >
              <span>Visit Site</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const optimizedImage = project.image.replace(/\.png$/, "-1280.jpg");
  const nextSectionImage = project.image.replace(/\.png$/, "-next-1280.jpg");

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-shell" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header__info">
            <span
              className="modal-header__category"
              style={{ color: project.accentColor }}
            >
              {project.category} · {project.year}
            </span>
            <h2 className="modal-header__title">{project.name}</h2>
          </div>

          <div className="modal-header__actions">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="modal-header__launch-btn"
            >
              <span>Visit Website</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="modal-header__close-btn"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-preview-column">
            <div className="modal-browser-view">
              <div className="modal-browser-view__bar">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
                <span className="modal-browser-view__url">https://{project.domain}</span>
              </div>
              <div className="modal-screenshot-scroll">
                <img
                  src={optimizedImage}
                  alt={`${project.name} main screen`}
                  className="modal-screenshot"
                  loading="eager"
                />
                <img
                  src={nextSectionImage}
                  alt={`${project.name} extended screen`}
                  className="modal-screenshot modal-screenshot--secondary"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="modal-details-column">
            <div className="modal-section">
              <h4 className="modal-label">Overview &amp; Architecture</h4>
              <p className="modal-text">{project.detailedCase}</p>
            </div>

            <div className="modal-section">
              <h4 className="modal-label">Key Highlights</h4>
              <ul className="modal-highlights">
                {project.highlights.map((h) => (
                  <li key={h}>
                    <CheckCircle2
                      className="h-4 w-4 shrink-0"
                      style={{ color: project.accentColor }}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4 className="modal-label">Technologies Applied</h4>
              <div className="modal-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-meta-grid">
              <div className="modal-meta-item">
                <span className="modal-meta-label">Domain</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-meta-value text-primary hover:underline"
                >
                  {project.domain}
                </a>
              </div>
              <div className="modal-meta-item">
                <span className="modal-meta-label">Region</span>
                <span className="modal-meta-value">{project.clientLocation}</span>
              </div>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="modal-primary-cta"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}, #1288d3)`,
              }}
            >
              <span>Explore Live Platform</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleOpenPreview = useCallback((project: Project) => {
    setPreviewProject(project);
  }, []);

  const handleClosePreview = useCallback(() => {
    setPreviewProject(null);
  }, []);

  return (
    <div className="projects-page-v2">
      {/* 3D Wave Hero Section */}
      <section data-site-hero className="hero-showcase">
        <ClientVisual />
        <div className="hero-showcase__overlay" aria-hidden="true" />
        <div className="hero-showcase__grid" aria-hidden="true" />

        <div className="projects-container hero-showcase__inner">
          <Reveal className="hero-showcase__content" y={20}>
            <div className="hero-badge">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>WebHelp Portfolio · Curated Case Studies (2019—2026)</span>
            </div>

            <h1 className="hero-title">
              Crafted to Convert. <br />
              <span className="hero-title__highlight">Engineered for Scale.</span>
            </h1>

            <p className="hero-description">
              Explore custom digital products, responsive web portals, and scalable ecommerce systems
              meticulously engineered around real business KPIs and modern web architecture.
            </p>

            {/* Quick Metrics Bar */}
            <div className="hero-stats">
              <div className="hero-stat-card">
                <strong className="hero-stat-value">07</strong>
                <span className="hero-stat-label">Signature Platforms</span>
              </div>
              <div className="hero-stat-card">
                <strong className="hero-stat-value">99.8%</strong>
                <span className="hero-stat-label">Production SLA</span>
              </div>
              <div className="hero-stat-card">
                <strong className="hero-stat-value">150+</strong>
                <span className="hero-stat-label">Milestones Delivered</span>
              </div>
              <div className="hero-stat-card">
                <strong className="hero-stat-value">100%</strong>
                <span className="hero-stat-label">Bespoke Architecture</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter and View Mode Toolbar */}
      <section className="portfolio-toolbar-wrapper">
        <div className="projects-container">
          <div className="portfolio-toolbar">
            {/* Category Pills */}
            <div className="filter-pill-group" role="tablist" aria-label="Project categories">
              {categoryFilters.map((category) => {
                const count =
                  category === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === category).length;
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`filter-pill ${isActive ? "filter-pill--active" : ""}`}
                  >
                    <span>{category}</span>
                    <span className="filter-pill__count">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="view-mode-toggle" aria-label="Layout view mode">
              <button
                type="button"
                onClick={() => setViewMode("showcase")}
                className={`view-mode-btn ${viewMode === "showcase" ? "view-mode-btn--active" : ""}`}
                title="Cinematic Showcase View"
              >
                <LayoutList className="h-4 w-4" />
                <span className="hidden sm:inline">Showcase</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`view-mode-btn ${viewMode === "grid" ? "view-mode-btn--active" : ""}`}
                title="High-Density Grid Matrix"
              >
                <Grid className="h-4 w-4" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Display Section */}
      <section className="portfolio-main">
        <div className="projects-container">
          {viewMode === "showcase" ? (
            /* Cinematic Showcase Layout */
            <div className="showcase-list">
              {filteredProjects.map((project, index) => {
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={project.number}
                    className={`showcase-item ${isEven ? "showcase-item--standard" : "showcase-item--reversed"}`}
                    style={{ "--accent": project.accentColor } as React.CSSProperties}
                  >
                    {/* Visual Media Column */}
                    <div className="showcase-item__visual">
                      <BrowserMockup
                        project={project}
                        priority={index === 0}
                        onOpenPreview={handleOpenPreview}
                      />
                    </div>

                    {/* Context & Description Column */}
                    <div className="showcase-item__context">
                      <div className="showcase-item__meta">
                        <span className="showcase-item__number">{project.number}</span>
                        <span
                          className="showcase-item__category-badge"
                          style={{
                            color: project.accentColor,
                            borderColor: `${project.accentColor}40`,
                            background: `${project.accentColor}12`,
                          }}
                        >
                          {project.category}
                        </span>
                        <span className="showcase-item__year">{project.year}</span>
                      </div>

                      <h3 className="showcase-item__title">{project.name}</h3>

                      <p className="showcase-item__description">{project.description}</p>

                      {/* Highlights */}
                      <div className="showcase-item__highlights">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="showcase-highlight-row">
                            <CheckCircle2
                              className="h-4 w-4 shrink-0"
                              style={{ color: project.accentColor }}
                            />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className="showcase-item__tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tech-chip">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="showcase-item__actions">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-launch-site"
                          style={{
                            background: `linear-gradient(135deg, ${project.accentColor}, #1288d3)`,
                          }}
                        >
                          <span>Visit Live Website</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>

                        <button
                          type="button"
                          onClick={() => handleOpenPreview(project)}
                          className="btn-inspect-details"
                        >
                          <Eye className="h-4 w-4 text-primary" />
                          <span>Quick Preview</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* High Density Bento Grid Layout */
            <div className="bento-grid">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.number}
                  className="bento-card group"
                  style={{ "--accent": project.accentColor } as React.CSSProperties}
                >
                  <BrowserMockup
                    project={project}
                    priority={index < 2}
                    onOpenPreview={handleOpenPreview}
                  />

                  <div className="bento-card__content">
                    <div className="bento-card__header">
                      <div>
                        <span
                          className="bento-card__category"
                          style={{ color: project.accentColor }}
                        >
                          {project.category}
                        </span>
                        <h3 className="bento-card__title">{project.name}</h3>
                      </div>
                      <span className="bento-card__number">{project.number}</span>
                    </div>

                    <p className="bento-card__description">{project.description}</p>

                    <div className="bento-card__tags">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tech-chip tech-chip--compact">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="bento-card__footer">
                      <button
                        type="button"
                        onClick={() => handleOpenPreview(project)}
                        className="bento-card__quick-btn"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Inspect</span>
                      </button>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="bento-card__link"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modern React Architecture Section */}
      <section className="architecture-section">
        <div className="architecture-grid-bg" aria-hidden="true" />
        <div className="projects-container architecture-inner">
          <Reveal className="architecture-copy">
            <div className="hero-badge">
              <Braces className="h-3.5 w-3.5 text-primary" />
              <span>Modern Engineering Standard</span>
            </div>
            <h2 className="architecture-title">
              Engineered with <br />
              <strong>Production-Grade Reliability</strong>
            </h2>
            <p className="architecture-lead">
              Every project is constructed on modern foundation patterns: type-safe schemas,
              decoupled UI architectures, automated deployment workflows, and extreme Core Web Vitals
              optimization.
            </p>

            <div className="architecture-pills">
              <span className="arch-pill">React 19 &amp; SSR</span>
              <span className="arch-pill">TanStack Router</span>
              <span className="arch-pill">TypeScript 5</span>
              <span className="arch-pill">Edge CDN Caching</span>
              <span className="arch-pill">Tailwind 4 System</span>
            </div>
          </Reveal>

          <Reveal className="code-card" delay={0.15}>
            <div className="code-card__header">
              <div className="code-card__dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="code-card__filename">ProjectArchitecture.tsx</span>
              <Code2 className="h-4 w-4 text-primary/70" />
            </div>
            <pre className="code-card__pre">
              <code>{`// WebHelp Multi-Tenant Component Architecture
interface CaseStudyProps<T> {
  readonly id: string;
  readonly category: SystemCategory;
  readonly performanceSLA: ProductionSLA;
  readonly deployTarget: "Edge" | "Cloudflare" | "VPS";
}

export const ModernPlatform = async ({ project }: Props) => {
  const telemetry = await initPerformanceVitals();
  return (
    <PlatformContainer secure={true} caching="stale-while-revalidate">
      <TelemetryProvider metrics={telemetry} />
      <ProjectInterface data={project} />
    </PlatformContainer>
  );
};`}</code>
            </pre>
          </Reveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="project-cta-v2">
        <div className="project-cta-v2__glow" aria-hidden="true" />
        <Reveal className="projects-container project-cta-v2__inner">
          <div className="hero-badge mx-auto">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Ready for your next milestone?</span>
          </div>

          <h2 className="project-cta-v2__title">
            Have an ambitious project <br />
            <span className="text-primary">in mind?</span>
          </h2>

          <p className="project-cta-v2__lead">
            Whether you need a full enterprise web platform, managed IT infrastructure, or a dedicated
            remote engineering team, our specialists are ready to make it happen.
          </p>

          <div className="project-cta-v2__buttons">
            <Link to="/contact" className="btn-cta-primary">
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/services" className="btn-cta-secondary">
              <span>Explore Our Services</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Lightbox Quick Preview Modal */}
      {previewProject && (
        <ProjectModal project={previewProject} onClose={handleClosePreview} />
      )}
    </div>
  );
}
