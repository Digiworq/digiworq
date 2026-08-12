import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function VoiceOverRecordingsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Best Voice Over Services in Bangalore Studio Production",
    "Commercial Voice Overs & Corporate Narration Services",
    "Multilingual Voice Overs (Kannada, Hindi, English, Tamil, Telugu)",
    "Voice Over Recording Service in Bangalore & Dubbing",
    "Popular Voice Over Artists & Audio for Digital Platforms"
  ];

  const mainH2Sections = [
    {
      title: "Popular Voice-Over Services",
      icon: Icons.Mic,
      color: "#3B82F6",
      desc: "Our voice-over services include:",
      bullets: [
        "voice overs",
        "Corporate narration",
        "Explainer videos",
        "IVR recordings",
        "Dubbing",
        "Podcast narration",
        "e-learning voice overs",
        "Promotional audio content"
      ]
    },
    {
      title: "Commercial Voice Overs",
      icon: Icons.Sparkles,
      color: "#10B981",
      desc: "Create engaging voice overs for advertisements and promotional campaigns. Our voice overs are perfect for branded video content."
    },
    {
      title: "Corporate Narration Services",
      icon: Icons.Building,
      color: "#F5B800",
      desc: "We offer narration services for company profile videos, presentations and training modules. Our narration services help with business communication."
    },
    {
      title: "Multilingual Voice Overs",
      icon: Icons.Globe,
      color: "#A068FF",
      desc: "We provide voice recordings in Kannada, Hindi, English, Tamil, Telugu and other regional languages."
    },
    {
      title: "Voice Over Recording Service in Bangalore",
      icon: Icons.Radio,
      color: "#EC4899",
      desc: "Digiworq delivers studio-quality voice over recording services in Bangalore. We use recording equipment and professional sound engineering.",
      bullets: [
        "Our team provides high-quality audio production for broadcast platforms.",
        "We have recording setups with noise-free audio production and sound enhancement."
      ]
    },
    {
      title: "Dubbing & Audio Production",
      icon: Icons.Sliders,
      color: "#8B5CF6",
      desc: "We offer dubbing, audio editing, sound mixing and post-production solutions for videos and media projects."
    },
    {
      title: "Popular Voice Over Artists",
      icon: Icons.Users,
      color: "#F59E0B",
      desc: "We work with voice over artists. Our artists are suitable for commercials, corporate videos, podcasts, e-learning modules, animation videos and social media campaigns.",
      bullets: [
        "Our team helps brands find the voice style and tone based on project requirements.",
        "We have male and female voice artists for different tones, accents and content styles."
      ]
    },
    {
      title: "Voice Overs for Digital Platforms",
      icon: Icons.Share2,
      color: "#3B82F6",
      desc: "We optimize production for YouTube videos, podcasts, social media ads and digital marketing campaigns."
    }
  ];

  const faqs = [
    {
      q: "What voice over services does Digiworq provide?",
      a: "Digiworq provides voice overs, corporate narration, IVR recordings, dubbing, podcast narration e-learning voice overs and multilingual audio production services. We offer a range of voice over services."
    },
    {
      q: "Do you provide voice over services?",
      a: "Yes we offer voice over recordings in languages including Kannada, Hindi, English, Tamil, Telugu and more. Our team provides voice over services."
    },
    {
      q: "Can Digiworq provide voice artists?",
      a: "Yes we work with male and female voice artists for advertisements, corporate videos, podcasts and promotional content. Our voice artists are professional."
    },
    {
      q: "Do you provide studio-quality recording services?",
      a: "Yes we provide studio-quality recording, dubbing, sound mixing and audio editing services. Our team offers studio-quality recording services."
    },
    {
      q: "Why choose Digiworq for voice over services in Bangalore?",
      a: "Digiworq provides quality audio production and professional voice artists. We offer delivery and customized voice over solutions for businesses and brands. Our voice over services are perfect for companies, in Bangalore."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-voiceoverrecordings">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-voiceoverrecordings" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Best Voice Over Services in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Mic size={16} /> Multilingual Sound Studio & Voice Artist Agency
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best Voice Over Services in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq offers voice over services in Bangalore for businesses and brands. We create voice overs for advertisements, elearning content, corporate videos, podcasts and digital campaigns.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6', marginBottom: '16px' }}>
                  Our voice recordings have audio and are made by experienced voice artists.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
                    <Icons.CheckCircle2 size={16} color="#3B82F6" /> We provide high-quality voice recordings for industries.
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
                    <Icons.CheckCircle2 size={16} color="#3B82F6" /> Our team uses sound production to create impactful audio content.
                  </li>
                </ul>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Voice Over Audition</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="voice-over-recordings" categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Voice Over Deliverables & Audio Capabilities:</h3>
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
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: sec.bullets ? '16px' : '0' }}>
                    {sec.desc}
                  </p>
                  {sec.bullets && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {sec.bullets.map((item, bIdx) => (
                        <li key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
                          <Icons.CheckCircle2 size={16} color={sec.color} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready for Studio-Quality Voice Over Services in Bangalore?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq sound engineers to hire voice artists, record multilingual narration, and produce dubbing for video campaigns.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Voice Over Recording Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
