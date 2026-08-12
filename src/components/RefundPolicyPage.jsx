import React from 'react';
import { RefreshCw, ShieldCheck, FileText, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="refund-page-wrapper">
      {/* Hero Header Section */}
      <section className="refund-hero-section" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container text-center">
          <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            <RefreshCw size={16} /> Transparent Service Agreements
          </div>

          <h1 className="refund-hero-h1" style={{ fontSize: '2.6rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
            Digital Marketing Service Refund Policy
          </h1>

          <div style={{ maxWidth: '850px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.08rem', lineHeight: '1.8', textAlign: 'left' }}>
            <p>
              At <a href="https://www.digiworq.com" target="_blank" rel="noreferrer" style={{ color: '#F5B800', fontWeight: '700', textDecoration: 'underline' }}>Digiworq</a>, we are committed to delivering high-quality digital solutions with transparency and professionalism. This digital marketing service refund policy explains the terms related to refunds, cancellations, and service agreements for digital marketing, website development, SEO, and branding services.
            </p>
          </div>
        </div>
      </section>

      {/* Structured SEO H2 Refund Blocks Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* H2 1: Refund Policy */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(245, 184, 0, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#F5B800', marginBottom: '14px' }}>
                Refund Policy
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Refund requests are reviewed based on the nature of the service and the progress of the project. Refunds may be considered only if the project has not been initiated or if the service cannot be delivered as agreed. Completed work, approved designs, advertising spends, and delivered digital assets are generally non-refundable.
              </p>
            </div>

            {/* H2 2: Cancellation Policy */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#3B82F6', marginBottom: '14px' }}>
                Cancellation Policy
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Clients may request cancellation of services by submitting a written request through email or official communication channels. Cancellation requests are processed according to the project stage, service agreement, and resource allocation.
              </p>
            </div>

            {/* H2 3: Service Refund Policy */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(160, 104, 255, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#A068FF', marginBottom: '14px' }}>
                Service Refund Policy
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Our Service Refund Policy is designed to ensure fair evaluation of refund requests while considering project timelines, completed milestones, third-party costs, and service delivery commitments. Partial refunds may be applicable in selected cases depending on the work completed.
              </p>
            </div>

            {/* H2 4: Refund Eligibility */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(236, 72, 153, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#EC4899', marginBottom: '14px' }}>
                Refund Eligibility
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Refund eligibility depends on factors such as project status, cancellation timing, and service utilization. Refunds are not applicable for completed digital marketing campaigns, SEO services already executed, content creation, paid advertising budgets, or customized development work that has been approved and delivered.
              </p>
            </div>

            {/* Refund Process */}
            <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#10B981', marginBottom: '12px' }}>
                Refund Process
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                To request a refund, clients can contact the Digiworq support team with project details, invoice information, and the reason for the request. Approved refunds will be processed through the original payment method within the applicable processing timeline.
              </p>
            </div>

            {/* Cancellation Terms */}
            <div style={{ background: 'rgba(245, 184, 0, 0.05)', border: '1px solid rgba(245, 184, 0, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#F5B800', marginBottom: '12px' }}>
                Cancellation Terms
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                Cancellation requests must be submitted before the next billing cycle or before major project execution begins. Digiworq reserves the right to review cancellation requests based on project agreements, resource allocation, and service commitments.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
