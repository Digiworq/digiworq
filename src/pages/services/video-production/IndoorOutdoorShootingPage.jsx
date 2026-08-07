import React from 'react';
import * as Icons from 'lucide-react';

export default function IndoorOutdoorShootingPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "4K RED / Arri Cinema Camera Setup",
    "Studio Lighting & Multi-Cam Rigging",
    "On-Location Indoor & Outdoor Permits",
    "Director & Cinematographer Crew",
    "RAW Footage & Color Graded Masters"
  ];

  const process = [
    { step: "01", title: "Recce", desc: "Location scouting & lighting strategy." },
    { step: "02", title: "Setup", desc: "Rigging camera gear & wireless monitors." },
    { step: "03", title: "Shooting", desc: "Capturing 4K multi-angle cinematic shots." },
    { step: "04", title: "Backup", desc: "DIT data offloading & instant review." }
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
            <span className="bc-current">Indoor and Outdoor Shooting</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Indoor & Outdoor Shooting</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                High-end cinema camera crews for indoor studio sets and outdoor location video shoots. Digiworq brings professional lighting, audio, and camera direction to capture stunning visuals.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Video Shoot</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Shoot Specs & Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Video size={16} color="#F5B800" />
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
              Our Shoot <span className="highlight-yellow-glow">Production Pipeline</span>
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
