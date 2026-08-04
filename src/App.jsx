import React, { useState } from 'react';
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
