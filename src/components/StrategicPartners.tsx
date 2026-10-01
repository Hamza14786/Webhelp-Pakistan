import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import "./TechnologyMarquee.css";
import "./StrategicPartners.css";

const partners = [
  { name: "Microsoft", slug: "microsoft-icon", featured: true },
  { name: "Amazon Web Services", slug: "aws", featured: true },
  {
    name: "Lenovo",
    logo: "/images/partners/lenovo.png",
    featured: true,
  },
  {
    name: "Dell Technologies",
    logo: "/images/partners/dell.png",
    featured: true,
  },
  {
    name: "Cisco",
    logo: "https://api.iconify.design/simple-icons:cisco.svg?color=%231BA0D7",
    featured: true,
  },
  { name: "NVIDIA", slug: "nvidia", featured: true },
  { name: "cPanel", logo: "/images/partners/cpanel.png", featured: true },
  { name: "Crisco", logo: "/images/partners/crisco.png" },
  { name: "Technotrade", logo: "/images/partners/technotrade.png", featured: true },
  { name: "Namecheap", logo: "/images/partners/namecheap.png" },
  { name: "LogMeIn", logo: "/images/partners/logmein.png" },
  {
    name: "NetApp",
    logo: "/images/partners/netapp.png",
  },
  {
    name: "Odoo",
    logo: "/images/partners/odoo.png",
  },
  { name: "Stripe", slug: "stripe" },
  {
    name: "Payoneer",
    logo: "/images/partners/payoneer.png",
  },
  {
    name: "GoDaddy",
    logo: "/images/partners/godaddy.png",
  },
  { name: "HostGator", slug: "hostgator" },
  {
    name: "MikroTik",
    logo: "https://api.iconify.design/simple-icons:mikrotik.svg?color=%2300aaff",
  },
  {
    name: "TeamViewer",
    logo: "https://api.iconify.design/simple-icons:teamviewer.svg?color=%2300aaff",
  },
  { name: "AnyDesk", logo: "https://api.iconify.design/simple-icons:anydesk.svg?color=%23ef443b" },
  { name: "Meta", slug: "meta-icon" },
  { name: "Linux", slug: "linux-tux" },
] as const;

function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
  const [failed, setFailed] = useState(false);
  const logo =
    "logo" in partner ? partner.logo : `https://api.iconify.design/logos:${partner.slug}.svg`;
  return (
    <div className="tech-card partner-marquee-card">
      <div className="tech-logo-wrap partner-marquee-logo">
        {!failed ? (
          <img
            src={logo}
            alt=""
            className="tech-logo-img"
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="tech-logo-fallback" aria-hidden="true">
            {partner.name.charAt(0)}
          </span>
        )}
      </div>
      <span className="tech-name">{partner.name}</span>
    </div>
  );
}

const partnerRows = [partners.slice(0, 11), partners.slice(11)];

export function StrategicPartners() {
  return (
    <section className="strategic-partners" aria-labelledby="partners-heading">
      <div className="partners-grid-bg" aria-hidden="true" />
      <div className="strategic-partners-inner">
        <Reveal className="partners-intro">
          <p className="partners-eyebrow">Trusted technology ecosystem</p>
          <h2 id="partners-heading">
            Our Strategic<span>Partners</span>
          </h2>
          <p className="partners-lead">
            We collaborate with globally trusted technology platforms and solution providers to
            build secure, scalable and future-ready digital experiences.
          </p>
        </Reveal>
        <div className="tech-marquee-container partners-marquee">
          {partnerRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="tech-marquee-viewport"
              tabIndex={0}
              role="group"
              aria-label={`Strategic partners row ${rowIndex + 1}; focus to pause scrolling`}
            >
              <div
                className={`tech-marquee-track partners-marquee-track partners-marquee-track--${rowIndex === 0 ? "left" : "right"}`}
              >
                {[false, true].map((duplicate) => (
                  <div
                    className="partners-marquee-set"
                    key={String(duplicate)}
                    aria-hidden={duplicate || undefined}
                  >
                    {row.map((partner) => (
                      <PartnerCard key={partner.name} partner={partner} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
