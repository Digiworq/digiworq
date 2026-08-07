import React from 'react';
import * as Icons from 'lucide-react';

export default function SocialAdsManagementPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Meta & LinkedIn Ad Campaign Architecture",
    "High-Converting Ad Creative & Copy Design",
    "Audience Retargeting & Custom Lookalikes",
    "CPA & CPL Optimization",
    "Weekly Campaign Performance Reports"
  ];

  const process = [
    { step: "01", title: "Targeting", desc: "Defining high-converting buyer personas." },
    { step: "02", title: "Creatives", desc: "Designing thumb-stopping ad banners & reels." },
    { step: "03", title: "Launch", desc: "Setting up campaigns with Meta Pixel." },
    { step: "04", title: "Scale", desc: "Optimizing winning ad sets for low CPL." }
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
            <span className="bc-current">Social Ads Management</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Social Ads Management</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Target your exact buyers on Instagram, Facebook, and LinkedIn. Digiworq builds hyper-targeted paid social campaigns that drive lower CPL and higher sales conversions.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Launch Social Ads</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Social Ads Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Target size={16} color="#F5B800" />
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
              Our Social Ads <span className="highlight-yellow-glow">Optimization Funnel</span>
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
