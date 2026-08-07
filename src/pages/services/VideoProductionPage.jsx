import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function VideoTheaterWidget() {
  const [resolution, setResolution] = useState('4K Ultra HD');

  return (
    <div className="custom-widget-card video-theater-box">
      <div className="theater-screen-mockup">
        <div className="screen-play-overlay">
          <div className="play-button-pulse">
            <Icons.Play size={32} color="#111827" fill="#111827" />
          </div>
          <span className="video-time-badge">01:45 / 03:00 — 4K ProRes LOG</span>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80" 
          alt="Cinematic Video Production Shoot" 
          className="video-poster-img"
        />
      </div>

      <div className="theater-controls-bar">
        <div className="res-picker-row">
          <span className="res-label">Master Render Quality:</span>
          {['4K Ultra HD', '1080p 60fps', 'Cinema LOG'].map((res) => (
            <button key={res} className={`res-pill ${resolution === res ? 'active' : ''}`} onClick={() => setResolution(res)}>
              {res}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VideoProductionPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData['video-production'] || { categoryTitle: "Video Production", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Video Production", overview: "High-end corporate video production and ad films.", process: [] };

  return (
    <div className="digiworq-service-page-root theme-video-production">
      <section className="service-landing-hero hero-theme-video-production">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Video Production</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">Cinema Studio</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Cinema Shoot</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <VideoTheaterWidget />
            </div>
          </div>

          {activeSub?.deliverables && activeSub.deliverables.length > 0 && (
            <div className="subservice-deliverables-banner">
              <h3>4K Cinema Deliverables & Audio Specs:</h3>
              <div className="deliverables-pills-wrap">
                {activeSub.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliv-pill-item">
                    <Icons.Film size={16} color="#F5B800" />
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
              Our {activeSub?.title || "Video"} <span className="highlight-yellow-glow">Production Pipeline</span>
            </h2>
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
