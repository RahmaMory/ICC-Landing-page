// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { pricingPlans } from "../../data/pricing"
// import PricingCard from "./PricingCard"

// export default function PricingSection() {
//   const [selected, setSelected] = useState<string>("Growth") 

//   return (
//     <section className="bg-[#0B121E] text-white py-24">
//       <div className="container mx-auto px-6">

//         <h2 className="text-3xl font-bold text-center mb-16">
//           Simple Pricing
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {pricingPlans.map(plan => (
//             <PricingCard
//               key={plan.name}
//               plan={plan}
//               isSelected={selected === plan.name}
//               onSelect={() => setSelected(plan.name)}
//             />
//           ))}
//         </div>

//         <p className="text-center text-gray-400 mt-12">
//           Need something custom?
//           <Link to="/contact">
//             <span className="text-blue-500 ml-1 cursor-pointer">
//               Let’s talk.
//             </span>
//           </Link>
//         </p>

//       </div>
//     </section>
//   )
// }







import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { pricingPlans } from "../../data/pricing"
import PricingCard from "./PricingCard"
import { fadeUp, staggerContainer } from "../../lib/motion"

export default function PricingSection() {
  const [selected, setSelected] = useState<string>("Growth")

  return (
    <section className="bg-[#0B121E] text-white py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          Simple Pricing
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {pricingPlans.map(plan => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isSelected={selected === plan.name}
              onSelect={() => setSelected(plan.name)}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-center text-gray-400 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          Need something custom?
          <Link to="/contact">
            <span className="text-blue-500 ml-1 cursor-pointer">
              Let’s talk.
            </span>
          </Link>
        </motion.p>
      </div>
    </section>
  )
}