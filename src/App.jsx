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

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'service'
  const [activeCategoryId, setActiveCategoryId] = useState('creative');
  const [activeSubServiceId, setActiveSubServiceId] = useState('');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isInfluencerOpen, setIsInfluencerOpen] = useState(false);

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
      '.client-slider-track-wrap'
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
    setActiveCategoryId(categoryId);
    setActiveSubServiceId(subServiceId || '');
    setActivePage('service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActivePage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Top Utility Header */}
      <TopHeader />

      {/* Main Sticky Navbar with Mega Dropdowns */}
      <MainNavbar 
        onOpenContact={() => setIsContactOpen(true)} 
        onNavigateService={handleNavigateService}
        onGoHome={handleGoHome}
      />

      {/* Main Content Sections / Router */}
      <main>
        {activePage === 'home' ? (
          <>
            <Hero onOpenContact={() => setIsContactOpen(true)} />

            {/* Home Page Stats Showcase */}
            <AgencyShowcase onOpenContact={() => setIsContactOpen(true)} />

            {/* Client Trust Showcase Slider */}
            <ClientSlider />

            {/* Our Process Section (Above Our Services Grid) */}
            <HomeProcessSection />

            {/* Services Showcase Grid */}
            <ServicesGrid onOpenContact={() => setIsContactOpen(true)} />

            {/* Why Choose Us Section (Below Our Services Grid) */}
            <WhyChooseUs onOpenContact={() => setIsContactOpen(true)} />

            {/* Testimonials Section - Our Happy Clientele Diaries */}
            <Testimonials />

            {/* Frequently Asked Questions (FAQ) Section */}
            <FAQSection />
          </>
        ) : (
          <ServicePage 
            key={`${activeCategoryId}-${activeSubServiceId}`}
            categoryId={activeCategoryId}
            subServiceId={activeSubServiceId}
            initialServiceId={activeSubServiceId}
            onOpenContact={() => setIsContactOpen(true)}
            onBackHome={handleGoHome}
          />
        )}
      </main>

      {/* Official Digiworq Footer at the End of Every Page */}
      <Footer 
        onNavigateService={handleNavigateService}
        onGoHome={handleGoHome}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Floating Left Tab, Scroll-to-top & WhatsApp Chat */}
      <FloatingWidgets 
        onOpenContact={() => setIsContactOpen(true)}
        onOpenInfluencer={() => setIsInfluencerOpen(true)}
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
