import { motion } from "framer-motion"
import { fadeUp } from "../lib/motion"
import type { Industry } from "../data/industries"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

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
        className="group flex min-h-28 items-center gap-4 overflow-hidden rounded-2xl border border-white/7 bg-[#0A1120]/75 p-5 text-left transition duration-300 hover:border-blue-400/30 hover:bg-[#0D1729] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/8 text-gray-300 transition duration-300 group-hover:border-blue-400/30 group-hover:text-blue-300">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-base font-semibold text-white">{item.title}</span>
        </span>

        <ArrowUpRight
          className="h-5 w-5 shrink-0 translate-x-5 text-blue-300 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  )
}
