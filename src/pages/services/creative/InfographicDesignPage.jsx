import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function InfographicDesignPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional Infographic Design Services & Vector Assets",
    "Leading Infographic Design Agency in Bangalore Data Visuals",
    "Best Graphic Design Solutions for Businesses Infographics",
    "Infographic Design in Bangalore for Digital Marketing Assets",
    "High-Resolution PNG, SVG & PDF Web/Print Ready Graphics"
  ];

  const mainH2Sections = [
    {
      title: "Professional Infographic Design Services",
      icon: Icons.PieChart,
      color: "#10B981",
      desc: "Digiworqs infographic design services are focused on delivering visual storytelling solutions for businesses, startups and corporate brands that need infographic design services.",
      subDesc: "Infographic design services can really help businesses.",
      bulletsHeader: "The following points are important for design services:",
      bullets: [
        "Business infographic design",
        "Marketing infographic creation",
        "Data visualization design",
        "Social media infographics",
        "infographic design",
        "Interactive infographic concepts"
      ]
    },
    {
      title: "Leading Infographic Design Agency in Bangalore",
      icon: Icons.Award,
      color: "#A068FF",
      desc: "As a trusted design agency in Bangalore Digiworq combines creativity, branding and data visualization techniques to create visually engaging infographic content for digital and print platforms that need infographic design services.",
      subDesc: "Digiworq is an infographic design agency in Bangalore for infographic design services.",
      bulletsHeader: "The following points are important for design services:",
      bullets: [
        "Creative visual storytelling",
        "Brand-focused infographic layouts",
        "Professional design approach",
        "User- visual communication",
        "Modern infographic concepts"
      ]
    },
    {
      title: "Best Graphic Design Solutions for Businesses",
      icon: Icons.Sparkles,
      color: "#F5B800",
      desc: "Digiworq provides graphic design solutions that help businesses communicate information more effectively and improve audience interaction with infographic design services.",
      subDesc: "Infographic design services are really useful for businesses.",
      bulletsHeader: "The following points are important for design services:",
      bullets: [
        "High-quality visual content",
        "Creative business presentations",
        "Marketing and promotional graphics",
        "Engaging creatives",
        "Customized branding visuals"
      ]
    },
    {
      title: "Infographic Design in Bangalore for Digital Marketing",
      icon: Icons.TrendingUp,
      color: "#3B82F6",
      desc: "Digiworqs design solutions support digital marketing campaigns by creating visually appealing content for websites, social media, blogs and advertising platforms that need infographic design services.",
      subDesc: "Infographic design services can help with digital marketing.",
      bulletsHeader: "The following points are important for design services:",
      bullets: [
        "SEO-friendly infographic content",
        "Media infographic design",
        "Infographic marketing creatives",
        "Website infographic visuals",
        "Content marketing support"
      ]
    },
    {
      title: "Why Choose Digiworq for Infographic Design Services?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: "Digiworq focuses on creating infographic designs that improve communication, simplify complex data and strengthen brand identity for infographic design services.",
      subDesc: "Digiworq is the choice for infographic design services.",
      bulletsHeader: "The following points are important for design services:",
      bullets: [
        "Experienced creative designers",
        "infographic solutions",
        "Modern visual design techniques",
        "Fast project delivery",
        "Industry-focused creative support"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "Digiworq provides design services for businesses across multiple industries and sectors that need infographic design services.",
      subDesc: "Infographic design services can help many industries.",
      bulletsHeader: "The following points are important for design services:",
      bullets: [
        "Healthcare",
        "Education",
        "estate",
        "Technology companies",
        "Retail and eCommerce",
        "Corporate enterprises"
      ]
    },
    {
      title: "Benefits of Professional Infographic Design",
      icon: Icons.Zap,
      color: "#F59E0B",
      desc: "Professional design helps businesses present information more clearly and improve audience engagement with infographic design services.",
      subDesc: "Infographic design services have many benefits.",
      bulletsHeader: "The following points are important for design services:",
      bullets: [
        "Better visual communication",
        "Increased audience attention",
        "content engagement",
        "Simplified data presentation",
        "Stronger brand identity"
      ]
    }
  ];

  const infographicProcess = [
    {
      step: "01",
      title: "Research & Content Planning",
      desc: "Digiworq understands the business message, audience and content requirements for design services. This is the step in creating great infographic design services."
    },
    {
      step: "02",
      title: "Creative Visual Design",
      desc: "Digiworq creates engaging layouts with icons, illustrations and branding elements for infographic design services. This is an important part of infographic design services."
    },
    {
      step: "03",
      title: "Final Optimization & Delivery",
      desc: "Digiworq delivers optimized designs for digital and print usage that need infographic design services. This is the step in creating great infographic design services."
    }
  ];

  const faqs = [
    {
      q: "What are infographic design services?",
      a: "Infographic design services help businesses convert information into visually engaging and easy-to-understand graphics that are infographic design services. Infographic design services are very useful."
    },
    {
      q: "Why are infographics important for marketing?",
      a: "Infographics improve audience engagement, simplify communication and increase content sharing with design services. Infographic design services can really help with marketing."
    },
    {
      q: "Do you provide customized designs?",
      a: "Yes Digiworq creates customized solutions based on business goals and branding requirements for infographic design services. Digiworq can make custom design services."
    },
    {
      q: "Can infographics be used for media marketing?",
      a: "Yes infographics are highly effective for media, blogs, presentations and digital campaigns that need infographic design services. Infographic design services can help with media marketing."
    },
    {
      q: "Why choose Digiworq for design in Bangalore?",
      a: "Digiworq combines creativity, branding and professional visual storytelling to deliver infographic design services in Bangalore for infographic design services. Digiworq is the choice for infographic design services, in Bangalore."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-infographic">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-infographic" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Infographic Design Services in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '30px', color: '#10B981', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.PieChart size={16} /> Data Visualization & Visual Storytelling Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Infographic Design Services in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq provides infographic design services in Bangalore that help businesses transform complex information into visually engaging and easy-to-understand content.
                </p>
                <p style={{ marginBottom: '12px' }}>
                  As an infographic design agency in Bangalore Digiworq creates impactful visual designs that improve communication, audience engagement and brand visibility for infographic design services.
                </p>
                <p style={{ fontWeight: '600', color: '#10B981' }}>
                  Infographic design services are about making things easy to understand for people.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Infographic Design Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="infographic-design" title="Infographic Design" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Infographic Deliverables & Data Visual Assets:</h3>
            <div className="deliverables-pills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '8px 16px', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={16} color="#10B981" />
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
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '14px' }}>
                    {sec.desc}
                  </p>

                  {sec.bullets && (
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px', marginBottom: '16px' }}>
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

                  {sec.subDesc && (
                    <p style={{ color: sec.color, fontSize: '0.92rem', fontWeight: '700', fontStyle: 'italic', margin: 0 }}>
                      {sec.subDesc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Infographic Design Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our Infographic Design Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We structure raw data into visually compelling infographic stories through a proven 3-phase workflow.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {infographicProcess.map((stepItem, sIdx) => (
              <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.18)', border: '1px solid #10B981', color: '#10B981', fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
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
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Asked Questions</h3>
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
                    {isOpen ? <Icons.ChevronUp size={20} color="#10B981" /> : <Icons.ChevronDown size={20} color="#10B981" />}
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
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Transform Complex Data into Engaging Infographics?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq infographic designers to turn your statistics into visual stories.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Infographic Design Session</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
