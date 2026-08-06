import React from 'react';
import { Star, User, Quote, CheckCircle2 } from 'lucide-react';

const testimonialsList = [
  {
    name: "Euguru",
    timeAgo: "2 years ago",
    stars: 5,
    tag: "Branding & Web",
    quote: "Excellent Services👍👍. Mr RK is a thorough professional and an expert in his profession. Our company's websites are being designed by him. This is the best website design agency and branding company I've ever seen. I strongly recommend Digiworq...👍👍"
  },
  {
    name: "Asvini Kumar",
    timeAgo: "3 years ago",
    stars: 5,
    tag: "Video Production",
    quote: "I am happy to share my appreciation of the work done by Digiworq on my BIC talk youtube post production project. They were very responsive, time bound and I feel it is good value for me."
  },
  {
    name: "Basawaraj A",
    timeAgo: "1 year ago",
    stars: 5,
    tag: "Web & Multimedia",
    quote: "We have been working together with Digiworq team since 5 years. They are professional team with huge experience in creative, multimedia and web solutions. We are quite fortunate that we got ourselves associated with them."
  },
  {
    name: "Ayyappa",
    timeAgo: "2 years ago",
    stars: 5,
    tag: "Print & Branding",
    quote: "I have to say that Digiworq Marketing & Technology Solutions is one of the best companies I have ever worked with. The design and print services they offered for our menu card was completed within hours with great quality and professional service."
  },
  {
    name: "Rajesh K",
    timeAgo: "1 year ago",
    stars: 5,
    tag: "SEO & Growth",
    quote: "Outstanding SEO & digital marketing results! Our website traffic quadrupled within 3 months of partnering with Digiworq. Highly creative and dedicated team."
  },
  {
    name: "Priya Sharma",
    timeAgo: "2 years ago",
    stars: 5,
    tag: "3D Animation",
    quote: "The 3D product animation and branding package Digiworq crafted for our product launch exceeded all expectations. True professionals!"
  }
];

export default function Testimonials() {
  // Double list for 100% smooth infinite marquee loop
  const marqueeList = [...testimonialsList, ...testimonialsList];

  return (
    <section className="testimonials-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="eventura-section-header">
          <span className="eventura-sub-tag">WHERE THINGS STAND</span>
          <h2 className="eventura-section-title">
            Most agencies stop at delivery. <span className="eventura-text-indigo-gradient">Here's what's real, and what's next.</span>
          </h2>
          <p className="eventura-section-desc">
            We build long-term partnerships. Here is what our clients say about their journey with Digiworq.
          </p>

          {/* Glowing Google Rating Pill Badge */}
          <div className="testimonial-rating-pill-badge">
            <div className="rating-stars-group">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#F5B800" color="#F5B800" />
              ))}
            </div>
            <span className="rating-score-text">5.0 Star Rating</span>
            <span className="rating-divider">•</span>
            <CheckCircle2 size={14} color="#F5B800" />
            <span>150+ Verified Client Reviews</span>
          </div>
        </div>

        {/* Infinite Moving Marquee Track (Zero Static Rectangular Boxes) */}
        <div className="infinite-marquee-container">
          <div className="infinite-marquee-track">
            {marqueeList.map((item, idx) => (
              <div key={idx} className="testimonial-glass-capsule">
                <Quote size={28} className="capsule-quote-watermark" />
                
                {/* Author Info */}
                <div className="author-flex-header">
                  <div className="author-avatar-circle">
                    <User size={20} color="#F5B800" />
                  </div>
                  <div className="author-details">
                    <h4 className="author-name">{item.name}</h4>
                    <div className="author-meta-row">
                      <span className="author-tag-pill">{item.tag}</span>
                      <span className="author-time">{item.timeAgo}</span>
                    </div>
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="stars-row">
                  {Array.from({ length: item.stars }).map((_, sIdx) => (
                    <Star key={sIdx} size={14} className="star-icon" fill="#F5B800" color="#F5B800" />
                  ))}
                </div>

                {/* Quote Paragraph */}
                <p className="testimonial-quote-text">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
