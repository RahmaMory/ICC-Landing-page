import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, WalletCards } from "lucide-react"
import { Link } from "react-router-dom"
import { websiteDesignCostPost } from "../data/blogPosts"

const articleFaqs = [
  {
    question: "ما تكلفة تصميم موقع إلكتروني في مصر؟",
    answer:
      "تختلف التكلفة حسب نوع الموقع وعدد الصفحات والتصميم والخصائص ولوحة التحكم والتكاملات المطلوبة. تحدد ICC السعر بعد فهم الاحتياجات وإعداد نطاق عمل واضح، بدلًا من استخدام رقم واحد لمشروعات مختلفة.",
  },
  {
    question: "هل يمكن معرفة السعر قبل بدء المشروع؟",
    answer:
      "نعم. بعد مناقشة الاحتياجات يحصل العميل على عرض يوضح التكلفة والخدمات المشمولة ومدة التنفيذ ومراحل العمل والسداد قبل بدء التنفيذ.",
  },
  {
    question: "كم يستغرق تنفيذ موقع شركة؟",
    answer:
      "قد يبدأ تنفيذ الموقع البسيط من 7 إلى 10 أيام عمل بعد اكتمال المتطلبات والمحتوى والموافقات. المواقع متعددة الصفحات أو التي تحتوي على خصائص برمجية تستغرق غالبًا من أسبوعين إلى ثلاثة أسابيع، بينما تحتاج الأنظمة الأكثر تعقيدًا إلى مدة أطول.",
  },
  {
    question: "هل تشمل الخدمة اختبار الموقع؟",
    answer:
      "نعم، تمر الصفحات والنماذج والخصائص باختبارات تتناسب مع طبيعة المشروع، مع مراجعة التجاوب على الأجهزة واكتشاف الأخطاء البرمجية ومعالجتها قبل الإطلاق.",
  },
  {
    question: "هل يمكن تقسيم قيمة المشروع على دفعات؟",
    answer:
      "يمكن الاتفاق على خطة سداد مرتبطة بمراحل التنفيذ وفق نطاق المشروع، ويتم توضيح المواعيد وطريقة السداد داخل العرض والاتفاق قبل البدء.",
  },
  {
    question: "هل يشمل السعر الدومين والاستضافة؟",
    answer:
      "يعتمد ذلك على الباقة والاتفاق. توضح ICC داخل العرض ما إذا كانت خدمات إعداد الدومين والاستضافة مشمولة أو منفصلة، مع بقاء حسابات الاستضافة والدومين مملوكة للعميل عند إعدادها باسمه.",
  },
  {
    question: "هل يمكن إضافة خصائص جديدة بعد إطلاق الموقع؟",
    answer:
      "نعم، يمكن إضافة صفحات أو وظائف جديدة عندما تكون البنية التقنية مناسبة للتوسع. لذلك من المهم مناقشة خطط التطوير المتوقعة من بداية المشروع.",
  },
  {
    question: "هل تصميم الموقع يضمن الظهور في النتائج الأولى؟",
    answer:
      "لا توجد شركة تستطيع ضمان ترتيب ثابت في جوجل. يمكن بناء الموقع وتهيئته بطريقة سليمة، ثم دعمه بمحتوى مفيد وأداء جيد وفهرسة صحيحة وربط داخلي ومتابعة مستمرة.",
  },
]

const articleStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.icc-collab.com/ar/blog/website-design-cost-egypt#article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.icc-collab.com/ar/blog/website-design-cost-egypt",
      },
      headline: websiteDesignCostPost.title,
      description: websiteDesignCostPost.excerpt,
      image: "https://www.icc-collab.com/icc-social-preview.png",
      datePublished: websiteDesignCostPost.publishedDate,
      dateModified: websiteDesignCostPost.updatedDate,
      inLanguage: "ar-EG",
      keywords: websiteDesignCostPost.keywords.join(", "),
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
          name: "الرئيسية",
          item: "https://www.icc-collab.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "المدونة العربية",
          item: "https://www.icc-collab.com/ar/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: websiteDesignCostPost.title,
          item: "https://www.icc-collab.com/ar/blog/website-design-cost-egypt",
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
const headingClass = "text-3xl font-bold leading-relaxed text-white sm:text-4xl"
const paragraphClass = "mt-5 text-lg leading-9 text-white/72"

export default function WebsiteDesignCostArticle() {
  return (
    <main dir="rtl" lang="ar" className="min-h-screen bg-[#050914] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      <article>
        <header className="relative overflow-hidden border-b border-white/8 px-6 pb-16 pt-16 sm:pb-20 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(37,99,235,0.25),transparent_32%),radial-gradient(circle_at_15%_42%,rgba(6,182,212,0.12),transparent_30%)]" />
          <div className="relative mx-auto max-w-5xl">
            <nav aria-label="مسار التنقل" className="mb-10 text-sm text-white/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="transition hover:text-cyan-300">الرئيسية</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link to="/ar/blog" className="transition hover:text-cyan-300">المدونة</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="max-w-72 truncate text-white/80">تكلفة تصميم موقع إلكتروني</li>
              </ol>
            </nav>

            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-sm font-semibold text-cyan-300">
              {websiteDesignCostPost.category}
            </span>
            <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.4] tracking-tight sm:text-5xl lg:text-6xl">
              تكلفة تصميم موقع إلكتروني في مصر 2026: الأسعار والعوامل ومدة التنفيذ
            </h1>
            <p className="mt-7 max-w-4xl text-xl leading-10 text-white/68">
              ما الذي تدفع مقابله فعلًا عند تنفيذ موقع؟ دليل واضح يساعدك على مقارنة
              العروض، وفهم مدة العمل والخدمات والاختبارات التي يجب الاتفاق عليها قبل البداية.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/52">
              <span>إعداد ومراجعة فريق <bdi>ICC — IO Code Company</bdi></span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                نُشر في <time dateTime={websiteDesignCostPost.publishedDate}>{websiteDesignCostPost.publishedLabel}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                {websiteDesignCostPost.readingTime}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="min-w-0 space-y-14">
            <section aria-label="مقدمة المقال">
              <p className="text-xl leading-10 text-white/82">
                عند التفكير في إنشاء موقع جديد، يكون السؤال الأول غالبًا: ما تكلفة
                تصميم موقع إلكتروني في مصر؟ والإجابة الصادقة أن الرقم لا يُحدد من
                عدد الصفحات وحده. موقع تعريفي يعرض خدمات شركة يختلف عن متجر يستقبل
                الطلبات، وكلاهما يختلف عن منصة تحتوي على مستخدمين وصلاحيات ومدفوعات
                وتكاملات مع أنظمة أخرى.
              </p>
              <p className={paragraphClass}>
                في <bdi>ICC — IO Code Company</bdi> نبدأ بفهم النشاط والهدف والجمهور
                والخصائص المطلوبة، ثم نحدد نطاق التنفيذ. بهذه الطريقة يعرف العميل ما
                الذي سيحصل عليه، ولا يدفع مقابل إضافات لا يحتاج إليها أو يكتشف بعد
                البدء أن أجزاء أساسية لم تكن ضمن العرض.
              </p>

              <aside className="mt-9 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.07] p-7 sm:p-8" aria-labelledby="quick-answer-title">
                <h2 id="quick-answer-title" className="text-2xl font-bold text-cyan-200">الإجابة المختصرة</h2>
                <ul className="mt-5 space-y-4 text-base leading-8 text-white/75">
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />لا يوجد سعر واحد يناسب كل المواقع؛ التكلفة تتبع نطاق العمل.</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />قد يبدأ الموقع البسيط من 7 إلى 10 أيام عمل.</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />المواقع متعددة الصفحات أو ذات الوظائف البرمجية تستغرق غالبًا من أسبوعين إلى ثلاثة أسابيع.</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />الأنظمة الأكثر تعقيدًا تحتاج إلى مراحل ومدة أطول.</li>
                </ul>
              </aside>
            </section>

            <section id="fixed-price" className={sectionClass}>
              <h2 className={headingClass}>هل يوجد سعر ثابت لتصميم المواقع؟</h2>
              <p className={paragraphClass}>
                يمكن وضع أسعار بداية أو باقات تساعد العميل على تكوين تصور أولي، لكن
                السعر النهائي يحتاج إلى متطلبات واضحة. شركتان قد تطلبان موقعًا من ست
                صفحات، ومع ذلك تختلف التكلفة لأن إحداهما تحتاج تصميمًا مخصصًا بلغتين،
                بينما تعتمد الأخرى على محتوى بسيط ونموذج تواصل فقط.
              </p>
              <p className={paragraphClass}>
                السعر التنافسي لا يعني تنفيذ أرخص حل مهما كانت نتيجته. المقصود هو
                اختيار التقنيات والخدمات المناسبة، وتوضيح ما يشمله العرض، وعدم إضافة
                تكلفة لا تخدم هدف المشروع. ويمكن الاطلاع على
                {" "}<Link to="/#pricing" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">أسعار البداية الحالية</Link>{" "}
                مع ملاحظة أن النطاق النهائي يُعتمد بعد المناقشة.
              </p>
            </section>

            <section id="website-types" className={sectionClass}>
              <h2 className={headingClass}>نوع الموقع يغير التكلفة والمدة</h2>
              <p className={paragraphClass}>
                قبل مقارنة العروض، حدد نوع الحل الذي يحتاجه نشاطك. أحيانًا تكفي صفحة
                هبوط مركزة، وأحيانًا تكون الحاجة الفعلية إلى موقع شركة متكامل أو متجر
                أو نظام مخصص.
              </p>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[56rem] border-collapse text-right">
                  <thead className="bg-white/[0.06] text-white">
                    <tr>
                      <th className="px-5 py-4 font-semibold">نوع المشروع</th>
                      <th className="px-5 py-4 font-semibold">الاحتياج المعتاد</th>
                      <th className="px-5 py-4 font-semibold">ما يؤثر في التكلفة</th>
                      <th className="px-5 py-4 font-semibold">مستوى التكلفة المعتاد</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8 text-white/68">
                    <tr><td className="px-5 py-4 font-semibold text-white">صفحة هبوط</td><td className="px-5 py-4">خدمة أو حملة واحدة</td><td className="px-5 py-4">التصميم، المحتوى، النماذج والتكاملات</td><td className="px-5 py-4">الأقل عادةً</td></tr>
                    <tr><td className="px-5 py-4 font-semibold text-white">موقع شركة</td><td className="px-5 py-4">عرض الهوية والخدمات والأعمال والتواصل</td><td className="px-5 py-4">عدد الصفحات واللغات وإدارة المحتوى</td><td className="px-5 py-4">منخفضة إلى متوسطة</td></tr>
                    <tr><td className="px-5 py-4 font-semibold text-white">متجر إلكتروني</td><td className="px-5 py-4">منتجات وطلبات ودفع وشحن</td><td className="px-5 py-4">حجم الكتالوج وطرق الدفع والإدارة</td><td className="px-5 py-4">متوسطة إلى مرتفعة</td></tr>
                    <tr><td className="px-5 py-4 font-semibold text-white">منصة أو نظام مخصص</td><td className="px-5 py-4">مستخدمون وصلاحيات وعمليات مترابطة</td><td className="px-5 py-4">قواعد العمل والبيانات والتقارير والتكاملات</td><td className="px-5 py-4">تُحسب حسب النطاق</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/48">
                المقارنة توضح مستوى الاستثمار النسبي، وليست قائمة أسعار ثابتة؛ لأن
                مشروعين من النوع نفسه قد يختلفان في الصفحات والوظائف والتكاملات.
              </p>
            </section>

            <section id="cost-factors" className={sectionClass}>
              <h2 className={headingClass}>ما العوامل التي تحدد تكلفة تصميم موقع إلكتروني في مصر؟</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  ["1. عدد الصفحات وطبيعتها", "الصفحات المبنية على قالب متكرر لا تحتاج إلى الجهد نفسه الذي تحتاجه صفحة بخريطة محتوى وتصميم ووظيفة خاصة."],
                  ["2. تصميم UI/UX", "التصميم لا يقتصر على الألوان. يشمل ترتيب المحتوى، ومسار الزائر، والنماذج الأولية، وتجربة الاستخدام على الشاشات المختلفة."],
                  ["3. الخصائص البرمجية", "الحجز والدفع والحسابات والصلاحيات والإشعارات والتقارير ولوحات التحكم تزيد وقت التحليل والتطوير والاختبار."],
                  ["4. لوحة التحكم وقاعدة البيانات", "إدارة المحتوى والعملاء والطلبات والبيانات تحتاج بنية منظمة وآمنة وقابلة للتوسع، وليست مجرد صفحات أمامية."],
                  ["5. اللغات والمحتوى", "المواقع متعددة اللغات تحتاج تخطيطًا للمحتوى واتجاه النص والروابط والبيانات الوصفية لكل لغة."],
                  ["6. التكاملات الخارجية", "الربط مع بوابات الدفع أو الشحن أو CRM أو البريد أو خدمات الطرف الثالث يحتاج إعدادًا واختبارًا ومتابعة."],
                  ["7. الأداء والأمان", "ضغط الصور، وسرعة الصفحات، والحماية، والصلاحيات، والنسخ الاحتياطي تختلف بحسب حساسية المشروع وطريقة تشغيله."],
                  ["8. الدعم بعد الإطلاق", "تحدد طبيعة التحديثات والصيانة والمدة المتفق عليها ما إذا كان الدعم جزءًا من العرض أو خدمة مستقلة."],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="mt-3 leading-8 text-white/62">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="ready-vs-custom" className={sectionClass}>
              <h2 className={headingClass}>موقع جاهز أم Custom Development؟</h2>
              <p className={paragraphClass}>
                الموقع الجاهز يعتمد على قالب أو نظام موجود مسبقًا ويتم ضبطه ليناسب
                النشاط. يكون مناسبًا عندما تكون المتطلبات معتادة والميزانية والوقت
                محدودين. أما التطوير المخصص فيبدأ من رحلة المستخدم وقواعد العمل
                والخصائص المطلوبة، ويعطي مرونة أكبر عندما لا تكفي الحلول الجاهزة.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <h3 className="text-xl font-bold text-white">الحل الجاهز أو القالب</h3>
                  <ul className="mt-4 space-y-3 leading-8 text-white/64">
                    <li>• أسرع وأقل تكلفة في الاحتياجات البسيطة.</li>
                    <li>• مناسب للمحتوى والوظائف المعتادة.</li>
                    <li>• التخصيص والتوسع مرتبطان بحدود القالب والمنصة.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.055] p-6">
                  <h3 className="text-xl font-bold text-cyan-200">التطوير المخصص</h3>
                  <ul className="mt-4 space-y-3 leading-8 text-white/68">
                    <li>• مصمم حول تجربة المستخدم وعمليات النشاط.</li>
                    <li>• مرونة أكبر في التكاملات والصلاحيات والبيانات.</li>
                    <li>• يحتاج تحليلًا وتطويرًا واختبارات أكثر.</li>
                  </ul>
                </div>
              </div>
              <p className={paragraphClass}>
                الاختيار الأفضل ليس المخصص دائمًا ولا الجاهز دائمًا. الحل الصحيح هو
                الذي يحقق الهدف الحالي، ولا يمنع التوسع المتوقع، ولا يحمل المشروع
                تكلفة وتعقيدًا لا يحتاج إليهما.
              </p>
            </section>

            <section id="included-services" className={sectionClass}>
              <h2 className={headingClass}>ماذا تشمل خدمة تصميم الموقع مع ICC؟</h2>
              <p className={paragraphClass}>
                تختلف التفاصيل حسب طبيعة المشروع، لكن التنفيذ يمر عادة بأربع مراحل
                واضحة: فهم المتطلبات، ثم التصميم، ثم البرمجة، ثم الاختبار والإطلاق.
                داخل كل مرحلة يتم الاتفاق على المخرجات المطلوبة بدلًا من الاعتماد على
                وصف عام مثل «موقع كامل».
              </p>
              <ul className="mt-7 grid gap-3 text-lg leading-8 text-white/72 sm:grid-cols-2">
                {[
                  "دراسة النشاط والهدف والجمهور.",
                  "تحديد الصفحات والخصائص ونطاق العمل.",
                  "تخطيط تجربة المستخدم وتصميم UI/UX.",
                  "تطوير الواجهة الأمامية المتجاوبة.",
                  "برمجة الـBackend والوظائف المطلوبة.",
                  "تصميم وربط قاعدة البيانات.",
                  "إنشاء لوحة التحكم عند الحاجة.",
                  "اختبار الصفحات والنماذج والخصائص.",
                  "معالجة الأخطاء وتجهيز بيئة التشغيل.",
                  "تهيئة أساسية لمحركات البحث.",
                  "شرح الاستخدام والتسليم.",
                  "الدعم وفق البنود المتفق عليها.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-white/[0.025] px-4 py-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className={paragraphClass}>
                يمكنك مراجعة تفاصيل
                {" "}<Link to="/services/mvp-website" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">تطوير مواقع ومنتجات MVP</Link>{" "}
                أو الاطلاع على
                {" "}<Link to="/projects" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">نماذج من المشروعات المنشورة</Link>{" "}
                لفهم الفرق بين أنواع التنفيذ.
              </p>
            </section>

            <section id="timeline" className={sectionClass}>
              <h2 className={headingClass}>كم تستغرق مدة تصميم الموقع؟</h2>
              <div className="mt-7 rounded-3xl border border-blue-400/20 bg-blue-500/[0.08] p-7 sm:p-8">
                <p className="text-xl font-semibold leading-10 text-white">
                  قد يبدأ تنفيذ الموقع البسيط من 7 إلى 10 أيام عمل، بينما تستغرق
                  المواقع متعددة الصفحات أو التي تحتوي على خصائص برمجية غالبًا من
                  أسبوعين إلى ثلاثة أسابيع، وتحتاج الأنظمة الأكثر تعقيدًا إلى مدة أطول.
                </p>
              </div>
              <p className={paragraphClass}>
                تبدأ المدة الفعلية بعد اكتمال المتطلبات واستلام المحتوى والموافقات
                اللازمة. وإذا احتاج المشروع حسابات مستخدمين أو لوحة تحكم متقدمة أو
                متجرًا أو حجوزات أو دفعًا إلكترونيًا أو ربطًا مع أنظمة خارجية، فيتم
                تقسيمه إلى مراحل وتحديد مدة كل مرحلة.
              </p>
              <p className={paragraphClass}>
                الهدف ليس إنهاء الصفحات بأسرع وقت فقط، بل إطلاق موقع مستقر يمكن
                استخدامه وتطويره. تأخر المحتوى أو الموافقات أو تغير نطاق المشروع بعد
                البدء يؤثر بطبيعته في موعد التسليم.
              </p>
            </section>

            <section id="team" className={sectionClass}>
              <h2 className={headingClass}>من يعمل على تنفيذ المشروع؟</h2>
              <p className={paragraphClass}>
                نجاح المشروع يحتاج إلى التخصص المناسب في كل مرحلة. ووفق حجم العمل قد
                يشارك محلل متطلبات أو مدير مشروع، ومتخصص UI/UX، ومطور Frontend، ومطور
                Backend، ومتخصص قاعدة بيانات، ومتخصص QA وTesting، إلى جانب DevOps
                والأمان وSEO والمحتوى عند الحاجة.
              </p>
              <p className={paragraphClass}>
                لا يعني ذلك أن كل مشروع يحتاج فريقًا كبيرًا بالعدد نفسه؛ بل يتم تحديد
                الأدوار بناءً على المتطلبات. الموقع التعريفي البسيط لا يمر بالتعقيد
                نفسه الذي يحتاجه نظام يتعامل مع صلاحيات وعمليات مالية وبيانات حساسة.
              </p>
            </section>

            <section id="testing" className={sectionClass}>
              <h2 className={headingClass}>ما الاختبارات التي تتم قبل التسليم؟</h2>
              <p className={paragraphClass}>
                اكتمال التصميم والبرمجة لا يعني أن الموقع أصبح جاهزًا فورًا. يجب
                تجربة المسارات التي سيستخدمها الزائر والتأكد من أن البيانات تنتقل
                والوظائف تعمل كما تم الاتفاق.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "الروابط والقوائم والأزرار.",
                  "نماذج التواصل وإرسال البيانات.",
                  "الموبايل والتابلت والكمبيوتر.",
                  "المتصفحات الرئيسية.",
                  "تسجيل الدخول والصلاحيات عند وجودها.",
                  "الحجز والطلب والدفع عند وجودها.",
                  "قواعد التحقق من البيانات.",
                  "الأداء وتحميل الصفحات.",
                  "الأخطاء البرمجية ومعالجتها.",
                  "اختبار بعد الرفع على بيئة التشغيل.",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-white/70">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section id="payment" className={sectionClass}>
              <h2 className={headingClass}>الأسعار التنافسية وطرق الدفع المرنة</h2>
              <div className="mt-7 flex gap-5 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-8">
                <WalletCards className="mt-1 h-8 w-8 shrink-0 text-cyan-300" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold">كل التفاصيل تُكتب قبل بدء العمل</h3>
                  <p className="mt-3 leading-8 text-white/65">
                    توفر ICC طرق دفع متعددة وفق المتاح وقت التعاقد، ويمكن الاتفاق على
                    دفعات مرتبطة بمراحل مثل بدء المشروع واعتماد التصميم وإنجاز مرحلة
                    أساسية والتسليم. يوضح العرض قيمة المشروع وطريقة السداد والخدمات
                    المشمولة حتى تكون الالتزامات واضحة للطرفين.
                  </p>
                </div>
              </div>
            </section>

            <section id="ongoing-costs" className={sectionClass}>
              <h2 className={headingClass}>تكاليف الدومين والاستضافة والصيانة والتطوير</h2>
              <p className={paragraphClass}>
                تكلفة تنفيذ الموقع ليست بالضرورة آخر تكلفة. توجد خدمات تشغيل دورية
                أو إضافية يجب معرفتها قبل التعاقد، حتى لا يُبنى القرار على سعر التصميم
                وحده.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  ["الدومين", "اسم الموقع الذي يتم تجديده عادةً بصورة دورية، ويُفضل تسجيله في حساب يملكه العميل."],
                  ["الاستضافة", "تختلف حسب الزيارات والتخزين وقاعدة البيانات والنسخ الاحتياطي ومستوى الأداء المطلوب."],
                  ["الصيانة والدعم", "قد تشمل المتابعة والتحديثات وإصلاح الأخطاء وفق مدة وبنود متفق عليها."],
                  ["التطوير المستقبلي", "إضافة صفحات أو لغات أو خصائص وتكاملات جديدة تُحسب كنطاق عمل جديد عند الحاجة."],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="mt-3 leading-8 text-white/62">{description}</p>
                  </div>
                ))}
              </div>
              <p className={paragraphClass}>
                توضح ICC في العرض ما إذا كان إعداد الدومين والاستضافة مشمولًا أو
                منفصلًا، وما مدة الدعم بعد الإطلاق. بهذه الطريقة يعرف العميل تكلفة
                البداية والتشغيل والتطوير بدلًا من اكتشافها بعد التسليم.
              </p>
            </section>

            <section id="estimate" className={sectionClass}>
              <h2 className={headingClass}>كيف تحصل على تقدير أقرب لتكلفة موقعك؟</h2>
              <p className={paragraphClass}>
                لا تحتاج إلى كتابة ملف تقني طويل. إجابات واضحة عن الأسئلة التالية
                تساعد الفريق على تقديم تصور أدق وتجنب افتراضات قد تغير السعر لاحقًا:
              </p>
              <ol className="mt-7 grid gap-3 text-lg leading-8 text-white/72 sm:grid-cols-2">
                {[
                  "ما الهدف الأساسي من الموقع؟",
                  "من الجمهور الذي سيستخدمه؟",
                  "ما الصفحات الرئيسية المطلوبة؟",
                  "هل توجد حجوزات أو مدفوعات أو حسابات؟",
                  "هل يحتاج إلى لغة أخرى؟",
                  "هل المحتوى والصور جاهزة؟",
                  "هل توجد أنظمة خارجية يجب ربطها؟",
                  "ما الموعد المستهدف للإطلاق؟",
                ].map((item, index) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-white/[0.025] px-4 py-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-300">{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>

            <section id="real-work" className={sectionClass}>
              <h2 className={headingClass}>لماذا لا تتشابه عروض المشروعات؟ أمثلة من أعمال ICC</h2>
              <p className={paragraphClass}>
                توضح المشروعات المنشورة الفرق عمليًا. منصة عقارية ثنائية اللغة تضم
                بحثًا وحسابات ولوحة إدارة تعتمد على الصلاحيات تحتاج تحليلًا واختبارات
                مختلفة عن موقع معماري يركز على عرض الصور والمشروعات، أو منصة تعليمية
                تحتوي على حساب متعلم ومسار للوصول إلى المحتوى.
              </p>
              <p className={paragraphClass}>
                لذلك لا تُقاس تكلفة المشروع باسمه فقط. كلمة «موقع» يمكن أن تصف صفحة
                واحدة، ويمكن أن تصف منتجًا كاملًا يدير جزءًا من عمليات الشركة. راجع
                {" "}<Link to="/projects" className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">سابقة أعمال ICC ودراسات الحالة المختصرة</Link>{" "}
                لمعرفة ما تم تنفيذه في أنواع مختلفة من الأعمال.
              </p>
            </section>

            <section id="cheapest" className={sectionClass}>
              <h2 className={headingClass}>لماذا لا يكون السعر الأرخص هو الاختيار الأفضل دائمًا؟</h2>
              <p className={paragraphClass}>
                العرض الأرخص قد يكون مناسبًا إذا كان نطاقه يطابق احتياجك فعلًا. لكنه
                يتحول إلى تكلفة إضافية عندما يكون الموقع بطيئًا أو غير متوافق مع
                الهاتف أو صعب التعديل أو مليئًا بالأخطاء، أو عندما لا يملك العميل
                حسابات الدومين والاستضافة التي يعتمد عليها المشروع.
              </p>
              <p className={paragraphClass}>
                عند مقارنة أسعار تصميم المواقع في مصر، قارن ما يشمله كل عرض: التصميم،
                والخصائص، والاختبارات، وملكية الحسابات، والدعم، وإمكانية التطوير. الموقع
                الجيد ليس مجرد شكل على الإنترنت؛ بل أداة لعرض الخدمات وبناء الثقة
                واستقبال العملاء ودعم عمليات النشاط.
              </p>
            </section>

            <section id="choose-company" className={sectionClass}>
              <h2 className={headingClass}>كيف تختار شركة برمجة مناسبة؟</h2>
              <p className={paragraphClass}>
                ابدأ بمراجعة أعمال حقيقية قريبة من نوع مشروعك، ثم اطلب عرضًا يحدد
                الصفحات والخصائص والمراحل والمدة وما بعد الإطلاق. العرض الواضح أهم من
                كثرة الوعود، والشركة المناسبة يجب أن تستطيع شرح قراراتها بلغة مفهومة.
              </p>
              <ul className="mt-7 grid gap-3 text-lg leading-8 text-white/72 sm:grid-cols-2">
                {[
                  "سابقة أعمال يمكن فتحها وتجربتها.",
                  "فهم واضح للهدف والجمهور قبل التسعير.",
                  "نطاق مكتوب يوضح المشمول وغير المشمول.",
                  "مراحل اعتماد ومراجعات ومسؤوليات واضحة.",
                  "اختبارات قبل الإطلاق ودعم متفق عليه.",
                  "ملكية واضحة للدومين والاستضافة والحسابات.",
                  "قدرة على التوسع بدل إعادة المشروع من الصفر.",
                  "تواصل منتظم خلال مراحل التنفيذ.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-white/[0.025] px-4 py-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="why-icc" className={sectionClass}>
              <h2 className={headingClass}>لماذا تختار ICC لتنفيذ موقعك؟</h2>
              <p className={paragraphClass}>
                تبدأ <bdi>ICC — IO Code Company</bdi> بفهم المشروع قبل اقتراح الحل،
                ثم تحدد النطاق والتخصصات والمراحل المطلوبة. ويشمل أسلوب العمل تصميمًا
                مناسبًا للهوية والجمهور، وواجهات متجاوبة، واختبارات قبل الإطلاق، وعرضًا
                واضحًا للخدمات والمدة والسداد، مع إمكانية التطوير مستقبلًا وفق البنية
                المتفق عليها.
              </p>
              <p className={paragraphClass}>
                الهدف هو تسليم حل يخدم النشاط فعليًا، وليس زيادة عدد الصفحات أو
                الخصائص من دون سبب. ويمكن بدء المناقشة باستشارة فنية أولية لتحديد ما
                يحتاجه المشروع وما يمكن تأجيله إلى مرحلة لاحقة.
              </p>
            </section>

            <section id="faq" className={sectionClass}>
              <h2 className={headingClass}>أسئلة شائعة عن تكلفة تصميم المواقع</h2>
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
              <p className="text-sm font-semibold text-cyan-300">الخطوة التالية</p>
              <h2 id="article-cta-title" className="mt-3 text-3xl font-bold leading-relaxed">احصل على تصور يناسب مشروعك بدلًا من باقة عامة</h2>
              <p className="mt-4 max-w-3xl text-lg leading-9 text-white/68">
                شاركنا فكرة المشروع والصفحات والخصائص المطلوبة. سنساعدك على تحديد
                النطاق والمدة المتوقعة وخطة السداد والتكلفة التنافسية، من دون إضافة
                خدمات لا يحتاج إليها نشاطك.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold transition hover:bg-blue-400">
                  تواصل مع فريق ICC
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/projects" className="inline-flex items-center rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white/85 transition hover:bg-white/7">
                  شاهد سابقة الأعمال
                </Link>
              </div>
            </section>
          </div>

          <aside className="hidden lg:sticky lg:top-28 lg:block" aria-label="محتويات المقال">
            <div className="rounded-2xl border border-white/10 bg-[#09111f]/95 p-6 backdrop-blur-xl">
              <h2 className="font-bold text-white">محتويات المقال</h2>
              <nav className="mt-5">
                <ul className="space-y-3 text-sm leading-6 text-white/55">
                  <li><a href="#fixed-price" className="transition hover:text-cyan-300">هل يوجد سعر ثابت؟</a></li>
                  <li><a href="#website-types" className="transition hover:text-cyan-300">أنواع المواقع</a></li>
                  <li><a href="#cost-factors" className="transition hover:text-cyan-300">عوامل تحديد التكلفة</a></li>
                  <li><a href="#ready-vs-custom" className="transition hover:text-cyan-300">الجاهز أم المخصص؟</a></li>
                  <li><a href="#included-services" className="transition hover:text-cyan-300">ما الذي تشمل الخدمة؟</a></li>
                  <li><a href="#timeline" className="transition hover:text-cyan-300">مدة التنفيذ</a></li>
                  <li><a href="#testing" className="transition hover:text-cyan-300">الاختبارات</a></li>
                  <li><a href="#payment" className="transition hover:text-cyan-300">الدفع والسداد</a></li>
                  <li><a href="#ongoing-costs" className="transition hover:text-cyan-300">تكاليف التشغيل</a></li>
                  <li><a href="#estimate" className="transition hover:text-cyan-300">الحصول على تقدير</a></li>
                  <li><a href="#real-work" className="transition hover:text-cyan-300">أمثلة من الأعمال</a></li>
                  <li><a href="#choose-company" className="transition hover:text-cyan-300">اختيار شركة البرمجة</a></li>
                  <li><a href="#faq" className="transition hover:text-cyan-300">الأسئلة الشائعة</a></li>
                </ul>
              </nav>
              <Link to="/#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white transition hover:bg-blue-400">
                اطلب تقدير مشروعك
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
