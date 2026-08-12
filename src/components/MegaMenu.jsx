import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { ALL_SERVICE_STYLES } from './ServiceIllustrationCard';
import { getSeoMetadata } from '../data/seoPageMetadata';

export default function MegaMenu({ category, onClose, onNavigateService }) {
  if (!category) return null;

  const allItems = category.columns.flatMap(col => col.items);
  const defaultId = allItems.length > 0 ? allItems[0].id : null;
  const [hoveredId, setHoveredId] = useState(defaultId);

  const getItemHref = (catId, itemId, itemTitle) => {
    const slug = itemId || itemTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const meta = getSeoMetadata({ activePage: 'service', activeCategoryId: catId, activeSubServiceId: slug });
    return meta?.path || `/services/${catId}/${slug}`;
  };

  const handleItemClick = (e, itemTitle, itemId) => {
    e.preventDefault();
    const slug = itemId || itemTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (onNavigateService) onNavigateService(category.id, slug);
    onClose();
  };

  const currentItemId = hoveredId || defaultId;
  const currentStyle = ALL_SERVICE_STYLES[currentItemId] || {};
  const currentTitle = allItems.find(i => i.id === currentItemId)?.title || category.bannerTitle;

  const accentColor = currentStyle.accent || '#F5B800';
  const borderColor = currentStyle.borderColor || `${accentColor}66`;
  const glowColor = currentStyle.glowColor || `${accentColor}22`;

  return (
    <div className="mega-dropdown-overlay" onMouseLeave={onClose}>
      <div className="mega-menu-content">
        {/* Left: Service List */}
        <div className="mega-menu-left">
          <div
            className="mega-category-header"
            onClick={(e) => { e.preventDefault(); if (onNavigateService) onNavigateService(category.id, ''); onClose(); }}
            style={{ cursor: 'pointer' }}
          >
            <span>{category.name}</span>
            <Icons.ArrowRight size={18} />
          </div>

          <div className="mega-columns-grid">
            {category.columns.map((col, cIdx) => (
              <div className="mega-column" key={cIdx}>
                {col.items.map((item, iIdx) => {
                  const IconComp = Icons[item.icon] || Icons.Circle;
                  const isHovered = currentItemId === item.id;
                  const itemAccent = ALL_SERVICE_STYLES[item.id]?.accent || '#F5B800';
                  return (
                    <a
                      href={getItemHref(category.id, item.id, item.title)}
                      className="mega-item-link"
                      key={iIdx}
                      onClick={(e) => handleItemClick(e, item.title, item.id)}
                      onMouseEnter={() => setHoveredId(item.id)}
                      style={isHovered ? {
                        background: `${itemAccent}18`,
                        borderLeft: `2px solid ${itemAccent}`,
                        borderRadius: '8px',
                        paddingLeft: '10px',
                        transition: 'all 0.2s ease',
                      } : { transition: 'all 0.2s ease' }}
                    >
                      <IconComp className="mega-item-icon" style={isHovered ? { color: itemAccent } : {}} />
                      <div className="mega-item-text">
                        <div className="mega-item-title">
                          <span style={isHovered ? { color: itemAccent } : {}}>{item.title}</span>
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

        {/* Right: Live preview panel — changes on every hover */}
        <div
          className="mega-feature-banner"
          style={{
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            border: `1px solid ${borderColor}`,
            boxShadow: `0 0 30px ${glowColor}, inset 0 0 30px rgba(0,0,0,0.3)`,
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {/* Service title */}
          <h4
            className="feature-title"
            style={{ color: accentColor, transition: 'color 0.25s ease' }}
          >
            {currentTitle}
          </h4>

          {/* SVG illustration box — unique per service */}
          <div
            className="feature-illustration-box"
            style={{
              background: '#0F172A',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '160px',
              isolation: 'isolate',
            }}
          >
            {currentStyle.svg ? (
              <div
                key={currentItemId}
                style={{ width: '100%', animation: 'megaImgFadeIn 0.25s ease' }}
              >
                {currentStyle.svg}
              </div>
            ) : (
              <Icons.Layers size={64} color="#374151" />
            )}
          </div>

          {/* Accent label pill */}
          {currentStyle.label && (
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
              <span style={{
                background: `${accentColor}20`,
                border: `1px solid ${accentColor}55`,
                color: accentColor,
                fontSize: '0.73rem',
                fontWeight: 700,
                padding: '4px 14px',
                borderRadius: '20px',
                letterSpacing: '0.4px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.25s ease',
              }}>
                {React.createElement(
                  Icons[currentStyle.iconName] || Icons.Sparkles,
                  { size: 11 }
                )}
                {currentStyle.label}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
