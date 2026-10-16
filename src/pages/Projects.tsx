import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import { projects, type ProjectCategory } from "../data/projects"

type ProjectFilter = "All" | ProjectCategory

const projectFilters: ProjectFilter[] = [
  "All",
  "MVP Website",
  "E-commerce",
  "Dashboard",
  "Game Development",
  "Landing Page",
]

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

        <div
          className="mt-8 flex flex-wrap justify-center gap-3"
          aria-label="Filter projects by service"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? "border-blue-400 bg-blue-500 text-white"
                  : "border-white/10 bg-white/5 text-gray-300 hover:border-blue-400/60 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  )
}
