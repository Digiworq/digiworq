import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

export default function CreativeServicePage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData.creative || { categoryTitle: "Creative Services", services: [] };
  const activeSub = data.services.find(s => 
    subServiceId && (
      s.id === subServiceId || 
      s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
      subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
      s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
    )
  );

  const deliverables = activeSub?.deliverables || [
    "Social Media Content Creation & Visuals",
    "Comprehensive Branding Solutions & Guidelines",
    "Infographic Design & Data Visualization",
    "Corporate Identity Suite & Packaging",
    "100% Vector Master Source Files (AI, EPS, SVG, PNG, PDF)"
  ];

  const creativeH2Sections = [
    {
      title: "Social Media Content Creation",
      icon: Icons.Share2,
      color: "#A068FF",
      desc: "We help brands create media content that engages their audience.",
      listHeader: "Our content creation services include:",
      listItems: [
        "Visuals",
        "Videos",
        "Reels",
        "Ad creatives",
        "Content strategies, for social platforms"
      ],
      footerDesc: "Our social media content helps brands be more visible interact with their audience and increase digital engagement."
    },
    {
      title: "Branding Solutions",
      icon: Icons.Palette,
      color: "#F5B800",
      desc: "We offer branding solutions that help businesses build an identity.",
      listHeader: "Our branding services include:",
      listItems: [
        "Logo design",
        "Brand strategy",
        "communication",
        "Digital branding"
      ],
      footerDesc: "Our creative team develops branding experiences that show what your business values and stands for."
    },
    {
      title: "Infographic Design",
      icon: Icons.FileText,
      color: "#10B981",
      desc: "Our infographic design services turn information into easy-to-understand graphics.",
      listHeader: "We design infographics for:",
      listItems: [
        "Marketing campaigns",
        "Presentations",
        "media",
        "Websites",
        "Business communication"
      ],
      footerDesc: "Our infographics help improve audience engagement and make information clearer."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-creative">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-creative" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub ? activeSub.title : "Creative Digital Agency"}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Sparkles size={16} /> Creative Branding & Design Agency
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                {activeSub ? activeSub.title : "Creative Digital Agency"}
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a digital agency that helps businesses build strong online brands. We focus on making experiences that have a big impact.
                </p>
                <p style={{ marginBottom: '12px' }}>
                  We use design, storytelling and smart marketing to help businesses connect with their target audience.
                </p>
                <p style={{ fontWeight: '700', color: '#F5B800' }}>
                  Our goal is to help businesses strengthen their presence.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Request Creative Quote</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId={subServiceId || 'creative'} categoryId="creative" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Creative Deliverables & Master Assets:</h3>
            <div className="deliverables-pills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 184, 0, 0.1)', border: '1px solid rgba(245, 184, 0, 0.3)', padding: '8px 16px', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={16} color="#F5B800" />
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
            {creativeH2Sections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${sec.color}44`, borderRadius: '24px', padding: '36px', boxShadow: `0 12px 32px ${sec.color}15` }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: `${sec.color}18`, border: `1px solid ${sec.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComp size={26} color={sec.color} />
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px', lineHeight: '1.3' }}>
                    {sec.title}
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '16px' }}>
                    {sec.desc}
                  </p>

                  <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px', marginBottom: '16px' }}>
                    <div style={{ color: sec.color, fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>
                      {sec.listHeader}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {sec.listItems.map((item, itemIdx) => (
                        <div key={itemIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '600' }}>
                          <Icons.CheckCircle2 size={16} color={sec.color} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic' }}>
                    {sec.footerDesc}
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
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(245, 184, 0, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Transform Your Brand's Visual Identity?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Collaborate with Digiworq senior art directors to elevate your brand story.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Creative Consultation</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
