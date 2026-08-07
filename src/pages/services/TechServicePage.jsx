import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

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
  const data = allCategoriesData.technology || { categoryTitle: "Technology Services", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "Technology Services", overview: "Custom website, mobile app & software development.", process: [] };

  return (
    <div className="digiworq-service-page-root theme-technology">
      <section className="service-landing-hero hero-theme-technology">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">Technology Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">Engineers</span>
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
              <TechTerminalWidget />
            </div>
          </div>

          {activeSub?.deliverables && activeSub.deliverables.length > 0 && (
            <div className="subservice-deliverables-banner">
              <h3>Technical Stack & Deliverables:</h3>
              <div className="deliverables-pills-wrap">
                {activeSub.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliv-pill-item">
                    <Icons.Code2 size={16} color="#34D399" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="digiworq-process-section">
        <div className="section-container">
          <div className="process-header-box">
            <h2 className="process-main-title">
              Our {activeSub?.title || "Tech"} <span className="highlight-yellow-glow">Engineering Roadmap</span>
            </h2>
          </div>

          <div className="process-cards-grid-v2">
            {activeSub?.process && activeSub.process.map((p, idx) => (
              <div className="process-card-v2" key={idx}>
                <div className="card-top-row">
                  <div className="step-circle-badge"><span>{p.step || idx+1}</span></div>
                  <h3 className="step-title-v2">{p.title}</h3>
                </div>
                <p className="step-desc-v2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
