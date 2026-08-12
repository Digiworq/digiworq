import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ArchitectureAnimationPage({ onOpenContact, onBackHome }) {
  const [activeFaq] = useState(null);
  const [activeF, setActiveF] = useState(null);

  const deliverables = [
    "Residential Villa & Apartment Animations",
    "Commercial & Retail Property Visualization",
    "Floor Plan & Layout Animations",
    "Real Estate Marketing Videos",
    "Investor & Project Presentation Animations",
    "Blueprint to Animated Walkthrough"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Building",
      title: "Architectural Animation Services",
      desc: "Our services help businesses present commercial and infrastructure projects through professional animations used for marketing, pitches and client presentations."
    },
    {
      step: "02",
      icon: "Home",
      title: "Residential Project Animation",
      desc: "Present villas, apartments and housing projects with engaging 2D animations that help buyers visualize layouts, design and space."
    },
    {
      step: "03",
      icon: "Briefcase",
      title: "Commercial Property Visualization",
      desc: "Showcase office spaces, retail stores and commercial developments with professional animations that impress investors and stakeholders."
    },
    {
      step: "04",
      icon: "Map",
      title: "Floor Plan Animations",
      desc: "Transform flat floor plan drawings into animated walkthroughs that improve client understanding and project communication."
    },
    {
      step: "05",
      icon: "Play",
      title: "Project Presentation Videos",
      desc: "We design animated videos for investor presentations and project launches that turn complex designs into compelling visual stories."
    },
    {
      step: "06",
      icon: "TrendingUp",
      title: "Real Estate Marketing Animations",
      desc: "Create marketing-focused animations that enhance property promotions, boost lead generation and improve buyer confidence."
    }
  ];

  const faqs = [
    {
      q: 'What are 2D architecture animation services?',
      a: '2D architecture animation services use animated visuals to showcase architectural floor plans, project layouts and design concepts in an engaging and easy-to-understand format.'
    },
    {
      q: 'Who can benefit from architecture animation services?',
      a: 'Architects, builders, real estate developers, interior designers and construction companies can all benefit from professional 2D architecture animations.'
    },
    {
      q: 'Do you provide architectural animation for real estate marketing?',
      a: 'Yes we create marketing-focused animations designed to enhance property promotions, investor presentations and project launches.'
    },
    {
      q: 'Can architectural animations be used for investor presentations?',
      a: 'Yes animations are highly effective for investor presentations, property exhibitions and project launch events.'
    },
    {
      q: 'Why choose Digiworq for 2D architecture animation in Bangalore?',
      a: 'Digiworq offers professional visualization expertise, tailored animation solutions, high-quality presentations and a creative team that understands architecture and real estate needs.'
    }
  ];

  return (
    <div className="service-page-root">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-digital-marketing">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">2D Animation</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">2D Architecture Animation</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Architecture Animation · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">2D Architecture Animation</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides 2D architecture animation services in Bangalore that help architects, builders and real estate developers showcase their projects in an engaging way. We transform blueprints and designs into stunning animated visuals that clients and investors instantly understand.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Animation Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="2d-architecture-animation" title="2D Architecture Viz" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Architecture Animation Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Building size={16} color="#F59E0B" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Bento Grid */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Animation Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From residential walkthroughs to commercial showcases — we animate every architectural vision.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Building;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(245,158,11,0.4)', color: '#F59E0B', background: 'rgba(245,158,11,0.12)' }}>
                      <IconComp size={24} />
                    </div>
                    <span className="pillar-card-number">{pillar.step}</span>
                  </div>
                  <h3 className="pillar-card-title">{pillar.title}</h3>
                  <p className="pillar-card-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-bento-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '40px' }}>
            <h2 className="process-main-title">Frequently Asked <span className="highlight-yellow-glow">Questions</span></h2>
          </div>
          <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeF === i ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => setActiveF(activeF === i ? null : i)}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>{faq.q}</h4>
                  <Icons.ChevronDown size={18} className={`faq-chevron ${activeF === i ? 'rotated' : ''}`} />
                </button>
                {activeF === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container" style={{ textAlign: 'center', padding: '60px 24px' }}>
          <h2 className="process-main-title">Bring Your Architecture <span className="highlight-yellow-glow">to Life</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our animation team create stunning 2D architectural visuals that showcase your project to clients, investors and buyers.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Architecture Animation</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
