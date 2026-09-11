import { Routes, Route } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";
import IntroLoader from "./components/IntroLoader";
import PageMetadata from "./components/PageMetadata";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Projects = lazy(() => import("./pages/Projects"));
const IndustryDetails = lazy(() => import("./pages/IndustryDetails"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Services = lazy(() => import("./pages/Services"));
const LandingPage = lazy(() => import("./components/Services/LandingPage"));
const MVPWebsite = lazy(() => import("./components/Services/MVPWebsite"));
const MobileApp = lazy(() => import("./components/Services/MobileApp"));
const GamePage = lazy(() => import("./components/Services/GamePage"));
const ShopifyPage = lazy(() => import("./components/Services/ShopifyPage"));
const EcommercePage = lazy(() => import("./components/Services/EcommercePage"));
const DashboardPage = lazy(() => import("./components/Services/DashboardPage"));
const AIAutomationPage = lazy(() => import("./components/Services/AIAutomationPage"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (

    <>
      <ScrollToHash />
      <PageMetadata />
      {showLoader && <IntroLoader />}

      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/industry/:slug" element={<IndustryDetails />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services" element={<Services />} />
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
