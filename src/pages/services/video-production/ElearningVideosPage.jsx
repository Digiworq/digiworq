import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ElearningVideosPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "E Learning Video Makers in Bangalore Corporate & EdTech",
    "Educational Video Production & Online Course Videos",
    "Interactive Learning Videos & Animated Training Videos",
    "E Learning Content Creation Services Script to Post-Production",
    "Customized Learning Modules & Multi-Platform LMS Exports"
  ];

  const mainH2Sections = [
    {
      title: "E Learning Video Makers",
      icon: Icons.Video,
      color: "#3B82F6",
      desc: "The services they offer include making corporate training videos, tutorials, online course videos, animated learning content and instructional videos. They make these videos for industries and learning needs."
    },
    {
      title: "Educational Video Production",
      icon: Icons.BookOpen,
      color: "#10B981",
      desc: "They create videos that are interesting to watch with good visuals, animations and a clear structure."
    },
    {
      title: "Online Course Videos",
      icon: Icons.Monitor,
      color: "#F5B800",
      desc: "They develop quality online learning videos that work well on digital platforms and training programs."
    },
    {
      title: "E Learning Video Makers Near Me",
      icon: Icons.MapPin,
      color: "#A068FF",
      desc: "If you are looking for e learning video makers near you Digiworq can help. They provide video production solutions that include creative storytelling, professional editing and interactive learning experiences."
    },
    {
      title: "Interactive Learning Videos",
      icon: Icons.Sparkles,
      color: "#EC4899",
      desc: "They develop video content that helps keep the audience engaged and makes learning more effective."
    },
    {
      title: "Animated Training Videos",
      icon: Icons.Zap,
      color: "#8B5CF6",
      desc: "They create learning and explainer videos for corporate and educational training modules."
    },
    {
      title: "E Learning Content Creation Services",
      icon: Icons.Layers,
      color: "#F59E0B",
      desc: "Digiworq provides e learning content creation services. This includes scripting, developing storyboards providing voice over support, animation, editing and post production solutions for learning platforms."
    },
    {
      title: "Customized Learning Modules",
      icon: Icons.Sliders,
      color: "#10B981",
      desc: "They build personalized learning content based on what businesses need who their audience is and what their training goals are."
    },
    {
      title: "Multi-Platform Learning Content",
      icon: Icons.Share2,
      color: "#3B82F6",
      desc: "Their e learning videos work well on websites learning management systems, YouTube and mobile learning applications."
    },
    {
      title: "Training Video Production Bangalore",
      icon: Icons.Building2,
      color: "#A068FF",
      desc: "Digiworq offers professional training video production services in Bangalore. They help with employee onboarding, skill development, product training and corporate learning programs. They make quality videos and use creative instructional design."
    }
  ];

  const faqs = [
    {
      q: "What e learning video services does Digiworq provide?",
      a: "Digiworq provides videos training videos, online course production, animated learning videos and complete e learning content creation services."
    },
    {
      q: "Why are e learning videos important?",
      a: "E learning videos are important because they help people remember things better make learning easier and provide flexible digital training experiences."
    },
    {
      q: "Do you provide e learning solutions?",
      a: "Yes Digiworq creates customized e learning videos and training content based on what businesses and schools need."
    },
    {
      q: "Can Digiworq create training videos?",
      a: "Yes Digiworq creates animated explainer videos and interactive learning modules for corporate training purposes."
    },
    {
      q: "Do you provide end-, to-end e learning video production?",
      a: "Yes Digiworq provides scripting, recording, animation, editing, voice over and post production services for e learning video creation."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-elearningvideos">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-elearningvideos" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">E Learning Video Makers in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.BookOpen size={16} /> Interactive E-Learning & Training Video Production Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                E Learning Video Makers in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a company that people trust to make e learning videos in Bangalore. They help businesses, schools and organizations make educational videos and training content.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  The e learning videos they make are designed to be engaging and interactive which helps people learn and remember things better.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book E-Learning Video Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="e-learning-videos" categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>E-Learning Video Deliverables & Capabilities:</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Produce Engaging E-Learning Videos with Digiworq?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq e-learning video makers to produce educational courses, training modules, and LMS video content.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book E-Learning Video Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
