import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../data/allServicesPageData';
const ceoAvatarImg = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';

function ServiceHeroIllustration() {
  return (
    <svg className="service-hero-illustration-svg" viewBox="0 0 450 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="380" cy="50" r="16" fill="#FEF3C7" opacity="0.6"/>
      <path d="M380 34 L380 66 M364 50 L396 50" stroke="#F5B800" strokeWidth="2"/>

      <rect x="140" y="70" width="220" height="150" rx="10" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2.5"/>
      <line x1="140" y1="95" x2="360" y2="95" stroke="#E5E7EB" strokeWidth="2"/>
      <circle cx="155" cy="83" r="3.5" fill="#EF4444"/>
      <circle cx="168" cy="83" r="3.5" fill="#F59E0B"/>
      <circle cx="181" cy="83" r="3.5" fill="#10B981"/>

      <rect x="160" y="115" width="40" height="24" rx="4" fill="#FEF3C7" stroke="#F5B800" strokeWidth="1.5"/>
      <line x1="210" y1="120" x2="330" y2="120" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
      <line x1="210" y1="132" x2="290" y2="132" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>

      <rect x="250" y="150" width="90" height="50" rx="8" fill="#F3F4F6" stroke="#1F2937" strokeWidth="1.5"/>
      <line x1="265" y1="168" x2="325" y2="168" stroke="#1F2937" strokeWidth="2"/>
      <line x1="265" y1="180" x2="305" y2="180" stroke="#1F2937" strokeWidth="2"/>

      <circle cx="130" cy="45" r="16" fill="#FDE68A"/>
      <path d="M110 95 C 110 70, 150 70, 150 95 Z" fill="#1F2937"/>
      <path d="M95 100 L160 40" stroke="#F5B800" strokeWidth="4" strokeLinecap="round"/>

      <circle cx="380" cy="140" r="18" fill="#FDE68A"/>
      <path d="M360 200 C 360 170, 400 170, 400 200 Z" fill="#1F2937"/>
      <path d="M330 185 Q 360 160, 390 190" stroke="#1F2937" strokeWidth="3" fill="none"/>

      <circle cx="70" cy="210" r="16" fill="#FDE68A"/>
      <path d="M50 260 C 50 230, 90 230, 90 260 Z" fill="#1F2937"/>
      <path d="M75 190 L50 245" stroke="#F5B800" strokeWidth="4" strokeLinecap="round"/>

      <rect x="320" y="20" width="70" height="40" rx="8" fill="#FEF3C7" stroke="#F5B800" strokeWidth="2"/>
      <path d="M340 60 L345 70 L355 60 Z" fill="#F5B800"/>
      <circle cx="340" cy="38" r="4" fill="#F5B800"/>
      <path d="M360 30 L370 45 L355 45 Z" fill="#1F2937"/>
    </svg>
  );
}

function GeneratedCeoAvatar({ isCardHovered }) {
  return (
    <div className="ceo-avatar-hover-container">
      <div className={`ceo-circle-white-border ${isCardHovered ? 'is-hovered' : ''}`}>
        <img 
          src={ceoAvatarImg} 
          alt="RK CEO Executive 3D Avatar" 
          className="ceo-avatar-suit-img"
        />
      </div>
    </div>
  );
}

// Vector SVG Header Illustrations for Related Articles (100% Reliable, Zero Load Failures)
function ArticleGraphicHeader({ type }) {
  if (type === 1) {
    return (
      <svg className="article-svg-header" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="url(#artBg1)"/>
        <defs>
          <linearGradient id="artBg1" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E1B4B"/>
            <stop offset="1" stopColor="#312E81"/>
          </linearGradient>
        </defs>
        {/* Color Wheel Workspace */}
        <circle cx="200" cy="100" r="60" fill="#312E81" stroke="#F5B800" strokeWidth="3"/>
        <circle cx="200" cy="100" r="45" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 6"/>
        <path d="M200 40 A60 60 0 0 1 260 100 L200 100 Z" fill="#EF4444" opacity="0.8"/>
        <path d="M260 100 A60 60 0 0 1 200 160 L200 100 Z" fill="#F59E0B" opacity="0.8"/>
        <path d="M200 160 A60 60 0 0 1 140 100 L200 100 Z" fill="#10B981" opacity="0.8"/>
        <path d="M140 100 A60 60 0 0 1 200 40 L200 100 Z" fill="#3B82F6" opacity="0.8"/>
        <circle cx="200" cy="100" r="18" fill="#111827" stroke="#F5B800" strokeWidth="2"/>
        <text x="200" y="104" textAnchor="middle" fill="#F5B800" fontSize="12" fontWeight="900" fontFamily="sans-serif">DESIGN</text>
      </svg>
    );
  }
  if (type === 2) {
    return (
      <svg className="article-svg-header" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="url(#artBg2)"/>
        <defs>
          <linearGradient id="artBg2" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#064E3B"/>
            <stop offset="1" stopColor="#022C22"/>
          </linearGradient>
        </defs>
        {/* Word Cloud & Innovation Sphere */}
        <circle cx="200" cy="100" r="65" fill="rgba(245, 184, 0, 0.15)"/>
        <text x="200" y="90" textAnchor="middle" fill="#EF4444" fontSize="22" fontWeight="900" fontFamily="sans-serif">BRAND</text>
        <text x="200" y="112" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="sans-serif">quality • commerce • value</text>
        <text x="200" y="128" textAnchor="middle" fill="#F5B800" fontSize="10" fontWeight="800" fontFamily="sans-serif">EXCELLENCE • CREATIVE</text>
        <circle cx="120" cy="60" r="4" fill="#F5B800"/>
        <circle cx="280" cy="140" r="6" fill="#F5B800"/>
        <line x1="120" y1="60" x2="160" y2="80" stroke="#F5B800" strokeWidth="1" strokeDasharray="3 3"/>
      </svg>
    );
  }
  if (type === 3) {
    return (
      <svg className="article-svg-header" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="url(#artBg3)"/>
        <defs>
          <linearGradient id="artBg3" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0F172A"/>
            <stop offset="1" stopColor="#1E293B"/>
          </linearGradient>
        </defs>
        {/* Sketching Pen & Tablet Graphic */}
        <rect x="100" y="45" width="200" height="110" rx="12" fill="#1E293B" stroke="#F5B800" strokeWidth="2"/>
        <path d="M140 120 L190 70 L210 90 L160 140 Z" fill="#F5B800"/>
        <path d="M190 70 L205 55 L225 75 L210 90 Z" fill="#FFFFFF"/>
        <path d="M230 110 Q 250 80, 270 120" stroke="#10B981" strokeWidth="3" fill="none"/>
        <circle cx="270" cy="120" r="5" fill="#10B981"/>
      </svg>
    );
  }
  return (
    <svg className="article-svg-header" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="url(#artBg4)"/>
      <defs>
        <linearGradient id="artBg4" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4C1D95"/>
          <stop offset="1" stopColor="#2E1065"/>
        </linearGradient>
      </defs>
      {/* Canva vs Adobe Firefly comparison */}
      <rect x="60" y="55" width="120" height="90" rx="14" fill="#FFFFFF" opacity="0.9"/>
      <text x="120" y="108" textAnchor="middle" fill="#FF0000" fontSize="28" fontWeight="900" fontFamily="sans-serif">A</text>
      <text x="120" y="130" textAnchor="middle" fill="#111827" fontSize="10" fontWeight="800" fontFamily="sans-serif">Adobe Firefly</text>

      <text x="200" y="110" textAnchor="middle" fill="#F5B800" fontSize="20" fontWeight="900" fontFamily="sans-serif">VS</text>

      <rect x="220" y="55" width="120" height="90" rx="14" fill="#00C4CC" opacity="0.9"/>
      <text x="280" y="108" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="900" fontFamily="sans-serif">Canva</text>
      <text x="280" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800" fontFamily="sans-serif">AI Suite</text>
    </svg>
  );
}

// Helper to provide dynamic icon, label, and avatars per active service
const getDynamicServiceVisualData = (serviceId = '', serviceTitle = '', categoryId = '') => {
  const rawTitle = (serviceTitle || serviceId || 'DIGITAL GROWTH').toUpperCase();
  const searchStr = `${serviceTitle} ${serviceId} ${categoryId}`.toLowerCase();

  let icon = Icons.Sparkles;
  let subLabel = "SPECIALIZATION STACK";
  let avatars = [
    { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", tag: "AI Lead", glow: "purple-glow" },
    { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", tag: "Strategy", glow: "yellow-glow" },
    { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", tag: "Delivered", glow: "pink-glow" }
  ];

  if (searchStr.includes('brand') || searchStr.includes('creative') || categoryId === 'creative') {
    icon = Icons.Palette;
    subLabel = "CREATIVE STUDIO";
    avatars = [
      { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", tag: "Figma", glow: "purple-glow" },
      { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", tag: "Vector", glow: "yellow-glow" },
      { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", tag: "Identity", glow: "pink-glow" }
    ];
  } else if (searchStr.includes('tech') || searchStr.includes('web') || searchStr.includes('app') || categoryId === 'technology') {
    icon = Icons.Code2;
    subLabel = "ENGINEERING STACK";
    avatars = [
      { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", tag: "React", glow: "blue-glow" },
      { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80", tag: "Vite", glow: "purple-glow" },
      { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80", tag: "API", glow: "yellow-glow" }
    ];
  } else if (searchStr.includes('video') || searchStr.includes('film') || searchStr.includes('photo') || categoryId === 'video-production') {
    icon = Icons.Video;
    subLabel = "4K CINEMA STACK";
    avatars = [
      { img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80", tag: "4K Drone", glow: "orange-glow" },
      { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80", tag: "Post Edit", glow: "pink-glow" },
      { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80", tag: "Live Cam", glow: "purple-glow" }
    ];
  } else if (searchStr.includes('animat') || searchStr.includes('3d') || searchStr.includes('2d')) {
    icon = Icons.Box;
    subLabel = "3D MOTION STACK";
    avatars = [
      { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", tag: "Render", glow: "purple-glow" },
      { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", tag: "Motion", glow: "yellow-glow" },
      { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", tag: "VFX", glow: "blue-glow" }
    ];
  } else if (searchStr.includes('market') || searchStr.includes('seo') || searchStr.includes('ads') || categoryId === 'digital-marketing') {
    icon = Icons.TrendingUp;
    subLabel = "PERFORMANCE & ROI";
    avatars = [
      { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", tag: "Google Ads", glow: "yellow-glow" },
      { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80", tag: "Meta", glow: "blue-glow" },
      { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80", tag: "ROI 4x", glow: "purple-glow" }
    ];
  } else if (searchStr.includes('print')) {
    icon = Icons.Printer;
    subLabel = "OFFSET & CMYK";
    avatars = [
      { img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80", tag: "CMYK", glow: "purple-glow" },
      { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80", tag: "Packaging", glow: "yellow-glow" },
      { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80", tag: "Die-Cut", glow: "orange-glow" }
    ];
  }

  return {
    label: rawTitle,
    subLabel,
    icon,
    avatars
  };
};

export default function ServicePage({ categoryId = "creative", subServiceId, initialServiceId, onOpenContact, onBackHome }) {
  const [isCeoCardHovered, setIsCeoCardHovered] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const targetSubId = subServiceId || initialServiceId;
  const categoryData = allCategoriesData[categoryId] || allCategoriesData.creative;
  const servicesList = categoryData.services || [];

  const activeService = servicesList.find(s => s.id === targetSubId) || servicesList[0] || {
    title: categoryData.categoryTitle,
    tagline: categoryData.heroSubtext,
    overview: categoryData.heroSubtext,
    deliverables: [],
    process: []
  };

  // Custom Process Steps for Screenshot 25 & 27
  const processSteps = [
    {
      num: "01",
      title: `${activeService.title.split(' ')[0]} Research`,
      duration: "2-3 Days",
      desc: "We get started with researching the competitors and the ideations to build a better brand interface for the brand's journey.",
      tags: ["Brand Discovery", "Market Research", "Brand Positioning"]
    },
    {
      num: "02",
      title: `${activeService.title.split(' ')[0]} Strategy`,
      duration: "2-3 Days",
      desc: "On completing the research, we formulate a strategy that outlines the brand vision, mission, core values and the voice.",
      tags: ["Brand Vision & Mission", "Brand Core Values", "Brand Positioning Statement"]
    },
    {
      num: "03",
      title: `${activeService.title.split(' ')[0]} Identity`,
      duration: "5-7 Days",
      desc: "Next, we move in planning the brand identity that involves creating a logo, colour schemes and other design components.",
      tags: ["Brand Essence", "Logo Design", "Brand Imagery", "Graphics"]
    },
    {
      num: "04",
      title: `${activeService.title.split(' ')[0]} Implementation`,
      duration: "5-7 Days",
      desc: "The final step involves developing an identity implementing the planned campaigns and strategies across all touch points.",
      tags: ["Brand Guidelines", "Collateral Rollout", "Asset Launch"]
    }
  ];

  // Articles Data matching Screenshot 29
  const relatedArticles = [
    {
      type: 1,
      category: categoryId.toUpperCase(),
      title: "The Intersection of Technical Mastery and Design Excellence",
      excerpt: "The modern business environment needs more than periodic marketing campaigns or isolated promotional efforts. Strategic thinking is needed to align marketing programs with top-level business goals...",
      date: "Tue, Nov 4, 2025"
    },
    {
      type: 2,
      category: categoryId.toUpperCase(),
      title: "Bangalore's Creative Revolution: The Garden City's Emergence as India's Branding Hub",
      excerpt: "The story of how Bangalore evolved from a haven for pensioners to India's Silicon Valley is amply chronicled, but there has been a parallel and even more intriguing transformation occurring in the city's creative hubs...",
      date: "Wed, Oct 8, 2025"
    },
    {
      type: 3,
      category: categoryId.toUpperCase(),
      title: `Finding the Best ${activeService.title} Company: How Digiworq Marketing & Technology Leads the Way`,
      excerpt: "In today's rapidly evolving digital world, visuals are more important than ever. From the instant someone scrolls through a social feed, arrives at a website, or opens an email, how a brand is visually presented defines the tone...",
      date: "Wed, Sep 10, 2025"
    },
    {
      type: 4,
      category: categoryId.toUpperCase(),
      title: "From Canva to Adobe Firefly: Why Agencies Still Win the Branding Game",
      excerpt: "The past ten years have seen the democratization of design, which has transformed the creative industry. Tools such as Canva and now AI-generated tools have enabled small businesses, startups, and even individuals to come up with content...",
      date: "Mon, Aug 25, 2025"
    }
  ];

  const scrollToDetails = () => {
    const el = document.getElementById('service-details-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="digiworq-service-page-root">
      {/* Light Clean Header Section (Matching Screenshot 15 & 16) */}
      <section className="service-landing-hero">
        <div className="section-container">
          {/* Breadcrumb Links */}
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">{categoryData.categoryTitle}</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeService.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            {/* Left Hero Text Column */}
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeService.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>

              <p className="marketeam-hero-subtext">
                Digiworq is Bangalore's premier {activeService.title.toLowerCase()} agency. We build market-defining digital presences, elevate user experiences, and engineer scalable growth for your business.
              </p>

              {/* Action Buttons wrapped in rotating conic gradient */}
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>

                <button className="marketeam-secondary-btn" onClick={scrollToDetails}>
                  Tell Me More ↓
                </button>
              </div>
            </div>

            {/* Right Concentric Studio Sphere Visual Column (Dynamic per Service) */}
            <div className="service-hero-right marketeam-hero-right">
              {(() => {
                const visualData = getDynamicServiceVisualData(activeService.id, activeService.title, categoryId);
                const CenterIcon = visualData.icon;
                return (
                  <div className="circles-visualization-container service-orbital-studio-container">
                    {/* Orbit 1 */}
                    <div className="orbital-ring orbit-1">
                      {visualData.avatars[0] && (
                        <div className={`avatar-placed avatar-1 ${visualData.avatars[0].glow}`}>
                          <img src={visualData.avatars[0].img} alt={visualData.avatars[0].tag} />
                        </div>
                      )}
                    </div>

                    {/* Orbit 2 */}
                    <div className="orbital-ring orbit-2">
                      {visualData.avatars[1] && (
                        <div className={`avatar-placed avatar-2 ${visualData.avatars[1].glow}`}>
                          <img src={visualData.avatars[1].img} alt={visualData.avatars[1].tag} />
                        </div>
                      )}
                    </div>

                    {/* Orbit 3 */}
                    <div className="orbital-ring orbit-3">
                      {visualData.avatars[2] && (
                        <div className={`avatar-placed avatar-3 ${visualData.avatars[2].glow}`}>
                          <img src={visualData.avatars[2].img} alt={visualData.avatars[2].tag} />
                        </div>
                      )}
                    </div>

                    {/* Dynamic Center Sphere */}
                    <div className="center-counter-circle service-studio-center-sphere">
                      <CenterIcon size={26} color="#A068FF" />
                      <span className="counter-number dynamic-service-label">{visualData.label}</span>
                      <span className="counter-label dynamic-service-sublabel">{visualData.subLabel}</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Organic Floating Glass Quote Capsule */}
          <div className="service-quote-callout-card marketeam-quote-glass-capsule">
            <span className="quote-mark left">“</span>
            <p className="quote-text">
              Digiworq provides end-to-end {activeService.title.toLowerCase()} solutions tailored for ambitious startups, enterprise brands, and market leaders aiming to dominate competitive landscapes.
            </p>
            <span className="quote-mark right">”</span>
          </div>

          {/* 3 Bottom Floating Glass Feature Capsules */}
          <div className="dark-cards-outer-container">
            <div className="service-three-cards-grid">
              <div className="service-feature-card marketeam-glass-feature-card">
                <div className="card-purple-dash"></div>
                <h3 className="card-title">Trusted {activeService.title} Agency</h3>
                <p className="card-text">
                  Digiworq is a top-tier digital agency specializing in high-impact creative solutions and conversion-focused experiences.
                </p>
              </div>

              <div className="service-feature-card marketeam-glass-feature-card">
                <div className="card-purple-dash"></div>
                <h3 className="card-title">{activeService.title} Experts Near You</h3>
                <p className="card-text">
                  Brands partner with Digiworq for proven creative direction, agile execution, and transparent ROI metrics.
                </p>
              </div>

              <div className="service-feature-card marketeam-glass-feature-card">
                <div className="card-purple-dash"></div>
                <h3 className="card-title">Industries We Serve</h3>
                <p className="card-text">
                  Delivering specialized growth solutions across Tech, FinTech, E-Commerce, Real Estate, Healthcare, and FMCG.
                </p>
              </div>
            </div>
          </div>

          {/* Executive CEO Quote Section with Gold/Black Container */}
          <div className="ceo-quote-section-container">
            <div className="ceo-quote-layout-grid">
              {/* Left Column: Gold/Black Gradient Avatar Card */}
              <div 
                className="ceo-gold-gradient-card"
                onMouseEnter={() => setIsCeoCardHovered(true)}
                onMouseLeave={() => setIsCeoCardHovered(false)}
              >
                <GeneratedCeoAvatar isCardHovered={isCeoCardHovered} />

                <h3 className="ceo-name-gold" style={{ color: '#F5B800', fontStyle: 'normal', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>RK</h3>
                <div className="ceo-gold-underline"></div>

                <div className="ceo-dark-pill-badge">
                  <span>CEO at Digiworq</span>
                </div>
              </div>

              {/* Vertical Yellow Divider Line */}
              <div className="ceo-center-yellow-line"></div>

              {/* Right Column: Motivational CEO Quote Box */}
              <div className="ceo-quote-right-box">
                <span className="ceo-quote-symbol top">“</span>
                <blockquote className="ceo-quote-text-paragraph">
                  In a world where customers seek authenticity and connection with their audience, we help them shape their company's identity. By actively engaging your audience through thoughtful branding and identity-building strategies, we enrich your brand to future-proof it for assured success.
                </blockquote>
                <span className="ceo-quote-symbol bottom">”</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Our Branding Process" Cards Grid Section (Screenshot 25 & 27) */}
      <section className="digiworq-process-section">
        <div className="section-container">
          <div className="process-header-box">
            <h2 className="process-main-title">
              Our {activeService.title} <span className="highlight-yellow-glow">Process</span>
            </h2>
            <div className="process-title-yellow-glow-line"></div>
          </div>

          {/* 4 Process Cards Centered Grid */}
          <div className="process-cards-grid-v2">
            {processSteps.map((p, idx) => (
              <div className="process-card-v2" key={idx}>
                <div className="card-top-ribbon"></div>

                <div className="card-top-row">
                  <div className="step-circle-badge">
                    <span>{p.num}</span>
                  </div>
                  <div className="step-title-group">
                    <h3 className="step-title-v2">{p.title}</h3>
                    <span className="duration-pill">{p.duration}</span>
                  </div>
                </div>

                <p className="step-desc-v2">{p.desc}</p>

                <div className="deliverables-sub-box">
                  <h4 className="deliverables-sub-title">Deliverables:</h4>
                  <div className="deliverables-pills-list">
                    {p.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="deliverable-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Attractive High-End Details & Scope Section */}
      <section className="service-details-section-v2" id="service-details-section">
        <div className="section-container">
          <div className="service-details-card-v2">

            {/* Section 1: Overview Header */}
            <div className="details-block-v2">
              <div className="details-header-row">
                <div className="yellow-accent-bar-left"></div>
                <h3 className="details-title-v2">Comprehensive Overview</h3>
              </div>

              <p className="details-text-v2">{activeService.overview}</p>

              {/* 3 Quick Value Badges */}
              <div className="quick-value-badges-row">
                <div className="value-badge-item">
                  <Icons.Sparkles size={16} className="badge-icon-yellow" />
                  <span>High Impact Design</span>
                </div>
                <div className="value-badge-item">
                  <Icons.Target size={16} className="badge-icon-yellow" />
                  <span>100% Custom Tailored</span>
                </div>
                <div className="value-badge-item">
                  <Icons.Zap size={16} className="badge-icon-yellow" />
                  <span>Market-Ready Assets</span>
                </div>
              </div>
            </div>

            {/* Section 2: Key Deliverables & Scope */}
            {activeService.deliverables && activeService.deliverables.length > 0 && (
              <div className="details-block-v2">
                <div className="details-header-row">
                  <div className="yellow-accent-bar-left"></div>
                  <h3 className="details-title-v2">Key Deliverables & Scope</h3>
                </div>

                <div className="deliverables-grid-v2">
                  {activeService.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="deliverable-card-v2">
                      <div className="check-icon-circle-yellow">
                        <Icons.Check size={16} />
                      </div>
                      <span className="deliverable-text-v2">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Frequently Asked Questions Accordion */}
            {activeService.faqs && activeService.faqs.length > 0 && (
              <div className="details-block-v2">
                <div className="details-header-row">
                  <div className="yellow-accent-bar-left"></div>
                  <h3 className="details-title-v2">Frequently Asked Questions</h3>
                </div>

                <div className="accordion-faqs-container">
                  {activeService.faqs.map((faq, fIdx) => {
                    const isOpen = activeFaqIndex === fIdx;
                    return (
                      <div 
                        key={fIdx} 
                        className={`accordion-faq-item ${isOpen ? 'is-open' : ''}`}
                        onClick={() => toggleFaq(fIdx)}
                      >
                        <div className="accordion-faq-question-row">
                          <div className="faq-q-left">
                            <Icons.HelpCircle size={20} className="faq-q-icon-yellow" />
                            <span className="faq-q-text">{faq.q}</span>
                          </div>
                          <div className="faq-toggle-icon">
                            {isOpen ? <Icons.ChevronUp size={20} /> : <Icons.ChevronDown size={20} />}
                          </div>
                        </div>

                        {isOpen && (
                          <div className="accordion-faq-answer-box">
                            <p className="faq-a-text">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Section 4: Premium Dark CTA Box */}
            <div className="premium-dark-cta-banner">
              <div className="cta-banner-content">
                <h3 className="cta-banner-h3">Ready to scale your business with {activeService.title}?</h3>
                <p className="cta-banner-p">Schedule a free consultation with our Digiworq design & strategy team in Bangalore today.</p>
              </div>

              <button className="btn-yellow-solid-cta" onClick={onOpenContact}>
                <span>Request Free Proposal</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* "Having a Challenge? We are Ready!!" Dark Banner (Screenshot 29) */}
      <section className="having-challenge-banner-section">
        <div className="having-challenge-dark-banner">
          <h2 className="challenge-banner-h2">
            Having a Challenge? <span className="highlight-yellow">We are Ready!!</span>
          </h2>
          <button className="btn-yellow-pill-discuss" onClick={onOpenContact}>
            <span>Let's Discuss</span>
            <Icons.ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* "Related Articles" Grid Section (Screenshot 29 & 30 Fix) */}
      <section className="related-articles-section">
        <div className="section-container">
          <div className="related-articles-header">
            <h2 className="related-articles-h2">
              Related <span className="highlight-yellow">Articles</span>
            </h2>
            <div className="articles-title-yellow-line"></div>
          </div>

          <div className="related-articles-grid">
            {relatedArticles.map((art, aIdx) => (
              <div key={aIdx} className="article-card-item">
                <div className="article-card-img-wrapper">
                  <ArticleGraphicHeader type={art.type} />
                </div>
                <div className="article-card-content">
                  <span className="article-category-tag">{art.category}</span>
                  <h3 className="article-card-title">{art.title}</h3>
                  <p className="article-card-excerpt">{art.excerpt}</p>

                  <div className="article-author-footer">
                    <div className="author-avatar-circle">
                      <span>DG</span>
                    </div>
                    <span className="article-date-text">{art.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
