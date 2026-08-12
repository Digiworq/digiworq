import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function EcommerceDevPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional E-commerce Website Development Services",
    "E-commerce Website Design Bangalore Conversion Layouts",
    "Trusted E-commerce Website Developers in Bangalore Architecture",
    "Best E-commerce Website in India for Business Growth Platforms",
    "Shopify, WooCommerce, Custom Headless Commerce & Payment Integrations"
  ];

  const mainH2Sections = [
    {
      title: "Professional E-commerce Website Development Services",
      icon: Icons.ShoppingBag,
      color: "#3B82F6",
      desc: "We provide e-commerce website development solutions. Our solutions are for startups, retailers and enterprises looking to grow their business presence.",
      bulletsHeader: "Points to Add:",
      bullets: [
        "Custom e-commerce website development",
        "Shopify and WooCommerce development",
        "online store design",
        "Secure payment gateway integration",
        "Product management systems",
        "Shopping cart and checkout optimization"
      ]
    },
    {
      title: "E-commerce Website Design Bangalore",
      icon: Icons.Layout,
      color: "#10B981",
      desc: "Our e-commerce website design services in Bangalore combine creativity, user experience and modern technologies. We create engaging shopping experiences.",
      bulletsHeader: "Points to Add:",
      bullets: [
        "Mobile-friendly e-commerce design",
        "Conversion-focused layouts",
        "SEO- website structure",
        "Fast-loading product pages",
        "User-friendly navigation",
        "Professional UI/UX design"
      ]
    },
    {
      title: "Trusted E-commerce Website Developers in Bangalore",
      icon: Icons.Award,
      color: "#F5B800",
      desc: "As e-commerce website developers in Bangalore Digiworq builds scalable and performance-driven online stores. Our online stores are tailored to business goals and customer requirements.",
      bulletsHeader: "Points to Add:",
      bullets: [
        "Custom online store development",
        "Multi-vendor marketplace solutions",
        "Inventory and order management",
        "API and third-party integrations",
        "Secure e-commerce platforms",
        "business solutions"
      ]
    },
    {
      title: "Best E-commerce Website in India for Business Growth",
      icon: Icons.TrendingUp,
      color: "#A068FF",
      desc: "We help businesses create high-performing e-commerce websites. Our websites improve customer engagement streamline sales and support long-term digital growth.",
      bulletsHeader: "Points to Add:",
      bullets: [
        "conversion online stores",
        "Business-focused web solutions",
        "Advanced e-commerce features",
        "SEO and marketing integration",
        "Customer- shopping experience"
      ]
    },
    {
      title: "E-commerce Web Design Solutions",
      icon: Icons.Sparkles,
      color: "#EC4899",
      desc: "Our e-commerce web design services focus on creating visually attractive and easy-to-use websites. These websites improve shopping experiences and customer retention.",
      bulletsHeader: "Points to Add:",
      bullets: [
        "Custom product page design",
        "Interactive user interfaces",
        "Secure checkout experiences",
        "Mobile commerce optimization",
        "Branding-focused web design"
      ]
    },
    {
      title: "Why Choose Digiworq for E-commerce Website Development?",
      icon: Icons.CheckCircle2,
      color: "#8B5CF6",
      desc: "Digiworq combines design, advanced technologies and digital marketing expertise. We deliver e-commerce solutions for businesses across industries.",
      bulletsHeader: "Points to Add:",
      bullets: [
        "Experienced e-commerce developers",
        "Customized online store solutions",
        "SEO-friendly development approach",
        "secure platforms",
        "End-to-end technical support"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#F59E0B",
      desc: "We provide e-commerce website development services for industries and business sectors.",
      bulletsHeader: "Points to Add:",
      bullets: [
        "Fashion and apparel",
        "Electronics and gadgets",
        "Healthcare products",
        "Grocery and retail businesses",
        "Beauty and lifestyle brands",
        "Corporate and B2B businesses"
      ]
    },
    {
      title: "Benefits of Professional E-commerce Website Development",
      icon: Icons.Zap,
      color: "#10B981",
      desc: "Professional e-commerce development helps businesses improve customer experience, online visibility and digital sales performance.",
      bulletsHeader: "Points to Add:",
      bullets: [
        "Better online customer engagement",
        "Increased sales",
        "Improved brand credibility",
        "Secure payment experiences",
        "Digital presence"
      ]
    }
  ];

  const ecommerceProcessSteps = [
    {
      step: "01",
      title: "Planning & Strategy",
      desc: "We understand business goals, products and customer requirements."
    },
    {
      step: "02",
      title: "Design & Development",
      desc: "We create secure and SEO-friendly e-commerce websites."
    },
    {
      step: "03",
      title: "Testing & Launch",
      desc: "We test performance, payment systems and launch optimized stores."
    }
  ];

  const faqs = [
    {
      q: "What e-commerce website development services do you offer?",
      a: "We provide Shopify, WooCommerce custom e-commerce development and online store design solutions."
    },
    {
      q: "Do you create friendly e-commerce websites?",
      a: "Yes all our e-commerce websites are optimized for tablet and desktop devices."
    },
    {
      q: "Can you integrate payment gateways into e-commerce websites?",
      a: "Yes we provide payment gateway integration, for online stores."
    },
    {
      q: "Why is e-commerce website design important?",
      a: "Professional e-commerce design improves user experience, customer trust and online sales."
    },
    {
      q: "Why choose Digiworq as an e-commerce website development company Bangalore?",
      a: "Digiworq delivers scalable and SEO-focused e-commerce solutions. Our solutions are tailored for business growth."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-ecommercedev">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-ecommercedev" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Technology Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">E-commerce Website Development Company Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.ShoppingBag size={16} /> High-Conversion Online Store & E-Commerce Engineering Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                E-commerce Website Development Company Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is an e-commerce website development company in Bangalore. We help businesses create scalable and user-friendly online stores.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Our e-commerce website design services in Bangalore focus on delivering engaging, mobile-responsive and SEO-friendly websites. These websites improve customer experience and online sales.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book E-Commerce Store Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="e-commerce-website-development" title="E-Commerce Website Development" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>E-Commerce Store Deliverables & Features:</h3>
            <div className="deliverables-pills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '8px 16px', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={16} color="#3B82F6" />
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

      {/* Our E-commerce Development Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our E-commerce Development Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a structured 3-phase online store engineering workflow to plan, build, test, and launch your e-commerce platform.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {ecommerceProcessSteps.map((stepItem, sIdx) => (
              <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.18)', border: '1px solid #3B82F6', color: '#3B82F6', fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
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
                    {isOpen ? <Icons.ChevronUp size={20} color="#3B82F6" /> : <Icons.ChevronDown size={20} color="#3B82F6" />}
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
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Scale Your E-Commerce Sales in India & Globally?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq e-commerce developers to design your Shopify, WooCommerce, or Custom Headless Online Store.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book E-Commerce Store Architecture Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
