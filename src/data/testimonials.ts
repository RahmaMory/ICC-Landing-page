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
    name: "أحمد منصور",
    role: "مدير منتج",
    company: "شركة برمجيات — القاهرة",
    rating: 5,
    image: "/avatars/Michael.webp",
    text: "فريق محترف وبيفكر في المنتج مش مجرد تنفيذ شاشة. ساعدونا نرتب الأولويات ونوصل لنسخة قوية من المشروع من غير تعقيد.",
  },
  {
    id: 5,
    name: "مريم عادل",
    role: "مديرة التسويق",
    company: "منصة تعليمية — القاهرة",
    rating: 5,
    image: "/avatars/Emily.avif",
    text: "الموقع طلع أسرع وأوضح من النسخة القديمة، وشكل البراند بقى أكثر احترافية. التواصل كان مريحًا وكل ملاحظاتنا اتنفذت بعناية.",
  },
  {
    id: 6,
    name: "محمد خالد",
    role: "صاحب متجر إلكتروني",
    company: "قطاع التجزئة — الإسكندرية",
    rating: 5,
    image: "/avatars/default.webp",
    text: "من أول اجتماع لحد التسليم كان فيه تنظيم واهتمام بالتفاصيل. المتجر بقى أسهل للعميل، وتجربة الشراء اتحسنت بشكل واضح.",
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
