import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function UiUxDesignPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional UI UX Design Services & Wireframing",
    "Leading UI UX Design Company in Bangalore Prototypes",
    "UI UX Design Firm for Modern Businesses & SaaS Apps",
    "UI UX Studio for Creative Digital Experiences",
    "Interactive Figma Design Tokens & Component Libraries"
  ];

  const mainH2Sections = [
    {
      title: "Professional UI UX Design Services",
      icon: Icons.Layout,
      color: "#A068FF",
      desc: "We do everything when it comes to UI UX design. We combine being creative, making things work well, and thinking about the user to make digital products.",
      bulletsHeader: "Here are some things we do:",
      bullets: [
        "Website UI UX design",
        "Mobile app UI design",
        "User experience optimization",
        "Wireframing and prototyping",
        "interface design",
        "User-centric design solutions"
      ]
    },
    {
      title: "Leading UI UX Design Company in Bangalore",
      icon: Icons.Award,
      color: "#F5B800",
      desc: "Digiworq is a UI UX design company in Bangalore that you can trust. We want to make products that are easy to use can be used by everyone and make people happy.",
      bulletsHeader: "Here are some things we focus on:",
      bullets: [
        "User-focused design approach",
        "modern interfaces",
        "Business-oriented design solutions",
        "Interactive user experiences",
        "Scalable design systems"
      ]
    },
    {
      title: "UI UX Design Firm for Modern Businesses",
      icon: Icons.Briefcase,
      color: "#3B82F6",
      desc: "Our UI UX design firm helps companies, big companies and companies that are growing make digital products that look good and are easy to use.",
      bulletsHeader: "Here are some things we do:",
      bullets: [
        "Enterprise UI UX solutions",
        "SaaS product design",
        "Dashboard and web app design",
        "First user interfaces",
        "Conversion-focused design strategy"
      ]
    },
    {
      title: "UI UX Studio for Creative Digital Experiences",
      icon: Icons.Sparkles,
      color: "#10B981",
      desc: "Digiworq is a UI UX studio that combines research, planning and new design ideas to make digital products that people enjoy using.",
      bulletsHeader: "Here are some things we do:",
      bullets: [
        "Creative UI concepts",
        "Interactive user journeys",
        "design systems",
        "Engaging visual communication",
        "High-quality digital experiences"
      ]
    },
    {
      title: "Why Choose Digiworq for UI UX Designing?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: "We make UI UX designs that balance looking good being easy to use and helping businesses do better. This helps make people engage more with products and come back to them.",
      bulletsHeader: "Here are some things we offer:",
      bullets: [
        "Experienced UI UX designers",
        "User-centered design process",
        "Research-driven solutions",
        "adaptive design",
        "SEO-friendly UI structures"
      ]
    },
    {
      title: "Benefits of Professional UI UX Design Services",
      icon: Icons.TrendingUp,
      color: "#F59E0B",
      desc: "When you get UI UX design services it helps your business make people engage more with your digital products turn more visitors into customers and make people happy.",
      bulletsHeader: "Here are some benefits:",
      bullets: [
        "Better user experience",
        "Increased customer engagement",
        "Improved website usability",
        "Higher conversion rates",
        "Digital brand identity"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "We make UI UX designs for many different types of businesses and industries.",
      bulletsHeader: "Here are some examples:",
      bullets: [
        "eCommerce businesses",
        "Healthcare platforms",
        "Education and eLearning",
        "Real estate companies",
        "businesses",
        "Technology startups"
      ]
    }
  ];

  const uiuxProcessSteps = [
    {
      step: "01",
      title: "User Research & Planning",
      desc: "We start by understanding what people who use your product do what your business goals are and what you need from the project."
    },
    {
      step: "02",
      title: "Wireframing & Design",
      desc: "Then we make wireframes, prototypes and user interfaces that look good and are easy to use."
    },
    {
      step: "03",
      title: "Testing & Optimization",
      desc: "Finally we test everything to make sure it works well and make changes based on what people tell us."
    }
  ];

  const faqs = [
    {
      q: "What is UI UX design?",
      a: "UI UX design is about making digital products that look good and are easy to use."
    },
    {
      q: "Why is UI UX design important for businesses?",
      a: "Good UI UX design helps people use your product easily makes them engage more with it and turns visitors into customers."
    },
    {
      q: "Do you provide app UI UX design services?",
      a: "Yes we make UI UX designs for websites, mobile apps and web applications."
    },
    {
      q: "Can UI UX design improve website performance?",
      a: "Yes when you design things with the user in mind it helps people navigate your website engage with it and have an experience overall."
    },
    {
      q: "Why choose Digiworq as a UI UX design company, in Bangalore?",
      a: "Digiworq combines being creative, planning and thinking about the user to make products that have a big impact."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-uiux">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-uiux" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">UI UX Design Company in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(160, 104, 255, 0.12)', border: '1px solid rgba(160, 104, 255, 0.3)', borderRadius: '30px', color: '#A068FF', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Layout size={16} /> User-Centric Product & Mobile App UI/UX
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                UI UX Design Company in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a UI UX design company in Bangalore that makes products that people love to use. Our UI UX design services are about creating things that look good, are easy to use, and help businesses do better.
                </p>
                <p style={{ fontWeight: '600', color: '#A068FF' }}>
                  We want to make sure that the digital products we design are nice to look at, easy to understand, and help people do what they want to do.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book UI UX Design Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="ui-ux-design" title="UI-UX Design" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>UI UX Deliverables & Prototype Assets:</h3>
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

      {/* Our UI UX Design Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our UI UX Design Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a research-backed user-centered design methodology to build intuitive digital products.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {uiuxProcessSteps.map((stepItem, sIdx) => (
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Create Digital Products People Love to Use?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq UI/UX architects to design wireframes, prototypes, and user interfaces.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book UI UX Consultation</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
