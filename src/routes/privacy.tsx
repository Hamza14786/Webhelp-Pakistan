import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | WebHelp Pakistan" },
      {
        name: "description",
        content:
          "Learn how Webhelp Pakistan collects, uses, shares, protects and retains personal information submitted through its website and services.",
      },
    ],
  }),
  component: Privacy,
});

const sections = [
  [
    "1. Information We May Collect",
    "We may collect information you provide, including your name, company, email, phone number, country, enquiry or project details, support request, uploaded files, account information, and recruitment information. Systems and approved providers may also collect technical information such as IP address, device details, pages visited, timestamps, analytics events, and diagnostic or security logs.",
  ],
  [
    "2. How We Use Information",
    "We may use information to respond to enquiries, prepare proposals, deliver and support services, administer accounts, communicate about projects, process legitimate business transactions, improve website performance, understand usage, maintain security, prevent abuse, meet obligations, recruit team members, and keep appropriate business records.",
  ],
  [
    "3. Legal Bases Where Applicable",
    "Where applicable law requires a legal basis, processing may rely on consent, performance of a contract or pre-contract request, legitimate interests, legal obligation, or another lawful basis appropriate to the activity.",
  ],
  [
    "4. Cookies and Similar Technologies",
    "The website may use essential cookies and, where configured, analytics, preference, advertising, or similar technologies. Where consent is required, non-essential technologies should not activate before valid consent is obtained.",
  ],
  [
    "5. Analytics and Third-Party Services",
    "We may use hosting, analytics, security, communication, CRM, payment, cloud, development, or support providers to operate the website and services. These providers may process limited information on our behalf or under their own terms.",
  ],
  [
    "6. Sharing of Information",
    "We may share personal information with authorized staff, contractors, professional advisers, infrastructure providers, software providers, payment processors, and other providers where necessary and subject to suitable controls. We may also disclose information where required by law or reasonably necessary to protect rights, safety, or security. We do not sell personal information to advertisers.",
  ],
  [
    "7. International Data Transfers",
    "Because Webhelp Pakistan may work with international clients and technology providers, information can be processed outside the user’s country. Where required, appropriate legal or contractual safeguards should be used.",
  ],
  [
    "8. Security",
    "We use reasonable administrative, technical, and organizational measures appropriate to the information and service. No internet-connected system can be guaranteed completely secure, and users should protect credentials and report suspected unauthorized activity promptly.",
  ],
  [
    "9. Security Incidents and Breach Notification",
    "If a security incident affects personal information for which Webhelp Pakistan has legal or contractual notification responsibilities, we will assess it and provide notices where required by applicable law and agreement.",
  ],
  [
    "10. Data Retention",
    "We retain personal information only as long as reasonably necessary for its purpose, service delivery, business and legal records, dispute resolution, agreement enforcement, accounting or tax requirements, and applicable law.",
  ],
  [
    "11. Your Privacy Rights",
    "Depending on your location and applicable law, you may have rights to request access, correction, deletion, restriction, objection, portability, or withdrawal of consent. To make a request, contact support@webhelp.pk. Identity verification may be required.",
  ],
  [
    "12. Regional Privacy Rights",
    "Some jurisdictions grant additional rights or impose additional notice requirements. Applicable requests will be assessed according to the relevant law and implemented processes.",
  ],
  [
    "13. Children’s Privacy",
    "Our general business website and services are not intended for children unless a specific service states otherwise. If information from a child was collected contrary to applicable law, we will take appropriate steps to address it.",
  ],
  [
    "14. Browser Privacy Signals",
    "Browser privacy features vary by jurisdiction and implementation. The website and consent tools will handle supported signals as described by their current configuration.",
  ],
  [
    "15. Third-Party Links",
    "Our website may link to external sites or platforms. We do not control their privacy practices. Review the external provider’s privacy information before submitting personal information.",
  ],
  [
    "16. Changes to This Policy",
    "We may update this policy when services, laws, or processing practices change. The effective date will be updated and material changes communicated where required.",
  ],
  [
    "17. Contact Us",
    "For privacy questions or requests, email support@webhelp.pk or write to Webhelp Pakistan, Gulberg Greens Block A, Islamabad, Pakistan.",
  ],
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="This policy explains how Webhelp Pakistan collects, uses, shares, stores, and protects personal information."
      />
      <article className="mx-auto w-full max-w-3xl space-y-8 px-4 py-16 text-sm leading-relaxed text-muted-foreground sm:px-6 lg:py-20">
        <p>
          <strong className="text-foreground">Last updated:</strong> September 5, 2026
        </p>
        <p>
          This policy applies when you use our website, contact us, apply for a role, or interact
          with services where Webhelp Pakistan determines how the information is used.
          Project-specific processing may be governed by a separate agreement.
        </p>
        {sections.map(([heading, body]) => (
          <section key={heading}>
            <h2 className="font-display text-xl font-semibold text-foreground">{heading}</h2>
            <p className="mt-3">{body}</p>
          </section>
        ))}
      </article>
    </>
  );
}
