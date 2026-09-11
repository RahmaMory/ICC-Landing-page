import { motion } from 'framer-motion'
import { Phone, Headset } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'

export default function DirectContactSection() {

  const phoneNumber = '+201031158933'
  const whatsappUrl =
    'https://wa.me/201031158933?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.'

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.08),transparent_28%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#121d2e] px-8 py-14 sm:px-12 md:px-16 md:py-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_30%)]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/8 px-5 py-2 text-xs font-medium tracking-[0.12em] text-blue-300"
            >
              <Headset className="h-4 w-4" />
              LET’S TALK
            </motion.div>

            {/* title */}
            <motion.h2
              variants={fadeUp}
              className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-[64px]"
            >
              You’re one step away from building something
              <span className="bg-linear-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                {' '}powerful.
              </span>
            </motion.h2>

            {/* subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg"
            >
              We’d be excited to hear about your project. Reach out directly and
              let’s talk about how we can build the right system for your business.
            </motion.p>

            {/* phone card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-10 w-full max-w-xl rounded-3xl border border-blue-400/15 bg-[#0d1728] px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10">
                    <Phone className="h-5 w-5 text-blue-300" />
                  </div>

                  <div className="text-left">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                      Direct Line
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
                      {phoneNumber}
                    </p>
                  </div>
                </div>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center rounded-2xl bg-blue-400 px-6 py-3 text-sm font-semibold text-[#071126] transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.30)]"
               >
                  Contact Now
                </motion.a>
              </div>

              <p className="mt-5 text-sm text-white/45">
                Click <strong>Contact Now</strong> to start a conversation with us on WhatsApp.
              </p>


            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
