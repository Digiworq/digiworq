import React from 'react';
import * as Icons from 'lucide-react';

export default function HomeProcessSection() {
  const steps = [
    {
      num: "01",
      icon: Icons.Compass,
      title: "Discovery & Strategy",
      desc: "We analyze your market, competitors, and target audience to build a bulletproof strategic roadmap tailored for scalable growth.",
      tags: ["Competitor Audit", "User Personas", "Brand Strategy"],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "02",
      icon: Icons.Palette,
      title: "Creative & Conceptual Design",
      desc: "Our design studio crafts bespoke brand identity assets, modern UI/UX layouts, and captivating creative media.",
      tags: ["Logo & Brand Book", "UI/UX Prototypes", "Design System"],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "03",
      icon: Icons.Code2,
      title: "Engineering & Execution",
      desc: "We engineer robust web applications, high-performance software, and cinematic video productions built for maximum engagement.",
      tags: ["Full-Stack Dev", "Video Production", "SEO Architecture"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "04",
      icon: Icons.TrendingUp,
      title: "Launch, Optimize & Scale",
      desc: "We deploy your project seamlessly, monitor real-time user metrics, and continuously optimize for top conversion rates.",
      tags: ["Production Launch", "Conversion Optimization", "24/7 Support"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="home-process-section-v2">
      {/* Background Ambient Glow Lights */}
      <div className="process-ambient-glow left"></div>
      <div className="process-ambient-glow right"></div>

      <div className="section-container">
        {/* Header Showcase */}
        <div className="home-process-header-v2">
          <div className="process-badge-glow">
            <Icons.Sparkles size={14} className="badge-sparkle-yellow" />
            <span>HOW WE WORK</span>
          </div>

          <h2 className="home-process-h2-v2">
            Our Proven <span className="highlight-yellow-text">4-Step Process</span>
          </h2>

          <p className="home-process-p-v2">
            From strategic discovery to final launch, we follow a data-driven, creative methodology engineered for digital growth and brand excellence.
          </p>

          <div className="process-header-glow-line"></div>
        </div>

        {/* 4 Process Cards Grid with Connecting Flow */}
        <div className="process-timeline-wrapper">
          {/* Horizontal Connecting Flow Line for Desktop */}
          <div className="process-connecting-line-desktop">
            <div className="line-pulse-glow"></div>
          </div>

          <div className="home-process-grid-v2">
            {steps.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <div className="home-process-card-v2" key={idx}>
                  {/* Photo Header with Dark Gradient Overlay */}
                  <div className="card-photo-header">
                    <img src={s.image} alt={s.title} className="process-photo-img" />
                    <div className="card-photo-gradient-overlay"></div>

                    {/* Step Golden Badge Circle */}
                    <div className="process-number-badge-v2">
                      <span>{s.num}</span>
                    </div>

                    {/* Icon Category Pill */}
                    <div className="process-icon-category-pill">
                      <IconComp size={14} />
                      <span>Phase 0{idx + 1}</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="card-body-v2">
                    <h3 className="process-card-title-v2">{s.title}</h3>
                    <p className="process-card-desc-v2">{s.desc}</p>

                    {/* Deliverables Sub Box */}
                    <div className="process-deliverables-box-v2">
                      <div className="deliverables-sub-head">
                        <Icons.CheckCircle2 size={13} className="check-icon-gold" />
                        <span>Deliverables:</span>
                      </div>

                      <div className="deliverables-tags-row-v2">
                        {s.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="deliverable-chip">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
