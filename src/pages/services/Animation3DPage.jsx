import React from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

export default function Animation3DPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData['3d-animation'] || { categoryTitle: "3D Animation Services", services: [] };
  const activeSub = data.services.find(s => 
    subServiceId && (
      s.id === subServiceId || 
      s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
      subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
      s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
    )
  );

  const deliverables = activeSub?.deliverables || [
    "3D Animation Company Photorealistic Renders",
    "High-End 3D Visualization Services & Walkthroughs",
    "Complete End-to-End 3D Animation & CGI Motion",
    "Raytraced 4K Video Render Exports",
    "Product Modeling & Architectural Masterplans"
  ];

  const animationH2Sections = [
    {
      title: "3D Animation Company",
      icon: Icons.Box,
      color: "#F5B800",
      desc: "Digiworq is an animation company that is growing. We specialize in making animations that look great for brands, ads, buildings, products and digital campaigns. Our goal is to make animations that move in a way tell a good story and communicate in a way that gets peoples attention. We want to help businesses achieve their goals."
    },
    {
      title: "3D Visualization Services",
      icon: Icons.Eye,
      color: "#3B82F6",
      desc: "Our 3D visualization services help businesses turn their ideas into visuals that look real. We do this by making visuals, product pictures, walkthrough animations and digital experiences that people can interact with. We make sure the visuals are of quality so people can understand and engage with them."
    },
    {
      title: "3D Animation",
      icon: Icons.Sparkles,
      color: "#EC4899",
      desc: "Digiworq does everything from start to finish when it comes to 3D animation. This includes making models adding textures making motion graphics, rendering, adding effects and making promotional content that moves. Our 3D animation services are for websites, ads, presentations, social media and telling brand stories on platforms. We make sure Digiworq 3D animation services are the best they can be, for our clients."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-3d">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-3d" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub ? activeSub.title : "3D Animation Services in Bangalore"}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Sparkles size={16} /> Photorealistic 3D CGI & VFX Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                {activeSub ? activeSub.title : "3D Animation Services in Bangalore"}
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq helps brands show their ideas in a cool way with 3D animation services. We make sure the visuals are immersive and the animations are realistic.
                </p>
                <p style={{ fontWeight: '600', color: '#F5B800' }}>
                  Our team is made up of people who are good at telling stories and using advanced techniques to make high quality visuals for businesses.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Request 3D Animation Quote</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId={subServiceId || '3d-animation'} categoryId="3d-animation" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>3D Animation Deliverables & Assets:</h3>
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

      {/* Structured SEO H2 Blocks Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {animationH2Sections.map((sec, idx) => {
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
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(245, 184, 0, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Create Immersive 3D Product & CGI Videos?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Work with Digiworq 3D artists to model and render your product vision.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book 3D Visualization Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
