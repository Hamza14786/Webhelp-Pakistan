import { createFileRoute, Link } from "@tanstack/react-router";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";

import { HeroTitle } from "@/components/HeroTitle";
import { ClientVisual } from "@/components/three/ClientVisual";
import { ProductHeroAnimation } from "@/components/products/ProductHeroAnimation";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/site";
import "./products.index.css";

const title = "Business Systems & Technology Solutions | WebHelp Pakistan";
const description =
  "Explore practical Webhelp Pakistan solutions for ERP, fuel station automation, managed VPS hosting, and marketplace operations.";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section data-site-hero className="subpage-hero products-page-hero relative overflow-hidden border-b border-border">
        <ClientVisual />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-3 px-4 py-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-5 lg:px-8 lg:py-20">
          <div className="relative z-10 text-left">
            <p className="mx-0 text-xs font-semibold tracking-[0.2em] text-primary uppercase">Products</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
              <HeroTitle title="Practical Systems Built Around Business Operations" />
            </h1>
            <p className="mx-0 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              These solutions are configured or developed around real workflows, integrations, users, reporting needs, infrastructure, and ongoing support requirements.
            </p>
          </div>
          <ProductHeroAnimation />
        </div>
      </section>
      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" childSelector="[data-card]">
            {products.map((p) => (
              <article key={p.slug} data-card className="panel flex h-full flex-col rounded-2xl p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs tracking-wide text-muted-foreground uppercase">
                    {p.category}
                  </span>
                  <span className="rounded-full border border-primary/40 px-2.5 py-1 text-[11px] text-primary">
                    {p.status}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold">{p.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <dl className="mt-4 grid grid-cols-3 gap-2">
                  {p.stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-border/70 px-2.5 py-2.5">
                      <dt className="text-[11px] leading-tight text-muted-foreground">{s.label}</dt>
                      <dd className="mt-1 font-display text-sm font-semibold text-foreground">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  <Link
                    to={p.slug === "business-vps-hosting" ? "/services/$slug" : "/products/$slug"}
                    params={{ slug: p.slug === "business-vps-hosting" ? "cloud-managed-vps-hosting" : p.slug }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    View solution <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    search={{ service: p.slug }}
                    className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    Discuss requirements
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
