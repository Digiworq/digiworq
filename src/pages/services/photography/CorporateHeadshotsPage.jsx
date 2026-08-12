import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function CorporateHeadshotsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Best Corporate Photographers in Bangalore Executive Headshots",
    "Executive Portrait Photography & Team & Office Photography",
    "Popular Corporate Photographers & LinkedIn & Business Headshots",
    "Commercial Photographers & Branding & Promotional Photography",
    "Corporate Lifestyle Photography & On-Location Office Shoots"
  ];

  const mainH2Sections = [
    {
      title: "Corporate Photographers",
      icon: Icons.Building2,
      color: "#3B82F6",
      desc: "Our photographers are experienced and take high-quality photos. We help companies take photos for their websites, LinkedIn and marketing materials.",
      bullets: [
        "Our photos are designed to help businesses look professional and modern."
      ],
      subSections: [
        {
          subTitle: "Executive Portrait Photography",
          subDesc: "We take photos of executives for their profiles, PR materials and branding."
        },
        {
          subTitle: "Team & Office Photography",
          subDesc: "We capture photos of teams and offices to show company culture and professionalism."
        }
      ]
    },
    {
      title: "Popular Corporate Photographers",
      icon: Icons.Users,
      color: "#10B981",
      desc: "Digiworq provides photoshoots for professionals, entrepreneurs and businesses. Our photos are of quality and we edit them to make them look great.",
      bullets: [
        "We take photos for professionals, startups and big companies."
      ],
      subSections: [
        {
          subTitle: "LinkedIn & Business Headshots",
          subDesc: "We take headshots for LinkedIn profiles, websites, resumes and presentations."
        },
        {
          subTitle: "On-Location Corporate Shoots",
          subDesc: "We take photos at offices, studios and business locations in Bangalore."
        }
      ]
    },
    {
      title: "Commercial Photographers",
      icon: Icons.Camera,
      color: "#F5B800",
      desc: "Our photography services help businesses create visuals for marketing campaigns, ads, websites and promotions.",
      bullets: [
        "We take photos for businesses to use in their marketing."
      ],
      subSections: [
        {
          subTitle: "Branding & Promotional Photography",
          subDesc: "We take photos for businesses to use in their branding and marketing."
        },
        {
          subTitle: "Corporate Lifestyle Photography",
          subDesc: "We capture moments in the workplace to show company culture and professionalism."
        }
      ]
    },
    {
      title: "Corporate Headshots",
      icon: Icons.UserCheck,
      color: "#A068FF",
      desc: "We create headshots that help individuals and businesses look credible and professional."
    }
  ];

  const faqs = [
    {
      q: "What corporate photography services does Digiworq provide?",
      a: "We provide headshots, executive portraits, team photos, office photos, branding shoots and commercial photography."
    },
    {
      q: "Do you provide LinkedIn and professional headshots?",
      a: "Yes we create headshots for LinkedIn, websites, resumes and presentations."
    },
    {
      q: "Can Digiworq handle team and office photography?",
      a: "Yes we take photos of teams and offices for businesses of all sizes."
    },
    {
      q: "Do you provide on-location photography in Bangalore?",
      a: "Yes we take photos at offices coworking spaces, studios and business locations in Bangalore."
    },
    {
      q: "Why choose Digiworq, for corporate photography services?",
      a: "We offer photographers, high-quality editing and customized photography solutions."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-corporateheadshots">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-corporateheadshots" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Photography Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Best Corporate Photographers in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Building2 size={16} /> Executive Headshots & Team Photography Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best Corporate Photographers in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq offers professional photography services for businesses in Bangalore. We take photos for companies, startups, executives and teams. Our photos help businesses look professional and improve their branding.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3B82F6', fontWeight: '600' }}>
                    <Icons.CheckCircle2 size={16} color="#3B82F6" /> We specialize in taking headshots of people photos of teams and pictures for businesses.
                  </li>
                </ul>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Corporate Photography Session</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="corporate-headshots-and-team-photography" categoryId="photography" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Corporate Photography Deliverables:</h3>
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
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: sec.bullets ? '14px' : '0' }}>
                    {sec.desc}
                  </p>
                  {sec.bullets && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {sec.bullets.map((bItem, bIdx) => (
                        <li key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
                          <Icons.CheckCircle2 size={16} color={sec.color} />
                          <span>{bItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Book Corporate Photographers in Bangalore with Digiworq?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq corporate photographers to shoot executive headshots, team portraits, office lifestyle photos, and LinkedIn business profiles.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Corporate Photography Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
