// import React, { useState } from 'react'
// import { BadgeCheck, Send } from 'lucide-react'

// export default function DashboardContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   })

//   const whatsappNumber = '201110245333' 
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     const text = `New Dashboard Inquiry

// Name: ${formData.name || '-'}
// Email: ${formData.email || '-'}
// Phone: ${formData.phone || '-'}

// Message:
// ${formData.message || '-'}`
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
//     window.open(whatsappUrl, '_blank')
//       setFormData({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   })

//   }

//   const benefits = [
//     {
//       title: 'Free Consultation',
//       description: 'Discuss your needs with our experts',
//     },
//     {
//       title: 'Custom Solutions',
//       description: 'Tailored dashboards for your business',
//     },
//     {
//       title: 'Fast Response',
//       description: "We’ll get back to you within 24 hours",
//     },
//   ]

//   return (
//     <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28 lg:px-8">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_75%_50%,rgba(59,130,246,0.08),transparent_30%)]" />

//       <div className="mx-auto w-full max-w-[1500px]">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
//           {/* LEFT */}
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center rounded-full border border-cyan-400/15 bg-cyan-400/8 px-6 py-3 text-sm font-medium text-cyan-300">
//               Get Started
//             </div>

//             <h2 className="mt-12 text-2xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[84px]">
//               Ready to transform your data?
//             </h2>

//             <p className="mt-8 max-w-xl text-lg leading-9 text-white/68">
//               Let&apos;s discuss how our custom dashboard solutions can help you
//               make smarter, faster decisions. Get in touch today for a
//               consultation.
//             </p>

//             <div className="mt-12 space-y-7">
//               {benefits.map((item) => (
//                 <div key={item.title} className="flex items-start gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/12">
//                     <BadgeCheck className="h-5 w-5 text-cyan-300" />
//                   </div>

//                   <div>
//                     <h3 className="text-[18px] font-semibold text-white sm:text-[20px]">
//                       {item.title}
//                     </h3>
//                     <p className="mt-1 text-[17px] leading-8 text-white/58">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="relative">
//             <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-cyan-400/8 blur-3xl" />

//             <div className="relative rounded-[28px] border border-white/10 bg-[#1b3157]/90 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-10">
//               <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
//                 Get Your Dashboard
//               </h3>

//               <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="mb-3 block text-sm font-medium text-white/75"
//                   >
//                     Name *
//                   </label>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="John Doe"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="h-14 w-full rounded-xl border border-white/10 bg-[#031634] px-5 text-white outline-none transition-all placeholder:text-white/40 focus:border-cyan-300/35"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-3 block text-sm font-medium text-white/75"
//                   >
//                     Email *
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="john@company.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="h-14 w-full rounded-xl border border-white/10 bg-[#031634] px-5 text-white outline-none transition-all placeholder:text-white/40 focus:border-cyan-300/35"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="mb-3 block text-sm font-medium text-white/75"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="text"
//                     placeholder="+1 (555) 000-0000"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="h-14 w-full rounded-xl border border-white/10 bg-[#031634] px-5 text-white outline-none transition-all placeholder:text-white/40 focus:border-cyan-300/35"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="mb-3 block text-sm font-medium text-white/75"
//                   >
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     placeholder="Tell us about your dashboard needs..."
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full rounded-xl border border-white/10 bg-[#031634] px-5 py-4 text-white outline-none transition-all placeholder:text-white/40 focus:border-cyan-300/35"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="group inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-400 px-8 py-5 text-xl font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_28px_rgba(34,211,238,0.30)]"
//                 >
//                   <span>Send Message</span>
//                   <Send className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }







import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, Send } from 'lucide-react'
import { fadeLeft, fadeRight } from '../../../lib/motion'

export default function DashboardContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const whatsappNumber = '201110245333'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const text = `New Dashboard Inquiry

Name: ${formData.name || '-'}
Email: ${formData.email || '-'}
Phone: ${formData.phone || '-'}

Message:
${formData.message || '-'}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const benefits = [
    {
      title: 'Free Consultation',
      description: 'Discuss your needs with our experts',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored dashboards for your business',
    },
    {
      title: 'Fast Response',
      description: "We’ll get back to you within 24 hours",
    },
  ]

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_75%_50%,rgba(59,130,246,0.08),transparent_30%)]" />

      <div className="mx-auto w-full max-w-375">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-400/15 bg-cyan-400/8 px-6 py-3 text-sm font-medium text-cyan-300">
              Get Started
            </div>

            <h2 className="mt-12 text-2xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[84px]">
              Ready to transform your data?
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-white/68">
              Let&apos;s discuss how our custom dashboard solutions can help you
              make smarter, faster decisions. Get in touch today for a
              consultation.
            </p>

            <div className="mt-12 space-y-7">
              {benefits.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/12">
                    <BadgeCheck className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-semibold text-white sm:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[17px] leading-8 text-white/58">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
          >
            <div className="pointer-events-none absolute inset-0 rounded-4xl bg-cyan-400/8 blur-3xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-[#1b3157]/90 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-10">
              <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Get Your Dashboard
              </h3>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="mb-3 block text-sm font-medium text-white/75">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-14 w-full rounded-xl border border-white/10 bg-[#031634] px-5 text-white outline-none transition-all placeholder:text-white/40 focus:border-cyan-300/35"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-3 block text-sm font-medium text-white/75">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 w-full rounded-xl border border-white/10 bg-[#031634] px-5 text-white outline-none transition-all placeholder:text-white/40 focus:border-cyan-300/35"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-3 block text-sm font-medium text-white/75">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-14 w-full rounded-xl border border-white/10 bg-[#031634] px-5 text-white outline-none transition-all placeholder:text-white/40 focus:border-cyan-300/35"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-3 block text-sm font-medium text-white/75">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your dashboard needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-white/10 bg-[#031634] px-5 py-4 text-white outline-none transition-all placeholder:text-white/40 focus:border-cyan-300/35"
                  />
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="group inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-cyan-400 to-sky-400 px-8 py-5 text-xl font-semibold text-[#071126] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_28px_rgba(34,211,238,0.30)]"
                >
                  <span>Send Message</span>
                  <Send className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}