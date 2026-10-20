export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
  href?: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$199",
    description: "Perfect for validation.",
    features: [
      "Landing Page",
      "Basic Branding",
      "Email Setup",
      "1 Week Turnaround",
    ],
    buttonText: "Get Started",
    href: "#contact"
  },
  {
    name: "Growth",
    price: "$799",
    description: "Full MVP development.",
    features: [
      "Multi-page Web App",
      "User Auth",
      "Database Integration",
      "Admin Dashboard",
      "3 Weeks Turnaround",
    ],
    popular: true,
    buttonText: "Get Started",
    href: "#contact"
  },
  {
    name: "Pro",
    price: "$2,000+",
    description: "Custom products and advanced builds.",
    features: [
      "Custom Architecture",
      "Mobile Apps (iOS/Android)",
      "AI Integration",
      "Priority Support",
      "6+ Weeks Turnaround",
    ],
    buttonText: "Get Started",
    href: "#contact"
  },
]
