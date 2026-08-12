import React from 'react';
import { TrendingUp, Search, Share2, Target, Layout, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function BestDigitalMarketingServicesPage({ onOpenContact, onBackHome }) {
  const seoH2Sections = [
    {
      title: "Best Digital Marketing",
      icon: TrendingUp,
      color: "#F5B800",
      desc: "Digiworq offers the digital marketing services in Bangalore. Our services are designed to help businesses be seen online get leads and grow in the long run. Our team is made up of strategic people who are good at performance marketing. We work together to provide solutions that are tailored to each business whether it is a startup, a brand or a big company."
    },
    {
      title: "Best SEO Companies",
      icon: Search,
      color: "#EC4899",
      desc: "Digiworq is known for being one of the SEO companies. We provide SEO strategies that get results, including researching keywords, technical SEO, local SEO, optimizing web pages and marketing content. Our goal is to help businesses rank higher on Google and get traffic from search engines. We focus on growth that's sustainable and can be measured."
    },
    {
      title: "Social Media Marketing Services",
      icon: Share2,
      color: "#A068FF",
      desc: "Our social media marketing services are professional. Help brands connect with their audience. We create content manage campaigns work with influencers and run paid ads on platforms like Instagram, Facebook and LinkedIn. Our strategies are designed to increase engagement with the brand and its online reach."
    },
    {
      title: "Google Ads Services",
      icon: Target,
      color: "#3B82F6",
      desc: "Digiworq provides Google Ads services that are focused on performance. We help businesses get traffic good leads and higher conversions. We optimize campaigns to get a return on investment and support business growth. This includes search ads, display campaigns and remarketing strategies."
    },
    {
      title: "Website Design Services",
      icon: Layout,
      color: "#10B981",
      desc: "Our website design services are creative. Focus on building websites that are responsive, friendly, to search engines and user-focused. We create websites that are designed for speed, performance and higher customer engagement. Our goal is to improve the user experience and online presence of each business."
    },
    {
      title: "Lead Generation Services",
      icon: TrendingUp,
      color: "#F59E0B",
      desc: "We offer lead generation services that're strategic and help businesses attract and convert potential customers. We use SEO, paid advertising, landing pages and digital marketing campaigns to do this. Our approach is based on data. Focused on delivering quality leads that support long-term business success. Digiworqs lead generation services are designed to help businesses grow and succeed."
    }
  ];

  return (
    <div className="subservice-page-container">
      {/* Hero Header Banner */}
      <section className="subservice-hero-section" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Sparkles size={16} /> Best Digital Marketing Services
              </div>

              <h1 style={{ fontSize: '2.6rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Best Digital Marketing Services in Bangalore
              </h1>

              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                Digiworq is one of the digital marketing agencies that helps businesses create a strong presence online. We do this by using strategies and digital solutions that really work. Our goal is to help businesses grow in a way that we can measure. We design marketing campaigns that are tailored to each business whether it is a startup, a brand or a business that is growing.
              </p>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Get Custom Marketing Strategy</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Vector Illustration */}
            <div>
              <ServiceIllustrationCard subServiceId="best-digital-marketing-services-in-bangalore" categoryId="digital-marketing" />
            </div>

          </div>
        </div>
      </section>

      {/* Structured SEO H2 Blocks Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {seoH2Sections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${sec.color}44`, borderRadius: '20px', padding: '32px', boxShadow: `0 10px 30px ${sec.color}15` }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: `${sec.color}18`, border: `1px solid ${sec.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComp size={24} color={sec.color} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px', lineHeight: '1.3' }}>
                    {sec.title}
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '0.98rem', lineHeight: '1.75' }}>
                    {sec.desc}
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Scale Your Brand with the Best Digital Marketing Agency?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Speak with Digiworq performance marketers to create your tailored growth campaign.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Strategy Call</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
