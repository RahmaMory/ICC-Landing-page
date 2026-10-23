import { testimonials as initialTestimonials } from "../data/testimonials"
import TestimonialCard from "./TestimonialCard"
import { motion, useReducedMotion } from "framer-motion"
import { fadeUp } from "../lib/motion"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, A11y } from "swiper/modules"

import "../App.css"
import "swiper/css"
import "swiper/css/navigation"

export default function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion()
  const testimonials = initialTestimonials
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
