import React from 'react';
import { ShieldCheck, Lock, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page-wrapper">
      {/* Hero Header Section */}
      <section className="privacy-hero-section" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container text-center">
          <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            <ShieldCheck size={16} /> Data Security & Compliance
          </div>

          <h1 className="privacy-hero-h1" style={{ fontSize: '2.6rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
            Digital Marketing Privacy Policy
          </h1>

          <div style={{ maxWidth: '850px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.08rem', lineHeight: '1.8', textAlign: 'left' }}>
            <p style={{ marginBottom: '16px' }}>
              At <a href="https://www.digiworq.com" target="_blank" rel="noreferrer" style={{ color: '#F5B800', fontWeight: '700', textDecoration: 'underline' }}>Digiworq</a>, we are committed to protecting user information and maintaining transparency in how data is collected, stored, and used. Our digital marketing privacy policy is designed to ensure secure communication, responsible data handling, and compliance with digital privacy standards for all website visitors and clients.
            </p>
            <p>
              As one of the best digital marketing companies, we collect only the necessary information required to improve user experience, provide marketing solutions, respond to inquiries, and enhance website performance. We implement secure technologies and best practices to protect personal information shared through our website and digital services.
            </p>
          </div>
        </div>
      </section>

      {/* Structured SEO H2 Privacy Blocks Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Block 1 */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(245, 184, 0, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(245, 184, 0, 0.15)', border: '1px solid rgba(245, 184, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={24} color="#F5B800" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Best Marketing Agencies</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Trusted by businesses across industries, Digiworq follows transparent communication and ethical marketing practices similar to the standards followed by the best marketing agencies. We prioritize data confidentiality, secure browsing experiences, and user privacy while delivering digital marketing, branding, and web solutions.
              </p>
            </div>

            {/* Block 2 */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Lock size={24} color="#3B82F6" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Best SEO Agencies</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                As one of the growing best SEO agencies, we use analytics, cookies, and website performance tools responsibly to improve SEO strategies, optimize website experience, and deliver better search visibility without compromising user privacy or data security.
              </p>
            </div>

            {/* Additional Standard Policy Guarantees */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '36px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px' }}>Our Data Protection Commitments:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>Zero unauthorized sharing or selling of user contact data to third parties.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>256-Bit SSL Encryption across all web forms and payment gateways.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>Full user control over cookies and newsletter preference settings.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
