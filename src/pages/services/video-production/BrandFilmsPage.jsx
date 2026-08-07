import React from 'react';
import * as Icons from 'lucide-react';

export default function BrandFilmsPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Brand Story Scripting & Narrative Architecture",
    "Cinematic 4K Location Shooting",
    "Executive & Founder Interviews",
    "Custom Orchestral Sound Score",
    "Master Brand Story Video File"
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Uncovering your brand history & vision." },
    { step: "02", title: "Script", desc: "Writing emotional, inspiring narrative scripts." },
    { step: "03", title: "Filming", desc: "Shooting cinematic B-roll & founder cuts." },
    { step: "04", title: "Mastering", desc: "Color grading & sound design." }
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
            <span className="bc-current">Brand Films</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Brand Films Production</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Tell your brand’s founding story with emotional impact. Digiworq crafts cinematic brand films that connect deeply with customers, investors, and internal teams.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Produce Brand Film</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Brand Film Specs:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Sparkles size={16} color="#F5B800" />
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
              Our Brand Film <span className="highlight-yellow-glow">Storytelling Journey</span>
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
