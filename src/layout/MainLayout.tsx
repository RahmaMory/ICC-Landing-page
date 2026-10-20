import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "./Footer"

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0B121E] text-white">
      <a
        href="#main-content"
        className="sr-only z-9999 rounded-lg bg-white px-4 py-3 font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Navbar />
      <div id="main-content" tabIndex={-1} className="m-auto w-[97%] outline-none">
        <Suspense
          fallback={
            <div className="flex min-h-[65vh] flex-col items-center justify-center gap-4" role="status" aria-live="polite">
              <span className="h-11 w-11 animate-spin rounded-full border-2 border-white/15 border-t-cyan-400" aria-hidden="true" />
              <span className="text-sm font-medium tracking-wide text-white/55">Loading page…</span>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
