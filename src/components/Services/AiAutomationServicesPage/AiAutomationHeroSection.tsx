// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Cpu, Network } from 'lucide-react'

// export default function AiAutomationHeroSection() {
//   return (
//     <section className="relative overflow-hidden px-4 sm:px-6 py-24 sm:py-28 md:py-32 lg:py-40">
//       <div className="max-w-5xl mx-auto text-center relative z-10">
//         <span className="text-xs bg-white/5 border border-white/10 px-4 py-2 rounded-full gap-2 inline-flex items-center text-white/80">
//           <span className="relative flex h-2 w-2">
//             <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40 animate-ping"></span>
//             <span className="relative h-2 w-2 rounded-full bg-cyan-400"></span>
//           </span>
//           Next-Generation Business Intelligence
//         </span>

//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-6 text-white">
//           Automate Your Business
//           <br />
        
//             <span className="relative inline-block bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
//               with AI.
//               <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-2xl opacity-35 -z-10"></span>
//           </span>
//         </h1>

//         <p className="text-gray-400 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-8">
//           We design intelligent systems that streamline operations, reduce
//           costs, and scale your business automatically. Stop managing tasks and
//           start managing growth.
//         </p>

//         <div className="mt-8 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
//           <Link
//             to="/contact"
//             className="group inline-flex items-center justify-center rounded-xl h-14 px-7 sm:px-8 text-sm sm:text-base font-medium border border-transparent bg-blue-300 text-black hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto min-w-[180px]"
//           >
//             <span className="transition-all duration-300 group-hover:tracking-wide group-hover:scale-105">
//               Start Automation →
//             </span>
//           </Link>

//           <Link
//             to="#"
//             className="group inline-flex items-center justify-center rounded-xl h-14 px-7 sm:px-8 text-sm sm:text-base font-medium border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06] transition-all duration-300 w-full sm:w-auto min-w-[180px]"
//           >
//             <span>See How It Works</span>
//             <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
//               →
//             </span>
//           </Link>
//         </div>
//       </div>

//       {/* Floating Left Card */}
//       <div className="absolute left-6 top-1/3 hidden md:flex animate-floatSlow">
//         <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center">
//           <Network className="w-7 h-7 text-cyan-400/80" />
//         </div>
//       </div>

//       {/* Floating Right Card */}
//       <div className="absolute right-8 top-[68%] hidden md:flex animate-floatSlow [animation-delay:1.2s]">
//         <div className="w-20 h-20 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center">
//           <Cpu className="w-8 h-8 text-purple-400/80" />
//         </div>
//       </div>

//       <style>{`
//         @keyframes floatSlow {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-12px);
//           }
//         }

//         .animate-floatSlow {
//           animation: floatSlow 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>


//  )
// }




import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cpu, Network } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../../lib/motion'

export default function AiAutomationHeroSection() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 py-24 sm:py-28 md:py-32 lg:py-40">
      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={fadeUp}
          className="text-xs bg-white/5 border border-white/10 px-4 py-2 rounded-full gap-2 inline-flex items-center text-white/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40 animate-ping"></span>
            <span className="relative h-2 w-2 rounded-full bg-cyan-400"></span>
          </span>
          Next-Generation Business Intelligence
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-6 text-white"
        >
          Automate Your Business
          <br />
          <span className="relative inline-block bg-linear-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            with AI.
            <span className="absolute inset-0 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 blur-2xl opacity-35 -z-10"></span>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-8"
        >
          We design intelligent systems that streamline operations, reduce
          costs, and scale your business automatically. Stop managing tasks and
          start managing growth.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center rounded-xl h-14 px-7 sm:px-8 text-sm sm:text-base font-medium border border-transparent bg-blue-300 text-black hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto min-w-45"
          >
            <span className="transition-all duration-300 group-hover:tracking-wide group-hover:scale-105">
              Start Automation →
            </span>
          </Link>

          <Link
            to="#"
            className="group inline-flex items-center justify-center rounded-xl h-14 px-7 sm:px-8 text-sm sm:text-base font-medium border border-white/10 bg-white/3 text-white hover:bg-white/5 transition-all duration-300 w-full sm:w-auto min-w-45"
          >
            <span>See How It Works</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute left-6 top-1/3 hidden md:flex animate-floatSlow"
      >
        <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/2 backdrop-blur-md flex items-center justify-center">
          <Network className="w-7 h-7 text-cyan-400/80" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute right-8 top-[68%] hidden md:flex animate-floatSlow [animation-delay:1.2s]"
      >
        <div className="w-20 h-20 rounded-full border border-white/10 bg-white/2 backdrop-blur-md flex items-center justify-center">
          <Cpu className="w-8 h-8 text-purple-400/80" />
        </div>
      </motion.div>

      <style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-floatSlow {
          animation: floatSlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}