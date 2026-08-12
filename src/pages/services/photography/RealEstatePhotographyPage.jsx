import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function RealEstatePhotographyPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Property Photography in Bangalore Interior & Exterior Visuals",
    "Real Estate Photoshoot Bangalore Residential & Commercial",
    "Commercial Property Photography Bangalore Offices & Retail",
    "Property Photographer Near Me Drone Aerial & 360 Walkthroughs",
    "Professional Real Estate Photographer HDR & High-Res Masters"
  ];

  const mainH2Sections = [
    {
      title: "Real Estate Photoshoot Bangalore",
      icon: Icons.Home,
      color: "#3B82F6",
      desc: "Our real estate photoshoot services highlight the features of a property. We focus on layout, lighting and aesthetics to make properties more attractive to buyers or clients.",
      subSections: [
        {
          subTitle: "Residential Property Photography",
          subDesc: "We offer professional photography services for homes, apartments, villas and residential projects. Our photos are resolution and visually appealing."
        },
        {
          subTitle: "Interior & Exterior Photography",
          subDesc: "We capture spaces and exterior architecture with professional lighting and advanced photography techniques. This helps showcase properties in the possible light."
        }
      ]
    },
    {
      title: "Commercial Property Photography Bangalore",
      icon: Icons.Building,
      color: "#10B981",
      desc: "Digiworq provides photography services for properties in Bangalore. Our clients include office spaces, retail outlets, hotels, commercial buildings, coworking spaces and real estate marketing campaigns.",
      subSections: [
        {
          subTitle: "Corporate & Commercial Spaces",
          subDesc: "We create visuals for offices, business spaces and commercial properties. Our photos are optimized for websites and marketing materials."
        },
        {
          subTitle: "Architectural Photography",
          subDesc: "We showcase details, construction quality and design aesthetics with creative photography. This helps highlight the features of a property."
        }
      ]
    },
    {
      title: "Property Photographer Near Me",
      icon: Icons.MapPin,
      color: "#F5B800",
      desc: "Looking for a property photographer? Digiworq offers customized photography solutions with equipment, drone photography, editing and fast turnaround services across Bangalore.",
      subSections: [
        {
          subTitle: "Aerial Photography",
          subDesc: "We capture views of properties and surrounding landscapes with high-quality drone photography services."
        },
        {
          subTitle: "Virtual Property Shoots",
          subDesc: "We create visual experiences with 360-degree walkthroughs and virtual property photography solutions."
        }
      ]
    },
    {
      title: "Professional Real Estate Photographer",
      icon: Icons.Camera,
      color: "#A068FF",
      desc: "Our photographers focus on creating engaging content that improves property listings, promotions, digital marketing campaigns and online property visibility."
    }
  ];

  const faqs = [
    {
      q: "What real estate photography services does Digiworq provide?",
      a: "Digiworq provides property photography, commercial property photography, architectural photography, drone shoots and virtual property walkthrough services. We offer a range of services to meet the needs of our clients."
    },
    {
      q: "Do you provide drone photography for properties?",
      a: "Yes we offer professional drone photography services for estate and commercial property projects."
    },
    {
      q: "Can Digiworq handle commercial property photography?",
      a: "Yes we provide photography services for offices, retail spaces, hotels, coworking spaces and commercial buildings. Our team has experience working with properties"
    },
    {
      q: "Do you provide edited high-resolution property images?",
      a: "Yes we provide edited high-resolution images optimized for websites, social media, brochures and property listings."
    },
    {
      q: "Why choose Digiworq for property photography, in Bangalore?",
      a: "Digiworq offers photographers, creative property visuals, drone photography, premium editing and customized photography solutions. We are a team of experts dedicated to delivering high-quality results."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-realestatephotography">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-realestatephotography" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Photography Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Property Photography in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Home size={16} /> Real Estate, Architectural & Interior Photography Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Property Photography in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq offers professional photography services for properties in Bangalore. We work with real estate companies, builders, architects, interior designers and commercial property owners.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Our goal is to create high-quality visuals of properties that showcase interiors, exteriors, architecture and spaces. We use photography techniques and professional editing to make properties look their best.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Property Shoot Session</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="real-estate-photography" categoryId="photography" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Real Estate Photography Deliverables:</h3>
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
                  {sec.subSections && sec.subSections.map((sub, sIdx) => (
                    <div key={sIdx} style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '6px' }}>
                        {sub.subTitle}
                      </h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                        {sub.subDesc}
                      </p>
                    </div>
                  ))}
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
                      <p>{faq.a}</p>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Shoot Your Property in Bangalore with Digiworq?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq real estate photographers for residential walkthroughs, commercial space shoots, architectural photography, and drone aerial photos.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Real Estate Photography Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
