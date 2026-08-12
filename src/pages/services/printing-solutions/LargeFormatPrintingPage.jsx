import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function LargeFormatPrintingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Outdoor Billboards & Hoardings Printing",
    "Roll-Up Standees & Pop-Up Backdrops",
    "Indoor Wall Graphics & Murals",
    "Flex & Vinyl Promotional Banners",
    "Exhibition Stall & Trade Show Branding",
    "Retail Storefront & Acrylic Signage"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Maximize",
      title: "Indoor Branding Prints",
      desc: "High-resolution printing for corporate wall graphics, custom murals, canvas frames, retail interior branding, and point-of-sale display boards."
    },
    {
      step: "02",
      icon: "Megaphone",
      title: "Outdoor Advertising Prints",
      desc: "Durable, high-visibility outdoor prints for highway billboards, hoardings, building wraps, and weather-resistant promotional displays."
    },
    {
      step: "03",
      icon: "Layers",
      title: "Flex & Vinyl Banner Printing",
      desc: "Custom-sized frontlit and backlit flex banners, blackout banners, self-adhesive vinyl, and mesh banners engineered for all weather conditions."
    },
    {
      step: "04",
      icon: "Building2",
      title: "Exhibition & Event Branding",
      desc: "Turnkey trade show branding including modular backdrop walls, roll-up banner standees, promotional kiosks, and exhibition stall graphics."
    },
    {
      step: "05",
      icon: "Layout",
      title: "Wall Graphics & Signage",
      desc: "Custom architectural signage, 3D acrylic letters, frosted glass vinyl, LED lightbox graphics, and storefront retail branding."
    },
    {
      step: "06",
      icon: "Sparkles",
      title: "Promotional Marketing Displays",
      desc: "High-impact visual display solutions engineered to grab foot traffic attention during product launches, mall activations, and corporate events."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Maximize size={22} color="#FB7185" />,
      heading: "Ultra-Wide Format Printing Press",
      body: "Our industrial UV, eco-solvent, and latex wide-format printers output seamless prints up to 10 feet wide with microscopic dot precision and rich color saturation."
    },
    {
      icon: <Icons.ShieldCheck size={22} color="#FB7185" />,
      heading: "Weatherproof & UV-Resistant Inks",
      body: "We use industrial-grade, UV-curable inks that resist sun fading, rain, humidity, and physical wear, ensuring outdoor graphics look brand-new for years."
    },
    {
      icon: <Icons.Flag size={22} color="#FB7185" />,
      heading: "Roll-Up Standees & Pop-Up Systems",
      body: "We supply lightweight aluminum pull-up banner stands, spider banner frames, magnetic backdrop walls, and portable promo tables for easy event travel."
    },
    {
      icon: <Icons.Building size={22} color="#FB7185" />,
      heading: "Turnkey Installation Support",
      body: "From on-site dimension measurement to seamless mounting and professional installation, our crew handles large format deployment across Bangalore."
    }
  ];

  const whyChooseBullets = [
    "High-resolution 1440+ DPI large format printing for crisp visuals up close.",
    "Comprehensive indoor and outdoor branding substrate selection.",
    "Weather-proof, scratch-resistant, and UV-stabilized materials.",
    "Custom fabrication: Hemming, eyelets, pole pockets, and framing.",
    "Rapid turnarounds for time-critical exhibitions and promotional launches.",
    "Professional on-site delivery and installation teams across Bangalore."
  ];

  const faqs = [
    {
      q: 'What large format printing services does Digiworq provide?',
      a: 'Digiworq provides banner printing, outdoor hoarding printing, billboard printing, exhibition backdrop printing, roll-up standees, wall graphics, retail signage, and custom promotional displays.'
    },
    {
      q: 'What is large format printing used for?',
      a: 'Large format printing is commonly used for outdoor billboards, advertising hoardings, retail storefronts, exhibition stalls, corporate office interiors, trade shows, and high-impact marketing campaigns.'
    },
    {
      q: 'Do you provide banner printing services in Bangalore?',
      a: 'Yes, we provide custom banner printing solutions including flex banners, vinyl banners, fabric banners, mesh banners, and event branding installations.'
    },
    {
      q: 'Can Digiworq handle exhibition and event branding prints?',
      a: 'Yes, we provide complete large format printing solutions for exhibitions, trade expos, conferences, stage backdrops, standees, and retail pop-up activations.'
    },
    {
      q: 'Why choose Digiworq for large format printing in Bangalore?',
      a: 'Digiworq offers cutting-edge wide format print technology, customized material solutions, weather-durable inks, professional finishing, and turnkey installation support.'
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
            <span className="bc-current">Large Format Printing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#FB7185' }}>●</span>
                <span>Large Format Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Large Format Printing</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers large format printing services in Bangalore designed to help businesses create impactful visual branding and promotional materials. Our solutions are ideal for advertising campaigns, exhibitions, retail branding, corporate events, and outdoor marketing.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Large Format Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="large-format-printing" title="Large Format Prints" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Large Format Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Maximize size={16} color="#FB7185" />
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
              Our 6 Core <span className="highlight-yellow-glow">Large Format Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From massive outdoor billboards to precision retail graphics — maximum visibility at any scale.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Maximize;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(251, 113, 133, 0.4)', color: '#FB7185', background: 'rgba(251, 113, 133, 0.12)' }}>
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
              Outdoor & Indoor <span className="highlight-yellow-glow">Display Capabilities</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              High-impact signage, exhibition backdrops, and architectural graphics engineered for durability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(251, 113, 133, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(251, 113, 133, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Large Format Printing?
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
          <h2 className="process-main-title">Make a Bold Statement with <span className="highlight-yellow-glow">Large Format Printing</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our large format printing specialists produce vibrant, durable outdoor and indoor displays that capture maximum attention.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Large Format Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
