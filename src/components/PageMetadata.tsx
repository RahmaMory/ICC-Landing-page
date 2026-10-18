import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { industries } from "../data/industries"
import routeMetadataJson from "../data/routeMetadata.json"

const siteUrl = "https://www.icc-collab.com"

const routeMetadata: Record<string, { title: string; description: string }> = routeMetadataJson

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

    if (pathname.startsWith("/industry/")) {
      const industry = industries.find((item) => item.slug === pathname.split("/").pop())
      metadata = industry
        ? {
            title: `${industry.title} Digital Solutions | ICC — IO Code Company`,
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
    setMeta('meta[name="robots"]', "name", "robots", metadata ? "index, follow" : "noindex, nofollow")
    setMeta('meta[property="og:title"]', "property", "og:title", title)
    setMeta('meta[property="og:description"]', "property", "og:description", description)
    setMeta('meta[property="og:type"]', "property", "og:type", "website")
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl)
    setMeta('meta[property="og:image"]', "property", "og:image", socialImage)
    setMeta('meta[property="og:image:width"]', "property", "og:image:width", "1200")
    setMeta('meta[property="og:image:height"]', "property", "og:image:height", "630")
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
