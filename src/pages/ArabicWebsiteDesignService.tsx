import {
  ArrowLeft,
  ArrowUpLeft,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Gauge,
  LayoutTemplate,
  MonitorSmartphone,
  Palette,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  TestTube2,
} from "lucide-react"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"

const pageUrl = "https://www.icc-collab.com/ar/services/website-design-egypt"
const pageDescription = "تبحث عن شركة تصميم مواقع في مصر؟ تقدم ICC تصميم وتطوير مواقع الشركات والمتاجر الإلكترونية وصفحات الهبوط والحلول المخصصة. شاهد أعمالنا واطلب عرض سعر."

const serviceTypes = [
  {
    title: "مواقع الشركات",
    description: "موقع احترافي يعرّف بالشركة وخدماتها وأعمالها، ويوجه الزائر إلى التواصل أو طلب الخدمة بوضوح.",
    icon: BriefcaseBusiness,
    to: "/services/mvp-website",
    linkLabel: "تعرف على تطوير مواقع الشركات",
  },
  {
    title: "صفحات الهبوط",
    description: "صفحة مركزة لحملة أو خدمة واحدة، تُبنى حول رسالة واضحة ومسار يساعد الزائر على اتخاذ الخطوة التالية.",
    icon: LayoutTemplate,
    to: "/services/landing-page",
    linkLabel: "استكشف خدمة صفحات الهبوط",
  },
  {
    title: "المتاجر الإلكترونية",
    description: "تجربة بيع متجاوبة تشمل المنتجات والطلبات والدفع والشحن والإدارة وفق احتياجات النشاط.",
    icon: ShoppingCart,
    to: "/services/ecommerce",
    linkLabel: "استكشف تطوير المتاجر الإلكترونية",
  },
  {
    title: "المنصات والحلول المخصصة",
    description: "حلول ويب بخصائص وقواعد عمل وحسابات وصلاحيات ولوحات تحكم عندما لا تكفي القوالب الجاهزة.",
    icon: ServerCog,
    to: "/services/dashboard",
    linkLabel: "تعرف على الأنظمة ولوحات التحكم",
  },
] as const

const deliverables = [
  { title: "تحليل المتطلبات", description: "تحديد الهدف والجمهور والصفحات والوظائف ونطاق العمل قبل بدء التنفيذ.", icon: SearchCheck },
  { title: "تصميم UI/UX", description: "تخطيط رحلة المستخدم وتصميم واجهة تناسب الهوية والمحتوى وطريقة الاستخدام.", icon: Palette },
  { title: "واجهة متجاوبة", description: "تجربة واضحة على الموبايل والتابلت والكمبيوتر مع اهتمام بالتفاصيل وسهولة التصفح.", icon: MonitorSmartphone },
  { title: "تطوير Frontend", description: "تحويل التصميم إلى واجهات سريعة وتفاعلية وقابلة للصيانة والتطوير.", icon: Code2 },
  { title: "Backend وقاعدة بيانات", description: "برمجة الوظائف والبيانات والحسابات والصلاحيات والتكاملات المطلوبة عند الحاجة.", icon: Database },
  { title: "اختبار وتجهيز الإطلاق", description: "مراجعة الصفحات والنماذج والوظائف والتجاوب والأخطاء قبل التسليم.", icon: TestTube2 },
  { title: "أساس تقني للـSEO", description: "عناوين وبيانات وصفية وبنية صفحات وأداء وفهرسة سليمة كجزء من التجهيز الأساسي.", icon: Gauge },
  { title: "أمان وتسليم واضح", description: "إعدادات مناسبة لطبيعة المشروع، مع توضيح الملكية والتسليم والدعم المتفق عليه.", icon: ShieldCheck },
] as const

const processSteps = [
  { number: "01", title: "فهم المشروع", description: "نراجع نشاطك والجمهور والهدف والخصائص والمحتوى المتاح." },
  { number: "02", title: "تحديد النطاق", description: "نرتب الصفحات والوظائف والمراحل والمخرجات والمدة المتوقعة." },
  { number: "03", title: "تصميم التجربة", description: "نخطط المحتوى والمسارات ثم نصمم واجهة متوافقة مع الهوية." },
  { number: "04", title: "البرمجة والربط", description: "نطور الواجهات والوظائف وقاعدة البيانات والتكاملات المطلوبة." },
  { number: "05", title: "الاختبار والإطلاق", description: "نراجع التجاوب والوظائف والأخطاء، ثم نجهز الموقع للتشغيل والتسليم." },
] as const

const pricingRanges = [
  { type: "صفحة هبوط", price: "5,000–15,000", note: "خدمة أو حملة واحدة" },
  { type: "موقع شركة", price: "10,000–40,000", note: "هوية وخدمات وأعمال وتواصل" },
  { type: "متجر إلكتروني", price: "25,000–80,000+", note: "منتجات وطلبات ودفع وشحن" },
  { type: "منصة أو نظام مخصص", price: "50,000–250,000+", note: "مستخدمون وصلاحيات وعمليات مترابطة" },
] as const

const faqItems = [
  {
    question: "كيف تختار شركة تصميم مواقع في مصر؟",
    answer: "راجع أعمالًا حقيقية يمكن فتحها، واطلب نطاق عمل مكتوبًا يوضح الصفحات والخصائص والمراحل والمدة والاختبارات والدعم. الشركة المناسبة تشرح قراراتها بوضوح وتبني الحل حول هدف النشاط، لا حول عدد صفحات فقط.",
  },
  {
    question: "كم يستغرق تصميم وتطوير موقع؟",
    answer: "قد يبدأ الموقع البسيط من 7 إلى 10 أيام عمل بعد اكتمال المتطلبات والمحتوى والموافقات. المواقع متعددة الصفحات أو التي تحتوي على وظائف برمجية تستغرق غالبًا من أسبوعين إلى ثلاثة أسابيع، بينما تحتاج الأنظمة الأكثر تعقيدًا إلى مدة أطول.",
  },
  {
    question: "هل يمكن تنفيذ الموقع باللغة العربية والإنجليزية؟",
    answer: "نعم. يمكن بناء تجربة متعددة اللغات مع مراعاة اتجاه النص والمحتوى والروابط والبيانات الوصفية لكل لغة، ويُحدد ذلك ضمن نطاق المشروع قبل التنفيذ.",
  },
  {
    question: "هل تشمل الخدمة الدومين والاستضافة؟",
    answer: "يعتمد ذلك على العرض المتفق عليه. توضح ICC ما إذا كان إعداد الدومين والاستضافة مشمولًا أو منفصلًا، ويُفضّل أن تكون الحسابات الأساسية مملوكة للعميل.",
  },
  {
    question: "هل يتم اختبار الموقع قبل التسليم؟",
    answer: "نعم، تُراجع الصفحات والنماذج والخصائص والتجاوب على الأجهزة، وتُعالج الأخطاء البرمجية وفق طبيعة المشروع قبل الإطلاق.",
  },
  {
    question: "هل تهيئة محركات البحث جزء من تطوير الموقع؟",
    answer: "يتضمن التنفيذ أساسًا تقنيًا مناسبًا مثل بنية الصفحات والعناوين والبيانات الوصفية والتجاوب والأداء والفهرسة. أما المنافسة على كلمات بحث محددة فتحتاج خطة محتوى ومتابعة مستمرة بعد الإطلاق.",
  },
  {
    question: "هل يمكن تطوير الموقع وإضافة خصائص بعد الإطلاق؟",
    answer: "نعم، عندما تُبنى البنية من البداية بطريقة مناسبة للتوسع. نناقش الخصائص المتوقعة مستقبلًا حتى لا يضطر المشروع إلى البدء من الصفر عند كل مرحلة جديدة.",
  },
] as const

const selectedProjectSlugs = new Set([
  "remax-in-town",
  "two-concepts-architecture",
  "caterserv",
  "a-plus-aura",
])

const projectDescriptionsAr: Record<string, string> = {
  "remax-in-town": "نموذج منصة عقارية يجمع بين استكشاف العقارات ومساحة إدارة متكاملة.",
  "two-concepts-architecture": "موقع لعرض أعمال استوديو متكامل للعمارة والهندسة والإنشاءات.",
  caterserv: "نموذج موقع متعدد الصفحات لخدمات الضيافة والفعاليات، يشمل الخدمات والقوائم والتعريف بالفريق والحجز.",
  "a-plus-aura": "موقع شركة للتسويق والإنتاج الإعلامي يعرض الحملات والخدمات والأعمال واستفسارات العملاء.",
}

const selectedProjects = projects.filter((project) => selectedProjectSlugs.has(project.slug))

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "تصميم وتطوير مواقع إلكترونية في مصر",
      serviceType: "تصميم وتطوير المواقع الإلكترونية",
      description: pageDescription,
      url: pageUrl,
      areaServed: {
        "@type": "Country",
        name: "Egypt",
      },
      provider: {
        "@type": "Organization",
        "@id": "https://www.icc-collab.com/#organization",
        name: "ICC — IO Code Company",
        url: "https://www.icc-collab.com/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://www.icc-collab.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "الخدمات",
          item: "https://www.icc-collab.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "تصميم وتطوير المواقع في مصر",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
}

const sectionHeadingClass = "text-3xl font-bold leading-relaxed text-white sm:text-4xl lg:text-5xl"

export default function ArabicWebsiteDesignService() {
  return (
    <main dir="rtl" lang="ar" className="overflow-hidden bg-[#050914] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative border-b border-white/8 px-6 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(37,99,235,0.28),transparent_30%),radial-gradient(circle_at_14%_45%,rgba(6,182,212,0.13),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#050914] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <nav aria-label="مسار التنقل" className="mb-8 text-sm text-white/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="transition hover:text-cyan-300">الرئيسية</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link to="/services" className="transition hover:text-cyan-300">الخدمات</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white/80">تصميم وتطوير المواقع</li>
              </ol>
            </nav>

            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-sm font-semibold text-cyan-300">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              تصميم احترافي وبرمجة قابلة للتوسع
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.45] tracking-tight sm:text-5xl lg:text-6xl">
              شركة تصميم وتطوير مواقع إلكترونية في مصر
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/68 sm:text-xl sm:leading-10">
              تساعدك <bdi>ICC — IO Code Company</bdi> على تحويل فكرتك إلى موقع واضح وسريع
              ومتجاوب، من دراسة الاحتياج وتصميم تجربة المستخدم إلى البرمجة والاختبار
              والإطلاق. ننفذ مواقع الشركات والمتاجر وصفحات الهبوط والمنصات المخصصة وفق
              هدف النشاط، لا وفق قالب واحد للجميع.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/#contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 font-semibold transition hover:bg-blue-400">
                اطلب عرض سعر لموقعك
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/projects" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.035] px-7 py-3.5 font-semibold text-white/88 transition hover:border-cyan-300/35 hover:bg-white/[0.07]">
                شاهد أعمال ICC
              </Link>
            </div>

            <ul className="mt-9 grid gap-3 text-sm leading-7 text-white/58 sm:grid-cols-2">
              {[
                "تصميم مخصص ومتجاوب مع كل الشاشات",
                "Frontend وBackend وقواعد بيانات عند الحاجة",
                "اختبارات للأخطاء والوظائف قبل الإطلاق",
                "نطاق ومدة وخطة سداد واضحة قبل البدء",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -inset-7 rounded-[2.5rem] bg-blue-500/12 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#091321]/90 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <span className="text-xs font-medium tracking-wide text-white/42">ICC WEB EXPERIENCE</span>
              </div>

              <div className="mt-6 rounded-3xl border border-blue-400/18 bg-[linear-gradient(145deg,rgba(37,99,235,0.20),rgba(6,182,212,0.05))] p-6 sm:p-8">
                <span className="text-xs font-semibold text-cyan-300">من الفكرة إلى الإطلاق</span>
                <h2 className="mt-4 text-2xl font-bold leading-relaxed sm:text-3xl">موقع يخدم هدف النشاط فعلًا</h2>
                <p className="mt-3 leading-8 text-white/58">محتوى مرتب، تجربة سهلة، وبرمجة تستوعب ما يحتاجه المشروع الآن وما قد يضاف لاحقًا.</p>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    ["UI/UX", "مسار واضح"],
                    ["Responsive", "كل الشاشات"],
                    ["Development", "بنية مناسبة"],
                    ["QA", "اختبار قبل التسليم"],
                  ].map(([title, label]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-[#07101d]/80 p-4">
                      <strong className="block text-sm text-white">{title}</strong>
                      <span className="mt-1 block text-xs leading-6 text-white/45">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-4">
                <span className="text-sm text-white/50">تصميم • برمجة • اختبار • إطلاق</span>
                <BadgeCheck className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-cyan-300">خدمات تصميم المواقع</p>
            <h2 className={`mt-4 ${sectionHeadingClass}`}>حل مناسب لطبيعة مشروعك، وليس قالبًا ثابتًا</h2>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-white/62">
              نحدد نوع الموقع والتقنيات والمراحل بعد فهم ما تريد تحقيقه. يمكن أن يكون
              المطلوب حضورًا احترافيًا للشركة، أو مسار بيع، أو تجربة طلب، أو منصة
              بعمليات وصلاحيات مترابطة.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceTypes.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.045] sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/12 text-blue-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-8 text-white/58">{service.description}</p>
                  <Link to={service.to} className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                    {service.linkLabel}
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="deliverables" className="border-y border-white/8 bg-[#07101b] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold text-blue-300">ما الذي يشمله التنفيذ؟</p>
              <h2 className={`mt-4 ${sectionHeadingClass}`}>فريق متخصص يغطي مراحل الموقع الأساسية</h2>
              <p className="mt-5 text-lg leading-9 text-white/60">
                يشارك في المشروع التخصص المناسب بحسب حجمه: تحليل المتطلبات، UI/UX،
                Frontend، Backend، قواعد البيانات، الاختبار، وتجهيز التشغيل. ليس كل
                مشروع بحاجة إلى التعقيد نفسه، لذلك تُحدد الأدوار والمخرجات ضمن العرض.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                    <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/52">{item.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-cyan-300">خطوات العمل</p>
            <h2 className={`mt-4 ${sectionHeadingClass}`}>مسار واضح من أول مناقشة حتى الإطلاق</h2>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-white/62">كل مرحلة لها هدف ومخرجات واضحة، حتى يعرف العميل ما الذي يتم تنفيذه وما المطلوب لاعتماد الخطوة التالية.</p>
          </div>

          <ol className="mt-11 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.number} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                <span className="text-4xl font-black text-blue-400/25">{step.number}</span>
                <h3 className="mt-7 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/52">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="projects" className="border-y border-white/8 bg-[#07101b] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold text-blue-300">نماذج أعمال منشورة</p>
              <h2 className={`mt-4 ${sectionHeadingClass}`}>أمثلة من مواقع ومنصات طورتها ICC</h2>
              <p className="mt-5 max-w-3xl text-lg leading-9 text-white/62">نماذج من سابقة الأعمال الحالية، مع روابط مباشرة للنسخ المنشورة ودون افتراض علاقة عميل أو ادعاء نتائج غير موثقة.</p>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200">
              شاهد سابقة الأعمال كاملة
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {selectedProjects.map((project) => (
              <article key={project.slug} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#091321]">
                <div className="relative h-52 overflow-hidden border-b border-white/8" style={{ background: project.imageBackground }}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full transition duration-500 group-hover:scale-105 ${project.imageFit === "contain" ? "object-contain p-8" : "object-cover"}`}
                  />
                  <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-[#050914]/85 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md">{project.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/52">{projectDescriptionsAr[project.slug]}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-300 transition hover:text-cyan-200">
                    افتح نموذج العمل المنشور
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (يفتح في نافذة جديدة)</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-cyan-300">دليل تكلفة مبدئي</p>
              <h2 className={`mt-4 ${sectionHeadingClass}`}>نطاقات استرشادية تساعدك على تخطيط الميزانية</h2>
              <p className="mt-5 text-lg leading-9 text-white/62">
                السعر النهائي يعتمد على الصفحات والتصميم والوظائف والمحتوى والتكاملات
                والاختبارات والدعم. النطاقات التالية مقارنات سوقية استرشادية، وليست
                متوسطات إحصائية أو عرض سعر ملزمًا من ICC.
              </p>
              <Link to="/ar/blog/website-design-cost-egypt" className="mt-7 inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/8 px-5 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-300/12">
                اقرأ دليل تكلفة تصميم المواقع في مصر
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2" aria-label="نطاقات أسعار تصميم المواقع الاسترشادية">
              {pricingRanges.map((item) => (
                <article key={item.type} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center justify-between gap-3">
                    <Store className="h-5 w-5 text-blue-300" aria-hidden="true" />
                    <span className="text-xs text-white/38">نطاق استرشادي</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.type}</h3>
                  <p className="mt-2 text-2xl font-bold text-cyan-200"><bdi dir="ltr">{item.price}</bdi> <span className="text-sm font-medium text-white/55">جنيه</span></p>
                  <p className="mt-3 text-sm leading-7 text-white/48">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-white/8 bg-[#07101b] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-300">أسئلة شائعة</p>
            <h2 className={`mt-4 ${sectionHeadingClass}`}>قبل أن تبدأ مشروع الموقع</h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqItems.map((item, index) => (
              <details key={item.question} open={index === 0} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <summary className="cursor-pointer list-none pr-7 text-lg font-bold marker:hidden">{item.question}</summary>
                <p className="mt-4 leading-8 text-white/60">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.22),rgba(6,182,212,0.07))] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold text-cyan-300">ابدأ بخطوة واضحة</p>
            <h2 className="mt-4 text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">احصل على تصور مناسب لموقع شركتك</h2>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-white/66">شاركنا نوع النشاط والصفحات والخصائص المطلوبة والموعد المستهدف. سنساعدك على تحديد النطاق والمدة والخطوات المناسبة قبل بدء التنفيذ.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/#contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 font-semibold transition hover:bg-blue-400">
                ناقش تصميم وتطوير موقعك
                <ArrowUpLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/projects" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/15 px-7 py-3.5 font-semibold text-white/85 transition hover:bg-white/[0.06]">
                راجع المشروعات المنشورة
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
