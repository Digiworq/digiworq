import React from 'react';
import { AlertCircle, ShieldAlert, Scale, ExternalLink, Info } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="disclaimer-page-wrapper">
      {/* Hero Header Section */}
      <section className="disclaimer-hero-section" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container text-center">
          <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            <AlertCircle size={16} /> Legal & Accuracy Notice
          </div>

          <h1 className="disclaimer-hero-h1" style={{ fontSize: '2.6rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
            Disclaimer for Digital Marketing Services
          </h1>

          <div style={{ maxWidth: '850px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.08rem', lineHeight: '1.8', textAlign: 'left' }}>
            <p>
              The information provided on <a href="https://www.digiworq.com" target="_blank" rel="noreferrer" style={{ color: '#F5B800', fontWeight: '700', textDecoration: 'underline' }}>Digiworq</a> is for general informational and business purposes only. While we strive to keep all content accurate and updated, Digiworq makes no guarantees regarding the completeness, reliability, or accuracy of the information, services, or results presented on this website. Any action taken based on the information available on this website is strictly at the user’s own risk.
            </p>
          </div>
        </div>
      </section>

      {/* Structured SEO H2 Disclaimer Blocks Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* H2 1: Website Information Accuracy Disclaimer */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(245, 184, 0, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(245, 184, 0, 0.15)', border: '1px solid rgba(245, 184, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Info size={24} color="#F5B800" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Website Information Accuracy Disclaimer</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Our website may contain content related to digital marketing, SEO, website development, branding, advertising, and business growth strategies. The information shared is intended for general guidance and may change without prior notice. Digiworq does not guarantee that all website information will always remain fully updated, error-free, or suitable for every business requirement.
              </p>
            </div>

            {/* H2 2: Legal Disclaimer */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Scale size={24} color="#3B82F6" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Legal Disclaimer</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Digiworq shall not be held responsible for any direct, indirect, incidental, or consequential damages resulting from the use of our website, services, third-party tools, or linked external platforms. Users are advised to independently verify information and seek professional advice before making business or marketing decisions.
              </p>
            </div>

            {/* H2 3: Liability Disclaimer */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(236, 72, 153, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldAlert size={24} color="#EC4899" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Liability Disclaimer</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Although we follow industry best practices in providing digital marketing services, Digiworq cannot guarantee specific rankings, leads, sales, or business outcomes from SEO, Google Ads, social media marketing, or website services. Marketing performance may vary depending on industry competition, audience behavior, budgets, and platform algorithm changes.
              </p>
            </div>

            {/* H2 4: Information Disclaimer */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ExternalLink size={24} color="#10B981" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Information Disclaimer</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Our website may include links to third-party websites, tools, or resources for additional information and convenience. Digiworq does not control or take responsibility for the content, privacy policies, or practices of external websites. Users visiting third-party platforms do so at their own discretion and risk.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
