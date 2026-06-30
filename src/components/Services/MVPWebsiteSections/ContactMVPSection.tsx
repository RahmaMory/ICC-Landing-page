// import { useState } from "react";
// import { CheckCircle2 } from "lucide-react";

// export default function ContactMVPSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     projectDetails: "",
//   });

//   const [buttonState, setButtonState] = useState<
//     "idle" | "loading" | "sent"
//   >("idle");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleWhatsAppSubmit = async () => {
//     if (!formData.name || !formData.email || !formData.projectDetails) {
//       alert("Please fill in the required fields.");
//       return;
//     }

//     setButtonState("loading");

//     const phoneNumber = "201110245333";

//     const message = `
// Hello, I want to start a project.

// Name: ${formData.name}
// Email: ${formData.email}
// Company: ${formData.company || "N/A"}
// Project Details: ${formData.projectDetails}
//     `.trim();

//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//     await new Promise((resolve) => setTimeout(resolve, 900));

//     window.open(whatsappURL, "_blank");

//     setFormData({
//       name: "",
//       email: "",
//       company: "",
//       projectDetails: "",
//     });

//     setButtonState("sent");

//     setTimeout(() => {
//       setButtonState("idle");
//     }, 2200);
//   };

//   return (
//     <section id="mvp-contact" className="bg-[#070B14] px-6 py-32">
//       <div className="max-w-6xl mx-auto">
//         <div
//           className="
//           relative rounded-[30px] p-10 md:p-14
//           bg-gradient-to-br from-[#0d1330] via-[#120f2a] to-[#0a0f1f]
//           border border-white/10
//           shadow-[0_0_80px_rgba(139,92,246,0.15)]
//         "
//         >
//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//                 Ready to build
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                   something real?
//                 </span>
//               </h2>

//               <p className="text-gray-400 mt-6 max-w-md leading-7">
//                 Stop planning. Start building. Drop your details below and
//                 let&apos;s validate your idea in the real world.
//               </p>

//               <div className="mt-10 space-y-6">
//                 <div className="flex items-center gap-3 text-gray-300">
//                   <CheckCircle2 className="text-blue-400" />
//                   Response within 24 hours
//                 </div>

//                 <div className="flex items-center gap-3 text-gray-300">
//                   <CheckCircle2 className="text-blue-400" />
//                   Free technical consultation
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className="text-sm text-gray-400">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   className="
//                     mt-2 w-full rounded-xl
//                     bg-[#070B14] border border-white/10
//                     px-4 py-3 text-white
//                     focus:outline-none focus:border-purple-500
//                     focus:ring-2 focus:ring-purple-500/30
//                     transition
//                   "
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-400">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john@company.com"
//                   className="
//                     mt-2 w-full rounded-xl
//                     bg-[#070B14] border border-white/10
//                     px-4 py-3 text-white
//                     focus:outline-none focus:border-blue-500
//                     focus:ring-2 focus:ring-blue-500/30
//                     transition
//                   "
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-400">
//                   Company (Optional)
//                 </label>
//                 <input
//                   type="text"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   placeholder="Acme Corp"
//                   className="
//                     mt-2 w-full rounded-xl
//                     bg-[#070B14] border border-white/10
//                     px-4 py-3 text-white
//                     focus:outline-none focus:border-purple-500
//                     focus:ring-2 focus:ring-purple-500/30
//                     transition
//                   "
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-400">
//                   Project Details
//                 </label>
//                 <textarea
//                   name="projectDetails"
//                   value={formData.projectDetails}
//                   onChange={handleChange}
//                   placeholder="What are we building?"
//                   rows={4}
//                   className="
//                     mt-2 w-full rounded-xl
//                     bg-[#070B14] border border-white/10
//                     px-4 py-3 text-white
//                     resize-none
//                     focus:outline-none focus:border-blue-500
//                     focus:ring-2 focus:ring-blue-500/30
//                     transition
//                   "
//                 />
//               </div>

//               <button
//                 type="button"
//                 onClick={handleWhatsAppSubmit}
//                 disabled={buttonState === "loading"}
//                 className={`
//                   w-full mt-4 rounded-xl py-4 font-medium text-white
//                   transition-all duration-300
//                   shadow-lg
//                   ${
//                     buttonState === "sent"
//                       ? "bg-gradient-to-r from-emerald-500 to-green-500 shadow-emerald-500/20 scale-[1.02]"
//                       : "bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-purple-500/20 hover:opacity-90"
//                   }
//                   ${buttonState === "loading" ? "opacity-80 cursor-not-allowed" : ""}
//                 `}
//               >
//                 <span className="flex items-center justify-center gap-2">
//                   {buttonState === "loading" && (
//                     <>
//                       <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
//                       Sending...
//                     </>
//                   )}

//                   {buttonState === "sent" && (
//                     <>
//                       <CheckCircle2 className="h-5 w-5 animate-pulse" />
//                       Sent Successfully
//                     </>
//                   )}

//                   {buttonState === "idle" && "Initialize Project"}
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../../lib/motion";

export default function ContactMVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectDetails: "",
  });

  const [buttonState, setButtonState] = useState<"idle" | "loading" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppSubmit = async () => {
    if (!formData.name || !formData.email || !formData.projectDetails) {
      alert("Please fill in the required fields.");
      return;
    }

    setButtonState("loading");

    const phoneNumber = "201110245333";

    const message = `
Hello, I want to start a project.

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "N/A"}
Project Details: ${formData.projectDetails}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    await new Promise((resolve) => setTimeout(resolve, 900));

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      company: "",
      projectDetails: "",
    });

    setButtonState("sent");

    setTimeout(() => {
      setButtonState("idle");
    }, 2200);
  };

  return (
    <section id="mvp-contact" className="bg-[#070B14] px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div
          className="
          relative rounded-[30px] p-10 md:p-14
          bg-linear-to-br from-[#0d1330] via-[#120f2a] to-[#0a0f1f]
          border border-white/10
          shadow-[0_0_80px_rgba(139,92,246,0.15)]
        "
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to build
                <br />
                <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  something real?
                </span>
              </h2>

              <p className="text-gray-400 mt-6 max-w-md leading-7">
                Stop planning. Start building. Drop your details below and
                let&apos;s validate your idea in the real world.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-blue-400" />
                  Response within 24 hours
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-blue-400" />
                  Free technical consultation
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
              className="space-y-6"
            >
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="
                    mt-2 w-full rounded-xl
                    bg-[#070B14] border border-white/10
                    px-4 py-3 text-white
                    focus:outline-none focus:border-purple-500
                    focus:ring-2 focus:ring-purple-500/30
                    transition
                  "
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="
                    mt-2 w-full rounded-xl
                    bg-[#070B14] border border-white/10
                    px-4 py-3 text-white
                    focus:outline-none focus:border-blue-500
                    focus:ring-2 focus:ring-blue-500/30
                    transition
                  "
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className="
                    mt-2 w-full rounded-xl
                    bg-[#070B14] border border-white/10
                    px-4 py-3 text-white
                    focus:outline-none focus:border-purple-500
                    focus:ring-2 focus:ring-purple-500/30
                    transition
                  "
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="What are we building?"
                  rows={4}
                  className="
                    mt-2 w-full rounded-xl
                    bg-[#070B14] border border-white/10
                    px-4 py-3 text-white
                    resize-none
                    focus:outline-none focus:border-blue-500
                    focus:ring-2 focus:ring-blue-500/30
                    transition
                  "
                />
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                onClick={handleWhatsAppSubmit}
                disabled={buttonState === "loading"}
                className={`
                  w-full mt-4 rounded-xl py-4 font-medium text-white
                  transition-all duration-300
                  shadow-lg
                  ${
                    buttonState === "sent"
                      ? "bg-linear-to-r from-emerald-500 to-green-500 shadow-emerald-500/20 scale-[1.02]"
                      : "bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-purple-500/20 hover:opacity-90"
                  }
                  ${buttonState === "loading" ? "opacity-80 cursor-not-allowed" : ""}
                `}
              >
                <span className="flex items-center justify-center gap-2">
                  {buttonState === "loading" && (
                    <>
                      <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  )}

                  {buttonState === "sent" && (
                    <>
                      <CheckCircle2 className="h-5 w-5 animate-pulse" />
                      Sent Successfully
                    </>
                  )}

                  {buttonState === "idle" && "Initialize Project"}
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}