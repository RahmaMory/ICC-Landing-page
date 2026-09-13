import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ICCLogo from "../assets/logos/ICC.png"
import { industries } from "../data/industries"
import { projects } from "../data/projects"

const siteUrl = "https://www.icc-collab.com"

const routeMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ICC — IO Code Company | Software Development & Digital Solutions",
    description: "ICC — IO Code Company builds websites, mobile apps, e-commerce stores, dashboards, MVPs, games, and AI automation solutions.",
  },
  "/services": {
    title: "Software Development Services | ICC — IO Code Company",
    description: "Explore website, mobile app, e-commerce, dashboard, game development, and AI automation services from ICC — IO Code Company.",
  },
  "/about": {
    title: "About ICC — IO Code Company | Software Development Team",
    description: "Meet ICC — IO Code Company, a software team based in Sadat City with branches in 6th of October City.",
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
    description: "Conversion-focused landing page design and development for startups and growing businesses.",
  },
  "/services/mvp-website": {
    title: "MVP Website Development | ICC — IO Code Company",
    description: "Launch a focused MVP website quickly, validate your idea, and build a foundation ready to scale.",
  },
  "/services/mobile-app": {
    title: "Mobile App Development | ICC — IO Code Company",
    description: "Design and development of useful, scalable mobile applications for modern businesses and products.",
  },
  "/services/game": {
    title: "Game Development | ICC — IO Code Company",
    description: "Upcoming game development solutions for brands, products, and interactive digital experiences.",
  },
  "/services/shopify": {
    title: "Shopify Automation | ICC — IO Code Company",
    description: "Custom Shopify systems and automation for orders, customer support, inventory, reporting, and growth.",
  },
  "/services/ecommerce": {
    title: "E-commerce Development | ICC — IO Code Company",
    description: "Fast, secure, conversion-focused online stores designed around buying behavior and business growth.",
  },
  "/services/dashboard": {
    title: "Business Dashboard Development | ICC — IO Code Company",
    description: "Custom dashboards that turn business data into clear insights and faster decisions.",
  },
  "/services/ai-automation": {
    title: "AI Automation Services | ICC — IO Code Company",
    description: "AI automation systems that streamline operations, reduce manual work, and help businesses scale.",
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
    const socialImage = new URL(ICCLogo, siteUrl).href

    document.title = title
    setMeta('meta[name="description"]', "name", "description", description)
    setMeta('meta[property="og:title"]', "property", "og:title", title)
    setMeta('meta[property="og:description"]', "property", "og:description", description)
    setMeta('meta[property="og:type"]', "property", "og:type", "website")
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl)
    setMeta('meta[property="og:image"]', "property", "og:image", socialImage)
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
