import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function SocialMediaVideosPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Best Social Media Video Marketing Service in Bangalore Strategy",
    "Social Media Marketing Agencies Trend-Driven Content",
    "Video Marketing Agency Bangalore Audience Engagement",
    "Promotional Video Content & Brand Video Campaigns",
    "Reels & Short-Form Videos, Social Media Video Ads & Full Production"
  ];

  const mainH2Sections = [
    {
      title: "Social Media Marketing Agencies",
      icon: Icons.Share2,
      color: "#3B82F6",
      desc: "Digiworq is a company that helps businesses be popular on the internet. We make videos that're fun to watch and come up with plans to make our clients brands known on Instagram, Facebook, YouTube, LinkedIn and other social media sites."
    },
    {
      title: "Video Marketing Agency Bangalore",
      icon: Icons.Video,
      color: "#10B981",
      desc: "We make videos that help businesses talk to the people they want to reach. Our videos are made to be interesting and to help our clients marketing plans work better. We tell stories in a way and make sure our videos look good."
    },
    {
      title: "Promotional Video Content",
      icon: Icons.Sparkles,
      color: "#F5B800",
      desc: "We make videos that help our clients make their brands known sell their products and talk to their customers. These videos are designed to be interesting and to make people want to watch them."
    },
    {
      title: "Reels & Short-Form Videos",
      icon: Icons.Smartphone,
      color: "#A068FF",
      desc: "We make videos for Instagram, YouTube and other social media sites. These videos are made to be fun to watch and to reach a lot of people."
    },
    {
      title: "Brand Video Campaigns",
      icon: Icons.Award,
      color: "#EC4899",
      desc: "We make videos that show what our clients businesses are about. These videos are made to be professional and to help our clients brands be known."
    },
    {
      title: "Social Media Video Ads",
      icon: Icons.Target,
      color: "#8B5CF6",
      desc: "Digiworq makes videos that are used in paid advertising plans on Facebook, Instagram, YouTube and LinkedIn. These videos are made to help our clients get customers and to make people engage with their brands."
    },
    {
      title: "Social Video Production Bangalore",
      icon: Icons.Camera,
      color: "#F59E0B",
      desc: "We make videos from start to finish. This includes coming up with ideas, filming, editing and adding graphics. We do all of this to make sure our videos are fun to watch and to help our clients businesses."
    }
  ];

  const faqs = [
    {
      q: "What media video services does Digiworq provide?",
      a: "Digiworq makes all kinds of videos including reels, promotional videos, brand videos and videos for advertising plans."
    },
    {
      q: "Why are social media videos important for marketing?",
      a: "Social media videos help businesses talk to the people they want to reach. They make it easier for people to find our clients brands on the internet and to engage with them."
    },
    {
      q: "Do you create video ads for Instagram and Facebook?",
      a: "Yes we make videos that are used in advertising plans on Instagram, Facebook, LinkedIn, YouTube and other social media sites."
    },
    {
      q: "Can Digiworq handle video production?",
      a: "Yes we can make videos from start to finish. This includes coming up with ideas, filming, editing and adding graphics."
    },
    {
      q: "Do you offer customized social media video packages?",
      a: "Yes we make plans that are tailored to our clients needs. We look at their business goals the people they want to reach and what they want to achieve with their marketing plans. Then we make a plan that's just, for them."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-socialvideomarketing">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-socialvideomarketing" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Best Social Media Video Marketing Service in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Share2 size={16} /> Short-Form Video, Instagram Reels & Social Ads Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best Social Media Video Marketing Service in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a company that helps brands, businesses, startups and creators in Bangalore. We make videos that people want to watch.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  These videos help our clients reach people make their brand known and get people to engage with them on the internet. We do this by making videos and using smart marketing strategies.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Social Video Marketing Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="social-media-videos" categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Social Video Marketing Deliverables & Features:</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready for the Best Social Media Video Marketing in Bangalore?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq video marketing specialists to produce Instagram reels, short video ads, and viral content.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Social Video Marketing Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
