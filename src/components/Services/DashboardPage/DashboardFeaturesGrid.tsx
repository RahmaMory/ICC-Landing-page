// import React, { useEffect, useMemo, useRef, useState } from 'react'
// import { BarChart3, TrendingUp, Gauge, CircleCheck } from 'lucide-react'
// import { Link } from 'react-router-dom'

// type StatCard = {
//   value: number
//   suffix?: string
//   label: string
//   duration?: number
// }

// const featureCards = [
//   {
//     icon: BarChart3,
//     title: 'Real-time data',
//     description:
//       'Stay updated with live data streams and instant synchronization across all your systems.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Clear analytics',
//     description:
//       'Visualize complex metrics with intuitive charts and graphs that anyone can understand.',
//   },
//   {
//     icon: Gauge,
//     title: 'Easy control panels',
//     description:
//       'Manage everything from a single, streamlined interface designed for efficiency.',
//   },
// ]

// const statCards: StatCard[] = [
//   {
//     value: 99,
//     suffix: '%',
//     label: 'Data Accuracy',
//     duration: 1800,
//   },
//   {
//     value: 50,
//     suffix: '%',
//     label: 'Faster Decisions',
//     duration: 1700,
//   },
//   {
//     value: 24,
//     suffix: '/7',
//     label: 'Real-time Updates',
//     duration: 1600,
//   },
// ]

// function CountUp({
//   value,
//   suffix = '',
//   duration = 1800,
// }: {
//   value: number
//   suffix?: string
//   duration?: number
// }) {
//   const [count, setCount] = useState(0)
//   const [hasStarted, setHasStarted] = useState(false)
//   const ref = useRef<HTMLSpanElement | null>(null)

//   useEffect(() => {
//     const node = ref.current
//     if (!node) return

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setHasStarted(true)
//           observer.disconnect()
//         }
//       },
//       { threshold: 0.4 }
//     )

//     observer.observe(node)

//     return () => observer.disconnect()
//   }, [])

//   useEffect(() => {
//     if (!hasStarted) return

//     let startTime: number | null = null
//     let animationFrame = 0

//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp

//       const progress = Math.min((timestamp - startTime) / duration, 1)
//       const eased = 1 - Math.pow(1 - progress, 3)
//       const current = Math.round(value * eased)

//       setCount(current)

//       if (progress < 1) {
//         animationFrame = window.requestAnimationFrame(animate)
//       }
//     }

//     animationFrame = window.requestAnimationFrame(animate)

//     return () => window.cancelAnimationFrame(animationFrame)
//   }, [hasStarted, value, duration])

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   )
// }

// export default function DashboardFeaturesGrid() {
//   const stats = useMemo(() => statCards, [])

//   return (
//     <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28 lg:px-8">
//       <div className="mx-auto w-full max-w-[1500px]">
//         {/* Header */}
//         <div className="text-center">
//           <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
//             Powerful Features
//           </h2>

//           <p className="mt-4 text-base text-white/60 sm:text-lg">
//             Everything you need to turn data into decisions
//           </p>
//         </div>

//         {/* Top feature cards */}
//         <div className="mt-14 grid grid-cols-1 gap-6 xl:grid-cols-3">
//           {featureCards.map((card, index) => {
//             const Icon = card.icon

//             return (
//               <article
//                 key={index}
//                 className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121d2e] p-8 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-cyan-300/35 hover:shadow-[0_0_30px_rgba(34,211,238,0.10)]"
//               >
//                 <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.10),transparent_22%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//                 <div className="relative z-10">
//                   <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
//                     <Icon className="h-7 w-7 text-cyan-300" />
//                   </div>

//                   <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[24px]">
//                     {card.title}
//                   </h3>

//                   <p className="mt-4 max-w-md text-[17px] leading-8 text-white/60">
//                     {card.description}
//                   </p>
//                 </div>
//               </article>
//             )
//           })}
//         </div>

//         {/* Bottom stat cards */}
//         <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3">
//           {stats.map((stat, index) => (
//             <article
//               key={index}
//               className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121d2e] px-8 py-10"
//             >
//               <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.06),transparent_35%)]" />

//               <div className="relative z-10 text-center">
//                 <div className="text-[60px] font-semibold leading-none tracking-[-0.05em] text-cyan-300 sm:text-[68px]">
//                   <CountUp
//                     value={stat.value}
//                     suffix={stat.suffix}
//                     duration={stat.duration}
//                   />
//                 </div>

//                 <p className="mt-4 text-[15px] tracking-[0.08em] text-white/60 sm:text-base">
//                   {stat.label}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>


//       </div>

//       <div className="relative z-10 mt-32 max-w-5xl mx-auto">
//   <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#121d2e] px-8 py-14 sm:px-12 transition-all duration-300">

//     {/* subtle glow */}
//     <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_30%)]" />

//     <div className="relative flex flex-col items-center text-center">
      
//       {/* icon */}
//       <div className="relative mb-8">
//         <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />
//         <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10">
//           <CircleCheck className="h-8 w-8 text-cyan-300" />
//         </div>
//       </div>

//       {/* title */}
//       <h5 className="max-w-5xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
//         Make faster, better  business decisions.

//       </h5>

//       {/* subtitle */}
//       <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
//         Join leading companies that trust our dashboards to drive their success
//       </p>

//       {/* CTA Button */}
//       <Link
//         to="/contact"
//         className="group mt-10 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400  px-10 py-5 text-lg font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
//       >
//         <span>Get Your Dashboard</span>
        
//       </Link>

//     </div>
//   </div>
// </div>
//     </section>
//   )
// }






import  { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Gauge, CircleCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer } from '../../../lib/motion'

type StatCard = {
  value: number
  suffix?: string
  label: string
  duration?: number
}

const featureCards = [
  {
    icon: BarChart3,
    title: 'Real-time data',
    description:
      'Stay updated with live data streams and instant synchronization across all your systems.',
  },
  {
    icon: TrendingUp,
    title: 'Clear analytics',
    description:
      'Visualize complex metrics with intuitive charts and graphs that anyone can understand.',
  },
  {
    icon: Gauge,
    title: 'Easy control panels',
    description:
      'Manage everything from a single, streamlined interface designed for efficiency.',
  },
]

const statCards: StatCard[] = [
  { value: 99, suffix: '%', label: 'Data Accuracy', duration: 1800 },
  { value: 50, suffix: '%', label: 'Faster Decisions', duration: 1700 },
  { value: 24, suffix: '/7', label: 'Real-time Updates', duration: 1600 },
]

function CountUp({
  value,
  suffix = '',
  duration = 1800,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return
    let startTime: number | null = null
    let animationFrame = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) animationFrame = window.requestAnimationFrame(animate)
    }

    animationFrame = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [hasStarted, value, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function DashboardFeaturesGrid() {
  const stats = useMemo(() => statCards, [])

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
            Powerful Features
          </h2>

          <p className="mt-4 text-base text-white/60 sm:text-lg">
            Everything you need to turn data into decisions
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {featureCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.article
                key={index}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121d2e] p-8 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-cyan-300/35 hover:shadow-[0_0_30px_rgba(34,211,238,0.10)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.10),transparent_22%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                    <Icon className="h-7 w-7 text-cyan-300" />
                  </div>

                  <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[24px]">
                    {card.title}
                  </h3>

                  <p className="mt-4 max-w-md text-[17px] leading-8 text-white/60">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {stats.map((stat, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121d2e] px-8 py-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.06),transparent_35%)]" />

              <div className="relative z-10 text-center">
                <div className="text-[60px] font-semibold leading-none tracking-[-0.05em] text-cyan-300 sm:text-[68px]">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                  />
                </div>

                <p className="mt-4 text-[15px] tracking-[0.08em] text-white/60 sm:text-base">
                  {stat.label}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 mt-32 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#121d2e] px-8 py-14 sm:px-12 transition-all duration-300">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_30%)]" />

          <div className="relative flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10">
                <CircleCheck className="h-8 w-8 text-cyan-300" />
              </div>
            </div>

            <h5 className="max-w-5xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
              Make faster, better business decisions.
            </h5>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Join leading companies that trust our dashboards to drive their success
            </p>

            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-cyan-400 to-blue-400 px-10 py-5 text-lg font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              <span>Get Your Dashboard</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}