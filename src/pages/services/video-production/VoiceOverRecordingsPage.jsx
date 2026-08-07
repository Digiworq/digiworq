import React from 'react';
import * as Icons from 'lucide-react';

export default function VoiceOverRecordingsPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "Professional Native Voiceover Artists (Multi-Language)",
    "Acoustic Studio Sound Recording",
    "Noise Cancellation & Audio Mastering",
    "WAV & MP3 Audio Files Ready for Sync"
  ];

  const process = [
    { step: "01", title: "Casting", desc: "Selecting male/female voice talents." },
    { step: "02", title: "Recording", desc: "Studio mic recording with sound engineer." },
    { step: "03", title: "Mastering", desc: "Equalization & noise reduction." },
    { step: "04", title: "Delivery", desc: "Supplying pristine uncompressed audio." }
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
            <span className="bc-current">Voice Over Recordings</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Voice Over Recordings</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Give your video the perfect tone and voice. Digiworq offers studio voiceover recordings across English, Hindi, Kannada, Tamil, Telugu, and international languages.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Hire Voice Talent</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Voiceover Specs & Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Volume2 size={16} color="#F5B800" />
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
              Our Voiceover <span className="highlight-yellow-glow">Recording Workflow</span>
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
