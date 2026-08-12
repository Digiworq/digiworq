import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function CommercialVideographyPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "30s & 60s Broadcast-Ready Commercial TVCs",
    "High-Converting Performance Ads (Meta & YouTube)",
    "Cinematic Brand Story & Vision Documentaries",
    "Product & Service Launch Promotion Videos",
    "Multi-Format Deliverables (16:9, 1:1, 9:16 Vertical)",
    "Full Post-Production: Color, VFX, Voiceover & Audio"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Tv",
      title: "Corporate Commercial Production",
      desc: "Cinematic commercial films that establish market leadership, communicate corporate vision, and build deep emotional trust with stakeholders."
    },
    {
      step: "02",
      icon: "Megaphone",
      title: "Digital Advertising Videos",
      desc: "High-energy short-form video ads engineered with strong 3-second visual hooks and compelling storytelling for Meta Ads, YouTube, and Google campaigns."
    },
    {
      step: "03",
      icon: "Box",
      title: "Product & Service Promos",
      desc: "Dynamic feature demonstrations and customer-centric problem-solving narratives designed to educate buyers and drive high-intent conversions."
    },
    {
      step: "04",
      icon: "TrendingUp",
      title: "Performance Marketing Creatives",
      desc: "High-ROI direct-response ad variations featuring UGC styles, product unboxings, split-tested hooks, and clear conversion-focused call-to-actions."
    },
    {
      step: "05",
      icon: "Film",
      title: "Brand Story & Founder Films",
      desc: "Authentic documentary-style films capturing your company's origin story, core values, craftsmanship, and visionary mission."
    },
    {
      step: "06",
      icon: "Sparkles",
      title: "End-to-End Post-Production",
      desc: "Complete post-production suite including Davinci Resolve color grading, 3D motion graphics, professional voiceover casting, and broadcast audio mastering."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Video size={22} color="#F43F5E" />,
      heading: "Cinema-Grade Production Gear",
      body: "We film on RED Digital Cinema, Sony FX6/FX3 cameras with anamorphic cinema lenses, wireless focus pullers, and studio lighting grids."
    },
    {
      icon: <Icons.FileText size={22} color="#F43F5E" />,
      heading: "Concept, Scripting & Storyboarding",
      body: "Our writers and visual directors craft captivating scripts, shot lists, and frame-by-frame storyboards that align directly with campaign KPIs."
    },
    {
      icon: <Icons.Smartphone size={22} color="#F43F5E" />,
      heading: "Multi-Platform Aspect Ratios",
      body: "Every shoot is framed and delivered in multiple formats: 16:9 widescreen for TV/YouTube, 1:1 square for feeds, and 9:16 vertical for Reels and Shorts."
    },
    {
      icon: <Icons.Award size={22} color="#F43F5E" />,
      heading: "Conversion & Brand Recall Focus",
      body: "We blend cinematic aesthetics with consumer psychology, creating commercials that stay memorable and inspire immediate buying decisions."
    }
  ];

  const whyChooseBullets = [
    "Award-winning commercial directors, scriptwriters & cinematographers.",
    "Ultra-high definition 4K/6K cinema camera systems and lighting grids.",
    "Comprehensive casting, location scouting, and set design management.",
    "Proven expertise across D2C brands, tech startups, and multinational corporations.",
    "Full post-production: Sound design, motion graphics & broadcast color grading.",
    "Multi-platform optimization with rapid turnaround times across Bangalore."
  ];

  const faqs = [
    {
      q: 'What commercial videography services does Digiworq provide?',
      a: 'We provide commercial TVCs, digital ad films, brand documentary films, product and service launch promo videos, performance marketing ads, and corporate brand videos.'
    },
    {
      q: 'Do you create advertisement videos for businesses?',
      a: 'Yes, we produce high-impact commercial advertisements tailored for paid digital marketing campaigns (Meta Ads, YouTube, Google Ads), television broadcast, and digital billboards.'
    },
    {
      q: 'Can commercial videos be used for social media marketing?',
      a: 'Yes, all our commercial productions are optimized for digital distribution, delivered in multiple aspect ratios (16:9 landscape, 9:16 vertical reels, 1:1 square) with burned-in subtitles and fast-hook intros.'
    },
    {
      q: 'Do you provide full end-to-end video production services?',
      a: 'Yes, our turnkey production workflow covers concept ideation, scriptwriting, talent casting, location permits, filming, editing, motion graphics, color grading, and licensed soundtrack mastering.'
    },
    {
      q: 'Why choose Digiworq for advertising videography in Bangalore?',
      a: 'Digiworq combines cinematic visual excellence with marketing psychology, producing commercial videos that command attention, strengthen brand equity, and generate measurable business growth.'
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
            <span className="bc-current">Commercial Videography</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#F43F5E' }}>●</span>
                <span>Commercial Film Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Commercial and Advertising</span> <span className="part-gradient">Videography</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers commercial and advertising videography services in Bangalore designed to help businesses create video content that drives brand awareness, customer engagement, and high-ROI conversions. Our creative team develops cinematic commercial videos that communicate your message with power.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Start Commercial Project</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="commercial-and-advertising-videography" title="Commercial Videography" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Commercial Video & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Tv size={16} color="#F43F5E" />
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
              Our 6 Core <span className="highlight-yellow-glow">Commercial Video Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From broadcast TV commercials to high-converting paid social ads — cinematic storytelling that sells.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Tv;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(244, 63, 94, 0.4)', color: '#F43F5E', background: 'rgba(244, 63, 94, 0.12)' }}>
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
              Broadcast Production & <span className="highlight-yellow-glow">Strategic Storytelling</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              4K/6K cinema sensors, multi-platform master edits, and marketing-driven scripts.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(244, 63, 94, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(244, 63, 94, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Commercial Videography?
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
          <h2 className="process-main-title">Produce Commercials that <span className="highlight-yellow-glow">Drive Massive Growth</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our commercial film production team write, direct, and produce high-impact video ads that convert.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Commercial Shoot</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
