import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// import logo2 from "../assets/logos/Gemini_Generated_Image_uzp7zxuzp7zxuzp7-removebg-preview-removebg-preview.png";
import ICCLogo from "../assets/logos/ICC.png";

type MenuLinkProps = {
  to: string;
  children: React.ReactNode;
  onNavigate?: () => void;
};

function MenuLink({ to, children, onNavigate }: MenuLinkProps) {
  const { pathname, hash } = useLocation();

  const currentHash = to.includes("#")
    ? to.substring(to.indexOf("#"))
    : "";

  const isHashLink = to.includes("#");
  const isActive = isHashLink
    ? pathname === "/" && hash === currentHash
    : pathname === to;

  return (
    <Link
      to={to}
      onClick={onNavigate}
      aria-current={isActive ? "location" : undefined}
      className={`transition-colors hover:text-blue-400 ${
        isActive ? "text-blue-400" : "text-gray-400"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

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
              alt="ICC — IO Code Company"
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
              <MenuLink to="/#process">Process</MenuLink>
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
          <div className="relative lg:hidden">
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="btn btn-ghost"
            >
              ☰
            </button>

            {isMenuOpen && <ul id="mobile-navigation" className="menu menu-sm absolute right-0 z-50 mt-3 w-52 rounded-box border border-gray-800 bg-[#0F1623] p-2 text-white shadow-xl">
              <li>
                <MenuLink to="/#services" onNavigate={() => setIsMenuOpen(false)}>Services</MenuLink>
              </li>
              <li>
                <MenuLink to="/#process" onNavigate={() => setIsMenuOpen(false)}>Process</MenuLink>
              </li>
              <li>
                <MenuLink to="/#work" onNavigate={() => setIsMenuOpen(false)}>Work</MenuLink>
              </li>
              <li>
                <MenuLink to="/#industries" onNavigate={() => setIsMenuOpen(false)}>Industries</MenuLink>
              </li>
              <li>
                <MenuLink to="/#testimonials" onNavigate={() => setIsMenuOpen(false)}>Testimonials</MenuLink>
              </li>
              <li>
                <MenuLink to="/#pricing" onNavigate={() => setIsMenuOpen(false)}>Pricing</MenuLink>
              </li>
              <li>
                <MenuLink to="/#faq" onNavigate={() => setIsMenuOpen(false)}>FAQ</MenuLink>
              </li>
              <li>
                <MenuLink to="/#contact" onNavigate={() => setIsMenuOpen(false)}>Contact</MenuLink>
              </li>

              <li>
                <div className="divider my-1"></div>
              </li>

              <li>
                <Link
                  to="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn bg-blue-500 text-white hover:bg-blue-600"
                >
                  Talk to Our Team
                </Link>
              </li>
            </ul>}
          </div>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/#contact"
          className="btn hidden bg-blue-500 text-white transition duration-300 hover:bg-blue-600 lg:inline-flex"
        >
          Talk to Our Team
        </Link>
      </div>
    </div>
  );
}
