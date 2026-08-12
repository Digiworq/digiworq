import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { allCategoriesData } from '../../data/allServicesPageData';
import ServiceIllustrationCard from '../../components/ServiceIllustrationCard';

export default function VideographyPage({ subServiceId, onOpenContact, onBackHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = allCategoriesData.videography || { categoryTitle: "Videography Services", services: [] };
  const activeSub = data.services.find(s => 
    subServiceId && (
      s.id === subServiceId || 
      s.id.toLowerCase().includes(subServiceId.toLowerCase()) ||
      subServiceId.toLowerCase().includes(s.id.toLowerCase()) ||
      s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(subServiceId.toLowerCase())
    )
  );

  const deliverables = activeSub?.deliverables || [
    "Advertising Videography Services & Social Ads",
    "Real Estate Videography & Drone Aerial Shoots",
    "Business Videography Services & Corporate Brand Stories",
    "Commercial Video Production & Color Grading",
    "4K Master Video Output & Multi-Platform Cuts"
  ];

  const mainH2Sections = [
    {
      title: "Advertising Videography Services",
      icon: Icons.Tv,
      color: "#F5B800",
      desc: "We make videos that help brands promote their products and services which gets them noticed and gets customers excited. Our team makes videos that really make an impact, like ads and promotional videos that're perfect for social media and online platforms.",
      thingsWeCanDo: [
        "Make videos for ads",
        "Make promotional videos for brands",
        "Make videos for social media ads",
        "Show off products in a way",
        "Make high-quality commercials"
      ]
    },
    {
      title: "Real Estate Videography",
      icon: Icons.Building,
      color: "#3B82F6",
      desc: "We help people show off their properties, like homes and buildings with videos that make them look amazing. We make videos that're like movies showing off the inside, outside and all the great things about the property to attract people who might want to buy or invest.",
      thingsWeCanDo: [
        "Make videos that take you through a property",
        "Use drones to make videos of properties",
        "Make videos of apartments and villas",
        "Make videos of properties",
        "Make promotional content for real estate"
      ]
    },
    {
      title: "Business Videography Services",
      icon: Icons.Briefcase,
      color: "#EC4899",
      desc: "We help companies build trust and make their brand stronger with videos that really work. We make videos that are engaging and show off what the company is about, like their vision, services and culture.",
      thingsWeCanDo: [
        "Make videos",
        "Tell the story of a brand",
        "Make videos that show off a company",
        "Take videos of offices and teams",
        "Make videos of customers saying things"
      ]
    },
    {
      title: "Commercial Video Production",
      icon: Icons.Film,
      color: "#A068FF",
      desc: "We make videos that are really engaging and fun to watch for businesses and brands. We combine creativity, storytelling, and great editing to make videos that people will remember.",
      thingsWeCanDo: [
        "Make commercials",
        "Make videos to market products",
        "Make videos for campaigns",
        "Edit and color videos to make them look great",
        "Make videos that work on all platforms"
      ]
    }
  ];

  const whyChooseUs = {
    title: "Why Choose Digiworq for Professional Videography?",
    desc: "Digiworq is a choice because we are creative, strategic, and use the latest techniques to make videos that really work for businesses. Our team is. Focuses on making videos that are visually amazing and help brands get more engagement and be seen online.",
    thingsWeCanDo: [
      "Our team is experienced in videography",
      "We tell stories in a way",
      "We use high-quality equipment",
      "We deliver projects quickly",
      "We make videos"
    ]
  };

  const industriesWeServe = {
    title: "Industries We Serve",
    desc: "We make videos for all kinds of industries like real estate, retail, healthcare, education, hospitality, startups, and big companies.",
    thingsWeCanDo: [
      "Make videos for estate",
      "Make videos for retail and online brands",
      "Make videos for schools",
      "Make videos for restaurants and hotels",
      "Make videos for companies and startups"
    ]
  };

  const videographyProcess = [
    {
      step: "01",
      title: "Planning & Concept Development",
      desc: "We learn about your business goals and what you want the video to be about."
    },
    {
      step: "02",
      title: "Video Shoot & Production",
      desc: "We use equipment and creative direction to make the video."
    },
    {
      step: "03",
      title: "Final Delivery",
      desc: "We edit the video, add sound, and deliver the product, which is optimized and ready to go."
    }
  ];

  const faqs = [
    {
      q: "What types of videography services do you offer?",
      a: "We make all kinds of videos like ads, corporate videos, real estate videos, promotional videos, and commercials."
    },
    {
      q: "Do you provide drone videography services?",
      a: "Yes, we use drones to make videos for estate, events, and commercial projects."
    },
    {
      q: "Can you create videos for media marketing?",
      a: "Yes, we make videos that're perfect for Instagram, YouTube, Facebook, and other online platforms."
    },
    {
      q: "How long does video production take?",
      a: "It depends on the type of video, how long the shoot is, and how much editing is needed."
    },
    {
      q: "Why is professional videography important for businesses?",
      a: "Professional videos help businesses get noticed, engage with customers, and do better in marketing. Digiworq makes videos that really work for brands like advertising videography, real estate videography, and business videography services. Our team is. Focuses on making Digiworq videos that are visually amazing and help brands get more engagement and be seen online. We make videos for all kinds of industries and follow a step-by-step process to ensure every Digiworq project goes smoothly."
    }
  ];

  return (
    <div className="digiworq-service-page-root theme-videography">
      {/* Hero Section */}
      <section className="service-landing-hero hero-theme-videography" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container">
          <div className="service-breadcrumbs" style={{ marginBottom: '20px' }}>
            <button className="bc-link" onClick={onBackHome}>Services</button>
            <span className="bc-sep">&gt;</span>
            <span className="bc-current">{activeSub ? activeSub.title : "Professional Videography Services in Bangalore"}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
                <Icons.Video size={16} /> 4K Aerial & Cinematic Videography
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
                {activeSub ? activeSub.title : "Professional Videography Services in Bangalore"}
              </h1>

              <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '24px' }}>
                <p>
                  At Digiworq we help brands make videos that get peoples attention tell interesting stories and build a strong presence online. We make all kinds of videos from ads to videos about companies and properties that really connect with the people who watch them and make them want to engage.
                </p>
              </div>

              <div className="btn-border-wrap inline-block">
                <button className="marketeam-primary-btn" onClick={onOpenContact}>
                  <span>Book Videography Shoot</span>
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <ServiceIllustrationCard subServiceId={subServiceId || 'videography'} categoryId="videography" />
            </div>
          </div>

          {/* Deliverables Banner */}
          <div className="subservice-deliverables-banner" style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '24px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px' }}>Videography Deliverables & Capabilities:</h3>
            <div className="deliverables-pills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {deliverables.map((deliv, idx) => (
                <div key={idx} className="deliv-pill-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 184, 0, 0.1)', border: '1px solid rgba(245, 184, 0, 0.3)', padding: '8px 16px', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Icons.CheckCircle2 size={16} color="#F5B800" />
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
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '20px' }}>
                    {sec.desc}
                  </p>

                  <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
                    <div style={{ color: sec.color, fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>
                      Things we can do:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {sec.thingsWeCanDo.map((item, itemIdx) => (
                        <div key={itemIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '600' }}>
                          <Icons.CheckCircle2 size={16} color={sec.color} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Digiworq & Industries We Serve Twin Grid */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #0B0E17 0%, #070913 100%)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            
            {/* Why Choose Us */}
            <div style={{ background: 'rgba(245, 184, 0, 0.05)', border: '1px solid rgba(245, 184, 0, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px' }}>
                {whyChooseUs.title}
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '20px' }}>
                {whyChooseUs.desc}
              </p>
              <div style={{ color: '#F5B800', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>
                Things we can do:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {whyChooseUs.thingsWeCanDo.map((item, iIdx) => (
                  <div key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '600' }}>
                    <Icons.CheckCircle2 size={16} color="#F5B800" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries We Serve */}
            <div style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '24px', padding: '36px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px' }}>
                {industriesWeServe.title}
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '20px' }}>
                {industriesWeServe.desc}
              </p>
              <div style={{ color: '#3B82F6', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>
                Things we can do:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {industriesWeServe.thingsWeCanDo.map((item, iIdx) => (
                  <div key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '600' }}>
                    <Icons.CheckCircle2 size={16} color="#3B82F6" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Videography Process Section */}
      <section style={{ padding: '80px 0', background: '#05070F' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Our Videography Process</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', marginTop: '8px' }}>
              We follow a step-by-step process to make sure every project goes smoothly, and the video is great.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {videographyProcess.map((stepItem, sIdx) => (
              <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(245, 184, 0, 0.18)', border: '1px solid #F5B800', color: '#F5B800', fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
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
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF' }}>Frequently Asked Questions</h3>
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
                    {isOpen ? <Icons.ChevronUp size={20} color="#F5B800" /> : <Icons.ChevronDown size={20} color="#F5B800" />}
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
          <div className="services-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(245, 184, 0, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Ready to Create High-Impact Commercial Videos?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>Talk with Digiworq videographers to plan your shoot and production roadmap.</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Book Videography Shoot</span>
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
