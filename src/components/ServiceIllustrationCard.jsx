import React from 'react';
import * as Icons from 'lucide-react';

const mkSvg = (content) => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="320" height="200" rx="14" fill="#0F172A"/>
    {content}
  </svg>
);

export const ALL_SERVICE_STYLES = {
  // ── Creative ─────────────────────────────────────────────────────────────────
  'branding-solutions': {
    accent: '#A068FF', borderColor: 'rgba(160,104,255,0.4)', glowColor: 'rgba(160,104,255,0.25)',
    label: 'Brand Identity Studio', iconName: 'Palette',
    svg: mkSvg(<>
      <circle cx="160" cy="90" r="55" fill="#1A0A3D" stroke="#A068FF" strokeWidth="1.5" strokeDasharray="6 4"/>
      <circle cx="160" cy="90" r="35" fill="#200E4A" stroke="#A068FF" strokeWidth="1"/>
      <text x="133" y="103" fontSize="28" fontWeight="900" fontFamily="serif" fill="#A068FF">dW</text>
      <circle cx="215" cy="55" r="12" fill="#A068FF" opacity="0.4"/>
      <circle cx="105" cy="130" r="8" fill="#7C3AED" opacity="0.5"/>
      <path d="M160 35 L175 55 L195 45 L185 68 L200 80 L178 78 L170 100 L155 80 L133 85 L148 68 L138 45 L158 56 Z" fill="#A068FF" opacity="0.15" stroke="#A068FF" strokeWidth="1"/>
    </>),
  },
  'package-designing': {
    accent: '#F5B800', borderColor: 'rgba(245,184,0,0.4)', glowColor: 'rgba(245,184,0,0.2)',
    label: '3D Packaging Studio', iconName: 'Box',
    svg: mkSvg(<>
      <path d="M160 40 L230 75 L230 145 L160 170 L90 145 L90 75 Z" fill="#1A1200" stroke="#F5B800" strokeWidth="1.5"/>
      <path d="M160 40 L160 170" stroke="#F5B800" strokeWidth="1" strokeDasharray="5 3"/>
      <path d="M90 75 L230 75" stroke="#F5B800" strokeWidth="1" strokeDasharray="5 3"/>
      <path d="M160 40 L230 75 L160 107 L90 75 Z" fill="#2A2000" stroke="#F5B800" strokeWidth="1"/>
      <path d="M90 75 L160 107 L160 170 L90 145 Z" fill="#1E1800" stroke="#F5B800" strokeWidth="0.5"/>
      <rect x="120" y="88" width="40" height="30" rx="3" fill="#F5B800" opacity="0.15"/>
      <text x="130" y="108" fontSize="11" fontWeight="bold" fill="#F5B800">pkg</text>
    </>),
  },
  'graphic-designing': {
    accent: '#0D9488', borderColor: 'rgba(13,148,136,0.4)', glowColor: 'rgba(13,148,136,0.2)',
    label: 'Graphic Design Studio', iconName: 'PenTool',
    svg: mkSvg(<>
      <rect x="50" y="35" width="220" height="140" rx="10" fill="#0A2A27" stroke="#0D9488" strokeWidth="1.5"/>
      <circle cx="110" cy="90" r="38" fill="#0F2A25" stroke="#0D9488" strokeWidth="1.5"/>
      <circle cx="110" cy="90" r="22" fill="#0D9488" opacity="0.15"/>
      <path d="M95 105 Q110 70 125 105 Q110 120 95 105Z" fill="#0D9488" opacity="0.6"/>
      <rect x="165" y="55" width="90" height="10" rx="4" fill="#0D9488" opacity="0.4"/>
      <rect x="165" y="72" width="75" height="6" rx="2" fill="#334155"/>
      <rect x="165" y="84" width="85" height="6" rx="2" fill="#334155"/>
      <rect x="165" y="96" width="60" height="6" rx="2" fill="#334155"/>
      <rect x="165" y="115" width="80" height="22" rx="6" fill="#0D9488"/>
    </>),
  },
  'ui-ux-design': {
    accent: '#7C3AED', borderColor: 'rgba(124,58,237,0.4)', glowColor: 'rgba(124,58,237,0.2)',
    label: 'Figma UI Design System', iconName: 'Layout',
    svg: mkSvg(<>
      <rect x="40" y="30" width="240" height="145" rx="10" fill="#1A0A3D" stroke="#7C3AED" strokeWidth="1.5"/>
      <rect x="40" y="30" width="240" height="24" rx="10" fill="#170F2E"/>
      <circle cx="57" cy="42" r="5" fill="#EF4444"/><circle cx="72" cy="42" r="5" fill="#F5B800"/><circle cx="87" cy="42" r="5" fill="#22C55E"/>
      <rect x="55" y="64" width="60" height="100" rx="6" fill="#170F2E" stroke="#7C3AED" strokeWidth="1"/>
      <rect x="62" y="72" width="46" height="30" rx="3" fill="#7C3AED" opacity="0.2"/>
      <rect x="62" y="107" width="30" height="5" rx="2" fill="#334155"/>
      <rect x="62" y="117" width="40" height="5" rx="2" fill="#334155"/>
      <rect x="62" y="127" width="35" height="5" rx="2" fill="#334155"/>
      <rect x="125" y="64" width="145" height="48" rx="6" fill="#170F2E" stroke="#7C3AED" strokeWidth="1"/>
      <rect x="133" y="72" width="80" height="32" rx="4" fill="#7C3AED" opacity="0.15"/>
      <rect x="219" y="72" width="43" height="32" rx="4" fill="#7C3AED" opacity="0.3"/>
      <rect x="125" y="120" width="70" height="44" rx="6" fill="#170F2E" stroke="#7C3AED" strokeWidth="1"/>
      <rect x="203" y="120" width="67" height="44" rx="6" fill="#7C3AED" opacity="0.2" stroke="#7C3AED" strokeWidth="1"/>
    </>),
  },
  'mobile-app-design': {
    accent: '#2563EB', borderColor: 'rgba(37,99,235,0.4)', glowColor: 'rgba(37,99,235,0.2)',
    label: 'Mobile App UI Studio', iconName: 'Smartphone',
    svg: mkSvg(<>
      <rect x="100" y="18" width="120" height="170" rx="20" fill="#1E293B" stroke="#2563EB" strokeWidth="2"/>
      <rect x="110" y="36" width="100" height="130" rx="8" fill="#0F172A"/>
      <rect x="130" y="26" width="60" height="6" rx="3" fill="#2563EB" opacity="0.5"/>
      <rect x="118" y="48" width="84" height="14" rx="4" fill="#1E3A5F"/>
      <rect x="118" y="68" width="38" height="38" rx="6" fill="#1E3A5F"/>
      <rect x="162" y="68" width="38" height="38" rx="6" fill="#1E3A5F"/>
      <rect x="118" y="112" width="38" height="38" rx="6" fill="#2563EB" opacity="0.3"/>
      <rect x="162" y="112" width="38" height="38" rx="6" fill="#1E3A5F"/>
      <circle cx="154" cy="170" r="6" fill="#2563EB"/>
    </>),
  },
  'ppt-design': {
    accent: '#EA580C', borderColor: 'rgba(234,88,12,0.4)', glowColor: 'rgba(234,88,12,0.2)',
    label: 'Pitch Deck Studio', iconName: 'Presentation',
    svg: mkSvg(<>
      <rect x="40" y="30" width="240" height="145" rx="10" fill="#1A0A00" stroke="#EA580C" strokeWidth="1.5"/>
      <rect x="50" y="40" width="220" height="115" rx="6" fill="#0F0800"/>
      <rect x="65" y="55" width="85" height="85" rx="4" fill="#1A1200" stroke="#EA580C" strokeWidth="1"/>
      <rect x="68" y="60" width="79" height="40" rx="3" fill="#EA580C" opacity="0.15"/>
      <text x="85" y="85" fontSize="22" fontWeight="900" fill="#EA580C">Q3</text>
      <rect x="68" y="104" width="55" height="5" rx="2" fill="#6B7280"/>
      <rect x="68" y="113" width="40" height="5" rx="2" fill="#6B7280"/>
      <rect x="158" y="55" width="118" height="25" rx="4" fill="#1A1200"/>
      <rect x="164" y="61" width="75" height="8" rx="3" fill="#EA580C" opacity="0.6"/>
      <rect x="158" y="86" width="50" height="50" rx="4" fill="#EA580C" opacity="0.1" stroke="#EA580C" strokeWidth="1"/>
      <rect x="160" y="110" width="8" height="24" rx="2" fill="#EA580C"/>
      <rect x="172" y="100" width="8" height="34" rx="2" fill="#EA580C" opacity="0.7"/>
      <rect x="184" y="105" width="8" height="29" rx="2" fill="#EA580C" opacity="0.5"/>
      <rect x="216" y="88" width="52" height="50" rx="4" fill="#1A1200"/>
      <circle cx="242" cy="113" r="18" fill="#EA580C" opacity="0.1" stroke="#EA580C" strokeWidth="1"/>
      <path d="M242 113 L242 95 A18 18 0 0 1 258 113 Z" fill="#EA580C"/>
    </>),
  },
  'brand-consultation': {
    accent: '#059669', borderColor: 'rgba(5,150,105,0.4)', glowColor: 'rgba(5,150,105,0.2)',
    label: 'Brand Strategy Consulting', iconName: 'Users',
    svg: mkSvg(<>
      <circle cx="115" cy="80" r="32" fill="#0A2A1E" stroke="#059669" strokeWidth="1.5"/>
      <circle cx="115" cy="68" r="14" fill="#0F2A1E" stroke="#059669" strokeWidth="1"/>
      <path d="M83 110 Q83 92 115 92 Q147 92 147 110" fill="#0A2A1E" stroke="#059669" strokeWidth="1"/>
      <circle cx="205" cy="80" r="26" fill="#0A2A1E" stroke="#059669" strokeWidth="1.5"/>
      <circle cx="205" cy="70" r="11" fill="#0F2A1E" stroke="#059669" strokeWidth="1"/>
      <path d="M179 106 Q179 90 205 90 Q231 90 231 106" fill="#0A2A1E" stroke="#059669" strokeWidth="1"/>
      <rect x="55" y="130" width="210" height="40" rx="8" fill="#0A2A1E" stroke="#059669" strokeWidth="1"/>
      <text x="105" y="155" fontSize="11" fill="#059669" fontWeight="bold">BRAND STRATEGY 2025</text>
    </>),
  },
  'infographic-design': {
    accent: '#DB2777', borderColor: 'rgba(219,39,119,0.4)', glowColor: 'rgba(219,39,119,0.2)',
    label: 'Data Infographic Studio', iconName: 'PieChart',
    svg: mkSvg(<>
      <circle cx="100" cy="100" r="58" fill="#1A0010" stroke="#DB2777" strokeWidth="1.5"/>
      <path d="M100 100 L100 42 A58 58 0 0 1 150 148 Z" fill="#DB2777"/>
      <path d="M100 100 L150 148 A58 58 0 0 1 42 118 Z" fill="#DB2777" opacity="0.5"/>
      <path d="M100 100 L42 118 A58 58 0 0 1 100 42 Z" fill="#DB2777" opacity="0.25"/>
      <circle cx="100" cy="100" r="25" fill="#0F172A"/>
      <rect x="180" y="55" width="110" height="90" rx="8" fill="#1A0010" stroke="#DB2777" strokeWidth="1"/>
      <rect x="192" y="68" width="10" height="10" rx="2" fill="#DB2777"/>
      <rect x="208" y="70" width="60" height="5" rx="2" fill="#6B7280"/>
      <rect x="192" y="84" width="10" height="10" rx="2" fill="#DB2777" opacity="0.5"/>
      <rect x="208" y="86" width="45" height="5" rx="2" fill="#6B7280"/>
      <rect x="192" y="100" width="10" height="10" rx="2" fill="#DB2777" opacity="0.25"/>
      <rect x="208" y="102" width="55" height="5" rx="2" fill="#6B7280"/>
      <text x="192" y="132" fontSize="10" fill="#DB2777" fontWeight="bold">62% · 24% · 14%</text>
    </>),
  },
  'social-media-content-creation': {
    accent: '#10B981', borderColor: 'rgba(16,185,129,0.4)', glowColor: 'rgba(16,185,129,0.2)',
    label: 'Social Content Studio', iconName: 'Share2',
    svg: mkSvg(<>
      <rect x="40" y="30" width="100" height="90" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="1.5"/>
      <rect x="50" y="42" width="80" height="45" rx="5" fill="#0F2A1E"/>
      <rect x="55" y="92" width="55" height="6" rx="2" fill="#334155"/>
      <rect x="55" y="102" width="40" height="5" rx="2" fill="#334155"/>
      <rect x="180" y="30" width="100" height="90" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="1.5"/>
      <rect x="190" y="42" width="80" height="45" rx="5" fill="#0F2A1E"/>
      <rect x="195" y="92" width="55" height="6" rx="2" fill="#334155"/>
      <rect x="195" y="102" width="40" height="5" rx="2" fill="#334155"/>
      <rect x="110" y="130" width="100" height="48" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="1.5"/>
      <rect x="120" y="142" width="80" height="24" rx="5" fill="#0F2A1E"/>
      <rect x="125" y="162" width="50" height="5" rx="2" fill="#334155"/>
      <line x1="140" y1="75" x2="180" y2="60" stroke="#10B981" strokeWidth="1.5"/>
      <line x1="140" y1="85" x2="160" y2="130" stroke="#10B981" strokeWidth="1.5"/>
      <line x1="230" y1="120" x2="210" y2="130" stroke="#10B981" strokeWidth="1.5"/>
      <text x="65" y="67" fontSize="22" fill="#10B981" fontWeight="900">IG</text>
      <text x="205" y="67" fontSize="18" fill="#10B981" fontWeight="900">FB</text>
    </>),
  },
  'illustrations-and-recreation-services': {
    accent: '#CA8A04', borderColor: 'rgba(202,138,4,0.4)', glowColor: 'rgba(202,138,4,0.2)',
    label: 'Custom Illustration Studio', iconName: 'Brush',
    svg: mkSvg(<>
      <rect x="40" y="30" width="240" height="145" rx="10" fill="#1A1000" stroke="#CA8A04" strokeWidth="1.5"/>
      <circle cx="130" cy="95" r="45" fill="#1E1800" stroke="#CA8A04" strokeWidth="1" strokeDasharray="4 3"/>
      <path d="M108 72 Q130 55 152 72 Q165 90 152 108 Q130 125 108 108 Q95 90 108 72Z" fill="#CA8A04" opacity="0.2"/>
      <path d="M115 80 Q130 65 145 80 Q158 95 145 110 Q130 122 115 110 Q102 95 115 80Z" fill="#CA8A04" opacity="0.4"/>
      <circle cx="130" cy="95" r="12" fill="#CA8A04"/>
      <rect x="200" y="50" width="12" height="50" rx="4" fill="#CA8A04" opacity="0.5" transform="rotate(-15 206 75)"/>
      <rect x="220" y="55" width="10" height="40" rx="4" fill="#CA8A04" opacity="0.3" transform="rotate(-10 225 75)"/>
    </>),
  },
  'rebranding': {
    accent: '#0891B2', borderColor: 'rgba(8,145,178,0.4)', glowColor: 'rgba(8,145,178,0.2)',
    label: 'Brand Refresh & Evolution', iconName: 'RefreshCw',
    svg: mkSvg(<>
      <circle cx="110" cy="100" r="48" fill="#0A2A30" stroke="#6B7280" strokeWidth="1.5" strokeDasharray="5 4"/>
      <text x="82" y="108" fontSize="22" fontWeight="900" fontFamily="serif" fill="#6B7280" opacity="0.6">OLD</text>
      <path d="M158 90 Q175 85 190 90" stroke="#0891B2" strokeWidth="2.5" fill="none" markerEnd="url(#arr)"/>
      <path d="M158 110 Q175 115 190 110" stroke="#0891B2" strokeWidth="2.5" fill="none" markerStart="url(#arr2)"/>
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#0891B2"/></marker>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse"><path d="M0 0 L6 3 L0 6 Z" fill="#0891B2"/></marker>
      </defs>
      <circle cx="210" cy="100" r="48" fill="#0A2A30" stroke="#0891B2" strokeWidth="1.5"/>
      <text x="183" y="108" fontSize="22" fontWeight="900" fontFamily="serif" fill="#0891B2">NEW</text>
    </>),
  },

  // ── Technology ───────────────────────────────────────────────────────────────
  'website-development': {
    accent: '#3B82F6', borderColor: 'rgba(59,130,246,0.4)', glowColor: 'rgba(59,130,246,0.2)',
    label: 'Web Dev Studio', iconName: 'Monitor',
    svg: mkSvg(<>
      <rect x="50" y="28" width="220" height="135" rx="10" fill="#1E293B" stroke="#3B82F6" strokeWidth="1.5"/>
      <rect x="50" y="28" width="220" height="24" rx="10" fill="#1E3A5F"/>
      <circle cx="70" cy="40" r="5" fill="#EF4444"/><circle cx="85" cy="40" r="5" fill="#F5B800"/><circle cx="100" cy="40" r="5" fill="#22C55E"/>
      <rect x="68" y="62" width="75" height="7" rx="3" fill="#F5B800"/>
      <rect x="68" y="76" width="140" height="5" rx="2" fill="#334155"/>
      <rect x="68" y="88" width="110" height="5" rx="2" fill="#3B82F6"/>
      <rect x="68" y="100" width="130" height="5" rx="2" fill="#334155"/>
      <rect x="68" y="118" width="90" height="24" rx="6" fill="#3B82F6"/>
      <rect x="168" y="118" width="70" height="24" rx="6" fill="#1E3A5F" stroke="#3B82F6" strokeWidth="1"/>
      <rect x="110" y="163" width="100" height="6" rx="3" fill="#334155"/>
    </>),
  },
  'app-development': {
    accent: '#8B5CF6', borderColor: 'rgba(139,92,246,0.4)', glowColor: 'rgba(139,92,246,0.2)',
    label: 'Mobile App Dev', iconName: 'Smartphone',
    svg: mkSvg(<>
      <rect x="110" y="20" width="100" height="165" rx="18" fill="#1E293B" stroke="#8B5CF6" strokeWidth="1.5"/>
      <rect x="118" y="38" width="84" height="120" rx="6" fill="#0F172A"/>
      <rect x="126" y="50" width="70" height="10" rx="3" fill="#8B5CF6"/>
      <rect x="126" y="68" width="70" height="36" rx="6" fill="#1E293B"/>
      <rect x="126" y="112" width="32" height="32" rx="6" fill="#1E3A5F"/>
      <rect x="164" y="112" width="32" height="32" rx="6" fill="#1E3A5F"/>
      <circle cx="160" cy="174" r="5" fill="#8B5CF6"/>
    </>),
  },
  'e-commerce-website-development': {
    accent: '#F59E0B', borderColor: 'rgba(245,158,11,0.4)', glowColor: 'rgba(245,158,11,0.2)',
    label: 'E-Commerce Platform', iconName: 'ShoppingCart',
    svg: mkSvg(<>
      <rect x="40" y="30" width="240" height="145" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5"/>
      <rect x="48" y="62" width="55" height="55" rx="6" fill="#292400" stroke="#F59E0B" strokeWidth="1"/>
      <rect x="58" y="76" width="22" height="22" rx="3" fill="#F59E0B"/>
      <rect x="112" y="62" width="80" height="8" rx="3" fill="#F5F5F5" opacity="0.7"/>
      <rect x="112" y="76" width="55" height="5" rx="2" fill="#6B7280"/>
      <rect x="112" y="88" width="45" height="5" rx="2" fill="#6B7280"/>
      <rect x="112" y="104" width="60" height="9" rx="3" fill="#F59E0B"/>
      <rect x="200" y="140" width="60" height="14" rx="5" fill="#22C55E"/>
    </>),
  },
  'e-learning-solutions': {
    accent: '#06B6D4', borderColor: 'rgba(6,182,212,0.4)', glowColor: 'rgba(6,182,212,0.2)',
    label: 'E-Learning Platform', iconName: 'GraduationCap',
    svg: mkSvg(<>
      <rect x="45" y="35" width="230" height="140" rx="10" fill="#1E293B" stroke="#06B6D4" strokeWidth="1.5"/>
      <rect x="60" y="82" width="100" height="70" rx="6" fill="#0F2A30"/>
      <polygon points="90,95 90,135 128,115" fill="#06B6D4"/>
      <circle cx="110" cy="115" r="25" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="5 3"/>
      <rect x="175" y="82" width="85" height="14" rx="4" fill="#0F172A"/>
      <rect x="175" y="102" width="65" height="5" rx="2" fill="#334155"/>
      <rect x="175" y="113" width="75" height="5" rx="2" fill="#334155"/>
      <rect x="175" y="140" width="70" height="10" rx="4" fill="#06B6D4"/>
    </>),
  },
  'ar-vr-solutions': {
    accent: '#A855F7', borderColor: 'rgba(168,85,247,0.4)', glowColor: 'rgba(168,85,247,0.2)',
    label: 'AR/VR Experiences', iconName: 'Glasses',
    svg: mkSvg(<>
      <circle cx="160" cy="100" r="70" fill="#1A0A3D" opacity="0.6"/>
      <rect x="80" y="80" width="160" height="55" rx="28" fill="#1E293B" stroke="#A855F7" strokeWidth="2"/>
      <circle cx="120" cy="107" r="22" fill="#0F0920" stroke="#A855F7" strokeWidth="1.5"/>
      <circle cx="200" cy="107" r="22" fill="#0F0920" stroke="#A855F7" strokeWidth="1.5"/>
      <rect x="142" y="103" width="36" height="8" rx="4" fill="#A855F7" opacity="0.5"/>
      <circle cx="120" cy="107" r="8" fill="#A855F7" opacity="0.5"/>
      <circle cx="200" cy="107" r="8" fill="#A855F7" opacity="0.5"/>
    </>),
  },
  'emailer-design-and-development': {
    accent: '#F43F5E', borderColor: 'rgba(244,63,94,0.4)', glowColor: 'rgba(244,63,94,0.2)',
    label: 'Email Marketing Design', iconName: 'Mail',
    svg: mkSvg(<>
      <rect x="50" y="40" width="220" height="130" rx="10" fill="#1E293B" stroke="#F43F5E" strokeWidth="1.5"/>
      <path d="M50 58 L160 115 L270 58" stroke="#F43F5E" strokeWidth="2" fill="none"/>
      <rect x="72" y="80" width="65" height="8" rx="3" fill="#334155"/>
      <rect x="72" y="94" width="120" height="5" rx="2" fill="#334155"/>
      <rect x="72" y="124" width="70" height="18" rx="5" fill="#F43F5E"/>
      <circle cx="258" cy="42" r="14" fill="#F43F5E"/>
      <text x="253" y="47" fontSize="13" fontWeight="bold" fill="#fff">3</text>
    </>),
  },
  'software-development': {
    accent: '#10B981', borderColor: 'rgba(16,185,129,0.4)', glowColor: 'rgba(16,185,129,0.2)',
    label: 'Custom Software Dev', iconName: 'Code',
    svg: mkSvg(<>
      <rect x="40" y="30" width="240" height="145" rx="10" fill="#0A1A14" stroke="#10B981" strokeWidth="1.5"/>
      <rect x="40" y="30" width="240" height="22" rx="10" fill="#0A2A1A"/>
      <circle cx="56" cy="41" r="5" fill="#EF4444"/><circle cx="71" cy="41" r="5" fill="#F5B800"/><circle cx="86" cy="41" r="5" fill="#10B981"/>
      <text x="56" y="68" fontSize="11" fontFamily="monospace" fill="#10B981">const</text>
      <text x="95" y="68" fontSize="11" fontFamily="monospace" fill="#60A5FA"> api</text>
      <text x="56" y="84" fontSize="11" fontFamily="monospace" fill="#94A3B8">  await fetch(url)</text>
      <text x="56" y="100" fontSize="11" fontFamily="monospace" fill="#F59E0B">  .then(r =&gt; r.json())</text>
      <text x="56" y="116" fontSize="11" fontFamily="monospace" fill="#94A3B8">  .catch(console.error)</text>
      <rect x="56" y="130" width="8" height="14" rx="1" fill="#10B981" opacity="0.8"/>
    </>),
  },
  'artificial-intelligence': {
    accent: '#EC4899', borderColor: 'rgba(236,72,153,0.4)', glowColor: 'rgba(236,72,153,0.2)',
    label: 'AI & ML Solutions', iconName: 'Cpu',
    svg: mkSvg(<>
      <circle cx="160" cy="100" r="50" fill="#1A0010"/>
      <circle cx="160" cy="100" r="50" fill="none" stroke="#EC4899" strokeWidth="1.5" strokeDasharray="6 3"/>
      <circle cx="160" cy="100" r="18" fill="#EC4899" opacity="0.2" stroke="#EC4899" strokeWidth="2"/>
      <circle cx="160" cy="100" r="8" fill="#EC4899"/>
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = deg * Math.PI / 180;
        return <g key={i}>
          <line x1={160 + 20 * Math.cos(rad)} y1={100 + 20 * Math.sin(rad)} x2={160 + 45 * Math.cos(rad)} y2={100 + 45 * Math.sin(rad)} stroke="#EC4899" strokeWidth="1.5"/>
          <circle cx={160 + 50 * Math.cos(rad)} cy={100 + 50 * Math.sin(rad)} r="5" fill="#EC4899"/>
        </g>;
      })}
    </>),
  },

  // ── Video Production ──────────────────────────────────────────────────────────
  'indoor-and-outdoor-shooting': {
    accent: '#F97316', borderColor: 'rgba(249,115,22,0.4)', glowColor: 'rgba(249,115,22,0.2)',
    label: 'Video Production', iconName: 'Video',
    svg: mkSvg(<>
      <rect x="50" y="40" width="175" height="115" rx="8" fill="#1E293B" stroke="#F97316" strokeWidth="1.5"/>
      <rect x="225" y="58" width="45" height="30" rx="4" fill="#374151"/>
      <polygon points="270,60 295,52 295,86 270,78" fill="#F97316"/>
      <circle cx="137" cy="97" r="30" fill="#0F172A"/>
      <polygon points="127,84 127,110 153,97" fill="#F97316"/>
    </>),
  },
  'video-editing': {
    accent: '#A78BFA', borderColor: 'rgba(167,139,250,0.4)', glowColor: 'rgba(167,139,250,0.2)',
    label: 'Pro Video Editing', iconName: 'Film',
    svg: mkSvg(<>
      <rect x="40" y="30" width="240" height="145" rx="10" fill="#1E293B" stroke="#A78BFA" strokeWidth="1.5"/>
      <rect x="55" y="85" width="210" height="55" rx="6" fill="#0F172A"/>
      <rect x="55" y="85" width="90" height="55" rx="0" fill="#1F2937"/>
      <polygon points="90,100 90,125 115,112" fill="#A78BFA"/>
      <rect x="165" y="90" width="90" height="8" rx="2" fill="#A78BFA" opacity="0.4"/>
      <rect x="55" y="150" width="15" height="14" rx="2" fill="#A78BFA"/>
      <rect x="75" y="150" width="120" height="6" rx="2" fill="#334155"/>
    </>),
  },
  'explainer-videos': {
    accent: '#34D399', borderColor: 'rgba(52,211,153,0.4)', glowColor: 'rgba(52,211,153,0.2)',
    label: 'Animated Explainers', iconName: 'PlayCircle',
    svg: mkSvg(<>
      <circle cx="160" cy="100" r="60" fill="#0F2A1E" stroke="#34D399" strokeWidth="2"/>
      <circle cx="160" cy="100" r="40" fill="#0F2A1E" stroke="#34D399" strokeWidth="1" strokeDasharray="4 3"/>
      <polygon points="148,82 148,118 182,100" fill="#34D399"/>
    </>),
  },
  'testimonials': {
    accent: '#60A5FA', borderColor: 'rgba(96,165,250,0.4)', glowColor: 'rgba(96,165,250,0.2)',
    label: 'Client Testimonials', iconName: 'MessageSquare',
    svg: mkSvg(<>
      <rect x="45" y="30" width="140" height="95" rx="12" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5"/>
      <circle cx="75" cy="58" r="18" fill="#1E3A5F"/>
      <rect x="100" y="50" width="70" height="7" rx="2" fill="#60A5FA"/>
      <rect x="55" y="84" width="115" height="5" rx="2" fill="#334155"/>
      <rect x="135" y="100" width="130" height="85" rx="12" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5"/>
      <circle cx="165" cy="128" r="18" fill="#1E3A5F"/>
    </>),
  },
  'social-media-videos': {
    accent: '#FB7185', borderColor: 'rgba(251,113,133,0.4)', glowColor: 'rgba(251,113,133,0.2)',
    label: 'Social Media Video', iconName: 'Clapperboard',
    svg: mkSvg(<>
      <rect x="95" y="20" width="130" height="165" rx="16" fill="#1E293B" stroke="#FB7185" strokeWidth="1.5"/>
      <rect x="103" y="36" width="114" height="130" rx="8" fill="#0F172A"/>
      <circle cx="160" cy="70" r="20" fill="#0F0A12"/>
      <polygon points="153,62 153,78 170,70" fill="#FB7185"/>
      <rect x="111" y="100" width="80" height="18" rx="6" fill="#FB7185"/>
      <circle cx="160" cy="177" r="5" fill="#FB7185"/>
    </>),
  },
  'ad-films': {
    accent: '#FBBF24', borderColor: 'rgba(251,191,36,0.4)', glowColor: 'rgba(251,191,36,0.2)',
    label: 'TV & Digital Ad Films', iconName: 'Tv',
    svg: mkSvg(<>
      <rect x="40" y="35" width="225" height="140" rx="10" fill="#1E293B" stroke="#FBBF24" strokeWidth="1.5"/>
      <rect x="55" y="70" width="130" height="80" rx="6" fill="#0F172A"/>
      <polygon points="95,90 95,130 133,110" fill="#FBBF24"/>
      <rect x="200" y="70" width="50" height="23" rx="4" fill="#FBBF24" opacity="0.2" stroke="#FBBF24" strokeWidth="1"/>
    </>),
  },
  'podcast-videos': {
    accent: '#C084FC', borderColor: 'rgba(192,132,252,0.4)', glowColor: 'rgba(192,132,252,0.2)',
    label: 'Podcast Production', iconName: 'Mic',
    svg: mkSvg(<>
      <rect x="130" y="28" width="60" height="90" rx="30" fill="#1E293B" stroke="#C084FC" strokeWidth="2"/>
      <rect x="152" y="40" width="16" height="35" rx="8" fill="#C084FC"/>
      <path d="M110 95 Q110 140 160 140 Q210 140 210 95" stroke="#C084FC" strokeWidth="2" fill="none"/>
      <line x1="160" y1="140" x2="160" y2="165" stroke="#C084FC" strokeWidth="2"/>
      <rect x="130" y="165" width="60" height="6" rx="3" fill="#C084FC" opacity="0.5"/>
    </>),
  },
  'brand-films': {
    accent: '#F5B800', borderColor: 'rgba(245,184,0,0.4)', glowColor: 'rgba(245,184,0,0.2)',
    label: 'Brand Film Production', iconName: 'Sparkles',
    svg: mkSvg(<>
      <rect x="45" y="35" width="230" height="140" rx="12" fill="#1E293B" stroke="#F5B800" strokeWidth="1.5"/>
      <rect x="65" y="55" width="190" height="100" rx="8" fill="#0F172A"/>
      <path d="M65 100 Q110 70 155 90 Q200 110 255 80" stroke="#F5B800" strokeWidth="2" fill="none"/>
      <circle cx="155" cy="90" r="8" fill="#F5B800"/>
      <text x="125" y="148" fontSize="12" fontFamily="serif" fill="#F5B800" fontStyle="italic">Your Story.</text>
    </>),
  },
  'corporate-shoot-videos': {
    accent: '#6366F1', borderColor: 'rgba(99,102,241,0.4)', glowColor: 'rgba(99,102,241,0.2)',
    label: 'Corporate Video', iconName: 'Building',
    svg: mkSvg(<>
      <rect x="40" y="35" width="185" height="115" rx="8" fill="#1E293B" stroke="#6366F1" strokeWidth="1.5"/>
      <rect x="226" y="50" width="50" height="35" rx="4" fill="#374151"/>
      <polygon points="276,52 302,44 302,82 276,74" fill="#6366F1"/>
      <rect x="56" y="55" width="155" height="80" rx="5" fill="#0F172A"/>
    </>),
  },
  'e-learning-videos': {
    accent: '#2DD4BF', borderColor: 'rgba(45,212,191,0.4)', glowColor: 'rgba(45,212,191,0.2)',
    label: 'Educational Video', iconName: 'BookOpen',
    svg: mkSvg(<>
      <rect x="40" y="28" width="240" height="145" rx="10" fill="#1E293B" stroke="#2DD4BF" strokeWidth="1.5"/>
      <rect x="55" y="65" width="100" height="80" rx="6" fill="#0F2A27"/>
      <polygon points="85,85 85,120 115,102" fill="#2DD4BF"/>
      <rect x="170" y="65" width="95" height="20" rx="4" fill="#0F172A"/>
      <rect x="170" y="120" width="80" height="20" rx="5" fill="#2DD4BF"/>
    </>),
  },
  'voice-over-recordings': {
    accent: '#FB923C', borderColor: 'rgba(251,146,60,0.4)', glowColor: 'rgba(251,146,60,0.2)',
    label: 'Voice Over Studio', iconName: 'Volume2',
    svg: mkSvg(<>
      <circle cx="160" cy="80" r="40" fill="#1E293B" stroke="#FB923C" strokeWidth="2"/>
      <rect x="152" y="62" width="16" height="36" rx="8" fill="#FB923C"/>
      <path d="M125 90 Q125 125 160 125 Q195 125 195 90" stroke="#FB923C" strokeWidth="2.5" fill="none"/>
      <line x1="160" y1="125" x2="160" y2="150" stroke="#FB923C" strokeWidth="2"/>
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={70 + i * 26} y={158 + (i % 3) * 3} width="8" height={15 + (i % 3) * 8} rx="3" fill="#FB923C" opacity="0.7"/>
      ))}
    </>),
  },

  // ── Digital Marketing ────────────────────────────────────────────────────────
  'social-media-marketing': {
    accent: '#10B981', borderColor: 'rgba(16,185,129,0.4)', glowColor: 'rgba(16,185,129,0.2)',
    label: 'Social Media Growth', iconName: 'Share2',
    svg: mkSvg(<>
      <circle cx="80" cy="80" r="28" fill="#1E293B" stroke="#10B981" strokeWidth="1.5"/>
      <circle cx="240" cy="60" r="22" fill="#1E293B" stroke="#10B981" strokeWidth="1.5"/>
      <circle cx="200" cy="145" r="25" fill="#1E293B" stroke="#10B981" strokeWidth="1.5"/>
      <line x1="108" y1="80" x2="218" y2="60" stroke="#10B981" strokeWidth="1.5"/>
      <line x1="108" y1="88" x2="175" y2="140" stroke="#10B981" strokeWidth="1.5"/>
      <line x1="222" y1="75" x2="208" y2="122" stroke="#10B981" strokeWidth="1.5"/>
      <text x="55" y="128" fontSize="11" fill="#10B981" fontWeight="bold">+284%</text>
    </>),
  },
  'search-engine-optimization': {
    accent: '#3B82F6', borderColor: 'rgba(59,130,246,0.4)', glowColor: 'rgba(59,130,246,0.2)',
    label: 'SEO & Rankings', iconName: 'Search',
    svg: mkSvg(<>
      <rect x="40" y="30" width="240" height="145" rx="10" fill="#1E293B" stroke="#3B82F6" strokeWidth="1.5"/>
      <rect x="55" y="46" width="160" height="22" rx="6" fill="#0F172A" stroke="#3B82F6" strokeWidth="1"/>
      <text x="62" y="62" fontSize="11" fill="#6B7280">search rankings...</text>
      <circle cx="220" cy="57" r="9" fill="#3B82F6"/>
      <rect x="55" y="78" width="8" height="8" rx="2" fill="#F5B800"/>
      <rect x="69" y="80" width="120" height="5" rx="2" fill="#6B7280"/>
      <text x="55" y="162" fontSize="10" fill="#3B82F6">#1 Digiworq Ranking</text>
    </>),
  },
  'social-ads-management': {
    accent: '#F43F5E', borderColor: 'rgba(244,63,94,0.4)', glowColor: 'rgba(244,63,94,0.2)',
    label: 'Paid Ads Management', iconName: 'Target',
    svg: mkSvg(<>
      <circle cx="160" cy="100" r="70" fill="none" stroke="#F43F5E" strokeWidth="1" opacity="0.3"/>
      <circle cx="160" cy="100" r="50" fill="none" stroke="#F43F5E" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="160" cy="100" r="30" fill="none" stroke="#F43F5E" strokeWidth="2" opacity="0.8"/>
      <circle cx="160" cy="100" r="12" fill="#F43F5E"/>
      <line x1="160" y1="30" x2="160" y2="170" stroke="#F43F5E" strokeWidth="1" opacity="0.3"/>
      <line x1="90" y1="100" x2="230" y2="100" stroke="#F43F5E" strokeWidth="1" opacity="0.3"/>
    </>),
  },
  'lead-generation': {
    accent: '#22C55E', borderColor: 'rgba(34,197,94,0.4)', glowColor: 'rgba(34,197,94,0.2)',
    label: 'Lead Generation', iconName: 'TrendingUp',
    svg: mkSvg(<>
      <rect x="40" y="120" width="30" height="55" rx="4" fill="#22C55E" opacity="0.4"/>
      <rect x="78" y="100" width="30" height="75" rx="4" fill="#22C55E" opacity="0.6"/>
      <rect x="116" y="80" width="30" height="95" rx="4" fill="#22C55E" opacity="0.7"/>
      <rect x="154" y="55" width="30" height="120" rx="4" fill="#22C55E" opacity="0.85"/>
      <rect x="192" y="35" width="30" height="140" rx="4" fill="#22C55E"/>
      <path d="M40 130 Q80 100 120 85 Q160 65 230 38" stroke="#22C55E" strokeWidth="2.5" fill="none"/>
      <circle cx="232" cy="37" r="6" fill="#22C55E"/>
      <text x="195" y="28" fontSize="11" fill="#22C55E" fontWeight="bold">+340%</text>
    </>),
  },
  'performance-marketing': {
    accent: '#F59E0B', borderColor: 'rgba(245,158,11,0.4)', glowColor: 'rgba(245,158,11,0.2)',
    label: 'Performance Marketing', iconName: 'BarChart3',
    svg: mkSvg(<>
      <rect x="40" y="30" width="240" height="145" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5"/>
      <text x="60" y="72" fontSize="14" fill="#F59E0B" fontWeight="bold">4.8x ROAS</text>
      <path d="M55 155 Q100 120 145 130 Q190 140 265 90" stroke="#F59E0B" strokeWidth="2" fill="none"/>
      <path d="M55 155 Q100 145 150 150 Q200 155 265 148" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
    </>),
  },
  'content-writing-services': {
    accent: '#64748B', borderColor: 'rgba(100,116,139,0.4)', glowColor: 'rgba(100,116,139,0.2)',
    label: 'Content Writing', iconName: 'FileText',
    svg: mkSvg(<>
      <rect x="60" y="28" width="200" height="155" rx="10" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5"/>
      <rect x="76" y="48" width="80" height="10" rx="3" fill="#F5B800"/>
      <rect x="76" y="65" width="168" height="5" rx="2" fill="#334155"/>
      <rect x="76" y="76" width="145" height="5" rx="2" fill="#334155"/>
      <rect x="76" y="87" width="160" height="5" rx="2" fill="#334155"/>
      <rect x="76" y="155" width="30" height="18" rx="4" fill="#3B82F6"/>
    </>),
  },

  // ── 2D Animation ─────────────────────────────────────────────────────────────
  '2d-architecture-animation': {
    accent: '#F59E0B', borderColor: 'rgba(245,158,11,0.4)', glowColor: 'rgba(245,158,11,0.2)',
    label: '2D Architecture Viz', iconName: 'Building',
    svg: mkSvg(<>
      <rect x="45" y="120" width="230" height="50" rx="3" fill="#1E293B"/>
      <rect x="60" y="75" width="45" height="45" rx="2" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5"/>
      <rect x="110" y="55" width="60" height="65" rx="2" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5"/>
      <rect x="175" y="85" width="40" height="35" rx="2" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5"/>
      <text x="60" y="148" fontSize="9" fill="#F59E0B">ARCHITECTURE 2D</text>
    </>),
  },
  '2d-motion-graphics': {
    accent: '#EC4899', borderColor: 'rgba(236,72,153,0.4)', glowColor: 'rgba(236,72,153,0.2)',
    label: '2D Motion Graphics', iconName: 'Zap',
    svg: mkSvg(<>
      <circle cx="100" cy="100" r="40" fill="#1A001A" stroke="#EC4899" strokeWidth="2" strokeDasharray="6 3"/>
      <circle cx="220" cy="100" r="40" fill="#1A001A" stroke="#EC4899" strokeWidth="2" strokeDasharray="6 3"/>
      <path d="M100 60 Q160 20 220 60" stroke="#EC4899" strokeWidth="2" fill="none"/>
      <path d="M100 140 Q160 180 220 140" stroke="#EC4899" strokeWidth="2" fill="none"/>
      <polygon points="94,88 94,112 118,100" fill="#EC4899"/>
      <polygon points="214,88 214,112 238,100" fill="#EC4899"/>
    </>),
  },
  '2d-logo-animation': {
    accent: '#A78BFA', borderColor: 'rgba(167,139,250,0.4)', glowColor: 'rgba(167,139,250,0.2)',
    label: '2D Logo Animation', iconName: 'Film',
    svg: mkSvg(<>
      <rect x="80" y="50" width="160" height="105" rx="12" fill="#1E293B" stroke="#A78BFA" strokeWidth="1.5"/>
      <text x="105" y="105" fontSize="34" fontWeight="900" fill="#A78BFA" fontFamily="serif">dw</text>
      <rect x="55" y="155" width="210" height="10" rx="3" fill="#1E293B"/>
      <rect x="57" y="157" width="70" height="6" rx="2" fill="#A78BFA"/>
    </>),
  },

  // ── 3D Animation ─────────────────────────────────────────────────────────────
  '3d-architecture-animation': {
    accent: '#38BDF8', borderColor: 'rgba(56,189,248,0.4)', glowColor: 'rgba(56,189,248,0.2)',
    label: '3D Architecture Viz', iconName: 'Building',
    svg: mkSvg(<>
      <path d="M160 40 L280 100 L280 160 L160 185 L40 160 L40 100 Z" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5"/>
      <path d="M160 40 L160 185" stroke="#38BDF8" strokeWidth="1" strokeDasharray="5 3"/>
      <path d="M40 100 L280 100" stroke="#38BDF8" strokeWidth="1" strokeDasharray="5 3"/>
      <path d="M100 70 L100 160 L160 185 L220 160 L220 70 L160 40 Z" fill="#1E293B" stroke="#38BDF8" strokeWidth="1"/>
      <rect x="145" y="140" width="30" height="45" rx="2" fill="#38BDF8" opacity="0.2"/>
    </>),
  },
  '3d-motion-graphics': {
    accent: '#818CF8', borderColor: 'rgba(129,140,248,0.4)', glowColor: 'rgba(129,140,248,0.2)',
    label: '3D Motion Graphics', iconName: 'Box',
    svg: mkSvg(<>
      <path d="M160 35 L230 75 L230 155 L160 175 L90 155 L90 75 Z" fill="#0F172A" stroke="#818CF8" strokeWidth="2"/>
      <path d="M160 35 L160 175" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="4 3"/>
      <path d="M90 75 L230 75" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="160" cy="105" r="30" fill="#818CF8" opacity="0.1" stroke="#818CF8" strokeWidth="1"/>
      <circle cx="160" cy="105" r="8" fill="#818CF8"/>
    </>),
  },
  '3d-logo-animation': {
    accent: '#F472B6', borderColor: 'rgba(244,114,182,0.4)', glowColor: 'rgba(244,114,182,0.2)',
    label: '3D Logo Animation', iconName: 'Sparkles',
    svg: mkSvg(<>
      <rect x="70" y="45" width="180" height="120" rx="14" fill="#1E293B" stroke="#F472B6" strokeWidth="1.5"/>
      <text x="92" y="120" fontSize="50" fontWeight="900" fill="none" stroke="#F472B6" strokeWidth="2" fontFamily="serif">D</text>
      <circle cx="215" cy="65" r="22" fill="#1A0A15" stroke="#F472B6" strokeWidth="1" opacity="0.5"/>
      <circle cx="215" cy="65" r="8" fill="#F472B6"/>
    </>),
  },

  // ── Printing Solutions ────────────────────────────────────────────────────────
  'digital-printing': {
    accent: '#0EA5E9', borderColor: 'rgba(14,165,233,0.4)', glowColor: 'rgba(14,165,233,0.2)',
    label: 'Digital Printing', iconName: 'Printer',
    svg: mkSvg(<>
      <rect x="55" y="65" width="210" height="80" rx="10" fill="#1E293B" stroke="#0EA5E9" strokeWidth="1.5"/>
      <rect x="55" y="100" width="15" height="25" rx="3" fill="#0EA5E9"/>
      <rect x="255" y="100" width="10" height="25" rx="3" fill="#0EA5E9"/>
      <rect x="80" y="32" width="160" height="35" rx="5" fill="#1E293B" stroke="#0EA5E9" strokeWidth="1"/>
      <rect x="80" y="145" width="80" height="25" rx="3" fill="#1E293B" stroke="#0EA5E9" strokeWidth="1"/>
    </>),
  },
  'offset-printing': {
    accent: '#F97316', borderColor: 'rgba(249,115,22,0.4)', glowColor: 'rgba(249,115,22,0.2)',
    label: 'Offset Printing', iconName: 'Layers',
    svg: mkSvg(<>
      <rect x="60" y="40" width="180" height="130" rx="8" fill="#1E293B" stroke="#F97316" strokeWidth="1.5"/>
      <rect x="72" y="55" width="155" height="30" rx="4" fill="none" stroke="#F97316" strokeWidth="1"/>
      <rect x="72" y="92" width="155" height="30" rx="4" fill="none" stroke="#22C55E" strokeWidth="1"/>
      <rect x="72" y="129" width="155" height="30" rx="4" fill="none" stroke="#EC4899" strokeWidth="1"/>
      <text x="82" y="75" fontSize="10" fill="#F97316">C</text><text x="96" y="75" fontSize="10" fill="#0EA5E9">M</text><text x="110" y="75" fontSize="10" fill="#F5B800">Y</text><text x="124" y="75" fontSize="10" fill="#fff">K</text>
    </>),
  },
  'screen-printing': {
    accent: '#A3E635', borderColor: 'rgba(163,230,53,0.4)', glowColor: 'rgba(163,230,53,0.2)',
    label: 'Screen Printing', iconName: 'Palette',
    svg: mkSvg(<>
      <rect x="80" y="35" width="160" height="140" rx="8" fill="#1E293B" stroke="#A3E635" strokeWidth="1.5"/>
      <circle cx="160" cy="90" r="45" fill="#0A1A00" stroke="#A3E635" strokeWidth="1.5"/>
      <path d="M135 90 L155 110 L185 75" stroke="#A3E635" strokeWidth="3" strokeLinecap="round"/>
    </>),
  },
  'large-format-printing': {
    accent: '#FB7185', borderColor: 'rgba(251,113,133,0.4)', glowColor: 'rgba(251,113,133,0.2)',
    label: 'Large Format Prints', iconName: 'Maximize',
    svg: mkSvg(<>
      <rect x="35" y="45" width="250" height="120" rx="8" fill="#1E293B" stroke="#FB7185" strokeWidth="2"/>
      <rect x="45" y="55" width="230" height="100" rx="5" fill="#0F172A"/>
      <text x="100" y="120" fontSize="28" fontWeight="900" fill="#FB7185">BIG</text>
      <line x1="35" y1="35" x2="35" y2="175" stroke="#FB7185" strokeWidth="1.5"/>
      <line x1="285" y1="35" x2="285" y2="175" stroke="#FB7185" strokeWidth="1.5"/>
    </>),
  },
  'embossing-and-debossing': {
    accent: '#D97706', borderColor: 'rgba(217,119,6,0.4)', glowColor: 'rgba(217,119,6,0.2)',
    label: 'Embossing & Debossing', iconName: 'FileText',
    svg: mkSvg(<>
      <rect x="70" y="45" width="180" height="120" rx="8" fill="#1E293B" stroke="#D97706" strokeWidth="1.5"/>
      <text x="95" y="120" fontSize="32" fontWeight="900" fill="none" stroke="#D97706" strokeWidth="2" fontFamily="serif">ART</text>
      <path d="M84 90 Q160 70 236 90" stroke="#D97706" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
    </>),
  },
  'letterpress-printing': {
    accent: '#9CA3AF', borderColor: 'rgba(156,163,175,0.4)', glowColor: 'rgba(156,163,175,0.2)',
    label: 'Letterpress Printing', iconName: 'Printer',
    svg: mkSvg(<>
      <rect x="55" y="40" width="210" height="130" rx="10" fill="#1E293B" stroke="#9CA3AF" strokeWidth="1.5"/>
      <rect x="68" y="55" width="185" height="22" rx="4" fill="#0F172A" stroke="#9CA3AF" strokeWidth="0.5"/>
      <rect x="68" y="83" width="185" height="22" rx="4" fill="#0F172A" stroke="#9CA3AF" strokeWidth="0.5"/>
      <rect x="74" y="60" width="40" height="12" rx="2" fill="#9CA3AF" opacity="0.5"/>
    </>),
  },
  'die-cutting': {
    accent: '#EF4444', borderColor: 'rgba(239,68,68,0.4)', glowColor: 'rgba(239,68,68,0.2)',
    label: 'Die Cutting', iconName: 'Scissors',
    svg: mkSvg(<>
      <path d="M160 30 L230 100 L190 160 L130 160 L90 100 Z" fill="#1E293B" stroke="#EF4444" strokeWidth="2" strokeDasharray="8 4"/>
      <path d="M160 50 L210 100 L180 148 L140 148 L110 100 Z" fill="#0F172A" stroke="#EF4444" strokeWidth="1"/>
      <line x1="50" y1="30" x2="145" y2="115" stroke="#EF4444" strokeWidth="2"/>
      <line x1="50" y1="170" x2="145" y2="115" stroke="#EF4444" strokeWidth="2"/>
    </>),
  },
  'uv-printing': {
    accent: '#C026D3', borderColor: 'rgba(192,38,211,0.4)', glowColor: 'rgba(192,38,211,0.2)',
    label: 'UV Printing', iconName: 'Sparkles',
    svg: mkSvg(<>
      <rect x="60" y="45" width="200" height="120" rx="10" fill="#1E293B" stroke="#C026D3" strokeWidth="1.5"/>
      <text x="90" y="115" fontSize="36" fontWeight="900" fill="#C026D3">UV</text>
      {[0,1,2,3,4,5,6].map(i => (
        <line key={i} x1={155 + i * 12} y1={47} x2={148 + i * 12} y2={163} stroke="#C026D3" strokeWidth="1" opacity={0.2 + i * 0.1}/>
      ))}
    </>),
  },
  'foil-stamping': {
    accent: '#F59E0B', borderColor: 'rgba(245,158,11,0.4)', glowColor: 'rgba(245,158,11,0.2)',
    label: 'Gold Foil Stamping', iconName: 'Award',
    svg: mkSvg(<>
      <rect x="65" y="45" width="190" height="120" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5"/>
      <rect x="80" y="62" width="160" height="85" rx="6" fill="#1A1200"/>
      <text x="85" y="118" fontSize="32" fontWeight="900" fill="#F5B800" fontFamily="serif">GOLD</text>
      <path d="M80 62 Q160 52 240 62 Q160 72 80 62" fill="#F5B800" opacity="0.2"/>
    </>),
  },
  'binding-and-finishing': {
    accent: '#14B8A6', borderColor: 'rgba(20,184,166,0.4)', glowColor: 'rgba(20,184,166,0.2)',
    label: 'Binding & Finishing', iconName: 'CheckCircle2',
    svg: mkSvg(<>
      <rect x="80" y="30" width="45" height="150" rx="4" fill="#1E293B" stroke="#14B8A6" strokeWidth="1.5"/>
      <rect x="130" y="38" width="45" height="135" rx="4" fill="#1E293B" stroke="#14B8A6" strokeWidth="1"/>
      <rect x="180" y="45" width="45" height="120" rx="4" fill="#1E293B" stroke="#14B8A6" strokeWidth="1"/>
      <rect x="80" y="30" width="12" height="150" rx="3" fill="#14B8A6" opacity="0.3"/>
      <rect x="130" y="38" width="10" height="135" rx="3" fill="#14B8A6" opacity="0.2"/>
    </>),
  },
  'vehicle-wraps': {
    accent: '#F97316', borderColor: 'rgba(249,115,22,0.4)', glowColor: 'rgba(249,115,22,0.2)',
    label: 'Vehicle Wraps', iconName: 'Maximize',
    svg: mkSvg(<>
      <ellipse cx="160" cy="115" rx="120" ry="45" fill="#1E293B" stroke="#F97316" strokeWidth="2"/>
      <rect x="65" y="85" width="190" height="35" rx="5" fill="#1E293B" stroke="#F97316" strokeWidth="1"/>
      <circle cx="100" cy="128" r="16" fill="#0F172A" stroke="#F97316" strokeWidth="2"/>
      <circle cx="220" cy="128" r="16" fill="#0F172A" stroke="#F97316" strokeWidth="2"/>
      <path d="M80 90 Q120 75 160 73 Q200 71 240 90" stroke="#F97316" strokeWidth="1.5" fill="none"/>
    </>),
  },

  // ── Photography ───────────────────────────────────────────────────────────────
  'event-photography': {
    accent: '#F59E0B', borderColor: 'rgba(245,158,11,0.4)', glowColor: 'rgba(245,158,11,0.2)',
    label: 'Event Photography', iconName: 'Camera',
    svg: mkSvg(<>
      <rect x="50" y="45" width="220" height="120" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5"/>
      <rect x="60" y="85" width="200" height="70" rx="6" fill="#0F172A"/>
      <circle cx="160" cy="120" r="28" fill="none" stroke="#F59E0B" strokeWidth="1.5"/>
      <circle cx="160" cy="120" r="18" fill="#1E293B"/>
      <circle cx="160" cy="120" r="8" fill="#F59E0B"/>
      <circle cx="175" cy="105" r="4" fill="#fff"/>
    </>),
  },
  'product-photography': {
    accent: '#38BDF8', borderColor: 'rgba(56,189,248,0.4)', glowColor: 'rgba(56,189,248,0.2)',
    label: 'Product Photography', iconName: 'Box',
    svg: mkSvg(<>
      <rect x="50" y="50" width="220" height="120" rx="10" fill="#111827"/>
      <circle cx="160" cy="105" r="35" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5"/>
      <rect x="140" y="85" width="40" height="40" rx="6" fill="#1E3A5F"/>
      <rect x="150" y="92" width="20" height="20" rx="3" fill="#38BDF8" opacity="0.5"/>
    </>),
  },
  'model-shoots': {
    accent: '#EC4899', borderColor: 'rgba(236,72,153,0.4)', glowColor: 'rgba(236,72,153,0.2)',
    label: 'Model Photography', iconName: 'Users',
    svg: mkSvg(<>
      <rect x="55" y="35" width="210" height="140" rx="10" fill="#1E293B" stroke="#EC4899" strokeWidth="1.5"/>
      <circle cx="120" cy="90" r="28" fill="#1A0A15"/>
      <rect x="95" y="118" width="50" height="50" rx="4" fill="#1A0A15"/>
      <circle cx="200" cy="80" r="22" fill="#1A0A15"/>
      <rect x="178" y="102" width="44" height="68" rx="4" fill="#1A0A15"/>
      <line x1="55" y1="170" x2="265" y2="170" stroke="#EC4899" strokeWidth="1.5"/>
    </>),
  },
  'corporate-headshots-and-team-photography': {
    accent: '#6366F1', borderColor: 'rgba(99,102,241,0.4)', glowColor: 'rgba(99,102,241,0.2)',
    label: 'Corporate Headshots', iconName: 'UserCheck',
    svg: mkSvg(<>
      <rect x="45" y="35" width="80" height="100" rx="8" fill="#1E293B" stroke="#6366F1" strokeWidth="1.5"/>
      <circle cx="85" cy="70" r="22" fill="#1A1A3A"/>
      <rect x="57" y="94" width="56" height="38" rx="4" fill="#1A1A3A"/>
      <rect x="140" y="35" width="80" height="100" rx="8" fill="#1E293B" stroke="#6366F1" strokeWidth="1.5"/>
      <circle cx="180" cy="70" r="22" fill="#1A1A3A"/>
      <rect x="152" y="94" width="56" height="38" rx="4" fill="#1A1A3A"/>
    </>),
  },
  'real-estate-photography': {
    accent: '#22C55E', borderColor: 'rgba(34,197,94,0.4)', glowColor: 'rgba(34,197,94,0.2)',
    label: 'Real Estate Photography', iconName: 'Building',
    svg: mkSvg(<>
      <rect x="45" y="120" width="235" height="55" rx="3" fill="#1E293B"/>
      <polygon points="70,120 160,50 250,120" fill="#1E293B" stroke="#22C55E" strokeWidth="1.5"/>
      <rect x="140" y="120" width="45" height="55" rx="2" fill="#0F2A0F"/>
      <circle cx="162" cy="100" r="4" fill="#22C55E"/>
      <text x="52" y="185" fontSize="9" fill="#22C55E">FOR SALE · BANGALORE</text>
    </>),
  },
  'lifestyle-and-brand-photography': {
    accent: '#F472B6', borderColor: 'rgba(244,114,182,0.4)', glowColor: 'rgba(244,114,182,0.2)',
    label: 'Brand Photography', iconName: 'Sparkles',
    svg: mkSvg(<>
      <rect x="45" y="35" width="230" height="140" rx="10" fill="#1E293B" stroke="#F472B6" strokeWidth="1.5"/>
      <rect x="58" y="50" width="105" height="75" rx="6" fill="#1A0A15"/>
      <rect x="172" y="50" width="90" height="35" rx="6" fill="#1A0A15"/>
      <rect x="172" y="90" width="90" height="35" rx="6" fill="#1A0A15"/>
      <rect x="58" y="130" width="205" height="35" rx="6" fill="#1A0A15"/>
      <text x="78" y="95" fontSize="13" fill="#F472B6" fontStyle="italic">lifestyle</text>
    </>),
  },

  // ── Videography ────────────────────────────────────────────────────────────────
  'event-videography': {
    accent: '#F59E0B', borderColor: 'rgba(245,158,11,0.4)', glowColor: 'rgba(245,158,11,0.2)',
    label: 'Event Videography', iconName: 'Video',
    svg: mkSvg(<>
      <rect x="45" y="40" width="185" height="120" rx="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5"/>
      <rect x="232" y="58" width="45" height="30" rx="4" fill="#374151"/>
      <polygon points="277,60 302,52 302,84 277,76" fill="#F59E0B"/>
      <circle cx="137" cy="100" r="30" fill="#0F172A"/>
      <polygon points="127,88 127,112 150,100" fill="#F59E0B"/>
    </>),
  },
  'product-shoot': {
    accent: '#38BDF8', borderColor: 'rgba(56,189,248,0.4)', glowColor: 'rgba(56,189,248,0.2)',
    label: 'Product Videography', iconName: 'Box',
    svg: mkSvg(<>
      <rect x="50" y="45" width="220" height="120" rx="10" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5"/>
      <rect x="65" y="58" width="100" height="95" rx="6" fill="#0F172A"/>
      <rect x="80" y="72" width="70" height="70" rx="5" fill="#1E3A5F"/>
      <rect x="175" y="75" width="80" height="22" rx="5" fill="#38BDF8"/>
    </>),
  },
  'modelling': {
    accent: '#A78BFA', borderColor: 'rgba(167,139,250,0.4)', glowColor: 'rgba(167,139,250,0.2)',
    label: 'Model Videography', iconName: 'Film',
    svg: mkSvg(<>
      <rect x="80" y="25" width="160" height="160" rx="12" fill="#1E293B" stroke="#A78BFA" strokeWidth="1.5"/>
      <circle cx="160" cy="80" r="35" fill="#1A0A3A"/>
      <rect x="115" y="118" width="90" height="60" rx="4" fill="#1A0A3A"/>
      <rect x="80" y="25" width="160" height="30" rx="12" fill="#170F2E"/>
    </>),
  },
  'commercial-and-advertising-videography': {
    accent: '#F43F5E', borderColor: 'rgba(244,63,94,0.4)', glowColor: 'rgba(244,63,94,0.2)',
    label: 'Commercial Video', iconName: 'Tv',
    svg: mkSvg(<>
      <rect x="40" y="35" width="240" height="145" rx="10" fill="#1E293B" stroke="#F43F5E" strokeWidth="1.5"/>
      <rect x="55" y="52" width="210" height="110" rx="6" fill="#0F172A"/>
      <polygon points="140,85 140,125 180,105" fill="#F43F5E"/>
      <text x="75" y="148" fontSize="11" fill="#F43F5E" fontWeight="bold">30 SEC · BROADCAST READY</text>
    </>),
  },
  'real-estate-videography': {
    accent: '#34D399', borderColor: 'rgba(52,211,153,0.4)', glowColor: 'rgba(52,211,153,0.2)',
    label: 'Property Walkthrough', iconName: 'Building',
    svg: mkSvg(<>
      <rect x="50" y="40" width="220" height="130" rx="10" fill="#1E293B" stroke="#34D399" strokeWidth="1.5"/>
      <rect x="65" y="55" width="185" height="90" rx="6" fill="#0A2A1E"/>
      <polygon points="65,100 155,55 245,100" fill="#0F2A1E" stroke="#34D399" strokeWidth="1"/>
      <rect x="98" y="82" width="40" height="63" rx="3" fill="#0A2A1E" stroke="#34D399" strokeWidth="0.5"/>
    </>),
  },
  'ariel-views': {
    accent: '#60A5FA', borderColor: 'rgba(96,165,250,0.4)', glowColor: 'rgba(96,165,250,0.2)',
    label: 'Aerial Drone Footage', iconName: 'Maximize',
    svg: mkSvg(<>
      <circle cx="160" cy="90" r="20" fill="#1E293B" stroke="#60A5FA" strokeWidth="2"/>
      <circle cx="160" cy="90" r="8" fill="#60A5FA"/>
      <line x1="140" y1="90" x2="90" y2="70" stroke="#60A5FA" strokeWidth="2"/>
      <line x1="180" y1="90" x2="230" y2="70" stroke="#60A5FA" strokeWidth="2"/>
      <line x1="160" y1="70" x2="160" y2="30" stroke="#60A5FA" strokeWidth="2"/>
      <line x1="160" y1="110" x2="160" y2="145" stroke="#60A5FA" strokeWidth="2"/>
      <circle cx="85" cy="68" r="12" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5"/>
      <circle cx="235" cy="68" r="12" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5"/>
      <circle cx="160" cy="26" r="12" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5"/>
      <circle cx="160" cy="148" r="12" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5"/>
    </>),
  },
  'educational-and-training-videography': {
    accent: '#2DD4BF', borderColor: 'rgba(45,212,191,0.4)', glowColor: 'rgba(45,212,191,0.2)',
    label: 'Educational Video', iconName: 'CheckCircle2',
    svg: mkSvg(<>
      <rect x="40" y="30" width="240" height="145" rx="10" fill="#1E293B" stroke="#2DD4BF" strokeWidth="1.5"/>
      <rect x="56" y="72" width="100" height="90" rx="6" fill="#0F2A27"/>
      <polygon points="86,92 86,138 118,115" fill="#2DD4BF"/>
      <rect x="168" y="138" width="85" height="20" rx="5" fill="#2DD4BF"/>
    </>),
  },
};

const SERVICE_ALIAS_MAP = {
  // Creative
  'ppt-design': 'ppt-design',
  'ppt': 'ppt-design',
  'powerpoint': 'ppt-design',
  'pitch-deck': 'ppt-design',
  'presentation': 'ppt-design',
  'best-powerpoint-design-agency-in-bangalore': 'ppt-design',
  'branding-solutions': 'branding-solutions',
  'branding': 'branding-solutions',
  'package-designing': 'package-designing',
  'packaging': 'package-designing',
  'packaging-design': 'package-designing',
  'graphic-designing': 'graphic-designing',
  'graphic-design': 'graphic-designing',
  'ui-ux-design': 'ui-ux-design',
  'ui-ux': 'ui-ux-design',
  'uiux': 'ui-ux-design',
  'mobile-app-design': 'mobile-app-design',
  'app-design': 'mobile-app-design',
  'brand-consultation': 'brand-consultation',
  'brand-strategy': 'brand-consultation',
  'infographic-design': 'infographic-design',
  'infographics': 'infographic-design',
  'social-media-content-creation': 'social-media-content-creation',
  'social-content': 'social-media-content-creation',
  'illustrations-and-recreation-services': 'illustrations-and-recreation-services',
  'illustrations': 'illustrations-and-recreation-services',
  'illustration': 'illustrations-and-recreation-services',
  'rebranding': 'rebranding',
  'rebrand': 'rebranding',
  'logo-design': 'branding-solutions',
  'corporate-identity': 'branding-solutions',
  'marketing-collateral': 'graphic-designing',

  // Technology
  'website-development': 'website-development',
  'web-development': 'website-development',
  'web-dev': 'website-development',
  'app-development': 'app-development',
  'app-dev': 'app-development',
  'e-commerce-website-development': 'e-commerce-website-development',
  'ecommerce': 'e-commerce-website-development',
  'e-learning-solutions': 'e-learning-solutions',
  'elearning': 'e-learning-solutions',
  'ar-vr-solutions': 'ar-vr-solutions',
  'ar-vr': 'ar-vr-solutions',
  'emailer-design-and-development': 'emailer-design-and-development',
  'emailer': 'emailer-design-and-development',
  'software-development': 'software-development',
  'software-dev': 'software-development',
  'artificial-intelligence': 'artificial-intelligence',
  'ai-solutions': 'artificial-intelligence',
  'ai': 'artificial-intelligence',

  // Video Production
  'indoor-and-outdoor-shooting': 'indoor-and-outdoor-shooting',
  'indoor-outdoor': 'indoor-and-outdoor-shooting',
  'video-editing': 'video-editing',
  'explainer-videos': 'explainer-videos',
  'testimonials': 'testimonials',
  'testimonial': 'testimonials',
  'social-media-videos': 'social-media-videos',
  'ad-films': 'ad-films',
  'ad-film': 'ad-films',
  'ad-films-in-bangalore': 'ad-films',
  'ad-film-in-bangalore': 'ad-films',
  'podcast-videos': 'podcast-videos',
  'brand-films': 'brand-films',
  'corporate-shoot-videos': 'corporate-shoot-videos',
  'e-learning-videos': 'e-learning-videos',
  'voice-over-recordings': 'voice-over-recordings',

  // Digital Marketing
  'social-media-marketing': 'social-media-marketing',
  'search-engine-optimization': 'search-engine-optimization',
  'seo': 'search-engine-optimization',
  'performance-marketing': 'performance-marketing',
  'content-writing': 'content-writing',
  'lead-generation': 'lead-generation',
  'social-ads-management': 'social-ads-management',

  // 2D & 3D Animation
  '2d-character-animation': '2d-character-animation',
  '2d-motion-graphics': '2d-motion-graphics',
  '2d-logo-animation': '2d-logo-animation',
  '3d-architecture-visualization': '3d-architecture-visualization',
  '3d-motion-graphics': '3d-motion-graphics',
  '3d-logo-animation': '3d-logo-animation',

  // Printing Solutions
  'digital-printing': 'digital-printing',
  'offset-printing': 'offset-printing',
  'screen-printing': 'screen-printing',
  'large-format-printing': 'large-format-printing',
  'embossing-and-debossing': 'embossing-and-debossing',
  'embossing': 'embossing-and-debossing',
  'letterpress-printing': 'letterpress-printing',
  'letterpress': 'letterpress-printing',
  'die-cutting': 'die-cutting',
  'uv-printing': 'uv-printing',
  'foil-stamping': 'foil-stamping',
  'foil-standing': 'foil-stamping',
  'binding-and-finishing': 'binding-and-finishing',
  'binding-finishing': 'binding-and-finishing',
  'vehicle-wraps': 'vehicle-wraps',

  // Photography
  'event-photography': 'event-photography',
  'product-photography': 'product-photography',
  'model-shoots': 'model-shoots',
  'corporate-headshots-and-team-photography': 'corporate-headshots-and-team-photography',
  'corporate-headshots': 'corporate-headshots-and-team-photography',
  'real-estate-photography': 'real-estate-photography',
  'lifestyle-and-brand-photography': 'lifestyle-and-brand-photography',

  // Videography
  'event-videography': 'event-videography',
  'product-shoot': 'product-shoot',
  'product-shoots': 'product-shoot',
  'modelling': 'modelling',
  'commercial-and-advertising-videography': 'commercial-and-advertising-videography',
  'commercial-videography': 'commercial-and-advertising-videography',
  'real-estate-videography': 'real-estate-videography',
  'ariel-views': 'ariel-views',
  'aerial-views': 'ariel-views',
  'drone': 'ariel-views',
  'educational-and-training-videography': 'educational-and-training-videography',
  'educational-videography': 'educational-and-training-videography',
};

export function getServiceStyle(serviceId = '', title = '') {
  const rawId = (serviceId || '').toLowerCase().trim();
  if (rawId && ALL_SERVICE_STYLES[rawId]) {
    return ALL_SERVICE_STYLES[rawId];
  }
  if (rawId && SERVICE_ALIAS_MAP[rawId] && ALL_SERVICE_STYLES[SERVICE_ALIAS_MAP[rawId]]) {
    return ALL_SERVICE_STYLES[SERVICE_ALIAS_MAP[rawId]];
  }

  const slug = (serviceId || title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (ALL_SERVICE_STYLES[slug]) {
    return ALL_SERVICE_STYLES[slug];
  }
  if (SERVICE_ALIAS_MAP[slug] && ALL_SERVICE_STYLES[SERVICE_ALIAS_MAP[slug]]) {
    return ALL_SERVICE_STYLES[SERVICE_ALIAS_MAP[slug]];
  }

  // Try alias key partial matches
  for (const [aliasKey, targetKey] of Object.entries(SERVICE_ALIAS_MAP)) {
    if (slug.includes(aliasKey) || aliasKey.includes(slug)) {
      if (ALL_SERVICE_STYLES[targetKey]) return ALL_SERVICE_STYLES[targetKey];
    }
  }

  // Try ALL_SERVICE_STYLES partial key matching
  const key = Object.keys(ALL_SERVICE_STYLES).find(k => k.includes(slug) || slug.includes(k));
  if (key) {
    return ALL_SERVICE_STYLES[key];
  }

  return ALL_SERVICE_STYLES['branding-solutions'];
}

export default function ServiceIllustrationCard({ serviceId, subServiceId, subService, categoryId, title }) {
  const effectiveId = serviceId || subServiceId || subService || categoryId || '';
  const currentStyle = getServiceStyle(effectiveId, title);
  const currentTitle = title || currentStyle.label || 'Service Preview';
  const accentColor = currentStyle.accent || '#F5B800';
  const borderColor = currentStyle.borderColor || `${accentColor}66`;
  const glowColor = currentStyle.glowColor || `${accentColor}22`;
  const IconComp = Icons[currentStyle.iconName] || Icons.Sparkles;

  return (
    <div
      className="mega-feature-banner service-hero-feature-card"
      style={{
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        border: `1px solid ${borderColor}`,
        boxShadow: `0 0 30px ${glowColor}, inset 0 0 30px rgba(0,0,0,0.3)`,
        borderRadius: '16px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '440px',
        margin: '0 auto',
        padding: '20px',
        background: 'linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 100%)',
      }}
    >
      {/* Service title */}
      <h4
        className="feature-title"
        style={{
          color: accentColor,
          transition: 'color 0.25s ease',
          textAlign: 'center',
          marginBottom: '14px',
          fontSize: '1.2rem',
          fontWeight: 700
        }}
      >
        {currentTitle}
      </h4>

      {/* SVG illustration box — exact match from dropdown */}
      <div
        className="feature-illustration-box"
        style={{
          background: '#0F172A',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '180px',
          isolation: 'isolate',
          border: `1px solid ${accentColor}33`,
        }}
      >
        {currentStyle.svg ? (
          <div style={{ width: '100%' }}>
            {currentStyle.svg}
          </div>
        ) : (
          <Icons.Layers size={64} color="#374151" />
        )}
      </div>

      {/* Accent label pill */}
      {currentStyle.label && (
        <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'center' }}>
          <span style={{
            background: `${accentColor}20`,
            border: `1px solid ${accentColor}55`,
            color: accentColor,
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '6px 18px',
            borderRadius: '20px',
            letterSpacing: '0.4px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.25s ease',
          }}>
            <IconComp size={14} />
            {currentStyle.label}
          </span>
        </div>
      )}
    </div>
  );
}
