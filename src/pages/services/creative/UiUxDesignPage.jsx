import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function UiUxInspectorWidget() {
  const [activeScreen, setActiveScreen] = useState('Mobile App UI');

  const screens = {
    'Mobile App UI': {
      desc: 'iOS & Android Design System with 60 FPS Micro-Interactions',
      type: 'Figma Auto-Layout Component Tokens',
      color: '#A068FF'
    },
    'SaaS Dashboard UX': {
      desc: 'Complex Data Visualization, Analytics & Dark Mode Theme',
      type: 'Bento Grid Layout System',
      color: '#10B981'
    },
    'Interactive Prototype': {
      desc: 'High-Fidelity Clickable Prototype for User Testing & Pitching',
      type: 'Figma Smart Animate Transitions',
      color: '#F5B800'
    }
  };

  const curr = screens[activeScreen];

  return (
    <div className="custom-widget-card creative-widget-box" style={{ background: 'rgba(11, 15, 25, 0.95)', border: `1px solid ${curr.color}55`, padding: '24px', borderRadius: '20px' }}>
      <div className="widget-header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Icons.Layout size={22} color={curr.color} />
          <span className="widget-title-text" style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem' }}>Figma UI/UX Studio & Component Inspector</span>
        </div>
        <span style={{ background: `${curr.color}22`, border: `1px solid ${curr.color}66`, color: curr.color, fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
          UI Component Studio
        </span>
      </div>
      
      <p className="widget-subdesc" style={{ color: '#9CA3AF', fontSize: '0.88rem', marginBottom: '16px' }}>
        Select UI/UX view to inspect auto-layout tokens, micro-animations, and prototype state:
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {Object.keys(screens).map((s) => (
          <button
            key={s}
            onClick={() => setActiveScreen(s)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: activeScreen === s ? `1.5px solid ${screens[s].color}` : '1px solid rgba(255,255,255,0.12)',
              background: activeScreen === s ? `${screens[s].color}22` : 'rgba(255,255,255,0.04)',
              color: activeScreen === s ? screens[s].color : '#9CA3AF',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {s}
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
            <Icons.Figma size={30} color="#FFFFFF" />
          </div>
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 900, margin: 0 }}>
              {activeScreen}
            </h4>
            <span style={{ color: curr.color, fontWeight: 700, fontSize: '0.85rem' }}>
              {curr.desc}
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '12px' }}>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Accessibility</span>
            <strong style={{ color: '#E2E8F0', fontSize: '0.85rem' }}>WCAG 2.1 AAA Contrast</strong>
          </div>
          <div>
            <span style={{ color: '#6B7280', fontSize: '0.75rem', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Component System</span>
            <strong style={{ color: curr.color, fontSize: '0.85rem' }}>{curr.type}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.82rem', fontWeight: 700 }}>
            <Icons.CheckCircle2 size={16} />
            <span>Developer Ready Figma Token Package</span>
          </div>
          <span style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>Figma · React · Tailwind</span>
        </div>
      </div>
    </div>
  );
}

export default function UiUxDesignPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Full Mobile App & Web Application User Interface (UI) Design",
    "Figma Tokens & Design System (Typography, Colors, Auto-Layout Components)",
    "Interactive High-Fidelity Clickable Prototypes with Micro-Animations",
    "Comprehensive UX Wireframing, User Flow Maps & Information Architecture",
    "WCAG 2.1 AAA Accessibility Color Contrast & Tap Target Audits",
    "Developer Handoff Specs (CSS Variables, React Component Tokens, SVG Icons)"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Layout",
      title: "Design System & Figma Tokens",
      desc: "Atomic design component libraries built with Figma Auto-Layout 5.0, variables, and dark/light modes."
    },
    {
      step: "02",
      icon: "Smartphone",
      title: "Mobile Native iOS & Android UI",
      desc: "Pixel-perfect mobile screen layouts adhering to Apple Human Interface & Google Material 3 guidelines."
    },
    {
      step: "03",
      icon: "Monitor",
      title: "Complex SaaS Dashboard UX",
      desc: "Streamlined data visualization dashboards, analytics charts, and intuitive SaaS app workflows."
    },
    {
      step: "04",
      icon: "Zap",
      title: "High-Fidelity Interactive Prototypes",
      desc: "Clickable Figma prototypes with 60 FPS Smart Animate screen transitions for investor pitching and user testing."
    },
    {
      step: "05",
      icon: "Eye",
      title: "User Research & Usability Audits",
      desc: "Conducting heatmaps, user interviews, and friction-point audits to boost app conversion rates."
    },
    {
      step: "06",
      icon: "Code",
      title: "Developer Handoff Package",
      desc: "Clean Figma file organization with tokenized CSS values, React component props, and SVG assets."
    }
  ];

  const genericCons = [
    "Static non-responsive UI designs that break when resized on different mobile screens",
    "No Figma design system, resulting in inconsistent button padding, fonts, and colors",
    "Poor UX layout with complicated navigation that confuses users and increases drop-offs",
    "Fails WCAG accessibility standards, excluding users with visual impairments",
    "Messy Figma files without auto-layout, taking developers weeks to code"
  ];

  const digiworqPros = [
    "Fully responsive UI layouts engineered with Figma Auto-Layout 5.0 and design tokens",
    "Complete Figma Component Library with reusable variants, states, and dark mode themes",
    "Conversion-focused UX wireframes built on user research and usability testing",
    "WCAG 2.1 AAA compliant color contrast and accessible touch targets for all screens",
    "Seamless developer handoff with CSS variables, React prop names & SVG icon kits"
  ];

  const process = [
    { step: "01", title: "UX Research & Flows", desc: "Mapping user personas, user journey maps & wireframe blueprints." },
    { step: "02", title: "Design System Setup", desc: "Building Figma component library, color variables & typography scale." },
    { step: "03", title: "High-Fi UI & Prototype", desc: "Designing 4K app screens & interactive Smart Animate prototype." },
    { step: "04", title: "Dev Handoff & QA", desc: "Exporting developer tokens, inspecting coded build & launching." }
  ];

  const faqs = [
    {
      q: "What design tool do you use for UI/UX projects?",
      a: "We work exclusively in Figma, providing you with fully interactive, cloud-based design files, component libraries, and clickable prototypes."
    },
    {
      q: "Will the UI design be easy for our frontend developers to code?",
      a: "Yes! All designs use Figma Auto-Layout, standardized CSS variables, 8px grid systems, and component prop structures, making developer implementation smooth."
    },
    {
      q: "Do you design for both mobile apps (iOS/Android) and desktop SaaS platforms?",
      a: "Yes! We design native iOS and Android apps, web applications, B2B SaaS dashboards, and complex enterprise software platforms."
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
            <span className="bc-current">UI / UX Design</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Figma UI/UX Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">UI / UX Design</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Build digital product experiences users love. Digiworq designs mobile app interfaces, SaaS dashboards, Figma component design systems, and high-fidelity clickable prototypes.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Start UI/UX Project</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <UiUxInspectorWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>UI/UX Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Layout size={16} color="#A068FF" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core UI/UX Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">UI / UX Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Figma design systems, auto-layout 5.0, and high-fidelity interactive prototypes.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Layout;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(160, 104, 255, 0.4)', color: '#A068FF', background: 'rgba(160, 104, 255, 0.12)' }}>
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
              Messy Unstructured Mockups vs. <span className="highlight-yellow-glow">Digiworq Figma Design System</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why SaaS startups & app companies choose Digiworq Figma UI/UX architecture.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Messy Unstructured Mockups</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unoptimized App UX
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

            <div className="comparison-card-winner" style={{ borderColor: '#A068FF' }}>
              <div className="comparison-card-header">
                <span className="comparison-badge-winner" style={{ borderColor: '#A068FF', color: '#A068FF', background: 'rgba(160, 104, 255, 0.15)' }}>
                  ★ Digiworq UI/UX Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#A068FF' }}>
                Tokenized Figma Design System
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
                  <span>Start UI/UX Project</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">UI / UX Pipeline</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {process.map((p, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)', 
                  border: '1px solid rgba(160, 104, 255, 0.3)', 
                  borderRadius: '20px', 
                  padding: '32px 28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <span style={{ background: '#A068FF', color: '#FFFFFF', fontWeight: 900, fontSize: '0.9rem', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>150+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Digital Products Designed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>100%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Figma Auto-Layout Tokens</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>60 FPS</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Interactive Prototypes</div>
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
            Powered By Official Figma Enterprise & Prototyping Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Figma Enterprise', 'Principle for Mac', 'Lottie Animations', 'Protopie', 'Maze Usability Testing', 'Stark Accessibility'].map((tool, idx) => (
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

      {/* 8. Bottom CTA Banner */}
      <section className="service-cta-banner-wrap" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B0F19 100%)' }}>
        <div className="section-container text-center">
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
              Ready to Design Your <span style={{ color: '#A068FF' }}>Digital Product?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom UI/UX design proposal, wireframe breakdown, and prototype demo today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Start UI/UX Project</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
