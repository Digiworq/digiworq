import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function TestimonialsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Customer Testimonial Video Services for Trust & Credibility",
    "Client Success Story Videos & B2B Case Study Films",
    "Customer Experience Videos & Storytelling",
    "Testimonial Video Production Company Scripting to Editing",
    "Professional Production & Multi-Platform Web/Social Formats"
  ];

  const mainH2Sections = [
    {
      title: "Customer Testimonial Video Services",
      icon: Icons.MessageSquare,
      color: "#3B82F6",
      desc: "Our customer testimonial video services focus on getting feedback from customers. This helps businesses improve trust and engagement with their customers. We make testimonial videos for websites, social media and marketing campaigns."
    },
    {
      title: "Client Success Story Videos",
      icon: Icons.Award,
      color: "#10B981",
      desc: "We showcase real client experiences and successful business outcomes through produced testimonial videos."
    },
    {
      title: "Customer Experience Videos",
      icon: Icons.Smile,
      color: "#F5B800",
      desc: "Our videos highlight customer satisfaction and positive brand experiences. We use engaging storytelling to make our videos interesting."
    },
    {
      title: "Testimonial Video Production Company",
      icon: Icons.Video,
      color: "#A068FF",
      desc: "Digiworq is a trusted video production company in Bangalore. We offer end-to-end video production services. This includes planning, scripting, filming, editing and post-production support."
    },
    {
      title: "Professional Video Production",
      icon: Icons.Sparkles,
      color: "#EC4899",
      bullets: [
        "We use concepts and high-quality equipment to make impactful testimonial videos.",
        "Our editing techniques make our videos look professional."
      ]
    },
    {
      title: "Multi-Platform Video Content",
      icon: Icons.Share2,
      color: "#8B5CF6",
      bullets: [
        "Our testimonial videos work well on websites YouTube, LinkedIn, Instagram and digital marketing campaigns."
      ]
    },
    {
      title: "Corporate Testimonial Videos",
      icon: Icons.Building2,
      color: "#F59E0B",
      desc: "We create testimonial videos that help companies showcase client relationships and project success stories. Our videos also share employee experiences and brand credibility through visual communication."
    },
    {
      title: "Testimonial Video Makers Bangalore",
      icon: Icons.Camera,
      color: "#10B981",
      desc: "Digiworq offers customized video production solutions. We work with startups, enterprises, educational institutions, healthcare brands and corporate businesses across Bangalore."
    }
  ];

  const faqs = [
    {
      q: "What are videos?",
      a: "Testimonial videos feature customer or client experiences. They help businesses build trust and credibility with customers."
    },
    {
      q: "What video services does Digiworq provide?",
      a: "We provide customer videos and corporate testimonial videos. We also offer client success story videos, interview videos and post-production services."
    },
    {
      q: "Why are testimonial videos important, for businesses?",
      a: "Testimonial videos improve customer trust and increase engagement. They strengthen brand reputation through storytelling."
    },
    {
      q: "Can Digiworq create customized videos?",
      a: "Yes we create customized videos based on your business goals and target audience."
    },
    {
      q: "Do you provide video production services?",
      a: "Yes we offer testimonial video production. This includes scripting, shooting, editing, sound design and final delivery."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-testimonials">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-testimonials" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Video Production Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Top Testimonial Video Services in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.MessageSquare size={16} /> Customer Review & Client Success Case Study Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Top Testimonial Video Services in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq offers testimonial video services in Bangalore. We help businesses build trust and credibility with their customers. Our videos tell stories that connect businesses with their customers.
                </p>
                <div style={{ marginTop: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontWeight: '600', marginBottom: '6px' }}>
                    <Icons.CheckCircle2 size={18} color="#3B82F6" />
                    <span>We create quality testimonial videos that show real customer experiences.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontWeight: '600' }}>
                    <Icons.CheckCircle2 size={18} color="#3B82F6" />
                    <span>Our videos share client success stories. How our brand makes an impact.</span>
                  </div>
                </div>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Testimonial Shoot Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId="testimonials" categoryId="video-production" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Testimonial Video Deliverables & Features:</h3>
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
                  {sec.desc && (
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75' }}>
                      {sec.desc}
                    </p>
                  )}
                  {sec.bullets && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                      {sec.bullets.map((bText, bIdx) => (
                        <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.98rem', fontWeight: '600' }}>
                          <Icons.CheckCircle2 size={16} color={sec.color} />
                          <span>{bText}</span>
                        </div>
                      ))}
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Produce High-Trust Client Testimonial Videos?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq videographers to film authentic client case studies, customer reviews, and success stories.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Testimonial Video Consultation</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
