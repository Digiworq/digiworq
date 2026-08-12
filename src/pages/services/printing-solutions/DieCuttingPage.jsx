import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function DieCuttingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Custom Shape Packaging & Folding Cartons",
    "Contour-Cut Stickers & Product Labels",
    "Geometric & Rounded-Corner Business Cards",
    "Structural Presentation Folders & Pockets",
    "Retail Countertop & Shelf POS Displays",
    "Custom Creasing, Scoring & Perforation"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Package",
      title: "Custom Packaging Die Cutting",
      desc: "Precision steel-rule die cutting for retail folding cartons, cosmetic boxes, luxury rigid boxes, product sleeves, and corrugated shipping packaging."
    },
    {
      step: "02",
      icon: "CreditCard",
      title: "Die Cut Business Cards",
      desc: "Distinctive geometric contours, rounded corners, custom silhouette cut-outs, and bespoke shaped cards that leave an unforgettable first impression."
    },
    {
      step: "03",
      icon: "Tag",
      title: "Labels & Sticker Die Cutting",
      desc: "Kiss-cut sticker sheets, individual contour-cut vinyl decals, waterproof jar/bottle labels, and custom shaped hangtags in any contour."
    },
    {
      step: "04",
      icon: "FileText",
      title: "Promotional Print Collateral",
      desc: "Shaped brochures, interlocking pocket folders, interactive direct mailers, door hangers, table tents, and custom promotional sales kits."
    },
    {
      step: "05",
      icon: "Layout",
      title: "Retail & Point-of-Sale Displays",
      desc: "Die-cut countertop display units, standees, hanging ceiling danglers, shelf talkers, and promotional retail floor merchandisers."
    },
    {
      step: "06",
      icon: "Scissors",
      title: "High-Volume Precision Cutting",
      desc: "Automated high-speed platen and rotary die cutting machinery ensuring microscopic tolerance, clean edges, and rapid bulk fulfillment."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Scissors size={22} color="#EF4444" />,
      heading: "Custom Die Cutting Services Bangalore",
      body: "Our custom die cutting solutions fit diverse industries, engineering bespoke shapes, intricate patterns, and structural folding mechanics that make products stand out."
    },
    {
      icon: <Icons.Crosshair size={22} color="#EF4444" />,
      heading: "Precision Cutting & Creasing Solutions",
      body: "We combine laser-crafted steel rule dies with micro-adjustable creasing and scoring matrixes, ensuring clean folding lines without paper cracking."
    },
    {
      icon: <Icons.Layers size={22} color="#EF4444" />,
      heading: "Multi-Substrate Versatility",
      body: "We die cut a wide spectrum of materials including paperboard, corrugated cardboard, kraft paper, PVC vinyl, plastic sheets, foam boards, and magnetic sheets."
    },
    {
      icon: <Icons.ShieldCheck size={22} color="#EF4444" />,
      heading: "High-Volume Production Support",
      body: "From short-run prototype packaging samples to massive commercial print runs, our equipment handles large-scale production with consistent precision."
    }
  ];

  const whyChooseBullets = [
    "State-of-the-art precision steel-rule and rotary die cutting technology.",
    "Comprehensive structural packaging and custom branding solutions.",
    "Combined printing, lamination, and die cutting in a single integrated workflow.",
    "Strict quality control with clean burr-free edges and accurate creasing.",
    "Rapid digital die cutting for quick prototypes and zero-tooling short runs.",
    "Fast production turnaround with reliable doorstep delivery across Bangalore."
  ];

  const faqs = [
    {
      q: 'What are die cutting services?',
      a: 'Die cutting is a fabrication process that uses custom-shaped steel blades (dies) to cut, crease, score, and perforate paper, cardstock, plastics, and board materials into unique custom contours and structural shapes.'
    },
    {
      q: 'What products can be created using die cutting?',
      a: 'Die cutting is used for custom packaging boxes, folding cartons, geometric business cards, contour-cut stickers, product labels, luxury invitations, pocket folders, hangtags, and retail POS displays.'
    },
    {
      q: 'Do you provide custom die cutting services in Bangalore?',
      a: 'Yes, we provide fully customized die cutting solutions based on your exact dielines, packaging blueprints, branding guidelines, and marketing specifications.'
    },
    {
      q: 'Can die cutting be used for product packaging?',
      a: 'Yes, die cutting is the foundational process for product packaging, enabling interlocking tabs, display windows, interior foam inserts, folding cartons, and rigid box structures.'
    },
    {
      q: 'Why choose Digiworq for die cutting services in Bangalore?',
      a: 'Digiworq offers microscopic cutting accuracy, advanced die-making machinery, integrated print-and-cut workflows, flexible volume capacities, and dependable on-time delivery across Bangalore.'
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
            <span className="bc-current">Die Cutting</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#EF4444' }}>●</span>
                <span>Precision Die Cutting Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Die Cutting Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides precision die cutting services in Bangalore. We create custom shapes for packaging, branding materials, and specialty print solutions. Our die cutting process helps businesses elevate product presentation, strengthen brand identity, and craft eye-catching marketing collateral.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Die Cutting Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="die-cutting" title="Die Cutting" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Die Cutting Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Scissors size={16} color="#EF4444" />
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
              Our 6 Core <span className="highlight-yellow-glow">Die Cutting Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From custom packaging structures to contour-cut labels — microscopic accuracy in every cut.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Scissors;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#EF4444', background: 'rgba(239, 68, 68, 0.12)' }}>
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
              Structural Packaging & <span className="highlight-yellow-glow">Finishing Solutions</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              CNC laser die making and automated rotary presses engineered for clean, burr-free edges.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(239, 68, 68, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Die Cutting?
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
          <h2 className="process-main-title">Shape Your Brand Identity with <span className="highlight-yellow-glow">Precision Die Cutting</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our structural print engineers create custom-cut packaging, labels, and marketing collateral that set you apart.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Die Cutting Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
