import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import ServiceIllustrationCard from '../../../components/ServiceIllustrationCard';

export default function AiSolutionsPage({ onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const deliverables = [
    "AI Software Development Company Bangalore Applications",
    "Custom AI Solutions Bangalore Machine Learning Models",
    "AI Consulting Services Bangalore Digital Transformation",
    "AI Automation Services Company Intelligent Workflow Systems",
    "LLM Integration, Predictive Analytics & AI Chatbots"
  ];

  const mainH2Sections = [
    {
      title: "AI Software Development Company Bangalore",
      icon: Icons.Brain,
      color: "#3B82F6",
      desc: "We make intelligence applications that are smart. These artificial intelligence applications are made for each business. Our artificial intelligence solutions include machine learning. They also include automation systems and artificial intelligence chatbots. We even have analytics. All of these things help businesses be more productive. They also help businesses make their customers happy."
    },
    {
      title: "Custom AI Solutions Bangalore",
      icon: Icons.Cpu,
      color: "#10B981",
      desc: "Our custom artificial intelligence solutions make things easier for businesses. They automate things that businesses do every day. Our custom artificial intelligence solutions also give businesses information that is based on data. We make intelligence systems that are just for each business. These systems are based on what each business needs to reach its goals."
    },
    {
      title: "AI Consulting Services Bangalore",
      icon: Icons.Compass,
      color: "#F5B800",
      desc: "Digiworq helps businesses with intelligence consulting services. These services help businesses find the artificial intelligence technologies. They also help businesses make plans to use these technologies. This helps businesses grow and be more efficient in the term."
    },
    {
      title: "AI Automation Services Company",
      icon: Icons.Zap,
      color: "#A068FF",
      desc: "We offer intelligence automation services. These services reduce the tasks that people have to do by hand. They make workflows better. They also make businesses perform overall. We do this by using intelligence automation solutions that are smart."
    }
  ];

  const whyChooseBullets = [
    "We make intelligence solutions that are just for each business",
    "Our team that develops intelligence solutions is very experienced",
    "Our technologies are scalable and secure",
    "We support businesses with intelligence from start to finish",
    "Our automation services are focused on what businesses need"
  ];

  const faqs = [
    {
      q: "What artificial intelligence services does Digiworq offer?",
      a: "We offer intelligence software development. We also offer intelligence consulting and automation solutions. Additionally we offer machine learning and chatbot development. We even offer analytics services. All of these are intelligence services."
    },
    {
      q: "Why choose an intelligence software development company, in Bangalore?",
      a: "Bangalore is a leading technology hub. It has skilled artificial intelligence developers. It also has advanced digital innovations. This makes it a great place to find an intelligence software development company."
    },
    {
      q: "Do you provide custom intelligence solutions?",
      a: "Yes we make artificial intelligence solutions. These solutions are based on what each business needs. They are also based on the industry that each businesss in."
    },
    {
      q: "Can artificial intelligence help business operations?",
      a: "Yes artificial intelligence automation helps businesses. It streamlines workflows. It reduces the tasks that people have to do by hand. It makes businesses more efficient."
    },
    {
      q: "Which industries can benefit from intelligence solutions?",
      a: "Many industries can benefit from intelligence solutions. These include healthcare and retail. They also include education and finance. Logistics and real estate can benefit from intelligence solutions too. Many other industries can benefit from intelligence solutions as well."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-aisolutions">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-aisolutions" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-link-sub" onClick={onBackHome}>Technology Services</span>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">Artificial Intelligence Solutions Company Bangalore</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Brain size={16} /> Enterprise Machine Learning & AI Automation Studio
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                Artificial Intelligence Solutions Company Bangalore
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '12px' }}>
                  Digiworq is a company that people trust in Bangalore. We make intelligence solutions that help businesses. These artificial intelligence solutions use technologies. They help businesses in different areas.
                </p>
                <p style={{ fontWeight: '600', color: '#3B82F6' }}>
                  We make sure that our artificial intelligence solutions automate things. They also make businesses more efficient. We do this by using transformation strategies that are advanced.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book AI Strategy Call</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard serviceId="artificial-intelligence" title="Artificial Intelligence" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>AI Deliverables & Engineering Capabilities:</h3>
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
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75' }}>
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* H2: Why Choose Digiworq? */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '24px', padding: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '24px' }}>Why Choose Digiworq?</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {whyChooseBullets.map((wItem, wIdx) => (
                <div key={wIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '16px', color: '#FFFFFF', fontSize: '1rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={20} color="#3B82F6" />
                  <span>{wItem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ padding: '80px 0', background: '#0A0E1A' }}>
        <div className="section-container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>FAQs</h3>
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
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Transform Your Enterprise with Artificial Intelligence?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq AI engineers to build custom machine learning models, intelligent chatbots, and workflow automation.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book AI Architecture Call</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
