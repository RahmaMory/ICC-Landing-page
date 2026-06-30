



// import { Link } from "react-router-dom";
// import { servicesData } from "../data/servicesData";

// export default function Expertise() {
//   return (
//     <div  className="bg-[#090E18] py-16 text-white">
//       <h2 className="text-4xl font-bold text-center">Our Expertise</h2>

//       <p className="text-center max-w-2xl mx-auto text-gray-400 mt-4">
//         Everything you need to build your digital presence, from simple landing pages to complex SaaS platforms.
//       </p>

//       <div className="container mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
//         {servicesData.map((item) => {
//           const Icon = item.icon;

//           return (
//           <Link
//   to={item.path}
//   key={item.path}
//   className="group relative overflow-hidden bg-[#0D131F] border border-gray-800 rounded-2xl p-6 hover:scale-105 transition duration-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-500 block"
// >
//     {/* Coming Soon Badge */}
//                {item.comingSoon && (
//                  <span className="absolute top-4 right-4 text-xs font-semibold text-blue-300 bg-blue-400/10 border border-blue-400/20 px-3 py-1 rounded-full">
//                    Soon
//                  </span>
//                )}

//                <span className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-4xl font-bold text-white opacity-0 transition-all duration-500 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:opacity-60">
// {item.comingSoon ? (
//   <span className="text-white">Soon...</span>
// ) : (
//   `+${item.count}`
// )}</span>

//               <div className="w-fit p-3 rounded-xl transition group-hover:bg-white/10">
//                 <Icon className="w-7 h-7 text-blue-400 transition group-hover:text-white" />
//               </div>

//               <h3 className="text-lg font-semibold mb-2 mt-4">{item.title}</h3>
//               <p className="text-gray-300 text-sm">{item.desc}</p>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";

export default function Expertise() {
  return (
    <div id="expertise" className="bg-[#090E18] py-16 text-white">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="text-4xl font-bold text-center"
      >
        Our Expertise
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="text-center max-w-2xl mx-auto text-gray-400 mt-4"
      >
        Everything you need to build your digital presence, from simple landing pages to complex SaaS platforms.
      </motion.p>

      <motion.div
        className="container mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {servicesData.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div key={item.path} variants={fadeUp}>
              <Link
                to={item.path}
                className="group relative overflow-hidden bg-[#0D131F] border border-gray-800 rounded-2xl p-6 hover:scale-105 transition duration-500 hover:bg-linear-to-r hover:from-blue-600 hover:to-indigo-500 block"
              >
                {/* Coming Soon Badge */}
                {item.comingSoon && (
                  <span className="absolute top-4 right-4 text-xs font-semibold text-blue-300 bg-blue-400/10 border border-blue-400/20 px-3 py-1 rounded-full">
                    Soon
                  </span>
                )}

                <span className="absolute -right-10 top-1/2 -translate-y-1/2 text-4xl font-bold text-white opacity-0 transition-all duration-500 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:opacity-60">
                  {item.comingSoon ? (
                    <span className="text-white">Soon...</span>
                  ) : (
                    `+${item.count}`
                  )}
                </span>

                <motion.div
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  transition={{ duration: 0.25 }}
                  className="w-fit p-3 rounded-xl transition group-hover:bg-white/10"
                >
                  <Icon className="w-7 h-7 text-blue-400 transition group-hover:text-white" />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2 mt-4">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}