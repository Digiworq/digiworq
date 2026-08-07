import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function TechTerminalWidget() {
  const [activeTab, setActiveTab] = useState('react');

  return (
    <div className="custom-widget-card tech-terminal-box">
      <div className="terminal-header-bar">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="terminal-file-name">digiworq-engine.config.js — Next.js 15 App</span>
      </div>

      <div className="terminal-tabs-row">
        <button className={`term-tab ${activeTab === 'react' ? 'active' : ''}`} onClick={() => setActiveTab('react')}>App.tsx</button>
        <button className={`term-tab ${activeTab === 'api' ? 'active' : ''}`} onClick={() => setActiveTab('api')}>api/route.ts</button>
        <button className={`term-tab ${activeTab === 'score' ? 'active' : ''}`} onClick={() => setActiveTab('score')}>Lighthouse 99+</button>
      </div>

      <div className="terminal-code-body">
        {activeTab === 'react' && (
          <pre className="code-text">
            <code>
              <span className="code-keyword">import</span> &#123; DigiworqEngine &#125; <span className="code-keyword">from</span> <span className="code-string">'@digiworq/core'</span>;<br/>
              <br/>
              <span className="code-keyword">export default function</span> <span className="code-func">App</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="code-keyword">return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-component">DigiworqEngine</span> speed=<span className="code-string">"sub-second"</span> cache=<span className="code-string">"edge"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </pre>
        )}
        {activeTab === 'api' && (
          <pre className="code-text">
            <code>
              <span className="code-comment">// High-performance Edge API Route</span><br/>
              <span className="code-keyword">export async function</span> <span className="code-func">GET</span>(req) &#123;<br/>
              &nbsp;&nbsp;<span className="code-keyword">return</span> Response.<span className="code-func">json</span>(&#123; status: <span className="code-string">200</span>, latency: <span className="code-string">"14ms"</span> &#125;);<br/>
              &#125;
            </code>
          </pre>
        )}
        {activeTab === 'score' && (
          <div className="lighthouse-scores-grid">
            <div className="score-badge-circle"><span className="score-num">100</span><span>Performance</span></div>
            <div className="score-badge-circle"><span className="score-num">100</span><span>Accessibility</span></div>
            <div className="score-badge-circle"><span className="score-num">100</span><span>SEO</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WebsiteDevPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Custom Frontend & Backend Architecture",
    "Responsive Mobile-First UI/UX Layouts",
    "100/100 Lighthouse Performance & SEO Optimization",
    "Content Management System (CMS) Integration",
    "Cloud Edge Deployment & SSL Security Setup",
    "E-commerce & Custom API Integrations"
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Sub-Second Page Load Speed",
      desc: "Engineered with modern Next.js and Vite stacks ensuring instantaneous page loads and top Core Web Vitals scores."
    },
    {
      icon: "ShieldCheck",
      title: "Enterprise-Grade Security",
      desc: "Built-in SSL, DDoS protection, automated database backups, and strict data encryption."
    },
    {
      icon: "Search",
      title: "Built-In Technical SEO",
      desc: "Schema markup, automated XML sitemaps, semantic HTML5 structure, and mobile responsiveness."
    },
    {
      icon: "Cpu",
      title: "Scalable Headless Stack",
      desc: "Easily handle millions of monthly pageviews with serverless edge functions and decoupled backends."
    }
  ];

  const process = [
    { step: "01", title: "Architecture", desc: "Planning sitemap, wireframes, tech stack & database schemas." },
    { step: "02", title: "Frontend Build", desc: "Crafting pixel-perfect, interactive responsive web components." },
    { step: "03", title: "CMS & API", desc: "Integrating headless CMS, payment gateways, and custom APIs." },
    { step: "04", title: "QA & Go-Live", desc: "Lighthouse audit, cross-browser testing & cloud deployment." }
  ];

  const faqs = [
    {
      q: "What tech stacks do you use for website development?",
      a: "We build custom websites using React, Next.js, TypeScript, Node.js, Tailwind CSS, WordPress, Shopify, and modern Jamstack architectures based on your business requirements."
    },
    {
      q: "Will my website be mobile-responsive and SEO-optimized?",
      a: "Absolutely. 100% of our websites are engineered mobile-first and undergo rigorous technical SEO audits to achieve 95+ scores on Google Lighthouse."
    },
    {
      q: "Can I manage and update content on my own after launch?",
      a: "Yes! We integrate easy-to-use CMS platforms (Sanity, Strapi, WordPress) and provide complete video walkthroughs for your team."
    },
    {
      q: "What is the typical timeline for a custom website project?",
      a: "Standard business websites take 2-3 weeks, while complex web applications and e-commerce stores take 4-6 weeks."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-technology">
      {/* 1. Hero Section */}
      <section className="service-landing-hero hero-theme-technology">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Technology</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Website Development</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Web Development Company · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">Website Development</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">
                Digiworq is a top-rated website development agency in Bangalore. We build ultra-fast, SEO-friendly, custom responsive websites and web applications engineered to convert traffic into revenue.
              </p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Web Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <TechTerminalWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Website Engineering Specs & Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Code2 size={16} color="#34D399" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Advantages Grid */}
      <section className="digiworq-benefits-section py-16" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Engineered For Speed & <span className="highlight-yellow-glow">Scalability</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why leading brands trust Digiworq for custom web development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, idx) => {
              const IconComp = Icons[b.icon] || Icons.Code;
              return (
                <div key={idx} className="custom-widget-card" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '28px 24px', borderRadius: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                    <IconComp size={22} color="#34D399" />
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px' }}>{b.title}</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Process Section */}
      <section className="digiworq-process-section">
        <div className="section-container">
          <div className="process-header-box">
            <h2 className="process-main-title">
              Our Web Development <span className="highlight-yellow-glow">Engineering Roadmap</span>
            </h2>
          </div>

          <div className="process-cards-grid-v2">
            {process.map((p, idx) => (
              <div className="process-card-v2" key={idx}>
                <div className="card-top-row">
                  <div className="step-circle-badge"><span>{p.step}</span></div>
                  <h3 className="step-title-v2">{p.title}</h3>
                </div>
                <p className="step-desc-v2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Counter Bar */}
      <section className="py-12" style={{ background: 'linear-gradient(180deg, #0B0F19 0%, #05070F 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>200+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Websites Delivered</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>99+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Lighthouse Score</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>&lt;1s</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Average Load Latency</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>100%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Mobile Responsiveness</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs Accordion */}
      <section className="py-16" style={{ background: '#05070F' }}>
        <div className="section-container" style={{ maxWidth: '900px' }}>
          <div className="process-header-box text-center" style={{ marginBottom: '40px' }}>
            <h2 className="process-main-title">
              Frequently Asked <span className="highlight-yellow-glow">Questions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', overflow: 'hidden' }}
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, textAlign: 'left', cursor: 'pointer' }}
                  >
                    <span>{faq.q}</span>
                    <Icons.ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#34D399' }} />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 20px 24px', color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Banner */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B0F19 100%)' }}>
        <div className="section-container text-center">
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
              Ready to Build Your <span style={{ color: '#34D399' }}>High-Speed Website?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', marginBottom: '28px', lineHeight: 1.6 }}>
              Get a custom proposal and technical breakdown for your new website or web application project.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Custom Web Quote</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
