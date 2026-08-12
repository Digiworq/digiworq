import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ProductShootsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Amazon & E-Commerce White Background Shoots",
    "Creative Lifestyle & Tabletop Set Staging",
    "4K Commercial Product Video Reels",
    "High-End Retouching, Clipping & Drop Shadows",
    "Macro Detail & 360-Degree Product Photography",
    "Print-Ready Catalog & Lookbook High-Res Masters"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Box",
      title: "E-Commerce Marketplace Shoots",
      desc: "Ultra-clean pure white background (RGB 255) photos with natural drop shadows, 100% compliant with Amazon, Flipkart, Shopify, and Myntra standards."
    },
    {
      step: "02",
      icon: "Sparkles",
      title: "Creative Lifestyle & Contextual Sets",
      desc: "Aesthetic tabletop prop styling and lifestyle environments that showcase products in authentic real-world contexts, driving emotional purchase intent."
    },
    {
      step: "03",
      icon: "Video",
      title: "4K Commercial Video & 360° Spins",
      desc: "High-definition product spotlight videos, motorized 360-degree turntable captures, and macro slow-motion details for high-converting social ads."
    },
    {
      step: "04",
      icon: "Layers",
      title: "Apparel, Cosmetics & FMCG Focus",
      desc: "Specialized studio lighting and diffusers engineered for glossy cosmetics, ghost mannequin apparel, reflective jewelry, electronics, and packaged goods."
    },
    {
      step: "05",
      icon: "Sliders",
      title: "Pixel-Perfect Retouching & Color",
      desc: "High-end post-production including dust/scratch removal, reflection correction, exact Pantone color calibration, and multi-layer clipping paths."
    },
    {
      step: "06",
      icon: "Smartphone",
      title: "Social-First Product Content",
      desc: "Engaging vertical unboxing videos, stop-motion product reels, and carousel-ready visual assets optimized for Instagram, Facebook, and TikTok."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Camera size={22} color="#38BDF8" />,
      heading: "Pro Studio Strobe Lighting",
      body: "Our Bangalore studio utilizes high-CRI Profoto and Godox strobes with specialized softboxes, snoots, and polarizing filters for glare-free brilliance."
    },
    {
      icon: <Icons.Palette size={22} color="#38BDF8" />,
      heading: "Prop Styling & Set Construction",
      body: "In-house prop stylists curate acrylic risers, natural stones, foliage, textured plaster backdrops, and kitchen/bathroom staging elements."
    },
    {
      icon: <Icons.CheckCircle2 size={22} color="#38BDF8" />,
      heading: "Marketplace & E-Commerce Compliance",
      body: "We deliver pre-cropped high-resolution JPGs and transparent PNGs formatted to exact pixel dimensions required by leading shopping portals."
    },
    {
      icon: <Icons.Award size={22} color="#38BDF8" />,
      heading: "High-Resolution Medium Format Detail",
      body: "Capture micro-textures, fabric weaves, and tiny typography in ultra-crisp resolution suitable for massive billboard enlargements and zoom tools."
    }
  ];

  const whyChooseBullets = [
    "Dedicated high-tech photo and video studio equipped in Bangalore.",
    "Full-frame 50MP+ cameras and cinema-grade macro prime lenses.",
    "100% compliance guarantee for Amazon, Flipkart, Shopify & Myntra.",
    "In-house prop library, custom tabletop sets & creative art direction.",
    "Rapid batch editing, ghost mannequin assembly & precision color grading.",
    "Convenient product sample pickup and safe return logistics across Bangalore."
  ];

  const faqs = [
    {
      q: 'What product photography services does Digiworq provide?',
      a: 'We provide pure white background e-commerce photography, creative lifestyle tabletop setups, 360-degree rotating product videos, catalog lookbooks, macro jewelry shoots, and social media video reels.'
    },
    {
      q: 'Do you offer product photoshoots for e-commerce websites?',
      a: 'Yes, we produce product photos fully optimized and compliant with guidelines for Amazon, Flipkart, Myntra, Shopify, WooCommerce, and quick-commerce apps like Blinkit and Zepto.'
    },
    {
      q: 'Can Digiworq handle product photography for different industries?',
      a: 'Yes, our team has extensive experience across fashion & apparel, luxury jewelry, cosmetics & skincare, consumer electronics, packaged food & beverage, footwear, and home decor.'
    },
    {
      q: 'Do you provide product image editing and retouching?',
      a: 'Yes, our in-house post-production artists handle dust and scratch cleanup, glare reduction, color accuracy tuning, background cutout/clipping, ghost mannequin alignment, and drop shadow creation.'
    },
    {
      q: 'Why choose Digiworq for product photography in Bangalore?',
      a: 'Digiworq combines world-class studio strobe lighting, high-resolution cameras, expert prop styling, rapid turnaround times, and marketing-focused visuals that directly increase sales conversions.'
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
            <span className="bc-current">Product Shoots</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#38BDF8' }}>●</span>
                <span>Product Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Product Photography</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers professional product photography and commercial videography services in Bangalore. We showcase your products with high-converting, premium visuals that attract shoppers and drive e-commerce sales across Amazon, Shopify, social media, and digital catalogs.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Product Shoot</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="product-shoot" title="Product Shoots" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Product Shoot Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Box size={16} color="#38BDF8" />
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
              Our 6 Core <span className="highlight-yellow-glow">Product Shoot Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From Amazon white-background stills to high-energy 4K lifestyle reels — visual excellence that sells.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Box;
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
              Studio Lighting & <span className="highlight-yellow-glow">E-Commerce Mastery</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              High-CRI strobe arrays, creative tabletop props, and pixel-precise color grading.
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
                Why Choose Digiworq for Product Shoots?
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
          <h2 className="process-main-title">Showcase Your Products with <span className="highlight-yellow-glow">Stunning Visuals</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our product photographers and cinematographers elevate your catalog, marketplace presence, and ad campaigns.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Book Studio Shoot</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
