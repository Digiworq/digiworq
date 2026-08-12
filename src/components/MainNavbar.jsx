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
import DigiworqLogoIcon from './DigiworqLogoIcon';

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

export default function MainNavbar({ onOpenContact, onNavigateService, onGoHome, onNavigatePage }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCatId, setExpandedMobileCatId] = useState(null);

  const handleMenuHover = (categoryId) => {
    const category = menuCategories.find(c => c.id === categoryId);
    setActiveCategory(category);
    setActiveMenuId(categoryId);
  };

  const handleMenuClose = () => {
    setActiveCategory(null);
    setActiveMenuId(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileCatAccordion = (catId) => {
    setExpandedMobileCatId(expandedMobileCatId === catId ? null : catId);
  };

  const handleSubLinkClick = (pageKey) => {
    if (onNavigatePage) {
      onNavigatePage(pageKey);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky-navbar-wrapper" onMouseLeave={handleMenuClose}>
      <nav className="main-navbar">
        <div className="navbar-container">
          {/* Brand Logo & Name */}
          <button 
            className="brand-logo-container border-none bg-transparent cursor-pointer p-0 text-left" 
            onClick={onGoHome}
            aria-label="Go to Home"
          >
            <DigiworqLogoIcon size={42} />
            <div className="brand-wordmark">
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

          {/* CTA Right Button & Mobile Hamburger */}
          <div className="nav-right-actions">
            <div className="btn-border-wrap desktop-only">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Get Started</span>
              </button>
            </div>

            {/* Mobile 3-Lines Hamburger Button */}
            <button 
              className="mobile-hamburger-btn-three-lines marketeam-mobile-toggle-btn" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={28} color="#A068FF" /> : <Menu size={28} color="#A068FF" />}
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

      {/* Mobile Sub-Bar Links */}
      <div className="mobile-sub-nav-bar mobile-only">
        <button className="sub-link-btn" onClick={() => handleSubLinkClick('home')}>Home</button>
        <span className="sub-link-sep">|</span>
        <button className="sub-link-btn" onClick={() => handleSubLinkClick('about')}>About Us</button>
        <span className="sub-link-sep">|</span>
        <button className="sub-link-btn" onClick={() => handleSubLinkClick('services')}>Services</button>
        <span className="sub-link-sep">|</span>
        <button className="sub-link-btn" onClick={() => handleSubLinkClick('works')}>Our Works</button>
        <span className="sub-link-sep">|</span>
        <button className="sub-link-btn" onClick={() => handleSubLinkClick('ecommerce')}>E commerce</button>
        <span className="sub-link-sep">|</span>
        <button className="sub-link-btn" onClick={() => handleSubLinkClick('blog')}>Blog</button>
      </div>

      {/* Full-Screen Non-Overlapping Mobile Navigation Overlay Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-full-overlay">
          {/* Top Bar inside Drawer */}
          <div className="mobile-drawer-top-yellow-bar marketeam-drawer-top-bar">
            <DigiworqLogoIcon size={32} />
            <button 
              className="mobile-drawer-close-btn" 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={28} color="#A068FF" />
            </button>
          </div>

          {/* Centered Sub-Nav Links Bar inside Drawer */}
          <div className="mobile-drawer-sub-links-bar">
            <button className="sub-link-btn" onClick={() => handleSubLinkClick('home')}>Home</button>
            <span className="sub-link-sep">|</span>
            <button className="sub-link-btn" onClick={() => handleSubLinkClick('about')}>About Us</button>
            <span className="sub-link-sep">|</span>
            <button className="sub-link-btn" onClick={() => handleSubLinkClick('services')}>Services</button>
            <span className="sub-link-sep">|</span>
            <button className="sub-link-btn" onClick={() => handleSubLinkClick('works')}>Our Works</button>
            <span className="sub-link-sep">|</span>
            <button className="sub-link-btn" onClick={() => handleSubLinkClick('ecommerce')}>E commerce</button>
            <span className="sub-link-sep">|</span>
            <button className="sub-link-btn" onClick={() => handleSubLinkClick('blog')}>Blog</button>
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
    </div>
  );
}
