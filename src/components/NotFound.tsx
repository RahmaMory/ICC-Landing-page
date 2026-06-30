import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen bg-[#090E18] px-6 py-16 text-white flex items-center justify-center overflow-hidden">
      
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="text-[200px] sm:text-[300px] font-bold text-white/5 tracking-[-0.05em]">
          404
        </h1>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.08),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-center">
        
        {/* icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-500/10 border border-red-400/20">
          <TriangleAlert className="h-10 w-10 text-red-400" />
        </div>

        <p className="text-sm uppercase tracking-[0.18em] text-red-400/80">
          Error 404
        </p>

        <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
          Page not found
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <Link
            to="/"
            className="group inline-flex items-center justify-center rounded-2xl bg-blue-400 px-8 py-4 text-base font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.28)]"
          >
            <span>Back to Home</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/3 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-blue-300/30 hover:bg-blue-400/5"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </section>
  );
}