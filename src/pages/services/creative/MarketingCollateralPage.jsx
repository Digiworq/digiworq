import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function CollateralInspectorWidget() {
  const [activeFormat, setActiveFormat] = useState('Trifold Brochure');

  const formats = {
    'Trifold Brochure': {
      desc: '300 GSM Art Card with Spot UV & Soft Touch Varnish',
      type: 'Print CMYK Press Ready',
      color: '#F5B800'
    },
    'Trade Show Rollup Banner': {
      desc: '85x200cm Non-Curl Vinyl Standee Banner',
      type: 'Large Format Printing',
      color: '#A068FF'
    },
    'Digital Company Profile': {
      desc: 'Interactive 24-Page PDF with Clickable TOC Links',
      type: 'Digital Interactive PDF',
      color: '#10B981'
    }
  };

  const curr = formats[activeFormat];

  return (
    <div className="custom-widget-card creative-widget-box" style={{ background: 'rgba(11, 15, 25, 0.95)', border: `1px solid ${curr.color}55`, padding: '24px', borderRadius: '20px' }}>
      <div className="widget-header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Icons.FileText size={22} color={curr.color} />
          <span className="widget-title-text" style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem' }}>Marketing Collateral & Print Studio</span>
        </div>
        <span style={{ background: `${curr.color}22`, border: `1px solid ${curr.color}66`, color: curr.color, fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
          Collateral Inspector
        </span>
      </div>
      
      <p className="widget-subdesc" style={{ color: '#9CA3AF', fontSize: '0.88rem', marginBottom: '16px' }}>
        Select collateral format to inspect paper stock GSM, large format resolution & digital links:
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {Object.keys(formats).map((f) => (
          <button
            key={f}
            onClick={() => setActiveFormat(f)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: activeFormat === f ? `1.5px solid ${formats[f].color}` : '1px solid rgba(255,255,255,0.12)',
              background: activeFormat === f ? `${formats[f].color}22` : 'rgba(255,255,255,0.04)',
              color: activeFormat === f ? formats[f].color : '#9CA3AF',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {f}
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
            <Icons.Image size={30} color="#FFFFFF" />
          </div>
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 900, margin: 0 }}>
              {activeFormat}
            </h4>
            <span style={{ color: curr.color, fontWeight: 700, fontSize: '0.85rem' }}>
              {curr.desc}
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '12px' }}>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Resolution Standard</span>
            <strong style={{ color: '#E2E8F0', fontSize: '0.85rem' }}>300 DPI Vector CMYK</strong>
          </div>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Production Standard</span>
            <strong style={{ color: curr.color, fontSize: '0.85rem' }}>{curr.type}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.82rem', fontWeight: 700 }}>
            <Icons.CheckCircle2 size={16} />
            <span>Press Ready Artwork Package</span>
          </div>
          <span style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>AI · INDD · PDF · EPS</span>
        </div>
      </div>
    </div>
  );
}

export default function MarketingCollateralPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Multi-Page Company Profiles, Annual Reports & Product Catalogs",
    "Trifold, Bi-fold & Gatefold Sales Brochures and Product Flyers",
    "Large-Format Trade Show Booth Backdrops, Rollup Banners & Standees",
    "Point-of-Sale (POS) Merchandise Displays & Retail Promotional Posters",
    "Digital Interactive PDFs with Clickable Table of Contents & Links",
    "100% Press-Ready CMYK Master Vector Files (AI, INDD, PDF, EPS)"
  ];

  const pillars = [
    {
      step: "01",
      icon: "BookOpen",
      title: "Company Profiles & Catalogs",
      desc: "Multi-page corporate brochures and product catalogs structured with high-impact visual storytelling."
    },
    {
      step: "02",
      icon: "Maximize",
      title: "Large Format Exhibition Banners",
      desc: "Trade show booth backdrops, standee rollups, and event banners designed at 300 DPI high resolution."
    },
    {
      step: "03",
      icon: "Layers",
      title: "Sales Flyers & Leaflets",
      desc: "High-converting single-sheet flyers, trifold brochures, and product insert cards with clear CTAs."
    },
    {
      step: "04",
      icon: "Smartphone",
      title: "Interactive Digital PDFs",
      desc: "Digital company profile PDFs enhanced with clickable web links, video triggers, and interactive navigation."
    },
    {
      step: "05",
      icon: "Printer",
      title: "Specialty Finishes Layout",
      desc: "Designing spot UV, metallic foil, embossing, and die-cut outlines directly into layered printer artwork."
    },
    {
      step: "06",
      icon: "CheckCircle",
      title: "Commercial Print Supervision",
      desc: "Ensuring CMYK color separation, 3mm printer bleeds, and resolution compliance for zero print flaws."
    }
  ];

  const genericCons = [
    "Low-resolution blurry images that look pixelated when printed on large exhibition standees",
    "Color shifts between computer screen RGB and printed CMYK paper, causing muddy colors",
    "No printer bleed margins, causing white edges when brochures are cut at the bindery",
    "Cramped text layout without proper margins or visual hierarchy, making brochures unreadable",
    "Static PDFs without clickable links, forcing clients to manually type website URLs"
  ];

  const digiworqPros = [
    "Vector high-resolution 300 DPI graphics for crystal-clear large format exhibition banners",
    "PANTONE® CMYK spot color management ensuring vibrant, press-accurate physical printing",
    "Standard 3mm printer bleed and crop marks included on all press-ready artwork",
    "Expert grid-based editorial design created in Adobe InDesign for maximum readability",
    "Interactive digital PDFs with embedded clickable links and table of contents buttons"
  ];

  const process = [
    { step: "01", title: "Brief & Print Specs", desc: "Gathering collateral dimensions, page count, paper GSM & printer specs." },
    { step: "02", title: "Editorial Layout", desc: "Crafting grid-based page layouts, graphic typography & product photos." },
    { step: "03", title: "Proofing & Links", desc: "Adding spot UV channels, interactive digital links & proofreading." },
    { step: "04", title: "Press Handoff", desc: "Delivering CMYK press-ready PDFs, InDesign package & digital PDF." }
  ];

  const faqs = [
    {
      q: "What file formats will be delivered for our brochure or company profile?",
      a: "We deliver press-ready CMYK PDF files (with bleeds and crop marks), editable Adobe InDesign (.indd) or Illustrator (.ai) packages, and interactive digital PDFs."
    },
    {
      q: "Can you design large exhibition booth banners and rollup standees?",
      a: "Yes! We specialize in large-format event branding including 85x200cm rollup standees, backdrop popup walls, and hanging banner flags."
    },
    {
      q: "Do you help with physical printing in Bangalore?",
      a: "Yes! We can manage paper stock selection (GSM, matte, gloss, texture), special finishes (foil, UV), and press supervision with top Bangalore commercial printers."
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
            <span className="bc-current">Marketing Collateral</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Print & Marketing Collateral Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Marketing Collateral</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Win trade show buyers and corporate clients. Digiworq designs company profiles, product brochures, large-format exhibition banners, and interactive digital PDFs.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Start Collateral Project</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="infographic-design" title="Marketing Collateral" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Marketing Collateral Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.FileText size={16} color="#F5B800" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Collateral Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Marketing Collateral Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Company profiles, large-format trade show banners, and interactive digital PDFs.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.FileText;
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
              Pixelated Low-Res Print vs. <span className="highlight-yellow-glow">Digiworq High-DPI Press Artwork</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why trade show exhibitors & sales teams choose Digiworq marketing collateral.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Low-Resolution Print</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unoptimized Print Collateral
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
                  ★ Digiworq Collateral Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#F5B800' }}>
                300 DPI Vector Press Collateral
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
                  <span>Start Collateral Project</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Collateral Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>250+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Company Profiles Designed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>300 DPI</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>High-Res Vector Printing</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>Interactive</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Clickable Digital PDFs</div>
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
            Powered By Editorial Publishing Software & Press Color Specs
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Adobe InDesign CC', 'Adobe Illustrator CC', 'Adobe Photoshop CC', 'PANTONE® Color Bridge', 'Acrobat Pro DC', 'Figma Large Format'].map((tool, idx) => (
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
              Ready to Design Your <span style={{ color: '#F5B800' }}>Marketing Collateral?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom collateral proposal, paper GSM consultation, and printing timeline today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Start Collateral Project</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
