import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, ChevronDown, MousePointer } from 'lucide-react';
const logoMark = '/digiworq-logo.png';

const PROMPT_SAMPLES = [
  "SEO & Web Design in Bangalore · 500k Reach · ₹1,50,000 budget",
  "Branding & Commercial Video Shoot · 500 Guests · ₹2,50,000 budget",
  "Performance Marketing & Social Media · Pan-India · ₹1,00,000 budget",
  "3D Product Animation & Rebranding · Global · ₹3,00,000 budget"
];

// Custom Count-Up Hook from styling prompt
function useCountUp(target, duration = 2000, delay = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationId = null;

    const timeoutId = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // easeOutCubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeProgress * target));

        if (progress < 1) {
          animationId = requestAnimationFrame(step);
        }
      };
      animationId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [target, duration, delay]);

  return count;
}

// Typewriter Heading Component from styling prompt
function TypewriterHeading({ text, splitIndex = 67, onFinish }) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeoutId;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedLength((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            setIsDone(true);
            if (onFinish) onFinish();
            return prev;
          }
          return prev + 1;
        });
      }, 35);
    }, 400);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutId);
    };
  }, [text, onFinish]);

  const currentText = text.slice(0, displayedLength);
  const part1 = currentText.slice(0, Math.min(displayedLength, splitIndex));
  const part2 = displayedLength > splitIndex ? currentText.slice(splitIndex) : "";

  return (
    <h1 className="marketeam-typewriter-h1">
      <span className="part-white">{part1}</span>
      <span className="part-gradient">{part2}</span>
      {!isDone && <span className="typewriter-cursor">|</span>}
    </h1>
  );
}

export default function Hero({ onOpenContact }) {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const [typingFinished, setTypingFinished] = useState(false);
  const counterVal = useCountUp(500, 2000, 1200);

  // High-Density Moving Gold Lights Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const updateCanvasDimensions = () => {
      const parent = heroRef.current || canvas.parentElement;
      canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : Math.max(window.innerHeight, 750);
    };

    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions);

    const width = canvas.width || window.innerWidth;
    const height = canvas.height || 800;

    const particles = Array.from({ length: 280 }, () => {
      const isSquare = Math.random() > 0.76;
      const isLarge = Math.random() > 0.85;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isLarge ? Math.random() * 2.2 + 1.2 : Math.random() * 1.4 + 0.4,
        size: isLarge ? Math.random() * 3.5 + 2.0 : Math.random() * 2.0 + 0.8,
        color: Math.random() > 0.3 ? '#A068FF' : (Math.random() > 0.5 ? '#F5B800' : '#FFFFFF'),
        alpha: Math.random() * 0.85 + 0.15,
        alphaSpeed: (Math.random() - 0.5) * 0.015,
        vx: (Math.random() - 0.5) * 0.3,
        vy: - (Math.random() * 0.35 + 0.1),
        isSquare,
        isLarge
      };
    });

    const render = () => {
      const currentWidth = canvas.width || window.innerWidth;
      const currentHeight = canvas.height || 800;
      ctx.clearRect(0, 0, currentWidth, currentHeight);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaSpeed;

        if (p.alpha <= 0.1 || p.alpha >= 0.95) p.alphaSpeed = -p.alphaSpeed;
        if (p.x < 0) p.x = currentWidth;
        if (p.x > currentWidth) p.x = 0;
        if (p.y < 0) p.y = currentHeight;

        ctx.globalAlpha = Math.max(0.08, Math.min(1, p.alpha));
        ctx.fillStyle = p.color;

        if (p.isSquare) {
          ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const headlineText = "Unlock Top Digital Growth Talent & AI Strategy You Thought Was Out of Reach -- Now Just One Click Away!";

  return (
    <section ref={heroRef} className="eventura-hero-section marketeam-hero-root">
      {/* Moving Lights Canvas */}
      <canvas ref={canvasRef} className="eventura-hero-canvas" />

      {/* Ambient Spotlights */}
      <div className="eventura-purple-spotlight" />
      <div className="eventura-gold-spotlight" />

      <div className="section-container eventura-hero-container">
        {/* Top Floating Pill Badge */}
        <div className="eventura-badge-pill">
          <span className="eventura-badge-dot">●</span>
          <span>AI-Powered Marketing Talent Platform · Bangalore</span>
        </div>

        <div className="marketeam-hero-grid">
          {/* Hero Left Column: Typewriter & Conic Border CTAs */}
          <div className="marketeam-hero-left">
            <TypewriterHeading 
              text={headlineText} 
              splitIndex={67}
              onFinish={() => setTypingFinished(true)} 
            />

            <p className="marketeam-hero-subtext">
              Digiworq pairs you with Bangalore's top digital marketing strategists, full-stack engineers, 3D animators, and video directors — fully managed in one platform.
            </p>

            {/* Rotating Conic-Gradient Border Action Buttons */}
            <div className="marketeam-hero-cta-group">
              <div className="btn-border-wrap">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Start Project</span>
                  <ArrowRight size={18} className="btn-arrow-icon" />
                </button>
              </div>

              <a href="#services" className="marketeam-secondary-btn">
                Explore Specialists
              </a>
            </div>
          </div>

          {/* Hero Right Column: Concentric Orbital Circles Visualization */}
          <div className="marketeam-hero-right">
            <div className="circles-visualization-container">
              
              {/* Orbit 1 (Innermost: 353px) */}
              <div className="orbital-ring orbit-1">
                <div className="avatar-placed avatar-1 square-radius purple-glow">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Specialist" />
                </div>
              </div>

              {/* Orbit 2 (501px) */}
              <div className="orbital-ring orbit-2">
                <div className="avatar-placed avatar-2 round yellow-glow">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="Specialist" />
                </div>
                <div className="avatar-placed avatar-3 lg-size pink-glow">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" alt="Specialist" />
                </div>
                <div className="avatar-placed avatar-4 square-radius blue-glow">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="Specialist" />
                </div>
              </div>

              {/* Orbit 3 (649px) */}
              <div className="orbital-ring orbit-3">
                <div className="avatar-placed avatar-5 xl-size pink-glow">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" alt="Specialist" />
                </div>
              </div>

              {/* Orbit 4 (Outermost: 797px) */}
              <div className="orbital-ring orbit-4">
                <div className="avatar-placed avatar-6 purple-glow">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80" alt="Specialist" />
                </div>
                <div className="avatar-placed avatar-7 xl-size orange-glow">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" alt="Specialist" />
                </div>
                <div className="avatar-placed avatar-8 xl-size pink-glow">
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80" alt="Specialist" />
                </div>
                <div className="avatar-placed avatar-9 purple-glow">
                  <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80" alt="Specialist" />
                </div>
              </div>

              {/* Center Counter Circle */}
              <div className="center-counter-circle">
                <span className="counter-number">{counterVal}+</span>
                <span className="counter-label">Specialists</span>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="eventura-scroll-indicator">
          <span>scroll to explore talent</span>
          <ChevronDown size={14} />
        </div>
      </div>
    </section>
  );
}
