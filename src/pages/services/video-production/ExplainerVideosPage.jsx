import React from 'react';
import * as Icons from 'lucide-react';

export default function ExplainerVideosPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Scriptwriting & Storyboard Sketches",
    "Custom 2D/3D Animated Graphics",
    "Professional Voiceover Audio Track",
    "Sound Effects & Background Music",
    "Full HD / 4K Video Master File"
  ];

  const process = [
    { step: "01", title: "Script", desc: "Writing a clear, compelling 60s/90s hook." },
    { step: "02", title: "Storyboard", desc: "Designing visual frame-by-frame sketches." },
    { step: "03", title: "Animation", desc: "Bringing characters and UI elements to life." },
    { step: "04", title: "Sound Sync", desc: "Pairing voiceover with motion timeline." }
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
            <span className="bc-current">Explainer Videos</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Explainer Videos</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Simplify complex software and products into engaging animated explainer videos. Digiworq creates high-converting 2D and 3D explainer videos designed to boost landing page conversions.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Create Explainer Video</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Explainer Video Specs:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.PlayCircle size={16} color="#F5B800" />
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
              Our Explainer <span className="highlight-yellow-glow">Animation Process</span>
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
