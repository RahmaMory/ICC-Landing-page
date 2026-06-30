// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function RealImpactSection() {
//   return (
//     <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 borber border-t border-b border-white/10">
//       <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT */}
//         <div>
//           <h2 className="text-white font-semibold leading-[0.95] tracking-[-0.04em] text-5xl sm:text-6xl lg:text-[72px]">
//             Real Business
//             <br />
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Impact
//             </span>
//           </h2>

//           <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
//             We don't just build tech; we engineer outcomes. Our systems deliver
//             measurable ROI from day one.
//           </p>

//           <Link
//             to="#"
//             className="inline-flex mt-8 items-center justify-center rounded-lg border border-cyan-400/40 px-6 py-3 text-sm font-medium text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
//           >
//             View Case Studies
//           </Link>
//         </div>

//         {/* RIGHT */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

//           {/* CARD */}
//           {[
//             {
//               value: '30%',
//               label: 'Reduction in processing time',
//                ex:'%',
//               sub: 'EFFICIENCY',
//             },
//             {
//               value: '$150,000',
//                ex:'dollars',
//               label: 'Annual operational cost savings',
//               sub: 'COST SAVINGS',
//             },
//             {
//               value: '2.5x',
//               ex:'x',
//               label: 'Increase in customer engagement',
//               sub: 'GROWTH',
//               full: true,
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className={`group relative rounded-2xl border border-white/10 bg-[#101724] px-8 py-8 transition-all duration-300 hover:border-cyan-400/30 ${
//                 item.full ? 'sm:col-span-2' : ''
//               }`}
//             >
//               {/* subtle hover tint */}
//               <div className="absolute inset-0 opacity-0 transition-all duration-500 bg-cyan-400/5 group-hover:opacity-100" />

//               <div className="relative z-10">
//                <h3 className="text-[56px] font-semibold tracking-[-0.03em] leading-none flex items-baseline gap-1 ">
//   <span className="text-gray-300 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
//     {item.value}
//   </span>

//   <span className="text-blue-300 font-semibold text-sm">
//     {item.ex}
//   </span>
// </h3>
                

//                 <p className="mt-4 text-base text-white/65">
//                   {item.label}
//                 </p>
               

//                 <p className="mt-2 text-xs tracking-widest text-white/40">
//                   {item.sub}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }






import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeLeft, fadeUp, staggerContainer } from '../../../lib/motion'

export default function RealImpactSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 borber border-t border-b border-white/10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeLeft}
        >
          <h2 className="text-white font-semibold leading-[0.95] tracking-[-0.04em] text-5xl sm:text-6xl lg:text-[72px]">
            Real Business
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            We don't just build tech; we engineer outcomes. Our systems deliver
            measurable ROI from day one.
          </p>

          <Link
            to="#"
            className="inline-flex mt-8 items-center justify-center rounded-lg border border-cyan-400/40 px-6 py-3 text-sm font-medium text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
          >
            View Case Studies
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {[
            {
              value: '30%',
              label: 'Reduction in processing time',
              ex: '%',
              sub: 'EFFICIENCY',
            },
            {
              value: '$150,000',
              ex: 'dollars',
              label: 'Annual operational cost savings',
              sub: 'COST SAVINGS',
            },
            {
              value: '2.5x',
              ex: 'x',
              label: 'Increase in customer engagement',
              sub: 'GROWTH',
              full: true,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl border border-white/10 bg-[#101724] px-8 py-8 transition-all duration-300 hover:border-cyan-400/30 ${
                item.full ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 opacity-0 transition-all duration-500 bg-cyan-400/5 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="text-[56px] font-semibold tracking-[-0.03em] leading-none flex items-baseline gap-1 ">
                  <span className="text-gray-300 transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
                    {item.value}
                  </span>

                  <span className="text-blue-300 font-semibold text-sm">
                    {item.ex}
                  </span>
                </h3>

                <p className="mt-4 text-base text-white/65">
                  {item.label}
                </p>

                <p className="mt-2 text-xs tracking-widest text-white/40">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}