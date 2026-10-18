import IndustryCard from "../components/IndustryCard"
import { industries } from "../data/industries"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../lib/motion"

export default function Industries() {
  return (
    <section className="border-y border-white/5 bg-[#0D1421] py-20 text-white sm:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold">Industries We Serve</h2>
          <p className="mt-4 leading-7 text-gray-400">
            Focused digital solutions shaped around each team, customer journey,
            and day-to-day workflow.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
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
