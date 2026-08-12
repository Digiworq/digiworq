import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function DigitalPrintingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Marketing Flyers & Multi-Fold Brochures",
    "High-Impact Posters & Vinyl Banners",
    "Premium Visiting & Business Cards",
    "Corporate Profiles & Presentation Folders",
    "Event Standees & POS Display Prints",
    "Short-Run & Bulk High-Speed Printing"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Printer",
      title: "Marketing & Promotional Printing",
      desc: "High-resolution digital printing for flyers, folded brochures, posters, product catalogs and event promotional materials with vibrant color fidelity."
    },
    {
      step: "02",
      icon: "FileText",
      title: "Corporate Printing Solutions",
      desc: "Professional printing for annual reports, company profiles, presentation folders, pitch books and branded executive stationery."
    },
    {
      step: "03",
      icon: "CreditCard",
      title: "Premium Business Card Printing",
      desc: "Luxury business and visiting cards crafted with thick cardstocks, matte/gloss lamination, rounded corners, spot UV and foil stamping."
    },
    {
      step: "04",
      icon: "Maximize",
      title: "Branding & Event Displays",
      desc: "Eye-catching roll-up standees, exhibition backdrops, vinyl banners, foam board prints and retail promotional signage."
    },
    {
      step: "05",
      icon: "Palette",
      title: "Customized Print Solutions",
      desc: "On-demand, tailored print runs with bespoke sizing, custom die-cutting, embossing, specialty paper stocks and custom finishes."
    },
    {
      step: "06",
      icon: "Zap",
      title: "Fast Turnaround & Delivery",
      desc: "High-speed digital presses enabling same-day and rush printing with reliable doorstep delivery across Bangalore."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Megaphone size={22} color="#0EA5E9" />,
      heading: "Marketing & Promotional Collateral",
      body: "Digiworq offers premium printing solutions for flyers, brochures, posters, catalogs, banners, and promotional merchandise tailored to boost brand visibility."
    },
    {
      icon: <Icons.Building2 size={22} color="#0EA5E9" />,
      heading: "Corporate & Business Stationery",
      body: "We produce executive company profiles, annual reports, presentation decks, branded envelopes, letterheads, and custom presentation folders."
    },
    {
      icon: <Icons.Award size={22} color="#0EA5E9" />,
      heading: "Custom Visiting Card Printing",
      body: "We create bespoke visiting cards that match your exact brand guidelines, with premium textured papers, soft-touch velvet feel, and metallic finishes."
    },
    {
      icon: <Icons.Layers size={22} color="#0EA5E9" />,
      heading: "Branding & Advertising Displays",
      body: "We craft high-durability advertising materials including exhibition standees, retail signage, point-of-sale banners, and promotional backdrop prints."
    }
  ];

  const whyChooseBullets = [
    "State-of-the-art digital printing press technology with rich color reproduction.",
    "Comprehensive end-to-end print solutions from pre-press proofing to packaging.",
    "Premium paper stocks, specialty textures, and luxury post-print finishes.",
    "Ultra-fast turnaround times with express rush delivery across Bangalore.",
    "Cost-effective short-run digital prints and scalable volume discounts.",
    "Dedicated in-house graphic design and pre-flight file check support."
  ];

  const faqs = [
    {
      q: 'What digital printing services does Digiworq provide?',
      a: 'Digiworq provides brochure printing, flyer printing, poster printing, business card printing, catalog printing, banner printing, and complete corporate stationery printing solutions.'
    },
    {
      q: 'Do you provide business card printing services in Bangalore?',
      a: 'Yes, Digiworq offers premium business card and visiting card printing services with customized paper weights, velvet/matte finishes, and fast delivery.'
    },
    {
      q: 'Can Digiworq handle bulk printing requirements?',
      a: 'Yes, Digiworq handles both on-demand short-run printing and high-volume commercial bulk printing with consistent color quality and sharpness.'
    },
    {
      q: 'Do you provide customized printing solutions?',
      a: 'Yes, Digiworq creates fully customized printing materials tailored to your specific branding requirements, custom dimensions, paper stocks, and special finishes.'
    },
    {
      q: 'Why choose Digiworq for printing services in Bangalore?',
      a: 'Digiworq offers exceptional print sharpness, advanced digital press technology, flexible order quantities, affordable pricing, and fast doorstep delivery.'
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
            <span className="bc-current">Digital Printing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#0EA5E9' }}>●</span>
                <span>Digital Printing Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Digital Printing Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers digital printing services in Bangalore that help businesses create quality printed materials for branding and marketing. We provide printing solutions with superior print quality, advanced digital press technology, and rapid turnaround.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Print Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="digital-printing" title="Digital Printing" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Digital Printing Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Printer size={16} color="#0EA5E9" />
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
              Our 6 Core <span className="highlight-yellow-glow">Digital Print Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From luxury visiting cards to large format advertising banners — we deliver vibrant, precision-printed collateral.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Printer;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(14, 165, 233, 0.4)', color: '#0EA5E9', background: 'rgba(14, 165, 233, 0.12)' }}>
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
              Commercial & Marketing <span className="highlight-yellow-glow">Printing Solutions</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Precision printing tailored for corporate branding, retail promotions, and marketing events.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(14, 165, 233, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(14, 165, 233, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Digital Printing?
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
          <h2 className="process-main-title">Bring Your Brand to Print with <span className="highlight-yellow-glow">High Precision</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our print specialists produce vibrant, premium printed materials that leave a lasting impression on your customers.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Order Print Materials</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
