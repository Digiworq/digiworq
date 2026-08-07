import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Image as ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';

const modernArtworks = {
  "creative": "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
  "technology": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  "video-production": "https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&w=800&q=80",
  "digital-marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "2d-animation": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  "3d-animation": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
  "printing-solutions": "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80",
  "photography": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  "videography": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
};

const allNineServices = [
  {
    id: "creative",
    title: "CREATIVE SERVICES",
    category: "Branding & Design",
    shortDesc: "Transforming brand identity through creative design and user-centered UX.",
    fullDesc: "Creative branding is crucial to developing a unique business character and history that remains long after the digital market finishes. Branding & Creative Design | Digiworq tells a story for each business by means of innovative creativity, branding, and design with visually engaging marketing solutions.",
    imageFile: "creative.webp"
  },
  {
    id: "technology",
    title: "TECHNOLOGY SERVICES",
    category: "Web & Software",
    shortDesc: "Scalable web development, custom software applications, and e-commerce.",
    fullDesc: "Technology is the foundation of scalable businesses. As a trusted provider of website development in Bangalore, Digiworq delivers modern website development with innovative technology solutions that enhance digital performance, improve customer experience, and drive business growth.",
    imageFile: "technology.webp"
  },
  {
    id: "video-production",
    title: "VIDEO PRODUCTION SERVICES",
    category: "Cinematic Shoots",
    shortDesc: "High-end indoor & outdoor commercial shoots, ad films, and podcasts.",
    fullDesc: "Compelling video production engages audiences and communicates brand values effectively. From indoor & outdoor commercial shoots to high-converting ad films and podcast production, we craft visual stories that captivate and convert.",
    imageFile: "video.webp"
  },
  {
    id: "digital-marketing",
    title: "DIGITAL MARKETING SERVICES",
    category: "SEO & Growth",
    shortDesc: "Performance marketing, SEO ranking, social ads, and lead generation.",
    fullDesc: "Data-driven marketing strategies tailored to expand brand reach and generate quality leads. We combine Search Engine Optimization, social media management, performance marketing, and targeted advertising to maximize ROI.",
    imageFile: "digital.webp"
  },
  {
    id: "2d-animation",
    title: "2D ANIMATION SERVICES",
    category: "Motion Graphics",
    shortDesc: "Custom character animation, motion graphics, and animated commercials.",
    fullDesc: "Transform complex concepts into engaging visual narratives. Our 2D animation specialists create custom character animations, motion graphics, and animated commercials that entertain, educate, and persuade.",
    imageFile: "2d.webp"
  },
  {
    id: "3d-animation",
    title: "3D ANIMATION SERVICES",
    category: "3D Visuals & VFX",
    shortDesc: "Photorealistic 3D product modeling and architectural walkthroughs.",
    fullDesc: "Immersive 3D modeling and animation bringing products and architecture to life. We deliver photorealistic 3D product renders, architectural walkthroughs, and high-impact visual effects.",
    imageFile: "3d.webp"
  },
  {
    id: "printing-solutions",
    title: "PRINTING SOLUTIONS",
    category: "Print & Packaging",
    shortDesc: "Corporate stationery, large format flex banners, and custom packaging.",
    fullDesc: "High-precision print marketing and premium packaging services. From business stationery and large-format flex banners to bespoke merchandise and custom rigid packaging boxes.",
    imageFile: "print.webp"
  },
  {
    id: "photography",
    title: "PHOTOGRAPHY SERVICES",
    category: "Studio Photography",
    shortDesc: "E-commerce product shoots, corporate headshots, and fashion portfolios.",
    fullDesc: "Professional photography capturing your products and team in the best light. E-commerce product photography, corporate headshots, fashion portfolios, and commercial event coverage.",
    imageFile: "photography.webp"
  },
  {
    id: "videography",
    title: "VIDEOGRAPHY SERVICES",
    category: "4K Aerial & Live",
    shortDesc: "4K drone videography, live multi-cam streaming, and site coverage.",
    fullDesc: "High-definition cinematic videography for events, sites, and aerial perspectives. 4K drone videography, live multi-cam streaming, and industrial site walkthroughs.",
    imageFile: "videography.webp"
  }
];

export default function ServicesGrid({ onOpenContact }) {
  const [imageStyle, setImageStyle] = useState('modern'); // 'official' | 'modern'
  const [activeCardId, setActiveCardId] = useState(null); // Track clicked/expanded card on mobile

  const handleCardClick = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <section className="services-section-v3" id="services">
      <div className="section-container">
        {/* Main Section Header Matching Screenshot 63 */}
        <div className="eventura-section-header">
          <h2 className="eventura-section-title">
            Every service your brand needs, <span className="eventura-text-indigo">in one place</span>
          </h2>
          <p className="eventura-section-desc">
            Each one human-verified. No template fluff, no surprise quotes — and every service is engineered for scalable business growth.
          </p>
        </div>

          {/* Style Switcher Toggle */}
          <div className="image-style-toggle-bar">
            <button 
              className={`toggle-style-btn ${imageStyle === 'modern' ? 'active' : ''}`}
              onClick={() => setImageStyle('modern')}
            >
              <Sparkles size={16} />
              <span>Modern 3D Studio Artwork</span>
            </button>
            <button 
              className={`toggle-style-btn ${imageStyle === 'official' ? 'active' : ''}`}
              onClick={() => setImageStyle('official')}
            >
              <ImageIcon size={16} />
              <span>Official Digiworq 3D Logos</span>
            </button>
          </div>

        {/* Clean 3x3 Grid of All 9 Services (Velorah Container Box Style) */}
        <div className="services-3-grid velorah-cards-grid">
          {allNineServices.map((service) => {
            const officialSrc = new URL(`../../services logo/${service.imageFile}`, import.meta.url).href;
            const modernSrc = modernArtworks[service.id];
            const activeSrc = imageStyle === 'modern' ? modernSrc : officialSrc;
            const isExpanded = activeCardId === service.id;

            return (
              <div 
                key={service.id} 
                className={`velorah-card-container ${isExpanded ? 'is-expanded-mobile' : ''}`}
                onClick={() => handleCardClick(service.id)}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(8, 10, 20, 0.45) 0%, rgba(8, 10, 20, 0.75) 55%, rgba(5, 7, 15, 0.95) 100%), url(${activeSrc})`
                }}
              >
                {/* Category Badge Pill Top Right */}
                <div className="velorah-top-row">
                  <span className="velorah-category-badge">{service.category}</span>
                </div>

                {/* Main Card Text Content (Centered, Velorah Style) */}
                <div className="velorah-card-body">
                  <h3 className="velorah-card-title">{service.title}</h3>
                  <p className="velorah-card-desc">{service.shortDesc}</p>

                  {/* Glassmorphic Floating Pill Button */}
                  <div className="velorah-btn-wrap">
                    <button 
                      className="velorah-glass-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenContact();
                      }}
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={16} className="btn-arrow" />
                    </button>
                  </div>
                </div>

                {/* Frosted Glass Hover Reveal Overlay */}
                <div 
                  className="velorah-hover-overlay"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(service.id);
                  }}
                >
                  <div className="overlay-badge">
                    <CheckCircle2 size={16} color="#A068FF" />
                    <span>{service.category}</span>
                  </div>

                  <h4 className="overlay-title">{service.title}</h4>
                  <p className="overlay-full-desc">{service.fullDesc}</p>

                  <div className="btn-border-wrap">
                    <button 
                      className="marketeam-primary-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenContact();
                      }}
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={16} className="btn-arrow-icon" />
                    </button>
                  </div>

                  {/* Mobile Tap Close Hint */}
                  <span className="mobile-tap-close-hint">(Tap anywhere to close)</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
