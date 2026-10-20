import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { fadeUp, staggerContainer } from "../lib/motion"

const caseStudyProjects = projects
  .filter((project) => Boolean(project.caseStudy))
  .slice(0, 3)

export default function CaseStudyHighlights() {
  return (
    <section className="mb-14 border-b border-white/10 pb-14" aria-labelledby="case-study-heading">
      <div className="mb-7 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Short case studies
        </p>
        <h2 id="case-study-heading" className="mt-3 text-3xl font-semibold text-white">
          How selected projects came together
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/55 sm:text-base">
          Three quick examples of the challenge, ICC&apos;s delivery, and the practical outcome.
        </p>
      </div>

      <motion.div
        className="grid gap-5 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {caseStudyProjects.map((project) => {
          const caseStudy = project.caseStudy
          if (!caseStudy) return null

          const details = [
            { label: "Challenge", value: caseStudy.challenge },
            { label: "ICC delivered", value: caseStudy.delivery },
            { label: "Outcome", value: caseStudy.outcome },
          ]

          return (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#09111f] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.16)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[11px] font-medium text-white/55">
                  {project.category}
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {details.map((detail) => (
                  <div key={detail.label} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/38">
                        {detail.label}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-white/68">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label={`Visit the live ${project.title} project`}
              >
                Visit live project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}
