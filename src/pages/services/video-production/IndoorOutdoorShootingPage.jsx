import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function BroadcastCameraWidget() {
  const [activeCam, setActiveCam] = useState('CAM 1 (RED V-Raptor)');

  return (
    <div className="custom-widget-card videography-broadcast-box">
      <div className="widget-header-row">
        <Icons.Radio size={20} color="#EF4444" />
        <span className="widget-title-text">4K Multi-Cam Broadcast Switcher</span>
      </div>

      <div className="cam-feed-preview">
        <div className="feed-status-tag">LIVE: {activeCam} OUTPUT</div>
        <img 
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" 
          alt="Cinema Shoot Feed" 
          className="feed-img"
        />
      </div>

      <div className="cam-switcher-grid">
        {['CAM 1 (RED V-Raptor)', 'CAM 2 (Sony FX6)', 'CAM 3 (4K Drone)'].map((cam) => (
          <button key={cam} className={`cam-btn ${activeCam === cam ? 'active' : ''}`} onClick={() => setActiveCam(cam)}>
            {cam}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function IndoorOutdoorShootingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "4K RED & Sony FX Cinema Camera Rigs",
    "Studio Aputure Lighting & Multi-Cam Rigging",
    "On-Location Indoor & Outdoor Permits",
    "Professional Director & Cinematographer Crew",
    "RAW Cinema Footage & DaVinci Color Graded Masters",
    "100% Commercial Usage Rights & Hard Drive Handoff"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Camera",
      title: "4K Cinema Camera Rigging",
      desc: "Filmed on RED V-Raptor 8K and Sony FX6 cinema camera setups with high-speed prime lenses."
    },
    {
      step: "02",
      icon: "Sun",
      title: "Studio & Outdoor Lighting Rigs",
      desc: "Aputure 600d & 300x LED studio lights with softboxes, C-stands, and diffusion panels for perfect exposure."
    },
    {
      step: "03",
      icon: "Mic",
      title: "Multi-Track Audio Recording",
      desc: "Sennheiser & Rode wireless lavalier microphones capturing broadcast-quality dialogue and ambient sound."
    },
    {
      step: "04",
      icon: "Compass",
      title: "4K Aerial Drone Cinematography",
      desc: "Licensed drone pilots capturing establishing venue angles, landscapes, and aerial action shots."
    },
    {
      step: "05",
      icon: "Sliders",
      title: "On-Set DIT Data Offloading",
      desc: "Digital Intermediate Technician (DIT) managing real-time dual backup offloading and LUT color previewing."
    },
    {
      step: "06",
      icon: "ShieldCheck",
      title: "Location Permits & Filming Rights",
      desc: "Complete handling of municipal outdoor shooting permits, location clearances, and insurance compliance."
    }
  ];

  const genericCons = [
    "Shaky handheld smartphone video clips with poor lighting",
    "Distorted, muffled audio recorded from internal camera mics",
    "Uncalibrated flat video with washed out colors and dark shadows",
    "Lack of shot lists, storyboards, or director supervision",
    "Delayed delivery schedules taking weeks for raw footage cuts"
  ];

  const digiworqPros = [
    "4K RED & Sony FX cinema camera setups with Ronin gimbals",
    "Aputure studio LED lighting packages & wireless lavalier audio",
    "Licensed 4K drone cinematography with official flight permits",
    "On-set DIT real-time dual data backup & LUT color monitoring",
    "Guaranteed 48-Hour Highlight Edit Delivery & 4K Master Handoff"
  ];

  const process = [
    { step: "01", title: "Location Recce & Script", desc: "Site inspection, sun tracking, lighting strategy & visual shot list planning." },
    { step: "02", title: "Rigging & Crew Setup", desc: "Setting up 4K camera rigs, studio lighting softboxes, and wireless audio lavaliers." },
    { step: "03", title: "Live Cinema Filming", desc: "Capturing multi-angle 4K footage, interview dialogue, and cinematic b-roll." },
    { step: "04", title: "DIT Backup & Master", desc: "Dual hard drive data offloading, DaVinci color grading & 4K master delivery." }
  ];

  const faqs = [
    {
      q: "What equipment crew is included for indoor and outdoor shoots?",
      a: "Our crew includes Director of Photography (DP), Camera Operators, Audio Engineer, Gaffer (Lighting), DIT (Data Technician), and Licensed Drone Operator equipped with RED & Sony FX cinema gear."
    },
    {
      q: "Do you handle outdoor location permits in Bangalore and PAN India?",
      a: "Yes! We handle location scouting, municipal outdoor shooting permits, venue clearances, and drone flight permissions."
    },
    {
      q: "Can we review the live camera footage on set during filming?",
      a: "Yes! We set up wireless client monitors on set so you can review live camera angles and approve shots in real time."
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
            <span className="bc-current">Indoor and Outdoor Shooting</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Cinema Production Crew · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Indoor & Outdoor Shooting</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides high-end cinema camera crews for indoor studio sets and outdoor location video shoots. We bring professional RED/Sony cinema cameras, studio lighting, and audio direction to capture stunning visuals.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Shoot Crew</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="indoor-and-outdoor-shooting" title="Indoor & Outdoor Shooting" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Shoot Specs & Physical Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Video size={16} color="#EC4899" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Shoot Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Shoot Production Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              4K RED camera rigging, studio LED lighting, and multi-track wireless audio capture.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Camera;
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
              Amateur Videographers vs. <span className="highlight-yellow-glow">Digiworq Cinema Crew</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why leading brands choose Digiworq professional camera crews over basic videographers.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Basic Videographers</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unstabilized Handheld Filming
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
                  ★ Digiworq Cinema Crew
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EC4899' }}>
                4K Broadcast Cinema Production
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
                  <span>Book Shoot Crew</span>
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
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Location Shoots Completed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>4K RED</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Cinema Camera Setup</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>48 hrs</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>DIT Backup & Preview</div>
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
            Powered By Studio Lighting, Cinema Cameras & Audio Gear
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['RED V-Raptor 8K', 'Sony FX6 Cinema', 'Arri Alexa Mini', 'Aputure 600d Lighting', 'Sennheiser Wireless Mics', 'DJI Ronin 4D Gimbal', 'DaVinci Resolve 19'].map((tool, idx) => (
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
              Ready to Schedule Your <span style={{ color: '#EC4899' }}>Shoot Crew?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom 4K video shoot proposal and equipment breakdown today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Shoot Crew</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
