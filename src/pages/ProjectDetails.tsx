import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { fadeUp } from "../lib/motion"

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <h1 className="text-center mt-20">Project Not Found</h1>
  }

  const usesLogo = project.imageFit === "contain"

  return (
    <section className="min-h-screen bg-[#020617] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
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
            className={`max-h-[560px] w-full ${
              usesLogo ? "object-contain p-12 md:p-20" : "object-cover"
            }`}
          />
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
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
          className="mt-6 text-4xl font-bold md:text-5xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-3xl text-lg text-gray-400"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          {project.desc}
        </motion.p>

        <motion.p
          className="mt-8 max-w-3xl leading-8 text-gray-300"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          {project.content}
        </motion.p>

        <motion.a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          Visit Live Project
          <ArrowUpRight size={18} aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  )
}
