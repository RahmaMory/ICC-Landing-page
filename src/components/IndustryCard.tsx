import { motion } from "framer-motion"
import { fadeUp } from "../lib/motion"
import type { Industry } from "../data/industries"
import { Link } from "react-router-dom"

interface Props {
  item: Industry
}

export default function IndustryCard({ item }: Props) {
  const Icon = item.icon

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <Link
        to={`/industry/${item.slug}`}
        aria-label={`Explore digital solutions for ${item.title}`}
        className="group flex h-full flex-col items-center justify-center rounded-2xl border border-white/5 bg-linear-to-r from-[#0f172a] to-[#020617] p-9 text-center transition hover:border-blue-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        <Icon className="mb-6 h-10 w-10 text-gray-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-400" aria-hidden="true" />

        <h3 className="text-white font-semibold text-lg">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">{item.description}</p>
        <span className="mt-5 text-sm font-medium text-blue-300 transition group-hover:text-white">Explore solutions →</span>
      </Link>
    </motion.div>
  )
}
