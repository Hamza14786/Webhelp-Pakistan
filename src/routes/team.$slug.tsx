import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import BriefcaseBusiness from "lucide-react/dist/esm/icons/briefcase-business";
import MapPin from "lucide-react/dist/esm/icons/map-pin";

import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";

type LeadershipProfile = {
  name: string;
  role: string;
  image: string;
  location?: string;
  department: string;
  intro: string;
  about: string[];
  highlights: { value: string; label: string }[];
  skills: string[];
};

const profiles: Record<string, LeadershipProfile> = {
  "saqib-rasheed": {
    name: "Saqib Rasheed",
    role: "CEO & Founder",
    image: "/images/team/saqib-rasheed.webp",
    location: "Rawalpindi, Pakistan",
    department: "Executive Leadership",
    intro: "Leading WebHelp Pakistan with more than 24 years of technology-industry experience.",
    about: [
      "Saqib Rasheed is the founder and CEO of WebHelp Pakistan, an information technology professional with more than 24 years of industry experience, including work with global multinational organizations.",
      "He established WebHelp to help businesses use practical digital solutions to improve growth, efficiency and innovation. His work spans web platforms, hosting, enterprise applications, integrations, technology strategy and long-term client support.",
      "His leadership approach begins with understanding each client's operating needs and shaping responsible, measurable solutions around them.",
    ],
    highlights: [{ value: "24+", label: "Years of IT industry experience" }, { value: "2019", label: "WebHelp Pakistan founded" }, { value: "Global", label: "Business and technology perspective" }],
    skills: ["IT Strategy", "Web Development", "Team Leadership", "IT Consulting", "Cloud Solutions", "Project Management", "Client Relations"],
  },
  "umaira-ashfaq": {
    name: "Umaira Ashfaq",
    role: "Managing Director",
    image: "/images/team/umaira-ashfaq.webp",
    location: "Rawalpindi, Pakistan",
    department: "Operations & Management",
    intro: "Advancing operational excellence, innovation and sustainable organizational growth.",
    about: [
      "Umaira Ashfaq serves as Managing Director with a strong vision for innovation, operational excellence and sustainable growth.",
      "With experience in strategic planning and business leadership, she helps steer the organization toward long-term success through clear priorities, collaborative management and performance-focused execution.",
      "Umaira is committed to building capable teams, strengthening client relationships and ensuring WebHelp consistently delivers value-driven solutions.",
    ],
    highlights: [{ value: "Strategy", label: "Long-term organizational direction" }, { value: "People", label: "Collaborative team leadership" }, { value: "Value", label: "Performance and client outcomes" }],
    skills: ["Strategic Planning", "Market Expansion", "Organizational Development", "Performance Optimization", "Decision Making", "Client Relations"],
  },
  "muhammad-bilal-raja": {
    name: "Muhammad Bilal Raja",
    role: "Director Business Development",
    image: "/images/team/muhammad-bilal-raja.jpg",
    location: "Islamabad, Pakistan",
    department: "Business Development",
    intro: "Connecting organizations with technology solutions designed around measurable business goals.",
    about: [
      "Muhammad Bilal Raja serves as Director Business Development at WebHelp Pakistan, helping connect organizations with practical technology solutions that support measurable business goals.",
      "His role centers on understanding client priorities, identifying opportunities and shaping partnerships built for long-term value.",
      "Working closely with clients and delivery teams, he focuses on strategic partnerships, market growth, solution alignment and consistent communication from the first conversation through ongoing collaboration.",
    ],
    highlights: [{ value: "B2B", label: "Business relationship development" }, { value: "Growth", label: "Market and opportunity strategy" }, { value: "Aligned", label: "Client-to-delivery coordination" }],
    skills: ["Business Development", "Strategic Partnerships", "Market Development", "Client Relationship Management", "Solution Consulting", "Growth Strategy"],
  },
  "sumayya-rasheed": {
    name: "Sumayya Rasheed",
    role: "Odoo & Finance Manager",
    image: "/images/team/sumayya-rasheed.webp",
    location: "Rawalpindi, Pakistan",
    department: "Odoo & Finance",
    intro: "Connecting financial discipline with organized, technology-supported business operations.",
    about: [
      "Sumayya Rasheed serves as Odoo & Finance Manager at WebHelp Pakistan, supporting financial coordination and the structured use of Odoo across business workflows.",
      "Her role brings together operational detail, reporting, process organization and responsible financial management so teams can work with clearer records and stronger visibility.",
      "She contributes a careful, systems-focused approach to internal operations and client-facing Odoo initiatives.",
    ],
    highlights: [{ value: "Odoo", label: "ERP workflow coordination" }, { value: "Finance", label: "Reporting and operational control" }, { value: "Process", label: "Structured business operations" }],
    skills: ["Odoo ERP", "Finance Management", "Business Workflows", "Operational Reporting", "Process Coordination", "Client Relations"],
  },
  "hamza-malik": {
    name: "Hamza Mustafa Malik",
    role: "IT Manager",
    image: "/images/team/hamza-malik.webp",
    location: "Rawalpindi, Pakistan",
    department: "Information Technology",
    intro: "Coordinating dependable technology delivery, systems and digital operations.",
    about: [
      "Hamza Mustafa Malik is an IT Manager at WebHelp, coordinating technology delivery, systems and digital solutions around business requirements.",
      "He helps guide projects from planning through implementation while keeping quality, reliability and clear communication in focus.",
      "His problem-solving mindset and commitment to continuous learning help connect technical work with practical business needs and support WebHelp's operational excellence.",
    ],
    highlights: [{ value: "IT", label: "Systems and delivery management" }, { value: "End-to-end", label: "Planning through implementation" }, { value: "Reliable", label: "Quality and operational continuity" }],
    skills: ["IT Management", "Cloud Solutions", "Project Management", "Technical Operations", "Web Technologies", "Performance & Reliability"],
  },
  "riaz-shah": {
    name: "Riaz Ali Shah",
    role: "Director Sales & Marketing",
    image: "/images/team/riaz-shah.jpeg",
    location: "Pakistan",
    department: "Sales Leadership",
    intro: "Supporting sales strategy, client relationships, solution positioning and sustainable growth.",
    about: [
      "Riaz Ali Shah serves as Director Sales & Marketing at WebHelp Pakistan, connecting business requirements with practical digital and technology solutions.",
      "He contributes across opportunity development, solution positioning, proposal coordination, pipeline visibility and account growth, helping clients move from an initial requirement to a clearly defined next step.",
      "Riaz brings a client-first perspective to sales leadership, keeping business outcomes, communication and responsible delivery aligned throughout each engagement.",
    ],
    highlights: [{ value: "B2B", label: "Business sales and relationships" }, { value: "Growth", label: "Commercial planning and opportunity" }, { value: "Client-first", label: "Discovery and follow-through" }],
    skills: ["Sales Strategy", "Business Development", "Client Relationship Management", "Solution Consulting", "Commercial Negotiation", "CRM & Pipeline Management", "Proposal Coordination", "Account Growth"],
  },
  "raja-jahangir": {
    name: "Raja Jahangir",
    role: "Business Development Manager — UAE",
    image: "/images/team/raja-jahangir.png",
    location: "United Arab Emirates",
    department: "UAE Business Development",
    intro: "Developing regional partnerships and helping UAE businesses find suitable digital solutions.",
    about: [
      "Raja Jahangir serves as Business Development Manager — UAE at WebHelp Pakistan, helping organizations explore suitable websites, software, business systems and digital support services.",
      "He supports market development, B2B relationship building, client discovery, proposal strategy and coordination between UAE opportunities and WebHelp's delivery teams.",
      "His approach emphasizes responsive communication, commercial clarity and partnerships designed around each client's goals and operating environment.",
    ],
    highlights: [{ value: "UAE", label: "Regional market focus" }, { value: "B2B", label: "Partnership development" }, { value: "End-to-end", label: "Discovery through coordination" }],
    skills: ["UAE Market Development", "B2B Partnerships", "Client Discovery", "Solution Consulting", "CRM & Pipeline Management", "Proposal Strategy", "Account Growth", "Cross-Border Coordination"],
  },
  "umer-shahbaz": {
    name: "Umer Shahbaz",
    role: "Business Development Executive - KSA (Kingdom of Saudi Arabia)",
    image: "/images/team/umer-shahbaz.jpeg",
    department: "Business Development",
    intro: "Business Development Executive for KSA at WebHelp Pakistan.",
    about: [],
    highlights: [],
    skills: [],
  },
  "hasnat-ali": {
    name: "Hasnat Ali",
    role: "Senior Web Developer",
    image: "/images/team/hasnat-ali.webp",
    location: "Rawalpindi, Pakistan",
    department: "Web Development",
    intro: "Building high-performance, scalable and visually considered digital experiences.",
    about: [
      "Hasnat Ali is a Senior Web Developer at WebHelp, specializing in high-performance, scalable and visually compelling websites.",
      "He transforms complex business requirements into responsive digital experiences with a strong focus on clean code, interface quality and performance optimization.",
      "His problem-solving mindset, attention to detail and commitment to learning make him a key contributor to WebHelp's technical excellence.",
    ],
    highlights: [{ value: "5+", label: "Years of web development experience" }, { value: "50+", label: "Business websites delivered" }, { value: "100%", label: "Focus on responsive UI quality" }],
    skills: ["Responsive & Mobile-First Design", "UI/UX Implementation", "React.js / Next.js", "Cloud Solutions", "Project Management", "SEO Best Practices"],
  },
};

export const Route = createFileRoute("/team/$slug")({
  beforeLoad: ({ params }) => {
    if (!profiles[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const profile = profiles[params.slug];
    return profile ? { meta: [{ title: `${profile.name} | WebHelp Pakistan` }, { name: "description", content: profile.intro }] } : {};
  },
  component: LeadershipProfilePage,
});

function LeadershipProfilePage() {
  const { slug } = Route.useParams();
  const profile = profiles[slug]!;
  return (
    <>
      <PageHero eyebrow="Leadership profile" title={profile.name} lead={profile.role} />
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-8 lg:py-24">
          <Reveal><div className="overflow-hidden rounded-3xl border border-primary/35 bg-[#071b29] shadow-[0_30px_90px_-35px_rgba(18,136,211,0.55)]"><img src={profile.image} alt={profile.name} width={1024} height={1536} className="h-auto w-full object-contain" /></div></Reveal>
          <Reveal className="flex flex-col justify-center" delay={0.12}>
            <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Leadership Team</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">{profile.intro}</h2>
            <div className="mt-7 space-y-4">{profile.about.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-muted-foreground">{paragraph}</p>)}</div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {profile.location && <div className="rounded-2xl border border-border bg-secondary/35 p-5"><MapPin className="h-5 w-5 text-primary" /><span className="mt-3 block text-xs tracking-[0.14em] text-muted-foreground uppercase">Location</span><strong className="mt-1 block text-lg">{profile.location}</strong></div>}
              <div className="rounded-2xl border border-border bg-secondary/35 p-5"><BriefcaseBusiness className="h-5 w-5 text-primary" /><span className="mt-3 block text-xs tracking-[0.14em] text-muted-foreground uppercase">Department</span><strong className="mt-1 block text-lg">{profile.department}</strong></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#0e77ba]">Discuss your project <ArrowRight className="h-4 w-4 group-hover:translate-x-1" /></Link><Link to="/about" className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-bold transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"><ArrowLeft className="h-4 w-4 group-hover:-translate-x-1" /> Back to our team</Link></div>
          </Reveal>
        </div>
      </section>
      {(profile.highlights.length > 0 || profile.skills.length > 0) && <section className="bg-[var(--ink)]"><div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal><p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Career highlights</p><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Experience focused on meaningful outcomes.</h2></Reveal>
        <Reveal className="mt-10 grid gap-4 md:grid-cols-3" childSelector="[data-highlight]">{profile.highlights.map((item) => <article data-highlight key={item.label} className="panel rounded-2xl p-7"><strong className="text-3xl text-primary">{item.value}</strong><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.label}</p></article>)}</Reveal>
        <Reveal className="mt-14"><h2 className="text-xl font-semibold">Skills &amp; expertise</h2><div className="mt-5 flex flex-wrap gap-2">{profile.skills.map((skill) => <span key={skill} className="rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-2 text-xs text-[#b9ddf2]">{skill}</span>)}</div></Reveal>
      </div></section>}
    </>
  );
}
