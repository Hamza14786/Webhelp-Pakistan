import { createFileRoute, Link } from "@tanstack/react-router";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";

import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { services } from "@/lib/site";

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
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="IT Services Built Around Real Business Requirements"
        lead="Webhelp Pakistan provides technology services for businesses that need a dependable partner across development, hosting, infrastructure, integrations, support, and continuous improvement."
      />
      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal className="grid gap-4 lg:grid-cols-2" childSelector="[data-card]">
            {services.map((s) => (
              <article key={s.slug} data-card className="panel rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <ul className="mt-5 space-y-2">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    Details <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    search={{ service: s.slug }}
                    className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Enquire
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
