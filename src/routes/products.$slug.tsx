import { AutomationErpPage } from "@/components/services/AutomationErpPage";
import { HeroTitle } from "@/components/HeroTitle";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";

import { Reveal } from "@/components/Reveal";
import { ClientVisual } from "@/components/three/ClientVisual";
import { FlexibleVpsPackages } from "@/components/vps/FlexibleVpsPackages";
import { VpsBenefitsCard } from "@/components/vps/VpsBenefitsCard";
import { products } from "@/lib/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    if (params.slug === "business-vps-hosting") {
      throw redirect({
        to: "/services/$slug",
        params: { slug: "cloud-managed-vps-hosting" },
      });
    }
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Solution unavailable | WebHelp Pakistan" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.detailTitle ?? product.name} | WebHelp Pakistan`;
    return {
      meta: [
        { title },
        { name: "description", content: product.pitch },
        { property: "og:title", content: title },
        { property: "og:description", content: product.pitch },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
      <h1 className="text-3xl font-semibold">Product not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        That product page does not exist. Here is everything we currently run.
      </p>
      <Link
        to="/products"
        className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        All products
      </Link>
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  if (product.slug === "business-automation-erp") return <AutomationErpPage />;
  const isVps = product.slug === "business-vps-hosting";
  const others = products.filter((p) => p.slug !== product.slug);
  const detailTitle = product.detailTitle ?? product.name;

  return (
    <>
      <section data-site-hero className="subpage-hero relative overflow-hidden border-b border-border">
        <ClientVisual />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All products
          </Link>
          <Reveal>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-xs tracking-[0.18em] text-primary uppercase">
                {product.category}
              </span>
              <span className="rounded-full border border-primary/40 px-2.5 py-1 text-[11px] text-primary">
                {product.status}
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
              <HeroTitle title={detailTitle} />
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{product.pitch}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                search={{ service: product.slug }}
                className="inline-flex rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Discuss requirements
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {isVps && <FlexibleVpsPackages />}

      {isVps ? (
        <VpsBenefitsCard />
      ) : (
        <section>
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Inside {detailTitle}</h2>
            <Reveal className="mt-8 grid gap-4 sm:grid-cols-2" childSelector="[data-card]">
              {product.features.map((f) => (
                <div key={f.title} data-card className="panel rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="mt-10 grid gap-4 sm:grid-cols-3" childSelector="[data-stat]">
              {product.stats.map((s) => (
                <div
                  key={s.label}
                  data-stat
                  className="rounded-2xl border border-border bg-secondary/40 p-6"
                >
                  <p className="font-display text-3xl font-semibold text-primary">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {!isVps && (
        <section className="border-t border-border bg-[var(--ink)]">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold">Other products</h2>
            <Reveal className="mt-8 grid gap-4 sm:grid-cols-3" childSelector="[data-card]">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  data-card
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="panel rounded-2xl p-6 transition-colors hover:border-primary/50"
                >
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.pitch}</p>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
