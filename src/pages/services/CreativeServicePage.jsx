import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function CreativeStudioWidget() {
  const [activeColor, setActiveColor] = useState('#A068FF');
  const colors = ['#A068FF', '#F5B800', '#10B981', '#3B82F6', '#EC4899'];

  return (
    <div className="custom-widget-card creative-widget-box">
      <div className="widget-header-row">
        <Icons.Palette size={20} color="#F5B800" />
        <span className="widget-title-text">Interactive Brand Identity Studio</span>
      </div>
      <p className="widget-subdesc">Test dynamic brand color palettes & atmospheric container themes live:</p>
      
      <div className="palette-color-picker-row">
        {colors.map((c, idx) => (
          <button 
            key={idx} 
            className={`palette-circle ${activeColor === c ? 'active' : ''}`} 
            style={{ backgroundColor: c }}
            onClick={() => setActiveColor(c)}
          />
        ))}
      </div>

      <div className="brand-preview-canvas" style={{ borderColor: `${activeColor}66`, boxShadow: `0 10px 30px ${activeColor}33` }}>
        <div className="canvas-logo-mark" style={{ backgroundColor: `${activeColor}22`, color: activeColor }}>
          <Icons.Sparkles size={28} />
        </div>
        <div className="canvas-text-group">
          <h4 style={{ color: '#FFFFFF' }}>DIGIWORQ CREATIVE</h4>
          <span style={{ color: activeColor, fontWeight: 700, fontSize: '0.85rem' }}>Atmospheric 3D Design System</span>
        </div>
      </div>
    </div>
  );
}

export default function CreativeServicePage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData.creative || { categoryTitle: "Creative Services", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Creative Services", overview: "Creative design & branding solutions.", process: [] };

  const deliverables = activeSub.deliverables || [
    "Custom Logo Mark & Logotype Design",
    "Comprehensive Brand Guidelines Manual",
    "Color Palette & Typography System",
    "Corporate Identity Suite (Business Cards, Letterheads)",
    "Brand Voice & Messaging Framework",
    "100% Vector Master Source Files (AI, EPS, SVG, PNG, PDF)"
  ];

  const brandPillars = [
    {
      step: "01",
      icon: "Target",
      title: "Precision Grid Geometry",
      desc: "Engineered on golden-ratio grid systems for pixel-perfect scalability across mobile devices, desktop screens, and print billboards."
    },
    {
      step: "02",
      icon: "Palette",
      title: "Psychological Color Systems",
      desc: "Scientifically selected PANTONE® and digital color palettes engineered to evoke emotional resonance and trust in your specific market."
    },
    {
      step: "03",
      icon: "Type",
      title: "Bespoke Typography Hierarchy",
      desc: "Curated type pairings, custom display header fonts, body text specifications, and web font loading optimization."
    },
    {
      step: "04",
      icon: "MessageSquare",
      title: "Strategic Verbal Positioning",
      desc: "Defining your brand's verbal personality, key value propositions, elevator pitches, and tone-of-voice frameworks."
    },
    {
      step: "05",
      icon: "FileText",
      title: "Corporate Identity & Print Suites",
      desc: "Production-ready files for business cards, letterheads, presentation pitch decks, packaging, and marketing collateral."
    },
    {
      step: "06",
      icon: "BookOpen",
      title: "Master Style Guidelines Book",
      desc: "Comprehensive style guide detailing clear space rules, improper usage examples, background contrast ratios, and co-branding guidelines."
    }
  ];

  const genericCons = [
    "Generic stock clip-art & AI template generators used by hundreds of competitors",
    "Basic single-page PDF summary with no clear space rules or brand guidelines",
    "Low-resolution raster JPG / PNG files that become pixelated & blurry when printed",
    "Shared template licensing rights (zero legal protection against copycats)",
    "Looks identical to competitors, eroding brand equity and customer trust"
  ];

  const digiworqPros = [
    "100% Custom Golden-Ratio Vector Art engineered uniquely for your business",
    "Comprehensive 50+ Page Master Brand Style & Usage Manual",
    "100% Vector Master Files (.AI, .EPS, .SVG, .PDF, CMYK Print Ready)",
    "100% Full Legal Copyright & Trademark Ownership Transfer",
    "Iconic Visual Distinction that commands market authority & higher pricing power"
  ];

  const processSteps = activeSub.process && activeSub.process.length >= 4 ? [
    {
      step: "01",
      title: activeSub.process[0].title || "Discovery & Strategy",
      desc: "We perform deep market research, competitive analysis, and stakeholder interviews to uncover your target audience personas, brand positioning, and visual goals."
    },
    {
      step: "02",
      title: activeSub.process[1].title || "Concept Exploration",
      desc: "Our senior creative team develops 3 distinct visual directions, color palettes, and typographic moodboards, presenting detailed real-world mockups of your assets."
    },
    {
      step: "03",
      title: activeSub.process[2].title || "Refinement & Precision",
      desc: "Once your preferred direction is chosen, we mathematically refine vector paths, build responsive lockups, select PANTONE® color codes, and compile the design files."
    },
    {
      step: "04",
      title: activeSub.process[3].title || "Master Asset Delivery",
      desc: "We deliver full vector master source files (AI, EPS, SVG, PDF), print-ready CMYK files, digital web packages, and transfer 100% legal copyright ownership."
    }
  ] : [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We perform deep market research, competitive analysis, and stakeholder interviews to uncover your target audience personas, brand positioning, and visual goals."
    },
    {
      step: "02",
      title: "Concept Exploration",
      desc: "Our senior creative team develops 3 distinct visual directions, color palettes, and typographic moodboards, presenting detailed real-world mockups of your assets."
    },
    {
      step: "03",
      title: "Refinement & Precision",
      desc: "Once your preferred direction is chosen, we mathematically refine vector paths, build responsive lockups, select PANTONE® color codes, and compile the design files."
    },
    {
      step: "04",
      title: "Master Asset Delivery",
      desc: "We deliver full vector master source files (AI, EPS, SVG, PDF), print-ready CMYK files, digital web packages, and transfer 100% legal copyright ownership."
    }
  ];

  const faqs = activeSub.faqs && activeSub.faqs.length >= 3 ? activeSub.faqs : [
    {
      q: `What is included in Digiworq's ${activeSub.title} service?`,
      a: `Our ${activeSub.title} package includes initial strategy sessions, creative direction concepts, unlimited refinements, and final production-ready vector and digital master files.`
    },
    {
      q: "Will I receive vector source files that can be scaled infinitely?",
      a: "Yes! You receive 100% vector master files in Adobe Illustrator (.AI), EPS, SVG, and high-res PDF and PNG formats. They can be scaled from a mobile icon to a billboard with zero quality loss."
    },
    {
      q: "Do I get full legal ownership and copyright of the creative assets?",
      a: "Absolutely. Upon final approval and project completion, 100% of all intellectual property, copyright, and trademark rights are transferred completely to your business."
    },
    {
      q: "What is the typical turnaround time for this service?",
      a: "Standard projects take 1 to 2 weeks from initial kick-off to final master asset handoff."
    },
    {
      q: "Can you customize designs to match our existing brand guidelines?",
      a: "Yes! We strictly adhere to your existing brand guidelines or build new ones from scratch if you are undergoing a rebranding phase."
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
            <span className="bc-link-sub">Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Creative Design Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Creative Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <CreativeStudioWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>{activeSub.title} Deliverables & Master Assets:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.CheckCircle2 size={16} color="#F5B800" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Interactive Bento Grid for Core Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Design Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              We engineer comprehensive, cohesive visual systems built for long-term commercial impact.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {brandPillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Sparkles;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge">
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
              Generic Templates vs. <span className="highlight-yellow-glow">Digiworq Bespoke Design</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why leading brands choose custom visual engineering over generic templates.
            </p>
          </div>

          <div className="comparison-cards-grid">
            {/* Left Card: Generic */}
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Conventional DIY Approach</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Generic Templates & Freelancers
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
            <div className="comparison-card-winner">
              <div className="comparison-card-header">
                <span className="comparison-badge-winner">★ Digiworq Enterprise Strategy</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#F5B800' }}>
                Bespoke Design Engineering
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
                  <span>Choose Digiworq Engineering</span>
                  <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Process Pipeline Section */}
      <section className="digiworq-process-section py-20">
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Our 4-Phase <span className="highlight-yellow-glow">Execution Roadmap</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              A disciplined, transparent design methodology delivering guaranteed visual excellence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {processSteps.map((p, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)', 
                  border: '1px solid rgba(245, 184, 0, 0.3)', 
                  borderRadius: '20px', 
                  padding: '32px 28px',
                  position: 'relative'
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
      <section className="py-12" style={{ background: 'linear-gradient(180deg, #0B0F19 0%, #05070F 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>300+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Projects Delivered</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>1,500+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Vector Assets Created</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>99.8%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>On-Time Delivery</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Design Tools & Software Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Industry-Standard Design Tools & Software Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Adobe Illustrator CC', 'Adobe Photoshop CC', 'Figma Pro', 'Adobe InDesign', 'PANTONE® Color Match', 'Cinema 4D', 'Vector Geometry'].map((tool, idx) => (
              <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#D1D5DB', padding: '8px 18px', borderRadius: '20px', fontSize: '0.88rem', fontWeight: 600 }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions Accordion Section */}
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
                    <Icons.ChevronDown size={22} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#A068FF' }} />
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

      {/* 8. High-Converting Bottom CTA Banner */}
      <section className="service-cta-banner-wrap" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B0F19 100%)' }}>
        <div className="section-container text-center">
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
              Ready to Transform Your <span style={{ color: '#A068FF' }}>{activeSub.title}?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom creative proposal and visual asset breakdown for your business in Bangalore or global markets.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Creative Proposal</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
