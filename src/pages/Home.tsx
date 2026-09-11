import Expertise from "../components/Expertise"
import Hero from "../components/Hero"
import FAQSection from "../components/FAQSection"
import PricingSection from "../components/pricing/PricingSection"
import ProcessSection from "../components/ProcessSection"
import TestimonialsSection from "../components/TestimonialsSection"
import Industries from "./Industries"
import SelectedWork from "./SelectedWork"
import RatingSummary from "../components/Reviews/RatingSummary"
import Contact from "./Contact"
import GeneralContactForm from "../components/GeneralContactForm"

export default function Home() {
  return (
    <>
      <Hero />

      <section id="services">
        <Expertise />
      </section>
      <section id="process">
        <ProcessSection />
      </section>

      <section id="work">
        <SelectedWork />
      </section>

      <section id="industries">
        <Industries />
      </section>

      <div id="testimonials" className="scroll-mt-20">
        <RatingSummary />
        <TestimonialsSection />
      </div>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <section id="start-project">
        <GeneralContactForm />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  )
}
