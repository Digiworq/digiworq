import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function PrintInspectorWidget() {
  const [finish, setFinish] = useState('Gold Foil');

  return (
    <div className="custom-widget-card print-inspector-box">
      <div className="widget-header-row">
        <Icons.Printer size={20} color="#F5B800" />
        <span className="widget-title-text">CMYK Print Finish & Tactile Inspector</span>
      </div>

      <div className="print-card-sample-preview">
        <div className={`sample-card-texture ${finish.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="card-logo-gold">DIGIWORQ</div>
          <div className="card-finish-tag">{finish} Finish</div>
          <span className="paper-gsm-tag">350 GSM Cotton Cardstock</span>
        </div>
      </div>

      <div className="finish-toggle-row">
        {['Gold Foil', 'Spot UV Gloss', 'Deep Embossing'].map((f) => (
          <button key={f} className={`finish-btn ${finish === f ? 'active' : ''}`} onClick={() => setFinish(f)}>
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PrintingSolutionsPage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData['printing-solutions'] || { categoryTitle: "Printing Solutions", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Printing Solutions", overview: "High-precision digital, offset & foil printing.", process: [] };

  const deliverables = activeSub.deliverables || [
    "High-Density 350 GSM Premium Cotton & Silk Cardstock",
    "Metalgold Hot Foil Stamping & Raised Spot UV Gloss",
    "CMYK Pantone® Matched Offset Color Printing",
    "Custom Die-Cut Shapes, Packaging Boxes & Envelopes",
    "Turnkey Print Proofing & Doorstep Bulk Delivery",
    "100% Guaranteed Color Accuracy & Zero Misregistration"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Printer",
      title: "CMYK Pantone® Color Matching",
      desc: "Spectrophotometer calibrated Heidelberg offset presses matching exact PANTONE® brand codes."
    },
    {
      step: "02",
      icon: "Sparkles",
      title: "Tactile Finishes & Hot Foil",
      desc: "Metallic gold/silver foil stamping, raised 3D spot UV gloss, and blind debossing."
    },
    {
      step: "03",
      icon: "Layers",
      title: "350+ GSM Luxury Paper Stocks",
      desc: "Textured linen, recycled kraft, heavy 350 GSM velvet cotton, and metallic pearl board."
    },
    {
      step: "04",
      icon: "Scissors",
      title: "Custom Die-Cut Packaging",
      desc: "Precision laser die-cutting for luxury product boxes, promotional sleeves, and custom business cards."
    },
    {
      step: "05",
      icon: "FileCheck",
      title: "Pre-Press Flight Check",
      desc: "300 DPI vector pre-press flight checks verifying bleeds, CMYK color profiles, and safe margins."
    },
    {
      step: "06",
      icon: "Truck",
      title: "Doorstep Bulk Delivery",
      desc: "Protected waterproof bulk packaging delivered directly to your office or venue in Bangalore."
    }
  ];

  const genericCons = [
    "Faded, washed-out RGB colors printed on low-grade paper",
    "Misaligned bleeding margins resulting in crooked card cuts",
    "Thin 200 GSM flimsy cardstock that tears easily",
    "Foil stamping that peels or flakes off after handling",
    "Delayed delivery dates causing missed event launches"
  ];

  const digiworqPros = [
    "Heidelberg CMYK & Pantone® 100% exact color calibration",
    "Heavy 350 GSM luxury cotton & textured velvet cardstocks",
    "Durametal hot foil stamping & 3D raised spot UV glossing",
    "Precision die-cutting & automated 300 DPI pre-press flight checks",
    "Guaranteed On-Time Doorstep Bulk Delivery across Bangalore"
  ];

  const processSteps = activeSub.process && activeSub.process.length >= 4 ? [
    { step: "01", title: activeSub.process[0].title || "Pre-Press & Proofing", desc: "300 DPI vector flight check & physical sample proofing." },
    { step: "02", title: activeSub.process[1].title || "Plate & CMYK Calibration", desc: "Heidelberg press setup & Pantone color matching." },
    { step: "03", title: activeSub.process[2].title || "Press & Special Finishes", desc: "Offset printing, gold foil stamping & spot UV application." },
    { step: "04", title: activeSub.process[3].title || "Die-Cut & Delivery", desc: "Precision die-cutting, quality inspection & doorstep delivery." }
  ] : [
    { step: "01", title: "Pre-Press & Proofing", desc: "300 DPI vector flight check & physical sample proofing." },
    { step: "02", title: "Plate & CMYK Calibration", desc: "Heidelberg press setup & Pantone color matching." },
    { step: "03", title: "Press & Special Finishes", desc: "Offset printing, gold foil stamping & spot UV application." },
    { step: "04", title: "Die-Cut & Delivery", desc: "Precision die-cutting, quality inspection & doorstep delivery." }
  ];

  const faqs = [
    {
      q: `What is the minimum order quantity for ${activeSub.title}?`,
      a: "Minimum orders start at 250 units for premium business cards and 100 units for custom die-cut packaging boxes."
    },
    {
      q: "Can I inspect a physical sample proof before bulk printing?",
      a: "Yes! We print a physical sample proof with your exact paper stock and foil finish for approval prior to running the bulk press."
    },
    {
      q: "What file formats are required for print production?",
      a: "We accept print-ready vector PDF, AI, or EPS files formatted in CMYK color mode at 300 DPI with 3mm bleeds."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-printing-solutions">
      {/* 1. Hero Section */}
      <section className="service-landing-hero hero-theme-printing-solutions">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Printing Solutions</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Print Press Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Print Proof</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <PrintInspectorWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Print Specs & Physical Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Printer size={16} color="#F5B800" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Print Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Printing Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              CMYK Pantone® color matching, gold foil stamping, and 350 GSM luxury paper stocks.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Printer;
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
              Cheap Local Printers vs. <span className="highlight-yellow-glow">Digiworq Precision Press</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why luxury brands choose Digiworq offset printing over low-grade local print shops.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Cheap Local Print Shops</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Uncalibrated Print Vendors
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
                  ★ Digiworq Press Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#F5B800' }}>
                Heidelberg CMYK & Foil Printing
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
                  <span>Request Print Proof</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Print Production Pipeline</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {processSteps.map((p, idx) => (
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>1M+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Units Printed & Delivered</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>350 GSM</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Heavy Luxury Cardstock</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>100%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Pantone® Color Accuracy</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Print Press Gear Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Heidelberg Press Gear & Pantone® Matching Standards
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Heidelberg Speedmaster', 'PANTONE® Color Matching', 'HP Indigo Digital Press', 'Duplo Booklet Maker', 'Kongsberg Die-Cutter', '3D Spot UV Glosser'].map((tool, idx) => (
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
              Ready to Print Your <span style={{ color: '#F5B800' }}>{activeSub.title}?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom print sample proof and volume price estimate today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Print Proof</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
