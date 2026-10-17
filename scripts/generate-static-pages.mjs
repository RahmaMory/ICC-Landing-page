import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"

const root = process.cwd()
const siteUrl = "https://www.icc-collab.com"
const socialImage = `${siteUrl}/icc-social-preview.png`

const [template, staticMetadataText, projectsSource, industriesSource] = await Promise.all([
  readFile(join(root, "dist/index.html"), "utf8"),
  readFile(join(root, "src/data/routeMetadata.json"), "utf8"),
  readFile(join(root, "src/data/projects.ts"), "utf8"),
  readFile(join(root, "src/data/industries.ts"), "utf8"),
])

const routeMetadata = JSON.parse(staticMetadataText)

for (const match of projectsSource.matchAll(/slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?desc:\s*"([^"]+)"/g)) {
  const [, slug, title, description] = match
  routeMetadata[`/project/${slug}`] = {
    title: `${title} Case Study | ICC — IO Code Company`,
    description,
  }
}

for (const match of industriesSource.matchAll(/slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"/g)) {
  const [, slug, title, description] = match
  routeMetadata[`/industry/${slug}`] = {
    title: `${title} Digital Solutions | ICC — IO Code Company`,
    description,
  }
}

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")

function replaceMeta(html, route, metadata, noIndex = false) {
  const canonicalUrl = `${siteUrl}${route === "/" ? "" : route}`
  const title = escapeHtml(metadata.title)
  const description = escapeHtml(metadata.description)

  let output = html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`)

  output = output.replace(
    /<meta name="twitter:card" content="[^"]*"\s*\/>/,
    `<meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="${title}" />\n    <meta name="twitter:description" content="${description}" />`,
  )

  if (noIndex) {
    output = output.replace("</head>", '    <meta name="robots" content="noindex, nofollow" />\n  </head>')
  }

  return output
    .replaceAll("https://www.icc-collab.com/icc-social-preview.png", socialImage)
    .replaceAll('content="1733"', 'content="1200"')
    .replaceAll('content="907"', 'content="630"')
}

const sitemapEntries = []

for (const [route, metadata] of Object.entries(routeMetadata)) {
  sitemapEntries.push(route)
  if (route === "/") continue

  const outputPath = join(root, "dist", `${route.slice(1)}.html`)
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, replaceMeta(template, route, metadata), "utf8")
}

await writeFile(
  join(root, "dist/404.html"),
  replaceMeta(template, "/404", {
    title: "Page Not Found | ICC — IO Code Company",
    description: "The requested page could not be found on the ICC — IO Code Company website.",
  }, true),
  "utf8",
)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n")}
</urlset>
`

await writeFile(join(root, "dist/sitemap.xml"), sitemap, "utf8")
