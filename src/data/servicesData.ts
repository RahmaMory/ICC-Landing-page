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
    desc: "High-converting single pagers.",
    icon: PanelsTopLeft,
    count: 28,
    path: "/services/landing-page"
  },
  {
    title: "MVP Website",
    desc: "Launch your idea in weeks.",
    icon: Laptop,
    count: 26,
    path: "/services/mvp-website"
  },
  {
    title: "Mobile App",
    desc: "iOS & Android solutions.",
    icon: Smartphone,
    count: 13,
    path: "/services/mobile-app"
  },
  {
    title: "Game",
    desc: "Interactive web experiences.",
    icon: Gamepad2,
    comingSoon: true,
    path: "/services/game"
  },
  {
    title: "Shopify",
    desc: "Custom themes & setups.",
    icon: ShoppingBag,
    count: 10,
    path: "/services/shopify"
  },
  {
    title: "E-commerce",
    desc: "Full-scale online stores.",
    icon: Store,
    count: 13,
    path: "/services/ecommerce"
  },
  {
    title: "Dashboard",
    desc: "Admin panels & SaaS tools.",
    icon: LayoutDashboard,
    count: 6,
    path: "/services/dashboard"
  },
  {
    title: "AI / Automation",
    desc: "Smart integrations & bots.",
    icon: Sparkles,
    count: 4,
    path: "/services/ai-automation"
  }
];