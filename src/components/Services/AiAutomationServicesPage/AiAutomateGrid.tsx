// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function WhatCanWeAutomateSection() {
//   return (
//     <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-24">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className="max-w-3xl">
//             <h2 className="text-white font-semibold leading-[0.95] tracking-[-0.04em] text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">
//               <span className="block">What Can We</span>

//               <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//                 Automate?
//               </span>
//             </h2>

//             <p className="mt-8 max-w-2xl text-base sm:text-lg md:text-[18px] leading-8 text-white/60">
//               From customer interactions to complex backend data processing, our
//               AI systems integrate seamlessly into your existing architecture.
//             </p>
//           </div>

//           {/* Right CTA */}
//           <div className="flex items-end justify-start lg:justify-end">
//             <Link
//               to="/contact"
//               className="group inline-flex items-center gap-3 text-cyan-400 text-lg sm:text-xl font-medium transition-all duration-300 hover:text-cyan-300"
//             >
//               <span>Discuss Your Needs</span>
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeLeft, fadeRight } from '../../../lib/motion'

export default function WhatCanWeAutomateSection() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
          >
            <h2 className="text-white font-semibold leading-[0.95] tracking-[-0.04em] text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">
              <span className="block">What Can We</span>
              <span className="mt-2 block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Automate?
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base sm:text-lg md:text-[18px] leading-8 text-white/60">
              From customer interactions to complex backend data processing, our
              AI systems integrate seamlessly into your existing architecture.
            </p>
          </motion.div>

          <motion.div
            className="flex items-end justify-start lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-cyan-400 text-lg sm:text-xl font-medium transition-all duration-300 hover:text-cyan-300"
            >
              <span>Discuss Your Needs</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}