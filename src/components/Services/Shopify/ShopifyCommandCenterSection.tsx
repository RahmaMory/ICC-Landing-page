// import dashboardHero from '../../../assets/images/shopify/shopify.png'
// import { Activity } from 'lucide-react'

// export default function ShopifyCommandCenterSection() {
//   return (
//     <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
//       <div className="mx-auto max-w-[1200px]">
//         <h2 className="text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
//           Your Shopify Command Center
//         </h2>
//         <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
//           Track orders, performance, and customer activity in real time.
//         </p>

//        <div className="group relative mt-14">
  
//   {/* glow */}
//   <div className="pointer-events-none absolute -inset-3 rounded-[32px] bg-cyan-400/10 blur-3xl opacity-40 transition-all duration-500 group-hover:opacity-70" />

//   <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/12 bg-[#081121] transition-all duration-500 group-hover:border-cyan-300/30">

//     {/* 🔹 fake browser header */}
//     <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0c1628]">
//       <span className="h-3 w-3 rounded-full bg-red-500"></span>
//       <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
//       <span className="h-3 w-3 rounded-full bg-green-500"></span>
//     </div>

//     {/* 🔹 image wrapper */}
//     <div className="relative">
      
//       {/* dark overlay */}
//       <div className="absolute inset-0 bg-[#020617]/60 transition-all duration-500 group-hover:bg-transparent z-10" />

//       <img
//         src={dashboardHero}
//         alt="Shopify dashboard"
//         className="w-full object-cover transition-all duration-700 group-hover:scale-[1.01]"
//       />
//     </div>

//     {/* status card */}
//     <div className="absolute bottom-6 left-6 rounded-2xl border border-cyan-400/20 bg-[#0c1830]/90 px-5 py-4 backdrop-blur-md">
//       <div className="flex items-center gap-4">
//         <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/12">
//           <Activity className="h-5 w-5 text-cyan-300" />
//         </div>
//         <div>
//           <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
//             System Status
//           </p>
//           <p className="text-white">Optimal</p>
//         </div>
//       </div>
//     </div>

//   </div>
// </div>
//       </div>
//     </section>
//   )
// }



import dashboardHero from '../../../assets/images/shopify/shopify.png'
import { Activity } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../../lib/motion'

export default function ShopifyCommandCenterSection() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-300">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
            Your Shopify Command Center
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
            Track orders, performance, and customer activity in real time.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={fadeUp}
          className="group relative mt-14"
        >
          <div className="pointer-events-none absolute -inset-3 rounded-4xl bg-cyan-400/10 blur-3xl opacity-40 transition-all duration-500 group-hover:opacity-70" />

          <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/12 bg-[#081121] transition-all duration-500 group-hover:border-cyan-300/30">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0c1628]">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#020617]/60 transition-all duration-500 group-hover:bg-transparent z-10" />

              <img
                src={dashboardHero}
                alt="Shopify dashboard"
                className="w-full object-cover transition-all duration-700 group-hover:scale-[1.01]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="absolute bottom-6 left-6 rounded-2xl border border-cyan-400/20 bg-[#0c1830]/90 px-5 py-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/12">
                  <Activity className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                    System Status
                  </p>
                  <p className="text-white">Optimal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}