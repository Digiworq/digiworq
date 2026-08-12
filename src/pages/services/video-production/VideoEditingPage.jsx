import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function VideoEditingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Video Editing Services for Instagram Reels, Shorts & Ads",
    "Video Editing Services Near Me Fast Post-Production",
    "Digital Video Editing Services Motion Graphics & FX",
    "Post Production Videos Color Grading & Audio Enhancement",
    "4K Export Master Files in All Aspect Ratios (16:9, 9:16, 1:1)"
  ];

  const mainH2Sections = [
    {
      title: "Video Editing Services",
      icon: Icons.Scissors,
      color: "#3B82F6",
      desc: "The video editing services we offer include videos, promotional videos, social media reels, YouTube editing, product videos and commercial content. We want to deliver appealing videos that enhance audience engagement and brand communication. Our goal is to make videos that people will watch and remember."
    },
    {
      title: "Video Editing Services Near Me",
      icon: Icons.MapPin,
      color: "#10B981",
      desc: "Are you looking for video editing services near you? Digiworq offers customized editing solutions. We have a fast turnaround time and creative storytelling. We also provide quality post production support for businesses and creators in Bangalore. Our team is here to help you with all your video editing needs."
    },
    {
      title: "Digital Video Editing Services",
      icon: Icons.Monitor,
      color: "#F5B800",
      desc: "We provide video editing services using advanced editing tools and creative production techniques. Our team works on motion graphics, visual effects, audio enhancement, subtitles and platform optimized video content. We do this for marketing and branding purposes. We want to help you make videos that stand out."
    },
    {
      title: "Post Production Videos",
      icon: Icons.Film,
      color: "#A068FF",
      desc: "Our post production video services include video cutting, color grading, sound editing, transitions, animation effects and final rendering. We create professional video content for all digital platforms. Our goal is to make sure your videos look great and sound great."
    }
  ];

  const faqs = [
    {
      q: "What video editing services does Digiworq offer?",
      a: "We provide video editing, promotional videos reels editing, YouTube editing, social media videos and post production services. We do all kinds of video editing."
    },
    {
      q: "Do you provide post production video services?",
      a: "Yes we offer post production services. This includes color correction, sound editing, motion graphics and final video rendering. We take care of everything."
    },
    {
      q: "Can Digiworq edit media reels and YouTube videos?",
      a: "Yes we create optimized video edits for Instagram reels YouTube videos, ads and other digital platforms. We know how to make videos that work well on media."
    },
    {
      q: "Why choose Digiworq as a video editing agency in Bangalore?",
      a: "We provide editing solutions, professional quality output, fast delivery and customized video production services. We are a choice, for anyone who needs video editing services."
    },
    {
      q: "Do you offer video editing packages?",
      a: "Yes we provide video editing packages. These are based on project requirements, video duration and production goals. We can work with you to create a package that fits your needs."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-videoediting">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-videoediting" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Best Video Editing Agency Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Scissors size={16} /> Post-Production, DaVinci Color Grading & Motion Graphics Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best Video Editing Agency Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a video editing agency that provides video editing services in Bangalore. We work with brands, businesses, creators and marketing campaigns.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Our team transforms footage into high quality visual content. We do this with editing and smooth transitions. We also do sound design, color correction and engaging storytelling for platforms.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Video Editing Project</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="video-editing" categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Video Editing Deliverables & Post-Production Features:</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Edit High-Converting Videos with Digiworq Bangalore?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with our video editing specialists to craft stunning social media reels, YouTube videos, and commercial edits.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Video Editing Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
