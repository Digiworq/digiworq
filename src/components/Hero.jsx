import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
const logoMark = '/digiworq-logo.png';

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section-v2" id="home">
      {/* Theme Ambient Lighting Spheres & Grid Background */}
      <div className="hero-ambient-glow left"></div>
      <div className="hero-ambient-glow right"></div>
      <div className="hero-grid-pattern"></div>

      <div className="section-container hero-container-inner">
        {/* Glowing Badge Pill */}
        <div className="hero-top-badge-v2">
          <Sparkles size={14} className="badge-sparkle-gold" />
          <span>BANGALORE'S #1 DIGITAL MARKETING & WEB AGENCY</span>
        </div>

        {/* Hero Brand Identity Box */}
        <div className="hero-logo-banner-v2">
          <img src={logoMark} alt="Digiworq Official Logo" className="official-brand-logo-img-hero" />
          <div className="hero-brand-wrap">
            <h1 className="hero-brand-name-v2">
              DIGIWOR<span className="accent-dot">Q</span>
            </h1>
            <p className="hero-tagline-v2">Refining your vision</p>
          </div>
        </div>

        {/* Main Hero Headline */}
        <h2 className="hero-main-title-v2">
          Best <span className="highlight-yellow-hero">Digital Marketing & Web Agency</span> in Bangalore
        </h2>

        <p className="hero-description-v2">
          Digiworq is a premier agency in Bangalore specializing in SEO, performance marketing, website development, custom software, 2D/3D animation, and commercial video production engineered for scalable business growth.
        </p>

        {/* Dual CTA Action Group */}
        <div className="hero-cta-group-v2">
          <button className="btn-yellow-solid-hero" onClick={onOpenContact}>
            <span>Get Started Today</span>
            <ArrowRight size={18} />
          </button>

          <a href="#services" className="btn-glass-outline-hero">
            <span>Explore Services</span>
          </a>
        </div>

        {/* Trust Badges Row */}
        <div className="hero-trust-badges-row">
          <div className="trust-badge-item">
            <ShieldCheck size={16} className="trust-icon-gold" />
            <span>500+ Projects Delivered</span>
          </div>
          <div className="trust-badge-item">
            <ShieldCheck size={16} className="trust-icon-gold" />
            <span>99%+ Client Satisfaction</span>
          </div>
          <div className="trust-badge-item">
            <ShieldCheck size={16} className="trust-icon-gold" />
            <span>24/7 Dedicated Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
