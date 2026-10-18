import { motion } from "framer-motion"
import {
  Bot,
  CircleCheck,
  Gamepad2,
  LayoutDashboard,
  MonitorSmartphone,
  ShoppingBag,
  Smartphone,
} from "lucide-react"
import { Link } from "react-router-dom"
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "../lib/motion"

const capabilityTiles = [
  {
    label: "Web",
    Icon: MonitorSmartphone,
    position: "-left-3 top-5 h-[22%] w-[39%] -rotate-3",
    accent: "bg-blue-400",
  },
  {
    label: "Mobile",
    Icon: Smartphone,
    position: "right-3 top-4 h-[22%] w-[35%] rotate-3",
    accent: "bg-violet-400",
  },
  {
    label: "Commerce",
    Icon: ShoppingBag,
    position: "-left-5 top-[37%] h-[25%] w-[33%] -rotate-6",
    accent: "bg-emerald-400",
  },
  {
    label: "AI",
    Icon: Bot,
    position: "-right-4 top-[34%] h-[24%] w-[34%] rotate-5",
    accent: "bg-cyan-400",
  },
  {
    label: "Games",
    Icon: Gamepad2,
    position: "bottom-5 left-2 h-[22%] w-[37%] rotate-3",
    accent: "bg-fuchsia-400",
  },
  {
    label: "Dashboards",
    Icon: LayoutDashboard,
    position: "-right-2 bottom-5 h-[22%] w-[35%] -rotate-3",
    accent: "bg-amber-300",
  },
] as const

const highlights = ["Fast MVPs", "Quality-First", "Startup-Friendly"] as const

export default function Hero() {
  return (
    <div className="container mx-auto">
      <section className="pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.08fr_.92fr] xl:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs"
            >
              <span className="relative h-2 w-2 rounded-full bg-green-500">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
              </span>
              Accepting New Projects
            </motion.span>

            <motion.h1
              variants={fadeLeft}
              className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl"
            >
              You Imagine <br />
              <span className="bg-linear-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">
                We Build
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg text-gray-400 sm:text-xl"
            >
              Turn your idea into a clear, launch-ready digital product. ICC — IO
              Code Company brings strategy, design, and development together for
              startups and growing businesses.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4 lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex h-12 w-full min-w-55 items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-indigo-500 px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.22)] transition-all duration-300 hover:scale-[1.01] hover:opacity-90 sm:h-13 sm:w-auto sm:text-base"
              >
                <span>Start Your Project</span>
                <span className="ml-2" aria-hidden="true">→</span>
              </a>

              <Link
                to="/#work"
                className="inline-flex h-12 w-full min-w-55 items-center justify-center rounded-xl border border-white/10 bg-white/3 px-6 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:border-white/20 hover:bg-white/5 sm:h-13 sm:w-auto sm:text-base"
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400 lg:justify-start"
            >
              {highlights.map(highlight => (
                <motion.span
                  key={highlight}
                  variants={fadeUp}
                  className="flex items-center gap-1.5"
                >
                  <CircleCheck className="h-4 w-4 text-green-500" aria-hidden="true" />
                  {highlight}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            role="img"
            aria-label="Illustration of the websites, mobile apps, stores, dashboards, AI workflows, and games ICC builds"
            className="relative min-h-104 w-full overflow-hidden rounded-[2rem] border border-white/8 bg-[#101722] shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:min-h-120"
          >
            <div
              className="absolute inset-0 opacity-40"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 42%, rgba(37, 99, 235, 0.34), transparent 46%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                backgroundSize: "auto, 36px 36px, 36px 36px",
              }}
            />

            <div className="absolute inset-4 overflow-hidden rounded-3xl" aria-hidden="true">
              {capabilityTiles.map(({ label, Icon, position, accent }, index) => (
                <div
                  key={label}
                  className={`absolute ${position}`}
                >
                  <div
                    className="hero-collage-drift h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#172132] p-3 opacity-55 shadow-xl sm:p-4"
                    style={{
                      animationDelay: `${index * -1.25}s`,
                      animationDuration: `${8 + (index % 3) * 1.5}s`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.15em] text-white/72 sm:text-[10px]">
                        <Icon className="h-3.5 w-3.5 text-white/75 sm:h-4 sm:w-4" />
                        {label}
                      </span>
                      <span className={`h-1.5 w-1.5 rounded-full ${accent}`} />
                    </div>
                    <div className="mt-3 grid grid-cols-[.75fr_1.25fr] gap-2">
                      <div className="space-y-1.5 rounded-md bg-white/5 p-2">
                        <div className={`h-1.5 w-7 rounded-full ${accent}`} />
                        <div className="h-1 w-full rounded-full bg-white/12" />
                        <div className="h-1 w-3/4 rounded-full bg-white/8" />
                      </div>
                      <div className="rounded-md bg-white/7 p-2">
                        <div className="h-full min-h-6 rounded-sm bg-linear-to-br from-white/10 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(10,15,25,0.54)_100%)]" aria-hidden="true" />

            <div className="absolute left-[11%] top-[22%] z-20 h-[43%] w-[68%] overflow-hidden rounded-2xl border border-white/18 bg-[#0a1322] shadow-[0_24px_60px_rgba(0,0,0,0.5)] sm:rounded-3xl">
              <div className="flex h-8 items-center justify-between border-b border-white/8 bg-white/4 px-3 sm:h-10 sm:px-4">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400/80 sm:h-2 sm:w-2" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80 sm:h-2 sm:w-2" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 sm:h-2 sm:w-2" />
                </div>
                <span className="text-[7px] font-medium uppercase tracking-[0.18em] text-white/40 sm:text-[9px]">
                  Digital Product
                </span>
              </div>
              <div className="grid h-[calc(100%-2rem)] grid-cols-[.28fr_.72fr] sm:h-[calc(100%-2.5rem)]">
                <div className="border-r border-white/7 bg-[#0d1727] p-2 sm:p-3">
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded bg-blue-500 sm:h-4 sm:w-4" />
                    <span className="h-1.5 w-10 rounded-full bg-white/18" />
                  </div>
                  <div className="space-y-2">
                    {["w-full", "w-4/5", "w-3/4", "w-5/6"].map(width => (
                      <div key={width} className={`h-1.5 rounded-full bg-white/9 ${width}`} />
                    ))}
                  </div>
                </div>
                <div className="p-2.5 sm:p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="h-2 w-16 rounded-full bg-white/22 sm:w-24" />
                      <div className="mt-2 h-1.5 w-10 rounded-full bg-white/8 sm:w-16" />
                    </div>
                    <div className="rounded-md bg-blue-500 px-2 py-1 text-[6px] font-semibold text-white sm:px-3 sm:text-[8px]">
                      New Project
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
                    {[
                      "from-blue-500/24",
                      "from-cyan-400/20",
                      "from-violet-400/22",
                    ].map(color => (
                      <div key={color} className={`rounded-lg border border-white/6 bg-linear-to-br ${color} to-white/2 p-2`}>
                        <div className="h-1 w-7 rounded-full bg-white/16" />
                        <div className="mt-2 h-3 w-9 rounded bg-white/8 sm:h-4 sm:w-12" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2.5 flex h-10 items-end gap-1 rounded-lg border border-white/6 bg-white/3 px-2 pb-2 sm:mt-3 sm:h-14">
                    {[35, 55, 42, 74, 59, 88, 70, 94].map(height => (
                      <span
                        key={height}
                        className="flex-1 rounded-t-sm bg-linear-to-t from-blue-600/75 to-cyan-300/80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[6%] right-[5%] z-30 h-[28%] w-[43%] overflow-hidden rounded-2xl border border-white/18 bg-[#111c2d] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.5)] sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-blue-600 sm:h-8 sm:w-8">
                    <ShoppingBag className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="h-1.5 w-10 rounded-full bg-white/28 sm:w-14" />
                    <div className="mt-1 h-1 w-6 rounded-full bg-white/10 sm:w-9" />
                  </div>
                </div>
                <span className="h-5 w-5 rounded-full border border-white/10 bg-white/5" />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
                {["from-blue-500/45", "from-violet-500/40", "from-emerald-400/35"].map(color => (
                  <div key={color} className="rounded-lg border border-white/8 bg-white/4 p-1.5 sm:p-2">
                    <div className={`h-7 rounded-md bg-linear-to-br ${color} to-[#142136] sm:h-10`} />
                    <div className="mt-1.5 h-1 w-4/5 rounded-full bg-white/16" />
                    <div className="mt-1 h-1 w-1/2 rounded-full bg-white/8" />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-[9%] left-[9%] z-30 rounded-2xl border border-white/14 bg-[#05080d]/92 px-4 py-3 text-left shadow-2xl backdrop-blur-md sm:px-6 sm:py-4">
              <p className="text-2xl font-bold text-white sm:text-3xl">100+</p>
              <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
                Projects Shipped
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
