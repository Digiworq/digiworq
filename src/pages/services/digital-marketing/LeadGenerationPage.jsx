import React from 'react';
import * as Icons from 'lucide-react';

export default function LeadGenerationPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "High-Converting Landing Page Design",
    "Multi-Channel B2B & B2C Lead Funnels",
    "Lead Magnet & Form Optimization",
    "CRM Lead Routing & WhatsApp Integration",
    "Qualified Lead Analytics Dashboard"
  ];

  const process = [
    { step: "01", title: "ICP Mapping", desc: "Defining Ideal Customer Profile." },
    { step: "02", title: "Landing Page", desc: "Building fast, high-converting lead funnels." },
    { step: "03", title: "Traffic", desc: "Driving search & social ad traffic." },
    { step: "04", title: "Validation", desc: "Filtering & delivering real-time sales leads." }
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
            <span className="bc-current">Lead Generation</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Lead Generation</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Fuel your sales team with verified, high-intent buyer leads. Digiworq builds automated lead generation funnels that capture qualified prospects consistently.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Sales Leads</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Lead Generation Specs & Deliverables:</h3>
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
              Our Lead <span className="highlight-yellow-glow">Capture Engine</span>
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
