import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ScreenPrintingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Custom Apparel & T-Shirt Screen Printing",
    "Corporate Uniforms & Staff Clothing",
    "Branded Tote Bags, Caps & Swag Items",
    "Multi-Color Plastisol & Water-Based Inks",
    "Packaging Boxes, Labels & Acrylic Prints",
    "High-Volume Bulk Production & Fast Delivery"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Shirt",
      title: "Apparel & T-Shirt Printing",
      desc: "High-durability screen printing on cotton t-shirts, polo shirts, corporate hoodies, jerseys, aprons, and custom event apparel."
    },
    {
      step: "02",
      icon: "ShoppingBag",
      title: "Promotional Merchandise Printing",
      desc: "Custom screen printing on canvas tote bags, caps, umbrellas, jute pouches, keychains, and marketing giveaway merchandise."
    },
    {
      step: "03",
      icon: "Building2",
      title: "Corporate Branding Prints",
      desc: "Branded uniforms and promotional materials tailored for conferences, expos, corporate annual days, and brand activation campaigns."
    },
    {
      step: "04",
      icon: "Package",
      title: "Commercial & Packaging Prints",
      desc: "Precision screen printing on product boxes, kraft packaging, bottles, industrial labels, metal plates, and retail signage."
    },
    {
      step: "05",
      icon: "Palette",
      title: "Multi-Color & Specialty Inks",
      desc: "Vibrant multi-color printing utilizing plastisol, eco-friendly water-based, discharge, metallic gold/silver, puff, and reflective inks."
    },
    {
      step: "06",
      icon: "Layers",
      title: "Bulk High-Volume Production",
      desc: "Economical large-scale screen printing with high wash-fast durability, consistent registration, and fast turnarounds."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Sparkles size={22} color="#A3E635" />,
      heading: "Screen Printers Bangalore",
      body: "Our experienced screen printing specialists deliver customized printing solutions for t-shirts, corporate uniforms, event apparel, and branding assets with vibrant ink saturation."
    },
    {
      icon: <Icons.Award size={22} color="#A3E635" />,
      heading: "Brand Identity Printing",
      body: "We provide high-precision logo printing and product customization that reinforces your brand recognition across retail merchandise and customer touchpoints."
    },
    {
      icon: <Icons.TrendingUp size={22} color="#A3E635" />,
      heading: "Multi-Color & Fine Detail Printing",
      body: "Our high-mesh screens and precise color separation techniques ensure that complex multi-color artwork and fine line details reproduce flawlessly on fabrics and substrates."
    },
    {
      icon: <Icons.CheckCircle2 size={22} color="#A3E635" />,
      heading: "Wash-Fast & Fade-Resistant Quality",
      body: "Using heat-cured premium inks, our screen-printed garments and merchandise withstand repeated industrial washing without cracking, fading, or peeling."
    }
  ];

  const whyChooseBullets = [
    "High-quality, wash-fast, and durable print finishes that last for years.",
    "Custom printing solutions tailored for startups, retail brands, and enterprises.",
    "Extensive apparel and promotional merchandise printing expertise.",
    "Multi-color, CMYK halftone, and large-format screen printing capabilities.",
    "Highly cost-effective bulk pricing for large quantity orders.",
    "Fast production turnaround with reliable doorstep delivery across Bangalore."
  ];

  const faqs = [
    {
      q: 'What screen printing services does Digiworq provide?',
      a: 'Digiworq provides custom t-shirt printing, apparel printing, corporate uniform printing, tote bag printing, promotional merchandise printing, packaging box printing, and commercial screen printing services.'
    },
    {
      q: 'Is screen printing suitable for bulk orders?',
      a: 'Yes, screen printing is the most cost-effective and reliable method for medium to large-volume printing requirements, offering unbeatable unit economics and color vibrancy.'
    },
    {
      q: 'Do you provide custom screen printing in Bangalore?',
      a: 'Yes, we create fully customized screen printing solutions for businesses, college events, retail brands, marathon runs, and marketing campaigns across Bangalore.'
    },
    {
      q: 'Can Digiworq print company logos on apparel and merchandise?',
      a: 'Yes, we provide high-definition logo printing and brand customization on round-neck t-shirts, polo shirts, hoodies, canvas bags, caps, and promotional swag products.'
    },
    {
      q: 'Why choose Digiworq for screen printing services in Bangalore?',
      a: 'Digiworq offers professional print quality, durable long-lasting inks, custom branding support, scalable bulk production, and dependable on-time delivery tailored to your timeline.'
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
            <span className="bc-current">Screen Printing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#A3E635' }}>●</span>
                <span>Screen Printing Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Screen Printing</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides professional screen printing services in Bangalore designed for businesses, brands, organizations, and promotional campaigns. Our screen printing solutions deliver high-quality prints with vibrant colors and long-lasting finishes for apparel, merchandise, and commercial branding.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Screen Print Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="screen-printing" title="Screen Printing" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Screen Printing Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Palette size={16} color="#A3E635" />
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
              Our 6 Core <span className="highlight-yellow-glow">Screen Print Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From custom apparel to branded promotional merchandise — vibrant ink transfer built to last.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Palette;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(163, 230, 53, 0.4)', color: '#A3E635', background: 'rgba(163, 230, 53, 0.12)' }}>
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
              Apparel & Custom Merchandise <span className="highlight-yellow-glow">Capabilities</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Delivering high ink density, rich color opacity, and commercial wash-durability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(163, 230, 53, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(163, 230, 53, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Screen Printing?
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
          <h2 className="process-main-title">Custom Screen Print Your <span className="highlight-yellow-glow">Apparel & Merch</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our screen printing specialists produce vibrant, durable branded merchandise and uniforms that stand out.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Screen Print Order</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
