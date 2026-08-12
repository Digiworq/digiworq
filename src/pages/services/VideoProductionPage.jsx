import React from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

export default function VideoProductionPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData['video-production'] || { categoryTitle: "Video Production & Editing", services: [] };
  const activeSub = data.services.find(s => 
    subServiceId && (
      s.id === subServiceId || 
      s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
      subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
      s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
    )
  );

  const deliverables = activeSub?.deliverables || [
    "Indoor and Outdoor 4K Commercial Shoot",
    "Best Video Editing & Color Grading",
    "Best Corporate Shoot Videos & Brand Stories",
    "Social Media Videos Creation in Bangalore",
    "4K Master Video Export & Multi-Platform Cuts"
  ];

  const videoH2Sections = [
    {
      title: "Indoor and Outdoor Shooting",
      icon: Icons.Camera,
      color: "#EC4899",
      desc: "We offer shooting services for corporate videos, product shoots, promotional campaigns, events, interviews, and social media content. Our team uses the equipment and creative ideas to capture high-quality visuals that reflect your brand. We do both outdoor shoots."
    },
    {
      title: "Best Video Editing",
      icon: Icons.Film,
      color: "#F5B800",
      desc: "Our video editing services include making the video look like a movie fixing the colors adding effects, motion graphics, transitions and making sure the video is perfect for different online platforms. We make videos that grab peoples attention and are perfect for websites YouTube Instagram, Facebook and online ads."
    },
    {
      title: "Best Corporate Shoot Videos",
      icon: Icons.Video,
      color: "#3B82F6",
      desc: "Digiworq makes videos that help businesses show their culture, products, services what customers say and their brand story. Our corporate video solutions help brands communicate better and connect with their audience."
    },
    {
      title: "Social Media Videos Creation in Bangalore",
      icon: Icons.Share2,
      color: "#10B981",
      desc: "Our social media video creation service in Bangalore is about making engaging short videos, promotional videos, ad creatives, short content and branded videos for online platforms. We help brands get online presence, engagement and reach through creative visual storytelling, with social media videos. Digiworq creates social media videos."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-video">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-video" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub ? activeSub.title : "Video Editing Agency"}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(236, 72, 153, 0.12)', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: '30px', color: '#EC4899', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Tv size={16} /> Cinematic Video Production & Editing
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                {activeSub ? activeSub.title : "Video Editing Agency"}
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a video editing agency that helps brands make videos for marketing, branding, and online promotions.
                </p>
                <p style={{ fontWeight: '600', color: '#EC4899' }}>
                  We are good at making videos, editing them, adding motion graphics and telling stories in a creative way to get people more engaged and make brands more visible.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Video Shoot / Editing</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId={subServiceId || 'video-production'} categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Video Production Deliverables & Assets:</h3>
            <div className="deliverables-pills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)', padding: '8px 16px', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={16} color="#EC4899" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Structured SEO H2 Blocks Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {videoH2Sections.map((sec, idx) => {
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

      {/* Bottom CTA Banner */}
      <section style={{ padding: '60px 0 80px 0', background: '#05070F' }}>
        <div className="section-container text-center">
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Produce High-Impact Brand Videos?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Work with Digiworq directors and editors to launch your commercial video campaign.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Video Production Session</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
