import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function UvPrintingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Direct-to-Substrate Acrylic & Glass Prints",
    "Corporate Gifts & Promotional Merchandise",
    "Raised 3D Spot UV & Varnish Textures",
    "Retail Display Panels & Backlit Signage",
    "Custom Wood, Metal & Leather UV Printing",
    "Weatherproof & Scratch-Resistant Outdoor Prints"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Layers",
      title: "Multi-Surface UV Flatbed Printing",
      desc: "Direct-to-object printing on rigid acrylic sheets, tempered glass, natural wood, metal plates, PVC foam, ceramic, and leather."
    },
    {
      step: "02",
      icon: "Gift",
      title: "Promotional Product Printing",
      desc: "Vibrant custom UV printing on branded corporate gifts, power banks, USB drives, metal pens, notebooks, and executive award plaques."
    },
    {
      step: "03",
      icon: "Package",
      title: "Packaging & Label UV Printing",
      desc: "High-definition printing for luxury product boxes, cosmetic packaging, high-durability vinyl labels, and custom product tags."
    },
    {
      step: "04",
      icon: "Maximize",
      title: "Signage & Display Printing",
      desc: "Durable architectural signage, backlit retail lightboxes, acrylic logo cutouts, exhibition stand panels, and point-of-sale displays."
    },
    {
      step: "05",
      icon: "Sparkles",
      title: "Raised 3D Spot UV & Varnish",
      desc: "Layered UV varnish creating tactile 3D relief effects, high-gloss spot highlights, embossed text, and realistic texture simulations."
    },
    {
      step: "06",
      icon: "ShieldCheck",
      title: "Durable & Fade-Proof Curing",
      desc: "Instant UV light curing locks in vibrant CMYK + White pigments, delivering exceptional scratch resistance and outdoor weather durability."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.SunMedium size={22} color="#C026D3" />,
      heading: "UV Curing Technology",
      body: "Our advanced UV LED flatbed presses instantly photopolymerize inks with ultraviolet light, eliminating drying time and allowing immediate post-processing and shipment."
    },
    {
      icon: <Icons.Cpu size={22} color="#C026D3" />,
      heading: "High-Opacity White + Clear Inks",
      body: "We feature dual white ink channels for vibrant printing on transparent glass/acrylic and dark substrates, topped with ultra-clear gloss varnish."
    },
    {
      icon: <Icons.Palette size={22} color="#C026D3" />,
      heading: "Microscopic Print Resolution",
      body: "Achieve crisp 2400 DPI photographic quality, smooth color gradations, and ultra-sharp 2pt micro-text reproduction on any flat or slightly curved surface."
    },
    {
      icon: <Icons.Award size={22} color="#C026D3" />,
      heading: "Eco-Friendly & VOC-Free Printing",
      body: "Our UV inks contain zero hazardous volatile organic compounds (VOCs), making our printed products completely odor-free and safe for indoor environments."
    }
  ];

  const whyChooseBullets = [
    "Advanced multi-head UV LED flatbed and hybrid printing technology.",
    "True multi-surface printing on acrylic, wood, glass, metal, and leather.",
    "White ink underbase and layered 3D clear gloss varnish capabilities.",
    "Extreme scratch resistance, waterproof durability, and UV sun protection.",
    "Custom prototyping, one-off personalized gifts, and bulk volume production.",
    "Fast turnaround times with reliable doorstep delivery across Bangalore."
  ];

  const faqs = [
    {
      q: 'What is UV printing?',
      a: 'UV printing is a state-of-the-art digital printing process that uses ultraviolet LED light to instantly cure specially formulated inks as they are jetted onto substrates, producing durable, scratch-resistant, and vibrant high-resolution prints.'
    },
    {
      q: 'What materials can be printed using UV printing?',
      a: 'UV printing can print on acrylic, glass, wood, aluminum composite, stainless steel, PVC foam board, leather, ceramic tiles, rigid packaging boxes, canvas, and promotional tech products.'
    },
    {
      q: 'Do you provide custom UV printing services in Bangalore?',
      a: 'Yes, we provide fully customized UV printing solutions for corporate gifting, industrial signage, retail branding displays, packaging prototyping, and architectural interior graphics.'
    },
    {
      q: 'Is UV printing suitable for outdoor branding?',
      a: 'Yes, UV-cured inks are highly resistant to sunlight fading, moisture, rain, and temperature fluctuations, making them ideal for both indoor displays and long-term outdoor signage.'
    },
    {
      q: 'Why choose Digiworq for UV printing services in Bangalore?',
      a: 'Digiworq provides high-end industrial UV flatbed machinery, multi-layer spot varnish capabilities, direct-to-object precision, affordable pricing, and fast delivery across Bangalore.'
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
            <span className="bc-link-sub">Printing Solutions</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">UV Printing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#C026D3' }}>●</span>
                <span>UV Print Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">UV Printing Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers premium UV printing services in Bangalore. We provide high-quality, durable, and vibrant printing solutions for businesses and brands. Our UV LED curing technology allows direct printing on acrylic, wood, glass, metal, and leather with rich colors and long-lasting scratch-proof finishes.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get UV Print Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="uv-printing" title="UV Printing" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>UV Printing Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Sparkles size={16} color="#C026D3" />
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
              Our 6 Core <span className="highlight-yellow-glow">UV Printing Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From direct-to-acrylic signage to 3D spot varnished packaging — brilliance on any substrate.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Sparkles;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(192, 38, 211, 0.4)', color: '#C026D3', background: 'rgba(192, 38, 211, 0.12)' }}>
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
              Multi-Surface & Direct-to-Object <span className="highlight-yellow-glow">Capabilities</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Instant LED curing, high-density white ink, and tactile gloss varnish effects.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(192, 38, 211, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(192, 38, 211, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for UV Printing?
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
          <h2 className="process-main-title">Elevate Any Surface with <span className="highlight-yellow-glow">High-Def UV Printing</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our UV printing experts produce vibrant, durable direct-to-object branding and signage that lasts for years.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start UV Print Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
