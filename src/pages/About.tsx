import { ArrowRight, Code2, MapPin, Rocket, SearchCheck } from "lucide-react"
import { Link } from "react-router-dom"

const steps = [
  {
    icon: SearchCheck,
    title: "Understand",
    description: "We clarify the goal, users, and essential scope.",
  },
  {
    icon: Code2,
    title: "Build",
    description: "We design and develop the agreed solution in clear stages.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We test, deliver, and support the next step.",
  },
]

export default function About() {
  return (
    <main className="overflow-hidden bg-[#0B121E] text-white">
      <section className="px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300">ABOUT ICC</p>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Software Built Around
            <span className="block bg-linear-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Real Business Needs
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            ICC — IO Code Company designs and develops websites, mobile apps,
            e-commerce stores, dashboards, MVPs, and automation for startups and
            growing businesses.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/2 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-cyan-300">WHO WE ARE</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">One team from planning to launch.</h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              We turn ideas and operational needs into clear, usable digital
              products. Design and development work together, giving clients one
              practical path from the first discussion to delivery.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-cyan-300">WHERE WE WORK</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-white/10 bg-[#101827] p-6">
                <MapPin className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">Sadat City</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">Our main base and day-to-day operations.</p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-[#101827] p-6">
                <MapPin className="h-6 w-6 text-indigo-300" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">6th of October City</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">Our branches support communication and project delivery.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.16em] text-cyan-300">HOW WE WORK</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Clear stages. Clear communication.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <Icon className="h-7 w-7 text-cyan-300" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-cyan-400/15 bg-linear-to-br from-[#111d30] to-[#101426] px-6 py-12 text-center sm:px-10">
            <h2 className="text-3xl font-semibold sm:text-4xl">Have a project in mind?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
              Tell us what you need, and we&apos;ll help you define the right next step.
            </p>
            <Link
              to="/#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-[#071126] transition hover:bg-cyan-300"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
