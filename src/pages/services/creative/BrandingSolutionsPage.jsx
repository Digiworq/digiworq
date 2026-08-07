import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function CreativeStudioWidget() {
  const [activeTheme, setActiveTheme] = useState('gold');

  const themes = {
    gold: {
      name: '3D Gold Luxury',
      primary: '#F5B800',
      secondary: '#FEF3C7',
      bg: 'linear-gradient(135deg, rgba(245, 184, 0, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)',
      border: 'rgba(245, 184, 0, 0.4)',
      font: 'Cinzel Decorative / Outfit',
      hex: '#F5B800 · #1E293B · #FEF3C7'
    },
    violet: {
      name: 'Cyber Violet',
      primary: '#A068FF',
      secondary: '#E9D5FF',
      bg: 'linear-gradient(135deg, rgba(160, 104, 255, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)',
      border: 'rgba(160, 104, 255, 0.4)',
      font: 'Space Grotesk / Inter',
      hex: '#A068FF · #0F172A · #E9D5FF'
    },
    emerald: {
      name: 'Emerald Tech',
      primary: '#10B981',
      secondary: '#D1FAE5',
      bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)',
      border: 'rgba(16, 185, 129, 0.4)',
      font: 'Plus Jakarta Sans',
      hex: '#10B981 · #022C22 · #D1FAE5'
    },
    monochrome: {
      name: 'Monochrome Minimal',
      primary: '#E2E8F0',
      secondary: '#94A3B8',
      bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(15, 23, 42, 0.95) 100%)',
      border: 'rgba(255, 255, 255, 0.3)',
      font: 'Cabinet Grotesk',
      hex: '#FFFFFF · #0F172A · #94A3B8'
    }
  };

  const current = themes[activeTheme];

  return (
    <div className="custom-widget-card creative-widget-box" style={{ background: 'rgba(11, 15, 25, 0.95)', border: `1px solid ${current.border}`, padding: '24px', borderRadius: '20px' }}>
      <div className="widget-header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Icons.Sparkles size={22} color={current.primary} />
          <span className="widget-title-text" style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem' }}>Brand Identity Studio & Asset Inspector</span>
        </div>
        <span style={{ background: `${current.primary}22`, border: `1px solid ${current.primary}66`, color: current.primary, fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
          Live 3D Preview
        </span>
      </div>
      
      <p className="widget-subdesc" style={{ color: '#9CA3AF', fontSize: '0.88rem', marginBottom: '16px' }}>
        Select a brand aesthetic style to inspect real-time logo rendering, typography, and palette:
      </p>

      {/* Theme Select Pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {Object.keys(themes).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTheme(key)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: activeTheme === key ? `1.5px solid ${themes[key].primary}` : '1px solid rgba(255,255,255,0.12)',
              background: activeTheme === key ? `${themes[key].primary}22` : 'rgba(255,255,255,0.04)',
              color: activeTheme === key ? themes[key].primary : '#9CA3AF',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {themes[key].name}
          </button>
        ))}
      </div>

      {/* Live Brand Canvas Card */}
      <div 
        style={{ 
          background: current.bg, 
          border: `1.5px solid ${current.primary}55`, 
          borderRadius: '16px', 
          padding: '24px',
          boxShadow: `0 16px 40px ${current.primary}20`,
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
          <div 
            style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '14px', 
              background: `linear-gradient(135deg, ${current.primary} 0%, #0F172A 100%)`, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: `0 8px 20px ${current.primary}44`
            }}
          >
            <Icons.Layers size={30} color="#FFFFFF" />
          </div>
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 900, margin: 0, letterSpacing: '0.5px' }}>
              DIGIWORQ BRANDING
            </h4>
            <span style={{ color: current.primary, fontWeight: 700, fontSize: '0.85rem' }}>
              {current.name} System
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Typography</span>
            <strong style={{ color: '#E2E8F0', fontSize: '0.85rem' }}>{current.font}</strong>
          </div>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Palette Hex</span>
            <strong style={{ color: current.primary, fontSize: '0.85rem' }}>{current.hex}</strong>
          </div>
        </div>

        {/* Master Deliverables Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.82rem', fontWeight: 700 }}>
            <Icons.CheckCircle2 size={16} />
            <span>50+ Page Brand Guide PDF Ready</span>
          </div>
          <span style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>AI · EPS · SVG · PNG</span>
        </div>
      </div>
    </div>
  );
}


export default function BrandingSolutionsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Custom Logo Mark & Logotype Design (Primary, Secondary, Monogram Lockups)",
    "Comprehensive 50+ Page Brand Guidelines Manual (PDF & Interactive Web)",
    "PANTONE®, CMYK, RGB & Hexadecimal Color Palette System",
    "Bespoke Typography Hierarchy (Display Headers, Subheadings, Body Text)",
    "Corporate Stationary Suite (Business Cards, Letterheads, Envelopes)",
    "Social Media Branding Kit (Profile Avatars, Cover Banners, Story Templates)",
    "Brand Voice, Tone of Voice & Core Messaging Guidelines",
    "100% Vector Master Source Files (AI, EPS, SVG, High-Res PNG, PDF)"
  ];

  const brandPillars = [
    {
      step: "01",
      icon: "Target",
      title: "Logo Mark Geometry & Scalability",
      desc: "Crafted on golden-ratio grid systems ensuring flawless clarity whether rendered as a 16px browser favicon or billboard banner."
    },
    {
      step: "02",
      icon: "Palette",
      title: "Psychological Color Systems",
      desc: "Scientifically selected primary and secondary palettes engineered to evoke trust, authority, and emotional resonance in your niche."
    },
    {
      step: "03",
      icon: "Type",
      title: "Typography & Hierarchical Systems",
      desc: "Curated font pairings including custom web font licenses, print weights, and numerical styling for corporate reports."
    },
    {
      step: "04",
      icon: "MessageSquare",
      title: "Brand Voice & Position Pillars",
      desc: "Defining your brand's verbal personality, key value propositions, elevator pitches, and messaging guidelines for marketing teams."
    },
    {
      step: "05",
      icon: "FileText",
      title: "Corporate Identity & Print Suites",
      desc: "Production-ready designs for premium business cards, embossed letterheads, ID badges, presentation decks, and collateral."
    },
    {
      step: "06",
      icon: "BookOpen",
      title: "Master Brand Guidelines Book",
      desc: "A definitive style bible detailing clear space rules, improper usage examples, background contrast ratios, and co-branding guidelines."
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

  const industries = [
    { icon: "Cpu", title: "Tech & B2B SaaS", desc: "Clean, modern, developer-trusted brand identity systems built for global scale." },
    { icon: "ShoppingBag", title: "Retail & E-Commerce", desc: "Vibrant packaging and unboxing branding that drives customer repeat loyalty." },
    { icon: "Building2", title: "Real Estate & Construction", desc: "Prestigious corporate identity instilling trust, stability, and high value." },
    { icon: "HeartPulse", title: "Healthcare & Wellness", desc: "Soothing, empathetic color systems and clean typography for medical brands." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Brand Discovery & Competitive Audit",
      desc: "We perform deep market research, competitive analysis, and stakeholder interviews to uncover your brand's unique positioning, core values, and target audience personas."
    },
    {
      step: "02",
      title: "Concept Development & Moodboards",
      desc: "Our creative directors develop 3 distinct visual directions, color palettes, and typographic moodboards, presenting detailed real-world mockups of how your brand will look."
    },
    {
      step: "03",
      title: "Vector Engineering & Guidelines Creation",
      desc: "Once the core direction is selected, we mathematically refine vector paths, build responsive logo lockups, select PANTONE® color codes, and compile the master brand manual."
    },
    {
      step: "04",
      title: "Asset Handoff & Copyright Transfer",
      desc: "We deliver full vector master source files (AI, EPS, SVG, PDF), print-ready CMYK files, digital web packages, and transfer 100% legal ownership rights to your company."
    }
  ];

  const faqs = [
    {
      q: "What is included in Digiworq's Branding Solutions package?",
      a: "Our complete branding package includes primary and secondary logo marks, icon favicons, color palette specs (PANTONE, CMYK, RGB, Hex), typography pairings, stationery collateral (business cards, letterheads), brand voice guidelines, and a comprehensive 50+ page Brand Manual."
    },
    {
      q: "Will I receive vector source files that can be resized without losing quality?",
      a: "Yes! You receive 100% vector master files in Adobe Illustrator (.AI), Encapsulated PostScript (.EPS), Scalable Vector Graphics (.SVG), and high-resolution PDF and PNG formats. They can be scaled from a smartphone icon to a highway billboard with zero quality loss."
    },
    {
      q: "Do I get full legal ownership and copyright of the brand assets?",
      a: "Absolutely. Upon final approval and project completion, 100% of all intellectual property, copyright, and trademark rights are transferred completely to your business."
    },
    {
      q: "How many logo concepts do you present initially?",
      a: "We present 3 distinct visual directions and logo concepts during the initial exploration phase. Once a direction is chosen, we provide unlimited refinements until you are 100% satisfied."
    },
    {
      q: "What is the typical turnaround time for a complete branding project?",
      a: "Standard branding projects take 2 to 3 weeks from initial discovery kick-off to final master asset handoff."
    },
    {
      q: "Can you redesign or modernize an existing brand without losing our brand equity?",
      a: "Yes! Our Brand Evolution service modernizes outdated logos, typography, and color schemes while preserving the core visual elements your existing customers already recognize."
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
            <span className="bc-current">Branding Solutions</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Strategic Brand Identity Agency · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Branding Solutions</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Branding is the strategic foundation of your business identity. Digiworq crafts iconic, long-lasting brand identities that command attention, build instant credibility, and drive customer loyalty in competitive markets.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Branding Consultation</span>
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
            <h3>Master Branding Deliverables & System Assets:</h3>
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

      {/* 2. Modern Interactive Bento Grid for Core Branding Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Branding Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              We don't just design logos — we engineer comprehensive, cohesive visual identity systems built for long-term commercial growth.
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
              Generic Templates vs. <span className="highlight-yellow-glow">Digiworq Brand Engineering</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why leading enterprises choose custom visual architecture over generic DIY options.
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
                Bespoke Brand Engineering
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

      {/* 4. Industries We Transform Section */}
      <section className="py-20" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Industry-Specific <span className="highlight-yellow-glow">Branding Expertise</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {industries.map((ind, idx) => {
              const IconComp = Icons[ind.icon] || Icons.Building;
              return (
                <div key={idx} style={{ background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)', border: '1px solid rgba(160, 104, 255, 0.25)', borderRadius: '18px', padding: '28px' }}>
                  <div style={{ marginBottom: '16px', color: '#A068FF', background: 'rgba(160, 104, 255, 0.12)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconComp size={24} />
                  </div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>{ind.title}</h4>
                  <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Detailed Process Pipeline Section */}
      <section className="digiworq-process-section py-20">
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Our 4-Phase Branding <span className="highlight-yellow-glow">Execution Roadmap</span>
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

      {/* 6. Stats & Impact Bar */}
      <section className="py-12" style={{ background: 'linear-gradient(180deg, #0B0F19 0%, #05070F 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>300+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Brand Identities Designed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>100%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Vector Source File Ownership</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>99.8%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>On-Time Delivery</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Design Tools & Software Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Industry-Standard Design Tools & Color Standards
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

      {/* 8. Frequently Asked Questions Accordion Section */}
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

      {/* 9. High-Converting Bottom CTA Banner */}
      <section className="service-cta-banner-wrap" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B0F19 100%)' }}>
        <div className="section-container text-center">
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
              Ready to Craft an <span style={{ color: '#F5B800' }}>Iconic Brand Identity?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Partner with Bangalore's leading brand strategists and designers. Schedule a discovery call and receive a custom branding proposal.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Branding Consultation</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
