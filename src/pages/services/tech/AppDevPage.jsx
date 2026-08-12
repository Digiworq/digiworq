import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function AppDevPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Mobile App Development Company Bangalore Native & Hybrid Apps",
    "Custom App Development Company for Businesses Architecture",
    "Professional App Developers in Bangalore Code & Maintenance",
    "Custom App Development Services & Enterprise Cloud APIs",
    "App Store & Google Play Store Ready Builds with Full Source Code"
  ];

  const mainH2Sections = [
    {
      title: "Mobile App Development Company Bangalore",
      icon: Icons.Smartphone,
      color: "#3B82F6",
      desc: "We provide mobile app development solutions. These solutions are tailored to meet business requirements across industries and digital platforms.",
      bulletsHeader: "Some of the services we provide include:",
      bullets: [
        "Android app development",
        "iOS mobile app development",
        "Cross-platform app solutions",
        "Enterprise mobile applications",
        "Business automation apps",
        "Scalable mobile solutions"
      ]
    },
    {
      title: "Custom App Development Company for Businesses",
      icon: Icons.Layers,
      color: "#10B981",
      desc: "Digiworq creates innovative applications. These applications are designed to improve user experience, business performance and digital accessibility.",
      bulletsHeader: "Some of the services we provide include:",
      bullets: [
        "Custom business applications",
        "Startup app development",
        "CRM and ERP app solutions",
        "SaaS application development",
        "API and third-party integrations"
      ]
    },
    {
      title: "Professional App Developers in Bangalore",
      icon: Icons.Users,
      color: "#F5B800",
      desc: "Our experienced app developers in Bangalore combine creativity, technology and UI UX expertise. They create mobile applications with seamless functionality and responsive design.",
      bulletsHeader: "Some of the services we provide include:",
      bullets: [
        "Expert development team",
        "User-focused app interfaces",
        "Secure application architecture",
        "Modern development frameworks",
        "High-performance mobile apps"
      ]
    },
    {
      title: "Custom App Development Services",
      icon: Icons.Settings,
      color: "#A068FF",
      desc: "We provide end-to-end custom app development services. These services include planning, design, development, testing, deployment and ongoing support for applications.",
      bulletsHeader: "Some of the services we provide include:",
      bullets: [
        "UI UX app design",
        "App testing and optimization",
        "App maintenance support",
        "Cloud-based solutions",
        "Scalable business applications"
      ]
    },
    {
      title: "Mobile App Development Bangalore for Digital Growth",
      icon: Icons.TrendingUp,
      color: "#EC4899",
      desc: "Our mobile app development Bangalore services help businesses. These services improve customer engagement, digital presence and operational efficiency through mobile technologies.",
      bulletsHeader: "Some of the services we provide include:",
      bullets: [
        "Business growth solutions",
        "Customer engagement applications",
        "eCommerce apps",
        "Real-time mobile solutions",
        "Mobile-first digital strategies"
      ]
    },
    {
      title: "Why Choose Digiworq for App Development",
      icon: Icons.CheckCircle2,
      color: "#8B5CF6",
      desc: "Digiworq combines technical expertise, creative UI UX design and business-focused development strategies. We deliver quality mobile applications tailored for modern businesses.",
      bulletsHeader: "Some of the reasons to choose Digiworq include:",
      bullets: [
        "Expert mobile app developers",
        "Customized app solutions",
        "Creative UI UX approach",
        "End-to-end development support",
        "Affordable and scalable services"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#F59E0B",
      desc: "We provide app development services for businesses across industries and market sectors.",
      bulletsHeader: "Some of the industries we serve include:",
      bullets: [
        "Healthcare",
        "Education and eLearning",
        "Real estate",
        "Retail and eCommerce",
        "Logistics and delivery services",
        "Corporate enterprises and startups"
      ]
    },
    {
      title: "Benefits of Professional Mobile App Development",
      icon: Icons.Zap,
      color: "#10B981",
      desc: "Professional mobile app development helps businesses. It improves customer experience, accessibility and overall digital performance.",
      bulletsHeader: "Some of the benefits include:",
      bullets: [
        "Enhanced customer engagement",
        "Improved business accessibility",
        "Strong digital presence",
        "Seamless communication",
        "Increased operational efficiency"
      ]
    }
  ];

  const appDevProcessSteps = [
    {
      step: "01",
      title: "Research & Planning",
      desc: "We understand business goals, audience requirements and application functionality."
    },
    {
      step: "02",
      title: "UI UX Design & Development",
      desc: "We create user-centric interfaces and scalable mobile app solutions."
    },
    {
      step: "03",
      title: "Testing & Deployment",
      desc: "We test app performance and launch optimized applications across platforms."
    }
  ];

  const faqs = [
    {
      q: "What app development services do you provide",
      a: "We provide Android, iOS, cross-platform and custom mobile app development services."
    },
    {
      q: "Do you create custom business applications",
      a: "Yes we develop mobile applications tailored to business goals and operational requirements."
    },
    {
      q: "Why is mobile app development important for businesses",
      a: "Mobile applications improve customer engagement, accessibility and digital business growth."
    },
    {
      q: "Do you provide UI UX design for apps",
      a: "Yes we provide UI UX design and mobile app interface solutions."
    },
    {
      q: "Why choose Digiworq as an app development company in Bangalore",
      a: "Digiworq delivers creative and user-focused mobile app development solutions, for modern businesses."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-appdev">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-appdev" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Technology Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">App Development Company in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Smartphone size={16} /> Enterprise iOS & Android Mobile Engineering Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                App Development Company in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is an app development company in Bangalore. We deliver user-friendly mobile applications for startups, enterprises and growing brands.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Our mobile app development services focus on creating high-performance Android, iOS and custom business applications. These applications improve customer engagement and operational efficiency.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Mobile App Architecture Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="app-development" title="App Development" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>App Engineering Deliverables & Stack Assets:</h3>
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

      {/* Our App Development Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our App Development Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a 3-step agile app engineering lifecycle from research and design to testing and store deployment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {appDevProcessSteps.map((stepItem, sIdx) => (
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Build Your Custom Android & iOS Mobile Application?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq mobile application developers to transform your app vision into reality.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Mobile App Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
