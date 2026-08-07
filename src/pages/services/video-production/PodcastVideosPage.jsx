import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function PodcastMixerWidget() {
  const [activeCam, setActiveCam] = useState('Cam 1 (Wide)');
  const [micLevel, setMicLevel] = useState(85);

  return (
    <div className="custom-widget-card tech-terminal-box">
      <div className="terminal-header-bar">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="terminal-file-name">Broadcast Podcast Studio Deck — 4K Multi-Cam</span>
      </div>

      <div className="terminal-tabs-row">
        <button className={`term-tab ${activeCam === 'Cam 1 (Wide)' ? 'active' : ''}`} onClick={() => setActiveCam('Cam 1 (Wide)')}>Cam 1 (Wide Angle)</button>
        <button className={`term-tab ${activeCam === 'Cam 2 (Host)' ? 'active' : ''}`} onClick={() => setActiveCam('Cam 2 (Host)')}>Cam 2 (Host Tight)</button>
        <button className={`term-tab ${activeCam === 'Cam 3 (Guest)' ? 'active' : ''}`} onClick={() => setActiveCam('Cam 3 (Guest)')}>Cam 3 (Guest Tight)</button>
      </div>

      <div className="brand-preview-canvas" style={{ borderColor: 'rgba(245, 184, 0, 0.3)', boxShadow: '0 10px 30px rgba(245, 184, 0, 0.15)', margin: '16px 0 12px 0' }}>
        <div className="canvas-logo-mark" style={{ backgroundColor: 'rgba(245, 184, 0, 0.2)', color: '#F5B800' }}>
          <Icons.Video size={28} />
        </div>
        <div className="canvas-text-group">
          <h4 style={{ color: '#FFFFFF' }}>Active Feed: {activeCam}</h4>
          <span style={{ color: '#F5B800', fontWeight: 700, fontSize: '0.85rem' }}>4K ProRes 422 HQ · 24fps · Broadcast Audio</span>
        </div>
      </div>

      <div className="budget-slider-row" style={{ marginTop: '12px' }}>
        <div className="slider-label-flex">
          <span>Shure SM7B Master Gain:</span>
          <strong>{micLevel} dB (+28dB Clean Boost)</strong>
        </div>
        <input 
          type="range" 
          min="50" 
          max="100" 
          value={micLevel} 
          onChange={(e) => setMicLevel(Number(e.target.value))} 
          className="budget-range-input"
        />
      </div>
    </div>
  );
}

export default function PodcastVideosPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Multi-Camera 4K Cinema Studio Recording",
    "Broadcast Shure SM7B / Rode Microphone Audio",
    "Dynamic Multi-Cam Live Switcher Editing",
    "Short Reels & TikTok Viral Clips Extraction",
    "Full Episode Master for YouTube, Spotify & Apple Podcasts",
    "Show Notes & Episode Timestamp Chapter Markers"
  ];

  const benefits = [
    {
      icon: "Video",
      title: "Multi-Angle Cinema Rigging",
      desc: "4K Sony & RED cinema camera setups capturing host, guest, and wide studio angles simultaneously."
    },
    {
      icon: "Mic",
      title: "Broadcast Acoustic Audio",
      desc: "Acoustically treated studio environment with Shure SM7B microphones and Rodecaster Pro mixers."
    },
    {
      icon: "Scissors",
      title: "Viral Shorts & Reels Extraction",
      desc: "We extract 5 to 10 high-impact vertical Reels with dynamic subtitles to blow up your social reach."
    },
    {
      icon: "Radio",
      title: "End-to-End Publishing",
      desc: "Complete post-production, color grading, noise reduction, and formatting for YouTube & Spotify."
    }
  ];

  const process = [
    { step: "01", title: "Pre-Production", desc: "Setting up studio lighting, acoustic mics, and teleprompters." },
    { step: "02", title: "Live Recording", desc: "Capturing multi-angle 4K video and crisp uncompressed audio." },
    { step: "03", title: "Post-Production", desc: "Editing camera switches, sound mastering, and adding lower thirds." },
    { step: "04", title: "Shorts & Launch", desc: "Exporting viral social shorts and publishing full podcast episodes." }
  ];

  const faqs = [
    {
      q: "Where is your podcast video recording studio located?",
      a: "Our fully equipped acoustic podcast studio is located in Bangalore. We also offer mobile multi-cam studio setups for filming on-location at your corporate offices."
    },
    {
      q: "How many cameras and microphones do you use per episode?",
      a: "Our standard setup includes 3 cinema 4K cameras (Host, Guest, Wide angle) and up to 4 broadcast Shure SM7B microphones."
    },
    {
      q: "Do you create YouTube Shorts and Instagram Reels from podcast episodes?",
      a: "Yes! Every podcast package includes 5-10 vertical shorts edited with animated kinetic captions, hook titles, and sound effects."
    },
    {
      q: "What is the turnaround time for a complete edited episode?",
      a: "Standard delivery for full edited episodes along with social shorts is 3-5 business days."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-video-production">
      {/* 1. Hero Section with Interactive Widget */}
      <section className="service-landing-hero hero-theme-video-production">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Video Production</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Podcast Video Production</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Bangalore Studio Recording · 4K Multi-Cam</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Podcast Video Production</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Build authority and grow your audience with studio-quality video podcasts. Digiworq offers multi-cam studio recording, broadcast audio engineering, cinematic post-production, and viral short-clip creation for YouTube & Spotify.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Podcast Studio</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <PodcastMixerWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Podcast Video Specs & Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Mic size={16} color="#F5B800" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Advantages & Benefits Grid */}
      <section className="digiworq-benefits-section py-16" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Why Choose Digiworq For <span className="highlight-yellow-glow">Podcast Production</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Everything you need to produce, edit, and scale a top 1% video podcast.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, idx) => {
              const IconComp = Icons[b.icon] || Icons.Sparkles;
              return (
                <div key={idx} className="custom-widget-card" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(245, 184, 0, 0.2)', padding: '28px 24px', borderRadius: '16px' }}>
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

      {/* 3. Process Pipeline Section */}
      <section className="digiworq-process-section">
        <div className="section-container">
          <div className="process-header-box">
            <h2 className="process-main-title">
              Our Podcast <span className="highlight-yellow-glow">Production Pipeline</span>
            </h2>
          </div>

          <div className="process-cards-grid-v2">
            {process.map((p, idx) => (
              <div className="process-card-v2" key={idx}>
                <div className="card-top-row">
                  <div className="step-circle-badge"><span>{p.step}</span></div>
                  <h3 className="step-title-v2">{p.title}</h3>
                </div>
                <p className="step-desc-v2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Impact Stats Counter Bar */}
      <section className="py-12" style={{ background: 'linear-gradient(180deg, #0B0F19 0%, #05070F 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>150+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Episodes Recorded</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>25M+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Organic Views</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>99.8%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>On-Time Delivery</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions Accordion Section */}
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
              Ready to Launch Your <span style={{ color: '#F5B800' }}>Video Podcast?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', marginBottom: '28px', lineHeight: 1.6 }}>
              Book your studio session today. Our Bangalore team handles everything from multi-cam recording to viral clip editing.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Podcast Studio Session</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
