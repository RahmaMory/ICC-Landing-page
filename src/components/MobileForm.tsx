
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../lib/motion";

export default function MobileForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectDetails: "",
  });

  const [buttonState, setButtonState] = useState<"idle" | "ready">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.projectDetails) {
      alert("Please fill in the required fields.");
      return;
    }

    const phoneNumber = "201031158933";
    

    const message = `
Hello, I want to start a project.

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "N/A"}
Project Details: ${formData.projectDetails}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setButtonState("ready");

    setTimeout(() => {
      setButtonState("idle");
    }, 2200);
  };

  return (
    <section id="mobile-contact" className="bg-[#070B14] px-6 py-32">
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
                Let&apos;s Plan Your{" "}
                <br />
                <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Mobile App
                </span>
              </h2>

              <p className="text-gray-400 mt-6 max-w-md leading-7">
                Tell us who will use your app and what they need to do. We&apos;ll
                help shape the right first version.
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

                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-blue-400" />
                  Agreed revisions and post-launch support
                </div>
              </div>
            </motion.div>

            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
              className="space-y-6"
              onSubmit={handleWhatsAppSubmit}
            >
              <div>
                <label htmlFor="mobile-name" className="text-sm text-gray-400">
                  Name *
                </label>
                <input
                  id="mobile-name"
                  type="text"
                  name="name"
                  required
                  aria-required="true"
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
                <label htmlFor="mobile-email" className="text-sm text-gray-400">
                  Email *
                </label>
                <input
                  id="mobile-email"
                  type="email"
                  name="email"
                  required
                  aria-required="true"
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
                <label htmlFor="mobile-company" className="text-sm text-gray-400">
                  Company (Optional)
                </label>
                <input
                  id="mobile-company"
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
                <label htmlFor="mobile-project-details" className="text-sm text-gray-400">
                  Project Details *
                </label>
                <textarea
                  id="mobile-project-details"
                  name="projectDetails"
                  required
                  aria-required="true"
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
                type="submit"
                aria-label={buttonState === "ready" ? "WhatsApp is ready — send your message" : "Continue on WhatsApp"}
                className={`
                  w-full mt-4 rounded-xl py-4 font-medium text-white
                  transition-all duration-300
                  shadow-lg
                  ${
                    buttonState === "ready"
                      ? "bg-linear-to-r from-emerald-500 to-green-500 shadow-emerald-500/20 scale-[1.02]"
                      : "bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-purple-500/20 hover:opacity-90"
                  }
                `}
              >
                <span className="flex items-center justify-center gap-2" aria-live="polite">
                  {buttonState === "ready" && (
                    <>
                      <CheckCircle2 className="h-5 w-5 animate-pulse" />
                      WhatsApp Ready — Send Your Message
                    </>
                  )}

                  {buttonState === "idle" && "Continue on WhatsApp"}
                </span>
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
