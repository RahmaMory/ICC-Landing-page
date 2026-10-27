import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import routeMetadataJson from "../data/routeMetadata.json"

const siteUrl = "https://www.icc-collab.com"

type RouteMetadata = {
  title: string
  description: string
  language?: string
  direction?: "ltr" | "rtl"
  locale?: string
  ogType?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  alternateLanguages?: Array<{
    hrefLang: string
    href: string
  }>
}

const routeMetadata = routeMetadataJson as Record<string, RouteMetadata>

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function syncOptionalMeta(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content?: string,
) {
  if (content) {
    setMeta(selector, attribute, key, content)
    return
  }

  document.head.querySelector(selector)?.remove()
}

function syncAlternateLanguages(alternates: RouteMetadata["alternateLanguages"]) {
  document.head
    .querySelectorAll('link[data-icc-hreflang="true"]')
    .forEach((element) => element.remove())

  alternates?.forEach((alternate) => {
    const link = document.createElement("link")
    link.rel = "alternate"
    link.hreflang = alternate.hrefLang
    link.href = alternate.href
    link.dataset.iccHreflang = "true"
    document.head.appendChild(link)
  })
}

export default function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = routeMetadata[pathname]

    const title = metadata?.title || "Page Not Found | ICC — IO Code Company"
    const description = metadata?.description || "The requested page could not be found on the ICC — IO Code Company website."
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`
    const socialImage = `${siteUrl}/icc-social-preview.png`
    const language = metadata?.language || "en"
    const direction = metadata?.direction || "ltr"
    const locale = metadata?.locale || "en_US"
    const ogType = metadata?.ogType || "website"

    document.documentElement.lang = language
    document.documentElement.dir = direction

    document.title = title
    setMeta('meta[name="description"]', "name", "description", description)
    setMeta('meta[name="robots"]', "name", "robots", metadata ? "index, follow" : "noindex, nofollow")
    setMeta('meta[property="og:title"]', "property", "og:title", title)
    setMeta('meta[property="og:description"]', "property", "og:description", description)
    setMeta('meta[property="og:type"]', "property", "og:type", ogType)
    setMeta('meta[property="og:locale"]', "property", "og:locale", locale)
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl)
    setMeta('meta[property="og:image"]', "property", "og:image", socialImage)
    setMeta('meta[property="og:image:width"]', "property", "og:image:width", "1200")
    setMeta('meta[property="og:image:height"]', "property", "og:image:height", "630")
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", "ICC — IO Code Company | You Imagine. We Build.")
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image")
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title)
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description)
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", socialImage)
    syncOptionalMeta(
      'meta[property="article:published_time"]',
      "property",
      "article:published_time",
      metadata?.publishedTime,
    )
    syncOptionalMeta(
      'meta[property="article:modified_time"]',
      "property",
      "article:modified_time",
      metadata?.modifiedTime,
    )

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
    syncAlternateLanguages(metadata?.alternateLanguages)
  }, [pathname])

  return null
}
