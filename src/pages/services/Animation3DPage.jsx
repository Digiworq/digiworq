import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';

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

export default function Animation3DPage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData['3d-animation'] || { categoryTitle: "3D Animation", services: [] };
  const activeSub = data.services.find(s => 
    !subServiceId ||
    s.id === subServiceId || 
    s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
    subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
  ) || data.services[0] || { title: "3D Animation", overview: "Photorealistic 3D architectural renders and motion graphics.", process: [] };

  const deliverables = activeSub.deliverables || [
    "4K UHD Photorealistic 3D Rendered Video Master Files",
    "High-Polygon 3D Mesh Models & PBR Texture Maps",
    "360-Degree Interactive Product Viewers & VR Assets",
    "Turnkey 3D Storyboarding, Lighting & Rigging Setup",
    "Social Media Cutdowns (16:9, 9:16 Vertical Reels)",
    "100% Commercial Copyright & Source File Handoff"
  ];

  const pillars = [
    {
      step: "01",
      icon: "Box",
      title: "High-Polygon 3D Mesh Modeling",
      desc: "Subdivision surface modeling crafted with organic topology for products, vehicles, and architectural structures."
    },
    {
      step: "02",
      icon: "Sparkles",
      title: "4K PBR Material Texturing",
      desc: "Physically-Based Rendering (PBR) metallic, glass, leather, and wood textures synced to studio HDRI lighting."
    },
    {
      step: "03",
      icon: "Cpu",
      title: "GPU Raytracing Render Engine",
      desc: "Blazing fast GPU Octane & Redshift raytracing for hyper-realistic global illumination and reflections."
    },
    {
      step: "04",
      icon: "Layers",
      title: "Exploded View Product Animations",
      desc: "Technical exploded-view mechanical assembly animations showing internal components and features."
    },
    {
      step: "05",
      icon: "Compass",
      title: "3D Architectural Walkthroughs",
      desc: "Immersive interior and exterior architectural fly-through tours for real estate developers and architects."
    },
    {
      step: "06",
      icon: "Video",
      title: "Multi-Format Render Exports",
      desc: "Exported in 4K resolution formatted for TV ads, web 3D viewers, YouTube, and mobile Reels."
    }
  ];

  const genericCons = [
    "Low-poly jagged 3D meshes with artificial plastic textures",
    "Dull flat lighting without realistic reflections or global illumination",
    "Jerky keyframe animations lacking physical weight and inertia",
    "Heavy un-optimized 3D assets that crash web browsers",
    "Slow rendering timelines taking months for a short commercial cut"
  ];

  const digiworqPros = [
    "Photorealistic subdivision 3D modeling & 4K PBR material texturing",
    "Octane & Redshift GPU raytracing with studio HDRI global illumination",
    "Exploded-view product feature callouts & technical motion physics",
    "Interactive WebGL & 360-degree product viewer asset integration",
    "Guaranteed Turnkey Delivery with Full 3D Source File Handoff"
  ];

  const processSteps = activeSub.process && activeSub.process.length >= 4 ? [
    { step: "01", title: activeSub.process[0].title || "3D CAD Modeling", desc: "Building high-poly 3D meshes from CAD files or product specs." },
    { step: "02", title: activeSub.process[1].title || "Texturing & Lighting", desc: "Applying 4K PBR materials, HDRI studio lighting & shaders." },
    { step: "03", title: activeSub.process[2].title || "Animation & Rigging", desc: "Rigging mechanical components & rendering raytraced keyframes." },
    { step: "04", title: activeSub.process[3].title || "4K Master Render", desc: "Post-processing color grade, audio mix & 4K video delivery." }
  ] : [
    { step: "01", title: "3D CAD Modeling", desc: "Building high-poly 3D meshes from CAD files or product specs." },
    { step: "02", title: "Texturing & Lighting", desc: "Applying 4K PBR materials, HDRI studio lighting & shaders." },
    { step: "03", title: "Animation & Rigging", desc: "Rigging mechanical components & rendering raytraced keyframes." },
    { step: "04", title: "4K Master Render", desc: "Post-processing color grade, audio mix & 4K video delivery." }
  ];

  const faqs = [
    {
      q: `Can you create 3D animations from CAD files or physical product samples?`,
      a: "Yes! We import STP, OBJ, FBX, or SolidWorks CAD files directly, or model your product from scratch using physical samples and dimensions."
    },
    {
      q: "What render engines do you use for photorealistic 3D visuals?",
      a: "We use Cinema 4D, Blender, Unreal Engine 5, Octane Render, and Redshift for GPU-accelerated raytracing."
    },
    {
      q: "Will I receive the 3D source files and model assets?",
      a: "Yes! Upon project completion, we hand over full copyright ownership, 4K video renders, and complete 3D project source files."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-3d-animation">
      {/* 1. Hero Section */}
      <section className="service-landing-hero hero-theme-3d-animation">
        <div className="section-container">
          <div className="service-breadcrumbs">
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub">3D Animation</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub.title}</span>
          </div>

          <div className="service-hero-grid marketeam-hero-grid">
            <div className="service-hero-left marketeam-hero-left">
              <div className="eventura-badge-pill" style={{ marginBottom: '16px' }}>
                <span className="eventura-badge-dot">●</span>
                <span>3D Animation Studio · Bangalore</span>
              </div>
              <h1 className="marketeam-typewriter-h1">
                <span className="part-white">{activeSub.title}</span> <span className="part-gradient">in Bangalore</span>
              </h1>
              <p className="marketeam-hero-subtext">{activeSub.overview}</p>
              <div className="marketeam-hero-cta-group">
                <div className="btn-border-wrap">
                  <button className="marketeam-primary-btn" onClick={onOpenContact}>
                    <span>Request 3D Render Quote</span>
                    <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="service-hero-right custom-service-widget-column">
              <Animation3DViewportWidget />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner">
            <h3>3D Render Specs & Deliverables:</h3>
            <div className="deliverables-pills-wrap">
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item">
                  <Icons.Box size={16} color="#A068FF" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Bento Grid for Core 3D Pillars */}
      <section className="service-bento-section-wrap" style={{ background: '#080C19' }}>
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '56px' }}>
            <h2 className="process-main-title">
              Our 6 Core <span className="highlight-yellow-glow">3D Animation Pillars</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem', maxWidth: '750px', margin: '12px auto 0 auto' }}>
              Photorealistic PBR texturing, GPU raytracing engines, and technical exploded animations.
            </p>
          </div>

          <div className="service-pillars-bento-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = Icons[pillar.icon] || Icons.Box;
              return (
                <div key={idx} className="service-pillar-card-item">
                  <div className="pillar-top-header-row">
                    <div className="pillar-icon-badge" style={{ borderColor: 'rgba(160, 104, 255, 0.4)', color: '#A068FF', background: 'rgba(160, 104, 255, 0.12)' }}>
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
              Low-Poly CAD Renders vs. <span className="highlight-yellow-glow">Digiworq Photorealistic 3D</span>
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '12px', fontSize: '1.05rem' }}>
              Why hardware and industrial brands choose Digiworq for high-end 3D visual production.
            </p>
          </div>

          <div className="comparison-cards-grid">
            <div className="comparison-card-danger">
              <div className="comparison-card-header">
                <span className="comparison-badge-danger">✕ Low-Poly CAD Renders</span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#EF4444' }}>
                Basic CAD Renders
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

            <div className="comparison-card-winner" style={{ borderColor: '#A068FF' }}>
              <div className="comparison-card-header">
                <span className="comparison-badge-winner" style={{ borderColor: '#A068FF', color: '#A068FF', background: 'rgba(160, 104, 255, 0.15)' }}>
                  ★ Digiworq 3D Studio
                </span>
              </div>
              <h3 className="comparison-card-title" style={{ marginBottom: '20px', color: '#A068FF' }}>
                Hyper-Realistic 4K 3D Animation
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
                  <span>Request 3D Render Quote</span>
                  <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="digiworq-process-section py-20">
        <div className="section-container">
          <div className="process-header-box text-center" style={{ marginBottom: '48px' }}>
            <h2 className="process-main-title">
              Our 4-Phase <span className="highlight-yellow-glow">3D Render Pipeline</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {processSteps.map((p, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)', 
                  border: '1px solid rgba(160, 104, 255, 0.3)', 
                  borderRadius: '20px', 
                  padding: '32px 28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <span style={{ background: '#A068FF', color: '#111827', fontWeight: 900, fontSize: '0.9rem', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
      <section className="py-14" style={{ background: 'linear-gradient(180deg, #0B0F19 0%, #05070F 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', textAlign: 'center', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A068FF' }}>150+</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>3D Renders Completed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5B800' }}>4K PBR</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Photorealistic Texturing</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34D399' }}>100%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Source Files Ownership</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#EC4899' }}>4.9/5</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '4px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 3D Engine Suite */}
      <section className="py-16" style={{ background: '#080C19' }}>
        <div className="section-container text-center">
          <h3 style={{ color: '#9CA3AF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 700 }}>
            Powered By Cinema 3D Raytracing & GPU Render Engines
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Cinema 4D R26', 'Blender 4.0', 'Unreal Engine 5', 'Octane Render GPU', 'Redshift Raytracer', 'Substance Painter', 'ZBrush Sculpting'].map((tool, idx) => (
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
                    <Icons.ChevronDown size={22} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: '#A068FF' }} />
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
              Ready to Render Your <span style={{ color: '#A068FF' }}>{activeSub.title}?</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Get a custom 3D modeling estimate and raytracing preview today.
            </p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Request 3D Render Quote</span>
                <Icons.ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
