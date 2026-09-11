import Expertise from "../components/Expertise"

export default function Services() {
  return (
    <main className="bg-[#090E18] text-white">
      <header className="px-6 pb-4 pt-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          What We Build
        </p>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
          Software Services Built Around Real Business Goals
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          From focused landing pages to complete applications, dashboards, e-commerce systems, and AI automation.
        </p>
      </header>
      <Expertise />
    </main>
  )
}
