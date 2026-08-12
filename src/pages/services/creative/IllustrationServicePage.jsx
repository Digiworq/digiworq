import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function IllustrationServicePage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional Creative Illustration Services & Digital Artwork",
    "Leading Illustration Design Company Bangalore Vectors",
    "Illustration Agency Bangalore for Modern Brands Campaign Kits",
    "3D Illustration Design Services & Realistic Digital Renderings",
    "High-Resolution SVG, AI, EPS & PNG Print/Digital Ready Files"
  ];

  const mainH2Sections = [
    {
      title: "Professional Creative Illustration Services",
      icon: Icons.Palette,
      color: "#A068FF",
      desc: "Our illustration services help brands tell their story better and engage their audience. We create high-quality custom artwork and digital designs.",
      bulletsHeader: "Some of the services we offer include:",
      bullets: [
        "Custom digital illustrations",
        "brand illustrations",
        "Marketing illustration design",
        "Social media illustrations",
        "Website illustration design",
        "Character and mascot illustrations"
      ]
    },
    {
      title: "Leading Illustration Design Company Bangalore",
      icon: Icons.Award,
      color: "#F5B800",
      desc: "As a professional illustration design company in Bangalore Digiworq focuses on making illustration solutions that are visually appealing and focused on a brand. We create these solutions for businesses across industries.",
      bulletsHeader: "Some key areas we focus on include:",
      bullets: [
        "illustration concepts",
        "Business-focused visual storytelling",
        "Creative digital artwork",
        "Modern illustration styles",
        "High-quality graphic solutions"
      ]
    },
    {
      title: "Illustration Agency Bangalore for Modern Brands",
      icon: Icons.Sparkles,
      color: "#3B82F6",
      desc: "Our illustration agency in Bangalore provides design solutions. These solutions improve branding, communication and customer engagement across print platforms.",
      bulletsHeader: "Some of the illustration services we offer include:",
      bullets: [
        "Advertising illustrations",
        "Branding illustration services",
        "Product illustration design",
        "Editorial illustration design",
        "concept illustrations"
      ]
    },
    {
      title: "3D Illustration Design Services",
      icon: Icons.Box,
      color: "#10B981",
      desc: "We offer professional 3D illustration design services. These services help businesses create immersive and engaging experiences. Our 3D illustrations are used for branding, presentations, architecture and marketing campaigns.",
      bulletsHeader: "Some of the 3D illustration services we provide include:",
      bullets: [
        "product illustrations",
        "Architectural 3D illustrations",
        "3D artwork",
        "Visual concepts",
        "Realistic digital rendering"
      ]
    },
    {
      title: "Why Choose Digiworq for Illustration Services?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: "Digiworq combines creativity, branding expertise and modern design techniques. This helps us deliver illustration services that support business growth.",
      bulletsHeader: "Some reasons to choose us include:",
      bullets: [
        "Experienced illustrators",
        "Customized design solutions",
        "Modern illustration techniques",
        "Industry-focused creative support",
        "End-to-end visual design services"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "We provide illustration design services for businesses across industries and sectors.",
      bulletsHeader: "Some of the industries we serve include:",
      bullets: [
        "Healthcare",
        "Education",
        "estate",
        "Retail and eCommerce",
        "Advertising and marketing",
        "Corporate businesses and startups"
      ]
    },
    {
      title: "Benefits of Professional Illustration Design",
      icon: Icons.TrendingUp,
      color: "#F59E0B",
      desc: "Professional illustration design helps businesses communicate visually and engage their customers better.",
      bulletsHeader: "Some benefits of illustration design include:",
      bullets: [
        "Better brand storytelling",
        "Improved visual communication",
        "Increased audience engagement",
        "Unique creative identity",
        "Strong digital presence"
      ]
    }
  ];

  const illustrationProcess = [
    {
      step: "01",
      title: "Research & Concept Development",
      desc: "We start by understanding business goals, branding and illustration requirements."
    },
    {
      step: "02",
      title: "Creative Illustration Design",
      desc: "Next we create artwork and visual concepts that align with a brands identity."
    },
    {
      step: "03",
      title: "Final Delivery & Optimization",
      desc: "Finally we deliver optimized illustration assets for print usage."
    }
  ];

  const faqs = [
    {
      q: "What illustration services do you provide?",
      a: "We provide illustrations, branding illustrations, 3D illustration design, marketing visuals and custom artwork solutions."
    },
    {
      q: "Why are illustrations important for branding?",
      a: "Illustrations help businesses create visual communication and improve customer engagement through illustrations."
    },
    {
      q: "Do you provide custom illustration designs?",
      a: "Yes we create illustration solutions based on branding and marketing requirements with custom illustrations."
    },
    {
      q: "Can illustrations be used for marketing?",
      a: "Yes illustrations are highly effective for websites, social media, advertising and content marketing with illustrations."
    },
    {
      q: "Why choose Digiworq for illustration services in Bangalore?",
      a: "Digiworq delivers brand-focused and visually engaging illustration solutions for modern businesses, with illustration services."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-illustrations">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-illustrations" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Illustration Services in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(160, 104, 255, 0.12)', border: '1px solid rgba(160, 104, 255, 0.3)', borderRadius: '30px', color: '#A068FF', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Palette size={16} /> 2D & 3D Custom Artwork & Digital Illustration Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Illustration Services in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq offers illustration services in Bangalore. These services help businesses share ideas through engaging artwork and custom illustrations.
                </p>
                <p style={{ fontWeight: '600', color: '#A068FF' }}>
                  As a trusted illustration design company in Bangalore we make illustrations for branding, marketing, websites, advertising and digital content.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Illustration Project</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="illustrations-and-recreation-services" title="Illustrations & Recreation" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Illustration Deliverables & Vector Assets:</h3>
            <div className="deliverables-pills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(160, 104, 255, 0.1)', border: '1px solid rgba(160, 104, 255, 0.3)', padding: '8px 16px', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={16} color="#A068FF" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main H2 Service Blocks */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {mainH2Sections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${sec.color}44`, borderRadius: '24px', padding: '36px', boxShadow: `0 12px 32px ${sec.color}15` }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: `${sec.color}18`, border: `1px solid ${sec.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComp size={26} color={sec.color} />
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px', lineHeight: '1.3' }}>
                    {sec.title}
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: sec.bullets ? '20px' : '0' }}>
                    {sec.desc}
                  </p>

                  {sec.bullets && (
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
                      <div style={{ color: sec.color, fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>
                        {sec.bulletsHeader}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {sec.bullets.map((bItem, bIdx) => (
                          <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '600' }}>
                            <Icons.CheckCircle2 size={16} color={sec.color} />
                            <span>{bItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Illustration Design Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our Illustration Design Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a structured 3-phase creative artwork pipeline from research and concepts to final delivery.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {illustrationProcess.map((stepItem, sIdx) => (
              <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(160, 104, 255, 0.18)', border: '1px solid #A068FF', color: '#A068FF', fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  {stepItem.step}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px' }}>
                  {stepItem.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ padding: '80px 0', background: '#0A0E1A' }}>
        <div className="section-container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '1.08rem', fontWeight: '700', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <h3>{faq.q}</h3>
                    {isOpen ? <Icons.ChevronUp size={20} color="#A068FF" /> : <Icons.ChevronDown size={20} color="#A068FF" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 20px 24px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: '60px 0 80px 0', background: '#05070F' }}>
        <div className="section-container text-center">
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(160, 104, 255, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(160, 104, 255, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Elevate Your Brand with Custom Digital & 3D Illustrations?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq lead illustrators to craft custom artwork, 3D models, and mascots for your brand.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Illustration Consultation</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
