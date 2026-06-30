// import { Link } from "react-router-dom";

// export default function EcommerceHeroSection() {
//   return (
//     <>
//     {/* <div className="container bg-[#0B121E]">
//         ggg

//     </div> */}
//    <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-32 lg:py-40 bg-[#0B121E]">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//            Turn Your Store Into a
//             <br />
//             <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
//              Sales Machine
//             </span>
//           </h1>
//           <p className="text-blue-300 mt-6 sm:mt-6 ext-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7">Trusted by startups & growing brands</p>

//           <p className="text-gray-400 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7">
            
//             More than a store. A sales machine.
//           </p>

// <Link
//   to="/contact"
//   className="
//   mt-10 sm:mt-12
//   group relative inline-flex items-center justify-center
//   rounded-full h-14 px-8 text-base font-medium
//   text-white bg-gradient-to-r from-blue-600 to-violet-600
//   transition-all duration-300
//   shadow-[0_0_12px_rgba(99,102,241,0.35)]
//   hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]
//   hover:tracking-[0.02em]
// "
// >
//   Launch Your Store →
//   <span
//     className="
//     pointer-events-none absolute left-1/2 -bottom-3 -translate-x-1/2
//     h-5 w-px bg-gradient-to-b from-blue-400/70 to-transparent
//     opacity-70 transition-all duration-300
//     group-hover:h-6 group-hover:opacity-90
//   "
//   />
// </Link>

         
//         </div>
//       </section>
      
//     </>
//   )
// }



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../../lib/motion";

export default function EcommerceHeroSection() {
  return (
    <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-32 lg:py-40 bg-[#0B121E]">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Turn Your Store Into a
          <br />
          <span className="bg-linear-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
            Sales Machine
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-blue-300 mt-6 sm:mt-6 ext-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7"
        >
          Trusted by startups & growing brands
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7"
        >
          More than a store. A sales machine.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            to="/contact"
            className="
            mt-10 sm:mt-12
            group relative inline-flex items-center justify-center
            rounded-full h-14 px-8 text-base font-medium
            text-white bg-linear-to-r from-blue-600 to-violet-600
            transition-all duration-300
            shadow-[0_0_12px_rgba(99,102,241,0.35)]
            hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]
            hover:tracking-[0.02em]
          "
          >
            Launch Your Store →
            <span
              className="
              pointer-events-none absolute left-1/2 -bottom-3 -translate-x-1/2
              h-5 w-px bg-linear-to-b from-blue-400/70 to-transparent
              opacity-70 transition-all duration-300
              group-hover:h-6 group-hover:opacity-90
            "
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}