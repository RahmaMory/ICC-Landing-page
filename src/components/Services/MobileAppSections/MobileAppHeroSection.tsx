// import { ShieldCheck, Sparkles } from "lucide-react";
// import MobileAppFeatureList from "./MobileAppFeatureList";
// import MobileAppPhoneMockup from "./MobileAppPhoneMockup";
// import { Link } from "react-router-dom";

// export default function MobileAppHeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#070B14] px-4 sm:px-6 py-20 sm:py-24 md:py-28 lg:py-32 ">
//       {/* background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#081425] to-[#12081f]" />
//       <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:60px_60px]" />

//       <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
//         {/* left */}
//         <div className="max-w-2xl">
//           <div className="mb-6 flex items-center gap-3">
//             <span className="h-[1px] w-8 bg-blue-400/80" />
//             <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-400 uppercase">
//               Our Expertise
//             </span>
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-bold leading-[1.02] text-white">
//             Mobile Apps
//             <br />
//             People Keep
//             <br />
//             <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
//               Coming Back To
//             </span>
//           </h1>

//           <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-gray-400">
//             Designed for engagement. Built for retention, performance, and
//             long-term growth.
//           </p>

//           {/* problem + solution */}
//           <div className="mt-8 grid gap-4 sm:grid-cols-2">
//             <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition hover:border-red-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
//               <div className="mb-4 flex items-center gap-3">
//                 <div className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center">
//                   <span className="text-xs text-red-400"><ShieldCheck/></span>
//                 </div>
//                 <span className="text-sm font-semibold tracking-wide text-white uppercase">
//                   The Problem
//                 </span>
//               </div>

//               <p className="text-sm sm:text-base leading-7 text-gray-400">
//                 Most apps get deleted because they feel slow, confusing, or
//                 unnecessary.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition hover:border-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
//               <div className="mb-4 flex items-center gap-3">
//                 <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
//                   <span className="text-xs text-cyan-400"><Sparkles/></span>
//                 </div>
//                 <span className="text-sm font-semibold tracking-wide text-white uppercase">
//                   The Solution
//                 </span>
//               </div>

//               <p className="text-sm sm:text-base leading-7 text-gray-400">
//                 We build fast, intuitive mobile apps with clear UX, smooth
//                 flows, and real product value.
//               </p>
//             </div>
//           </div>

//           {/* features */}
//           <MobileAppFeatureList />

//           {/* result */}
//           <blockquote className="mt-8 border-l-2 border-cyan-400/60 pl-4 text-sm sm:text-base italic leading-7 text-gray-300/90">
//             “Boost retention, increase engagement, and create an app users
//             actually enjoy opening.”
//           </blockquote>

//           {/* CTA */}
//           <div className="mt-8">
//             <Link
//             to="/contact"
//               className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm sm:text-base font-semibold text-[#0B1020] transition hover:scale-[1.02]"
//             >
//               Build Your App
//               <span className="ml-3">→</span>
//             </Link>
//           </div>
//         </div>

//         {/* right */}
//         <div className="flex justify-center lg:justify-end">
//           <MobileAppPhoneMockup />
//         </div>
//       </div>
//     </section>
//   );
// }


import { ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import MobileAppFeatureList from "./MobileAppFeatureList";
import MobileAppPhoneMockup from "./MobileAppPhoneMockup";
import { Link } from "react-router-dom";
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "../../../lib/motion";

export default function MobileAppHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#070B14] px-4 sm:px-6 py-20 sm:py-24 md:py-28 lg:py-32 ">
      <div className="absolute inset-0 bg-linear-to-r from-[#07111f] via-[#081425] to-[#12081f]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400/80" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-400 uppercase">
              Our Expertise
            </span>
          </motion.div>

          <motion.h1
            variants={fadeLeft}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-bold leading-[1.02] text-white"
          >
            Mobile Apps
            <br />
            People Keep
            <br />
            <span className="bg-linear-to-r from-blue-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Coming Back To
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-gray-400"
          >
            Designed for engagement. Built for retention, performance, and
            long-term growth.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/2 p-5 backdrop-blur-sm transition hover:border-red-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <span className="text-xs text-red-400"><ShieldCheck /></span>
                </div>
                <span className="text-sm font-semibold tracking-wide text-white uppercase">
                  The Problem
                </span>
              </div>

              <p className="text-sm sm:text-base leading-7 text-gray-400">
                Most apps get deleted because they feel slow, confusing, or
                unnecessary.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/2 p-5 backdrop-blur-sm transition hover:border-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <span className="text-xs text-cyan-400"><Sparkles /></span>
                </div>
                <span className="text-sm font-semibold tracking-wide text-white uppercase">
                  The Solution
                </span>
              </div>

              <p className="text-sm sm:text-base leading-7 text-gray-400">
                We build fast, intuitive mobile apps with clear UX, smooth
                flows, and real product value.
              </p>
            </div>
          </motion.div>

          <MobileAppFeatureList />

          <motion.blockquote
            variants={fadeUp}
            className="mt-8 border-l-2 border-cyan-400/60 pl-4 text-sm sm:text-base italic leading-7 text-gray-300/90"
          >
            “Boost retention, increase engagement, and create an app users
            actually enjoy opening.”
          </motion.blockquote>

          <motion.div variants={fadeUp} className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm sm:text-base font-semibold text-[#0B1020] transition hover:scale-[1.02]"
            >
              Build Your App
              <span className="ml-3">→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          className="flex justify-center lg:justify-end"
        >
          <MobileAppPhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}