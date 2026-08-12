import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ModelShootsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Agency-Ready Modeling Portfolio & Comp Cards",
    "High-Fashion Editorial & Lookbook Shoots",
    "E-Commerce Apparel & Brand Campaigns",
    "Indoor Studio Shoots with Multi-Light Setups",
    "Outdoor Lifestyle & Architectural Locations",
    "Magazine-Grade Skin & Beauty Retouching"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Users",
      title: "Modeling Portfolio Development",
      desc: "Complete agency-ready portfolios featuring clean beauty headshots, expressive mid-length portraits, fitness shots, dynamic full-length poses, and composite comp cards."
    },
    {
      step: "02",
      icon: "Megaphone",
      title: "Commercial Brand Campaigns",
      desc: "High-impact visual campaigns for apparel labels, footwear, cosmetics, and jewelry brands engineered for digital billboards, e-commerce, and print ads."
    },
    {
      step: "03",
      icon: "Camera",
      title: "Indoor Studio Shoots",
      desc: "State-of-the-art studio equipped with high-end beauty dishes, octaboxes, colored creative gels, wind machines, and seamless cyclorama backdrops."
    },
    {
      step: "04",
      icon: "Sun",
      title: "Outdoor Fashion Shoots",
      desc: "On-location fashion shoots across Bangalore's iconic urban architecture, heritage sites, and lush nature spots with battery-powered mobile strobes."
    },
    {
      step: "05",
      icon: "BookOpen",
      title: "Editorial & Lookbook Shoots",
      desc: "Avant-garde creative direction, conceptual styling, dramatic cinematic lighting, and seasonal lookbook storytelling for magazines and online fashion portals."
    },
    {
      step: "06",
      icon: "Sparkles",
      title: "High-End Beauty Retouching",
      desc: "Advanced frequency separation, natural skin texture preservation, color grading, flyaway hair cleanup, and digital wardrobe styling touchups."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Camera size={22} color="#EC4899" />,
      heading: "Model Photographers in Bangalore",
      body: "Our seasoned fashion photographers specialize in posing direction, emotive expressions, and body language to bring out every model's unique charisma."
    },
    {
      icon: <Icons.Sparkles size={22} color="#EC4899" />,
      heading: "In-House Styling & Makeup (MUA)",
      body: "We partner with top Bangalore makeup artists, hair stylists, and fashion wardrobe consultants to ensure camera-ready looks for every change."
    },
    {
      icon: <Icons.Layers size={22} color="#EC4899" />,
      heading: "Brand & E-Commerce Lookbooks",
      body: "Produce consistent, color-calibrated lookbooks for online fashion stores, Myntra/Amazon fashion catalogues, and seasonal designer collections."
    },
    {
      icon: <Icons.Award size={22} color="#EC4899" />,
      heading: "Agency Comp Cards & Digital Folios",
      body: "Receive high-resolution digital composite cards (Zed cards) and responsive mobile web portfolios formatted to land bookings with casting directors."
    }
  ];

  const whyChooseBullets = [
    "Elite fashion photographers experienced in high-fashion and commercial shoots.",
    "Fully equipped climate-controlled studio and curated outdoor location shoots.",
    "Comprehensive portfolio curation with posing guidance for new and pro models.",
    "In-house makeup artists, hair stylists, and wardrobe assistance.",
    "Magazine-grade frequency separation retouching with natural skin texture.",
    "Fast delivery of print-ready high-resolution masters and digital comp cards."
  ];

  const faqs = [
    {
      q: 'What model photography services does Digiworq provide?',
      a: 'We provide modeling portfolio shoots, high-fashion editorial lookbooks, commercial e-commerce apparel photography, influencer personal branding shoots, and beauty/cosmetic campaigns.'
    },
    {
      q: 'Do you offer professional portfolio shoots for models?',
      a: 'Yes, we create complete modeling portfolios tailored to agency submissions, including beauty headshots, expressive half-body shots, full-length fashion looks, and digital comp cards.'
    },
    {
      q: 'Can Digiworq conduct outdoor and studio model photoshoots?',
      a: 'Yes, we operate a fully equipped indoor studio with strobe lighting and also conduct on-location outdoor fashion shoots across Bangalore\'s scenic urban and natural locations.'
    },
    {
      q: 'Do you provide image editing and retouching services?',
      a: 'Yes, all model shoots include professional high-end retouching, skin tone balancing, blemish removal, stray hair cleanup, color grading, and garment enhancements.'
    },
    {
      q: 'Why choose Digiworq for model photography in Bangalore?',
      a: 'Digiworq combines experienced fashion photographers, creative posing direction, in-house makeup & styling support, state-of-the-art lighting, and fast portfolio delivery.'
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
            <span className="bc-link-sub">Photography</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Model Shoots</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#EC4899' }}>●</span>
                <span>Fashion Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Model Photography</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers premier model photography in Bangalore for aspiring models, established fashion labels, influencers, and lifestyle brands. Our expert fashion photographers capture personality, style, and confidence to build commanding portfolios and high-converting commercial fashion campaigns.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Model Shoot</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="model-shoots" title="Model Photography" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Model Shoot Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Users size={16} color="#EC4899" />
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
              Our 6 Core <span className="highlight-yellow-glow">Model Photography Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From agency comp cards to high-fashion editorial lookbooks — visual charisma in every frame.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Users;
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

      {/* Detailed Capabilities Grid */}
      <section className="service-bento-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Fashion Direction & <span className="highlight-yellow-glow">Studio Production</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Creative posing guidance, MUA styling, and magazine-grade beauty retouching.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(236, 72, 153, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Model Photography?
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
          <h2 className="process-main-title">Build a Commanding <span className="highlight-yellow-glow">Fashion Portfolio</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our award-winning fashion photographers capture your best angles with magazine-grade lighting and styling.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Book Your Photoshoot</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
