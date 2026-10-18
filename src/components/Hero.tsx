import { motion } from "framer-motion"
import { CircleCheck } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "../lib/motion"

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
            className="relative min-h-104 w-full overflow-hidden rounded-[2rem] border border-white/8 bg-[#101722] shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:min-h-120"
          >
            <div
              className="absolute inset-0 opacity-55"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 52% 48%, rgba(37, 99, 235, 0.38), transparent 43%), radial-gradient(circle at 78% 28%, rgba(124, 58, 237, 0.18), transparent 30%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                backgroundSize: "auto, auto, 36px 36px, 36px 36px",
              }}
            />

            <div className="hero-showcase-glow absolute left-[18%] top-[20%] h-[55%] w-[64%] rounded-full bg-blue-500/14 blur-3xl" aria-hidden="true" />

            <div className="hero-device-float absolute inset-1 z-10 flex items-center justify-center sm:inset-3">
              <img
                src="/hero/icc-responsive-project-showcase.webp"
                alt="Responsive digital product previews across desktop, tablet, and mobile devices"
                fetchPriority="high"
                decoding="async"
                draggable="false"
                className="h-auto w-[112%] max-w-none select-none object-contain sm:w-[108%]"
              />
            </div>

            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/16 bg-[#05080d]/92 px-5 py-3 text-center shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-md sm:px-8 sm:py-4">
              <p className="text-2xl font-bold text-white sm:text-3xl">100+</p>
              <p className="mt-0.5 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.2em] text-white/58 sm:text-[10px]">
                Projects Shipped
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 h-16 bg-linear-to-t from-[#101722] to-transparent" aria-hidden="true" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
