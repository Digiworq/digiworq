import React from 'react';
import { Lightbulb, Rocket, Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function AgencyShowcase({ onOpenContact }) {
  return (
    <section className="agency-intro-section">
      <div className="intro-container">
        {/* Intro Headline & Paragraph matching screenshot 6 */}
        <h2 className="intro-heading">
          Best <span className="highlight">Digital Marketing & Web Agency</span> in Bangalore
        </h2>
        <p className="intro-subtext">
          Digiworq is the best digital marketing agency in Bangalore offering SEO, social media marketing, Google Ads, branding, website development, animation, and video production services for business growth.
        </p>

        {/* Feature Showcase Banner with Overlay & 2x2 Stats Grid */}
        <div className="showcase-banner-box">
          <div className="showcase-banner-bg"></div>

          {/* Left Title & CTA */}
          <div className="showcase-left-content">
            <h3 className="showcase-left-title">
              Enhanced global marketing
            </h3>
            <button className="get-in-touch-btn" onClick={onOpenContact}>
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right 2x2 Stats Cards Grid */}
          <div className="stats-2x2-grid">
            <div className="stat-card-white">
              <Lightbulb size={32} className="stat-icon" />
              <span className="stat-number">120</span>
              <span className="stat-label">Creative Strategies</span>
            </div>

            <div className="stat-card-white">
              <Rocket size={32} className="stat-icon" />
              <span className="stat-number">25</span>
              <span className="stat-label">Years of Experience</span>
            </div>

            <div className="stat-card-white">
              <Users size={32} className="stat-icon" />
              <span className="stat-number">350</span>
              <span className="stat-label">Happy Clients</span>
            </div>

            <div className="stat-card-white">
              <TrendingUp size={32} className="stat-icon" />
              <span className="stat-number">500</span>
              <span className="stat-label">Project Finalised</span>
            </div>
          </div>
        </div>

        {/* Kickstart Your Success Section */}
        <div className="kickstart-cta-box">
          <h3 className="kickstart-title">Kickstart Your Success</h3>
          <p className="kickstart-subtitle" onClick={onOpenContact}>
            Schedule a Free Consultation Today!
          </p>
        </div>
      </div>
    </section>
  );
}
