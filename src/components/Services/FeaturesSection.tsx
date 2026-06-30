// import { Sparkles, Zap, Palette, Code2 } from "lucide-react";

// export default function FeaturesSection() {
//   const features = [
//     {
//       title: "AI-Powered Design",
//       desc: "Create stunning websites with intelligent design suggestions and automated layouts.",
//       icon: Sparkles,
//     },
//     {
//       title: "Lightning Fast",
//       desc: "Build and deploy production-ready websites in minutes, not days.",
//       icon: Zap,
//     },
//     {
//       title: "Beautiful Templates",
//       desc: "Access a curated collection of professionally designed templates.",
//       icon: Palette,
//     },
//     {
//       title: "Clean Code",
//       desc: "Generate production-ready, maintainable code that follows best practices.",
//       icon: Code2,
//     },
//   ];

//   return (
    
//     <section className="py-20  ">
    
//       <div className="container mx-auto text-center">

//        <h1 className="text-5xl font-bold">Powerful Features</h1>
//         <p className="text-gray-400 mt-10 mb-10 text-lg max-w-2xl mx-auto">
//             Everything you need to build amazing websites, powered by AI
//         </p>

//         {/* Grid */}
//         <div className="container">

  
//         <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

//           {features.map((item, index) => {
//             const Icon = item.icon;

//             return (
//             <div
//   key={index}
//   className="
//     bg-[#0D131F] border border-gray-800 
//     rounded-2xl p-8 text-left

//     transition-all duration-300

//     hover:shadow-xl hover:shadow-indigo-500/10
//   "
// >
//   <div className="mb-5">
//     <Icon className="w-7 h-7 text-indigo-400" />
//   </div>

//   <h3 className="text-xl font-semibold mb-3">
//     {item.title}
//   </h3>

//   <p className="text-gray-400 text-sm leading-7">
//     {item.desc}
//   </p>
// </div>
//             );
//           })}

//         </div>
//       </div>
//             </div>
//     </section>
//   );
// }



import { Sparkles, Zap, Palette, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Design",
      desc: "Create stunning websites with intelligent design suggestions and automated layouts.",
      icon: Sparkles,
    },
    {
      title: "Lightning Fast",
      desc: "Build and deploy production-ready websites in minutes, not days.",
      icon: Zap,
    },
    {
      title: "Beautiful Templates",
      desc: "Access a curated collection of professionally designed templates.",
      icon: Palette,
    },
    {
      title: "Clean Code",
      desc: "Generate production-ready, maintainable code that follows best practices.",
      icon: Code2,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 variants={fadeUp} className="text-5xl font-bold">
            Powerful Features
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-10 mb-10 text-lg max-w-2xl mx-auto"
          >
            Everything you need to build amazing websites, powered by AI
          </motion.p>
        </motion.div>

        <div className="container">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="
                    bg-[#0D131F] border border-gray-800 
                    rounded-2xl p-8 text-left
                    transition-all duration-300
                    hover:shadow-xl hover:shadow-indigo-500/10
                  "
                >
                  <div className="mb-5">
                    <Icon className="w-7 h-7 text-indigo-400" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}