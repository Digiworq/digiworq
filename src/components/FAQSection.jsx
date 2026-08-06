import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    num: "1.",
    question: "The finest digital marketing agency in Bangalore — Digiworq",
    answer: "Digiworq is a premier full-service digital marketing and web development agency in Bangalore. We specialize in SEO, social media marketing, Google Ads, creative branding, custom web application development, 2D/3D animation, and high-end video production."
  },
  {
    num: "2.",
    question: "How your digital marketing agency in bangalore works.",
    answer: "Our workflow begins with deep market research and competitor analysis. We define clear KPIs, craft tailored creative assets, execute multi-channel digital campaigns across Search and Social, and provide transparent performance analytics to drive scalable growth."
  },
  {
    num: "3.",
    question: "What are your website development services in Bangalore?",
    answer: "We offer comprehensive web engineering solutions including custom static & dynamic websites, e-commerce platforms (Shopify, WooCommerce, custom React), e-learning portals, custom web applications, and API integrations optimized for high speed and SEO."
  },
  {
    num: "4.",
    question: "How is Digiworq a top digital marketing agency?",
    answer: "With 25+ years of industry experience, 350+ satisfied global clients, and over 500 completed projects, Digiworq combines creative storytelling with data-driven performance marketing to consistently deliver industry-leading results."
  },
  {
    num: "5.",
    question: "The importance of digital marketing in business growth?",
    answer: "Digital marketing enables businesses to reach target demographics cost-effectively, establish brand authority, generate verified leads, and achieve higher conversion rates compared to traditional marketing channels."
  },
  {
    num: "6.",
    question: "Can i supply SEO services for a local city business",
    answer: "Absolutely! Local SEO optimizes your digital presence for location-specific searches. We enhance your Google Business Profile, target localized search keywords, build authoritative local citations, and drive foot traffic directly to your business."
  },
  {
    num: "7.",
    question: "Why is your website development company in Bangalore different?",
    answer: "We don't build generic templates. Every Digiworq website is crafted from scratch using modern web standards, ultra-responsive design systems, native security protocols, and conversion-focused UI/UX aesthetics."
  },
  {
    num: "8.",
    question: "Provides social media marketing services?",
    answer: "Yes, we manage full-cycle social media campaigns across Instagram, Facebook, LinkedIn, YouTube, Twitter, and Snapchat — including high-converting ad copy, graphic design, video reels, influencer partnerships, and community management."
  },
  {
    num: "9.",
    question: "What makes Digiworq different from other digital marketing agencies?",
    answer: "Our rare multi-disciplinary expertise — combining 3D product animations, cinematic video shoots, custom web software engineering, and performance marketing under one unified roof — ensures seamless brand consistency and maximum ROI."
  },
  {
    num: "10.",
    question: "When do you see the results of SEO?",
    answer: "Initial SEO improvements like indexing and organic impression growth typically appear within 4 to 8 weeks, with substantial Page 1 rankings and sustained traffic conversions achieved within 3 to 6 months."
  },
  {
    num: "11.",
    question: "Businesses must invest in online marketing services?",
    answer: "Yes, in today's digital-first economy, over 90% of consumers research products and services online before purchasing. Investing in digital marketing ensures your business captures intent-driven leads and outpaces competitors."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section marketeam-faq-section" id="faq">
      <div className="section-container">
        {/* Section Header Matching Marketeam Design */}
        <div className="eventura-section-header marketeam-header-center">
          <span className="marketeam-purple-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="marketeam-section-h2">
            Frequently Asked <span className="marketeam-text-gradient">Questions</span>
          </h2>
          <p className="marketeam-section-subdesc">
            Everything you need to know about our digital marketing, web engineering, branding, and video services.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list-container">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-card-item marketeam-faq-card ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="faq-question-header">
                  <div className="faq-left-text">
                    <span className="faq-number marketeam-num-glow">{item.num}</span>
                    <h3 className="faq-question-title">{item.question}</h3>
                  </div>

                  <div className="faq-plus-circle marketeam-plus-circle">
                    {isOpen ? <Minus size={18} color="#A068FF" /> : <Plus size={18} color="#A068FF" />}
                  </div>
                </div>

                {/* Answer Accordion Content */}
                {isOpen && (
                  <div className="faq-answer-body marketeam-answer-body">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
