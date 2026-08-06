import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  Palette,
  Package,
  Brush,
  Layout,
  Smartphone,
  Presentation,
  Users,
  PieChart,
  Share2,
  Image,
  RefreshCw,
  Zap,
  Minus
} from 'lucide-react';
import { menuCategories } from '../data/menuData';
import MegaMenu from './MegaMenu';
const logoMark = '/digiworq-logo.png';

// Helper function to render sub-service icons matching Marketeam design system
const getSubServiceIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes('branding')) return <Palette size={18} color="#A068FF" />;
  if (t.includes('package')) return <Package size={18} color="#A068FF" />;
  if (t.includes('graphic')) return <Brush size={18} color="#A068FF" />;
  if (t.includes('ui-ux') || t.includes('ui/ux')) return <Layout size={18} color="#A068FF" />;
  if (t.includes('mobile') || t.includes('app')) return <Smartphone size={18} color="#A068FF" />;
  if (t.includes('ppt') || t.includes('presentation')) return <Presentation size={18} color="#A068FF" />;
  if (t.includes('consultation')) return <Users size={18} color="#A068FF" />;
  if (t.includes('infographic')) return <PieChart size={18} color="#A068FF" />;
  if (t.includes('social') || t.includes('content')) return <Share2 size={18} color="#A068FF" />;
  if (t.includes('illustration')) return <Image size={18} color="#A068FF" />;
  if (t.includes('rebrand')) return <RefreshCw size={18} color="#A068FF" />;
  return <Zap size={18} color="#A068FF" />;
};

export default function MainNavbar({ onOpenContact, onNavigateService, onGoHome }) {
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCatId, setExpandedMobileCatId] = useState("creative"); // Default Creative expanded matching Screenshot 53

  const activeCategory = menuCategories.find(cat => cat.id === activeMenuId);

  const handleMenuHover = (id) => {
    setActiveMenuId(id);
  };

  const handleMenuClose = () => {
    setActiveMenuId(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileCatAccordion = (id) => {
    setExpandedMobileCatId(expandedMobileCatId === id ? null : id);
  };

  return (
    <>
      <nav className="main-navbar" onMouseLeave={handleMenuClose}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <button 
            onClick={() => {
              onGoHome();
              setIsMobileMenuOpen(false);
            }} 
            className="brand-logo-container" 
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
          >
            <img src={logoMark} alt="Digiworq Official Logo" className="official-brand-logo-img" />
            <div className="brand-wordmark desktop-only">
              <h1 className="brand-title">
                DIGIWOR<span className="accent-dot">Q</span>
              </h1>
              <span className="brand-subtext">Refining your vision</span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <ul className="nav-menu-list desktop-only">
            {menuCategories.map((category) => {
              const isActive = activeMenuId === category.id;
              return (
                <li
                  key={category.id}
                  className={`nav-menu-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => handleMenuHover(category.id)}
                >
                  <button 
                    className={`nav-menu-button ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      if (onNavigateService) {
                        onNavigateService(category.id);
                      }
                      setActiveMenuId(null);
                    }}
                  >
                    <span>{category.name}</span>
                    <ChevronDown size={14} className={isActive ? 'rotate-180' : ''} />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Contact Us CTA (Desktop) & Mobile 3-Lines Hamburger Icon */}
          <div className="nav-right-actions">
            <div className="btn-border-wrap desktop-only">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Get Started</span>
              </button>
            </div>

            {/* Mobile 3-Lines Hamburger Button */}
            <button 
              className="mobile-hamburger-btn-three-lines" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle Navigation Menu"
            >
              <Menu size={28} color="#111827" />
            </button>
          </div>
        </div>

        {/* Render Active Mega Menu Desktop */}
        {activeCategory && (
          <MegaMenu 
            category={activeCategory} 
            onClose={handleMenuClose} 
            onNavigateService={onNavigateService}
          />
        )}
      </nav>

      {/* Mobile Sub-Bar Links (Home | About Us | Our Works | Blog |) */}
      <div className="mobile-sub-nav-bar mobile-only">
        <button className="sub-link-btn" onClick={onGoHome}>Home</button>
        <span className="sub-link-sep">|</span>
        <button className="sub-link-btn" onClick={onGoHome}>About Us</button>
        <span className="sub-link-sep">|</span>
        <button className="sub-link-btn" onClick={onGoHome}>Our Works</button>
        <span className="sub-link-sep">|</span>
        <button className="sub-link-btn" onClick={onGoHome}>Blog</button>
        <span className="sub-link-sep">|</span>
      </div>

      {/* Full-Screen Non-Overlapping Mobile Navigation Overlay Drawer matching Screenshot 53 */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-full-overlay">
          {/* Yellow Top Bar inside Drawer */}
          <div className="mobile-drawer-top-yellow-bar">
            <img src={logoMark} alt="Digiworq Official Logo" className="official-brand-logo-img-sm" />
            <button 
              className="mobile-drawer-close-btn" 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <Menu size={28} color="#111827" />
            </button>
          </div>

          {/* Centered Sub-Nav Links Bar inside Drawer */}
          <div className="mobile-drawer-sub-links-bar">
            <button className="sub-link-btn" onClick={() => { onGoHome(); setIsMobileMenuOpen(false); }}>Home</button>
            <span className="sub-link-sep">|</span>
            <button className="sub-link-btn" onClick={() => { onGoHome(); setIsMobileMenuOpen(false); }}>About Us</button>
            <span className="sub-link-sep">|</span>
            <button className="sub-link-btn" onClick={() => { onGoHome(); setIsMobileMenuOpen(false); }}>Our Works</button>
            <span className="sub-link-sep">|</span>
            <button className="sub-link-btn" onClick={() => { onGoHome(); setIsMobileMenuOpen(false); }}>Blog</button>
            <span className="sub-link-sep">|</span>
          </div>

          <div className="mobile-drawer-scroll-body-v53">
            <div className="mobile-nav-categories-v53">
              {menuCategories.map((category) => {
                const isCatExpanded = expandedMobileCatId === category.id;
                return (
                  <div key={category.id} className={`mobile-category-block-v53 ${isCatExpanded ? 'is-expanded' : ''}`}>
                    {/* Category Header Row */}
                    <div 
                      className={`mobile-category-row-v53 ${isCatExpanded ? 'yellow-bg' : ''}`}
                      onClick={() => toggleMobileCatAccordion(category.id)}
                    >
                      <span className="category-row-title">{category.name}</span>
                      <button className="category-row-toggle-btn" aria-label="Toggle Category">
                        {isCatExpanded ? <Minus size={20} color="#111827" /> : <ChevronDown size={20} color="#D97706" />}
                      </button>
                    </div>

                    {/* Sub-Services Grid Tiles (Matching Screenshot 53) */}
                    {isCatExpanded && (
                      <div className="mobile-sub-tiles-grid-v53">
                        {category.columns && category.columns.map((col) => 
                          col.items && col.items.map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              className="mobile-sub-tile-card"
                              onClick={() => {
                                if (onNavigateService) {
                                  onNavigateService(category.id, sub.id);
                                }
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <div className="sub-tile-icon-box">
                                {getSubServiceIcon(sub.title)}
                              </div>
                              <span className="sub-tile-title">{sub.title}</span>
                            </button>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Yellow Contact Us Button */}
            <div className="mobile-drawer-bottom-cta-v53">
              <button 
                className="mobile-contact-pill-btn-v53" 
                onClick={() => {
                  onOpenContact();
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
