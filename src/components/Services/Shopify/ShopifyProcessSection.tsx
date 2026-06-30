// const steps = [
//   { step: 'Phase 01', title: 'Analyze', desc: 'We study your Shopify operations to identify automation gaps and bottlenecks.' },
//   { step: 'Phase 02', title: 'Design', desc: 'We create AI workflows tailored to your team, store structure, and growth goals.' },
//   { step: 'Phase 03', title: 'Automate', desc: 'We implement custom automations across operations, support, and reporting.' },
//   { step: 'Phase 04', title: 'Optimize', desc: 'We continuously refine performance to maximize speed, clarity, and scale.' },
// ]

// export default function ShopifyProcessSection() {
//   return (
//     <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
//       <div className="mx-auto max-w-[1200px]">
//         <h2 className="text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
//           The Integration Protocol
//         </h2>
//         <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
//           A proven approach to launching your Shopify automation systems.
//         </p>

//         <div className="relative mx-auto mt-16 max-w-3xl">
//           <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-cyan-300/20 md:block" />
//           <div className="space-y-10">
//             {steps.map((item, idx) => (
//               <div key={item.step} className={`grid items-center gap-14 md:grid-cols-2 ${idx % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
//                 <div className="rounded-[20px] border border-white/10 bg-[#10192b] p-6">
//                   <p className="text-xs font-medium tracking-[0.16em] text-cyan-300">{item.step}</p>
//                   <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
//                   <p className="mt-3 text-white/58">{item.desc}</p>
//                 </div>
//                 <div className="hidden justify-center md:flex">
//                   <span className="h-3 w-3 rounded-full border border-cyan-300/50 bg-[#030b1b] shadow-[0_0_20px_rgba(34,211,238,0.25)]" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../../lib/motion'

const steps = [
  { step: 'Phase 01', title: 'Analyze', desc: 'We study your Shopify operations to identify automation gaps and bottlenecks.' },
  { step: 'Phase 02', title: 'Design', desc: 'We create AI workflows tailored to your team, store structure, and growth goals.' },
  { step: 'Phase 03', title: 'Automate', desc: 'We implement custom automations across operations, support, and reporting.' },
  { step: 'Phase 04', title: 'Optimize', desc: 'We continuously refine performance to maximize speed, clarity, and scale.' },
]

export default function ShopifyProcessSection() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
            The Integration Protocol
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
            A proven approach to launching your Shopify automation systems.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-cyan-300/20 md:block" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="space-y-10"
          >
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className={`grid items-center gap-14 md:grid-cols-2 ${idx % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="rounded-[20px] border border-white/10 bg-[#10192b] p-6 transition-all duration-300 hover:border-cyan-300/25 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)]">
                  <p className="text-xs font-medium tracking-[0.16em] text-cyan-300">{item.step}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-white/58">{item.desc}</p>
                </div>
                <div className="hidden justify-center md:flex">
                  <span className="h-3 w-3 rounded-full border border-cyan-300/50 bg-[#030b1b] shadow-[0_0_20px_rgba(34,211,238,0.25)]" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}