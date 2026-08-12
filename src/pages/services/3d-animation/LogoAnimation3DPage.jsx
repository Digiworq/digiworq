import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function LogoAnimation3DPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Custom 3D Logo Modeling & Motion",
    "Cinematic 3D Logo Reveal Sequences",
    "YouTube & Video Intro / Outro Loops",
    "Social Media 3D Animated Stingers",
    "Corporate Presentation Logo Idents",
    "Transparent Alpha & 4K Multi-Format Delivery"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Sparkles",
      title: "Creative 3D Motion Graphics",
      desc: "Our 3D motion graphics solutions add depth, light reflections and fluid movement to brand assets, helping businesses stand out in competitive digital spaces."
    },
    {
      step: "02",
      icon: "Award",
      title: "Digital Branding Solutions",
      desc: "We create dynamic 3D branding assets tailored for high-converting websites, social media profiles, broadcast corporate videos and promotional campaigns."
    },
    {
      step: "03",
      icon: "Play",
      title: "Logo Reveal Animations",
      desc: "Cinematic logo reveal sequences that capture immediate audience attention, evoke emotion and firmly establish your brand identity."
    },
    {
      step: "04",
      icon: "Film",
      title: "Intro & Outro Animations",
      desc: "Professional 3D animated logo intros and outros crafted for YouTube videos, executive presentations, video ads and branded digital content."
    },
    {
      step: "05",
      icon: "Palette",
      title: "Personalized Animation Styles",
      desc: "Bespoke 3D animation concepts, particle systems, glass/metallic textures and custom lighting tailored to your unique brand personality."
    },
    {
      step: "06",
      icon: "Monitor",
      title: "Multi-Platform Compatibility",
      desc: "Delivered in web-ready formats (transparent alpha, 4K MP4, ProRes, WebM, Lottie) optimized for websites, social channels, apps and video suites."
    }
  ];

  const detailedSections = [
    {
      icon: <Icons.Target size={22} color="#F472B6" />,
      heading: "Brand-Focused Animation",
      body: "Our 3D logo animations align closely with your company's core identity, industry positioning and overarching marketing objectives to drive strong brand recall."
    },
    {
      icon: <Icons.Zap size={22} color="#F472B6" />,
      heading: "High-Quality Visual Effects",
      body: "We incorporate realistic 3D lighting, glass refractions, metallic chrome finishes, dynamic shadows, fluid particles and smooth camera transitions into every animation."
    },
    {
      icon: <Icons.Megaphone size={22} color="#F472B6" />,
      heading: "Marketing Video Integration",
      body: "Animated 3D logos are engineered for seamless drag-and-drop integration within advertising campaigns, product promo reels, and commercial video spots."
    },
    {
      icon: <Icons.Building2 size={22} color="#F472B6" />,
      heading: "Corporate Branding Videos",
      body: "We elevate company town halls, keynote slides, annual reports, and investor pitch decks with sophisticated, executive-grade animated logo sequences."
    }
  ];

  const whyChooseBullets = [
    "Expertise in cutting-edge 3D modeling, texturing, and CGI motion design.",
    "100% custom-crafted animation concepts — zero generic templates.",
    "Cinema-grade lighting, metallic/glass materials, and realistic rendering.",
    "Versatile delivery with transparent backgrounds for seamless video overlays.",
    "Fast turnaround times with full creative collaboration and revisions.",
    "Optimized file formats for web, social platforms, presentations, and 4K displays."
  ];

  const faqs = [
    {
      q: 'What is 3D logo animation?',
      a: '3D logo animation is the process of transforming a static 2D logo into a dynamic three-dimensional visual asset using 3D depth, realistic materials, dynamic lighting effects, and creative motion transitions.'
    },
    {
      q: 'Why should businesses use 3D animated logos?',
      a: 'Animated logos dramatically improve brand recognition, establish a premium professional aesthetic, and make video content, presentations, and ads far more engaging and memorable.'
    },
    {
      q: 'Do you provide custom 3D logo animation services?',
      a: 'Yes, we create fully customized 3D logo animations tailored specifically to your brand identity, color guidelines, and marketing goals without relying on pre-made templates.'
    },
    {
      q: 'Where can 3D animated logos be used?',
      a: 'Animated logos can be used on websites, social media platforms (Instagram, LinkedIn, YouTube), promotional videos, keynote presentations, digital ads, trade show displays, and email headers.'
    },
    {
      q: 'Why choose Digiworq for 3D logo animation services in Bangalore?',
      a: 'Digiworq provides dedicated 3D animation expertise, bespoke branding solutions, cinema-grade visual effects, and high-resolution deliverables engineered to strengthen your brand presence.'
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
            <span className="bc-link-sub">3D Animation</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">3D Logo Animation</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot" style={{ color: '#F472B6' }}>●</span>
                <span>3D Logo Animation Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">3D Logo Animation Services</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq provides 3D logo animation services in Bangalore. We help businesses create a distinctive brand identity with animated logos. Our team turns static logos into dynamic animations that make brands more noticeable on websites, videos, presentations, ads, and digital marketing.
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
              <ServiceIllustrationCard serviceId="3d-logo-animation" title="3D Logo Animation" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>3D Logo Animation Services & Key Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Sparkles size={16} color="#F472B6" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core 6 Pillars Bento Grid */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">3D Logo Animation Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Transforming static logos into dynamic, three-dimensional visual experiences that captivate audiences.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Sparkles;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(244, 114, 182, 0.4)', color: '#F472B6', background: 'rgba(244, 114, 182, 0.12)' }}>
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

      {/* Detailed Capabilities Grid */}
      <section className="service-bento-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              3D Animated Logo Design & <span className="highlight-yellow-glow">Video Solutions</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Engineered to enhance brand prestige across digital, video, and promotional media.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {detailedSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)',
                  border: '1px solid rgba(244, 114, 182, 0.2)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ background: 'rgba(244, 114, 182, 0.12)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {sec.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#F8FAFC', fontWeight: 700, margin: 0 }}>
                    {sec.heading}
                  </h3>
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Why Choose Digiworq Box */}
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 100%)',
              border: '1px solid rgba(245, 184, 0, 0.3)',
              borderRadius: '20px',
              padding: '36px 32px',
              boxShadow: '0 0 30px rgba(245, 184, 0, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Icons.Award size={28} color="#F5B800" />
              <h3 style={{ fontSize: '1.4rem', color: '#F5B800', fontWeight: 800, margin: 0 }}>
                Why Choose Digiworq for 3D Logo Animation?
              </h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {whyChooseBullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Icons.CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: '1.5' }}>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '40px' }}>
            <h2 className="process-main-title">Frequently Asked <span className="highlight-yellow-glow">Questions</span></h2>
          </div>
          <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>{faq.q}</h4>
                  <Icons.ChevronDown size={18} className={`faq-chevron ${activeFaq === i ? 'rotated' : ''}`} />
                </button>
                {activeFaq === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="service-bento-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container" style={{ textAlign: 'center', padding: '60px 24px' }}>
          <h2 className="process-main-title">Make Your Brand Unforgettable with <span className="highlight-yellow-glow">3D Logo Animation</span></h2>
          <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', marginBottom: '32px' }}>
            Let our 3D motion design team create dynamic animated logo sequences that bring depth, luxury, and prestige to your brand identity.
          </p>
          <div className="btn-border-wrap" style={{ display: 'inline-block' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Start 3D Logo Project</span>
              <Icons.ArrowRight size={18} className="btn-arrow-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
