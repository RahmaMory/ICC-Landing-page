import { Code2, Layers3, Globe, Cpu } from "lucide-react";

const techItems = [
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Cpu },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind", icon: Layers3 },
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Cpu },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind", icon: Layers3 },
];

export default function TechStackMarquee() {
  const duplicated = [...techItems, ...techItems];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#070B14] py-20">
      {/* fade edges */}
    {/* LEFT FADE */}
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 md:w-64 
bg-linear-to-r from-[#070B14] via-[#070B14]/95 to-transparent " />

{/* RIGHT FADE */}
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 md:w-64 
bg-linear-to-l from-[#070B14] via-[#070B14]/95 to-transparent" />
      <div className="marquee-track flex w-max items-center gap-16">
        {duplicated.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.name}-${index}`}
              className="flex min-w-fit items-center gap-12 text-white/55"
            >
              <Icon className="h-8 w-8 text-blue-400/70" />
              <span className="text-[18px] font-medium tracking-wide">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}