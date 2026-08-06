import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

// Animated Counter Component counting up from 1 to target number
function AnimatedStatNumber({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const duration = 1800; // 1.8 seconds animation
    const steps = 45;
    const increment = Math.max(1, Math.floor((target - start) / steps));
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function WhyChooseUs({ onOpenContact }) {
  const pillars = [
    {
      icon: Icons.Target,
      title: "Data-Driven Strategy & ROI Focus",
      desc: "Every campaign and design is backed by deep market research, user psychology, and performance metrics engineered to maximize your return on investment."
    },
    {
      icon: Icons.Sparkles,
      title: "Bespoke 3D & Creative Excellence",
      desc: "We don't use cookie-cutter templates. Our design studio crafts custom 3D artwork, modern UI/UX interfaces, and distinctive brand identities."
    },
    {
      icon: Icons.Layers,
      title: "Full-Funnel Digital Capability",
      desc: "From web development and mobile apps to video production and performance marketing, we manage your complete digital ecosystem under one roof."
    },
    {
      icon: Icons.Zap,
      title: "Transparent Partnership & Agile Delivery",
      desc: "Enjoy direct access to senior strategists, agile sprint execution, clear weekly reporting, and guaranteed on-time project milestones."
    }
  ];

  return (
    <section className="why-choose-us-section">
      <div className="section-container">
        {/* Header Title Box Matching Eventura Design */}
        <div className="eventura-section-header">
          <span className="eventura-sub-tag">WHY CHOOSE US</span>
          <h2 className="eventura-section-title">
            Why Leading Brands Partner.<br />
            <span className="eventura-text-indigo-gradient">Here's why they choose Digiworq.</span>
          </h2>
          <p className="eventura-section-desc">
            We combine cutting-edge technology, strategic branding expertise, and performance-driven digital marketing to help your business outpace the competition.
          </p>
        </div>

        {/* Dual-Column Main Content Grid */}
        <div className="why-choose-content-grid">
          {/* Left Column: Visual Showcase Card */}
          <div className="why-left-visual-card">
            <div className="why-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Digiworq Creative & Tech Team in Bangalore" 
                className="why-hero-img"
              />
              <div className="why-img-overlay"></div>
              <div className="why-floating-badge">
                <Icons.CheckCircle2 size={16} className="badge-check-gold" />
                <span>#1 Rated Digital Agency in Bangalore</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Value Pillars List */}
          <div className="why-right-pillars-list">
            {pillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="why-pillar-card">
                  <div className="pillar-icon-box">
                    <IconComp size={22} />
                  </div>
                  <div className="pillar-text-box">
                    <h3 className="pillar-title">{p.title}</h3>
                    <p className="pillar-desc">{p.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Bottom CTA Action Button */}
            <div className="why-cta-row">
              <button className="btn-yellow-solid-why" onClick={onOpenContact}>
                <span>Partner with Digiworq</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Ultra-Attractive Dark Charcoal & Gold Standalone Metrics Box */}
        <div className="standalone-stats-container-box-v2">
          <div className="stats-box-ambient-glow"></div>

          <div className="stats-box-header-v2">
            <Icons.Sparkles size={16} className="sparkle-gold-icon" />
            <span>AGENCY PERFORMANCE METRICS</span>
            <Icons.Sparkles size={16} className="sparkle-gold-icon" />
          </div>

          <div className="standalone-stats-grid-v2">
            <div className="standalone-stat-card-v2">
              <div className="stat-card-icon-circle">
                <Icons.ShieldCheck size={20} />
              </div>
              <h3 className="standalone-stat-num-v2">
                <AnimatedStatNumber target={99} suffix="%+" />
              </h3>
              <span className="standalone-stat-label-v2">Client Retention</span>
            </div>

            <div className="standalone-stat-card-v2 highlighted-card-v2">
              <div className="stat-card-icon-circle gold">
                <Icons.Rocket size={20} />
              </div>
              <h3 className="standalone-stat-num-v2 highlight-gold">
                <AnimatedStatNumber target={500} suffix="+" />
              </h3>
              <span className="standalone-stat-label-v2">Projects Delivered</span>
            </div>

            <div className="standalone-stat-card-v2">
              <div className="stat-card-icon-circle">
                <Icons.Trophy size={20} />
              </div>
              <h3 className="standalone-stat-num-v2">
                <AnimatedStatNumber target={15} suffix="+" />
              </h3>
              <span className="standalone-stat-label-v2">Years Combined Exp.</span>
            </div>

            <div className="standalone-stat-card-v2">
              <div className="stat-card-icon-circle">
                <Icons.Clock size={20} />
              </div>
              <h3 className="standalone-stat-num-v2">
                <AnimatedStatNumber target={24} suffix="/7" />
              </h3>
              <span className="standalone-stat-label-v2">Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
