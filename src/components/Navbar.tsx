import { Link, NavLink } from 'react-router-dom'
// import logo from '../assets/logo.jpeg'
// import logo1 from '../assets/logos/Gemini_Generated_Image_4e6sei4e6sei4e6s-removebg-preview.png'
import logo2 from '../assets/logos/Gemini_Generated_Image_uzp7zxuzp7zxuzp7-removebg-preview-removebg-preview.png'
// import logo3 from '../assets/logos/image-removebg-preview (1).png'
// import logo4 from '../assets/logos/image-removebg-preview.png'


export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#0D1421] border-b border-gray-800">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
            <img src={logo2} className="h-10 w-10 rounded-full" alt="logo" />
            <span>ICC</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/services" className="text-gray-400  hover:text-blue-600">Services</NavLink></li>
            <li><NavLink to="/work" className="text-gray-400  hover:text-blue-600">Work</NavLink></li>
            <li><NavLink to="/industries" className="text-gray-400  hover:text-blue-600">Industries</NavLink></li>
            <li><NavLink to="/testimonials" className="text-gray-400 hover:text-blue-600">Testimonials</NavLink></li>
            <li><NavLink to="/process" className="text-gray-400 hover:text-blue-600">Process</NavLink></li>
            <li><NavLink to="/pricing" className="text-gray-400 hover:text-blue-600">Pricing</NavLink></li>
            <li><NavLink to="/faq" className="text-gray-400 hover:text-blue-600">FAQ</NavLink></li>
            <li><NavLink to="/contact" className="text-gray-400 hover:text-blue-600">Contact</NavLink></li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              ☰
            </button>

            <ul className="menu menu-sm dropdown-content right-0 mt-3 w-52 p-2 shadow-xl bg-[#0F1623] text-white border border-gray-800 rounded-box z-50">
              <li><NavLink to="/expertise" className="text-gray-400 hover:text-blue-600">Services</NavLink></li>
              <li><NavLink to="/work" className="text-gray-400 hover:text-blue-600">Work</NavLink></li>
              <li><NavLink to="/industries" className="text-gray-400 hover:text-blue-600">Industries</NavLink></li>
              <li><NavLink to="/testimonials" className="text-gray-400 hover:text-blue-600">Testimonials</NavLink></li>
              <li><NavLink to="/process" className="text-gray-400 hover:text-blue-600">Process</NavLink></li>
              <li><NavLink to="/pricing" className="text-gray-400 hover:text-blue-600">Pricing</NavLink></li>
              <li><NavLink to="/faq" className="text-gray-400 hover:text-blue-600">FAQ</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-blue-600">Contact</NavLink></li>

              <li>
                <div className="divider my-1"></div>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="btn lg:inline-flex bg-blue-500 text-white hover:bg-blue-600"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link
          to="/contact"
          className="btn hidden lg:inline-flex bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
        >
          Book a Call
        </Link>
      </div>
    </div>
  )
}