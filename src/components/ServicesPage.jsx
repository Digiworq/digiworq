import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Globe, Search, Share2, Target, FileText, TrendingUp } from 'lucide-react';
import ServicesGrid from './ServicesGrid';

export default function ServicesPage({ onOpenContact, onNavigateService }) {
  const seoServicesList = [
    {
      title: "Website Development Services in Bangalore",
      icon: Globe,
      color: "#F5B800",
      desc: "We make websites that work well and look good on phones and computers. Our website development services in Bangalore are, about making sure your website is fast easy to use and works well on phones. This helps you get customers."
    },
    {
      title: "SEO Optimization Service",
      icon: Search,
      color: "#EC4899",
      desc: "Our SEO optimization service helps your business show up near the top when people search on Google. We do this by finding the keywords making your website work technically optimizing your content and using local SEO strategies. The goal of our SEO optimization service is to help your business grow naturally over time so you get the right people visiting your website and turning into leads."
    },
    {
      title: "Social Marketing Services in Bangalore",
      icon: Share2,
      color: "#A068FF",
      desc: "Our social marketing services in Bangalore are really good at helping brands talk to their audience. We do this by making content and managing campaigns in a way that works well for each platform like Instagram, Facebook, LinkedIn and more."
    },
    {
      title: "Google Ads Services",
      icon: Target,
      color: "#3B82F6",
      desc: "We can help you get traffic and sales right away with our Google Ads services. Our team improves search, display and remarketing campaigns that help businesses get the most out of their money and reach the right people."
    },
    {
      title: "Content Marketing Services",
      icon: FileText,
      color: "#10B981",
      desc: "Our content marketing services help businesses become well known and liked by their audience. We do this by making content that's good for search engines writing blog posts creating website copy and making social media content that gets people interested and turns them into customers."
    },
    {
      title: "Lead Generation Services",
      icon: TrendingUp,
      color: "#F59E0B",
      desc: "We have lead generation services that help businesses find people who might be interested, in what they have to offer. Our team uses search engines, paid ads, landing pages and marketing campaigns that are designed to get results to help businesses get leads."
    }
  ];

  return (
    <div className="services-page-wrapper">
      {/* Services Page Hero Banner */}
      <section className="services-hero-section" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container text-center">
          <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            <Sparkles size={16} /> Digital Marketing & Web Solutions
          </div>

          <h1 className="services-hero-h1" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
            Digital Marketing Services That Grow Your Business
          </h1>

          <p className="services-hero-p" style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8' }}>
            At Digiworq we help you get the results you want from marketing in Bangalore. This means people can find you online you get leads and your business grows. We do this with things like SEO, social media paid ads and websites that are made for your business.
          </p>
        </div>
      </section>

      {/* Main Services Grid Showcase */}
      <section className="services-catalog-grid-section">
        <div className="section-container">
          <ServicesGrid onOpenContact={onOpenContact} onNavigateService={onNavigateService} />
        </div>
      </section>

      {/* Structured SEO H2 Services Sections */}
      <section className="services-seo-blocks-section" style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div className="seo-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {seoServicesList.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div key={idx} className="seo-service-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${srv.color}44`, borderRadius: '20px', padding: '32px', boxShadow: `0 10px 30px ${srv.color}15`, transition: 'transform 0.3s ease' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${srv.color}18`, border: `1px solid ${srv.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComp size={26} color={srv.color} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px', lineHeight: '1.3' }}>
                    {srv.title}
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.98rem', lineHeight: '1.75' }}>
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="services-cta-section" style={{ padding: '60px 0 80px 0', background: '#070913' }}>
        <div className="section-container text-center">
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(245, 184, 0, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Need a Tailored Custom Service Package?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Speak with our solution architects to customize a project roadmap aligned with your business goals.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Free Discovery Call</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
