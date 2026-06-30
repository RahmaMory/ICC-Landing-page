// // import React from 'react'
// // import { Sparkles, Zap, DollarSign, TrendingUp,  ShieldAlert } from 'lucide-react'

// // const solutionCards = [
// //   {
// //     icon: <Zap className="w-6 h-6 text-blue-400" />,
// //     title: 'Save Time',
// //     desc: 'Automate up to 80% of routine tasks.',
// //   },
// //   {
// //     icon: <DollarSign className="w-6 h-6 text-blue-400" />,
// //     title: 'Reduce Costs',
// //     desc: 'Lower operational overhead significantly.',
// //   },
// //   {
// //     icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
// //     title: 'Scale Operations',
// //     desc: 'Handle 10x volume without adding headcount.',
// //     active: true,
// //   },
// //   {
// //     icon: <Zap className="w-6 h-6 text-blue-400" />,
// //     title: 'Improve Accuracy',
// //     desc: 'Reduce manual errors and increase consistency.',
// //   },
// // ]

// // export default function DataDashboard() {
// //   return (
// //     <section className=" relative bg-[#030b1b] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
// //       <div className="mx-auto max-w-7xl">
// //         <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
// //           {/* LEFT SIDE */}
// //           <div className="lg:sticky lg:top-24 lg:self-start h-fit">
// //             <div className="max-w-xl">
            
// //               <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
// //                Data without <span className="text-gray-400 line-through  decoration-red-500 decoration-2 text-[0.9em]">clarity</span> is useless.
// //               </h2>

// //               <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
// //                In a sea of metrics, finding the signal through the noise is the hardest part. Complex systems slow down decision-making and obscure the truth.
// //               </p>
// //                 <div className="group relative mt-10 rounded-[32px] border border-blue-400/10 bg-white/[0.02] p-6 sm:p-8 lg:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">

// // <div className="relative z-10">
  
// //   {/* icon + title */}
// //   <div className="flex items-center gap-4">
// //     <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-red-400/25 bg-red-400/10">
// //       <ShieldAlert className="h-7 w-7 text-red-400" />
// //     </div>

// //     <p className="text-xl sm:text-2xl font-semibold text-white">
// //       The Cost of Confusion
// //     </p>
// //   </div>

// //   {/* list */}
// //   <div className="mt-6 space-y-3">
    
// //     <p className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
// //       <span className="h-2 w-2 rounded-full bg-red-400"></span>
// //       Missed opportunities
// //     </p>

// //     <p className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
// //       <span className="h-2 w-2 rounded-full bg-red-400"></span>
// //      Slower reaction times

// //     </p>

// //   <p className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
// //       <span className="h-2 w-2 rounded-full bg-red-400"></span>
// //     Resource drain


// //     </p>
// //   </div>

// // </div>
// //             </div>
// //           </div>
// //       </div>    

// //           {/* RIGHT SIDE */}
// //         </div>

// //         {/* مسافة زيادة تحت السيكشن عشان الإحساس يبقى مريح */}
// //         <div className="h-10 md:h-16" />
// //       </div>
// //     </section>
// //   )
// // }




// import React from 'react'
// import { ShieldAlert, Zap, BarChart3, SlidersHorizontal } from 'lucide-react'

// export default function DataDashboard() {
//   return (
//     <section className="relative bg-[#030b1b] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
// <div className="container mx-auto">
//                 <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
//           {/* LEFT SIDE */}
//           <div className="h-fit lg:sticky lg:top-24 lg:self-start">
//             <div className="max-w-xl">
//               <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
//                 Data without{' '}
//                 <span className="text-[0.9em] text-gray-400 line-through decoration-2 decoration-red-500">
//                   clarity
//                 </span>{' '}
//                 is useless.
//               </h2>

//               <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
//                 In a sea of metrics, finding the signal through the noise is the
//                 hardest part. Complex systems slow down decision-making and obscure
//                 the truth.
//               </p>

//               <div className="group relative mt-10 rounded-[32px] border border-blue-400/10 bg-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-8 lg:p-10">
//                 <div className="relative z-10">
//                   <div className="flex items-center gap-4">
//                     <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-red-400/25 bg-red-400/10">
//                       <ShieldAlert className="h-7 w-7 text-red-400" />
//                     </div>

//                     <p className="text-xl font-semibold text-white sm:text-2xl">
//                       The Cost of Confusion
//                     </p>
//                   </div>

//                   <div className="mt-6 space-y-3">
//                     <p className="flex items-center gap-3 text-sm text-white/70 sm:text-base">
//                       <span className="h-2 w-2 rounded-full bg-red-400"></span>
//                       Missed opportunities
//                     </p>

//                     <p className="flex items-center gap-3 text-sm text-white/70 sm:text-base">
//                       <span className="h-2 w-2 rounded-full bg-red-400"></span>
//                       Slower reaction times
//                     </p>

//                     <p className="flex items-center gap-3 text-sm text-white/70 sm:text-base">
//                       <span className="h-2 w-2 rounded-full bg-red-400"></span>
//                       Resource drain
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="relative">
//             <div className="grid grid-cols-1 gap-6">
//               {/* Top row */}
//               <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
//                 {/* Real-time data */}
//                 <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1730] p-8 transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_28px_rgba(34,211,238,0.06)]">
//                   <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.08),transparent_26%)]" />

//                   <div className="relative z-10">
//                     <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12">
//                       <Zap className="h-6 w-6 text-cyan-300" />
//                     </div>

//                     <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-white">
//                       Real-time data
//                     </h3>

//                     <p className="mt-4 max-w-md text-[17px] leading-8 text-white/58">
//                       Live metrics streaming directly to your command center with
//                       zero latency.
//                     </p>

//                     <div className="mt-8 h-px w-full bg-white/10" />

//                     <div className="mt-6">
//                       <div className="flex items-end gap-2">
//                         <span className="text-[52px] font-semibold leading-none tracking-[-0.04em] text-white">
//                           99
//                         </span>
//                         <span className="pb-2 text-[28px] font-semibold leading-none text-cyan-300">
//                           .9%
//                         </span>
//                       </div>

//                       <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.14em] text-white/45">
//                         Uptime reliability
//                       </p>
//                     </div>
//                   </div>
//                 </article>

//                 {/* Clear analytics */}
//                 <article className="group relative overflow-hidden rounded-[28px] border border-cyan-400/25 bg-[#101f4a] p-8 transition-all duration-300 hover:border-cyan-300/45 hover:shadow-[0_0_32px_rgba(34,211,238,0.10)]">
//                   <div className="pointer-events-none absolute inset-0 bg-[#11213A]" />

//                   <div className="relative z-10">
//                     <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-400/14">
//                       <BarChart3 className="h-6 w-6 text-indigo-300" />
//                     </div>

//                     <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-white">
//                       Clear analytics
//                     </h3>

//                     <p className="mt-4 max-w-md text-[17px] leading-8 text-white/58">
//                       Visualizations that tell a story, not just show numbers. Spot
//                       trends instantly.
//                     </p>

//                     <div className="mt-8">
//                       <div className="relative h-[170px] overflow-hidden rounded-[18px]">
//                         <div className="absolute inset-0 grid grid-cols-6 gap-2">
//                           <div className="rounded-t-[10px] bg-white/[0.03]" />
//                           <div className="rounded-t-[10px] bg-white/[0.04]" />
//                           <div className="rounded-t-[10px] bg-white/[0.03]" />
//                           <div className="rounded-t-[10px] bg-white/[0.04]" />
//                           <div className="rounded-t-[10px] bg-white/[0.03]" />
//                           <div className="rounded-t-[10px] bg-white/[0.04]" />
//                         </div>

//                         <div className="absolute inset-x-0 bottom-0 grid h-full grid-cols-6 gap-2">
//                           <div className="h-[40%] self-end rounded-t-[10px] bg-gradient-to-b from-cyan-400 to-cyan-700/60" />
//                           <div className="h-[63%] self-end rounded-t-[10px] bg-gradient-to-b from-cyan-400 to-cyan-700/60" />
//                           <div className="h-[45%] self-end rounded-t-[10px] bg-gradient-to-b from-cyan-400 to-cyan-700/60" />
//                           <div className="h-[80%] self-end rounded-t-[10px] bg-gradient-to-b from-cyan-400 to-cyan-700/60" />
//                           <div className="h-[58%] self-end rounded-t-[10px] bg-gradient-to-b from-cyan-400 to-cyan-700/60" />
//                           <div className="h-[88%] self-end rounded-t-[10px] bg-gradient-to-b from-cyan-400 to-cyan-700/60" />
//                         </div>

//                         <svg
//                           viewBox="0 0 600 180"
//                           className="absolute inset-0 h-full w-full"
//                           fill="none"
//                           preserveAspectRatio="none"
//                         >
//                           <path
//                             d="M0 120 L100 76 L200 112 L300 48 L400 84 L500 54 L600 10"
//                             stroke="#24E7F3"
//                             strokeWidth="5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               </div>

//               {/* Bottom full card */}
//               <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0f1b3a] p-8 transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
//                 <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(34,211,238,0.06),transparent_24%),radial-gradient(circle_at_75%_85%,rgba(99,102,241,0.08),transparent_28%)]" />

//                 <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
//                   <div>
//                     <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06]">
//                       <SlidersHorizontal className="h-6 w-6 text-white/85" />
//                     </div>

//                     <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-white">
//                       Easy control panels
//                     </h3>

//                     <p className="mt-4 max-w-md text-[17px] leading-8 text-white/58">
//                       Intuitive interfaces that require zero training. Manage
//                       complex systems with simple toggles and clear controls.
//                     </p>
//                   </div>

//                   <div className="rounded-[18px] border border-cyan-400/12 bg-[#0a1429] p-5">
//                     <div className="grid grid-cols-[1fr_auto] items-center gap-6">
//                       <div className="space-y-5">
//                         <div className="h-3.5 w-28 rounded-full bg-white/20" />
//                         <div className="h-3.5 w-24 rounded-full bg-white/18" />
//                         <div className="h-3.5 w-28 rounded-full bg-white/18" />
//                       </div>

//                       <div className="space-y-4">
//                         <div className="flex h-7 w-14 items-center rounded-full bg-cyan-400/90 p-1">
//                           <div className="ml-auto h-5 w-5 rounded-full bg-white" />
//                         </div>

//                         <div className="flex h-7 w-14 items-center rounded-full bg-white/10 p-1">
//                           <div className="h-5 w-5 rounded-full bg-white/80" />
//                         </div>

//                         <div className="flex h-7 w-14 items-center rounded-full bg-white/10 p-1">
//                           <div className="h-5 w-5 rounded-full bg-white/80" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             </div>
//           </div>
//         </div>

//         <div className="h-10 md:h-16" />
//       </div>
//     </section>
//   )
// }








import { motion } from 'framer-motion'
import { ShieldAlert, Zap, BarChart3, SlidersHorizontal } from 'lucide-react'
import { fadeLeft, fadeUp, staggerContainer } from '../../../lib/motion'

export default function DataDashboard() {
  return (
    <section className="relative bg-[#030b1b] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="h-fit lg:sticky lg:top-24 lg:self-start"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-xl">
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Data without{' '}
                <span className="text-[0.9em] text-gray-400 line-through decoration-2 decoration-red-500">
                  clarity
                </span>{' '}
                is useless.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                In a sea of metrics, finding the signal through the noise is the
                hardest part. Complex systems slow down decision-making and obscure
                the truth.
              </p>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative mt-10 rounded-[32px] border border-blue-400/10 bg-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-8 lg:p-10"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-red-400/25 bg-red-400/10">
                      <ShieldAlert className="h-7 w-7 text-red-400" />
                    </div>

                    <p className="text-xl font-semibold text-white sm:text-2xl">
                      The Cost of Confusion
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <p className="flex items-center gap-3 text-sm text-white/70 sm:text-base">
                      <span className="h-2 w-2 rounded-full bg-red-400"></span>
                      Missed opportunities
                    </p>
                    <p className="flex items-center gap-3 text-sm text-white/70 sm:text-base">
                      <span className="h-2 w-2 rounded-full bg-red-400"></span>
                      Slower reaction times
                    </p>
                    <p className="flex items-center gap-3 text-sm text-white/70 sm:text-base">
                      <span className="h-2 w-2 rounded-full bg-red-400"></span>
                      Resource drain
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <motion.article
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1730] p-8 transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_28px_rgba(34,211,238,0.06)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.08),transparent_26%)]" />
                  <div className="relative z-10">
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12">
                      <Zap className="h-6 w-6 text-cyan-300" />
                    </div>

                    <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-white">
                      Real-time data
                    </h3>

                    <p className="mt-4 max-w-md text-[17px] leading-8 text-white/58">
                      Live metrics streaming directly to your command center with
                      zero latency.
                    </p>

                    <div className="mt-8 h-px w-full bg-white/10" />

                    <div className="mt-6">
                      <div className="flex items-end gap-2">
                        <span className="text-[52px] font-semibold leading-none tracking-[-0.04em] text-white">
                          99
                        </span>
                        <span className="pb-2 text-[28px] font-semibold leading-none text-cyan-300">
                          .9%
                        </span>
                      </div>

                      <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.14em] text-white/45">
                        Uptime reliability
                      </p>
                    </div>
                  </div>
                </motion.article>

                <motion.article
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[28px] border border-cyan-400/25 bg-[#101f4a] p-8 transition-all duration-300 hover:border-cyan-300/45 hover:shadow-[0_0_32px_rgba(34,211,238,0.10)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[#11213A]" />
                  <div className="relative z-10">
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-400/14">
                      <BarChart3 className="h-6 w-6 text-indigo-300" />
                    </div>

                    <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-white">
                      Clear analytics
                    </h3>

                    <p className="mt-4 max-w-md text-[17px] leading-8 text-white/58">
                      Visualizations that tell a story, not just show numbers. Spot
                      trends instantly.
                    </p>
                  </div>
                </motion.article>
              </div>

              <motion.article
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0f1b3a] p-8 transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
              >
                <div className="relative z-10">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12">
                    <SlidersHorizontal className="h-6 w-6 text-cyan-300" />
                  </div>

                  <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-white">
                    Easy control panels
                  </h3>

                  <p className="mt-4 max-w-md text-[17px] leading-8 text-white/58">
                    Manage everything from a single, streamlined interface designed for efficiency.
                  </p>
                </div>
              </motion.article>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}