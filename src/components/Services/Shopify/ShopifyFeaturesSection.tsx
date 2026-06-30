// import React, { useEffect, useRef, useState } from 'react'
// import { BarChart3, Cpu, ScanSearch, PlugZap } from 'lucide-react'

// function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
//   const [count, setCount] = useState(0)
//   const ref = useRef<HTMLSpanElement | null>(null)

//   useEffect(() => {
//     const node = ref.current
//     if (!node) return

//     const observer = new IntersectionObserver(([entry]) => {
//       if (!entry.isIntersecting) return
//       observer.disconnect()
//       let start: number | null = null
//       const duration = 1600
//       const animate = (t: number) => {
//         if (!start) start = t
//         const p = Math.min((t - start) / duration, 1)
//         const eased = 1 - Math.pow(1 - p, 3)
//         setCount(Math.round(value * eased))
//         if (p < 1) requestAnimationFrame(animate)
//       }
//       requestAnimationFrame(animate)
//     })

//     observer.observe(node)
//     return () => observer.disconnect()
//   }, [value])

//   return <span ref={ref}>{count}{suffix}</span>
// }

// const topCards = [
//   { icon: BarChart3, title: 'Real-time tracking', desc: 'Monitor store performance, revenue, and operations as they happen.' },
//   { icon: ScanSearch, title: 'Smart insights', desc: 'Turn complex data into clear operational visibility and faster decisions.' },
//   { icon: Cpu, title: 'AI automation', desc: 'Reduce manual work with AI-driven systems built around your workflow.' },
//   { icon: PlugZap, title: 'Integrations', desc: 'Connect your Shopify store to the tools your business already uses.' },
// ]

// export default function ShopifyFeaturesSection() {
//   return (
//     <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
//       <div className="mx-auto max-w-[1500px]">
//         <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
//           Engineered for Scale
//         </h2>

//         <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
//           {topCards.map((card, idx) => {
//             const Icon = card.icon
//             return (
//               <article
//                 key={card.title}
//                 className={`group rounded-[24px] border border-white/10 bg-[#131d2f] p-6 transition-all duration-300 hover:scale-[1.01] hover:border-cyan-300/30 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] ${idx === 3 ? 'lg:col-span-2' : ''}`}
//               >
//                 <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
//                   <Icon className="h-5 w-5 text-cyan-300" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white">{card.title}</h3>
//                 <p className="mt-3 text-white/58">{card.desc}</p>
//               </article>
//             )
//           })}
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
//           <div className="rounded-[24px] border border-white/10 bg-[#131d2f] px-8 py-10 text-center">
//             <div className="text-[58px] font-semibold leading-none tracking-[-0.05em] text-cyan-300"><CountUp value={35} suffix="%" /></div>
//             <p className="mt-3 text-sm tracking-[0.12em] text-white/58">FASTER PROCESSING</p>
//           </div>
//           <div className="rounded-[24px] border border-white/10 bg-[#131d2f] px-8 py-10 text-center">
//             <div className="text-[58px] font-semibold leading-none tracking-[-0.05em] text-cyan-300"><CountUp value={2} suffix="x" /></div>
//             <p className="mt-3 text-sm tracking-[0.12em] text-white/58">RESPONSE SPEED</p>
//           </div>
//           <div className="rounded-[24px] border border-white/10 bg-[#131d2f] px-8 py-10 text-center">
//             <div className="text-[58px] font-semibold leading-none tracking-[-0.05em] text-cyan-300"><CountUp value={80} suffix="%" /></div>
//             <p className="mt-3 text-sm tracking-[0.12em] text-white/58">LESS MANUAL WORK</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





import  { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Cpu, ScanSearch, PlugZap } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../../lib/motion'

function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      let start: number | null = null
      const duration = 1600
      const animate = (t: number) => {
        if (!start) start = t
        const p = Math.min((t - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setCount(Math.round(value * eased))
        if (p < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    })

    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{count}{suffix}</span>
}

const topCards = [
  { icon: BarChart3, title: 'Real-time tracking', desc: 'Monitor store performance, revenue, and operations as they happen.' },
  { icon: ScanSearch, title: 'Smart insights', desc: 'Turn complex data into clear operational visibility and faster decisions.' },
  { icon: Cpu, title: 'AI automation', desc: 'Reduce manual work with AI-driven systems built around your workflow.' },
  { icon: PlugZap, title: 'Integrations', desc: 'Connect your Shopify store to the tools your business already uses.' },
]

export default function ShopifyFeaturesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-375">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]"
        >
          Engineered for Scale
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {topCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.article
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`group rounded-3xl border border-white/10 bg-[#131d2f] p-6 transition-all duration-300 hover:scale-[1.01] hover:border-cyan-300/30 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] ${idx === 3 ? 'lg:col-span-2' : ''}`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-white/58">{card.desc}</p>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-[#131d2f] px-8 py-10 text-center">
            <div className="text-[58px] font-semibold leading-none tracking-[-0.05em] text-cyan-300"><CountUp value={35} suffix="%" /></div>
            <p className="mt-3 text-sm tracking-[0.12em] text-white/58">FASTER PROCESSING</p>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-[#131d2f] px-8 py-10 text-center">
            <div className="text-[58px] font-semibold leading-none tracking-[-0.05em] text-cyan-300"><CountUp value={2} suffix="x" /></div>
            <p className="mt-3 text-sm tracking-[0.12em] text-white/58">RESPONSE SPEED</p>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-[#131d2f] px-8 py-10 text-center">
            <div className="text-[58px] font-semibold leading-none tracking-[-0.05em] text-cyan-300"><CountUp value={80} suffix="%" /></div>
            <p className="mt-3 text-sm tracking-[0.12em] text-white/58">LESS MANUAL WORK</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}