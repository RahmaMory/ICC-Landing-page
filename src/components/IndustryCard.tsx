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
      className="flex min-h-28 items-center gap-4 rounded-2xl border border-white/7 bg-[#0A1120]/75 p-5 text-left"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/8 text-gray-300">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <h3 className="min-w-0 flex-1 text-base font-semibold text-white">{item.title}</h3>
    </motion.div>
  )
}
