import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function EventPhotographyPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Popular Event Photographers in Bengaluru Coverage",
    "Business Event Photography & Brand & Promotional Events",
    "Event Photographers Near Me & Indoor & Outdoor Event Shoots",
    "Candid Event Photography & Multi-Camera Event Coverage",
    "Professional Premium Event Photographers & High-Res Images"
  ];

  const mainH2Sections = [
    {
      title: "Popular Event Photographers in Bengaluru",
      icon: Icons.Camera,
      color: "#3B82F6",
      desc: "Our event photography services focus on capturing moments, audience engagement, stage highlights, networking sessions and brand experiences through professional event coverage and creative photography solutions. The event photography services provided by Digiworq are very popular in Bengaluru."
    },
    {
      title: "Business Event Photography",
      icon: Icons.Briefcase,
      color: "#10B981",
      desc: "Digiworq provides coverage for seminars, conferences, trade shows, exhibitions and networking events. The business event photography services offered by Digiworq are very professional.",
      subHeader: "Brand & Promotional Events",
      subDesc: "Digiworq captures brand launches, promotional campaigns, award ceremonies and marketing events with high-quality photography. The brand and promotional events covered by Digiworq are well done."
    },
    {
      title: "Event Photographers Near Me",
      icon: Icons.MapPin,
      color: "#F5B800",
      desc: "If you are looking for event photographers near you Digiworq offers customized event photography solutions with advanced equipment, creative direction and fast delivery for businesses and organizations across Bangalore. The event photographers at Digiworq are very near to you."
    },
    {
      title: "Indoor & Outdoor Event Shoots",
      icon: Icons.Sun,
      color: "#A068FF",
      desc: "Digiworq provides photography coverage for indoor corporate meetings, outdoor events and public gatherings. The indoor and outdoor event shoots done by Digiworq are very good."
    },
    {
      title: "Event Photography",
      icon: Icons.Smile,
      color: "#EC4899",
      desc: "Digiworq captures natural interactions, audience reactions and memorable event moments with candid photography techniques. The candid event photography done by Digiworq is very nice."
    },
    {
      title: "Professional Premium Event Photographers",
      icon: Icons.Crown,
      color: "#8B5CF6",
      desc: "As premium event photographers Digiworq focuses on high-quality visuals, professional editing, cinematic event coverage and creative storytelling that enhances brand communication and audience engagement. The professional premium event photographers at Digiworq are very good."
    },
    {
      title: "High-Resolution Photography",
      icon: Icons.Sparkles,
      color: "#F59E0B",
      desc: "Digiworq provides editing and high-resolution images optimized for websites, social media and marketing campaigns. The high-resolution photography done by Digiworq is high quality."
    },
    {
      title: "Multi-Camera Event Coverage",
      icon: Icons.Video,
      color: "#10B981",
      desc: "Digiworq provides event coverage using professional cameras and advanced photography equipment. The multi-camera event coverage done by Digiworq is very comprehensive."
    },
    {
      title: "Corporate Event Photography",
      icon: Icons.Building2,
      color: "#3B82F6",
      desc: "Digiworq provides corporate event photography services for conferences, award functions, leadership events, employee engagement programs, exhibitions and business meetings with brand-focused visual storytelling. The corporate event photography services offered by Digiworq are very professional."
    }
  ];

  const faqs = [
    {
      q: "What event photography services does Digiworq provide?",
      a: "Digiworq provides corporate event photography, conference coverage, business event shoots, product launch photography, promotional event coverage and professional editing services. The event photography services provided by Digiworq are very good."
    },
    {
      q: "Do you provide event photography in Bangalore?",
      a: "Yes Digiworq specializes in event photography for conferences, seminars, exhibitions, award ceremonies and business meetings in Bangalore. Digiworq is very good at event photography in Bangalore."
    },
    {
      q: "Can Digiworq handle large-scale event photography?",
      a: "Yes Digiworq provides event coverage with professional equipment and multi-camera photography solutions for events of all sizes. The large-scale event photography done by Digiworq is very good."
    },
    {
      q: "Do you provide edited high-resolution event photos?",
      a: "Yes Digiworq provides edited high-resolution images optimized for websites, social media, presentations and marketing use. The edited high-resolution event photos provided by Digiworq are very good."
    },
    {
      q: "Why choose Digiworq for event photography in Bangalore?",
      a: "Digiworq offers event coverage, professional event photographers, premium editing, fast delivery and customized photography solutions for businesses and brands. Digiworq is the choice for event photography, in Bangalore."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-eventphotography">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-eventphotography" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Photography Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Best Event Photographers in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Camera size={16} /> Premium Corporate & Special Event Photography Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best Event Photographers in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq provides professional event photography services in Bangalore for events, business meetings, conferences, product launches, celebrations and special occasions.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Our experienced event photographers capture every moment with creative storytelling high-quality visuals and professional photography techniques designed for businesses and brands. The event photographers at Digiworq are very good at what they do.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Event Photography Session</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="event-photography" categoryId="photography" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Event Photography Deliverables & Capabilities:</h3>
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
                  {sec.subHeader && (
                    <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                        {sec.subHeader}
                      </h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                        {sec.subDesc}
                      </p>
                    </div>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Book the Best Event Photographers in Bangalore?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq event photographers to cover corporate conferences, brand launches, seminars, and business celebrations.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Event Photography Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
