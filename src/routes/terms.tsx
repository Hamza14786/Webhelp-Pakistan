import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | WebHelp Pakistan" },
      {
        name: "description",
        content:
          "Read the terms governing use of Webhelp Pakistan websites, products and services, including project scope, payments, intellectual property, support and termination.",
      },
    ],
  }),
  component: Terms,
});

const sections = [
  [
    "1. Acceptance of Terms",
    "If you do not agree to these Terms, do not use the affected service. If you act for a company or other organization, you represent that you have authority to accept applicable terms on its behalf.",
  ],
  [
    "2. Services",
    "Webhelp Pakistan may provide business IT support and consultancy, web design and development, web applications, ecommerce and portals, hosting and maintenance, SEO and digital marketing, dedicated remote IT resources, custom software, cloud services, integrations, infrastructure, ERP-related services, and other technology work described in a proposal or agreement. The exact deliverables, exclusions, dependencies, timeline, acceptance criteria, support responsibilities, fees, and commercial terms for paid work are defined in the relevant written agreement.",
  ],
  [
    "3. Accounts and Access",
    "Where an account is required, you agree to provide accurate information, protect credentials, restrict access to authorized users, and notify us of suspected unauthorized use. Client and employee accounts may have different permissions. Access may be suspended where reasonably necessary to protect security, prevent misuse, comply with law, or enforce applicable contractual or payment terms.",
  ],
  [
    "4. Project Scope and Change Control",
    "Project work is governed by the approved proposal, Statement of Work, or Service Agreement. Requests that materially change the approved scope may require a documented change request, revised schedule, or additional fee. Delays in approvals, content, credentials, third-party access, vendor responses, or other client dependencies can affect delivery dates.",
  ],
  [
    "5. Dedicated Remote Teams",
    "Dedicated resources or teams may be supplied on a monthly or otherwise agreed basis. Team composition, skills, working hours, communication methods, reporting, management responsibilities, holidays, replacements, minimum engagement, and termination conditions should be stated in the signed agreement.",
  ],
  [
    "6. Fees and Payment",
    "Fees and currency are stated in the relevant quotation or agreement. Project work may use milestone billing; recurring services may be invoiced in advance; and one-time work may require an advance payment unless different terms are agreed in writing. Overdue invoices may result in service suspension or termination where permitted by contract and law.",
  ],
  [
    "7. Intellectual Property",
    "After full payment and subject to the signed agreement, the client may receive ownership or licensed rights to custom deliverables produced specifically for the client. Webhelp Pakistan retains rights in pre-existing tools, reusable components, frameworks, methods, templates, know-how, and company materials unless the agreement expressly states otherwise. Third-party components remain subject to their own licenses and terms.",
  ],
  [
    "8. Confidentiality",
    "Each party should protect non-public confidential information received from the other and use it only for the relevant business purpose, subject to the signed agreement and applicable law. These obligations do not apply to information that is lawfully public, independently developed, lawfully received without restriction, or required to be disclosed by law.",
  ],
  [
    "9. Service Levels and Support",
    "Support hours, supported assets, priority definitions, response targets, restoration or resolution objectives, maintenance windows, monitoring responsibilities, escalation procedures, and reporting are governed by the applicable support plan or SLA. If no signed SLA applies, support is provided according to the relevant plan or service terms communicated to the client.",
  ],
  [
    "10. Warranties and Disclaimers",
    "We aim to perform services professionally and in accordance with the applicable agreement. Except for warranties expressly stated in writing or required by law, services are provided without additional express or implied warranties to the maximum extent allowed by law. We do not guarantee outcomes controlled by third-party networks, vendors, platforms, algorithms, or providers.",
  ],
  [
    "11. Limitation of Liability",
    "Any limitation of liability should be stated clearly in the signed agreement and reviewed for enforceability under applicable law. To the extent permitted by law, contracts may exclude or limit indirect, incidental, special, consequential, or punitive losses and losses such as profit, opportunity, data, or reputation.",
  ],
  [
    "12. Termination",
    "Termination rights, notice periods, early-termination charges, data return, transition support, account suspension, and final invoices are governed by the relevant agreement. Confidentiality, intellectual property, unpaid payment obligations, and other provisions that should logically survive termination may continue after the service ends.",
  ],
  [
    "13. Data Protection and Privacy",
    "Our Privacy Policy explains how information submitted through the website and certain service interactions is collected, used, shared, retained, and protected. Where Webhelp Pakistan processes personal data on behalf of a client, project-specific terms may be required.",
  ],
  [
    "14. Acceptable Use",
    "You must not use our services to violate law, infringe intellectual property, distribute malware, attempt unauthorized access, disrupt systems, impersonate another person or business, send unlawful spam, abuse infrastructure, or perform other prohibited or harmful activity.",
  ],
  [
    "15. Changes to These Terms",
    "We may update these Terms when services, law, or business practices change. The effective date will be updated and material changes may be communicated through the website, email, client portal, or another appropriate method where required.",
  ],
  [
    "16. Force Majeure",
    "Neither party should be responsible for delay or failure caused by events beyond reasonable control to the extent recognized by the applicable contract and law.",
  ],
  [
    "17. Governing Law and Jurisdiction",
    "These Terms are governed by the laws of Pakistan, subject to any different governing-law or jurisdiction provision in an applicable signed agreement.",
  ],
  [
    "18. Dispute Resolution",
    "Where appropriate, the parties should first attempt good-faith negotiation. A signed contract may then require mediation, arbitration, court proceedings, or another mechanism, and its stated order of precedence applies.",
  ],
  [
    "19. Entire Agreement",
    "These Terms, the Privacy Policy, and any applicable proposal, Statement of Work, SLA, Service Agreement, Data Processing Agreement, or other signed terms form the agreement for the relevant service.",
  ],
  [
    "20. Severability and Waiver",
    "If a provision is found unenforceable, the remaining provisions continue to the extent permitted by law. Failure to enforce a term on one occasion does not automatically waive the right to enforce it later.",
  ],
];

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lead="These terms govern access to and use of websites, products, and services provided by Webhelp Pakistan."
      />
      <article className="mx-auto w-full max-w-3xl space-y-8 px-4 py-16 text-sm leading-relaxed text-muted-foreground sm:px-6 lg:py-20">
        <p>
          <strong className="text-foreground">Last updated:</strong> September 5, 2026
        </p>
        <p>
          These Terms of Service govern access to and use of websites, products, and services
          provided by Webhelp Pakistan. By using our website or purchasing or using our services,
          you agree to these Terms and to any written contract that applies to the relevant
          engagement.
        </p>
        {sections.map(([heading, body]) => (
          <section key={heading}>
            <h2 className="font-display text-xl font-semibold text-foreground">{heading}</h2>
            <p className="mt-3">{body}</p>
          </section>
        ))}
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">
            Email: support@webhelp.pk
            <br />
            Phone: <a className="hover:text-foreground" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            {" / "}
            <a className="hover:text-foreground" href="tel:+92512899685">{site.secondaryPhone}</a>
            <br />
            Address: {site.address}
          </p>
        </section>
      </article>
    </>
  );
}
