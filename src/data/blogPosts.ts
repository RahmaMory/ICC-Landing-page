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

export const englishBlogPosts: BlogPost[] = [
  {
    slug: "website-design-cost-egypt",
    href: "/blog/website-design-cost-egypt",
    title: "Website Design Cost in Egypt 2026: Pricing, Features & Development Timeline",
    excerpt:
      "A practical guide to indicative website design price ranges in Egypt, the scope behind each range, and the timelines and services businesses should clarify before development begins.",
    category: "Website Design & Development",
    publishedDate: "2026-10-27",
    publishedLabel: "October 27, 2026",
    updatedDate: "2026-10-27",
    updatedLabel: "October 27, 2026",
    readingTime: "15 min read",
    keywords: [
      "website design cost in Egypt",
      "website development prices in Egypt",
      "website design company in Egypt",
      "custom website development",
      "website development timeline",
    ],
  },
]

export const englishWebsiteDesignCostPost = englishBlogPosts[0]
