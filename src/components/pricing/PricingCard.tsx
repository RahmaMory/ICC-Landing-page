// import type { PricingPlan } from "../../data/pricing"
// import { Check } from "lucide-react"

// interface Props {
//   plan: PricingPlan
//   isSelected: boolean
//   onSelect: () => void
// }

// export default function PricingCard({ plan, isSelected, onSelect }: Props) {
//   return (
//     <div
//       onClick={onSelect}
//       className={`cursor-pointer relative rounded-2xl p-10 border transition duration-300
//       ${
//         isSelected
//           ? "bg-[#0E1832] border-blue-600 -translate-y-4 shadow-2xl"
//           : "bg-[#111927] border-white/5 hover:border-white/20"
//       }`}
//     >
//       {plan.popular && (
//         <span className="absolute -top-3 right-6 bg-blue-600 text-sm font-bold px-3 py-1 rounded-full">
//           POPULAR
//         </span>
//       )}

//       {/* name */}
//       <h3
//         className={`text-xl font-semibold mb-2 transition
//         ${isSelected ? "text-blue-500" : "text-white"}`}
//       >
//         {plan.name}
//       </h3>

//       {/* price */}
//       <div className="text-4xl font-bold mb-3">
//         {plan.price}
//       </div>

//       <p className="text-gray-400 text-sm mb-6">
//         {plan.description}
//       </p>

//       <ul className="space-y-3 mb-8">
//         {plan.features.map((feature, i) => (
//           <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
//             <Check size={16} className="text-blue-500" />
//             {feature}
//           </li>
//         ))}
//       </ul>

//       <button
//         className={`w-full py-3 rounded-lg transition
//         ${
//           isSelected
//             ? "bg-gradient-to-r from-blue-600 to-indigo-500 "
//             : "border border-white/20"
//         }`}
//       >
//         {plan.buttonText}
//       </button>
//     </div>
//   )
// }




import type { PricingPlan } from "../../data/pricing"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { fadeUp } from "../../lib/motion"

interface Props {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: Props) {
  const isHighlighted = Boolean(plan.popular)

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`relative flex h-full flex-col rounded-2xl border p-10 transition duration-300
      ${
        isHighlighted
          ? "bg-[#0E1832] border-blue-600 -translate-y-4 shadow-2xl"
          : "bg-[#111927] border-white/5 hover:border-white/20"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 right-6 bg-blue-600 text-sm font-bold px-3 py-1 rounded-full">
          POPULAR
        </span>
      )}

      {/* name */}
      <h3
        className={`text-xl font-semibold mb-2 transition
        ${isHighlighted ? "text-blue-500" : "text-white"}`}
      >
        {plan.name}
      </h3>

      {/* price */}
      <div className="text-4xl font-bold mb-3">
        {plan.price}
      </div>

      <p className="text-gray-400 text-sm mb-6">
        {plan.description}
      </p>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <Check size={16} className="text-blue-500" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to={plan.href || "/#contact"}
        className={`mt-auto inline-flex w-full items-center justify-center rounded-lg px-4 py-3 font-semibold transition ${
          isHighlighted
            ? "bg-linear-to-r from-blue-600 to-indigo-500 text-white hover:opacity-90"
            : "border border-white/20 text-white hover:border-blue-400/60 hover:bg-white/5"
        }`}
      >
        {plan.buttonText}
      </Link>
    </motion.article>
  )
}
