import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function EducationalVideographyPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "SCORM & LMS-Compliant E-Learning Modules",
    "Corporate Employee Onboarding & SOP Training Videos",
    "Multi-Camera Studio Masterclasses & Academic Lectures",
    "Step-by-Step Software & Industrial Equipment Demos",
    "2D/3D Animated Infographics & Interactive Quizzes",
    "Closed Captions (.SRT), Subtitles & Multi-Language Dubbing"
  ];

  const pillars = [
    {
      step: "01",
      icon: "GraduationCap",
      title: "E-Learning & Course Production",
      desc: "High-definition masterclasses and course modules with structured curriculum pacing, teleprompter guidance, and multi-camera angles for EdTech platforms."
    },
    {
      step: "02",
      icon: "Users",
      title: "Corporate Onboarding & Compliance",
      desc: "Standardized employee training films covering company culture, cybersecurity, HR compliance, workplace safety, and sales playbooks."
    },
    {
      step: "03",
      icon: "Laptop",
      title: "Instructional & Software Demos",
      desc: "Crystal-clear step-by-step process demonstrations, screen-recorded software walkthroughs with animated zoom callouts, and equipment SOPs."
    },
    {
      step: "04",
      icon: "Video",
      title: "Workshop & Seminar Capture",
      desc: "Professional multi-microphone stage recording and multi-camera seminar filming to preserve keynote insights for corporate digital learning libraries."
    },
    {
      step: "05",
      icon: "Sparkles",
      title: "Animated Infographics & Graphics",
      desc: "Dynamic lower-third annotations, 2D infographic flowcharts, kinetic typography, and chapter-marked checkpoints that maximize knowledge retention."
    },
    {
      step: "06",
      icon: "CheckCircle2",
      title: "LMS & SCORM Optimization",
      desc: "Multi-bitrate video encoding optimized for corporate LMS platforms, web portals, and mobile devices with closed captions (.VTT/.SRT) and chapters."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Mic size={22} color="#2DD4BF" />,
      heading: "Studio Acoustic Sound & Lapel Microphones",
      body: "We use broadcast-grade wireless lavalier mics, directional shotguns, and acoustically treated studio rooms ensuring zero echo or ambient distortion."
    },
    {
      icon: <Icons.Tv size={22} color="#2DD4BF" />,
      heading: "Teleprompter & Digital Smart Boards",
      body: "Equipped with high-brightness teleprompters, interactive smart displays, and dual-monitor confidence monitors for seamless instructor delivery."
    },
    {
      icon: <Icons.Layers size={22} color="#2DD4BF" />,
      heading: "Instructional Design & Storyboarding",
      body: "Our instructional design team helps structure video scripts, visual cue breakdowns, and learning objectives for optimal adult learning pedagogy."
    },
    {
      icon: <Icons.Award size={22} color="#2DD4BF" />,
      heading: "Multi-Language Localization & Dubbing",
      body: "Expand your global training reach with professional multi-language voiceover dubbing, localized subtitles, and on-screen graphic translations."
    }
  ];

  const whyChooseBullets = [
    "Instructional video production specialists with EdTech & corporate L&D expertise.",
    "Acoustically treated studio setups with 4K multi-camera arrays and teleprompters.",
    "LMS-ready video delivery: SCORM, xAPI, MP4, and interactive chapter markers.",
    "Custom 2D animated motion graphics, lower thirds, and diagram animations.",
    "Multi-language dubbing and accurate closed-captioning (.SRT/.VTT) services.",
    "Rapid turnarounds for bulk corporate course and module curriculum filming."
  ];

  const faqs = [
    {
      q: 'What educational videography services does Digiworq provide?',
      a: 'We provide complete e-learning course production, academic lecture captures, employee onboarding videos, instructional software demos, corporate compliance training modules, and workshop seminar recordings.'
    },
    {
      q: 'Do you create corporate training videos in Bangalore?',
      a: 'Yes, we develop customized corporate training content for new-hire orientation, safety and compliance SOPs, leadership development, customer service protocols, and technical upskilling.'
    },
    {
      q: 'Can training videos be integrated into Learning Management Systems (LMS)?',
      a: 'Yes, all videos are delivered in LMS-ready formats (MP4, SCORM, xAPI) with closed captions (.VTT/.SRT), chapter timestamps, and multi-resolution web bitrate optimization.'
    },
    {
      q: 'Do you provide video editing, animation, and post-production services?',
      a: 'Yes, our post-production includes kinetic typography, 2D infographic animations, screen-recording enhancements, teleprompter assistance, multi-language dubbing, and branding watermarks.'
    },
    {
      q: 'Why choose Digiworq for educational videography in Bangalore?',
      a: 'Digiworq combines pedagogy-focused instructional pacing, crisp 4K multi-camera visuals, crystal-clear audio recording, and rapid turnarounds for corporate L&D teams and EdTech leaders.'
    }
  ];

  return (
    <div className="service-page-root">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-digital-marketing">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Videography</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Educational & Training Videography</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#2DD4BF' }}>●</span>
                <span>L&D & E-Learning Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Educational & Training</span> <span className="part-gradient">Videography</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides professional educational and training videography services in Bangalore designed to help organizations, universities, and businesses create engaging learning experiences. We produce quality instructional modules, onboarding videos, and masterclasses that simplify complex concepts and maximize retention.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Plan Training Videos</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="educational-and-training-videography" title="Educational Videography" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Training Video Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.GraduationCap size={16} color="#2DD4BF" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core 6 Pillars Bento Grid */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Educational Video Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From corporate employee onboarding to comprehensive EdTech course curriculum — pedagogical excellence on screen.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.GraduationCap;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(45, 212, 191, 0.4)', color: '#2DD4BF', background: 'rgba(45, 212, 191, 0.12)' }}>
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

      {/* Detailed Capabilities Grid */}
      <section className="service-bento-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Instructional Clarity & <span className="highlight-yellow-glow">LMS Integration</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Studio teleprompters, acoustic audio recording, and localized closed captioning.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(45, 212, 191, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(45, 212, 191, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {sec.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#F8FAFC', fontWeight: 700, margin: 0 }}>
                    {sec.heading}
                  </h3>
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Why Choose Digiworq Box */}
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 100%)',
              border: '1px solid rgba(245, 184, 0, 0.3)',
              borderRadius: '20px',
              padding: '36px 32px',
              boxShadow: '0 0 30px rgba(245, 184, 0, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Icons.Award size={28} color="#F5B800" />
              <h3 style={{ fontSize: '1.4rem', color: '#F5B800', fontWeight: 800, margin: 0 }}>
                Why Choose Digiworq for Educational Videography?
              </h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {whyChooseBullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Icons.CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: '1.5' }}>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                  style={{ 
                    background: 'rgba(15, 23, 42, 0.75)', 
                    border: isOpen ? '1px solid rgba(245, 184, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '14px', 
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: isOpen ? '0 8px 30px rgba(245, 184, 0, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ 
                      width: '100%', 
                      padding: '22px 26px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      background: 'transparent', 
                      border: 'none', 
                      color: '#FFFFFF', 
                      fontSize: '1.08rem', 
                      fontWeight: 700, 
                      textAlign: 'left', 
                      cursor: 'pointer',
                      gap: '16px'
                    }}
                  >
                    <span>{faq.q}</span>
                    <Icons.ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#F5B800', flexShrink: 0 }} />
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

      {/* Bottom CTA */}
      <section className="service-bento-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container" style={{ textAlign: 'center', padding: '60px 24px' }}>
          <h2 className="process-main-title">Create High-Impact <span className="highlight-yellow-glow">Learning Videos</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our educational video production team record, animate, and produce training courses that engage learners.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Course Production</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
