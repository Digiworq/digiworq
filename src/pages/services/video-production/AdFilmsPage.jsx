import React from 'react';
import * as Icons from 'lucide-react';

export default function AdFilmsPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Commercial Concept & Script Writing",
    "Professional Actors & Casting",
    "Cinema Studio / Location Shoot",
    "VFX & High-Impact Commercial Color Grade",
    "TV & Digital Video Ad Masters"
  ];

  const process = [
    { step: "01", title: "Concept", desc: "Crafting memorable, viral commercial ideas." },
    { step: "02", title: "Casting", desc: "Selecting actors & location sets." },
    { step: "03", title: "Filming", desc: "Shooting high-end commercial scenes." },
    { step: "04", title: "Mastering", desc: "Color grading & broadcast audio mix." }
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
            <span className="bc-current">Ad Films</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Ad Films Production</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                High-impact commercial video production for TV, YouTube, and OTT platforms. Digiworq produces cinematic ad films that elevate brand prestige and drive massive consumer engagement.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Produce Commercial Ad</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Ad Film Production Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Tv size={16} color="#F5B800" />
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
              Our Ad Film <span className="highlight-yellow-glow">Production Journey</span>
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
