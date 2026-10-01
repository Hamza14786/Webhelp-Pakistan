import type { CSSProperties } from "react";
import CodeXml from "lucide-react/dist/esm/icons/code-xml";
import Smartphone from "lucide-react/dist/esm/icons/smartphone";
import ShoppingBag from "lucide-react/dist/esm/icons/shopping-bag";
import PanelsTopLeft from "lucide-react/dist/esm/icons/panels-top-left";
import Workflow from "lucide-react/dist/esm/icons/workflow";
import Search from "lucide-react/dist/esm/icons/search";
import Megaphone from "lucide-react/dist/esm/icons/megaphone";
import Palette from "lucide-react/dist/esm/icons/palette";
import Globe from "lucide-react/dist/esm/icons/globe";
import Server from "lucide-react/dist/esm/icons/server";
import Wrench from "lucide-react/dist/esm/icons/wrench";
import Users from "lucide-react/dist/esm/icons/users";

import "./ServicesHeroAnimation.css";

export type FloatingCardItem = {
  title: string;
  category: string;
  Icon: typeof CodeXml;
};

const serviceCards: FloatingCardItem[] = [
  { title: "Website Development", category: "WEB EXPERIENCES", Icon: CodeXml },
  { title: "Mobile App Development", category: "MOBILE SOLUTIONS", Icon: Smartphone },
  { title: "E-commerce Development", category: "DIGITAL COMMERCE", Icon: ShoppingBag },
  { title: "Web Portal Development", category: "CONNECTED PLATFORMS", Icon: PanelsTopLeft },
  { title: "Custom Software Development", category: "BUSINESS SYSTEMS", Icon: Workflow },
  { title: "SEO & Search Visibility", category: "GROWTH & DISCOVERY", Icon: Search },
  { title: "Digital Marketing", category: "DIGITAL GROWTH", Icon: Megaphone },
  { title: "UI/UX Design", category: "PRODUCT DESIGN", Icon: Palette },
  { title: "WordPress Development", category: "CONTENT PLATFORMS", Icon: Globe },
  { title: "Business VPS & Managed Hosting", category: "CLOUD INFRASTRUCTURE", Icon: Server },
  { title: "Software Maintenance & Support", category: "ONGOING SUPPORT", Icon: Wrench },
  { title: "Dedicated Remote IT Teams", category: "EXTENDED TEAMS", Icon: Users },
];

export function FloatingCardsAnimation({ items }: { items: FloatingCardItem[] }) {
  const longSequence = items.length === 15;
  return (
    <div className={`services-hero-animation${longSequence ? " services-hero-animation--15" : ""}`} aria-hidden="true">
      <div className="services-hero-animation__glow" />
      {items.map(({ title, category, Icon }, index) => (
        <article
          key={title}
          className="services-flight-card"
          style={{ "--service-delay": `${-index * 2.5}s` } as CSSProperties}
        >
          <span className="services-flight-card__icon"><Icon size={22} strokeWidth={1.8} /></span>
          <span className="services-flight-card__copy">
            <span className="services-flight-card__category">{category}</span>
            <span className="services-flight-card__title">{title}</span>
          </span>
          <span className="services-flight-card__signal" />
        </article>
      ))}
    </div>
  );
}

export function ServicesHeroAnimation() {
  return <FloatingCardsAnimation items={serviceCards} />;
}
