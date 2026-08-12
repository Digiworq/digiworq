import React from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Globe, 
  Share2, 
  Palette, 
  Cpu, 
  Search, 
  Film, 
  Box, 
  Video, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  ShoppingBag, 
  Car, 
  Hotel, 
  Wrench, 
  Briefcase 
} from 'lucide-react';

export default function HomeSeoContentSection({ onNavigateService }) {
  const industries = [
    { name: "Education", icon: GraduationCap },
    { name: "Healthcare", icon: Stethoscope },
    { name: "Real Estate", icon: Building2 },
    { name: "Retail", icon: ShoppingBag },
    { name: "E-commerce", icon: ShoppingBag },
    { name: "Automotive", icon: Car },
    { name: "Construction", icon: Wrench },
    { name: "Hospitality", icon: Hotel },
    { name: "Technology", icon: Cpu },
    { name: "Professional Services", icon: Briefcase }
  ];

  return (
    <section className="home-seo-content-section" style={{ padding: '80px 0', background: 'linear-gradient(180deg, #0A0A0F 0%, #0F0E17 100%)', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="section-container">
        
        {/* H2 1: Best Digital Marketing Agency in Bangalore for Business Growth */}
        <div className="seo-block" style={{ marginBottom: '60px' }}>
          <div className="seo-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '16px' }}>
            <TrendingUp size={16} /> Business Growth
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.3' }}>
            Best Digital Marketing Agency in Bangalore for Business Growth
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Digiworq is one of the top marketing agencies providing comprehensive digital marketing services for small- to medium-sized businesses in Bangalore. We blend creativity, technology and performance driven minds to enable brands build an online presence and ensure success on the long run.
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
            As the best digital marketing agency, we specialize in SEO, Google Ads & social media marketing solutions, content marketing services, branding, and performance marketing services that help drive targeted customer acquisition and conversions.
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Through innovation and challenge-driven campaigns, we aim to bring a spark that will make businesses rise above the noise of binary-driven digital.
          </p>
        </div>

        {/* H2 2: Complete Website Development & Digital Marketing Services */}
        <div className="seo-block" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#F5B800', marginBottom: '20px' }}>
            Complete Website Development & Digital Marketing Services in Bangalore
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            We deliver bespoke digital solutions across the length and breadth of modern-day enterprise. We are a team of experienced marketing and development professionals who provide solutions to help businesses grow their online marketing and communication.
          </p>
        </div>

        {/* Grid of Specialized Services SEO Blocks */}
        <div className="seo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          
          {/* Website Development */}
          <div className="seo-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '30px' }}>
            <Globe size={32} color="#F5B800" style={{ marginBottom: '16px' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px' }}>Website Development Services</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
              Your website is your digital footprint. Digiworq is a Leading SEO Company in Bangalore website development services with domain expertise in design performance, user experience & search engine optimization.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Mobile Responsive", "SEO Optimized", "Fast Loading", "User Friendly", "Secure & Scalable", "Conversion Focused"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#F5B800" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Marketing */}
          <div className="seo-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '30px' }}>
            <Share2 size={32} color="#A068FF" style={{ marginBottom: '16px' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px' }}>Social Media Marketing Agency</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
              Social media is an integral part of digital business growth. Digiworq connects brands to audiences through creative social media marketing campaigns on Facebook, Instagram, LinkedIn and YouTube.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Increase Brand Awareness", "Generate Leads", "Improve Engagement", "Reach Target Customers", "Build Online Reputation"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#A068FF" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Creative Branding & Design */}
          <div className="seo-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '30px' }}>
            <Palette size={32} color="#10B981" style={{ marginBottom: '16px' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px' }}>Creative Branding & Design Agency</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
              Creative branding is crucial to developing a unique character. We offer customized branding solutions ranging from logo design, social media creatives, ad creatives, to marketing materials.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Build Strong Brand Identity", "Improve Brand Recognition", "Create Professional Visual Presence", "Increase Customer Engagement", "Enhance Marketing Performance", "Strengthen Online Reputation"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#10B981" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Solutions */}
          <div className="seo-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '30px' }}>
            <Cpu size={32} color="#3B82F6" style={{ marginBottom: '16px' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px' }}>Technology Solutions for Business Growth</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
              We provide cutting-edge web tech, new-age development packages & support for automation and digital topologies per business needs.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Improve Digital Efficiency", "Build Scalable Business Solutions", "Enhance Website Performance", "Strengthen Online Security", "Automate Business Processes", "Deliver Better User Experience"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#3B82F6" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SEO Services */}
          <div className="seo-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '30px' }}>
            <Search size={32} color="#EC4899" style={{ marginBottom: '16px' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px' }}>Search Engine Optimization Services</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
              We implement highly tailored search engine optimization strategies for on-page SEO, off-page SEO, technical SEO, local SEO services, keyword optimization service & Content Optimization.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Improve Google Search Rankings", "Increase Organic Website Traffic", "Generate Quality Leads", "Enhance Online Visibility", "Improve Website Performance", "Build Long-Term Digital Growth"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#EC4899" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 2D Animation */}
          <div className="seo-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '30px' }}>
            <Film size={32} color="#F5B800" style={{ marginBottom: '16px' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px' }}>2D Animation Services</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
              2D animation breaks down intricate concepts into clear messages. We offer custom-built animated 2D animation solutions for explainer videos, promotional content, and educational videos.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Increase Audience Engagement", "Improve Brand Communication", "Create Visually Appealing Content", "Simplify Product & Service Explanations"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#F5B800" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 3D Animation */}
          <div className="seo-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '30px' }}>
            <Box size={32} color="#A068FF" style={{ marginBottom: '16px' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px' }}>3D Animation Services</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
              We create unique 3D solutions utilizing CGI across product visualization, architectural walkthroughs, motion graphics, and corporate presentations.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Create High-Impact Visual Content", "Showcase Products Realistically", "Enhance Marketing Campaigns", "Build Strong Brand Identity"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#A068FF" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Video Production */}
          <div className="seo-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '30px' }}>
            <Video size={32} color="#10B981" style={{ marginBottom: '16px' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px' }}>Video Production Services</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
              Tailor-made videos focused on social media, advertisements, corporate branding, promotional campaigns, reels, and product promotion videos.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Increase Brand Awareness", "Improve Audience Engagement", "Showcase Products & Services", "Generate Quality Leads"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#10B981" /> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Industries We Serve Section */}
        <div className="seo-industries-block" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '40px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px', textAlign: 'center' }}>
            Industries We Serve
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.75)', textAlign: 'center', maxWidth: '750px', margin: '0 auto 30px auto', fontSize: '1rem' }}>
            We provide digital marketing and website development solutions for businesses across multiple industries:
          </p>

          <div className="industries-chips-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
            {industries.map((ind, index) => {
              const IconComp = ind.icon;
              return (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', color: '#FFFFFF', fontWeight: '600', fontSize: '0.95rem' }}>
                  <IconComp size={20} color="#F5B800" />
                  <span>{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
