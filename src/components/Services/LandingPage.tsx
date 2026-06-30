// import React from "react";
// import { Link } from "react-router-dom";
// import FeaturesSection from "./FeaturesSection";
// import WhyChooseSection from "./WhyChooseSection";

// export default function LandingPage() {
//   return (
//     <>
//       <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-32 lg:py-40">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//             Build Beautiful Websites with
//             <br />
//             <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
//               AI Magic
//             </span>
//           </h1>

//           <p className="text-gray-400 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7">
//             Wix Vibe is the world's best AI software development agent,
//             helping you create production-ready websites in minutes.
//           </p>

//           <div className="mt-8 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
//             <Link
//               to="/contact"
//               className="inline-flex items-center justify-center rounded-xl
//               h-14 sm:h-15
//               px-7 sm:px-8
//               text-sm sm:text-base font-medium
//               border border-transparent
//               bg-gradient-to-r from-blue-600 to-indigo-500
//               hover:opacity-90 transition
//               w-full sm:w-auto min-w-[160px]"
//             >
//               Get Started →
//             </Link>

//             <Link
//               to="/services/landing-page"
//               className="inline-flex items-center justify-center rounded-xl
//               h-14 sm:h-15
//               px-7 sm:px-8
//               text-sm sm:text-base font-medium
//               border border-white/20 text-white
//               hover:bg-white/5 transition
//               w-full sm:w-auto min-w-[160px]"
//             >
//               View Examples
//             </Link>
//           </div>
//         </div>
//       </section>

//       <FeaturesSection />
//       <WhyChooseSection />
//     </>
//   );
// }


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeaturesSection from "./FeaturesSection";
import WhyChooseSection from "./WhyChooseSection";
import { fadeUp, staggerContainer } from "../../lib/motion";

export default function LandingPage() {
  return (
    <>
      <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-32 lg:py-40">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Build Beautiful Websites with
            <br />
            <span className="bg-linear-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
              AI Magic
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7"
          >
            Wix Vibe is the world's best AI software development agent,
            helping you create production-ready websites in minutes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl
              h-14 sm:h-15
              px-7 sm:px-8
              text-sm sm:text-base font-medium
              border border-transparent
              bg-linear-to-r from-blue-600 to-indigo-500
              hover:opacity-90 transition
              w-full sm:w-auto min-w-40"
            >
              Get Started →
            </Link>

            <Link
              to="/services/landing-page"
              className="inline-flex items-center justify-center rounded-xl
              h-14 sm:h-15
              px-7 sm:px-8
              text-sm sm:text-base font-medium
              border border-white/20 text-white
              hover:bg-white/5 transition
              w-full sm:w-auto min-w-40"
            >
              View Examples
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <FeaturesSection />
      <WhyChooseSection />
    </>
  );
}