// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function SystemPreviewSection() {
//   return (
//     <section className="relative bg-[#030B1B] px-4 sm:px-6 lg:px-8 py-20 md:py-32">
//       <div className="mx-auto max-w-7xl">
//         <div className="mx-auto max-w-6xl text-center min-h-[70vh] flex flex-col items-center justify-center">
//           <h2 className="text-white font-semibold leading-[0.9] tracking-[-0.05em] text-5xl sm:text-6xl md:text-7xl lg:text-[96px] xl:text-[108px]">
//             <span className="block">Let AI handle the work.</span>

//             <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               You focus on growth.
//             </span>
//           </h2>

//           <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg md:text-[18px] leading-8 text-white/60">
//             The future of business is automated. Don&apos;t get left behind
//             managing manual processes.
//           </p>

//         <Link
//   to="/contact"
//   className="group mt-10 inline-flex items-center justify-center rounded-[20px] 
//   bg-white px-10 py-5 text-lg font-semibold text-[#0b1220] 
//   transition-all duration-300 hover:scale-[1.02] 
//   hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400"
// >
//   <span className="transition-colors duration-300 ">
//     Start Automating Today
//   </span>

//   <span className="ml-4 text-[24px] transition-transform duration-300 group-hover:translate-x-1 ">
//     →
//   </span>
// </Link>
//         </div>
//       </div>
//     </section>
//   )
// }








import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer } from '../../../lib/motion'

export default function SystemPreviewSection() {
  return (
    <section className="relative bg-[#030B1B] px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-6xl text-center min-h-[70vh] flex flex-col items-center justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-white font-semibold leading-[0.9] tracking-[-0.05em] text-5xl sm:text-6xl md:text-7xl lg:text-[96px] xl:text-[108px]"
          >
            <span className="block">Let AI handle the work.</span>

            <span className="mt-2 block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              You focus on growth.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-base sm:text-lg md:text-[18px] leading-8 text-white/60"
          >
            The future of business is automated. Don&apos;t get left behind
            managing manual processes.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center justify-center rounded-[20px] 
              bg-white px-10 py-5 text-lg font-semibold text-[#0b1220] 
              transition-all duration-300 hover:scale-[1.02] 
              hover:bg-linear-to-r hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400"
            >
              <span className="transition-colors duration-300 ">
                Start Automating Today
              </span>

              <span className="ml-4 text-[24px] transition-transform duration-300 group-hover:translate-x-1 ">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}