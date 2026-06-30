// import React from 'react'
// import img7 from '../../../assets/images/ai-automation/7.png'
// import img8 from '../../../assets/images/ai-automation/8.png'
// import img9 from '../../../assets/images/ai-automation/9.png'
// import img10 from '../../../assets/images/ai-automation/10.png'

// const processSteps = [
//   {
//     number: '1',
//     title: 'Discovery & Requirements Gathering',
//     description:
//       'Understand current processes, identify pain points, and define automation goals.',
//     image: img7,
//   },
//   {
//     number: '2',
//     title: 'Solution Design & Development',
//     description:
//       'Design the automation architecture, develop scripts, and integrate with existing systems.',
//     image: img8,
//   },
//   {
//     number: '3',
//     title: 'Testing, Validation & Optimization',
//     description:
//       'Rigorously test the automation solution for functionality, performance, and reliability.',
//     image: img9,
//   },
//   {
//     number: '4',
//     title: 'Deployment, Training & Continuous Monitoring',
//     description:
//       'Deploy the solution, train users, and continuously monitor performance for ongoing success.',
//     image: img10,
//   },
// ]

// export default function IntegrationProcessSection() {
//   return (
//     <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28">
//       <div className="mx-auto max-w-[1800px]">
//         {/* Header */}
//         <div className="mx-auto max-w-4xl text-center">
//           <h2 className="text-white font-semibold leading-[0.95] tracking-[-0.04em] text-4xl sm:text-5xl md:text-6xl lg:text-[72px]">
//             <span>The Integration </span>
//             <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
//               Process
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-[18px] leading-8 text-white/60">
//             A systematic, risk-free approach to deploying AI automation within
//             your existing infrastructure.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="relative mt-20 md:mt-24">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
//             {processSteps.map((step, index) => (
//               <div key={index} className="group relative">
//                 {/* Number */}
//                 <div className="mb-8 flex justify-center">
//                   <div className="relative inline-flex h-[60px] w-[82px] items-center justify-center rounded-full border border-white/10 bg-[#071126] text-2xl md:text-[22px] font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-500 group-hover:border-cyan-400/40 group-hover:text-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.14)]">
//                     <span className="relative z-10">{step.number}</span>

//                     <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-2xl transition-all duration-500 bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_65%)] group-hover:opacity-100" />
//                   </div>
//                 </div>

//                 {/* connector line on desktop */}
//                 {index !== processSteps.length - 1 && (
//                   <div className="pointer-events-none absolute left-[calc(50%+41px)] top-[107px] hidden h-[2px] w-[calc(100%-82px+2rem)] xl:block">
//                     <div className="h-full w-full bg-white/10">
// <div className="relative h-full w-full">
//   <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-70" />
//   <div className="absolute inset-0 blur-md bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-40" />
// </div>                    </div>
//                   </div>
//                 )}

//                 {/* Card */}
//                 <article className="group/card relative overflow-hidden rounded-[28px] border border-white/10 bg-[#071126] min-h-[250px] px-8 py-10 transition-all duration-500 hover:border-cyan-400/25 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]">
//                   {/* background image */}
//                   <img
//                     src={step.image}
//                     alt={step.title}
//                     className="absolute inset-0 h-full w-full object-cover opacity-[0.18] transition-all duration-700 group-hover:scale-105 group-hover:opacity-[0.24]"
//                   />

//                   {/* dark overlay */}
//                   <div className="absolute inset-0 bg-[#071126]/78" />

//                   {/* hover glow */}
//                   <div className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-all duration-700 ease-out bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_42%)] group-hover:opacity-100 group-hover:scale-110" />

//                   {/* top line on hover */}
//                   {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-500 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 group-hover:opacity-100" /> */}

//                   <div className="relative z-10 flex h-full flex-col text-center">
//                     <h3 className="mx-auto max-w-[320px] text-[28px] leading-[1.2] tracking-[-0.03em] font-semibold text-white transition-colors duration-300 group-hover:text-white group-hover:border-cyan-100 ">
//                       {step.title}
//                     </h3>

//                     <p className="mx-auto mt-6 max-w-[330px] text-[17px] leading-8 text-white/55">
//                       {step.description}
//                     </p>
//                   </div>
//                 </article>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }








import { motion } from 'framer-motion'
import img7 from '../../../assets/images/ai-automation/7.png'
import img8 from '../../../assets/images/ai-automation/8.png'
import img9 from '../../../assets/images/ai-automation/9.png'
import img10 from '../../../assets/images/ai-automation/10.png'
import { fadeUp, staggerContainer } from '../../../lib/motion'

const processSteps = [
  {
    number: '1',
    title: 'Discovery & Requirements Gathering',
    description:
      'Understand current processes, identify pain points, and define automation goals.',
    image: img7,
  },
  {
    number: '2',
    title: 'Solution Design & Development',
    description:
      'Design the automation architecture, develop scripts, and integrate with existing systems.',
    image: img8,
  },
  {
    number: '3',
    title: 'Testing, Validation & Optimization',
    description:
      'Rigorously test the automation solution for functionality, performance, and reliability.',
    image: img9,
  },
  {
    number: '4',
    title: 'Deployment, Training & Continuous Monitoring',
    description:
      'Deploy the solution, train users, and continuously monitor performance for ongoing success.',
    image: img10,
  },
]

export default function IntegrationProcessSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-450">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-white font-semibold leading-[0.95] tracking-[-0.04em] text-4xl sm:text-5xl md:text-6xl lg:text-[72px]">
            <span>The Integration </span>
            <span className="bg-linear-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Process
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-[18px] leading-8 text-white/60">
            A systematic, risk-free approach to deploying AI automation within
            your existing infrastructure.
          </p>
        </motion.div>

        <div className="relative mt-20 md:mt-24">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={fadeUp} className="group relative">
                <div className="mb-8 flex justify-center">
                  <div className="relative inline-flex h-15 w-20.5 items-center justify-center rounded-full border border-white/10 bg-[#071126] text-2xl md:text-[22px] font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-500 group-hover:border-cyan-400/40 group-hover:text-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.14)]">
                    <span className="relative z-10">{step.number}</span>

                    <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-2xl transition-all duration-500 bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_65%)] group-hover:opacity-100" />
                  </div>
                </div>

                {index !== processSteps.length - 1 && (
                  <div className="pointer-events-none absolute left-[calc(50%+41px)] top-26.75 hidden h-0.5 w-[calc(100%-82px+2rem)] xl:block">
                    <div className="h-full w-full bg-white/10">
                      <div className="relative h-full w-full">
                        <div className="h-full w-full bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-70" />
                        <div className="absolute inset-0 blur-md bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-40" />
                      </div>
                    </div>
                  </div>
                )}

                <article className="group/card relative overflow-hidden rounded-[28px] border border-white/10 bg-[#071126] min-h-62.5 px-8 py-10 transition-all duration-500 hover:border-cyan-400/25 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-[0.18] transition-all duration-700 group-hover:scale-105 group-hover:opacity-[0.24]"
                  />

                  <div className="absolute inset-0 bg-[#071126]/78" />

                  <div className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-all duration-700 ease-out bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_42%)] group-hover:opacity-100 group-hover:scale-110" />

                  <div className="relative z-10 flex h-full flex-col text-center">
                    <h3 className="mx-auto max-w-[320px] text-[28px] leading-[1.2] tracking-[-0.03em] font-semibold text-white transition-colors duration-300 group-hover:text-white group-hover:border-cyan-100 ">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-6 max-w-82.5 text-[17px] leading-8 text-white/55">
                      {step.description}
                    </p>
                  </div>
                </article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}