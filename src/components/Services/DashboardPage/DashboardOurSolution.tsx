// import React from 'react'
// import solutionImg from '../../../assets/images/Dashboard/DataDashBoard.png' 

// export default function DashboardOurSolution() {
//   return (
//     <>
//      <section className="relative overflow-hidden px-4 sm:px-6 md:py-32 lg:px-8">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_22%)]" />

//       <div className="mx-auto w-full max-w-[1500px]">
//         {/* Top heading */}
//         <div className="mx-auto max-w-5xl text-center">
//           <div className="inline-flex items-center rounded-full border border-cyan-400/15 bg-cyan-400/8 px-6 py-3 text-sm font-medium text-cyan-300">
//             The Challenge
//           </div>

//           <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
//             Data without clarity is useless.
//           </h2>
//         </div>

//         {/* Bottom content */}
//         <div className="mt-20 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
//           {/* Left side */}
//           <div className="max-w-2xl">
//             <div className="inline-flex items-center rounded-full border border-cyan-400/15 bg-cyan-400/8 px-6 py-3 text-sm font-medium text-cyan-300">
//               Our Solution
//             </div>

//             <h3 className="mt-10 text-2xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
//               We design dashboards that simplify complex data.
//             </h3>

//             <p className="mt-8 max-w-2xl text-lg leading-9 text-white/65">
//               Transform overwhelming datasets into intuitive visualizations that
//               drive action. Our dashboards are built for clarity, speed, and
//               precision.
//             </p>
//           </div>

//           {/* Right side image */}
//           <div className="group relative">
//             {/* outer glow */}
//             <div className="pointer-events-none absolute -inset-3 rounded-[34px] bg-cyan-400/10 opacity-40 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/15 group-hover:opacity-70" />

//             <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/12 bg-[#081121] transition-all duration-500 group-hover:border-cyan-300/35 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.14)]">
//               {/* edge glow overlay */}
//               <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-cyan-300/20" />

//               <img
//                 src={solutionImg}
//                 alt="Dashboard solution preview"
//                 className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
//               />

//               {/* subtle image overlay */}
//               <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.10),transparent_20%),radial-gradient(circle_at_85%_15%,rgba(239,68,68,0.10),transparent_18%),linear-gradient(to_bottom,rgba(5,10,20,0.05),rgba(5,10,20,0.12))]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
      
//     </>
//   )
// }



import { motion } from 'framer-motion'
import solutionImg from '../../../assets/images/Dashboard/DataDashBoard.png'
import { fadeLeft, fadeRight, fadeUp } from '../../../lib/motion'

export default function DashboardOurSolution() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 md:py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_22%)]" />

      <div className="mx-auto w-full max-w-375">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center rounded-full border border-cyan-400/15 bg-cyan-400/8 px-6 py-3 text-sm font-medium text-cyan-300">
            The Challenge
          </div>

          <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            Data without clarity is useless.
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-400/15 bg-cyan-400/8 px-6 py-3 text-sm font-medium text-cyan-300">
              Our Solution
            </div>

            <h3 className="mt-10 text-2xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
              We design dashboards that simplify complex data.
            </h3>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/65">
              Transform overwhelming datasets into intuitive visualizations that
              drive action. Our dashboards are built for clarity, speed, and
              precision.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
            className="group relative"
          >
            <div className="pointer-events-none absolute -inset-3 rounded-[34px] bg-cyan-400/10 opacity-40 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/15 group-hover:opacity-70" />

            <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/12 bg-[#081121] transition-all duration-500 group-hover:border-cyan-300/35 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.14)]">
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-cyan-300/20" />

              <img
                src={solutionImg}
                alt="Dashboard solution preview"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.10),transparent_20%),radial-gradient(circle_at_85%_15%,rgba(239,68,68,0.10),transparent_18%),linear-gradient(to_bottom,rgba(5,10,20,0.05),rgba(5,10,20,0.12))]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}