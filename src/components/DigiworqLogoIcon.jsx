import React from 'react';
import logoMark from '../../logomark 1.png';

export default function DigiworqLogoIcon({ size = 42, className = '' }) {
  return (
    <div 
      className={`digiworq-logo-badge ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        padding: '3px',
        border: '1.5px solid #F5B800',
        boxShadow: '0 4px 14px rgba(245, 184, 0, 0.25)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <img 
        src={logoMark} 
        alt="Digiworq Official Logo" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain',
          display: 'block',
          borderRadius: '6px',
        }} 
      />
    </div>
  );
}
