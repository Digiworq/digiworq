import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function ElearningWidget() {
  const [activeModule, setActiveModule] = useState('Interactive Quiz Overlay');

  return (
    <div className="custom-widget-card video-theater-box">
      <div className="theater-screen-mockup">
        <div className="screen-play-overlay">
          <div className="play-button-pulse">
            <Icons.BookOpen size={32} color="#111827" fill="#111827" />
          </div>
          <span className="video-time-badge">E-Learning Course — Feature: {activeModule}</span>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80" 
          alt="E-Learning Video Production" 
          className="video-poster-img"
        />
      </div>

      <div className="theater-controls-bar">
        <div className="res-picker-row">
          <span className="res-label">Course Feature:</span>
          {['Interactive Quiz Overlay', 'Green Screen Instructor', 'LMS SCORM Package'].map((mod) => (
            <button key={mod} className={`res-pill ${activeModule === mod ? 'active' : ''}`} onClick={() => setActiveModule(mod)}>
              {mod}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ElearningVideosPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Instructional Design & Lesson Curriculum Structure",
    "4K Green Screen Studio & Teleprompter Presenter Filming",
    "On-Screen Kinetic Slide Animations & Code Screencasts",
    "Crystal Clear Studio Audio & Multi-Language Subtitles",
    "SCORM 1.2 / 2004 LMS Compliant Video Exports",
    "100% Commercial Copyright & Raw Course Source Files"
  ];

  const pillars = [
    {
      step: "01",
      icon: "BookOpen",
      title: "Instructional Design Structure",
      desc: "Curriculum structuring breaking complex topics into digestible 3-5 minute micro-learning lessons."
    },
    {
      step: "02",
      icon: "Video",
      title: "4K Green Screen Studio",
      desc: "Studio presenter filming with clean green-screen keying, teleprompter, and softbox studio lighting."
    },
    {
      step: "03",
      icon: "Monitor",
      title: "Screen Recording & Slide FX",
      desc: "High-DPI software screencasts with cursor highlighting, zoom callouts, and kinetic slide graphics."
    },
    {
      step: "04",
      icon: "Sparkles",
      title: "Animated Graphic Overlays",
      desc: "On-screen diagrams, formulas, bullet callouts, and interactive pop-quiz graphics."
    },
    {
      step: "05",
      icon: "Globe",
      title: "Multi-Language Captions & Dubs",
      desc: "SRT/VTT closed captions and professional voice dubbing in multiple global and regional languages."
    },
    {
      step: "06",
      icon: "Cpu",
      title: "SCORM LMS Integration",
      desc: "Exported in SCORM, xAPI, or MP4 formats ready for instant upload to Canvas, Udemy, or custom LMS."
    }
  ];

  const genericCons = [
    "Boring screen recordings with monotonous uninspired voiceovers",
    "Poor webcam video with dark room shadows and muffled microphone echo",
    "No visual slide overlays or graphic callouts to maintain student focus",
    "Course files formatted incorrectly for corporate LMS platforms",
    "Missing subtitles or multi-language accessibility options"
  ];

  const digiworqPros = [
    "Curriculum instructional design tailored for high student retention",
    "4K studio green-screen keying with wireless teleprompter setup",
    "Kinetic slide overlays, diagram graphics & code screencast callouts",
    "SCORM 1.2 / 2004 LMS compliance for Canvas, Teachable & custom portals",
    "100% Commercial Course Copyright & Source Files Ownership"
  ];

  const process = [
    { step: "01", title: "Curriculum & Scripts", desc: "Structuring lesson modules, writing teleprompter scripts & slide decks." },
    { step: "02", title: "Studio Presenter Shoot", desc: "4K green-screen filming with teleprompter & studio softbox lights." },
    { step: "03", title: "Editing & Motion Graphics", desc: "Keying backgrounds, adding screen callouts, subtitles & audio mix." },
    { step: "04", title: "SCORM LMS Handoff", desc: "Packaging SCORM/MP4 files, SRT captions & course master files." }
  ];

  const faqs = [
    {
      q: "Can you convert our existing PowerPoint decks into animated video courses?",
      a: "Yes! We convert flat PowerPoint or PDF decks into dynamic animated video lessons with professional voiceovers and graphic callouts."
    },
    {
      q: "Are your video exports compatible with corporate LMS platforms?",
      a: "Yes! We export in SCORM 1.2, SCORM 2004, xAPI (Tin Can), and MP4 formats ready for instant upload to any LMS."
    },
    {
      q: "Do you supply teleprompters for course instructors?",
      a: "Yes! We set up studio teleprompters on set so instructors can deliver lengthy technical lessons smoothly without memorizing scripts."
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
            <span className="bc-current">E-Learning Videos</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>EdTech Video Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">E-Learning Video Production</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Build engaging, professional online courses and corporate training modules. Digiworq combines green-screen studios, teleprompters, kinetic motion graphics, and SCORM LMS integration.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request E-Learning Proposal</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="e-learning-videos" title="E-Learning Videos" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>E-Learning Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.BookOpen size={16} color="#EC4899" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core E-Learning Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">E-Learning Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Micro-learning design, 4K green-screen keying, and SCORM LMS compliance.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.BookOpen;
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
              Boring Webcam Screencasts vs. <span className="highlight-yellow-glow">Digiworq Studio Courses</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why leading EdTech brands choose Digiworq interactive studio video production.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Low-Quality Screencasts</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unoptimized Course Clips
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
                  ★ Digiworq EdTech Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EC4899' }}>
                4K Green-Screen Studio Courses
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
                  <span>Request E-Learning Proposal</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">E-Learning Production Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>300+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Course Modules Produced</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>SCORM</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>LMS Platform Compliant</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>4K Studio</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Green Screen Keying</div>
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
            Powered By Green Screen Keying & LMS Software Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['4K Green Screen Studio', 'Camtasia Screencast', 'Teleprompter Rig', 'DaVinci Resolve 19', 'SCORM 2004 Packager'].map((tool, idx) => (
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
              Ready to Produce Your <span style={{ color: '#EC4899' }}>E-Learning Course?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom course production quote, green-screen studio setup, and SCORM handoff.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request E-Learning Proposal</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
