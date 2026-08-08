import React from 'react';
import { 
  Phone, 
  Search, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageCircle 
} from 'lucide-react';
import { topNavLinks } from '../data/menuData';

export default function TopHeader({ onNavigatePage }) {
  return (
    <header className="top-header">
      <div className="top-header-container">
        {/* Left Side: Social Media (Desktop) / Phone Number (Mobile) */}
        <div className="top-header-left">
          <span className="follow-us-label desktop-only">Follow Us On</span>
          <div className="social-icons desktop-only">
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="social-icon-link" title="WhatsApp">
              <MessageCircle size={15} />
            </a>
            <a href="https://www.facebook.com/DigiworqMarketingandTechnologySolutions/" target="_blank" rel="noreferrer" className="social-icon-link" title="Digiworq Facebook Page">
              <Facebook size={15} />
            </a>
            <a href="https://in.linkedin.com/company/digiworq" target="_blank" rel="noreferrer" className="social-icon-link" title="Digiworq LinkedIn Company Page">
              <Linkedin size={15} />
            </a>
            <a href="https://www.instagram.com/digiworqsolutions/" target="_blank" rel="noreferrer" className="social-icon-link" title="Digiworq Instagram">
              <Instagram size={15} />
            </a>
            <a href="https://www.youtube.com/@digiworqmarketingtechnolog5334" target="_blank" rel="noreferrer" className="social-icon-link" title="Digiworq YouTube Channel">
              <Youtube size={15} />
            </a>
          </div>

          {/* Mobile Direct Phone View */}
          <div className="mobile-phone-link mobile-only">
            <Phone size={14} className="phone-icon-gold" />
            <a href="tel:+919611489001" className="phone-num-text">+91 96114 89001</a>
          </div>
        </div>

        {/* Right Side: Quick Links & Search */}
        <div className="top-header-right">
          <ul className="top-nav-links desktop-only">
            {topNavLinks.map((link, idx) => (
              <li key={idx}>
                <button 
                  className="top-nav-link-btn" 
                  onClick={() => onNavigatePage && onNavigatePage(link.page)}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="top-contact-phone desktop-only">
            <Phone size={14} className="phone-icon" />
            <span>+91 96114 89001</span>
          </div>

          <button className="search-btn" title="Search">
            <Search size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
