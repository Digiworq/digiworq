import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function EmbossingDebossingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Custom Die-Crafted Embossed Business Cards",
    "Luxury Product Packaging Embossing",
    "Recessed Debossed Invitations & Certificates",
    "Gold & Silver Foil Stamping Combination",
    "Corporate Presentation Folders & Idents",
    "Blind Embossing on Heavy Cotton Stocks"
  ];

  const pillars = [
    {
      step: "01",
      icon: "CreditCard",
      title: "Business Card Embossing",
      desc: "Create bespoke executive business cards featuring 3D raised logos, tactile lettering, and multi-level sculpted embossing that makes a commanding first impression."
    },
    {
      step: "02",
      icon: "Package",
      title: "Packaging Embossing Solutions",
      desc: "Transform retail packaging, rigid cosmetic boxes, and mono cartons into luxury experiences with textured patterns, brand crests, and embossed motifs."
    },
    {
      step: "03",
      icon: "Award",
      title: "Premium Brand Debossing",
      desc: "Deep, crisp recessed impressions stamped into heavy cardstocks, leatherette covers, and duplex boards for an understated, sophisticated aesthetic."
    },
    {
      step: "04",
      icon: "FileText",
      title: "Invitation & Stationery Debossing",
      desc: "Custom debossed invitations, event stationery, presentation folders, diploma certificates, and corporate envelopes with bespoke finishing."
    },
    {
      step: "05",
      icon: "Sparkles",
      title: "Luxury Multi-Process Crafting",
      desc: "Seamlessly combine blind embossing, debossing, metallic hot foil stamping, and spot UV on premium imported and textured paper stocks."
    },
    {
      step: "06",
      icon: "Layers",
      title: "Custom Precision Metal Dies",
      desc: "Utilize precision-machined brass and magnesium dies engineered for microscopic detail, consistent pressure calibration, and crisp edge definition."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Sparkles size={22} color="#D97706" />,
      heading: "Embossing Printing in Bangalore",
      body: "Our embossing printing services help brands elevate everyday print materials into tactile art through multi-level, sculptured, and registered print-and-emboss techniques."
    },
    {
      icon: <Icons.Feather size={22} color="#D97706" />,
      heading: "Deboss Printing Solutions",
      body: "Digiworq creates refined deboss impressions that depress the image below the paper surface, producing elegant light and shadow depth without puncturing the sheet."
    },
    {
      icon: <Icons.ShieldCheck size={22} color="#D97706" />,
      heading: "Luxury Paper Stock Selection",
      body: "We work with premium 300GSM to 800GSM cotton boards, handmade textured sheets, metallic specialty papers, and recycled kraft boards tailored for deep impression."
    },
    {
      icon: <Icons.Award size={22} color="#D97706" />,
      heading: "Custom Corporate Branding",
      body: "From executive business suites to high-end merchandise packaging, our luxury finishings reinforce brand prestige and premium market positioning."
    }
  ];

  const whyChooseBullets = [
    "Luxury printing solutions engineered for premium and boutique brands.",
    "Flawless multi-level embossing and deep debossing registration.",
    "Comprehensive packaging, stationery, and corporate branding support.",
    "Precision-machined brass dies for sharp, long-lasting tactile details.",
    "Exquisite pairing with hot foil stamping, spot UV, and edge gilding.",
    "Fast production turnarounds with reliable doorstep delivery across Bangalore."
  ];

  const faqs = [
    {
      q: 'What is embossing in printing?',
      a: 'Embossing is a specialized post-press technique that uses custom metal dies and high pressure to create raised 3D designs, text, or textures on paper and packaging surfaces, enhancing tactile and visual luxury.'
    },
    {
      q: 'What is the difference between embossing and debossing?',
      a: 'Embossing presses the design outward from underneath to create a raised surface, while debossing presses the design down from above to create an indented, recessed impression.'
    },
    {
      q: 'Where can embossing and debossing be used?',
      a: 'These techniques are widely used for luxury business cards, wedding invitations, rigid packaging boxes, corporate annual reports, certificates, book covers, and high-end marketing collateral.'
    },
    {
      q: 'Do you provide custom embossing and debossing services in Bangalore?',
      a: 'Yes, we offer fully customized embossing and debossing solutions tailored to your unique logo artwork, custom dimensions, paper GSM preferences, and packaging specifications.'
    },
    {
      q: 'Why choose Digiworq for embossing and debossing services in Bangalore?',
      a: 'Digiworq provides master craftsmanship, CNC-machined metal dies, luxury paper selections, combined foil-and-emboss capabilities, and dependable on-time delivery across Bangalore.'
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
            <span className="bc-current">Embossing and Debossing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#D97706' }}>●</span>
                <span>Luxury Print Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Embossing and Debossing</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides premium embossing and debossing services in Bangalore that give printed materials tactile depth, luxury appeal, and refined elegance. Businesses use our specialty print techniques to create high-end branding materials, packaging, invitations, and business cards.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Embossing Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="embossing-and-debossing" title="Embossing & Debossing" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Embossing Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.FileText size={16} color="#D97706" />
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
              Our 6 Core <span className="highlight-yellow-glow">Luxury Print Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From multi-level 3D embossing to deep debossed invitations — unmatched tactile prestige.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.FileText;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(217, 119, 6, 0.4)', color: '#D97706', background: 'rgba(217, 119, 6, 0.12)' }}>
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
              Tactile Print Enhancements & <span className="highlight-yellow-glow">Finishing</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Master-crafted metal dies and high-tonnage pressure for unforgettable brand impressions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(217, 119, 6, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(217, 119, 6, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Embossing & Debossing?
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
          <h2 className="process-main-title">Give Your Brand a <span className="highlight-yellow-glow">Luxury Tactile Edge</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our master print finishers craft bespoke embossed and debossed materials that leave an unforgettable impression.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Embossing Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
