import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function ExplainerPreviewWidget() {
  const [activeStyle, setActiveStyle] = useState('2D Character Motion');

  return (
    <div className="custom-widget-card video-theater-box">
      <div className="theater-screen-mockup">
        <div className="screen-play-overlay">
          <div className="play-button-pulse">
            <Icons.Play size={32} color="#111827" fill="#111827" />
          </div>
          <span className="video-time-badge">00:45 / 01:30 — Style: {activeStyle}</span>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" 
          alt="Explainer Video Production" 
          className="video-poster-img"
        />
      </div>

      <div className="theater-controls-bar">
        <div className="res-picker-row">
          <span className="res-label">Animation Style:</span>
          {['2D Character Motion', 'Isometric 3D SaaS', 'Screencast UI Walkthrough'].map((style) => (
            <button key={style} className={`res-pill ${activeStyle === style ? 'active' : ''}`} onClick={() => setActiveStyle(style)}>
              {style}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExplainerVideosPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Turnkey Creative Scriptwriting & Concept Hook",
    "Full-Vector Storyboard & Character Rigging Illustrations",
    "Professional Studio Voice-Over Audio (English & Regional)",
    "2D/3D Kinetic Motion Graphics & UI Screen Mockups",
    "Multi-Aspect Exports (16:9 4K YouTube, 9:16 Vertical Reels)",
    "100% Commercial Copyright & Source File Handoff"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Sparkles",
      title: "60-Second Conversion Hook",
      desc: "Scripts engineered around problem-solution-action narrative structures that double landing page signups."
    },
    {
      step: "02",
      icon: "Box",
      title: "Custom Character Rigging",
      desc: "Original vector illustrations built from scratch with skeletal limb rigging for fluid humanistic movement."
    },
    {
      step: "03",
      icon: "Monitor",
      title: "SaaS App UI Re-creation",
      desc: "Pixel-perfect vector re-creations of software dashboards, mobile apps, and product workflows."
    },
    {
      step: "04",
      icon: "Mic",
      title: "Studio Voice-Over Recording",
      desc: "Recorded by professional voice artists in multi-language accents (US English, UK, Indian English, Hindi)."
    },
    {
      step: "05",
      icon: "Zap",
      title: "60fps Vector Physics",
      desc: "Butter-smooth vector physics, custom Bezier easing curves, and kinetic typography motion graphics."
    },
    {
      step: "06",
      icon: "Video",
      title: "Multi-Platform Export Suite",
      desc: "Exported in 4K resolution formatted for YouTube ads, website landing pages, Instagram Reels, and pitch decks."
    }
  ];

  const genericCons = [
    "Repetitive template animations used by thousands of other companies",
    "Robotic AI voice-overs that sound artificial and unengaging",
    "Confusing scripts without a clear problem-solution conversion hook",
    "Stock asset licensing restrictions preventing commercial use",
    "Zero storyboarding or narrative strategy"
  ];

  const digiworqPros = [
    "100% Original custom vector character designs & SaaS UI art",
    "Professional human studio voice artists in global and regional accents",
    "High-converting 60-second script hooks crafted by marketing strategists",
    "Turnkey storyboarding, 4K rendering & audio sound mix",
    "100% Full Commercial Copyright Handoff & 4K Master Exports"
  ];

  const process = [
    { step: "01", title: "Script & Hook", desc: "Writing a compelling 60s/90s problem-solution conversion script." },
    { step: "02", title: "Storyboard & VO", desc: "Designing visual frame sketches and recording studio voice-overs." },
    { step: "03", title: "Animation & SFX", desc: "Rendering character motion keyframes & mixing audio tracks." },
    { step: "04", title: "4K Master Delivery", desc: "Delivering 4K master files, social cutdowns & source files." }
  ];

  const faqs = [
    {
      q: "What is the turnaround time for a 60-second explainer video?",
      a: "Standard production turnaround is 10 to 14 business days, including scriptwriting, storyboarding, voice-over, and final 4K animation render."
    },
    {
      q: "Do you write the animation script and record voice-overs?",
      a: "Yes! Our package is 100% turnkey: concept scriptwriting, storyboard illustration, voice-over recording, sound effects mixing, and 4K video rendering."
    },
    {
      q: "Will I get full commercial copyright ownership of the video?",
      a: "Yes, 100%! Upon project completion, full legal ownership, copyright, and source files belong entirely to your company."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-video-production">
      {/* 1. Hero Section */}
      <section className="service-landing-hero hero-theme-video-production">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Video Production</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Explainer Videos</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Explainer Video Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Explainer Videos</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Simplify complex software, SaaS products, and financial services into engaging 60-second animated explainer videos designed to convert website traffic into paying customers.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Create Explainer Video</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="explainer-videos" title="Explainer Videos" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Explainer Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Film size={16} color="#EC4899" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Explainer Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Explainer Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              High-converting script hooks, custom vector rigging, and 60fps motion physics.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Sparkles;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(236, 72, 153, 0.4)', color: '#EC4899', background: 'rgba(236, 72, 153, 0.12)' }}>
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
              Generic Templates vs. <span className="highlight-yellow-glow">Digiworq Custom Explainer</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why tech startups choose Digiworq custom animated storytelling over generic DIY templates.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Generic DIY Templates</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Stock Template Creators
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

            <div className="comparison-card-winner" style={{ borderColor: '#EC4899' }}>
              <div className="comparison-card-header">
                <span className="comparison-badge-winner" style={{ borderColor: '#EC4899', color: '#EC4899', background: 'rgba(236, 72, 153, 0.15)' }}>
                  ★ Digiworq Studio House
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EC4899' }}>
                Custom 4K Animated Explainer
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
                  <span>Create Explainer Video</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Explainer Pipeline</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {process.map((p, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)', 
                  border: '1px solid rgba(236, 72, 153, 0.3)', 
                  borderRadius: '20px', 
                  padding: '32px 28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <span style={{ background: '#EC4899', color: '#FFFFFF', fontWeight: 900, fontSize: '0.9rem', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>200+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Explainer Videos Produced</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>2x</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Conversion Rate Lift</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>100%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Custom Vector Artwork</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Software Gear Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Motion Graphics & Studio Audio Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Adobe After Effects', 'Adobe Illustrator', 'Cinema 4D', 'Duik Bassel Rigging', 'Pro Tools Audio', 'Lottie Web'].map((tool, idx) => (
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
                    <Icons.ChevronDown size={22} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#EC4899' }} />
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
              Ready to Create Your <span style={{ color: '#EC4899' }}>Explainer Video?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom animation script breakdown and 60-second pricing proposal today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Explainer Quote</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
