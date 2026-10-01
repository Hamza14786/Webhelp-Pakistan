import TrendingUp from "lucide-react/dist/esm/icons/trending-up";
import Users from "lucide-react/dist/esm/icons/users";
import Package from "lucide-react/dist/esm/icons/package";
import DollarSign from "lucide-react/dist/esm/icons/dollar-sign";
import UserCog from "lucide-react/dist/esm/icons/user-cog";
import FolderKanban from "lucide-react/dist/esm/icons/folder-kanban";
import ShoppingBag from "lucide-react/dist/esm/icons/shopping-bag";
import BarChart3 from "lucide-react/dist/esm/icons/bar-chart-3";
import Database from "lucide-react/dist/esm/icons/database";
import RefreshCw from "lucide-react/dist/esm/icons/refresh-cw";
import LineChart from "lucide-react/dist/esm/icons/line-chart";
import CheckCircle from "lucide-react/dist/esm/icons/check-circle";
import Zap from "lucide-react/dist/esm/icons/zap";
import Settings from "lucide-react/dist/esm/icons/settings";
import ArrowRightLeft from "lucide-react/dist/esm/icons/arrow-right-left";
import XCircle from "lucide-react/dist/esm/icons/x-circle";
import FileSpreadsheet from "lucide-react/dist/esm/icons/file-spreadsheet";
import Cog from "lucide-react/dist/esm/icons/cog";
import Layers from "lucide-react/dist/esm/icons/layers";
import Link2 from "lucide-react/dist/esm/icons/link-2";
import Target from "lucide-react/dist/esm/icons/target";
import ClipboardList from "lucide-react/dist/esm/icons/clipboard-list";

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

const slug = "business-automation-erp";

export function AutomationErpPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <ServiceHero
        category="products"
        eyebrow="Business Automation & Custom Software"
        title="Software Built Around Your Business."
        lead="We design and build custom software around the way your business actually works. By bringing everyday tasks, records, and teams into connected digital workflows, we help you spend less time on manual work and reduce operating costs."
        ctaText="Discuss Your Software"
        ctaSlug={slug}
      />

      {/* ---- Ecosystem ---- */}
      <SectionBlock glow="right">
        <SectionHeader
          eyebrow="Connected Ecosystem"
          title="Your Workflows, Connected Digitally"
          lead="Every business works differently. We build the features and connections you need, so information moves between the right people and processes without repeated data entry. The areas below are examples we can tailor to your operation."
        />
        <Reveal className="svc-ecosystem-grid mt-10" childSelector="[data-card]">
          {ecosystem.map((item) => (
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

      {/* ---- Problem / Solution ---- */}
      <SectionBlock border glow="left">
        <SectionHeader
          eyebrow="The Problem"
          title="Replace Manual Work With Software That Fits"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="text-lg font-semibold text-destructive/80">
              What Disconnected Operations Look Like
            </h3>
            <div className="mt-5 space-y-1">
              {problems.map((p) => (
                <div key={p} className="svc-problem-item">
                  <XCircle size={18} className="svc-problem-icon text-destructive/60" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-lg font-semibold text-primary">
              What Custom Software Can Deliver
            </h3>
            <div className="mt-5 space-y-1">
              {solutions.map((s) => (
                <div key={s} className="svc-problem-item">
                  <CheckCircle size={18} className="svc-problem-icon text-primary" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionBlock>

      {/* ---- Benefits ---- */}
      <SectionBlock>
        <SectionHeader
          eyebrow="Benefits"
          title="Measurable Business Impact"
          lead="We focus on the tasks that consume your team's time and add cost. The right digital workflows can reduce repeated work, improve accuracy, and make day-to-day decisions easier."
        />
        <Reveal className="svc-grid-3 mt-10" childSelector="[data-card]">
          {benefits.map((item) => (
            <div key={item.title} data-card>
              <FeatureCard icon={item.icon} title={item.title} description={item.description} />
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- Implementation Timeline ---- */}
      <SectionBlock border glow="right">
        <SectionHeader
          eyebrow="Implementation"
          title="How We Build Your Custom Solution"
          lead="We start by understanding your business, then design, build, test, and refine software around the workflows your team needs."
        />
        <Reveal className="mt-12">
          <ProcessTimeline steps={implementationSteps} />
        </Reveal>
      </SectionBlock>

      {/* ---- Modules ---- */}
      <SectionBlock>
        <SectionHeader
          eyebrow="Tailored Capabilities"
          title="Features Built for the Work You Do"
          lead="Your solution may include only the areas that matter to your business. We define the features with you rather than forcing your team into a fixed package."
        />
        <Reveal className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" childSelector="[data-card]">
          {modules.map((m) => (
            <div
              key={m.name}
              data-card
              className="svc-card svc-card-compact flex items-center gap-3"
            >
              <m.icon size={18} className="text-primary" />
              <span className="text-sm font-medium">{m.name}</span>
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- FAQ ---- */}
      <ServiceFaq items={faqItems} idPrefix="erp-faq" />

      {/* ---- CTA ---- */}
      <ServiceCta
        title="Ready to Simplify Your Business Operations?"
        description="Tell us how your business works today and which manual tasks slow you down. We will outline a custom software approach to digitize the right processes and help save time and operating costs."
        buttonText="Discuss Your Software"
        slug={slug}
      />
    </>
  );
}

/* ============================================================
   Page Data
   ============================================================ */

const ecosystem = [
  {
    icon: TrendingUp,
    title: "Sales",
    description: "Quotes, pipelines, forecasting, and customer follow-ups in one workflow.",
  },
  {
    icon: Users,
    title: "CRM",
    description: "Track leads, manage contacts, log interactions, and assign opportunities.",
  },
  {
    icon: Package,
    title: "Inventory",
    description: "Track stock, movements, and reorder needs in a way that fits your operation.",
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "Bring invoices, payments, and useful financial records into your workflow.",
  },
  {
    icon: UserCog,
    title: "HR",
    description: "Organize the employee records and approval processes your team needs.",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    description: "Task boards, time tracking, milestones, and team resource planning.",
  },
  {
    icon: ShoppingBag,
    title: "Purchasing",
    description: "Manage suppliers, purchase requests, orders, and approvals digitally.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "See the business information that matters without compiling reports by hand.",
  },
];

const problems = [
  "Sales data lives in spreadsheets, finance uses a separate tool, inventory is tracked manually",
  "Teams re-enter the same data in multiple systems, introducing errors and delays",
  "Month-end reports take days because data must be collected from different sources",
  "Customer information is scattered — sales, support, and billing each have different records",
  "Repetitive manual processes consume staff time that could be spent on higher-value work",
  "Management decisions are based on outdated or incomplete information",
];

const solutions = [
  "Connect the records and teams that need to work together, so information is entered fewer times",
  "Digitize routine approvals, reminders, and follow-ups where automation will help",
  "Give managers clearer visibility through reports shaped around their decisions",
  "Keep relevant customer interactions and work history easier to find",
  "Give each team member access suited to their role and responsibilities",
  "Extend the solution as your processes and business needs change",
];

const benefits = [
  {
    icon: Database,
    title: "Centralised Data",
    description:
      "Bring the records your teams rely on into connected workflows, reducing duplicate entry and conflicting spreadsheets.",
  },
  {
    icon: RefreshCw,
    title: "Less Manual Work",
    description:
      "Digitize repetitive steps such as approvals, reminders, invoicing, and reporting so your team can focus on higher-value work.",
  },
  {
    icon: LineChart,
    title: "Real-Time Reporting",
    description:
      "Build dashboards and reports around the information your managers need, with less waiting for manual updates.",
  },
  {
    icon: Target,
    title: "Improved Accuracy",
    description:
      "Reduce the chance of missed entries and transcription errors by moving information through connected processes.",
  },
  {
    icon: Zap,
    title: "Faster Operations",
    description:
      "Move orders, approvals, and requests forward with fewer manual handoffs and delays.",
  },
  {
    icon: Settings,
    title: "Scalable Workflows",
    description:
      "Plan software that can be extended with new features, users, and integrations as your needs evolve.",
  },
];

const implementationSteps = [
  { number: "01", title: "Discovery", description: "Understand current workflows and pain points" },
  { number: "02", title: "Process Mapping", description: "Document how each department operates" },
  { number: "03", title: "Design", description: "Plan screens, roles, data, and user journeys" },
  { number: "04", title: "Development", description: "Build the workflows and features you need" },
  { number: "05", title: "Integration", description: "Connect existing tools and data sources" },
  { number: "06", title: "Testing", description: "User acceptance testing with real scenarios" },
  { number: "07", title: "Training", description: "Hands-on training for each team and role" },
  { number: "08", title: "Support", description: "Launch support and agreed ongoing maintenance" },
];

const modules = [
  { icon: TrendingUp, name: "Sales" },
  { icon: Users, name: "CRM" },
  { icon: DollarSign, name: "Accounting" },
  { icon: Package, name: "Inventory" },
  { icon: ShoppingBag, name: "Purchase" },
  { icon: UserCog, name: "HR" },
  { icon: FolderKanban, name: "Project" },
  { icon: ClipboardList, name: "Manufacturing" },
  { icon: Cog, name: "Helpdesk" },
  { icon: FileSpreadsheet, name: "Invoicing" },
  { icon: BarChart3, name: "Reporting" },
  { icon: Link2, name: "Integrations" },
];

const faqItems = [
  {
    q: "Can you build software for a small business?",
    a: "Yes. We can start with the workflows that matter most to your team and plan additional features as your business grows. The scope is based on your needs rather than a fixed package.",
  },
  {
    q: "How long does custom software take to build?",
    a: "The timeline depends on the number of workflows, users, integrations, and data requirements. After discovery, we define the scope and provide an estimated schedule for your project.",
  },
  {
    q: "Will the software follow our existing business processes?",
    a: "Yes. We first map how your team works, then design the screens, roles, reports, and automation around those requirements. We also identify where a simpler digital process could save time.",
  },
  {
    q: "What happens to our existing data?",
    a: "We review the data you currently use and plan how relevant records can move into the new solution. Cleanup and migration requirements are agreed during project scoping.",
  },
  {
    q: "Do you provide training for our team?",
    a: "Yes. We plan training around the roles and workflows included in your solution, so the team can use the new system confidently.",
  },
  {
    q: "Can the software connect with our existing tools?",
    a: "Where suitable APIs or other connection options are available, we can plan integrations with the tools you already use. We assess feasibility, reliability, and maintenance before confirming the scope.",
  },
];
