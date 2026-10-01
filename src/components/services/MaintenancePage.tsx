import Shield from "lucide-react/dist/esm/icons/shield";
import Zap from "lucide-react/dist/esm/icons/zap";
import Database from "lucide-react/dist/esm/icons/database";
import FileEdit from "lucide-react/dist/esm/icons/file-edit";
import Bug from "lucide-react/dist/esm/icons/bug";
import Activity from "lucide-react/dist/esm/icons/activity";
import RefreshCw from "lucide-react/dist/esm/icons/refresh-cw";
import Eye from "lucide-react/dist/esm/icons/eye";
import Settings from "lucide-react/dist/esm/icons/settings";
import Clock from "lucide-react/dist/esm/icons/clock";
import Server from "lucide-react/dist/esm/icons/server";
import AlertTriangle from "lucide-react/dist/esm/icons/alert-triangle";
import CheckCircle from "lucide-react/dist/esm/icons/check-circle";
import Wrench from "lucide-react/dist/esm/icons/wrench";
import Lock from "lucide-react/dist/esm/icons/lock";
import TrendingUp from "lucide-react/dist/esm/icons/trending-up";

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

const slug = "website-management-maintenance";

export function MaintenancePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <ServiceHero
        eyebrow="Website Management & Maintenance"
        title="Your Website, Maintained and Protected"
        lead="Launching a website is only the beginning. Ongoing maintenance keeps your site secure, fast, and reliable — so you can focus on running your business while we handle the technical operations behind the scenes."
        ctaText="Discuss Maintenance Plans"
        ctaSlug={slug}
      />

      {/* ---- Core Services ---- */}
      <SectionBlock glow="right">
        <SectionHeader
          eyebrow="Core Services"
          title="Comprehensive Website Care"
          lead="Every website faces security threats, performance degradation, and software updates. We proactively manage these risks so small issues never become costly problems."
        />
        <Reveal className="svc-grid-3 mt-10" childSelector="[data-card]">
          {coreServices.map((item) => (
            <div key={item.title} data-card>
              <FeatureCard icon={item.icon} title={item.title} description={item.description} />
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- Keep Running ---- */}
      <SectionBlock border glow="left">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Why It Matters"
              title="Keep Your Website Running at Its Best"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              An unmaintained website is a liability. Outdated plugins create security
              vulnerabilities. Unoptimised databases slow down page loads. Missing backups put
              your entire operation at risk if something goes wrong. And visitors who encounter
              broken pages or slow loading times leave — and rarely come back.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Regular maintenance is not a luxury — it is a business necessity. We monitor your
              website around the clock, apply security patches before they become urgent, optimise
              performance to maintain fast load times, and keep backups current so recovery is
              always possible. When issues arise, our support team responds according to defined
              SLA timelines — not whenever it is convenient.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Whether your website runs on WordPress, React, a custom CMS, or any other platform,
              our maintenance service adapts to your stack and business requirements. We handle the
              technical details so your team can focus on content, customers, and growth.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3">
              {risks.map((r) => (
                <div key={r.title} className="svc-card svc-card-compact">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={18} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">{r.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {r.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionBlock>

      {/* ---- Maintenance Workflow ---- */}
      <SectionBlock>
        <SectionHeader
          eyebrow="Our Workflow"
          title="How We Maintain Your Website"
          lead="Our maintenance cycle runs continuously — monitoring, protecting, updating, and improving your website in a structured, repeatable process."
        />
        <Reveal className="mt-12">
          <ProcessTimeline steps={workflowSteps} />
        </Reveal>
      </SectionBlock>

      {/* ---- What's Included ---- */}
      <SectionBlock border glow="right">
        <SectionHeader
          eyebrow="What's Included"
          title="Detailed Maintenance Coverage"
          lead="Every maintenance plan includes a defined scope of work so you know exactly what is covered — no surprises, no hidden fees."
        />
        <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" childSelector="[data-card]">
          {included.map((item) => (
            <div key={item} data-card className="svc-card svc-card-compact flex items-start gap-3">
              <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- FAQ ---- */}
      <ServiceFaq items={faqItems} idPrefix="maint-faq" />

      {/* ---- CTA ---- */}
      <ServiceCta
        title="Need Reliable Support for Your Website?"
        description="Tell us about your website and we will recommend a maintenance plan that covers security, performance, backups, and ongoing support."
        buttonText="Get a Maintenance Plan"
        slug={slug}
      />
    </>
  );
}

/* ============================================================
   Page Data
   ============================================================ */

const coreServices = [
  {
    icon: Shield,
    title: "Security Monitoring",
    description:
      "Continuous scanning for malware, vulnerabilities, and suspicious activity. We apply security patches and harden configurations before threats become incidents.",
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description:
      "Database cleanup, image compression, caching configuration, and code optimisation to maintain fast loading times as your content grows.",
  },
  {
    icon: Database,
    title: "Regular Backups",
    description:
      "Scheduled backups of files and databases with defined retention periods and tested restoration procedures. Recovery is always available when needed.",
  },
  {
    icon: FileEdit,
    title: "Content Updates",
    description:
      "Text changes, image replacements, new pages, blog posts, product updates, and structural adjustments handled by our team on your behalf.",
  },
  {
    icon: Bug,
    title: "Bug Fixes",
    description:
      "Diagnosis and resolution of layout issues, broken functionality, form errors, plugin conflicts, and cross-browser compatibility problems.",
  },
  {
    icon: Activity,
    title: "Uptime Monitoring",
    description:
      "24/7 uptime checks with immediate alerting when downtime is detected. We coordinate with hosting providers to resolve server-level issues.",
  },
];

const risks = [
  {
    title: "Outdated Software",
    description: "Unpatched CMS, plugins, or frameworks are the leading cause of website breaches.",
  },
  {
    title: "No Backup Strategy",
    description: "Without tested backups, a server failure or hack can mean permanent data loss.",
  },
  {
    title: "Slow Load Times",
    description: "Every extra second of load time reduces conversions and hurts search rankings.",
  },
  {
    title: "Broken Functionality",
    description: "Forms, payment flows, and integrations that silently break lose you customers.",
  },
  {
    title: "Security Vulnerabilities",
    description: "Open vulnerabilities expose your site to defacement, data theft, and spam injection.",
  },
];

const workflowSteps = [
  { number: "01", title: "Monitor", description: "Uptime, security scans, and performance metrics" },
  { number: "02", title: "Protect", description: "Patches, firewall rules, and access controls" },
  { number: "03", title: "Update", description: "CMS, plugins, themes, and dependencies" },
  { number: "04", title: "Optimise", description: "Speed, database, caching, and media" },
  { number: "05", title: "Support", description: "Content changes, fixes, and helpdesk tickets" },
];

const included = [
  "CMS and plugin updates",
  "Security patch deployment",
  "Malware scanning and removal",
  "Daily or weekly backups",
  "Uptime monitoring (24/7)",
  "Performance audits",
  "Database optimisation",
  "SSL certificate management",
  "Broken link detection",
  "Content and image updates",
  "Form and functionality testing",
  "Monthly reporting",
];

const faqItems = [
  {
    q: "What platforms do you maintain?",
    a: "We maintain websites built on WordPress, React, Next.js, PHP, Shopify, and custom platforms. After a technical review of your stack, we define the maintenance scope and support process.",
  },
  {
    q: "How quickly do you respond to issues?",
    a: "Response times are defined by your SLA. Critical issues (downtime, security breaches) are addressed within 1–2 hours. Standard requests are typically handled within one business day.",
  },
  {
    q: "Can you maintain a website someone else built?",
    a: "Yes. We perform a technical audit first to understand the codebase, hosting setup, dependencies, and any outstanding issues. Once we have a clear picture, we take over maintenance responsibility.",
  },
  {
    q: "Do you handle hosting as well?",
    a: "We coordinate with your hosting provider or manage hosting directly through our managed VPS service. Either way, server-level issues are handled as part of the maintenance process.",
  },
  {
    q: "How often are backups taken?",
    a: "Backup frequency depends on your plan — daily backups are standard for active websites. We also define backup retention periods and test restoration procedures regularly.",
  },
  {
    q: "What does a maintenance report include?",
    a: "Monthly reports cover uptime statistics, security scan results, updates applied, performance metrics, support tickets resolved, and any recommendations for improvement.",
  },
];
