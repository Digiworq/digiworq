import React from 'react';
import { ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWidgets({ onOpenContact, onOpenInfluencer }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left side fixed tab matching screenshots */}
      <button 
        className="floating-influencer-tab"
        onClick={onOpenInfluencer}
        title="Enroll as an Influencer"
      >
        Enroll as an Influencer
      </button>

      {/* Scroll to Top Button matching screenshot 6 */}
      <button 
        className="scroll-top-btn" 
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Bottom right floating WhatsApp quick chat button */}
      <a 
        href="https://wa.me/919611489001" 
        target="_blank" 
        rel="noreferrer" 
        className="floating-whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <div className="whatsapp-pulse"></div>
        <WhatsAppIcon size={26} color="#FFFFFF" />
      </a>
    </>
  );
}
