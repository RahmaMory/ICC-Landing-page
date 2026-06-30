export interface Project {
  id: number
  slug: string
  title: string
  image: string
  category: string
  tag: string
  desc?: string
  content?: string
}


export const projects: Project[] = [
  {
    id: 1,
    slug: "fintech-dashboard",
    title: "FinTech Dashboard",
    image: "/projects/FinTechDashboard.jpg",
    desc: "Financial analytics platform.",
     category: "Web App",
    tag: "React",
     content: "Full analytics system with charts and reports."
  },
  {
    id: 2,
    slug: "ai-writer",
    title: "AI Writer Tool",
    image: "/projects/ai-writing-assistant-screenshot.avif",
    desc: "AI SaaS writing assistant.",
       category: "Mobile",
    tag: "E-commerce",
        content: "Tool that generates content using AI."

  },
  {
    id: 3,
    slug: "startup-landing",
    title: "Startup Landing Page",
    image: "/projects/img.avif",
    desc: "High converting landing page.",
      category: "SaaS",
    tag: "AI",
        content: "Landing page optimized for conversion."

  },
    {
  id: 4,
  slug: "interactive-website",
  title: "Interactive Website",
  image: "/projects/event-website-min.png",
  desc: "Modern interactive website with smooth animations.",
  category: "Web App",
  tag: "React",
  content: "Dynamic website with engaging UI, animations, and optimized performance."
},
{
  id: 5,
  slug: "mobile-game",
  title: "Mobile Game",
  image: "/projects/Mobile-Games.webp",
  desc: "Cross-platform mobile game.",
  category: "Game",
  tag: "Unity",
  content: "Fun and engaging mobile game designed for iOS and Android."
},

{
  id: 6,
  slug: "shopify-store",
  title: "Shopify Store",
  image: "/projects/shopify-seo-scaled.jpg",
  desc: "Professional Shopify e-commerce store.",
  category: "E-commerce",
  tag: "Retall",
  content: "Complete Shopify store setup with custom design and product management."
},
   {
    id: 7,
    slug: "healthtrack",
  title: "HealthTrack",
  image: "/projects/original.png",
  desc: "Health monitoring and patient tracking platform.",
  category: "Healthcare",
  tag: "Web",
  content: "A healthcare platform that helps track patient data, monitor health metrics, and manage medical records efficiently."
  },


]

