import React from 'react';
import { MessageSquare, Sparkles, CheckSquare, BarChart3, ArrowRight } from 'lucide-react';

export default function HomeProcessSection() {
  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Tell us about your goals",
      desc: "Share your vision, target audience, budget, and KPIs in plain words — website, branding, SEO, or video shoot.",
      highlightTag: "Initial Discovery"
    },
    {
      num: "02",
      icon: Sparkles,
      title: "AI & Creative Strategy",
      desc: "Digiworq matches market data, competitor research, real prices, and assembles a complete roadmap in seconds.",
      highlightTag: "AI Roadmap"
    },
    {
      num: "03",
      icon: CheckSquare,
      title: "Review and approve",
      desc: "Adjust anything, see transparent pricing, and book your dedicated creative and engineering team from one place.",
      highlightTag: "Transparent Scope"
    },
    {
      num: "04",
      icon: BarChart3,
      title: "Launch & Manage everything",
      desc: "Track campaign performance, timelines, and deliverables as your entire brand comes together seamlessly.",
      highlightTag: "Full Execution"
    }
  ];

  return (
    <section className="eventura-process-section" id="process">
      <div className="section-container">
        {/* Section Header */}
        <div className="eventura-section-header">
          <span className="eventura-sub-tag">HOW DIGIWORQ WORKS</span>
          <h2 className="eventura-section-title">
            From a sentence to a <span className="eventura-text-gold-gradient">finished brand</span>
          </h2>
          <p className="eventura-section-desc">
            An agile 4-step execution framework engineered for maximum speed, transparency, and high ROI.
          </p>
        </div>

        {/* Organic Fluid Open-Space Process Flow (Zero Box Containers) */}
        <div className="organic-process-flow">
          {/* Glowing Animated Ambient Curved Beam */}
          <div className="organic-curved-flow-line"></div>

          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div key={idx} className="organic-process-node">
                <div className="node-number-backdrop">{s.num}</div>
                <div className="node-icon-capsule">
                  <IconComp size={24} color="#F5B800" />
                </div>
                <div className="node-content-wrap">
                  <span className="node-tag-pill">{s.highlightTag}</span>
                  <h3 className="node-title">{s.title}</h3>
                  <p className="node-desc">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
