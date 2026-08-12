import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function LogoAnimationPage({ onOpenContact, onBackHome }) {
  const [activeF, setActiveF] = useState(null);

  const deliverables = [
    "Custom 2D Logo Animation Design",
    "Intro & Outro Logo Animations for Videos",
    "Social Media Optimized Logo Animations",
    "Motion Graphics Effects & Transitions",
    "Multi-Platform Compatible Delivery",
    "Brand-Aligned Animation Concepts"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Sparkles",
      title: "Logo Animation Services",
      desc: "Our logo animation services transform static logos into dynamic visual experiences that improve brand recognition, memorability and audience engagement."
    },
    {
      step: "02",
      icon: "Award",
      title: "Professional Brand Logo Animation",
      desc: "We create visually appealing logo animations that enhance brand identity and strengthen digital presence across all platforms and media."
    },
    {
      step: "03",
      icon: "Layers",
      title: "Motion Graphics Integration",
      desc: "We combine motion graphics effects, particles and transitions with logo animations for a premium, impactful visual branding experience."
    },
    {
      step: "04",
      icon: "Play",
      title: "Intro & Outro Logo Animations",
      desc: "We create professional animated logo intros and outros for YouTube videos, presentations, ads and branded digital content."
    },
    {
      step: "05",
      icon: "Share2",
      title: "Social Media Logo Animations",
      desc: "We create engaging animated logos optimized for Instagram, YouTube, Facebook, LinkedIn and other social platforms with the right formats and durations."
    },
    {
      step: "06",
      icon: "Palette",
      title: "Creative Animation Concepts",
      desc: "We develop unique animation styles and visual effects tailored to your brand personality, industry and target audience preferences."
    }
  ];

  const faqs = [
    {
      q: 'What are logo animation services?',
      a: 'Logo animation services transform static logos into animated visual content that improves brand presentation, creates memorability and increases audience engagement across digital platforms.'
    },
    {
      q: 'Why is logo animation important for branding?',
      a: 'Animated logos create stronger brand recognition, a more professional visual identity and significantly more engaging digital content compared to static logos.'
    },
    {
      q: 'Do you provide custom logo animation services?',
      a: 'Yes we create fully custom logo animations based on your brand style, business goals and creative requirements — no templates used.'
    },
    {
      q: 'Where can animated logos be used?',
      a: 'Animated logos can be used on websites, social media platforms, promotional videos, presentations, advertisements and all digital marketing campaigns.'
    },
    {
      q: 'Why choose Digiworq for 2D logo animation services in Bangalore?',
      a: 'Digiworq provides creative animation concepts, professional motion graphics expertise, customized branding solutions and high-quality logo animation services tailored for businesses and brands of all sizes.'
    }
  ];

  return (
    <div className="service-page-root">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-digital-marketing">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">2D Animation</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">2D Logo Animation</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Logo Animation Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">2D Logo Animation Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq offers 2D logo animation services in Bangalore designed to make your brand identity more engaging and memorable. Our animated logo solutions help businesses create lasting visual impressions across websites, videos, presentations, advertisements and digital marketing platforms.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Get Logo Animation Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId="2d-logo-animation" title="2D Logo Animation" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Logo Animation Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Film size={16} color="#A78BFA" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Bento Grid */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Logo Animation Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Brand-tailored logo animations, motion effects and multi-platform delivery that make your logo unforgettable.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Film;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(167,139,250,0.4)', color: '#A78BFA', background: 'rgba(167,139,250,0.12)' }}>
                      <IconComp size={24} />
                    </div>
                    <span className="pillar-card-number">{pillar.step}</span>
                  </div>
                  <h3 className="pillar-card-title">{pillar.title}</h3>
                  <p className="pillar-card-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-bento-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '40px' }}>
            <h2 className="process-main-title">Frequently Asked <span className="highlight-yellow-glow">Questions</span></h2>
          </div>
          <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeF === i ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => setActiveF(activeF === i ? null : i)}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>{faq.q}</h4>
                  <Icons.ChevronDown size={18} className={`faq-chevron ${activeF === i ? 'rotated' : ''}`} />
                </button>
                {activeF === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container" style={{ textAlign: 'center', padding: '60px 24px' }}>
          <h2 className="process-main-title">Animate Your <span className="highlight-yellow-glow">Brand Identity</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our logo animation team create a dynamic animated logo that makes your brand stand out across all digital platforms.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start Logo Animation Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
