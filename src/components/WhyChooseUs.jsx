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
    <section className="why-choose-us-section marketeam-why-section">
      <div className="section-container">
        {/* Header Title Box Matching Marketeam Design */}
        <div className="eventura-section-header marketeam-header-center">
          <h2 className="marketeam-section-h2">
            Why Leading Brands Partner.<br />
            <span className="marketeam-text-gradient">Here's why they choose Digiworq.</span>
          </h2>
          <p className="marketeam-section-subdesc">
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
              <div className="why-floating-badge badge-top marketeam-glass-pill-badge">
                <Icons.CheckCircle2 size={16} color="#A068FF" />
                <span>#1 Rated Digital Agency in Bangalore</span>
              </div>
              <div className="why-floating-badge badge-bottom-right marketeam-glass-pill-badge">
                <Icons.Zap size={16} color="#F5B800" />
                <span>100+ AI Workflows Live</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Value Pillars List (Open Space Nodes) */}
          <div className="why-right-pillars-list">
            {pillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="why-pillar-open-node marketeam-pillar-node">
                  <div className="pillar-icon-capsule marketeam-icon-capsule">
                    <IconComp size={22} color="#A068FF" />
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
              <div className="btn-border-wrap">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Partner with Digiworq</span>
                  <Icons.ArrowRight size={18} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Floating Holographic Metric Spheres */}
        <div className="holographic-metrics-section">
          <div className="metrics-header-tag marketeam-purple-tag">
            <Icons.Sparkles size={16} color="#A068FF" />
            <span>AGENCY PERFORMANCE METRICS</span>
            <Icons.Sparkles size={16} color="#A068FF" />
          </div>

          <div className="holographic-spheres-grid">
            <div className="metric-glass-sphere">
              <div className="sphere-glow-aura purple"></div>
              <div className="sphere-icon-circle purple">
                <Icons.ShieldCheck size={24} color="#A068FF" />
              </div>
              <h3 className="sphere-number-text purple-glow">
                <AnimatedStatNumber target={99} suffix="%+" />
              </h3>
              <span className="sphere-label-text">Client Retention</span>
            </div>

            <div className="metric-glass-sphere highlight-gold-sphere">
              <div className="sphere-glow-aura gold"></div>
              <div className="sphere-icon-circle gold">
                <Icons.Rocket size={26} color="#F5B800" />
              </div>
              <h3 className="sphere-number-text gold-glow">
                <AnimatedStatNumber target={500} suffix="+" />
              </h3>
              <span className="sphere-label-text highlight">Projects Delivered</span>
            </div>

            <div className="metric-glass-sphere">
              <div className="sphere-glow-aura purple"></div>
              <div className="sphere-icon-circle purple">
                <Icons.Trophy size={24} color="#A068FF" />
              </div>
              <h3 className="sphere-number-text purple-glow">
                <AnimatedStatNumber target={15} suffix="+" />
              </h3>
              <span className="sphere-label-text">Years Combined Exp.</span>
            </div>

            <div className="metric-glass-sphere">
              <div className="sphere-glow-aura blue"></div>
              <div className="sphere-icon-circle blue">
                <Icons.Clock size={24} color="#3B82F6" />
              </div>
              <h3 className="sphere-number-text blue-glow">
                <AnimatedStatNumber target={24} suffix="/7" />
              </h3>
              <span className="sphere-label-text">Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
