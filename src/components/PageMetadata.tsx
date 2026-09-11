import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ICCLogo from "../assets/logos/ICC.png"
import { industries } from "../data/industries"
import { projects } from "../data/projects"

const siteUrl = "https://www.icc-collab.com"

const routeMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "IO Code Company (ICC) | Software Development & Digital Solutions",
    description: "IO Code Company (ICC) builds websites, mobile apps, e-commerce stores, dashboards, MVPs, games, and AI automation solutions.",
  },
  "/services": {
    title: "Software Development Services | IO Code Company (ICC)",
    description: "Explore website, mobile app, e-commerce, dashboard, game development, and AI automation services from IO Code Company (ICC).",
  },
  "/projects": {
    title: "Our Projects | IO Code Company (ICC)",
    description: "Explore selected websites, applications, dashboards, e-commerce stores, and digital products created by IO Code Company (ICC).",
  },
  "/privacy": {
    title: "Privacy Policy | IO Code Company (ICC)",
    description: "Learn how IO Code Company (ICC) handles website inquiries, ratings, project information, communications, and client data.",
  },
  "/terms": {
    title: "Terms & Conditions | IO Code Company (ICC)",
    description: "Read the service, project, payment, ownership, privacy, delivery, and support terms for IO Code Company (ICC).",
  },
  "/services/landing-page": {
    title: "Landing Page Development | IO Code Company (ICC)",
    description: "Conversion-focused landing page design and development for startups and growing businesses.",
  },
  "/services/mvp-website": {
    title: "MVP Website Development | IO Code Company (ICC)",
    description: "Launch a focused MVP website quickly, validate your idea, and build a foundation ready to scale.",
  },
  "/services/mobile-app": {
    title: "Mobile App Development | IO Code Company (ICC)",
    description: "Design and development of useful, scalable mobile applications for modern businesses and products.",
  },
  "/services/game": {
    title: "Game Development | IO Code Company (ICC)",
    description: "Upcoming game development solutions for brands, products, and interactive digital experiences.",
  },
  "/services/shopify": {
    title: "Shopify Automation | IO Code Company (ICC)",
    description: "Custom Shopify systems and automation for orders, customer support, inventory, reporting, and growth.",
  },
  "/services/ecommerce": {
    title: "E-commerce Development | IO Code Company (ICC)",
    description: "Fast, secure, conversion-focused online stores designed around buying behavior and business growth.",
  },
  "/services/dashboard": {
    title: "Business Dashboard Development | IO Code Company (ICC)",
    description: "Custom dashboards that turn business data into clear insights and faster decisions.",
  },
  "/services/ai-automation": {
    title: "AI Automation Services | IO Code Company (ICC)",
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
            title: `${project.title} | IO Code Company (ICC)`,
            description: project.desc || "Explore a project delivered by IO Code Company (ICC).",
          }
        : undefined
    }

    if (pathname.startsWith("/industry/")) {
      const industry = industries.find((item) => item.slug === pathname.split("/").pop())
      metadata = industry
        ? {
            title: `${industry.title} Software Solutions | IO Code Company (ICC)`,
            description: industry.description,
          }
        : undefined
    }

    const title = metadata?.title || "Page Not Found | IO Code Company (ICC)"
    const description = metadata?.description || "The requested page could not be found on the IO Code Company (ICC) website."
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
