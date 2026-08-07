import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import ServicesGrid from './ServicesGrid';

export default function ServicesPage({ onOpenContact, onNavigateService }) {
  const serviceHighlights = [
    {
      category: "Creative & Branding",
      desc: "Brand strategy, packaging design, visual identity systems, and UI/UX design that captures attention.",
      deliverables: ["Brand Style Guides", "Package Designs", "UI/UX & App Layouts", "3D Motion Assets"]
    },
    {
      category: "Technology & Web Engineering",
      desc: "Custom web development, mobile apps, enterprise SaaS platforms, and AI workflow integration.",
      deliverables: ["React / Next.js Apps", "Flutter Mobile Apps", "API Engineering", "AI Automation"]
    },
    {
      category: "Video Production & 3D CGI",
      desc: "Cinematic TV commercials, 3D product rendering, drone videography, and visual effects (VFX).",
      deliverables: ["3D Product Animation", "Drone 4K Footage", "Commercial Ads", "Industrial Walkthroughs"]
    },
    {
      category: "Digital Growth & Performance",
      desc: "High-ROAS Meta & Google advertising campaigns, SEO optimization, and data analytics engines.",
      deliverables: ["Meta & Google Ads", "Search Engine Optimization", "Social Growth", "Conversion Audits"]
    }
  ];

  return (
    <div className="services-page-wrapper">
      {/* Services Page Hero Banner */}
      <section className="services-hero-section">
        <div className="section-container text-center">
          <h1 className="services-hero-h1">
            End-to-End Capabilities for <span className="purple-gold-gradient-text">Complete Digital Supremacy</span>
          </h1>

          <p className="services-hero-p">
            From atmospheric visual branding to enterprise web platforms and high-conversion ad campaigns — explore our full suite of 9 core service divisions.
          </p>
        </div>
      </section>

      {/* Main Services Grid Showcase */}
      <section className="services-catalog-grid-section">
        <div className="section-container">
          <ServicesGrid onOpenContact={onOpenContact} onNavigateService={onNavigateService} />
        </div>
      </section>

      {/* Capabilities Overview Section */}
      <section className="services-capabilities-overview-section">
        <div className="section-container">
          <div className="eventura-section-header text-center mb-12">
            <h2 className="eventura-section-h2">What We Deliver Across Our Divisions</h2>
          </div>

          <div className="capabilities-overview-grid">
            {serviceHighlights.map((hl, idx) => (
              <div key={idx} className="capability-overview-card">
                <h3>{hl.category}</h3>
                <p>{hl.desc}</p>
                <div className="deliverables-list">
                  {hl.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="deliverable-item">
                      <CheckCircle2 size={16} className="check-gold-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="services-cta-section">
        <div className="section-container text-center">
          <div className="services-cta-glass-box">
            <h2>Need a Tailored Custom Service Package?</h2>
            <p>Speak with our solution architects to customize a project roadmap aligned with your business goals.</p>
            <div className="btn-border-wrap inline-block mt-6">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Free Discovery Call</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
