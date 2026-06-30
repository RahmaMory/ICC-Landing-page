// import { Boxes, Bot, Package, Megaphone } from 'lucide-react'

// const items = [
//   {
//     icon: Boxes,
//     title: 'Order & Fulfillment Automation',
//     desc: 'Automatically process, route, and fulfill orders without repetitive manual work.',
//   },
//   {
//     icon: Bot,
//     title: 'AI Customer Support',
//     desc: 'Deliver instant responses and reduce support load with AI-driven support systems.',
//   },
//   {
//     icon: Package,
//     title: 'Inventory Management Automation',
//     desc: 'Track stock, sync updates, and reduce inventory blind spots across your store.',
//   },
//   {
//     icon: Megaphone,
//     title: 'Marketing Automation',
//     desc: 'Recover carts, trigger campaigns, and automate customer journeys for growth.',
//   },
// ]

// export default function ShopifyExpertiseSection() {
//   return (
//     <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8 bg-[#090E18]">
//       <div className="mx-auto max-w-[1500px]">
//         <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
//           <div>
//             <p className="text-sm font-medium tracking-[0.14em] text-cyan-300">OUR EXPERTISE</p>
//             <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
//               Shopify Automation Solutions Built for Scale
//             </h2>
//           </div>
//         </div>

//         <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {items.map((item) => {
//             const Icon = item.icon
//             return (
//               <article
//                 key={item.title}
//                 className="group rounded-[24px] border border-white/10 bg-[#10192b] p-6 transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)]"
//               >
//                 <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
//                   <Icon className="h-5 w-5 text-cyan-300" />
//                 </div>
//                 <h3 className="text-[20px] font-semibold text-white">{item.title}</h3>
//                 <p className="mt-4 text-[15px] leading-7 text-white/58">{item.desc}</p>
//               </article>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }








import { Boxes, Bot, Package, Megaphone } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../../lib/motion'

const items = [
  {
    icon: Boxes,
    title: 'Order & Fulfillment Automation',
    desc: 'Automatically process, route, and fulfill orders without repetitive manual work.',
  },
  {
    icon: Bot,
    title: 'AI Customer Support',
    desc: 'Deliver instant responses and reduce support load with AI-driven support systems.',
  },
  {
    icon: Package,
    title: 'Inventory Management Automation',
    desc: 'Track stock, sync updates, and reduce inventory blind spots across your store.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Automation',
    desc: 'Recover carts, trigger campaigns, and automate customer journeys for growth.',
  },
]

export default function ShopifyExpertiseSection() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8 bg-[#090E18]">
      <div className="mx-auto max-w-375">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-sm font-medium tracking-[0.14em] text-cyan-300">OUR EXPERTISE</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
              Shopify Automation Solutions Built for Scale
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-white/10 bg-[#10192b] p-6 transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-[20px] font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-white/58">{item.desc}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}