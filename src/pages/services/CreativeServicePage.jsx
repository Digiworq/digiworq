import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function CreativeStudioWidget() {
  const [activeColor, setActiveColor] = useState('#A068FF');
  const colors = ['#A068FF', '#F5B800', '#10B981', '#3B82F6', '#EC4899'];

  return (
    <div className="custom-widget-card creative-widget-box">
      <div className="widget-header-row">
        <Icons.Palette size={20} color="#F5B800" />
        <span className="widget-title-text">Interactive Brand Identity Studio</span>
      </div>
      <p className="widget-subdesc">Test dynamic brand color palettes & atmospheric container themes live:</p>
      
      <div className="palette-color-picker-row">
        {colors.map((c, idx) => (
          <button 
            key={idx} 
            className={`palette-circle ${activeColor === c ? 'active' : ''}`} 
            style={{ backgroundColor: c }}
            onClick={() => setActiveColor(c)}
          />
        ))}
      </div>

      <div className="brand-preview-canvas" style={{ borderColor: `${activeColor}66`, boxShadow: `0 10px 30px ${activeColor}33` }}>
        <div className="canvas-logo-mark" style={{ backgroundColor: `${activeColor}22`, color: activeColor }}>
          <Icons.Sparkles size={28} />
        </div>
        <div className="canvas-text-group">
          <h4 style={{ color: '#FFFFFF' }}>DIGIWORQ BRANDING</h4>
          <span style={{ color: activeColor, fontWeight: 700, fontSize: '0.85rem' }}>Atmospheric 3D Brand System</span>
        </div>
      </div>
    </div>
  );
}

export default function CreativeServicePage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const data = allCategoriesData.creative || { categoryTitle: "Creative Services", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Creative Services", overview: "Creative design & branding solutions.", process: [] };

  return (
    <div className="digiworq-service-page-root theme-creative">
      <section className="service-landing-hero hero-theme-creative">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <CreativeStudioWidget />
            </div>
          </div>

          {activeSub?.deliverables && activeSub.deliverables.length > 0 && (
            <div className="subservice-deliverables-banner">
              <h3>Creative Deliverables & Brand System Assets:</h3>
              <div className="deliverables-pills-wrap">
                {activeSub.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliv-pill-item">
                    <Icons.CheckCircle2 size={16} color="#F5B800" />
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
              Our {activeSub?.title || "Creative"} <span className="highlight-yellow-glow">Design Process</span>
            </h2>
            <div className="process-title-yellow-glow-line"></div>
          </div>

          <div className="process-cards-grid-v2">
            {activeSub?.process && activeSub.process.map((p, idx) => (
              <div className="process-card-v2" key={idx}>
                <div className="card-top-row">
                  <div className="step-circle-badge"><span>{p.step || idx+1}</span></div>
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
