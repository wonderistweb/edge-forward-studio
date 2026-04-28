import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogPostPage from "./pages/BlogPostPage.tsx";
import QuotePage from "./pages/QuotePage.tsx";
import QuoteErate from "./pages/QuoteErate.tsx";
import QuoteLibrary from "./pages/QuoteLibrary.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import HospitalityPage from "./pages/HospitalityPage.tsx";
import CorporatePage from "./pages/CorporatePage.tsx";
import CustomPage from "./pages/CustomPage.tsx";
import EratePage from "./pages/EratePage.tsx";
import AdsPage from "./pages/AdsPage.tsx";
import EmailsPage from "./pages/EmailsPage.tsx";
import EbookPage from "./pages/EbookPage.tsx";

import AboutPage from "./pages/AboutPage.tsx";
import LibrariesPage from "./pages/LibrariesPage.tsx";
import LibraryWhitepaperPage from "./pages/LibraryWhitepaperPage.tsx";
import CaseStudiesPage from "./pages/CaseStudiesPage.tsx";
import LibraryFundingCaseStudyPage from "./pages/cases/LibraryFundingCaseStudyPage.tsx";
import UbiquitiCaseStudyPage from "./pages/cases/UbiquitiCaseStudyPage.tsx";
import HealthcarePage from "./pages/HealthcarePage.tsx";
import ManufacturingPage from "./pages/ManufacturingPage.tsx";
import RetailPage from "./pages/RetailPage.tsx";
import GovernmentPage from "./pages/GovernmentPage.tsx";
import NonProfitPage from "./pages/NonProfitPage.tsx";
import LegalPage from "./pages/LegalPage.tsx";
import FinancialServicesPage from "./pages/FinancialServicesPage.tsx";
import RealEstatePage from "./pages/RealEstatePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AccessControlPage from "./pages/AccessControlPage";
import HardwareSoftwarePage from "./pages/HardwareSoftwarePage";
import VoiceServicesPage from "./pages/VoiceServicesPage";
import ITAuditsPage from "./pages/ITAuditsPage";
import CloudMigrationsPage from "./pages/CloudMigrationsPage";
import WirelessNetworksPage from "./pages/WirelessNetworksPage";
import BusinessContinuityPage from "./pages/BusinessContinuityPage";
import ERateServicesPage from "./pages/ERateServicesPage";
import MilwaukeePage from "./pages/cities/MilwaukeePage";
import MadisonPage from "./pages/cities/MadisonPage";
import WaukeshaPage from "./pages/cities/WaukeshaPage";
import KenoshaPage from "./pages/cities/KenoshaPage";
import AppletonPage from "./pages/cities/AppletonPage";
import RacinePage from "./pages/cities/RacinePage";
import GreenBayPage from "./pages/cities/GreenBayPage";
import OshkoshPage from "./pages/cities/OshkoshPage";
import WausauPage from "./pages/cities/WausauPage";
import StevensPointPage from "./pages/cities/StevensPointPage";
import EauClairePage from "./pages/cities/EauClairePage";
import SheboyganPage from "./pages/cities/SheboyganPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { ConsentBanner } from "./components/ConsentBanner";
import NotFound from "./pages/NotFound.tsx";
import UnsubscribePage from "./pages/UnsubscribePage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/quote/erate" element={<QuoteErate />} />
          <Route path="/quote/library" element={<QuoteLibrary />} />
          <Route path="/industries/education" element={<EducationPage />} />
          <Route path="/industries/libraries" element={<LibrariesPage />} />
          <Route path="/industries/hospitality" element={<HospitalityPage />} />
          <Route path="/industries/corporate" element={<CorporatePage />} />
          <Route path="/industries/custom" element={<CustomPage />} />
          <Route path="/e-rate" element={<EratePage />} />
          <Route path="/marketing/ads" element={<AdsPage />} />
          <Route path="/marketing/emails" element={<EmailsPage />} />
          <Route path="/marketing/ebook" element={<EbookPage />} />
          <Route path="/marketing/library-whitepaper" element={<LibraryWhitepaperPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/wisconsin-library-funding" element={<LibraryFundingCaseStudyPage />} />
          <Route path="/case-studies/ubiquiti-erate-specifications" element={<UbiquitiCaseStudyPage />} />
          
          <Route path="/industries/healthcare" element={<HealthcarePage />} />
          <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="/industries/retail" element={<RetailPage />} />
          <Route path="/industries/government" element={<GovernmentPage />} />
          <Route path="/industries/non-profit" element={<NonProfitPage />} />
          <Route path="/industries/legal" element={<LegalPage />} />
          <Route path="/industries/financial-services" element={<FinancialServicesPage />} />
          <Route path="/industries/real-estate" element={<RealEstatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/access-control" element={<AccessControlPage />} />
          <Route path="/services/hardware-software" element={<HardwareSoftwarePage />} />
          <Route path="/services/voice-services" element={<VoiceServicesPage />} />
          <Route path="/services/it-audits" element={<ITAuditsPage />} />
          <Route path="/services/cloud-migrations" element={<CloudMigrationsPage />} />
          <Route path="/services/wireless-networks" element={<WirelessNetworksPage />} />
          <Route path="/services/business-continuity" element={<BusinessContinuityPage />} />
          <Route path="/services/e-rate" element={<ERateServicesPage />} />
          <Route path="/areas/milwaukee" element={<MilwaukeePage />} />
          <Route path="/areas/madison" element={<MadisonPage />} />
          <Route path="/areas/waukesha" element={<WaukeshaPage />} />
          <Route path="/areas/kenosha" element={<KenoshaPage />} />
          <Route path="/areas/appleton" element={<AppletonPage />} />
          <Route path="/areas/racine" element={<RacinePage />} />
          <Route path="/areas/green-bay" element={<GreenBayPage />} />
          <Route path="/areas/oshkosh" element={<OshkoshPage />} />
          <Route path="/areas/wausau" element={<WausauPage />} />
          <Route path="/areas/stevens-point" element={<StevensPointPage />} />
          <Route path="/areas/eau-claire" element={<EauClairePage />} />
          <Route path="/areas/sheboygan" element={<SheboyganPage />} />
          <Route path="/unsubscribe" element={<UnsubscribePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ConsentBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
