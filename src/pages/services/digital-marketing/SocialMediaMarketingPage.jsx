import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function MarketingRoasWidget() {
  const [adSpend, setAdSpend] = useState(50000);
  const roasMultiplier = 4.2;
  const projectedRevenue = Math.round(adSpend * roasMultiplier);

  return (
    <div className="custom-widget-card marketing-calculator-box">
      <div className="widget-header-row">
        <Icons.TrendingUp size={20} color="#10B981" />
        <span className="widget-title-text">Live ROAS Campaign Sales Simulator</span>
      </div>
      <p className="widget-subdesc">Adjust monthly digital marketing budget to simulate sales revenue:</p>

      <div className="budget-slider-row">
        <div className="slider-label-flex">
          <span>Monthly Ad Budget:</span>
          <strong>₹{adSpend.toLocaleString('en-IN')}</strong>
        </div>
        <input 
          type="range" 
          min="10000" 
          max="500000" 
          step="5000" 
          value={adSpend} 
          onChange={(e) => setAdSpend(Number(e.target.value))} 
          className="budget-range-input"
        />
      </div>

      <div className="roas-metrics-card">
        <div className="roas-stat">
          <span className="roas-title">Est. ROAS Return</span>
          <span className="roas-val green-glow">{roasMultiplier}x</span>
        </div>
        <div className="roas-stat">
          <span className="roas-title">Projected Sales Revenue</span>
          <span className="roas-val yellow-glow">₹{projectedRevenue.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}

export default function SocialMediaMarketingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Omnichannel Social Media Strategy & Brand Positioning",
    "Monthly Content Grid Calendar (Reels, Carousels, Stories)",
    "Custom High-Converting Ad Creatives & Motion Graphics",
    "Community Management, DM Sales Automation & Engagement",
    "Weekly Analytics Dashboard & Conversion Attribution Reports",
    "100% Full Account Ownership & Source File Assets"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Share2",
      title: "Omnichannel Social Strategy",
      desc: "Data-driven audience segmentation and brand positioning across Instagram, Meta, LinkedIn, and YouTube."
    },
    {
      step: "02",
      icon: "Sparkles",
      title: "Viral Short-Form Content",
      desc: "Scripting, filming, and editing native 9:16 vertical Reels and Shorts with kinetic animated subtitles."
    },
    {
      step: "03",
      icon: "Target",
      title: "Hyper-Targeted Meta & LinkedIn Ads",
      desc: "Custom audience funnels targeting decision-makers, high-intent buyers, and lookalike customer cohorts."
    },
    {
      step: "04",
      icon: "MessageCircle",
      title: "DM & Community Management",
      desc: "24/7 comment response management, automated Instagram ManyChat DM funnels, and lead capturing."
    },
    {
      step: "05",
      icon: "BarChart3",
      title: "Conversion Attribution Tracking",
      desc: "Server-side Meta Conversions API (CAPI) and Google Analytics 4 (GA4) custom event tracking."
    },
    {
      step: "06",
      icon: "Zap",
      title: "Weekly Performance Audits",
      desc: "Live Looker Studio dashboards tracking Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), and CTR."
    }
  ];

  const genericCons = [
    "Random un-planned posts without brand guidelines or conversion strategy",
    "Stock image graphics that fail to capture audience attention",
    "No paid ad funnels or retargeting setup, relying only on low organic reach",
    "Ignored DM inquiries and un-replied customer comments losing sales",
    "Vague monthly reports showing vanity metrics without sales attribution"
  ];

  const digiworqPros = [
    "Structured 30-day content calendar with original brand graphics & video reels",
    "High-converting Meta & LinkedIn ad funnels with 4.2x average ROAS returns",
    "Automated Instagram DM sales funnels & 24/7 community management",
    "Server-side Meta CAPI & GA4 custom conversion event setup",
    "Transparent weekly Looker Studio dashboards tracking exact sales revenue"
  ];

  const process = [
    { step: "01", title: "Audit & Strategy", desc: "Analyzing current social channels, target demographics & competitor ads." },
    { step: "02", title: "Content & Creatives", desc: "Designing 30-day content grid calendars, reels & ad copy." },
    { step: "03", title: "Campaign Launch", desc: "Setting up Meta CAPI pixel tracking & running A/B tested ad sets." },
    { step: "04", title: "Scale & Optimize", desc: "Scaling top-performing ad creatives & delivering weekly ROAS reports." }
  ];

  const faqs = [
    {
      q: "Which social media platforms do you manage for business growth?",
      a: "We manage Instagram, Meta (Facebook), LinkedIn, YouTube, Twitter (X), and Pinterest tailored to your B2B or B2C target audience."
    },
    {
      q: "Do you create the graphics, video reels, and write the post captions?",
      a: "Yes! Our package is 100% end-to-end turnkey: graphic design, video editing, caption copywriting, hashtag strategy, and scheduling."
    },
    {
      q: "How soon can we expect to see organic reach and ad sales growth?",
      a: "Paid ad campaigns deliver leads and sales within 48 to 72 hours of launch, while organic brand reach scales compound growth over 30 to 60 days."
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
            <span className="bc-current">Social Media Marketing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Social Growth Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Social Media Marketing</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Build brand authority, scale organic followers, and drive high-converting paid ad sales with Digiworq’s performance social media marketing campaigns across Instagram, Meta, and LinkedIn.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Start Marketing Campaign</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <MarketingRoasWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Social Campaign Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Share2 size={16} color="#10B981" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Social Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Social Growth Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Omnichannel strategy, viral video reels, and Meta CAPI conversion attribution tracking.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Share2;
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
              Generic Social Posting vs. <span className="highlight-yellow-glow">Digiworq ROAS Growth Engine</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why growth brands choose Digiworq performance marketing over basic social media management.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Basic Social Posting</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unoptimized Content
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
                  ★ Digiworq Growth Engine
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#10B981' }}>
                Omnichannel ROAS Growth
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
                  <span>Start Marketing Campaign</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Social Growth Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>4.2x</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Average Campaign ROAS</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>300+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Social Campaigns Scaled</div>
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
            Powered By Official Ads Manager Tools & Analytics Software
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Meta Business Suite', 'LinkedIn Campaign Manager', 'Google Analytics 4', 'Looker Studio', 'ManyChat Automation', 'Hootsuite Enterprise'].map((tool, idx) => (
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
              Ready to Scale Your <span style={{ color: '#10B981' }}>Social Media Sales?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom social growth audit, content calendar roadmap, and ROAS estimate today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Start Marketing Campaign</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
