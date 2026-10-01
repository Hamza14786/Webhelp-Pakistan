import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Sections";
import { TechnologyMarquee } from "@/components/TechnologyMarquee";
import { faqs, process, services, team } from "@/lib/site";
import { FaqAccordion } from "@/components/FaqAccordion";

const title = "IT Company in Islamabad, Pakistan | About WebHelp Pakistan";
const description =
  "Learn about Webhelp Pakistan, an Islamabad-based IT company providing web solutions, managed support, hosting and remote technology teams for local and global clients.";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }] }),
  component: AboutPage,
});


type TeamMember = (typeof team)[number];

function TeamGroup({ title, members }: { title: string; members: TeamMember[] }) {
  return (
    <div>
      <div className="flex items-center gap-5">
        <h2 className="shrink-0 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {title}
        </h2>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <Reveal className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3" childSelector="[data-card]">
        {members.map((member) => (
          <article
            key={member.number}
            data-card
            className="overflow-hidden border border-border bg-secondary/40"
          >
            <div className="group relative aspect-[0.925] overflow-hidden bg-[#071b29]">
              <img
                src={member.image}
                alt={member.name}
                width={800}
                height={865}
                loading="lazy"
                className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/55 text-[11px] font-medium text-white backdrop-blur-sm">
                {member.number}
              </span>
            </div>
            <div className="flex min-h-40 flex-col p-6">
              <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                {member.name}
              </h3>
              <p className="mt-1.5 text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                {member.role}
              </p>
              {member.profile && (
                <a
                  href={member.profile}
                  className="mt-auto pt-7 text-[10px] font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-primary"
                >
                  View profile ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </Reveal>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Who we are"
        title="Your Global Technology Partner, Empowering Businesses Worldwide"
        lead="Since 2019, Webhelp Pakistan has helped businesses improve how they build, manage, and support digital operations—from websites and ecommerce to hosting, integrations, automation, managed support, and dedicated remote teams."
      />

      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            title="The people behind Webhelp Pakistan"
            lead="Our leadership and delivery team brings practical experience across technology strategy, operations, ERP, finance, design, development, infrastructure, and client delivery."
          />
          <div className="mt-12 space-y-20">
            <TeamGroup
              title="Our Leadership Team"
              members={team.filter((member) => member.group === "leadership")}
            />
            <TeamGroup
              title="Creative & Delivery Team"
              members={team.filter((member) => member.group === "creative")}
            />
          </div>
        </div>
      </section>

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
          <Reveal className="mt-12 space-y-4">
            {[
              "Responsive Experiences",
              "Modern Development",
              "Scalable Architecture",
              "Business-Focused Design",
              "Long-Term Support",
            ].map((item) => (
              <div
                key={item}
                className="border-b border-border pb-4 font-display text-xl font-medium sm:text-2xl"
              >
                {item}
              </div>
            ))}
          </Reveal>
        </div>
      </section>


      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Our mission"
            title="Practical technology that supports sustainable growth"
            lead="To deliver practical, secure, and scalable technology solutions that help businesses improve efficiency, protect digital operations, reduce avoidable technical friction, and build systems that can support sustainable growth."
          />
          <Reveal
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            childSelector="[data-card]"
          >
            {services.map((service, index) => (
              <article key={service.slug} data-card className="panel rounded-2xl p-6">
                <span className="text-xs font-semibold text-primary">0{index + 1}</span>
                <h2 className="mt-3 font-display text-lg font-semibold">{service.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-[var(--ink)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Our journey"
            title="Local presence, international collaboration"
            lead="Founded in 2019, we expanded remote delivery and developed multi-disciplinary capabilities across development, support, infrastructure, design, ecommerce, operations, and business systems."
          />
          <Reveal
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            childSelector="[data-card]"
          >
            {process.map((item) => (
              <article key={item.step} data-card className="panel rounded-2xl p-6">
                <span className="font-display text-3xl font-semibold text-primary/70">
                  {item.step}
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-[var(--ink)]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Our standard"
            title="Built for businesses that expect more."
            lead="Clear communication, reliable delivery, and technology decisions made with your long-term interests in mind."
          />
          <Reveal className="space-y-5">
            {[
              ["Quality", "Careful execution and review at every stage."],
              ["Reliability", "Systems and support your team can depend on."],
              ["Long-term value", "Maintainable work designed to keep creating value."],
            ].map(([heading, body]) => (
              <div key={heading} className="border-b border-border pb-5">
                <h2 className="font-display text-lg font-semibold">{heading}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-[var(--ink)]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-20">
          <div className="flex min-w-0 flex-col">
            <SectionHeading
              eyebrow="FAQS"
              eyebrowClassName="text-base sm:text-lg"
              title="Questions answered clearly."
              lead="Straight answers to the questions businesses usually ask before starting a project."
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
            <FaqAccordion items={faqs} idPrefix="about-faq" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
