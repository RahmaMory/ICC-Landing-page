import IndustryCard from "../components/IndustryCard"
import { industries } from "../data/industries"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../lib/motion"

export default function Industries() {
  return (
    <section className="bg-[#0D1421] text-white py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          Industries We Serve
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {industries.map(item => (
            <IndustryCard key={item.slug} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}