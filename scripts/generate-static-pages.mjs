import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { pathToFileURL } from "node:url"

const root = process.cwd()
const siteUrl = "https://www.icc-collab.com"
const socialImage = `${siteUrl}/icc-social-preview.png`

const [template, staticMetadataText] = await Promise.all([
  readFile(join(root, "dist/index.html"), "utf8"),
  readFile(join(root, "src/data/routeMetadata.json"), "utf8"),
])

const routeMetadata = JSON.parse(staticMetadataText)
const { render } = await import(
  pathToFileURL(join(root, "dist-ssr/entry-server.js")).href
)

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

function resolvePrerenderedSuspense(html) {
  const completedBoundary = html.match(
    /<div hidden id="S:0">([\s\S]*)<\/div><script>\$RB=\[\];\$RV=[\s\S]*<\/script>$/,
  )

  if (!completedBoundary) return html

  const routeContent = completedBoundary[1]

  return html
    .replace(
      /<!--\$\?--><template id="B:0"><\/template>[\s\S]*?<!--\/\$-->/,
      `<!--$-->${routeContent}<!--/$-->`,
    )
    .replace(/<script>requestAnimationFrame\([\s\S]*?<\/script>/, "")
    .replace(/<div hidden id="S:0">[\s\S]*<\/div><script>\$RB=\[\];\$RV=[\s\S]*<\/script>$/, "")
}

function makePrerenderedContentVisible(html) {
  return html.replace(/\sstyle="([^"]*)"/g, (attribute, style) => {
    const declarations = style.split(";").filter(Boolean)
    const startsHidden = declarations.some((declaration) => declaration.trim() === "opacity:0")

    if (!startsHidden) return attribute

    const visibleDeclarations = declarations.filter((declaration) => {
      const property = declaration.trim()
      return property !== "opacity:0" && !property.startsWith("transform:")
    })

    return visibleDeclarations.length > 0
      ? ` style="${visibleDeclarations.join(";")}"`
      : ""
  })
}

async function buildRouteHtml(route, metadata, noIndex = false) {
  const renderedApp = makePrerenderedContentVisible(
    resolvePrerenderedSuspense(await render(route)),
  )
  return replaceMeta(template, route, metadata, noIndex).replace(
    '<div id="root"></div>',
    `<div id="root">${renderedApp}</div>`,
  )
}

const sitemapEntries = []

for (const [route, metadata] of Object.entries(routeMetadata)) {
  sitemapEntries.push(route)
  const outputPath = route === "/"
    ? join(root, "dist/index.html")
    : join(root, "dist", `${route.slice(1)}.html`)
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, await buildRouteHtml(route, metadata), "utf8")
}

await writeFile(
  join(root, "dist/404.html"),
  await buildRouteHtml("/404", {
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
