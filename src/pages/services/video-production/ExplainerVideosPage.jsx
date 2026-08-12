import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ExplainerVideosPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Explainer Video Services for Startups, Brands & Enterprises",
    "Animated Explainer Videos 2D/3D Product Motion",
    "Product Explainer Videos Feature & Benefit Demos",
    "Corporate & Training Videos Internal & Employee Content",
    "Scriptwriting, Storyboarding, Voice-over & Post-Production"
  ];

  const mainH2Sections = [
    {
      title: "Explainer Video Services",
      icon: Icons.Video,
      color: "#3B82F6",
      desc: "Our explainer video services include videos, product explainers, corporate videos, training videos, promotional content and marketing videos that are tailored to your business goals and target audience."
    },
    {
      title: "Animated Explainer Videos",
      icon: Icons.Sparkles,
      color: "#10B981",
      desc: "We create animated videos that explain products, services and business concepts in an creative way. These animated explainer videos are really good at explaining things."
    },
    {
      title: "Product Explainer Videos",
      icon: Icons.Box,
      color: "#F5B800",
      desc: "We make explainer videos that show product features, benefits and functionality. This helps customers understand products better."
    },
    {
      title: "Corporate & Training Videos",
      icon: Icons.Building2,
      color: "#A068FF",
      desc: "We develop corporate videos and employee training content with good storytelling and visual communication. This helps businesses train their employees and communicate with them."
    }
  ];

  const h4Sections = [
    {
      title: "Top Explainer Video Services",
      icon: Icons.Award,
      color: "#EC4899",
      desc: "Digiworq delivers customized explainer video solutions with scriptwriting, storyboarding, animation, voice-over and post-production services to create digital content for brands and businesses. We make sure our explainer videos are really good."
    },
    {
      title: "Explainer Video Company in Bangalore",
      icon: Icons.Building,
      color: "#8B5CF6",
      desc: "Digiworq is a trusted explainer video company in Bangalore. We focus on producing engaging videos that improve brand communication, marketing campaigns, customer engagement and business presentations. Our explainer videos are made to engage audiences."
    },
    {
      title: "Explainer Video Company Near Me",
      icon: Icons.MapPin,
      color: "#F59E0B",
      desc: "Looking for an explainer video company near you? Digiworq provides video production services with modern animation techniques, high quality editing and customized storytelling solutions for businesses across industries. We are an explainer video company that can help you."
    }
  ];

  const faqs = [
    {
      q: "What are explainer videos?",
      a: "Explainer videos are short and engaging videos that explain products, services, business ideas or processes in an visually appealing format. Explainer videos are really useful."
    },
    {
      q: "What explainer video services does Digiworq offer?",
      a: "We provide animated explainer videos, product videos, corporate videos, training videos, promotional videos and marketing video production services. Our explainer video services are many."
    },
    {
      q: "Why are explainer videos important for businesses?",
      a: "Explainer videos help improve audience engagement, simplify information increase brand awareness and enhance marketing performance. Explainer videos are important for businesses because they help businesses communicate better."
    },
    {
      q: "Do you provide custom explainer video solutions?",
      a: "Yes we create customized explainer videos based on your business goals, target audience and branding requirements. We make custom explainer videos for our clients."
    },
    {
      q: "Can Digiworq handle video production?",
      a: "Yes we provide end-, to-end explainer video production including scripting, animation, voice-over, editing and post-production services. We can handle all your explainer video needs."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-explainervideos">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-explainervideos" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Best Explainer Video Services in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Video size={16} /> 2D/3D Animated Explainer & SaaS Demo Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best Explainer Video Services in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a company that makes creative and engaging explainer videos in Bangalore for startups, businesses, brands and enterprises.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  We make high quality explainer videos that make complex ideas easy to understand improve audience engagement and help businesses communicate their message effectively through storytelling that's easy to watch.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Explainer Video Consultation</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="explainer-videos" categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Explainer Video Deliverables & Capabilities:</h3>
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

      {/* H4 Features Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {h4Sections.map((h4Item, hIdx) => {
              const IconComp = h4Item.icon;
              return (
                <div key={hIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${h4Item.color}44`, borderRadius: '20px', padding: '32px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${h4Item.color}18`, border: `1px solid ${h4Item.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <IconComp size={24} color={h4Item.color} />
                  </div>
                  <h4 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px' }}>
                    {h4Item.title}
                  </h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: '1.65' }}>
                    {h4Item.desc}
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Create Engaging Explainer Videos with Digiworq?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with our explainer video animators and scriptwriters to turn complex business ideas into high-converting videos.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Explainer Video Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
