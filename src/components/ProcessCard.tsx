// import type { ProcessStep } from "../data/process"

// interface Props {
//   step: ProcessStep
// }

// export default function ProcessCard({ step }: Props) {
//   return (
//     <div className="relative border border-white/5 rounded-2xl p-5 bg-[#0E1522]  ">
//       {/* number */}
//       <span className="absolute right-6 top-6 text-6xl font-bold text-white/5">
//         {step.number}
//       </span>

//       <h3 className="text-blue-700 font-semibold text-2xl mb-3">
//         {step.title}
//       </h3>

//       <p className="text-gray-400 text-md">
//         {step.description}
//       </p>
//     </div>
//   )
// }


import { motion } from "framer-motion";
import type { ProcessStep } from "../data/process";
import { fadeUp } from "../lib/motion";

interface Props {
  step: ProcessStep
}

export default function ProcessCard({ step }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative border border-white/5 rounded-2xl p-5 bg-[#0E1522]"
    >
      {/* number */}
      <span className="absolute right-6 top-6 text-6xl font-bold text-white/5">
        {step.number}
      </span>

      <h3 className="text-blue-700 font-semibold text-2xl mb-3">
        {step.title}
      </h3>

      <p className="text-gray-400 text-md">
        {step.description}
      </p>
    </motion.div>
  );
}