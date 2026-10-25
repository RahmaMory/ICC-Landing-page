export type BlogPost = {
  slug: string
  href: string
  title: string
  excerpt: string
  category: string
  publishedDate: string
  publishedLabel: string
  updatedDate: string
  updatedLabel: string
  readingTime: string
  keywords: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "website-design-cost-egypt",
    href: "/ar/blog/website-design-cost-egypt",
    title: "تكلفة تصميم موقع إلكتروني في مصر 2026: الأسعار والعوامل ومدة التنفيذ",
    excerpt:
      "نطاقات أسعار استرشادية لتصميم المواقع في مصر 2026، مع شرح ما يحدد التكلفة وما يشمله التنفيذ والمدة المتوقعة لكل نوع من المشروعات.",
    category: "تصميم وتطوير المواقع",
    publishedDate: "2026-10-24",
    publishedLabel: "24 أكتوبر 2026",
    updatedDate: "2026-10-25",
    updatedLabel: "25 أكتوبر 2026",
    readingTime: "16 دقيقة قراءة",
    keywords: [
      "تكلفة تصميم موقع إلكتروني في مصر",
      "أسعار تصميم المواقع في مصر",
      "سعر تصميم موقع في مصر",
      "شركة تصميم مواقع في مصر",
      "تصميم موقع إلكتروني احترافي",
    ],
  },
]

export const websiteDesignCostPost = blogPosts[0]
