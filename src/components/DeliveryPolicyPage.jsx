import React from 'react';
import { Truck, Award, CheckCircle2, ShieldCheck, Clock, Send } from 'lucide-react';

export default function DeliveryPolicyPage() {
  return (
    <div className="delivery-page-wrapper">
      {/* Hero Header Section */}
      <section className="delivery-hero-section" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container text-center">
          <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            <Truck size={16} /> Service Execution & Deliverables
          </div>

          <h1 className="delivery-hero-h1" style={{ fontSize: '2.6rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
            Digital Marketing Service Delivery
          </h1>

          <div style={{ maxWidth: '850px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.08rem', lineHeight: '1.8', textAlign: 'left' }}>
            <p style={{ marginBottom: '16px' }}>
              At <a href="https://www.digiworq.com" target="_blank" rel="noreferrer" style={{ color: '#F5B800', fontWeight: '700', textDecoration: 'underline' }}>Digiworq</a>, our Digital Marketing Service Delivery process is designed to ensure smooth communication, timely project execution, and transparent reporting for every client. We focus on delivering high-quality digital marketing, SEO, website development, and branding solutions that align with your business goals.
            </p>
            <p>
              As a growing Bangalore digital marketing agency, we provide digital deliverables through secure online channels including email communication, cloud sharing platforms, project management tools, and scheduled reporting systems. Our team ensures every campaign, website, and creative asset is delivered within the agreed timeline and project scope.
            </p>
          </div>
        </div>
      </section>

      {/* Structured SEO H2 Delivery Blocks Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Block 1: Top Digital Marketing Agency */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(245, 184, 0, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(245, 184, 0, 0.15)', border: '1px solid rgba(245, 184, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={24} color="#F5B800" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Top Digital Marketing Agency</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Recognized as a top digital marketing agency, Digiworq follows a structured workflow for campaign planning, execution, revisions, and final delivery. We maintain clear communication with clients throughout the project lifecycle to ensure transparency, quality assurance, and performance-focused results.
              </p>
            </div>

            {/* Block 2: Digital Marketing Service Delivery Process */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Truck size={24} color="#3B82F6" />
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>Digital Marketing Service Delivery Process</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Our Digital Marketing Service Delivery includes strategy development, campaign setup, website deployment, SEO implementation, creative approvals, and performance tracking. Timelines may vary depending on project complexity, service requirements, and client approvals, but our goal is always timely and efficient delivery with measurable outcomes.
              </p>
            </div>

            {/* Additional Workflow Delivery Standards */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '36px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px' }}>Delivery Standard Guarantees:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>Encrypted Cloud File Transfers & Source File Handover upon Completion.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>Scheduled Weekly & Monthly Analytics & ROAS Performance Reports.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>Dedicated Project Manager & Direct Slack / WhatsApp Communication.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
