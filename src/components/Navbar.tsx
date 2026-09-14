import { Link, NavLink, useLocation } from "react-router-dom";
// import logo2 from "../assets/logos/Gemini_Generated_Image_uzp7zxuzp7zxuzp7-removebg-preview-removebg-preview.png";
import ICCLogo from "../assets/logos/ICC.png";

type MenuLinkProps = {
  to: string;
  children: React.ReactNode;
};

function MenuLink({ to, children }: MenuLinkProps) {
  const { pathname, hash } = useLocation();

  const currentHash = to.includes("#")
    ? to.substring(to.indexOf("#"))
    : "";

  const isHashLink = to.includes("#");
  const isActive = isHashLink
    ? pathname === "/" && hash === currentHash
    : pathname === to;

  return (
    <NavLink
      to={to}
      className={`text-gray-400 hover:text-blue-600 transition-colors ${
        isActive ? "active" : ""
      }`}
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0D1421]">
      <div className="navbar container mx-auto">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <img
              src={ICCLogo}
              className="h-16 w-16 rounded-full"
              alt="logo"
            />
            <span className="text-xl">ICC</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         
            <li>
              <MenuLink to="/#services">Services</MenuLink>
            </li>
            <li>
              <MenuLink to="/#work">Work</MenuLink>
            </li>
            <li>
              <MenuLink to="/#industries">Industries</MenuLink>
            </li>
            <li>
              <MenuLink to="/#testimonials">Testimonials</MenuLink>
            </li>
            <li>
              <MenuLink to="/#process">Process</MenuLink>
            </li>
            <li>
              <MenuLink to="/#pricing">Pricing</MenuLink>
            </li>
            <li>
              <MenuLink to="/#faq">FAQ</MenuLink>
            </li>
            <li>
              <MenuLink to="/#contact">Contact</MenuLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end">
          <div className="dropdown lg:hidden">
            <button type="button" tabIndex={0} aria-label="Open navigation menu" className="btn btn-ghost">
              ☰
            </button>

            <ul className="menu menu-sm dropdown-content right-0 z-50 mt-3 w-52 rounded-box border border-gray-800 bg-[#0F1623] p-2 text-white shadow-xl">
              <li>
                <MenuLink to="/#services">Services</MenuLink>
              </li>
              <li>
                <MenuLink to="/#work">Work</MenuLink>
              </li>
              <li>
                <MenuLink to="/#industries">Industries</MenuLink>
              </li>
              <li>
                <MenuLink to="/#testimonials">Testimonials</MenuLink>
              </li>
              <li>
                <MenuLink to="/#process">Process</MenuLink>
              </li>
              <li>
                <MenuLink to="/#pricing">Pricing</MenuLink>
              </li>
              <li>
                <MenuLink to="/#faq">FAQ</MenuLink>
              </li>
              <li>
                <MenuLink to="/#contact">Contact</MenuLink>
              </li>

              <li>
                <div className="divider my-1"></div>
              </li>

              <li>
                <Link
                  to="/#contact"
                  className="btn bg-blue-500 text-white hover:bg-blue-600"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/#contact"
          className="btn hidden bg-blue-500 text-white transition duration-300 hover:bg-blue-600 lg:inline-flex"
        >
          Book a Call
        </Link>
      </div>
    </div>
  );
}
