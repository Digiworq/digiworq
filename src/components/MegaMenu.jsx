import React from 'react';
import * as Icons from 'lucide-react';

// Illustration graphics generator matching screenshots
function MenuIllustration({ type }) {
  if (type === 'creative') {
    return (
      <svg className="illustration-svg" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="160" rx="8" fill="#F3F4F6"/>
        <rect x="50" y="30" width="140" height="95" rx="6" fill="#FFFFFF" stroke="#374151" strokeWidth="2"/>
        <line x1="50" y1="48" x2="190" y2="48" stroke="#E5E7EB" strokeWidth="2"/>
        <circle cx="62" cy="39" r="3" fill="#EF4444"/>
        <circle cx="72" cy="39" r="3" fill="#F59E0B"/>
        <circle cx="82" cy="39" r="3" fill="#10B981"/>
        <path d="M70 100 Q 100 60, 130 90 T 170 70" stroke="#F5B800" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <rect x="130" y="55" width="40" height="25" rx="4" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5"/>
        <circle cx="150" cy="67" r="6" fill="#F5B800"/>
        <path d="M175 125 L195 95 L202 102 Z" fill="#1F2937"/>
        <circle cx="120" cy="110" r="14" fill="#FEF3C7" stroke="#F5B800" strokeWidth="2"/>
        <path d="M115 110 L125 110 M120 105 L120 115" stroke="#D97706" strokeWidth="2"/>
      </svg>
    );
  }

  if (type === 'technology') {
    return (
      <svg className="illustration-svg" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="160" rx="8" fill="#EFF6FF"/>
        <rect x="80" y="25" width="130" height="90" rx="6" fill="#FFFFFF" stroke="#1E40AF" strokeWidth="2"/>
        <rect x="130" y="115" width="30" height="20" fill="#93C5FD"/>
        <rect x="110" y="135" width="70" height="6" rx="3" fill="#1E40AF"/>
        <rect x="92" y="38" width="45" height="6" rx="2" fill="#F5B800"/>
        <rect x="92" y="50" width="75" height="4" rx="2" fill="#93C5FD"/>
        <rect x="92" y="58" width="60" height="4" rx="2" fill="#93C5FD"/>
        <rect x="92" y="66" width="85" height="4" rx="2" fill="#3B82F6"/>
        <rect x="92" y="74" width="40" height="4" rx="2" fill="#93C5FD"/>
        <circle cx="45" cy="70" r="16" fill="#F5B800"/>
        <path d="M25 125 C 25 95, 65 95, 65 125 Z" fill="#1E293B"/>
        <circle cx="45" cy="70" r="12" fill="#FDE68A"/>
        <rect x="175" y="65" width="35" height="24" rx="4" fill="#F5B800"/>
        <text x="183" y="81" fontSize="11" fontWeight="bold" fill="#1E293B">&lt;/&gt;</text>
      </svg>
    );
  }

  if (type === 'video-production') {
    return (
      <svg className="illustration-svg" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="160" rx="8" fill="#FFFBEB"/>
        <rect x="100" y="50" width="55" height="35" rx="4" fill="#1F2937"/>
        <circle cx="127" cy="67" r="10" fill="#F5B800" stroke="#FFFFFF" strokeWidth="2"/>
        <path d="M155 60 L175 48 L175 87 L155 75 Z" fill="#374151"/>
        <path d="M127 85 L105 140 M127 85 L127 140 M127 85 L149 140" stroke="#1F2937" strokeWidth="3"/>
        <path d="M30 130 C 50 40, 200 40, 210 130" stroke="#F5B800" strokeWidth="3" strokeDasharray="6 4" fill="none"/>
        <rect x="170" y="80" width="45" height="35" rx="3" fill="#1F2937"/>
        <rect x="170" y="72" width="45" height="8" rx="2" fill="#F5B800"/>
        <circle cx="45" cy="65" r="14" fill="#374151"/>
        <path d="M25 135 C 25 100, 65 100, 65 135 Z" fill="#1F2937"/>
      </svg>
    );
  }

  // Digital Marketing default
  return (
    <svg className="illustration-svg" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="160" rx="8" fill="#FFF7ED"/>
      <rect x="90" y="20" width="65" height="120" rx="8" fill="#1F2937" stroke="#374151" strokeWidth="2"/>
      <rect x="95" y="28" width="55" height="100" rx="4" fill="#FFFFFF"/>
      <circle cx="122" cy="133" r="3" fill="#9CA3AF"/>
      <circle cx="122" cy="65" r="14" fill="#F5B800"/>
      <path d="M102 110 C 102 90, 142 90, 142 110 Z" fill="#1F2937"/>
      <circle cx="55" cy="50" r="14" fill="#EF4444"/>
      <text x="50" y="55" fontSize="10" fontWeight="bold" fill="#FFF">YT</text>
      <circle cx="50" cy="95" r="12" fill="#25D366"/>
      <text x="45" y="99" fontSize="10" fontWeight="bold" fill="#FFF">WA</text>
      <circle cx="190" cy="50" r="13" fill="#3B82F6"/>
      <text x="185" y="54" fontSize="10" fontWeight="bold" fill="#FFF">in</text>
      <circle cx="195" cy="95" r="12" fill="#E1306C"/>
      <text x="190" y="99" fontSize="10" fontWeight="bold" fill="#FFF">IG</text>
    </svg>
  );
}

export default function MegaMenu({ category, onClose, onNavigateService }) {
  if (!category) return null;

  const handleItemClick = (e, itemTitle, itemId) => {
    e.preventDefault();
    const slug = itemId || itemTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (onNavigateService) {
      onNavigateService(category.id, slug);
    }
    onClose();
  };

  return (
    <div className="mega-dropdown-overlay" onMouseLeave={onClose}>
      <div className="mega-menu-content">
        {/* Left Column: Category Header & Services Columns */}
        <div className="mega-menu-left">
          <div className="mega-category-header" onClick={(e) => { e.preventDefault(); if (onNavigateService) onNavigateService(category.id, ''); onClose(); }} style={{ cursor: 'pointer' }}>
            <span>{category.name}</span>
            <Icons.ArrowRight size={18} />
          </div>

          <div className="mega-columns-grid">
            {category.columns.map((col, cIdx) => (
              <div className="mega-column" key={cIdx}>
                {col.items.map((item, iIdx) => {
                  const IconComp = Icons[item.icon] || Icons.Circle;
                  return (
                    <a 
                      href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="mega-item-link" 
                      key={iIdx}
                      onClick={(e) => handleItemClick(e, item.title, item.id)}
                    >
                      <IconComp className="mega-item-icon" />
                      <div className="mega-item-text">
                        <div className="mega-item-title">
                          <span>{item.title}</span>
                          {item.badge && <span className="mega-badge">{item.badge}</span>}
                        </div>
                        <span className="mega-item-desc">{item.desc}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Featured Banner Card */}
        <div className="mega-feature-banner">
          <h4 className="feature-title">{category.bannerTitle}</h4>
          <div className="feature-illustration-box">
            <MenuIllustration type={category.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
