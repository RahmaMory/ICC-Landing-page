import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
// import logo2 from "../assets/logos/Gemini_Generated_Image_uzp7zxuzp7zxuzp7-removebg-preview-removebg-preview.png";
import ICCLogo from "../assets/logos/ICC.png";

type MenuLinkProps = {
  to: string;
  children: ReactNode;
  onNavigate?: () => void;
};

const equivalentLanguageRoutes: Record<string, { en: string; ar: string }> = {
  "/blog": { en: "/blog", ar: "/ar/blog" },
  "/ar/blog": { en: "/blog", ar: "/ar/blog" },
  "/blog/website-design-cost-egypt": {
    en: "/blog/website-design-cost-egypt",
    ar: "/ar/blog/website-design-cost-egypt",
  },
  "/ar/blog/website-design-cost-egypt": {
    en: "/blog/website-design-cost-egypt",
    ar: "/ar/blog/website-design-cost-egypt",
  },
};

function MenuLink({ to, children, onNavigate }: MenuLinkProps) {
  const { pathname, hash } = useLocation();

  const currentHash = to.includes("#")
    ? to.substring(to.indexOf("#"))
    : "";

  const isHashLink = to.includes("#");
  const isBlogLink = to === "/blog" || to === "/ar/blog";
  const isActive = isHashLink
    ? pathname === "/" && hash === currentHash
    : pathname === to || (isBlogLink && pathname.startsWith(`${to}/`));

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

type LanguageSwitchProps = {
  currentLanguage: "en" | "ar";
  englishPath: string;
  arabicPath: string;
  onNavigate?: () => void;
  compact?: boolean;
};

function LanguageSwitch({
  currentLanguage,
  englishPath,
  arabicPath,
  onNavigate,
  compact = false,
}: LanguageSwitchProps) {
  return (
    <nav
      aria-label={currentLanguage === "ar" ? "اختيار اللغة" : "Language switcher"}
      className={`flex items-center gap-2 text-sm font-semibold ${
        compact
          ? "justify-center rounded-lg bg-white/[0.035] px-3 py-2"
          : "rounded-full border border-white/10 px-3 py-2"
      }`}
    >
      <Link
        to={englishPath}
        lang="en"
        hrefLang="en"
        onClick={onNavigate}
        aria-current={currentLanguage === "en" ? "page" : undefined}
        className={currentLanguage === "en" ? "text-cyan-300" : "text-white/55 transition hover:text-white"}
      >
        English
      </Link>
      <span aria-hidden="true" className="text-white/25">|</span>
      <Link
        to={arabicPath}
        lang="ar"
        dir="rtl"
        hrefLang="ar"
        onClick={onNavigate}
        aria-current={currentLanguage === "ar" ? "page" : undefined}
        className={currentLanguage === "ar" ? "text-cyan-300" : "text-white/55 transition hover:text-white"}
      >
        العربية
      </Link>
    </nav>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const isArabicPage = pathname.startsWith("/ar/");
  const currentLanguage = isArabicPage ? "ar" : "en";
  const equivalentRoutes = equivalentLanguageRoutes[pathname];
  const englishPath = equivalentRoutes?.en ?? (isArabicPage ? "/" : pathname);
  const arabicPath = equivalentRoutes?.ar ?? (isArabicPage ? pathname : "/ar/blog");
  const blogPath = isArabicPage ? "/ar/blog" : "/blog";
  const closeMenu = () => setIsMenuOpen(false);
  const navigationItems = [
    { to: "/#services", en: "Services", ar: "الخدمات" },
    { to: "/#process", en: "Process", ar: "مراحل العمل" },
    { to: "/#work", en: "Work", ar: "أعمالنا" },
    { to: blogPath, en: "Blog", ar: "المدونة" },
    { to: "/#industries", en: "Industries", ar: "القطاعات" },
    { to: "/#testimonials", en: "Testimonials", ar: "آراء العملاء" },
    { to: "/#pricing", en: "Pricing", ar: "الأسعار" },
    { to: "/#faq", en: "FAQ", ar: "الأسئلة الشائعة" },
    { to: "/#contact", en: "Contact", ar: "تواصل معنا" },
  ];

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !mobileMenuRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
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
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1">
            {navigationItems.map((item) => (
              <li key={item.en}>
                <MenuLink to={item.to}>{isArabicPage ? item.ar : item.en}</MenuLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end gap-2">
          <div className="hidden xl:block">
            <LanguageSwitch
              currentLanguage={currentLanguage}
              englishPath={englishPath}
              arabicPath={arabicPath}
            />
          </div>
          <div ref={mobileMenuRef} className="relative xl:hidden">
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

            {isMenuOpen ? (
              <ul
                id="mobile-navigation"
                className="menu menu-sm absolute end-0 z-50 mt-3 max-h-[calc(100dvh-5.5rem)] w-56 max-w-[calc(100vw-1rem)] overflow-y-auto rounded-box border border-gray-800 bg-[#0F1623] p-2 text-white shadow-xl"
              >
                {navigationItems.map((item) => (
                  <li key={item.en}>
                    <MenuLink to={item.to} onNavigate={closeMenu}>
                      {isArabicPage ? item.ar : item.en}
                    </MenuLink>
                  </li>
                ))}

                <li>
                  <div className="divider my-1" />
                </li>
                <li>
                  <LanguageSwitch
                    currentLanguage={currentLanguage}
                    englishPath={englishPath}
                    arabicPath={arabicPath}
                    onNavigate={closeMenu}
                    compact
                  />
                </li>
                <li>
                  <Link
                    to="/#contact"
                    onClick={closeMenu}
                    className="btn bg-blue-500 text-white hover:bg-blue-600"
                  >
                    {isArabicPage ? "تحدث مع فريقنا" : "Talk to Our Team"}
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/#contact"
          className="btn hidden bg-blue-500 text-white transition duration-300 hover:bg-blue-600 xl:inline-flex"
        >
          {isArabicPage ? "تحدث معنا" : "Talk to Our Team"}
        </Link>
      </div>
    </div>
  );
}
