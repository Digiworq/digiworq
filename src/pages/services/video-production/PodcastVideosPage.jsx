import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function PodcastVideosPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Podcast Production Agency in Bangalore Studio Setup",
    "Podcast Studio Bangalore Multi-Camera 4K Recording",
    "Professional Podcast Recording Audio & Video Mastering",
    "Multi-Camera Podcast Setup & Social Media Podcast Clips",
    "Audio & Video Podcast Production, Editing & Distribution"
  ];

  const mainH2Sections = [
    {
      title: "Podcast Studio Bangalore",
      icon: Icons.Mic,
      color: "#3B82F6",
      desc: "Our podcast studio in Bangalore is really well-equipped. We have microphones, nice lighting and cameras that can record from many angles. This helps us make podcasts that sound and look great."
    },
    {
      title: "Professional Podcast Recording",
      icon: Icons.Radio,
      color: "#10B981",
      desc: "We can record quality audio and video podcasts in our studio. Our team is always there to help with the stuff."
    },
    {
      title: "Multi-Camera Podcast Setup",
      icon: Icons.Video,
      color: "#F5B800",
      desc: "We can also make video podcasts with cameras. This makes the videos look really cinematic and engaging."
    },
    {
      title: "Top Podcast Services in Bangalore",
      icon: Icons.Award,
      color: "#A068FF",
      desc: "Digiworq offers a lot of services to help people make podcasts. We plan, script, record, edit and distribute podcasts. We want to help businesses and creators make podcasts that really work."
    },
    {
      title: "Audio & Video Podcast Production",
      icon: Icons.Volume2,
      color: "#EC4899",
      desc: "We make podcasts that're ready for YouTube, Spotify, Instagram, LinkedIn and other platforms. We want to make sure our podcasts look and sound great everywhere."
    },
    {
      title: "Podcast Editing & Post Production",
      icon: Icons.Sliders,
      color: "#8B5CF6",
      desc: "Our team edits the audio and video adds subtitles and makes sure everything is perfect before we finish."
    },
    {
      title: "Professional Podcast Services",
      icon: Icons.Sparkles,
      color: "#F59E0B",
      desc: "We offer customized podcast services for startups, brands, schools, influencers and content creators. We help with everything from start to finish."
    },
    {
      title: "Corporate Podcast Production",
      icon: Icons.Building2,
      color: "#10B981",
      desc: "We help companies make podcasts that build their brand and engage their audience."
    },
    {
      title: "Social Media Podcast Clips",
      icon: Icons.Share2,
      color: "#3B82F6",
      desc: "We can turn podcasts into videos for social media. This helps podcasts reach people and get more engagement."
    }
  ];

  const faqs = [
    {
      q: "What podcast services does Digiworq provide?",
      a: "Digiworq provides podcast recording, video podcast production, editing, studio setup, post-production and content optimization services."
    },
    {
      q: "Do you provide video podcast production services?",
      a: "Yes Digiworq creates video podcasts with multi-camera setups, lighting, editing and post-production support."
    },
    {
      q: "Can Digiworq help with podcast editing?",
      a: "Yes Digiworq provides editing, video editing, subtitles, sound enhancement and final production services."
    },
    {
      q: "Why choose Digiworq as a podcast production agency in Bangalore?",
      a: "Digiworq offers professional production quality, advanced recording setups, creative storytelling and complete end-, to-end podcast solutions."
    },
    {
      q: "Do you provide podcast production packages?",
      a: "Yes Digiworq provides podcast production services based on content goals, production requirements and platform needs."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-podcastvideos">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-podcastvideos" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Podcast Production Agency in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Mic size={16} /> Multi-Cam Video Podcast Studio & Audio Editing
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Podcast Production Agency in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a podcast production agency in Bangalore that helps people make podcasts. We record, edit and produce podcasts for businesses, creators, influencers and brands.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Our goal is to create high-quality podcasts that tell stories and sound really good.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Podcast Studio Session</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="podcast-videos" categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Podcast Deliverables & Studio Features:</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Launch Your Podcast with Digiworq Bangalore?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq podcast producers to record in our multi-camera studio and create social media podcast clips.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Podcast Production Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
