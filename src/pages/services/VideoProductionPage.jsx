import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

function VideoTheaterWidget() {
  const [resolution, setResolution] = useState('4K Ultra HD');

  return (
    <div className="custom-widget-card video-theater-box">
      <div className="theater-screen-mockup">
        <div className="screen-play-overlay">
          <div className="play-button-pulse">
            <Icons.Play size={32} color="#111827" fill="#111827" />
          </div>
          <span className="video-time-badge">01:45 / 03:00 — 4K ProRes LOG</span>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80" 
          alt="Cinematic Video Production Shoot" 
          className="video-poster-img"
        />
      </div>

      <div className="theater-controls-bar">
        <div className="res-picker-row">
          <span className="res-label">Master Render Quality:</span>
          {['4K Ultra HD', '1080p 60fps', 'Cinema LOG'].map((res) => (
            <button key={res} className={`res-pill ${resolution === res ? 'active' : ''}`} onClick={() => setResolution(res)}>
              {res}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VideoProductionPage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData['video-production'] || { categoryTitle: "Video Production", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Video Production", overview: "High-end corporate video production and ad films.", process: [] };

  const deliverables = activeSub.deliverables || [
    "4K ProRes & RAW Cinema Master Videos",
    "Turnkey Creative Scriptwriting & Visual Storyboards",
    "Professional Talent Casting & Studio Set Lighting",
    "DaVinci Resolve Studio Color Grading & Sound Mix",
    "Social Media Cutdowns (16:9, 9:16 Vertical Reels)",
    "100% Commercial Copyright & Master Drive Handoff"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Camera",
      title: "4K Cinema Camera Production",
      desc: "Shot on cinema-grade RED & Sony FX cameras with high-speed prime lenses and gimbals."
    },
    {
      step: "02",
      icon: "Film",
      title: "Color Grading & VFX",
      desc: "DaVinci Resolve studio color grading and seamless visual effects for maximum brand prestige."
    },
    {
      step: "03",
      icon: "TrendingUp",
      title: "High Conversion Narrative",
      desc: "Videos crafted with strong narrative hooks designed to boost landing page conversion by up to 80%."
    },
    {
      step: "04",
      icon: "Mic",
      title: "Studio Voice & Sound Design",
      desc: "Multi-language voice artists, ambient Foley sound design, and licensed commercial background audio."
    },
    {
      step: "05",
      icon: "Clapperboard",
      title: "Turnkey Pre-to-Post Pipeline",
      desc: "End-to-end management from concept scriptwriting and talent casting to filming and color grading."
    },
    {
      step: "06",
      icon: "Video",
      title: "Multi-Format Export Suite",
      desc: "Exported in 4K resolution formatted for YouTube, website hero banners, Instagram Reels, and TV broadcast."
    }
  ];

  const genericCons = [
    "Uninspired smartphone video clips with poor lighting and audio noise",
    "Generic royalty-free stock videos that don't reflect your real product",
    "Dull un-graded colors with flat visual aesthetic",
    "Lack of narrative script strategy leading to low viewer retention",
    "Delayed delivery schedules taking months for basic corporate edits"
  ];

  const digiworqPros = [
    "100% Original cinema camera filming on studio sets or on-location",
    "Turnkey scriptwriting, storyboarding, talent casting, and director crew",
    "DaVinci Resolve Studio color grading & HDR color mastering",
    "Multi-format export suites (16:9 4K TV, 9:16 Vertical Reels, 1:1 Social)",
    "Guaranteed 5-Day Delivery for Commercial Cuts & Master Handoff"
  ];

  const processSteps = activeSub.process && activeSub.process.length >= 4 ? [
    { step: "01", title: activeSub.process[0].title || "Concept & Script", desc: "Creative scriptwriting, visual storyboarding & talent casting." },
    { step: "02", title: activeSub.process[1].title || "Production Filming", desc: "On-location or studio camera setup, lighting & audio capture." },
    { step: "03", title: activeSub.process[2].title || "Post & Color Grade", desc: "Video editing, DaVinci color grading & audio sound mix." },
    { step: "04", title: activeSub.process[3].title || "4K Master Delivery", desc: "Exporting 4K master files, social cutdowns & copyright transfer." }
  ] : [
    { step: "01", title: "Concept & Script", desc: "Creative scriptwriting, visual storyboarding & talent casting." },
    { step: "02", title: "Production Filming", desc: "On-location or studio camera setup, lighting & audio capture." },
    { step: "03", title: "Post & Color Grade", desc: "Video editing, DaVinci color grading & audio sound mix." },
    { step: "04", title: "4K Master Delivery", desc: "Exporting 4K master files, social cutdowns & copyright transfer." }
  ];

  const faqs = [
    {
      q: `What is included in our ${activeSub.title} production package?`,
      a: "Our package is 100% turnkey: creative scriptwriting, storyboarding, location scouting, camera crew, lighting, audio recording, professional talent casting, color grading, sound design, and 4K master exports."
    },
    {
      q: "Can you film at our corporate office or factory site?",
      a: "Yes! We operate full mobile production setups for corporate offices, manufacturing plants, retail outlets, and outdoor locations across Bangalore and global regions."
    },
    {
      q: "Will we get vertical video cuts for Instagram Reels & YouTube Shorts?",
      a: "Yes! Every production package includes 16:9 landscape master cuts and 9:16 vertical short-form edits optimized for mobile social media."
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
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Video Production House · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Video Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId={activeSub.id || subServiceId} title={activeSub.title} />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Video Production Specs & Deliverables:</h3>
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

      {/* 2. Modern Bento Grid for Core Video Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Production Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              4K RED cinema filming, DaVinci Resolve color grading, and high-converting storytelling.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Film;
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
              Stock Video Clips vs. <span className="highlight-yellow-glow">Digiworq Cinema Production</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why growth brands choose custom cinema film shoots over generic stock footage.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Stock Video Templates</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Generic Stock Videos
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
                  ★ Digiworq Cinema House
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EC4899' }}>
                Custom 4K Video Production
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
                  <span>Request Video Proposal</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Video Production Pipeline</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {processSteps.map((p, idx) => (
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>250+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Brand Commercials Produced</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>80%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Conversion Lift</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>4K ProRes</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Master Cinema Quality</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Video Suite Gear */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Cinema Equipment & Editing Software Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['DaVinci Resolve Studio', 'Adobe Premiere Pro', 'RED Digital Cinema', 'Sony FX6', 'Arri Alexa Mini', 'Adobe After Effects', 'Cinema 4D VFX'].map((tool, idx) => (
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
              Ready to Produce Your <span style={{ color: '#EC4899' }}>{activeSub.title}?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom video production estimate and creative script breakdown today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Video Production Proposal</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
