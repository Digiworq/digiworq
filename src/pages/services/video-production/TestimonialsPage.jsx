import React from 'react';
import * as Icons from 'lucide-react';

export default function TestimonialsPage({ onOpenContact, onBackHome }) {
  const deliverables = [
    "On-Site Client Interview Shoot",
    "Story-Driven Editing & B-Roll Overlay",
    "Subtitles & High-Impact Case Study Motion Graphics",
    "Short Social Cuts & Full Video Masters"
  ];

  const process = [
    { step: "01", title: "Prep", desc: "Crafting open-ended interview questions." },
    { step: "02", title: "Shoot", desc: "On-site interview setup with soft lighting." },
    { step: "03", title: "Edit", desc: "Cutting authentic customer success stories." },
    { step: "04", title: "Master", desc: "Adding brand logo & metrics callouts." }
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
            <span className="bc-current">Testimonials</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Customer Testimonial Videos</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Build trust with authentic customer success stories. Digiworq shoots and edits high-impact video testimonials that turn potential clients into confident buyers.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Shoot Testimonial Video</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subservice-deliverables-banner">
            <h3>Testimonial Video Specs:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.MessageSquare size={16} color="#F5B800" />
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
              Our Testimonial <span className="highlight-yellow-glow">Shooting Process</span>
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
