import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function BindingFinishingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Hardcover Case Binding & PUR Perfect Binding",
    "Twin-Loop Wire-O & Spiral Coil Binding",
    "Saddle-Stitched Booklets & Product Catalogs",
    "Thermal Matte, Gloss & Soft-Touch Velvet Lamination",
    "Corporate Annual Reports & Training Manuals",
    "Precision Creasing, Scoring & Multi-Panel Folding"
  ];

  const pillars = [
    {
      step: "01",
      icon: "BookOpen",
      title: "Hardcover & Perfect Book Binding",
      desc: "PUR perfect binding and luxury hardbound case binding for published books, coffee table albums, annual reports, and corporate profiles with durable lay-flat spines."
    },
    {
      step: "02",
      icon: "Layers",
      title: "Spiral & Twin-Loop Wire-O Binding",
      desc: "Flexible 360-degree flat-opening binding for training manuals, student workbooks, custom journals, desk planners, and executive proposal decks."
    },
    {
      step: "03",
      icon: "FileText",
      title: "Saddle-Stitched Catalogs & Booklets",
      desc: "High-speed automated spine wire stapling for sales brochures, product guides, magazines, company newsletters, and event programs."
    },
    {
      step: "04",
      icon: "Sparkles",
      title: "Laminating & Protective Coating",
      desc: "Enhance documents with velvet soft-touch, anti-scuff matte, high-gloss thermal laminations, and flood UV coatings for moisture and tear resistance."
    },
    {
      step: "05",
      icon: "Scissors",
      title: "Precision Cutting, Folding & Creasing",
      desc: "Computerized trimming, gate folds, accordion folds, and fiber-friendly creasing matrixes that eliminate paper cracking along spine edges."
    },
    {
      step: "06",
      icon: "Folder",
      title: "Custom Presentation Portfolios",
      desc: "Bespoke die-cut pocket folders, screw-post portfolios, custom tab dividers, and custom-fabricated slipcases for high-stakes corporate pitches."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.BookOpen size={22} color="#14B8A6" />,
      heading: "Book Binding Services in Bangalore",
      body: "We provide complete binding solutions for publishers, enterprises, and educational institutions, engineered for structural durability, crisp alignment, and long shelf life."
    },
    {
      icon: <Icons.FileCheck size={22} color="#14B8A6" />,
      heading: "Corporate Report & Proposal Binding",
      body: "Transform raw printouts into executive board-ready presentation documents with thermal tape, velobind, comb binding, or hardbound foil-stamped covers."
    },
    {
      icon: <Icons.ShieldCheck size={22} color="#14B8A6" />,
      heading: "Thermal Lamination & Surface Sealing",
      body: "Protect high-touch marketing collateral from grease, fingerprints, water spills, and scuffs with our heavy-gauge commercial laminating lines."
    },
    {
      icon: <Icons.Award size={22} color="#14B8A6" />,
      heading: "Custom Educational & Manual Binding",
      body: "High-volume workbook and training guide binding with tear-resistant covers, customized tab dividers, and sturdy double-wire loops for daily heavy usage."
    }
  ];

  const whyChooseBullets = [
    "Comprehensive binding methods: Perfect, Hardcover, Wire-O, Spiral, and Saddle-Stitch.",
    "Industrial automated binding lines ensuring fast turnaround on large print runs.",
    "Premium finishing options: Velvet soft-touch lamination, UV varnishing & edge trimming.",
    "Strict quality inspection ensuring clean spine glue, square corners, and page alignment.",
    "Bespoke customized sizes, custom tab indexing, and luxury presentation packaging.",
    "Reliable doorstep delivery and bulk logistics support across Bangalore."
  ];

  const faqs = [
    {
      q: 'What binding services does Digiworq provide?',
      a: 'We provide PUR perfect binding, hardcover case binding, saddle stitching, twin-loop wire-o binding, plastic coil spiral binding, comb binding, screw-post binding, and bespoke presentation document binding.'
    },
    {
      q: 'What is spiral binding used for?',
      a: 'Spiral and wire-o binding are ideal for documents that need to lay completely flat or fold 360 degrees back-to-back, such as training manuals, notebooks, employee handbooks, recipe books, planners, and corporate presentations.'
    },
    {
      q: 'Do you provide custom binding services in Bangalore?',
      a: 'Yes, we offer customized binding solutions based on your page counts, custom document dimensions, paper GSM preferences, cover stocks (hardbound, softcover, leatherette), and corporate branding requirements.'
    },
    {
      q: 'What print finishing services do you offer?',
      a: 'We provide thermal lamination (matte, gloss, soft-touch velvet), UV coatings, automated folding, precision trimming, scoring, creasing, corner rounding, hole drilling, and custom pocket folder assembly.'
    },
    {
      q: 'Why choose Digiworq for binding and finishing services in Bangalore?',
      a: 'Digiworq delivers exceptional structural binding durability, automated high-speed finishing machinery, premium presentation quality, and reliable on-time delivery across Bangalore.'
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
            <span className="bc-link-sub">Printing Solutions</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Binding and Finishing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#14B8A6' }}>●</span>
                <span>Post-Press & Binding Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Binding and Finishing Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers professional binding and finishing services in Bangalore that transform loose printed sheets into polished, durable, and presentation-ready books, catalogs, and reports. We help businesses, publishers, and institutions make an unforgettable impression with quality post-press craftsmanship.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Binding Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="binding-and-finishing" title="Binding & Finishing" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Binding Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.BookOpen size={16} color="#14B8A6" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core 6 Pillars Bento Grid */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Binding & Finishing Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From hardcover case binding to velvet-touch lamination — flawless craftsmanship in every bind.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.BookOpen;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(20, 184, 166, 0.4)', color: '#14B8A6', background: 'rgba(20, 184, 166, 0.12)' }}>
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

      {/* Detailed Capabilities Grid */}
      <section className="service-bento-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Precision Book Production & <span className="highlight-yellow-glow">Surface Protection</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Automated PUR gluing lines, multi-panel folding, and velvet soft-touch laminations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(20, 184, 166, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(20, 184, 166, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {sec.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#F8FAFC', fontWeight: 700, margin: 0 }}>
                    {sec.heading}
                  </h3>
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Why Choose Digiworq Box */}
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 100%)',
              border: '1px solid rgba(245, 184, 0, 0.3)',
              borderRadius: '20px',
              padding: '36px 32px',
              boxShadow: '0 0 30px rgba(245, 184, 0, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Icons.Award size={28} color="#F5B800" />
              <h3 style={{ fontSize: '1.4rem', color: '#F5B800', fontWeight: 800, margin: 0 }}>
                Why Choose Digiworq for Binding & Finishing?
              </h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {whyChooseBullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Icons.CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: '1.5' }}>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                  style={{ 
                    background: 'rgba(15, 23, 42, 0.75)', 
                    border: isOpen ? '1px solid rgba(245, 184, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '14px', 
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: isOpen ? '0 8px 30px rgba(245, 184, 0, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ 
                      width: '100%', 
                      padding: '22px 26px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      background: 'transparent', 
                      border: 'none', 
                      color: '#FFFFFF', 
                      fontSize: '1.08rem', 
                      fontWeight: 700, 
                      textAlign: 'left', 
                      cursor: 'pointer',
                      gap: '16px'
                    }}
                  >
                    <span>{faq.q}</span>
                    <Icons.ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#F5B800', flexShrink: 0 }} />
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

      {/* Bottom CTA */}
      <section className="service-bento-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container" style={{ textAlign: 'center', padding: '60px 24px' }}>
          <h2 className="process-main-title">Give Your Publications a <span className="highlight-yellow-glow">Flawless Finish</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our binding and post-press specialists assemble your books, catalogs, and reports with professional elegance.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Binding Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
