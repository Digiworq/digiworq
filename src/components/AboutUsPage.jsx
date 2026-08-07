import React from 'react';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
const ceoAvatar = '/ceo-rk-3d-avatar.png';
const agencyWorkspace = '/agency-3d-workspace.jpg';

export default function AboutUsPage({ onOpenContact }) {
  const milestones = [
    { year: "2018", title: "Agency Inception", desc: "Started as a boutique branding studio in Bengaluru with a passion for creative excellence." },
    { year: "2020", title: "Full-Stack Expansion", desc: "Expanded into AI tech, custom software, 3D animation, and performance digital marketing." },
    { year: "2023", title: "500+ Brand Deliveries", desc: "Crossed 500 successful client campaign launches across India, US, UAE, and Europe." },
    { year: "2026", title: "Marketeam AI Era", desc: "Pioneering AI-driven automated marketing suites and atmospheric visual brand containers." }
  ];

  const teamMembers = [
    {
      name: "R. K. Sharma",
      role: "Founder & Chief Executive Officer",
      bio: "12+ years shaping high-growth brand strategies and digital transformation for global enterprises.",
      img: ceoAvatar
    },
    {
      name: "Ananya Roy",
      role: "Head of Creative & Brand Strategy",
      bio: "Award-winning art director specializing in atmospheric visual identities and 3D design systems.",
      img: agencyWorkspace
    },
    {
      name: "Vikram Malhotra",
      role: "Lead Tech & AI Engineer",
      bio: "Passionate about full-stack architectures, high-scale web platforms, and automated workflow engines.",
      img: ceoAvatar
    }
  ];

  const coreValues = [
    {
      icon: <Sparkles className="value-icon" size={24} />,
      title: "Radical Innovation",
      desc: "We push design and technology beyond conventional boundaries to deliver awe-inspiring work."
    },
    {
      icon: <ShieldCheck className="value-icon" size={24} />,
      title: "Absolute Transparency",
      desc: "Honest communication, clear milestones, and zero hidden clauses in every partnership."
    },
    {
      icon: <TrendingUp className="value-icon" size={24} />,
      title: "Data-Driven ROI",
      desc: "Every pixel, line of code, and campaign structure is optimized for tangible revenue growth."
    },
    {
      icon: <Users className="value-icon" size={24} />,
      title: "Client-First Culture",
      desc: "Your vision is our priority. We work as a dedicated extension of your in-house team."
    }
  ];

  return (
    <div className="about-us-page-wrapper">
      {/* Hero Header Section */}
      <section className="about-hero-section">
        <div className="section-container">
          <div className="about-hero-content text-center">
            <h1 className="about-hero-h1">
              Refining Visions into <span className="purple-gold-gradient-text">Dominant Brands</span>
            </h1>

            <p className="about-hero-p">
              We are a premier branding, technology, and digital marketing agency headquartered in Bengaluru. We combine high-impact creative storytelling with cutting-edge engineering to build market leaders.
            </p>
          </div>

          {/* Stats Highlight Bar */}
          <div className="about-stats-highlight-grid">
            <div className="about-stat-card">
              <span className="stat-big-num">8+</span>
              <span className="stat-label-text">Years of Excellence</span>
            </div>
            <div className="about-stat-card highlight">
              <span className="stat-big-num">500+</span>
              <span className="stat-label-text">Projects Completed</span>
            </div>
            <div className="about-stat-card">
              <span className="stat-big-num">98.4%</span>
              <span className="stat-label-text">Client Retention Rate</span>
            </div>
            <div className="about-stat-card">
              <span className="stat-big-num">15+</span>
              <span className="stat-label-text">Global Industry Awards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Twin Cards Section */}
      <section className="about-mission-vision-section">
        <div className="section-container">
          <div className="mission-vision-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon-box">
                <Target size={28} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower forward-thinking businesses with world-class digital experiences, scalable tech infrastructure, and high-ROI marketing campaigns that convert audiences into loyal brand advocates.
              </p>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon-box">
                <Eye size={28} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted global partner for full-stack brand transformation, setting new benchmarks in creative artistry, technological innovation, and sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-core-values-section">
        <div className="section-container">
          <div className="eventura-section-header text-center mb-12">
            <h2 className="eventura-section-h2">Our Core Operating Pillars</h2>
          </div>

          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <div key={idx} className="value-glass-card">
                <div className="value-icon-wrapper">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Journey Timeline Section */}
      <section className="about-timeline-section">
        <div className="section-container">
          <div className="eventura-section-header text-center mb-12">
            <h2 className="eventura-section-h2">Our Growth Journey</h2>
          </div>

          <div className="timeline-cards-grid">
            {milestones.map((ms, idx) => (
              <div key={idx} className="timeline-item-card">
                <span className="timeline-year">{ms.year}</span>
                <h4>{ms.title}</h4>
                <p>{ms.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Bottom CTA Banner */}
      <section className="about-cta-section">
        <div className="section-container text-center">
          <div className="about-cta-glass-box">
            <h2>Ready to Elevate Your Brand to the Next Level?</h2>
            <p>Partner with Digiworq and experience the power of market-leading design and technology.</p>
            <div className="btn-border-wrap inline-block mt-6">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Schedule Free Consultation</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
