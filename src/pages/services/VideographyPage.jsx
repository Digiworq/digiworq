import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

function VideographyBroadcastWidget() {
  const [activeCam, setActiveCam] = useState('CAM 1');

  return (
    <div className="custom-widget-card videography-broadcast-box">
      <div className="widget-header-row">
        <Icons.Radio size={20} color="#EF4444" />
        <span className="widget-title-text">4K Multi-Cam Broadcast Switcher Deck</span>
      </div>

      <div className="cam-feed-preview">
        <div className="feed-status-tag">LIVE: {activeCam} OUTPUT</div>
        <img 
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" 
          alt="Broadcast Feed" 
          className="feed-img"
        />
      </div>

      <div className="cam-switcher-grid">
        {['CAM 1 (Stage)', 'CAM 2 (Audience)', 'CAM 3 (4K Drone)'].map((cam) => (
          <button key={cam} className={`cam-btn ${activeCam === cam ? 'active' : ''}`} onClick={() => setActiveCam(cam)}>
            {cam}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function VideographyPage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData.videography || { categoryTitle: "Videography", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Videography", overview: "4K event, commercial & drone videography.", process: [] };

  const deliverables = activeSub.deliverables || [
    "4K Cinema RAW & ProRes LOG Footage Masters",
    "Multi-Cam Live Stage & Audience Coverage",
    "4K Aerial Drone Filming with DGCA Permits",
    "Studio Multi-Track Audio Recording & Wireless Mics",
    "Social Media Cutdowns (16:9, 9:16 Vertical Reels)",
    "Complete Hard Drive & Cloud Handoff"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Camera",
      title: "4K Cinema Camera Rigging",
      desc: "Filmed on RED V-Raptor and Sony FX6 cinema camera rigs with high-speed prime lenses."
    },
    {
      step: "02",
      icon: "Radio",
      title: "Multi-Cam Live Switching",
      desc: "Synchronized multi-angle camera recording for concerts, corporate conferences, and live galas."
    },
    {
      step: "03",
      icon: "Compass",
      title: "4K Aerial Drone Cinematography",
      desc: "Licensed drone pilots capturing dramatic aerial landscape shots and venue establishing angles."
    },
    {
      step: "04",
      icon: "Mic",
      title: "Broadcast Audio Recording",
      desc: "Wireless Sennheiser & Rode lavalier microphones ensuring crystal-clear vocal capture."
    },
    {
      step: "05",
      icon: "Sliders",
      title: "DaVinci Color Grading",
      desc: "Professional colorists applying cinematic LUTs, HDR color balancing, and skin tone correction."
    },
    {
      step: "06",
      icon: "Zap",
      title: "Fast 48-Hour Turnaround",
      desc: "Rapid post-production editing for highlight reels and press releases within 48 hours."
    }
  ];

  const genericCons = [
    "Shaky handheld camera footage without professional stabilization",
    "Muffled distorted audio from built-in camera microphones",
    "Flat un-graded video with washed out colors",
    "Zero storyboarding or shot list strategy",
    "Delayed delivery taking weeks for basic event highlight reels"
  ];

  const digiworqPros = [
    "4K RED & Sony FX Cinema Camera rigs with Ronin gimbals",
    "Broadcast-grade multi-track wireless lavalier audio recording",
    "DaVinci Resolve Studio color grading & HDR color mastering",
    "Licensed 4K drone cinematography with official flight permits",
    "Guaranteed 48-Hour Turnaround for Event Highlight Reels & Masters"
  ];

  const processSteps = activeSub.process && activeSub.process.length >= 4 ? [
    { step: "01", title: activeSub.process[0].title || "Location Recce", desc: "Location scouting, lighting strategy & shot list planning." },
    { step: "02", title: activeSub.process[1].title || "Camera Rigging", desc: "Setting up multi-cam rigs, wireless mics & drone permits." },
    { step: "03", title: activeSub.process[2].title || "Live Filming", desc: "Capturing 4K multi-angle cinematic footage & b-roll." },
    { step: "04", title: activeSub.process[3].title || "Color Grade & Master", desc: "DaVinci color grading, audio mix & 4K master delivery." }
  ] : [
    { step: "01", title: "Location Recce", desc: "Location scouting, lighting strategy & shot list planning." },
    { step: "02", title: "Camera Rigging", desc: "Setting up multi-cam rigs, wireless mics & drone permits." },
    { step: "03", title: "Live Filming", desc: "Capturing 4K multi-angle cinematic footage & b-roll." },
    { step: "04", title: "Color Grade & Master", desc: "DaVinci color grading, audio mix & 4K master delivery." }
  ];

  const faqs = [
    {
      q: `What is the equipment crew setup for ${activeSub.title}?`,
      a: "Our crew includes Director of Photography (DP), Camera Operators, Audio Engineer, Gaffer (Lighting), DIT (Data Technician), and Licensed Drone Operator equipped with RED & Sony FX cameras."
    },
    {
      q: "Do you handle indoor venue lighting and audio setup?",
      a: "Yes! We bring full Aputure LED studio lighting packages, wireless mic kits, and multi-track audio recorders for any indoor venue or outdoor location."
    },
    {
      q: "How fast will we receive the final video edit?",
      a: "We deliver event teasers and Reel cutdowns within 48 hours, and complete color-graded 4K master films within 5-7 business days."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-videography">
      {/* 1. Hero Section */}
      <section className="service-landing-hero hero-theme-videography">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Videography</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Videography Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Schedule Shoot Crew</span>
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
            <h3>Videography Footage Specs & Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Video size={16} color="#EF4444" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Videography Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Videography Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              4K RED camera rigging, multi-cam broadcast switching, and DaVinci color grading.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Video;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#EF4444', background: 'rgba(239, 68, 68, 0.12)' }}>
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
              Amateur Videographers vs. <span className="highlight-yellow-glow">Digiworq Cinema Crew</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why corporate brands and event organizers trust Digiworq for broadcast video production.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Amateur Videographers</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unstabilized Handheld Videographers
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

            <div className="comparison-card-winner" style={{ borderColor: '#EF4444' }}>
              <div className="comparison-card-header">
                <span className="comparison-badge-winner" style={{ borderColor: '#EF4444', color: '#EF4444', background: 'rgba(239, 68, 68, 0.15)' }}>
                  ★ Digiworq Cinema Crew
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                4K Broadcast Videography Production
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
                  <span>Schedule Videography</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Shoot Production Pipeline</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {processSteps.map((p, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)', 
                  border: '1px solid rgba(239, 68, 68, 0.3)', 
                  borderRadius: '20px', 
                  padding: '32px 28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <span style={{ background: '#EF4444', color: '#FFFFFF', fontWeight: 900, fontSize: '0.9rem', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EF4444' }}>300+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Video Shoots Filmed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>4K RED</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Cinema Camera Rigs</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>48 hrs</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Highlight Reel Delivery</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Production Gear Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Broadcast Camera Gear & Post Production Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['RED V-Raptor 8K', 'Sony FX6 Cinema', 'DaVinci Resolve 19', 'DJI Ronin 4D Gimbal', 'Sennheiser Wireless Mics', 'Aputure 600d Lights', 'Shure Broadcast Audio'].map((tool, idx) => (
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
                    <Icons.ChevronDown size={22} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#EF4444' }} />
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
              Ready to Book Your <span style={{ color: '#EF4444' }}>{activeSub.title}?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Schedule your 4K video shoot crew and receive a custom estimate today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Schedule Videography Crew</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
