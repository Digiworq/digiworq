import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function PptDesignPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional PowerPoint Presentation Design Services",
    "Leading Presentation Design Agency in Bangalore Decks",
    "Best PowerPoint Design Services for Businesses & Pitch Decks",
    "PowerPoint Design Agency in Bangalore for Modern Brands Assets",
    "Editable 100% Vector PPTX Master Files & Infographic Slides"
  ];

  const mainH2Sections = [
    {
      title: "Professional PowerPoint Presentation Design Services",
      icon: Icons.Presentation,
      color: "#F5B800",
      desc: "We provide customized presentation design services. These services combine storytelling, branding and creative visuals to create high-quality business presentations.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Corporate presentation design",
        "Investor pitch deck design",
        "Sales presentation design",
        "Business proposal presentations",
        "Company profile presentations",
        "Interactive PowerPoint slides"
      ]
    },
    {
      title: "Leading Presentation Design Agency in Bangalore",
      icon: Icons.Award,
      color: "#A068FF",
      desc: "Digiworq is a trusted agency that creates engaging presentations. We improve communication. Help businesses deliver impactful messages to clients and stakeholders.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Creative presentation concepts",
        "Brand-focused slide design",
        "Visual storytelling",
        "Modern presentation layouts",
        "High-quality infographic slides"
      ]
    },
    {
      title: "Best PowerPoint Design Services for Businesses",
      icon: Icons.Sparkles,
      color: "#3B82F6",
      desc: "Our PowerPoint design services are tailored for businesses. We help companies create persuasive presentations for marketing, sales, training and corporate communication.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Customized PPT templates",
        "Presentation redesign services",
        "Animated PowerPoint presentations",
        "Data visualization slides",
        "Presentation branding solutions"
      ]
    },
    {
      title: "PowerPoint Design Agency in Bangalore for Modern Brands",
      icon: Icons.Building2,
      color: "#10B981",
      desc: "Digiworq helps businesses improve brand communication. We create designed presentations that align with company branding and marketing goals.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Business presentation support",
        "Startup pitch deck design",
        "Marketing presentation design",
        "Corporate communication slides",
        "Executive presentation solutions"
      ]
    },
    {
      title: "Why Choose Digiworq for Presentation Design Services?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: "We focus on delivering attractive and strategically structured presentations. These presentations improve audience engagement and business communication.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "presentation designers",
        "Creative storytelling approach",
        "Customized slide designs",
        "Fast project delivery",
        "Modern and professional visuals"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Briefcase,
      color: "#8B5CF6",
      desc: "We provide PowerPoint presentation design services for industries and business sectors.",
      bulletsHeader: "Some of the industries we serve include:",
      bullets: [
        "businesses",
        "Technology startups",
        "Healthcare companies",
        "institutions",
        "Real estate businesses",
        "Marketing and advertising agencies"
      ]
    },
    {
      title: "Benefits of Professional Presentation Design",
      icon: Icons.TrendingUp,
      color: "#F59E0B",
      desc: "Professional presentation design helps businesses improve communication, engagement and brand perception during meetings and presentations.",
      bulletsHeader: "Some of the benefits include:",
      bullets: [
        "Better audience engagement",
        "brand image",
        "Clear visual communication",
        "Improved presentation quality",
        "Business impact"
      ]
    }
  ];

  const pptProcessSteps = [
    {
      step: "01",
      title: "Content Understanding & Planning",
      desc: "We understand business goals, audience and presentation requirements."
    },
    {
      step: "02",
      title: "Creative Slide Design",
      desc: "We create visually engaging slides with branding and storytelling elements."
    },
    {
      step: "03",
      title: "Final Optimization & Delivery",
      desc: "We deliver presentation files optimized for meetings, pitches and digital sharing."
    }
  ];

  const faqs = [
    {
      q: "What presentation design services do you offer?",
      a: "We provide corporate presentation design, pitch decks, sales presentations and customized PowerPoint design services."
    },
    {
      q: "Do you redesign existing PowerPoint presentations?",
      a: "Yes we. Improve existing presentations with modern visuals and structured layouts."
    },
    {
      q: "Can you create investor pitch deck presentations?",
      a: "Yes we design investor pitch decks. Startup presentations for funding and business meetings."
    },
    {
      q: "Why is professional PowerPoint design important?",
      a: "Professional presentations improve communication, audience engagement and business credibility."
    },
    {
      q: "Why choose Digiworq as a PowerPoint design agency, in Bangalore?",
      a: "Digiworq combines creativity, branding and business-focused storytelling to deliver impactful presentation design solutions."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-ppt">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-ppt" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Best PowerPoint Design Agency in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Presentation size={16} /> Pitch Deck & Corporate Presentation Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best PowerPoint Design Agency in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is an agency that makes PowerPoint designs in Bangalore. We create presentations that're easy to look at and help businesses.
                </p>
                <p style={{ fontWeight: '600', color: '#F5B800' }}>
                  Our PowerPoint design services assist companies in communicating their ideas. We also help improve audience engagement and create presentations for meetings, sales, training and investor pitches.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Presentation Design Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="ppt-design" title="PPT Design" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Presentation Deliverables & Slide Assets:</h3>
            <div className="deliverables-pills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 184, 0, 0.1)', border: '1px solid rgba(245, 184, 0, 0.3)', padding: '8px 16px', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={16} color="#F5B800" />
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

      {/* Our Presentation Design Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our Presentation Design Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a structured 3-phase creative process to craft high-converting pitch decks and corporate slides.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {pptProcessSteps.map((stepItem, sIdx) => (
              <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(245, 184, 0, 0.18)', border: '1px solid #F5B800', color: '#F5B800', fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
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
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Frequently Asked Questions</h3>
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
                    <h4>{faq.q}</h4>
                    {isOpen ? <Icons.ChevronUp size={20} color="#F5B800" /> : <Icons.ChevronDown size={20} color="#F5B800" />}
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
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(245, 184, 0, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Create Winning Pitch Decks & Presentations?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq presentation designers to turn your slides into visual stories.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Presentation Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
