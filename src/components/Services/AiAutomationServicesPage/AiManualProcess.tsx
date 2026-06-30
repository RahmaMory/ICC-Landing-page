// import React from 'react'
// import { Sparkles, Zap, DollarSign, TrendingUp, CircleDotDashed } from 'lucide-react'

// const solutionCards = [
//   {
//     icon: <Zap className="w-6 h-6 text-blue-400" />,
//     title: 'Save Time',
//     desc: 'Automate up to 80% of routine tasks.',
//   },
//   {
//     icon: <DollarSign className="w-6 h-6 text-blue-400" />,
//     title: 'Reduce Costs',
//     desc: 'Lower operational overhead significantly.',
//   },
//   {
//     icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
//     title: 'Scale Operations',
//     desc: 'Handle 10x volume without adding headcount.',
//     active: true,
//   },
//   {
//     icon: <Zap className="w-6 h-6 text-blue-400" />,
//     title: 'Improve Accuracy',
//     desc: 'Reduce manual errors and increase consistency.',
//   },
// ]

// export default function BottleneckSolutionSection() {
//   return (
//     <section className=" relative bg-[#030b1b] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
//           {/* LEFT SIDE */}
//           <div className="lg:sticky lg:top-24 lg:self-start h-fit">
//             <div className="max-w-xl">
//               <span className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-red-500">
//                               <CircleDotDashed/>

//                         The Bottleneck
//               </span>

//               <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
//                 Manual processes slow your business down.
//               </h2>

//               <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
//                 Every hour spent on repetitive tasks is an hour stolen from strategic
//                 growth. Inefficiencies breed errors, frustrate teams, and cap your
//                 scaling potential.
//               </p>

//               <ul className="mt-10 space-y-5">
//                 <li className="flex items-start gap-4 text-white/65">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
//                   <span className="text-base sm:text-lg">
//                     Wasted time on repetitive data entry
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-4 text-white/65">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
//                   <span className="text-base sm:text-lg">
//                     Human errors causing costly mistakes
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-4 text-white/65">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
//                   <span className="text-base sm:text-lg">
//                     Inability to scale operations quickly
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//          <div className="relative">
//   <div className="group relative rounded-[32px] border border-blue-400/10 bg-white/[0.02] p-6 sm:p-8 lg:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
    
//    <div
//   className="pointer-events-none absolute inset-0 rounded-[32px]
//   opacity-70 scale-100 blur-2xl
//   transition-all duration-700 ease-out

//   bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_40%)]

//   group-hover:opacity-100
//   group-hover:scale-110
//   group-hover:blur-3xl"
// />

//     <div className="relative z-10">
//       <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-400/10">
//         <Sparkles className="h-8 w-8 text-blue-400" />
//       </div>

//       <h3 className="mt-8 text-3xl font-semibold text-white sm:text-4xl">
//         The Intelligent Solution
//       </h3>

//       <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
//         We build bespoke AI-powered systems that automate complex
//         workflows, eliminate errors, and unlock unprecedented growth
//         capacity.
//       </p>

//       <div className="mt-10 space-y-6">
//         {solutionCards.map((card, index) => (
//           <div
//             key={index}
// className="rounded-[24px] border border-white/10 bg-[#071426] p-6 transition-all duration-500 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"          >
//             <div className="flex items-start gap-4 sm:gap-5">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-400/10">
//                 {card.icon}
//               </div>

//               <div>
//                 <h4 className="text-xl font-semibold text-white sm:text-2xl">
//                   {card.title}
//                 </h4>
//                 <p className="mt-2 text-sm leading-7 text-white/50 sm:text-base">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
//         </div>

//         {/* مسافة زيادة تحت السيكشن عشان الإحساس يبقى مريح */}
//         <div className="h-10 md:h-16" />
//       </div>
//     </section>
//   )
// }



import { motion } from 'framer-motion'
import { Sparkles, Zap, DollarSign, TrendingUp, CircleDotDashed } from 'lucide-react'
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from '../../../lib/motion'

const solutionCards = [
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: 'Save Time',
    desc: 'Automate up to 80% of routine tasks.',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-blue-400" />,
    title: 'Reduce Costs',
    desc: 'Lower operational overhead significantly.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
    title: 'Scale Operations',
    desc: 'Handle 10x volume without adding headcount.',
    active: true,
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: 'Improve Accuracy',
    desc: 'Reduce manual errors and increase consistency.',
  },
]

export default function BottleneckSolutionSection() {
  return (
    <section className=" relative bg-[#030b1b] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="lg:sticky lg:top-24 lg:self-start h-fit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
          >
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-red-500">
                <CircleDotDashed />
                The Bottleneck
              </span>

              <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Manual processes slow your business down.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                Every hour spent on repetitive tasks is an hour stolen from strategic
                growth. Inefficiencies breed errors, frustrate teams, and cap your
                scaling potential.
              </p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4 text-white/65">
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                  <span className="text-base sm:text-lg">
                    Wasted time on repetitive data entry
                  </span>
                </li>
                <li className="flex items-start gap-4 text-white/65">
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                  <span className="text-base sm:text-lg">
                    Human errors causing costly mistakes
                  </span>
                </li>
                <li className="flex items-start gap-4 text-white/65">
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                  <span className="text-base sm:text-lg">
                    Inability to scale operations quickly
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
          >
            <div className="group relative rounded-4xl border border-blue-400/10 bg-white/2 p-6 sm:p-8 lg:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div
                className="pointer-events-none absolute inset-0 rounded-4xl
                opacity-70 scale-100 blur-2xl
                transition-all duration-700 ease-out
                bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_40%)]
                group-hover:opacity-100
                group-hover:scale-110
                group-hover:blur-3xl"
              />

              <div className="relative z-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-400/10">
                  <Sparkles className="h-8 w-8 text-blue-400" />
                </div>

                <h3 className="mt-8 text-3xl font-semibold text-white sm:text-4xl">
                  The Intelligent Solution
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  We build bespoke AI-powered systems that automate complex
                  workflows, eliminate errors, and unlock unprecedented growth
                  capacity.
                </p>

                <motion.div
                  className="mt-10 space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                >
                  {solutionCards.map((card, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      whileHover={{ y: -4 }}
                      className="rounded-3xl border border-white/10 bg-[#071426] p-6 transition-all duration-500 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-400/10">
                          {card.icon}
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white sm:text-2xl">
                            {card.title}
                          </h4>
                          <p className="mt-2 text-sm leading-7 text-white/50 sm:text-base">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="h-10 md:h-16" />
      </div>
    </section>
  )
}