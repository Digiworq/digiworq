import React, { useState } from 'react';
import { Sparkles, ExternalLink, ArrowRight, Filter, Award, TrendingUp } from 'lucide-react';
const agencyWorkspace = '/agency-3d-workspace.jpg';
const creativeBanner = '/creative-3d-banner.jpg';
const ceoAvatar = '/ceo-rk-3d-avatar.png';

export default function OurWorksPage({ onOpenContact }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Branding', 'Technology', 'Video & 3D', 'Performance Ads'];

  const projects = [
    {
      id: 1,
      title: "Marketeam AI Ecosystem",
      category: "Technology",
      client: "Marketeam Global",
      metric: "+420% User Retention",
      desc: "Architected a unified AI marketing suite with dynamic prompt execution, multi-agent workflows, and high-performance UI analytics.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "AI Agent Engine", "UI/UX Architecture"]
    },
    {
      id: 2,
      title: "Velorah Luxury Watch Brand",
      category: "Branding",
      client: "Velorah Timepieces",
      metric: "$2.4M Launch Revenue",
      desc: "Designed atmospheric visual brand containers, luxury packaging, and a high-converting 3D interactive product showcase.",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      tags: ["Atmospheric Branding", "Package Design", "3D Rendering"]
    },
    {
      id: 3,
      title: "OmniPay Mobile Banking Suite",
      category: "Technology",
      client: "OmniPay Financial",
      metric: "1.2M+ App Downloads",
      desc: "Engineered an end-to-end mobile financial app featuring bio-metric authentication, instant transfer rails, and dark-mode glassmorphism UI.",
      img: "https://images.unsplash.com/photo-1556742049-0a67568d049f?auto=format&fit=crop&w=800&q=80",
      tags: ["Flutter", "Fintech Security", "Design System"]
    },
    {
      id: 4,
      title: "Quantum 3D Sci-Fi Commercial",
      category: "Video & 3D",
      client: "Quantum Robotics",
      metric: "5.8M Organic Views",
      desc: "Produced a photorealistic 3D animated product film showcasing next-gen robotics with cinematic lighting and surround sound design.",
      img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
      tags: ["3D Animation", "CGI Motion", "VFX Production"]
    },
    {
      id: 5,
      title: "Zenith Global Performance Campaign",
      category: "Performance Ads",
      client: "Zenith SaaS",
      metric: "8.4x ROAS Achieved",
      desc: "Executed a multi-channel performance ad campaign across Meta, Google Ads, and LinkedIn, generating 45,000+ enterprise leads.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Performance Marketing", "Meta Ads", "Lead Gen Engine"]
    },
    {
      id: 6,
      title: "Aura Health & Fitness Store",
      category: "Branding",
      client: "Aura Nutrition",
      metric: "+310% Online Sales",
      desc: "Rebranded a supplement line with vibrant packaging, custom typography, and a seamless Shopify Plus e-commerce experience.",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      tags: ["E-Commerce UI", "Packaging", "Brand Identity"]
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="works-page-wrapper">
      {/* Works Page Hero Banner */}
      <section className="works-hero-section">
        <div className="section-container text-center">
          <h1 className="works-hero-h1">
            Crafting Digital Stories that <span className="purple-gold-gradient-text">Dominate Markets</span>
          </h1>

          <p className="works-hero-p">
            Explore our curated portfolio of award-winning brand identity designs, custom web platforms, 3D animated films, and high-ROI digital campaigns.
          </p>

          {/* Filter Pills */}
          <div className="works-filter-pills-row">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`works-filter-btn ${selectedFilter === cat ? 'active' : ''}`}
                onClick={() => setSelectedFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="works-grid-section">
        <div className="section-container">
          <div className="works-projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="work-project-card">
                <div className="project-img-container">
                  <img src={project.img} alt={project.title} className="project-card-img" />
                  <div className="project-category-badge">{project.category}</div>
                  <div className="project-metric-overlay">
                    <TrendingUp size={14} className="metric-icon" />
                    <span>{project.metric}</span>
                  </div>
                </div>

                <div className="project-card-body">
                  <span className="project-client-name">{project.client}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.desc}</p>

                  <div className="project-tags-row">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tag-pill">{tag}</span>
                    ))}
                  </div>

                  <button className="project-case-study-btn" onClick={onOpenContact}>
                    <span>Request Case Study</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="works-cta-section">
        <div className="section-container text-center">
          <div className="works-cta-glass-box">
            <h2>Have a Breakthrough Project in Mind?</h2>
            <p>Let's build something extraordinary together. Schedule a strategy session with our creative directors.</p>
            <div className="btn-border-wrap inline-block mt-6">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
