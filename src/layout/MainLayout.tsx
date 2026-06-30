import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "./Footer"

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0B121E] text-white">
      <Navbar />
      <div className="m-auto w-[97%]">
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}