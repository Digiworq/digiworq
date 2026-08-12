import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function BrandFilmsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Film Branding Agencies Bangalore Creative Storytelling",
    "Brand Storytelling Films & Promotional Brand Videos",
    "In-Film Branding Agencies & Product Placement Videos",
    "Creative Advertising Films & Premium Film Branding Agencies",
    "Corporate Brand Films, Digital Brand Campaigns & Full Production"
  ];

  const mainH2Sections = [
    {
      title: "Film Branding Agencies Bangalore",
      icon: Icons.Film,
      color: "#3B82F6",
      desc: "Our film branding services help businesses tell their story through visuals and creative concepts. We use high-quality production techniques to make sure our films look great and help businesses promote their brand."
    },
    {
      title: "Brand Storytelling Films",
      icon: Icons.BookOpen,
      color: "#10B981",
      desc: "We create films that tell a story about a brand and help people connect with it on a level. This helps businesses become more visible and well-known."
    },
    {
      title: "Promotional Brand Videos",
      icon: Icons.Sparkles,
      color: "#F5B800",
      desc: "We make videos that businesses can use on their websites, social media and in advertising campaigns."
    },
    {
      title: "In-Film Branding Agencies",
      icon: Icons.Award,
      color: "#A068FF",
      desc: "Digiworq helps businesses put their message into films in a way that feels natural and helps people remember the brand. This creates an experience for the audience and helps businesses build a stronger brand."
    },
    {
      title: "Product Placement Videos",
      icon: Icons.Box,
      color: "#EC4899",
      desc: "We showcase products and services in a way in our videos and marketing campaigns."
    },
    {
      title: "Creative Advertising Films",
      icon: Icons.Tv,
      color: "#8B5CF6",
      desc: "We make advertising films that tell a story and are visually stunning. This helps businesses connect with their audience and promote their brand."
    },
    {
      title: "Premium Film Branding Agencies",
      icon: Icons.Crown,
      color: "#F59E0B",
      desc: "As a premium film branding agency Digiworq focuses on making high-quality videos with visuals and a strong story. This helps businesses create premium brand films that stand out."
    },
    {
      title: "Corporate Brand Films",
      icon: Icons.Building2,
      color: "#10B981",
      desc: "We make corporate films that help businesses communicate better and build trust with their audience."
    },
    {
      title: "Digital Brand Campaigns",
      icon: Icons.Share2,
      color: "#3B82F6",
      desc: "We create digital brand campaigns that are optimized for YouTube, Instagram, LinkedIn and other social media platforms."
    },
    {
      title: "Brand Film Production Bangalore",
      icon: Icons.Camera,
      color: "#A068FF",
      desc: "We provide brand film production services, including scripting, concept development, shooting, editing and post-production support. This helps businesses communicate their message in a way."
    }
  ];

  const faqs = [
    {
      q: "What brand film production services does Digiworq provide?",
      a: "We provide films, promotional videos, advertising films, brand storytelling videos and digital campaign production services. Digiworq is a film branding agency that helps businesses tell their story through film."
    },
    {
      q: "Why are brand films important for businesses?",
      a: "Brand films are important because they help businesses become more well-known connect with their audience and create a connection, through visual storytelling. This is what Digiworq does as a film branding agency."
    },
    {
      q: "Do you provide film production services?",
      a: "Yes we provide production services, including scripting, shooting, editing and final video delivery. Digiworq is a film branding agency that takes care of everything."
    },
    {
      q: "Can Digiworq create brand films?",
      a: "Yes, we create brand films based on business goals, target audience and marketing strategies. This is what we do as a film branding agency."
    },
    {
      q: "Which platforms are brand films optimized for?",
      a: "Our brand films are optimized for websites YouTube Instagram, LinkedIn, Facebook and digital advertising campaigns. Digiworq makes sure that our films work well on all these platforms."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-brandfilms">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-brandfilms" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Top Film Branding Agencies in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Award size={16} /> Cinematic Brand Storytelling & Premium In-Film Branding Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Top Film Branding Agencies in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is one of the film branding agencies in Bangalore. We make brand films for businesses, startups and big companies. Our films are visually engaging.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Help companies tell their story in a way that people remember. We create brand films, corporate videos and promotional content that helps businesses connect with their audience and tell their story in a way.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Brand Film Consultation</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="brand-films" categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Film Branding Deliverables & Capabilities:</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Create a Premium Brand Film with Digiworq Bangalore?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq brand directors to craft storytelling films, in-film branding, and digital ad campaigns.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Brand Film Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
