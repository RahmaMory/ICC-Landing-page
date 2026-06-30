import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeUp } from "../lib/motion"
import type { Industry } from "../data/industries"

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
        id="industries"
        to={`/industry/${item.slug}`}
        className="group border border-white/5 rounded-2xl p-15 flex flex-col items-center justify-center text-center 
        bg-linear-to-r from-[#0f172a] to-[#020617]
        hover:border-blue-500/40 transition duration-300 hover:-translate-y-1"
      >
        <Icon className="w-10 h-10 text-gray-400 mb-6 transition-transform duration-300 group-hover:text-blue-400 group-hover:scale-110" />

        <h3 className="text-white font-semibold text-lg">
          {item.title}
        </h3>
      </Link>
    </motion.div>
  )
}