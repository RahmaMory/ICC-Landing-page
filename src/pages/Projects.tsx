import { useState } from "react"
import { BriefcaseBusiness, Layers3 } from "lucide-react"
import ProjectCard from "../components/ProjectCard"
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "../data/projects"
import { servicesData } from "../data/servicesData"
import CaseStudyHighlights from "../components/CaseStudyHighlights"

type ProjectFilter = "All" | ProjectCategory

const categorySet = new Set<string>(projectCategories)

const portfolioCategories = servicesData.flatMap((service) => {
  if (!categorySet.has(service.title)) return []

  const category = service.title as ProjectCategory
  const projectCount = projects.filter(
    (project) => project.category === category,
  ).length

  return projectCount > 0
    ? [{ ...service, category, projectCount }]
    : []
})

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All")
  const visibleProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] py-24 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-160 bg-[radial-gradient(circle_at_18%_8%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.10),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">ICC Portfolio</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Work Built for
              <span className="block bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Real Businesses.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
              Explore a selected public portfolio of live websites, ordering
              experiences, business platforms, dashboards, and games delivered by ICC.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="min-w-36 rounded-2xl border border-white/10 bg-white/4 p-5">
              <BriefcaseBusiness className="h-5 w-5 text-blue-400" aria-hidden="true" />
              <strong className="mt-5 block text-3xl font-semibold">{projects.length}</strong>
              <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-white/45">Public projects</span>
            </div>
            <div className="min-w-36 rounded-2xl border border-white/10 bg-white/4 p-5">
              <Layers3 className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              <strong className="mt-5 block text-3xl font-semibold">{portfolioCategories.length}</strong>
              <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-white/45">Project categories</span>
            </div>
          </div>
        </div>

        <div className="my-10 overflow-x-auto pb-2" aria-label="Filter projects by service">
          <div className="flex min-w-max items-center gap-2 rounded-2xl border border-white/10 bg-[#07101d]/85 p-2 backdrop-blur-xl">
            <button type="button" aria-pressed={activeFilter === "All"} onClick={() => setActiveFilter("All")} className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${activeFilter === "All" ? "bg-blue-500 text-white shadow-[0_8px_25px_rgba(59,130,246,0.25)]" : "text-white/55 hover:bg-white/6 hover:text-white"}`}>
              All Work <span className="ml-1.5 opacity-70">{projects.length}</span>
            </button>

            {portfolioCategories.map((item) => {
              const isActive = activeFilter === item.category
              return (
                <button key={item.category} type="button" aria-pressed={isActive} onClick={() => setActiveFilter(item.category)} className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${isActive ? "bg-blue-500 text-white shadow-[0_8px_25px_rgba(59,130,246,0.25)]" : "text-white/55 hover:bg-white/6 hover:text-white"}`}>
                  {item.category} <span className="ml-1.5 opacity-70">{item.projectCount}</span>
                </button>
              )
            })}
          </div>
        </div>

        {activeFilter === "All" ? <CaseStudyHighlights /> : null}

        <div className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-5">
          <div className="text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              {activeFilter === "All" ? "Complete portfolio" : "Selected service"}
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              {activeFilter === "All" ? "All Projects" : activeFilter}
            </h2>
          </div>
          <p className="text-sm text-gray-400">
            {visibleProjects.length} {visibleProjects.length === 1 ? "live project" : "live projects"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
