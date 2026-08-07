import React from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function Animation2DCanvasWidget() {
  return (
    <div className="custom-widget-card anim2d-canvas-box">
      <div className="widget-header-row">
        <Icons.Zap size={20} color="#F5B800" />
        <span className="widget-title-text">2D Vector Motion & Easing Curve Studio</span>
      </div>

      <div className="motion-curve-graphic">
        <svg viewBox="0 0 300 120" className="curve-svg">
          <path d="M 20 100 C 80 10, 220 10, 280 100" stroke="#A068FF" strokeWidth="4" fill="none" />
          <circle cx="150" cy="40" r="10" fill="#F5B800" className="bouncing-ball-demo" />
          <line x1="20" y1="100" x2="280" y2="100" stroke="#374151" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="timeline-keyframes-bar">
        <span className="kf-dot">Keyframe 0s</span>
        <span className="kf-dot active">Ease-Out 1.2s</span>
        <span className="kf-dot">Loop 2.4s</span>
      </div>
    </div>
  );
}

export default function Animation2DPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData['2d-animation'] || { categoryTitle: "2D Animation", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "2D Animation", overview: "Custom 2D architecture animations and motion graphics.", process: [] };

  return (
    <div className="digiworq-service-page-root theme-2d-animation">
      <section className="service-landing-hero hero-theme-2d-animation">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">2D Animation</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">Vector Motion</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request 2D Motion Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <Animation2DCanvasWidget />
            </div>
          </div>

          {activeSub.deliverables && (
            <div className="subservice-deliverables-banner">
              <h3>2D Motion Deliverables & Specs:</h3>
              <div className="deliverables-pills-wrap">
                {activeSub.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliv-pill-item">
                    <Icons.Zap size={16} color="#F5B800" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="digiworq-process-section">
        <div className="section-container">
          <div className="process-header-box">
            <h2 className="process-main-title">
              Our {activeSub.title} <span className="highlight-yellow-glow">Animation Process</span>
            </h2>
          </div>

          <div className="process-cards-grid-v2">
            {activeSub.process.map((p, idx) => (
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
