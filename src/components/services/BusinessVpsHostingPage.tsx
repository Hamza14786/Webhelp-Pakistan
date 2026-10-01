import { Link } from "@tanstack/react-router";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import Database from "lucide-react/dist/esm/icons/database";
import Globe2 from "lucide-react/dist/esm/icons/globe-2";
import Lock from "lucide-react/dist/esm/icons/lock";
import Server from "lucide-react/dist/esm/icons/server";
import Shield from "lucide-react/dist/esm/icons/shield";
import Zap from "lucide-react/dist/esm/icons/zap";

import { Reveal } from "@/components/Reveal";
import { FlexibleVpsPackages } from "@/components/vps/FlexibleVpsPackages";
import { VpsBenefitsCard } from "@/components/vps/VpsBenefitsCard";
import { VpsEnquiryForm } from "@/components/vps/VpsEnquiryForm";
import { services } from "@/lib/site";
import {
  ServiceHero,
  ServiceFaq,
  ServiceCta,
  SectionBlock,
  SectionHeader,
} from "./ServicePageShared";

const slug = "cloud-managed-vps-hosting";

const vpsDeliverables = [
  {
    title: "Cloud-First Server Deployment",
    desc: "Rapid automated provisioning on high-grade hypervisors with Linux or Windows OS images tailored to your specific application requirements.",
    icon: Server,
  },
  {
    title: "Managed Security & Firewalls",
    desc: "Dedicated kernel isolation, automated DDoS filtering, SSL/TLS certificate installation, and custom IP access controls.",
    icon: Shield,
  },
  {
    title: "Daily Automated Backups",
    desc: "Scheduled snapshot images stored in isolated off-site repositories with straightforward single-click disaster recovery restoration.",
    icon: Database,
  },
  {
    title: "Global CDN & Low-Latency DNS",
    desc: "Anycast DNS routing and worldwide edge caching to ensure lightning-fast content delivery for users across Pakistan and international markets.",
    icon: Globe2,
  },
];

const vpsFaqs = [
  {
    q: "What is included with Business VPS Hosting?",
    a: "Every WebHelp Business VPS includes dedicated compute resources (CPU/RAM), pure PCIe Gen4 NVMe enterprise storage, full root/administrator access, a dedicated static IPv4 address, automated daily backups, standard DDoS protection, and 24/7 proactive hardware monitoring.",
  },
  {
    q: "Which operating systems and control panels can I choose?",
    a: "You can select from Ubuntu, Debian, AlmaLinux, Rocky Linux, or Windows Server. For control panels, we offer pre-configuration for cPanel, Plesk, CyberPanel, CloudPanel, or lean headless stacks with Docker, Node.js, Python, and PHP.",
  },
  {
    q: "Can I scale my server resources as my business expands?",
    a: "Yes. Our VPS infrastructure supports seamless on-demand vertical scaling. You can upgrade your vCPU cores, RAM, and NVMe disk storage at any time with minimal disruption to your live applications.",
  },
  {
    q: "How does WebHelp assist with server migration and setup?",
    a: "Our experienced systems engineers can handle complete website and database migrations from your current host, test DNS resolution, verify SSL certificates, and confirm performance before switching your live traffic.",
  },
  {
    q: "What uptime SLA and support coverage is provided?",
    a: "We guarantee a 99.9% network and hardware availability SLA. Our support team is active 24/7/365 to handle technical inquiries, incident mitigation, and operational guidance.",
  },
];

export function BusinessVpsHostingPage() {
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* 1. Hero Section */}
      <ServiceHero
        eyebrow="Cloud Infrastructure &amp; Hosting"
        title="Business VPS &amp; Managed Hosting"
        lead="Business VPS hosting with fast and secure servers, website deployment, SSL, DNS setup, CDN integration, regular backups, performance monitoring, and ongoing server maintenance based on your business needs."
        ctaText="Explore VPS Plans"
        ctaSlug={slug}
        visual={
          <img
            src="/images/business-vps-hosting-hero.png"
            alt="Business VPS hosting with managed high-performance servers"
            width={1143}
            height={1365}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        }
      />

      {/* 2. Flexible VPS Packages (Starter, Business, Enterprise) */}
      <FlexibleVpsPackages />

      {/* 3. The Large Premium Card containing all 8 Benefit Headings */}
      <VpsBenefitsCard />

      {/* 4. Deliverables & Infrastructure Architecture */}
      <SectionBlock glow="left">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Managed Capabilities"
              title="Enterprise Delivery &amp; Operational Standards"
              lead="We combine isolated server performance with hands-on systems administration so your team can focus on software and business growth."
            />
          </Reveal>

          <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" childSelector="[data-card]">
            {vpsDeliverables.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-card
                  className="panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#25d2dd]/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white transition-colors group-hover:text-[#25d2dd]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </SectionBlock>

      {/* 5. Contact / VPS Enquiry Form */}
      <VpsEnquiryForm />

      {/* 6. FAQs Section */}
      <ServiceFaq
        eyebrow="VPS FAQ"
        title="Common Questions About Business VPS Hosting"
        items={vpsFaqs}
        idPrefix="vps"
      />

      {/* 6. Often Paired With */}
      <SectionBlock glow="right" className="border-t border-border/70">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Complementary Solutions"
              title="Often Paired With"
              lead="Combine managed VPS hosting with our specialized web engineering and maintenance capabilities for an end-to-end digital solution."
            />
          </Reveal>

          <Reveal className="mt-10 grid gap-6 sm:grid-cols-3" childSelector="[data-card]">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                data-card
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="panel group flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#25d2dd]/50"
              >
                <span className="text-xs font-bold tracking-wider text-primary uppercase">
                  Service
                </span>
                <h3 className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-[#25d2dd]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.homeSummary || service.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <span>Explore service</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </SectionBlock>

      {/* 7. Bottom CTA */}
      <ServiceCta
        title="Ready to Deploy Fast, Secure VPS Hosting?"
        description="Get in touch with our infrastructure team today. We'll help assess your application workload and recommend the ideal server configuration."
        buttonText="Discuss Your VPS Needs"
        slug={slug}
      />
    </>
  );
}
