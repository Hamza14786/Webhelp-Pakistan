import { createFileRoute, Link } from "@tanstack/react-router";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";

import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industry IT Solutions in Pakistan | WebHelp Pakistan" },
      {
        name: "description",
        content:
          "Technology solutions for ecommerce, SaaS, service businesses, education, enterprise, finance, healthcare, manufacturing and other operational sectors.",
      },
    ],
  }),
  component: Industries,
});

const industries = [
  [
    "Hosting, SaaS & Cloud",
    "SaaS websites, portals, hosting, integrations, maintenance, and technical support where uptime, deployment, account journeys, and support visibility matter.",
  ],
  [
    "Retail & Ecommerce",
    "Online stores, catalog architecture, payments, analytics, and support for brands managing products, promotions, inventory, accounts, and fulfillment.",
  ],
  [
    "Professional & Service Businesses",
    "High-trust websites, lead capture, CRM-ready forms, booking journeys, and search visibility for organizations selling expertise or appointments.",
  ],
  [
    "Education & Training",
    "Program websites, LMS-related experiences, student onboarding, portals, forms, payments, and content systems.",
  ],
  [
    "Corporate & Enterprise",
    "Structured websites, ERP connections, portals, reporting interfaces, secure administration, and long-term maintenance.",
  ],
  [
    "Finance & Operations",
    "Secure forms, operational dashboards, reporting, approvals, payment visibility, automation, and controlled access.",
  ],
  [
    "Supply Chain & Logistics",
    "Workflow, portal, integration, infrastructure, and support solutions for distributed operations and delivery teams.",
  ],
  [
    "Healthcare & Care Services",
    "Secure, accessible digital experiences and operational systems suited to service delivery and controlled access.",
  ],
  [
    "Manufacturing & Automation",
    "ERP, reporting, inventory visibility, connected workflows, infrastructure, and managed technical support.",
  ],
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industry IT Solutions Designed Around How Your Business Operates"
        lead="Technology creates value when it fits the workflow, customer journey, security requirements, and daily realities of the organization using it."
      />
      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" childSelector="[data-card]">
            {industries.map(([title, body]) => (
              <article key={title} data-card className="panel rounded-2xl p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  Discuss your requirements <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
