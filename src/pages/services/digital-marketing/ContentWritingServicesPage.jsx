import React from 'react';
import * as Icons from 'lucide-react';

function ContentStudioWidget() {
  return (
    <div className="custom-widget-card creative-widget-box">
      <div className="widget-header-row">
        <Icons.FileText size={20} color="#F5B800" />
        <span className="widget-title-text">SEO Copywriting & Content Hub</span>
      </div>
      <p className="widget-subdesc">Engaging, high-ranking content crafted for your target audience:</p>
      
      <div className="brand-preview-canvas" style={{ borderColor: 'rgba(245, 184, 0, 0.3)', boxShadow: '0 10px 30px rgba(245, 184, 0, 0.15)' }}>
        <div className="canvas-logo-mark" style={{ backgroundColor: 'rgba(245, 184, 0, 0.2)', color: '#F5B800' }}>
          <Icons.Edit3 size={28} />
        </div>
        <div className="canvas-text-group">
          <h4 style={{ color: '#FFFFFF' }}>100% Plagiarism-Free SEO Articles</h4>
          <span style={{ color: '#F5B800', fontWeight: 700, fontSize: '0.85rem' }}>Search Intent & Conversational Copy</span>
        </div>
      </div>
    </div>
  );
}

export default function ContentWritingServicesPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "SEO-Optimized Blog Posts & Articles",
    "Website Copywriting & Landing Pages",
    "Company Profiles & E-books",
    "Social Media Captions & Ad Copy",
    "Press Releases & Email Newsletters"
  ];

  const process = [
    { step: "01", title: "Research", desc: "Understanding industry terminology & SEO keywords." },
    { step: "02", title: "Outline", desc: "Structuring headers, tone, and call-to-actions." },
    { step: "03", title: "Drafting", desc: "Writing compelling, high-converting copy." },
    { step: "04", title: "Editing", desc: "Proofreading, plagiarism & readability checks." }
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
            <span className="bc-current">Content Writing Services</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Content Writing Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Words that turn visitors into loyal customers. Digiworq delivers strategic SEO content writing, website copy, thought leadership articles, and high-impact ad copywriting.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Content Strategy</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ContentStudioWidget />
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Content Writing Specs & Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.FileText size={16} color="#F5B800" />
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
              Our Content <span className="highlight-yellow-glow">Creation Workflow</span>
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
