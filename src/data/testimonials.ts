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
  {
    id: 1,
    name: "عبدالله القحطاني",
    role: "المؤسس والمدير التنفيذي",
    company: "شركة تقنية ناشئة — الرياض",
    rating: 5,
    image: "/avatars/Michael.webp",
    text: "فريق ICC فهم فكرة المشروع من البداية وحولها إلى منتج مرتب وسهل الاستخدام. أكثر شيء أعجبني هو وضوح التواصل والالتزام في كل مرحلة.",
  },
  {
    id: 2,
    name: "نورة الحربي",
    role: "مديرة التجارة الإلكترونية",
    company: "علامة تجارية سعودية — جدة",
    rating: 5,
    image: "/avatars/Sarah.jpg",
    text: "تجربتنا مع ICC كانت ممتازة. التصميم ظهر بصورة احترافية، والتعديلات اتنفذت بسرعة، والفريق كان متعاونًا ومرنًا طوال فترة العمل.",
  },
  {
    id: 3,
    name: "فهد العتيبي",
    role: "مدير العمليات",
    company: "شركة خدمات — الدمام",
    rating: 4,
    image: "/avatars/default.webp",
    text: "اشتغلنا مع الفريق على تطوير نظام يساعدنا في تنظيم العمليات اليومية. النتيجة كانت واضحة وسهلة للفريق، والدعم بعد التسليم كان سريعًا.",
  },
  {
    id: 4,
    name: "A Plus Aura Team",
    role: "Marketing & Media Production",
    company: "A Plus Aura — Egypt",
    rating: 5,
    image: "/projects/a-plus-aura-logo.webp",
    text: "ICC gave our services, campaigns, and portfolio a clearer structure while keeping the visual energy of our brand. The team was responsive and thoughtful throughout the project.",
  },
  {
    id: 5,
    name: "2Concepts Team",
    role: "Architecture, Engineering & Construction",
    company: "2Concepts — Egypt",
    rating: 5,
    image: "/projects/two-concepts-logo.webp",
    text: "The website presents our disciplines and selected work in a refined, easy-to-navigate experience. ICC understood how to give architectural projects the visual space they need.",
  },
  {
    id: 6,
    name: "فريق فقه العلاقات",
    role: "منصة تعليمية",
    company: "Fiqh El 3alaqat — Egypt",
    rating: 5,
    image: "/projects/fiqh-el-alaqat-logo.svg",
    text: "فريق ICC رتّب المحتوى وتجربة التعلم بشكل واضح ومناسب للمستخدم العربي. رحلة الوصول للدورات والحساب الشخصي بقت أسهل وأكثر تنظيمًا.",
  },
  {
    id: 7,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "SaaS Company",
    rating: 5,
    image: "/avatars/Sarah.jpg",
    text: "ICC brought clarity to our product and delivered a polished experience. Communication was consistent, and every milestone was handled professionally.",
  },
  {
    id: 8,
    name: "Emily Carter",
    role: "Operations Manager",
    company: "E-commerce Brand",
    rating: 4,
    image: "/avatars/Emily.avif",
    text: "The team was responsive, practical, and easy to work with. They understood our priorities and turned the feedback into thoughtful improvements.",
  },
]
