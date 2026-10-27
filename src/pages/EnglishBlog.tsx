import { ArrowRight, BookOpenText, CalendarDays, Clock3 } from "lucide-react"
import { Link } from "react-router-dom"
import { englishBlogPosts } from "../data/blogPosts"

const blogStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.icc-collab.com/blog#collection",
      url: "https://www.icc-collab.com/blog",
      name: "ICC Blog",
      description:
        "Practical guides from ICC about website design, software development, project scope, pricing, performance, user experience, and digital product delivery.",
      inLanguage: "en",
      isPartOf: { "@id": "https://www.icc-collab.com/#website" },
      publisher: { "@id": "https://www.icc-collab.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.icc-collab.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.icc-collab.com/blog",
        },
      ],
    },
  ],
}

export default function EnglishBlog() {
  return (
    <main dir="ltr" lang="en" className="min-h-screen bg-[#050914] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />

      <section className="relative overflow-hidden border-b border-white/8 px-6 pb-20 pt-20 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_82%_36%,rgba(6,182,212,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/50">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="transition hover:text-cyan-300">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/80">Blog</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-sm font-semibold text-cyan-300">
              <BookOpenText className="h-4 w-4" aria-hidden="true" />
              ICC Blog
            </div>
            <h1 className="text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
              Practical insight for better digital product decisions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/65">
              Clear guidance from ICC — IO Code Company on website design,
              software development, project scope, pricing, performance, and
              user experience—written for businesses preparing to build.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-post-title" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="text-sm font-semibold text-cyan-300">Featured guide</p>
              <h2 id="featured-post-title" className="mt-2 text-3xl font-bold">
                Plan your website with a clearer scope
              </h2>
            </div>
            <p className="text-sm text-white/45">
              We review published guides when material information changes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {englishBlogPosts.map((post) => (
              <article key={post.slug} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.055]">
                <div className="relative min-h-52 overflow-hidden border-b border-white/8 bg-[#071426] p-7">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(34,211,238,0.22),transparent_34%),linear-gradient(225deg,rgba(37,99,235,0.18),transparent_55%)]" />
                  <div className="relative flex h-full flex-col justify-between gap-12">
                    <span className="w-fit rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-cyan-200">
                      {post.category}
                    </span>
                    <p className="max-w-md text-2xl font-bold leading-relaxed text-white">
                      From initial scope to a launch-ready website
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      <time dateTime={post.publishedDate}>{post.publishedLabel}</time>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-4 w-4" aria-hidden="true" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold leading-relaxed text-white">
                    <Link to={post.href} className="transition group-hover:text-cyan-200">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-8 text-white/58">{post.excerpt}</p>
                  <Link to={post.href} className="mt-7 inline-flex w-fit items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200">
                    Read the complete guide
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#08101d] px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 rounded-3xl border border-blue-400/15 bg-blue-500/7 p-8 sm:p-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">Planning a website or digital product?</h2>
            <p className="mt-3 leading-8 text-white/60">
              Share your goals and essential features. We will help you define a
              sensible scope, timeline, and next step before development begins.
            </p>
          </div>
          <Link to="/#contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400">
            Talk to the ICC team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
