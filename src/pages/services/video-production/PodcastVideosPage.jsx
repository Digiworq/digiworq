import React from 'react';
import * as Icons from 'lucide-react';

export default function PodcastVideosPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Multi-Camera Podcast Studio Setup",
    "Broadcast Shure / Rode Microphone Audio",
    "Dynamic Multi-Cam Live Switcher Cut",
    "Short Reels & TikTok Clips Extraction",
    "Full Episode YouTube & Spotify Masters"
  ];

  const process = [
    { step: "01", title: "Setup", desc: "Positioning multi-cams & podcast mics." },
    { step: "02", title: "Record", desc: "Capturing high-definition video & audio." },
    { step: "03", title: "Editing", desc: "Cutting speaker angles & removing noise." },
    { step: "04", title: "Clips", desc: "Exporting viral social media shorts." }
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
            <span className="bc-current">Podcast Videos</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Podcast Video Production</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Record studio-quality video podcasts. Digiworq offers multi-cam podcast video recording, professional studio setups, audio mastering, and viral short-clip editing for YouTube & Spotify.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Podcast Studio</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Podcast Video Specs:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Mic size={16} color="#F5B800" />
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
              Our Podcast <span className="highlight-yellow-glow">Production Pipeline</span>
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
