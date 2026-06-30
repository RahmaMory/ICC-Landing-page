// import { Layers3, Zap, Activity } from "lucide-react";

// const features = [
//   {
//     icon: Layers3,
//     title: "Clean UX",
//   },
//   {
//     icon: Zap,
//     title: "Fast performance",
//   },
//   {
//     icon: Activity,
//     title: "Scalable architecture",
//   },
// ];

// export default function MobileAppFeatureList() {
//   return (
//     <div className="mt-8 space-y-5">
//       {features.map((item) => {
//         const Icon = item.icon;

//         return (
//           <div key={item.title} className="flex items-center gap-4">
//             <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">
//               <Icon className="h-5 w-5 text-cyan-400" />
//             </div>

//             <span className="text-base sm:text-lg text-gray-200">
//               {item.title}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

import { Layers3, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers3,
    title: "Clean UX",
  },
  {
    icon: Zap,
    title: "Fast performance",
  },
  {
    icon: Activity,
    title: "Scalable architecture",
  },
];

export default function MobileAppFeatureList() {
  return (
    <div className="mt-8 space-y-5">
      {features.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="flex items-center gap-4"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">
              <Icon className="h-5 w-5 text-cyan-400" />
            </div>

            <span className="text-base sm:text-lg text-gray-200">
              {item.title}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}