import React from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

export default function TechServicePage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData.technology || { categoryTitle: "Technology Services", services: [] };
  const activeSub = data.services.find(s => 
    subServiceId && (
      s.id === subServiceId || 
      s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
      subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
      s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
    )
  );

  const deliverables = activeSub?.deliverables || [
    "Website Development in Bangalore & Mobile Responsiveness",
    "Custom Web and App Development Suite",
    "Website Development Services & E-Commerce Integration",
    "API Engineering & Database Optimization",
    "Fast Loading Speed & Enterprise Security"
  ];

  const techH2Sections = [
    {
      title: "Website Development in Bangalore",
      icon: Icons.Globe,
      color: "#3B82F6",
      desc: "We make websites in Bangalore that work well on all devices. Our websites are easy to find on search engines and focus on the user. They help businesses get more visible engage customers and work smoothly on desktops and mobiles."
    },
    {
      title: "Web and App Development",
      icon: Icons.Smartphone,
      color: "#F5B800",
      desc: "Our services include making custom websites, mobile apps and digital platforms. We develop modern applications. These applications help brands improve their operations and customer experience. We focus on web and app development to deliver the results."
    },
    {
      title: "Website Development Services, in Bangalore",
      icon: Icons.Code2,
      color: "#10B981",
      desc: "Digiworq provides website development services in Bangalore. Our services include designing, building and optimizing websites. We also offer e-commerce solutions and landing pages. Our goal is to support businesses in growing. We use technologies to build scalable digital platforms. Digiworq focuses on delivering performance digital solutions."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-tech">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-tech" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub ? activeSub.title : "Technology Services"}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Cpu size={16} /> Scalable Engineering & App Development
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                {activeSub ? activeSub.title : "Technology Services"}
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq offers technology services to help businesses build solutions. These solutions help businesses grow online and make their users happy.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Our team uses creativity and modern tech to make performance digital platforms. We work with businesses in industries.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Request Tech Consultation</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId={subServiceId || 'technology'} categoryId="technology" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Technology Deliverables & Tech Stack:</h3>
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

      {/* Structured SEO H2 Blocks Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {techH2Sections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${sec.color}44`, borderRadius: '24px', padding: '36px', boxShadow: `0 12px 32px ${sec.color}15` }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: `${sec.color}18`, border: `1px solid ${sec.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComp size={26} color={sec.color} />
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px', lineHeight: '1.3' }}>
                    {sec.title}
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75' }}>
                    {sec.desc}
                  </p>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Build Your Scalable Digital Platform?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq tech architects for custom web, mobile app, or e-commerce engineering.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Tech Architecture Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
