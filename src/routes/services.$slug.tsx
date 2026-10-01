import { HeroTitle } from "@/components/HeroTitle";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Check from "lucide-react/dist/esm/icons/check";

import { Reveal } from "@/components/Reveal";
import { ClientVisual } from "@/components/three/ClientVisual";
import { services } from "@/lib/site";
import { servicesPageAdditions } from "@/lib/services-page-additions";

/* Dedicated service page components */
import { WebDevelopmentPage } from "@/components/services/WebDevelopmentPage";
import { EcommercePage } from "@/components/services/EcommercePage";
import { MaintenancePage } from "@/components/services/MaintenancePage";
import { BrandBuildingPage } from "@/components/services/BrandBuildingPage";
import { RemoteTeamsPage } from "@/components/services/RemoteTeamsPage";
import { BusinessVpsHostingPage } from "@/components/services/BusinessVpsHostingPage";

/** Slugs that have their own dedicated page component. */
const dedicatedPages: Record<string, React.ComponentType> = {
  "web-development": WebDevelopmentPage,
  "e-commerce-web-portals": EcommercePage,
  "website-management-maintenance": MaintenancePage,
  "brand-building": BrandBuildingPage,
  "dedicated-remote-it-teams": RemoteTeamsPage,
  "cloud-managed-vps-hosting": BusinessVpsHostingPage,
};

/** Improved SEO metadata per service slug. */
const seoMeta: Record<string, { title: string; description: string }> = {
  "web-development": {
    title: "Business Website Development — Webhelp Pakistan",
    description:
      "Custom business websites built for performance, SEO, and growth. Responsive development, CMS integration, and ongoing support from Webhelp Pakistan.",
  },
  "e-commerce-web-portals": {
    title: "Ecommerce & Web Portal Development — Webhelp Pakistan",
    description:
      "Scalable ecommerce stores and secure web portals with payment integration, inventory management, and admin dashboards from Webhelp Pakistan.",
  },
  "website-management-maintenance": {
    title: "Website Management & Maintenance — Webhelp Pakistan",
    description:
      "24/7 website maintenance, security monitoring, performance optimisation, backups, and technical support from Webhelp Pakistan.",
  },
  "cloud-managed-vps-hosting": {
    title: "Business VPS & Managed Hosting — Webhelp Pakistan",
    description:
      "Business VPS hosting with fast and secure servers, website deployment, SSL, DNS setup, CDN integration, regular backups, performance monitoring, and ongoing server maintenance based on your business needs.",
  },
  "business-automation-erp": {
    title: "Custom Business Software & Automation — Webhelp Pakistan",
    description:
      "Custom software built around your business to digitize workflows, connect teams and data, save time, and reduce operating costs.",
  },
  "dedicated-remote-it-teams": {
    title: "Dedicated Remote IT Teams — Webhelp Pakistan",
    description:
      "Dedicated developers, QA engineers, and DevOps specialists. Scale your technical team without the hiring overhead with Webhelp Pakistan.",
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    if (params.slug === "business-automation-erp") throw redirect({ to: "/products/$slug", params: { slug: params.slug }, statusCode: 301 });
    const service =
      services.find((s) => s.slug === params.slug) ??
      servicesPageAdditions.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service unavailable — Webhelp Pakistan" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const seo = seoMeta[service.slug];
    const title = seo?.title ?? `${service.title} — Webhelp Pakistan`;
    const desc = seo?.description ?? service.summary;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
      <h1 className="text-3xl font-semibold">Service not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        That capability page does not exist. Browse everything we offer instead.
      </p>
      <Link
        to="/services"
        className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        All services
      </Link>
    </div>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  /* If this slug has a dedicated page, render it instead of the generic template. */
  const DedicatedPage = dedicatedPages[service.slug];
  if (DedicatedPage) {
    return <DedicatedPage />;
  }

  /* ---- Generic template (used for VPS and any future services) ---- */
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section data-site-hero className="subpage-hero relative overflow-hidden border-b border-border">
        <ClientVisual />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <Reveal>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
              <HeroTitle title={service.title} />
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.summary}
            </p>
            <Link
              to="/contact"
              search={{ service: service.slug }}
              className="mt-8 inline-flex rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Enquire about {service.title.toLowerCase()}
            </Link>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <Reveal className="panel rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">What you get</h2>
            <ul className="mt-5 space-y-3">
              {service.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="panel rounded-2xl p-6 sm:p-8" delay={0.1}>
            <h2 className="font-display text-xl font-semibold">Deliverables</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <li
                  key={d}
                  className="rounded-xl border border-border/70 bg-secondary/40 px-4 py-3 text-sm text-muted-foreground"
                >
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-[var(--ink)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold">Often paired with</h2>
          <Reveal className="mt-8 grid gap-4 sm:grid-cols-3" childSelector="[data-card]">
            {others.map((s) => (
              <Link
                key={s.slug}
                data-card
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="panel rounded-2xl p-6 transition-colors hover:border-primary/50"
              >
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
