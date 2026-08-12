import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function CorporateShootVideosPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Best Corporate Video Shooting Services Company Profiles",
    "Promotional Corporate Videos & Employee Training Content",
    "Corporate Video Production Bangalore End-to-End Support",
    "Professional Video Production & Cinematic Visuals",
    "Multi-Platform Video Content for Web, YouTube & LinkedIn"
  ];

  const mainH2Sections = [
    {
      title: "Corporate Video Shooting Services",
      icon: Icons.Video,
      color: "#3B82F6",
      desc: "Our video shooting services include company profile videos, business presentations, employee training videos, client testimonials, promotional films and event coverage tailored to your business goals and marketing strategies."
    },
    {
      title: "Company Profile Videos",
      icon: Icons.Building,
      color: "#10B981",
      desc: "Create professional company profile videos that showcase your business values, services and achievements with engaging storytelling. Company profile videos are a way to tell your business story."
    },
    {
      title: "Promotional Corporate Videos",
      icon: Icons.Sparkles,
      color: "#F5B800",
      desc: "Develop promotional videos for digital marketing campaigns, websites and business presentations. Promotional corporate videos can help you reach an audience."
    },
    {
      title: "Employee & Training Videos",
      icon: Icons.Users,
      color: "#A068FF",
      desc: "Produce training and internal communication videos for employees and corporate teams. Employee and training videos are essential for business growth."
    },
    {
      title: "Corporate Video Production Bangalore",
      icon: Icons.Building2,
      color: "#EC4899",
      desc: "As a trusted video production company in Bangalore Digiworq provides end to end video production services including concept creation, scripting, shooting, editing, motion graphics and post production support. Corporate video production is our specialty."
    },
    {
      title: "Professional Video Production",
      icon: Icons.Award,
      color: "#8B5CF6",
      desc: "We use production equipment, creative direction and cinematic visuals to deliver high quality corporate videos. Professional video production is what we do best."
    },
    {
      title: "Multi-Platform Video Content",
      icon: Icons.Share2,
      color: "#F59E0B",
      desc: "Our corporate videos are optimized for websites, YouTube, LinkedIn, presentations and social media platforms. Multi platform video content is essential for business success."
    },
    {
      title: "Top Corporate Video Shooting Services",
      icon: Icons.CheckCircle2,
      color: "#10B981",
      desc: "Digiworq helps businesses communicate effectively through crafted corporate videos designed to build credibility improve audience engagement and strengthen brand identity. Corporate video shooting services are our forte."
    }
  ];

  const faqs = [
    {
      q: "What video services does Digiworq provide?",
      a: "We provide company profile videos, videos, training videos, testimonial videos, event coverage and complete corporate video production services. Digiworq provides a range of corporate video services."
    },
    {
      q: "Why are corporate videos important for businesses?",
      a: "Corporate videos help businesses improve brand visibility communicate professionally and engage customers through visual storytelling. Corporate videos are important for businesses because they help with brand visibility."
    },
    {
      q: "Do you provide video production services?",
      a: "Yes we provide scripting, shooting, editing, motion graphics, sound design and final video delivery services. Complete video production services are available, at Digiworq."
    },
    {
      q: "Can Digiworq create customized videos?",
      a: "Yes we create customized videos based on business goals, target audience and branding requirements. Customized corporate videos are our specialty."
    },
    {
      q: "Which platforms are videos optimized for?",
      a: "Our videos are optimized for websites, YouTube, LinkedIn, Instagram, presentations and digital marketing campaigns. Corporate videos are optimized for platforms."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-corporateshoot">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-corporateshoot" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Best Corporate Video Shooting Services in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Building size={16} /> Enterprise Company Profile & Corporate Video Production Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best Corporate Video Shooting Services
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq offers corporate video shooting services in Bangalore for businesses, startups and enterprises looking to create impactful visual communication.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  We specialize in quality corporate video production, brand storytelling, promotional videos and business focused content designed to improve brand visibility and audience engagement.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Corporate Shoot Consultation</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="corporate-shoot-videos" categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Corporate Video Shooting Deliverables & Capabilities:</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Produce Your Corporate Video Shoot with Digiworq?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq corporate video directors to shoot company profile films, employee training videos, and business presentations.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Corporate Video Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
