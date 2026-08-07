import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function MarketingRoasWidget() {
  const [adSpend, setAdSpend] = useState(50000);
  const roasMultiplier = 4.2;
  const projectedRevenue = Math.round(adSpend * roasMultiplier);

  return (
    <div className="custom-widget-card marketing-calculator-box">
      <div className="widget-header-row">
        <Icons.TrendingUp size={20} color="#10B981" />
        <span className="widget-title-text">Live ROAS Campaign Sales Simulator</span>
      </div>
      <p className="widget-subdesc">Adjust monthly digital marketing budget to simulate sales revenue:</p>

      <div className="budget-slider-row">
        <div className="slider-label-flex">
          <span>Monthly Ad Budget:</span>
          <strong>₹{adSpend.toLocaleString('en-IN')}</strong>
        </div>
        <input 
          type="range" 
          min="10000" 
          max="500000" 
          step="5000" 
          value={adSpend} 
          onChange={(e) => setAdSpend(Number(e.target.value))} 
          className="budget-range-input"
        />
      </div>

      <div className="roas-metrics-card">
        <div className="roas-stat">
          <span className="roas-title">Est. ROAS Return</span>
          <span className="roas-val green-glow">{roasMultiplier}x</span>
        </div>
        <div className="roas-stat">
          <span className="roas-title">Projected Sales Revenue</span>
          <span className="roas-val yellow-glow">₹{projectedRevenue.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}

export default function SocialMediaMarketingPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Comprehensive Social Media Strategy",
    "Monthly Content & Reel Calendar",
    "High-Converting Ad Campaigns & Copies",
    "Community Management & Audience Engagement",
    "Weekly Analytics & Conversion Performance Reports"
  ];

  const process = [
    { step: "01", title: "Audit", desc: "Analyzing current brand reach & competitors." },
    { step: "02", title: "Strategy", desc: "Building monthly thematic content calendars." },
    { step: "03", title: "Execute", desc: "Designing visual graphics & ad campaigns." },
    { step: "04", title: "Optimize", desc: "Refining targeting for maximum ROAS." }
  ];

  return (
    <div className="digiworq-service-page-root theme-digital-marketing">
      <section className="service-landing-hero hero-theme-digital-marketing">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Digital Marketing</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Social Media Marketing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Social Media Marketing</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Build brand authority and drive organic & paid sales with Digiworq’s performance-driven social media marketing campaigns across Instagram, Facebook, LinkedIn, and YouTube.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Start Marketing Campaign</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <MarketingRoasWidget />
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Social Marketing Campaign Specs & Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.TrendingUp size={16} color="#10B981" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="digiworq-process-section">
        <div className="section-container">
          <div className="process-header-box">
            <h2 className="process-main-title">
              Our Social Media <span className="highlight-yellow-glow">Funnel Optimization</span>
            </h2>
          </div>

          <div className="process-cards-grid-v2">
            {process.map((p, idx) => (
              <div className="process-card-v2" key={idx}>
                <div className="card-top-row">
                  <div className="step-circle-badge"><span>{p.step}</span></div>
                  <h3 className="step-title-v2">{p.title}</h3>
                </div>
                <p className="step-desc-v2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
