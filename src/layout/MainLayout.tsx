import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "./Footer"

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0B121E] text-white">
      <Navbar />
      <div className="m-auto w-[97%]">
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
