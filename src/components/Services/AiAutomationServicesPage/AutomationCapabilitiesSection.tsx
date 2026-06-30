// import React from 'react'
// import { Link } from 'react-router-dom'
// import { ArrowRight } from 'lucide-react'
// import img1 from '../../../assets/images/ai-automation/1.png'
// import img2 from '../../../assets/images/ai-automation/2.png'
// import img3 from '../../../assets/images/ai-automation/3.png'
// import img4 from '../../../assets/images/ai-automation/4.png'
// import img5 from '../../../assets/images/ai-automation/5.png'
// import img6 from '../../../assets/images/ai-automation/6.png'
// const capabilities = [
//   {
//     title: 'AI-Powered Customer Support',
//     description:
//       'Automate responses to common customer queries and escalate complex issues seamlessly.',
//     tag: 'Customer Service',
//     image: img1,
//   },
//   {
//     title: 'Intelligent Document Processing',
//     description:
//       'Extract, classify, and validate data from various document types with high accuracy.',
//     tag: 'Data Processing',
//     image: img2,
//   },
//   {
//     title: 'Predictive System Maintenance',
//     description:
//       'Anticipate equipment failures and schedule maintenance proactively to minimize downtime.',
//     tag: 'Operations',
//     image: img3,
//   },
//   {
//     title: 'Automated Content Creation',
//     description:
//       'Generate high-quality articles, marketing copy, and reports using advanced AI models.',
//     tag: 'Marketing & Content',
//     image: img4,
//   },
//   {
//     title: 'Real-time Fraud Detection',
//     description:
//       'Identify and flag suspicious transactions and activities instantly to prevent financial losses.',
//     tag: 'Security & Finance',
//     image: img5,
//   },
//   {
//     title: 'Supply Chain Optimization',
//     description:
//       'Enhance logistics, inventory management, and demand forecasting for improved efficiency.',
//     tag: 'Logistics',
//     image: img6,
//   },
// ]
// export default function AutomationCapabilitiesSection() {
//   return (
//     <section className="relative px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {capabilities.map((item, index) => (
//             <article
//               key={index}
//               className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#071126] p-8 transition-all duration-500 ease-out shadow-[0_0_0_1px_rgba(255,255,255,0.02)]  hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
//             >
//               {/* hover glow from top-left */}
//               <div
//                 className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 scale-100 blur-3xl transition-all duration-700 ease-out
//                 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_42%)]
//                 group-hover:opacity-100 group-hover:scale-110"
//               />

//               {/* top line يظهر وقت الهوفر فقط */}
//               <div
//                 className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-500
//                 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
//                 group-hover:opacity-100"
//               />

//               <div className="relative z-10 flex h-full flex-col">
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="h-[64px] w-[64px] overflow-hidden rounded-[18px] border border-cyan-400/20 bg-[#09152c]">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                   </div>

//                   <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs tracking-[0.02em] text-white/55 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-white/70">
//                     {item.tag}
//                   </span>
//                 </div>

//                 <div className="mt-9">
//                   <h3 className="text-[28px] leading-[1.15] tracking-[-0.03em] font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
//                     {item.title}
//                   </h3>

//                   <p className="mt-6 text-[17px] leading-9 text-white/58">
//                     {item.description}
//                   </p>
//                 </div>

//                 <div className="flex-1" />

//                 <div className="mt-10 h-px w-full bg-white/10 transition-colors duration-300 group-hover:bg-cyan-400/20" />

//                 <Link
//                   to="/contact"
//                   className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-white/45 transition-all duration-300 group-hover:text-cyan-400"
//                 >
//                   <span>Explore Capability</span>
//                   <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }





import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import img1 from '../../../assets/images/ai-automation/1.png'
import img2 from '../../../assets/images/ai-automation/2.png'
import img3 from '../../../assets/images/ai-automation/3.png'
import img4 from '../../../assets/images/ai-automation/4.png'
import img5 from '../../../assets/images/ai-automation/5.png'
import img6 from '../../../assets/images/ai-automation/6.png'
import { fadeUp, staggerContainer } from '../../../lib/motion'

const capabilities = [
  {
    title: 'AI-Powered Customer Support',
    description:
      'Automate responses to common customer queries and escalate complex issues seamlessly.',
    tag: 'Customer Service',
    image: img1,
  },
  {
    title: 'Intelligent Document Processing',
    description:
      'Extract, classify, and validate data from various document types with high accuracy.',
    tag: 'Data Processing',
    image: img2,
  },
  {
    title: 'Predictive System Maintenance',
    description:
      'Anticipate equipment failures and schedule maintenance proactively to minimize downtime.',
    tag: 'Operations',
    image: img3,
  },
  {
    title: 'Automated Content Creation',
    description:
      'Generate high-quality articles, marketing copy, and reports using advanced AI models.',
    tag: 'Marketing & Content',
    image: img4,
  },
  {
    title: 'Real-time Fraud Detection',
    description:
      'Identify and flag suspicious transactions and activities instantly to prevent financial losses.',
    tag: 'Security & Finance',
    image: img5,
  },
  {
    title: 'Supply Chain Optimization',
    description:
      'Enhance logistics, inventory management, and demand forecasting for improved efficiency.',
    tag: 'Logistics',
    image: img6,
  },
]

export default function AutomationCapabilitiesSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {capabilities.map((item, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#071126] p-8 transition-all duration-500 ease-out shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 scale-100 blur-3xl transition-all duration-700 ease-out
                bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_42%)]
                group-hover:opacity-100 group-hover:scale-110"
              />

              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-500
                bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400
                group-hover:opacity-100"
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-[18px] border border-cyan-400/20 bg-[#09152c]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs tracking-[0.02em] text-white/55 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-white/70">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-9">
                  <h3 className="text-[28px] leading-[1.15] tracking-[-0.03em] font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[17px] leading-9 text-white/58">
                    {item.description}
                  </p>
                </div>

                <div className="flex-1" />

                <div className="mt-10 h-px w-full bg-white/10 transition-colors duration-300 group-hover:bg-cyan-400/20" />

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-white/45 transition-all duration-300 group-hover:text-cyan-400"
                >
                  <span>Explore Capability</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}