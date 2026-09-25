import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { industries } from "../data/industries"
import { projects } from "../data/projects"

const siteUrl = "https://www.icc-collab.com"

const routeMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ICC — IO Code Company | Software Development & Digital Solutions",
    description: "ICC — IO Code Company designs and builds websites, mobile apps, e-commerce systems, dashboards, MVPs, and practical automation for growing businesses.",
  },
  "/services": {
    title: "Software Development Services | ICC — IO Code Company",
    description: "Explore complete website, mobile app, Shopify, custom e-commerce, dashboard, MVP, and automation services from ICC — IO Code Company.",
  },
  "/projects": {
    title: "Our Projects | ICC — IO Code Company",
    description: "Explore selected websites, applications, dashboards, e-commerce stores, and digital products created by ICC — IO Code Company.",
  },
  "/privacy": {
    title: "Privacy Policy | ICC — IO Code Company",
    description: "Learn how ICC — IO Code Company handles website inquiries, ratings, project information, communications, and client data.",
  },
  "/terms": {
    title: "Terms & Conditions | ICC — IO Code Company",
    description: "Read the service, project, payment, ownership, privacy, delivery, and support terms for ICC — IO Code Company.",
  },
  "/services/landing-page": {
    title: "Landing Page Development | ICC — IO Code Company",
    description: "Focused landing page strategy, design, development, integrations, SEO foundations, analytics setup, and launch support.",
  },
  "/services/mvp-website": {
    title: "MVP Website Development | ICC — IO Code Company",
    description: "Web MVP development with a responsive interface, backend, database, user access, admin tools, testing, and deployment.",
  },
  "/services/mobile-app": {
    title: "Mobile App Development | ICC — IO Code Company",
    description: "Native and cross-platform Android and iOS app development with UI/UX, backend, admin panel, testing, store launch support, and maintenance.",
  },
  "/services/game": {
    title: "Game Development | ICC — IO Code Company",
    description: "Upcoming game development solutions for brands, products, and interactive digital experiences.",
  },
  "/services/shopify": {
    title: "Shopify Store Development & Automation | ICC — IO Code Company",
    description: "Complete Shopify store strategy, design, development, product setup, payments, shipping, integrations, automation, launch, and support.",
  },
  "/services/ecommerce": {
    title: "E-commerce Development | ICC — IO Code Company",
    description: "Custom e-commerce systems with tailored catalogs, checkout, payments, shipping, admin workflows, integrations, launch, and support.",
  },
  "/services/dashboard": {
    title: "Business Dashboard Development | ICC — IO Code Company",
    description: "Custom business dashboards with connected data, role-based access, reports, exports, alerts, admin tools, and ongoing support.",
  },
  "/services/ai-automation": {
    title: "AI Automation Services | ICC — IO Code Company",
    description: "Practical AI and automation systems for repetitive tasks, customer support, documents, and connected business workflows.",
  },
}

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

export default function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    let metadata: { title: string; description: string } | undefined = routeMetadata[pathname]

    if (pathname.startsWith("/project/")) {
      const project = projects.find((item) => item.slug === pathname.split("/").pop())
      metadata = project
        ? {
            title: `${project.title} | ICC — IO Code Company`,
            description: project.desc || "Explore a project delivered by ICC — IO Code Company.",
          }
        : undefined
    }

    if (pathname.startsWith("/industry/")) {
      const industry = industries.find((item) => item.slug === pathname.split("/").pop())
      metadata = industry
        ? {
            title: `${industry.title} Software Solutions | ICC — IO Code Company`,
            description: industry.description,
          }
        : undefined
    }

    const title = metadata?.title || "Page Not Found | ICC — IO Code Company"
    const description = metadata?.description || "The requested page could not be found on the ICC — IO Code Company website."
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`
    const socialImage = `${siteUrl}/icc-social-preview.png`

    document.title = title
    setMeta('meta[name="description"]', "name", "description", description)
    setMeta('meta[property="og:title"]', "property", "og:title", title)
    setMeta('meta[property="og:description"]', "property", "og:description", description)
    setMeta('meta[property="og:type"]', "property", "og:type", "website")
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl)
    setMeta('meta[property="og:image"]', "property", "og:image", socialImage)
    setMeta('meta[property="og:image:width"]', "property", "og:image:width", "1733")
    setMeta('meta[property="og:image:height"]', "property", "og:image:height", "907")
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", "ICC — IO Code Company | You Imagine. We Build.")
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image")
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title)
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description)
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", socialImage)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [pathname])

  return null
}
