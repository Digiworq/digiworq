import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ArchitectureAnimation3DPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "3D Architectural Visualization Bangalore",
    "Residential & Villa Project Walkthroughs",
    "Commercial Property & Office Visualization",
    "Architectural Walkthrough Animations",
    "Investor & Client Concept Presentations",
    "Real Estate Launch & Marketing Visuals"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Building",
      title: "3D Architectural Visualization",
      desc: "We transform design concepts, floor plans and project layouts into realistic visual experiences that help clients and investors understand project ideas clearly and effectively."
    },
    {
      step: "02",
      icon: "Home",
      title: "Residential Project Visualization",
      desc: "Showcase apartments, villas, gated communities and residential developments with realistic 3D animations that bring every architectural detail to life."
    },
    {
      step: "03",
      icon: "Briefcase",
      title: "Commercial Property Visualization",
      desc: "Create immersive 3D visual presentations for office buildings, retail spaces, hotels and commercial developments that captivate stakeholders."
    },
    {
      step: "04",
      icon: "Eye",
      title: "Architectural Walkthrough Animations",
      desc: "Develop photorealistic 3D walkthroughs that allow viewers to explore project layouts, interior spaces, lighting and exterior landscape designs."
    },
    {
      step: "05",
      icon: "Layers",
      title: "Design Concept Presentations",
      desc: "Present architectural blueprints and concept ideas with realistic animations that enhance understanding, speed approvals and improve decision-making."
    },
    {
      step: "06",
      icon: "TrendingUp",
      title: "3D Animation for Real Estate Projects",
      desc: "Help developers showcase project features, amenities, landscapes and infrastructure through engaging 3D visuals that attract high-intent buyers and investors."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Users size={22} color="#38BDF8" />,
      heading: "Investor & Client Presentations",
      body: "We create animation videos for project approvals, investor meetings and client presentations. Our 3D architecture animation services make it easy to convey scale, luxury, and functionality."
    },
    {
      icon: <Icons.Megaphone size={22} color="#38BDF8" />,
      heading: "Marketing & Promotional Visuals",
      body: "Use 3D animations for property launches, digital marketing campaigns, social media promotions, hoardings, brochures and interactive sales center displays."
    },
    {
      icon: <Icons.Video size={22} color="#38BDF8" />,
      heading: "Real Estate Walkthrough Videos",
      body: "We create 3D walkthrough animations that provide a detailed, cinematic view of the property, floor plans, natural lighting, and surrounding environment."
    },
    {
      icon: <Icons.Sparkles size={22} color="#38BDF8" />,
      heading: "Project Launch Presentations",
      body: "We produce compelling 3D animated content for real estate launches, property exhibitions, expo booths and digital ad campaigns that maximize buyer interest."
    }
  ];

  const whyChooseBullets = [
    "We are 3D architectural visualization experts with deep industry experience.",
    "We deliver photorealistic, high-resolution 3D animation outputs.",
    "We offer customized solutions for residential, commercial, and infrastructure projects.",
    "We utilize advanced 3D animation, lighting, and cinematic rendering technologies.",
    "We provide end-to-end project support from 2D CAD floor plans to final render.",
    "We create conversion-oriented, marketing-focused presentations for buyers and investors."
  ];

  const faqs = [
    {
      q: 'What is 3D architecture animation?',
      a: '3D architecture animation is the process of creating animated visualizations of buildings, properties and architectural designs to help viewers understand project concepts, layouts, and aesthetics before construction starts.'
    },
    {
      q: 'Who can benefit from architectural visualization services?',
      a: 'Architects, builders, real estate developers, interior designers, construction companies, urban planners and property marketers can all benefit from our 3D architectural visualization services.'
    },
    {
      q: 'Do you provide walkthrough animations?',
      a: 'Yes we create 3D walkthrough videos that showcase interiors, exteriors, layouts, landscape architecture and project amenities in an immersive, photorealistic format.'
    },
    {
      q: 'Can 3D animations be used for real estate marketing?',
      a: 'Yes 3D architectural animations are highly effective for property marketing, project pre-launches, investor pitch decks, exhibition booths, website showcases and digital advertising campaigns.'
    },
    {
      q: 'Why choose Digiworq for architecture animation in Bangalore?',
      a: 'Digiworq provides realistic visualizations, creative animation solutions, advanced rendering techniques and customized architectural presentations that help businesses showcase projects effectively and drive sales.'
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
            <span className="bc-current">3D Architecture Animation</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#38BDF8' }}>●</span>
                <span>3D Architectural Visualization · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">3D Architecture Animation</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers 3D architecture animation services in Bangalore that help architects, builders, real estate developers and construction companies show projects through realistic and immersive visual presentations. Our 3D architecture animation services make it easy for clients and investors to see what projects will look like before construction starts.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get 3D Animation Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="3d-architecture-animation" title="3D Architectural Visualization" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>3D Architectural Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Building size={16} color="#38BDF8" />
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
              Our 6 Core <span className="highlight-yellow-glow">3D Visualization Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From photorealistic exterior renders to interactive interior walkthroughs — we bring every architectural vision to life.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Building;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(56, 189, 248, 0.4)', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)' }}>
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
              Architectural <span className="highlight-yellow-glow">3D Animation Solutions</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Designed to improve project presentations, marketing campaigns and stakeholder communication.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(56, 189, 248, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for 3D Architecture Animation?
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
          <h2 className="process-main-title">Bring Your Architectural Vision <span className="highlight-yellow-glow">to Life</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our 3D visualization team create realistic architectural walkthroughs and animations that attract buyers, impress investors, and elevate your project marketing.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start 3D Architecture Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
