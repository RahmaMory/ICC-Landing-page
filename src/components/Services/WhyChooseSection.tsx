// import { CheckCircle2, Sparkles, Zap, Code2 } from "lucide-react";

// export default function WhyChooseSection() {
//   const points = [
//     "No coding experience required",
//     "Responsive design out of the box",
//     "SEO optimized",
//     "Integrated with Wix infrastructure",
//     "Real-time preview",
//     "One-click deployment",
//   ];

//   const highlights = [
//     {
//       title: "AI-First Approach",
//       desc: "Smart automation",
//       icon: Sparkles,
//     },
//     {
//       title: "Instant Results",
//       desc: "See changes live",
//       icon: Zap,
//     },
//     {
//       title: "Production Ready",
//       desc: "Deploy with confidence",
//       icon: Code2,
//     },
//   ];

//   return (
//     <div className="bg-[#090E18]">
//   <section className=" py-40 px-6  ">
//       <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
//         {/* Left Side */}
//         <div>
//           <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
//             Why Choose ICC?
//           </h2>

//           <p className="text-gray-300 mt-6 text-lg max-w-xl leading-8">
//             Built on top of the Wix platform, focusing on business logic while
//             leveraging powerful infrastructure.
//           </p>

//           <ul className="mt-10 space-y-5">
//             {points.map((item) => (
//               <li key={item} className="flex items-center gap-3 text-gray-200">
//                 <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
//                 <span className="text-base sm:text-lg">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Side Card */}
//         <div className="rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-[#141b2d] to-[#101726] p-6 sm:p-8 lg:p-10 ">
//           <div className="space-y-8">
//             {highlights.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div key={item.title} className="flex items-start gap-4">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/15 border border-indigo-400/20">
//                     <Icon className="w-7 h-7 text-indigo-400" />
//                   </div>

//                   <div>
//                     <h3 className="text-2xl font-semibold text-white">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-400 mt-1 text-base">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//      <section className="py-32 px-6 mt-40">
//   <div className="max-w-6xl mx-auto">
    
//     <div className="
//       text-center
//       rounded-3xl
//       border border-indigo-500/20
//       bg-gradient-to-br from-[#1a2135] to-[#141b2d]
//       p-10 sm:p-14 md:p-16
//     ">

//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//         Ready to Build Something Amazing?
//       </h2>

//       <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-2xl mx-auto">
//         Join thousands of creators who are building beautiful websites with Wix Vibe
//       </p>

//       <button className="
//         mt-10
//         px-7 py-3
//         rounded-xl
//         bg-gradient-to-r from-blue-600 to-indigo-500
//         hover:opacity-90 transition
//         text-white font-medium
//       ">
//         Start Building Now →
//       </button>

//     </div>

//   </div>
// </section>
//     </section>
//     </div>
  
//   );
// }





import { CheckCircle2, Sparkles, Zap, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "../../lib/motion";

export default function WhyChooseSection() {
  const points = [
    "No coding experience required",
    "Responsive design out of the box",
    "SEO optimized",
    "Integrated with Wix infrastructure",
    "Real-time preview",
    "One-click deployment",
  ];

  const highlights = [
    {
      title: "AI-First Approach",
      desc: "Smart automation",
      icon: Sparkles,
    },
    {
      title: "Instant Results",
      desc: "See changes live",
      icon: Zap,
    },
    {
      title: "Production Ready",
      desc: "Deploy with confidence",
      icon: Code2,
    },
  ];

  return (
    <div className="bg-[#090E18]">
      <section className="py-40 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeLeft}
              className="text-4xl sm:text-5xl font-bold leading-tight"
            >
              Why Choose ICC?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 mt-6 text-lg max-w-xl leading-8"
            >
              Built on top of the Wix platform, focusing on business logic while
              leveraging powerful infrastructure.
            </motion.p>

            <motion.ul variants={staggerContainer} className="mt-10 space-y-5">
              {points.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-gray-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-base sm:text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-indigo-500/20 bg-linear-to-br from-[#141b2d] to-[#101726] p-6 sm:p-8 lg:p-10"
          >
            <div className="space-y-8">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/15 border border-indigo-400/20">
                      <Icon className="w-7 h-7 text-indigo-400" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-1 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <section className="py-32 px-6 mt-40">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div
              className="
                text-center
                rounded-3xl
                border border-indigo-500/20
                bg-linear-to-br from-[#1a2135] to-[#141b2d]
                p-10 sm:p-14 md:p-16
              "
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Ready to Build Something Amazing?
              </h2>

              <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-2xl mx-auto">
                Join thousands of creators who are building beautiful websites with Wix Vibe
              </p>

              <button
                className="
                  mt-10
                  px-7 py-3
                  rounded-xl
                  bg-linear-to-r from-blue-600 to-indigo-500
                  hover:opacity-90 transition
                  text-white font-medium
                "
              >
                Start Building Now →
              </button>
            </div>
          </motion.div>
        </section>
      </section>
    </div>
  );
}