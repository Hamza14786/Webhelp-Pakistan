import Monitor from "lucide-react/dist/esm/icons/monitor";
import Server from "lucide-react/dist/esm/icons/server";
import Layers from "lucide-react/dist/esm/icons/layers";
import TestTubeDiagonal from "lucide-react/dist/esm/icons/test-tube-diagonal";
import Cloud from "lucide-react/dist/esm/icons/cloud";
import Headset from "lucide-react/dist/esm/icons/headset";
import ScaleIcon from "lucide-react/dist/esm/icons/scale";
import UserCheck from "lucide-react/dist/esm/icons/user-check";
import MessageSquare from "lucide-react/dist/esm/icons/message-square";
import Award from "lucide-react/dist/esm/icons/award";
import TrendingDown from "lucide-react/dist/esm/icons/trending-down";
import Clock from "lucide-react/dist/esm/icons/clock";
import CheckCircle from "lucide-react/dist/esm/icons/check-circle";
import Users from "lucide-react/dist/esm/icons/users";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Building from "lucide-react/dist/esm/icons/building";
import Briefcase from "lucide-react/dist/esm/icons/briefcase";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import Search from "lucide-react/dist/esm/icons/search";
import Handshake from "lucide-react/dist/esm/icons/handshake";
import BarChart3 from "lucide-react/dist/esm/icons/bar-chart-3";

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

const slug = "dedicated-remote-it-teams";

export function RemoteTeamsPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <ServiceHero
        eyebrow="Dedicated Remote IT Teams"
        title="Your Dedicated IT Team, Without the Hiring Overhead"
        lead="Access experienced developers, QA engineers, DevOps specialists, and technical support professionals — fully dedicated to your projects, integrated with your workflows, and available without the time and cost of traditional recruitment."
        ctaText="Build Your Team"
        ctaSlug={slug}
      />

      {/* ---- Team Roles ---- */}
      <SectionBlock glow="right">
        <SectionHeader
          eyebrow="Available Roles"
          title="Technical Professionals Ready to Join Your Team"
          lead="Every resource we provide is a full-time, dedicated professional — not a freelancer juggling multiple clients. They work exclusively on your projects, follow your processes, and report directly to your team leads."
        />
        <Reveal className="svc-grid-3 mt-10" childSelector="[data-card]">
          {teamRoles.map((item) => (
            <div key={item.title} data-card>
              <FeatureCard icon={item.icon} title={item.title} description={item.description} />
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- Benefits ---- */}
      <SectionBlock border glow="left">
        <SectionHeader
          eyebrow="Why Dedicated Teams"
          title="Benefits of a Dedicated Team Model"
          lead="The dedicated team model gives you the technical capacity you need with the flexibility to scale — without the overhead of permanent hires, office space, and HR administration."
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

      {/* ---- Scale Section ---- */}
      <SectionBlock>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Flexible Scaling"
              title="Scale Your Team When You Need It"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Business requirements change — seasonal demand, new product launches, urgent
              projects, or expanding into new markets. Traditional hiring cannot keep up with these
              shifts. By the time you recruit, onboard, and train a new employee, the window of
              opportunity may have already closed.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              With a dedicated team model, you can add specialised roles within days — a frontend
              developer for a redesign sprint, a QA engineer for a product launch, or a DevOps
              specialist for an infrastructure migration. When the project phase ends, you can scale
              back without severance obligations or idle payroll.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              This is not outsourcing in the traditional sense. Your dedicated team members work your
              hours, attend your meetings, use your tools, and become a genuine extension of your
              internal team — just without the administrative and financial overhead.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Dedicated Teams vs Traditional Hiring</h3>
              {comparison.map((c) => (
                <div key={c.aspect} className="svc-card svc-card-compact">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {c.aspect}
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-medium text-muted-foreground">Traditional</p>
                      <p className="mt-0.5 text-muted-foreground/70">{c.traditional}</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Dedicated Team</p>
                      <p className="mt-0.5 text-muted-foreground">{c.dedicated}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionBlock>

      {/* ---- Process ---- */}
      <SectionBlock border glow="right">
        <SectionHeader
          eyebrow="How It Works"
          title="From Requirements to a Running Team"
          lead="Getting started with a dedicated team is straightforward. We handle the recruitment, vetting, and onboarding — you focus on directing the work."
        />
        <Reveal className="mt-12">
          <ProcessTimeline steps={processSteps} />
        </Reveal>
      </SectionBlock>

      {/* ---- Industries ---- */}
      <SectionBlock>
        <SectionHeader
          eyebrow="Who We Work With"
          title="Industries and Use Cases"
          lead="Our dedicated teams support businesses across a range of industries — wherever there is a need for reliable, scalable technical capacity."
        />
        <Reveal className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" childSelector="[data-card]">
          {industries.map((ind) => (
            <div
              key={ind.name}
              data-card
              className="svc-card svc-card-compact flex items-center gap-3"
            >
              <ind.icon size={18} className="text-primary" />
              <span className="text-sm font-medium">{ind.name}</span>
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- FAQ ---- */}
      <ServiceFaq items={faqItems} idPrefix="teams-faq" />

      {/* ---- CTA ---- */}
      <ServiceCta
        title="Need the Right Technical Team to Move Faster?"
        description="Tell us what roles you need, the technologies involved, and your timeline. We will match the right professionals and get them working within days."
        buttonText="Build Your Team"
        slug={slug}
      />
    </>
  );
}

/* ============================================================
   Page Data
   ============================================================ */

const teamRoles = [
  {
    icon: Monitor,
    title: "Frontend Developers",
    description:
      "React, Next.js, Vue, Angular, and TypeScript developers who build responsive, performant user interfaces with clean, maintainable code.",
  },
  {
    icon: Server,
    title: "Backend Developers",
    description:
      "Node.js, Python, PHP, and .NET developers who build APIs, business logic, database architecture, and server-side integrations.",
  },
  {
    icon: Layers,
    title: "Full-Stack Developers",
    description:
      "Versatile developers who handle both frontend and backend — ideal for smaller teams that need broad technical coverage across the stack.",
  },
  {
    icon: TestTubeDiagonal,
    title: "QA Engineers",
    description:
      "Manual and automated testing specialists who write test plans, build test suites, and ensure every release meets quality standards.",
  },
  {
    icon: Cloud,
    title: "DevOps Engineers",
    description:
      "CI/CD pipeline setup, cloud infrastructure management, containerisation, monitoring, and deployment automation specialists.",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description:
      "Help desk, tier-2 support, and system administration professionals who handle user issues, server management, and SLA-driven support.",
  },
];

const benefits = [
  {
    icon: ScaleIcon,
    title: "Flexible Scaling",
    description:
      "Add or reduce team members based on project phases, seasonal demand, or strategic priorities — without long-term employment commitments.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Resources",
    description:
      "Each team member works exclusively on your projects. No shared attention, no context switching between clients, no divided priorities.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "Your dedicated team joins your Slack, Teams, or communication channels. They attend standups, planning sessions, and retrospectives.",
  },
  {
    icon: Award,
    title: "Technical Expertise",
    description:
      "Access specialists in specific frameworks, languages, and tools — skills that may be difficult or expensive to recruit locally.",
  },
  {
    icon: TrendingDown,
    title: "Lower Hiring Overhead",
    description:
      "No recruitment fees, no office setup, no HR administration, no benefits management. We handle everything so you just manage the work.",
  },
  {
    icon: Clock,
    title: "Long-Term Support",
    description:
      "Dedicated team arrangements can run for months or years. Your team members build deep knowledge of your codebase, processes, and business logic.",
  },
];

const comparison = [
  {
    aspect: "Time to Start",
    traditional: "4–12 weeks (recruiting + onboarding)",
    dedicated: "1–2 weeks (vetted professionals ready)",
  },
  {
    aspect: "Cost Structure",
    traditional: "Salary + benefits + office + equipment",
    dedicated: "Monthly fee — all-inclusive",
  },
  {
    aspect: "Scaling",
    traditional: "Slow — each hire takes weeks",
    dedicated: "Fast — add roles within days",
  },
  {
    aspect: "Risk",
    traditional: "Contractual obligations, severance",
    dedicated: "Flexible terms, easy to adjust",
  },
];

const processSteps = [
  { number: "01", title: "Requirements", description: "Roles, skills, and project context" },
  { number: "02", title: "Matching", description: "We identify the right professionals" },
  { number: "03", title: "Introduction", description: "Meet your team, review backgrounds" },
  { number: "04", title: "Onboarding", description: "Access, tools, and workflow integration" },
  { number: "05", title: "Development", description: "Work begins under your direction" },
  { number: "06", title: "Scale", description: "Adjust team size as projects evolve" },
];

const industries = [
  { icon: Building, name: "Enterprise Software" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Rocket, name: "Startups & Scale-ups" },
  { icon: Search, name: "Digital Agencies" },
  { icon: Handshake, name: "Consulting Firms" },
  { icon: BarChart3, name: "Financial Services" },
  { icon: Users, name: "Healthcare" },
  { icon: Layers, name: "SaaS Products" },
];

const faqItems = [
  {
    q: "How quickly can a dedicated team start working?",
    a: "Typically within 1–2 weeks. We maintain a bench of vetted professionals and match candidates based on your technical requirements, project context, and working preferences.",
  },
  {
    q: "What if a team member is not the right fit?",
    a: "We replace team members who are not meeting expectations. Replacement timelines are defined in the agreement so there is no disruption to your project momentum.",
  },
  {
    q: "Do dedicated team members work exclusively for us?",
    a: "Yes. Every professional assigned to your team works full-time and exclusively on your projects. They do not split time between multiple clients.",
  },
  {
    q: "How do we communicate with the remote team?",
    a: "Your dedicated team uses your preferred communication tools — Slack, Teams, Zoom, or email. They join your daily standups, sprint planning, and any other meetings relevant to their work.",
  },
  {
    q: "What is the minimum engagement period?",
    a: "We typically recommend a minimum of three months to allow the team to build context and deliver meaningful results. Shorter engagements are possible for well-defined project sprints.",
  },
  {
    q: "Can we scale the team up or down?",
    a: "Yes. The dedicated team model is designed for flexibility. You can add roles as project requirements grow or reduce the team when a phase is complete, with reasonable notice periods.",
  },
];
