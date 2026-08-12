import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function AerialViewsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "4K / 8K Cinema Drone Video & 48MP Aerial Photos",
    "Real Estate Masterplan & Architecture Drone Scans",
    "Construction Site Monthly Progress Monitoring",
    "Live Event & Outdoor Concert Aerial Coverage",
    "Corporate Campus & Industrial Plant Filming",
    "DGCA Certified Pilots with Airspace Compliance"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Building",
      title: "Real Estate & Masterplan Aerials",
      desc: "Showcase luxury properties, villas, commercial towers, and township master layouts with high-resolution aerial perspectives highlighting scale and connectivity."
    },
    {
      step: "02",
      icon: "Video",
      title: "Cinematic Commercial Drone Filming",
      desc: "Hollywood-grade sweeping reveals, hyperlapse sequences, dynamic speed ramps, and low-altitude orbits for TVCs, brand films, and digital ad campaigns."
    },
    {
      step: "03",
      icon: "HardHat",
      title: "Construction & Infrastructure Tracking",
      desc: "Scheduled monthly drone videography and orthomosaic mapping for civil engineers and builders to track construction milestones, topography, and safety."
    },
    {
      step: "04",
      icon: "Users",
      title: "Live Event & Outdoor Festival Coverage",
      desc: "Capture massive crowd scale, stage light shows, corporate summits, sports tournaments, and experiential outdoor gatherings from dramatic vantage points."
    },
    {
      step: "05",
      icon: "Factory",
      title: "Corporate & Industrial Facilities",
      desc: "Expansive aerial showcases of sprawling IT tech parks, manufacturing units, logistics warehouses, and renewable energy installations."
    },
    {
      step: "06",
      icon: "ShieldCheck",
      title: "DGCA Certified & Insured Flights",
      desc: "Operated by licensed commercial UAV pilots adhering strictly to Digital Sky protocols, geofencing safety standards, and full flight insurance."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Maximize size={22} color="#60A5FA" />,
      heading: "Cinema Drone Fleet (DJI Inspire 3 & Mavic 3 Cine)",
      body: "We deploy enterprise-grade drones equipped with full-frame Hasselblad and Zenmuse cameras capturing Apple ProRes 422 HQ and CinemaDNG RAW footage."
    },
    {
      icon: <Icons.SunMedium size={22} color="#60A5FA" />,
      heading: "Dynamic Golden Hour & Night Flights",
      body: "Our high-dynamic-range sensors capture rich twilight colors, illuminated cityscapes, and vivid architectural facade lighting without digital noise."
    },
    {
      icon: <Icons.Layers size={22} color="#60A5FA" />,
      heading: "3D Camera Tracking & CGI Integration",
      body: "We deliver stabilized camera telemetry data allowing seamless integration of 3D architectural renders, animated boundary lines, and landmark callouts."
    },
    {
      icon: <Icons.Award size={22} color="#60A5FA" />,
      heading: "Turnkey Post-Production & Color Grading",
      body: "Our editors perform Davinci Resolve color grading, custom sound design with environmental audio, and stabilization for butter-smooth playback."
    }
  ];

  const whyChooseBullets = [
    "DGCA-certified commercial drone pilots with hundreds of flight hours.",
    "Ultra-high resolution 4K/8K ProRes video and 48MP RAW aerial photos.",
    "Comprehensive coverage: Real estate, construction, events, and brand films.",
    "Strict safety adherence with full third-party liability insurance coverage.",
    "Fast on-site deployment across Bangalore, Karnataka, and South India.",
    "Complete post-production: 3D tracking, color grading & licensed soundtrack mastering."
  ];

  const faqs = [
    {
      q: 'What aerial photography services does Digiworq provide?',
      a: 'We provide complete aerial photography and drone videography for real estate developments, commercial architecture, corporate events, construction progress monitoring, tourism campaigns, and advertising films.'
    },
    {
      q: 'Do you offer professional drone videography services in Bangalore?',
      a: 'Yes, our certified drone pilots provide ultra-smooth 4K and 8K cinematic aerial videography for brand films, product launches, corporate campuses, and commercial marketing projects.'
    },
    {
      q: 'Can aerial videos be used for marketing campaigns?',
      a: 'Absolutely. Aerial drone visuals add unmatched scale, prestige, and drama to promotional campaigns, social media reels, website hero banners, and investor presentations.'
    },
    {
      q: 'Are your drone pilots licensed and operations legal in Bangalore?',
      a: 'Yes, all our drone pilots are DGCA certified and fly registered UAVs in full compliance with Digital Sky airspace permissions, safety regulations, and public liability insurance.'
    },
    {
      q: 'Why choose Digiworq for aerial photography in Bangalore?',
      a: 'Digiworq combines industry-leading cinema drones (DJI Inspire 3 / Mavic 3 Cine), licensed master pilots, rapid on-site setup, and professional color grading tailored to your commercial goals.'
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
            <span className="bc-link-sub">Videography</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Aerial Views</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#60A5FA' }}>●</span>
                <span>Drone Cinema Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Aerial Photography</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers professional aerial photography and cinematic drone videography in Bangalore, capturing breathtaking visuals from stunning heights. Using DGCA-compliant enterprise drones and stabilized 4K/8K cameras, we create captivating aerial imagery for real estate, construction, events, and brand campaigns.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Book Drone Filming</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="ariel-views" title="Aerial Drone Views" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Aerial Videography & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Maximize size={16} color="#60A5FA" />
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
              Our 6 Core <span className="highlight-yellow-glow">Aerial Drone Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              From luxury real estate reveals to industrial site mapping — breathtaking perspectives from above.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Maximize;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(96, 165, 250, 0.4)', color: '#60A5FA', background: 'rgba(96, 165, 250, 0.12)' }}>
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
              Enterprise Drone Tech & <span className="highlight-yellow-glow">Cinematography</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              ProRes RAW capture, 3D camera tracking, and DGCA certified flight safety.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(96, 165, 250, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(96, 165, 250, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                Why Choose Digiworq for Aerial Drone Services?
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
          <h2 className="process-main-title">Elevate Your Visuals with <span className="highlight-yellow-glow">Cinematic Drone Footage</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our DGCA-certified drone cinematographers capture breathtaking aerial angles that set your project apart.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Book Drone Shoot</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
