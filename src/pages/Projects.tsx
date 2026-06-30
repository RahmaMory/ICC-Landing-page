import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section  className="bg-[#020617] text-white min-h-screen py-24">

      <div className="container mx-auto px-6 mb-14 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Full Portfolio
        </h1>

        <p className="text-gray-400">
          Explore all our shipped projects.
        </p>
      </div>

      <div  className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(project => (
          <ProjectCard  key={project.id} project={project} />
        ))}
      </div>

    </section>
  )
}