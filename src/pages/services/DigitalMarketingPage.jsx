import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function MarketingRoiWidget() {
  const [budget, setBudget] = useState(50000);
  const estLeads = Math.floor((budget / 50000) * 180);
  const estRoas = ((budget * 3.8) / 100000).toFixed(1);

  return (
    <div className="custom-widget-card roi-calculator-box">
      <div className="widget-header-row">
        <Icons.TrendingUp size={20} color="#10B981" />
        <span className="widget-title-text">Live ROAS & Lead Growth Estimator</span>
      </div>
      <p className="widget-subdesc">Drag the budget slider to calculate projected campaign performance:</p>
      
      <div className="budget-slider-row">
        <div className="slider-label-row">
          <span>Monthly Ad Spend:</span>
          <span className="slider-val">₹{budget.toLocaleString('en-IN')}</span>
        </div>
        <input 
          type="range" 
          min="25000" 
          max="500000" 
          step="25000" 
          value={budget} 
          onChange={(e) => setBudget(Number(e.target.value))} 
          className="roi-slider-input"
        />
      </div>

      <div className="roi-metrics-grid">
        <div className="metric-box">
          <span className="m-label">Est. High-Intent Leads:</span>
          <span className="m-val yellow">~{estLeads} Leads</span>
        </div>
        <div className="metric-box">
          <span className="m-label">Est. Campaign ROAS:</span>
          <span className="m-val green">{estRoas}x Return</span>
        </div>
      </div>
    </div>
  );
}

export default function DigitalMarketingPage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData['digital-marketing'] || { categoryTitle: "Digital Marketing", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Digital Marketing", overview: "Data-driven marketing and lead growth.", process: [] };

  const deliverables = activeSub.deliverables || [
    "Custom Meta & Google Ad Campaign Setup",
    "High-Converting Landing Page Design & Funnel Engineering",
    "Keyword Research & On-Page / Off-Page SEO Audit",
    "Looker Studio Real-Time Analytics Dashboard",
    "Weekly Campaign Performance & CPL Optimization Reports",
    "A/B Tested Ad Creatives & Conversion Hooks"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Target",
      title: "Hyper-Targeted Audience Funnels",
      desc: "Custom Meta, Google, and LinkedIn audience segments engineered to reach high-intent decision-makers."
    },
    {
      step: "02",
      icon: "TrendingUp",
      title: "Data-Driven ROAS Optimization",
      desc: "Continuous A/B testing of ad copy, hooks, and landing pages ensuring maximum ROI for every ad rupee spent."
    },
    {
      step: "03",
      icon: "BarChart3",
      title: "24/7 Transparent Looker Dashboards",
      desc: "Live analytics tracking cost-per-lead (CPL), click-through rates (CTR), and customer acquisition cost (CAC)."
    },
    {
      step: "04",
      icon: "Award",
      title: "Certified Growth Marketers",
      desc: "Google Ads Certified and Meta Blueprint Certified performance specialists managing your ad spend."
    },
    {
      step: "05",
      icon: "Layers",
      title: "Omnichannel Remarketing Retargeting",
      desc: "Multi-touch remarketing funnels converting bounced website visitors into paying customers."
    },
    {
      step: "06",
      icon: "Zap",
      title: "Fast 24-Hour Lead Generation",
      desc: "Live campaign setup driving qualified leads and phone calls within 24 to 48 hours of launch."
    }
  ];

  const genericCons = [
    "Wasted ad spend targeting broad un-qualified audiences",
    "No conversion tracking or Looker Studio reporting dashboards",
    "Generic ad copy causing high Cost-Per-Click (CPC) and low ROAS",
    "Zero A/B creative testing or landing page optimization",
    "Uncertified account managers burning marketing budgets"
  ];

  const digiworqPros = [
    "Certified Meta & Google performance marketing growth specialists",
    "Laser-targeted custom audience funnels driving high-intent leads",
    "Live 24/7 client dashboard tracking CPL, CPA, and ROAS metrics",
    "Full A/B creative testing & conversion-rate optimized landing pages",
    "Guaranteed lead flow starting within 24 to 48 hours of campaign launch"
  ];

  const processSteps = activeSub.process && activeSub.process.length >= 4 ? [
    {
      step: "01",
      title: activeSub.process[0].title || "Growth Audit & Funnel Setup",
      desc: "We analyze competitor ad strategies, setup tracking pixels, and design high-converting landing pages."
    },
    {
      step: "02",
      title: activeSub.process[1].title || "Campaign Launch & Audience Targeting",
      desc: "Our performance marketers launch targeted Meta/Google ad campaigns with custom hooks and creatives."
    },
    {
      step: "03",
      title: activeSub.process[2].title || "A/B Testing & ROAS Optimization",
      desc: "We continuously test ad copy, eliminate non-performing keywords, and scale winning campaign sets."
    },
    {
      step: "04",
      title: activeSub.process[3].title || "Weekly Reporting & Scaling",
      desc: "You get weekly strategy calls, transparent CPL reporting, and aggressive revenue scaling plans."
    }
  ] : [
    {
      step: "01",
      title: "Growth Audit & Funnel Setup",
      desc: "We analyze competitor ad strategies, setup tracking pixels, and design high-converting landing pages."
    },
    {
      step: "02",
      title: "Campaign Launch & Audience Targeting",
      desc: "Our performance marketers launch targeted Meta/Google ad campaigns with custom hooks and creatives."
    },
    {
      step: "03",
      title: "A/B Testing & ROAS Optimization",
      desc: "We continuously test ad copy, eliminate non-performing keywords, and scale winning campaign sets."
    },
    {
      step: "04",
      title: "Weekly Reporting & Scaling",
      desc: "You get weekly strategy calls, transparent CPL reporting, and aggressive revenue scaling plans."
    }
  ];

  const faqs = activeSub.faqs && activeSub.faqs.length >= 3 ? activeSub.faqs : [
    {
      q: `What is the recommended monthly ad budget for ${activeSub.title}?`,
      a: `We recommend starting with a minimum monthly ad budget of ₹30,000 to ₹50,000 for optimal algorithmic learning and high-intent lead generation.`
    },
    {
      q: "How soon will we see qualified leads?",
      a: "Performance campaigns generate qualified leads within 24 to 48 hours of live launch."
    },
    {
      q: "Do you provide transparent reporting dashboards?",
      a: "Yes! You get access to 24/7 Looker Studio dashboards tracking cost per lead, click-through rates, and ROAS."
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
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Performance Marketing Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Growth Audit</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <MarketingRoiWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Campaign Deliverables & Growth Metrics:</h3>
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

      {/* 2. Modern Bento Grid for Core Marketing Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Growth Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Engineered for maximum lead conversion, high ROAS, and transparent campaign scaling.
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
              Why growth startups trust Digiworq over uncertified agencies.
            </p>
          </div>

          <div className="comparison-cards-grid">
            {/* Left Card: Generic */}
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Uncertified DIY Campaigns</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Wasted Ad Spend & High CPL
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

            {/* Right Card: Digiworq Winner */}
            <div className="comparison-card-winner" style={{ borderColor: '#10B981' }}>
              <div className="comparison-card-header">
                <span className="comparison-badge-winner" style={{ borderColor: '#10B981', color: '#10B981', background: 'rgba(16, 185, 129, 0.15)' }}>
                  ★ Digiworq High-ROAS Growth Engine
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#10B981' }}>
                Data-Driven Campaign Performance
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
                  <span>Scale Your Lead Flow</span>
                  <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Pipeline Section */}
      <section className="digiworq-process-section py-20">
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Our 4-Phase <span className="highlight-yellow-glow">Marketing Growth Pipeline</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {processSteps.map((p, idx) => (
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
      <section className="py-12" style={{ background: 'linear-gradient(180deg, #0B0F19 0%, #05070F 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>50K+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Qualified Leads Generated</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>4.2x</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Average Client ROAS</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>₹10Cr+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Ad Spend Managed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>98%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ad Platforms Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Official Certified Marketing Partners & Analytics Platforms
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Meta Ads Partner', 'Google Ads Certified', 'LinkedIn Ads Engine', 'Looker Studio AI', 'GA4 Analytics', 'HubSpot CRM', 'Klaviyo Email'].map((tool, idx) => (
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
              Ready to Scale Your <span style={{ color: '#10B981' }}>{activeSub.title}?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom performance marketing audit and lead acquisition forecast today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Growth Audit</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
