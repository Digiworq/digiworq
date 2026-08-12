import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function SocialMediaContentPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional Social Media Content Creation Services",
    "Leading Social Media Content Creation Agency in Bangalore Reels",
    "Best Social Media Content for Brand Growth Campaign Kits",
    "Creative Social Media Creation Solutions & Ad Banners",
    "100% Brand-Consistent Monthly Content Calendars & Creatives"
  ];

  const mainH2Sections = [
    {
      title: "Professional Social Media Content Creation Services",
      icon: Icons.Share2,
      color: "#EC4899",
      desc: "Digiworqs services help businesses connect with their audience through visuals, videos, captions and marketing content. Here are some points to consider:",
      bulletsHeader: "Key services include:",
      bullets: [
        "Social media post designs",
        "Instagram reel creation",
        "content strategy",
        "Video and graphic content",
        "Brand-focused social media creatives",
        "Content calendar planning"
      ]
    },
    {
      title: "Leading Social Media Content Creation Agency in Bangalore",
      icon: Icons.Award,
      color: "#A068FF",
      desc: "Digiworq creates engaging content that helps brands reach more people and interact with customers.",
      bulletsHeader: "Here are some key points:",
      bullets: [
        "Creative content planning",
        "Platform- strategies",
        "Consistent brand communication",
        "Engaging storytelling",
        "Social media campaign creatives"
      ]
    },
    {
      title: "Best Social Media Content for Brand Growth",
      icon: Icons.TrendingUp,
      color: "#F5B800",
      desc: "Digiworq creates high-quality social media content that helps businesses build stronger relationships with customers and improve online visibility.",
      bulletsHeader: "Some key areas include:",
      bullets: [
        "Instagram marketing creatives",
        "Facebook post design",
        "LinkedIn business content",
        "Promotional social media videos",
        "Interactive social media campaigns"
      ]
    },
    {
      title: "Creative Social Media Creation Solutions",
      icon: Icons.Sparkles,
      color: "#3B82F6",
      desc: "Digiworqs solutions focus on delivering attractive content that aligns with branding and marketing goals.",
      bulletsHeader: "Some key solutions are:",
      bullets: [
        "Short-form video content",
        "media advertisements",
        "Product and service promotions",
        "Custom graphic design",
        "Audience engagement strategies"
      ]
    },
    {
      title: "Why Choose Digiworq for Social Media Content Creation?",
      icon: Icons.CheckCircle2,
      color: "#10B981",
      desc: "Digiworq combines creativity, digital marketing expertise and branding strategies to create social media content.",
      bulletsHeader: "Here are some reasons to choose Digiworq:",
      bullets: [
        "Experienced team",
        "Customized content strategies",
        "Trend-focused content creation",
        "Multi-platform content support",
        "Consistent branding approach"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "Digiworq provides social media content creation services for businesses across multiple industries.",
      bulletsHeader: "Some of the industries include:",
      bullets: [
        "estate",
        "Healthcare",
        "Restaurants and hospitality",
        "Education and eLearning",
        "Retail and eCommerce",
        "Corporate businesses and startups"
      ]
    },
    {
      title: "Benefits of Professional Social Media Content Creation",
      icon: Icons.Zap,
      color: "#F59E0B",
      desc: "social media content helps businesses improve engagement build brand awareness and attract potential customers online.",
      bulletsHeader: "Some benefits include:",
      bullets: [
        "Better audience engagement",
        "Improved online visibility",
        "Consistent brand identity",
        "Increased social media reach",
        "customer interaction"
      ]
    }
  ];

  const smProcessSteps = [
    {
      step: "01",
      title: "Content Research & Planning",
      desc: "Understanding business goals, target audience and social media requirements."
    },
    {
      step: "02",
      title: "Creative Content Development",
      desc: "Creating graphics, videos, captions and marketing creatives."
    },
    {
      step: "03",
      title: "Publishing & Optimization",
      desc: "Optimizing content performance for reach, engagement and conversions."
    }
  ];

  const faqs = [
    {
      q: "What is social media content creation?",
      a: "Social media content creation involves designing posts, videos, graphics and marketing content for media platforms."
    },
    {
      q: "Why is social media content important for businesses?",
      a: "Social media content improves audience engagement, brand visibility and digital marketing performance."
    },
    {
      q: "Do you create content for Instagram and Facebook?",
      a: "Yes Digiworq creates content for Instagram, Facebook, LinkedIn, YouTube and other social platforms."
    },
    {
      q: "Can social media content improve brand awareness?",
      a: "Yes consistent and creative content helps businesses improve visibility and customer engagement online."
    },
    {
      q: "Why choose Digiworq as a media content creation agency, in Bangalore?",
      a: "Digiworq delivers branding-focused and marketing-driven social media content tailored for business growth."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-smcontent">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-smcontent" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Creative Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Social Media Content Creation in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(236, 72, 153, 0.12)', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: '30px', color: '#EC4899', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Share2 size={16} /> Instagram & Multi-Platform Content Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Social Media Content Creation in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is an agency that helps businesses in Bangalore build a strong online presence. They create engaging content that looks good and focuses on the brand.
                </p>
                <p style={{ fontWeight: '600', color: '#EC4899' }}>
                  This helps businesses grow online and reach people on platforms like Instagram, Facebook, LinkedIn and YouTube.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Social Content Strategy</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="social-media-content-creation" title="Social Media Content" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Social Content Deliverables & Creative Kits:</h3>
            <div className="deliverables-pills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)', padding: '8px 16px', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={16} color="#EC4899" />
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

      {/* Our Social Media Content Creation Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our Social Media Content Creation Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We manage your monthly content lifecycle from research and production to publishing and analytics.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {smProcessSteps.map((stepItem, sIdx) => (
              <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(236, 72, 153, 0.18)', border: '1px solid #EC4899', color: '#EC4899', fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  {stepItem.step}
                </div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px' }}>
                  {stepItem.title}
                </h2>
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
                    {isOpen ? <Icons.ChevronUp size={20} color="#EC4899" /> : <Icons.ChevronDown size={20} color="#EC4899" />}
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
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Scale Your Brand's Social Media Presence?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq content strategists to build your monthly Instagram reels, graphics, and video calendar.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Social Media Audit</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
