import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import Industries from "./pages/Industries";
import IndustryDetails from "./pages/IndustryDetails";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import LandingPage from "./components/Services/LandingPage";
import MVPWebsite from "./components/Services/MVPWebsite";
import MobileApp from "./components/Services/MobileApp";
import GamePage from "./components/Services/GamePage";
import ShopifyPage from "./components/Services/ShopifyPage";
import EcommercePage from "./components/Services/EcommercePage";
import DashboardPage from "./components/Services/DashboardPage";
import AIAutomationPage from "./components/Services/AIAutomationPage";
import NotFound from "./components/NotFound";
import IntroLoader from "./components/IntroLoader";
import ScrollToHash from "./components/ScrollToHash";
import SelectedWork from "./pages/SelectedWork";
import TestimonialsSection from "./components/TestimonialsSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/pricing/PricingSection";
import FrequentlyAsked from "./components/FAQSection";
import Expertise from "./components/Expertise";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <>
    <ScrollToHash/>
      {showLoader && <IntroLoader />}

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<SelectedWork />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/process" element={<ProcessSection />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/faq" element={<FrequentlyAsked />} />
          <Route path="/services" element={<Expertise />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industry/:slug" element={<IndustryDetails />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services/landing-page" element={<LandingPage />} />
          <Route path="/services/mvp-website" element={<MVPWebsite />} />
          <Route path="/services/mobile-app" element={<MobileApp />} />
          <Route path="/services/game" element={<GamePage />} />
          <Route path="/services/shopify" element={<ShopifyPage />} />
          <Route path="/services/ecommerce" element={<EcommercePage />} />
          <Route path="/services/dashboard" element={<DashboardPage />} />
          <Route path="/services/ai-automation" element={<AIAutomationPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;