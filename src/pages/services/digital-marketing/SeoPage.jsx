import React from 'react';
import * as Icons from 'lucide-react';

export default function SeoPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Technical & On-Page SEO Audit",
    "High-Intent Keyword Strategy & Mapping",
    "Quality Backlink Building & Digital PR",
    "Google My Business & Local SEO",
    "Monthly Organic Traffic & Rank Reports"
  ];

  const process = [
    { step: "01", title: "Technical Audit", desc: "Fixing crawl errors & site speed." },
    { step: "02", title: "Keyword Research", desc: "Targeting high-converting buyer intent keywords." },
    { step: "03", title: "On-Page Optimization", desc: "Optimizing titles, metas, and internal links." },
    { step: "04", title: "Off-Page Authority", desc: "Earning authoritative backlinks." }
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
            <span className="bc-current">Search Engine Optimization</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">SEO Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Dominate Google search results with Digiworq’s data-backed Search Engine Optimization (SEO) strategies. Drive steady organic traffic and high-converting customer leads.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Free SEO Audit</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>SEO Deliverables & Strategy Specs:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Search size={16} color="#34D399" />
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
              Our SEO <span className="highlight-yellow-glow">Ranking Process</span>
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
