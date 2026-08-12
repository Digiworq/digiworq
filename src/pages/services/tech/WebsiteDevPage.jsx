import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function WebsiteDevPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional Website Development Services in Bangalore",
    "Leading Web Agency in Bangalore High-Performance Apps",
    "Website Development in Bangalore for Business Growth Platforms",
    "SEO-Friendly Website Development Services & Clean Codebase",
    "Lighthouse 99+ Speed & Mobile-Responsive Layout Systems"
  ];

  const mainH2Sections = [
    {
      title: "Professional Website Development Services in Bangalore",
      icon: Icons.Code,
      color: "#3B82F6",
      desc: "We create custom website solutions that're a mix of creativity, functionality and performance. Our goal is to build high-quality business websites.",
      bulletsHeader: "Some of the services we offer include:",
      bullets: [
        "Custom website development",
        "web design",
        "Corporate website solutions",
        "Dynamic website development",
        "SEO-friendly website structure",
        "Business website redesign"
      ]
    },
    {
      title: "Leading Web Agency in Bangalore",
      icon: Icons.Globe,
      color: "#10B981",
      desc: "As a trusted web agency in Bangalore Digiworq focuses on creating engaging and scalable web solutions. Our solutions are tailored for businesses and digital platforms.",
      bulletsHeader: "Some key features of our services include:",
      bullets: [
        "Modern UI UX design",
        "Mobile-responsive websites",
        "web solutions",
        "Fast-loading website development",
        "Secure and scalable platforms"
      ]
    },
    {
      title: "Website Development in Bangalore for Business Growth",
      icon: Icons.TrendingUp,
      color: "#F5B800",
      desc: "Our website development services help businesses create a strong online presence. We improve customer interaction through web experiences.",
      bulletsHeader: "Some of the areas we focus on include:",
      bullets: [
        "Business website development",
        "Startup website solutions",
        "eCommerce website development",
        "Landing page development",
        "Website maintenance support"
      ]
    },
    {
      title: "SEO-Friendly Website Development Services",
      icon: Icons.Search,
      color: "#A068FF",
      desc: "We create websites that are optimized for search engines. Our websites improve search engine visibility, user experience and online performance for long-term business growth.",
      bulletsHeader: "Some key aspects of our SEO- websites include:",
      bullets: [
        "Search engine optimized coding",
        "Fast website performance",
        "First development",
        "User-friendly navigation",
        "Optimized website structure"
      ]
    },
    {
      title: "Why Choose Digiworq as Your Website Development Company?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: "Digiworq combines design, advanced technologies and digital marketing expertise. We deliver website development solutions for businesses across industries.",
      bulletsHeader: "Some reasons to choose us include:",
      bullets: [
        "web developers",
        "Customized website solutions",
        "Creative UI UX design",
        "End-to-end web support",
        "Affordable and scalable services"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "We provide website development services for businesses across industries and sectors.",
      bulletsHeader: "Some of the industries we serve include:",
      bullets: [
        "Healthcare",
        "Education",
        "Real estate",
        "Retail and eCommerce",
        "Corporate businesses",
        "Technology startups"
      ]
    },
    {
      title: "Benefits of Professional Website Development",
      icon: Icons.Zap,
      color: "#F59E0B",
      desc: "Professional website development helps businesses improve credibility, online visibility and customer engagement.",
      bulletsHeader: "Some benefits include:",
      bullets: [
        "Better online presence",
        "customer experience",
        "Increased business credibility",
        "Higher lead generation",
        "Strong digital branding"
      ]
    }
  ];

  const webDevProcessSteps = [
    {
      step: "01",
      title: "Research & Planning",
      desc: "We start by understanding business goals, audience requirements and website objectives."
    },
    {
      step: "02",
      title: "Design & Development",
      desc: "We create visually engaging and SEO-friendly websites."
    },
    {
      step: "03",
      title: "Testing & Launch",
      desc: "We test website performance, security and launch optimized web solutions."
    }
  ];

  const faqs = [
    {
      q: "What website development services do you offer?",
      a: "We provide business website development, eCommerce development, design and custom web solutions."
    },
    {
      q: "Why is website development important for businesses?",
      a: "A professional website improves visibility, customer engagement and business credibility."
    },
    {
      q: "Do you create responsive websites?",
      a: "Yes all our websites are optimized for tablet and desktop devices."
    },
    {
      q: "Can website development improve SEO performance?",
      a: "Yes SEO-friendly website development improves search engine rankings and user experience."
    },
    {
      q: "Why choose Digiworq as a website development company, in Bangalore?",
      a: "Digiworq delivers scalable and SEO-focused website development solutions tailored for business growth."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-webdev">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-webdev" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Technology Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Website Development Company in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Code size={16} /> Next.js 15 & High-Performance Web Engineering Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Website Development Company in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a website development company in Bangalore. We deliver websites that're easy to use look good on any device and help businesses grow online.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Our website development services in Bangalore help brands get more noticed online engage with customers better and increase their growth. We use the web technologies and creative designs to achieve this.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Web Development Consultation</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="website-development" title="Website Development" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Web Development Deliverables & Codebase Assets:</h3>
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

      {/* Our Website Development Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our Website Development Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a structured 3-phase engineering methodology to design, code, test, and deploy fast web platforms.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {webDevProcessSteps.map((stepItem, sIdx) => (
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Build a High-Converting, Fast Website?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq web architects to plan your custom React/Next.js corporate or eCommerce website.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Web Architecture Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
