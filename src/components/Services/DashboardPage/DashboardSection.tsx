// import React from 'react'
// import { Activity, ArrowRight } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import dashboardImg from '../../../assets/images/Dashboard/dashboardHero.png'

// export default function DashboardSection() {
//   return (
//     <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
//       {/* background */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_65%_70%,rgba(59,130,246,0.08),transparent_30%)]" />

//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          
//           {/* LEFT */}
//           <div className="max-w-xl">
//             {/* badge */}
//             <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/8 px-4 py-2 text-xs font-medium tracking-[0.12em] text-cyan-300/90">
//               <span className="h-2 w-2 rounded-full bg-cyan-400" />
//               QUANTUM INTERFACE V2.0
//             </div>

//             {/* title */}
//             <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
//               <span className="block">Smart Dashboards.</span>
//               <span className="block bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 bg-clip-text text-transparent">
//                 Smarter Decisions.
//               </span>
//             </h2>

//             {/* description */}
//             <p className="mt-8 max-w-lg text-lg leading-8 text-white/60">
//               Turn your raw data into clear, actionable insights. We design
//               high-end control panels that simplify complexity and help your team
//               make faster, better decisions.
//             </p>

//             {/* actions */}
//             <div className="mt-10 flex flex-wrap items-center gap-5">
              
//               <Link
//                 to="/contact"
//                 className="group inline-flex items-center justify-center rounded-xl border border-cyan-400/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
//               >
//                 <span>Get Your Dashboard</span>
//                 <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>

//               <Link
//                 to="/features"
//                 className="text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white"
//               >
//                 Explore Features
//               </Link>

//             </div>
//           </div>

//          {/* RIGHT */}
// <div className="relative pb-16">
//   <div className="absolute inset-0 rounded-[32px] bg-cyan-400/8 blur-3xl" />

// <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#081121] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-500 ease-out hover:scale-[1.02] hover:border-cyan-400/20">    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-5 py-4">
//       <span className="h-3 w-3 rounded-full bg-red-500/90" />
//       <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
//       <span className="h-3 w-3 rounded-full bg-green-500/90" />

//       <div className="ml-4 rounded-md border border-cyan-400/15 bg-[#0b162a] px-3 py-1 text-[11px] tracking-[0.08em] text-white/45">
//         dashboard.live
//       </div>
//     </div>

//     <div className="relative p-5 sm:p-6">
//       <div className="relative overflow-hidden rounded-[24px] border border-cyan-400/10 bg-[#060d1d]">
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(34,211,238,0.10),transparent_35%)]" />

//         <img
//           src={dashboardImg}
//           alt="Dashboard preview"
//           className="relative z-10 h-auto w-full object-cover"
//         />

//         <div className="pointer-events-none absolute inset-x-[12%] bottom-6 h-10 rounded-full bg-cyan-400/20 blur-2xl" />
//       </div>
//     </div>
//   </div>

//   <div className="absolute left-6 bottom-4 z-20 animate-floatStatus">
//     <div className="group flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-[#0c1830]/95 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300  ">
//       <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/12">
//         <Activity className="h-5 w-5 text-cyan-400" />
//       </div>

//       <div>
//         <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
//           System Status
//         </p>
//         <p className="mt-1 text-base font-medium text-white">
//           Optimal
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

//         </div>
//       </div>

//       <style>{`
//   @keyframes floatStatus {
//     0%, 100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-10px);
//     }
//   }

//   .animate-floatStatus {
//     animation: floatStatus 4s ease-in-out infinite;
//   }
// `}</style>
//     </section>
    
//   )
// }



import { motion } from 'framer-motion'
import { Activity, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import dashboardImg from '../../../assets/images/Dashboard/dashboardHero.png'
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from '../../../lib/motion'

export default function DashboardSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_65%_70%,rgba(59,130,246,0.08),transparent_30%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            className="max-w-xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/8 px-4 py-2 text-xs font-medium tracking-[0.12em] text-cyan-300/90"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              QUANTUM INTERFACE V2.0
            </motion.div>

            <motion.h2
              variants={fadeLeft}
              className="text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              <span className="block">Smart Dashboards.</span>
              <span className="block bg-linear-to-r from-cyan-300 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Smarter Decisions.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-lg text-lg leading-8 text-white/60"
            >
              Turn your raw data into clear, actionable insights. We design
              high-end control panels that simplify complexity and help your team
              make faster, better decisions.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-xl border border-cyan-400/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <span>Get Your Dashboard</span>
                <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/features"
                className="text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white"
              >
                Explore Features
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative pb-16"
          >
            <div className="absolute inset-0 rounded-4xl bg-cyan-400/8 blur-3xl" />

            <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-[#081121] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-500 ease-out hover:scale-[1.02] hover:border-cyan-400/20">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/2 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-500/90" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/90" />

                <div className="ml-4 rounded-md border border-cyan-400/15 bg-[#0b162a] px-3 py-1 text-[11px] tracking-[0.08em] text-white/45">
                  dashboard.live
                </div>
              </div>

              <div className="relative p-5 sm:p-6">
                <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#060d1d]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(34,211,238,0.10),transparent_35%)]" />

                  <img
                    src={dashboardImg}
                    alt="Dashboard preview"
                    className="relative z-10 h-auto w-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-x-[12%] bottom-6 h-10 rounded-full bg-cyan-400/20 blur-2xl" />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute left-6 bottom-4 z-20 animate-floatStatus"
            >
              <div className="group flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-[#0c1830]/95 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/12">
                  <Activity className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                    System Status
                  </p>
                  <p className="text-white">Optimal</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}