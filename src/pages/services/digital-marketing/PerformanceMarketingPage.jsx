import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function PerformanceRoasWidget() {
  const [adSpend, setAdSpend] = useState(100000);
  const roasMultiplier = 5.8;
  const projectedRevenue = Math.round(adSpend * roasMultiplier);

  return (
    <div className="custom-widget-card marketing-calculator-box">
      <div className="widget-header-row">
        <Icons.BarChart3 size={20} color="#F5B800" />
        <span className="widget-title-text">Performance Marketing ROAS Matrix</span>
      </div>
      <p className="widget-subdesc">Simulate data-driven PPC & Paid Media conversions:</p>

      <div className="budget-slider-row">
        <div className="slider-label-flex">
          <span>Monthly Ad Spend:</span>
          <strong>₹{adSpend.toLocaleString('en-IN')}</strong>
        </div>
        <input 
          type="range" 
          min="25000" 
          max="1000000" 
          step="25000" 
          value={adSpend} 
          onChange={(e) => setAdSpend(Number(e.target.value))} 
          className="budget-range-input"
        />
      </div>

      <div className="roas-metrics-card">
        <div className="roas-stat">
          <span className="roas-title">Target Return</span>
          <span className="roas-val green-glow">{roasMultiplier}x ROAS</span>
        </div>
        <div className="roas-stat">
          <span className="roas-title">Est. Revenue</span>
          <span className="roas-val yellow-glow">₹{projectedRevenue.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}

export default function PerformanceMarketingPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Google Ads & Meta Paid Media Campaigns",
    "Conversion Rate Optimization (CRO)",
    "Pixel Tracking & Server-Side API Setup",
    "A/B Landing Page Variant Testing",
    "Real-Time ROI Performance Dashboard"
  ];

  const process = [
    { step: "01", title: "Funnel Audit", desc: "Identifying friction in current paid campaigns." },
    { step: "02", title: "Tracking", desc: "Setting up Meta Pixel & Google Tag Manager." },
    { step: "03", title: "Ad Scaling", desc: "Testing high-converting copy & visuals." },
    { step: "04", title: "Optimization", desc: "Pruning low-ROAS keywords & scaling winners." }
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
            <span className="bc-current">Performance Marketing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Performance Marketing</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Maximize revenue with data-driven paid advertising. Digiworq optimizes Google Ads, Meta Ads, and programmatic campaigns to deliver high-intent leads and measurable ROI.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Scale Paid Ads</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <PerformanceRoasWidget />
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Performance Marketing Deliverables:</h3>
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
              Our Performance <span className="highlight-yellow-glow">Scaling Framework</span>
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
