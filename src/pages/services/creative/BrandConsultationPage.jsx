import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function BrandConsultationPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional Brand Services in Bangalore Strategy",
    "Leading Branding Companies in Bangalore Framework",
    "Creative Agencies in Bangalore for Modern Businesses Suite",
    "Build a Strong Brand Identity & Logo Guidelines",
    "Comprehensive Brand Architecture & Market Positioning Docs"
  ];

  const mainH2Sections = [
    {
      title: "Professional Brand Services in Bangalore",
      icon: Icons.Award,
      color: "#F5B800",
      desc: "Our brand services are designed to help businesses create an memorable identity. This identity is across offline platforms.",
      bulletsHeader: "Some of the services we offer include:",
      bullets: [
        "Brand identity development",
        "Logo and visual branding",
        "Brand positioning strategy",
        "Creative brand communication",
        "Marketing and promotional design",
        "Digital branding solutions"
      ]
    },
    {
      title: "Leading Branding Companies in Bangalore",
      icon: Icons.Star,
      color: "#A068FF",
      desc: "As one of the growing branding companies in Bangalore Digiworq focuses on combining creativity, strategy and digital innovation. This helps businesses stand out in markets.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Customized branding strategies",
        "Creative visual storytelling",
        "Industry-focused branding solutions",
        "Modern and scalable brand systems",
        "End-to-end branding support"
      ]
    },
    {
      title: "Creative Agencies in Bangalore for Modern Businesses",
      icon: Icons.Sparkles,
      color: "#3B82F6",
      desc: "Digiworq works as a full-service creative agency. We deliver branding, design, marketing and digital experiences that improve customer engagement and business growth.",
      bulletsHeader: "Some of the services we offer include:",
      bullets: [
        "Creative campaign development",
        "Digital marketing integration",
        "Website and branding solutions",
        "Social media brand communication",
        "Creative content and design support"
      ]
    },
    {
      title: "Build a Strong Brand Identity",
      icon: Icons.ShieldCheck,
      color: "#10B981",
      desc: "A strong brand identity helps businesses create trust, recognition and consistency. This is across all customer touchpoints. We help businesses establish engaging and strategically aligned brand identities that reflect their business goals.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Professional logo design",
        "Brand color and typography systems",
        "Brand voice and messaging",
        "Visual identity guidelines",
        "Consistent brand communication"
      ]
    },
    {
      title: "Why Choose Digiworq as Your Bangalore Branding Agency?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: "Digiworq combines branding expertise, creative design and digital marketing strategies. This helps businesses create long-term brand value and online visibility.",
      bulletsHeader: "Some of the reasons to choose us include:",
      bullets: [
        "Experienced creative professionals",
        "Customized branding solutions",
        "Strategic marketing approach",
        "Creative and digital expertise",
        "Business-focused branding services"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "We provide branding and creative services for businesses across multiple industries.",
      bulletsHeader: "Some of the industries we serve include:",
      bullets: [
        "Healthcare",
        "Education",
        "estate",
        "Retail and eCommerce",
        "Technology startups",
        "Corporate businesses"
      ]
    },
    {
      title: "Benefits of Professional Branding Services",
      icon: Icons.TrendingUp,
      color: "#F59E0B",
      desc: "Professional branding improves business credibility, customer engagement and overall market presence.",
      bulletsHeader: "Some of the benefits include:",
      bullets: [
        "Better brand recognition",
        "customer trust",
        "Strong digital presence",
        "Consistent communication",
        "Long-term business growth"
      ]
    }
  ];

  const brandConsultationProcess = [
    {
      step: "01",
      title: "Brand Research & Strategy",
      desc: "We start by understanding your business goals, target audience and market positioning."
    },
    {
      step: "02",
      title: "Creative Identity Development",
      desc: "Then we create logos, visual assets and brand communication systems."
    },
    {
      step: "03",
      title: "Brand Implementation",
      desc: "Finally we apply branding across websites, marketing and digital platforms."
    }
  ];

  const faqs = [
    {
      q: "What services does a branding agency provide?",
      a: "A branding agency provides logo design, brand identity, brand strategy, visual communication and digital branding services. Digiworq is a branding agency that provides all these services."
    },
    {
      q: "Why is brand identity important for businesses?",
      a: "Brand identity helps businesses create recognition, trust and consistent customer experiences. Digiworq helps businesses create a brand identity."
    },
    {
      q: "Do you provide branding services for startups?",
      a: "Yes we provide branding solutions for startups and growing businesses. Digiworq is a choice for startups."
    },
    {
      q: "Can branding improve marketing performance?",
      a: "Yes strong branding improves engagement, visibility and marketing effectiveness. Digiworq helps businesses improve their marketing performance."
    },
    {
      q: "Why choose Digiworq as a branding agency in Bangalore?",
      a: "Digiworq delivers branding, digital marketing and business-focused solutions designed for long-term growth. We are a choice for businesses, in Bangalore."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-brandconsult">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-brandconsult" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Branding Agency in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Award size={16} /> Strategic Brand Advisory & Positioning Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Branding Agency in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a branding agency in Bangalore that helps businesses build powerful brand identities. We improve market visibility. Create meaningful customer connections.
                </p>
                <p style={{ fontWeight: '600', color: '#F5B800' }}>
                  As a trusted Bangalore branding agency we provide branding, creative communication and digital solutions tailored for modern businesses.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Brand Strategy Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="brand-consultation" title="Brand Consultation" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Branding Deliverables & Advisory Assets:</h3>
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
              We follow a strategic 3-step brand consultation framework to build, refine, and launch your brand identity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {brandConsultationProcess.map((stepItem, sIdx) => (
              <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(245, 184, 0, 0.18)', border: '1px solid #F5B800', color: '#F5B800', fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  {stepItem.step}
                </div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px' }}>
                  {stepItem.title}
                </h2>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Partner with Bangalore's Leading Branding Agency?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq brand strategists to craft your brand positioning and visual identity.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Brand Advisory Session</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
