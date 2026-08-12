import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ProductPhotographyPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Model Shoot in Bangalore Portfolio & Fashion Photography",
    "Studio & Outdoor Shoots with Creative Styling & Direction",
    "Commercial Fashion Shoots for E-Commerce & Ad Campaigns",
    "High-End Retouching & Color Correction Support",
    "Social Media & Branding Shoots for Instagram & Web"
  ];

  const mainH2Sections = [
    {
      title: "Model Portfolio",
      icon: Icons.UserCheck,
      color: "#3B82F6",
      desc: "We make model portfolios that show a persons personality, style and expressions through creative ideas, studio setups and good editing. These portfolios are great for fashion models, actors, influencers and people who want to build their brand."
    },
    {
      title: "Portfolio Photography",
      icon: Icons.Camera,
      color: "#10B981",
      desc: "We do portfolio photography with creative poses, styling guidance and good editing for modeling and casting profiles."
    },
    {
      title: "Studio & Outdoor Shoots",
      icon: Icons.Sun,
      color: "#F5B800",
      desc: "We do customized indoor studio shoots and outdoor fashion photography sessions based on what you like. The concept you have in mind."
    },
    {
      title: "Model Photographers in Bangalore",
      icon: Icons.Users,
      color: "#A068FF",
      desc: "Our experienced model photographers in Bangalore are good at taking pictures that have an impact using lighting, creative direction and modern photography techniques for fashion and commercial projects."
    },
    {
      title: "Commercial Fashion Shoots",
      icon: Icons.ShoppingBag,
      color: "#EC4899",
      desc: "We create high quality fashion and commercial photography for brands, advertising campaigns and digital promotions."
    },
    {
      title: "Creative Styling & Direction",
      icon: Icons.Sparkles,
      color: "#8B5CF6",
      desc: "We provide styling support pose guidance and creative direction for photo shoots that have an impact."
    },
    {
      title: "Professional Model Photoshoot Bangalore",
      icon: Icons.Crown,
      color: "#F59E0B",
      desc: "Digiworq provides model photoshoot services for portfolios, fashion campaigns, social media content, e-commerce brands and promotional photography with high quality production and editing support."
    },
    {
      title: "High-End Retouching",
      icon: Icons.Sliders,
      color: "#10B981",
      desc: "We do photo retouching, color correction and image enhancement to make the final pictures look polished."
    },
    {
      title: "Social Media & Branding Shoots",
      icon: Icons.Share2,
      color: "#3B82F6",
      desc: "We create engaging content for Instagram, portfolios, websites and personal branding campaigns."
    },
    {
      title: "Fashion Photographer Bangalore",
      icon: Icons.Award,
      color: "#A068FF",
      desc: "Our fashion photography services are designed for clothing brands, designers, influencers and models who want high quality fashion pictures for their websites, campaigns and social media marketing."
    }
  ];

  const faqs = [
    {
      q: "What model photography services does Digiworq provide?",
      a: "Digiworq provides model portfolio shoots, fashion photography, commercial shoots, social media photography and branding photoshoot services."
    },
    {
      q: "Do you provide professional portfolio shoots in Bangalore?",
      a: "Yes we create model portfolios with studio shoots, outdoor photography and professional editing support."
    },
    {
      q: "Can Digiworq handle fashion photography projects?",
      a: "Yes Digiworq provides fashion photography services for models, clothing brands, designers, influencers and commercial campaigns."
    },
    {
      q: "Do you provide editing and retouching services?",
      a: "Yes we provide photo editing, retouching, color correction and image enhancement services for all photoshoots."
    },
    {
      q: "Why choose Digiworq for model shoots in Bangalore?",
      a: "Digiworq offers direction, professional photographers, premium editing, modern studio setups and customized photoshoot solutions for model shoots, in Bangalore."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-productphotography">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-productphotography" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Photography Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Model Shoot in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Camera size={16} /> Fashion Portfolio & Commercial Model Shoot Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Model Shoot in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq offers professional model shoot services in Bangalore for people who want to become models, fashion brands, influencers and businesses that need quality pictures.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Our team of photographers is very good at taking fashion pictures making portfolios and doing photo shoots that help people and businesses look good.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Model Shoot Session</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="product-photography" categoryId="photography" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Model Shoot & Product Photography Deliverables:</h3>
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
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75' }}>
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ padding: '80px 0', background: '#0A0E1A' }}>
        <div className="section-container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>FAQs</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Book Your Model Shoot in Bangalore with Digiworq?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq fashion photographers to build model portfolios, shoot commercial fashion campaigns, and get high-end retouching.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Model Shoot Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
