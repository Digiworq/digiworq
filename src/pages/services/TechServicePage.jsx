import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

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

export default function TechServicePage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData.technology || { categoryTitle: "Technology Services", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Technology Services", overview: "Scalable web & software development.", process: [] };

  const deliverables = activeSub.deliverables || [
    "Full Source Code & Repository Ownership (GitHub / GitLab)",
    "Responsive React / Next.js / Node.js Application Stack",
    "Technical SEO, Schema Markup & Automated Sitemaps",
    "Database Architecture & Edge API Route Configurations",
    "Lighthouse 99+ Core Web Vitals Optimization",
    "24/7 Server Monitoring & Cloud Deployment Setup"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Zap",
      title: "Sub-Second Edge Latency",
      desc: "Architected on Vercel Edge Networks and AWS CloudFront for instantaneous page load speeds across global locations."
    },
    {
      step: "02",
      icon: "ShieldCheck",
      title: "Enterprise Cybersecurity",
      desc: "Built-in SSL encryption, DDoS mitigation, SQL injection shields, and automated database backup pipelines."
    },
    {
      step: "03",
      icon: "Search",
      title: "Deep Technical SEO Architecture",
      desc: "Semantic HTML5, automated XML sitemaps, OpenGraph metadata, and structured Schema JSON-LD markup."
    },
    {
      step: "04",
      icon: "Cpu",
      title: "Decoupled Headless Stack",
      desc: "Independent frontend and backend services allowing frictionless scalability to millions of monthly active users."
    },
    {
      step: "05",
      icon: "Smartphone",
      title: "Mobile-First Touch Ergonomics",
      desc: "Fluid gesture navigation, touch-optimized tap targets, and adaptive responsive layouts for iOS and Android."
    },
    {
      step: "06",
      icon: "Code2",
      title: "Clean Modular Codebase",
      desc: "Strict TypeScript typing, modular component structure, and comprehensive developer documentation for easy maintenance."
    }
  ];

  const genericCons = [
    "Slow WordPress templates bloated with heavy third-party plugins",
    "Poor Lighthouse scores (30-50/100) causing lower Google search rankings",
    "Vulnerable outdated code susceptible to malware and security hacks",
    "Vendor lock-in with closed proprietary page builders",
    "Zero mobile responsiveness tuning for complex screens"
  ];

  const digiworqPros = [
    "Modern Next.js 15 & React 19 custom code built for sub-second speeds",
    "Lighthouse 95+ performance, accessibility, and SEO benchmark scores",
    "Enterprise-grade security encryption, DDoS protection, and automated backups",
    "100% Full Source Code & GitHub Repository Ownership",
    "Custom scalable cloud architecture backed by Vercel and AWS infrastructure"
  ];

  const processSteps = activeSub.process && activeSub.process.length >= 4 ? [
    {
      step: "01",
      title: activeSub.process[0].title || "Architecture & Wireframing",
      desc: "We analyze functional requirements, build user journey wireframes, and design scalable cloud database schemas."
    },
    {
      step: "02",
      title: activeSub.process[1].title || "Frontend & API Development",
      desc: "Our engineers write clean TypeScript code, build responsive React components, and integrate REST/GraphQL APIs."
    },
    {
      step: "03",
      title: activeSub.process[2].title || "Security Audit & Performance Tuning",
      desc: "We perform rigorous cross-browser testing, accessibility checks, security audits, and Lighthouse speed optimization."
    },
    {
      step: "04",
      title: activeSub.process[3].title || "Cloud Deployment & Handoff",
      desc: "We deploy to Vercel/AWS, configure custom domains, set up automated CI/CD pipelines, and transfer source code."
    }
  ] : [
    {
      step: "01",
      title: "Architecture & Wireframing",
      desc: "We analyze functional requirements, build user journey wireframes, and design scalable cloud database schemas."
    },
    {
      step: "02",
      title: "Frontend & API Development",
      desc: "Our engineers write clean TypeScript code, build responsive React components, and integrate REST/GraphQL APIs."
    },
    {
      step: "03",
      title: "Security Audit & Performance Tuning",
      desc: "We perform rigorous cross-browser testing, accessibility checks, security audits, and Lighthouse speed optimization."
    },
    {
      step: "04",
      title: "Cloud Deployment & Handoff",
      desc: "We deploy to Vercel/AWS, configure custom domains, set up automated CI/CD pipelines, and transfer source code."
    }
  ];

  const faqs = activeSub.faqs && activeSub.faqs.length >= 3 ? activeSub.faqs : [
    {
      q: `What technology stack do you use for ${activeSub.title}?`,
      a: `We build ${activeSub.title} solutions using React, Next.js, Node.js, TypeScript, Python, Tailwind CSS, PostgreSQL, Vercel, and AWS cloud infrastructure.`
    },
    {
      q: "Will I get full access to the GitHub source code repository?",
      a: "Yes! Upon project completion, 100% of the GitHub repository, code rights, and deployment credentials belong entirely to your business."
    },
    {
      q: "Will the web application be optimized for Google search and mobile devices?",
      a: "Absolutely. 100% of our code is mobile-first responsive and audited to pass Google's Lighthouse performance standards."
    },
    {
      q: "Do you provide post-launch maintenance and technical support?",
      a: "Yes, we provide 24/7 technical monitoring, security updates, and cloud scaling support after launch."
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
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>Web & Software Engineering · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Tech Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId={activeSub.id || subServiceId} title={activeSub.title} />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>Technical Specs & Engineering Master Assets:</h3>
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

      {/* 2. Modern Bento Grid for Core Tech Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">Engineering Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Engineered for speed, security, and effortless scalability across global cloud networks.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Code;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(52, 211, 153, 0.4)', color: '#34D399', background: 'rgba(52, 211, 153, 0.12)' }}>
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

      {/* 3. Modern Split Comparison Showcase Deck */}
      <section className="service-comparison-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '52px' }}>
            <h2 className="process-main-title">
              Slow Legacy WordPress vs. <span className="highlight-yellow-glow">Digiworq Next.js Stack</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why modern tech startups choose custom React code over legacy page builders.
            </p>
          </div>

          <div className="comparison-cards-grid">
            {/* Left Card: Generic */}
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Bloated Legacy Builders</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                WordPress / Plugin Stack
              </h3>
              <div className="comparison-items-list">
                {genericCons.map((con, idx) => (
                  <div key={idx} className="comparison-list-item danger">
                    <div className="icon-box-danger">✕</div>
                    <span>{con}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Digiworq Winner */}
            <div className="comparison-card-winner" style={{ borderColor: '#34D399' }}>
              <div className="comparison-card-header">
                <span className="comparison-badge-winner" style={{ borderColor: '#34D399', color: '#34D399', background: 'rgba(52, 211, 153, 0.15)' }}>
                  ★ Digiworq Modern Stack
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#34D399' }}>
                Next.js 15 & React Code
              </h3>
              <div className="comparison-items-list" style={{ marginBottom: '28px' }}>
                {digiworqPros.map((pro, idx) => (
                  <div key={idx} className="comparison-list-item winner">
                    <div className="icon-box-winner">✓</div>
                    <span>{pro}</span>
                  </div>
                ))}
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Build Next.js Application</span>
                  <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Pipeline Section */}
      <section className="digiworq-process-section py-20">
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Our 4-Phase <span className="highlight-yellow-glow">Engineering Roadmap</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {processSteps.map((p, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)', 
                  border: '1px solid rgba(52, 211, 153, 0.3)', 
                  borderRadius: '20px', 
                  padding: '32px 28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <span style={{ background: '#34D399', color: '#111827', fontWeight: 900, fontSize: '0.9rem', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.step}
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Impact Stats Bar */}
      <section className="py-12" style={{ background: 'linear-gradient(180deg, #0B0F19 0%, #05070F 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>200+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Websites & Apps Built</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>99+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Lighthouse Performance</div>
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

      {/* 6. Tech Stack Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Modern Enterprise Web Technologies
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel Edge', 'AWS Cloud'].map((tool, idx) => (
              <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#D1D5DB', padding: '8px 18px', borderRadius: '20px', fontSize: '0.88rem', fontWeight: 600 }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Accordion */}
      <section className="service-faq-section-wrap" style={{ background: '#05070F' }}>
        <div className="section-container" style={{ maxWidth: '900px' }}>
          <div className="process-header-box text-center" style={{ marginBottom: '44px' }}>
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
                  style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '14px', overflow: 'hidden' }}
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '22px 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 700, textAlign: 'left', cursor: 'pointer' }}
                  >
                    <span>{faq.q}</span>
                    <Icons.ChevronDown size={22} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#34D399' }} />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 26px 24px 26px', color: '#9CA3AF', fontSize: '0.98rem', lineHeight: 1.7, borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '18px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="service-cta-banner-wrap" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B0F19 100%)' }}>
        <div className="section-container text-center">
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
              Ready to Build Your <span style={{ color: '#34D399' }}>{activeSub.title}?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom technical proposal and architecture breakdown for your business in Bangalore or global markets.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request Technical Quote</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
