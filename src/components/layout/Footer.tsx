import { Link } from "@tanstack/react-router";
import Mail from "lucide-react/dist/esm/icons/mail";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Phone from "lucide-react/dist/esm/icons/phone";

import { Logo } from "@/components/brand/Logo";
import { products, services, site } from "@/lib/site";

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
          <ul className="flex flex-wrap gap-4">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, bullets = false }: { title: string; children: React.ReactNode; bullets?: boolean }) {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">{title}</h2>
      <ul className={`mt-4 space-y-2.5 text-sm ${bullets ? "list-disc pl-4 marker:text-primary" : ""}`}>{children}</ul>
    </div>
  );
}
