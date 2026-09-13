import {
  PanelsTopLeft,
  Laptop,
  Smartphone,
  Gamepad2,
  ShoppingBag,
  Store,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
  path: string;
  count?: number;
  comingSoon?: boolean;
};

export const servicesData: ServiceItem[] = [
  {
    title: "Landing Page",
    desc: "Focused pages built to turn visits into inquiries.",
    icon: PanelsTopLeft,
    count: 28,
    path: "/services/landing-page"
  },
  {
    title: "MVP Website",
    desc: "Core product experiences for early validation.",
    icon: Laptop,
    count: 26,
    path: "/services/mvp-website"
  },
  {
    title: "Mobile App",
    desc: "Intuitive iOS and Android applications.",
    icon: Smartphone,
    count: 13,
    path: "/services/mobile-app"
  },
  {
    title: "Game",
    desc: "Interactive games for brands and digital products.",
    icon: Gamepad2,
    comingSoon: true,
    path: "/services/game"
  },
  {
    title: "Shopify",
    desc: "Shopify stores, integrations, and automation.",
    icon: ShoppingBag,
    count: 10,
    path: "/services/shopify"
  },
  {
    title: "E-commerce",
    desc: "Custom stores built around the buying journey.",
    icon: Store,
    count: 13,
    path: "/services/ecommerce"
  },
  {
    title: "Dashboard",
    desc: "Clear dashboards and business control panels.",
    icon: LayoutDashboard,
    count: 6,
    path: "/services/dashboard"
  },
  {
    title: "AI / Automation",
    desc: "Practical AI workflows, integrations, and assistants.",
    icon: Sparkles,
    count: 4,
    path: "/services/ai-automation"
  }
];
