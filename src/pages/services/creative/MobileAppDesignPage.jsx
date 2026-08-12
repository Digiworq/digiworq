import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function MobileAppDesignPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional Mobile App Design Services (iOS & Android)",
    "Mobile App Design Company for Modern Businesses Assets",
    "Website App Development Company in Bangalore Integration",
    "UI Mobile App Design Solutions & Interactive Prototypes",
    "100% Scalable Mobile Architecture & App Store Deployment Files"
  ];

  const mainH2Sections = [
    {
      title: "Professional Mobile App Design Services",
      icon: Icons.Smartphone,
      color: "#A068FF",
      desc: "We provide mobile app design services. These services combine creativity, technology and user experience. We build engaging and functional mobile applications.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Android app UI design",
        "iOS mobile app design",
        "Cross-platform app design",
        "User-friendly mobile interfaces",
        "Responsive mobile experiences",
        "Interactive app prototypes"
      ]
    },
    {
      title: "Mobile App Design Company for Modern Businesses",
      icon: Icons.Award,
      color: "#F5B800",
      desc: "Digiworq is a trusted mobile app design company. We create customized app solutions. These solutions improve usability, engagement and customer experience across platforms.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Business-focused app design",
        "Startup app solutions",
        "Enterprise applications",
        "Custom app interfaces",
        "Scalable mobile solutions"
      ]
    },
    {
      title: "Website App Development Company in Bangalore",
      icon: Icons.Globe,
      color: "#3B82F6",
      desc: "Our website and app development services help businesses. We build digital ecosystems with responsive websites and mobile applications. These websites and applications work together efficiently.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Website and mobile app integration",
        "Progressive web applications",
        "Custom business applications",
        "Scalable digital platforms",
        "SEO-friendly development"
      ]
    },
    {
      title: "UI Mobile App Design Solutions",
      icon: Icons.Layout,
      color: "#10B981",
      desc: "We focus on UI mobile app design. This design enhances user interaction. Improves navigation. We deliver a digital experience across Android and iOS devices.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Modern mobile UI design",
        "User-centric app interfaces",
        "App wireframing and prototyping",
        "Interactive design systems",
        "Clean and intuitive layouts"
      ]
    },
    {
      title: "Why Choose Digiworq for Mobile App Development?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: "Digiworq combines UI UX design, advanced technologies and business-focused development strategies. We create quality mobile applications.",
      bulletsHeader: "Some of the things we do include:",
      bullets: [
        "Expert app developers",
        "Creative UI UX team",
        "Customized app solutions",
        "Scalable app architecture",
        "End-to-end development support"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "We provide mobile app design and development services for multiple industries and business sectors.",
      bulletsHeader: "Some of the industries we serve include:",
      bullets: [
        "eCommerce businesses",
        "Healthcare applications",
        "Education and eLearning",
        "Real estate companies",
        "Logistics and delivery services",
        "Corporate enterprises and startups"
      ]
    },
    {
      title: "Benefits of Mobile App Design Services",
      icon: Icons.TrendingUp,
      color: "#F59E0B",
      desc: "Professional app designing helps businesses. It improves customer engagement, digital accessibility and operational efficiency.",
      bulletsHeader: "Some of the benefits include:",
      bullets: [
        "Enhanced customer experience",
        "Improved business accessibility",
        "Higher user engagement",
        "Increased brand visibility",
        "Seamless business communication"
      ]
    }
  ];

  const appProcessSteps = [
    {
      step: "01",
      title: "Research & Planning",
      desc: "We understand business goals, audience requirements and app functionality."
    },
    {
      step: "02",
      title: "UI UX Design & Development",
      desc: "We create user-centric interfaces and scalable mobile applications."
    },
    {
      step: "03",
      title: "Testing & Deployment",
      desc: "We test app performance and launch optimized mobile solutions."
    }
  ];

  const faqs = [
    {
      q: "What mobile app development services do you offer?",
      a: "We provide Android, iOS, cross-platform and custom mobile app development services."
    },
    {
      q: "Do you provide UI UX design for apps?",
      a: "Yes we provide UI mobile app design and user experience solutions."
    },
    {
      q: "Can you develop both websites and mobile apps?",
      a: "Yes we offer website and app development services for businesses."
    },
    {
      q: "Why is mobile app design important for businesses?",
      a: "Mobile app design improves user engagement, accessibility and customer satisfaction."
    },
    {
      q: "Why choose Digiworq as an app development company in Bangalore?",
      a: "Digiworq delivers scalable and user-focused mobile app solutions tailored for business growth. Digiworq is a mobile app development company that helps businesses grow. Digiworq provides mobile app design services that create engaging user experiences. Digiworq is a trusted mobile app design company, in Bangalore."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-mobileapp">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-mobileapp" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Best Mobile App Development Company in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(160, 104, 255, 0.12)', border: '1px solid rgba(160, 104, 255, 0.3)', borderRadius: '30px', color: '#A068FF', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Smartphone size={16} /> iOS & Android App Engineering Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best Mobile App Development Company in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a leading mobile app development company in Bangalore. We deliver scalable mobile app solutions for startups, businesses and enterprises.
                </p>
                <p style={{ fontWeight: '600', color: '#A068FF' }}>
                  Our mobile app design services create engaging user experiences and modern interfaces. We build performing applications that support business growth.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Mobile App Strategy Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="mobile-app-design" title="Mobile App Design" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Mobile App Deliverables & Stack Assets:</h3>
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

      {/* Our Mobile App Development Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our Mobile App Development Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a structured 3-stage agile engineering process to design, build, test, and deploy mobile applications.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {appProcessSteps.map((stepItem, sIdx) => (
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Build Your iOS & Android Mobile Application?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq mobile app architects to plan your native or cross-platform mobile app roadmap.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Mobile App Architecture Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
