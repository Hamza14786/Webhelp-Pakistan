import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";

import "./FlexibleVpsPackages.css";

type VpsPlan = {
  name: string;
  description: string;
  price: string;
  storage: string;
  features: readonly string[];
  badge?: string;
  featured?: boolean;
};

const vpsPlans: readonly VpsPlan[] = [
  {
    name: "VPS Starter",
    description: "For professional sites and lean business workloads",
    price: "PKR 6,750",
    storage: "5 GB NVMe Storage",
    features: [
      "Up to 32 vCPU cores available",
      "Up to 128 GB RAM available",
      "5 GB NVMe Storage",
      "Unlimited Business Emails",
      "24/7 technical support",
      "And many more...",
    ],
  },
  {
    name: "VPS Business",
    description: "For growing websites, portals, and business systems",
    price: "PKR 10,600",
    storage: "15 GB NVMe Storage",
    badge: "Most Popular",
    featured: true,
    features: [
      "Up to 32 vCPU cores available",
      "Up to 128 GB RAM available",
      "15 GB NVMe Storage",
      "Unlimited Business Emails",
      "And many more...",
    ],
  },
  {
    name: "VPS Enterprise",
    description: "For heavier business applications and larger storage needs",
    price: "PKR 16,100",
    storage: "30 GB NVMe Storage",
    features: [
      "Up to 32 vCPU cores available",
      "Up to 128 GB RAM available",
      "30 GB NVMe Storage",
      "Unlimited Business Emails",
      "And many more...",
    ],
  },
];

export function FlexibleVpsPackages() {
  return (
    <section className="flexible-vps-packages" aria-labelledby="vps-packages-title">
      <div className="flexible-vps-packages__container">
        <Reveal className="flexible-vps-packages__header">
          <div className="flexible-vps-packages__badge">Flexible VPS Packages</div>
          <h2 id="vps-packages-title">Select the Server Foundation That Fits Your Business</h2>
          <p>
            Start with the storage tier your workload needs, then scale with enterprise-ready
            compute, memory, operating system flexibility, backups, security options, and WebHelp
            support.
          </p>
          <p className="flexible-vps-packages__note">
            Standard storage tiers are 5 GB, 15 GB, and 30 GB. Larger storage, control panels,
            migration, and managed services are available through a custom VPS request.
          </p>
        </Reveal>

        <Reveal className="flexible-vps-packages__grid" childSelector="[data-vps-plan]">
          {vpsPlans.map((plan) => (
            <article
              key={plan.name}
              data-vps-plan
              className={`flexible-vps-card${plan.featured ? " flexible-vps-card--featured" : ""}`}
            >
              {plan.badge && <span className="flexible-vps-card__badge">{plan.badge}</span>}
              <h3>{plan.name}</h3>
              <p className="flexible-vps-card__description">{plan.description}</p>
              <div className="flexible-vps-card__price">
                {plan.price}
                <span>/mo</span>
              </div>
              <p className="flexible-vps-card__period">Billed monthly</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link
                to="/contact"
                search={{ service: "hosting" }}
                aria-label={`Get started with ${plan.name}, ${plan.price} per month, ${plan.storage}`}
                className="flexible-vps-card__button"
              >
                Get Started
              </Link>
            </article>
          ))}
        </Reveal>
        <div className="flexible-vps-packages__custom">
          <a href="#vps-enquiry-title" className="flexible-vps-card__button flexible-vps-packages__custom-button">
            Choose Your Own Plan
          </a>
        </div>
      </div>
    </section>
  );
}
