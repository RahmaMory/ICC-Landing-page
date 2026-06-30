export interface Testimonial {
  id: number
  name?: string
  role?: string
  company?: string
  rating: number
  text?: string
  image?: string
}


export const testimonials: Testimonial[] = [
  {    id: 1,
      name: "Sarah Johnson",
    role: "CEO",
        rating: 5,
    company: "TechStart Inc",
    image: "/avatars/Sarah.jpg",
    text: "ICC transformed our MVP idea into a fully functional product in just 4 weeks. The attention to detail was incredible.",
  },
  {
    id: 2,
    name: "سامر المنيب",
    role: "Founder",
        rating: 5,
    company: "NextGen Labs",
    image: "/avatars/Michael.webp",
    text: "فريق محترف، تواصل واضح، وتنفيذ متميز من البداية إلى النهاية.",
  },
  {
    id: 3,
    name: "Emily Carter",
        rating: 5,
    role: "CEO",
    company: "RetailHub",
    image: "/avatars/Emily.avif",
    text: "They delivered beyond expectations. Our platform performance improved dramatically.",
  },{
    id: 4,
    name: "أحمد محمد",
    role: "Founder",
    rating: 5,
    image:"/avatars/Sarah.jpg",
    text: "التعامل كان احترافي جدًا والمشروع اتسلم في وقت قياسي."
  },
  {
    id: 5,
    name: "ساره علي",
    role: "CEO",
    rating: 5,
    image: "/avatars/Michael.webp",
    text: "عمل رائع وتواصل احترافي للغاية."
  },
  {
    id: 6,
    name: "محمد خالد",
    role: "Startup Owner",
    rating: 4,
    image:"/avatars/Sarah.jpg",
    text: "شغل ممتاز والتعامل كان سلس جدًا.",
      company: "NextGen Labs",
  },
  {
    id: 7,
    name: "Emily Carter",
    role: "Product Manager",
    rating: 5,
    image: "/avatars/Emily.avif",
    text: "They transformed our idea into a real product."
  },
]