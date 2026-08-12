import React, { useState } from 'react';
import { Sparkles, ExternalLink, ArrowRight, Filter, Award, TrendingUp, Globe, Search, Target } from 'lucide-react';

export default function OurWorksPage({ onOpenContact }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Branding', 'Technology', 'Video & 3D', 'Performance Ads'];

  const projects = [
    {
      id: 1,
      title: "Marketeam AI Ecosystem",
      category: "Technology",
      client: "Marketeam Global",
      metric: "+420% User Retention",
      desc: "Architected a unified AI marketing suite with dynamic prompt execution, multi-agent workflows, and high-performance UI analytics.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "AI Agent Engine", "UI/UX Architecture"]
    },
    {
      id: 2,
      title: "Velorah Luxury Watch Brand",
      category: "Branding",
      client: "Velorah Timepieces",
      metric: "$2.4M Launch Revenue",
      desc: "Designed atmospheric visual brand containers, luxury packaging, and a high-converting 3D interactive product showcase.",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      tags: ["Atmospheric Branding", "Package Design", "3D Rendering"]
    },
    {
      id: 3,
      title: "OmniPay Mobile Banking Suite",
      category: "Technology",
      client: "OmniPay Financial",
      metric: "1.2M+ App Downloads",
      desc: "Engineered an end-to-end mobile financial app featuring bio-metric authentication, instant transfer rails, and dark-mode glassmorphism UI.",
      img: "https://images.unsplash.com/photo-1556742049-0a67568d049f?auto=format&fit=crop&w=800&q=80",
      tags: ["Flutter", "Fintech Security", "Design System"]
    },
    {
      id: 4,
      title: "Quantum 3D Sci-Fi Commercial",
      category: "Video & 3D",
      client: "Quantum Robotics",
      metric: "5.8M Organic Views",
      desc: "Produced a photorealistic 3D animated product film showcasing next-gen robotics with cinematic lighting and surround sound design.",
      img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
      tags: ["3D Animation", "CGI Motion", "VFX Production"]
    },
    {
      id: 5,
      title: "Zenith Global Performance Campaign",
      category: "Performance Ads",
      client: "Zenith SaaS",
      metric: "8.4x ROAS Achieved",
      desc: "Executed a multi-channel performance ad campaign across Meta, Google Ads, and LinkedIn, generating 45,000+ enterprise leads.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Performance Marketing", "Meta Ads", "Lead Gen Engine"]
    },
    {
      id: 6,
      title: "Aura Health & Fitness Store",
      category: "Branding",
      client: "Aura Nutrition",
      metric: "+310% Online Sales",
      desc: "Rebranded a supplement line with vibrant packaging, custom typography, and a seamless Shopify Plus e-commerce experience.",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      tags: ["E-Commerce UI", "Packaging", "Brand Identity"]
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  const seoH2Sections = [
    {
      title: "Digital Marketing Services Near Me",
      icon: Sparkles,
      color: "#F5B800",
      desc: "If you are looking for a digital marketing service near you Digiworq can help with everything you need to market your business online including SEO, social media marketing, paid ads, branding and creating content. We help brands reach the people and build a strong online presence that lasts."
    },
    {
      title: "Website Development Company Bangalore",
      icon: Globe,
      color: "#3B82F6",
      desc: "Digiworq is a trusted website development company in Bangalore. We make websites that work well on all devices are easy to find on search engines and are designed with the user in mind. Our websites are built to handle traffic load fast and help businesses get more sales."
    },
    {
      title: "Search Engine Optimization Services",
      icon: Search,
      color: "#EC4899",
      desc: "Our search engine optimization services help businesses get search rankings more people visiting their site and high-quality leads. We do everything from making sure the technical side of your website is sound to optimizing your content and local search all to help your business grow in a way."
    },
    {
      title: "Lead Generation Services",
      icon: Target,
      color: "#10B981",
      desc: "Digiworq offers lead generation services that help businesses get and convert customers into sales through SEO, Google Ads, landing pages, and performance marketing strategies. We focus on getting high-quality leads that will help your business grow in the run. Digiworq provides these lead generation services to support long-term business growth, for Digiworqs clients."
    }
  ];

  return (
    <div className="works-page-wrapper">
      {/* Works Page Hero Banner */}
      <section className="works-hero-section" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container text-center">
          <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            <Award size={16} /> Client Success Showcase
          </div>

          <h1 className="works-hero-h1" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
            Best Digital Marketing Agency for Business Growth
          </h1>

          <div style={{ maxWidth: '850px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.08rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '14px' }}>
              Digiworq is a digital marketing agency partner for businesses that want to build a strong online presence and see real growth. We use a mix of creativity, strategy and technology to create solutions that work for every brand.
            </p>
            <p>
              Digiworq is one of the digital marketing companies and we help businesses of all sizes. From startups to big companies. Get seen, attract customers and get more sales through marketing solutions that really work. Our team makes sure to create plans that fit your business goals.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="works-filter-pills-row" style={{ marginTop: '36px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`works-filter-btn ${selectedFilter === cat ? 'active' : ''}`}
                onClick={() => setSelectedFilter(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '24px',
                  border: selectedFilter === cat ? '1.5px solid #F5B800' : '1px solid rgba(255,255,255,0.15)',
                  background: selectedFilter === cat ? 'rgba(245, 184, 0, 0.18)' : 'rgba(255,255,255,0.04)',
                  color: selectedFilter === cat ? '#F5B800' : '#FFFFFF',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="works-grid-section" style={{ padding: '70px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div className="portfolio-projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {filteredProjects.map((p) => (
              <div key={p.id} className="portfolio-card-item" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <div className="card-thumb-wrapper" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(245, 184, 0, 0.4)', padding: '4px 12px', borderRadius: '12px', color: '#F5B800', fontWeight: '800', fontSize: '0.8rem' }}>
                    {p.metric}
                  </div>
                </div>

                <div className="card-content-body" style={{ padding: '24px' }}>
                  <div style={{ color: '#A068FF', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>{p.category} · {p.client}</div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: '800', marginBottom: '10px' }}>{p.title}</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>{p.desc}</p>
                  
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {p.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '3px 10px', borderRadius: '8px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.78rem', fontWeight: '600' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured SEO H2 Services Sections */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #0B0E17 0%, #05070F 100%)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {seoH2Sections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${sec.color}44`, borderRadius: '20px', padding: '32px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: `${sec.color}18`, border: `1px solid ${sec.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComp size={24} color={sec.color} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px', lineHeight: '1.3' }}>
                    {sec.title}
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.98rem', lineHeight: '1.75' }}>
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
          <div className="works-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(245, 184, 0, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Have a High-Impact Project in Mind?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Let Digiworq build your brand presence, website, and digital ad strategy for maximum ROI.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
