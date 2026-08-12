import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function VehicleWrapsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Full Body Commercial Fleet Vehicle Wraps",
    "Partial Wraps & Strategic Cut Vinyl Decals",
    "One-Way Vision Perforated Window Graphics",
    "Delivery Van & Logistics Fleet Branding",
    "Promotional Event & Roadshow Wrap Graphics",
    "3M / Avery Cast Vinyl with Paint Protection"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Truck",
      title: "Full Vehicle Body Wraps",
      desc: "Transform your vehicle into a high-impact, 360-degree mobile billboard covering bumpers, doors, hood, and roof for maximum brand exposure on Bangalore roads."
    },
    {
      step: "02",
      icon: "Car",
      title: "Partial Vehicle Wraps",
      desc: "Cost-effective branding that seamlessly integrates contour-cut vinyl graphics, door decals, and typography with your vehicle's factory paint color."
    },
    {
      step: "03",
      icon: "Layers",
      title: "Fleet & Logistics Branding",
      desc: "Scale unified, professional branding across corporate cars, delivery vans, pickup trucks, container lorries, and service vehicle fleets."
    },
    {
      step: "04",
      icon: "Eye",
      title: "Perforated Window Graphics",
      desc: "One-way vision micro-perforated vinyl graphics that provide full-color advertising on the outside while maintaining 100% see-through visibility from the inside."
    },
    {
      step: "05",
      icon: "Megaphone",
      title: "Campaign & Event Branding",
      desc: "High-energy promotional wraps for product launches, movie promotions, roadshows, exhibition shuttles, and experiential marketing campaigns."
    },
    {
      step: "06",
      icon: "ShieldCheck",
      title: "Certified Pro Installation",
      desc: "Precision heat-gun application by certified wrap specialists ensuring bubble-free adhesion, deep concave recess setting, and zero damage to original paint."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.ShieldCheck size={22} color="#F97316" />,
      heading: "Premium 3M & Avery Cast Vinyl",
      body: "We exclusively use ultra-conformable cast vinyl wrap films with air-release adhesive channels, topped with UV-blocking cast overlaminate to prevent fading."
    },
    {
      icon: <Icons.SunMedium size={22} color="#F97316" />,
      heading: "Weatherproof & Car-Wash Safe",
      body: "Our vehicle wraps withstand intense tropical sunlight, heavy monsoon rains, gravel debris, and automated pressure washing without peeling or lifting."
    },
    {
      icon: <Icons.Maximize size={22} color="#F97316" />,
      heading: "Factory Paint Protection",
      body: "High-grade vinyl acts as an armor shield against stone chips, scratches, and UV oxidation, preserving the OEM vehicle resale value beneath."
    },
    {
      icon: <Icons.Award size={22} color="#F97316" />,
      heading: "3D Template Blueprint Design",
      body: "Our designers build artwork on exact millimetric 3D vehicle blueprints, ensuring logos, contact numbers, and headlines are never cut off by door handles or seams."
    }
  ];

  const whyChooseBullets = [
    "Premium-grade cast vinyl films (3M, Avery Dennison, Oracal).",
    "Custom 3D blueprint vehicle design tailored to your brand identity.",
    "Certified professional bubble-free wrap installation specialists.",
    "Durable, fade-proof UV-curable inks with protective clear overlaminate.",
    "Complete commercial fleet rollout and on-site wrapping logistics support.",
    "Clean residue-free removal that leaves factory paint untouched."
  ];

  const faqs = [
    {
      q: 'What are vehicle wrapping services?',
      a: 'Vehicle wrapping involves applying specialized, printed cast vinyl films directly over a vehicle\'s original paintwork to turn it into an eye-catching mobile advertisement or to restyle its visual appearance.'
    },
    {
      q: 'What types of vehicles can be wrapped?',
      a: 'We wrap all types of vehicles including passenger cars, SUVs, delivery vans, pickup trucks, container trucks, city buses, tempo travelers, auto-rickshaws, and corporate fleet vehicles.'
    },
    {
      q: 'Do you offer custom vehicle branding solutions?',
      a: 'Yes, our creative team designs bespoke vehicle wraps mapped to your exact vehicle model templates, aligning branding, QR codes, call-to-actions, and graphics with body lines and windows.'
    },
    {
      q: 'How long do vehicle wraps last?',
      a: 'With proper care and maintenance, our premium 3M and Avery Dennison cast vinyl wraps last between 3 to 7+ years without peeling, bubbling, or fading in tropical weather.'
    },
    {
      q: 'Why choose Digiworq for vehicle wrapping services in Bangalore?',
      a: 'Digiworq provides end-to-end design, high-definition large format printing, dust-free indoor wrap bays, certified installation technicians, and dedicated fleet management across Bangalore.'
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
            <span className="bc-current">Vehicle Wraps</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#F97316' }}>●</span>
                <span>Vehicle Branding Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Vehicle Wraps</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides professional vehicle wrapping services in Bangalore that transform everyday vehicles into powerful moving billboards. Our custom vehicle wraps help businesses command attention on the road, promote products, and maximize brand exposure with high-definition graphics and ultra-durable vinyl films.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Vehicle Wrap Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="vehicle-wraps" title="Vehicle Wraps" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Vehicle Wrapping & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Truck size={16} color="#F97316" />
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
              Our 6 Core <span className="highlight-yellow-glow">Vehicle Wrap Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From full commercial fleet wraps to one-way window graphics — mobile brand domination.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Truck;
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
              Commercial Fleet Branding & <span className="highlight-yellow-glow">Durability</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              3M cast vinyl films, UV weather protection, and certified bubble-free application.
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
                Why Choose Digiworq for Vehicle Wraps?
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
          <h2 className="process-main-title">Turn Your Vehicles into <span className="highlight-yellow-glow">24/7 Mobile Billboards</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our vehicle branding team design, print, and install head-turning wraps that drive impressions everywhere you go.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Vehicle Wrap Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
