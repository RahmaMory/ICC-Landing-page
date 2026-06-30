// import { Link } from 'react-router-dom'

// export default function ShopifyHeroSection() {
//   return (
//     <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.12),transparent_24%)]" />

//       <div className="mx-auto max-w-[1500px] text-center">
//         <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/8 px-5 py-2 text-xs font-medium tracking-[0.12em] text-cyan-300">
//           BUILT FOR SHOPIFY STORES
//         </div>

//         <h1 className="mx-auto mt-10 max-w-6xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
//           <span className="block">We Build AI Systems That Run</span>
//           <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
//             Your Shopify Store.
//           </span>
//         </h1>

//         <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/65">
//           Done-for-you automation for order flow, customer support, inventory,
//           and reporting — designed to reduce manual work and help your business scale faster.
//         </p>

//         <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
//           <Link
//             to="/contact"
//             className="group inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-cyan-400 px-8 py-4 text-base font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(34,211,238,0.30)]"
//           >
//             <span>Book a Call</span>
//             <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
//           </Link>

//           <Link
//             to="/contact"
//             className="group inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-400/8 hover:shadow-[0_0_22px_rgba(34,211,238,0.10)]"
//           >
//             <span>Get Started</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }






import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../../lib/motion'

export default function ShopifyHeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.12),transparent_24%)]" />

      <motion.div
        className="mx-auto max-w-375 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/8 px-5 py-2 text-xs font-medium tracking-[0.12em] text-cyan-300"
        >
          BUILT FOR SHOPIFY STORES
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mx-auto mt-10 max-w-6xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[92px]"
        >
          <span className="block">We Build AI Systems That Run</span>
          <span className="block bg-linear-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
            Your Shopify Store.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/65"
        >
          Done-for-you automation for order flow, customer support, inventory,
          and reporting — designed to reduce manual work and help your business scale faster.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/contact"
            className="group inline-flex min-w-55 items-center justify-center rounded-2xl bg-cyan-400 px-8 py-4 text-base font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(34,211,238,0.30)]"
          >
            <span>Book a Call</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <Link
            to="/contact"
            className="group inline-flex min-w-55 items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-400/8 hover:shadow-[0_0_22px_rgba(34,211,238,0.10)]"
          >
            <span>Get Started</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}