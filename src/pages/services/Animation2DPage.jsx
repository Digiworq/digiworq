import React from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

export default function Animation2DPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData['2d-animation'] || { categoryTitle: "2D Animation Services", services: [] };
  const activeSub = data.services.find(s => 
    subServiceId && (
      s.id === subServiceId || 
      s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
      subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
      s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
    )
  );

  const deliverables = activeSub?.deliverables || [
    "2D Animation Studio Explainer Videos",
    "Full-Service 2D Animation Agency Production",
    "Motion Graphics Animation & Kinetic Typography",
    "2D Animation Video for Social & Ads",
    "Modern Motion Graphics Design & Visual Effects"
  ];

  const animationH2Sections = [
    {
      title: "2D Animation Studio",
      icon: Icons.Film,
      color: "#F5B800",
      desc: "As a professional 2D animation studio, we create animated videos for explainer content, advertisements, product promotions, educational videos, and social media campaigns. Our animation team focuses on delivering smooth visuals, creative storytelling, and high-quality production tailored to your business goals."
    },
    {
      title: "2D Animation Agency",
      icon: Icons.Award,
      color: "#EC4899",
      desc: "Our 2D animation agency services include concept creation, storyboarding, character design, motion graphics, editing, and final video production. We help brands simplify complex ideas through engaging animated content designed for digital marketing and brand communication."
    },
    {
      title: "Motion Graphics Animation",
      icon: Icons.Zap,
      color: "#3B82F6",
      desc: "We provide professional motion graphics animation services for promotional videos, presentations, social media content, logo animations, and digital advertisements. Our motion graphics solutions combine creative visuals and animation techniques to create engaging brand experiences."
    },
    {
      title: "2D Animation Video",
      icon: Icons.Video,
      color: "#A068FF",
      desc: "Our 2D animation video solutions are designed to improve audience engagement through creative storytelling, animated explainers, product showcases, and branded content. We create animations optimized for websites, YouTube, Instagram, and digital campaigns."
    },
    {
      title: "Motion Graphics Design",
      icon: Icons.Sparkles,
      color: "#10B981",
      desc: "Digiworq offers modern motion graphics design services that enhance digital content with animated typography, transitions, visual effects, and dynamic creative elements. Our designs help brands communicate messages more effectively across digital platforms."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-2d">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-2d" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub ? activeSub.title : "2D Animation Company in Bangalore"}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Sparkles size={16} /> Creative 2D Motion Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                {activeSub ? activeSub.title : "2D Animation Company in Bangalore"}
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p>
                  <a href="https://www.digiworq.com/services/2d-animation" target="_blank" rel="noreferrer" style={{ color: '#F5B800', fontWeight: '700', textDecoration: 'underline' }}>Digiworq</a> is a creative 2D animation company delivering visually engaging animation solutions for brands, businesses, and digital campaigns. We combine storytelling, creativity, and motion design to create impactful animations that improve audience engagement and brand communication.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Request 2D Animation Quote</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId={subServiceId || '2d-animation'} categoryId="2d-animation" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>2D Animation Deliverables & Assets:</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Create Animated 2D Explainer Videos?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Collaborate with Digiworq 2D animators to bring your brand story to life.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book 2D Animation Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
