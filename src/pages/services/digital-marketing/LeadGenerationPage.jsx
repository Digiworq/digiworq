import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function LeadGenWidget() {
  const [adSpend, setAdSpend] = useState(75000);
  const costPerLead = 250;
  const projectedLeads = Math.round(adSpend / costPerLead);

  return (
    <div className="custom-widget-card marketing-calculator-box">
      <div className="widget-header-row">
        <Icons.UserCheck size={20} color="#10B981" />
        <span className="widget-title-text">B2B & B2C Lead Generation Simulator</span>
      </div>
      <p className="widget-subdesc">Adjust monthly ad budget to simulate qualified customer leads generated:</p>

      <div className="budget-slider-row">
        <div className="slider-label-flex">
          <span>Monthly Ad Budget:</span>
          <strong>₹{adSpend.toLocaleString('en-IN')}</strong>
        </div>
        <input 
          type="range" 
          min="25000" 
          max="500000" 
          step="25000" 
          value={adSpend} 
          onChange={(e) => setAdSpend(Number(e.target.value))} 
          className="budget-range-input"
        />
      </div>

      <div className="roas-metrics-card">
        <div className="roas-stat">
          <span className="roas-title">Est. Cost Per Lead (CPL)</span>
          <span className="roas-val green-glow">₹{costPerLead}</span>
        </div>
        <div className="roas-stat">
          <span className="roas-title">Qualified Leads / Month</span>
          <span className="roas-val yellow-glow">{projectedLeads} Verified Leads</span>
        </div>
      </div>
    </div>
  );
}

export default function LeadGenerationPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "High-Converting B2B & B2C Lead Magnet Landing Pages",
    "Meta Instant Lead Forms & Interactive Quiz Funnels",
    "Zapier & Make.com Automated CRM Lead Syncing (HubSpot/Salesforce)",
    "Real-Time Lead Verification & Phone OTP Validation",
    "Automated SMS & Email Immediate Lead Nurturing Sequences",
    "Weekly Cost Per Lead (CPL) Performance Audit Dashboards"
  ];

  const pillars = [
    {
      step: "01",
      icon: "UserCheck",
      title: "Verified Qualified Lead Funnels",
      desc: "Multi-step lead qualification forms filtering out tire-kickers and capturing high-intent prospects."
    },
    {
      step: "02",
      icon: "Smartphone",
      title: "Meta & LinkedIn Instant Lead Forms",
      desc: "In-app pre-filled lead forms delivering 3x higher conversion rates on mobile devices."
    },
    {
      step: "03",
      icon: "RefreshCw",
      title: "Instant CRM Lead Syncing",
      desc: "Connecting ad lead forms directly to your CRM (HubSpot, Salesforce, Zoho) in under 5 seconds."
    },
    {
      step: "04",
      icon: "MessageSquare",
      title: "Instant Lead Auto-Nurture",
      desc: "Triggering automated WhatsApp messages, SMS alerts, and email welcome packages instantly."
    },
    {
      step: "05",
      icon: "ShieldCheck",
      title: "Phone OTP Lead Verification",
      desc: "Real-time OTP phone number verification ensuring 100% accurate contact details for your sales team."
    },
    {
      step: "06",
      icon: "TrendingUp",
      title: "Cost Per Lead (CPL) Reduction",
      desc: "Relentlessly optimizing ad copy and landing page UX to lower CPL while boosting lead quality."
    }
  ];

  const genericCons = [
    "Low-quality fake leads with wrong phone numbers and invalid email addresses",
    "Manual CSV exports taking hours or days to send leads to your sales team",
    "No qualification questions, flooding your team with cold tire-kickers",
    "Zero follow-up automation, allowing leads to go cold before your team calls",
    "High Cost Per Lead (CPL) burning ad budgets without closed deals"
  ];

  const digiworqPros = [
    "100% Verified customer leads with Phone OTP validation options",
    "Instant 5-second CRM integration to HubSpot, Salesforce & Zoho",
    "Multi-step qualification questions filtering high-intent buyers",
    "Automated instant WhatsApp & Email lead nurturing triggers",
    "Optimized ad funnels delivering 40% lower average Cost Per Lead (CPL)"
  ];

  const process = [
    { step: "01", title: "Funnel Strategy", desc: "Designing lead magnet offers, qualification questions & landing pages." },
    { step: "02", title: "CRM Integration", desc: "Configuring 5-second lead sync to HubSpot/Salesforce & WhatsApp automation." },
    { step: "03", title: "Campaign Launch", desc: "Deploying targeted Meta & Google lead ads with live tracking." },
    { step: "04", title: "Scale & Lead Optimization", desc: "Lowering CPL and delivering weekly verified lead performance audits." }
  ];

  const faqs = [
    {
      q: "How do you ensure the leads generated are genuinely interested buyers?",
      a: "We implement multi-step qualification filters, custom questions, and phone number OTP verification to ensure only genuine, high-intent prospects reach your sales team."
    },
    {
      q: "Can lead notifications be sent immediately to our sales team?",
      a: "Yes! We set up instant integrations using Zapier/Make to send leads to your CRM, WhatsApp, or Email in under 5 seconds so your sales team can call immediately."
    },
    {
      q: "What CRM systems do you integrate lead forms with?",
      a: "We integrate with all major CRMs including HubSpot, Salesforce, Zoho CRM, LeadSquared, Pipedrive, and Google Sheets."
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
            <span className="bc-current">Lead Generation</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Lead Generation Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Lead Generation</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Fill your sales pipeline with qualified customer leads. Digiworq builds high-converting lead magnet funnels, Meta Instant Lead forms, 5-second CRM integrations, and instant WhatsApp auto-nurture.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Qualified Leads</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <LeadGenWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Lead Gen Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.UserCheck size={16} color="#10B981" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Lead Gen Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Lead Gen Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Qualified lead funnels, 5-second CRM sync, and instant WhatsApp nurturing.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.UserCheck;
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
              Cold Fake Leads vs. <span className="highlight-yellow-glow">Digiworq Verified Customer Leads</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why sales teams choose Digiworq verified lead pipelines to close more deals.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Cold Unverified Leads</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Low-Quality Lead Data
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
                  ★ Digiworq Verified Pipeline
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#10B981' }}>
                Verified Qualified Leads
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
                  <span>Get Qualified Leads</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Lead Generation Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>50,000+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Leads Generated</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>&lt; 5 Sec</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Instant CRM Lead Sync</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>-40% CPL</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Cost Per Lead Reduction</div>
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
            Powered By Official CRM & Lead Automation Connectors
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Meta Lead Ads', 'Zapier Automation', 'HubSpot CRM', 'Salesforce Cloud', 'Zoho CRM', 'WhatsApp Business API'].map((tool, idx) => (
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
              Ready to Fill Your <span style={{ color: '#10B981' }}>Sales Pipeline?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom lead generation funnel strategy, CRM integration roadmap, and CPL estimate today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Get Qualified Leads</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
