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
import { useEffect, useState } from "react"
import TestimonialCard from "./TestimonialCard"
import { motion, useReducedMotion } from "framer-motion"
import { fadeUp } from "../lib/motion"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, A11y } from "swiper/modules"

import "../App.css"
import "swiper/css"
import "swiper/css/navigation"

const reviewsUpdatedEvent = "icc-reviews-updated"
const arabicTextPattern = /[\u0600-\u06FF]/
const emptyReviewPlaceholders = new Set([
  "no comment provided",
  "تجربة جيدة مع فريق icc.",
])

function hasWrittenReview(text?: string): boolean {
  const normalizedText = text?.trim().toLowerCase() || ""
  return Boolean(normalizedText) && !emptyReviewPlaceholders.has(normalizedText)
}

interface StoredReview {
  id?: number
  name?: string
  role?: string
  company?: string
  rating?: number
  text?: string
  image?: string
  consentToPublish?: boolean
}

function loadUserTestimonials(): Testimonial[] {
  if (typeof window === "undefined") return []

  try {
    const parsed: unknown = JSON.parse(localStorage.getItem("reviews") || "[]")
    if (!Array.isArray(parsed)) return []

    return parsed.flatMap((item, index): Testimonial[] => {
      const review = typeof item === "object" && item !== null
        ? item as StoredReview
        : {}

      const reviewText = review.text?.trim() || ""

      if (!hasWrittenReview(reviewText) || review.consentToPublish !== true) {
        return []
      }

      const language = arabicTextPattern.test(reviewText) ? "ar-EG" : "en"

      return [{
        id: typeof review.id === "number" ? review.id : 10_000 + index,
        projectName: review.company?.trim() || "ICC website review",
        name: review.name?.trim() || "زائر",
        role: review.role?.trim() || "عميل",
        company: review.company?.trim() || "",
        rating: typeof review.rating === "number" ? review.rating : 5,
        text: reviewText,
        image: review.image || "/avatars/default.webp",
        language,
        approvalStatus: "approved",
      }]
    })
  } catch {
    return []
  }
}

export default function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion()
  const [userTestimonials, setUserTestimonials] = useState<Testimonial[]>(loadUserTestimonials)

  useEffect(() => {
    const syncUserTestimonials = () => {
      setUserTestimonials(loadUserTestimonials())
    }

    window.addEventListener(reviewsUpdatedEvent, syncUserTestimonials)
    window.addEventListener("storage", syncUserTestimonials)

    return () => {
      window.removeEventListener(reviewsUpdatedEvent, syncUserTestimonials)
      window.removeEventListener("storage", syncUserTestimonials)
    }
  }, [])

  const writtenUserTestimonials = userTestimonials.filter((review) =>
    hasWrittenReview(review.text)
  )

  const testimonials: Testimonial[] = [
    ...[...writtenUserTestimonials].reverse(),
    ...initialTestimonials,
  ]
  const enableLoop = testimonials.length > 3

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
          What Our Clients Say
        </motion.h2>

        <motion.p
          className="-mt-10 mb-16 text-center text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          See how ICC helps clients design, build, and launch better digital products.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={fadeUp}
        >
          <Swiper
            key={writtenUserTestimonials.length}
            className="testimonials-swiper"
            modules={[Navigation, Autoplay, A11y]}
            navigation
            loop={enableLoop}
            centeredSlides={enableLoop}
            a11y={{ enabled: true }}
            autoplay={prefersReducedMotion ? false : {
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
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
                className="swiper-slide-custom"
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
