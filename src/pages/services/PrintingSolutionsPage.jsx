import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function PrintInspectorWidget() {
  const [finish, setFinish] = useState('Gold Foil');

  return (
    <div className="custom-widget-card print-inspector-box">
      <div className="widget-header-row">
        <Icons.Printer size={20} color="#F5B800" />
        <span className="widget-title-text">CMYK Print Finish & Tactile Inspector</span>
      </div>

      <div className="print-card-sample-preview">
        <div className={`sample-card-texture ${finish.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="card-logo-gold">DIGIWORQ</div>
          <div className="card-finish-tag">{finish} Finish</div>
          <span className="paper-gsm-tag">350 GSM Cotton Cardstock</span>
        </div>
      </div>

      <div className="finish-toggle-row">
        {['Gold Foil', 'Spot UV Gloss', 'Deep Embossing'].map((f) => (
          <button key={f} className={`finish-btn ${finish === f ? 'active' : ''}`} onClick={() => setFinish(f)}>
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PrintingSolutionsPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData['printing-solutions'] || { categoryTitle: "Printing Solutions", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Printing Solutions", overview: "High-precision digital, offset & foil printing.", process: [] };

  return (
    <div className="digiworq-service-page-root theme-printing-solutions">
      <section className="service-landing-hero hero-theme-printing-solutions">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Printing Solutions</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">Press Studio</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Print Proof</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <PrintInspectorWidget />
            </div>
          </div>

          {activeSub.deliverables && (
            <div className="subservice-deliverables-banner">
              <h3>Paper Stocks & Print Deliverables:</h3>
              <div className="deliverables-pills-wrap">
                {activeSub.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliv-pill-item">
                    <Icons.Printer size={16} color="#F5B800" />
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
              Our {activeSub.title} <span className="highlight-yellow-glow">Print Quality Pipeline</span>
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
