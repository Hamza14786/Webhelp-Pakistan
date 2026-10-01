import Palette from "lucide-react/dist/esm/icons/palette";
import PenTool from "lucide-react/dist/esm/icons/pen-tool";
import Layers from "lucide-react/dist/esm/icons/layers";
import Megaphone from "lucide-react/dist/esm/icons/megaphone";
import Package from "lucide-react/dist/esm/icons/package";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import { Reveal } from "@/components/Reveal";
import { ServiceHero, FeatureCard, ProcessTimeline, ServiceFaq, ServiceCta, SectionBlock, SectionHeader } from "./ServicePageShared";

const capabilities = [
  { icon: Palette, title: "Brand strategy & direction", description: "We learn about your business, audience, competitors, and goals, then define the personality, positioning, and creative direction behind your brand." },
  { icon: PenTool, title: "Logo design & identity", description: "We explore logo concepts, refine the selected direction with your feedback, and develop colour palettes, typography, and logo variations for different uses." },
  { icon: Megaphone, title: "Marketing & social designs", description: "From social media templates and campaign graphics to brochures, business cards, and presentations, we create designs that speak the same visual language." },
  { icon: Package, title: "Packaging & print design", description: "We design labels, packaging, stationery, and signage around your brand, preparing artwork to the dimensions and print specifications agreed for your project." },
  { icon: Layers, title: "Mockups & brand previews", description: "See how your identity could look on packaging, stationery, storefronts, and digital screens before production. Mockups help us review scale, layout, and consistency together." },
  { icon: BookOpen, title: "Brand guidelines & handover", description: "We document logo usage, colours, typography, and layout principles, then organize approved assets and agreed editable files so your team can use them consistently." },
];

const steps = [
  { number: "01", title: "Discover your brand", description: "We discuss your story, audience, goals, existing materials, and the touchpoints you need." },
  { number: "02", title: "Set the creative direction", description: "We build moodboards and agree on a visual direction, deliverables, and review milestones." },
  { number: "03", title: "Design the identity", description: "We create logo concepts and explore colours, typography, and supporting graphic elements." },
  { number: "04", title: "Review with mockups", description: "We apply the chosen direction to realistic examples and refine it through agreed feedback rounds." },
  { number: "05", title: "Build your brand assets", description: "We extend the approved identity into the digital, marketing, and print designs in your scope." },
  { number: "06", title: "Handover & launch", description: "We deliver organized files and usage guidance, with ongoing design support available as your brand grows." },
];

export function BrandBuildingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Brand Development"
        title="A Brand People Recognize. A Story They Remember."
        lead="We turn your business story into a clear, distinctive visual identity. From strategy and logo design to marketing creatives and realistic mockups, we help your brand look consistent wherever customers meet it."
        ctaText="Let's Build Your Brand"
        ctaSlug="brand-building"
        visual={
          <div className="panel rounded-3xl border border-primary/30 p-6 sm:p-8">
            <p className="svc-eyebrow">From idea to identity</p>
            <div className="my-7 flex items-center gap-4">
              <span className="rounded-2xl bg-primary/15 p-5 text-primary"><PenTool size={42} aria-hidden="true" /></span>
              <div><p className="text-3xl font-semibold">Your brand.</p><p className="mt-2 text-muted-foreground">Distinctive by design.</p></div>
            </div>
            <div className="flex gap-3" aria-label="Illustrative brand colour palette">
              {["#1288d3", "#25d2dd", "#083344", "#e0f2fe"].map((colour) => <span key={colour} className="h-12 flex-1 rounded-xl border border-border" style={{ backgroundColor: colour }} />)}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Logo & identity", "Colour & type", "Design & mockups", "Brand guidelines"].map((label) => <p key={label} className="rounded-xl border border-border p-3">{label}</p>)}
            </div>
          </div>
        }
      />
      <SectionBlock glow="right">
        <SectionHeader eyebrow="What we create" title="One Identity. Every Touchpoint." lead="Build a new brand or refresh an existing one. We agree on the assets you need, then bring them together in a cohesive design system." />
        <Reveal className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" childSelector="[data-card]">
          {capabilities.map((item) => <div key={item.title} data-card><FeatureCard {...item} /></div>)}
        </Reveal>
      </SectionBlock>
      <SectionBlock border glow="left">
        <SectionHeader eyebrow="How we work" title="From Your First Idea to a Confident Launch" lead="You are involved at each review milestone, so the final identity reflects your business and works in the places you will actually use it." />
        <div className="mt-10"><ProcessTimeline steps={steps} /></div>
      </SectionBlock>
      <SectionBlock border>
        <SectionHeader eyebrow="Your brand toolkit" title="Designed to Be Used, Not Just Presented" lead="Depending on your agreed scope, your handover can include logo variants, SVG and PDF artwork, transparent PNG exports, colour references, font guidance, social templates, print files, and a practical brand guide. We confirm file formats, revision rounds, font licensing, and production requirements before work begins." />
      </SectionBlock>
      <ServiceFaq idPrefix="brand-building" items={[
        { q: "Can you refresh our existing brand?", a: "Yes. We review what already works, identify what needs to change, and agree whether you need a light visual refresh or a broader identity redesign." },
        { q: "Can we start with a logo and add other designs later?", a: "Yes. We can begin with your logo and essential identity assets, then extend the approved direction to social media, stationery, packaging, and other materials." },
        { q: "What are mockups used for?", a: "Mockups preview how designs could look on real objects and screens. They help you evaluate the design before production; physical printing and manufacturing are separate from the design deliverables." },
        { q: "How long does brand building take?", a: "The timeline depends on the deliverables, concept development, and feedback rounds. After the initial discussion, we agree on the scope and a realistic project schedule." },
        { q: "Do you offer ongoing design support?", a: "Yes. We can plan ongoing campaign graphics, social content, presentations, and new brand assets using the identity and guidelines we establish together." },
      ]} />
      <ServiceCta title="Ready to Give Your Brand a Clear Identity?" description="Tell us about your business, your audience, and the designs you need. We will help you plan the next steps, from the first logo concept to your launch materials." buttonText="Discuss Your Brand" slug="brand-building" />
    </>
  );
}
