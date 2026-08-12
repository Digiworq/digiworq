import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function FoilStampingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Metallic Gold, Silver & Rose Gold Hot Stamping",
    "Holographic & Rainbow Diffraction Foils",
    "Luxury Rigid Box & Packaging Foil Accents",
    "Executive Double-Thick Foil Business Cards",
    "Bespoke Wedding & VIP Event Invitation Suites",
    "Combo Foil Stamping + Multi-Level Embossing"
  ];

  const pillars = [
    {
      step: "01",
      icon: "CreditCard",
      title: "Business Card Foil Printing",
      desc: "Create commanding executive business cards with reflective gold, silver, rose gold, or copper foil stamped logos on ultra-thick matte or cotton boards."
    },
    {
      step: "02",
      icon: "Package",
      title: "Luxury Packaging Foil Stamping",
      desc: "Transform rigid cosmetic boxes, mono cartons, retail product packaging, and bottle labels into high-end luxury merchandise with metallic accents."
    },
    {
      step: "03",
      icon: "Mail",
      title: "Invitations & Specialty Printing",
      desc: "Exquisite foil stamping for bespoke wedding invitation suites, gala event passes, greeting cards, and gold-foiled certificate stationery."
    },
    {
      step: "04",
      icon: "FileText",
      title: "Marketing Collateral Enhancement",
      desc: "Elevate corporate profiles, presentation folders, luxury brochures, sales catalogs, and magazine covers with crisp metallic foil detailing."
    },
    {
      step: "05",
      icon: "Sparkles",
      title: "Holographic & Specialty Foils",
      desc: "Stand out with holographic rainbow foils, security micro-patterns, matte pigments, pearlized finishes, and iridescent clear gloss stamping."
    },
    {
      step: "06",
      icon: "Award",
      title: "Combination Foil + 3D Embossing",
      desc: "Utilize precision CNC-machined brass fluted dies to simultaneously apply heated metallic foil and raise artwork into tactile 3D sculptural relief."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Sun size={22} color="#F59E0B" />,
      heading: "Precision Hot Foil Stamping",
      body: "Our calibrated heated brass and magnesium dies apply precise heat and tonnage to bond micro-thin metallic foils flawlessly to paper, leather, and board."
    },
    {
      icon: <Icons.Palette size={22} color="#F59E0B" />,
      heading: "Vast Metallic & Pigment Palette",
      body: "Choose from classic bright gold, antique matte gold, chrome silver, rose gold, copper, bronze, ruby red, sapphire blue, emerald green, and holographic."
    },
    {
      icon: <Icons.Layers size={22} color="#F59E0B" />,
      heading: "Multi-Substrate Application",
      body: "We stamp on velvety soft-touch laminate, heavy cotton stocks (up to 900 GSM), kraft board, rigid leatherette, linen cardstocks, and self-adhesive label stocks."
    },
    {
      icon: <Icons.ShieldCheck size={22} color="#F59E0B" />,
      heading: "Retail & Packaging Enhancement",
      body: "Metallic foil increases brand prestige, elevates shelf visibility in competitive retail aisles, and delivers a memorable tactile unboxing experience."
    }
  ];

  const whyChooseBullets = [
    "Master hot foil stamping craftsmanship with microscopic registration accuracy.",
    "Comprehensive palette of gold, silver, rose gold, copper, and holographic foils.",
    "Precision-machined brass dies for crisp micro-typography and fine line detail.",
    "Seamless pairing with multi-level embossing, debossing, and spot UV.",
    "Bespoke prototyping, luxury short runs, and high-volume commercial production.",
    "Fast turnaround times with reliable doorstep delivery across Bangalore."
  ];

  const faqs = [
    {
      q: 'What is foil stamping in printing?',
      a: 'Foil stamping (hot stamping) is a premium finishing technique that uses heated metal dies and high pressure to bond thin layers of metallic, holographic, or pigmented foil onto paper and packaging substrates.'
    },
    {
      q: 'Where can foil stamping be used?',
      a: 'Foil stamping is widely used on executive business cards, luxury invitations, rigid packaging boxes, wine and cosmetic labels, certificates, presentation folders, brochures, and book covers.'
    },
    {
      q: 'Do you provide custom foil stamping services in Bangalore?',
      a: 'Yes, we provide fully customized foil stamping solutions tailored to your unique vector artwork, brand guidelines, custom packaging blueprints, and preferred foil shades.'
    },
    {
      q: 'What foil colors are available?',
      a: 'We provide an extensive range of foils including bright metallic gold, matte antique gold, chrome silver, rose gold, copper, bronze, holographic rainbow, gloss black, and custom tinted metallic foils.'
    },
    {
      q: 'Why choose Digiworq for foil stamping services in Bangalore?',
      a: 'Digiworq offers premium brass dies, flawless edge registration, imported luxury paper stocks, combination foil-embossing, and dependable doorstep delivery across Bangalore.'
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
            <span className="bc-current">Foil Stamping</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#F59E0B' }}>●</span>
                <span>Foil Stamping Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Foil Stamping Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers foil stamping services in Bangalore designed to add metallic elegance and luxury sophistication to printed materials. Our hot foil stamping and specialty finishes elevate branding materials with radiant reflective accents, perfect for luxury packaging, business cards, invitations, and corporate collateral.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Foil Stamping Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="foil-stamping" title="Foil Stamping" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Foil Stamping Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Award size={16} color="#F59E0B" />
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
              Our 6 Core <span className="highlight-yellow-glow">Foil Stamping Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From gold-foiled executive cards to holographic packaging — metallic brilliance in every detail.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Award;
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
              Luxury Metallic Enhancements & <span className="highlight-yellow-glow">Die Craftsmanship</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              High-tonnage heat stamping, micro-etched patterns, and combination fluted dies.
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
                Why Choose Digiworq for Foil Stamping?
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
          <h2 className="process-main-title">Add Shimmer & Luxury with <span className="highlight-yellow-glow">Master Foil Stamping</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our hot stamping artisans elevate your packaging, business cards, and marketing collateral with radiant metallic foils.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Foil Stamping Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
