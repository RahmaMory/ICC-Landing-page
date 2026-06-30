// import { Zap, Rocket, Layers } from "lucide-react";
// import problemImg from "../../../assets/images/mvp/Problem.png";
// import solutionImg from "../../../assets/images/mvp/suliotion.png";
// import featuresImg from "../../../assets/images/mvp/Features.png";
// import resultImg from "../../../assets/images/mvp/Result.png";

// const steps = [
//   {
//     number: "01",
//     tag: "THE TRAP",
//     title: "Problem",
//     desc: "Spending months building the wrong thing. Wasting capital on unvalidated assumptions while competitors move faster.",
//     image: problemImg,
//   },
//   {
//     number: "02",
//     tag: "THE PIVOT",
//     title: "Solution",
//     desc: "We help you validate fast with a real product. We strip away the noise and focus entirely on your core value proposition.",
//     image: solutionImg,
//   },
//   {
//     number: "03",
//     tag: "THE ARSENAL",
//     title: "Features",
//     image: featuresImg,
//     featuresList: [
//       { icon: Zap, text: "Fast development" },
//       { icon: Rocket, text: "Core features only" },
//       { icon: Layers, text: "Scalable base" },
//     ],
//   },
//   {
//     number: "04",
//     tag: "THE LAUNCH",
//     title: "Result",
//     desc: "Launch in weeks, not months. Get real user feedback, iterate rapidly, and secure your market position.",
//     image: resultImg,
//   },
// ];

// export default function MVPProtocolSection() {
//   return (
//     <section
//       id="mvp-process"
//       className="relative overflow-hidden bg-[#070B14] px-4 sm:px-6 py-20 sm:py-24 md:py-28 lg:py-32"
//     >
//       {/* Title */}
//       <div className="mx-auto mb-14 sm:mb-16 md:mb-20 max-w-2xl text-center">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
//           The MVP Protocol
//         </h2>
//         <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-400">
//           A systematic approach to transforming ideas into market-ready products
//           with ruthless efficiency.
//         </p>
//       </div>

//       {/* Center line wrapper - desktop only */}
//       <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
//         <div className="relative h-full w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent">
//           <div className="moving-dot" />
//         </div>
//       </div>

//       {/* Steps */}
//       <div className="relative z-10 space-y-12 sm:space-y-14 md:space-y-16">
//         {steps.map((item, index) => {
//           const isReverse = index % 2 !== 0;

//           return (
//             <div
//               key={item.number}
//               className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-12"
//             >
//               {/* Card */}
//               <div
//                 className={`
//                   group relative z-10 flex flex-col
//                   max-w-md sm:max-w-lg lg:max-w-xl mx-auto w-full
//                   bg-[#0D131F] border border-white/10
//                   rounded-2xl p-6 sm:p-8 lg:p-10
//                   min-h-[260px] sm:min-h-[280px]
//                   transition-all duration-500
//                   hover:border-purple-500/60
//                   hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
//                   ${isReverse ? "md:order-2" : ""}
//                 `}
//               >
//                 {/* Number */}
//                 <span
//                   className="
//                     pointer-events-none absolute
//                     -left-6 -top-4 sm:-left-8 sm:-top-6
//                     text-[44px] sm:text-[60px] md:text-[90px]
//                     font-bold leading-none
//                     text-cyan-300/5
//                     select-none z-0
//                   "
//                 >
//                   {item.number}
//                 </span>

//                 <span className="relative z-10 text-xs sm:text-sm font-bold tracking-widest text-cyan-400">
//                   {item.tag}
//                 </span>

//                 <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
//                   {item.title}
//                 </h3>

//                 {item.title === "Features" && item.featuresList ? (
//                   <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 flex-1">
//                     {item.featuresList.map((feature, idx) => {
//                       const Icon = feature.icon;

//                       return (
//                         <div
//                           key={idx}
//                           className="flex items-center gap-3 sm:gap-5 group/item"
//                         >
//                           <div
//                             className="
//                               flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
//                               rounded-full border border-cyan-400/30 bg-cyan-500/10
//                               transition duration-300
//                               group-hover/item:border-cyan-400
//                               group-hover/item:bg-cyan-500/20
//                               group-hover/item:shadow-[0_0_20px_rgba(34,211,238,0.5)]
//                             "
//                           >
//                             <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 transition group-hover/item:scale-110" />
//                           </div>

//                           <span className="text-base sm:text-lg md:text-xl text-gray-300 leading-6">
//                             {feature.text}
//                           </span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 ) : (
//                   <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400">
//                     {item.desc}
//                   </p>
//                 )}
//               </div>

//               {/* Image */}
//               <div
//                 className={`
//                   group relative mx-auto max-w-md sm:max-w-lg lg:max-w-xl w-full
//                   ${isReverse ? "md:order-1" : ""}
//                 `}
//               >
//                 <span className="pointer-events-none absolute left-0 top-0 z-20 h-6 w-6 sm:h-8 sm:w-8 border-l-2 border-t-2 border-purple-400 opacity-0 transition duration-300 group-hover:opacity-100" />
//                 <span className="pointer-events-none absolute bottom-0 right-0 z-20 h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-r-2 border-purple-400 opacity-0 transition duration-300 group-hover:opacity-100" />

//                 <div className="overflow-hidden rounded-2xl">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-[220px] sm:h-[260px] md:h-[300px] w-full rounded-2xl object-cover shadow-xl transition duration-500 group-hover:scale-105"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }





import { Zap, Rocket, Layers } from "lucide-react";
import { motion } from "framer-motion";
import problemImg from "../../../assets/images/mvp/Problem.png";
import solutionImg from "../../../assets/images/mvp/suliotion.png";
import featuresImg from "../../../assets/images/mvp/Features.png";
import resultImg from "../../../assets/images/mvp/Result.png";
import { fadeLeft, fadeRight, fadeUp } from "../../../lib/motion";

const steps = [
  {
    number: "01",
    tag: "THE TRAP",
    title: "Problem",
    desc: "Spending months building the wrong thing. Wasting capital on unvalidated assumptions while competitors move faster.",
    image: problemImg,
  },
  {
    number: "02",
    tag: "THE PIVOT",
    title: "Solution",
    desc: "We help you validate fast with a real product. We strip away the noise and focus entirely on your core value proposition.",
    image: solutionImg,
  },
  {
    number: "03",
    tag: "THE ARSENAL",
    title: "Features",
    image: featuresImg,
    featuresList: [
      { icon: Zap, text: "Fast development" },
      { icon: Rocket, text: "Core features only" },
      { icon: Layers, text: "Scalable base" },
    ],
  },
  {
    number: "04",
    tag: "THE LAUNCH",
    title: "Result",
    desc: "Launch in weeks, not months. Get real user feedback, iterate rapidly, and secure your market position.",
    image: resultImg,
  },
];

export default function MVPProtocolSection() {
  return (
    <section
      id="mvp-process"
      className="relative overflow-hidden bg-[#070B14] px-4 sm:px-6 py-20 sm:py-24 md:py-28 lg:py-32"
    >
      <motion.div
        className="mx-auto mb-14 sm:mb-16 md:mb-20 max-w-2xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          The MVP Protocol
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-400">
          A systematic approach to transforming ideas into market-ready products
          with ruthless efficiency.
        </p>
      </motion.div>

      <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
        <div className="relative h-full w-0.5 overflow-hidden bg-linear-to-b from-transparent via-cyan-500/40 to-transparent">
          <div className="moving-dot" />
        </div>
      </div>

      <div className="relative z-10 space-y-12 sm:space-y-14 md:space-y-16">
        {steps.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={item.number}
              className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-12"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={isReverse ? fadeRight : fadeLeft}
                className={`
                  group relative z-10 flex flex-col
                  max-w-md sm:max-w-lg lg:max-w-xl mx-auto w-full
                  bg-[#0D131F] border border-white/10
                  rounded-2xl p-6 sm:p-8 lg:p-10
                  min-h-65 sm:min-h-70
                  transition-all duration-500
                  hover:border-purple-500/60
                  hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
                  ${isReverse ? "md:order-2" : ""}
                `}
              >
                <span
                  className="
                    pointer-events-none absolute
                    -left-6 -top-4 sm:-left-8 sm:-top-6
                    text-[44px] sm:text-[60px] md:text-[90px]
                    font-bold leading-none
                    text-cyan-300/5
                    select-none z-0
                  "
                >
                  {item.number}
                </span>

                <span className="relative z-10 text-xs sm:text-sm font-bold tracking-widest text-cyan-400">
                  {item.tag}
                </span>

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                  {item.title}
                </h3>

                {item.title === "Features" && item.featuresList ? (
                  <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 flex-1">
                    {item.featuresList.map((feature, idx) => {
                      const Icon = feature.icon;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -18 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: idx * 0.08 }}
                          className="flex items-center gap-3 sm:gap-5 group/item"
                        >
                          <div
                            className="
                              flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
                              rounded-full border border-cyan-400/30 bg-cyan-500/10
                              transition duration-300
                              group-hover/item:border-cyan-400
                              group-hover/item:bg-cyan-500/20
                              group-hover/item:shadow-[0_0_20px_rgba(34,211,238,0.5)]
                            "
                          >
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 transition group-hover/item:scale-110" />
                          </div>

                          <span className="text-base sm:text-lg md:text-xl text-gray-300 leading-6">
                            {feature.text}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400">
                    {item.desc}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={isReverse ? fadeLeft : fadeRight}
                className={`
                  group relative mx-auto max-w-md sm:max-w-lg lg:max-w-xl w-full
                  ${isReverse ? "md:order-1" : ""}
                `}
              >
                <span className="pointer-events-none absolute left-0 top-0 z-20 h-6 w-6 sm:h-8 sm:w-8 border-l-2 border-t-2 border-purple-400 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-0 right-0 z-20 h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-r-2 border-purple-400 opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-55 sm:h-65 md:h-75 w-full rounded-2xl object-cover shadow-xl transition duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}