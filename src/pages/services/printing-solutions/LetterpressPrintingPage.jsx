import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function LetterpressPrintingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Heavyweight 100% Cotton Paper Stocks",
    "Artisanal Deep-Bite Letterpress Impression",
    "Luxury Bespoke Wedding & Event Invites",
    "Executive Double-Thick Business Cards",
    "Custom Colored Edge Painting & Foil Gilding",
    "Luxury Packaging Hangtags & Box Sleeves"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Mail",
      title: "Luxury Invitation Printing",
      desc: "Artisanal letterpress wedding suites, gala event invitations, bespoke stationery cards, and matching envelope liners crafted on pillowy cotton paper stocks."
    },
    {
      step: "02",
      icon: "CreditCard",
      title: "Executive Business Cards",
      desc: "Ultra-thick 600 to 900 GSM duplexed business cards featuring deep-bite typography, tactile debossed logos, and hand-painted beveled edges."
    },
    {
      step: "03",
      icon: "FileText",
      title: "Corporate Stationery Printing",
      desc: "Refined letterheads, executive envelopes, presentation folders, certificates of merit, and branded stationery suites with unmatched tactile prestige."
    },
    {
      step: "04",
      icon: "Package",
      title: "Packaging & Hangtags",
      desc: "High-end garment tags, boutique product packaging sleeves, certificate cards, and unboxing inserts that reinforce luxury brand positioning."
    },
    {
      step: "05",
      icon: "Palette",
      title: "Edge Painting & Foil Gilding",
      desc: "Handcrafted edge painting in metallic gold, rose gold, chrome, neon hues, and custom Pantone colors for a striking 360-degree luxury finish."
    },
    {
      step: "06",
      icon: "Printer",
      title: "Artisanal Platen Presses",
      desc: "Crafted on vintage Heidelberg Windmill and cylinder presses by master letterpress artisans for perfect pressure calibration and ink clarity."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Feather size={22} color="#94A3B8" />,
      heading: "Artisanal Craftsmanship & Deep Bite",
      body: "Our master letterpress printers press relief polymer and metal plates into thick, soft cotton fibers, creating a distinct three-dimensional debossed texture."
    },
    {
      icon: <Icons.Sparkles size={22} color="#94A3B8" />,
      heading: "Foil Stamping & Blind Debossing",
      body: "We combine traditional oil-based ink letterpress with metallic hot foil stamping and inkless blind debossing for multi-layered textural luxury."
    },
    {
      icon: <Icons.Layers size={22} color="#94A3B8" />,
      heading: "Premium Cotton & Handmade Papers",
      body: "We source the finest 100% cotton papers (Crane's Lettra, Gmund, Fabriano, Colorplan) from 300 GSM up to ultra-thick 1200 GSM duplexed boards."
    },
    {
      icon: <Icons.Award size={22} color="#94A3B8" />,
      heading: "Bespoke Custom Finishing",
      body: "Every print piece is hand-inspected, hand-trimmed, and can be customized with die-cut shapes, rounded corners, and hand-painted edge gilding."
    }
  ];

  const whyChooseBullets = [
    "Authentic vintage and modern letterpress printing craftsmanship.",
    "Ultra-heavy 600GSM to 900GSM 100% pure cotton paper stocks.",
    "Custom Pantone ink mixing with deep, tactile impression bite.",
    "Stunning specialty options: Edge painting, hot foil stamping & blind debossing.",
    "Full creative design consultation, typography checks & proofing support.",
    "Fast production turnaround with reliable doorstep delivery across Bangalore."
  ];

  const faqs = [
    {
      q: 'What is letterpress printing?',
      a: 'Letterpress printing is a traditional relief printing technique where a raised, inked plate is pressed into thick, soft cotton paper under high pressure, creating a distinctive and elegant tactile debossed impression.'
    },
    {
      q: 'What products can be printed using letterpress printing?',
      a: 'Letterpress printing is commonly used for luxury business cards, bespoke wedding invitation suites, corporate stationery, certificates, luxury hangtags, greeting cards, and boutique product packaging.'
    },
    {
      q: 'Do you provide custom letterpress printing services in Bangalore?',
      a: 'Yes, we provide fully customized letterpress printing solutions based on your specific branding guidelines, custom vector artwork, paper weights, ink colors, and edge finishes.'
    },
    {
      q: 'Is letterpress printing suitable for luxury branding?',
      a: 'Yes, letterpress printing is universally recognized as the pinnacle of luxury print craftsmanship due to its unmistakable tactile depth, organic textures, and timeless aesthetic.'
    },
    {
      q: 'Why choose Digiworq for letterpress printing in Bangalore?',
      a: 'Digiworq offers authentic letterpress machinery, premium imported cotton stocks, hand-mixed Pantone inks, expert edge gilding, and master artisan execution for luxury brands.'
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
            <span className="bc-current">Letterpress Printing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#94A3B8' }}>●</span>
                <span>Artisanal Letterpress Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Professional Letterpress Printers</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides high-quality letterpress printing services in Bangalore, creating sophisticated printed materials for businesses, luxury brands, and discerning individuals. Our deep-bite textured impressions add timeless craftsmanship to invitations, business cards, and packaging.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Letterpress Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="letterpress-printing" title="Letterpress Printing" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Letterpress Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Printer size={16} color="#94A3B8" />
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
              Our 6 Core <span className="highlight-yellow-glow">Letterpress Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From heavy cotton invitations to edge-painted executive cards — tactile elegance in every impression.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Printer;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(148, 163, 184, 0.4)', color: '#94A3B8', background: 'rgba(148, 163, 184, 0.12)' }}>
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
              Artisanal Craftsmanship & <span className="highlight-yellow-glow">Specialty Finishes</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Deep-bite relief impression, edge gilding, and bespoke cotton stocks engineered for luxury.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(148, 163, 184, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Letterpress Printing?
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
          <h2 className="process-main-title">Experience the Timeless Prestige of <span className="highlight-yellow-glow">Letterpress</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our master letterpress artisans create pillowy cotton cards and invitations with unforgettable tactile depth.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Letterpress Order</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
