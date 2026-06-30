import { Activity, Zap } from "lucide-react";
import phoneScreen from "../../../assets/images/mobile/mobile-phone-mockup.png";

export default function MobileAppPhoneMockup() {
  return (
    <div className="group relative mx-auto w-full max-w-[320px] sm:max-w-90 lg:max-w-100">
      {/* background glow */}
      <div className="absolute inset-0 -z-20 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -left-16 top-20 -z-20 h-65 w-65 rounded-full border border-cyan-400/10" />
      <div className="absolute -left-6 top-8 -z-20 h-90 w-90 rounded-full border border-cyan-400/5" />

      {/* attention badge */}
      <div className="absolute -right-4.5 top-[28%] z-30 hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[11px] text-gray-200 backdrop-blur-md sm:block">
        <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
          Attention
        </div>
        <div className="mt-1 text-lg font-semibold text-white">94%</div>
      </div>

      {/* phone frame */}
      <div
        className="
          relative overflow-hidden rounded-[2.8rem]
          border border-white/10
          bg-linear-to-b from-white/10 to-white/3
          p-2.5
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          transition-all duration-500
          group-hover:scale-[1.02]
        "
      >
        {/* outer shell glow */}
        <div className="absolute inset-0 rounded-[2.8rem] ring-1 ring-inset ring-white/10" />

        {/* side buttons */}
        <div className="absolute -left-0.5 top-30 h-10 w-0.75 rounded-full bg-white/20" />
        <div className="absolute -left-0.5 top-42.5 h-14 w-0.75 rounded-full bg-white/20" />
        <div className="absolute -left-0.5 top-58.75 h-14 w-0.75 rounded-full bg-white/20" />

        {/* inner screen */}
        <div className="relative overflow-hidden rounded-[2.3rem] bg-[#050814]">
          {/* notch */}
          <div className="absolute left-1/2 top-4 z-30 h-7 w-24 -translate-x-1/2 rounded-full bg-black/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
            <span className="absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-400/70" />
            <span className="absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white/10" />
          </div>

          {/* screen background glow */}
          <div className="absolute inset-0 bg-linear-to-b from-[#050814] via-[#08111f] to-[#0b0e18]" />

          {/* image grayscale base */}
          <img
            src={phoneScreen}
            alt="Mobile app preview"
            className="
              block h-full w-full object-cover
              grayscale brightness-[0.7] contrast-110
              transition-all duration-700
              group-hover:grayscale-0 group-hover:brightness-100 group-hover:saturate-125
            "
          />

          {/* color glow overlay on hover */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-linear-to-b from-cyan-500/0 via-fuchsia-500/0 to-purple-500/0
              opacity-0 transition-all duration-700
              group-hover:opacity-100
            "
          />

          {/* dark bottom fade for cards */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#07111d] via-[#07111d]/80 to-transparent" />

          {/* floating cards */}
          <div className="absolute inset-x-4 bottom-6 z-20 space-y-3">
            <div
              className="
                translate-y-6 opacity-0
                rounded-2xl border border-white/10 bg-white/10
                px-4 py-4 backdrop-blur-xl
                transition-all duration-500 delay-100
                group-hover:translate-y-0 group-hover:opacity-100
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                  <Activity className="h-5 w-5 text-cyan-400" />
                </div>

                <div className="flex-1">
                  <div className="h-3 w-20 rounded-full bg-white/35" />
                  <div className="mt-2 h-2.5 w-10 rounded-full bg-white/20" />
                </div>
              </div>
            </div>

            <div
              className="
                translate-y-6 opacity-0
                rounded-2xl border border-white/10 bg-white/10
                px-4 py-4 backdrop-blur-xl
                transition-all duration-500 delay-200
                group-hover:translate-y-0 group-hover:opacity-100
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>

                <div className="flex-1">
                  <div className="h-3 w-24 rounded-full bg-white/35" />
                  <div className="mt-2 h-2.5 w-12 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle float */}
      <div className="pointer-events-none absolute inset-0 -z-10 animate-float-slow" />
    </div>
  );
}