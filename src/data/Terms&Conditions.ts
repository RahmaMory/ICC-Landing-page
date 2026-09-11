import {
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  Code2,
  Copyright,
  FileText,
  Globe2,
  Handshake,
  Laptop,
  Lock,
  Mail,
  RefreshCcw,
  Scale,
  Server,
  ShieldCheck,
  TriangleAlert,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";


type PolicyBlock = {
  title: string;
  text: string;
  items: string[];
};

type PolicySection = {
  id: string;
  title: string;
  subtitle: string;
  icon: ComponentType<{
    size?: number;
    className?: string;
  }>;
  blocks: PolicyBlock[];
};

const policyEmail = "info@iocodecompany.com";

export const policySections: PolicySection[] = [
  {
    id: "privacy",
    title: "Privacy & Data Protection",
    subtitle:
      "How ICC collects, uses, protects, and manages information shared by clients, visitors, partners, and project stakeholders.",
    icon: ShieldCheck,
    blocks: [
      {
        title: "Information We May Collect",
        text:
          "IO Code Company may collect information that helps us communicate with clients, understand business needs, prepare technical solutions, deliver software services, provide support, and improve our internal process. We only collect information that is reasonably related to our work and service delivery.",
        items: [
          "Basic contact information such as full name, company name, phone number, email address, job title, and preferred communication channel.",
          "Project information such as business goals, requested features, design references, technical requirements, workflows, user roles, content, documents, and brand assets.",
          "Communication records including messages, emails, call summaries, meeting notes, approvals, feedback, revisions, and support requests.",
          "Technical information such as hosting access, domain details, APIs, test accounts, platform documentation, integration keys, deployment requirements, or staging environment details.",
          "Administrative information such as quotation history, invoices, payment status, signed approvals, project timelines, and service records.",
          "Website usage or inquiry data that helps us improve the ICC website, understand service interest, and respond to business requests.",
        ],
      },
      {
        title: "How We Use Client Information",
        text:
          "Client information is used for professional, operational, technical, communication, and service-related purposes. ICC does not use client information for unrelated activities, and we do not treat project data as a public asset.",
        items: [
          "To understand the client’s business, project goals, technical needs, and expected outcomes.",
          "To prepare proposals, quotations, timelines, technical scopes, and project plans.",
          "To design, develop, test, deploy, maintain, and support websites, applications, dashboards, systems, integrations, and digital products.",
          "To communicate about project progress, approvals, change requests, bugs, payments, support, delivery, and next steps.",
          "To manage internal operations such as task assignment, quality review, documentation, project tracking, and client support.",
          "To protect ICC systems, prevent misuse, improve service quality, and handle technical or security issues.",
        ],
      },
      {
        title: "Data Protection Commitment",
        text:
          "ICC handles business information, project files, credentials, and client data with care. Access is limited to people involved in the service or required to support delivery. While no digital process can be guaranteed to be completely risk-free, ICC follows reasonable professional practices to reduce avoidable risk.",
        items: [
          "We take reasonable steps to protect shared data against unauthorized access, misuse, loss, alteration, or disclosure.",
          "We avoid sharing client project data with unrelated parties unless required for service delivery, approved by the client, or necessary for technical execution.",
          "Sensitive credentials should be shared through secure channels whenever possible.",
          "Clients should avoid sending unnecessary private, financial, medical, legal, or highly sensitive information unless directly required for the project.",
          "Clients are encouraged to change or revoke temporary credentials after project handover or when access is no longer needed.",
          "ICC may retain reasonable project records for support, accounting, documentation, operational, or quality purposes.",
        ],
      },
    ],
  },
  {
    id: "services",
    title: "Services & Software Solutions",
    subtitle:
      "A general overview of the software, technology, digital product, and technical solution services provided by ICC.",
    icon: Code2,
    blocks: [
      {
        title: "What ICC Provides",
        text:
          "IO Code Company (ICC) is a software solutions house that provides digital products, custom software, business platforms, websites, applications, technical systems, automation, integrations, and technology services for startups, companies, organizations, and individuals.",
        items: [
          "Corporate websites, landing pages, portfolios, service websites, and product websites.",
          "Web applications, dashboards, admin panels, internal systems, client portals, CRM platforms, ERP-style tools, and management systems.",
          "Mobile application development, cross-platform applications, MVPs, prototypes, and digital product interfaces.",
          "Backend systems, APIs, databases, authentication flows, role-based systems, and business logic implementation.",
          "Frontend development, responsive UI, interactive experiences, animations, web performance improvements, and modern user interfaces.",
          "Automation, integrations, payment gateways, WhatsApp flows, email systems, booking systems, reporting dashboards, and third-party API connections.",
        ],
      },
      {
        title: "Custom Solution Nature",
        text:
          "Many ICC services are custom-built. This means each project may have different requirements, different timelines, different technical challenges, and different levels of complexity. The final scope depends on what is agreed with the client before and during the project.",
        items: [
          "A simple website is different from a full business platform, even if both look similar to a user.",
          "A dashboard with real data, roles, permissions, and integrations requires more work than a static frontend prototype.",
          "A mobile application may require different delivery steps depending on whether it is a prototype, APK, TestFlight build, or store-ready app.",
          "Backend work may require security, validation, database planning, API design, deployment, hosting, and monitoring decisions.",
          "Automation and integrations depend heavily on the quality and availability of third-party platforms and APIs.",
          "Technical complexity may change after discovery if hidden requirements appear.",
        ],
      },
      {
        title: "Service Availability",
        text:
          "ICC may accept, reject, delay, or rescope service requests based on capacity, project complexity, technical feasibility, ethical considerations, client readiness, available resources, and business priorities.",
        items: [
          "ICC may request additional details before confirming a project.",
          "ICC may refuse projects that are harmful, illegal, abusive, misleading, technically unreasonable, or outside current capability.",
          "ICC may recommend a phased approach when a project is large or unclear.",
          "ICC may suggest starting with a prototype, MVP, or discovery phase before full development.",
          "ICC may pause confirmation until the client provides enough information to estimate the project properly.",
          "ICC may recommend third-party specialists when a request requires legal, financial, security, or compliance expertise beyond normal software delivery.",
        ],
      },
    ],
  },
  {
    id: "project-scope",
    title: "Project Scope & Requirements",
    subtitle:
      "How project requirements are defined, confirmed, documented, controlled, and protected during the project lifecycle.",
    icon: FileText,
    blocks: [
      {
        title: "Scope Definition",
        text:
          "The project scope is the agreed list of deliverables, features, pages, screens, modules, integrations, roles, workflows, services, and responsibilities that ICC is expected to provide. A clear scope helps both parties understand what will be delivered and what is not included.",
        items: [
          "The scope may be documented in a proposal, invoice, contract, quotation, project brief, shared document, email, or written approval message.",
          "The scope should describe the main deliverables and expected functionality as clearly as possible.",
          "Features not written, confirmed, or clearly included may not be considered part of the project.",
          "A project may include design only, development only, frontend only, backend only, full-stack delivery, support, or a combination of services.",
          "The client should review the scope carefully before approving the project.",
          "Any misunderstanding should be clarified before development begins whenever possible.",
        ],
      },
      {
        title: "Requirement Quality",
        text:
          "The quality of the final solution depends heavily on the quality of the requirements shared by the client. Incomplete, vague, changing, or contradictory requirements may affect timeline, cost, delivery quality, and project stability.",
        items: [
          "The client should explain business goals, user flows, expected behavior, content needs, and technical expectations clearly.",
          "The client should provide examples, references, documents, screenshots, diagrams, or sample workflows when needed.",
          "The client should identify required user roles, permissions, dashboards, reports, forms, integrations, and approval steps early.",
          "The client should clarify whether the project needs real backend functionality or a frontend prototype only.",
          "The client should confirm whether the project requires Arabic, English, bilingual content, RTL support, or localization.",
          "The client should mention important deadlines, launch dates, marketing campaigns, or event dates before project approval.",
        ],
      },
      {
        title: "Out-of-Scope Work",
        text:
          "Out-of-scope work means any task, feature, revision, integration, design change, support request, or technical requirement that was not included in the original approved scope. Out-of-scope work may require additional time, payment, or a separate agreement.",
        items: [
          "New pages, new screens, new modules, new dashboards, new reports, or new user roles may be out of scope.",
          "Changing the approved design direction after implementation may be out of scope.",
          "Adding backend functionality to a project that was approved as frontend-only may be out of scope.",
          "Adding integrations such as payment gateways, WhatsApp APIs, maps, SMS, email automation, or analytics may be out of scope.",
          "Changing business logic after it was approved may be out of scope.",
          "Fixing issues caused by third-party changes, client-side edits, hosting problems, or external providers may be out of scope unless covered by support.",
        ],
      },
    ],
  },
  {
    id: "proposals",
    title: "Proposals, Quotations & Estimates",
    subtitle:
      "Rules related to pricing, timelines, estimates, assumptions, and proposal validity before starting a project.",
    icon: BookOpenCheck,
    blocks: [
      {
        title: "Proposal Basis",
        text:
          "ICC prepares proposals and quotations based on the information available at the time of estimation. A proposal is not a guarantee that no additional requirements will appear later. If the client later provides new information or changes the project direction, the proposal may need to be revised.",
        items: [
          "Pricing is based on the understood scope, expected complexity, estimated time, required roles, and project risk.",
          "Timelines are based on the expected workload, team availability, client responsiveness, and required approvals.",
          "A proposal may include assumptions when some technical or business details are not fully known.",
          "Hidden complexity discovered after project start may require timeline or cost adjustment.",
          "A quotation may expire after a reasonable period if not approved.",
          "ICC may update pricing if the project is delayed, changed, expanded, or restarted after a long pause.",
        ],
      },
      {
        title: "Estimate Limitations",
        text:
          "Software estimates are professional approximations, not absolute guarantees. Some tasks may take longer because of technical complexity, unclear requirements, third-party limitations, testing results, integration issues, or changes requested by the client.",
        items: [
          "Estimated delivery dates depend on timely payments, feedback, access, content, approvals, and client decisions.",
          "Delays caused by missing materials or delayed approvals are not counted as ICC delivery delays.",
          "Third-party approval processes may affect delivery, especially payment gateways, app stores, hosting platforms, and API providers.",
          "Unexpected technical issues may require additional investigation or alternative implementation.",
          "Urgent deadlines should be discussed before project approval.",
          "A project may need to be delivered in phases when the scope is large or evolving.",
        ],
      },
      {
        title: "Approval of Proposal",
        text:
          "When a client approves a proposal, pays a deposit, confirms work by written message, or asks ICC to begin, this may be considered acceptance of the proposal, scope, payment structure, and general service terms unless otherwise agreed.",
        items: [
          "Approval should be clear and preferably written.",
          "Payment of a deposit may confirm project start.",
          "Starting work based on verbal or informal approval may still require written confirmation later.",
          "The client is responsible for reviewing the proposal before approval.",
          "ICC may request a signed document or official confirmation for larger projects.",
          "Approved proposals may be used as a reference for handling disputes, change requests, payments, and delivery expectations.",
        ],
      },
    ],
  },
  {
    id: "payments",
    title: "Payments, Invoicing & Refunds",
    subtitle:
      "General payment rules for software projects, service packages, maintenance, retainers, deposits, milestones, and delivery.",
    icon: Handshake,
    blocks: [
      {
        title: "Payment Terms",
        text:
          "Payment terms may differ from one project to another. ICC may require an advance payment, milestone payments, monthly retainer, maintenance subscription, support fee, or full payment depending on the service type and agreed scope.",
        items: [
          "Most projects require an initial payment before work begins.",
          "Large projects may be divided into milestones linked to discovery, design, development, testing, deployment, and handover.",
          "Monthly services may be billed before the start of the service period.",
          "Urgent or high-priority work may require special payment terms.",
          "Final delivery, deployment, source code transfer, or access handover may depend on payment completion.",
          "Payment proof may be required before activating a service or continuing a paused project.",
        ],
      },
      {
        title: "Late Payments",
        text:
          "Late payments affect planning, delivery, team allocation, and support availability. ICC may pause development, support, deployment, maintenance, or handover when payments are delayed beyond the agreed terms.",
        items: [
          "A delayed payment may result in a delayed delivery date.",
          "Work pause caused by late payment is not considered a delay caused by ICC.",
          "Repeated late payments may require stricter terms for future work.",
          "ICC may withhold final files, deployment, source code, or production access until financial obligations are settled.",
          "Third-party costs may not be covered by ICC unless clearly included in the agreement.",
          "Bank fees, payment gateway fees, currency conversion fees, and third-party transaction charges may be the client’s responsibility unless agreed otherwise.",
        ],
      },
      {
        title: "Refund Conditions",
        text:
          "Because software work includes planning, communication, design, development, resource allocation, and technical execution, refunds are limited and depend on the project stage, completed work, reserved resources, and third-party costs.",
        items: [
          "Deposits may be non-refundable once discovery, planning, design, consultation, or development has started.",
          "Completed milestones are generally non-refundable.",
          "Work already delivered, presented, developed, designed, tested, or prepared may be chargeable even if the client decides not to continue.",
          "Third-party costs such as domains, hosting, licenses, plugins, APIs, templates, paid tools, or external subscriptions are non-refundable once purchased.",
          "Refund requests are reviewed based on actual progress, approved scope, payments made, and work completed.",
          "If ICC cancels a project without delivering agreed work, a fair review may be made for any undelivered paid portion.",
        ],
      },
      {
        title: "Price Changes",
        text:
          "Prices may change when the project changes. Additional features, new modules, design changes, urgent requests, extra meetings, repeated revisions, new integrations, or additional support may require extra fees.",
        items: [
          "Adding a new feature after approval may require a new quotation.",
          "Changing the approved design after implementation may require extra payment.",
          "Requesting extra versions, extra layouts, extra pages, or extra user flows may affect the price.",
          "Changing a static project into a dynamic system may require a new estimate.",
          "Requests made after project acceptance may be treated as a new phase.",
          "ICC may provide a written price update before starting additional work.",
        ],
      },
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    subtitle:
      "What the client must provide, review, approve, maintain, and manage to help the project succeed.",
    icon: Users,
    blocks: [
      {
        title: "Required Materials",
        text:
          "Clients are responsible for providing the information, access, content, approvals, and assets required for ICC to complete the agreed work. Missing materials may delay the project, reduce quality, or require assumptions.",
        items: [
          "Brand assets such as logo files, colors, fonts, images, icons, brand guidelines, and visual references.",
          "Text content such as service descriptions, company profiles, product details, pricing, FAQs, policies, addresses, and contact information.",
          "Technical access such as hosting accounts, domains, dashboards, APIs, payment gateways, email services, analytics tools, and app store accounts.",
          "Business logic such as workflows, approvals, user roles, permissions, data fields, reports, and required calculations.",
          "Legal or business wording such as terms, privacy content, refund rules, disclaimers, compliance text, or company-specific policies.",
          "Feedback, approvals, and decisions during the agreed review stages.",
        ],
      },
      {
        title: "Content Ownership & Accuracy",
        text:
          "The client is responsible for the accuracy, ownership, legality, and completeness of all materials provided to ICC. ICC may implement content as received and is not responsible for issues caused by incorrect or unauthorized client-provided materials.",
        items: [
          "The client must have the right to use all images, videos, fonts, logos, text, documents, and media shared with ICC.",
          "The client should verify phone numbers, email addresses, prices, product data, service details, locations, and business statements before publishing.",
          "ICC is not responsible for copyright issues related to materials supplied by the client.",
          "ICC is not responsible for business claims, service promises, pricing statements, or policy wording provided by the client.",
          "Client-provided content may be copied into the project exactly as received unless editing or copywriting is included in the scope.",
          "Any content changes after approval may be treated as additional work depending on timing and scope.",
        ],
      },
      {
        title: "Client Availability",
        text:
          "Client responsiveness is essential for successful delivery. Delayed feedback, delayed approvals, unclear decisions, or unavailable decision makers may cause project delays.",
        items: [
          "The client should assign one main decision maker or responsible contact.",
          "The client should respond to review requests within a reasonable time.",
          "The client should avoid sending contradictory instructions from multiple people.",
          "The client should approve or reject designs, flows, content, and features clearly.",
          "The client should provide missing materials quickly to avoid pausing the project.",
          "Long periods of inactivity may require project re-planning or timeline revision.",
        ],
      },
      {
        title: "Business Responsibility",
        text:
          "ICC provides software and technical services, but the client remains responsible for business decisions, operations, product strategy, legal compliance, user management, pricing, customer service, and market performance.",
        items: [
          "The client decides what services, products, prices, policies, and business claims appear on their platform.",
          "The client is responsible for managing customers, orders, leads, employees, students, users, or internal teams using the system.",
          "The client should seek legal, accounting, or compliance advice when needed.",
          "The client is responsible for checking that the final product matches their business rules before launch.",
          "The client is responsible for maintaining accurate records and backups where needed.",
          "ICC may provide recommendations, but final business approval belongs to the client.",
        ],
      },
    ],
  },
  {
    id: "communication",
    title: "Communication, Feedback & Approvals",
    subtitle:
      "Rules for professional communication, feedback cycles, approvals, meetings, and decision-making during projects.",
    icon: Mail,
    blocks: [
      {
        title: "Communication Channels",
        text:
          "ICC may communicate through email, WhatsApp, phone calls, online meetings, project management tools, shared documents, dashboards, or any channel agreed with the client. Clear communication helps avoid delays and misunderstandings.",
        items: [
          "The agreed communication channel should be used for official approvals and important updates.",
          "Major decisions should be confirmed in writing.",
          "Meeting discussions may need written confirmation before implementation.",
          "Voice notes or verbal instructions may require clarification if the request affects cost, scope, or timeline.",
          "ICC may summarize decisions after meetings to keep a project record.",
          "Urgent requests should be clearly marked and may depend on team availability.",
        ],
      },
      {
        title: "Feedback Rules",
        text:
          "Feedback should be organized, clear, and specific. General comments without details may delay implementation because the team may need clarification before applying changes.",
        items: [
          "Feedback should identify the exact page, screen, section, feature, or issue being discussed.",
          "Bug reports should include steps to reproduce, expected result, actual result, device, browser, screenshot, or video when possible.",
          "Design feedback should mention what should be changed and why.",
          "Contradictory feedback may require a final decision from the main contact.",
          "Feedback sent after approval may be treated as a revision or change request.",
          "Repeated feedback cycles beyond the agreed amount may affect timeline and cost.",
        ],
      },
      {
        title: "Approvals",
        text:
          "Approvals are important checkpoints. Once a design, feature, content block, user flow, or milestone is approved, ICC may proceed based on that approval. Later changes may require additional time or cost.",
        items: [
          "Approval may be given by email, signed document, message, meeting confirmation, or payment continuation.",
          "Design approval may allow development to begin.",
          "Feature approval may allow the team to move to the next milestone.",
          "Final approval may indicate project acceptance.",
          "Using the delivered system in a real environment may be treated as acceptance of the delivered scope.",
          "ICC may request written approval before launch, handover, or major deployment actions.",
        ],
      },
    ],
  },
  {
    id: "change-requests",
    title: "Change Requests, Revisions & Extra Work",
    subtitle:
      "How ICC handles revisions, new requests, redesigns, additional features, and changes after approval.",
    icon: RefreshCcw,
    blocks: [
      {
        title: "What Counts as a Change Request",
        text:
          "A change request is any request that changes the approved scope, modifies approved work, adds new functionality, changes business logic, requires redesign, introduces new integrations, or increases the expected workload.",
        items: [
          "Adding new pages, screens, sections, user roles, dashboards, reports, or modules.",
          "Changing an approved layout, design direction, or user journey.",
          "Adding dynamic functionality to a static project.",
          "Adding backend, database, authentication, admin panel, or API work not originally included.",
          "Changing workflow logic after development has started.",
          "Adding urgent tasks that require reprioritization or overtime.",
        ],
      },
      {
        title: "Revision Limits",
        text:
          "Some projects include a limited number of revisions. Revisions are intended to improve or adjust the approved direction, not to restart the project from scratch or introduce a completely different scope.",
        items: [
          "A revision may include reasonable adjustments to design, text, spacing, layout, or behavior.",
          "A revision does not usually include a full redesign unless agreed.",
          "Changing the entire direction after approval may require a new estimate.",
          "Repeated small changes after approval may accumulate into extra work.",
          "Revisions should be consolidated instead of sent as scattered messages.",
          "ICC may request confirmation before applying revisions that affect scope or timeline.",
        ],
      },
      {
        title: "Extra Work Approval",
        text:
          "ICC may provide a separate quotation, timeline, or approval request for extra work. Extra work should not be assumed to be included unless clearly confirmed.",
        items: [
          "Additional features may be quoted separately.",
          "Additional design options may be charged separately.",
          "Additional testing rounds may require extra time.",
          "Additional deployment environments may require extra setup.",
          "Additional languages, roles, or integrations may require additional work.",
          "Additional support after the agreed period may be handled as paid support or maintenance.",
        ],
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery, Testing & Acceptance",
    subtitle:
      "How ICC delivers projects, how testing works, and when a project may be considered completed or accepted.",
    icon: CheckCircle2,
    blocks: [
      {
        title: "Delivery Methods",
        text:
          "ICC may deliver work through design files, preview links, staging websites, test builds, APK files, repositories, deployment environments, dashboards, documentation, or production launches depending on the project type.",
        items: [
          "Website projects may be delivered through staging links, production deployment, or source files.",
          "Web applications may be delivered through hosted environments, admin access, repositories, or deployment documentation.",
          "Mobile applications may be delivered through APK, internal testing, TestFlight, app store preparation, or source code depending on agreement.",
          "Backend projects may be delivered through APIs, documentation, database setup, admin panels, and server deployment.",
          "Design projects may be delivered through editable files, exported assets, design links, or approved screens.",
          "The delivery method should match the agreed scope and payment status.",
        ],
      },
      {
        title: "Testing Responsibility",
        text:
          "Testing is a shared responsibility. ICC tests technical functionality within the approved scope, while the client reviews business accuracy, content, user flows, real scenarios, and operational suitability.",
        items: [
          "ICC may test responsiveness, navigation, forms, UI behavior, frontend functionality, backend responses, integrations, and common user flows.",
          "The client should test business logic, data accuracy, user roles, content, pricing, messages, policies, and operational flows.",
          "The client should test the project on relevant devices and browsers when possible.",
          "Bugs should be reported clearly with evidence and reproduction steps.",
          "New requests discovered during testing may be separated from actual bugs.",
          "Testing should be completed within an agreed period to avoid keeping the project open indefinitely.",
        ],
      },
      {
        title: "Acceptance of Work",
        text:
          "A project may be considered accepted when the client approves the delivered work, confirms completion, launches the project, starts using the delivered solution, or does not report scope-related issues within a reasonable review period.",
        items: [
          "Launching the project may indicate acceptance of the delivered version.",
          "Using the system with real users, customers, staff, or data may indicate acceptance.",
          "Minor bugs may be handled during the agreed support period.",
          "Requests outside the approved scope after acceptance may be treated as a new phase.",
          "ICC is not responsible for issues caused by changes made after delivery by the client or third parties.",
          "Final handover may depend on completion of payments and agreed delivery conditions.",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property & Ownership",
    subtitle:
      "How ownership, usage rights, source code, design files, client materials, reusable components, and project deliverables are handled.",
    icon: Copyright,
    blocks: [
      {
        title: "Client-Owned Materials",
        text:
          "Materials provided by the client remain owned by the client. ICC uses those materials only to provide the agreed service unless otherwise approved.",
        items: [
          "Client logos, brand assets, company names, trademarks, content, product data, and business documents remain client property.",
          "The client confirms they have permission to use all materials shared with ICC.",
          "ICC does not claim ownership of client trademarks, business identity, or proprietary content.",
          "Client-provided assets may be used in previews, development, testing, and final delivery.",
          "ICC is not responsible for claims related to unauthorized materials provided by the client.",
          "The client should provide original or high-quality assets to avoid poor visual output.",
        ],
      },
      {
        title: "Final Deliverables",
        text:
          "Final deliverables may be transferred or made available to the client according to the approved agreement and payment completion. Ownership and usage rights depend on what was included in the project scope.",
        items: [
          "The client receives the right to use the final approved deliverables for their business after full payment.",
          "Source code transfer depends on the agreement and may not be automatic in every service package.",
          "Editable design files, raw files, working drafts, rejected concepts, and internal resources are provided only if included.",
          "Final production deployment may be considered delivery even if raw working files are not included.",
          "ICC may retain project copies for support, records, portfolio, or future maintenance unless confidentiality requires otherwise.",
          "The client may not resell ICC internal tools, templates, processes, or reusable assets unless explicitly agreed.",
        ],
      },
      {
        title: "ICC Reusable Components",
        text:
          "ICC may use reusable code, design patterns, internal templates, technical structures, starter components, development methods, and professional know-how across multiple projects. These are part of ICC’s experience and do not become exclusive to one client unless agreed in writing.",
        items: [
          "Reusable UI patterns, code structures, libraries, and workflow approaches may be used in future projects.",
          "General technical knowledge gained by ICC remains ICC knowledge.",
          "Custom business logic created specifically for the client may be included according to the project agreement.",
          "Open-source libraries remain governed by their own licenses.",
          "Third-party templates, plugins, fonts, and tools remain governed by their own terms.",
          "Exclusive ownership of custom assets must be agreed clearly before project start.",
        ],
      },
      {
        title: "Restrictions on Misuse",
        text:
          "The client may use the delivered work for the intended business purpose, but must not misuse, redistribute, resell, copy, or modify ICC assets in ways that violate the agreement or harm ICC rights.",
        items: [
          "The client should not claim ownership of ICC internal processes or reusable systems.",
          "The client should not remove credits or attribution when attribution is part of the agreement.",
          "The client should not share private repositories or source code with unauthorized parties when restricted.",
          "The client should not use delivered systems for illegal, harmful, abusive, or misleading activities.",
          "The client should not reverse engineer private tools or internal systems belonging to ICC.",
          "Any white-label or exclusive rights arrangement should be agreed in writing.",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality & Sensitive Information",
    subtitle:
      "How ICC handles private business information, credentials, project ideas, internal documents, user data, and sensitive project material.",
    icon: Lock,
    blocks: [
      {
        title: "Confidential Information",
        text:
          "During a project, clients may share private or sensitive information with ICC. This can include business plans, product ideas, internal workflows, financial information, customer data, employee data, access credentials, technical documents, or unpublished strategies.",
        items: [
          "ICC treats confidential project information with professional care.",
          "Confidential information is used only for project-related purposes.",
          "Access is limited to people who reasonably need it to deliver or support the project.",
          "Clients should clearly identify highly sensitive information when needed.",
          "Clients should avoid sending unnecessary sensitive information when it is not required for the project.",
          "Confidentiality expectations may be supported by a separate NDA for selected projects.",
        ],
      },
      {
        title: "Credentials & Access",
        text:
          "Clients may need to provide temporary or permanent access to hosting, domain accounts, APIs, dashboards, databases, payment gateways, analytics, email platforms, or business tools. Access should be managed carefully.",
        items: [
          "The client should use temporary access or role-based access whenever possible.",
          "The client should avoid sharing personal passwords when a developer invitation is available.",
          "The client should remove or update access after project completion when appropriate.",
          "ICC is not responsible for credential misuse caused by sharing access outside ICC.",
          "ICC may request higher-level access only when technically required.",
          "Clients should keep ownership of important business accounts such as domains, hosting, payment gateways, and app stores.",
        ],
      },
      {
        title: "Non-Disclosure Expectations",
        text:
          "ICC does not intentionally disclose confidential client information to unrelated parties. However, some information may be processed through tools, team members, subcontractors, or third-party providers necessary for service delivery.",
        items: [
          "External sharing should be limited to what is necessary for the project.",
          "Publicly available information is not considered confidential.",
          "Information independently developed by ICC without using client confidential information remains ICC knowledge.",
          "Legal or official obligations may require limited disclosure in certain cases.",
          "A separate NDA may define stronger confidentiality terms when required.",
          "The client should notify ICC before sharing information that requires special handling.",
        ],
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Tools, APIs & Platforms",
    subtitle:
      "Rules for external services, plugins, APIs, payment gateways, app stores, hosting providers, SaaS tools, and platform dependencies.",
    icon: Globe2,
    blocks: [
      {
        title: "External Provider Dependency",
        text:
          "Many software solutions depend on external platforms controlled by third parties. ICC can help integrate or configure these services, but ICC does not control their uptime, pricing, approval process, limits, policies, or technical changes.",
        items: [
          "Examples include hosting providers, domain registrars, email services, analytics tools, payment gateways, SMS providers, WhatsApp APIs, map services, AI tools, app stores, and external APIs.",
          "Third-party platforms may change pricing, limits, documentation, or access rules at any time.",
          "Provider downtime may affect the client’s website, app, dashboard, or integration.",
          "Some integrations may require verification, approval, business documentation, or compliance checks.",
          "ICC is not responsible for failures caused by third-party providers outside ICC control.",
          "Future third-party changes may require paid updates or maintenance work.",
        ],
      },
      {
        title: "Licenses & Paid Tools",
        text:
          "Some projects require paid licenses, plugins, templates, fonts, subscriptions, hosting plans, APIs, or external services. These costs should be clarified before use and are usually separate from ICC service fees unless clearly included.",
        items: [
          "The client may be responsible for purchasing and renewing required tools or subscriptions.",
          "Expired licenses may affect updates, security, performance, or functionality.",
          "Free tools may become paid or limited in the future.",
          "Some services may have usage limits, API quotas, message limits, storage limits, or regional restrictions.",
          "ICC may recommend paid tools when they improve quality, reliability, or delivery speed.",
          "The client should keep access and billing control for important long-term tools.",
        ],
      },
      {
        title: "Integration Limitations",
        text:
          "Integrations depend on the quality of the third-party API, documentation, account permissions, technical support, region availability, and provider stability. Not every requested integration can be guaranteed before technical review.",
        items: [
          "ICC may need API documentation before confirming integration feasibility.",
          "The client may need to provide approved accounts or developer access.",
          "Some platforms restrict automation, scraping, messaging, payments, or user data access.",
          "Some features may require provider approval before launch.",
          "Provider errors, rate limits, or policy restrictions may affect functionality.",
          "Alternative solutions may be proposed when a requested integration is not reliable or feasible.",
        ],
      },
    ],
  },
  {
    id: "hosting",
    title: "Hosting, Domains & Deployment",
    subtitle:
      "Terms related to servers, deployment, domains, SSL certificates, backups, environments, and production launch.",
    icon: Server,
    blocks: [
      {
        title: "Hosting Responsibility",
        text:
          "Hosting responsibility depends on the agreement. ICC may deploy a project, recommend hosting, configure a server, or provide guidance, but long-term hosting ownership and renewal should be clearly assigned.",
        items: [
          "The client should preferably own their domain account and main hosting account.",
          "Hosting fees are usually separate unless included in a managed service package.",
          "Hosting quality affects speed, uptime, scalability, security, and reliability.",
          "Cheap or limited hosting may not be suitable for complex applications.",
          "ICC may recommend hosting plans based on project needs.",
          "Hosting problems outside ICC management may require extra support time.",
        ],
      },
      {
        title: "Domain & SSL",
        text:
          "Domains, DNS settings, SSL certificates, and email records are essential for launch. Delays or mistakes in domain access may delay deployment.",
        items: [
          "The client should provide domain access or DNS management access when required.",
          "Expired domains may make the website unavailable.",
          "Incorrect DNS settings may affect website access, email delivery, or SSL activation.",
          "SSL setup may depend on hosting provider, DNS status, and deployment platform.",
          "Changing domain settings after launch may break website or email services.",
          "ICC may assist with domain configuration if included in the scope.",
        ],
      },
      {
        title: "Backups & Environments",
        text:
          "Backups and environments should be planned based on project importance. Business-critical systems may require staging environments, backup schedules, database backups, monitoring, and maintenance.",
        items: [
          "A staging environment may be used for testing before production launch.",
          "A production environment should not be edited carelessly after launch.",
          "Database backups are important for active systems with user data.",
          "Backup responsibility should be clear between ICC, the client, and hosting provider.",
          "ICC is not responsible for data loss caused by hosting failure or client-side changes unless backup management is included.",
          "Major updates should be tested before being applied to production when possible.",
        ],
      },
    ],
  },
  {
    id: "support",
    title: "Maintenance, Support & Updates",
    subtitle:
      "What support includes, what maintenance means, and what is considered extra work after delivery.",
    icon: RefreshCcw,
    blocks: [
      {
        title: "Post-Delivery Support",
        text:
          "ICC may provide a limited support period after delivery when included in the agreement. Support is intended to address bugs or technical issues related to the approved delivered scope, not to provide unlimited new development.",
        items: [
          "Support may include fixing confirmed bugs within the delivered scope.",
          "Support may include minor technical adjustments during the agreed support period.",
          "Support does not automatically include redesigns, new pages, new features, new integrations, or content management.",
          "Issues must be reported clearly with steps, screenshots, videos, device details, and expected behavior when possible.",
          "Support may be delayed if access is missing or the issue is caused by third-party systems.",
          "Support terms should be reviewed before project acceptance.",
        ],
      },
      {
        title: "Maintenance Plans",
        text:
          "Maintenance is different from bug support. Maintenance is an ongoing service that may include updates, monitoring, backups, minor changes, technical support, performance checks, and security-related reviews depending on the plan.",
        items: [
          "Maintenance plans may be monthly, quarterly, or custom.",
          "Maintenance may include platform updates, dependency updates, backups, monitoring, and minor issue resolution.",
          "Maintenance does not include unlimited feature development unless explicitly stated.",
          "New modules, major redesigns, new integrations, or major upgrades may be quoted separately.",
          "Clients without maintenance plans may request support as paid work.",
          "Business-critical systems are strongly recommended to have ongoing maintenance.",
        ],
      },
      {
        title: "Unsupported Issues",
        text:
          "ICC may not be responsible for issues caused by changes, tools, providers, or actions outside the delivered scope or outside ICC control.",
        items: [
          "Issues caused by client-side code edits may require paid investigation.",
          "Issues caused by third-party developers may require paid repair.",
          "Issues caused by expired licenses, plugins, domains, hosting, or APIs are not automatically covered.",
          "Issues caused by server changes, deleted files, changed credentials, or misconfigured tools may require additional work.",
          "Issues caused by unsupported browsers or very old devices may need separate optimization.",
          "ICC may decline support for systems that were heavily modified after handover.",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Security & Responsible Use",
    subtitle:
      "Security expectations, user responsibilities, access rules, acceptable use, and system protection principles.",
    icon: Lock,
    blocks: [
      {
        title: "Security Approach",
        text:
          "ICC aims to apply reasonable security practices suitable for the project type, budget, timeline, and scope. However, no software system can be guaranteed to be completely immune from all risks, attacks, misconfiguration, user mistakes, or third-party failures.",
        items: [
          "Security level depends on project scope, hosting environment, database design, authentication needs, and business risk.",
          "Basic security practices may include validation, access control, protected routes, secure configuration, and careful handling of credentials.",
          "Advanced security audits, penetration testing, compliance reviews, or formal security certifications are separate services.",
          "The client should protect admin accounts with strong passwords and limited access.",
          "The client should avoid sharing admin credentials with unauthorized people.",
          "Business-critical systems should have maintenance, backups, monitoring, and controlled access policies.",
        ],
      },
      {
        title: "Acceptable Use",
        text:
          "Clients must not use ICC services, systems, software, or delivered solutions for harmful, illegal, abusive, deceptive, exploitative, or unauthorized purposes.",
        items: [
          "Clients must not use delivered systems for malware, scams, spam, fraud, phishing, or harmful automation.",
          "Clients must not use ICC work to violate privacy, intellectual property, platform rules, or applicable legal obligations.",
          "Clients must not request systems intended for unauthorized access, credential theft, illegal surveillance, or exploitation.",
          "Clients must not overload, attack, reverse engineer, or misuse ICC systems or infrastructure.",
          "ICC may refuse or terminate work that appears harmful, abusive, illegal, or unethical.",
          "The client remains responsible for how their users, staff, or admins use the delivered system after launch.",
        ],
      },
      {
        title: "User Accounts & Permissions",
        text:
          "For systems with users, employees, clients, students, customers, or admins, permissions should be planned carefully. Incorrect permissions may expose sensitive data or allow unauthorized actions.",
        items: [
          "The client should define user roles clearly before development.",
          "Admin access should be limited to trusted people.",
          "Unused accounts should be removed after handover.",
          "Passwords should be changed when team members leave or roles change.",
          "Role-based access may require additional development time if not included from the beginning.",
          "ICC is not responsible for actions taken by authorized client users after delivery.",
        ],
      },
    ],
  },
  {
    id: "performance",
    title: "Performance, Compatibility & Technical Limits",
    subtitle:
      "How device differences, browser behavior, hosting quality, content size, and technical limitations can affect software performance.",
    icon: Laptop,
    blocks: [
      {
        title: "Browser & Device Differences",
        text:
          "Websites and applications may appear slightly different across browsers, devices, screen sizes, operating systems, and hardware capabilities. ICC aims to deliver responsive and usable interfaces, but exact visual matching across every device cannot always be guaranteed.",
        items: [
          "Modern browsers may render fonts, spacing, shadows, blur, animations, and scrolling slightly differently.",
          "Old devices may struggle with heavy animations, videos, images, filters, or complex UI effects.",
          "Safari, Chrome, Edge, Firefox, Android browsers, and iOS browsers may behave differently.",
          "Responsive testing should focus on the devices and screen sizes most important to the client’s users.",
          "Supporting very old browsers or devices may require extra optimization.",
          "Performance goals should be agreed when they are critical to the project.",
        ],
      },
      {
        title: "Performance Factors",
        text:
          "Performance depends on multiple factors including code quality, media size, hosting resources, database queries, third-party scripts, API speed, traffic, user device, and internet connection.",
        items: [
          "Large images and videos can slow down websites if not optimized.",
          "Heavy animations or visual effects may affect older phones.",
          "Third-party scripts may reduce loading speed.",
          "Cheap hosting may affect server response time.",
          "Complex dashboards may need optimization as data grows.",
          "Performance improvements after launch may be treated as a separate optimization phase unless included.",
        ],
      },
      {
        title: "Technical Limits",
        text:
          "Some technical limitations may appear because of platform restrictions, browser behavior, device hardware, third-party tools, security requirements, or project budget. ICC may recommend practical alternatives when limitations appear.",
        items: [
          "Some mobile browsers limit background behavior, camera access, file access, push notifications, or autoplay.",
          "Some integrations cannot work without provider approval.",
          "Some features may require HTTPS, verified domains, paid plans, or business accounts.",
          "Some app features require app store review and platform compliance.",
          "Some features may not be suitable for all devices or browsers.",
          "ICC may propose simplified versions to maintain stability and usability.",
        ],
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio, Marketing & Case Studies",
    subtitle:
      "How ICC may reference completed projects, public work, screenshots, client logos, and case studies.",
    icon: BookOpenCheck,
    blocks: [
      {
        title: "Portfolio Rights",
        text:
          "Unless the client requests otherwise in writing, ICC may reference publicly launched projects in its portfolio, website, social media, proposals, presentations, or business materials.",
        items: [
          "ICC may show the project name, public link, client name, client logo, screenshots, or a short project description.",
          "ICC will avoid sharing passwords, admin screens, private dashboards, confidential data, or sensitive business information.",
          "The client may request private handling for confidential projects.",
          "White-label projects should be clearly agreed before work begins.",
          "Portfolio usage helps ICC demonstrate experience, quality, and service capability.",
          "ICC may remove or adjust portfolio references upon reasonable request.",
        ],
      },
      {
        title: "Case Studies",
        text:
          "ICC may create case studies for selected projects to explain the problem, solution, process, technologies, design approach, and final outcome. Detailed private information should not be published without approval.",
        items: [
          "Public information may be used in general case study descriptions.",
          "Private metrics, revenue, internal operations, user data, or business strategy should not be published without approval.",
          "Screenshots of public pages may be used more freely than private admin panels.",
          "Internal dashboards should be anonymized or approved before publication.",
          "ICC may publish anonymized case studies when client identity should remain private.",
          "Client testimonials may be published only when provided or approved by the client.",
        ],
      },
      {
        title: "Attribution",
        text:
          "ICC may include a small credit, reference, or portfolio mention when appropriate and agreed. Attribution rules may vary depending on project type, pricing, white-label arrangement, and client preference.",
        items: [
          "A footer credit may be included when suitable for the project.",
          "The client may request removal of visible credit depending on the agreement.",
          "White-label work should be agreed clearly.",
          "The client should not misrepresent ICC work as produced by another provider without permission.",
          "ICC should not misrepresent client ownership of the client’s brand or business.",
          "Attribution does not grant ICC ownership of the client’s brand.",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "Limitations, Warranties & No Guaranteed Results",
    subtitle:
      "Important limits around business outcomes, technical guarantees, indirect losses, third-party failures, and client-side responsibility.",
    icon: TriangleAlert,
    blocks: [
      {
        title: "No Guaranteed Business Outcome",
        text:
          "ICC provides professional software and technology services, but does not guarantee specific business results unless clearly agreed in writing. Software can support a business, but business success depends on many factors outside ICC’s control.",
        items: [
          "ICC does not guarantee a specific number of sales, leads, users, bookings, downloads, revenue, traffic, followers, or conversions.",
          "Marketing results depend on offer quality, audience, pricing, competition, advertising, branding, sales process, and market conditions.",
          "A website or app launch does not automatically guarantee commercial success.",
          "SEO, ads, growth, and conversion outcomes require separate strategies and ongoing work.",
          "ICC may provide recommendations, but the client remains responsible for business decisions.",
          "Client operations, customer service, fulfillment, and sales handling affect final results.",
        ],
      },
      {
        title: "Service Limitations",
        text:
          "ICC aims to deliver the approved scope professionally, but software may still be affected by bugs, browser changes, device differences, hosting issues, third-party failures, user errors, and future platform updates.",
        items: [
          "Minor bugs may appear after delivery and can be handled during support when within scope.",
          "Future browser or operating system updates may change behavior.",
          "Third-party API changes may require future updates.",
          "Hosting outages may affect availability.",
          "Client-side changes may break functionality.",
          "Unsupported environments may require additional work.",
        ],
      },
      {
        title: "Limitation of Responsibility",
        text:
          "To the reasonable extent allowed by agreement and applicable rules, ICC’s responsibility is limited to the services directly provided by ICC under the approved scope. ICC is not responsible for indirect losses or issues caused by factors outside its control.",
        items: [
          "ICC is not responsible for lost profits, lost opportunities, lost data, business interruption, or indirect damages caused by external factors.",
          "ICC is not responsible for incorrect content, pricing, claims, policies, or instructions provided by the client.",
          "ICC is not responsible for expired domains, unpaid hosting, disabled APIs, expired licenses, or third-party service interruptions.",
          "ICC is not responsible for unauthorized changes made after delivery.",
          "ICC is not responsible for misuse by client staff, admins, or users.",
          "Any responsibility should be evaluated based on the written agreement, approved scope, payment status, and actual services provided.",
        ],
      },
    ],
  },
  {
    id: "termination",
    title: "Project Pause, Suspension & Termination",
    subtitle:
      "When work may be paused, suspended, delayed, cancelled, or ended by either party.",
    icon: Clock3,
    blocks: [
      {
        title: "Project Pause",
        text:
          "A project may be paused when required payments, content, access, approvals, decisions, or technical information are delayed. A paused project may require a revised timeline when work resumes.",
        items: [
          "Missing content may pause design or development.",
          "Missing access may pause hosting, deployment, integration, or testing.",
          "Delayed feedback may extend the project timeline.",
          "Unclear decisions may pause implementation until clarification.",
          "Long inactivity may require rescheduling based on team availability.",
          "Work already completed before the pause remains payable.",
        ],
      },
      {
        title: "Service Suspension",
        text:
          "ICC may suspend work, support, maintenance, handover, deployment, or access assistance when the client violates payment terms, misuses services, fails to provide required materials, or requests work that ICC cannot reasonably or ethically perform.",
        items: [
          "Work may be suspended due to unpaid invoices or delayed milestone payments.",
          "Support may be suspended if the project is modified by unauthorized parties.",
          "Service may be suspended if the client requests harmful, abusive, illegal, or unethical features.",
          "Deployment may be delayed if access or payment is incomplete.",
          "Suspension does not remove payment obligations for completed work.",
          "Service may resume after the issue is resolved and any revised terms are agreed.",
        ],
      },
      {
        title: "Termination",
        text:
          "Either party may request to terminate a project, but termination should be handled professionally and preferably in writing. Payment, handover, refunds, and ownership depend on the stage of work and approved agreement.",
        items: [
          "Completed work remains payable even if the project is terminated.",
          "Deposits may be non-refundable depending on work already started or resources reserved.",
          "Final files may be delivered only after financial settlement.",
          "Third-party costs already paid may not be refundable.",
          "ICC may provide a handover package if agreed and paid for.",
          "Restarting a terminated or inactive project may require a new quotation and timeline.",
        ],
      },
    ],
  },
  {
    id: "policy-updates",
    title: "General Rules & Policy Updates",
    subtitle:
      "General standards, updates, interpretation, contact rules, and relationship between these policies and project agreements.",
    icon: Scale,
    blocks: [
      {
        title: "Professional Standards",
        text:
          "ICC aims to work with professionalism, clarity, technical care, honesty, and respect for client goals. Clients are also expected to communicate respectfully, provide clear information, and cooperate in a way that supports successful delivery.",
        items: [
          "Both parties should communicate respectfully and professionally.",
          "Both parties should avoid abusive, misleading, or manipulative communication.",
          "Project discussions should stay organized and focused on delivery.",
          "Major decisions should be documented.",
          "Unclear requests may require clarification before implementation.",
          "ICC may recommend alternative approaches when they better serve the project.",
        ],
      },
      {
        title: "Policy Updates",
        text:
          "ICC may update these policies from time to time to reflect changes in services, operations, technologies, client needs, internal processes, or project standards. Updated policies may apply to future services and continued engagement.",
        items: [
          "The latest version may be published on the ICC website.",
          "Clients should review policies before starting a new project.",
          "Major changes may be communicated when appropriate.",
          "Continuing to use ICC services may indicate acceptance of updated policies.",
          "Specific signed agreements may override general website policies when there is a clear conflict.",
          "Older proposals may remain governed by their own confirmed terms unless updated.",
        ],
      },
      {
        title: "Contact & Policy Inquiries",
        text:
          "Clients, visitors, and partners may contact ICC for questions about privacy, service terms, project rules, support, ownership, or business inquiries. Clear written communication helps us respond accurately.",
        items: [
          `Policy-related inquiries may be sent to ${policyEmail}.`,
          "Project-specific questions should include the client name, company name, project name, and clear description of the issue.",
          "Urgent project matters should be sent through the agreed project communication channel.",
          "Formal requests should be written clearly to avoid misunderstanding.",
          "ICC may require reasonable time to review policy, privacy, or ownership questions.",
          "For legal, financial, tax, or compliance matters, clients should consult a qualified professional.",
        ],
      },
    ],
  },
];
