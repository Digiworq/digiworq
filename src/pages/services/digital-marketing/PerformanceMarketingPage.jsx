import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function PerformanceMarketingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Google Ads & PPC Campaign Management",
    "Meta & LinkedIn Advertising",
    "Conversion Rate Optimization (CRO)",
    "Remarketing & Retargeting Funnels",
    "Multi-Platform Advertising Strategy",
    "Real-Time Analytics & ROAS Reporting"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Building2",
      title: "Performance Marketing Company",
      desc: "As a trusted performance marketing company in Bangalore, Digiworq helps businesses improve visibility, customer acquisition and campaign performance through targeted advertising."
    },
    {
      step: "02",
      icon: "Search",
      title: "Google Ads & PPC Campaigns",
      desc: "We run Google Ads and PPC campaigns designed to generate high-quality leads and drive measurable business growth."
    },
    {
      step: "03",
      icon: "Share2",
      title: "Social Media Advertising",
      desc: "We create targeted advertising campaigns across Facebook, Instagram, LinkedIn and other digital platforms for maximum engagement and conversions."
    },
    {
      step: "04",
      icon: "TrendingUp",
      title: "Conversion Rate Optimization",
      desc: "We improve campaign performance and maximize ROI through landing page optimization, audience targeting and A/B testing strategies."
    },
    {
      step: "05",
      icon: "Layers",
      title: "Multi-Platform Advertising",
      desc: "We manage campaigns across Google, Meta, LinkedIn, YouTube and other digital advertising platforms for maximum reach and conversions."
    },
    {
      step: "06",
      icon: "BarChart2",
      title: "Analytics & Performance Tracking",
      desc: "We track campaign performance, conversions, ROI and audience insights with detailed reporting and continuous optimization support."
    }
  ];

  const faqs = [
    {
      q: 'What performance marketing services does Digiworq provide?',
      a: 'We provide Google Ads, social media advertising, PPC campaigns, lead generation, remarketing, landing page optimization and analytics tracking services.'
    },
    {
      q: 'Why is performance marketing important for businesses?',
      a: 'Performance marketing helps businesses generate measurable results, improve ROI, increase conversions and reach targeted audiences through data-driven campaigns.'
    },
    {
      q: 'Do you provide Google Ads and Meta Ads management?',
      a: 'Yes we manage Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads and other paid advertising campaigns tailored to your business goals.'
    },
    {
      q: 'Can Digiworq create lead generation campaigns?',
      a: 'Yes we create conversion-focused lead generation campaigns designed to improve inquiries, customer acquisition and sales growth.'
    },
    {
      q: 'Why choose Digiworq as a performance marketing agency in Bangalore?',
      a: 'Digiworq offers customized marketing strategies, campaign optimization, audience targeting, transparent reporting and ROI-focused digital marketing solutions.'
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
            <span className="bc-current">Performance Marketing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Performance Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Performance Marketing Agency</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq is a performance marketing agency in Bangalore that helps businesses generate quality leads, maximize conversions and achieve measurable ROI through data-driven digital campaigns across search, social and display channels.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Performance Marketing Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="performance-marketing" title="Performance Marketing" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Performance Marketing Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.BarChart3 size={16} color="#F59E0B" />
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
              Our 6 Core <span className="highlight-yellow-glow">Performance Marketing Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Google Ads, Meta campaigns, conversion optimization and real-time ROAS tracking for data-driven business growth.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.BarChart3;
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
          <h2 className="process-main-title">Drive Results with <span className="highlight-yellow-glow">Performance Marketing</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our performance marketing team build data-driven campaigns that generate real leads, maximize ROI, and grow your business.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Performance Marketing</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
