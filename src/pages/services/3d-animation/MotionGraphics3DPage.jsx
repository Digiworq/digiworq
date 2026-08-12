import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function MotionGraphics3DPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "3D Brand Animation Videos",
    "Product Visualization & Exploded Views",
    "Marketing & Promotional 3D Videos",
    "Explainer & Educational 3D Content",
    "Corporate 3D Keynotes & Presentations",
    "Social Media 3D Animated Loops"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Sparkles",
      title: "Brand Animation Videos",
      desc: "We create brand-focused 3D animations that communicate your business message in a powerful, visually captivating way that boosts brand recall."
    },
    {
      step: "02",
      icon: "Megaphone",
      title: "Marketing & Promotional Videos",
      desc: "We design high-impact 3D motion graphics for ad campaigns, digital marketing, and social channels that grab attention and drive conversions."
    },
    {
      step: "03",
      icon: "Box",
      title: "Product Visualization",
      desc: "We showcase products through photorealistic 3D animations, highlighting intricate design details, internal mechanics, and real-world functionality."
    },
    {
      step: "04",
      icon: "Briefcase",
      title: "Corporate Motion Graphics",
      desc: "We create animated 3D visual content for corporate presentations, training materials, investor pitch decks, and B2B business communications."
    },
    {
      step: "05",
      icon: "Lightbulb",
      title: "Explainer & Educational Videos",
      desc: "We simplify complex technical concepts and services through engaging 3D animated explainer videos that educate, clarify, and persuade."
    },
    {
      step: "06",
      icon: "Share2",
      title: "Social Media Video Production",
      desc: "We produce short-form 3D animated videos engineered for viral reach, high audience retention, and engagement on Instagram, YouTube Shorts, and LinkedIn."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Layers size={22} color="#818CF8" />,
      heading: "3D Animation & Motion Graphics Bangalore",
      body: "Our animation and motion graphics services combine cutting-edge technology and visual storytelling to create compelling experiences for businesses across all industries."
    },
    {
      icon: <Icons.Cpu size={22} color="#818CF8" />,
      heading: "Product Demo Animations",
      body: "We demonstrate product features, benefits, assembly sequences, and internal components through realistic 3D animated video demonstrations."
    },
    {
      icon: <Icons.Video size={22} color="#818CF8" />,
      heading: "End-to-End 3D Video Production",
      body: "Our comprehensive production pipeline spans concept ideation, scripting, 3D modeling, texturing, animation, cinematic lighting, rendering, sound design, and post-production."
    },
    {
      icon: <Icons.Settings size={22} color="#818CF8" />,
      heading: "Custom 3D Animation Solutions",
      body: "We develop customized 3D animation projects tailored to your specific industry, target audience demographics, and commercial marketing objectives."
    }
  ];

  const whyChooseBullets = [
    "We have seasoned 3D animation and CGI motion design experts.",
    "We provide customized 3D motion graphics solutions for every brand.",
    "We offer photorealistic rendering, cinematic lighting, and advanced visual effects.",
    "We focus on marketing-oriented, high-converting video production.",
    "We provide end-to-end animation support from initial concept to final delivery.",
    "We optimize video formats and aspect ratios across web, social, broadcast, and mobile."
  ];

  const faqs = [
    {
      q: 'What are 3D motion graphics services?',
      a: '3D motion graphics services involve creating animated 3D visual elements, kinetic typography, and realistic CGI scenes to communicate complex information, promote products, and elevate brand storytelling.'
    },
    {
      q: 'What types of 3D animation videos do you create?',
      a: 'We create 3D motion graphics, brand videos, product demo animations, explainer videos, corporate presentations, educational content, and social media promotional videos.'
    },
    {
      q: 'Do you provide customized 3D motion graphics solutions?',
      a: 'Yes, we create custom 3D animation projects tailored to your brand identity, marketing objectives, and technical business requirements.'
    },
    {
      q: 'Can 3D motion graphics be used for marketing campaigns?',
      a: 'Yes, 3D motion graphics are highly effective in digital advertising, social media campaigns, product launch events, trade show displays, and brand awareness initiatives.'
    },
    {
      q: 'Why choose Digiworq for 3D motion graphics in Bangalore?',
      a: 'Digiworq delivers compelling storytelling, top-tier 3D CGI expertise, cinematic rendering quality, and tailored motion graphics that help businesses stand out and captivate their audiences.'
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
            <span className="bc-link-sub">3D Animation</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">3D Motion Graphics</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#818CF8' }}>●</span>
                <span>3D Motion Graphics Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">3D Motion Graphics</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides 3D motion graphics services in Bangalore that help businesses share ideas through engaging animations. Our team makes high-quality 3D motion graphics, videos, product animations and marketing content designed to improve audience engagement and strengthen brand communication.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Motion Graphics Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="3d-motion-graphics" title="3D Motion Graphics" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>3D Motion Graphics Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Box size={16} color="#818CF8" />
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
              Our 6 Core <span className="highlight-yellow-glow">Motion Graphics Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From product visualizations to viral social media loops — we create dynamic 3D experiences that drive results.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Box;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(129, 140, 248, 0.4)', color: '#818CF8', background: 'rgba(129, 140, 248, 0.12)' }}>
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
              3D Animation & Video <span className="highlight-yellow-glow">Production Capabilities</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Combining cinematic creativity and high-end CGI rendering for unforgettable digital campaigns.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(129, 140, 248, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(129, 140, 248, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for 3D Motion Graphics?
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
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '40px' }}>
            <h2 className="process-main-title">Frequently Asked <span className="highlight-yellow-glow">Questions</span></h2>
          </div>
          <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>{faq.q}</h4>
                  <Icons.ChevronDown size={18} className={`faq-chevron ${activeFaq === i ? 'rotated' : ''}`} />
                </button>
                {activeFaq === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="service-bento-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container" style={{ textAlign: 'center', padding: '60px 24px' }}>
          <h2 className="process-main-title">Elevate Your Brand with <span className="highlight-yellow-glow">3D Motion Graphics</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our 3D animation team create captivating motion graphics that explain your products, engage your audience, and accelerate growth.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start 3D Motion Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
