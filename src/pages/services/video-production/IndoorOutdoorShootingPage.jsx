import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function IndoorOutdoorShootingPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Indoor Video Shooting Services Studio & Product Setup",
    "Outdoor Video Shooting Services Cinematic & Drone Shoots",
    "Video Production Company in Bangalore Scripting to Final Cut",
    "Best Video Shooting Services Near Me Custom Packages",
    "4K Cinema Cameras, Professional Audio, Lighting & Crew"
  ];

  const mainH2Sections = [
    {
      title: "Indoor Video Shooting Services",
      icon: Icons.Home,
      color: "#3B82F6",
      desc: "Their indoor video shooting services are great for making videos interviewing people shooting products creating studio content training videos and commercial content. They make sure the videos look good by using lighting setting up good audio and directing the shoot creatively."
    },
    {
      title: "Outdoor Video Shooting Services",
      icon: Icons.Sun,
      color: "#10B981",
      desc: "Digiworq provides outdoor video shooting services for events promoting brands, real estate projects, travel content, lifestyle shoots and making cinematic videos. Their team takes high-quality photos and videos using cameras and techniques."
    },
    {
      title: "Video Production Company in Bangalore",
      icon: Icons.Video,
      color: "#F5B800",
      desc: "Digiworq is a trusted video production company in Bangalore. They offer video production services from coming up with ideas to scripting, shooting, editing, adding motion graphics and finishing the video."
    },
    {
      title: "Best Video Shooting Services Near Me",
      icon: Icons.MapPin,
      color: "#A068FF",
      desc: "Looking for video shooting services near you? Digiworq creates customized videos for businesses, influencers, startups and brands. They make effective visual content."
    }
  ];

  const faqs = [
    {
      q: "What types of video shooting services do you offer?",
      a: "Digiworq offers shoots, outdoor shoots, corporate videos, promotional videos, product videos, event coverage and commercial video production services."
    },
    {
      q: "Do you provide video editing services?",
      a: "Yes they offer editing services including editing, color correction, motion graphics and sound enhancement."
    },
    {
      q: "Can Digiworq handle video shoots?",
      a: "Yes their team specializes in outdoor video shoots for brands, events and promotional campaigns."
    },
    {
      q: "Why choose Digiworq for video production, in Bangalore?",
      a: "Digiworq provides ideas, professional equipment, experienced videographers and high-quality production services tailored to your needs."
    },
    {
      q: "Do you offer video production packages?",
      a: "Yes they provide customized video production packages based on project requirements and business goals."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-videoshoot">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-videoshoot" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Professional Video Shoot in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Video size={16} /> 4K Indoor & Outdoor Cinema Production Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Professional Video Shoot in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq offers video shoot services in Bangalore for brands, businesses, events and promotional campaigns.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  They specialize in making high-quality videos, both indoors and outdoors. They use equipment and editing techniques to create videos that meet your needs.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Video Shoot Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="indoor-and-outdoor-shooting" categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Video Production Deliverables & Equipment:</h3>
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
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Frequently Asked Questions</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready for a Professional Video Shoot in Bangalore?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq videographers to plan your indoor studio or outdoor cinematic video shoot.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Video Production Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
