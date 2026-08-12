import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function MotionGraphicsPage({ onOpenContact, onBackHome }) {
  const [activeF, setActiveF] = useState(null);

  const deliverables = [
    "Promotional & Marketing Animations",
    "Corporate Explainer Videos",
    "Brand Storytelling Motion Videos",
    "Social Media Animated Content",
    "Product & Service Demo Animations",
    "Full Production: Script to Final Delivery"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Layers",
      title: "Motion Graphics Services",
      desc: "We create motion graphics that transform complex information into simple, engaging animated visuals for marketing, presentations and product launches."
    },
    {
      step: "02",
      icon: "Megaphone",
      title: "Promotional Motion Graphics",
      desc: "We make attention-grabbing animations for marketing campaigns and advertisements that stop the scroll and drive audience engagement."
    },
    {
      step: "03",
      icon: "Briefcase",
      title: "Corporate Motion Graphics",
      desc: "We produce animated content for business presentations, training materials and internal communications that is professional and on-brand."
    },
    {
      step: "04",
      icon: "Play",
      title: "Brand Storytelling Videos",
      desc: "We craft animated videos that communicate your brand story, values and unique selling points in a way that resonates with your audience."
    },
    {
      step: "05",
      icon: "Share2",
      title: "Social Media Animations",
      desc: "We create short, high-impact animations perfectly sized and optimized for Instagram Reels, YouTube Shorts, Facebook and LinkedIn."
    },
    {
      step: "06",
      icon: "Lightbulb",
      title: "Explainer Video Production",
      desc: "We make explainer videos that make it easy for people to understand complex products and services — from scripting to final animated delivery."
    }
  ];

  const faqs = [
    {
      q: 'What are motion graphics services?',
      a: 'Motion graphics services involve creating animated visuals, text and graphics to communicate ideas in an engaging and professional way for marketing, branding and education.'
    },
    {
      q: 'What types of motion graphics videos do you create?',
      a: 'We create explainer videos, promotional animations, corporate videos, social media animations, brand storytelling videos and product demo animations.'
    },
    {
      q: 'Do you provide customized 2D animation services?',
      a: 'Yes we create fully customized animations tailored to your brand style, business goals and target audience.'
    },
    {
      q: 'Can motion graphics be used for social media marketing?',
      a: 'Yes motion graphics are highly effective for social media because they capture attention quickly and communicate messages in an entertaining, memorable way.'
    },
    {
      q: 'Why choose Digiworq for 2D motion graphics in Bangalore?',
      a: 'Digiworq creates high-quality, customized motion graphics that help businesses grow through better visual storytelling, marketing impact and audience engagement.'
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
            <span className="bc-current">2D Motion Graphics</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Motion Graphics Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">2D Motion Graphics</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq creates 2D motion graphics in Bangalore that help businesses tell their story in a way that is fun to watch and easy to understand. Our team produces compelling motion graphics, promotional videos and brand animations that capture attention and build brand recall.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Motion Graphics Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="2d-motion-graphics" title="2D Motion Graphics" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Motion Graphics Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Zap size={16} color="#EC4899" />
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
              Our 6 Core <span className="highlight-yellow-glow">Motion Graphics Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Promotional videos, explainers, social content and corporate animations — from concept to final delivery.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Zap;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(236,72,153,0.4)', color: '#EC4899', background: 'rgba(236,72,153,0.12)' }}>
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
          <h2 className="process-main-title">Bring Your Brand to Life with <span className="highlight-yellow-glow">Motion Graphics</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our 2D animation team create engaging motion graphics that capture attention, explain your ideas and help your brand stand out.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Motion Graphics Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
