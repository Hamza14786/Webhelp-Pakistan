import Zap from "lucide-react/dist/esm/icons/zap";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import Terminal from "lucide-react/dist/esm/icons/terminal";
import SlidersHorizontal from "lucide-react/dist/esm/icons/sliders-horizontal";
import Headphones from "lucide-react/dist/esm/icons/headphones";
import Activity from "lucide-react/dist/esm/icons/activity";
import DatabaseBackup from "lucide-react/dist/esm/icons/database-backup";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import { Reveal } from "@/components/Reveal";
import "./VpsBenefitsCard.css";

const vpsBenefits = [
  {
    id: "nvme",
    title: "Performance-Optimized NVMe",
    description:
      "Ultra-fast PCIe Gen4 enterprise NVMe solid-state storage delivering exceptional IOPS, zero read/write bottlenecks, and rapid database query response.",
    icon: Zap,
  },
  {
    id: "security",
    title: "Security-Ready Infrastructure",
    description:
      "Kernel-level virtualization isolation, hardware firewall filtering, automated DDoS shielding, and SSL encryption protocols pre-configured.",
    icon: ShieldCheck,
  },
  {
    id: "deployment",
    title: "Instant Deployment Workflow",
    description:
      "Automated OS provisioning with popular Linux and Windows distributions, ready for your production code and applications in minutes.",
    icon: Rocket,
  },
  {
    id: "control",
    title: "Enterprise Server Control",
    description:
      "Complete root/administrator access via SSH or RDP, dedicated static IPv4/IPv6 addresses, and total environment customization freedom.",
    icon: Terminal,
  },
  {
    id: "control-panel",
    title: "Control Panel Options",
    description:
      "Native compatibility for cPanel, Plesk, CyberPanel, CloudPanel, or lean headless stacks with Node.js, Docker, Python, and PHP.",
    icon: SlidersHorizontal,
  },
  {
    id: "support",
    title: "Premium Support Availability",
    description:
      "24/7 technical assistance backed by direct sysadmin escalation for network health, migrations, configuration, and performance tuning.",
    icon: Headphones,
  },
  {
    id: "reliability",
    title: "Infrastructure Reliability",
    description:
      "Tier-3 carrier-neutral data centers with redundant power arrays, multiple transit uplinks, and an SLA-backed 99.9% uptime guarantee.",
    icon: Activity,
  },
  {
    id: "backup",
    title: "Backup and Recovery Readiness",
    description:
      "Automated snapshot schedules, isolated off-site retention, and one-click disaster recovery restoration to safeguard critical assets.",
    icon: DatabaseBackup,
  },
];

export function VpsBenefitsCard() {
  return (
    <section className="vps-benefits-section" aria-labelledby="vps-benefits-title">
      <div className="vps-benefits-container">
        {/* Section Heading */}
        <Reveal className="vps-benefits-header">
          <div className="vps-benefits-badge">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Architecture &amp; Capabilities</span>
          </div>
          <h2 id="vps-benefits-title" className="vps-benefits-title">
            Enterprise VPS Hosting Advantages
          </h2>
          <p className="vps-benefits-lead">
            High-performance infrastructure, isolated compute resources, and around-the-clock
            operational reliability engineered for growing business operations.
          </p>
        </Reveal>

        {/* ONE SINGLE LARGE PREMIUM CARD */}
        <Reveal y={25}>
          <div className="vps-premium-card" data-card>
            {/* Ambient Lighting Accents */}
            <div className="vps-premium-card__glow-top" aria-hidden="true" />
            <div className="vps-premium-card__glow-bottom" aria-hidden="true" />

            {/* Top Meta Bar inside the Card */}
            <div className="vps-premium-card__header">
              <div className="vps-premium-card__meta">
                <span className="vps-premium-card__pill">Full-Stack Hosting Power</span>
              </div>
              <p className="vps-premium-card__summary">
                Every WebHelp Business VPS instance is backed by enterprise hardware, guaranteed compute
                isolation, and comprehensive management options.
              </p>
            </div>

            {/* 2-Column Grid on Desktop, 1-Column Layout on Mobile */}
            <div className="vps-benefits-grid">
              {vpsBenefits.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="vps-benefit-item group">
                    <div className="vps-benefit-icon-wrapper">
                      <IconComponent className="vps-benefit-icon" />
                    </div>
                    <div className="vps-benefit-content">
                      <h3 className="vps-benefit-heading">{item.title}</h3>
                      <p className="vps-benefit-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Trust & Spec Strip inside the single card */}
            <div className="vps-premium-card__footer">
              <div className="vps-spec-item">
                <span className="vps-spec-dot" />
                <span>Tier-3 Global Data Centers</span>
              </div>
              <div className="vps-spec-item">
                <span className="vps-spec-dot" />
                <span>Pure PCIe Gen4 NVMe</span>
              </div>
              <div className="vps-spec-item">
                <span className="vps-spec-dot" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="vps-spec-item">
                <span className="vps-spec-dot" />
                <span>24/7 Managed Support</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
