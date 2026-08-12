import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function AdFilmsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Best Film Maker Agency in Bangalore Creative Production",
    "Corporate Film Production Company in Bangalore & Brand Films",
    "Company Profile Videos & Video Production Services",
    "Commercial Video Production & Ad Film Company in Bangalore",
    "TV Commercial Production & Digital Advertising Videos"
  ];

  const mainH2Sections = [
    {
      title: "Corporate Film Production Company in Bangalore",
      icon: Icons.Film,
      color: "#3B82F6",
      desc: "Digiworq is a company that makes videos in Bangalore. We make videos about companies, training videos and stories about brands. These videos are made to help businesses achieve their goals."
    },
    {
      title: "Corporate Brand Films",
      icon: Icons.Award,
      color: "#10B981",
      desc: "We make films that show what a company is about what it does and what it has achieved. These films are used for presentations. To talk to customers."
    },
    {
      title: "Company Profile Videos",
      icon: Icons.Building,
      color: "#F5B800",
      desc: "We make videos that tell people about a company. This helps people trust the company and understand what it does."
    },
    {
      title: "Video Production Company in Bangalore",
      icon: Icons.Video,
      color: "#A068FF",
      desc: "Digiworq makes videos for businesses. We do everything from coming up with ideas to filming and editing. We help businesses in all kinds of industries."
    },
    {
      title: "Professional Video Production",
      icon: Icons.Sparkles,
      color: "#EC4899",
      desc: "We use equipment and tell stories in a way that keeps people watching. This helps us make high-quality videos for businesses."
    },
    {
      title: "Commercial Video Production",
      icon: Icons.Tv,
      color: "#8B5CF6",
      desc: "We make commercials and promotional videos that people will watch. These videos are used for advertising. To promote products."
    },
    {
      title: "Ad Film Company in Bangalore",
      icon: Icons.Target,
      color: "#F59E0B",
      desc: "Digiworq helps businesses make ads. We make ads, promotional campaigns and videos that people will watch and remember."
    },
    {
      title: "TV Commercial Production",
      icon: Icons.Radio,
      color: "#10B981",
      desc: "We make commercials for TV and videos for advertising. Our videos are creative and well-made."
    },
    {
      title: "Digital Advertising Videos",
      icon: Icons.Share2,
      color: "#3B82F6",
      desc: "We make videos for advertising. These videos are used on YouTube, Instagram, Facebook and other platforms."
    }
  ];

  const faqs = [
    {
      q: "What film production services does Digiworq provide?",
      a: "Digiworq provides ad film production, corporate videos, promotional videos, commercial video production, brand films and post-production services."
    },
    {
      q: "Why choose Digiworq as a film maker agency in Bangalore?",
      a: "We tell stories make high-quality videos and have experienced videographers. We also give businesses customized video solutions."
    },
    {
      q: "Do you provide video production services?",
      a: "Yes we do everything from coming up with ideas to filming, editing and delivering the video."
    },
    {
      q: "Can Digiworq create ad films for marketing campaigns?",
      a: "Yes we make ads and promotional videos, for advertising and social media."
    },
    {
      q: "Do you offer film production packages?",
      a: "Yes we give businesses customized video production packages based on what they need and what they want to achieve."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-adfilms">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-adfilms" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Best Film Maker Agency in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Film size={16} /> Commercial Ad Film & Corporate Brand Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best Film Maker Agency in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a film maker agency in Bangalore that makes ads and videos for businesses.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  We tell stories give direction and use production techniques to make videos that people will watch and remember. This helps businesses talk to their customers better.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Ad Film Production Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="ad-films" title="Ad Films" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Film Production Deliverables & Capabilities:</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Produce TV Commercials & Ad Films in Bangalore?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq directors and film producers to craft corporate brand films, TV commercials, and digital ad campaigns.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Film Maker Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
