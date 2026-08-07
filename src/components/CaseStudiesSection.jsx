import React, { useState, useRef } from 'react';

const CASE_STUDIES = [
  {
    id: "heartx",
    title: "HeartX",
    category: "Brand Strategy & Product Design",
    year: "2026",
    image: "https://images.pexels.com/photos/7691249/pexels-photo-7691249.jpeg?auto=compress&cs=tinysrgb&w=800",
    squares: [
      { x: 5, y: 30, size: 16 },
      { x: 10, y: 42, size: 10 },
      { x: 3, y: 52, size: 7 },
      { x: 80, y: 70, size: 14 },
      { x: 85, y: 82, size: 9 },
      { x: 78, y: 60, size: 6 }
    ]
  },
  {
    id: "swave",
    title: "Swave®",
    category: "Web Design & Identity",
    year: "2025",
    image: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800",
    squares: [
      { x: 82, y: 55, size: 16 },
      { x: 88, y: 68, size: 10 },
      { x: 78, y: 72, size: 7 },
      { x: 85, y: 42, size: 6 },
      { x: 90, y: 80, size: 8 }
    ]
  },
  {
    id: "eduspark",
    title: "EduSpark",
    category: "Brand Strategy & Web Design",
    year: "2023",
    image: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=800",
    squares: [
      { x: 4, y: 24, size: 16 },
      { x: 10, y: 36, size: 10 },
      { x: 2, y: 44, size: 7 },
      { x: 78, y: 78, size: 14 },
      { x: 84, y: 88, size: 8 }
    ]
  },
  {
    id: "greenergy",
    title: "Greenergy",
    category: "Brand Strategy & Web Design",
    year: "2022",
    image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
    squares: [
      { x: 82, y: 26, size: 14 },
      { x: 88, y: 38, size: 10 },
      { x: 78, y: 44, size: 7 },
      { x: 84, y: 54, size: 5 },
      { x: 90, y: 60, size: 8 }
    ]
  }
];

const FLOATING_SQUARES = [
  { x: 6, y: 20, size: 12 },
  { x: 12, y: 32, size: 8 },
  { x: 8, y: 44, size: 6 },
  { x: 88, y: 18, size: 10 },
  { x: 92, y: 30, size: 14 },
  { x: 85, y: 42, size: 7 },
  { x: 90, y: 52, size: 5 },
  { x: 14, y: 56, size: 5 }
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
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 4 1 9 6 14" />
          <polyline points="16 4 21 9 16 14" />
          <line x1="13" y1="2" x2="9" y2="16" />
        </svg>
      );
    case 'dots':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="black">
          {[3, 10, 17].map((x) =>
            [3, 10, 17].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" />
            ))
          )}
        </svg>
      );
    case 'circle-ring':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="black" strokeWidth="2">
          <circle cx="11" cy="11" r="9" />
          <circle cx="11" cy="11" r="4" />
        </svg>
      );
    case 'arrow':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
          <line x1="2" y1="16" x2="16" y2="2" />
          <polyline points="7 2 16 2 16 11" />
        </svg>
      );
    case 'wave-circle':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="black" strokeWidth="1.5">
          <circle cx="11" cy="11" r="9" />
          <path d="M5 11Q8 7 11 11Q14 15 17 11" />
        </svg>
      );
    case 'lines':
      return (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" stroke="black" strokeWidth="2.2" strokeLinecap="round">
          <line x1="0" y1="3" x2="24" y2="3" />
          <line x1="6" y1="9" x2="24" y2="9" />
          <line x1="0" y1="15" x2="18" y2="15" />
        </svg>
      );
    case 'bolt':
      return (
        <svg width="14" height="20" viewBox="0 0 14 20" fill="black">
          <polygon points="8,0 0,11 6,11 6,20 14,9 8,9" />
        </svg>
      );
    case 'plus':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="black">
          <rect x="7.5" y="0" width="3" height="18" />
          <rect x="0" y="7.5" width="18" height="3" />
        </svg>
      );
    default:
      return null;
  }
}

// Single Case Study Card Component with 12x8 Pixel-Block Dissolve Overlay & Magnetic Cursor Squares
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorPos({ x: 0.5, y: 0.5 });
  };

  // 12 columns x 8 rows pixel grid
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
      className="group relative aspect-[4/3] w-full overflow-hidden bg-black cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={onOpenContact}
    >
      {/* Background Image */}
      <img
        src={study.image}
        alt={study.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* 12x8 Pixel-Block Hover Overlay Dissolve Grid */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {pixelBlocks.map((block) => (
          <div
            key={block.id}
            className="absolute bg-black/85 transition-all duration-300"
            style={{
              left: `${block.left}%`,
              top: `${block.top}%`,
              width: `${block.width}%`,
              height: `${block.height}%`,
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1)' : 'scale(0)',
              transitionDelay: `${block.delay}s`,
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          />
        ))}
      </div>

      {/* Magnetic Cursor Floating Black Squares */}
      <div className="absolute inset-0 pointer-events-none z-15">
        {study.squares.map((sq, idx) => {
          const shiftX = isHovered ? (cursorPos.x - 0.5) * 40 : 0;
          const shiftY = isHovered ? (cursorPos.y - 0.5) * 40 : 0;
          return (
            <div
              key={idx}
              className="absolute bg-black transition-transform duration-500 ease-out"
              style={{
                left: `${sq.x}%`,
                top: `${sq.y}%`,
                width: `${sq.size}px`,
                height: `${sq.size}px`,
                transform: `translate3d(${shiftX}px, ${shiftY}px, 0)`,
                boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.5)' : 'none'
              }}
            />
          );
        })}
      </div>

      {/* Plus Button Badge Top Right */}
      <div className="absolute right-4 top-4 z-20 flex h-7 w-7 items-center justify-center border border-white/30 text-xs font-medium text-white backdrop-blur-sm transition-transform duration-300 group-hover:rotate-90">
        +
      </div>

      {/* Info Plate Bottom Left */}
      <div className="absolute bottom-0 left-0 z-20 max-w-[75%] bg-white px-5 pb-3.5 pt-3 shadow-lg">
        <h3 className="text-[clamp(1.3rem,2vw,1.8rem)] font-normal leading-tight text-black">
          {study.title}
        </h3>
        <div className="mt-1 flex items-center gap-4 text-[12px]">
          <span className="text-black/60">{study.category}</span>
          <span className="font-medium text-black">{study.year}</span>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection({ onOpenContact }) {
  const duplicatedLogos = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];

  return (
    <section className="relative bg-white text-black py-16" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Inject Keyframe Animation for Marquee */}
      <style>{`
        @keyframes marqueeProjects {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-projects {
          animation: marqueeProjects 28s linear infinite;
        }
        .marquee-projects:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top Header Area with Parallax Floating Squares */}
      <div className="relative px-6 pb-10 pt-16 sm:px-10 lg:px-16 lg:pt-24">
        {/* Floating Squares Overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {FLOATING_SQUARES.map((sq, idx) => (
            <div
              key={idx}
              className="absolute bg-black/80 animate-pulse"
              style={{
                left: `${sq.x}%`,
                top: `${sq.y}%`,
                width: `${sq.size}px`,
                height: `${sq.size}px`
              }}
            />
          ))}
        </div>

        {/* Centered Header Text */}
        <div className="relative mx-auto max-w-7xl text-center">
          <span className="mb-5 inline-block bg-black px-4 py-1.5 text-[13px] font-medium tracking-wide text-white">
            Projects
          </span>
          <h2 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-light leading-[1.25] tracking-tight text-black">
            Insights from <span className="text-black/40">Our</span>
            <br />
            <span className="text-black/40">Case Studies</span>
          </h2>
        </div>
      </div>

      {/* 2x2 Grid Case Study Cards */}
      <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.id} study={study} onOpenContact={onOpenContact} />
          ))}
        </div>
      </div>

      {/* Footer Area */}
      <div className="mx-auto max-w-7xl px-6 pb-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Left Side Partner Callout */}
          <div className="max-w-md">
            <div className="mb-4 flex h-7 w-7 items-center justify-center border border-black/20 text-xs font-semibold text-black">
              +
            </div>
            <p className="text-[14px] leading-[1.7] text-black/60">
              We partner with ambitious brands that are ready to move beyond fragmented visuals and shallow quick fixes — turning their identity, website, and messaging into one focused engine for growth.
            </p>

            {/* CTA Button */}
            <div className="mt-6">
              <button
                className="group flex items-end cursor-pointer border-none bg-transparent p-0 text-left"
                onClick={onOpenContact}
              >
                <span className="inline-flex items-center gap-[10px] border border-black/20 bg-black px-4 py-2.5 text-base font-medium text-white transition-colors duration-300 group-hover:bg-black/85">
                  Let's work together
                </span>
                <span className="mb-6 flex h-7 w-7 items-center justify-center bg-black transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mb-9">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M18.75 6V15.75C18.75 15.949 18.671 16.14 18.53 16.28C18.39 16.421 18.199 16.5 18 16.5C17.801 16.5 17.61 16.421 17.47 16.28C17.329 16.14 17.25 15.949 17.25 15.75V7.81L6.53 18.53C6.39 18.671 6.199 18.75 6 18.75C5.801 18.75 5.61 18.671 5.47 18.53C5.329 18.39 5.25 18.199 5.25 18C5.25 17.801 5.329 17.61 5.47 17.47L16.19 6.75H8.25C8.051 6.75 7.86 6.671 7.72 6.53C7.579 6.39 7.5 6.199 7.5 6C7.5 5.801 7.579 5.61 7.72 5.47C7.86 5.329 8.051 5.25 8.25 5.25H18C18.199 5.25 18.39 5.329 18.53 5.47C18.671 5.61 18.75 5.801 18.75 6Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Side Infinite Marquee Logobar */}
          <div className="flex-1 overflow-hidden border-t border-black/10 pt-6 md:ml-12 md:border-t-0 md:pt-0">
            <div className="overflow-hidden py-5">
              <div className="marquee-projects flex w-max items-center">
                {duplicatedLogos.map((logo, idx) => (
                  <div key={idx} className="flex shrink-0 items-center gap-2.5 px-8">
                    <LogoIcon type={logo.type} />
                    <span className="whitespace-nowrap text-sm font-medium tracking-wide text-black/80">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-12" />
    </section>
  );
}
