import { useState } from "react";
import { faqs } from "../data/faq";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/motion";

export default function FrequentlyAsked() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#0D1421] py-24">
      <div className="mx-auto max-w-3xl px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#0F1623]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/5"
                >
                  <span
                    className={`font-semibold transition-colors ${
                      isOpen ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-400" : "text-slate-400"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-300 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}