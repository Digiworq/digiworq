import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ArVrSolutionsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional AR VR App Development Bangalore Solutions",
    "AR VR Development Services Bangalore Unity & Unreal Systems",
    "VR Solutions in Bangalore for Modern Businesses Real Estate Tours",
    "AR/VR Solutions for Multiple Industries Training & Retail",
    "WebXR, ARKit, ARCore & Cloud-Based Immersive 3D Assets"
  ];

  const mainH2Sections = [
    {
      title: "Professional AR VR App Development Bangalore",
      icon: Icons.Glasses,
      color: "#A068FF",
      desc: "We make AR VR applications that combine advanced technologies, creative experiences and business-focused solutions. This helps businesses transform digitally in a way.",
      bulletsHeader: "Our specialties include:",
      bullets: [
        "Augmented reality application development is one of our specialties.",
        "We also do virtual reality experience design to make experiences feel real.",
        "Interactive 3D visualization is another area we focus on.",
        "Mobile AR and VR applications are developed by us to reach customers.",
        "Web-based AR experiences are created to make them accessible to everyone.",
        "Immersive business solutions are our goal to help businesses grow."
      ]
    },
    {
      title: "AR VR Development Services Bangalore",
      icon: Icons.Box,
      color: "#3B82F6",
      desc: "Our AR VR development services in Bangalore help businesses improve engagement, training, visualization and digital communication. We use immersive technologies to achieve this.",
      bulletsHeader: "Services we offer:",
      bullets: [
        "AR product visualization is one of the services we offer.",
        "VR training simulations are developed to train employees in a way.",
        "Virtual walkthrough solutions are created to give customers a feel of the product.",
        "Interactive digital experiences are designed to engage customers.",
        "Real-time immersive applications are developed to make experiences feel real.",
        "Enterprise AR VR integration is done to make our solutions work with existing systems."
      ]
    },
    {
      title: "VR Solutions in Bangalore for Modern Businesses",
      icon: Icons.Award,
      color: "#10B981",
      desc: "We provide VR solutions in Bangalore that are tailored for businesses. These solutions help create customer experiences, virtual training environments and advanced digital presentations.",
      bulletsHeader: "Key VR solutions:",
      bullets: [
        "Virtual reality business applications are developed to solve business problems.",
        "VR learning and training systems are created to educate employees.",
        "estate virtual tours are developed to give customers a feel of the property.",
        "Industrial VR simulations are done to train employees in a way.",
        "Interactive VR marketing solutions are designed to engage customers."
      ]
    },
    {
      title: "AR/VR Solutions for Multiple Industries",
      icon: Icons.Building2,
      color: "#F5B800",
      desc: "Our AR and VR solutions are designed for businesses across industries. These solutions improve customer interaction and operational performance.",
      bulletsHeader: "Industry applications:",
      bullets: [
        "Estate virtual walkthroughs are created to give customers a feel of the property.",
        "Retail AR product experiences are designed to engage customers.",
        "Healthcare VR training is developed to train professionals.",
        "immersive learning is created to educate students.",
        "Manufacturing AR solutions are developed to improve manufacturing processes.",
        "Event and entertainment experiences are designed to engage audiences."
      ]
    },
    {
      title: "Why Choose Digiworq for AR/VR Development?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: "Digiworq combines creativity, modern technologies and business-focused development strategies. This helps us deliver high-quality immersive experiences for brands and enterprises.",
      bulletsHeader: "Reasons to choose Digiworq:",
      bullets: [
        "We have experienced AR VR developers who know what they are doing.",
        "Customized immersive solutions are developed to meet business needs.",
        "Creative 3D experience design is done to make experiences feel real.",
        "Cross-platform application development is done to reach customers.",
        "Scalable technology solutions are developed to grow with businesses.",
        "End-to-end development support is provided to ensure execution."
      ]
    },
    {
      title: "Benefits of AR/VR Solutions",
      icon: Icons.Zap,
      color: "#8B5CF6",
      desc: "Professional AR VR solutions help businesses improve engagement, visualization and digital communication. This happens across all customer touchpoints.",
      bulletsHeader: "Benefits include:",
      bullets: [
        "Better customer engagement is achieved through experiences.",
        "Interactive user experiences are designed to engage customers.",
        "Improved product visualization is done to give customers an idea of the product.",
        "Advanced training environments are created to train employees.",
        "Strong digital innovation is achieved through our solutions.",
        "Increased brand interaction is a result of our immersive experiences."
      ]
    }
  ];

  const arvrProcessSteps = [
    {
      step: "01",
      title: "Research & Strategy",
      desc: "We start by understanding business goals audience needs and immersive experience requirements. This helps us create a plan."
    },
    {
      step: "02",
      title: "Design & Development",
      desc: "We then create AR VR environments, applications and 3D experiences. This is where our creativity shines."
    },
    {
      step: "03",
      title: "Testing & Deployment",
      desc: "Finally we optimize performance. Deploy scalable AR VR solutions across platforms. This ensures our solutions work smoothly."
    }
  ];

  const techStackBullets = [
    "Unity and Unreal Engine are two of the platforms we use.",
    "ARKit and ARCore are used to develop augmented reality experiences.",
    "WebXR technologies are used to create web experiences.",
    "3D animation and rendering are done to make experiences feel real.",
    "Cross-platform mobile development is done to reach customers.",
    "Cloud-based immersive solutions are developed to make our solutions scalable."
  ];

  const faqs = [
    {
      q: "What are AR/VR solutions?",
      a: "AR/VR solutions use augmented and virtual reality technologies to create immersive digital experiences. These experiences are designed for businesses and customers."
    },
    {
      q: "What industries benefit from AR VR development services?",
      a: "Many industries benefit from AR VR development services. These include estate, healthcare, retail, education, manufacturing and entertainment."
    },
    {
      q: "Do you provide custom AR VR app development Bangalore services?",
      a: "Yes we provide customized AR and VR application development. This is tailored to meet business requirements."
    },
    {
      q: "Can AR VR solutions improve customer engagement?",
      a: "Yes immersive AR VR experiences help businesses improve customer interaction and digital engagement."
    },
    {
      q: "Why choose Digiworq for AR/VR solutions in Bangalore?",
      a: "Digiworq delivers scalable and technology-driven AR VR solutions. These solutions are designed for business growth. We are the choice for AR/VR solutions, in Bangalore."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-arvr">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-arvr" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Technology Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">AR/VR Solutions in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(160, 104, 255, 0.12)', border: '1px solid rgba(160, 104, 255, 0.3)', borderRadius: '30px', color: '#A068FF', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Glasses size={16} /> Immersive 3D, WebXR & Unity/Unreal Engine Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                AR/VR Solutions in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq provides AR/VR solutions in Bangalore that help businesses create really cool digital experiences. These experiences improve how customers interact with businesses and make their operations more efficient.
                </p>
                <p style={{ fontWeight: '600', color: '#A068FF' }}>
                  Our AR VR development services in Bangalore focus on making applications for industries like real estate, education, healthcare, retail and corporate training. We do this to help these industries use AR/VR solutions in Bangalore to their advantage.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book AR/VR Consultation</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="ar-vr-solutions" title="AR-VR Solutions" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>AR/VR Deliverables & Immersive Assets:</h3>
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

      {/* Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our AR/VR Development Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a structured 3-phase immersive technology pipeline from strategy to 3D deployment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {arvrProcessSteps.map((stepItem, sIdx) => (
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

      {/* Technologies We Use Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ background: 'linear-gradient(135deg, rgba(160, 104, 255, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%)', border: '1px solid rgba(160, 104, 255, 0.3)', borderRadius: '24px', padding: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <Icons.Cpu size={30} color="#A068FF" />
              <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>Technologies We Use</h3>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', marginBottom: '24px' }}>
              We use AR VR technologies and platforms to build immersive digital solutions.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {techStackBullets.map((tItem, tIdx) => (
                <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '16px', color: '#FFFFFF', fontSize: '0.98rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={18} color="#A068FF" />
                  <span>{tItem}</span>
                </div>
              ))}
            </div>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Create Immersive AR/VR Digital Experiences?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq AR/VR engineers to design Unity/Unreal simulations, WebXR tours, and 3D product apps.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book AR/VR Architecture Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
