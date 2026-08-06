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
    <section className="eventura-process-section marketeam-process-section" id="process">
      <div className="section-container">
        {/* Section Header */}
        <div className="eventura-section-header marketeam-header-center">
          <span className="marketeam-purple-tag">HOW DIGIWORQ WORKS</span>
          <h2 className="marketeam-section-h2">
            From a sentence to a <span className="marketeam-text-gradient">finished brand</span>
          </h2>
          <p className="marketeam-section-subdesc">
            An agile 4-step execution framework engineered for maximum speed, transparency, and high ROI.
          </p>
        </div>

        {/* Marketeam Interactive Timeline Grid */}
        <div className="marketeam-process-flow-container">
          {/* Animated Connecting Laser Beam Line */}
          <div className="marketeam-laser-beam-line"></div>

          <div className="marketeam-process-grid">
            {steps.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <div key={idx} className="marketeam-process-card">
                  {/* Giant Background Step Number */}
                  <div className="marketeam-step-num-bg">{s.num}</div>

                  {/* Glowing Icon Circle */}
                  <div className="marketeam-icon-circle">
                    <IconComp size={24} color="#A068FF" />
                  </div>

                  {/* Text Content */}
                  <div className="marketeam-card-content">
                    <span className="marketeam-step-tag">{s.highlightTag}</span>
                    <h3 className="marketeam-step-title">{s.title}</h3>
                    <p className="marketeam-step-desc">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Conic Border Action CTA */}
          <div className="marketeam-process-cta-wrap">
            <div className="btn-border-wrap">
              <button className="marketeam-primary-btn" onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span>Launch Your Project</span>
                <ArrowRight size={18} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
