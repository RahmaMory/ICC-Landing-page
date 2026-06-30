import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dashboardImg from "../../../assets/images/mvp-dashboard.png";

export default function HeroMVPSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.18, 0.38], [1, 0.8, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.38], [0, 120]);
  const textScale = useTransform(scrollYProgress, [0, 0.38], [1, 0.96]);

  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.42], [0.2, 0.75, 1]);
  const imageY = useTransform(scrollYProgress, [0, 0.42], [160, -20]);
  const imageScale = useTransform(scrollYProgress, [0, 0.42], [0.94, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[160vh] sm:min-h-[170vh] lg:min-h-[180vh] overflow-hidden bg-[#070B14]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center px-4 sm:px-6">
        <div className="absolute inset-0 -z-20 bg-linear-to-br from-[#0a0f1f] via-[#0d1330] to-[#140a2e]" />

        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
            scale: textScale,
          }}
          className="relative z-10 mx-auto max-w-7xl text-center"
        >
          <div
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full
            border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs sm:text-sm text-indigo-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            MVP DEVELOPMENT STUDIO
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold leading-[1.05] text-white">
            Launch Fast.
            <br />
            <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Learn Faster.
            </span>
          </h1>

          <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-gray-400">
            Get your idea to market quickly. We engineer high-performance,
            scalable MVPs designed for rapid validation and growth.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#mvp-contact"
              className="w-full sm:w-auto rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-6 sm:px-7 py-3.5 sm:py-4 font-medium text-white shadow-lg shadow-purple-500/20 transition hover:opacity-90"
            >
              Build Your MVP →
            </a>

            <a
              href="#mvp-process"
              className="w-full sm:w-auto rounded-xl border border-white/20 px-6 sm:px-7 py-3.5 sm:py-4 text-gray-300 transition hover:border-white/40 hover:text-white"
            >
              Explore Process
            </a>
          </div>
        </motion.div>

        <motion.img
          src={dashboardImg}
          alt="MVP Dashboard"
          style={{
            opacity: imageOpacity,
            y: imageY,
            scale: imageScale,
          }}
          className="
            absolute left-1/2 z-30 -translate-x-1/2
            top-[72%] sm:top-[68%] md:top-[64%] lg:top-[66%]
            w-[94%] sm:w-[92%] md:w-[90%]
            max-w-85 sm:max-w-2xl md:max-w-4xl lg:max-w-6xl
            rounded-[18px] sm:rounded-3xl lg:rounded-[28px]
            border border-white/10
            shadow-2xl shadow-blue-500/20
          "
        />
      </div>
    </section>
  );
}