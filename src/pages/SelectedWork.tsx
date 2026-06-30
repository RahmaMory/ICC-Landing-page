import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp } from "../lib/motion"

export default function SelectedWork() {
  return (
    <section className=" bg-[#0B121E] text-white py-24">
      {/* header */}
      <div className="container mx-auto px-6 mb-14">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold mb-2">
              Selected Work
            </h2>

            <p className="text-gray-400 max-w-lg">
              We let our code speak for itself. Here are some of our recent favorite shipments.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <Link
              to="/projects"
              className="text-blue-400 hover:text-blue-300 transition flex"
            >
              View Full Portfolio <ArrowUpRight className="text-xs ml-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* grid */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.slice(0, 6).map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}