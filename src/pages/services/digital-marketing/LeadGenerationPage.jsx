import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function LeadGenerationPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "B2B & B2C Lead Generation Strategy",
    "Google Ads & Meta Lead Campaigns",
    "Landing Page Design & Optimization",
    "CRM Integration & Lead Management",
    "Multi-Channel Lead Funnels",
    "Monthly Lead Quality & Conversion Reports"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Crosshair",
      title: "Lead Generation Services",
      desc: "Our lead generation services include paid ads, social media plans, landing pages, email marketing and digital plans focused on converting visitors into quality leads."
    },
    {
      step: "02",
      icon: "Users",
      title: "B2B & B2C Lead Generation",
      desc: "We help you get business and consumer leads through targeted digital plans and marketing strategies that are laser-focused on your ideal audience."
    },
    {
      step: "03",
      icon: "TrendingUp",
      title: "Paid Advertising Campaigns",
      desc: "We run Google Ads, Meta Ads and LinkedIn campaigns designed to improve lead quality and increase conversion rates for your business."
    },
    {
      step: "04",
      icon: "Layout",
      title: "Landing Page Optimization",
      desc: "We create high-converting landing pages that get people to enquire about your business and improve overall campaign performance."
    },
    {
      step: "05",
      icon: "Share2",
      title: "Multi-Channel Lead Generation",
      desc: "We reach customers through SEO, social media, paid campaigns, email marketing and content strategies for maximum reach."
    },
    {
      step: "06",
      icon: "BarChart2",
      title: "Analytics & Performance Tracking",
      desc: "We monitor campaign performance, audience engagement and conversion metrics with detailed reports and analytics tools."
    }
  ];

  const faqs = [
    {
      q: 'What lead generation services does Digiworq provide?',
      a: 'Digiworq provides B2B lead generation, social media lead campaigns, Google Ads, landing page optimization, email marketing and performance-driven digital marketing services.'
    },
    {
      q: 'Why is lead generation important for businesses?',
      a: 'Lead generation helps businesses attract potential customers, improve sales opportunities and increase conversions through targeted marketing strategies.'
    },
    {
      q: 'Do you provide B2B lead generation services?',
      a: 'Yes Digiworq provides B2B and B2C lead generation campaigns based on different industries and business goals.'
    },
    {
      q: 'Can Digiworq manage social media lead campaigns?',
      a: 'Yes Digiworq manages lead generation campaigns on Facebook, Instagram, LinkedIn and Google platforms.'
    },
    {
      q: 'Why choose Digiworq for lead generation services in Bangalore?',
      a: 'Digiworq offers customized lead generation strategies, audience targeting, campaign optimization, analytics tracking and conversion-focused digital marketing solutions.'
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
            <span className="bc-current">Lead Generation</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Lead Gen Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Lead Generation Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides lead generation services in Bangalore designed to help businesses get quality leads, improve conversion rates and increase sales through targeted digital campaigns across multiple platforms.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Lead Gen Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="lead-generation" title="Lead Generation" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Lead Generation Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.TrendingUp size={16} color="#22C55E" />
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
              Our 6 Core <span className="highlight-yellow-glow">Lead Generation Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Multi-channel campaigns, landing page funnels and CRM-integrated lead management for sustainable growth.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.TrendingUp;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(34,197,94,0.4)', color: '#22C55E', background: 'rgba(34,197,94,0.12)' }}>
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
          <h2 className="process-main-title">Generate <span className="highlight-yellow-glow">Quality Leads</span> for Your Business</h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our lead generation team build targeted campaigns that connect your business with the right customers and drive real growth.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Lead Generation</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
