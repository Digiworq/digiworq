import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../data/allServicesPageData';
import ServiceIllustrationCard from './ServiceIllustrationCard';

const ceoAvatarImg = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';

// ============================================================================
// 1. Creative Studio Widget (Brand Palette & Identity Generator)
// ============================================================================
function CreativeStudioWidget() {
  const [activeColor, setActiveColor] = useState('#A068FF');
  const colors = ['#A068FF', '#F5B800', '#10B981', '#3B82F6', '#EC4899'];

  return (
    <div className="custom-widget-card creative-widget-box">
      <div className="widget-header-row">
        <Icons.Palette size={20} color="#F5B800" />
        <span className="widget-title-text">Interactive Brand Identity Studio</span>
      </div>
      <p className="widget-subdesc">Test dynamic brand color palettes & atmospheric container themes live:</p>
      
      <div className="palette-color-picker-row">
        {colors.map((c, idx) => (
          <button 
            key={idx} 
            className={`palette-circle ${activeColor === c ? 'active' : ''}`} 
            style={{ backgroundColor: c }}
            onClick={() => setActiveColor(c)}
          />
        ))}
      </div>

      <div className="brand-preview-canvas" style={{ borderColor: `${activeColor}66`, boxShadow: `0 10px 30px ${activeColor}33` }}>
        <div className="canvas-logo-mark" style={{ backgroundColor: `${activeColor}22`, color: activeColor }}>
          <Icons.Sparkles size={28} />
        </div>
        <div className="canvas-text-group">
          <h4 style={{ color: '#FFFFFF' }}>DIGIWORQ BRANDING</h4>
          <span style={{ color: activeColor, fontWeight: 700, fontSize: '0.85rem' }}>Atmospheric 3D Brand System</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. Tech Terminal Widget (Cyber Code & API Console)
// ============================================================================
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

// ============================================================================
// 3. Video Production Widget (Cinematic 4K Theater Deck)
// ============================================================================
function VideoTheaterWidget() {
  const [resolution, setResolution] = useState('4K Ultra HD');

  return (
    <div className="custom-widget-card video-theater-box">
      <div className="theater-screen-mockup">
        <div className="screen-play-overlay">
          <div className="play-button-pulse">
            <Icons.Play size={32} color="#111827" fill="#111827" />
          </div>
          <span className="video-time-badge">01:45 / 03:00 — 4K ProRes LOG</span>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80" 
          alt="Cinematic Video Production Shoot" 
          className="video-poster-img"
        />
      </div>

      <div className="theater-controls-bar">
        <div className="res-picker-row">
          <span className="res-label">Master Render Quality:</span>
          {['4K Ultra HD', '1080p 60fps', 'Cinema LOG'].map((res) => (
            <button key={res} className={`res-pill ${resolution === res ? 'active' : ''}`} onClick={() => setResolution(res)}>
              {res}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. Digital Marketing Widget (ROAS Growth Calculator)
// ============================================================================
function MarketingRoiWidget() {
  const [budget, setBudget] = useState(50000);
  const estimatedRoas = 8.4;
  const projectedRevenue = Math.round(budget * estimatedRoas);

  return (
    <div className="custom-widget-card marketing-roi-box">
      <div className="widget-header-row">
        <Icons.TrendingUp size={20} color="#10B981" />
        <span className="widget-title-text">Live ROAS Campaign Revenue Calculator</span>
      </div>

      <div className="slider-control-group">
        <div className="slider-label-row">
          <span>Monthly Ad Spend (INR):</span>
          <span className="slider-val">₹{budget.toLocaleString()}</span>
        </div>
        <input 
          type="range" 
          min="10000" 
          max="500000" 
          step="10000" 
          value={budget} 
          onChange={(e) => setBudget(Number(e.target.value))}
          className="roi-slider-input"
        />
      </div>

      <div className="roi-metrics-grid">
        <div className="metric-box">
          <span className="m-label">Target ROAS</span>
          <span className="m-val yellow">{estimatedRoas}x</span>
        </div>
        <div className="metric-box">
          <span className="m-label">Projected Sales</span>
          <span className="m-val green">₹{projectedRevenue.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 5. 2D Animation Widget (Vector Motion Canvas)
// ============================================================================
function Animation2DCanvasWidget() {
  return (
    <div className="custom-widget-card anim2d-canvas-box">
      <div className="widget-header-row">
        <Icons.Zap size={20} color="#F5B800" />
        <span className="widget-title-text">2D Vector Motion & Easing Curve Studio</span>
      </div>

      <div className="motion-curve-graphic">
        <svg viewBox="0 0 300 120" className="curve-svg">
          <path d="M 20 100 C 80 10, 220 10, 280 100" stroke="#A068FF" strokeWidth="4" fill="none" />
          <circle cx="150" cy="40" r="10" fill="#F5B800" className="bouncing-ball-demo" />
          <line x1="20" y1="100" x2="280" y2="100" stroke="#374151" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="timeline-keyframes-bar">
        <span className="kf-dot">Keyframe 0s</span>
        <span className="kf-dot active">Ease-Out 1.2s</span>
        <span className="kf-dot">Loop 2.4s</span>
      </div>
    </div>
  );
}

// ============================================================================
// 6. 3D Animation Widget (3D Viewport Shader Controller)
// ============================================================================
function Animation3DViewportWidget() {
  const [shader, setShader] = useState('Metallic Gold');

  return (
    <div className="custom-widget-card anim3d-viewport-box">
      <div className="viewport-3d-canvas">
        <div className="cube-3d-wrapper">
          <div className="cube-3d-shape">
            <div className="face front">{shader}</div>
            <div className="face back">PBR 4K</div>
            <div className="face right">Raytrace</div>
            <div className="face left">Studio</div>
            <div className="face top">HDRI</div>
            <div className="face bottom">Digiworq</div>
          </div>
        </div>
      </div>

      <div className="shader-picker-row">
        <span className="s-label">Material Shader:</span>
        {['Metallic Gold', 'Frosted Glass', 'Cyber Chrome'].map((s) => (
          <button key={s} className={`shader-btn ${shader === s ? 'active' : ''}`} onClick={() => setShader(s)}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// 7. Printing Solutions Widget (Paper Stock & Finish Inspector)
// ============================================================================
function PrintInspectorWidget() {
  const [finish, setFinish] = useState('Gold Foil');

  return (
    <div className="custom-widget-card print-inspector-box">
      <div className="widget-header-row">
        <Icons.Printer size={20} color="#F5B800" />
        <span className="widget-title-text">CMYK Print Finish & Tactile Inspector</span>
      </div>

      <div className="print-card-sample-preview">
        <div className={`sample-card-texture ${finish.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="card-logo-gold">DIGIWORQ</div>
          <div className="card-finish-tag">{finish} Finish</div>
          <span className="paper-gsm-tag">350 GSM Cotton Cardstock</span>
        </div>
      </div>

      <div className="finish-toggle-row">
        {['Gold Foil', 'Spot UV Gloss', 'Deep Embossing'].map((f) => (
          <button key={f} className={`finish-btn ${finish === f ? 'active' : ''}`} onClick={() => setFinish(f)}>
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// 8. Photography Widget (Studio Camera Viewfinder)
// ============================================================================
function PhotoViewfinderWidget() {
  return (
    <div className="custom-widget-card photo-viewfinder-box">
      <div className="viewfinder-hud">
        <div className="hud-corner top-left"></div>
        <div className="hud-corner top-right"></div>
        <div className="hud-corner bottom-left"></div>
        <div className="hud-corner bottom-right"></div>

        <div className="hud-center-crosshair"></div>
        <span className="hud-rec-dot">● REC 4K</span>

        <div className="hud-camera-settings">
          <span>f/1.4</span>
          <span>1/1000s</span>
          <span>ISO 100</span>
          <span>85mm Prime</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" 
          alt="Studio Photography Viewfinder" 
          className="hud-bg-img"
        />
      </div>
    </div>
  );
}

// ============================================================================
// 9. Videography Widget (4K Broadcast Multi-Cam Switcher)
// ============================================================================
function VideographyBroadcastWidget() {
  const [activeCam, setActiveCam] = useState('CAM 1');

  return (
    <div className="custom-widget-card videography-broadcast-box">
      <div className="widget-header-row">
        <Icons.Radio size={20} color="#EF4444" />
        <span className="widget-title-text">4K Multi-Cam Broadcast Switcher Deck</span>
      </div>

      <div className="cam-feed-preview">
        <div className="feed-status-tag">LIVE: {activeCam} OUTPUT</div>
        <img 
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" 
          alt="Broadcast Feed" 
          className="feed-img"
        />
      </div>

      <div className="cam-switcher-grid">
        {['CAM 1 (Stage)', 'CAM 2 (Audience)', 'CAM 3 (4K Drone)'].map((cam) => (
          <button key={cam} className={`cam-btn ${activeCam === cam ? 'active' : ''}`} onClick={() => setActiveCam(cam)}>
            {cam}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Category Custom Renderer Selector
// ============================================================================
function RenderCategoryCustomWidget({ categoryId }) {
  switch (categoryId) {
    case 'creative':
      return <CreativeStudioWidget />;
    case 'technology':
      return <TechTerminalWidget />;
    case 'video-production':
      return <VideoTheaterWidget />;
    case 'digital-marketing':
      return <MarketingRoiWidget />;
    case '2d-animation':
      return <Animation2DCanvasWidget />;
    case '3d-animation':
      return <Animation3DViewportWidget />;
    case 'printing-solutions':
      return <PrintInspectorWidget />;
    case 'photography':
      return <PhotoViewfinderWidget />;
    case 'videography':
      return <VideographyBroadcastWidget />;
    default:
      return <CreativeStudioWidget />;
  }
}

function GeneratedCeoAvatar({ isCardHovered }) {
  return (
    <div className="ceo-avatar-hover-container">
      <div className={`ceo-circle-white-border ${isCardHovered ? 'is-hovered' : ''}`}>
        <img 
          src={ceoAvatarImg} 
          alt="RK CEO Executive 3D Avatar" 
          className="ceo-avatar-suit-img"
        />
      </div>
    </div>
  );
}

export default function ServicePage({ categoryId = "creative", subServiceId, initialServiceId, onOpenContact, onBackHome }) {
  const [isCeoCardHovered, setIsCeoCardHovered] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const targetSubId = subServiceId || initialServiceId;
  const categoryData = allCategoriesData[categoryId] || allCategoriesData.creative;
  const servicesList = categoryData.services || [];

  const activeService = servicesList.find(s => s.id === targetSubId) || servicesList[0] || {
    title: categoryData.categoryTitle,
    tagline: categoryData.heroSubtext,
    overview: categoryData.heroSubtext,
    deliverables: [],
    process: []
  };

  const processSteps = activeService.process || [
    {
      num: "01",
      title: `${activeService.title.split(' ')[0]} Discovery`,
      duration: "2-3 Days",
      desc: "Deep research into your target audience, competitive benchmarking, and core requirements.",
      tags: ["Discovery Audit", "Market Research", "Positioning"]
    },
    {
      num: "02",
      title: `${activeService.title.split(' ')[0]} Architecture & Design`,
      duration: "3-5 Days",
      desc: "Formulating storyboards, wireframes, concepts, and technical architecture blueprints.",
      tags: ["Concept Design", "Blueprint Setup", "Wireframing"]
    },
    {
      num: "03",
      title: `${activeService.title.split(' ')[0]} Production & Execution`,
      duration: "5-7 Days",
      desc: "High-precision development, rendering, shooting, or campaign execution.",
      tags: ["Agile Production", "QA Testing", "Refinement"]
    },
    {
      num: "04",
      title: `${activeService.title.split(' ')[0]} Launch & Scaling`,
      duration: "Ongoing",
      desc: "Final delivery of production assets, cloud deployment, and performance monitoring.",
      tags: ["Asset Handoff", "Live Deployment", "Growth Monitoring"]
    }
  ];

  const scrollToDetails = () => {
    const el = document.querySelector('.digiworq-process-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className={`digiworq-service-page-root theme-${categoryId}`}>
      {/* Category-Specific Styled Hero Banner */}
      <section className={`service-landing-hero hero-theme-${categoryId}`}>
        <div className="section-container">
          {/* Breadcrumb Links */}
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">{categoryData.categoryTitle}</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeService.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            {/* Left Hero Text Column */}
            <div className="service-hero-left marketeam-hero-left">
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeService.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>

              <p className="marketeam-hero-subtext">
                {activeService.overview || `Digiworq is Bangalore's premier ${activeService.title.toLowerCase()} agency. We engineer market-defining digital presences.`}
              </p>

              {/* Action Buttons */}
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>

                <button className="marketeam-secondary-btn" onClick={scrollToDetails}>
                  Explore Details ↓
                </button>
              </div>
            </div>

            {/* Right Custom Unique Category & Sub-Service Interactive Widget */}
            <div className="service-hero-right custom-service-widget-column">
              <ServiceIllustrationCard serviceId={subServiceId || categoryId} title={activeService.title} />
            </div>
          </div>

          {/* Organic Floating Glass Quote Capsule */}
          <div className="service-quote-callout-card marketeam-quote-glass-capsule">
            <span className="quote-mark left">“</span>
            <p className="quote-text">
              Digiworq provides end-to-end {activeService.title.toLowerCase()} solutions tailored for ambitious startups, enterprise brands, and market leaders aiming to dominate competitive landscapes.
            </p>
            <span className="quote-mark right">”</span>
          </div>

          {/* Sub-Service Deliverables Grid */}
          {activeService.deliverables && activeService.deliverables.length > 0 && (
            <div className="subservice-deliverables-banner">
              <h3>Key Deliverables & Specifications:</h3>
              <div className="deliverables-pills-wrap">
                {activeService.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="deliv-pill-item">
                    <Icons.CheckCircle2 size={16} color="#F5B800" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CEO Quote Section */}
          <div className="ceo-quote-section-container">
            <div className="ceo-quote-layout-grid">
              <div 
                className="ceo-gold-gradient-card"
                onMouseEnter={() => setIsCeoCardHovered(true)}
                onMouseLeave={() => setIsCeoCardHovered(false)}
              >
                <GeneratedCeoAvatar isCardHovered={isCeoCardHovered} />
                <h3 className="ceo-name-gold" style={{ color: '#F5B800', fontStyle: 'normal', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>RK</h3>
                <div className="ceo-gold-underline"></div>
                <div className="ceo-dark-pill-badge">
                  <span>CEO at Digiworq</span>
                </div>
              </div>

              <div className="ceo-center-yellow-line"></div>

              <div className="ceo-quote-right-box">
                <span className="ceo-quote-symbol top">“</span>
                <blockquote className="ceo-quote-text-paragraph">
                  In a world where customers seek authenticity and connection with their audience, we help them shape their company's identity. By actively engaging your audience through thoughtful branding and identity-building strategies, we enrich your brand to future-proof it for assured success.
                </blockquote>
                <span className="ceo-quote-symbol bottom">”</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Process Section */}
      <section className="digiworq-process-section">
        <div className="section-container">
          <div className="process-header-box">
            <h2 className="process-main-title">
              Our {activeService.title} <span className="highlight-yellow-glow">Execution Roadmap</span>
            </h2>
            <div className="process-title-yellow-glow-line"></div>
          </div>

          <div className="process-cards-grid-v2">
            {processSteps.map((p, idx) => (
              <div className="process-card-v2" key={idx}>
                <div className="card-top-ribbon"></div>

                <div className="card-top-row">
                  <div className="step-circle-badge">
                    <span>{p.num}</span>
                  </div>
                  <div className="step-title-group">
                    <h3 className="step-title-v2">{p.title}</h3>
                    <span className="duration-pill">{p.duration || "Phase"}</span>
                  </div>
                </div>

                <p className="step-desc-v2">{p.desc}</p>

                {p.tags && p.tags.length > 0 && (
                  <div className="deliverables-sub-box">
                    <h4 className="deliverables-sub-title">Deliverables:</h4>
                    <div className="deliverables-pills-list">
                      {p.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="deliverable-tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {activeService.faqs && activeService.faqs.length > 0 && (
        <section className="service-faq-section">
          <div className="section-container">
            <h2 className="faq-main-title">Frequently Asked Questions</h2>
            <div className="faq-list-accordion">
              {activeService.faqs.map((faq, fIdx) => (
                <div key={fIdx} className={`faq-acc-item ${activeFaqIndex === fIdx ? 'active' : ''}`} onClick={() => toggleFaq(fIdx)}>
                  <div className="faq-acc-header">
                    <h4>{faq.q}</h4>
                    <Icons.ChevronDown size={18} className="faq-arrow" />
                  </div>
                  {activeFaqIndex === fIdx && <p className="faq-acc-body">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
