import React from 'react';
import * as Icons from 'lucide-react';

export default function VideoEditingPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "DaVinci Resolve Color Grading & LUTs",
    "Sound Design, Foley & Mixing",
    "Motion Graphics & Lower Thirds",
    "Multi-Aspect Export (16:9, 9:16 Reels)",
    "Frame-Accurate Cuts & Rough Cut Review"
  ];

  const process = [
    { step: "01", title: "Assembly", desc: "Selecting top takes & syncing audio." },
    { step: "02", title: "Pacing", desc: "Cutting rhythm to background music." },
    { step: "03", title: "Color & SFX", desc: "Cinematic color grading & audio polish." },
    { step: "04", title: "Export", desc: "Mastering in ProRes & H.264 formats." }
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
            <span className="bc-current">Video Editing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Video Editing Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Transform raw footage into captivating cinematic stories. Digiworq provides professional video editing, color grading, sound design, and motion graphics for brands and creators.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Editing Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Editing Specs & Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Film size={16} color="#F5B800" />
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
              Our Post-Production <span className="highlight-yellow-glow">Editing Workflow</span>
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
