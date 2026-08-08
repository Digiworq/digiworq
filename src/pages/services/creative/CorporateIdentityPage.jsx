import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function CorporateIdentityWidget() {
  const [activeAsset, setActiveAsset] = useState('Executive Stationery');

  const assets = {
    'Executive Stationery': {
      title: 'Letterhead & Envelope Suite',
      desc: '120 GSM Cotton Paper with Foil Embossed Seal',
      format: 'Print CMYK Vector',
      color: '#F5B800'
    },
    'Metal Business Cards': {
      title: 'NFC Stainless Steel Card',
      desc: 'Matte Black Steel with Laser Engraved QR',
      format: 'Digital Vector CAD',
      color: '#A068FF'
    },
    'Corporate Presentation': {
      title: 'Pitch Deck & Report Deck',
      desc: '16:9 40+ Slide Template for Keynote & PowerPoint',
      format: 'PPTX / Google Slides',
      color: '#10B981'
    }
  };

  const curr = assets[activeAsset];

  return (
    <div className="custom-widget-card creative-widget-box" style={{ background: 'rgba(11, 15, 25, 0.95)', border: `1px solid ${curr.color}55`, padding: '24px', borderRadius: '20px' }}>
      <div className="widget-header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Icons.Briefcase size={22} color={curr.color} />
          <span className="widget-title-text" style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem' }}>Corporate Identity & Collateral Studio</span>
        </div>
        <span style={{ background: `${curr.color}22`, border: `1px solid ${curr.color}66`, color: curr.color, fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
          Identity Inspector
        </span>
      </div>
      
      <p className="widget-subdesc" style={{ color: '#9CA3AF', fontSize: '0.88rem', marginBottom: '16px' }}>
        Select corporate identity asset to inspect paper stock, foil finishes, and master formats:
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {Object.keys(assets).map((a) => (
          <button
            key={a}
            onClick={() => setActiveAsset(a)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: activeAsset === a ? `1.5px solid ${assets[a].color}` : '1px solid rgba(255,255,255,0.12)',
              background: activeAsset === a ? `${assets[a].color}22` : 'rgba(255,255,255,0.04)',
              color: activeAsset === a ? assets[a].color : '#9CA3AF',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {a}
          </button>
        ))}
      </div>

      <div 
        style={{ 
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)', 
          border: `1.5px solid ${curr.color}55`, 
          borderRadius: '16px', 
          padding: '24px',
          boxShadow: `0 16px 40px ${curr.color}20`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: `linear-gradient(135deg, ${curr.color} 0%, #0F172A 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icons.Briefcase size={30} color="#FFFFFF" />
          </div>
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 900, margin: 0 }}>
              {curr.title}
            </h4>
            <span style={{ color: curr.color, fontWeight: 700, fontSize: '0.85rem' }}>
              {curr.desc}
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '12px' }}>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Brand Alignment</span>
            <strong style={{ color: '#E2E8F0', fontSize: '0.85rem' }}>Executive Enterprise Standard</strong>
          </div>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Master Format</span>
            <strong style={{ color: curr.color, fontSize: '0.85rem' }}>{curr.format}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.82rem', fontWeight: 700 }}>
            <Icons.CheckCircle2 size={16} />
            <span>Complete Corporate Brand Kit</span>
          </div>
          <span style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>AI · PPTX · PDF · EPS</span>
        </div>
      </div>
    </div>
  );
}

export default function CorporateIdentityPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Premium Executive Business Cards (Standard, Embossed & Metal NFC Kits)",
    "Official Corporate Letterheads, DL Envelopes & Pocket Presentation Folders",
    "40+ Slide Master Corporate Pitch Deck (PowerPoint, Keynote & Google Slides)",
    "Employee ID Badges, Lanyards, Branded Merch & Swag Item Guidelines",
    "Digital Email Signatures (HTML & Responsive Desktop/Mobile Templates)",
    "Complete Vector Master Source Files & Print Press Production Specs"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Briefcase",
      title: "Executive Stationery Design",
      desc: "Business cards, letterheads, and envelopes crafted on high-GSM cotton paper with foil stamping."
    },
    {
      step: "02",
      icon: "Presentation",
      title: "Investor Pitch Decks",
      desc: "40+ slide master presentation templates designed to impress venture capitalists and enterprise clients."
    },
    {
      step: "03",
      icon: "Mail",
      title: "HTML Email Signatures",
      desc: "Clickable, responsive HTML email signature code compatible with Outlook, Gmail, and Apple Mail."
    },
    {
      step: "04",
      icon: "Award",
      title: "Corporate Swag & Merchandise",
      desc: "Branded hoodies, notebooks, metal pens, and water bottles adhering to strict brand logo guidelines."
    },
    {
      step: "05",
      icon: "FileCheck",
      title: "Digital Document Templates",
      desc: "Formatted Microsoft Word, Google Docs, invoice, and quotation templates matching brand typography."
    },
    {
      step: "06",
      icon: "Shield",
      title: "Enterprise Brand Guidelines",
      desc: "Comprehensive manual detailing corporate identity standards for internal teams and vendors."
    }
  ];

  const genericCons = [
    "Inconsistent business cards and letterheads with mismatching colors and fonts",
    "Boring PowerPoint pitch decks with plain text that fail to close investor funding",
    "Broken email signatures displaying red cross image icons on recipient phones",
    "Unoptimized stationery files rejected by commercial printing presses",
    "No standardized invoice or quote templates, looking unprofessional to clients"
  ];

  const digiworqPros = [
    "Unified corporate identity system ensuring 100% brand consistency across all touchpoints",
    "40+ Slide investor-ready pitch decks built for PowerPoint, Keynote & Google Slides",
    "Tested HTML responsive email signatures with live clickable social & phone links",
    "Press-ready CMYK printer files with spot colors and embossed foil specifications",
    "Custom Word, Docs & PDF invoice templates tailored for everyday enterprise business use"
  ];

  const process = [
    { step: "01", title: "Brand Audit & Specs", desc: "Reviewing brand guidelines, corporate stationery requirements & slide count." },
    { step: "02", title: "Design Concepts", desc: "Creating initial business card, letterhead & pitch deck visual directions." },
    { step: "03", title: "Template Building", desc: "Building 40+ slide master PowerPoint decks & HTML email signatures." },
    { step: "04", title: "Final Handoff", desc: "Delivering editable PPTX files, HTML signatures, print PDFs & source AI files." }
  ];

  const faqs = [
    {
      q: "What software will our corporate pitch deck be delivered in?",
      a: "We deliver master presentation decks in Microsoft PowerPoint (.pptx), Google Slides, and Apple Keynote, along with a PDF version."
    },
    {
      q: "Do the email signatures work across Microsoft Outlook and Apple Mail?",
      a: "Yes! We write clean, responsive HTML code with hosted images to guarantee your email signatures display perfectly across Outlook, Gmail, and mobile apps."
    },
    {
      q: "Can you assist with physical printing of business cards and letterheads?",
      a: "Yes! We provide complete press supervision, paper GSM selection, and direct coordination with local Bangalore commercial print houses."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-creative">
      {/* 1. Hero Section */}
      <section className="service-landing-hero hero-theme-creative">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Creative</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Corporate Identity</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Enterprise Identity Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Corporate Identity</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Establish an undeniable enterprise presence. Digiworq designs luxury business cards, executive stationery suites, 40+ slide investor pitch decks, and HTML email signatures.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Build Corporate Identity</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="ppt-design" title="Corporate Identity" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Corporate Identity Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Briefcase size={16} color="#F5B800" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Corporate Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Corporate Identity Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Executive stationery, 40+ slide investor pitch decks, and responsive HTML email signatures.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Briefcase;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(245, 184, 0, 0.4)', color: '#F5B800', background: 'rgba(245, 184, 0, 0.12)' }}>
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
              Mismatching Stationery vs. <span className="highlight-yellow-glow">Digiworq Unified Enterprise Identity</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why leading corporations & startups choose Digiworq enterprise corporate identity.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Mismatching Corporate Assets</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unprofessional Identity
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

            <div className="comparison-card-winner" style={{ borderColor: '#F5B800' }}>
              <div className="comparison-card-header">
                <span className="comparison-badge-winner" style={{ borderColor: '#F5B800', color: '#F5B800', background: 'rgba(245, 184, 0, 0.15)' }}>
                  ★ Digiworq Identity Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#F5B800' }}>
                Unified Enterprise System
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
                  <span>Build Corporate Identity</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Identity Pipeline</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {process.map((p, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)', 
                  border: '1px solid rgba(245, 184, 0, 0.3)', 
                  borderRadius: '20px', 
                  padding: '32px 28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <span style={{ background: '#F5B800', color: '#111827', fontWeight: 900, fontSize: '0.9rem', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>200+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Enterprise Brands Crafted</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>40+ Slide</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Master Pitch Deck Decks</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>HTML Responsive</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Email Signature Code</div>
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
            Powered By Official Presentation & Graphic Design Software
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Adobe InDesign CC', 'Microsoft PowerPoint Enterprise', 'Google Slides API', 'Figma Pitch Decks', 'Adobe Illustrator CC', 'HTML5 Email Code'].map((tool, idx) => (
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
                    <Icons.ChevronDown size={22} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#F5B800' }} />
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
              Ready to Upgrade Your <span style={{ color: '#F5B800' }}>Corporate Identity?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom corporate identity proposal, pitch deck breakdown, and timeline today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Build Corporate Identity</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
