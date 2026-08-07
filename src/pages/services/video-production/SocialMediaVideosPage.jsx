import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function SocialMediaWidget() {
  const [activePlatform, setActivePlatform] = useState('9:16 Instagram Reels');

  return (
    <div className="custom-widget-card video-theater-box">
      <div className="theater-screen-mockup">
        <div className="screen-play-overlay">
          <div className="play-button-pulse">
            <Icons.Smartphone size={32} color="#111827" fill="#111827" />
          </div>
          <span className="video-time-badge">Social Media Feed — Format: {activePlatform}</span>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" 
          alt="Social Media Video Production" 
          className="video-poster-img"
        />
      </div>

      <div className="theater-controls-bar">
        <div className="res-picker-row">
          <span className="res-label">Target Platform:</span>
          {['9:16 Instagram Reels', '9:16 YouTube Shorts', '1:1 Meta Ad Feed'].map((plat) => (
            <button key={plat} className={`res-pill ${activePlatform === plat ? 'active' : ''}`} onClick={() => setActivePlatform(plat)}>
              {plat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SocialMediaVideosPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "High-Engagement First 3-Second Visual Hook Scripting",
    "Vertical 9:16 4K Video Shooting & Dynamic Motion Cuts",
    "Animated Subtitle Captions with Emoji Highlights",
    "Trending Royalty-Free Audio & Sound FX Mixing",
    "Batch Shoot Bundles (8 to 15 Videos per Shoot Day)",
    "100% Commercial Usage Rights & Native Platform File Delivery"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Smartphone",
      title: "Vertical 9:16 Native Framing",
      desc: "Filmed natively in 9:16 vertical resolution for Instagram Reels, YouTube Shorts, and TikTok feeds."
    },
    {
      step: "02",
      icon: "Zap",
      title: "3-Second Hook Retention",
      desc: "Fast-paced visual hooks designed to stop thumb-scrolling and maximize algorithm watch time."
    },
    {
      step: "03",
      icon: "Sparkles",
      title: "Dynamic Subtitle Animations",
      desc: "Word-by-word animated subtitles with custom brand highlight colors and emoji callouts."
    },
    {
      step: "04",
      icon: "Music",
      title: "Trending Audio & Sound FX",
      desc: "Pairing viral audio tracks, sound pop SFX, and transition impacts for maximum retention."
    },
    {
      step: "05",
      icon: "Layers",
      title: "Batch Video Shoot Bundles",
      desc: "Filming 8 to 15 short-form reels in a single efficient 1-day studio shoot."
    },
    {
      step: "06",
      icon: "TrendingUp",
      title: "Algorithm Optimization",
      desc: "Formatted to maximize completion rates, shares, saves, and organic algorithm reach."
    }
  ];

  const genericCons = [
    "Slow-paced videos with boring openings that users scroll past instantly",
    "Uncaptioned videos unwatchable for the 80% of users viewing on mute",
    "Cropped horizontal 16:9 videos with black bars on vertical feeds",
    "Copyright strike risks from using unlicensed trending audio",
    "High cost per video when shooting single clips individually"
  ];

  const digiworqPros = [
    "Fast 3-second thumb-stopping visual hooks engineered for viral reach",
    "Native 9:16 vertical 4K recording & dynamic animated subtitles",
    "Batch video shoot bundles (10+ Reels created in 1 shoot day)",
    "100% Licensed commercial audio & sound effects library",
    "Guaranteed 48-Hour Batch Delivery Ready for Immediate Posting"
  ];

  const process = [
    { step: "01", title: "Hook Scripts & Trends", desc: "Scripting 10+ short-form viral hooks & visual shot lists." },
    { step: "02", title: "Batch Studio Shoot", desc: "Filming 10+ reels in 1 efficient studio shoot day with lighting & audio." },
    { step: "03", title: "Dynamic Cut & Captions", desc: "Fast pacing, dynamic subtitles, emoji popups & sound SFX." },
    { step: "04", title: "Batch Video Handoff", desc: "Delivering 10+ vertical 4K MP4 files ready for Instagram & Shorts." }
  ];

  const faqs = [
    {
      q: "How many social media videos can you film in a single shoot day?",
      a: "Our batch shoot package allows us to script and film 8 to 15 short-form Reels or Shorts in a single 1-day studio shoot."
    },
    {
      q: "Do you include animated subtitles and captions on all videos?",
      a: "Yes! Every social video includes word-by-word animated subtitles with highlight colors and emojis for silent scrollers."
    },
    {
      q: "Are the videos formatted for Instagram Reels, YouTube Shorts, and TikTok?",
      a: "Yes! We export native 9:16 vertical 4K MP4 files optimized for instant posting across all vertical video platforms."
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
            <span className="bc-current">Social Media Videos</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Social Reels Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Social Media Videos</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Dominate social algorithms with viral short-form videos. Digiworq scripts, shoots, and edits high-engagement 9:16 vertical Reels, Shorts, and TikToks with dynamic animated subtitles.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Batch Reel Shoot</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <SocialMediaWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Social Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Smartphone size={16} color="#EC4899" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Social Video Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Social Video Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Native 9:16 vertical framing, 3-second hook retention, and dynamic animated subtitles.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Smartphone;
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
              Low-Quality Phone Clips vs. <span className="highlight-yellow-glow">Digiworq Viral Reels Studio</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why creators and brands choose Digiworq high-production short-form video content.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Casual Phone Clips</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unoptimized Reels
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
                  ★ Digiworq Reels Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EC4899' }}>
                Viral 9:16 Short-Form Content
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
                  <span>Book Batch Reel Shoot</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Social Video Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>1,000+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Reels & Shorts Produced</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>10+ Reels</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Per Batch Shoot Day</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>9:16 4K</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Native Vertical Resolution</div>
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
            Powered By 4K Vertical Camera Rigs & Subtitle Animation Software
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Sony FX3 Vertical Rig', 'Descript Auto-Captions', 'Adobe Premiere Pro CC', 'After Effects Kinetic FX', 'DaVinci Color Grade'].map((tool, idx) => (
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
              Ready to Filming Your <span style={{ color: '#EC4899' }}>Social Reels Batch?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Book a 1-day batch shoot and get 10+ viral 9:16 vertical videos ready to publish.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Batch Reel Shoot</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
