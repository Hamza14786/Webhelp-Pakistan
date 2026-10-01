import { createFileRoute, Link } from "@tanstack/react-router";
import Activity from "lucide-react/dist/esm/icons/activity";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import ClipboardList from "lucide-react/dist/esm/icons/clipboard-list";
import Code2 from "lucide-react/dist/esm/icons/code-2";
import FileSignature from "lucide-react/dist/esm/icons/file-signature";
import FlaskConical from "lucide-react/dist/esm/icons/flask-conical";
import GitBranch from "lucide-react/dist/esm/icons/git-branch";
import MessageSquareText from "lucide-react/dist/esm/icons/message-square-text";
import PenTool from "lucide-react/dist/esm/icons/pen-tool";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import RotateCcw from "lucide-react/dist/esm/icons/rotate-ccw";
import SearchCode from "lucide-react/dist/esm/icons/search-code";
import { type LucideIcon } from "lucide-react";

import { PageHero } from "@/components/Sections";
import { Reveal } from "@/components/Reveal";

import "./our-process.css";

const title = "Our Process | WebHelp Pakistan";
const description =
  "Explore WebHelp Pakistan's process from discovery and planning through design, development, testing, launch and ongoing support.";

export const Route = createFileRoute("/our-process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: OurProcess,
});

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  duration: string;
  accent: string;
  icon: LucideIcon;
};

const phases = [
  {
    number: "01",
    label: "Discovery",
    steps: [
      {
        number: "01",
        title: "Client Contacts WebHelp",
        description:
          "Reach out through our website, WhatsApp, email or a direct call. Our team responds within two business hours and starts the conversation.",
        tags: ["Website Form", "WhatsApp", "Email", "Direct Call", "2hr Response"],
        status: "Trigger",
        duration: "Day 0",
        accent: "cyan",
        icon: MessageSquareText,
      },
      {
        number: "02",
        title: "Requirement Gathering",
        description:
          "A structured discovery session clarifies your business goals, required features, integrations, budget, timeline and target audience.",
        tags: ["Discovery Call", "Business Goals", "Feature List", "Budget Scope", "Timeline"],
        status: "Input",
        duration: "Day 1–2",
        accent: "purple",
        icon: ClipboardList,
      },
      {
        number: "03",
        title: "Analysis & Technical Assessment",
        description:
          "We assess feasibility, recommend the technology stack, map the architecture and identify risks, dependencies and delivery effort.",
        tags: ["Feasibility Study", "Tech Stack", "Architecture Plan", "Risk Analysis", "Effort Estimate"],
        status: "Analyze",
        duration: "Day 2–4",
        accent: "orange",
        icon: SearchCode,
      },
      {
        number: "04",
        title: "Proposal, Quotation & SLA Agreement",
        description:
          "You receive a clear scope, pricing, milestones, team structure and service agreement to review and approve before work begins.",
        tags: ["SOW Document", "SLA Signed", "Pricing Sheet", "Milestones", "Client Approval"],
        status: "Approve",
        duration: "Day 4–6",
        accent: "cyan",
        icon: FileSignature,
      },
    ] satisfies ProcessStep[],
  },
  {
    number: "02",
    label: "Design & Build",
    steps: [
      {
        number: "05",
        title: "UI/UX Design & Prototyping",
        description:
          "Wireframes become polished interfaces and interactive prototypes aligned with your brand. You approve the experience before coding starts.",
        tags: ["Wireframes", "UI Mockups", "Prototype", "Brand Identity", "Design Approval"],
        status: "Design",
        duration: "Day 6–10",
        accent: "pink",
        icon: PenTool,
      },
      {
        number: "06",
        title: "Development & Coding",
        description:
          "Frontend, backend, databases, APIs and integrations are built in focused agile sprints with version control and regular progress updates.",
        tags: ["Agile Sprints", "Frontend Dev", "Backend Dev", "API Integration", "Git Versioning", "Daily Updates"],
        status: "Build",
        duration: "Day 10–25",
        accent: "blue",
        icon: Code2,
      },
    ] satisfies ProcessStep[],
  },
  {
    number: "03",
    label: "Quality & Launch",
    steps: [
      {
        number: "07",
        title: "QA Testing & Quality Assurance",
        description:
          "We validate functionality, performance, security, responsive behavior and browser compatibility, then fix and retest every issue found.",
        tags: ["Functional QA", "Security Test", "Performance Test", "Mobile Test", "Cross-Browser", "Bug Fix Loop"],
        status: "QA",
        duration: "Day 25–30",
        accent: "orange",
        icon: FlaskConical,
      },
      {
        number: "08",
        title: "Deployment & Go-Live",
        description:
          "We coordinate a controlled launch, configure DNS, SSL and CDN, harden the production environment and monitor the first 72 hours.",
        tags: ["Zero Downtime", "SSL Setup", "DNS Config", "CDN Live", "72hr Watch"],
        status: "Deploy",
        duration: "Day 30–32",
        accent: "green",
        icon: Rocket,
      },
    ] satisfies ProcessStep[],
  },
  {
    number: "04",
    label: "Growth & Support",
    steps: [
      {
        number: "09",
        title: "24/7 Monitoring, Support & Optimization",
        description:
          "After launch, we monitor uptime, report performance, apply security updates and keep improving the product through a dedicated support channel.",
        tags: ["24/7 Monitoring", "Monthly Reports", "SEO Growth", "Security Patches", "Dedicated Support", "Uptime SLA"],
        status: "Live",
        duration: "Ongoing",
        accent: "green",
        icon: Activity,
      },
    ] satisfies ProcessStep[],
  },
];

function Connector() {
  return <div className="process-connector" aria-hidden="true"><span /></div>;
}

function StepCard({ step }: { step: ProcessStep }) {
  const Icon = step.icon;
  return (
    <article className="process-step" data-accent={step.accent}>
      <div className="process-step__icon"><Icon aria-hidden="true" /></div>
      <div className="process-step__body">
        <span className="process-step__number">Step {step.number}</span>
        <h2>{step.title}</h2>
        <p>{step.description}</p>
        <div className="process-step__tags">
          {step.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
      <div className="process-step__meta">
        <span>{step.status}</span>
        <strong>{step.duration}</strong>
      </div>
    </article>
  );
}

function QaDecision() {
  return (
    <Reveal className="process-decision-wrap">
      <div className="process-decision">
        <GitBranch aria-hidden="true" />
        <div><span>Quality gate</span><h2>QA Passed?</h2></div>
      </div>
      <div className="process-branches">
        <article className="process-branch process-branch--fail">
          <RotateCcw aria-hidden="true" />
          <div>
            <span>Fail</span>
            <h3>Bugs Found → Fix &amp; Retest</h3>
            <p>Issues are logged, assigned and resolved in a focused patch sprint before returning through QA.</p>
            <div><small>Bug Logging</small><small>Patch Sprint</small></div>
          </div>
        </article>
        <article className="process-branch process-branch--pass">
          <CheckCircle2 aria-hidden="true" />
          <div>
            <span>Pass</span>
            <h3>All Tests Pass → UAT</h3>
            <p>We share the QA report and guide your team through user acceptance testing and final sign-off.</p>
            <div><small>QA Report</small><small>UAT Sign-off</small></div>
          </div>
        </article>
      </div>
    </Reveal>
  );
}

function OurProcess() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="A clear path from first conversation to long-term growth."
        lead="Our proven delivery process keeps every project transparent, collaborative and focused—from discovery and design through launch, support and continuous improvement."
      />

      <section className="process-page grid-lines">
        <div className="process-page__intro">
          <Reveal>
            <span>How we work</span>
            <h2>One connected delivery journey</h2>
            <p>Every stage has a clear purpose, owner and outcome, so you always know what happens next.</p>
          </Reveal>
        </div>

        <div className="process-flow">
          {phases.map((phase, phaseIndex) => (
            <div className="process-phase" key={phase.number}>
              <Reveal className="process-phase__heading">
                <span>Phase {phase.number}</span><strong>{phase.label}</strong>
              </Reveal>
              <Connector />
              <Reveal className="process-phase__steps" childSelector="[data-process-step]" stagger={0.12}>
                {phase.steps.map((step, stepIndex) => (
                  <div data-process-step key={step.number}>
                    <StepCard step={step} />
                    {phase.number === "03" && stepIndex === 0 ? <><Connector /><QaDecision /></> : null}
                    {(stepIndex < phase.steps.length - 1 || phaseIndex < phases.length - 1) &&
                      !(phase.number === "03" && stepIndex === 0) ? <Connector /> : null}
                    {phase.number === "03" && stepIndex === 0 ? <Connector /> : null}
                  </div>
                ))}
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal className="process-outcome">
          <span className="process-outcome__eyebrow">Project complete</span>
          <h2>Your business is live, growing &amp; winning.</h2>
          <p>From the first contact to a deployed, optimized and supported product, WebHelp remains your end-to-end technology partner.</p>
          <div className="process-stats">
            <div><strong>2hrs</strong><span>First response</span></div>
            <div><strong>30 days</strong><span>Avg. delivery</span></div>
            <div><strong>99.9%</strong><span>Uptime SLA</span></div>
            <div><strong>24/7</strong><span>Support</span></div>
          </div>
          <div className="process-outcome__actions">
            <Link to="/contact">Start Your Project <ArrowRight aria-hidden="true" /></Link>
            <Link to="/about">Learn About Us <ArrowRight aria-hidden="true" /></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
