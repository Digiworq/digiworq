import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function MarketingRoiWidget() {
  const [budget, setBudget] = useState(50000);
  const estimatedRoas = 8.4;
  const projectedRevenue = Math.round(budget * estimatedRoas);

  return (
    <div className="custom-widget-card marketing-roi-box">
      <div className="widget-header-row">
        <Icons.TrendingUp size={20} color="#10B981" />
        <span className="widget-title-text">Live ROAS Campaign Revenue Calculator</span>
      </div>

      <div className="slider-control-group">
        <div className="slider-label-row">
          <span>Monthly Ad Spend (INR):</span>
          <span className="slider-val">₹{budget.toLocaleString()}</span>
        </div>
        <input 
          type="range" 
          min="10000" 
          max="500000" 
          step="10000" 
          value={budget} 
          onChange={(e) => setBudget(Number(e.target.value))}
          className="roi-slider-input"
        />
      </div>

      <div className="roi-metrics-grid">
        <div className="metric-box">
          <span className="m-label">Target ROAS</span>
          <span className="m-val yellow">{estimatedRoas}x</span>
        </div>
        <div className="metric-box">
          <span className="m-label">Projected Sales</span>
          <span className="m-val green">₹{projectedRevenue.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default function DigitalMarketingPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData['digital-marketing'] || { categoryTitle: "Digital Marketing", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Digital Marketing", overview: "Data-driven SEO, performance marketing & lead generation.", process: [] };

  return (
    <div className="digiworq-service-page-root theme-digital-marketing">
      <section className="service-landing-hero hero-theme-digital-marketing">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Digital Marketing</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">Growth Hub</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Scale Campaigns Now</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <MarketingRoiWidget />
            </div>
          </div>

          {activeSub?.deliverables && activeSub.deliverables.length > 0 && (
            <div className="subservice-deliverables-banner">
              <h3>Campaign Deliverables & Conversion Metrics:</h3>
              <div className="deliverables-pills-wrap">
                {activeSub.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliv-pill-item">
                    <Icons.TrendingUp size={16} color="#10B981" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="digiworq-process-section">
        <div className="section-container">
          <div className="process-header-box">
            <h2 className="process-main-title">
              Our {activeSub?.title || "Digital Marketing"} <span className="highlight-yellow-glow">Funnel Optimization</span>
            </h2>
          </div>

          <div className="process-cards-grid-v2">
            {activeSub?.process && activeSub.process.map((p, idx) => (
              <div className="process-card-v2" key={idx}>
                <div className="card-top-row">
                  <div className="step-circle-badge"><span>{p.step || idx+1}</span></div>
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
