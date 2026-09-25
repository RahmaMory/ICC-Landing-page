import { Link } from "react-router-dom"
import logo from "../assets/logo.jpeg"
import { Mail} from "lucide-react"
import { footerLinks } from "../data/footer"
import { socialLinks } from "../data/socialLinks"
export default function Footer() {

    const whatsappUrl =
    'https://wa.me/201031158933?text=Hello!%20I%20would%20like%20to%20book%20a%20free%2015-minute%20discovery%20call%20with%20ICC.'

  return (
    <footer className="bg-black text-white pt-24 pb-10">

      {/* CTA Section */}
      <div className="container mx-auto px-6 text-center mb-10">
        <h2 className="text-5xl font-bold mb-6">
          Have a Project in Mind?
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-xl">
          Book a free 15-minute discovery call to discuss your idea and define
          the right next step.
        </p>

   <div className="flex justify-center gap-4 flex-wrap mb-10">

  <a
    href="tel:+201031158933"
    aria-label="Call ICC to book a free 15-minute discovery call"
    className="
      flex w-full items-center justify-center
      rounded-lg border border-white
      bg-gradient-to-r from-blue-600 to-indigo-500
      px-4 py-2 text-base
      transition hover:opacity-90
      sm:hidden
    "
  >
    Book a Free 15-Minute Call
  </a>

  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open WhatsApp to book a free 15-minute discovery call with ICC"
    className="
      text-base sm:text-lg md:text-xl
      px-4 sm:px-6 md:px-7
      py-2 sm:py-3 md:py-4
      rounded-lg
      border border-white
      bg-gradient-to-r from-blue-600 to-indigo-500
      hover:opacity-90 transition
      hidden items-center justify-center sm:flex
      w-full sm:w-auto
    "
  >
    Book a Free 15-Minute Call
  </a>

  <a
    href="mailto:hr@icc-collab.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      text-base sm:text-lg md:text-xl
      px-4 sm:px-6 md:px-7
      py-2 sm:py-3 md:py-4
      rounded-lg
      border border-white
      hover:opacity-80 transition
      flex items-center justify-center gap-2
      w-full sm:w-auto
    "
  >
    <Mail size={18} />
    Email Us
  </a>

</div>
<div className="flex justify-center items-center gap-6 text-gray-400">

  {socialLinks.map((social, i) => {

    const Icon = social.icon

    return (
      <a
        key={i}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ICC — IO Code Company on ${social.name}`}
        title={social.name}
        className="group"
      >

        {social.type === "image" ? (

          <img
            src={social.icon as string}
            className="w-5 h-5 invert opacity-60
            group-hover:opacity-100
            group-hover:scale-125
            group-hover:invert
            transition duration-300"
            alt={social.name}
          />

        ) : (

          <Icon
            size={18}
            className="transition duration-300 hover:text-white hover:scale-125"
          />

        )}

      </a>
    )
  })}

</div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Links Section */}
      <div className="container mx-auto grid gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_0.75fr_0.75fr]">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center font-bold">
              
            </div> */}
  <img src={logo} className="h-10 w-10 rounded-full" alt="logo"/>
            <span className="font-semibold text-lg">ICC</span>
          </div>

          <p className="text-gray-400 text-sm mb-6">
            ICC — IO Code Company is a modern software studio for startups and growing businesses.
            Building the future, one click at a time.
          </p>

          
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {footerLinks.company.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-blue-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-semibold">Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {footerLinks.services.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-blue-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/services"
            className="mt-4 inline-flex text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            View All Services →
          </Link>
        </div>

        {/* Legal */}
        <div>
  <h4 className="font-semibold mb-4">Legal</h4>

  <ul className="space-y-3 text-gray-400 text-sm">

    {footerLinks.legal.map((item, i) => (

      <li key={i}>
        <Link
          to={item.path}
          className="hover:text-blue-400 transition"
        >
          {item.name}
        </Link>
      </li>

    ))}

  </ul>
</div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © 2026 ICC — IO Code Company. All rights reserved.
      </div>

    </footer>
  )
}
