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

export default function TopHeader() {
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
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-link" title="Facebook">
              <Facebook size={15} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-link" title="LinkedIn">
              <Linkedin size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-link" title="Instagram">
              <Instagram size={15} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-link" title="YouTube">
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
                <a href={link.href} className="top-nav-link">
                  {link.name}
                </a>
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
