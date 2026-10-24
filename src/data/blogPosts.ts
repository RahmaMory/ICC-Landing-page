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
      "دليل عملي لفهم ما يحدد تكلفة الموقع، وما الذي يجب أن يشمله عرض التنفيذ، والمدة المتوقعة للمواقع البسيطة والمشروعات الأكثر تعقيدًا.",
    category: "تصميم وتطوير المواقع",
    publishedDate: "2026-10-24",
    publishedLabel: "24 أكتوبر 2026",
    updatedDate: "2026-10-24",
    updatedLabel: "24 أكتوبر 2026",
    readingTime: "15 دقيقة قراءة",
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
