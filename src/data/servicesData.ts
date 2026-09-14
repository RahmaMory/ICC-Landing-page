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
    desc: "Strategy, design, development, integrations, and launch for focused pages.",
    icon: PanelsTopLeft,
    count: 28,
    path: "/services/landing-page"
  },
  {
    title: "MVP Website",
    desc: "Web MVPs with the core interface, backend, admin tools, and deployment.",
    icon: Laptop,
    count: 26,
    path: "/services/mvp-website"
  },
  {
    title: "Mobile App",
    desc: "Complete Android and iOS apps, from UX to backend and maintenance.",
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
    desc: "Complete Shopify stores, from design and setup to launch and automation.",
    icon: ShoppingBag,
    count: 10,
    path: "/services/shopify"
  },
  {
    title: "E-commerce",
    desc: "Custom commerce systems for unique catalogs, workflows, and integrations.",
    icon: Store,
    count: 13,
    path: "/services/ecommerce"
  },
  {
    title: "Dashboard",
    desc: "Connected dashboards with permissions, reports, controls, and support.",
    icon: LayoutDashboard,
    count: 6,
    path: "/services/dashboard"
  },
  {
    title: "AI / Automation",
    desc: "Practical AI workflows, assistants, integrations, training, and follow-up.",
    icon: Sparkles,
    count: 4,
    path: "/services/ai-automation"
  }
];
