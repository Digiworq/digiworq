import React, { useState, useRef } from 'react';

const CASE_STUDIES = [
  {
    id: "heartx",
    title: "HeartX",
    category: "Brand Strategy & Product Design",
    year: "2026",
    image: "https://images.pexels.com/photos/7691249/pexels-photo-7691249.jpeg?auto=compress&cs=tinysrgb&w=800",
    squares: [
      { x: 5, y: 30, size: 16, color: "#F5B800" },
      { x: 10, y: 42, size: 10, color: "#A068FF" },
      { x: 3, y: 52, size: 7, color: "#F5B800" },
      { x: 80, y: 70, size: 14, color: "#A068FF" },
      { x: 85, y: 82, size: 9, color: "#F5B800" },
      { x: 78, y: 60, size: 6, color: "#34D399" }
    ]
  },
  {
    id: "swave",
    title: "Swave®",
    category: "Web Design & Identity",
    year: "2025",
    image: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800",
    squares: [
      { x: 82, y: 55, size: 16, color: "#A068FF" },
      { x: 88, y: 68, size: 10, color: "#F5B800" },
      { x: 78, y: 72, size: 7, color: "#34D399" },
      { x: 85, y: 42, size: 6, color: "#F5B800" },
      { x: 90, y: 80, size: 8, color: "#A068FF" }
    ]
  },
  {
    id: "eduspark",
    title: "EduSpark",
    category: "Brand Strategy & Web Design",
    year: "2023",
    image: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=800",
    squares: [
      { x: 4, y: 24, size: 16, color: "#F5B800" },
      { x: 10, y: 36, size: 10, color: "#34D399" },
      { x: 2, y: 44, size: 7, color: "#A068FF" },
      { x: 78, y: 78, size: 14, color: "#F5B800" },
      { x: 84, y: 88, size: 8, color: "#A068FF" }
    ]
  },
  {
    id: "greenergy",
    title: "Greenergy",
    category: "Brand Strategy & Web Design",
    year: "2022",
    image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
    squares: [
      { x: 82, y: 26, size: 14, color: "#34D399" },
      { x: 88, y: 38, size: 10, color: "#F5B800" },
      { x: 78, y: 44, size: 7, color: "#A068FF" },
      { x: 84, y: 54, size: 5, color: "#F5B800" },
      { x: 90, y: 60, size: 8, color: "#34D399" }
    ]
  }
];

const FLOATING_SQUARES = [
  { x: 6, y: 20, size: 12, color: "#F5B800" },
  { x: 12, y: 32, size: 8, color: "#A068FF" },
  { x: 8, y: 44, size: 6, color: "#F5B800" },
  { x: 88, y: 18, size: 10, color: "#A068FF" },
  { x: 92, y: 30, size: 14, color: "#F5B800" },
  { x: 85, y: 42, size: 7, color: "#34D399" },
  { x: 90, y: 52, size: 5, color: "#F5B800" },
  { x: 14, y: 56, size: 5, color: "#A068FF" }
];

const MARQUEE_LOGOS = [
  { name: "Codecraft_", type: "code" },
  { name: "ennLabs", type: "dots" },
  { name: "GlobalBank", type: "circle-ring" },
  { name: "45 Degrees°", type: "arrow" },
  { name: "AlphaWave", type: "wave-circle" },
  { name: "Biosynthesis", type: "lines" },
  { name: "Boltshift", type: "bolt" },
  { name: "Clandestine", type: "plus" }
];

function LogoIcon({ type }) {
  switch (type) {
    case 'code':
      return (
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="#F5B800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 4 1 9 6 14" />
          <polyline points="16 4 21 9 16 14" />
          <line x1="13" y1="2" x2="9" y2="16" />
        </svg>
      );
    case 'dots':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#A068FF">
          {[3, 10, 17].map((x) =>
            [3, 10, 17].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" />
            ))
          )}
        </svg>
      );
    case 'circle-ring':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#F5B800" strokeWidth="2">
          <circle cx="11" cy="11" r="9" />
          <circle cx="11" cy="11" r="4" />
        </svg>
      );
    case 'arrow':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round">
          <line x1="2" y1="16" x2="16" y2="2" />
          <polyline points="7 2 16 2 16 11" />
        </svg>
      );
    case 'wave-circle':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#F5B800" strokeWidth="1.5">
          <circle cx="11" cy="11" r="9" />
          <path d="M5 11Q8 7 11 11Q14 15 17 11" />
        </svg>
      );
    case 'lines':
      return (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" stroke="#A068FF" strokeWidth="2.2" strokeLinecap="round">
          <line x1="0" y1="3" x2="24" y2="3" />
          <line x1="6" y1="9" x2="24" y2="9" />
          <line x1="0" y1="15" x2="18" y2="15" />
        </svg>
      );
    case 'bolt':
      return (
        <svg width="14" height="20" viewBox="0 0 14 20" fill="#F5B800">
          <polygon points="8,0 0,11 6,11 6,20 14,9 8,9" />
        </svg>
      );
    case 'plus':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="#EC4899">
          <rect x="7.5" y="0" width="3" height="18" />
          <rect x="0" y="7.5" width="18" height="3" />
        </svg>
      );
    default:
      return null;
  }
}

function CaseStudyCard({ study, onOpenContact }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setCursorPos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorPos({ x: 0.5, y: 0.5 });
  };

  const cols = 12;
  const rows = 8;
  const pixelBlocks = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const delayIn = (r + c) * 0.018;
      const delayOut = ((rows - r) + (cols - c)) * 0.012;
      pixelBlocks.push({
        id: `${r}-${c}`,
        row: r,
        col: c,
        left: (c * 100) / cols,
        top: (r * 100) / rows,
        width: 100 / cols,
        height: 100 / rows,
        delay: isHovered ? delayIn : delayOut
      });
    }
  }

  return (
    <div
      ref={cardRef}
      className="case-study-card-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={onOpenContact}
    >
      {/* Background Image */}
      <img
        src={study.image}
        alt={study.title}
        className="case-study-img-fit"
      />

      {/* 12x8 Pixel-Block Hover Overlay Dissolve Grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
        {pixelBlocks.map((block) => (
          <div
            key={block.id}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(5, 7, 15, 0.88)',
              left: `${block.left}%`,
              top: `${block.top}%`,
              width: `${block.width}%`,
              height: `${block.height}%`,
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1)' : 'scale(0)',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDelay: `${block.delay}s`
            }}
          />
        ))}
      </div>

      {/* Magnetic Cursor Floating Glowing Squares */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 15 }}>
        {study.squares.map((sq, idx) => {
          const shiftX = isHovered ? (cursorPos.x - 0.5) * 40 : 0;
          const shiftY = isHovered ? (cursorPos.y - 0.5) * 40 : 0;
          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                backgroundColor: sq.color || "#F5B800",
                left: `${sq.x}%`,
                top: `${sq.y}%`,
                width: `${sq.size}px`,
                height: `${sq.size}px`,
                transform: `translate3d(${shiftX}px, ${shiftY}px, 0)`,
                transition: 'transform 0.5s ease-out',
                boxShadow: isHovered ? `0 0 15px ${sq.color}` : 'none',
                borderRadius: '2px'
              }}
            />
          );
        })}
      </div>

      {/* Plus Button Badge Top Right */}
      <div className="case-study-plus-btn">
        +
      </div>

      {/* Info Plate Bottom Left */}
      <div className="case-study-info-plate">
        <h3>{study.title}</h3>
        <div className="case-study-info-meta">
          <span className="category">{study.category}</span>
          <span className="year">{study.year}</span>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection({ onOpenContact }) {
  const duplicatedLogos = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];

  return (
    <section className="case-studies-section-root">
      <style>{`
        @keyframes marqueeProjects {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-projects-track {
          display: flex;
          width: max-content;
          animation: marqueeProjects 28s linear infinite;
        }
        .marquee-projects-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="case-studies-max-width-container">
        {/* Top Header Area with Parallax Floating Glowing Squares */}
        <div className="case-studies-header-box">
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            {FLOATING_SQUARES.map((sq, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  backgroundColor: sq.color || "#F5B800",
                  left: `${sq.x}%`,
                  top: `${sq.y}%`,
                  width: `${sq.size}px`,
                  height: `${sq.size}px`,
                  boxShadow: `0 0 12px ${sq.color}`,
                  borderRadius: '2px'
                }}
              />
            ))}
          </div>

          <div style={{ position: 'relative', zIndex: 5 }}>
            <span className="case-studies-badge">
              <span style={{ color: '#F5B800', marginRight: '6px' }}>●</span>
              <span>Case Studies</span>
            </span>
            <h2 className="case-studies-heading">
              <span className="part-white">Insights from </span>
              <span className="part-gradient">Our Case Studies</span>
            </h2>
          </div>
        </div>

        {/* 2x2 Grid Case Study Cards */}
        <div className="case-studies-2x2-grid">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.id} study={study} onOpenContact={onOpenContact} />
          ))}
        </div>

        {/* Footer Area */}
        <div className="case-studies-footer-row">
          <div className="case-studies-footer-left">
            <div style={{ width: '32px', height: '32px', border: '1px solid rgba(245, 184, 0, 0.4)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, color: '#F5B800', marginBottom: '16px', background: 'rgba(245, 184, 0, 0.1)' }}>
              +
            </div>
            <p>
              We partner with ambitious brands that are ready to move beyond fragmented visuals and shallow quick fixes — turning their identity, website, and messaging into one focused engine for scalable growth.
            </p>

            <div style={{ marginTop: '24px' }}>
              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Let's Work Together</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btn-arrow-icon">
                    <path d="M18.75 6V15.75C18.75 15.949 18.671 16.14 18.53 16.28C18.39 16.421 18.199 16.5 18 16.5C17.801 16.5 17.61 16.421 17.47 16.28C17.329 16.14 17.25 15.949 17.25 15.75V7.81L6.53 18.53C6.39 18.671 6.199 18.75 6 18.75C5.801 18.75 5.61 18.671 5.47 18.53C5.329 18.39 5.25 18.199 5.25 18C5.25 17.801 5.329 17.61 5.47 17.47L16.19 6.75H8.25C8.051 6.75 7.86 6.671 7.72 6.53C7.579 6.39 7.5 6.199 7.5 6C7.5 5.801 7.579 5.61 7.72 5.47C7.86 5.329 8.051 5.25 8.25 5.25H18C18.199 5.25 18.39 5.329 18.53 5.47C18.671 5.61 18.75 5.801 18.75 6Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, overflow: 'hidden', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '24px' }}>
            <div style={{ overflow: 'hidden', padding: '20px 0' }}>
              <div className="marquee-projects-track">
                {duplicatedLogos.map((logo, idx) => (
                  <div key={idx} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '10px', padding: '0 32px' }}>
                    <LogoIcon type={logo.type} />
                    <span style={{ whiteSpace: 'nowrap', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.5px', color: '#D1D5DB' }}>
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '48px' }} />
    </section>
  );
}
