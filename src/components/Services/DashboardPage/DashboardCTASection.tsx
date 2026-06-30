// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Database } from 'lucide-react'

// export default function DashboardCTASection() {
//   return (
//     <section className="relative overflow-hidden px-4 py-10 sm:px-6 md:py-32 lg:px-8">
//       {/* background grid / glow */}
//       <div className="pointer-events-none absolute inset-0 " />

//       <div className="mx-auto flex min-h-[78vh] max-w-[1600px] flex-col items-center justify-center text-center">
//         {/* icon */}
//         <div className="relative mb-10">
//           <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg" />
//           <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/8">
//             <Database className="h-10 w-10 text-cyan-400" />
//           </div>
//         </div>

//         {/* title */}
//         <h2 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
//           <span className="block">Make faster, better</span>
//           <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
//             business decisions.
//           </span>
//         </h2>

//         {/* buttons */}
//         <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
//           <Link
//             to="/contact"
//             className="group inline-flex min-w-[280px] items-center justify-center rounded-2xl bg-cyan-400 px-10 py-5 text-xl font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
//           >
//             <span>Get Your Dashboard</span>
//           </Link>

//           <Link
//             to="/services"
//             className="group inline-flex min-w-[280px] items-center justify-center rounded-2xl border border-cyan-400/20 bg-transparent px-10 py-5 text-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300/35 hover:bg-cyan-400/5 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
//           >
//             <span>View Our Services</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Database } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../../lib/motion'

export default function DashboardCTASection() {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 md:py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 " />

      <motion.div
        className="mx-auto flex min-h-[78vh] max-w-400 flex-col items-center justify-center text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} className="relative mb-10">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/8">
            <Database className="h-10 w-10 text-cyan-400" />
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          <span className="block">Make faster, better</span>
          <span className="block bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            business decisions.
          </span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            to="/contact"
            className="group inline-flex min-w-70 items-center justify-center rounded-2xl bg-cyan-400 px-10 py-5 text-xl font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          >
            <span>Get Your Dashboard</span>
          </Link>

          <Link
            to="/services"
            className="group inline-flex min-w-70 items-center justify-center rounded-2xl border border-cyan-400/20 bg-transparent px-10 py-5 text-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300/35 hover:bg-cyan-400/5 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
          >
            <span>View Our Services</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}