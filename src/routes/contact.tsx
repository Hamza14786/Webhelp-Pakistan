import { createFileRoute } from "@tanstack/react-router";
import Clock from "lucide-react/dist/esm/icons/clock";
import Mail from "lucide-react/dist/esm/icons/mail";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Phone from "lucide-react/dist/esm/icons/phone";
import { useEffect, useState } from "react";
import { z } from "zod";

import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

const title = "Contact WebHelp Pakistan | IT & Web Development Islamabad";
const description =
  "Contact Webhelp Pakistan in Gulberg Greens, Islamabad for web development, hosting, IT support, ecommerce, integrations and dedicated technology resources.";

const searchSchema = z.object({
  service: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const options = [
  "Custom Web Development",
  "React.js Development",
  "Next.js Development",
  "Web Application Development",
  "E-Commerce Development",
  "WordPress Development",
  "Shopify Development",
  "SEO",
  "UI/UX Design",
  "Mobile App Development",
  "Software Development",
  "CMS Development",
  "API Development & Integration",
  "Website Maintenance",
  "Website Performance Optimization",
  "Digital Marketing",
  "Cloud Solutions",
  "Hosting",
  "AI Integration",
  "Dedicated Development Team",
  "Brand Development",
  "Other",
].map((label) => ({
  value: label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  label,
}));

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactPage() {
  const { service } = Route.useSearch();
  const [selected, setSelected] = useState(
    service && options.some((o) => o.value === service) ? service : "",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Keep the dropdown in sync when arriving from a service or product CTA.
  useEffect(() => {
    if (service && options.some((o) => o.value === service)) setSelected(service);
  }, [service]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const firstName = String(data.get("firstName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (firstName.length < 2) next["firstName"] = "Please enter your first name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next["email"] = "Enter a valid email address.";
    if (phone && !/^[+\d\s()-]+$/.test(phone)) next["phone"] = "Enter a valid phone number.";
    if (message.length < 20)
      next["message"] = "A little more detail helps — 20 characters minimum.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      if (String(data.get("website") ?? "")) return;
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 450));
      setSent(true);
      setSelected("");
      setIsSubmitting(false);
      e.currentTarget.reset();
    }
  };

  const field =
    "mt-2 min-h-14 w-full border border-[#b8b8b8] bg-[#cccccc] px-4 py-3 text-sm text-[#202020] placeholder:text-[#626262] transition-colors duration-200 focus:border-primary focus:outline-none";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We Turn Your Ideas into Reality"
        lead="Have a big idea or a challenge to solve? From your first website to your next digital breakthrough, we’re here to help you build what’s next. Tell us what you have in mind—let’s make it happen together."
        centered
      />

      <section>
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <Reveal className="panel rounded-3xl p-6 sm:p-8">
            {sent ? (
              <div role="status" className="py-10 text-center">
                <h2 className="font-display text-2xl font-semibold">Message received</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Thank you for contacting Webhelp Pakistan. Our team will review the information
                  and respond through the contact details you provided.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="contact-form grid gap-x-8 gap-y-7 md:grid-cols-2">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <FormField id="firstName" label="First Name" error={errors["firstName"]}>
                  <input
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="First Name"
                    aria-invalid={!!errors["firstName"]}
                    aria-describedby={errors["firstName"] ? "firstName-error" : undefined}
                    className={field}
                  />
                </FormField>
                <FormField id="lastName" label="Last Name">
                  <input
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Last Name"
                    className={field}
                  />
                </FormField>
                <FormField id="email" label="Email Address" error={errors["email"]}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    aria-invalid={!!errors["email"]}
                    aria-describedby={errors["email"] ? "email-error" : undefined}
                    className={field}
                  />
                </FormField>
                <FormField id="phone" label="Phone Number" error={errors["phone"]}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone Number"
                    aria-invalid={!!errors["phone"]}
                    aria-describedby={errors["phone"] ? "phone-error" : undefined}
                    className={field}
                  />
                </FormField>
                <FormField id="company" label="Company / Business Name">
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Company / Business Name"
                    className={field}
                  />
                </FormField>
                <FormField id="interest" label="Service Required">
                  <select
                    id="interest"
                    name="interest"
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className={field}
                  >
                    <option value="">Select a Service</option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FormField>
                <div className="md:col-span-2">
                  <FormField id="message" label="Message" error={errors["message"]}>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us about your project"
                      aria-invalid={!!errors["message"]}
                      aria-describedby={errors["message"] ? "message-error" : undefined}
                      className={`${field} min-h-40 resize-y`}
                    />
                  </FormField>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-h-13 w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send Message ↗"}
                  </button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Submitted details are used exclusively by Webhelp Pakistan to respond to the
                    enquiry.
                  </p>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal className="space-y-4" delay={0.1}>
            <div className="flex justify-center lg:-ml-8 lg:justify-start">
              <img
                src="/images/contact-character.png"
                alt="Have a project in mind? Contact Us!"
                className="h-auto w-full max-w-[clamp(300px,38vw,500px)] object-contain"
              />
            </div>
            <div className="panel rounded-2xl p-6">
              <h2 className="font-display text-lg font-semibold">
                Official Communication Channels
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{site.address}</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <a className="hover:text-foreground" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    className="hover:text-foreground"
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                  >
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <a className="hover:text-foreground" href="tel:+92512899685">
                    {site.secondaryPhone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{site.hours}</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Existing client support: <b>support@webhelp.pk</b>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
