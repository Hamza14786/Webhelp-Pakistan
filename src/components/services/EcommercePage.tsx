import ShoppingCart from "lucide-react/dist/esm/icons/shopping-cart";
import Users from "lucide-react/dist/esm/icons/users";
import Building from "lucide-react/dist/esm/icons/building";
import LayoutDashboard from "lucide-react/dist/esm/icons/layout-dashboard";
import CreditCard from "lucide-react/dist/esm/icons/credit-card";
import Package from "lucide-react/dist/esm/icons/package";
import Search from "lucide-react/dist/esm/icons/search";
import Lock from "lucide-react/dist/esm/icons/lock";
import UserCheck from "lucide-react/dist/esm/icons/user-check";
import Truck from "lucide-react/dist/esm/icons/truck";
import BarChart3 from "lucide-react/dist/esm/icons/bar-chart-3";
import KeyRound from "lucide-react/dist/esm/icons/key-round";
import Plug from "lucide-react/dist/esm/icons/plug";
import Boxes from "lucide-react/dist/esm/icons/boxes";
import Globe from "lucide-react/dist/esm/icons/globe";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import Settings from "lucide-react/dist/esm/icons/settings";
import Layers from "lucide-react/dist/esm/icons/layers";

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

const slug = "e-commerce-web-portals";

export function EcommercePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <ServiceHero
        eyebrow="Ecommerce & Web Portal Development"
        title="Ecommerce & Portals Built Around Your Business"
        lead="We develop ecommerce platforms and secure web portals that connect your products, customers, payments, and internal operations into a single system — built around the way your business actually works, not a one-size-fits-all template."
        ctaText="Discuss Your Project"
        ctaSlug={slug}
      />

      {/* ---- Capabilities ---- */}
      <SectionBlock glow="right">
        <SectionHeader
          eyebrow="Capabilities"
          title="What We Build for Ecommerce and Portal Projects"
          lead="Whether you need a customer-facing online store, a vendor management portal, or an internal dashboard for your operations team — we design and develop platforms that match your specific workflows."
        />
        <Reveal className="svc-grid-3 mt-10" childSelector="[data-card]">
          {capabilities.map((item) => (
            <div key={item.title} data-card>
              <FeatureCard icon={item.icon} title={item.title} description={item.description} />
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- More Than an Online Store ---- */}
      <SectionBlock border glow="left">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Beyond the Storefront"
              title="More Than an Online Store"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              A modern ecommerce solution goes far beyond listing products and accepting payments.
              Your platform needs to manage inventory across locations, synchronise stock with
              suppliers, process returns and refunds, generate financial reports, and give your team
              real-time visibility into every transaction.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We build systems that connect your storefront to your backend operations — linking
              product catalogues, customer accounts, payment gateways, shipping providers,
              accounting tools, and analytics into a single, reliable workflow. The result is an
              ecommerce operation that runs efficiently at scale, not a disconnected collection of
              tools that require manual coordination.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              For businesses that need authenticated portals — customer dashboards, vendor
              management systems, or internal admin panels — we apply the same connected approach.
              Every user sees only what they need, every action is logged, and every integration
              is tested for reliability and security.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {connectedAreas.map((area) => (
                <div
                  key={area.label}
                  className="svc-card svc-card-compact flex items-center gap-3"
                >
                  <area.icon size={18} className="text-primary" />
                  <span className="text-sm font-medium">{area.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionBlock>

      {/* ---- Feature Grid ---- */}
      <SectionBlock>
        <SectionHeader
          eyebrow="Core Features"
          title="Features That Drive Results"
          lead="Every ecommerce project includes the features your business needs to sell, manage, and grow — implemented with clean architecture and tested integrations."
        />
        <Reveal className="svc-grid-4 mt-10" childSelector="[data-card]">
          {features.map((item) => (
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
      <SectionBlock border glow="right">
        <SectionHeader
          eyebrow="Our Process"
          title="How We Deliver Ecommerce Projects"
          lead="Ecommerce projects have unique requirements — payment compliance, inventory logic, user authentication, and third-party integrations. Our process accounts for these complexities from day one."
        />
        <Reveal className="mt-12">
          <ProcessTimeline steps={processSteps} />
        </Reveal>
      </SectionBlock>

      {/* ---- Platforms ---- */}
      <SectionBlock>
        <SectionHeader
          eyebrow="Platforms"
          title="Platform Expertise"
          lead="We recommend the platform that fits your requirements, budget, and long-term growth plans — not the one we happen to prefer."
        />
        <Reveal className="svc-grid-3 mt-10" childSelector="[data-card]">
          {platforms.map((p) => (
            <div key={p.title} data-card>
              <div className="svc-card">
                <div className="svc-card-line" />
                <h3 className="svc-card-title mt-0">{p.title}</h3>
                <p className="svc-card-desc">{p.description}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </SectionBlock>

      {/* ---- FAQ ---- */}
      <ServiceFaq items={faqItems} idPrefix="ecom-faq" />

      {/* ---- CTA ---- */}
      <ServiceCta
        title="Ready to Turn Your Ecommerce Idea Into a Scalable Platform?"
        description="Share your requirements and we will outline the best approach — platform, features, integrations, and timeline — tailored to your business."
        buttonText="Start Your Ecommerce Project"
        slug={slug}
      />
    </>
  );
}

/* ============================================================
   Page Data
   ============================================================ */

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Online Stores",
    description:
      "Responsive ecommerce storefronts with product catalogues, search, filtering, wishlists, and conversion-optimised checkout flows.",
  },
  {
    icon: Users,
    title: "Customer Portals",
    description:
      "Secure portals where customers manage accounts, view order history, track shipments, download invoices, and submit support requests.",
  },
  {
    icon: Building,
    title: "Vendor Portals",
    description:
      "Multi-vendor management platforms where suppliers manage inventory, process orders, update listings, and track earnings.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description:
      "Internal dashboards for operations teams to manage products, monitor sales, handle refunds, and analyse business performance.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Stripe, PayPal, bank transfers, and local payment gateways integrated with secure PCI-compliant transaction processing.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Real-time stock tracking across warehouses and channels, automated reorder alerts, and synchronisation with supplier systems.",
  },
];

const connectedAreas = [
  { icon: ShoppingCart, label: "Product Catalogue" },
  { icon: Users, label: "Customer Accounts" },
  { icon: CreditCard, label: "Payment Processing" },
  { icon: Package, label: "Inventory & Stock" },
  { icon: Truck, label: "Shipping & Fulfilment" },
  { icon: BarChart3, label: "Analytics & Reports" },
  { icon: Settings, label: "Admin Controls" },
  { icon: Plug, label: "Third-Party APIs" },
];

const features = [
  {
    icon: Search,
    title: "Product Catalogue",
    description: "Searchable catalogues with categories, variants, filters, and rich media.",
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    description: "Encrypted payment flows with address validation and fraud prevention.",
  },
  {
    icon: UserCheck,
    title: "Customer Accounts",
    description: "Registration, login, order history, wishlists, and profile management.",
  },
  {
    icon: Truck,
    title: "Order Tracking",
    description: "Real-time order status updates with email and SMS notifications.",
  },
  {
    icon: Boxes,
    title: "Stock Management",
    description: "Multi-location inventory with automatic low-stock alerts.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Sales reports, conversion tracking, customer insights, and revenue forecasts.",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access",
    description: "Granular permissions for admins, managers, vendors, and support staff.",
  },
  {
    icon: Plug,
    title: "Third-Party Integrations",
    description: "Connect with ERPs, CRMs, shipping APIs, and accounting platforms.",
  },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "Products, users, and business logic" },
  { number: "02", title: "Architecture", description: "Platform, data models, and integrations" },
  { number: "03", title: "Design", description: "Storefront UX and admin interface" },
  { number: "04", title: "Development", description: "Frontend, backend, and payment flows" },
  { number: "05", title: "Integration", description: "Shipping, analytics, and third-party APIs" },
  { number: "06", title: "Testing", description: "Transactions, security, and load testing" },
  { number: "07", title: "Launch", description: "Deployment, DNS, SSL, and go-live support" },
];

const platforms = [
  {
    title: "WooCommerce",
    description:
      "WordPress-based ecommerce with extensive plugin support, flexible customisation, and lower entry costs for small to medium catalogues.",
  },
  {
    title: "Shopify",
    description:
      "Hosted ecommerce with reliable infrastructure, built-in payment processing, and a managed update cycle — suitable for businesses that want less technical overhead.",
  },
  {
    title: "Custom Development",
    description:
      "Fully custom ecommerce platforms built with React, Next.js, or Node.js for businesses with unique workflows, pricing models, or integration requirements.",
  },
];

const faqItems = [
  {
    q: "Can you migrate our existing store to a new platform?",
    a: "Yes. We handle platform migrations including product data, customer accounts, order history, and SEO redirects. We plan the migration to minimise downtime and protect your search rankings.",
  },
  {
    q: "How do you handle payment security?",
    a: "All payment integrations follow PCI-DSS compliance standards. We use established payment gateways (Stripe, PayPal, etc.) that handle sensitive card data so your server never stores payment credentials directly.",
  },
  {
    q: "Can you build a multi-vendor marketplace?",
    a: "Yes. We develop multi-vendor platforms where each seller manages their own products, orders, and payouts. The admin controls vendor approvals, commissions, dispute resolution, and reporting.",
  },
  {
    q: "Do you integrate with ERP or accounting systems?",
    a: "Yes. We regularly connect ecommerce platforms with Odoo, QuickBooks, Xero, and custom ERPs to synchronise orders, inventory, invoicing, and financial reporting.",
  },
  {
    q: "How long does an ecommerce project take?",
    a: "A standard online store takes 6–10 weeks. Multi-vendor marketplaces, custom portals, or platforms with complex integrations typically require 10–16 weeks. We provide detailed timelines during the proposal stage.",
  },
  {
    q: "Can you build customer and vendor portals alongside the store?",
    a: "Yes. We regularly build authenticated portals that integrate directly with the ecommerce platform — customer dashboards, vendor management panels, and internal admin tools.",
  },
];
