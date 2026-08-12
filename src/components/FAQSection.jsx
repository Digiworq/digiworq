import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    num: "1.",
    question: "The finest digital marketing agency in Bangalore — Digiworq",
    answer: "Digiworq is a result-driven digital marketing solutions provider offering services in SEO, social media marketing, Google Ads, branding and website development to accelerate your business growth."
  },
  {
    num: "2.",
    question: "How your digital marketing agency in bangalore works.",
    answer: "Place of Us provides you SEO, social media marketing, Google Ads, website development, branding, content marketing, performance marketing and lead generation services."
  },
  {
    num: "3.",
    question: "What are your website development services in Bangalore?",
    answer: "Yes, we offer reliable web development services in Bangalore such as business website, e-commerce website, responsive web design and SEO-friendly development."
  },
  {
    num: "4.",
    question: "How is Digiworq a top digital marketing agency?",
    answer: "Our Team works with custom marketing strategies, performance-driven campaigns, transparent reporting, and sustainable growth of our client's business."
  },
  {
    num: "5.",
    question: "The importance of digital marketing in business growth.",
    answer: "The most important things what digital marketing does it enhances the online presence on all possible platforms including potential customers in targeted markets and creates leads followed runs to the sales with robust brand awareness."
  },
  {
    num: "6.",
    question: "BASIC QUESTIONS: CAN I SUPPLY SEO SERVICES FOR A LOCAL CITY BUSINESS?",
    answer: "Our local SEO services will help businesses improve their Google ranking and reach potential customers nearby."
  },
  {
    num: "7.",
    question: "Why is your website development company in Bangalore different?",
    answer: "We build websites that are modern and SEO-friendly with fast-loading web pages customized for mobile-responsive to offer a better user experience and business engagement."
  },
  {
    num: "8.",
    question: "Provides social media marketing services?",
    answer: "YES, we design custom social media marketing campaigns on Facebook, Instagram, LinkedIn & YouTube to optimize engagement and brand awareness."
  },
  {
    num: "9.",
    question: "When do you see the results of SEO?",
    answer: "SEO is a long game, but the effects of good work can begin in 2 to 6 months, since SEO works best after marketing begins, depending largely on competition and website quality."
  },
  {
    num: "10.",
    question: "Businesses must invest in online marketing services.",
    answer: "Digital Marketing enables businesses to engage with their targeted audiences, build brand awareness, generate leads, and achieve substantial business growth in the digital market."
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
