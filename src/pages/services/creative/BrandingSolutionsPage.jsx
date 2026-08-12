import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function BrandingSolutionsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional Branding Solutions for Businesses",
    "Trusted Brand Design Agency & Visual Identity",
    "Branding Companies Near Me Strategy",
    "Best Digital Marketing Agency Integration",
    "Best Digital Marketing & Web Agency Assets",
    "100% Vector Master Source Files & Brand Guidelines"
  ];

  const mainH2Sections = [
    {
      title: "Professional Branding Solutions for Businesses",
      icon: Icons.Award,
      color: "#F5B800",
      desc: "Digiworq provides branding solutions. These are for startups, enterprises and growing businesses. They want to establish a brand presence in competitive markets."
    },
    {
      title: "Trusted Brand Design Agency in Bangalore",
      icon: Icons.Palette,
      color: "#A068FF",
      desc: "Digiworq is a leading brand design agency. They focus on creating engaging branding experiences. These experiences help businesses stand out.",
      bulletsHeader: "Some key services they provide are:",
      bullets: [
        "brand strategy",
        "Creative visual identity",
        "branding services"
      ]
    },
    {
      title: "Branding Companies Near Me – Why Businesses Choose Digiworq",
      icon: Icons.Star,
      color: "#10B981",
      desc: "Businesses choose Digiworq for creative expertise. They also choose them for design solutions. Digiworq offers performance-driven branding services.",
      bulletsHeader: "Some reasons businesses choose Digiworq are:",
      bullets: [
        "Experienced team",
        "Industry-focused branding",
        "End-to-end branding support",
        "digital expertise",
        "Result-oriented strategies"
      ]
    },
    {
      title: "Best Digital Marketing Agency in Bangalore",
      icon: Icons.TrendingUp,
      color: "#3B82F6",
      desc: "Digiworq combines branding, digital marketing and web solutions. This helps businesses improve visibility, engagement and online growth. Their approach helps brands maintain consistency across all platforms.",
      bulletsHeader: "Some of the marketing services they offer are:",
      bullets: [
        "SEO-friendly branding",
        "Social media branding",
        "Website and brand integration",
        "campaign development",
        "Digital growth strategies"
      ]
    },
    {
      title: "Best Digital Marketing & Web Agency in Bangalore",
      icon: Icons.Globe,
      color: "#EC4899",
      desc: "Digiworq is a full-service creative and digital agency. They deliver branding, website development, content creation and marketing solutions. These are tailored for businesses.",
      bulletsHeader: "Some of the web services they provide are:",
      bullets: [
        "Website design and branding",
        "UI/UX-focused design",
        "Digital marketing support",
        "web solutions",
        "Responsive and modern designs"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "Digiworq provides branding services for businesses across multiple industries. These include market segments.",
      bulletsHeader: "Some of the industries they serve are:",
      bullets: [
        "estate",
        "Healthcare",
        "Retail and eCommerce",
        "Education",
        "Corporate businesses",
        "Startups and technology"
      ]
    },
    {
      title: "Benefits of Professional Branding Services",
      icon: Icons.CheckCircle2,
      color: "#F59E0B",
      desc: "branding helps businesses. It improves recognition, customer trust and long-term business growth.",
      bulletsHeader: "Some benefits of branding services are:",
      bullets: [
        "Better brand visibility",
        "customer engagement",
        "Strong online presence",
        "Professional business identity",
        "Brand communication"
      ]
    }
  ];

  const brandingProcessSteps = [
    {
      step: "01",
      title: "Brand Research & Strategy",
      desc: "Digiworq understands business goals, competitors and audience behavior."
    },
    {
      step: "02",
      title: "Creative Design Development",
      desc: "They create logos, visual identity and brand communication assets."
    },
    {
      step: "03",
      title: "Brand Implementation",
      desc: "They deliver branding across digital and print platforms."
    }
  ];

  const faqs = [
    {
      q: "Why is branding important for businesses?",
      a: "Branding helps businesses build recognition, trust and customer loyalty. Digiworq helps businesses with branding."
    },
    {
      q: "Do you provide logo and visual identity design?",
      a: "Yes Digiworq provides logo design and visual branding solutions."
    },
    {
      q: "Can branding improve marketing performance?",
      a: "Yes consistent branding improves visibility and customer engagement. Digiworq helps with this."
    },
    {
      q: "Do you offer branding for startups?",
      a: "Yes Digiworq provides branding services for startups and growing businesses."
    },
    {
      q: "Why choose Digiworq as a branding company, in Bangalore?",
      a: "Digiworq offers branding, digital marketing and web solutions. These are designed for business growth. Digiworq helps businesses achieve growth."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-branding">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-branding" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Branding Company in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Sparkles size={16} /> Professional Brand Strategy & Identity Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Branding Company in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a branding company in Bangalore. They help businesses build brand identity.
                </p>
                <p style={{ fontWeight: '600', color: '#F5B800' }}>
                  This helps businesses improve market presence. It also helps create customer experiences.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Branding Consultation</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="branding-solutions" title="Branding Solutions" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Branding Deliverables & Identity Assets:</h3>
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

      {/* Our Branding Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our Branding Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a proven strategy framework to craft, develop, and launch your brand identity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {brandingProcessSteps.map((stepItem, sIdx) => (
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
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(245, 184, 0, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Build an Iconic Brand Identity?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq brand strategists to craft your vision.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Brand Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
