import Code from "lucide-react/dist/esm/icons/code";
import Globe from "lucide-react/dist/esm/icons/globe";
import Layout from "lucide-react/dist/esm/icons/layout";
import Layers from "lucide-react/dist/esm/icons/layers";
import Monitor from "lucide-react/dist/esm/icons/monitor";
import Paintbrush from "lucide-react/dist/esm/icons/paintbrush";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import Search from "lucide-react/dist/esm/icons/search";
import Server from "lucide-react/dist/esm/icons/server";
import Settings from "lucide-react/dist/esm/icons/settings";
import Shield from "lucide-react/dist/esm/icons/shield";
import Smartphone from "lucide-react/dist/esm/icons/smartphone";
import TrendingUp from "lucide-react/dist/esm/icons/trending-up";
import Zap from "lucide-react/dist/esm/icons/zap";
import FileCode from "lucide-react/dist/esm/icons/file-code";
import AppWindow from "lucide-react/dist/esm/icons/app-window";

import { Reveal } from "@/components/Reveal";
import {
  ServiceHero,
  FeatureCard,
  ProcessTimeline,
  ServiceFaq,
  ServiceCta,
  SectionBlock,
  SectionHeader,
} from "./ServicePageShared";

const slug = "web-development";

export function WebDevelopmentPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <ServiceHero
        eyebrow="Business Website Development"
        title="Business Websites Built to Perform"
        lead="We design and develop websites that drive business growth, build credibility with your audience, generate leads, and scale with your operations. Every project is structured around your specific goals, users, and industry — not a generic template."
        ctaText="Discuss Your Website"
        ctaSlug={slug}
      />

      {/* ---- Overview ---- */}
      <SectionBlock glow="right">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Overview"
              title="Websites That Work as Hard as Your Business"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              A business website is more than a digital brochure. It is often the first interaction a
              potential customer has with your company — and it needs to communicate trust, expertise,
              and clarity within seconds. We approach every website project by understanding your
              industry, target audience, and business objectives before writing a single line of code.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From fast-loading corporate sites to complex web applications with backend logic and
              API integrations, we handle the full development lifecycle: discovery, planning,
              design, development, testing, deployment, and post-launch support. Every website we
              deliver is responsive, search-engine friendly, and built on maintainable code that your
              team can manage going forward.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Responsive", value: "100%", sub: "Mobile-first development" },
                { label: "Performance", value: "90+", sub: "Lighthouse target score" },
                { label: "SEO Ready", value: "Built in", sub: "Semantic structure" },
                { label: "Support", value: "Ongoing", sub: "Post-launch assistance" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="svc-card svc-card-compact text-center"
                >
                  <p className="text-2xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-sm font-semibold">{s.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{s.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionBlock>

      {/* ---- What We Build ---- */}
      <SectionBlock border>
        <SectionHeader
          eyebrow="What We Build"
          title="Website Types We Specialise In"
          lead="Each business has different requirements. We match the right platform, technology, and approach to your situation — whether you need a straightforward corporate presence or a complex web application."
        />
        <Reveal className="svc-grid-3 mt-10" childSelector="[data-card]">
          {whatWeBuild.map((item) => (
            <div key={item.title} data-card>
              <FeatureCard icon={item.icon} title={item.title} description={item.description} />
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- Key Benefits ---- */}
      <SectionBlock glow="left">
        <SectionHeader
          eyebrow="Key Benefits"
          title="What Sets Our Websites Apart"
          lead="We focus on measurable outcomes — faster load times, higher search rankings, better conversion rates, and long-term maintainability."
        />
        <Reveal className="svc-grid-3 mt-10" childSelector="[data-card]">
          {benefits.map((item) => (
            <div key={item.title} data-card>
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                compact
              />
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- Process ---- */}
      <SectionBlock border>
        <SectionHeader
          eyebrow="Our Process"
          title="From Discovery to Deployment"
          lead="A structured development process keeps your project on track, on budget, and aligned with business goals at every stage."
        />
        <Reveal className="mt-12">
          <ProcessTimeline steps={processSteps} />
        </Reveal>
      </SectionBlock>

      {/* ---- Technologies ---- */}
      <SectionBlock glow="right">
        <SectionHeader
          eyebrow="Technology Stack"
          title="Built With the Right Technology"
          lead="We choose the stack based on your project needs — not personal preferences. Every technology decision is made with performance, maintainability, and scalability in mind."
        />
        <Reveal className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" childSelector="[data-card]">
          {techStack.map((t) => (
            <div
              key={t}
              data-card
              className="svc-card svc-card-compact flex items-center gap-3"
            >
              <Code size={18} className="text-primary" />
              <span className="text-sm font-medium">{t}</span>
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- Why Choose Us ---- */}
      <SectionBlock border>
        <SectionHeader
          eyebrow="Why Choose Us"
          title="A Development Partner That Understands Business"
          lead="We are not just developers — we are a technology partner that aligns every decision with your growth objectives."
        />
        <Reveal className="mt-10 grid gap-6 lg:grid-cols-3" childSelector="[data-card]">
          {whyChoose.map((item) => (
            <div key={item.title} data-card className="svc-card">
              <div className="svc-card-line" />
              <h3 className="svc-card-title mt-0">{item.title}</h3>
              <p className="svc-card-desc">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- FAQ ---- */}
      <ServiceFaq items={faqItems} idPrefix="web-dev-faq" />

      {/* ---- CTA ---- */}
      <ServiceCta
        title="Ready to Build a Website That Works for Your Business?"
        description="Tell us about your project requirements and we will put together a clear proposal with realistic timelines and transparent pricing."
        buttonText="Discuss Your Project"
        slug={slug}
      />
    </>
  );
}

/* ============================================================
   Page Data
   ============================================================ */

const whatWeBuild = [
  {
    icon: Globe,
    title: "Corporate Websites",
    description:
      "Professional company websites that clearly communicate your brand, services, and value proposition to potential customers and partners.",
  },
  {
    icon: Monitor,
    title: "Service Business Websites",
    description:
      "Purpose-built sites for consultancies, agencies, and professional services — designed to explain what you do and convert visitors into enquiries.",
  },
  {
    icon: AppWindow,
    title: "Custom Web Applications",
    description:
      "Interactive web applications with user authentication, dashboards, data handling, and business logic tailored to your workflow.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages for campaigns, product launches, or lead generation — optimised for speed and clear calls to action.",
  },
  {
    icon: FileCode,
    title: "CMS Websites",
    description:
      "Content-managed websites using WordPress, headless CMS platforms, or custom solutions that let your team update content without developer involvement.",
  },
  {
    icon: Layers,
    title: "Business Portals",
    description:
      "Authenticated portals for clients, employees, or partners — with role-based access, document management, and internal workflows.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimised loading, code splitting, image compression, and caching strategies that keep your site fast across all connections.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Every page adapts seamlessly from desktop monitors to mobile devices. We test across real device sizes, not just breakpoints.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description:
      "Semantic HTML, structured headings, meta tags, schema markup, and clean URLs give search engines the signals they need.",
  },
  {
    icon: Shield,
    title: "Secure Development",
    description:
      "SSL configuration, input validation, secure authentication, dependency monitoring, and regular security reviews.",
  },
  {
    icon: Server,
    title: "Scalable Architecture",
    description:
      "Code and infrastructure choices that support growth — from a handful of visitors to thousands of concurrent users.",
  },
  {
    icon: Settings,
    title: "Easy Management",
    description:
      "Clean admin interfaces and thorough documentation so your team can manage content, users, and settings independently.",
  },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "Requirements, users, goals, and constraints" },
  { number: "02", title: "Planning", description: "Scope, architecture, and technology decisions" },
  { number: "03", title: "Design", description: "Wireframes, visual design, and prototype review" },
  { number: "04", title: "Development", description: "Frontend, backend, integrations, and CMS" },
  { number: "05", title: "Testing", description: "QA, performance, accessibility, and cross-browser" },
  { number: "06", title: "Launch", description: "Deployment, DNS, SSL, and handover documentation" },
];

const techStack = [
  "React",
  "Next.js",
  "WordPress",
  "PHP",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
];

const whyChoose = [
  {
    title: "Business-First Thinking",
    description:
      "Every design and technical decision starts with a business question: who are the users, what do they need, and how does this drive revenue or reduce cost? We do not build for the sake of technology.",
  },
  {
    title: "Transparent Communication",
    description:
      "You receive regular progress updates, documented decisions, and honest estimates. If something changes, you hear about it immediately — not at the end of the project.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We build websites that you can maintain and grow over time. Post-launch, we offer ongoing support, performance monitoring, content updates, and feature development.",
  },
];

const faqItems = [
  {
    q: "How long does a business website take to build?",
    a: "Typical business websites take 4–8 weeks depending on scope, content readiness, and complexity. Projects with custom integrations, portals, or complex backend logic may take longer. We provide a realistic timeline during the proposal stage based on your specific requirements.",
  },
  {
    q: "Can you redesign our existing website?",
    a: "Yes. We can redesign your website while preserving SEO value, existing content, and domain authority. We start with a technical audit to understand what is working and what needs to change before proposing a redesign plan.",
  },
  {
    q: "Will the website be mobile responsive?",
    a: "Every website we build is fully responsive and tested across real device sizes including phones, tablets, and desktop monitors. We develop mobile-first to ensure the experience is solid on smaller screens.",
  },
  {
    q: "Can you integrate third-party systems?",
    a: "Yes. We regularly integrate payment gateways, CRM platforms, email marketing tools, analytics platforms, ERPs, and custom APIs. We evaluate each integration for reliability, security, and maintenance requirements.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. We offer ongoing maintenance, security updates, content changes, performance monitoring, and feature additions. Support arrangements are defined before launch so you know exactly what is covered.",
  },
  {
    q: "What CMS options do you support?",
    a: "We work with WordPress, headless CMS platforms like Strapi and Sanity, and custom admin panels. The CMS choice depends on your content structure, team skills, and long-term management needs.",
  },
];
