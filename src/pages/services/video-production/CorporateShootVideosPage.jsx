import React from 'react';
import * as Icons from 'lucide-react';

export default function CorporateShootVideosPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Corporate Headquarters & Facility Filming",
    "Executive Leadership Interviews",
    "Company Culture & Employee B-Roll",
    "Licensed Background Score & Motion Titles"
  ];

  const process = [
    { step: "01", title: "Scope", desc: "Planning office filming schedule & interview list." },
    { step: "02", title: "Shoot", desc: "Filming office environments & executive soundbites." },
    { step: "03", title: "Cut", desc: "Polishing corporate story & metrics overlays." },
    { step: "04", title: "Delivery", desc: "Supplying 4K master files for web & investor decks." }
  ];

  return (
    <div className="digiworq-service-page-root theme-video-production">
      <section className="service-landing-hero hero-theme-video-production">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Video Production</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Corporate Shoot Videos</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Corporate Shoot Videos</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Showcase your corporate culture, facilities, and executive vision. Digiworq produces high-quality corporate video shoots for enterprise organizations and fast-growing startups.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Schedule Corporate Shoot</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Corporate Video Specs:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Building size={16} color="#F5B800" />
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
              Our Corporate <span className="highlight-yellow-glow">Video Workflow</span>
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
