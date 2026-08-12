import React, { useState } from 'react';
import { 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Share2, 
  Zap, 
  Globe, 
  Palette, 
  Video 
} from 'lucide-react';

export default function AboutUsPage({ onOpenContact }) {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const whatWeDoList = [
    "Search Engine Optimization (SEO) & SEO optimization service",
    "Social media marketing & social media agency marketing",
    "Paid advertising & performance campaigns",
    "Website design & development",
    "Branding & content marketing",
    "Lead generation & conversion optimization",
    "Videography"
  ];

  const strategyBullets = [
    "Understanding what Digiworq wants to achieve with its business",
    "Finding ways for Digiworq to grow and get better",
    "Building plans for Digiworq to get better at search engines and make good content",
    "Running marketing campaigns that are just right, for Digiworq",
    "Keeping track of how Digiworq is doing and making changes to make it even better"
  ];

  const faqs = [
    {
      q: "1. What does a digital marketing agency in Bangalore do?",
      a: "A digital marketing agency in Bangalore helps businesses grow online. They do this through things like SEO, social media, ads and content marketing. This means a digital marketing agency in Bangalore is really good at helping businesses get noticed on the internet."
    },
    {
      q: "2. Why choose Digiworq as a marketing company?",
      a: "You should choose Digiworq as a marketing company because we focus on things that actually work. We use strategies that increase leads, traffic and brand visibility for marketing. This is what Digiworq as a marketing company does."
    },
    {
      q: "3. Do you provide SEO services?",
      a: "Yes we do provide SEO services. Our SEO services include SEO optimization to improve Google rankings and organic traffic. This means our SEO services can help your website show up higher on Google."
    },
    {
      q: "4. What media marketing services do you offer?",
      a: "We offer media marketing services that include managing content, ads and campaigns. We do this across platforms, like Instagram, Facebook and LinkedIn. So our social media marketing services can help you on lots of social media sites."
    },
    {
      q: "5. How can digital marketing help my business?",
      a: "Digital marketing can really help your business. It improves visibility, which means more people can find you. It also attracts customers. Increases sales for your business. So digital marketing is a way to get more people to buy from you."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="about-us-page-wrapper">
      {/* Hero Header Section */}
      <section className="about-hero-section" style={{ padding: '80px 0 60px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="about-hero-content text-center">
            <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
              <Sparkles size={16} /> Top Digital Marketing Agency
            </div>

            <h1 className="about-hero-h1" style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '24px' }}>
              Digital Marketing Agency Bangalore
            </h1>

            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#F5B800', marginBottom: '20px', lineHeight: '1.3' }}>
              Digital Marketing Agency Bangalore That Drives Real Growth
            </h2>

            <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'left', color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '16px' }}>
                Digiworq is digital marketing agency in Bangalore. We help businesses build an online presence. This helps them get quality leads and grow in a way.
                We use strategy, creativity and data-driven execution to get results that're important.
              </p>
              <p style={{ marginBottom: '16px' }}>
                As a digital marketing company we do not believe in using the same marketing plan, for every business. Every brand is different. We create custom plans that match your business goals and target audience. This helps you achieve what you want.
              </p>
              <p style={{ fontWeight: '600', color: '#FFFFFF' }}>
                We focus on your needs. Our goal is to help you succeed online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Do */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px' }}>What We Do</h2>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#F5B800', marginBottom: '24px' }}>
              Complete Digital Marketing Solutions for Business Growth
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {whatWeDoList.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', color: '#FFFFFF', fontWeight: '600' }}>
                  <CheckCircle2 size={20} color="#F5B800" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Data-Driven Strategy & Section 4: Why Choose Digiworq */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #0B0E17 0%, #070913 100%)' }}>
        <div className="section-container">
          
          {/* Strategy */}
          <div style={{ marginBottom: '60px', background: 'rgba(160, 104, 255, 0.05)', border: '1px solid rgba(160, 104, 255, 0.2)', borderRadius: '24px', padding: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#A068FF', marginBottom: '16px' }}>
              Data-Driven Strategy. Creative Execution. Measurable Results.
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
              At Digiworq every single campaign that we do starts with doing some research and coming up with a strategy. We take a look at the market that Digiworq is in and we also check out the competitors of Digiworq and the people who are looking at Digiworq to see how they behave. This helps Digiworq make a plan for digital stuff.
            </p>

            <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: '700', marginBottom: '16px' }}>The way Digiworq does things includes:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {strategyBullets.map((b, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: '1.6' }}>
                  <TrendingUp size={18} color="#A068FF" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Why Choose Digiworq */}
          <div style={{ background: 'rgba(245, 184, 0, 0.05)', border: '1px solid rgba(245, 184, 0, 0.2)', borderRadius: '24px', padding: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px' }}>Why Choose Digiworq</h2>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#F5B800', marginBottom: '20px' }}>
              Why We Are a Preferred Digital Marketing Agency in Bangalore
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
              At Digiworq every single campaign that we do starts with doing some research and coming up with a strategy. We take a look at the market that Digiworq is in and we also check out the competitors of Digiworq and the people who are looking at Digiworq to see how they behave. This helps Digiworq make a plan for digital stuff.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {strategyBullets.map((b, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: '1.6' }}>
                  <CheckCircle2 size={18} color="#F5B800" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: Our Mission */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container text-center">
          <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(15, 23, 42, 0.95) 100%)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '24px', padding: '50px 30px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <Target size={30} color="#10B981" />
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px' }}>Our Mission</h2>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#10B981', marginBottom: '20px' }}>
              Helping Businesses Grow in the Digital World
            </h3>

            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '16px' }}>
              Our goal is to help startups, medium-sized businesses and big companies with effective online plans. These plans help them get leads be seen by more people and create a strong brand that lasts.
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8' }}>
              We think marketing should be easy to track able to grow and make a difference. It should help businesses, like startups, SMEs and enterprises get results.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ padding: '80px 0', background: '#0A0E1A' }}>
        <div className="section-container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h4 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Frequently Asked Questions</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', marginTop: '8px' }}>Got questions about Digiworq's digital marketing services? Find quick answers below.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => toggleFaq(idx)}
                    style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '700', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#F5B800" /> : <ChevronDown size={20} color="#F5B800" />}
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
      <section className="about-cta-section" style={{ padding: '60px 0 80px 0', background: '#05070F' }}>
        <div className="section-container text-center">
          <div className="about-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(245, 184, 0, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Elevate Your Brand to the Next Level?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Partner with Digiworq and experience the power of market-leading design and technology.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Schedule Free Consultation</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
