import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function SocialAdsWidget() {
  const [activePlatform, setActivePlatform] = useState('Meta Advantage+');

  return (
    <div className="custom-widget-card marketing-calculator-box">
      <div className="widget-header-row">
        <Icons.Target size={20} color="#10B981" />
        <span className="widget-title-text">Paid Social Ad Campaign Simulator</span>
      </div>
      <p className="widget-subdesc">Select ad network to simulate targeting and conversion ROAS:</p>

      <div className="budget-slider-row" style={{ marginTop: '16px' }}>
        <div className="slider-label-flex">
          <span>Ad Platform:</span>
          <strong>{activePlatform}</strong>
        </div>
      </div>

      <div className="roas-metrics-card">
        <div className="roas-stat">
          <span className="roas-title">Click-Through Rate (CTR)</span>
          <span className="roas-val green-glow">3.8% High CTR</span>
        </div>
        <div className="roas-stat">
          <span className="roas-title">Average ROAS</span>
          <span className="roas-val yellow-glow">4.5x Return</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        {['Meta Advantage+', 'LinkedIn B2B Ads', 'YouTube Pre-Roll'].map((p) => (
          <button key={p} className={`res-pill ${activePlatform === p ? 'active' : ''}`} onClick={() => setActivePlatform(p)}>
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SocialAdsManagementPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Meta Advantage+, LinkedIn & YouTube Paid Ad Setup",
    "High-Converting Video Reels, Carousels & Dynamic Creatives",
    "Meta Conversions API (CAPI) & GA4 Pixel Server Tracking",
    "Custom Lookalike & Retargeting Audience Segmentation",
    "Weekly Campaign Optimization & A/B Copy Testing",
    "Transparent Real-Time Looker Studio Sales Reporting"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Target",
      title: "Hyper-Targeted Audience Funnels",
      desc: "Custom audience funnels targeting warm leads, lookalike cohorts, and high-income decision makers."
    },
    {
      step: "02",
      icon: "Sparkles",
      title: "High-Converting Video & Static Creatives",
      desc: "Designing UGC-style video reels, carousel ads, and high-contrast static banners built to stop scrolling."
    },
    {
      step: "03",
      icon: "Cpu",
      title: "Server-Side Meta CAPI Tracking",
      desc: "Server-to-server tracking bypassing iOS 14+ ad blockers to accurately capture 100% of purchase events."
    },
    {
      step: "04",
      icon: "RefreshCw",
      title: "Cart Abandonment Retargeting",
      desc: "Recapturing website visitors who left without purchasing with personalized offer ad incentives."
    },
    {
      step: "05",
      icon: "Zap",
      title: "Rapid A/B Creative Testing",
      desc: "Testing 10+ headline hooks, video variations, and CTA buttons weekly to scale winning ad sets."
    },
    {
      step: "06",
      icon: "TrendingUp",
      title: "ROAS Scaling & Bid Management",
      desc: "Relentlessly lowering Cost Per Acquisition (CPA) while scaling daily ad spend profitably."
    }
  ];

  const genericCons = [
    "Wasted ad budget targeting broad irrelevant audiences with zero sales",
    "Broken tracking pixels missing 40% of conversion events",
    "Ad fatigue from running the same ad creative for months without changes",
    "Zero retargeting funnels, losing 95% of website traffic",
    "Unclear agency reporting showing vanity clicks instead of actual sales revenue"
  ];

  const digiworqPros = [
    "Custom audience segmentation delivering 4.5x average campaign ROAS",
    "Server-side Meta CAPI & GA4 tracking architecture for 100% data accuracy",
    "Weekly A/B creative testing of video reels, carousels & copy hooks",
    "Multi-step cart abandonment & landing page retargeting ad funnels",
    "Real-time transparent Looker Studio dashboards tracking revenue & CPA"
  ];

  const process = [
    { step: "01", title: "Audit & Pixel Setup", desc: "Auditing past ad data & setting up server-side Meta CAPI tracking." },
    { step: "02", title: "Creative Production", desc: "Producing UGC video reels, carousel graphic banners & ad copy." },
    { step: "03", title: "Campaign Launch", desc: "Deploying multi-tier audience funnels & running A/B ad split tests." },
    { step: "04", title: "Scale & Optimize", desc: "Scaling winning ad sets & delivering weekly ROAS performance reports." }
  ];

  const faqs = [
    {
      q: "Which social ad platforms produce the best ROI for B2B vs B2C?",
      a: "For B2C e-commerce, Meta (Instagram/Facebook) and YouTube generate the highest volume sales. For B2B companies, LinkedIn Ads and Google Search yield the highest quality decision-maker leads."
    },
    {
      q: "Do you design the ad creatives and write the ad copy?",
      a: "Yes! Our package is 100% turnkey: video reel editing, graphic carousel design, copywriting, pixel setup, and daily ad management."
    },
    {
      q: "Will we have direct access to our ad accounts?",
      a: "Yes, 100%! We run campaigns inside your own Meta & Google Business accounts so you maintain complete control and transparency."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-digital-marketing">
      {/* 1. Hero Section */}
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
                <span>Paid Social Ad Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Social Ads Management</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Scale your revenue with high-performing Meta, Instagram, LinkedIn, and YouTube ad campaigns. Digiworq combines server-side Meta CAPI tracking, UGC video reels, and rapid A/B creative testing.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Scale Paid Social Ads</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="social-ads-management" title="Social Ads Management" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Social Ads Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Target size={16} color="#10B981" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Social Ads Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Social Ad Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Hyper-targeted audience funnels, UGC video reels, and server-side conversion tracking.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Target;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10B981', background: 'rgba(16, 185, 129, 0.12)' }}>
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

      {/* 3. Modern Split Comparison Showcase Deck */}
      <section className="service-comparison-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '52px' }}>
            <h2 className="process-main-title">
              Basic Boosted Posts vs. <span className="highlight-yellow-glow">Digiworq Social Ad Funnels</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why growth brands choose Digiworq targeted ad funnels over basic boosted posts.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Basic Boosted Posts</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unoptimized Ad Spend
              </h3>
              <div className="comparison-items-list">
                {genericCons.map((con, idx) => (
                  <div key={idx} className="comparison-list-item danger">
                    <div className="icon-box-danger">✕</div>
                    <span>{con}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="comparison-card-winner" style={{ borderColor: '#10B981' }}>
              <div className="comparison-card-header">
                <span className="comparison-badge-winner" style={{ borderColor: '#10B981', color: '#10B981', background: 'rgba(16, 185, 129, 0.15)' }}>
                  ★ Digiworq Ads Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#10B981' }}>
                Full-Funnel Paid Social Engine
              </h3>
              <div className="comparison-items-list" style={{ marginBottom: '28px' }}>
                {digiworqPros.map((pro, idx) => (
                  <div key={idx} className="comparison-list-item winner">
                    <div className="icon-box-winner">✓</div>
                    <span>{pro}</span>
                  </div>
                ))}
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Scale Paid Social Ads</span>
                  <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="digiworq-process-section py-20">
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Our 4-Phase <span className="highlight-yellow-glow">Social Ads Pipeline</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {process.map((p, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)', 
                  border: '1px solid rgba(16, 185, 129, 0.3)', 
                  borderRadius: '20px', 
                  padding: '32px 28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <span style={{ background: '#10B981', color: '#111827', fontWeight: 900, fontSize: '0.9rem', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.step}
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Impact Stats Bar */}
      <section className="py-14" style={{ background: 'linear-gradient(180deg, #0B0F19 0%, #05070F 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', textAlign: 'center', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>4.5x</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Average Campaign ROAS</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>200+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Ad Campaigns Scaled</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>Meta CAPI</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Server Tracking Setup</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Agency Tech Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Meta Advantage+ & Official Partner Ad Software
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Meta Advantage+ Ads', 'LinkedIn Campaign Manager', 'YouTube Ads Studio', 'GA4 Server CAPI', 'Looker Studio'].map((tool, idx) => (
              <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#D1D5DB', padding: '8px 18px', borderRadius: '20px', fontSize: '0.88rem', fontWeight: 600 }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Accordion */}
      <section className="service-faq-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container" style={{ maxWidth: '900px' }}>
          <div className="process-header-box text-center" style={{ marginBottom: '44px' }}>
            <h2 className="process-main-title">
              Frequently Asked <span className="highlight-yellow-glow">Questions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '14px', overflow: 'hidden' }}
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '22px 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 700, textAlign: 'left', cursor: 'pointer' }}
                  >
                    <span>{faq.q}</span>
                    <Icons.ChevronDown size={22} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#10B981' }} />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 26px 24px 26px', color: '#9CA3AF', fontSize: '0.98rem', lineHeight: 1.7, borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '18px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="service-cta-banner-wrap" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B0F19 100%)' }}>
        <div className="section-container text-center">
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
              Ready to Scale Your <span style={{ color: '#10B981' }}>Social Ad Revenue?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom paid social ad audit, creative roadmap, and campaign ROAS estimate today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Scale Paid Social Ads</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
