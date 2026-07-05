import { policySections } from "../data/Terms&Conditions";

export default function Terms() {
  return (
    <section className="bg-[#0B121E] py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Please read these Terms & Conditions carefully before using IO Code
            Company services. By using our website or requesting our services,
            you agree to the policies described below.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-20">
          {policySections.map((section) => {
            const Icon = section.icon;

            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                {/* Section Header */}
                <div className="mb-10 flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {section.title}
                    </h2>

                    <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                {/* Blocks */}
                <div className="space-y-8">
                  {section.blocks.map((block, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10"
                    >
                      <h3 className="mb-5 text-2xl font-semibold text-white">
                        {block.title}
                      </h3>

                      <p className="leading-8 text-slate-300">
                        {block.text}
                      </p>

                      <ul className="mt-6 space-y-4">
                        {block.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400" />

                            <span className="leading-7 text-slate-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}