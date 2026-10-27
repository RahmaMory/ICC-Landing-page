import { ArrowRight, CalendarDays, CheckCircle2, Clock3, WalletCards } from "lucide-react"
import { Link } from "react-router-dom"
import { englishWebsiteDesignCostPost } from "../data/blogPosts"

const articleFaqs = [
  {
    question: "How much does website design cost in Egypt?",
    answer:
      "As indicative 2026 market ranges, a landing page may cost EGP 5,000–15,000, a company website EGP 10,000–40,000, an e-commerce website EGP 25,000–80,000 or more, and a custom platform commonly starts around EGP 50,000 and may exceed EGP 250,000. These figures are not an ICC quotation. Final pricing depends on the agreed pages, design, features, integrations, and delivery scope.",
  },
  {
    question: "Can I receive a price before development starts?",
    answer:
      "Yes. After the requirements are discussed, the proposal should define the price, included services, delivery stages, expected timeline, and payment plan before work begins.",
  },
  {
    question: "How long does a company website take to build?",
    answer:
      "A straightforward website may start at 7–10 business days once requirements, content, and approvals are ready. Multi-page websites or projects with programmed features often take two to three weeks, while more complex systems need a longer phased timeline.",
  },
  {
    question: "Does website development include testing?",
    answer:
      "Testing should match the project scope. It commonly covers responsive layouts, links, forms, data validation, browsers, user flows, permissions, integrations, and defect correction before launch.",
  },
  {
    question: "Can the project be paid in stages?",
    answer:
      "A payment plan can be agreed around project milestones. The proposal should record the amounts, due stages, accepted payment methods, and included deliverables before development begins.",
  },
  {
    question: "Are domain and hosting included in the website price?",
    answer:
      "That depends on the proposal. ICC explains whether domain and hosting setup are included or separate and recommends that the client retain ownership of the relevant accounts.",
  },
  {
    question: "Can new features be added after launch?",
    answer:
      "Yes, when the technical foundation supports expansion. Discussing likely future features early helps the team choose an architecture that can grow without unnecessary complexity at launch.",
  },
]

const articleStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.icc-collab.com/blog/website-design-cost-egypt#article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.icc-collab.com/blog/website-design-cost-egypt",
      },
      headline: englishWebsiteDesignCostPost.title,
      description: englishWebsiteDesignCostPost.excerpt,
      image: "https://www.icc-collab.com/icc-social-preview.png",
      datePublished: englishWebsiteDesignCostPost.publishedDate,
      dateModified: englishWebsiteDesignCostPost.updatedDate,
      inLanguage: "en",
      keywords: englishWebsiteDesignCostPost.keywords.join(", "),
      author: {
        "@type": "Organization",
        "@id": "https://www.icc-collab.com/#organization",
        name: "ICC — IO Code Company",
      },
      publisher: { "@id": "https://www.icc-collab.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.icc-collab.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.icc-collab.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: englishWebsiteDesignCostPost.title,
          item: "https://www.icc-collab.com/blog/website-design-cost-egypt",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: articleFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
}

const sectionClass = "scroll-mt-28 border-t border-white/10 pt-12"
const headingClass = "text-3xl font-bold leading-tight text-white sm:text-4xl"
const paragraphClass = "mt-5 text-lg leading-9 text-white/72"
const pricingRanges = [
  {
    type: "Landing page",
    typicalNeed: "One service, offer, or campaign",
    price: "5,000–15,000",
    factors: "Design, content, forms, and integrations",
  },
  {
    type: "Company website",
    typicalNeed: "Brand, services, work, and contact information",
    price: "10,000–40,000",
    factors: "Page count, languages, and content management",
  },
  {
    type: "E-commerce website",
    typicalNeed: "Products, orders, payments, and shipping",
    price: "25,000–80,000+",
    factors: "Catalogue size, checkout, shipping, and administration",
  },
  {
    type: "Custom platform or system",
    typicalNeed: "Users, permissions, data, and connected workflows",
    price: "50,000–250,000+",
    factors: "Business rules, reports, data, and integrations",
  },
] as const

export default function EnglishWebsiteDesignCostArticle() {
  return (
    <main dir="ltr" lang="en" className="min-h-screen bg-[#050914] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      <article>
        <header className="relative overflow-hidden border-b border-white/8 px-6 pb-16 pt-16 sm:pb-20 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,rgba(37,99,235,0.25),transparent_32%),radial-gradient(circle_at_85%_42%,rgba(6,182,212,0.12),transparent_30%)]" />
          <div className="relative mx-auto max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="transition hover:text-cyan-300">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link to="/blog" className="transition hover:text-cyan-300">Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="max-w-72 truncate text-white/80">Website design cost</li>
              </ol>
            </nav>

            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-sm font-semibold text-cyan-300">
              {englishWebsiteDesignCostPost.category}
            </span>
            <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
              Website Design Cost in Egypt 2026: Pricing, Features &amp; Development Timeline
            </h1>
            <p className="mt-7 max-w-4xl text-xl leading-10 text-white/68">
              A practical guide to what businesses are paying for, how project
              scope affects price, and which services and delivery stages should
              be clear before website development starts.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/52">
              <span>Prepared and reviewed by ICC — IO Code Company</span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Published <time dateTime={englishWebsiteDesignCostPost.publishedDate}>{englishWebsiteDesignCostPost.publishedLabel}</time>
              </span>
              <span>
                Updated <time dateTime={englishWebsiteDesignCostPost.updatedDate}>{englishWebsiteDesignCostPost.updatedLabel}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                {englishWebsiteDesignCostPost.readingTime}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="min-w-0 space-y-14">
            <section aria-label="Article introduction">
              <p className="text-xl leading-10 text-white/82">
                The honest answer to “How much does a website cost in Egypt?” is
                that the price depends on what the website must do. A company
                website that presents services is different from a store that
                manages products and orders, and both are different from a custom
                platform with users, permissions, payments, and integrations.
              </p>
              <p className={paragraphClass}>
                ICC begins with the business goal, audience, required pages, and
                essential functions. Defining that scope gives the client a clear
                view of the deliverables and reduces expensive assumptions or
                missing requirements later in the project.
              </p>

              <aside className="mt-9 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.07] p-7 sm:p-8" aria-labelledby="quick-answer-title">
                <h2 id="quick-answer-title" className="text-2xl font-bold text-cyan-200">The short answer</h2>
                <ul className="mt-5 space-y-4 text-base leading-8 text-white/75">
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />Indicative market pricing for a landing page commonly starts around EGP 5,000.</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />The ranges below are editorial market comparisons, not statistical averages or binding ICC quotations.</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />A straightforward website may start at 7–10 business days.</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />Multi-page websites or programmed features often require two to three weeks.</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />Complex platforms need a longer, phased delivery plan.</li>
                </ul>
              </aside>
            </section>

            <section id="fixed-price" className={sectionClass}>
              <h2 className={headingClass}>Is there a fixed website design price?</h2>
              <p className={paragraphClass}>
                Starting prices or packages can help with early budgeting, but a
                responsible final price needs a defined scope. Two companies may
                each request six pages while requiring very different work: one
                may need a custom bilingual experience and integrations, while
                the other only needs prepared content and a contact form.
              </p>
              <p className={paragraphClass}>
                Competitive pricing should mean selecting the right level of
                design and engineering—not removing work that the project needs.
                Review ICC&apos;s <Link to="/#pricing" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">current starting packages</Link>,
                then request a project-specific proposal for a binding scope.
              </p>
            </section>

            <section id="website-types" className={sectionClass}>
              <h2 className={headingClass}>Indicative website price ranges in Egypt for 2026</h2>
              <p className={paragraphClass}>
                These ranges provide an initial budgeting reference. A project
                may fall below or above them depending on design depth, content,
                functionality, integrations, testing, and support.
              </p>
              <div className="mt-8 hidden overflow-x-auto rounded-2xl border border-white/10 md:block">
                <table className="w-full min-w-[56rem] border-collapse text-left">
                  <caption className="sr-only">Indicative website pricing by project type</caption>
                  <thead className="bg-white/[0.06] text-white">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-semibold">Project type</th>
                      <th scope="col" className="px-5 py-4 font-semibold">Typical need</th>
                      <th scope="col" className="px-5 py-4 font-semibold">Indicative market range</th>
                      <th scope="col" className="px-5 py-4 font-semibold">Main cost factors</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8 text-white/68">
                    {pricingRanges.map((item) => (
                      <tr key={item.type}>
                        <th scope="row" className="px-5 py-4 font-semibold text-white">{item.type}</th>
                        <td className="px-5 py-4">{item.typicalNeed}</td>
                        <td className="px-5 py-4 font-semibold text-cyan-200">EGP {item.price}</td>
                        <td className="px-5 py-4">{item.factors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 grid gap-4 md:hidden" aria-label="Indicative website pricing by project type">
                {pricingRanges.map((item) => (
                  <article key={item.type} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <h3 className="text-xl font-bold text-white">{item.type}</h3>
                    <p className="mt-2 text-lg font-semibold text-cyan-200">EGP {item.price}</p>
                    <dl className="mt-4 space-y-3 text-sm leading-7">
                      <div>
                        <dt className="font-semibold text-white/85">Typical need</dt>
                        <dd className="text-white/62">{item.typicalNeed}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-white/85">Main cost factors</dt>
                        <dd className="text-white/62">{item.factors}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-white/48">
                Last reviewed: October 2026. Amounts are in Egyptian pounds and
                are not a binding ICC quotation. Domain, hosting, content,
                licences, or ongoing maintenance may be separate. ICC confirms
                the final price only after reviewing the project scope.
              </p>
              <aside className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6" aria-labelledby="pricing-methodology-title">
                <h3 id="pricing-methodology-title" className="text-lg font-bold text-white">Pricing methodology</h3>
                <p className="mt-3 leading-8 text-white/62">
                  These figures were prepared through editorial research and a
                  comparison of published ranges for broadly similar work in the
                  Egyptian market during 2026. They are indicative market ranges,
                  not statistical averages and not binding quotations from ICC.
                  A final proposal is issued after the required scope is reviewed.
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm leading-7">
                  <li><Link to="/services/landing-page" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">Landing page service</Link></li>
                  <li><Link to="/services/mvp-website" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">MVP website development</Link></li>
                  <li><Link to="/projects" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">ICC portfolio</Link></li>
                  <li><Link to="/#contact" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">Request an estimate</Link></li>
                </ul>
              </aside>
            </section>

            <section id="cost-factors" className={sectionClass}>
              <h2 className={headingClass}>What determines website development cost?</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  ["1. Page count and page type", "Repeated content pages do not require the same effort as pages with unique content structure, interaction, and functionality."],
                  ["2. UI and UX design", "Design includes content hierarchy, visitor journeys, prototypes, interface states, and usability across screen sizes—not only colours."],
                  ["3. Programmed features", "Bookings, payments, accounts, permissions, notifications, reports, and dashboards add analysis, development, and testing time."],
                  ["4. Administration and data", "Managing content, customers, orders, or operational data requires an organised and secure backend rather than front-end pages alone."],
                  ["5. Languages and content", "Multilingual websites require content planning, direction-aware layouts, links, and separate metadata for each language."],
                  ["6. External integrations", "Payment, shipping, CRM, email, and third-party services require configuration, error handling, and end-to-end testing."],
                  ["7. Performance and security", "Image optimisation, page speed, access controls, backups, and security effort depend on the project and its data sensitivity."],
                  ["8. Post-launch support", "The update schedule, support period, and maintenance responsibilities determine whether ongoing work is included or separate."],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="mt-3 leading-8 text-white/62">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="ready-vs-custom" className={sectionClass}>
              <h2 className={headingClass}>Template website or custom development?</h2>
              <p className={paragraphClass}>
                A template-based website adapts an existing system and can be a
                sensible choice for standard requirements, limited budgets, and
                shorter schedules. Custom development starts from the user journey,
                business rules, and required capabilities, making it more flexible
                when a ready-made solution cannot support the workflow.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <h3 className="text-xl font-bold text-white">Template or ready-made solution</h3>
                  <ul className="mt-4 space-y-3 leading-8 text-white/64">
                    <li>• Faster and more economical for straightforward needs.</li>
                    <li>• Suitable for familiar content and common functionality.</li>
                    <li>• Customisation and growth depend on platform limitations.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.055] p-6">
                  <h3 className="text-xl font-bold text-cyan-200">Custom development</h3>
                  <ul className="mt-4 space-y-3 leading-8 text-white/68">
                    <li>• Designed around users and business operations.</li>
                    <li>• Greater flexibility for data, permissions, and integrations.</li>
                    <li>• Requires more analysis, development, and testing.</li>
                  </ul>
                </div>
              </div>
              <p className={paragraphClass}>
                The best option is the one that meets the current goal, supports
                expected growth, and avoids complexity that the business does not need.
              </p>
            </section>

            <section id="included-services" className={sectionClass}>
              <h2 className={headingClass}>What can an ICC website project include?</h2>
              <p className={paragraphClass}>
                Deliverables vary by project, but work normally moves through
                requirements, design, development, testing, and launch. Each phase
                should have agreed outputs instead of relying on a vague promise of
                a “complete website.”
              </p>
              <ul className="mt-7 grid gap-3 text-lg leading-8 text-white/72 sm:grid-cols-2">
                {[
                  "Business, objective, and audience discovery.",
                  "Page, feature, and scope definition.",
                  "User experience planning and UI design.",
                  "Responsive front-end development.",
                  "Backend development for required functions.",
                  "Database design and connection when needed.",
                  "Administration tools when included in scope.",
                  "Testing of pages, forms, and user flows.",
                  "Defect correction and deployment preparation.",
                  "Technical SEO foundations.",
                  "Handover and usage guidance.",
                  "Support under the agreed proposal terms.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-white/[0.025] px-4 py-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className={paragraphClass}>
                See the <Link to="/services/mvp-website" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">MVP website development service</Link>,
                explore <Link to="/services/ecommerce" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">custom e-commerce development</Link>,
                or review <Link to="/projects" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">published ICC projects</Link> to compare different delivery scopes.
              </p>
            </section>

            <section id="timeline" className={sectionClass}>
              <h2 className={headingClass}>How long does website development take?</h2>
              <div className="mt-7 rounded-3xl border border-blue-400/20 bg-blue-500/[0.08] p-7 sm:p-8">
                <p className="text-xl font-semibold leading-10 text-white">
                  A straightforward website may start at 7–10 business days.
                  Multi-page websites or projects with programmed features often
                  take two to three weeks, while more complex systems need longer.
                </p>
              </div>
              <p className={paragraphClass}>
                The delivery clock begins after requirements, content, and necessary
                approvals are ready. User accounts, advanced dashboards, stores,
                bookings, online payments, and external integrations usually require
                separate phases with clear review points.
              </p>
              <p className={paragraphClass}>
                The objective is not simply to finish pages quickly. It is to launch
                a stable website that can be used, maintained, and expanded. Delayed
                content, delayed approvals, or scope changes naturally affect delivery.
              </p>
            </section>

            <section id="team" className={sectionClass}>
              <h2 className={headingClass}>Who works on a website project?</h2>
              <p className={paragraphClass}>
                Depending on scope, delivery may involve requirements analysis or
                project management, UI/UX design, front-end development, backend
                development, database work, QA and testing, deployment, security,
                SEO, or content support.
              </p>
              <p className={paragraphClass}>
                Not every website requires the same team size. Roles should match
                the work: a simple company website does not need the same structure
                as a system handling permissions, payments, and sensitive data.
              </p>
            </section>

            <section id="testing" className={sectionClass}>
              <h2 className={headingClass}>What should be tested before launch?</h2>
              <p className={paragraphClass}>
                Completing design and development does not make a website ready by
                itself. The team should test the paths that visitors and staff will
                use and confirm that data and integrations behave as agreed.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Navigation, links, and buttons.",
                  "Contact forms and data submission.",
                  "Mobile, tablet, and desktop layouts.",
                  "Current major browsers.",
                  "Login and permissions when included.",
                  "Booking, ordering, and payment flows when included.",
                  "Input and business-rule validation.",
                  "Page performance and loading behaviour.",
                  "Defect identification and correction.",
                  "Post-deployment checks in the live environment.",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-white/70">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section id="payment" className={sectionClass}>
              <h2 className={headingClass}>Competitive pricing and flexible payment stages</h2>
              <div className="mt-7 flex gap-5 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-8">
                <WalletCards className="mt-1 h-8 w-8 shrink-0 text-cyan-300" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold">Record the commercial terms before work begins</h3>
                  <p className="mt-3 leading-8 text-white/65">
                    ICC supports available payment methods and can agree staged
                    payments around milestones such as project start, design
                    approval, a major development stage, and handover. The proposal
                    records the price, payment schedule, and included services.
                  </p>
                </div>
              </div>
            </section>

            <section id="ongoing-costs" className={sectionClass}>
              <h2 className={headingClass}>Domain, hosting, maintenance, and future development</h2>
              <p className={paragraphClass}>
                Website development is not always the final cost. Clarify ongoing
                services before signing so the decision is not based on build price alone.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  ["Domain", "The website address is normally renewed periodically and should preferably be registered in an account owned by the client."],
                  ["Hosting", "Cost depends on traffic, storage, databases, backups, and the level of performance the website needs."],
                  ["Maintenance and support", "This may cover monitoring, updates, and defect correction for an agreed period and scope."],
                  ["Future development", "New pages, languages, features, or integrations are normally estimated as additional scope when required."],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="mt-3 leading-8 text-white/62">{description}</p>
                  </div>
                ))}
              </div>
              <p className={paragraphClass}>
                ICC states whether domain and hosting setup are included or separate
                and defines the post-launch support period in the proposal.
              </p>
            </section>

            <section id="estimate" className={sectionClass}>
              <h2 className={headingClass}>How to request a more useful estimate</h2>
              <p className={paragraphClass}>
                You do not need a long technical document. Clear answers to these
                questions help the team provide a more accurate initial direction:
              </p>
              <ol className="mt-7 grid gap-3 text-lg leading-8 text-white/72 sm:grid-cols-2">
                {[
                  "What is the website's primary goal?",
                  "Who will use it?",
                  "Which main pages are required?",
                  "Are bookings, payments, or accounts needed?",
                  "Does the website need another language?",
                  "Are content and images ready?",
                  "Which external systems must be connected?",
                  "What is the target launch date?",
                ].map((item, index) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-white/[0.025] px-4 py-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-300">{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>

            <section id="real-work" className={sectionClass}>
              <h2 className={headingClass}>Why project proposals are not identical</h2>
              <p className={paragraphClass}>
                The word “website” can describe a single campaign page or a complete
                product that supports part of a company&apos;s operations. Content-led
                websites, online stores, dashboards, and custom platforms involve
                different design, data, integration, and testing requirements.
              </p>
              <p className={paragraphClass}>
                Review <Link to="/projects" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">ICC&apos;s published portfolio and project summaries</Link> to see how scope changes across different types of digital products.
              </p>
            </section>

            <section id="choose-company" className={sectionClass}>
              <h2 className={headingClass}>How to choose a website development company</h2>
              <p className={paragraphClass}>
                Start with relevant published work, then ask for a proposal that
                defines pages, features, stages, timing, responsibilities, and
                post-launch support. Clear scope matters more than broad promises.
              </p>
              <ul className="mt-7 grid gap-3 text-lg leading-8 text-white/72 sm:grid-cols-2">
                {[
                  "Published work that can be opened and reviewed.",
                  "Clear understanding of the goal and audience.",
                  "Written scope showing what is and is not included.",
                  "Defined review stages and responsibilities.",
                  "Testing before launch and agreed support terms.",
                  "Clear ownership of domain, hosting, and accounts.",
                  "A foundation that supports realistic growth.",
                  "Regular communication during delivery.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-white/[0.025] px-4 py-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="why-icc" className={sectionClass}>
              <h2 className={headingClass}>Working with ICC on your website</h2>
              <p className={paragraphClass}>
                ICC starts by understanding the project before recommending a
                solution. The team defines the scope, roles, and stages; develops
                responsive interfaces and required functionality; tests before
                launch; and records services, timeline, and payment terms clearly.
              </p>
              <p className={paragraphClass}>
                The objective is a solution that supports the business—not a larger
                page count or feature list without a reason. An initial discussion
                can separate launch essentials from features that are better planned
                for a later phase.
              </p>
            </section>

            <section id="faq" className={sectionClass}>
              <h2 className={headingClass}>Website design cost FAQ</h2>
              <div className="mt-8 space-y-4">
                {articleFaqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                    <summary className="cursor-pointer list-none pr-7 text-lg font-bold text-white marker:hidden">
                      {faq.question}
                    </summary>
                    <p className="mt-4 leading-8 text-white/65">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-blue-400/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(6,182,212,0.07))] p-8 sm:p-10" aria-labelledby="article-cta-title">
              <p className="text-sm font-semibold text-cyan-300">Your next step</p>
              <h2 id="article-cta-title" className="mt-3 text-3xl font-bold leading-tight">
                Request a scope that fits your project—not a generic package
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-9 text-white/68">
                Share your project idea, required pages, and essential features.
                ICC will help you define a sensible scope, expected timeline,
                payment stages, and project-specific estimate.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold transition hover:bg-blue-400">
                  Discuss your website with ICC
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/projects" className="inline-flex items-center rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white/85 transition hover:bg-white/7">
                  View ICC projects
                </Link>
              </div>
            </section>
          </div>

          <aside className="hidden lg:sticky lg:top-28 lg:block" aria-label="Article contents">
            <div className="rounded-2xl border border-white/10 bg-[#09111f]/95 p-6 backdrop-blur-xl">
              <h2 className="font-bold text-white">In this guide</h2>
              <nav className="mt-5">
                <ul className="space-y-3 text-sm leading-6 text-white/55">
                  <li><a href="#fixed-price" className="transition hover:text-cyan-300">Fixed pricing</a></li>
                  <li><a href="#website-types" className="transition hover:text-cyan-300">Price ranges</a></li>
                  <li><a href="#cost-factors" className="transition hover:text-cyan-300">Cost factors</a></li>
                  <li><a href="#ready-vs-custom" className="transition hover:text-cyan-300">Template or custom</a></li>
                  <li><a href="#included-services" className="transition hover:text-cyan-300">Included services</a></li>
                  <li><a href="#timeline" className="transition hover:text-cyan-300">Timeline</a></li>
                  <li><a href="#testing" className="transition hover:text-cyan-300">Testing</a></li>
                  <li><a href="#payment" className="transition hover:text-cyan-300">Payment stages</a></li>
                  <li><a href="#ongoing-costs" className="transition hover:text-cyan-300">Ongoing costs</a></li>
                  <li><a href="#estimate" className="transition hover:text-cyan-300">Requesting an estimate</a></li>
                  <li><a href="#real-work" className="transition hover:text-cyan-300">Project scope</a></li>
                  <li><a href="#choose-company" className="transition hover:text-cyan-300">Choosing a company</a></li>
                  <li><a href="#faq" className="transition hover:text-cyan-300">FAQ</a></li>
                </ul>
              </nav>
              <Link to="/#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white transition hover:bg-blue-400">
                Request an estimate
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
