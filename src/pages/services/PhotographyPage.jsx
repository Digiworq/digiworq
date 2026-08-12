import React from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

export default function PhotographyPage({ subServiceId, onOpenContact, onBackHome }) {
  const data = allCategoriesData.photography || { categoryTitle: "Photography Services", services: [] };
  const activeSub = data.services.find(s => 
    subServiceId && (
      s.id === subServiceId || 
      s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
      subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
      s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
    )
  );

  const deliverables = activeSub?.deliverables || [
    "High-End Event Photography & Corporate Coverage",
    "Model Photoshoot & Fashion Campaign Styling",
    "Photography Studio Near Me & Product Shoots",
    "E-Commerce Product Photography & Lifestyle Visuals",
    "Retouched High-Res Master Photo Export Files"
  ];

  const photoH2Sections = [
    {
      title: "Digital Printing Services",
      icon: Icons.Printer,
      color: "#F5B800",
      desc: "Our digital printing services include things like brochures, business cards, flyers, banners, catalogs, stickers and promotional materials. We make sure they are produced with precision and the print quality is very good. We focus on getting things done quickly keeping the quality consistent and giving businesses the printing solutions they need."
    },
    {
      title: "Poster Printing",
      icon: Icons.Image,
      color: "#EC4899",
      desc: "We offer poster printing services for branding, events, advertising campaigns, retail promotions and corporate communication. Our poster designs are created to help businesses."
    },
    {
      title: "Event Photography",
      icon: Icons.Camera,
      color: "#3B82F6",
      desc: "Our event photography services cover things like events, product launches, conferences, brand activations, parties and special occasions. We take photos of moments audience interactions and professional event visuals that help businesses and individuals remember good times."
    },
    {
      title: "Model Photoshoot",
      icon: Icons.UserCheck,
      color: "#A068FF",
      desc: "We provide model photoshoot services for portfolios, fashion campaigns, brand promotions and social media content. Our team focuses on styling, lighting, poses and editing to create engaging photographs that show personality and brand identity."
    },
    {
      title: "Photography Studio Near Me",
      icon: Icons.MapPin,
      color: "#10B981",
      desc: "If you are looking for a photography studio near you you can count on Digiworq for high quality studio photography, product shoots, fashion photography, corporate portraits and commercial content creation. We use equipment and give creative direction."
    },
    {
      title: "Photography Studio",
      icon: Icons.Aperture,
      color: "#F59E0B",
      desc: "Our photography studio solutions include shoots, product photography, commercial shoots, lifestyle photography and branding visuals. We create content, for websites e-commerce, advertising campaigns and social media platforms. We make sure the content is visually appealing and helps businesses have a presence and engage with their audience. Digiworq photography studio is the place to go for photography services."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-photo">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-photo" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub ? activeSub.title : "Photography Services in Bangalore"}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Camera size={16} /> Commercial Studio & Product Photography
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                {activeSub ? activeSub.title : "Photography Services in Bangalore"}
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq provides printing services for businesses, brands, events and marketing campaigns. We deliver high quality printing solutions that help businesses create brand communication through creative designs good materials and modern printing technology.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Digiworq also offers photography services to help brands, businesses and individuals take good photos for marketing, branding, events and digital content. Our photography solutions combine storytelling, high quality production and modern editing techniques to create visual experiences.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Studio / Event Photoshoot</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId={subServiceId || 'photography'} categoryId="photography" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Photography Deliverables & Assets:</h3>
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

      {/* Structured SEO H2 Blocks Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {photoH2Sections.map((sec, idx) => {
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
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Capture High-End Brand & Product Visuals?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq professional photographers to schedule your studio or event shoot.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Photography Session</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
