import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "../data/projects"
import { servicesData } from "../data/servicesData"

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
    <section className="bg-[#020617] text-white min-h-screen py-24">

      <div className="container mx-auto px-6 mb-14 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Our Work
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore websites, platforms, ordering experiences, dashboards, and
          games delivered by ICC.
        </p>

        <div className="mt-10">
          <button
            type="button"
            aria-pressed={activeFilter === "All"}
            onClick={() => setActiveFilter("All")}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
              activeFilter === "All"
                ? "border-blue-400 bg-blue-500 text-white"
                : "border-white/10 bg-white/5 text-gray-300 hover:border-blue-400/60 hover:text-white"
            }`}
          >
            All Work · {projects.length}
          </button>

          <div
            className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5"
            aria-label="Filter projects by service"
          >
            {portfolioCategories.map((item) => {
              const Icon = item.icon
              const isActive = activeFilter === item.category

              return (
                <button
                  key={item.category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(item.category)}
                  className={`group rounded-2xl border p-5 text-left transition ${
                    isActive
                      ? "border-blue-400 bg-blue-500/15 shadow-[0_0_30px_rgba(59,130,246,0.12)]"
                      : "border-white/10 bg-white/3 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/6"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className={`h-6 w-6 ${isActive ? "text-blue-300" : "text-blue-400"}`}
                  />
                  <span className="mt-4 block font-semibold text-white">
                    {item.category}
                  </span>
                  <span className="mt-1 block text-sm text-gray-400">
                    {item.projectCount} {item.projectCount === 1 ? "project" : "projects"}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
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

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

    </section>
  )
}
