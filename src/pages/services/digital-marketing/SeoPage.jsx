import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function SeoRankWidget() {
  const [keyword, setKeyword] = useState('Best Digital Marketing Agency');

  return (
    <div className="custom-widget-card marketing-calculator-box">
      <div className="widget-header-row">
        <Icons.Search size={20} color="#10B981" />
        <span className="widget-title-text">Google Search Rank Inspector</span>
      </div>
      <p className="widget-subdesc">Simulate Google SERP Rank #1 tracking for high-intent keywords:</p>

      <div className="budget-slider-row" style={{ marginTop: '16px' }}>
        <div className="slider-label-flex">
          <span>Target Keyword:</span>
          <strong>{keyword}</strong>
        </div>
      </div>

      <div className="roas-metrics-card">
        <div className="roas-stat">
          <span className="roas-title">Google SERP Position</span>
          <span className="roas-val green-glow">Rank #1</span>
        </div>
        <div className="roas-stat">
          <span className="roas-title">Est. Monthly Organic Traffic</span>
          <span className="roas-val yellow-glow">12,500 Visits</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        {['Best Digital Marketing Agency', 'SEO Services Bangalore', 'Video Production Studio'].map((k) => (
          <button key={k} className={`res-pill ${keyword === k ? 'active' : ''}`} onClick={() => setKeyword(k)}>
            {k}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SeoPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Technical Core Web Vitals & Google Crawlability Audit",
    "High-Intent Buyer Keyword Research & Mapping Strategy",
    "On-Page Content Optimization & Schema Structured Data",
    "High-Authority Backlink Building & Digital PR Outreach",
    "Google My Business (GMB) & Local Map Pack Optimization",
    "Transparent Monthly Rank & Organic Traffic Reports"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Search",
      title: "Technical SEO & Speed Audit",
      desc: "Fixing crawl errors, broken redirects, XML sitemaps, and Core Web Vitals (LCP, INP, CLS) for Google compliance."
    },
    {
      step: "02",
      icon: "Target",
      title: "Buyer-Intent Keyword Research",
      desc: "Mapping high-conversion transactional keywords with low competition to dominate Google Page 1."
    },
    {
      step: "03",
      icon: "FileText",
      title: "On-Page & Schema Markup",
      desc: "Optimizing title tags, H1 headers, interlinking, and JSON-LD schema for rich snippet search results."
    },
    {
      step: "04",
      icon: "Globe",
      title: "High-Authority Backlink PR",
      desc: "Earning white-hat editorial backlinks from domain authority 60+ industry blogs and press publications."
    },
    {
      step: "05",
      icon: "MapPin",
      title: "Local SEO & Google Maps",
      desc: "Optimizing Google My Business profile, local citations, and geo-targeted reviews to win the Local 3-Pack."
    },
    {
      step: "06",
      icon: "TrendingUp",
      title: "GA4 & Rank Tracking",
      desc: "Real-time Looker Studio dashboards tracking organic keyword ranks, impressions, and form conversion leads."
    }
  ];

  const genericCons = [
    "Black-hat spam link building that risks Google penalty manual actions",
    "Targeting vanity keywords with high search volume but zero buying intent",
    "Ignoring site speed and mobile technical errors that ruin user experience",
    "No local Google My Business optimization, losing nearby customer calls",
    "Vague monthly PDF reports showing impressions without organic lead metrics"
  ];

  const digiworqPros = [
    "White-hat ethical SEO strategies guaranteed to protect domain safety",
    "Focus on high-converting transactional buyer-intent keywords",
    "Technical Core Web Vitals optimization & JSON-LD schema markup",
    "High DA 60+ editorial backlink outreach & digital PR distribution",
    "Transparent Looker Studio dashboards tracking organic leads & revenue"
  ];

  const process = [
    { step: "01", title: "Technical Audit", desc: "Auditing site speed, crawlability, indexing errors & keyword gaps." },
    { step: "02", title: "Keyword & On-Page", desc: "Optimizing headers, meta tags, schema markup & internal links." },
    { step: "03", title: "Backlinks & Local", desc: "Earning DA 60+ editorial backlinks & optimizing Google Maps GMB." },
    { step: "04", title: "Rank & Lead Growth", desc: "Tracking keyword rank movements, organic traffic & lead conversions." }
  ];

  const faqs = [
    {
      q: "How long does it take to rank on Google Page 1 with SEO?",
      a: "Initial keyword movements appear within 60 to 90 days, with significant Page 1 organic traffic and lead growth achieved between 4 to 6 months."
    },
    {
      q: "Do you use white-hat safe SEO techniques?",
      a: "100% white-hat! We adhere strictly to Google Search Essentials (Webmaster Guidelines) to ensure your website gains long-term sustainable rankings."
    },
    {
      q: "Will SEO help our local Bangalore business show up on Google Maps?",
      a: "Yes! Our Local SEO service optimizes your Google My Business profile and local citations to rank in the coveted Google Local 3-Pack map results."
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
            <span className="bc-current">Search Engine Optimization</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Google Rank #1 Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">SEO Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Dominate Google search results and capture high-intent buyer traffic. Digiworq delivers technical SEO audits, buyer keyword targeting, high-authority backlink PR, and local map pack rankings.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Free SEO Audit</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="search-engine-optimization" title="Search Engine Optimization" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>SEO Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Search size={16} color="#10B981" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core SEO Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">SEO Ranking Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Technical Core Web Vitals, buyer-intent keyword mapping, and DA 60+ backlink PR.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Search;
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
              Spammy Black-Hat SEO vs. <span className="highlight-yellow-glow">Digiworq Ethical Organic Growth</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why growth companies choose Digiworq white-hat SEO for sustainable Rank 1 traffic.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Black-Hat SEO Tactics</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Risky Unsafe SEO
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
                  ★ Digiworq White-Hat Engine
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#10B981' }}>
                Sustainable Google Rank #1 SEO
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
                  <span>Request Free SEO Audit</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">SEO Ranking Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>250+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Keywords Ranked #1</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>3.8x</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Organic Traffic Growth</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>DA 60+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Editorial Backlink Quality</div>
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
            Powered By Enterprise SEO Tools & Google Audit Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Ahrefs Enterprise', 'SEMrush Pro', 'Screaming Frog SEO', 'SurferSEO NLP', 'Google Search Console', 'Lighthouse Auditor'].map((tool, idx) => (
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
              Ready to Rank <span style={{ color: '#10B981' }}>#1 on Google?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a free technical SEO audit, competitor keyword gap analysis, and growth roadmap today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Free SEO Audit</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
