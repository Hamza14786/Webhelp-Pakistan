import { useState } from "react";
import "./TechnologyMarquee.css";

export interface TechItem {
  name: string;
  category: string;
  logo: string;
}

const frontendAndLanguages: TechItem[] = [
  {
    name: "React",
    category: "Frontend UI",
    logo: "https://api.iconify.design/logos:react.svg",
  },
  {
    name: "Next.js",
    category: "Fullstack App",
    logo: "https://api.iconify.design/simple-icons:nextdotjs.svg?color=white",
  },
  {
    name: "TypeScript",
    category: "Type Safety",
    logo: "https://api.iconify.design/logos:typescript-icon.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Modern UI",
    logo: "https://api.iconify.design/logos:tailwindcss-icon.svg",
  },
  {
    name: "Node.js",
    category: "Runtime Engine",
    logo: "https://api.iconify.design/logos:nodejs-icon.svg",
  },
  {
    name: "Python",
    category: "Backend & AI",
    logo: "https://api.iconify.design/logos:python.svg",
  },
  {
    name: "Vue.js",
    category: "Progressive UI",
    logo: "https://api.iconify.design/logos:vue.svg",
  },
  {
    name: "TanStack",
    category: "Data & State",
    logo: "https://api.iconify.design/logos:react-query-icon.svg",
  },
  {
    name: "Go (Golang)",
    category: "Microservices",
    logo: "https://api.iconify.design/logos:go.svg",
  },
  {
    name: "Laravel",
    category: "PHP Framework",
    logo: "https://api.iconify.design/logos:laravel.svg",
  },
  {
    name: "Flutter",
    category: "Mobile Apps",
    logo: "https://api.iconify.design/logos:flutter.svg",
  },
  {
    name: "GraphQL",
    category: "Query APIs",
    logo: "https://api.iconify.design/logos:graphql.svg",
  },
  {
    name: "Vite",
    category: "Build Tool",
    logo: "https://api.iconify.design/logos:vitejs.svg",
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    logo: "https://api.iconify.design/logos:figma.svg",
  },
];

const backendAndCloud: TechItem[] = [
  {
    name: "AWS Cloud",
    category: "Cloud Platform",
    logo: "https://api.iconify.design/simple-icons:amazonwebservices.svg?color=%23FF9900",
  },
  {
    name: "Docker",
    category: "Containers",
    logo: "https://api.iconify.design/logos:docker-icon.svg",
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    logo: "https://api.iconify.design/logos:kubernetes.svg",
  },
  {
    name: "PostgreSQL",
    category: "Relational DB",
    logo: "https://api.iconify.design/logos:postgresql.svg",
  },
  {
    name: "MongoDB",
    category: "Document DB",
    logo: "https://api.iconify.design/logos:mongodb-icon.svg",
  },
  {
    name: "Redis",
    category: "In-Memory Cache",
    logo: "https://api.iconify.design/logos:redis.svg",
  },
  {
    name: "Supabase",
    category: "Backend & DB",
    logo: "https://api.iconify.design/logos:supabase-icon.svg",
  },
  {
    name: "Cloudflare",
    category: "Edge & CDN",
    logo: "https://api.iconify.design/logos:cloudflare-icon.svg",
  },
  {
    name: "Linux",
    category: "Enterprise OS",
    logo: "https://api.iconify.design/logos:linux-tux.svg",
  },
  {
    name: "Nginx",
    category: "Reverse Proxy",
    logo: "https://api.iconify.design/logos:nginx.svg",
  },
  {
    name: "MySQL",
    category: "Relational DB",
    logo: "https://api.iconify.design/logos:mysql.svg",
  },
  {
    name: "Odoo ERP",
    category: "Business Suite",
    logo: "https://api.iconify.design/simple-icons:odoo.svg?color=%23714B67",
  },
  {
    name: "Shopify",
    category: "E-Commerce",
    logo: "https://api.iconify.design/logos:shopify.svg",
  },
  {
    name: "WordPress",
    category: "CMS Platform",
    logo: "https://api.iconify.design/logos:wordpress-icon.svg",
  },
];

function TechCard({ item }: { item: TechItem }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="tech-card" title={`${item.name} • ${item.category}`}>
      <div className="tech-logo-wrap">
        {!failed ? (
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="tech-logo-img"
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="tech-logo-fallback" aria-hidden="true">
            {item.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="tech-info">
        <span className="tech-name">{item.name}</span>
        <span className="tech-category">{item.category}</span>
      </div>
    </div>
  );
}

export function TechnologyMarquee() {
  return (
    <div className="tech-marquee-container">
      {/* Row 1: Frontend, Languages & Frameworks (Marquee Moving Left) */}
      <div className="tech-marquee-viewport" aria-label="Modern development technologies">
        <div className="tech-marquee-track tech-marquee-track--left">
          {frontendAndLanguages.concat(frontendAndLanguages).map((item, index) => (
            <TechCard
              key={`row1-${item.name}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>

      {/* Row 2: Cloud, DevOps, Databases & Platforms (Marquee Moving Right) */}
      <div className="tech-marquee-viewport" aria-label="Cloud and backend infrastructure technologies">
        <div className="tech-marquee-track tech-marquee-track--right">
          {backendAndCloud.concat(backendAndCloud).map((item, index) => (
            <TechCard
              key={`row2-${item.name}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
