import React from 'react';
import { MessageSquare, Sparkles, CheckSquare, BarChart3 } from 'lucide-react';

export default function HomeProcessSection() {
  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Tell us about your goals",
      desc: "Share your vision, target audience, budget, and KPIs in plain words — website, branding, SEO, or video shoot."
    },
    {
      num: "02",
      icon: Sparkles,
      title: "AI & Creative Strategy",
      desc: "Digiworq matches market data, competitor research, real prices, and assembles a complete roadmap in seconds."
    },
    {
      num: "03",
      icon: CheckSquare,
      title: "Review and approve",
      desc: "Adjust anything, see transparent pricing, and book your dedicated creative and engineering team from one place."
    },
    {
      num: "04",
      icon: BarChart3,
      title: "Launch & Manage everything",
      desc: "Track campaign performance, timelines, and deliverables as your entire brand comes together seamlessly."
    }
  ];

  return (
    <section className="eventura-process-section" id="process">
      <div className="section-container">
        {/* Section Header Matching Screenshot 63 */}
        <div className="eventura-section-header">
          <span className="eventura-sub-tag">HOW DIGIWORQ WORKS</span>
          <h2 className="eventura-section-title">
            From a sentence to a <span className="eventura-text-gold">finished brand</span>
          </h2>
        </div>

        {/* 4 Cards Grid Matching Screenshot 63 */}
        <div className="eventura-4cards-grid">
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div key={idx} className="eventura-card-dark">
                <div className="eventura-card-icon-box">
                  <IconComp size={20} color="#F5B800" />
                </div>
                <span className="eventura-card-step-num">{s.num}</span>
                <h3 className="eventura-card-title">{s.title}</h3>
                <p className="eventura-card-desc">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
