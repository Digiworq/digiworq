import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function BrandFilmWidget() {
  const [activeMood, setActiveMood] = useState('Cinematic Legacy');

  return (
    <div className="custom-widget-card video-theater-box">
      <div className="theater-screen-mockup">
        <div className="screen-play-overlay">
          <div className="play-button-pulse">
            <Icons.Play size={32} color="#111827" fill="#111827" />
          </div>
          <span className="video-time-badge">Brand Anthem — Mood: {activeMood}</span>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
          alt="Brand Film Production" 
          className="video-poster-img"
        />
      </div>

      <div className="theater-controls-bar">
        <div className="res-picker-row">
          <span className="res-label">Cinematic Mood:</span>
          {['Cinematic Legacy', 'High-Energy Tech', 'Documentary Heritage'].map((mood) => (
            <button key={mood} className={`res-pill ${activeMood === mood ? 'active' : ''}`} onClick={() => setActiveMood(mood)}>
              {mood}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BrandFilmsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Turnkey Creative Direction, Concept Narrative & Scriptwriting",
    "4K RED V-Raptor 8K Multi-Location Cinema Production",
    "Founder & Executive Interview Filming with Professional Lighting",
    "Original Orchestral / Acoustic Audio Score & Sound Design",
    "DaVinci Resolve Studio Color Grading & Master Output",
    "100% Commercial Copyright & Broadcast Master Files"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Award",
      title: "Emotional Brand Storytelling",
      desc: "Documentary-style brand anthems highlighting founder origin, corporate mission, and customer impact."
    },
    {
      step: "02",
      icon: "Camera",
      title: "4K RED Cinema Camera Rigs",
      desc: "Filmed on RED V-Raptor 8K and anamorphic cinema prime lenses for rich cinematic bokeh and color depth."
    },
    {
      step: "03",
      icon: "Users",
      title: "Executive & Founder Coaching",
      desc: "Professional director interview coaching ensuring authentic, passionate, and articulate on-camera delivery."
    },
    {
      step: "04",
      icon: "Sun",
      title: "Studio Lighting Aesthetics",
      desc: "Multi-point Aputure & Arri Skypanel lighting setups tuned to complement company color palettes."
    },
    {
      step: "05",
      icon: "Music",
      title: "Custom Orchestral Sound Score",
      desc: "Licensed or custom-composed cinematic music scores built around natural emotional swells."
    },
    {
      step: "06",
      icon: "Video",
      title: "Multi-Format Brand Cutdowns",
      desc: "Delivering full 3-minute brand film masters, 60s website headers, and 30s social video cuts."
    }
  ];

  const genericCons = [
    "Dry corporate slideshows with monotonous voiceover recitations",
    "Flat, un-graded camera video that feels like a low-budget internal video",
    "Superficial buzzwords without emotional connection or storytelling",
    "Cheap stock footage clips that don't match actual company operations",
    "Inflexible video cutdowns that don't fit website heroes or social feeds"
  ];

  const digiworqPros = [
    "Emotional documentary-style brand storytelling led by agency film directors",
    "4K RED V-Raptor 8K cinema production with anamorphic optics",
    "On-camera founder coaching & high-end studio lighting setups",
    "Custom composed music score & DaVinci Resolve color grading",
    "Complete 16:9 master, website hero cutdowns & social media reels"
  ];

  const process = [
    { step: "01", title: "Narrative & Recce", desc: "Crafting the brand story arc, founder interview questions & location scouting." },
    { step: "02", title: "Cinema Production", desc: "4K RED multi-location shoot, founder interviews & cinematic b-roll capture." },
    { step: "03", title: "Color & Music Score", desc: "DaVinci color grading, orchestral sound design & motion title graphics." },
    { step: "04", title: "Master Delivery", desc: "Delivering 4K master brand film, website cutdowns & broadcast files." }
  ];

  const faqs = [
    {
      q: "What is the difference between a Brand Film and a Corporate Shoot?",
      a: "A Brand Film focuses on emotional storytelling, founder legacy, and brand vision designed for public audiences, whereas Corporate Shoots focus on internal communications and facility showcases."
    },
    {
      q: "How long does it take to produce a custom Brand Film?",
      a: "Typical production takes 3 to 4 weeks, including narrative development, location filming, custom score composition, color grading, and final delivery."
    },
    {
      q: "Will you interview our founders and executive leadership on camera?",
      a: "Yes! Our director conducts comfortable, guided interview sessions with founders, executives, and key team members to elicit authentic storytelling."
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
            <span className="bc-current">Brand Films</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Cinema Brand Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Brand Film Production</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Tell your company's authentic story with 4K cinematic brand films. Digiworq combines documentary-style storytelling, founder interviews, and custom orchestral scores to build lasting brand equity.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Brand Film Proposal</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="brand-films" title="Brand Films" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Brand Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Award size={16} color="#EC4899" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Brand Film Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Brand Story Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Documentary storytelling, 4K RED cinema optics, and custom orchestral sound scores.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Award;
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
              Generic Corporate Videos vs. <span className="highlight-yellow-glow">Digiworq Cinematic Brand Films</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why category leaders choose Digiworq documentary storytelling to define their brand identity.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Standard Corporate Videos</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Monotonous Corporate Clips
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
                  ★ Digiworq Cinema Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EC4899' }}>
                4K Documentary Brand Anthem
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
                  <span>Request Brand Film Proposal</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Brand Film Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>80+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Brand Films Produced</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>4K RED</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Anamorphic Cinema Optics</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>100%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Custom Score & Master Rights</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Production Gear Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Cinema Camera Optics & Orchestral Audio Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['RED V-Raptor 8K', 'Cooke Anamorphic Lenses', 'Aputure 600d Lighting', 'DaVinci Resolve 19', 'Logic Pro X Score Mix'].map((tool, idx) => (
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
              Ready to Produce Your <span style={{ color: '#EC4899' }}>Brand Film?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom documentary concept proposal and cinematic budget estimate today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Brand Film Proposal</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
