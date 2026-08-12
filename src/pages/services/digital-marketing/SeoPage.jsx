import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function SeoRankWidget() {
  const [keyword, setKeyword] = useState('Best Digital Marketing Agency');

  return (
    <div className="custom-widget-card marketing-calculator-box">
      <div className="widget-header-row">
        <Icons.Search size={20} color="#3B82F6" />
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
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
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
    "Technical SEO Audit & Site Architecture",
    "Keyword Research & Competitor Analysis",
    "On-Page Optimization & Meta Tag Strategy",
    "Content Marketing & Blog SEO",
    "Google Business Profile & Local SEO",
    "Monthly Rankings & Traffic Reports"
  ];

  const pillars = [
    {
      step: "01",
      icon: "TrendingUp",
      title: "Best SEO Companies",
      desc: "As one of the growing SEO companies in Bangalore, Digiworq helps businesses improve search rankings through keyword optimization, technical SEO and performance tracking."
    },
    {
      step: "02",
      icon: "FileText",
      title: "On-Page SEO",
      desc: "We optimize website structure, content, meta tags, internal linking and keywords for search engine visibility and user experience."
    },
    {
      step: "03",
      icon: "Settings",
      title: "Technical SEO",
      desc: "We improve website speed, indexing, mobile responsiveness, crawlability and technical performance for better search rankings."
    },
    {
      step: "04",
      icon: "MapPin",
      title: "Local SEO Services",
      desc: "We increase local search visibility through Google Business Profile optimization, local keyword targeting and map ranking strategies."
    },
    {
      step: "05",
      icon: "Key",
      title: "Keyword Research & Strategy",
      desc: "We identify high-performing keywords and search trends to improve website traffic and lead generation for your business."
    },
    {
      step: "06",
      icon: "BarChart2",
      title: "SEO Analytics & Reporting",
      desc: "We track keyword rankings, website performance, organic traffic and campaign growth through detailed SEO reports."
    }
  ];

  const faqs = [
    {
      q: 'What search engine optimization services does Digiworq provide?',
      a: 'We provide on-page SEO, technical SEO, local SEO, keyword research, content optimization, backlink strategies and SEO reporting services designed to meet the needs of each business.'
    },
    {
      q: 'Why is search engine optimization important for businesses?',
      a: 'SEO helps businesses improve visibility, increase organic traffic, generate leads and build long-term digital growth.'
    },
    {
      q: 'Do you provide SEO services for local businesses in Bangalore?',
      a: 'Yes we provide SEO services including Google Business Profile optimization, local keyword targeting and map ranking strategies for local businesses.'
    },
    {
      q: 'Can Digiworq improve website rankings on Google?',
      a: 'Yes our SEO strategies focus on improving keyword rankings, technical performance and search engine visibility using proven SEO methods.'
    },
    {
      q: 'Why choose Digiworq as a search engine optimization agency in Bangalore?',
      a: 'Digiworq offers customized SEO strategies, experienced SEO professionals, transparent reporting and performance-driven optimization solutions for businesses and brands.'
    }
  ];

  return (
    <div className="service-page-root">
      {/* Hero Section — matches Social Media Marketing premium layout */}
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
                <span>SEO Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Search Engine Optimization</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides SEO services in Bangalore designed to improve website rankings, increase organic traffic and generate quality leads. Our experts create strategies focused on long-term growth and ethical, result-driven SEO practices.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get SEO Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="search-engine-optimization" title="SEO & Rankings" />
              <SeoRankWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>SEO Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Search size={16} color="#3B82F6" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core SEO Pillars Bento Grid */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">SEO Growth Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Keyword research, on-page optimization, technical SEO and conversion-focused reporting.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Search;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(59,130,246,0.4)', color: '#3B82F6', background: 'rgba(59,130,246,0.12)' }}>
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
          <h2 className="process-main-title">Grow Your Business with <span className="highlight-yellow-glow">Expert SEO</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our SEO team help your business rank higher, attract more visitors, and generate quality leads.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start SEO Today</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
