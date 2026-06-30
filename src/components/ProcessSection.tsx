// import { processSteps } from "../data/process"
// import ProcessCard from "./ProcessCard"

// export default function ProcessSection() {
//   return (
//     <section  className="bg-[#020617] text-white py-20 mt-20 mb-0">
//       <div className="container mx-auto px-3">

//         <div className="grid lg:grid-cols-[0.6fr_1.1fr] gap-4 items-center  ">

//           {/* left content */}
//           <div >
//             <h2 className="text-4xl font-bold mb-6">
//               Our Process
//             </h2>

//             <p className="text-gray-400 max-w-lg">
//               A simple, transparent timeline to get you from concept to launch without the headaches.
//             </p>
//           </div>

//           {/* right cards */}
//           <div className=" grid md:grid-cols-2 gap-8">
//             {processSteps.map(step => (
//               <ProcessCard key={step.number} step={step} />
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }






import { motion } from "framer-motion";
import { processSteps } from "../data/process";
import ProcessCard from "./ProcessCard";
import { fadeLeft, staggerContainer } from "../lib/motion";

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#020617] text-white py-20 mt-20 mb-0">
      <div className="container mx-auto px-3">
        <div className="grid lg:grid-cols-[0.6fr_1.1fr] gap-4 items-center">
          {/* left content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Process
            </h2>

            <p className="text-gray-400 max-w-lg">
              A simple, transparent timeline to get you from concept to launch without the headaches.
            </p>
          </motion.div>

          {/* right cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {processSteps.map(step => (
              <ProcessCard key={step.number} step={step} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}