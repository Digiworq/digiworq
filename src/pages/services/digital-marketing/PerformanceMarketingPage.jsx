import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function PerformanceWidget() {
  const [adSpend, setAdSpend] = useState(100000);
  const roasMultiplier = 5.4;
  const projectedRevenue = Math.round(adSpend * roasMultiplier);

  return (
    <div className="custom-widget-card marketing-calculator-box">
      <div className="widget-header-row">
        <Icons.TrendingUp size={20} color="#10B981" />
        <span className="widget-title-text">Performance Ads ROAS Engine Simulator</span>
      </div>
      <p className="widget-subdesc">Adjust monthly paid ad budget to project e-commerce & lead revenue:</p>

      <div className="budget-slider-row">
        <div className="slider-label-flex">
          <span>Monthly Paid Ad Spend:</span>
          <strong>₹{adSpend.toLocaleString('en-IN')}</strong>
        </div>
        <input 
          type="range" 
          min="25000" 
          max="1000000" 
          step="25000" 
          value={adSpend} 
          onChange={(e) => setAdSpend(Number(e.target.value))} 
          className="budget-range-input"
        />
      </div>

      <div className="roas-metrics-card">
        <div className="roas-stat">
          <span className="roas-title">Target ROAS</span>
          <span className="roas-val green-glow">{roasMultiplier}x</span>
        </div>
        <div className="roas-stat">
          <span className="roas-title">Est. Revenue Generated</span>
          <span className="roas-val yellow-glow">₹{projectedRevenue.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}

export default function PerformanceMarketingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Google Search, Meta & TikTok Paid Performance Ad Campaigns",
    "Server-Side Conversion API (CAPI) & GA4 Event Tracking",
    "High-Converting Landing Page Optimization & A/B Testing",
    "Dynamic Retargeting & Custom Lookalike Audience Funnels",
    "Real-Time Looker Studio Performance Dashboard",
    "100% Full Ad Account Access & Royalty-Free Ad Creatives"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Target",
      title: "Data-Driven Media Buying",
      desc: "Algorithmic bidding strategies across Google Search, Meta Ads, and LinkedIn to maximize ROAS."
    },
    {
      step: "02",
      icon: "Cpu",
      title: "Server-Side Meta CAPI Tracking",
      desc: "Bypassing iOS 14 privacy limits with server-to-server Meta Conversions API and GA4 tracking."
    },
    {
      step: "03",
      icon: "Zap",
      title: "A/B Dynamic Creative Testing",
      desc: "Testing 20+ ad hooks, video creatives, headlines, and calls-to-action weekly to find winning ads."
    },
    {
      step: "04",
      icon: "RefreshCw",
      title: "Dynamic Retargeting Funnels",
      desc: "Recapturing website cart abandoners and landing page drop-offs with personalized ad offers."
    },
    {
      step: "05",
      icon: "TrendingUp",
      title: "CPA Reduction Optimization",
      desc: "Relentlessly optimizing Cost Per Acquisition (CPA) and Cost Per Lead (CPL) to increase profit margins."
    },
    {
      step: "06",
      icon: "BarChart3",
      title: "Real-Time Revenue Dashboards",
      desc: "Live Looker Studio reporting attributing exact revenue generated for every dollar spent on ads."
    }
  ];

  const genericCons = [
    "Wasted ad spend on broad untargeted audiences with zero sales conversion",
    "Broken pixel tracking missing 40% of sales due to browser ad blockers",
    "Ad fatigue from running the same ad creative for months without updates",
    "Agency opacity hiding ad manager accounts and actual spend reports",
    "Focusing on clicks and impressions rather than actual bottom-line revenue"
  ];

  const digiworqPros = [
    "Algorithmic media buying delivering 5.4x average ROAS returns",
    "Server-side Meta CAPI & GA4 custom conversion tracking architecture",
    "Weekly A/B creative testing of video reels, static graphics & ad hooks",
    "100% Transparent client access to Meta & Google Ads Manager accounts",
    "Guaranteed Daily Campaign Optimization & Real-Time Looker Dashboards"
  ];

  const process = [
    { step: "01", title: "Ad Audit & Tracking", desc: "Auditing previous ad accounts, setting up Meta CAPI & GA4 tracking." },
    { step: "02", title: "Creative & Copy Setup", desc: "Producing high-converting video ad reels, carousels & copy hooks." },
    { step: "03", title: "Campaign Launch & A/B", desc: "Deploying campaign funnels & running multi-variant creative tests." },
    { step: "04", title: "Scale & ROAS Growth", desc: "Scaling top-winning ad sets & delivering real-time revenue reports." }
  ];

  const faqs = [
    {
      q: "What ad platforms do you specialize in for performance marketing?",
      a: "We specialize in Google Search Ads, Meta Ads (Instagram & Facebook), LinkedIn B2B Ads, YouTube Video Ads, and TikTok."
    },
    {
      q: "Who owns the Google Ads and Meta Ad Manager accounts?",
      a: "You do! We build and manage campaigns directly inside your own ad accounts so you maintain 100% data ownership and billing control."
    },
    {
      q: "What is the minimum monthly ad budget required for performance marketing?",
      a: "We recommend a minimum ad budget of ₹50,000 / month to allow proper A/B testing and algorithmic conversion optimization."
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
            <span className="bc-current">Performance Marketing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Performance Marketing Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Performance Marketing</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Turn paid advertising into a predictable sales engine. Digiworq combines algorithmic media buying, server-side Meta CAPI tracking, and A/B creative testing to maximize Return On Ad Spend (ROAS).
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Scale Paid Ads ROAS</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <PerformanceWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Performance Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.TrendingUp size={16} color="#10B981" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Performance Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Performance Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Algorithmic media buying, server-side tracking, and relentless A/B ad creative testing.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.TrendingUp;
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
              Wasted Ad Spend vs. <span className="highlight-yellow-glow">Digiworq High-ROAS Engine</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why e-commerce & B2B brands choose Digiworq data-driven media buying to scale revenue.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Wasted Ad Spend</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unoptimized Media Buying
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
                  ★ Digiworq Performance Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#10B981' }}>
                Algorithmic Paid Ad Engine
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
                  <span>Scale Paid Ads ROAS</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Performance Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>5.4x</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Average Client ROAS</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>₹10Cr+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Ad Spend Managed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>Meta CAPI</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Server Pixel Architecture</div>
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
            Powered By Official Google & Meta Partner Ad Software
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Meta Ads Manager', 'Google Ads Premier', 'GA4 Server CAPI', 'Looker Studio', 'Triple Whale Attribution', 'Supermetrics'].map((tool, idx) => (
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
              Ready to Scale Your <span style={{ color: '#10B981' }}>Paid Ads ROAS?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom media buying audit, Meta CAPI setup, and ROAS revenue estimate today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Scale Paid Ads ROAS</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
