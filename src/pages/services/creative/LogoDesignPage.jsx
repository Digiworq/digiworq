import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function LogoInspectorWidget() {
  const [activeVariant, setActiveVariant] = useState('Primary Monogram');

  const variants = {
    'Primary Monogram': {
      title: 'Monogram Lockup',
      subtitle: 'Golden Ratio Grid Scale',
      icon: 'Shield',
      format: 'Vector SVG / EPS',
      bg: 'linear-gradient(135deg, rgba(245, 184, 0, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)',
      color: '#F5B800'
    },
    'Wordmark System': {
      title: 'Custom Logotype',
      subtitle: 'Bespoke Font Kerning',
      icon: 'Type',
      format: 'High-Res PNG / PDF',
      bg: 'linear-gradient(135deg, rgba(160, 104, 255, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)',
      color: '#A068FF'
    },
    'Favicon & App Icon': {
      title: '16px Minimal Badge',
      subtitle: 'Retina Screen Sharpness',
      icon: 'Smartphone',
      format: 'ICO / WebP Kit',
      bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)',
      color: '#10B981'
    }
  };

  const curr = variants[activeVariant];

  return (
    <div className="custom-widget-card creative-widget-box" style={{ background: 'rgba(11, 15, 25, 0.95)', border: `1px solid ${curr.color}55`, padding: '24px', borderRadius: '20px' }}>
      <div className="widget-header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Icons.PenTool size={22} color={curr.color} />
          <span className="widget-title-text" style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem' }}>Logo Mark & Vector Grid Studio</span>
        </div>
        <span style={{ background: `${curr.color}22`, border: `1px solid ${curr.color}66`, color: curr.color, fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
          Vector Inspector
        </span>
      </div>
      
      <p className="widget-subdesc" style={{ color: '#9CA3AF', fontSize: '0.88rem', marginBottom: '16px' }}>
        Toggle logo variations to inspect golden-ratio grid vectors and screen scalability:
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {Object.keys(variants).map((v) => (
          <button
            key={v}
            onClick={() => setActiveVariant(v)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: activeVariant === v ? `1.5px solid ${variants[v].color}` : '1px solid rgba(255,255,255,0.12)',
              background: activeVariant === v ? `${variants[v].color}22` : 'rgba(255,255,255,0.04)',
              color: activeVariant === v ? variants[v].color : '#9CA3AF',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {v}
          </button>
        ))}
      </div>

      <div 
        style={{ 
          background: curr.bg, 
          border: `1.5px solid ${curr.color}55`, 
          borderRadius: '16px', 
          padding: '24px',
          boxShadow: `0 16px 40px ${curr.color}20`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: `linear-gradient(135deg, ${curr.color} 0%, #0F172A 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icons.Sparkles size={30} color="#FFFFFF" />
          </div>
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 900, margin: 0 }}>
              {curr.title}
            </h4>
            <span style={{ color: curr.color, fontWeight: 700, fontSize: '0.85rem' }}>
              {curr.subtitle}
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '12px' }}>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Grid Precision</span>
            <strong style={{ color: '#E2E8F0', fontSize: '0.85rem' }}>Golden Ratio 1:1.618</strong>
          </div>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Export Master</span>
            <strong style={{ color: curr.color, fontSize: '0.85rem' }}>{curr.format}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.82rem', fontWeight: 700 }}>
            <Icons.CheckCircle2 size={16} />
            <span>Trademark Ready Logo Lockup</span>
          </div>
          <span style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>AI · EPS · SVG · PNG</span>
        </div>
      </div>
    </div>
  );
}

export default function LogoDesignPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Golden-Ratio Vector Logo Mark (Primary, Secondary & Monogram Lockups)",
    "Full Color, Reverse White, Dark Mode & Monochrome Versions",
    "App Icon, Browser Favicon & Social Media Avatar Kits",
    "Complete Font Usage & Brand Color Palette Guidelines",
    "100% Full Trademark Ownership Rights & Commercial Transfer",
    "Master Vector Source Files (AI, EPS, SVG, High-Res PNG, PDF)"
  ];

  const pillars = [
    {
      step: "01",
      icon: "PenTool",
      title: "Golden Ratio Geometry",
      desc: "Mathematical grid construction ensuring timeless visual harmony across digital screens and print materials."
    },
    {
      step: "02",
      icon: "Shield",
      title: "Trademark Protection Ready",
      desc: "100% original custom concept creation designed to pass global intellectual property trademark searches."
    },
    {
      step: "03",
      icon: "Layers",
      title: "Versatile Logo Lockups",
      desc: "Horizontal, stacked, icon-only, and badge layouts engineered for any physical or digital application."
    },
    {
      step: "04",
      icon: "Palette",
      title: "PANTONE® Color System",
      desc: "CMYK print-accurate and RGB screen-vibrant color palette specification for brand consistency."
    },
    {
      step: "05",
      icon: "Smartphone",
      title: "Favicon & App Icon Suite",
      desc: "Pixel-perfect 16px to 512px icon exports optimized for iOS, Android, and web app manifests."
    },
    {
      step: "06",
      icon: "FileText",
      title: "Brand Usage Style Guide",
      desc: "Clear guidelines on clear-space rules, minimum sizing, and incorrect logo usage examples."
    }
  ];

  const genericCons = [
    "Cheap online template logos copied by hundreds of competing businesses",
    "Low-resolution JPEG images that pixelate and blur when enlarged",
    "No vector source files, making future printing or scaling impossible",
    "Ignoring clear space rules, causing cramped and unreadable logos",
    "Single color scheme that fails when placed on dark or colored backgrounds"
  ];

  const digiworqPros = [
    "100% Custom golden-ratio vector designs crafted by senior brand architects",
    "Infinite resolution AI, EPS, SVG vector master files included",
    "Comprehensive logo suite (Primary, Secondary, Monogram, Favicon)",
    "PANTONE® CMYK & RGB color system with dark mode variations",
    "100% Full commercial copyright transfer & trademark filing support"
  ];

  const process = [
    { step: "01", title: "Discovery & Brief", desc: "Understanding brand values, target market, and competitor landscape." },
    { step: "02", title: "Concept Sketches", desc: "Crafting 3-5 unique golden-ratio vector logo mark directions." },
    { step: "03", title: "Refinement & Grid", desc: "Perfecting geometry, typography kerning, and color palettes." },
    { step: "04", title: "Master Export", desc: "Delivering complete vector package, brand usage guide & copyright release." }
  ];

  const faqs = [
    {
      q: "How many logo design concepts will we receive to choose from?",
      a: "We present 3 to 5 distinct, fully-developed initial logo directions. Once you pick a favorite, we refine geometry, fonts, and colors to perfection."
    },
    {
      q: "Will we own full copyright and trademark rights to our new logo?",
      a: "Yes! Upon project completion, 100% full commercial copyright and trademark ownership rights are transferred directly to your company."
    },
    {
      q: "What file formats will be delivered in the final logo package?",
      a: "You receive editable vector source files (AI, EPS, SVG), print-ready PDFs, high-res transparent PNGs, JPEGs, and app favicon kits."
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
            <span className="bc-current">Logo Design</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Vector Brand Design Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Custom Logo Design</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Craft an iconic, timeless logo mark that commands authority. Digiworq designs golden-ratio vector logos, custom logotypes, favicons, and complete brand usage style guides.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Start Logo Project</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <LogoInspectorWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Logo Design Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.PenTool size={16} color="#F5B800" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Logo Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Logo Design Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Golden-ratio grid geometry, PANTONE® color accuracy, and trademark protection.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.PenTool;
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
              Generic Online Templates vs. <span className="highlight-yellow-glow">Digiworq Golden Ratio Vector Design</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why growth companies choose Digiworq custom vector design over clip-art templates.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Stock Clip-Art Templates</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unoptimized Stock Logos
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
                  ★ Digiworq Vector Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#F5B800' }}>
                Custom Golden-Ratio Logo Suite
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
                  <span>Start Logo Project</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Logo Design Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>300+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Logos Designed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>100%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Vector Source Files Included</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>Golden Ratio</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Grid Geometry</div>
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
            Powered By Vector Design Software & Color Matching Systems
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Adobe Illustrator CC', 'Figma Enterprise', 'PANTONE® Color Bridge', 'Affinity Designer', 'FontLab 8', 'Glyphs 3'].map((tool, idx) => (
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
              Ready to Design Your <span style={{ color: '#F5B800' }}>Iconic Logo Mark?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom vector logo proposal, concept breakdown, and timeline today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Start Logo Project</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
