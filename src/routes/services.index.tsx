import { createFileRoute, Link } from "@tanstack/react-router";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";

import { Reveal } from "@/components/Reveal";
import { HeroTitle } from "@/components/HeroTitle";
import { ClientVisual } from "@/components/three/ClientVisual";
import { ServicesHeroAnimation } from "@/components/services/ServicesHeroAnimation";
import { services } from "@/lib/site";
import { servicesPageAdditions } from "@/lib/services-page-additions";
import "./services.index.css";

const title = "IT Services in Pakistan | Web Development, Hosting & Support | WebHelp";
const description =
  "Explore Webhelp Pakistan services including web development, ecommerce, portals, hosting, maintenance, integrations, managed IT, infrastructure and remote teams.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const pageServices = [...services, ...servicesPageAdditions];
  return (
    <>
      <section data-site-hero className="subpage-hero services-page-hero relative overflow-hidden border-b border-border">
        <ClientVisual />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-3 px-4 py-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-5 lg:px-8 lg:py-20">
          <div className="relative z-10 text-left">
            <p className="mx-0 text-xs font-semibold tracking-[0.2em] text-primary uppercase">Services</p>
            <h1 className="services-page-hero__title mt-4 max-w-2xl text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
              <span className="block">IT Services Built Around</span>
              <span className="subpage-hero-highlight block">Real Business Requirements</span>
            </h1>
            <p className="mx-0 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Webhelp Pakistan provides technology services for businesses that need a dependable partner across development, hosting, infrastructure, integrations, support, and continuous improvement.
            </p>
          </div>
          <ServicesHeroAnimation />
        </div>
      </section>
      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" childSelector="[data-card]">
            {pageServices.map((s) => (
              <article key={s.slug} data-card className="panel flex h-full flex-col rounded-2xl p-4 sm:p-5">
                <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    Details <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    search={{ service: s.slug }}
                    className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Enquire now
                  </Link>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
