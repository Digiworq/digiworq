import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function VideographyBroadcastWidget() {
  const [activeCam, setActiveCam] = useState('CAM 1');

  return (
    <div className="custom-widget-card videography-broadcast-box">
      <div className="widget-header-row">
        <Icons.Radio size={20} color="#EF4444" />
        <span className="widget-title-text">4K Multi-Cam Broadcast Switcher Deck</span>
      </div>

      <div className="cam-feed-preview">
        <div className="feed-status-tag">LIVE: {activeCam} OUTPUT</div>
        <img 
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" 
          alt="Broadcast Feed" 
          className="feed-img"
        />
      </div>

      <div className="cam-switcher-grid">
        {['CAM 1 (Stage)', 'CAM 2 (Audience)', 'CAM 3 (4K Drone)'].map((cam) => (
          <button key={cam} className={`cam-btn ${activeCam === cam ? 'active' : ''}`} onClick={() => setActiveCam(cam)}>
            {cam}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function VideographyPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData.videography || { categoryTitle: "Videography", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Videography", overview: "4K event, commercial & drone videography.", process: [] };

  return (
    <div className="digiworq-service-page-root theme-videography">
      <section className="service-landing-hero hero-theme-videography">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Videography</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">Broadcast Deck</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Schedule Videography</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <VideographyBroadcastWidget />
            </div>
          </div>

          {activeSub.deliverables && (
            <div className="subservice-deliverables-banner">
              <h3>Video Footage Deliverables & Drone Specs:</h3>
              <div className="deliverables-pills-wrap">
                {activeSub.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliv-pill-item">
                    <Icons.Video size={16} color="#EF4444" />
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
              Our {activeSub.title} <span className="highlight-yellow-glow">Coverage Workflow</span>
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
