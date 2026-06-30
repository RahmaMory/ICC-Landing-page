// import { testimonials as initialTestimonials } from "../data/testimonials"
// import type { Testimonial } from "../data/testimonials"
// import { useEffect, useState } from "react"
// import TestimonialCard from "./TestimonialCard"
// import { motion } from "framer-motion"
// import { fadeUp } from "../lib/motion"

// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation, Autoplay } from "swiper/modules"

// import "../App.css"
// import "swiper/css"
// import "swiper/css/navigation"

// export default function TestimonialsSection() {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials)

//   useEffect(() => {
//     const stored = localStorage.getItem("reviews")

//     if (stored) {
//       const userReviews = JSON.parse(stored)

//       const formatted: Testimonial[] = userReviews.map((item: any) => ({
//         id: item.id,
//         name: item.name || "Anonymous",
//         role: item.role || "User",
//         company: item.company || "",
//         rating: item.rating,
//         text: item.text || "No comment provided",
//         image: item.image || "/src/assets/avatars/default.png",
//       }))

//       setTestimonials([...initialTestimonials, ...formatted])
//     }
//   }, [])

//   return (
//     <section className="bg-[#0D1421] text-white py-24 overflow-visible">
//       <div className="container mx-auto px-6 overflow-visible">
//         <motion.h2
//           className="text-4xl font-bold text-center mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           variants={fadeUp}
//         >
//           What Founders Say
//         </motion.h2>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.12 }}
//           variants={fadeUp}
//         >
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation
//             loop
//             centeredSlides
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false
//             }}
//             spaceBetween={30}
//             slidesPerView={3}
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }
//             }}
//           >
//             {testimonials.map((item) => (
//               <SwiperSlide
//                 key={item.id}
//                 className="transition-all duration-500 scale-85 opacity-60 swiper-slide-custom"
//               >
//                 <TestimonialCard item={item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import { testimonials as initialTestimonials } from "../data/testimonials"
import type { Testimonial } from "../data/testimonials"
import { useEffect, useMemo, useState } from "react"
import TestimonialCard from "./TestimonialCard"
import { motion } from "framer-motion"
import { fadeUp } from "../lib/motion"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import "../App.css"
import "swiper/css"
import "swiper/css/navigation"

export default function TestimonialsSection() {
  const [userTestimonials, setUserTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("reviews")
    if (!stored) return

    const parsed: unknown = JSON.parse(stored)
    const userReviews = Array.isArray(parsed) ? parsed : []

    const formatted: Testimonial[] = userReviews.map((item: any) => ({
      id: item.id,
      name: item.name || "Anonymous",
      role: item.role || "User",
      company: item.company || "",
      rating: item.rating,
      text: item.text || "No comment provided",
      image: item.image || "/avatars/default.png"
    }))

    setUserTestimonials(formatted)
  }, [])

const testimonials: Testimonial[] = useMemo(
  () => [...initialTestimonials, ...userTestimonials],
  [userTestimonials]
)

  return (
    <section className="bg-[#0D1421] text-white py-24 overflow-visible">
      <div className="container mx-auto px-6 overflow-visible">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          What Founders Say
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={fadeUp}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop
            centeredSlides
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide
                key={item.id}
                className="transition-all duration-500 scale-85 opacity-60 swiper-slide-custom"
              >
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}