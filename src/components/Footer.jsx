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
import DigiworqLogoIcon from './DigiworqLogoIcon';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onNavigateService, onGoHome, onOpenContact, onNavigatePage }) {
  const quickLinks = [
    { name: "Home", action: onGoHome },
    { name: "About", action: () => onNavigatePage ? onNavigatePage('about') : onGoHome() },
    { name: "Services", action: () => onNavigatePage ? onNavigatePage('services') : onGoHome() },
    { name: "Portfolio", action: () => onNavigatePage ? onNavigatePage('works') : onGoHome() },
    { name: "E-Commerce", action: () => onNavigatePage ? onNavigatePage('ecommerce') : onGoHome() },
    { name: "Blog", action: () => onNavigatePage ? onNavigatePage('blog') : onGoHome() },
    { name: "Career", action: () => onNavigatePage ? onNavigatePage('career') : onOpenContact() },
    { name: "Contact", action: () => onNavigatePage ? onNavigatePage('contact') : onOpenContact() },
    { name: "Privacy Policy", action: () => onNavigatePage ? onNavigatePage('privacy') : onGoHome() },
    { name: "Refund and Cancellation Policy", action: () => onNavigatePage ? onNavigatePage('refund') : onGoHome() },
    { name: "Shipping and Delivery Policy", action: () => onNavigatePage ? onNavigatePage('delivery') : onGoHome() },
    { name: "Disclaimer", action: () => onNavigatePage ? onNavigatePage('disclaimer') : onGoHome() },
    { name: "Cookie Policy", action: () => onNavigatePage ? onNavigatePage('cookie') : onGoHome() }
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
              <DigiworqLogoIcon size={46} />
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
              <a href="https://www.facebook.com/DigiworqMarketingandTechnologySolutions/" target="_blank" rel="noreferrer" className="social-square-box" title="Digiworq Facebook Page">
                <Facebook size={14} />
              </a>
              <a href="https://www.youtube.com/@digiworqmarketingtechnolog5334" target="_blank" rel="noreferrer" className="social-square-box" title="Digiworq YouTube Channel">
                <Youtube size={14} />
              </a>
              <a href="https://in.linkedin.com/company/digiworq" target="_blank" rel="noreferrer" className="social-square-box" title="Digiworq LinkedIn Company Page">
                <Linkedin size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-square-box" title="X (Twitter)">
                <Twitter size={14} />
              </a>
              <a href="https://www.instagram.com/digiworqsolutions/" target="_blank" rel="noreferrer" className="social-square-box" title="Digiworq Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://wa.me/919611489001" target="_blank" rel="noreferrer" className="social-square-box" title="Chat on WhatsApp">
                <WhatsAppIcon size={14} color="currentColor" />
              </a>
              <a href="https://digiworq.com" target="_blank" rel="noreferrer" className="social-square-box" title="Global Web">
                <Globe size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Official Agency Certifications & Accreditations Section (User Request - Certificates in footer) */}
        <div className="footer-certificates-section">
          <div className="certificates-header-row">
            <span className="certificates-badge-tag">VERIFIED AGENCY ACCREDITATIONS</span>
            <h4 className="certificates-title">Industry Certifications & Global Recognition</h4>
          </div>

          <div className="certificates-grid">
            {/* Meta Certified Digital Marketing Associate */}
            <div className="certificate-card">
              <div className="certificate-badge-img-wrapper">
                <img 
                  src="https://images.credly.com/images/e9d3dcc5-e1b5-4aba-942a-9e1630ef2b02/Digital_Mar_Assoc_800.png" 
                  alt="Meta Certified Digital Marketing Associate" 
                  className="certificate-img"
                />
              </div>
              <div className="certificate-info">
                <span className="certificate-issuer">Meta Blueprint</span>
                <h5 className="certificate-name">Meta Certified Digital Marketing Associate</h5>
                <span className="certificate-verified-badge">✓ Official Credential</span>
              </div>
            </div>

            {/* Google Certified Partner */}
            <div className="certificate-card">
              <div className="certificate-badge-img-wrapper">
                <div className="google-partner-badge">
                  <span className="g-partner-brand"><span className="g-blue">G</span><span className="g-red">o</span><span className="g-yellow">o</span><span className="g-blue">g</span><span className="g-green">l</span><span className="g-red">e</span></span>
                  <span className="g-partner-label">Partner</span>
                </div>
              </div>
              <div className="certificate-info">
                <span className="certificate-issuer">Google Skillshop</span>
                <h5 className="certificate-name">Google Certified Digital Marketing Partner</h5>
                <span className="certificate-verified-badge">✓ Verified Partner</span>
              </div>
            </div>

            {/* Digital Marketing Professional Certification */}
            <div className="certificate-card">
              <div className="certificate-badge-img-wrapper">
                <img 
                  src="https://www.bestmarketingdegrees.org/wp-content/uploads/2018/04/affordable_certs_BMD-01.png" 
                  alt="Digital Marketing Professional Certification" 
                  className="certificate-img"
                />
              </div>
              <div className="certificate-info">
                <span className="certificate-issuer">Digital Marketing Institute</span>
                <h5 className="certificate-name">Digital Marketing Professional Certification</h5>
                <span className="certificate-verified-badge">✓ Accredited Partner</span>
              </div>
            </div>

            {/* HubSpot Certified Partner */}
            <div className="certificate-card">
              <div className="certificate-badge-img-wrapper">
                <div className="hubspot-partner-badge">
                  <span className="hub-partner-brand">HubSpot</span>
                  <span className="hub-partner-label">Certified</span>
                </div>
              </div>
              <div className="certificate-info">
                <span className="certificate-issuer">HubSpot Academy</span>
                <h5 className="certificate-name">Inbound & Growth Marketing Certification</h5>
                <span className="certificate-verified-badge">✓ Global Certification</span>
              </div>
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
