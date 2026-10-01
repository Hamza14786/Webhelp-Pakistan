import { createFileRoute, Link } from "@tanstack/react-router";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";

import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { products } from "@/lib/site";

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
      <PageHero
        eyebrow="Products"
        title="Practical Systems Built Around Business Operations"
        lead="These solutions are configured or developed around real workflows, integrations, users, reporting needs, infrastructure, and ongoing support requirements."
      />
      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal className="grid gap-4 lg:grid-cols-2" childSelector="[data-card]">
            {products.map((p) => (
              <article key={p.slug} data-card className="panel rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs tracking-wide text-muted-foreground uppercase">
                    {p.category}
                  </span>
                  <span className="rounded-full border border-primary/40 px-2.5 py-1 text-[11px] text-primary">
                    {p.status}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <dl className="mt-6 grid grid-cols-3 gap-3">
                  {p.stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-border/70 px-3 py-3">
                      <dt className="text-[11px] leading-tight text-muted-foreground">{s.label}</dt>
                      <dd className="mt-1 font-display text-sm font-semibold text-foreground">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to={p.slug === "business-vps-hosting" ? "/services/$slug" : "/products/$slug"}
                    params={{ slug: p.slug === "business-vps-hosting" ? "cloud-managed-vps-hosting" : p.slug }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    View solution <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    search={{ service: p.slug }}
                    className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
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
