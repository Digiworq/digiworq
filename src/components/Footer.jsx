import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Instagram, 
  MessageCircle, 
  Twitter, 
  Globe 
} from 'lucide-react';
const logoMark = '/digiworq-logo.png';

export default function Footer({ onNavigateService, onGoHome, onOpenContact }) {
  const quickLinks = [
    { name: "Home", action: onGoHome },
    { name: "About", action: onGoHome },
    { name: "Services", action: onGoHome },
    { name: "Portfolio", action: onGoHome },
    { name: "Blog", action: onGoHome },
    { name: "Career", action: onOpenContact },
    { name: "Contact", action: onOpenContact },
    { name: "FAQ", action: onGoHome },
    { name: "Privacy Policy", action: onGoHome },
    { name: "Terms & Conditions", action: onGoHome },
    { name: "Refund and Cancellation Policy", action: onGoHome },
    { name: "Shipping and Delivery Policy", action: onGoHome }
  ];

  const serviceLinks = [
    { name: "Creative", id: "creative" },
    { name: "Technology", id: "technology" },
    { name: "Video Production", id: "video-production" },
    { name: "Digital Marketing", id: "digital-marketing" },
    { name: "2D Animation", id: "2d-animation" },
    { name: "3D Animation", id: "3d-animation" },
    { name: "Printing Solutions", id: "printing-solutions" },
    { name: "Photography", id: "photography" },
    { name: "Videography", id: "videography" }
  ];

  return (
    <footer className="digiworq-official-footer">
      <div className="section-container">
        {/* 5-Column Grid Matching Official Digiworq Screenshot 40 */}
        <div className="footer-columns-grid">
          {/* Column 1: Brand Logo & Description */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap">
              <img src={logoMark} alt="Digiworq Official Logo" className="official-brand-logo-img-footer" />
              <div className="footer-wordmark">
                <h2 className="footer-brand-title">
                  DIGIWOR<span className="accent-dot">Q</span>
                </h2>
                <span className="footer-brand-subtext">Refining your vision</span>
              </div>
            </div>

            <p className="footer-brand-desc">
              Welcome to Digiworq, where the experts of the digital marketing and technology realm work together for absolute success. As a leading branding and advertising agency, we specialise in crafting customised strategies, campaign plans, branding ideologies and other services to push your brand's path towards stunning results.
            </p>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="footer-col links-col">
            <h3 className="footer-col-h3">QUICK LINKS</h3>
            <ul className="footer-ul">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button className="footer-link-btn" onClick={link.action}>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: OUR SERVICES */}
          <div className="footer-col services-col">
            <h3 className="footer-col-h3">OUR SERVICES</h3>
            <ul className="footer-ul">
              {serviceLinks.map((srv, idx) => (
                <li key={idx}>
                  <button 
                    className="footer-link-btn" 
                    onClick={() => {
                      if (onNavigateService) onNavigateService(srv.id);
                    }}
                  >
                    {srv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONNECT WITH US */}
          <div className="footer-col connect-col">
            <h3 className="footer-col-h3">CONNECT WITH US</h3>
            
            <div className="footer-contact-item">
              <MapPin size={18} className="contact-gold-icon" />
              <span>4/20, 1st B Main Road, 1st N Block, Near Ganapathi Temple Extension, Rajajinagar, Bengaluru, Karnataka 560010</span>
            </div>

            <div className="footer-contact-item">
              <Mail size={16} className="contact-gold-icon" />
              <a href="mailto:info@digiworq.com" className="footer-contact-link">info@digiworq.com</a>
            </div>

            <div className="footer-contact-item">
              <Phone size={16} className="contact-gold-icon" />
              <a href="tel:+919611489001" className="footer-contact-link">+91 96114 89001</a>
            </div>
          </div>

          {/* Column 5: FOLLOW US ON */}
          <div className="footer-col social-col">
            <h3 className="footer-col-h3">FOLLOW US ON</h3>
            
            <div className="footer-social-box-grid">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-square-box" title="Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-square-box" title="YouTube">
                <Youtube size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-square-box" title="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-square-box" title="X (Twitter)">
                <Twitter size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-square-box" title="Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="social-square-box" title="WhatsApp">
                <MessageCircle size={14} />
              </a>
              <a href="https://digiworq.com" target="_blank" rel="noreferrer" className="social-square-box" title="Global Web">
                <Globe size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-copyright-bar">
        <div className="section-container">
          <p>© {new Date().getFullYear()} Digiworq Marketing & Technology Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
