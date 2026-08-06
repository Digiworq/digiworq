import React from 'react';
import { Brain, MessageSquare, Sparkles, DollarSign } from 'lucide-react';

export default function AgencyShowcase({ onOpenContact }) {
  const features = [
    {
      icon: Brain,
      title: "AI Growth Engine",
      desc: "Describe your goals once. Get a complete, bookable growth plan — branding, web, marketing, and timeline."
    },
    {
      icon: MessageSquare,
      title: "Worq AI Assistant",
      desc: "Ask anything, any time. 'Find me a high-ROI SEO & PPC campaign strategy' — and it delivers."
    },
    {
      icon: Sparkles,
      title: "Smart Recommendations",
      desc: "Digiworq learns your taste and budget, surfacing the exact digital services most likely to scale your revenue."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      desc: "Compare real service deliverables side by side. Clear milestone payments — no haggling, no hidden costs."
    }
  ];

  return (
    <section className="eventura-showcase-section">
      <div className="section-container">
        {/* Section Header Matching Screenshot 64 */}
        <div className="eventura-section-header">
          <span className="eventura-sub-tag">INTELLIGENCE, BUILT IN</span>
          <h2 className="eventura-section-title">
            Not just an agency. <span className="eventura-text-gold">A growth engine.</span>
          </h2>
        </div>

        {/* 2x2 Feature Grid Matching Screenshot 64 */}
        <div className="eventura-2x2-grid">
          {features.map((f, idx) => {
            const IconComp = f.icon;
            return (
              <div key={idx} className="eventura-card-dark eventura-card-row">
                <div className="eventura-card-icon-box">
                  <IconComp size={22} color="#F5B800" />
                </div>
                <div className="eventura-card-content">
                  <h3 className="eventura-card-title">{f.title}</h3>
                  <p className="eventura-card-desc">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
