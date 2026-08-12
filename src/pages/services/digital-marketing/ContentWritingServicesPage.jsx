import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ContentWritingServicesPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Website Content & Landing Pages",
    "SEO Blog & Article Writing",
    "Product Descriptions & E-commerce Copy",
    "Social Media & Marketing Content",
    "Corporate Profiles & Business Copy",
    "Monthly Content Calendar & Strategy"
  ];

  const pillars = [
    {
      step: "01",
      icon: "PenTool",
      title: "Content Writing Services",
      desc: "Our content writing services help businesses communicate effectively — from website copy and blog posts to product descriptions and corporate content that converts."
    },
    {
      step: "02",
      icon: "Globe",
      title: "Website Content Writing",
      desc: "We write website content that improves the user experience, builds trust and supports search engine performance for your business."
    },
    {
      step: "03",
      icon: "Search",
      title: "SEO Content Writing",
      desc: "We write keyword-focused content that ranks on search engines while remaining easy to read and genuinely valuable to your audience."
    },
    {
      step: "04",
      icon: "FileText",
      title: "Blog & Article Writing",
      desc: "We write informative and engaging blog posts and articles to drive organic traffic and establish your brand as an industry authority."
    },
    {
      step: "05",
      icon: "Layout",
      title: "Landing Page Content",
      desc: "We write conversion-focused landing page copy that encourages visitors to take action and generate quality leads for your business."
    },
    {
      step: "06",
      icon: "Megaphone",
      title: "Marketing & Corporate Content",
      desc: "We write high-quality content for email campaigns, social media, brochures, company profiles and business communications."
    }
  ];

  const faqs = [
    {
      q: 'What content writing services does Digiworq provide?',
      a: 'Digiworq provides website content writing, SEO content writing, blog writing, article writing, landing page content, product descriptions and marketing content services.'
    },
    {
      q: 'Why is professional content writing important for businesses?',
      a: 'Professional content writing helps improve search engine rankings, engage audiences, build brand credibility and generate quality leads.'
    },
    {
      q: 'Do you provide SEO content writing services?',
      a: 'Yes Digiworq creates SEO-optimized content that targets keywords while maintaining high-quality and user-focused writing.'
    },
    {
      q: 'Can Digiworq create content for different industries?',
      a: 'Yes Digiworq develops customized content for industries including technology, healthcare, education, real estate, e-commerce and professional services.'
    },
    {
      q: 'How does content writing support marketing?',
      a: 'Content writing supports SEO, social media marketing, email campaigns, lead generation and overall brand visibility by delivering useful information to the right audience.'
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
            <span className="bc-link-sub">Digital Marketing</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Content Writing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Content Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Content Writing Company</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq is a trusted content writing company in Bangalore. We write SEO-friendly, engaging content — from website copy and blogs to landing pages and marketing materials — that helps businesses grow their online presence and attract the right audience.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Content Writing Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="content-writing-services" title="Content Writing" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Content Writing Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.FileText size={16} color="#64748B" />
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
              Our 6 Core <span className="highlight-yellow-glow">Content Writing Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              SEO-optimized writing, conversion copywriting and strategic content planning that supports long-term brand growth.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.PenTool;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(100,116,139,0.4)', color: '#94A3B8', background: 'rgba(100,116,139,0.12)' }}>
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
              <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>{faq.q}</h4>
                  <Icons.ChevronDown size={18} className={`faq-chevron ${activeFaq === i ? 'rotated' : ''}`} />
                </button>
                {activeFaq === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container" style={{ textAlign: 'center', padding: '60px 24px' }}>
          <h2 className="process-main-title">Tell Your Story with <span className="highlight-yellow-glow">Powerful Content</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our content writing team create SEO-optimized, engaging content that builds your brand, drives traffic, and converts visitors into customers.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Content Writing</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
