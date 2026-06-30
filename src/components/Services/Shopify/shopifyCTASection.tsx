// import { Link } from 'react-router-dom'
// import { Database } from 'lucide-react'

// export default function ShopifyCTASection() {
//   return (
//     <section className="px-4 py-24 sm:px-6 md:py-32 lg:px-8 bg-[#090E18]">
//       <div className="mx-auto flex min-h-[68vh] max-w-[1500px] flex-col items-center justify-center text-center">
//         <div className="relative mb-10">
//           <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl" />
//           <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/8">
//             <Database className="h-10 w-10 text-cyan-400" />
//           </div>
//         </div>
//         <h2 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
//           <span className="block">Let AI Run Your Shopify</span>
//           <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Store. You Focus on Growth.</span>
//         </h2>
//         <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
//           <Link
//             to="/contact"
//             className="inline-flex min-w-[260px] items-center justify-center rounded-2xl bg-cyan-400 px-10 py-5 text-xl font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
//           >
//             Get Your System
//           </Link>
//           <Link
//             to="/services"
//             className="inline-flex min-w-[260px] items-center justify-center rounded-2xl border border-cyan-400/20 bg-transparent px-10 py-5 text-xl font-semibold text-white transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-400/5 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
//           >
//             View Our Services
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }




import { Link } from 'react-router-dom'
import { Database } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../../lib/motion'

export default function ShopifyCTASection() {
  return (
    <section className="px-4 py-24 sm:px-6 md:py-32 lg:px-8 bg-[#090E18]">
      <motion.div
        className="mx-auto flex min-h-[68vh] max-w-375 flex-col items-center justify-center text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} className="relative mb-10">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/8">
            <Database className="h-10 w-10 text-cyan-400" />
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          <span className="block">Let AI Run Your Shopify</span>
          <span className="block bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Store. You Focus on Growth.</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            to="/contact"
            className="inline-flex min-w-65 items-center justify-center rounded-2xl bg-cyan-400 px-10 py-5 text-xl font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          >
            Get Your System
          </Link>
          <Link
            to="/services"
            className="inline-flex min-w-65 items-center justify-center rounded-2xl border border-cyan-400/20 bg-transparent px-10 py-5 text-xl font-semibold text-white transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-400/5 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
          >
            View Our Services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}