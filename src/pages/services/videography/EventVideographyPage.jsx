import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function EventVideographyPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "4K Multi-Camera Summit & Conference Coverage",
    "Dynamic Event Highlight Recaps & Aftermovies",
    "Same-Day Social Media Reels & Shorts (9:16)",
    "High-Definition Audio & Keynote Speech Recording",
    "Product Launch & Exhibition Booth Videography",
    "Post-Production: Color Grading, Sound & Motion Graphics"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Video",
      title: "Corporate Event Videography",
      desc: "Comprehensive multi-camera coverage for annual general meetings, tech summits, keynote speeches, fireside chats, and executive networking galas."
    },
    {
      step: "02",
      icon: "Sparkles",
      title: "Product Launches & Trade Expos",
      desc: "Cinematic visual storytelling capturing dramatic product reveals, exhibition stall traffic, VIP walk-throughs, and live audience reactions."
    },
    {
      step: "03",
      icon: "Camera",
      title: "Multi-Camera Production",
      desc: "Synchronized cinema camera setups (Sony FX6/A7S3) with wireless video transmitters, gimbal steadicam movement, and director live-switching."
    },
    {
      step: "04",
      icon: "Film",
      title: "Engaging Highlight & Recap Videos",
      desc: "High-tempo cinematic montage aftermovies set to licensed soundtrack scores, blending crowd energy, keynote soundbites, and event atmosphere."
    },
    {
      step: "05",
      icon: "Smartphone",
      title: "Social-First Vertical Content",
      desc: "Rapid turnaround teaser clips, vertical 9:16 Instagram Reels, YouTube Shorts, and LinkedIn video recaps ready for viral digital distribution."
    },
    {
      step: "06",
      icon: "Tv",
      title: "Broadcast Post-Production",
      desc: "Professional Davinci Resolve color grading, multi-channel sound design, speaker lower-third overlays, and custom 3D animated event branding."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Video size={22} color="#F59E0B" />,
      heading: "Corporate Summit & Conference Filming",
      body: "We capture high-profile corporate summits with dedicated stage feeds, synchronized slide capture, and crystal-clear lavalier audio for archival and webinar repurposing."
    },
    {
      icon: <Icons.Mic size={22} color="#F59E0B" />,
      heading: "Pro Audio & Keynote Recording",
      body: "Our sound engineers connect direct audio lines into PA soundboards complemented by redundant wireless lavaliers, ensuring pristine speech clarity without background echoes."
    },
    {
      icon: <Icons.PlayCircle size={22} color="#F59E0B" />,
      heading: "Dynamic Aftermovies & Teasers",
      body: "Transform a multi-day conference into a punchy 2-minute cinematic teaser that amplifies event prestige, drives ticket sales for next year, and excites stakeholders."
    },
    {
      icon: <Icons.Palette size={22} color="#F59E0B" />,
      heading: "Branding & Motion Graphic Integration",
      body: "We incorporate company logo animations, speaker nametags, sponsor acknowledgment bumpers, and custom brand color schemes into the final video output."
    }
  ];

  const whyChooseBullets = [
    "Elite cinematographers equipped with 4K/6K cinema camera systems.",
    "Multi-camera setups with gimbals, sliders, and certified drone pilots.",
    "Pristine multi-track digital audio recording direct from stage mixers.",
    "Same-day social media teaser delivery for real-time live event hype.",
    "Comprehensive post-production: Color grading, sound design & 3D graphics.",
    "Trusted by leading tech enterprises, startups, and luxury event organizers in Bangalore."
  ];

  const faqs = [
    {
      q: 'What event videography services does Digiworq provide?',
      a: 'We provide complete end-to-end videography for corporate conferences, tech summits, trade exhibitions, product launches, award ceremonies, seminars, and milestone celebrations.'
    },
    {
      q: 'Do you offer corporate event videography in Bangalore?',
      a: 'Yes, we specialize in high-end corporate coverage, capturing keynote speeches, panel discussions, attendee networking, exhibition booths, and executive soundbites.'
    },
    {
      q: 'Can event videos be used for social media marketing?',
      a: 'Yes, we create platform-optimized event recap videos and vertical 9:16 content specifically formatted for Instagram Reels, YouTube Shorts, TikTok, and LinkedIn video feeds.'
    },
    {
      q: 'Do you provide event video editing services?',
      a: 'Yes, our post-production suite provides multi-camera synchronization, Davinci Resolve color grading, audio cleanup, motion graphic lower-thirds, animated logo intros, and background music licensing.'
    },
    {
      q: 'Why choose Digiworq for event videography in Bangalore?',
      a: 'Digiworq provides cinematic cameras, multi-camera live production, professional audio recording, fast editing turnaround, and creative visual storytelling tailored to your business goals.'
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
            <span className="bc-current">Event Videography</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#F59E0B' }}>●</span>
                <span>Cinema Production Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Event Videography</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers professional event videography services in Bangalore to capture every critical moment with creativity and precision. Whether it is a corporate summit, tech conference, product launch, exhibition, or award ceremony, our videography team delivers high-impact 4K cinematic videos.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Videography Team</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="event-videography" title="Event Videography" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Event Videography & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Video size={16} color="#F59E0B" />
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
              Our 6 Core <span className="highlight-yellow-glow">Event Videography Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From multi-cam keynote recordings to viral vertical reels — cinematic coverage of every moment.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Video;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(245, 158, 11, 0.4)', color: '#F59E0B', background: 'rgba(245, 158, 11, 0.12)' }}>
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
              Cinematic Production & <span className="highlight-yellow-glow">Storytelling</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              4K/6K cinema sensors, studio lighting, and broadcast sound engineering.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(245, 158, 11, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Event Videography?
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
          <h2 className="process-main-title">Capture Your Next Event in <span className="highlight-yellow-glow">Cinematic 4K</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our award-winning videography team film your conference, product launch, or celebration with unforgettable visual impact.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Book Event Videography</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
