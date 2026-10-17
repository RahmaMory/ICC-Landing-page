import { useParams } from "react-router-dom"
import { industries } from "../data/industries"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { projects } from "../data/projects"
import NotFound from "../components/NotFound"
import ProjectCard from "../components/ProjectCard"

export default function IndustryDetails() {
  const { slug } = useParams()

  const industry = industries.find(i => i.slug === slug)

  if (!industry) return <NotFound />

  const Icon = industry.icon
  const relatedProjects = projects.filter((project) =>
    industry.projectSlugs?.includes(project.slug),
  )

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.16),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10">
              <Icon className="h-8 w-8 text-blue-300" aria-hidden="true" />
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">Industry solutions</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">{industry.title}</h1>
            <p className="mt-6 text-lg leading-8 text-white/65">{industry.intro}</p>
            <Link to="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold transition hover:bg-blue-400">
              Discuss Your Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_.9fr]">
            <div className="rounded-3xl border border-white/10 bg-white/4 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">What we can help you build</p>
              <h2 className="mt-4 text-3xl font-semibold">Practical solutions for real workflows</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {industry.solutions.map((solution) => (
                  <div key={solution} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/12 p-4 text-sm leading-6 text-white/75">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                    <span>{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-[#091321] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Relevant services</p>
              <h2 className="mt-4 text-2xl font-semibold">Choose the right delivery path</h2>
              <div className="mt-7 space-y-3">
                {industry.services.map((service) => (
                  <Link key={service.path} to={service.path} className="flex items-center justify-between rounded-xl border border-white/10 px-5 py-4 text-white/75 transition hover:border-blue-400/35 hover:bg-blue-400/8 hover:text-white">
                    {service.title}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-white/48">Final features, integrations, security requirements, and delivery phases are confirmed after discovery.</p>
            </aside>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-t border-white/8 bg-[#07101d] px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold">Related ICC projects</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
