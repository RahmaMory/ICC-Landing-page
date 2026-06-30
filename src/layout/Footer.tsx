import { Link } from "react-router-dom"
import logo from "../assets/logo.jpeg"
import { Mail} from "lucide-react"
import { footerLinks } from "../data/footer"
import { socialLinks } from "../data/socialLinks"
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10">

      {/* CTA Section */}
      <div className="container mx-auto px-6 text-center mb-10">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Build?
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-xl">
          Let's turn your vision into reality. Book a free 15-minute discovery call today.
        </p>

   <div className="flex justify-center gap-4 flex-wrap mb-10">

  <Link
    to="/contact"
    className="
      text-base sm:text-lg md:text-xl
      px-4 sm:px-6 md:px-7
      py-2 sm:py-3 md:py-4
      rounded-lg
      border border-white
      bg-gradient-to-r from-blue-600 to-indigo-500
      hover:opacity-90 transition
      flex items-center justify-center
      w-full sm:w-auto
    "
  >
    Book a Call
  </Link>

  <a
    href="mailto:rahma.mory1@gmail.com"
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
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center font-bold">
              
            </div> */}
  <img src={logo} className="h-10 w-10 rounded-full" alt="logo"/>
            <span className="font-semibold text-lg">ICC</span>
          </div>

          <p className="text-gray-400 text-sm mb-6">
            Modern software studio for startups and creators.
            Building the future, one click at a time.
          </p>

          
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {footerLinks.company.map((item, i) => (
              <li key={i} className="hover:text-blue-400 transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {footerLinks.services.map((item, i) => (
              <li key={i} className="hover:text-blue-400 transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
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
        © 2026 Infinity Code Collaboration Studio. All rights reserved.
      </div>

    </footer>
  )
}