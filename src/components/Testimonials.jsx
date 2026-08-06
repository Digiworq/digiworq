import React, { useState, useEffect } from 'react';
import { Star, User } from 'lucide-react';

const testimonialsList = [
  {
    name: "Euguru",
    timeAgo: "2 years ago",
    stars: 5,
    quote: "Excellent Services👍👍. Mr RK is a thorough professional and an expert in his profession. Our company's websites are being designed by him. This is the best website design agency and branding company I've ever seen. I strongly recommend Digiworq...👍👍"
  },
  {
    name: "Asvini Kumar",
    timeAgo: "3 years ago",
    stars: 5,
    quote: "I am happy to share my appreciation of the work done by Digiworq on my BIC talk youtube post production project. They were very responsive, time bound and I feel it is good value for me."
  },
  {
    name: "Basawaraj A",
    timeAgo: "1 years ago",
    stars: 5,
    quote: "We have been working together with Digiworq team since 5 years. They are professional team with huge experience in creative, multimedia and web solutions. We are quite fortunate that we got ourselves associated with them."
  },
  {
    name: "Ayyappa",
    timeAgo: "2 years ago",
    stars: 5,
    quote: "I have to say that Digiworq Marketing & Technology Solutions is one of the best companies I have ever worked with. The design and print services they offered for our menu card was completed within hours with great quality and professional service."
  },
  {
    name: "Rajesh K",
    timeAgo: "1 year ago",
    stars: 5,
    quote: "Outstanding SEO & digital marketing results! Our website traffic quadrupled within 3 months of partnering with Digiworq. Highly creative and dedicated team."
  },
  {
    name: "Priya Sharma",
    timeAgo: "2 years ago",
    stars: 5,
    quote: "The 3D product animation and branding package Digiworq crafted for our product launch exceeded all expectations. True professionals!"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCards = 4;
  const maxIndex = Math.ceil(testimonialsList.length / 1) - visibleCards;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="testimonials-section">
      <div className="section-container">
        {/* Section Header Matching Screenshot 64 */}
        <div className="eventura-section-header">
          <span className="eventura-sub-tag">WHERE THINGS STAND</span>
          <h2 className="eventura-section-title">
            Most agencies stop at delivery. <span className="eventura-text-indigo">Here's what's real, and what's next.</span>
          </h2>
          <p className="eventura-section-desc">
            We build long-term partnerships. Here is what our clients say about their journey with Digiworq.
          </p>
        </div>

        {/* Testimonial Cards Carousel Row */}
        <div className="testimonials-cards-wrapper">
          <div 
            className="testimonials-track"
            style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
          >
            {testimonialsList.map((item, idx) => (
              <div key={idx} className="testimonial-card-item">
                {/* Author Info */}
                <div className="author-flex-header">
                  <div className="author-avatar-circle">
                    <User size={24} />
                  </div>
                  <div className="author-details">
                    <h4 className="author-name">{item.name}</h4>
                    <span className="author-time">{item.timeAgo}</span>
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="stars-row">
                  {Array.from({ length: item.stars }).map((_, sIdx) => (
                    <Star key={sIdx} size={15} className="star-icon" fill="#F5B800" />
                  ))}
                </div>

                {/* Quote Paragraph */}
                <p className="testimonial-quote-text">{item.quote}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicator Line Bars */}
        <div className="testimonials-pagination-bars">
          {Array.from({ length: maxIndex + 1 }).map((_, bIdx) => (
            <button
              key={bIdx}
              className={`pagination-bar-item ${activeIndex === bIdx ? 'active' : ''}`}
              onClick={() => setActiveIndex(bIdx)}
              aria-label={`Slide ${bIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
