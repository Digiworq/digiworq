import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function SoftwareDevPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Custom Software Development Services Architecture",
    "Web Application Development & Scalable SaaS Platforms",
    "Enterprise Software Solutions & Process Automation",
    "Mobile App, Cloud Services & API Integrations",
    "Full-Lifecycle Support, Maintenance & Agile Engineering"
  ];

  const serviceBullets = [
    {
      title: "Custom software development services",
      desc: "we can build software that's just right for our customers businesses. We use technologies and work in a way that is fast and flexible.",
      icon: Icons.Code2,
      color: "#3B82F6"
    },
    {
      title: "Web application development",
      desc: "we make web applications that work well and are easy to use. This makes our customers happy. Helps their businesses run smoothly.",
      icon: Icons.Globe,
      color: "#10B981"
    },
    {
      title: "Enterprise software solutions",
      desc: "we make software that helps big companies work better and be more productive.",
      icon: Icons.Building2,
      color: "#F5B800"
    },
    {
      title: "SaaS application development",
      desc: "we make cloud-based platforms that're safe work well and can be used by many people.",
      icon: Icons.Cloud,
      color: "#A068FF"
    },
    {
      title: "App and API integration",
      desc: "we help our customers connect their mobile applications, payment systems and cloud services so that everything works together smoothly.",
      icon: Icons.Layers,
      color: "#EC4899"
    }
  ];

  const whyChooseBullets = [
    "Our software developers are very experienced.",
    "Our solutions are safe. Can be used by many people.",
    "We work in a way that's fast and flexible.",
    "We make applications that're easy to use and look good.",
    "We provide support from start to finish.",
    "Our software development services in Bangalore are affordable."
  ];

  const h2Faqs = [
    {
      q: "What kind of software development services does Digiworq offer?",
      a: "We provide custom software development, web applications, SaaS platforms, enterprise software, API integrations and cloud-based solutions. Digiworq offers all these services to help our customers."
    },
    {
      q: "Why choose a software development company in Bangalore?",
      a: "Bangalore is a city in India that is known for technology and innovation. There are skilled developers and new technologies available here. This makes it a great place to find a software development company like Digiworq."
    },
    {
      q: "Do you provide custom software solutions for startups?",
      a: "Yes Digiworq develops custom software solutions for startups and growing businesses. We make software that's just right for them and does not cost too much."
    },
    {
      q: "How long does software development take?",
      a: "It depends on how complex the project's what features are needed. We usually complete projects in phases using an flexible methodology. Digiworq and our team work together to make this happen."
    },
    {
      q: "Do you offer software maintenance and support?",
      a: "Yes we provide maintenance, upgrades, bug fixing and technical support services. Digiworq is always here to help our customers."
    },
    {
      q: "Can Digiworq develop SaaS applications?",
      a: "Yes we specialize in SaaS application development, with cloud infrastructure and scalable architecture. Digiworq makes SaaS applications that're safe and work well."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-softwaredev">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-softwaredev" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Technology Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Software Development Company Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Code2 size={16} /> Enterprise Software & SaaS Platform Engineering Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Software Development Company Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a software development company in Bangalore that people trust. We make solutions that are new and can be used by many people.
                </p>
                <p style={{ marginBottom: '12px' }}>
                  Our team is very good at making custom software, web applications and business automation services that're just right for each customer.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  As a company that is growing in India we want to make software that's safe works well and is easy to use. This kind of software helps businesses grow and change in the world.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Software Strategy Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="software-development" title="Software Development" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Software Engineering Deliverables & Capabilities:</h3>
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

      {/* Services We Offer Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>We have services that can help our customers.</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              Custom software, web applications, SaaS platforms, enterprise solutions, and API integrations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {serviceBullets.map((item, sIdx) => {
              const IconComp = item.icon;
              return (
                <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${item.color}44`, borderRadius: '20px', padding: '32px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${item.color}18`, border: `1px solid ${item.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <IconComp size={24} color={item.color} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: '1.65' }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* H2: Why do people choose Digiworq? */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '24px', padding: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '24px' }}>Why do people choose Digiworq?</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {whyChooseBullets.map((wItem, wIdx) => (
                <div key={wIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '16px', color: '#FFFFFF', fontSize: '1rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={20} color="#3B82F6" />
                  <span>{wItem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section (H2 FAQ Headings as requested) */}
      <section style={{ padding: '80px 0', background: '#0A0E1A' }}>
        <div className="section-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ color: '#3B82F6', fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>People often ask us some questions.</p>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#FFFFFF' }}>Software Development FAQs</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {h2Faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFFFF', margin: 0, paddingRight: '16px' }}>{faq.q}</h2>
                    {isOpen ? <Icons.ChevronUp size={22} color="#3B82F6" /> : <Icons.ChevronDown size={22} color="#3B82F6" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 24px 24px', color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.02rem', lineHeight: '1.75' }}>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Build Custom Software with Digiworq Bangalore?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with our experienced software developers to engineer scalable web apps, SaaS platforms, and enterprise solutions.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Software Architecture Consultation</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
