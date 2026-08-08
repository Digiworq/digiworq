import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

function MotionCurveWidget() {
  return (
    <div className="custom-widget-card motion-widget-box">
      <div className="widget-header-row">
        <Icons.Sparkles size={20} color="#A068FF" />
        <span className="widget-title-text">2D Motion Graphics & Animation Engine</span>
      </div>
      <p className="widget-subdesc">Custom Bezier easing curve & vector keyframe preview:</p>
      
      <div className="motion-curve-graphic">
        <div style={{ height: '70px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="bouncing-ball-demo" style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #F5B800 0%, #A068FF 100%)', boxShadow: '0 0 20px #A068FF' }}></div>
        </div>
      </div>

      <div className="timeline-keyframes-bar">
        <span>00:00:00 (Start)</span>
        <span className="kf-dot active">● Keyframe 12 (Ease In-Out)</span>
        <span>00:00:03 (Export)</span>
      </div>
    </div>
  );
}

export default function Animation2DPage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData['2d-animation'] || { categoryTitle: "2D Animation", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "2D Animation", overview: "Custom character animation and motion graphics.", process: [] };

  const deliverables = activeSub.deliverables || [
    "4K UHD Animated Video Master Files (.MP4, .MOV ProRES)",
    "Turnkey Scriptwriting & Visual Storyboard Design",
    "Studio Voice-Over Recording & Licensed Audio Track",
    "Custom Character Illustration & Vector Skeletal Rigging",
    "Social Media Cutdowns (16:9, 9:16 Reels & Shorts)",
    "100% Full Legal Copyright Ownership Handoff"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Sparkles",
      title: "Custom Character Rigging",
      desc: "Original character illustrations built from scratch with skeletal limb rigging for fluid humanistic movement."
    },
    {
      step: "02",
      icon: "Film",
      title: "60fps Vector Motion Curves",
      desc: "Butter-smooth vector physics, custom Bezier easing curves, and kinetic typography motion graphics."
    },
    {
      step: "03",
      icon: "Mic",
      title: "Studio Voice-Over Recording",
      desc: "Recorded by professional voice artists in multi-language accents (English, Hindi, Kannada, Tamil) with SFX audio mixing."
    },
    {
      step: "04",
      icon: "Zap",
      title: "High Explainer Conversion",
      desc: "Simplifying complex software, SaaS tools, or financial services into 60-second animated videos that boost signup conversions."
    },
    {
      step: "05",
      icon: "Layers",
      title: "Turnkey Production Workflow",
      desc: "End-to-end management covering scriptwriting, concept art, storyboards, animatics, animation rendering, and sound design."
    },
    {
      step: "06",
      icon: "Video",
      title: "Multi-Format Export Suites",
      desc: "Exported in 4K resolution formatted for YouTube, website landing pages, Instagram Reels, and broadcast TV."
    }
  ];

  const genericCons = [
    "Repetitive template animations used by thousands of other companies",
    "Robotic AI voice-overs that sound artificial and unengaging",
    "Static low-quality illustrations with stiff mechanical movement",
    "Stock asset licensing restrictions preventing commercial use",
    "Zero storyboarding or narrative script strategy"
  ];

  const digiworqPros = [
    "100% Original custom vector character designs & environment art",
    "Professional human studio voice artists in global and regional accents",
    "Butter-smooth 60fps vector physics & kinetic typography motion graphics",
    "Turnkey scriptwriting, storyboarding, animation rendering & audio mix",
    "100% Full Commercial Copyright Handoff & 4K UHD Master Exports"
  ];

  const processSteps = activeSub.process && activeSub.process.length >= 4 ? [
    {
      step: "01",
      title: activeSub.process[0].title || "Scriptwriting & Storyboard",
      desc: "We write a compelling 60-second narrative script and illustrate visual storyboards detailing key camera angles."
    },
    {
      step: "02",
      title: activeSub.process[1].title || "Voice-Over & Character Art",
      desc: "We record studio voice-overs, illustrate custom character rigs, and build vector environment backgrounds."
    },
    {
      step: "03",
      title: activeSub.process[2].title || "Animation Rendering & SFX Mix",
      desc: "Our motion animators render smooth keyframe physics, sync lip-movements to audio, and mix ambient sound effects."
    },
    {
      step: "04",
      title: activeSub.process[3].title || "4K Master Delivery",
      desc: "We render high-resolution 4K master files (.MP4, .MOV), export social media cutdowns, and transfer copyright."
    }
  ] : [
    {
      step: "01",
      title: "Scriptwriting & Storyboard",
      desc: "We write a compelling 60-second narrative script and illustrate visual storyboards detailing key camera angles."
    },
    {
      step: "02",
      title: "Voice-Over & Character Art",
      desc: "We record studio voice-overs, illustrate custom character rigs, and build vector environment backgrounds."
    },
    {
      step: "03",
      title: "Animation Rendering & SFX Mix",
      desc: "Our motion animators render smooth keyframe physics, sync lip-movements to audio, and mix ambient sound effects."
    },
    {
      step: "04",
      title: "4K Master Delivery",
      desc: "We render high-resolution 4K master files (.MP4, .MOV), export social media cutdowns, and transfer copyright."
    }
  ];

  const faqs = activeSub.faqs && activeSub.faqs.length >= 3 ? activeSub.faqs : [
    {
      q: `What is the turnaround time for a 60-second ${activeSub.title}?`,
      a: "Standard production turnaround for a 60-second custom animated video is 10 to 14 business days, including scriptwriting, storyboarding, voice-over, and final animation render."
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
    <div className="digiworq-service-page-root theme-2d-animation">
      {/* 1. Hero Section */}
      <section className="service-landing-hero hero-theme-2d-animation">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">2D Animation</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>2D Animation Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Animation Quote</span>
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
            <h3>2D Animation Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Sparkles size={16} color="#A068FF" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Animation Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Animation Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Original character rigging, 60fps motion curves, and turnkey storyboarding.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Sparkles;
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
              Generic Animation Templates vs. <span className="highlight-yellow-glow">Digiworq Custom 2D Storytelling</span>
            </h2>
          </div>

          <div className="comparison-cards-grid">
            {/* Left Card: Generic */}
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Stock Template Animations</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Generic Template Creators
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
            <div className="comparison-card-winner" style={{ borderColor: '#A068FF' }}>
              <div className="comparison-card-header">
                <span className="comparison-badge-winner" style={{ borderColor: '#A068FF', color: '#A068FF', background: 'rgba(160, 104, 255, 0.15)' }}>
                  ★ Digiworq Custom Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#A068FF' }}>
                Bespoke 2D Animation Production
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
                  <span>Request Animation Quote</span>
                  <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Pipeline Section */}
      <section className="digiworq-process-section py-20">
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Our 4-Phase <span className="highlight-yellow-glow">Animation Pipeline</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {processSteps.map((p, idx) => (
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
                  <span style={{ background: '#A068FF', color: '#111827', fontWeight: 900, fontSize: '0.9rem', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>250+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Animated Videos Delivered</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>10M+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Campaign Impressions</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>100%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Custom Vector Art</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Animation Software Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Studio Motion & Audio Production Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Adobe After Effects', 'Adobe Animate CC', 'Adobe Illustrator', 'Pro Tools Audio', 'Duik Bassel Rigging', 'Lottie Web', 'Cinema 4D Lite'].map((tool, idx) => (
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
              Ready to Animate Your <span style={{ color: '#A068FF' }}>{activeSub.title}?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom animation script estimate and storyboard breakdown today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Animation Quote</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
