export type TestimonialLanguage = "en" | "ar-EG" | "ar-SA"
export type TestimonialApprovalStatus = "approved" | "pending"

export interface Testimonial {
  id: number
  projectName: string
  name?: string
  role?: string
  company?: string
  rating?: number
  text?: string
  image?: string
  language: TestimonialLanguage
  country?: string
  approvalStatus: TestimonialApprovalStatus
  projectLink?: string
}

export type ApprovedTestimonial = Testimonial & {
  approvalStatus: "approved"
  rating: number
  text: string
}

export function isApprovedTestimonial(
  testimonial: Testimonial,
): testimonial is ApprovedTestimonial {
  return testimonial.approvalStatus === "approved"
    && typeof testimonial.rating === "number"
    && testimonial.rating >= 1
    && testimonial.rating <= 5
    && Boolean(testimonial.text?.trim())
}

export const testimonialRecords: Testimonial[] = [
  {
    id: 1,
    projectName: "A Plus Aura",
    name: "A Plus Aura Team",
    role: "Marketing & Media Production",
    company: "A Plus Aura",
    rating: 5,
    text: "ICC gave our services, campaigns, and portfolio a clearer structure while keeping the visual energy of our brand. The team was responsive and thoughtful throughout the project.",
    image: "/projects/a-plus-aura-logo.webp",
    language: "en",
    country: "Egypt",
    approvalStatus: "approved",
    projectLink: "https://a-plus-aura.vercel.app/",
  },
  {
    id: 2,
    projectName: "2Concepts Architecture",
    name: "2Concepts Team",
    role: "Architecture, Engineering & Construction",
    company: "2Concepts",
    rating: 5,
    text: "The website presents our disciplines and selected work in a refined, easy-to-navigate experience. ICC understood how to give architectural projects the visual space they need.",
    image: "/projects/two-concepts-logo.webp",
    language: "en",
    country: "Egypt",
    approvalStatus: "approved",
    projectLink: "https://two-concepts-architecture.vercel.app/",
  },
  {
    id: 3,
    projectName: "Fiqh El 3alaqat",
    name: "فريق فقه العلاقات",
    role: "منصة تعليمية",
    company: "Fiqh El 3alaqat",
    rating: 5,
    text: "فريق ICC رتّب المحتوى وتجربة التعلم بشكل واضح ومناسب للمستخدم العربي. رحلة الوصول للدورات والحساب الشخصي بقت أسهل وأكثر تنظيمًا.",
    image: "/projects/fiqh-el-alaqat-logo.svg",
    language: "ar-EG",
    country: "Egypt",
    approvalStatus: "approved",
    projectLink: "https://fiqh-el-3alaqat.vercel.app/",
  },
  {
    id: 4,
    projectName: "Ali Baba Pastry",
    company: "Ali Baba Pastry",
    language: "ar-EG",
    approvalStatus: "pending",
    projectLink: "https://ali-baba-sweets.vercel.app/ar",
  },
  {
    id: 5,
    projectName: "Taiba Restaurant",
    company: "Taiba Restaurant",
    language: "ar-EG",
    approvalStatus: "pending",
    projectLink: "https://taiba-azure-five.vercel.app/",
  },
  {
    id: 6,
    projectName: "CaterServ",
    company: "CaterServ",
    language: "en",
    approvalStatus: "pending",
    projectLink: "https://rahmamory.github.io/catrserv-restaurant-website/",
  },
]

export const testimonials: ApprovedTestimonial[] = testimonialRecords.filter(
  isApprovedTestimonial,
)

export const pendingTestimonials = testimonialRecords.filter(
  (testimonial) => testimonial.approvalStatus === "pending",
)
