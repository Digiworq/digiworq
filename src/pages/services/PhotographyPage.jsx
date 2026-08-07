import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

function PhotoViewfinderWidget() {
  return (
    <div className="custom-widget-card photo-viewfinder-box">
      <div className="viewfinder-hud">
        <div className="hud-corner top-left"></div>
        <div className="hud-corner top-right"></div>
        <div className="hud-corner bottom-left"></div>
        <div className="hud-corner bottom-right"></div>

        <div className="hud-center-crosshair"></div>
        <span className="hud-rec-dot">● REC 61MP RAW</span>

        <div className="hud-camera-settings">
          <span>f/1.4</span>
          <span>1/1000s</span>
          <span>ISO 100</span>
          <span>85mm G-Master</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" 
          alt="Studio Photography Viewfinder" 
          className="hud-bg-img"
        />
      </div>
    </div>
  );
}

export default function PhotographyPage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData.photography || { categoryTitle: "Photography", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Photography", overview: "Commercial product, event & model photography.", process: [] };

  const deliverables = activeSub.deliverables || [
    "61MP Ultra High-Res RAW & JPEG Master Images",
    "High-End High-Key & Low-Key Retouching",
    "Color-Matched TIFF Files for Print & E-commerce",
    "Transparent PNG Background Cuts for Catalogs",
    "Web-Optimized Compressed Images for E-commerce",
    "100% Commercial Usage & Copyright Handoff"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Camera",
      title: "61MP Full-Frame Sensors",
      desc: "Captured on 61MP full-frame cameras with G-Master prime lenses for razor-sharp product details."
    },
    {
      step: "02",
      icon: "Sun",
      title: "Profoto Studio Strobe Lighting",
      desc: "Precision Profoto softboxes and strobe lighting setups tailored for fashion, catalog, and e-commerce shoots."
    },
    {
      step: "03",
      icon: "Sliders",
      title: "High-End Frequency Retouching",
      desc: "Pixel-level skin frequency separation, dust cleanup, reflection removal, and color calibration."
    },
    {
      step: "04",
      icon: "ShoppingBag",
      title: "E-Commerce Ready Catalogs",
      desc: "Formatted for Amazon, Flipkart, Shopify, and Instagram shopping feeds with white background cutouts."
    },
    {
      step: "05",
      icon: "Sparkles",
      title: "Creative Art Direction",
      desc: "On-set prop styling, color-palette coordination, and aesthetic composition for brand catalogs."
    },
    {
      step: "06",
      icon: "Zap",
      title: "Rapid 48-Hour Proofing",
      desc: "Access your private online proofing gallery to select hero images within 48 hours of filming."
    }
  ];

  const genericCons = [
    "Blurry smartphone photos with poor lighting and grainy noise",
    "Distorted colors causing high customer return rates on e-commerce sites",
    "Unedited harsh shadows and reflections over product logos",
    "Lack of prop styling or creative composition strategy",
    "Delayed image proofing taking weeks to deliver basic catalog files"
  ];

  const digiworqPros = [
    "61MP Full-Frame Sony & Canon camera rigs with G-Master prime lenses",
    "Profoto studio strobe lighting setups for indoor and outdoor shoots",
    "Pixel-level skin retouching & high-precision color calibration",
    "Amazon & Shopify e-commerce ready image catalog formatting",
    "Private Online Proofing Gallery Delivered Within 48 Hours"
  ];

  const processSteps = activeSub.process && activeSub.process.length >= 4 ? [
    { step: "01", title: activeSub.process[0].title || "Concept & Prop Prep", desc: "Setting shot lists, prop styling & lighting moodboards." },
    { step: "02", title: activeSub.process[1].title || "Studio Shoot", desc: "Tethered camera shoot with live monitor client preview." },
    { step: "03", title: activeSub.process[2].title || "Retouching & Color", desc: "High-end frequency separation skin retouching & color match." },
    { step: "04", title: activeSub.process[3].title || "High-Res Handoff", desc: "Delivering RAW, TIFF, PNG cutouts & commercial licenses." }
  ] : [
    { step: "01", title: "Concept & Prop Prep", desc: "Setting shot lists, prop styling & lighting moodboards." },
    { step: "02", title: "Studio Shoot", desc: "Tethered camera shoot with live monitor client preview." },
    { step: "03", title: "Retouching & Color", desc: "High-end frequency separation skin retouching & color match." },
    { step: "04", title: "High-Res Handoff", desc: "Delivering RAW, TIFF, PNG cutouts & commercial licenses." }
  ];

  const faqs = [
    {
      q: `What is included in a studio ${activeSub.title} package?`,
      a: "Our studio package includes photographer crew, studio lighting, live tethered monitor preview, prop styling, frequency separation retouching, and full commercial copyright handoff."
    },
    {
      q: "Can we view and select images live during the shoot?",
      a: "Yes! We shoot tethered directly to a 27-inch studio display monitor so you can review and approve images in real time during the shoot."
    },
    {
      q: "How fast will we receive retouched final photos?",
      a: "We upload proofing galleries within 48 hours, and final high-res retouched images within 3-5 business days."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-photography">
      {/* 1. Hero Section */}
      <section className="service-landing-hero hero-theme-photography">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Photography</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Photography Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Studio Shoot</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <PhotoViewfinderWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>High-Res Image Specs & Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Camera size={16} color="#F5B800" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core Photography Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Photography Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              61MP full-frame sensors, Profoto studio strobe lighting, and high-frequency retouching.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Camera;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(245, 184, 0, 0.4)', color: '#F5B800', background: 'rgba(245, 184, 0, 0.12)' }}>
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

      {/* 3. Modern Split Comparison Showcase Deck */}
      <section className="service-comparison-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '52px' }}>
            <h2 className="process-main-title">
              Casual Smartphone Photos vs. <span className="highlight-yellow-glow">Digiworq Studio Photography</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why leading e-commerce brands choose commercial photography over casual phone photos.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Casual Phone Photos</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Unedited Smartphone Snapshots
              </h3>
              <div className="comparison-items-list">
                {genericCons.map((con, idx) => (
                  <div key={idx} className="comparison-list-item danger">
                    <div className="icon-box-danger">✕</div>
                    <span>{con}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="comparison-card-winner" style={{ borderColor: '#F5B800' }}>
              <div className="comparison-card-header">
                <span className="comparison-badge-winner" style={{ borderColor: '#F5B800', color: '#F5B800', background: 'rgba(245, 184, 0, 0.15)' }}>
                  ★ Digiworq Studio House
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#F5B800' }}>
                61MP Commercial Photography
              </h3>
              <div className="comparison-items-list" style={{ marginBottom: '28px' }}>
                {digiworqPros.map((pro, idx) => (
                  <div key={idx} className="comparison-list-item winner">
                    <div className="icon-box-winner">✓</div>
                    <span>{pro}</span>
                  </div>
                ))}
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Studio Shoot</span>
                  <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="digiworq-process-section py-20">
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Our 4-Phase <span className="highlight-yellow-glow">Shoot & Retouch Workflow</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {processSteps.map((p, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)', 
                  border: '1px solid rgba(245, 184, 0, 0.3)', 
                  borderRadius: '20px', 
                  padding: '32px 28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <span style={{ background: '#F5B800', color: '#111827', fontWeight: 900, fontSize: '0.9rem', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.step}
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Impact Stats Bar */}
      <section className="py-14" style={{ background: 'linear-gradient(180deg, #0B0F19 0%, #05070F 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', textAlign: 'center', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>500+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Product Shoots Delivered</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>61MP</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Full-Frame Sensor Resolution</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>48 hrs</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Proofing Gallery Delivery</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Photography Gear Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Studio Camera Gear & Retouching Software Suites
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Sony A7R V 61MP', 'Canon EOS R5', 'Profoto Pro-11 Strobes', 'Capture One Pro', 'Adobe Photoshop CC', 'Sony G-Master Lenses', 'Eizo ColorEdge Monitors'].map((tool, idx) => (
              <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#D1D5DB', padding: '8px 18px', borderRadius: '20px', fontSize: '0.88rem', fontWeight: 600 }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Accordion */}
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
                  style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '14px', overflow: 'hidden' }}
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '22px 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 700, textAlign: 'left', cursor: 'pointer' }}
                  >
                    <span>{faq.q}</span>
                    <Icons.ChevronDown size={22} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#F5B800' }} />
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

      {/* 8. Bottom CTA Banner */}
      <section className="service-cta-banner-wrap" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B0F19 100%)' }}>
        <div className="section-container text-center">
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
              Ready to Book Your <span style={{ color: '#F5B800' }}>{activeSub.title}?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Schedule a commercial photo shoot and receive a custom estimate today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Studio Shoot</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
