import React from 'react';
import { Sparkles, ArrowRight, Share2, Target, Layout, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

export default function CareerPage({ onOpenContact }) {
  const careerCategories = [
    {
      title: "Social Media Marketing Jobs",
      icon: Share2,
      color: "#A068FF",
      desc: "Join the team and get a social media marketing job where you can make content manage campaigns come up with branding ideas and talk to people on many different digital platforms. We like it when people think creatively and come up with ideas that really work at Digiworq.",
      skills: ["Content Creation", "Social Campaign Management", "Community Engagement", "Reels & Copywriting"]
    },
    {
      title: "Google Ads Jobs",
      icon: Target,
      color: "#3B82F6",
      desc: "We have jobs at Digiworq for people who want to work with Google Ads manage pay per click campaigns come up with paid media plans and do performance marketing. You will work on campaigns and help brands grow online in a way that you can measure with data-driven ads at Digiworq.",
      skills: ["PPC Strategy", "Google Ads Management", "Performance Analytics", "Conversion Rate Optimization"]
    },
    {
      title: "Professional Web Design Jobs",
      icon: Layout,
      color: "#F5B800",
      desc: "Our web design jobs at Digiworq are great for user experience designers and web developers who want to make websites that work well are easy to use and look really good. We like to try things be creative and make modern websites that help brands stand out online at Digiworq.",
      skills: ["UI/UX Design", "Figma Design Systems", "Responsive Web Engineering", "Modern CSS & React"]
    },
    {
      title: "Best Digital Marketing Internship",
      icon: GraduationCap,
      color: "#10B981",
      desc: "Start your career with the internship program in digital marketing at Digiworq. You will get to try your hand at search engine optimization, social media marketing, Google Ads making content and managing websites while working with people, at Digiworq on real projects.",
      skills: ["Hands-on SEO Projects", "Live Social Ads Execution", "Real-World Campaign Mentorship", "Stipend & Certificate"]
    }
  ];

  return (
    <div className="career-page-wrapper">
      {/* Hero Header Banner */}
      <section className="career-hero-section" style={{ padding: '80px 0 50px 0', background: 'linear-gradient(180deg, #0A0E1A 0%, #0F172A 100%)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="section-container text-center">
          <div className="eventura-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 184, 0, 0.12)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '30px', color: '#F5B800', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            <Briefcase size={16} /> Join the Digiworq Team
          </div>

          <h1 className="career-hero-h1" style={{ fontSize: '2.6rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
            Digital Marketing Agency Career Opportunities
          </h1>

          <p className="career-hero-p" style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.08rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: '1.8' }}>
            Build your future with Digiworq. Find really cool jobs in the digital world. Our programs at Digiworq are perfect for people who like to think outside the box marketers, designers and developers who love ideas making brands look good and helping businesses grow. We have a team at Digiworq where talented people learn, grow and make a big impact with their digital work.
          </p>

          <div style={{ marginTop: '28px' }}>
            <button className="marketeam-primary-btn" onClick={onOpenContact} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <span>Apply Now / Submit CV</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Structured SEO H2 Career Sections */}
      <section style={{ padding: '80px 0', background: '#0B0E17' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {careerCategories.map((c, idx) => {
              const IconComp = c.icon;
              return (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${c.color}44`, borderRadius: '24px', padding: '36px', boxShadow: `0 12px 32px ${c.color}15` }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '16px', background: `${c.color}18`, border: `1px solid ${c.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComp size={26} color={c.color} />
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '14px', lineHeight: '1.3' }}>
                    {c.title}
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '0.98rem', lineHeight: '1.75', marginBottom: '20px' }}>
                    {c.desc}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                    <div style={{ color: '#F5B800', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '10px' }}>Key Focus Areas:</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {c.skills.map((s, sIdx) => (
                        <span key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '4px 12px', borderRadius: '8px', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: '600' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: '60px 0 80px 0', background: '#05070F' }}>
        <div className="section-container text-center">
          <div className="career-cta-glass-box" style={{ background: 'linear-gradient(135deg, rgba(245, 184, 0, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '24px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Don't See Your Specific Role Listed?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>We are always looking for passionate creators, developers, and strategists. Send us your resume and portfolio!</p>
            <div className="btn-border-wrap inline-block">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Send Open Application</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
