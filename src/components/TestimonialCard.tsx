import { Star } from "lucide-react"
import { motion } from "framer-motion"
import type { Testimonial } from "../data/testimonials"

interface Props {
  item: Testimonial
}

export default function TestimonialCard({ item }: Props) {
  const initial = (item.name?.trim().charAt(0) || "I").toUpperCase()

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="relative flex h-full min-h-65 flex-col gap-3 rounded-2xl border border-white/5 bg-[#0E1522] px-12 pb-6 pt-12 sm:p-6 sm:pt-12 md:min-h-70 lg:min-h-75"
    >
      <div
        className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-blue-400 to-emerald-400 p-0.5 shadow-[0_0_15px_rgba(59,130,246,0.25)] md:h-16 md:w-16"
        aria-hidden="true"
      >
        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#111A29] text-base font-bold tracking-wide text-white md:text-lg">
          {initial}
        </span>
      </div>

      <div className="flex gap-1 text-yellow-400 mt-1">
        {[...Array(item.rating)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className="md:w-3.75 md:h-3.75"
            fill="currentColor"
          />
        ))}
      </div>

      <p
        className="text-start text-[16px] leading-relaxed text-gray-300 md:text-[18px]"
        dir="auto"
      >
        "{item.text}"
      </p>

      <div className="mt-auto text-start" dir="auto">
        <h4 className="text-white font-semibold text-sm md:text-base">
          {item.name}
        </h4>

        <p className="text-gray-400 text-xs md:text-sm min-h-4.5">
          {[item.role, item.company].filter(Boolean).join(" — ")}
        </p>
      </div>
    </motion.div>
  )
}
