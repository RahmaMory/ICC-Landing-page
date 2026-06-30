// import { faqs } from "../data/faq";

// export default function FrequentlyAsked () {
//   return (
//     <>
//     <section className=" bg-[#0D1421] py-24 ">
//     <div className="mx-auto max-w-3xl">
//         <h2 className="text-3xl font-bold text-center mb-12">
//             Frequently Asked Questions
//         </h2>
//  <div className=" w-full space-y-4">
//  {faqs.map((faq, i) => (
//   <div
//     key={i}
//     className="collapse collapse-arrow bg-[#0F1623] border-b border-gray-800"
//   >
//     <input
//       type="radio"
//       name="faq-accordion"
//       defaultChecked={i === 0}
//       className="peer"
//       title="inputFAQ"
//     />

//     <div
//       className="collapse-title font-semibold transition-all duration-300 
//       peer-checked:text-blue-500"
//     >
//       {faq.question}
//     </div>

//     <div className="collapse-content text-sm text-white">
//       {faq.answer}
//     </div>
//   </div>
// ))}
//     </div>
//     </div>
// </section>
//     </>
//   )
// }


import { faqs } from "../data/faq";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";

export default function FrequentlyAsked() {
  return (
    <>
      <section className=" bg-[#0D1421] py-24 ">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className=" w-full space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="collapse collapse-arrow bg-[#0F1623] border-b border-gray-800"
              >
                <input
                  type="radio"
                  name="faq-accordion"
                  defaultChecked={i === 0}
                  className="peer"
                  title="inputFAQ"
                />

                <div
                  className="collapse-title font-semibold transition-all duration-300 
                  peer-checked:text-blue-500"
                >
                  {faq.question}
                </div>

                <div className="collapse-content text-sm text-white">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}