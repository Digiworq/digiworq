import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function SocialAdsManagementPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Facebook & Instagram Ad Campaign Setup",
    "Custom Audience & Lookalike Targeting",
    "High-Converting Ad Creative & Copywriting",
    "Lead Generation Form & Retargeting Campaigns",
    "Conversion Tracking & Pixel Setup",
    "Monthly Ad Performance & ROAS Reports"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Megaphone",
      title: "Social Media Advertising Agency",
      desc: "Digiworq helps businesses in Bangalore make and run ads on Facebook, Instagram and other sites. We focus on the right audience and make them interesting."
    },
    {
      step: "02",
      icon: "Heart",
      title: "Instagram & Facebook Advertising",
      desc: "We make ads that people will see and like on Instagram and Facebook. These ads help businesses get more visitors, leads and sales."
    },
    {
      step: "03",
      icon: "Zap",
      title: "Paid Social Media Campaigns",
      desc: "We run paid social campaigns that help businesses increase brand awareness and drive purchase intent across all major platforms."
    },
    {
      step: "04",
      icon: "UserPlus",
      title: "Lead Generation Ads",
      desc: "We help businesses capture quality leads from Facebook and Instagram using optimized lead forms and compelling ad creatives."
    },
    {
      step: "05",
      icon: "RefreshCw",
      title: "Retargeting Campaigns",
      desc: "We help businesses re-engage website visitors who didn't convert with smart retargeting ads that bring them back to buy."
    },
    {
      step: "06",
      icon: "PieChart",
      title: "Audience Targeting & Analytics",
      desc: "We track ad performance and use data-driven insights to continuously refine targeting and maximize return on ad spend."
    }
  ];

  const faqs = [
    {
      q: 'What social ads management services does Digiworq provide?',
      a: 'Digiworq provides Facebook ads, Instagram ads, LinkedIn ads, lead generation campaigns and social media advertising management services.'
    },
    {
      q: 'Why are social media ads important for businesses?',
      a: 'Social media ads help businesses increase brand awareness, generate quality leads and drive sales through targeted digital campaigns.'
    },
    {
      q: 'Do you provide Facebook and Instagram ad management?',
      a: 'Yes we manage Facebook and Instagram ads, track performance, and continuously optimize campaigns for better results.'
    },
    {
      q: 'Can Digiworq create lead generation ad campaigns?',
      a: 'Yes we create lead generation campaigns with optimized ad creatives, forms and audience targeting to help businesses capture quality leads.'
    },
    {
      q: 'Why choose Digiworq for social ads management in Bangalore?',
      a: 'Digiworq helps businesses with social media ads through specialized strategies, compelling creatives, precise audience targeting and data-backed optimization for maximum ROI.'
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
            <span className="bc-current">Social Ads Management</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Paid Ads Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Social Ads Management</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides social ads management services to help businesses in Bangalore grow brand awareness, generate leads and drive sales through targeted Facebook, Instagram and social media advertising campaigns.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Social Ads Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="social-ads-management" title="Paid Ads Management" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Social Ads Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Target size={16} color="#F43F5E" />
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
              Our 6 Core <span className="highlight-yellow-glow">Social Ads Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Targeted paid campaigns, creative ad design, retargeting and conversion tracking for real results.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Target;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(244,63,94,0.4)', color: '#F43F5E', background: 'rgba(244,63,94,0.12)' }}>
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
          <h2 className="process-main-title">Maximize Your <span className="highlight-yellow-glow">Social Ad Results</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our social ads team create targeted campaigns that bring real results across Facebook, Instagram and beyond.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Social Ads Today</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
