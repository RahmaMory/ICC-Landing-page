// import { Link } from 'react-router-dom'
// import { Sparkles, Joystick } from 'lucide-react'

// export default function GameFeatureComingSoonSection() {
//   return (
//     <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28 lg:px-8">
//       {/* background glow */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.08),transparent_28%)]" />

//       <div className="mx-auto max-w-[1200px]">
//         <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#121d2e] px-8 py-14 sm:px-12 md:px-16 md:py-16">
//           {/* subtle glow inside */}
//           <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_28%)]" />

//           <div className="relative z-10 flex flex-col items-center text-center">
//             {/* badge */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/8 px-5 py-2 text-xs font-medium tracking-[0.12em] text-blue-300">
//               <Sparkles className="h-4 w-4" />
//               COMING SOON
//             </div>

//             {/* icon */}
//             <div className="relative mt-8">
//               <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl" />
//               <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-400/10">
//                 <Joystick className="h-8 w-8 text-blue-300" />
//               </div>
//             </div>

//             {/* title */}
//             <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-[64px]">
//               Our <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">Game Solutions</span> are launching soon.
//             </h2>

//             {/* subtitle */}
//             <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
//               We’re building a new game-focused experience designed for brands,
//               products, and interactive digital engagement. Reserve your spot now
//               and be among the first to access it.
//             </p>

//             {/* bullets */}
//             <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
//               <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/70">
//                 Early access priority
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/70">
//                 Private launch updates
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/70">
//                 First booking availability
//               </div>
//             </div>

//             {/* cta */}
//             <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
//               <Link
//                 to="/contact"
//                 className="group inline-flex items-center justify-center rounded-2xl bg-blue-400 px-8 py-4 text-base font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(34,211,238,0.30)]"
//               >
//                 <span>Reserve Your Spot</span>
//                 <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </span>
//               </Link>

//               <p className="text-sm text-white/45">
//                 Be one of the first to get access.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Joystick } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../../lib/motion'

export default function GameFeatureComingSoonSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.08),transparent_28%)]" />

      <div className="mx-auto max-w-300">
        <motion.div
          className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#121d2e] px-8 py-14 sm:px-12 md:px-16 md:py-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_28%)]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/8 px-5 py-2 text-xs font-medium tracking-[0.12em] text-blue-300"
            >
              <Sparkles className="h-4 w-4" />
              COMING SOON
            </motion.div>

            <motion.div variants={fadeUp} className="relative mt-8">
              <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-400/10">
                <Joystick className="h-8 w-8 text-blue-300" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-[64px]"
            >
              Our <span className="bg-linear-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">Game Solutions</span> are launching soon.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg"
            >
              We’re building a new game-focused experience designed for brands,
              products, and interactive digital engagement. Reserve your spot now
              and be among the first to access it.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {[
                "Early access priority",
                "Private launch updates",
                "First booking availability",
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-white/10 bg-white/3 px-5 py-4 text-sm text-white/70"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-2xl bg-blue-400 px-8 py-4 text-base font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(34,211,238,0.30)]"
              >
                <span>Reserve Your Spot</span>
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <p className="text-sm text-white/45">
                Be one of the first to get access.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}