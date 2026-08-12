import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function OffsetPrintingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "High-Volume Catalog & Brochure Printing",
    "Bulk Marketing Collateral & Flyers",
    "Packaging Boxes, Labels & Product Tags",
    "Corporate Annual Reports & Profiles",
    "Multi-Color CMYK Precise Color Calibration",
    "Post-Press UV, Foil & Lamination Finishing"
  ];

  const pillars = [
    {
      step: "01",
      icon: "BookOpen",
      title: "Brochure & Catalog Printing",
      desc: "High-capacity offset printing for multi-page brochures, comprehensive product catalogs, leaflets, and company profiles with exact CMYK color calibration."
    },
    {
      step: "02",
      icon: "Megaphone",
      title: "Marketing Material Printing",
      desc: "Large-scale printing for promotional flyers, posters, danglers, presentation folders, pamphlets, and advertising campaign collateral."
    },
    {
      step: "03",
      icon: "Package",
      title: "Packaging & Label Printing",
      desc: "Custom offset printing for product packaging boxes, luxury rigid boxes, garment tags, barcode labels, stickers, and branded retail cartons."
    },
    {
      step: "04",
      icon: "FileText",
      title: "Corporate Printing Solutions",
      desc: "Executive-grade printing for corporate annual reports, presentation folders, business stationery, letterheads, envelopes, and branded documents."
    },
    {
      step: "05",
      icon: "Layers",
      title: "Bulk Commercial Printing",
      desc: "Highly cost-effective offset printing for massive print volumes with rapid production turnaround and unmatched consistency across every single unit."
    },
    {
      step: "06",
      icon: "Sparkles",
      title: "Premium Print Finishing",
      desc: "Full post-press enhancements including matte/gloss thermal lamination, aqueous coating, spot UV, gold foil stamping, die-cutting, and perfect binding."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Printer size={22} color="#F97316" />,
      heading: "High-Speed Commercial Offset Presses",
      body: "Our industrial-grade offset printing presses deliver unmatched ink transfer fidelity, razor-sharp vector typography, and true Pantone/CMYK consistency."
    },
    {
      icon: <Icons.Building2 size={22} color="#F97316" />,
      heading: "End-to-End Corporate Solutions",
      body: "We serve startups, multinational enterprises, educational institutions, retail brands, and publishing houses with tailored commercial print contracts."
    },
    {
      icon: <Icons.TrendingDown size={22} color="#F97316" />,
      heading: "Cost-Effective Bulk Scaling",
      body: "Offset printing offers dramatic unit cost reduction at higher volumes, giving your business maximum marketing ROI without compromising quality."
    },
    {
      icon: <Icons.ShieldCheck size={22} color="#F97316" />,
      heading: "Color Accuracy & Strict Quality Control",
      body: "Every print job undergoes rigorous pre-flight checks, spectrophotometer color calibration, and multi-point quality inspections before packaging."
    }
  ];

  const whyChooseBullets = [
    "High-quality multi-color CMYK & Pantone offset press technology.",
    "Cost-effective bulk printing solutions for medium and large enterprises.",
    "End-to-end production: Pre-press, plate making, printing, and bindery.",
    "Consistent color accuracy and microscopic registration precision.",
    "Wide spectrum of paper stocks, GSM weights, and specialized boards.",
    "Fast production turnaround with reliable doorstep delivery across Bangalore."
  ];

  const faqs = [
    {
      q: 'What offset printing services does Digiworq provide?',
      a: 'Digiworq provides brochure printing, catalog printing, flyer printing, poster printing, product packaging printing, corporate stationery, annual reports, and high-volume commercial offset printing services.'
    },
    {
      q: 'Why choose offset printing for business materials?',
      a: 'Offset printing provides superior print quality, exact color consistency across millions of impressions, and unmatched cost efficiency for medium-to-large quantity print runs.'
    },
    {
      q: 'Do you provide bulk offset printing services in Bangalore?',
      a: 'Yes, Digiworq provides large-quantity bulk offset printing solutions for businesses, corporate organizations, educational institutions, and marketing campaigns across Bangalore.'
    },
    {
      q: 'Can Digiworq print brochures, catalogs and company profiles?',
      a: 'Yes, Digiworq provides end-to-end printing services for multi-page brochures, luxury catalogs, corporate profiles, annual reports, leaflets, and promotional collateral.'
    },
    {
      q: 'Why choose Digiworq as your offset printing company in Bangalore?',
      a: 'Digiworq offers premium print quality, advanced Heidelberg/Komori offset press solutions, customized branding materials, bulk volume discounts, and reliable on-time delivery.'
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
            <span className="bc-current">Offset Printing</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#F97316' }}>●</span>
                <span>Offset Printing Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Best Offset Printers</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq is a premier offset printing company in Bangalore offering high-quality, cost-effective commercial printing for businesses. Our offset printing delivers crisp imagery, consistent CMYK colors, and premium finishes for branding, packaging, and marketing collateral.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Offset Print Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="offset-printing" title="Offset Printing" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Offset Printing Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Layers size={16} color="#F97316" />
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
              Our 6 Core <span className="highlight-yellow-glow">Offset Print Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From high-volume commercial brochures to luxury product packaging — precision at every scale.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Layers;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(249, 115, 22, 0.4)', color: '#F97316', background: 'rgba(249, 115, 22, 0.12)' }}>
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
              Commercial Offset <span className="highlight-yellow-glow">Printing Capabilities</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Delivering high-capacity production, sharp image reproduction, and premium post-press finishes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(249, 115, 22, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(249, 115, 22, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Offset Printing?
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
          <h2 className="process-main-title">Scale Your Commercial Printing with <span className="highlight-yellow-glow">Offset Precision</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our offset printing team produce high-volume, cost-effective printed collateral with flawless color consistency.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Offset Print Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
