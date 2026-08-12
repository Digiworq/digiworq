import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function GraphicDesigningPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional Graphic Design Services for Print & Web",
    "Leading Graphic Design Agency in Bangalore Assets",
    "Digital Marketing Design Solutions & Social Post Creatives",
    "Best Graphic Design Services for Businesses",
    "High-Res Master Vector Source Files (AI, EPS, SVG, PNG, PDF)"
  ];

  const mainH2Sections = [
    {
      title: "Professional Graphic Design Services",
      icon: Icons.PenTool,
      color: "#A068FF",
      desc: "Our Graphic Design Services are tailored to help businesses create visual identities through creative and strategic design solutions.",
      bulletsHeader: "We do a lot of things at Digiworq Graphic Design Company in Bangalore including:",
      bullets: [
        "branding designs",
        "Marketing collateral design",
        "Social media creatives",
        "Corporate graphic design",
        "Print and digital design solutions",
        "Custom visual communication"
      ]
    },
    {
      title: "Leading Graphic Design Agency in Bangalore",
      icon: Icons.Award,
      color: "#F5B800",
      desc: "As a Graphic Design Agency in Bangalore Digiworq combines creativity, branding and marketing strategies to deliver high-quality visual content for digital and print platforms.",
      bulletsHeader: "Our team at Graphic Design Agency in Bangalore includes:",
      bullets: [
        "experienced designers",
        "Customized design solutions",
        "Modern visual branding",
        "User-focused creative concepts",
        "High-quality digital assets"
      ]
    },
    {
      title: "Digital Marketing Design Solutions",
      icon: Icons.Share2,
      color: "#3B82F6",
      desc: "Our Digital Marketing Design Services help businesses improve online engagement through attractive and conversion-focused creative content.",
      bulletsHeader: "We create:",
      bullets: [
        "Social media post designs",
        "Ad banner creatives",
        "Website graphics",
        "Email marketing creatives",
        "Promotional campaign designs",
        "Brand-focused content for Digital Marketing Design Solutions"
      ]
    },
    {
      title: "Best Graphic Design Services for Businesses",
      icon: Icons.Sparkles,
      color: "#10B981",
      desc: "We provide Graphic Design Services that help businesses strengthen brand communication and improve customer engagement.",
      bulletsHeader: "Our Graphic Design Services include:",
      bullets: [
        "Brand consistency",
        "visual identity",
        "Creative advertising materials",
        "Improved customer attention",
        "Engaging marketing creatives for Best Graphic Design Services"
      ]
    },
    {
      title: "Why Choose Digiworq for Graphic Designing?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: "Digiworq focuses on delivering Graphic Design Services that align with branding and digital marketing goals for long-term business growth.",
      bulletsHeader: "We have:",
      bullets: [
        "design expertise",
        "Industry-focused design solutions",
        "Turnaround time",
        "Modern design trends",
        "End-to-end creative support for Graphic Design Services"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "We provide Graphic Design Services for businesses across multiple industries, including:",
      bulletsHeader: "Industries served:",
      bullets: [
        "Real estate",
        "Healthcare",
        "Education",
        "Retail and eCommerce",
        "Technology companies",
        "Startups and enterprises"
      ]
    },
    {
      title: "Benefits of Professional Graphic Design",
      icon: Icons.TrendingUp,
      color: "#F59E0B",
      desc: "Professional Graphic Design helps businesses improve brand identity, customer trust and marketing performance.",
      bulletsHeader: "The benefits of Professional Graphic Design include:",
      bullets: [
        "brand recognition",
        "Improved audience engagement",
        "Strong visual communication",
        "Increased marketing effectiveness",
        "Professional brand image"
      ]
    }
  ];

  const graphicProcessSteps = [
    {
      step: "01",
      title: "Design Consultation",
      desc: "We understand brand goals, audience and creative requirements at Digiworq Graphic Design Company in Bangalore."
    },
    {
      step: "02",
      title: "Creative Design Development",
      desc: "We create engaging and brand-focused graphic concepts for Graphic Design Services."
    },
    {
      step: "03",
      title: "Final Delivery & Optimization",
      desc: "We deliver optimized design assets for print use for our clients."
    }
  ];

  const faqs = [
    {
      q: "What Graphic Design Services do you offer?",
      a: "We offer branding design, social media creatives, marketing materials, website graphics and digital marketing designs at Digiworq Graphic Design Company in Bangalore."
    },
    {
      q: "Why is Graphic Design important for businesses?",
      a: "Graphic Design improves communication, brand recognition and customer engagement for businesses."
    },
    {
      q: "Do you create designs for marketing campaigns?",
      a: "Yes we create assets for social media, advertising, websites and marketing campaigns at Digiworq Graphic Design Company in Bangalore."
    },
    {
      q: "Can you provide customized Graphic Design solutions?",
      a: "Yes all our Graphic Design Services are customized based on business goals and branding needs."
    },
    {
      q: "Why choose Digiworq as a Graphic Design Company, in Bangalore?",
      a: "Digiworq combines creativity, branding and marketing expertise to deliver Graphic Design solutions."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-graphic">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-graphic" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Graphic Design Company in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(160, 104, 255, 0.12)', border: '1px solid rgba(160, 104, 255, 0.3)', borderRadius: '30px', color: '#A068FF', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Brush size={16} /> Professional Graphic & Visual Design Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Graphic Design Company in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a Graphic Design Company in Bangalore that makes visually impactful and brand-focused design solutions for businesses across industries.
                </p>
                <p style={{ fontWeight: '600', color: '#A068FF' }}>
                  As a trusted Graphic Design Company in Bangalore we create digital marketing designs that help Graphic Design Company in Bangalore clients improve visibility, engagement and communication.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Request Graphic Design Quote</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="graphic-designing" title="Graphic Designing" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Graphic Design Deliverables & Master Assets:</h3>
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

      {/* Our Graphic Design Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our Graphic Design Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a streamlined creative workflow to produce high-performing graphic assets.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {graphicProcessSteps.map((stepItem, sIdx) => (
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
                    <h3 style={{ fontSize: '1.08rem', fontWeight: '700', margin: 0 }}>{faq.q}</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Need Eye-Catching Graphic Designs for Your Brand?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Work with Digiworq senior graphic designers to build conversion-driven digital marketing assets.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Graphic Design Consultation</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
