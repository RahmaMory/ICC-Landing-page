import { ArrowUpRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import type { Project } from "../data/projects"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const usesLogo = project.imageFit === "contain"

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit the live ${project.title} project`}
        className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#09111f] p-2 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:border-blue-400/35 hover:shadow-[0_22px_70px_rgba(30,64,175,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        {/* image box */}
        <div
          className="relative h-60 overflow-hidden rounded-[20px] border border-white/8 bg-[#0B1120]"
          style={{ background: project.imageBackground }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            className={`h-full w-full transition duration-500 ${
              usesLogo
                ? `${project.imagePadding === "compact" ? "p-4" : "p-10"} object-contain group-hover:scale-105`
                : "object-cover group-hover:scale-105"
            }`}
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/72 via-transparent to-black/15" />

          <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#050a13]/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-white/85 backdrop-blur-md transition duration-300 group-hover:opacity-0">
            {project.category}
          </div>

          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#050a13]/80 text-white backdrop-blur-md transition duration-300 group-hover:rotate-6 group-hover:bg-blue-500">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between px-5 pb-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-sm font-medium text-white">Visit Live Project</span>
            <ArrowUpRight className="h-4 w-4 text-blue-300" aria-hidden="true" />
          </div>
        </div>

        <div className="px-3 pb-4 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                {project.tag}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white transition duration-300 group-hover:text-blue-300">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/35 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300" aria-hidden="true" />
          </div>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/52">
            {project.desc}
          </p>
        </div>
      </a>
    </motion.div>
  )
}
