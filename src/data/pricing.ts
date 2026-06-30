export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
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
  },
  {
    name: "Pro",
    price: "$2,000+",
    description: "Scale and enterprise.",
    features: [
      "Custom Architecture",
      "Mobile Apps (iOS/Android)",
      "AI Integration",
      "Priority Support",
      "6+ Weeks Turnaround",
    ],
    buttonText: "Contact Sales",
  },
]