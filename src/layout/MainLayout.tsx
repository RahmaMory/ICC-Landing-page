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
            <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading page">
              <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-cyan-400" />
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
