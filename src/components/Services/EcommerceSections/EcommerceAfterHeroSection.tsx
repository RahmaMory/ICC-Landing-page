
// import { ShoppingCart, Eye, Smartphone, ArrowRight, Shield, Gauge, Percent } from "lucide-react";
// import checkoutImg from "../../../assets/images/E-commerce/1.png";
// import clarityImg from "../../../assets/images/E-commerce/2.png";
// import mobileImg from "../../../assets/images/E-commerce/3.png";
// import { Link } from "react-router-dom";

// const metrics = [
//   {
//     icon: Percent,
//     value: "+42%",
//     label: "Conversion Increase",
//   },
//   {
//     icon: Gauge,
//     value: "-60%",
//     label: "Load Time Reduction",
//   },
//   {
//     icon: Shield,
//     value: "100%",
//     label: "Secure Transactions",
//   },
// ];

// const cards = [
//   {
//     icon: ShoppingCart,
//     title: "Smooth Checkout",
//     description:
//       "Frictionless payment flows engineered to eliminate drop-offs. We optimize every input field to maximize completed transactions.",
//     button: "Add to Cart",
//     image: checkoutImg,
//     progress: "w-16",
//   },
//   {
//     icon: Eye,
//     title: "Product Clarity",
//     description:
//       "High-fidelity galleries and intuitive layouts that let your products speak for themselves. Clear hierarchy drives purchasing decisions.",
//     image: clarityImg,
//     progress: "w-14",
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile-First Architecture",
//     description:
//       "Flawless performance and responsive design ensuring a perfect, lightning-fast shopping experience on any device, anywhere.",
//     image: mobileImg,
//     progress: "w-16",
//   },
// ];

// function FeatureCard({
//   icon: Icon,
//   title,
//   description,
//   button,
//   image,
//   progress,
// }: {
//   icon: any;
//   title: string;
//   description: string;
//   button?: string;
//   image: string;
//   progress: string;
// }) {
//   return (
//     <div className="group rounded-[28px] border border-cyan-400/10 bg-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/25 hover:shadow-[0_0_30px_rgba(79,209,255,0.10)] sm:p-5 lg:p-6">
//       <div className="grid gap-5 lg:grid-cols-[1.05fr_1fr] lg:items-center">
//         <div className="flex h-full flex-col justify-between">
//           <div>
//             <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/15 bg-[#07111f] shadow-[0_0_20px_rgba(79,209,255,0.08)] transition-all duration-300 group-hover:border-blue-300/50 group-hover:bg-cyan-300/10 group-hover:shadow-[0_0_28px_rgba(79,209,255,0.35)]">
//               <Icon className="h-5 w-5 text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-200" />
//             </div>

//             <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-white sm:text-[28px]">
//               {title}
//             </h3>

//             <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-[15px]">
//               {description}
//             </p>
//           </div>

//           {button ? (
//             <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-medium text-blue-200 transition hover:bg-cyan-400/12">
//               {button}
//               <ArrowRight className="h-3.5 w-3.5" />
//             </button>
//           ) : null}
//         </div>

//         <div className="relative overflow-hidden rounded-[22px] border border-white/5 bg-[#081120]">
//           <img
//             src={image}
//             alt={title}
//             className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-[260px] lg:h-[250px]"
//           />

//           <div className="absolute bottom-4 left-4 h-1.5 w-20 rounded-full bg-white/10">
//             <div className={`h-full rounded-full bg-blue-300 transition-all duration-300 group-hover:brightness-125 ${progress}`} />
//           </div>

//           <div className="absolute bottom-3 right-3 h-6 w-6 rounded-full border border-cyan-300/20 bg-[#0a1626]/90 shadow-[0_0_18px_rgba(79,209,255,0.12)] transition-all duration-300 group-hover:border-cyan-300/40 group-hover:shadow-[0_0_24px_rgba(79,209,255,0.30)]" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function EcommerceAfterHeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#0A0A1A] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,89,138,0.22),transparent_38%),radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_35%)]" />

//       <div className="relative mx-auto max-w-7xl">
//         <div className="border-t border-white/[0.04] pt-16">
//           <div className="mx-auto max-w-3xl text-center">
//             <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
//               <span className="text-slate-400">“Many stores look good</span>
//               <br />
//               <span>but don’t convert.”</span>
//             </h2>
//             <div className="mx-auto mt-8 h-px w-20 bg-cyan-300/30" />
//           </div>

//           <div className="mt-20 grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
//             <div className="self-start lg:sticky lg:top-1/2 lg:-translate-y-1/2">
//               <h3 className="max-w-sm text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
//                 We design stores optimized for
//                 <span className="block text-blue-300">buying behavior.</span>
//               </h3>

//               <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:text-[15px]">
//                 Stop losing customers to confusing navigation and slow checkouts.
//                 Our architecture is built on data-driven principles to guide users
//                 effortlessly from discovery to purchase.
//               </p>

//               <div className="mt-8 space-y-4">
//                 {metrics.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <div
//                       key={item.label}
//                       className="flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-white/[0.02] px-4 py-4 backdrop-blur-sm"
//                     >
//                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/8 text-blue-300">
//                         <Icon className="h-4 w-4" />
//                       </div>
//                       <div>
//                         <div className="text-lg font-semibold text-white">
//                           {item.value}
//                         </div>
//                         <div className="text-xs text-slate-500">{item.label}</div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="space-y-8">
//               {cards.map((card) => (
//                 <FeatureCard key={card.title} {...card} />
//               ))}
//             </div>
//           </div>

//           <div className="mt-20 rounded-[32px] border border-cyan-400/10 bg-white/[0.03] px-6 py-14 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-10 lg:mt-24 lg:px-16 lg:py-16">
//             <h3 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
//               Increase conversion
//               <span className="block text-blue-400">and sales.</span>
//             </h3>

//             <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-[15px]">
//               Transform your digital storefront into a high-performance sales
//               engine. Ready to scale your revenue?
//             </p>

//             <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
//              <Link
//   to="/contact"
//   className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
// >
//   Launch Your Store
//   <ArrowRight className="h-4 w-4" />
// </Link>
//               <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
//                 View Case Studies
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { ShoppingCart, Eye, Smartphone, ArrowRight, Shield, Gauge, Percent } from "lucide-react";
import { motion } from "framer-motion";
import checkoutImg from "../../../assets/images/E-commerce/1.png";
import clarityImg from "../../../assets/images/E-commerce/2.png";
import mobileImg from "../../../assets/images/E-commerce/3.png";
import { Link } from "react-router-dom";
import { fadeLeft, fadeUp, staggerContainer } from "../../../lib/motion";

const metrics = [
  { icon: Percent, value: "+42%", label: "Conversion Increase" },
  { icon: Gauge, value: "-60%", label: "Load Time Reduction" },
  { icon: Shield, value: "100%", label: "Secure Transactions" },
];

const cards = [
  {
    icon: ShoppingCart,
    title: "Smooth Checkout",
    description:
      "Frictionless payment flows engineered to eliminate drop-offs. We optimize every input field to maximize completed transactions.",
    button: "Add to Cart",
    image: checkoutImg,
    progress: "w-16",
  },
  {
    icon: Eye,
    title: "Product Clarity",
    description:
      "High-fidelity galleries and intuitive layouts that let your products speak for themselves. Clear hierarchy drives purchasing decisions.",
    image: clarityImg,
    progress: "w-14",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Architecture",
    description:
      "Flawless performance and responsive design ensuring a perfect, lightning-fast shopping experience on any device, anywhere.",
    image: mobileImg,
    progress: "w-16",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  button,
  image,
  progress,
}: {
  icon: any;
  title: string;
  description: string;
  button?: string;
  image: string;
  progress: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="group rounded-[28px] border border-cyan-400/10 bg-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/25 hover:shadow-[0_0_30px_rgba(79,209,255,0.10)] sm:p-5 lg:p-6"
    >
      <div className="grid gap-5 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/15 bg-[#07111f] shadow-[0_0_20px_rgba(79,209,255,0.08)] transition-all duration-300 group-hover:border-blue-300/50 group-hover:bg-cyan-300/10 group-hover:shadow-[0_0_28px_rgba(79,209,255,0.35)]">
              <Icon className="h-5 w-5 text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-200" />
            </div>

            <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-white sm:text-[28px]">
              {title}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-[15px]">
              {description}
            </p>
          </div>

          {button ? (
            <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-medium text-blue-200 transition hover:bg-cyan-400/12">
              {button}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ) : null}
        </div>

        <div className="relative overflow-hidden rounded-[22px] border border-white/5 bg-[#081120]">
          <img
            src={image}
            alt={title}
            className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-[260px] lg:h-[250px]"
          />

          <div className="absolute bottom-4 left-4 h-1.5 w-20 rounded-full bg-white/10">
            <div className={`h-full rounded-full bg-blue-300 transition-all duration-300 group-hover:brightness-125 ${progress}`} />
          </div>

          <div className="absolute bottom-3 right-3 h-6 w-6 rounded-full border border-cyan-300/20 bg-[#0a1626]/90 shadow-[0_0_18px_rgba(79,209,255,0.12)] transition-all duration-300 group-hover:border-cyan-300/40 group-hover:shadow-[0_0_24px_rgba(79,209,255,0.30)]" />
        </div>
      </div>
    </motion.div>
  );
}

export default function EcommerceAfterHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,89,138,0.22),transparent_38%),radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="border-t border-white/[0.04] pt-16">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
              <span className="text-slate-400">“Many stores look good</span>
              <br />
              <span>but don’t convert.”</span>
            </h2>
            <div className="mx-auto mt-8 h-px w-20 bg-cyan-300/30" />
          </motion.div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
            <motion.div
              className="self-start lg:sticky lg:top-1/2 lg:-translate-y-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
            >
              <h3 className="max-w-sm text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
                We design stores optimized for
                <span className="block text-blue-300">buying behavior.</span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:text-[15px]">
                Stop losing customers to confusing navigation and slow checkouts.
                Our architecture is built on data-driven principles to guide users
                effortlessly from discovery to purchase.
              </p>

              <div className="mt-8 space-y-4">
                {metrics.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-white/[0.02] px-4 py-4 backdrop-blur-sm"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/8 text-blue-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">
                          {item.value}
                        </div>
                        <div className="text-xs text-slate-500">{item.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
            >
              {cards.map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-20 rounded-[32px] border border-cyan-400/10 bg-white/[0.03] px-6 py-14 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-10 lg:mt-24 lg:px-16 lg:py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h3 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
              Increase conversion
              <span className="block text-blue-400">and sales.</span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-[15px]">
              Transform your digital storefront into a high-performance sales
              engine. Ready to scale your revenue?
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Launch Your Store
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}