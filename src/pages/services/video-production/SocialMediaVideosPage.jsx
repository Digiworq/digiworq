import React from 'react';
import * as Icons from 'lucide-react';

export default function SocialMediaVideosPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "9:16 Vertical Instagram Reels & TikTok Videos",
    "Dynamic Captions & Motion Text Animation",
    "Trending Music & Sound Effects",
    "Fast Turnaround Content Bundles"
  ];

  const process = [
    { step: "01", title: "Trends", desc: "Selecting viral formats & audio tracks." },
    { step: "02", title: "Shoot", desc: "Shooting high-energy vertical video." },
    { step: "03", title: "Cut", desc: "Editing with fast cuts & dynamic text." },
    { step: "04", title: "Publish", desc: "Delivering monthly social reel packs." }
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
            <span className="bc-current">Social Media Videos</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Social Media Videos</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Thumb-stopping vertical videos designed for Instagram Reels, YouTube Shorts, and TikTok. Digiworq produces high-energy social videos that capture immediate viewer attention.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Create Social Videos</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Social Video Specs:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Clapperboard size={16} color="#F5B800" />
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
              Our Social Video <span className="highlight-yellow-glow">Creation Workflow</span>
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
