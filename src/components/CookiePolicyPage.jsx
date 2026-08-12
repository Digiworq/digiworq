import React from 'react';
import { Cookie, Settings, ShieldCheck, Globe, Database, Info } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="cookie-page-wrapper">
      {/* Hero Header Section */}
      <section className="cookie-hero-section" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container text-center">
          <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            <Cookie size={16} /> Browser & Analytics Policy
          </div>

          <h1 className="cookie-hero-h1" style={{ fontSize: '2.6rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
            Website Cookie Policy
          </h1>

          <div style={{ maxWidth: '850px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.08rem', lineHeight: '1.8', textAlign: 'left' }}>
            <p>
              At <a href="https://www.digiworq.com" target="_blank" rel="noreferrer" style={{ color: '#F5B800', fontWeight: '700', textDecoration: 'underline' }}>Digiworq</a>, we use cookies and similar technologies to improve website functionality, enhance user experience, analyze website performance, and deliver relevant digital content. This Website Cookie Policy explains how cookies are used when visitors interact with our website and digital marketing services.
            </p>
          </div>
        </div>
      </section>

      {/* Structured SEO H2 Cookie Blocks Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* H2 1: Use of Cookies */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(245, 184, 0, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(245, 184, 0, 0.15)', border: '1px solid rgba(245, 184, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cookie size={24} color="#F5B800" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Use of Cookies</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Cookies are small text files stored on your device when you visit a website. These cookies help us remember user preferences, understand browsing behavior, improve website performance, and provide a smoother browsing experience. Some cookies are essential for website functionality, while others help us analyze traffic and marketing performance.
              </p>
            </div>

            {/* H2 2: Cookie Usage Policy */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={24} color="#3B82F6" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Cookie Usage Policy</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Our Cookie Usage Policy may include the use of essential cookies, analytics cookies, functional cookies, and marketing cookies. These technologies help us improve website security, monitor performance, personalize user experience, and optimize digital marketing campaigns. Third-party tools such as analytics and advertising platforms may also use cookies on our website.
              </p>
            </div>

            {/* H2 3: Browser Cookies */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(160, 104, 255, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(160, 104, 255, 0.15)', border: '1px solid rgba(160, 104, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Globe size={24} color="#A068FF" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Browser Cookies</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Most web browsers automatically accept cookies, but users can choose to disable or manage cookies through browser settings. Restricting cookies may affect certain website features, functionality, or user experience. Users can also clear stored cookies at any time from their browser settings.
              </p>
            </div>

            {/* H2 4: Cookies Information */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Database size={24} color="#10B981" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Cookies Information</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                The information collected through cookies may include browser type, device information, website activity, pages visited, session details, and general analytics data. This data helps us improve website performance, enhance digital services, and provide better user experiences while maintaining responsible data practices.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
