import React from 'react';
import * as Icons from 'lucide-react';

export default function ElearningVideosPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Green Screen / Teleprompter Studio Recording",
    "Slide Graphics & Screen Recording Integration",
    "Chapter Markers & On-Screen Annotations",
    "LMS-Ready MP4 Course File Bundles"
  ];

  const process = [
    { step: "01", title: "Curriculum", desc: "Reviewing course slides & scripts." },
    { step: "02", title: "Studio Shoot", desc: "Instructor teleprompter recording." },
    { step: "03", title: "Editing", desc: "Inserting slides, callouts & graphics." },
    { step: "04", title: "Export", desc: "Batch exporting course video modules." }
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
            <span className="bc-current">E-Learning Videos</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">E-Learning Videos</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Produce engaging educational video courses and employee training modules. Digiworq provides green screen studios, teleprompter recording, and dynamic slide animation overlays.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Shoot E-Learning Course</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>E-Learning Video Specs:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.BookOpen size={16} color="#F5B800" />
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
              Our E-Learning <span className="highlight-yellow-glow">Course Workflow</span>
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
