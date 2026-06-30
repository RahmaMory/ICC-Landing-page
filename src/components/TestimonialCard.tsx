import { Star } from "lucide-react"
import { motion } from "framer-motion"
import type { Testimonial } from "../data/testimonials"

interface Props {
  item: Testimonial
}

export default function TestimonialCard({ item }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="relative border border-white/5 rounded-2xl pt-12 p-6 bg-[#0E1522] min-h-65 md:min-h-70 lg:min-h-75 flex flex-col gap-3"
    >
      <div className="absolute -top-6 left-8 p-0.5 rounded-full bg-linear-to-r from-blue-400 to-emerald-400 shadow-[0_0_15px_rgba(59,130,246,0.25)]">
        <img
          src={item.image}
          alt={item.name}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover object-top"
        />
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

      <p className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed line-clamp-4">
        "{item.text}"
      </p>

      <div className="mt-auto">
        <h4 className="text-white font-semibold text-sm md:text-base">
          {item.name}
        </h4>

        <p className="text-gray-400 text-xs md:text-sm min-h-4.5">
          {item.role}, {item.company}
        </p>
      </div>
    </motion.div>
  )
}