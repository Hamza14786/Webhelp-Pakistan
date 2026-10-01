import { createFileRoute, Link } from "@tanstack/react-router";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import BriefcaseBusiness from "lucide-react/dist/esm/icons/briefcase-business";
import Globe2 from "lucide-react/dist/esm/icons/globe-2";
import Handshake from "lucide-react/dist/esm/icons/handshake";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Target from "lucide-react/dist/esm/icons/target";

import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";

const title = "Raja Muhammad Imran | WebHelp Pakistan";
const description =
  "Meet Raja Muhammad Imran, Business Development Manager for Qatar at WebHelp Pakistan.";

export const Route = createFileRoute("/team/raja-muhammad-imran")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: RajaMuhammadImranProfile,
});

const focusAreas = [
  {
    icon: Handshake,
    title: "Client Partnerships",
    body: "Building trusted relationships and connecting organizations with the right digital and technology solutions.",
  },
  {
    icon: Target,
    title: "Business Development",
    body: "Understanding commercial goals, identifying opportunities and shaping a clear route from need to delivery.",
  },
  {
    icon: Globe2,
    title: "Qatar Market",
    body: "Supporting regional conversations and helping Qatar-based businesses access WebHelp's wider delivery capabilities.",
  },
];

function RajaMuhammadImranProfile() {
  return (
    <>
      <PageHero
        eyebrow="Leadership profile"
        title="Raja Muhammad Imran"
        lead="Business Development Manager — Qatar"
      />

      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-primary/35 bg-[#071b29] shadow-[0_30px_90px_-35px_rgba(18,136,211,0.55)]">
              <img
                src="/images/team/raja-muhammad-imran.png"
                alt="Raja Muhammad Imran"
                width={1024}
                height={1536}
                className="h-auto w-full object-contain"
              />
            </div>
          </Reveal>

          <Reveal className="flex flex-col justify-center" delay={0.12}>
            <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Leadership Team</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">Creating opportunities through meaningful partnerships.</h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              Raja Muhammad Imran represents WebHelp Pakistan's business development efforts in Qatar. He works with prospective clients to understand their goals, clarify requirements and connect them with practical web, IT and digital solutions.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              His role helps keep early project conversations focused, transparent and aligned with measurable business outcomes before they move into planning and delivery.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-secondary/35 p-5">
                <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="mt-3 block text-xs tracking-[0.14em] text-muted-foreground uppercase">Region</span>
                <strong className="mt-1 block text-lg">Qatar</strong>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/35 p-5">
                <BriefcaseBusiness className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="mt-3 block text-xs tracking-[0.14em] text-muted-foreground uppercase">Department</span>
                <strong className="mt-1 block text-lg">Business Development</strong>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#0e77ba]">
                Discuss your project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-bold transition-all hover:-translate-y-1 hover:border-primary hover:text-primary">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to our team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--ink)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Areas of focus</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Helping clients move from opportunity to action.</h2>
          </Reveal>
          <Reveal className="mt-10 grid gap-5 md:grid-cols-3" childSelector="[data-focus]" stagger={0.12}>
            {focusAreas.map(({ icon: Icon, title: areaTitle, body }) => (
              <article data-focus key={areaTitle} className="panel group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_-30px_rgba(18,136,211,0.7)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/35 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{areaTitle}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
