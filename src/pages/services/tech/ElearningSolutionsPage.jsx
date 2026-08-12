import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function ElearningSolutionsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional E-Learning Solutions for Businesses Platform",
    "E-Learning App Development Company in Bangalore Modules",
    "Advanced Learning Solutions for Modern Education Virtual Classrooms",
    "E-Learning Solutions Bangalore for Digital Growth Systems",
    "SCORM/xAPI Compliant LMS, Mobile Apps & Gamified Courses"
  ];

  const mainH2Sections = [
    {
      title: "Professional E-Learning Solutions for Businesses",
      icon: Icons.GraduationCap,
      color: "#3B82F6",
      desc: "Our e-learning solutions support training, online education, employee learning and digital skill development through modern technology platforms. These e-learning solutions are designed for businesses. We provide these elearning solutions for businesses.",
      bulletsHeader: "Some key points about our elearning solutions for businesses include:",
      bullets: [
        "Custom e-learning platform development",
        "Online training solutions",
        "LMS development services",
        "Interactive learning modules",
        "training platforms",
        "Digital education solutions"
      ]
    },
    {
      title: "E-Learning App Development Company in Bangalore",
      icon: Icons.Smartphone,
      color: "#10B981",
      desc: "Digiworq develops scalable and user-friendly learning applications for educational institutions training centers and businesses. We are an elearning app development company. Our e-learning app development company is in Bangalore.",
      bulletsHeader: "Some key points about our elearning app development company include:",
      bullets: [
        "Learning app development",
        "Android and iOS e-learning apps",
        "Student management systems",
        "Video-based learning applications",
        "Interactive. Assessment systems",
        "Cloud-based learning platforms"
      ]
    },
    {
      title: "Advanced Learning Solutions for Modern Education",
      icon: Icons.BookOpen,
      color: "#F5B800",
      desc: "We provide learning solutions that improve accessibility, engagement and knowledge delivery through digital platforms and interactive technologies. These learning solutions are for education. Our learning solutions are advanced.",
      bulletsHeader: "Some key points about our advanced learning solutions include:",
      bullets: [
        "Virtual classroom solutions",
        "Employee training systems",
        "certification platforms",
        "E-learning content development",
        "Interactive videos",
        "Gamified learning experiences"
      ]
    },
    {
      title: "E-Learning Solutions Bangalore for Digital Growth",
      icon: Icons.TrendingUp,
      color: "#A068FF",
      desc: "Our e-learning solutions Bangalore services help businesses and institutions create digital learning ecosystems that improve training efficiency and learner engagement. We provide elearning solutions in Bangalore. These e-learning solutions are for growth.",
      bulletsHeader: "Some key points about our elearning solutions in Bangalore include:",
      bullets: [
        "Custom educational platforms",
        "Remote learning solutions",
        "Online course management",
        "Digital content integration",
        "Scalable learning systems"
      ]
    },
    {
      title: "Why Choose Digiworq for E- Solutions?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: "Digiworq combines technology, creative design and digital expertise to deliver e-learning solutions for businesses and educational organizations. We are Digiworq. Digiworq provides elearning solutions.",
      bulletsHeader: "Some key points about why you should choose Digiworq for elearning solutions include:",
      bullets: [
        "Experienced development team",
        "Customized e-learning platforms",
        "User- interface design",
        "Scalable digital learning solutions",
        "End-to-end technical support"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "We provide elearning development services for multiple industries and educational sectors. Our e-learning development services are for industries. We serve these industries.",
      bulletsHeader: "Some of the industries we serve include:",
      bullets: [
        "Schools and colleges",
        "businesses",
        "Training institutes",
        "Healthcare organizations",
        "Technology companies",
        "Educational startups"
      ]
    },
    {
      title: "Benefits of Professional E-Learning Solutions",
      icon: Icons.Zap,
      color: "#F59E0B",
      desc: "Professional elearning platforms help organizations improve training efficiency, accessibility and learner engagement. These e-learning solutions are professional. Our e-learning solutions provide benefits.",
      bulletsHeader: "Some key points about the benefits of our e-learning solutions include:",
      bullets: [
        "Flexible online learning",
        "Improved knowledge retention",
        "Better learner engagement",
        "education systems",
        "Cost-effective training solutions"
      ]
    }
  ];

  const elearningProcessSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "We understand learning goals, audience needs and platform requirements. This is the step in our e-learning development process. We do this for our elearning solutions."
    },
    {
      step: "02",
      title: "Design & Development",
      desc: "We create user-friendly e-learning platforms and applications. This is the step in our e-learning development process. We. Develop e-learning solutions."
    },
    {
      step: "03",
      title: "Testing & Deployment",
      desc: "We test functionality, performance and launch optimized learning solutions. This is the step in our e-learning development process. We. Deploy e-learning solutions."
    }
  ];

  const faqs = [
    {
      q: "What are e-learning solutions?",
      a: "E-learning solutions are platforms and applications used for online education, training and knowledge sharing. We provide elearning solutions. These are -learning solutions."
    },
    {
      q: "Do you develop custom elearning applications?",
      a: "Yes we provide e-learning app development and LMS solutions. We develop custom elearning applications. Our custom elearning applications are very good."
    },
    {
      q: "Can e-learning platforms support training?",
      a: "Yes our e-learning platforms are designed for employee training and business learning programs. Our e-learning platforms support training. We provide elearning platforms for corporate training."
    },
    {
      q: "Why are e-learning solutions important for businesses?",
      a: "E-learning solutions improve training accessibility, employee learning and digital education efficiency. E-learning solutions are very important for businesses. We provide elearning solutions for businesses."
    },
    {
      q: "Why choose Digiworq for elearning solutions, in Bangalore?",
      a: "Digiworq delivers interactive and business-focused e-learning solutions tailored for modern digital education. We are Digiworq. Digiworq provides elearning solutions in Bangalore. Our e-learning solutions are the best."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-elearning">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-elearning" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Technology Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">E-Learning Solutions in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.GraduationCap size={16} /> LMS & EdTech Platform Engineering Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                E-Learning Solutions in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq provides e-learning solutions in Bangalore that help businesses, educational institutions and organizations deliver engaging digital learning experiences.
                </p>
                <p style={{ marginBottom: '12px' }}>
                  As an e-learning app development company we create interactive learning platforms, training modules and customized e-learning solutions that improve knowledge sharing and online education experiences.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  We do this for elearning solutions. E-learning solutions are very important for businesses and institutions.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book EdTech Strategy Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="e-learning-solutions" title="E-Learning Solutions" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>E-Learning Deliverables & LMS Features:</h3>
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
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: sec.bullets ? '20px' : '0' }}>
                    {sec.desc}
                  </p>

                  {sec.bullets && (
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
                      <div style={{ color: sec.color, fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>
                        {sec.bulletsHeader}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {sec.bullets.map((bItem, bIdx) => (
                          <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '600' }}>
                            <Icons.CheckCircle2 size={16} color={sec.color} />
                            <span>{bItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our E-Learning Development Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our E-Learning Development Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a structured 3-phase EdTech platform development lifecycle from requirements to deployment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {elearningProcessSteps.map((stepItem, sIdx) => (
              <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.18)', border: '1px solid #3B82F6', color: '#3B82F6', fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  {stepItem.step}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px' }}>
                  {stepItem.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ padding: '80px 0', background: '#0A0E1A' }}>
        <div className="section-container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Asked Questions</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Build Interactive E-Learning & Training Platforms?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq EdTech engineers to build custom LMS systems, virtual classrooms, and mobile learning apps.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book E-Learning Consultation</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
