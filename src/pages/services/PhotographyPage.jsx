import React from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function PhotoViewfinderWidget() {
  return (
    <div className="custom-widget-card photo-viewfinder-box">
      <div className="viewfinder-hud">
        <div className="hud-corner top-left"></div>
        <div className="hud-corner top-right"></div>
        <div className="hud-corner bottom-left"></div>
        <div className="hud-corner bottom-right"></div>

        <div className="hud-center-crosshair"></div>
        <span className="hud-rec-dot">● REC 4K</span>

        <div className="hud-camera-settings">
          <span>f/1.4</span>
          <span>1/1000s</span>
          <span>ISO 100</span>
          <span>85mm Prime</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" 
          alt="Studio Photography Viewfinder" 
          className="hud-bg-img"
        />
      </div>
    </div>
  );
}

export default function PhotographyPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData.photography || { categoryTitle: "Photography", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Photography", overview: "Commercial product, event & model photography.", process: [] };

  return (
    <div className="digiworq-service-page-root theme-photography">
      <section className="service-landing-hero hero-theme-photography">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Photography</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">Studio</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Studio Shoot</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <PhotoViewfinderWidget />
            </div>
          </div>

          {activeSub.deliverables && (
            <div className="subservice-deliverables-banner">
              <h3>High-Res Image Specs & Deliverables:</h3>
              <div className="deliverables-pills-wrap">
                {activeSub.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliv-pill-item">
                    <Icons.Camera size={16} color="#F5B800" />
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
              Our {activeSub.title} <span className="highlight-yellow-glow">Shoot Workflow</span>
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
