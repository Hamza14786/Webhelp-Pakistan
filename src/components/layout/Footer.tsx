import { Link } from "@tanstack/react-router";
import Mail from "lucide-react/dist/esm/icons/mail";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Phone from "lucide-react/dist/esm/icons/phone";

import { Logo } from "@/components/brand/Logo";
import { products, services, site } from "@/lib/site";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/webhelp2026/" },
  { label: "YouTube", href: "https://www.youtube.com/@webhelp-s1s" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592368523825" },
  { label: "TikTok", href: "https://www.tiktok.com/@webhelp5?lang=en" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--ink)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link to="/" aria-label="Webhelp Pakistan home">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.tagline}. Based in Islamabad and supporting clients in Pakistan and international
            markets.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a className="hover:text-foreground" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a className="hover:text-foreground" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a className="hover:text-foreground" href="tel:+92512899685">
                {site.secondaryPhone}
              </a>
            </li>
          </ul>
        </div>

        <FooterCol title="Services" bullets>
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Products" bullets>
          {products.map((p) => {
            const isVps = p.slug === "business-vps-hosting";
            return (
              <li key={p.slug}>
                <Link
                  to={isVps ? "/services/$slug" : "/products/$slug"}
                  params={{ slug: isVps ? "cloud-managed-vps-hosting" : p.slug }}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {p.name}
                </Link>
              </li>
            );
          })}
        </FooterCol>

        <FooterCol title="Company">
          <li>
            <Link to="/about" className="text-muted-foreground hover:text-foreground">
              Who we are
            </Link>
          </li>
          <li>
            <Link to="/work" className="text-muted-foreground hover:text-foreground">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
              Privacy policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground">
              Terms of service
            </Link>
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`WebHelp Pakistan on ${s.label}`}
                  title={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                >
                  <SocialIcon name={s.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = { className: "h-[18px] w-[18px]", viewBox: "0 0 24 24", "aria-hidden": true as const };
  if (name === "Instagram") return <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.8" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
  if (name === "YouTube") return <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M21.2 7.1a2.8 2.8 0 0 0-2-2C17.5 4.6 12 4.6 12 4.6s-5.5 0-7.2.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.4 12a29 29 0 0 0 .4 4.9 2.8 2.8 0 0 0 2 2c1.7.5 7.2.5 7.2.5s5.5 0 7.2-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .4-4.9 29 29 0 0 0-.4-4.9Z" /><path d="m10 15.4 5.2-3.4L10 8.6v6.8Z" fill="currentColor" stroke="none" /></svg>;
  if (name === "Facebook") return <svg {...common} fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.8-.1-1.7-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.6V10H7v3h2.8v8h3.7Z" /></svg>;
  return <svg {...common} fill="currentColor"><path d="M19.6 8.2a6.9 6.9 0 0 1-4.1-1.3v8.2a6.1 6.1 0 1 1-5.2-6.1v3.3a2.8 2.8 0 1 0 2 2.7V2.8h3.2c.2 2 1.7 3.6 4.1 3.8v1.6Z" /></svg>;
}

function FooterCol({ title, children, bullets = false }: { title: string; children: React.ReactNode; bullets?: boolean }) {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">{title}</h2>
      <ul className={`mt-4 space-y-2.5 text-sm ${bullets ? "list-disc pl-4 marker:text-primary" : ""}`}>{children}</ul>
    </div>
  );
}
