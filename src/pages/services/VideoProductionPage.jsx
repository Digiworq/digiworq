import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

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

  const benefits = [
    {
      icon: "Camera",
      title: "4K Cinema Production",
      desc: "Shot on cinema-grade cameras with prime lenses, pro lighting rigs, and wireless audio setups."
    },
    {
      icon: "Film",
      title: "Color Grading & VFX",
      desc: "DaVinci Resolve studio color grading and seamless visual effects for maximum brand prestige."
    },
    {
      icon: "TrendingUp",
      title: "High Conversion Rate",
      desc: "Videos crafted with strong narrative hooks designed to boost landing page conversion by up to 80%."
    },
    {
      icon: "Clock",
      title: "Fast Turnaround",
      desc: "Streamlined post-production workflow delivering high-res master edits in 3 to 5 days."
    }
  ];

  const faqs = [
    {
      q: "What camera equipment do you use for video production shoots?",
      a: "We shoot on RED, Sony FX cinema cameras, DJI Ronin gimbals, broadcast Shure/Rode audio, and Aputure studio lights."
    },
    {
      q: "Do you handle scripting and storyboarding before filming?",
      a: "Yes! We handle end-to-end production: creative scripting, visual storyboards, location scouting, talent casting, filming, and post-production."
    },
    {
      q: "What formats do you deliver for digital campaigns?",
      a: "We deliver full-res 16:9 master files for TV/YouTube, 9:16 vertical cuts for Reels/Shorts/TikTok, and compressed web formats."
    },
    {
      q: "Can you film on-location at our office or venue?",
      a: "Absolutely! We provide full mobile production units for indoor and outdoor shoots across Bangalore and PAN India."
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
                <span>4K Cinema Video Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Cinema Shoot</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <VideoTheaterWidget />
            </div>
          </div>

          {activeSub?.deliverables && activeSub.deliverables.length > 0 && (
            <div className="subservice-deliverables-banner">
              <h3>4K Cinema Specs & Master Deliverables:</h3>
              <div className="deliverables-pills-wrap">
                {activeSub.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliv-pill-item">
                    <Icons.Film size={16} color="#F5B800" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. Key Advantages & Benefits Grid */}
      <section className="digiworq-benefits-section py-16" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Why Choose Digiworq For <span className="highlight-yellow-glow">{activeSub.title}</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Cinema-grade quality engineered for maximum brand engagement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, idx) => {
              const IconComp = Icons[b.icon] || Icons.Sparkles;
              return (
                <div key={idx} className="custom-widget-card" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(245, 184, 0, 0.25)', padding: '28px 24px', borderRadius: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(245, 184, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                    <IconComp size={22} color="#F5B800" />
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px' }}>{b.title}</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Process Section */}
      <section className="digiworq-process-section">
        <div className="section-container">
          <div className="process-header-box">
            <h2 className="process-main-title">
              Our {activeSub?.title || "Video"} <span className="highlight-yellow-glow">Production Pipeline</span>
            </h2>
          </div>

          <div className="process-cards-grid-v2">
            {activeSub?.process && activeSub.process.map((p, idx) => (
              <div className="process-card-v2" key={idx}>
                <div className="card-top-row">
                  <div className="step-circle-badge"><span>{p.step || idx+1}</span></div>
                  <h3 className="step-title-v2">{p.title}</h3>
                </div>
                <p className="step-desc-v2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Impact Stats Bar */}
      <section className="py-12" style={{ background: 'linear-gradient(180deg, #0B0F19 0%, #05070F 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>500+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Videos Produced</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>50M+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Views Generated</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>99.9%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>On-Time Delivery</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs Accordion */}
      <section className="py-16" style={{ background: '#05070F' }}>
        <div className="section-container" style={{ maxWidth: '900px' }}>
          <div className="process-header-box text-center" style={{ marginBottom: '40px' }}>
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
                  style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', overflow: 'hidden' }}
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, textAlign: 'left', cursor: 'pointer' }}
                  >
                    <span>{faq.q}</span>
                    <Icons.ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#F5B800' }} />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 20px 24px', color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. High-Converting Bottom CTA Banner */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B0F19 100%)' }}>
        <div className="section-container text-center">
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
              Ready to Filming Your <span style={{ color: '#F5B800' }}>{activeSub.title}?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', marginBottom: '28px', lineHeight: 1.6 }}>
              Get a custom production proposal and camera crew breakdown for your shoot in Bangalore or PAN India.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Cinema Production Shoot</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
