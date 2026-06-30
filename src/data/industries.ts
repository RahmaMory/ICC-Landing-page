import { Building2, ShoppingCart, GraduationCap, HeartPulse, Truck, Video, Landmark, Plane } from "lucide-react"

export interface Industry {
  slug: string
  title: string
  icon: any
  description: string
}

export const industries: Industry[] = [
  {
    slug: "startup",
    title: "Startup",
    icon: Building2,
    description: "We help startups build scalable MVPs and products."
  },
  {
    slug: "retail",
    title: "Retail",
    icon: ShoppingCart,
    description: "E-commerce systems and retail platforms."
  },
  {
    slug: "education",
    title: "Education",
    icon: GraduationCap,
    description: "Learning platforms and LMS systems."
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    description: "Secure and scalable medical systems."
  },
  {
    slug: "logistics",
    title: "Logistics",
    icon: Truck,
    description: "Tracking and shipment platforms."
  },
  {
    slug: "creators",
    title: "Creators",
    icon: Video,
    description: "Tools for creators and content platforms."
  },
  {
    slug: "fintech",
    title: "FinTech",
    icon: Landmark,
    description: "Financial dashboards and payment systems."
  },
  {
    slug: "travel",
    title: "Travel",
    icon: Plane,
    description: "Booking systems and travel platforms."
  }
]