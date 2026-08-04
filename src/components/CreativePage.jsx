import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { creativeServicesData } from '../data/creativeData';

export default function CreativePage({ initialServiceId = "branding-solutions", onOpenContact, onBackHome }) {
  const [activeServiceId, setActiveServiceId] = useState(initialServiceId);

  const activeService = creativeServicesData.find(s => s.id === activeServiceId) || creativeServicesData[0];
  const IconComp = Icons[activeService.icon] || Icons.Palette;

  return (
    <div className="creative-page-root">
      {/* Top Header Banner */}
      <div className="creative-hero-banner">
        <div className="section-container">
          <div className="breadcrumb-nav">
            <button className="breadcrumb-link" onClick={onBackHome}>Home</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Creative Services</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current-service">{activeService.title}</span>
          </div>

          <h1 className="creative-hero-title">
            Creative <span className="highlight">Design & Branding</span> Solutions
          </h1>
          <p className="creative-hero-subtext">
            Developing unique business identity, eye-catching packaging, modern UI/UX, and visual storytelling solutions that remain long after the digital market finishes.
          </p>
        </div>
      </div>

      {/* Main Full-Width Content Area */}
      <div className="section-container creative-main-container">
        {/* Top Horizontal Pill Navigation for Creative Services */}
        <div className="creative-top-pills-bar">
          {creativeServicesData.map((service) => {
            const ItemIcon = Icons[service.icon] || Icons.Circle;
            const isSelected = activeServiceId === service.id;
            return (
              <button
                key={service.id}
                className={`creative-pill-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveServiceId(service.id)}
              >
                <ItemIcon size={16} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Full-Width Active Service Card */}
        <div className="creative-detail-box full-width">
          {/* Header Badge & Title */}
          <div className="detail-header-card">
            <div className="detail-icon-circle">
              <IconComp size={34} />
            </div>
            <div className="detail-title-group">
              <span className="detail-tagline-badge">{activeService.tagline}</span>
              <h2 className="detail-main-title">{activeService.title}</h2>
            </div>
          </div>

          {/* Overview Paragraph */}
          <div className="detail-section-block">
            <h3 className="detail-block-heading">Overview</h3>
            <p className="detail-paragraph">{activeService.overview}</p>
          </div>

          {/* Deliverables Checklist */}
          <div className="detail-section-block">
            <h3 className="detail-block-heading">Key Deliverables</h3>
            <div className="deliverables-grid">
              {activeService.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="deliverable-item-card">
                  <Icons.CheckCircle2 className="check-icon-yellow" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Process Timeline */}
          <div className="detail-section-block">
            <h3 className="detail-block-heading">Our Design Process</h3>
            <div className="process-steps-grid">
              {activeService.process.map((pStep, pIdx) => (
                <div key={pIdx} className="process-card">
                  <span className="process-step-num">{pStep.step}</span>
                  <h4 className="process-step-title">{pStep.title}</h4>
                  <p className="process-step-desc">{pStep.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service FAQs */}
          {activeService.faqs && activeService.faqs.length > 0 && (
            <div className="detail-section-block">
              <h3 className="detail-block-heading">Frequently Asked Questions</h3>
              <div className="faqs-list-box">
                {activeService.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="faq-mini-item">
                    <h4 className="faq-mini-question">
                      <Icons.HelpCircle size={18} className="faq-q-icon" />
                      <span>{faq.q}</span>
                    </h4>
                    <p className="faq-mini-answer">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call To Action Box */}
          <div className="creative-cta-box">
            <div className="cta-left-text">
              <h3>Ready to elevate your brand with {activeService.title}?</h3>
              <p>Contact our creative design team in Bangalore for a custom strategy proposal.</p>
            </div>
            <button className="btn-primary" onClick={onOpenContact}>
              <span>Get Started Now</span>
              <Icons.ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
