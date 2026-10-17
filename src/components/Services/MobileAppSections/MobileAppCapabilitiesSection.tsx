import {
  BellRing,
  Blocks,
  CloudCog,
  PanelsTopLeft,
  Rocket,
  ShieldCheck,
} from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../../../lib/motion"

const capabilities = [
  {
    icon: Blocks,
    title: "Native & Cross-platform",
    description: "Android and iOS delivery using the approach that fits the product, users, and agreed scope.",
  },
  {
    icon: PanelsTopLeft,
    title: "Product UI/UX",
    description: "Clear journeys, prototypes, responsive screens, and interaction states designed around everyday use.",
  },
  {
    icon: CloudCog,
    title: "Backend & Admin Tools",
    description: "APIs, database workflows, user access, and practical management screens when the product needs them.",
  },
  {
    icon: BellRing,
    title: "App Integrations",
    description: "Agreed notifications, payments, maps, analytics, and third-party services connected to the app flow.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & Release Support",
    description: "Device testing, release preparation, and support through the agreed App Store and Google Play steps.",
  },
  {
    icon: Rocket,
    title: "Maintenance & Updates",
    description: "Agreed post-launch fixes, improvements, monitoring, and product updates as the app evolves.",
  },
]

const process = [
  ["01", "Define", "Confirm users, core journeys, platforms, and the first release scope."],
  ["02", "Design", "Create the interface and an interactive direction before full development."],
  ["03", "Build & Test", "Develop the app and backend, then test the complete user journey."],
  ["04", "Launch & Support", "Prepare the release and continue with the agreed follow-up plan."],
]

export default function MobileAppCapabilitiesSection() {
  return (
    <section className="border-y border-white/8 bg-[#0a111d] px-6 py-24 text-white md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Complete mobile delivery</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">From product planning to store launch.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/60">One connected service for the app experience, the systems behind it, and the support needed after release.</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <motion.article key={title} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/3 p-7 transition hover:-translate-y-1 hover:border-blue-400/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/12"><Icon className="h-6 w-6 text-blue-300" aria-hidden="true" /></div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{description}</p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Delivery process</p>
          <h2 className="mt-4 text-center text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">A clear path to the first release.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {process.map(([number, title, description]) => (
              <article key={number} className="rounded-3xl border border-white/10 bg-[#0d1726] p-6">
                <span className="text-sm font-semibold text-blue-400">{number}</span>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
