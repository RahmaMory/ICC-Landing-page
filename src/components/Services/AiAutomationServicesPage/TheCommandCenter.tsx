// import { Activity, BrainCircuit, Network } from 'lucide-react'
// import curveLine from '../../../assets/images/ai-automation/curve-line.svg'

// const features = [
//   {
//     icon: Activity,
//     title: 'Real-Time Telemetry',
//     description:
//       'Monitor automation flows as they happen with millisecond latency.',
//   },
//   {
//     icon: BrainCircuit,
//     title: 'Predictive Analytics',
//     description:
//       'AI models forecast bottlenecks before they impact operations.',
//   },
//   {
//     icon: Network,
//     title: 'System Integration',
//     description:
//       'Connects seamlessly with your existing CRM, ERP, and databases.',
//   },
// ]

// export default function TheCommandCenter() {
//   return (
//     <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mx-auto max-w-4xl text-center">
//           <h2 className="text-white font-semibold leading-[0.95] tracking-[-0.04em] text-4xl sm:text-5xl md:text-6xl lg:text-[72px]">
//             <span>The Command </span>
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
//               Center
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-[18px] leading-8 text-white/60">
//             Total visibility and control. Our custom dashboards translate complex
//             AI operations into clear, actionable insights.
//           </p>
//         </div>

//         {/* Main Panel */}
//         <div className="relative mt-16 overflow-hidden rounded-[34px] border border-white/10 bg-[#0a1124]">
//           {/* outer glow */}
//           <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(34,211,238,0.10),transparent_26%),radial-gradient(circle_at_30%_88%,rgba(168,85,247,0.10),transparent_24%)]" />

//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.45fr]">
//             {/* LEFT */}
//             <div className="px-8 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
//               <div className="space-y-10">
//                 {features.map((item, index) => {
//                   const Icon = item.icon

//                   return (
//                     <div key={index} className="flex items-start gap-5">
//                       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#081327] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
//                         <Icon className="h-5 w-5 text-cyan-400" />
//                       </div>

//                       <div>
//                         <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-white">
//                           {item.title}
//                         </h3>
//                         <p className="mt-2 max-w-md text-[15px] leading-8 text-white/50">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="p-4 sm:p-5 lg:p-8">
//               <div className="overflow-hidden rounded-[24px] border border-cyan-400/12 bg-[#060d1d] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
//                 {/* top bar */}
//                 <div className="flex items-center gap-3 border-b border-white/8 px-6 py-4">
//                   <div className="flex items-center gap-2">
//                     <span className="h-3 w-3 rounded-full bg-red-500/80" />
//                     <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
//                     <span className="h-3 w-3 rounded-full bg-green-500/80" />
//                   </div>

//                   <div className="ml-3 rounded-md border border-cyan-400/20 bg-[#091224] px-4 py-1.5 text-[12px] text-white/55">
//                     system_status: optimal
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[1.65fr_0.8fr]">
//                   {/* chart card */}
//                   <div className="relative rounded-[18px] border border-cyan-400/12 bg-[#071126] p-5">
//                     <div className="mb-6 flex items-center justify-between">
//                       <div className="h-4 w-32 rounded-full bg-white/10" />
//                       <div className="h-4 w-16 rounded-md bg-cyan-400/30" />
//                     </div>

//                     <div className="relative h-[220px] w-full overflow-hidden rounded-[12px]">
//                       {/* line image */}
//                       <img
//                         src={curveLine}
//                         alt="Analytics trend line"
//                         className="absolute inset-0 h-full w-full object-contain opacity-95"
//                       />

//                       {/* fill glow under line */}
//                       <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-cyan-400/10 to-transparent blur-xl" />
//                     </div>
//                   </div>

//                   {/* stats column */}
//                   <div className="space-y-6">
//                     <div className="rounded-[18px] border border-cyan-400/12 bg-[#071126] p-5">
//                       <div className="h-4 w-20 rounded-full bg-white/10" />
//                       <div className="mt-7 text-[34px] font-semibold tracking-[-0.03em] text-white">
//                         99.9%
//                       </div>
//                       <div className="mt-4 h-[4px] w-full overflow-hidden rounded-full bg-black/30">
//                         <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-400" />
//                       </div>
//                     </div>

//                     <div className="rounded-[18px] border border-cyan-400/12 bg-[#071126] p-5">
//                       <div className="h-4 w-20 rounded-full bg-white/10" />
//                       <div className="mt-7 text-[34px] font-semibold tracking-[-0.03em] text-white">
//                         1.2ms
//                       </div>
//                       <div className="mt-4 h-[4px] w-full overflow-hidden rounded-full bg-black/30">
//                         <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-400" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* bottom panel */}
//                 <div className="px-6 pb-6">
//                   <div className="rounded-[18px] border border-cyan-400/12 bg-[#071126] p-6">
//                     <div className="h-4 w-40 rounded-full bg-white/10" />

//                     <div className="mt-8 flex items-start justify-between gap-8">
//                       <div className="space-y-5">
//                         <div className="flex items-center gap-4">
//                           <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/70" />
//                           <div className="h-3.5 w-52 rounded-full bg-white/8" />
//                         </div>
//                         <div className="flex items-center gap-4">
//                           <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/70" />
//                           <div className="h-3.5 w-52 rounded-full bg-white/8" />
//                         </div>
//                         <div className="flex items-center gap-4">
//                           <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/70" />
//                           <div className="h-3.5 w-52 rounded-full bg-white/8" />
//                         </div>
//                       </div>

//                       <div className="hidden sm:block space-y-4">
//                         <div className="h-3.5 w-16 rounded-full bg-white/12" />
//                         <div className="h-3.5 w-16 rounded-full bg-white/12" />
//                         <div className="h-3.5 w-16 rounded-full bg-white/12" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* END RIGHT */}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





import { Activity, BrainCircuit, Network } from 'lucide-react'
import { motion } from 'framer-motion'
import curveLine from '../../../assets/images/ai-automation/curve-line.svg'
import { fadeLeft, fadeRight, fadeUp } from '../../../lib/motion'

const features = [
  {
    icon: Activity,
    title: 'Real-Time Telemetry',
    description:
      'Monitor automation flows as they happen with millisecond latency.',
  },
  {
    icon: BrainCircuit,
    title: 'Predictive Analytics',
    description:
      'AI models forecast bottlenecks before they impact operations.',
  },
  {
    icon: Network,
    title: 'System Integration',
    description:
      'Connects seamlessly with your existing CRM, ERP, and databases.',
  },
]

export default function TheCommandCenter() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-white font-semibold leading-[0.95] tracking-[-0.04em] text-4xl sm:text-5xl md:text-6xl lg:text-[72px]">
            <span>The Command </span>
            <span className="bg-linear-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
              Center
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-[18px] leading-8 text-white/60">
            Total visibility and control. Our custom dashboards translate complex
            AI operations into clear, actionable insights.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-16 overflow-hidden rounded-[34px] border border-white/10 bg-[#0a1124]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={fadeUp}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(34,211,238,0.10),transparent_26%),radial-gradient(circle_at_30%_88%,rgba(168,85,247,0.10),transparent_24%)]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.45fr]">
            <motion.div
              className="px-8 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16"
              variants={fadeLeft}
            >
              <div className="space-y-10">
                {features.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="flex items-start gap-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#081327] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                        <Icon className="h-5 w-5 text-cyan-400" />
                      </div>

                      <div>
                        <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-md text-[15px] leading-8 text-white/50">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div className="p-4 sm:p-5 lg:p-8" variants={fadeRight}>
              <div className="overflow-hidden rounded-3xl border border-cyan-400/12 bg-[#060d1d] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <div className="flex items-center gap-3 border-b border-white/8 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>

                  <div className="ml-3 rounded-md border border-cyan-400/20 bg-[#091224] px-4 py-1.5 text-[12px] text-white/55">
                    system_status: optimal
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[1.65fr_0.8fr]">
                  <div className="relative rounded-[18px] border border-cyan-400/12 bg-[#071126] p-5">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="h-4 w-32 rounded-full bg-white/10" />
                      <div className="h-4 w-16 rounded-md bg-cyan-400/30" />
                    </div>

                    <div className="relative h-55 w-full overflow-hidden rounded-xl">
                      <img
                        src={curveLine}
                        alt="Analytics trend line"
                        className="absolute inset-0 h-full w-full object-contain opacity-95"
                      />

                      <div className="absolute inset-x-0 bottom-0 h-[72%] bg-linear-to-t from-cyan-400/10 to-transparent blur-xl" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-[18px] border border-cyan-400/12 bg-[#071126] p-5">
                      <div className="h-4 w-20 rounded-full bg-white/10" />
                      <div className="mt-7 text-[34px] font-semibold tracking-[-0.03em] text-white">
                        99.9%
                      </div>
                      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-black/30">
                        <div className="h-full w-[86%] rounded-full bg-linear-to-r from-fuchsia-500 to-violet-400" />
                      </div>
                    </div>

                    <div className="rounded-[18px] border border-cyan-400/12 bg-[#071126] p-5">
                      <div className="h-4 w-20 rounded-full bg-white/10" />
                      <div className="mt-7 text-[34px] font-semibold tracking-[-0.03em] text-white">
                        1.2ms
                      </div>
                      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-black/30">
                        <div className="h-full w-[48%] rounded-full bg-linear-to-r from-fuchsia-500 to-violet-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="rounded-[18px] border border-cyan-400/12 bg-[#071126] p-6">
                    <div className="h-4 w-40 rounded-full bg-white/10" />

                    <div className="mt-8 flex items-start justify-between gap-8">
                      <div className="space-y-5">
                        <div className="flex items-center gap-4">
                          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/70" />
                          <div className="h-3.5 w-52 rounded-full bg-white/8" />
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/70" />
                          <div className="h-3.5 w-52 rounded-full bg-white/8" />
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/70" />
                          <div className="h-3.5 w-52 rounded-full bg-white/8" />
                        </div>
                      </div>

                      <div className="hidden sm:block space-y-4">
                        <div className="h-3.5 w-16 rounded-full bg-white/12" />
                        <div className="h-3.5 w-16 rounded-full bg-white/12" />
                        <div className="h-3.5 w-16 rounded-full bg-white/12" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}