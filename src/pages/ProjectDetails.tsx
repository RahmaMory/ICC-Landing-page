import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { fadeUp } from "../lib/motion"
import NotFound from "../components/NotFound"
import ProjectCard from "../components/ProjectCard"

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <NotFound />
  }

  const usesLogo = project.imageFit === "contain"
  const relatedProjects = projects
    .filter((item) => item.category === project.category && item.id !== project.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <section className="px-6 pb-20 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Our Work
        </Link>

        <motion.div
          className="flex min-h-80 items-center justify-center overflow-hidden rounded-2xl border border-white/10"
          style={{ background: project.imageBackground }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            fetchPriority="high"
            decoding="async"
            className={`max-h-[560px] w-full ${
              usesLogo ? "object-contain p-12 md:p-20" : "object-cover"
            }`}
          />
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            {project.category}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            {project.tag}
          </span>
        </motion.div>

        <motion.h1
          className="mt-6 max-w-4xl text-4xl font-bold tracking-[-0.035em] md:text-6xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-3xl text-lg leading-8 text-gray-300"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          {project.desc}
        </motion.p>

        <motion.div
          className="mt-12 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1fr_280px]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Project overview</p>
            <h2 className="mt-3 text-3xl font-semibold">What ICC delivered</h2>
            <p className="mt-5 max-w-3xl leading-8 text-gray-300">{project.content}</p>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/4 p-6" aria-label="Project details">
            <dl className="space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/45">Service</dt>
                <dd className="mt-1 font-medium text-white">{project.category}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/45">Sector</dt>
                <dd className="mt-1 font-medium text-white">{project.tag}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/45">Availability</dt>
                <dd className="mt-1 font-medium text-emerald-300">Live project</dd>
              </div>
            </dl>
          </aside>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-medium text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Visit Live Project
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-t border-white/8 bg-[#07101d] px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">More selected work</p>
                <h2 className="mt-3 text-3xl font-semibold">Related {project.category} projects</h2>
              </div>
              <Link to="/projects" className="text-sm font-medium text-blue-300 transition hover:text-white">
                View all projects →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((item) => <ProjectCard key={item.id} project={item} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
