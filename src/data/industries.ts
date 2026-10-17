import { Building2, ShoppingCart, GraduationCap, HeartPulse, Truck, Video, Landmark, Plane } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Industry {
  slug: string
  title: string
  icon: LucideIcon
  description: string
  intro: string
  solutions: string[]
  services: { title: string; path: string }[]
  projectSlugs?: string[]
}

export const industries: Industry[] = [
  {
    slug: "startup",
    title: "Startup",
    icon: Building2,
    description: "Focused digital products for startups, from validation pages and MVPs to mobile apps and operational dashboards.",
    intro: "We help startup teams turn an idea into a focused first release, then improve it around real users and business priorities.",
    solutions: ["Validation and launch pages", "Web MVPs with core workflows", "Mobile products", "Admin and reporting dashboards"],
    services: [
      { title: "Landing Pages", path: "/services/landing-page" },
      { title: "MVP Websites", path: "/services/mvp-website" },
      { title: "Mobile Apps", path: "/services/mobile-app" },
    ],
    projectSlugs: ["fiqh-el-alaqat", "qahwa-x"],
  },
  {
    slug: "retail",
    title: "Retail",
    icon: ShoppingCart,
    description: "Clear retail and commerce experiences for product discovery, ordering, store operations, and customer follow-up.",
    intro: "ICC builds digital retail journeys that help customers find products and help teams manage the work behind each order.",
    solutions: ["Shopify storefronts", "Custom product catalogs", "Ordering and checkout journeys", "Inventory and order workflows"],
    services: [
      { title: "Shopify Stores", path: "/services/shopify" },
      { title: "Custom E-commerce", path: "/services/ecommerce" },
      { title: "Business Dashboards", path: "/services/dashboard" },
    ],
    projectSlugs: ["ali-baba-pastry", "la-rotunda", "bunzzz"],
  },
  {
    slug: "education",
    title: "Education",
    icon: GraduationCap,
    description: "Learning platforms, academy websites, member journeys, and dashboards designed around clear access to educational content.",
    intro: "We shape education products around the learner journey, from discovering a program to accessing content and tracking the next step.",
    solutions: ["Course and academy websites", "Member and learner accounts", "Content and subscription journeys", "Admin and progress dashboards"],
    services: [
      { title: "MVP Websites", path: "/services/mvp-website" },
      { title: "Mobile Apps", path: "/services/mobile-app" },
      { title: "Business Dashboards", path: "/services/dashboard" },
    ],
    projectSlugs: ["fiqh-el-alaqat", "ica-academy"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    description: "Patient-facing journeys and internal healthcare tools scoped around the organization’s real users, data, and workflows.",
    intro: "Healthcare projects need a carefully defined scope. We design the required experience and technical controls around the information and workflows provided by your team.",
    solutions: ["Patient and service portals", "Appointment and request workflows", "Role-based internal dashboards", "Agreed data and system integrations"],
    services: [
      { title: "MVP Websites", path: "/services/mvp-website" },
      { title: "Mobile Apps", path: "/services/mobile-app" },
      { title: "Business Dashboards", path: "/services/dashboard" },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    icon: Truck,
    description: "Operational portals and dashboards for tracking work, organizing roles, reviewing activity, and connecting agreed systems.",
    intro: "We help logistics teams replace scattered updates with clearer operational views and practical workflows shaped around daily work.",
    solutions: ["Tracking and status views", "Operations dashboards", "Role-based team workflows", "Reports, alerts, and integrations"],
    services: [
      { title: "MVP Websites", path: "/services/mvp-website" },
      { title: "Business Dashboards", path: "/services/dashboard" },
      { title: "AI & Automation", path: "/services/ai-automation" },
    ],
  },
  {
    slug: "creators",
    title: "Creators",
    icon: Video,
    description: "Portfolio websites, campaign pages, content platforms, and inquiry journeys for creators and media businesses.",
    intro: "We create digital experiences that present the work clearly, support the brand, and give potential clients an easy next step.",
    solutions: ["Portfolio and company websites", "Campaign landing pages", "Content and service libraries", "Inquiry and client workflows"],
    services: [
      { title: "Landing Pages", path: "/services/landing-page" },
      { title: "MVP Websites", path: "/services/mvp-website" },
      { title: "AI & Automation", path: "/services/ai-automation" },
    ],
    projectSlugs: ["a-plus-aura"],
  },
  {
    slug: "fintech",
    title: "FinTech",
    icon: Landmark,
    description: "Focused financial and operational interfaces for reviewing data, managing access, reporting, and agreed integrations.",
    intro: "We build the product interface and supporting workflows around your approved financial processes, access rules, and integration requirements.",
    solutions: ["Financial and operational dashboards", "Role-based portals", "Reports and exports", "Agreed data and service integrations"],
    services: [
      { title: "MVP Websites", path: "/services/mvp-website" },
      { title: "Mobile Apps", path: "/services/mobile-app" },
      { title: "Business Dashboards", path: "/services/dashboard" },
    ],
  },
  {
    slug: "travel",
    title: "Travel",
    icon: Plane,
    description: "Travel and hospitality experiences for service discovery, booking requests, customer communication, and team operations.",
    intro: "We connect the customer journey with the internal tools your team needs, while keeping the scope aligned with the services you actually provide.",
    solutions: ["Service and destination catalogs", "Booking and request journeys", "Customer communication flows", "Operations and admin dashboards"],
    services: [
      { title: "Landing Pages", path: "/services/landing-page" },
      { title: "MVP Websites", path: "/services/mvp-website" },
      { title: "Business Dashboards", path: "/services/dashboard" },
    ],
  }
]
