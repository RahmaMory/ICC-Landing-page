import { Mail, ShieldCheck } from "lucide-react"

type PrivacySection = {
  id: string
  title: string
  paragraphs: string[]
  items?: string[]
}

const privacySections: PrivacySection[] = [
  {
    id: "scope",
    title: "1. Scope of This Policy",
    paragraphs: [
      "This Privacy Policy explains how IO Code Company (ICC) handles information shared by website visitors, prospective clients, active clients, partners, and project stakeholders. It applies to information provided through this website, WhatsApp conversations started from the website, email communications, project discussions, and service delivery.",
      "ICC is a software solutions company. The information we handle is generally connected to business inquiries, quotations, project planning, software delivery, support, and professional communication. This policy should be read together with our Terms & Conditions and any project-specific agreement made with a client.",
    ],
  },
  {
    id: "information",
    title: "2. Information You May Share With ICC",
    paragraphs: [
      "The information ICC receives depends on how you choose to interact with us. We ask only for information that is reasonably related to understanding an inquiry, preparing a solution, delivering a project, or providing support.",
    ],
    items: [
      "Contact details such as your name, company name, job title, phone number, email address, and preferred communication channel.",
      "Inquiry details such as your business goals, requested service, estimated scope, desired features, timeline, and project requirements.",
      "Project materials such as written content, brand assets, design references, documents, workflows, product information, and technical specifications.",
      "Communication records such as emails, WhatsApp messages, meeting notes, approvals, feedback, revisions, and support requests.",
      "Administrative information such as proposals, quotations, invoices, payment status, delivery records, and agreed project milestones.",
      "Technical information required for delivery, which may include hosting details, domain settings, APIs, test accounts, deployment requirements, and temporary access credentials.",
    ],
  },
  {
    id: "website-forms",
    title: "3. Website Forms and WhatsApp",
    paragraphs: [
      "The contact forms on this website prepare a WhatsApp message using the details you enter. The website does not treat opening WhatsApp as a completed submission. ICC receives the information only when you choose to send the prepared message through WhatsApp.",
      "Your message is then handled through WhatsApp and is also subject to WhatsApp's own privacy practices. If you open WhatsApp and close it without sending, ICC does not receive that message from the website form. You should avoid including passwords, payment card details, government identification numbers, medical information, or other unnecessary sensitive data in an initial inquiry.",
    ],
  },
  {
    id: "ratings",
    title: "4. Ratings and Reviews",
    paragraphs: [
      "When you submit a rating or review, the website may keep a local copy in your browser so you can see it on the same device. This local copy is not automatically published to other visitors and is not a public website database submission.",
      "WhatsApp may open with a prepared copy of your rating or review. ICC receives it only if you send the WhatsApp message. A written review may be considered for publication only when the reviewer has provided the requested consent. ICC may select, format, shorten, or decline a review for presentation while preserving its meaning, and may remove published material when reasonably requested.",
    ],
  },
  {
    id: "use",
    title: "5. How ICC Uses Information",
    paragraphs: [
      "ICC uses information for professional, operational, technical, communication, security, and service-related purposes. We do not treat client information or project files as public assets.",
    ],
    items: [
      "To understand business needs and respond to inquiries.",
      "To prepare proposals, quotations, scopes, timelines, and technical recommendations.",
      "To design, develop, test, deploy, maintain, and support digital products and software systems.",
      "To communicate about approvals, feedback, revisions, bugs, payments, delivery, support, and next steps.",
      "To manage internal work such as task assignment, documentation, quality review, project tracking, and client support.",
      "To protect ICC systems, prevent misuse, investigate technical issues, and improve service quality.",
      "To meet accounting, contractual, administrative, or legal obligations that apply to our work.",
    ],
  },
  {
    id: "project-data",
    title: "6. Client Projects, Credentials, and Confidential Information",
    paragraphs: [
      "Clients may share business plans, private workflows, unpublished product ideas, customer-related information, internal documents, or system access needed for a project. ICC limits access to the people involved in delivering or supporting the agreed service and handles confidential project information with professional care.",
      "Clients should provide the minimum access necessary, use secure sharing methods where possible, enable multi-factor authentication when available, and revoke temporary access after it is no longer needed. ICC may use team members, subcontractors, or technical providers when they are reasonably required for delivery, while expecting appropriate confidentiality and responsible handling.",
    ],
  },
  {
    id: "technical-data",
    title: "7. Website and Technical Information",
    paragraphs: [
      "The current website does not use its contact forms to save inquiry submissions in an ICC website database. However, normal website infrastructure and hosting services may process limited technical information needed to deliver and protect the site, such as request time, browser type, device category, IP address, requested page, and basic error or security logs.",
      "If ICC later adds analytics, advertising tools, account registration, server-side forms, or other data collection features, this policy should be updated to describe those features before or when they are introduced.",
    ],
  },
  {
    id: "sharing",
    title: "8. Sharing and Third-Party Services",
    paragraphs: [
      "ICC does not sell personal information. Information may be shared only when reasonably necessary for service delivery, approved by the client, required to protect rights or systems, or required by applicable obligations.",
    ],
    items: [
      "Hosting providers, domain registrars, email services, cloud platforms, and communication tools used to operate the website or a client project.",
      "Payment gateways, APIs, analytics tools, app stores, automation platforms, and other services selected for an agreed project.",
      "Team members, contractors, or specialists who need access to perform an assigned part of the work.",
      "Professional advisers or authorities when disclosure is reasonably necessary or legally required.",
    ],
  },
  {
    id: "links",
    title: "9. External Links and Social Platforms",
    paragraphs: [
      "This website includes links to WhatsApp, email, and ICC social media profiles. When you leave the ICC website, the destination platform controls its own processing, security, cookies, accounts, and privacy terms. ICC is not responsible for the independent privacy practices or availability of third-party websites.",
      "Before sharing information through an external service, you should review that service's settings and privacy information and share only what is necessary for your inquiry or project.",
    ],
  },
  {
    id: "security",
    title: "10. Data Protection and Security",
    paragraphs: [
      "ICC takes reasonable technical and organizational steps appropriate to the type of information, project scope, available systems, and level of risk. These steps may include access limitation, secure account practices, backups when included in scope, controlled sharing, and removal or revocation of access when it is no longer required.",
      "No website, messaging service, storage platform, or digital transmission can be guaranteed to be completely secure. Clients and visitors should not send unnecessary sensitive data, should protect their own accounts, and should notify ICC promptly if they believe project access or shared information has been exposed or misused.",
    ],
  },
  {
    id: "retention",
    title: "11. How Long Information May Be Kept",
    paragraphs: [
      "ICC may keep reasonable business and project records for as long as needed for communication, delivery, support, accounting, documentation, dispute handling, security, quality control, or an applicable obligation. Different records may require different retention periods.",
      "Temporary credentials and unnecessary working copies should be removed, changed, or revoked when they are no longer required. Some information may remain in backups, invoices, communication history, or records that must be retained for legitimate operational or legal reasons.",
    ],
  },
  {
    id: "choices",
    title: "12. Your Choices and Requests",
    paragraphs: [
      "You may contact ICC to ask about information you previously shared, request a reasonable correction, update your contact details, withdraw optional review-publication consent, or request deletion of information that ICC no longer needs to retain. Requests may require identity or project verification before action is taken.",
      "A request may be limited when information is needed to complete an active agreement, keep accurate financial or delivery records, resolve a dispute, protect systems, or meet an applicable obligation. ICC will review reasonable requests based on the information and context available.",
    ],
  },
  {
    id: "updates",
    title: "13. Policy Updates",
    paragraphs: [
      "ICC may update this Privacy Policy when the website, services, communication methods, technical tools, or operational requirements change. The latest version will be published on this page with an updated date. Material changes should be reflected here so the policy continues to match how the website and services operate.",
    ],
  },
  {
    id: "contact",
    title: "14. Privacy Contact",
    paragraphs: [
      "For questions about this policy, privacy requests, project information, or review-publication consent, contact IO Code Company (ICC) using the email below. Please include enough context for us to identify the relevant inquiry or project without sending unnecessary sensitive information.",
    ],
  },
]

export default function Privacy() {
  return (
    <main className="bg-[#0B121E] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="rounded-3xl border border-cyan-400/10 bg-white/3 px-6 py-12 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
            <ShieldCheck aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            How IO Code Company (ICC) handles information shared through our website, communications, and software services.
          </p>
          <p className="mt-4 text-sm text-slate-500">Last updated: September 12, 2026</p>
        </header>

        <nav aria-label="Privacy policy sections" className="mt-10 rounded-2xl border border-white/10 bg-white/3 p-6">
          <h2 className="text-lg font-semibold">Policy sections</h2>
          <div className="mt-4 grid gap-3 text-sm text-cyan-300 sm:grid-cols-2 lg:grid-cols-3">
            {privacySections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="transition hover:text-cyan-200">
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-12 space-y-8">
          {privacySections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items ? (
                <ul className="mt-6 space-y-3 text-slate-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-7">
                      <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.id === "contact" ? (
                <a href="mailto:info@iocodecompany.com" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-[#071126] transition hover:bg-cyan-300">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  info@iocodecompany.com
                </a>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
