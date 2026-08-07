import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function Animation3DViewportWidget() {
  const [shader, setShader] = useState('Metallic Gold');

  return (
    <div className="custom-widget-card anim3d-viewport-box">
      <div className="viewport-3d-canvas">
        <div className="cube-3d-wrapper">
          <div className="cube-3d-shape">
            <div className="face front">{shader}</div>
            <div className="face back">PBR 4K</div>
            <div className="face right">Raytrace</div>
            <div className="face left">Studio</div>
            <div className="face top">HDRI</div>
            <div className="face bottom">Digiworq</div>
          </div>
        </div>
      </div>

      <div className="shader-picker-row">
        <span className="s-label">Material Shader:</span>
        {['Metallic Gold', 'Frosted Glass', 'Cyber Chrome'].map((s) => (
          <button key={s} className={`shader-btn ${shader === s ? 'active' : ''}`} onClick={() => setShader(s)}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Animation3DPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData['3d-animation'] || { categoryTitle: "3D Animation", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "3D Animation", overview: "Photorealistic 3D architectural renders and motion graphics.", process: [] };

  return (
    <div className="digiworq-service-page-root theme-3d-animation">
      <section className="service-landing-hero hero-theme-3d-animation">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">3D Animation</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">3D Studio</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request 3D Render Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <Animation3DViewportWidget />
            </div>
          </div>

          {activeSub.deliverables && (
            <div className="subservice-deliverables-banner">
              <h3>3D Render Deliverables & Raytracing Specs:</h3>
              <div className="deliverables-pills-wrap">
                {activeSub.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliv-pill-item">
                    <Icons.Box size={16} color="#A068FF" />
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
              Our {activeSub.title} <span className="highlight-yellow-glow">Modeling & Render Pipeline</span>
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
