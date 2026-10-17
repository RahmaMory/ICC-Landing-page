import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import {
  Blocks,
  CheckCircle2,
  Gamepad2,
  Gauge,
  Layers3,
  MessageCircleMore,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { fadeUp, staggerContainer } from "../../lib/motion"

const capabilities = [
  {
    icon: Users,
    title: "Multiplayer Experiences",
    desc: "Private rooms, live player states, turns, and synchronized gameplay.",
  },
  {
    icon: Blocks,
    title: "2D & 3D Gameplay",
    desc: "Interactive mechanics, clear controls, animation, and responsive interfaces.",
  },
  {
    icon: Gauge,
    title: "Game Logic & Progression",
    desc: "Rules, scoring, levels, rewards, and the systems that keep play consistent.",
  },
  {
    icon: Sparkles,
    title: "Branded Interactive Games",
    desc: "Focused game experiences created around a campaign, audience, or product.",
  },
]

const included = [
  "Concept and gameplay planning",
  "UI/UX and responsive controls",
  "Frontend gameplay development",
  "Real-time backend and private rooms",
  "Testing, deployment, and launch",
  "Agreed updates and post-launch support",
]

const process = [
  {
    number: "01",
    title: "Plan",
    desc: "We define the players, rules, screens, and technical scope before development starts.",
  },
  {
    number: "02",
    title: "Prototype",
    desc: "We build and test the core interaction early, so the gameplay direction is clear.",
  },
  {
    number: "03",
    title: "Build & Test",
    desc: "We develop the complete experience, connect the backend, and test real play scenarios.",
  },
  {
    number: "04",
    title: "Launch & Support",
    desc: "We deploy the game, monitor the release, and support agreed improvements after launch.",
  },
]

export default function GamePage() {
  const [ready, setReady] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      "Hello, I want to discuss a game project.",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Game idea: ${data.get("idea")}`,
    ].join("\n")

    window.open(
      `https://wa.me/201031158933?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    )
    setReady(true)
    window.setTimeout(() => setReady(false), 2400)
  }

  return (
    <main className="overflow-hidden bg-[#060b13] text-white">
      <section className="relative flex min-h-[88vh] items-center px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(34,211,238,0.14),transparent_27%),radial-gradient(circle_at_22%_30%,rgba(59,130,246,0.16),transparent_30%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              <Gamepad2 className="h-4 w-4" aria-hidden="true" /> Game Development
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Games Built for
              <span className="block bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Real Play.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              ICC plans, designs, and develops responsive browser games and multiplayer experiences—from gameplay logic and interfaces to backend systems, testing, launch, and support.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#game-contact" className="rounded-xl bg-blue-500 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-blue-400">Start Your Game Project</a>
              <a href="#game-capabilities" className="rounded-xl border border-white/15 px-6 py-3.5 text-center font-medium text-white/75 transition hover:border-white/35 hover:text-white">Explore What&apos;s Included</a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative mx-auto aspect-square w-full max-w-130">
            <div className="absolute inset-[10%] rounded-full border border-cyan-300/15" />
            <div className="absolute inset-[22%] rounded-full border border-blue-300/20" />
            <div className="absolute inset-[30%] rounded-[36px] border border-white/12 bg-linear-to-br from-blue-500/20 to-cyan-300/5 shadow-[0_0_90px_rgba(37,99,235,0.18)] backdrop-blur-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Gamepad2 className="h-28 w-28 text-cyan-300 drop-shadow-[0_0_35px_rgba(34,211,238,0.45)]" aria-hidden="true" />
            </div>
            {[
              { icon: Users, pos: "left-[3%] top-[30%]" },
              { icon: Layers3, pos: "right-[3%] top-[23%]" },
              { icon: MonitorSmartphone, pos: "bottom-[10%] left-[28%]" },
              { icon: ShieldCheck, pos: "bottom-[15%] right-[13%]" },
            ].map(({ icon: Icon, pos }, index) => (
              <motion.div key={pos} animate={{ y: [0, -8, 0] }} transition={{ duration: 3 + index * 0.35, repeat: Infinity }} className={`absolute ${pos} flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-[#0c1727]/90 shadow-xl`}>
                <Icon className="h-6 w-6 text-blue-300" aria-hidden="true" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="game-capabilities" className="border-y border-white/8 bg-[#09111e] px-6 py-24 sm:py-30">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">What we build</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">From the core loop to launch.</h2>
            <p className="mt-5 leading-7 text-white/55">A complete game-development service with the product, design, and technical work connected from the start.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/3 p-7 transition hover:-translate-y-1 hover:border-blue-400/35">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/12 text-blue-300"><Icon className="h-6 w-6" aria-hidden="true" /></div>
                <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 rounded-4xl border border-white/10 bg-[#0c1625] p-8 md:grid-cols-[.8fr_1.2fr] md:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Included in the service</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">The complete build, not just the visuals.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/12 p-4 text-sm leading-6 text-white/70">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Our process</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">A clear path from idea to play.</h2>
          </div>
          <div className="relative mt-14 grid gap-4 md:grid-cols-4">
            {process.map((step) => (
              <div key={step.number} className="relative rounded-3xl border border-white/10 bg-white/3 p-7">
                <span className="text-sm font-semibold text-blue-400">{step.number}</span>
                <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="game-contact" className="px-6 pb-28 pt-8">
        <div className="mx-auto grid max-w-6xl gap-12 rounded-4xl border border-white/10 bg-linear-to-br from-[#0d1830] to-[#09101e] p-8 shadow-[0_0_90px_rgba(37,99,235,0.12)] md:grid-cols-2 md:p-12">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15"><Rocket className="h-6 w-6 text-blue-300" aria-hidden="true" /></div>
            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em]">Have a game idea?</h2>
            <p className="mt-5 max-w-md leading-7 text-white/55">Tell us how the game should work and who it is for. We&apos;ll help you define a practical first step.</p>
            <div className="mt-8 flex items-center gap-3 text-sm text-white/65"><MessageCircleMore className="h-5 w-5 text-cyan-300" aria-hidden="true" /> Free 15-minute discovery call</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="game-name" className="text-sm text-white/60">Name *</label>
              <input id="game-name" name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-[#060b13] px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="game-email" className="text-sm text-white/60">Email *</label>
              <input id="game-email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-[#060b13] px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="game-idea" className="text-sm text-white/60">Game Idea *</label>
              <textarea id="game-idea" name="idea" required rows={4} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#060b13] px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" placeholder="What should players be able to do?" />
            </div>
            <button type="submit" className={`w-full rounded-xl px-5 py-4 font-semibold text-white transition ${ready ? "bg-emerald-500" : "bg-blue-500 hover:bg-blue-400"}`}>
              {ready ? "WhatsApp Ready — Send Your Message" : "Continue on WhatsApp"}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
