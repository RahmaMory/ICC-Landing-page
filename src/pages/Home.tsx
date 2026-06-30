import Expertise from "../components/Expertise"
import Hero from "../components/Hero"
import FAQSection from "../components/FAQSection"
import PricingSection from "../components/pricing/PricingSection"
import ProcessSection from "../components/ProcessSection"
import TestimonialsSection from "../components/TestimonialsSection"
import Industries from "./Industries"
import SelectedWork from "./SelectedWork"
import RatingSummary from "../components/Reviews/RatingSummary"

export default function Home() {
  return (
    <>
      <Hero />

      <section id="process">
        <ProcessSection />
      </section>

      <section id="expertise">
        <Expertise />
      </section>

      <section id="work">
        <SelectedWork />
      </section>

      <section id="industries">
        <Industries />
      </section>

      <RatingSummary />

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>
    </>
  )
}