import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';
const logoMark = '/digiworq-logo.png';

const PROMPT_SAMPLES = [
  "SEO & Web Design in Bangalore · 500k Reach · ₹1,50,000 budget",
  "Branding & Commercial Video Shoot · 500 Guests · ₹2,50,000 budget",
  "Performance Marketing & Social Media · Pan-India · ₹1,00,000 budget",
  "3D Product Animation & Rebranding · Global · ₹3,00,000 budget"
];

export default function Hero({ onOpenContact }) {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const [sampleIdx, setSampleIdx] = useState(0);

  // Full-Screen High-Density Moving Gold Lights Canvas (Matching Eventura Photo 1 100%)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const updateCanvasDimensions = () => {
      const parent = heroRef.current || canvas.parentElement;
      canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : Math.max(window.innerHeight, 750);
    };

    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions);

    // Initialize 300 particle lights evenly distributed across full width & height
    const width = canvas.width || window.innerWidth;
    const height = canvas.height || 800;

    const particles = Array.from({ length: 300 }, () => {
      const isSquare = Math.random() > 0.76;
      const isLarge = Math.random() > 0.85;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isLarge ? Math.random() * 2.2 + 1.2 : Math.random() * 1.4 + 0.4,
        size: isLarge ? Math.random() * 3.5 + 2.0 : Math.random() * 2.0 + 0.8,
        color: Math.random() > 0.25 ? '#F5B800' : (Math.random() > 0.5 ? '#FEF08A' : (Math.random() > 0.5 ? '#F97316' : '#FFFFFF')),
        alpha: Math.random() * 0.85 + 0.15,
        alphaSpeed: (Math.random() - 0.5) * 0.015,
        vx: (Math.random() - 0.5) * 0.3,
        vy: - (Math.random() * 0.35 + 0.1),
        isSquare,
        isLarge
      };
    });

    const render = () => {
      const currentWidth = canvas.width || window.innerWidth;
      const currentHeight = canvas.height || 800;
      ctx.clearRect(0, 0, currentWidth, currentHeight);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaSpeed;

        if (p.alpha <= 0.1 || p.alpha >= 0.95) p.alphaSpeed = -p.alphaSpeed;
        if (p.x < 0) p.x = currentWidth;
        if (p.x > currentWidth) p.x = 0;
        if (p.y < 0) p.y = currentHeight;

        ctx.globalAlpha = Math.max(0.08, Math.min(1, p.alpha));
        ctx.fillStyle = p.color;

        if (p.isSquare) {
          ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        if (p.isLarge) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(245, 184, 0, 0.15)';
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Cycle through prompt samples every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSampleIdx((prev) => (prev + 1) % PROMPT_SAMPLES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={heroRef} className="eventura-hero-section">
      {/* 300 Moving Light Canvas */}
      <canvas ref={canvasRef} className="eventura-hero-canvas" />

      {/* Ambient Radial Spotlights */}
      <div className="eventura-purple-spotlight" />
      <div className="eventura-gold-spotlight" />

      <div className="section-container eventura-hero-container">
        {/* Top Floating Badge */}
        <div className="eventura-badge-pill">
          <span className="eventura-badge-dot">●</span>
          <span>AI-powered digital growth · now in Bangalore</span>
        </div>

        <div className="eventura-hero-grid">
          {/* Left Column: Headline & CTAs */}
          <div className="eventura-hero-left">
            <h1 className="eventura-hero-title">
              Refine your <br />
              entire brand <br />
              in <span className="eventura-text-gold">one agency.</span>
            </h1>

            <p className="eventura-hero-subtext">
              Tell Digiworq what you're building. It crafts custom strategies, designs world-class websites, runs high-ROI campaigns, and builds your digital presence — while you watch.
            </p>

            {/* Action Buttons */}
            <div className="eventura-hero-cta-group">
              <button className="eventura-primary-btn" onClick={onOpenContact}>
                Get started →
              </button>
              <a href="#services" className="eventura-secondary-btn">
                Explore services
              </a>
            </div>

            {/* Bottom 3 Performance Stats */}
            <div className="eventura-hero-stats-row">
              <div className="eventura-hero-stat">
                <span className="stat-val">500+</span>
                <span className="stat-lbl">delivered projects</span>
              </div>
              <div className="eventura-hero-stat">
                <span className="stat-val">100%</span>
                <span className="stat-lbl">human-verified results</span>
              </div>
              <div className="eventura-hero-stat">
                <span className="stat-val">₹</span>
                <span className="stat-lbl">transparent pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live AI Strategy Preview Card */}
          <div className="eventura-hero-right">
            <div className="eventura-preview-card">
              {/* Header Bar */}
              <div className="eventura-card-top-bar">
                <span className="yellow-dot">■</span>
                <span className="card-top-text">{PROMPT_SAMPLES[sampleIdx]}</span>
              </div>

              {/* Status Indicator */}
              <div className="eventura-card-status">
                <Sparkles size={14} className="sparkle-gold-icon" />
                <span>Assembling your growth strategy...</span>
              </div>

              {/* 5 Real-Time Execution Milestones */}
              <div className="eventura-milestones-list">
                <div className="milestone-item active">
                  <div className="milestone-icon-box">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="milestone-info">
                    <span className="milestone-title">Market research complete</span>
                    <span className="milestone-desc">Bangalore competitor audit & keyword strategy</span>
                  </div>
                  <CheckCircle2 size={16} className="check-icon-gold" />
                </div>

                <div className="milestone-item active">
                  <div className="milestone-icon-box">
                    <Sparkles size={16} />
                  </div>
                  <div className="milestone-info">
                    <span className="milestone-title">Bespoke UI/UX & Web Engine matched</span>
                    <span className="milestone-desc">React + Vite + 3D Animation Studio stack</span>
                  </div>
                  <CheckCircle2 size={16} className="check-icon-gold" />
                </div>

                <div className="milestone-item active">
                  <div className="milestone-icon-box">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="milestone-info">
                    <span className="milestone-title">Creative video shoot scheduled</span>
                    <span className="milestone-desc">Indoor studio & outdoor drone coverage</span>
                  </div>
                  <CheckCircle2 size={16} className="check-icon-gold" />
                </div>

                <div className="milestone-item active">
                  <div className="milestone-icon-box">
                    <Sparkles size={16} />
                  </div>
                  <div className="milestone-info">
                    <span className="milestone-title">Performance campaign staged</span>
                    <span className="milestone-desc">Google Ads + Meta lead forms + Influencer outreach</span>
                  </div>
                  <CheckCircle2 size={16} className="check-icon-gold" />
                </div>

                <div className="milestone-item active">
                  <div className="milestone-icon-box">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="milestone-info">
                    <span className="milestone-title">ROI dashboard activated</span>
                    <span className="milestone-desc">Real-time leads, traffic, and conversion tracking</span>
                  </div>
                  <CheckCircle2 size={16} className="check-icon-gold" />
                </div>
              </div>

              <div className="eventura-card-footer">
                <span>One agency. One platform. Every deliverable.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="eventura-scroll-indicator">
          <span>scroll to see it work</span>
          <ChevronDown size={14} />
        </div>
      </div>
    </section>
  );
}
