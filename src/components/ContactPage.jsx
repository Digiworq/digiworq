import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Globe,
  Search,
  Target
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Digital Marketing & SEO',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'Digital Marketing & SEO', message: '' });
    }, 4000);
  };

  const seoH2Sections = [
    {
      title: "Best Digital Marketing Agency Near Me",
      icon: Target,
      color: "#F5B800",
      desc: "When businesses look for the digital marketing agency near them they can count on Digiworq. Digiworq helps with SEO and social media marketing and branding and website development and Google Ads. Lead generation solutions. The team at Digiworq works closely with brands to create strategies. These strategies improve visibility and engagement and conversions for clients."
    },
    {
      title: "Marketing Agency in Bangalore",
      icon: Globe,
      color: "#3B82F6",
      desc: "Digiworq is a trusted marketing agency in Bangalore. Digiworq combines creativity and technology and data-driven marketing. This helps businesses achieve term digital growth with Digiworq. Digiworq provides end-to-end marketing solutions. These solutions are tailored to industries and business goals for Digiworq clients."
    },
    {
      title: "Search Engine Optimization Services in Bangalore",
      icon: Search,
      color: "#EC4899",
      desc: "The search engine optimization services at Digiworq are professional. Digiworq helps businesses improve Google rankings and increase website traffic. Digiworq also generates quality leads, for businesses. They do this through SEO strategies and content optimization and local search marketing with Digiworq."
    }
  ];

  return (
    <div className="contact-page-wrapper">
      {/* Hero Header Section */}
      <section className="contact-hero-section" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container text-center">
          <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            <MessageSquare size={16} /> Get In Touch
          </div>

          <h1 className="contact-hero-h1" style={{ fontSize: '2.6rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
            Best Digital Marketing Agencies in Bangalore
          </h1>

          <p className="contact-hero-p" style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.08rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: '1.8' }}>
            Digiworq is one of the digital marketing agencies that helps businesses build a strong online presence. They do this through strategies and innovative digital solutions. Digiworq focuses on delivering growth. They do this by creating marketing campaigns for startups and brands and growing businesses.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Details Section */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            {/* Left Column: Direct Contact Info */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '40px' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '24px' }}>
                Let's Build Something Great Together
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(245, 184, 0, 0.15)', border: '1px solid rgba(245, 184, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} color="#F5B800" />
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase' }}>Headquarters</div>
                    <div style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '1.05rem', marginTop: '2px' }}>Bangalore, Karnataka, India</div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '2px' }}>Serving Clients Globally across US, UAE, Europe & India</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} color="#3B82F6" />
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase' }}>Call / WhatsApp</div>
                    <div style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '1.05rem', marginTop: '2px' }}>+91 96114 89001</div>
                    <a href="https://wa.me/919611489001" target="_blank" rel="noreferrer" style={{ color: '#25D366', fontSize: '0.9rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                      <WhatsAppIcon size={16} /> Direct WhatsApp Chat
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} color="#EC4899" />
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase' }}>Email Inquiry</div>
                    <div style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '1.05rem', marginTop: '2px' }}>contact@digiworq.com</div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '2px' }}>24-Hour Response Guaranteed</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} color="#10B981" />
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase' }}>Working Hours</div>
                    <div style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '1.05rem', marginTop: '2px' }}>Monday – Saturday: 9:00 AM – 7:30 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '40px' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '8px' }}>Send Us a Message</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', marginBottom: '24px' }}>Fill out the form below and our strategy team will reach out within 2 hours.</p>

              {submitted ? (
                <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10B981', borderRadius: '16px', padding: '30px', textAlign: 'center', color: '#FFFFFF' }}>
                  <CheckCircle2 size={48} color="#10B981" style={{ margin: '0 auto 12px auto' }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Thank You!</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem', marginTop: '6px' }}>Your message has been received. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Your Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Service Interest</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', background: '#0F172A', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.95rem', outline: 'none' }}
                    >
                      <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Google Ads & Performance Ads">Google Ads & Performance Ads</option>
                      <option value="Branding & Creative Design">Branding & Creative Design</option>
                      <option value="Video & 3D Animation">Video & 3D Animation</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Project Details / Message</label>
                    <textarea 
                      rows="4"
                      placeholder="Tell us about your goals, timelines, and budget..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '12px', color: '#FFFFFF', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <button className="marketeam-primary-btn" type="submit" style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}>
                    <span>Send Message Now</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Structured SEO H2 Blocks Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #0B0E17 0%, #05070F 100%)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {seoH2Sections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${sec.color}44`, borderRadius: '20px', padding: '32px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: `${sec.color}18`, border: `1px solid ${sec.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComp size={24} color={sec.color} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px', lineHeight: '1.3' }}>
                    {sec.title}
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.98rem', lineHeight: '1.75' }}>
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
