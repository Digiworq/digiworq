import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function EmailerDesignPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "Professional Email Marketing Services Bangalore Campaigns",
    "Email Marketing Design Company Bangalore HTML Templates",
    "Responsive Email Design Services Bangalore Cross-Client Builds",
    "Strategic Email Marketing Solutions & Automation Workflows",
    "High-Deliverability HTML Emailer Codebase & Analytics Dashboards"
  ];

  const mainH2Sections = [
    {
      title: "Professional Email Marketing Services Bangalore",
      icon: Icons.Mail,
      color: "#3B82F6",
      desc: "We offer email marketing services to help businesses connect with customers promote services and improve conversion rates through effective email communication.",
      bulletsHeader: "Here are some points to consider:",
      bullets: [
        "Bulk email campaign management",
        "Promotional email campaigns",
        "Newsletter design services",
        "Customer engagement emails",
        "Lead nurturing email campaigns",
        "Automated email marketing solutions"
      ]
    },
    {
      title: "Email Marketing Design Company Bangalore",
      icon: Icons.Layout,
      color: "#10B981",
      desc: (
        <>
          Digiworq is a trusted email marketing design company in Bangalore. We create attractive and conversion-focused email templates that match the brand identity and marketing goals. You can visit <a href="https://www.mailmodo.com" target="_blank" rel="noopener noreferrer" style={{ color: '#10B981', textDecoration: 'underline' }}>mailmodo.com</a> for details.
        </>
      ),
      bulletsHeader: "Here are some key points:",
      bullets: [
        "Creative email template design",
        "Brand-focused email layouts",
        "Interactive email designs",
        "Custom HTML email templates",
        "Mobile-friendly email creatives"
      ]
    },
    {
      title: "Responsive Email Design Services Bangalore",
      icon: Icons.Smartphone,
      color: "#F5B800",
      desc: "Our responsive email design services in Bangalore ensure emails look good on tablet and desktop devices. This improves user experience and engagement rates.",
      bulletsHeader: "Here are some key points:",
      bullets: [
        "Mobile-responsive email templates",
        "Cross-device compatibility",
        "Fast-loading email designs",
        "User- email layouts",
        "Optimized call-to-action sections"
      ]
    },
    {
      title: "Strategic Email Marketing Solutions",
      icon: Icons.TrendingUp,
      color: "#A068FF",
      desc: "We create customized email marketing strategies to help businesses keep customers communicate better and improve online marketing performance.",
      bulletsHeader: "Here are some key points:",
      bullets: [
        "Personalized email campaigns",
        "Email automation workflows",
        "Audience segmentation strategies",
        "Campaign performance tracking",
        "CRM and marketing tool integration"
      ]
    },
    {
      title: "Why Choose Digiworq for Email Marketing Services?",
      icon: Icons.CheckCircle2,
      color: "#EC4899",
      desc: (
        <>
          Digiworq combines design, strategic marketing and modern email technologies to deliver high-performing email marketing campaigns for businesses. You can find us on <a href="https://in.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#EC4899', textDecoration: 'underline' }}>in.linkedin.com</a>.
        </>
      ),
      bulletsHeader: "Here are some reasons to choose us:",
      bullets: [
        "Experienced email marketing specialists",
        "campaign strategies",
        "Creative email design support",
        "Performance-focused marketing approach",
        "End-to-end email campaign management"
      ]
    },
    {
      title: "Industries We Serve",
      icon: Icons.Building2,
      color: "#8B5CF6",
      desc: "We provide email marketing services for businesses across industries and sectors.",
      bulletsHeader: "Here are some industries we serve:",
      bullets: [
        "eCommerce businesses",
        "Healthcare organizations",
        "institutions",
        "Real estate companies",
        "Technology startups",
        "Corporate enterprises"
      ]
    },
    {
      title: "Benefits of Professional Email Marketing Services",
      icon: Icons.Zap,
      color: "#F59E0B",
      desc: "Professional email marketing helps businesses communicate better engage with customers and convert leads.",
      bulletsHeader: "Here are some benefits:",
      bullets: [
        "Better customer engagement",
        "lead generation",
        "Increased brand awareness",
        "Higher conversion rates",
        "Cost- digital marketing"
      ]
    }
  ];

  const emailProcessSteps = [
    {
      step: "01",
      title: "Strategy & Audience Planning",
      desc: "We understand business goals, target audience and campaign objectives."
    },
    {
      step: "02",
      title: "Email Design & Development",
      desc: "We create visually engaging email templates."
    },
    {
      step: "03",
      title: "Campaign Launch & Optimization",
      desc: "We launch campaigns track performance and optimize engagement rates."
    }
  ];

  const faqs = [
    {
      q: "What email marketing services do you provide?",
      a: "We provide email campaign management, responsive email design, automation and newsletter marketing services."
    },
    {
      q: "Why is email design important?",
      a: "Responsive email design improves readability and engagement across desktop devices."
    },
    {
      q: "Can email marketing improve lead generation?",
      a: "Yes targeted email campaigns help businesses improve lead nurturing and customer conversions."
    },
    {
      q: "Do you create custom email templates?",
      a: "Yes we design customized HTML email templates aligned with brand identity and campaign goals."
    },
    {
      q: "Why choose Digiworq as an email marketing company, in Bangalore?",
      a: "Digiworq delivers responsive and performance-focused email marketing solutions tailored for business growth."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-emailer">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-emailer" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Technology Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Email Marketing Companies in Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Mail size={16} /> Responsive HTML Emailer & Campaign Automation Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Email Marketing Companies in Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is one of the email marketing companies in Bangalore. We provide email marketing solutions. Our team creates email designs and manages strategic campaigns for businesses.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  Our email marketing services in Bangalore help brands talk to customers find leads and communicate better through targeted and visually engaging email campaigns. You can check out <a href="https://www.campaignmonitor.com" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'underline' }}>campaignmonitor.com</a> for information.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Email Campaign Audit</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="emailer-design-and-development" title="Emailer Design & Development" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Email Marketing Deliverables & Automation Assets:</h3>
            <div className="deliverables-pills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '8px 16px', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={16} color="#3B82F6" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main H2 Service Blocks */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {mainH2Sections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${sec.color}44`, borderRadius: '24px', padding: '36px', boxShadow: `0 12px 32px ${sec.color}15` }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: `${sec.color}18`, border: `1px solid ${sec.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComp size={26} color={sec.color} />
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px', lineHeight: '1.3' }}>
                    {sec.title}
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: sec.bullets ? '20px' : '0' }}>
                    {sec.desc}
                  </p>

                  {sec.bullets && (
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
                      <div style={{ color: sec.color, fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>
                        {sec.bulletsHeader}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {sec.bullets.map((bItem, bIdx) => (
                          <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '600' }}>
                            <Icons.CheckCircle2 size={16} color={sec.color} />
                            <span>{bItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our Email Marketing Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We manage your email lifecycle from audience segmentation to HTML design, deployment, and analytics.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {emailProcessSteps.map((stepItem, sIdx) => (
              <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.18)', border: '1px solid #3B82F6', color: '#3B82F6', fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  {stepItem.step}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px' }}>
                  {stepItem.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ padding: '80px 0', background: '#0A0E1A' }}>
        <div className="section-container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Asked Questions</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '1.08rem', fontWeight: '700', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <h4>{faq.q}</h4>
                    {isOpen ? <Icons.ChevronUp size={20} color="#3B82F6" /> : <Icons.ChevronDown size={20} color="#3B82F6" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 20px 24px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: '60px 0 80px 0', background: '#05070F' }}>
        <div className="section-container text-center">
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Scale Your Email Marketing & Open Rates?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq email marketing specialists to design custom HTML templates and automated workflows.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Email Marketing Strategy Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
