import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

function VoiceOverWidget() {
  const [activeAccent, setActiveAccent] = useState('US English Professional');

  return (
    <div className="custom-widget-card video-theater-box">
      <div className="theater-screen-mockup">
        <div className="screen-play-overlay">
          <div className="play-button-pulse">
            <Icons.Volume2 size={32} color="#111827" fill="#111827" />
          </div>
          <span className="video-time-badge">Acoustic VO Studio — Accent: {activeAccent}</span>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80" 
          alt="Voice Over Recording Studio" 
          className="video-poster-img"
        />
      </div>

      <div className="theater-controls-bar">
        <div className="res-picker-row">
          <span className="res-label">Voice Accent:</span>
          {['US English Professional', 'UK Corporate Deep', 'Indian Regional Dialect'].map((acc) => (
            <button key={acc} className={`res-pill ${activeAccent === acc ? 'active' : ''}`} onClick={() => setActiveAccent(acc)}>
              {acc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VoiceOverRecordingsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Neumann U87 & Shure SM7B Studio Recording Setup",
    "Professional Male & Female Voice Artists in 15+ Languages",
    "24-bit / 96kHz Lossless Broadcast WAV Master Files",
    "iZotope RX Noise Removal, Breath Attenuation & De-Essing",
    "Frame-Accurate Video Syncing & Timecode Alignment",
    "100% Full Commercial Royalty-Free Usage Rights"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Mic",
      title: "Neumann U87 Studio Microphones",
      desc: "Recorded through world-class Neumann U87 and Sennheiser MKH 416 condenser microphones."
    },
    {
      step: "02",
      icon: "Globe",
      title: "15+ Global & Regional Languages",
      desc: "Native voice talents in US/UK English, Hindi, Kannada, Tamil, Telugu, Malayalam, and French."
    },
    {
      step: "03",
      icon: "Sliders",
      title: "Acoustic Booth Isolation",
      desc: "Double-walled soundproof isolation booths eliminating room reverberation and floor vibrations."
    },
    {
      step: "04",
      icon: "Sparkles",
      title: "iZotope RX Noise Cleanup",
      desc: "Precision spectral audio repair cleaning mouth clicks, breath pops, and electronic hums."
    },
    {
      step: "05",
      icon: "Clock",
      title: "Frame-Accurate Video Sync",
      desc: "Pacing voice over timing to match exact frame-rate timecodes of your existing video cuts."
    },
    {
      step: "06",
      icon: "ShieldCheck",
      title: "Commercial Royalty Ownership",
      desc: "Complete buyout rights for TV broadcast, radio ads, web streaming, and YouTube monetization."
    }
  ];

  const genericCons = [
    "Robotic AI voice generators that sound fake and turn off viewers",
    "Home USB microphone recordings filled with room echo and hiss",
    "Mispronounced brand names or awkward regional accents",
    "Unprocessed audio tracks with loud breath gasps and pops",
    "Ongoing annual royalty fees for voice actor licensing"
  ];

  const digiworqPros = [
    "Neumann U87 studio microphones & acoustic soundproof isolation booths",
    "Native human voice talents in 15+ global and regional Indian languages",
    "iZotope RX audio mastering with breath attenuation & EQ polishing",
    "Frame-accurate timecode syncing to existing video edits",
    "100% Lifetime Commercial Royalty-Free Buyout Rights"
  ];

  const process = [
    { step: "01", title: "Audition & Script", desc: "Reviewing voice samples, selecting voice talent & verifying script pace." },
    { step: "02", title: "Studio Recording", desc: "Recording in soundproof isolation booth through Neumann U87 mics." },
    { step: "03", title: "iZotope Audio Edit", desc: "Spectral noise cleaning, de-essing, breath control & EQ mastering." },
    { step: "04", title: "WAV & Sync Delivery", desc: "Delivering 24-bit 96kHz WAV files, video sync & royalty handoff." }
  ];

  const faqs = [
    {
      q: "Can we listen to voice sample auditions before hiring?",
      a: "Yes! We provide curated audio sample reels of male and female voice artists in your target accent and tone for approval."
    },
    {
      q: "What languages and regional accents do you offer?",
      a: "We offer native voice artists in US English, UK English, Indian Neutral English, Hindi, Kannada, Tamil, Telugu, Malayalam, Marathi, Bengali, and French."
    },
    {
      q: "How fast can you record and deliver a 2-minute voiceover script?",
      a: "Standard turnaround for voiceover recording and iZotope mastering is 24 to 48 hours."
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
            <span className="bc-current">Voice Over Recordings</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Acoustic VO Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Voice Over Recordings</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Give your videos a rich, commanding voice. Digiworq records professional human voice-over talent in 15+ languages using Neumann U87 studio microphones and soundproof isolation booths.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Listen to Voice Samples</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="voice-over-recordings" title="Voice Over Recordings" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Voice Over Specs & Master Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Volume2 size={16} color="#EC4899" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Voice Over Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Voice Over Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Neumann U87 studio optics, 15+ native languages, and lifetime royalty buyouts.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Volume2;
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
              Artificial AI Voices vs. <span className="highlight-yellow-glow">Digiworq Studio Voiceovers</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why leading commercials choose human studio voice artists for authentic emotional depth.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Robotic AI Voices</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Synthetic Voice Generators
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
                  ★ Digiworq Studio Talent
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EC4899' }}>
                Studio Human Voiceovers
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
                  <span>Listen to Voice Samples</span>
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
              Our 4-Phase <span className="highlight-yellow-glow">Voice Over Pipeline</span>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>15+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Languages & Accents</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>Neumann U87</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Studio Mic Setup</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>24-48 hrs</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Recording Turnaround</div>
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
            Powered By Neumann Microphones & iZotope Audio Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Neumann U87 AI', 'Sennheiser MKH 416', 'Universal Audio Apollo', 'iZotope RX 10', 'Pro Tools Ultimate'].map((tool, idx) => (
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
              Ready to Book Your <span style={{ color: '#EC4899' }}>Voiceover Recording?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Listen to voice auditions and get a custom recording proposal in 24 hours.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Listen to Voice Samples</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
