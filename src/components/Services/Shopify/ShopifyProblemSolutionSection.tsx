// import { CircleCheck, ShieldX } from "lucide-react"

// export default function ShopifyProblemSolutionSection() {
//   const items = {
//     oldWay: [
//       'Manual order handling delays fulfillment.',
//       'Customer support requests pile up quickly.',
//       'Inventory updates lag behind store activity.',
//       'Teams lose visibility, speed, and focus.',
//     ],
//     aiWay: [
//       'Instant, automated operational workflows.',
//       '24/7 AI-driven customer response flows.',
//       'Predictive, proactive inventory visibility.',
//       'Higher accuracy, lower cost, faster growth.',
//     ],
//   }

//   return (
//     <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
//       <div className="mx-auto max-w-[1500px]">
//         <h2 className="text-center text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[58px]">
//           The Evolution of Commerce
//         </h2>

//         <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
//           <article className="rounded-[28px] border border-orange-400/15 bg-[#131d2f] p-8">
//             <h3 className="text-[24px] font-semibold text-red-500 flex gap-2 align-middle"><ShieldX/> The Old Way</h3>
//             <ul className="mt-6 space-y-4 text-white/60">
//               {items.oldWay.map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </article>

//           <article className="rounded-[28px] border border-cyan-400/15 bg-[#131d2f] p-8 shadow-[0_0_30px_rgba(34,211,238,0.06)]">
//             <h3 className="text-[24px] font-semibold text-cyan-300 flex gap-2 align-middle"><CircleCheck /> The AI Way</h3>
//             <ul className="mt-6 space-y-4 text-white/60">
//               {items.aiWay.map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </article>
//         </div>
//       </div>
//     </section>
//   )


// }





import { CircleCheck, ShieldX } from "lucide-react"
import { motion } from "framer-motion"
import { fadeLeft, fadeRight, fadeUp } from "../../../lib/motion"

export default function ShopifyProblemSolutionSection() {
  const items = {
    oldWay: [
      'Manual order handling delays fulfillment.',
      'Customer support requests pile up quickly.',
      'Inventory updates lag behind store activity.',
      'Teams lose visibility, speed, and focus.',
    ],
    aiWay: [
      'Instant, automated operational workflows.',
      '24/7 AI-driven customer response flows.',
      'Predictive, proactive inventory visibility.',
      'Higher accuracy, lower cost, faster growth.',
    ],
  }

  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-375">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[58px]"
        >
          The Evolution of Commerce
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
            whileHover={{ y: -4 }}
            className="rounded-[28px] border border-orange-400/15 bg-[#131d2f] p-8"
          >
            <h3 className="text-[24px] font-semibold text-red-500 flex gap-2 align-middle"><ShieldX/> The Old Way</h3>
            <ul className="mt-6 space-y-4 text-white/60">
              {items.oldWay.map((item, index) => (
                <li key={item}>
                  <motion.div
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
            whileHover={{ y: -4 }}
            className="rounded-[28px] border border-cyan-400/15 bg-[#131d2f] p-8 shadow-[0_0_30px_rgba(34,211,238,0.06)]"
          >
            <h3 className="text-[24px] font-semibold text-cyan-300 flex gap-2 align-middle"><CircleCheck /> The AI Way</h3>
            <ul className="mt-6 space-y-4 text-white/60">
              {items.aiWay.map((item, index) => (
                <li key={item}>
                  <motion.div
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  )
}