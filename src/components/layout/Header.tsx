import { Link, useRouterState } from "@tanstack/react-router";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Server from "lucide-react/dist/esm/icons/server";
import Users from "lucide-react/dist/esm/icons/users";
import ShoppingBag from "lucide-react/dist/esm/icons/shopping-bag";
import CodeXml from "lucide-react/dist/esm/icons/code-xml";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import Palette from "lucide-react/dist/esm/icons/palette";
import Workflow from "lucide-react/dist/esm/icons/workflow";
import Fuel from "lucide-react/dist/esm/icons/fuel";
import GraduationCap from "lucide-react/dist/esm/icons/graduation-cap";
import HeartPulse from "lucide-react/dist/esm/icons/heart-pulse";
import Building2 from "lucide-react/dist/esm/icons/building-2";
import UtensilsCrossed from "lucide-react/dist/esm/icons/utensils-crossed";
import Boxes from "lucide-react/dist/esm/icons/boxes";
import Warehouse from "lucide-react/dist/esm/icons/warehouse";
import Store from "lucide-react/dist/esm/icons/store";
import Stethoscope from "lucide-react/dist/esm/icons/stethoscope";
import CarFront from "lucide-react/dist/esm/icons/car-front";
import Headset from "lucide-react/dist/esm/icons/headset";
import Bot from "lucide-react/dist/esm/icons/bot";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { products, services } from "@/lib/site";
import "./Header.css";

type Panel = "services" | "products" | null;

const menuDetails: Record<string, { icon: typeof Server; description: string }> = {
  "cloud-managed-vps-hosting": { icon: Server, description: "Fast hosting. Expert care. Room to grow." },
  "dedicated-remote-it-teams": { icon: Users, description: "The right tech talent, part of your team." },
  "e-commerce-web-portals": { icon: ShoppingBag, description: "High-performance online stores built to sell and scale." },
  "web-development": { icon: CodeXml, description: "Standout websites built for your business." },
  "website-management-maintenance": { icon: ShieldCheck, description: "Keep your website secure and running smoothly." },
  "brand-building": { icon: Palette, description: "Secure custom portals that connect users, data, and business workflows." },
  "business-automation-erp": { icon: Workflow, description: "Simplify everyday work with connected systems." },
  "business-vps-hosting": { icon: Server, description: "A reliable home for your websites and apps." },
  "custom-erp": { icon: ShoppingBag, description: "Bring your store, sales and operations together." },
  "fuel-station-automation": { icon: Fuel, description: "Smarter control of fuel, sales and reporting." },
  "school-management-system": { icon: GraduationCap, description: "Connect classrooms, students and administration." },
  "hospital-management-system": { icon: HeartPulse, description: "Streamline patient care and daily operations." },
  "office-management-system": { icon: Building2, description: "Organize your people, tasks and office workflows." },
  "restaurant-management-system": { icon: UtensilsCrossed, description: "Keep orders, service and your kitchen in sync." },
  "inventory-warehouse-management": { icon: Warehouse, description: "Track stock, warehouses, suppliers and inventory movements." },
  "pos-retail-management": { icon: Store, description: "Manage retail sales, products, stock and daily operations." },
  "real-estate-management": { icon: Building2, description: "Organize property listings, leads, enquiries and client records." },
  "clinic-management": { icon: Stethoscope, description: "Coordinate appointments, patient records, billing and clinic workflows." },
  "vehicle-dealership-management": { icon: CarFront, description: "Manage vehicle inventory, enquiries and dealership sales workflows." },
  "customer-support-ticketing": { icon: Headset, description: "Organize customer issues, tickets, replies and resolutions." },
  "ai-chatbot-call-centers": { icon: Bot, description: "Automate customer conversations and assist call center teams." },
};

const hiddenProductMenuSlugs = new Set([
  "inventory-warehouse-management",
  "pos-retail-management",
  "real-estate-management",
  "clinic-management",
  "vehicle-dealership-management",
  "customer-support-ticketing",
  "restaurant-management-system",
]);

function MenuIcon({ slug }: { slug: string }) {
  const Icon = menuDetails[slug]?.icon ?? Boxes;
  return <span className="mega-menu-icon"><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></span>;
}

function MegaMenu({ kind }: { kind: "services" | "products" }) {
  const isServices = kind === "services";
  const items = isServices
    ? services.map((item) => ({
        slug: item.slug,
        title:
          item.slug === "e-commerce-web-portals"
            ? "E-commerce Development"
            : item.slug === "brand-building"
              ? "Web Portal Development"
              : item.title,
      }))
    : products
        .filter((item) => !hiddenProductMenuSlugs.has(item.slug))
        .map((item) => ({ slug: item.slug, title: item.name }));

  return (
    <>
      <div className="mega-menu-heading">
        <div className="mega-menu-orbit" aria-hidden="true"><span /><span /><span /></div>
        <div>
          <p className="mega-menu-eyebrow">{isServices ? "EXPERTISE THAT MOVES YOU FORWARD" : "BUILT FOR THE WAY YOU WORK"}</p>
          <h2>{isServices ? "Your next move starts here." : "Find your business advantage."}</h2>
        </div>
        <Link to={isServices ? "/services" : "/products"} className="mega-menu-all">
          Explore all {kind} <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <div className="mega-menu-grid">
        {items.map((item, index) => {
          const isVps = item.slug === "business-vps-hosting";
          return (
            <Link key={item.slug} to={isServices || isVps ? "/services/$slug" : "/products/$slug"}
              params={{ slug: isVps ? "cloud-managed-vps-hosting" : item.slug }}
              className={`header-menu-link mega-menu-card mega-menu-tone-${index % 4}`} style={{ animationDelay: `${index * 25}ms` }}>
              <MenuIcon slug={item.slug} />
              <span className="mega-menu-copy">
                <span className="mega-menu-title">{item.title}</span>
                <span className="mega-menu-description">{menuDetails[item.slug]?.description}</span>
              </span>
              <ArrowUpRight className="mega-menu-arrow" size={18} aria-hidden="true" />
            </Link>
          );
        })}
      </div>
      <div className="mega-menu-footer">
        <p>Have an idea? Let’s find the right solution together.</p>
        <Link to="/contact">Talk to our team <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setPanel(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setPanel(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navRef.current?.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')?.focus();
        setPanel(null);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkClass =
    "rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:text-primary";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
      style={{ fontFamily: '"Segoe UI", sans-serif' }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="header-inner relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Webhelp Pakistan home" className="shrink-0">
          <Logo showText={false} markClassName="h-10 w-auto sm:h-12" />
        </Link>

        <div ref={navRef} className="hidden items-center gap-1 lg:flex">
          <Link to="/" className={linkClass} activeProps={{ className: "text-foreground" }}>
            Home
          </Link>

          <Link to="/about" className={linkClass} activeProps={{ className: "text-foreground" }}>
            Who we are
          </Link>

          <DropdownTrigger
            label="Services"
            open={panel === "services"}
            onToggle={() => setPanel(panel === "services" ? null : "services")}
            onHoverIn={() => setPanel("services")}
            onHoverOut={() => setPanel(null)}
          >
            <MegaMenu kind="services" />
          </DropdownTrigger>

          <Link
            to="/industries"
            className={linkClass}
            activeProps={{ className: "text-foreground" }}
          >
            Industries
          </Link>

          <Link to="/work" className={linkClass} activeProps={{ className: "text-foreground" }}>
            Projects
          </Link>

          <DropdownTrigger
            label="Products"
            open={panel === "products"}
            onToggle={() => setPanel(panel === "products" ? null : "products")}
            onHoverIn={() => setPanel("products")}
            onHoverOut={() => setPanel(null)}
          >
            <MegaMenu kind="products" />
          </DropdownTrigger>

          <Link to="/contact" className={linkClass} activeProps={{ className: "text-foreground" }}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/923100101777"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get Free Consultation
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <MobileLink to="/">Home</MobileLink>
            <MobileLink to="/about">Who we are</MobileLink>
            <MobileAccordion label="Services">
              <MobileLink to="/services">All services</MobileLink>
              {services.map((s) => (
                <MobileLink key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
                  <MenuIcon slug={s.slug} />
                  {s.title}
                </MobileLink>
              ))}
            </MobileAccordion>
            <MobileLink to="/industries">Industries</MobileLink>
            <MobileLink to="/work">Projects</MobileLink>
            <MobileAccordion label="Products">
              <MobileLink to="/products">All products</MobileLink>
              {products.map((p) => {
                const isVps = p.slug === "business-vps-hosting";
                return (
                  <MobileLink
                    key={p.slug}
                    to={isVps ? "/services/$slug" : "/products/$slug"}
                    params={{ slug: isVps ? "cloud-managed-vps-hosting" : p.slug }}
                  >
                    <MenuIcon slug={p.slug} />{p.name}
                  </MobileLink>
                );
              })}
            </MobileAccordion>
            <MobileLink to="/contact">Contact</MobileLink>
            <Link
              to="/contact"
              className="mt-3 mb-2 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Discuss Your Project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function DropdownTrigger({
  label,
  open,
  onToggle,
  onHoverIn,
  onHoverOut,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="mega-menu-trigger" onMouseEnter={onHoverIn} onMouseLeave={onHoverOut} onClick={(event) => { if ((event.target as HTMLElement).closest("a")) onHoverOut?.(); }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) onHoverOut?.(); }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`mega-${label.toLowerCase()}`}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:text-primary"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div id={`mega-${label.toLowerCase()}`} className="mega-menu-position absolute top-full z-50">
          <div className="header-dropdown mega-menu overflow-hidden rounded-2xl border">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-foreground"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-2 pl-3">{children}</div>}
    </div>
  );
}

function MobileLink({
  to,
  params,
  children,
}: {
  to: string;
  params?: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to as never}
      params={params as never}
      className="block border-b border-border/60 py-3 text-base font-medium text-foreground transition-all duration-300 hover:translate-x-1.5 hover:text-primary"
      activeProps={{ className: "text-foreground" }}
    >
      {children}
    </Link>
  );
}
