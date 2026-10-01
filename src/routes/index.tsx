import { createFileRoute, Link } from "@tanstack/react-router";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Check from "lucide-react/dist/esm/icons/check";
import Gauge from "lucide-react/dist/esm/icons/gauge";
import Layers from "lucide-react/dist/esm/icons/layers";
import Network from "lucide-react/dist/esm/icons/network";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/Sections";
import { StrategicPartners } from "@/components/StrategicPartners";
import { TechnologyMarquee } from "@/components/TechnologyMarquee";
import { HeroRoleAnimation } from "@/components/animation/HeroRoleAnimation";
import { faqs, process, products, services } from "@/lib/site";
import { FaqAccordion } from "@/components/FaqAccordion";
import "./home-hero.css";

const title = "IT Solutions & Web Development Company in Pakistan | WebHelp";
const description =
  "Webhelp Pakistan provides web development, managed IT support, hosting, ecommerce, integrations and dedicated remote teams for businesses in Pakistan and worldwide.";


export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "preload", as: "image", href: "/images/hero-office-reference.jpg" }],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section data-site-hero className="home-tech-hero relative overflow-hidden">
        <img
          src="/images/hero-office-reference.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          width={1915}
          height={821}
          decoding="async"
          className="home-tech-hero-background"
        />
        <div
          className="home-tech-hero-overlay pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className="home-tech-hero-layout relative mx-auto grid w-full items-center">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-base font-medium text-muted-foreground">
              Remote IT Partner for <span className="font-bold text-primary">Business Growth</span>
            </span>
            <h1 className="home-tech-hero-title mt-6 font-['Nunito_Sans',sans-serif] font-extrabold">
              Scalable <span className="text-primary">IT Support</span>, Web Solutions &amp;
              Dedicated Teams for <span className="text-primary">Global Businesses</span>
            </h1>
            <p className="home-tech-hero-description mt-7">
              At Webhelp Pakistan, we provide scalable IT support, modern web solutions, and
              dedicated remote teams to help businesses reduce costs, streamline operations, and
              grow faster.{" "}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/login"
                search={{ role: "client" }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Client login <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/login"
                search={{ role: "employee" }}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Employee login <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="home-tech-hero-visual relative z-10 mx-auto flex w-full min-w-0 items-center justify-center">
            <HeroRoleAnimation />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#f4f7f8] px-5 py-24 text-[#0b2b38] sm:px-8 lg:px-10 lg:py-[150px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <Reveal className="grid items-end gap-6 lg:grid-cols-[0.5fr_1.5fr] lg:gap-[55px]">
            <div>
              <span className="inline-flex items-center gap-3 text-xl font-extrabold tracking-[0.18em] text-[#1288d3] uppercase before:h-0.5 before:w-[38px] before:bg-current sm:text-2xl">
                About
              </span>
              <p className="mt-4 text-sm font-semibold tracking-[0.12em] text-[#536d78] uppercase">
                Webhelp Pakistan
              </p>
            </div>
            <h2 className="max-w-[1050px] text-5xl leading-[0.94] font-light tracking-[-0.065em] text-balance sm:text-6xl lg:text-[5.8rem]">
              <span className="text-[#0b2b38]">From ideas </span>
              <span className="bg-gradient-to-r from-[#1288d3] via-[#35b8ff] to-[#80d4ff] bg-clip-text font-extrabold text-transparent">
                to impact,
              </span>{" "}
              <span className="font-semibold text-[#0b2b38]">together.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid items-stretch gap-12 lg:mt-[85px] lg:grid-cols-[0.85fr_1.15fr] lg:gap-[90px]">
            <Reveal className="relative min-h-[460px] overflow-hidden bg-[#092631] sm:min-h-[560px] lg:min-h-[680px]">
              <img
                src="/images/webhelp-about-office.webp"
                alt="WebHelp team collaborating in the Islamabad office"
                width={960}
                height={760}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover saturate-[0.8]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-55% to-[#031219c7]"
                aria-hidden="true"
              />
              <div className="absolute right-7 bottom-7 left-7 z-10 border-t border-white/20 pt-5 text-white">
                <strong className="block text-[17px]">One connected team</strong>
                <span className="mt-1 block text-sm text-white/65">
                  Strategy, design, development and support.
                </span>
              </div>
            </Reveal>
            <Reveal className="flex flex-col justify-center">
              <p className="text-xl leading-[1.65] text-[#173946] sm:text-2xl">
                Founded in 2019 and backed by 24+ years of IT industry experience, Webhelp Pakistan
                delivers websites, managed IT support, hosting, ecommerce, automation, and dedicated
                remote technical teams.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <article className="group rounded-2xl border-4 border-[#bfd1d8] bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1288d3] hover:bg-white hover:shadow-[0_18px_40px_-12px_rgba(18,136,211,0.25)]">
                  <h3 className="text-lg font-bold text-[#0b2b38] transition-colors duration-300 group-hover:text-[#1288d3]">
                    Our Philosophy
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#536d78]">
                    We build long-term IT partnerships through practical, scalable and
                    well-documented solutions.
                  </p>
                </article>
                <article className="group rounded-2xl border-4 border-[#bfd1d8] bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1288d3] hover:bg-white hover:shadow-[0_18px_40px_-12px_rgba(18,136,211,0.25)]">
                  <h3 className="text-lg font-bold text-[#0b2b38] transition-colors duration-300 group-hover:text-[#1288d3]">
                    Forward-Thinking Approach
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#536d78]">
                    We understand your goals first, then apply the right people and technology to
                    deliver results.
                  </p>
                </article>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0e77ba] hover:shadow-[0_10px_25px_-5px_rgba(18,136,211,0.45)]"
                >
                  More About Us{" "}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/our-process"
                  className="group inline-flex items-center gap-2 rounded-xl border-2 border-[#1288d3] bg-transparent px-6 py-3.5 font-bold text-[#1288d3] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1288d3] hover:text-white hover:shadow-[0_10px_25px_-5px_rgba(18,136,211,0.35)]"
                >
                  Our Process{" "}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/flow-chart"
                  className="group inline-flex items-center gap-2 rounded-xl border-2 border-[#1288d3] bg-transparent px-6 py-3.5 font-bold text-[#1288d3] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1288d3] hover:text-white hover:shadow-[0_10px_25px_-5px_rgba(18,136,211,0.35)]"
                >
                  Our Flow Chart{" "}
                  <Network className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            title="Our Services"
            className="mx-auto text-center"
            titleClassName="text-5xl sm:text-6xl lg:text-7xl"
            lead="Development, hosting, infrastructure, integrations, support, and continuous improvement coordinated under one relationship."
          />
          <Reveal
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            childSelector="[data-card]"
          >
            {services.map((s) => (
              <Link
                key={s.slug}
                data-card
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="service-card panel group relative flex min-h-72 flex-col overflow-hidden rounded-2xl p-7 transition-[transform,border-color,box-shadow,background-color] duration-500 ease-out hover:-translate-y-2 hover:bg-[#071b29] hover:shadow-[0_24px_70px_-24px_rgba(18,136,211,0.75)]"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.homeSummary}
                </p>
                <ul className="mt-5 space-y-2 flex-1">
                  {s.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start text-xs text-muted-foreground/80">
                      <Check className="mr-2 mt-0.5 h-3.5 w-3.5 text-primary/70 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Technology */}
      <section className="border-t border-border bg-[var(--ink)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Technologies"
            title="Built with modern technologies."
            lead="We use proven, maintainable tools to build secure digital products without unnecessary complexity."
          />
          <div className="mt-8">
            <TechnologyMarquee />
          </div>
        </div>
      </section>


      {/* Products */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Our products"
            title="Practical Business Systems & Technology Solutions"
            lead="Purpose-built platforms and operational solutions shaped around real business workflows."
          />
          <Reveal className="mt-12 grid gap-4 lg:grid-cols-2" childSelector="[data-card]">
            {products.slice(0, 6).map((p) => (
              <Link
                key={p.slug}
                data-card
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="panel group rounded-2xl p-6 transition-colors hover:border-primary/50 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs tracking-wide text-muted-foreground uppercase">
                    {p.category}
                  </span>
                  <span className="rounded-full border border-primary/40 px-2.5 py-1 text-[11px] text-primary">
                    {p.status}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.pitch}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Solution details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </Reveal>
          <div className="mt-10 flex justify-center">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:gap-3"
            >
              Show more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-border">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col">
            <SectionHeading
              eyebrow="Why choose Us"
              title="Trusted technology. Lasting partnership."
              lead="Business-first recommendations, clear communication, multi-disciplinary delivery, and support beyond launch."
            />

            <Reveal delay={0.2}>
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <div className="mb-2 font-display text-4xl font-bold text-foreground">150+</div>
                  <div className="text-sm font-medium text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="mb-2 font-display text-4xl font-bold text-foreground">99%</div>
                  <div className="text-sm font-medium text-muted-foreground">Client Retention</div>
                </div>
                <div>
                  <div className="mb-2 font-display text-4xl font-bold text-foreground">24/7</div>
                  <div className="text-sm font-medium text-muted-foreground">Dedicated Support</div>
                </div>
                <div>
                  <div className="mb-2 font-display text-4xl font-bold text-foreground">10+</div>
                  <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(18,136,211,0.15)]"
                >
                  Learn about our approach <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal className="space-y-2" childSelector="[data-row]">
            {[
              [
                Gauge,
                "Performance budgets",
                "Page weight and Core Web Vitals are agreed targets, not afterthoughts.",
              ],
              [
                ShieldCheck,
                "Security baseline",
                "Dependency scanning, least-privilege access and reviewed releases as standard.",
              ],
              [
                Layers,
                "Documented systems",
                "Design tokens, component libraries and runbooks handed over with the code.",
              ],
              [
                Check,
                "Fixed-scope increments",
                "You approve each increment before we start it, so budget stays predictable.",
              ],
            ].map(([Icon, heading, body]) => {
              const I = Icon as typeof Gauge;
              return (
                <div
                  key={heading as string}
                  data-row
                  className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:translate-x-2 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/[0.07] hover:shadow-[0_14px_40px_-20px_rgba(18,136,211,0.75)]"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 transition-all group-hover:scale-110 group-hover:border-primary/60 group-hover:bg-primary/15 group-hover:shadow-[0_0_24px_rgba(18,136,211,0.35)]">
                    <I className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground transition-colors group-hover:text-[#62c4ff]">
                      {heading as string}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {body as string}
                    </p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-[var(--ink)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="How we work"
            title="Route from discovery to delivery and beyond"
          />
          <Reveal
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            childSelector="[data-card]"
          >
            {process.map((p) => (
              <div key={p.step} data-card className="panel rounded-2xl p-6">
                <span className="font-display text-3xl font-semibold text-primary/70">
                  {p.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-[var(--ink)]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
          <div className="flex min-w-0 flex-col">
            <SectionHeading
              eyebrow="FAQS"
              eyebrowClassName="text-base sm:text-lg"
              title="Frequently Asked Questions"
            />
            <Reveal delay={0.2}>
              <img
                src="/images/faq-character-small.png"
                alt="Do I have any Question?"
                width={400}
                height={478}
                loading="lazy"
                decoding="async"
                className="mx-auto mt-10 h-auto w-full max-w-[clamp(220px,28vw,360px)] object-contain lg:mx-0 lg:mt-12"
              />
            </Reveal>
          </div>
          <Reveal>
            <FaqAccordion items={faqs} idPrefix="home-faq" />
          </Reveal>
        </div>
      </section>

      <StrategicPartners />
    </>
  );
}
