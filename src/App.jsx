import React, { useState, useEffect } from 'react';
import TopHeader from './components/TopHeader';
import MainNavbar from './components/MainNavbar';
import Hero from './components/Hero';
import AgencyShowcase from './components/AgencyShowcase';
import ClientSlider from './components/ClientSlider';
import ServicesGrid from './components/ServicesGrid';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ServicePage from './components/ServicePage';
import FloatingWidgets from './components/FloatingWidgets';
import ContactModal from './components/ContactModal';
import InfluencerModal from './components/InfluencerModal';
import WhyChooseUs from './components/WhyChooseUs';
import HomeProcessSection from './components/HomeProcessSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import AboutUsPage from './components/AboutUsPage';
import OurWorksPage from './components/OurWorksPage';
import EcommercePage from './components/EcommercePage';
import BlogPage from './components/BlogPage';
import CareerPage from './components/CareerPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import RefundPolicyPage from './components/RefundPolicyPage';
import DeliveryPolicyPage from './components/DeliveryPolicyPage';
import DisclaimerPage from './components/DisclaimerPage';
import CookiePolicyPage from './components/CookiePolicyPage';
import ServiceDispatcher from './pages/services/index.jsx';
import ServicesPage from './components/ServicesPage';
import SeoHeadManager from './components/SeoHeadManager';
import HomeSeoContentSection from './components/HomeSeoContentSection';
import { parseRouteFromUrl, getSeoMetadata } from './data/seoPageMetadata';

export default function App() {
  const initialRoute = parseRouteFromUrl();
  const [activePage, setActivePage] = useState(initialRoute.activePage);
  const [activeCategoryId, setActiveCategoryId] = useState(initialRoute.activeCategoryId);
  const [activeSubServiceId, setActiveSubServiceId] = useState(initialRoute.activeSubServiceId);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isInfluencerOpen, setIsInfluencerOpen] = useState(false);

  // Sync route state on browser Back/Forward actions
  useEffect(() => {
    const handlePopState = () => {
      const route = parseRouteFromUrl();
      setActivePage(route.activePage);
      setActiveCategoryId(route.activeCategoryId);
      setActiveSubServiceId(route.activeSubServiceId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll Reveal Observer for Smooth Scroll Pop-Out Animations
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const revealSelectors = [
      '.eventura-section-header',
      '.velorah-card-container',
      '.marketeam-process-card',
      '.marketeam-glass-feature-card',
      '.marketeam-quote-glass-capsule',
      '.why-left-visual-card',
      '.why-pillar-open-node',
      '.metric-glass-sphere',
      '.testimonial-glass-capsule',
      '.faq-card-item',
      '.service-details-left-column',
      '.service-studio-center-sphere',
      '.client-slider-track-wrap',
      '.about-stat-card',
      '.value-glass-card',
      '.timeline-item-card',
      '.team-glass-card',
      '.work-project-card',
      '.capability-glass-card',
      '.blog-card-item',
      '.capability-overview-card',
      '.subservice-deliverables-banner',
      '.deliv-pill-item',
      '.service-details-card-v2',
      '.service-detail-block',
      '.bento-card-pillar',
      '.service-feature-card',
      '.faq-item',
      '.service-cta-banner-wrap'
    ];

    const timer = setTimeout(() => {
      revealSelectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el, index) => {
          el.classList.add('scroll-reveal-item');
          el.style.setProperty('--reveal-index', index % 4);
          observer.observe(el);
        });
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activePage, activeCategoryId, activeSubServiceId]);

  const handleNavigateService = (categoryId, subServiceId) => {
    const newSubId = subServiceId || '';
    setActiveCategoryId(categoryId);
    setActiveSubServiceId(newSubId);
    setActivePage('service');

    const meta = getSeoMetadata({ activePage: 'service', activeCategoryId: categoryId, activeSubServiceId: newSubId });
    if (meta && meta.path) {
      window.history.pushState({}, '', meta.path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActivePage('home');
    setActiveCategoryId('');
    setActiveSubServiceId('');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePage = (pageKey) => {
    setActivePage(pageKey);
    setActiveCategoryId('');
    setActiveSubServiceId('');

    const meta = getSeoMetadata({ activePage: pageKey });
    if (meta && meta.path) {
      window.history.pushState({}, '', meta.path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderMainContent = () => {
    switch (activePage) {
      case 'about':
        return <AboutUsPage onOpenContact={() => setIsContactOpen(true)} />;
      case 'career':
        return <CareerPage onOpenContact={() => setIsContactOpen(true)} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'refund':
      case 'refund-policy':
        return <RefundPolicyPage />;
      case 'delivery':
      case 'delivery-policy':
      case 'shipping-and-delivery-policy':
        return <DeliveryPolicyPage />;
      case 'disclaimer':
        return <DisclaimerPage />;
      case 'cookie':
      case 'cookie-policy':
        return <CookiePolicyPage />;
      case 'services':
        return (
          <ServicesPage 
            onOpenContact={() => setIsContactOpen(true)}
            onNavigateService={handleNavigateService}
          />
        );
      case 'works':
        return <OurWorksPage onOpenContact={() => setIsContactOpen(true)} />;
      case 'ecommerce':
        return <EcommercePage onOpenContact={() => setIsContactOpen(true)} />;
      case 'blog':
        return <BlogPage onOpenContact={() => setIsContactOpen(true)} />;
      case 'service':
        return (
          <ServiceDispatcher 
            key={`${activeCategoryId}-${activeSubServiceId}`}
            categoryId={activeCategoryId}
            subServiceId={activeSubServiceId}
            onOpenContact={() => setIsContactOpen(true)}
            onBackHome={handleGoHome}
          />
        );
      case 'home':
      default:
        return (
          <>
            <Hero onOpenContact={() => setIsContactOpen(true)} />
            <AgencyShowcase onOpenContact={() => setIsContactOpen(true)} />
            <ClientSlider />
            <HomeProcessSection />
            <ServicesGrid onOpenContact={() => setIsContactOpen(true)} />
            <WhyChooseUs onOpenContact={() => setIsContactOpen(true)} />
            <Testimonials />
            <HomeSeoContentSection onNavigateService={handleNavigateService} />
            <FAQSection />
          </>
        );
    }
  };

  return (
    <div className="app-root">
      {/* Dynamic SEO Title, Meta Tags & OpenGraph Manager for all 87 Pages */}
      <SeoHeadManager 
        activePage={activePage} 
        activeCategoryId={activeCategoryId} 
        activeSubServiceId={activeSubServiceId} 
      />

      {/* Top Utility Header */}
      <TopHeader onNavigatePage={handleNavigatePage} />

      {/* Main Sticky Navbar with Mega Dropdowns */}
      <MainNavbar 
        onOpenContact={() => setIsContactOpen(true)} 
        onNavigateService={handleNavigateService}
        onGoHome={handleGoHome}
        onNavigatePage={handleNavigatePage}
      />

      {/* Main Content Sections / Router with Universal Smooth Pop-Up Animation */}
      <main key={`${activePage}-${activeCategoryId || ''}-${activeSubServiceId || ''}`} className="page-transition-pop-up">
        {renderMainContent()}
      </main>

      {/* Official Digiworq Footer at the End of Every Page */}
      <Footer 
        onNavigateService={handleNavigateService}
        onGoHome={handleGoHome}
        onOpenContact={() => setIsContactOpen(true)}
        onNavigatePage={handleNavigatePage}
      />

      {/* Floating Left Tab, Scroll-to-top & WhatsApp Chat */}
      <FloatingWidgets 
        onOpenContact={() => setIsContactOpen(true)}
        onOpenInfluencer={() => setIsInfluencerOpen(true)}
        isHomePage={activePage === 'home' || !activePage}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Influencer Enrollment Modal */}
      <InfluencerModal isOpen={isInfluencerOpen} onClose={() => setIsInfluencerOpen(false)} />

      {/* Worq AI Chatbot — Left side floating chat assistant */}
      <ChatBot
        onOpenContact={() => setIsContactOpen(true)}
        onOpenInfluencer={() => setIsInfluencerOpen(true)}
      />
    </div>
  );
}
