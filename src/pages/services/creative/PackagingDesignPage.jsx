import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function PackagingInspectorWidget() {
  const [activeBox, setActiveBox] = useState('Rigid Retail Box');

  const types = {
    'Rigid Retail Box': {
      material: '1200 GSM Matte Rigid Board',
      finish: 'Gold Foil Stamping + Embossing',
      dieline: 'Custom 3D Dieline CAD',
      color: '#F5B800'
    },
    'Eco Pouch & Label': {
      material: 'Recyclable Kraft Foil Pouch',
      finish: 'Soft-Touch Matte Varnish',
      dieline: 'Ziplock Tear-Notch Dieline',
      color: '#10B981'
    },
    'E-Commerce Shipping Box': {
      material: 'E-Flute Heavy Duty Corrugated',
      finish: 'Inside Pattern Flexo Printing',
      dieline: 'Self-Sealing Peel & Strip',
      color: '#A068FF'
    }
  };

  const curr = types[activeBox];

  return (
    <div className="custom-widget-card creative-widget-box" style={{ background: 'rgba(11, 15, 25, 0.95)', border: `1px solid ${curr.color}55`, padding: '24px', borderRadius: '20px' }}>
      <div className="widget-header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Icons.Box size={22} color={curr.color} />
          <span className="widget-title-text" style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem' }}>3D Packaging & Dieline Inspector</span>
        </div>
        <span style={{ background: `${curr.color}22`, border: `1px solid ${curr.color}66`, color: curr.color, fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
          3D Dieline Studio
        </span>
      </div>
      
      <p className="widget-subdesc" style={{ color: '#9CA3AF', fontSize: '0.88rem', marginBottom: '16px' }}>
        Select packaging format to inspect material GSM, tactile finishes, and 3D dieline specs:
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {Object.keys(types).map((t) => (
          <button
            key={t}
            onClick={() => setActiveBox(t)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: activeBox === t ? `1.5px solid ${types[t].color}` : '1px solid rgba(255,255,255,0.12)',
              background: activeBox === t ? `${types[t].color}22` : 'rgba(255,255,255,0.04)',
              color: activeBox === t ? types[t].color : '#9CA3AF',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {t}
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
            <Icons.Package size={30} color="#FFFFFF" />
          </div>
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 900, margin: 0 }}>
              {activeBox}
            </h4>
            <span style={{ color: curr.color, fontWeight: 700, fontSize: '0.85rem' }}>
              {curr.finish}
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '12px' }}>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Paper Substrate</span>
            <strong style={{ color: '#E2E8F0', fontSize: '0.85rem' }}>{curr.material}</strong>
          </div>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Dieline CAD File</span>
            <strong style={{ color: curr.color, fontSize: '0.85rem' }}>{curr.dieline}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.82rem', fontWeight: 700 }}>
            <Icons.CheckCircle2 size={16} />
            <span>Print Press Ready Artwork Files</span>
          </div>
          <span style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>CMYK · Spot UV · AI</span>
        </div>
      </div>
    </div>
  );
}

export default function PackagingDesignPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "3D Structural Box, Bottle, Can & Pouch Packaging Design",
    "Precise Vector Dieline CAD Files (Cut, Crease, Perforation Lines)",
    "Tactile Finishes Specification (Gold Foil, Spot UV, Debossing, Embossing)",
    "FSSAI, FDA, Barcode & Mandatory Legal Regulatory Compliance Layouts",
    "High-Resolution 3D Photorealistic Renderings for E-Commerce Listing",
    "100% Press-Ready CMYK PDF & Layered Adobe Illustrator Source Files"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Box",
      title: "Shelf-Impact Visual Design",
      desc: "Bold graphic typography and color palettes engineered to grab shopper attention instantly on retail shelves."
    },
    {
      step: "02",
      icon: "Scissors",
      title: "Precision CAD Dielines",
      desc: "Micrometer-accurate dielines matching manufacturer box dimensions with bleed, fold, and glue-flap specs."
    },
    {
      step: "03",
      icon: "Sparkles",
      title: "Tactile Special Effects",
      desc: "Designing Metallic Foil Stamping, Spot Gloss UV, Soft-Touch Matte Varnish, and Embossed textures."
    },
    {
      step: "04",
      icon: "ShieldCheck",
      title: "Regulatory Compliance",
      desc: "Ensuring FSSAI/FDA nutritional tables, ingredients, net weight, barcodes, and recycling symbols meet laws."
    },
    {
      step: "05",
      icon: "Camera",
      title: "3D Photorealistic Renders",
      desc: "Creating stunning 3D product renders for Amazon, Shopify, and social media ads before printing."
    },
    {
      step: "06",
      icon: "CheckCircle",
      title: "Press-Ready Print Supervision",
      desc: "Delivering press-ready CMYK PDF files with embedded fonts, spot channels, and printer handoff guidance."
    }
  ];

  const genericCons = [
    "Dielines with inaccurate dimensions causing overlapping folds and print ruined boxes",
    "RGB color artwork that prints dull, faded, and inaccurate on paper stock",
    "Missing mandatory FSSAI/FDA regulatory information leading to product recall penalties",
    "Low-quality flat 2D previews that don't reveal how the physical box looks in 3D",
    "No press supervision, leaving you stranded when printers ask for spot color channels"
  ];

  const digiworqPros = [
    "Precision CAD dielines verified against physical box manufacturer templates",
    "PANTONE® CMYK spot color separation for vibrant, press-accurate printing",
    "Full regulatory compliance layout covering nutrition facts, barcodes & symbols",
    "Photorealistic 3D studio renders ready for Shopify & Amazon product listings",
    "Complete printer handoff support & 100% press-ready source files"
  ];

  const process = [
    { step: "01", title: "Brief & Dieline CAD", desc: "Obtaining printer dieline specs, box dimensions & substrate materials." },
    { step: "02", title: "3D Concept Creation", desc: "Designing 2-3 distinct front-of-pack visual concepts with tactile finishes." },
    { step: "03", title: "Compliance & Artwork", desc: "Adding barcode, ingredient tables, back-of-pack copy & spot UV layers." },
    { step: "04", title: "Press Handoff", desc: "Delivering CMYK press-ready PDFs, 3D renders & printer guidance." }
  ];

  const faqs = [
    {
      q: "Do you create the packaging dieline CAD templates or do we provide them?",
      a: "Both! We can build custom dieline CAD templates from scratch based on your box measurements, or work directly with dielines provided by your packaging manufacturer."
    },
    {
      q: "Can you provide 3D product mockups for our Shopify website?",
      a: "Yes! We create 4K ultra-photorealistic 3D renders of your packaging (boxes, bottles, pouches) perfect for e-commerce stores, catalog covers, and social media ads."
    },
    {
      q: "Will the final artwork be ready to send straight to the printing press?",
      a: "Yes, 100%! We supply press-ready CMYK PDF files with outlines, bleeds, spot colors (foil/UV layers), and high-resolution links."
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
            <span className="bc-current">Packaging Design</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>3D Packaging & Dieline Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Packaging Design</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Command retail shelf attention and unboxing delight. Digiworq creates 3D structural packaging, precision CAD dielines, tactile foil finishes, and 100% press-ready print artwork.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Start Packaging Project</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="package-designing" title="Packaging Design" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Packaging Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Box size={16} color="#F5B800" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Packaging Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Packaging Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Precision CAD dielines, tactile gold foil finishes, and FSSAI/FDA legal compliance.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Box;
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
              Flawed Dielines vs. <span className="highlight-yellow-glow">Digiworq 3D Precision Packaging</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why retail & D2C brands choose Digiworq press-ready packaging design.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Flawed Unoptimized Packaging</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Print & Dieline Errors
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
                  ★ Digiworq Packaging Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#F5B800' }}>
                Press-Ready 3D Packaging
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
                  <span>Start Packaging Project</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Packaging Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>150+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Retail Products Launched</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>100%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Press-Ready CMYK Dielines</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>4K 3D</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Photorealistic Renders</div>
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
            Powered By 3D CAD Packaging Tools & Press Color Separation
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Esko Studio 3D', 'Adobe Illustrator CC', 'PANTONE® Fashion & Home', 'Cinema 4D Packaging', 'ArtiosCAD Dielines', 'KeyShot Render'].map((tool, idx) => (
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
              Ready to Launch Your <span style={{ color: '#F5B800' }}>3D Packaging?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom packaging design proposal, 3D mockup breakdown, and dieline audit today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Start Packaging Project</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
