import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ChevronRight, Sparkles, RefreshCw } from 'lucide-react';

// ─── Knowledge Base ──────────────────────────────────────────────────────────
const KB = {
  greetings: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'namaste'],
  services: {
    creative: {
      keywords: ['branding', 'logo', 'graphic', 'design', 'package', 'ui', 'ux', 'ppt', 'presentation', 'infographic', 'illustration', 'social media design', 'creative', 'rebranding'],
      answer: `🎨 *Creative Services* — We offer:\n• Branding Solutions & Logo Design\n• Graphic & Package Designing\n• UI/UX Design for Web & Apps\n• Social Media Content Creation\n• Infographic & Illustration Design\n• PPT & Presentation Design\n• Rebranding & Brand Consultation\n\nWant a free consultation for your brand?`,
      cta: 'Get Free Branding Consultation',
    },
    digital: {
      keywords: ['seo', 'digital marketing', 'social media marketing', 'ppc', 'google ads', 'facebook ads', 'email marketing', 'content marketing', 'influencer', 'marketing', 'campaign', 'online presence', 'leads', 'traffic'],
      answer: `📈 *Digital Marketing Services* — We specialise in:\n• Search Engine Optimisation (SEO)\n• Social Media Marketing (SMM)\n• Google & Facebook Ads (PPC)\n• Content & Email Marketing\n• Influencer Marketing\n• Brand Campaigns & Strategy\n\nWe've delivered 500+ successful campaigns!`,
      cta: 'Start My Marketing Campaign',
    },
    technology: {
      keywords: ['website', 'web design', 'app', 'mobile app', 'development', 'e-commerce', 'shopify', 'wordpress', 'react', 'software', 'coding', 'tech', 'technology', 'flutter', 'android', 'ios'],
      answer: `💻 *Technology Services* — We build:\n• Custom Website Design & Development\n• Mobile App Development (Android & iOS)\n• E-Commerce Solutions (Shopify, WooCommerce)\n• WordPress & CMS Websites\n• Web Application Development\n• Landing Pages & Microsites\n\nAll our sites are mobile-friendly & SEO-ready!`,
      cta: 'Discuss My Web Project',
    },
    video: {
      keywords: ['video', 'video production', 'corporate video', 'product video', 'explainer', 'testimonial video', 'reel', 'shoot', 'film'],
      answer: `🎬 *Video Production Services* — We create:\n• Corporate & Brand Videos\n• Product Demo & Explainer Videos\n• Customer Testimonial Videos\n• Social Media Reels & Shorts\n• Event Coverage Videos\n• YouTube Video Production\n\nHigh-quality videos that convert viewers into customers!`,
      cta: 'Plan My Video Project',
    },
    animation: {
      keywords: ['animation', '2d animation', '3d animation', 'motion graphics', 'animated', 'explainer animation', 'whiteboard'],
      answer: `✨ *Animation Services* — We specialise in:\n• 2D Character & Story Animations\n• 3D Product & Brand Animations\n• Motion Graphics & Visual Effects\n• Animated Explainer Videos\n• Whiteboard Animations\n• Logo Animation & Intros\n\nAnimations that bring your brand to life!`,
      cta: 'Animate My Brand',
    },
    photography: {
      keywords: ['photography', 'photoshoot', 'product photography', 'corporate photo', 'headshot', 'photo'],
      answer: `📸 *Photography Services* — We offer:\n• Product Photography (E-commerce & Catalogue)\n• Corporate Headshots & Team Photos\n• Event & Conference Photography\n• Brand Lifestyle Photography\n• Food & Hospitality Photography\n\nProfessional photos that speak for your brand!`,
      cta: 'Book a Photo Session',
    },
    printing: {
      keywords: ['printing', 'print', 'brochure', 'flyer', 'banner', 'business card', 'hoarding', 'poster', 'catalogue'],
      answer: `🖨️ *Printing Solutions* — We print:\n• Business Cards, Brochures & Flyers\n• Banners, Hoardings & Standees\n• Product Catalogues & Booklets\n• Packaging & Label Printing\n• Poster & Invitation Printing\n\nPremium print quality delivered to your doorstep!`,
      cta: 'Get Printing Quote',
    },
  },
  pricing: {
    keywords: ['price', 'cost', 'how much', 'charges', 'fee', 'budget', 'affordable', 'pricing', 'rate', 'package', 'plan', 'expensive', 'cheap'],
    answer: `💰 *Pricing at Digiworq*\n\nOur pricing is custom-tailored to your project needs. We offer:\n• Flexible packages for startups to enterprises\n• Transparent pricing — no hidden costs\n• Free initial consultation\n• Competitive rates with premium quality\n\nFor an exact quote, share your requirements and our team will get back to you within 24 hours!`,
    cta: 'Get Custom Quote',
  },
  contact: {
    keywords: ['contact', 'reach', 'call', 'phone', 'email', 'office', 'address', 'location', 'bangalore', 'where', 'visit', 'appointment'],
    answer: `📞 *Contact Digiworq*\n\n📱 Phone: +91 96114 89001\n📧 Email: hello@digiworq.com\n📍 Location: Bangalore, Karnataka, India\n\n🕐 Working Hours:\nMon–Sat: 9:00 AM – 7:00 PM\n\nYou can also use the Contact form on our website for quick enquiries!`,
    cta: 'Open Contact Form',
  },
  about: {
    keywords: ['about', 'who are you', 'company', 'digiworq', 'team', 'founded', 'experience', 'years', 'agency', 'history'],
    answer: `🏢 *About Digiworq*\n\nDigiworq is Bangalore's #1 Digital Marketing & Creative Agency. We are a team of passionate creatives, developers, and strategists who help brands grow online.\n\n🏆 Our Stats:\n• 500+ Successful Projects\n• 99%+ Client Satisfaction Rate\n• 15+ Years of Combined Experience\n• 24/7 Dedicated Support\n\nWe specialise in Branding, Digital Marketing, Web & App Development, Video Production, and more!`,
    cta: 'Learn More About Us',
  },
  portfolio: {
    keywords: ['portfolio', 'work', 'projects', 'case study', 'clients', 'examples', 'samples', 'previous work', 'showcase'],
    answer: `🖼️ *Our Portfolio*\n\nWe've worked with 500+ brands across industries including:\n• Healthcare & Wellness\n• Real Estate & Construction\n• Food & Hospitality\n• Fashion & Retail\n• Education & EdTech\n• IT & Software\n\nSome of our clients: BPL, Revlon, Sreenathji, NIECCE, Oaklyt, InnoView, and many more!\n\nWant to see work relevant to your industry?`,
    cta: 'View Our Portfolio',
  },
  seo: {
    keywords: ['seo result', 'rank', 'google ranking', 'search engine', 'keyword', 'backlink', 'organic'],
    answer: `🔍 *SEO Results & Timeline*\n\nSEO is a long-term strategy. Typically:\n• Initial improvements: 1–3 months\n• Significant ranking gains: 3–6 months\n• Strong organic presence: 6–12 months\n\nFactors that affect results:\n• Website age & authority\n• Competition level in your niche\n• Quality of content & backlinks\n• Technical SEO health\n\nOur SEO team does monthly audits and transparent reporting!`,
    cta: 'Start My SEO Journey',
  },
  process: {
    keywords: ['process', 'how do you work', 'steps', 'timeline', 'workflow', 'approach', 'methodology', 'onboarding', 'start'],
    answer: `⚙️ *How Digiworq Works*\n\n**Step 1:** Free Consultation — Understand your goals\n**Step 2:** Strategy & Proposal — Custom plan + pricing\n**Step 3:** Onboarding — Sign agreement, share access\n**Step 4:** Execution — Design, develop, market\n**Step 5:** Review & Iterate — Your feedback loop\n**Step 6:** Launch & Support — Go live + ongoing help\n\nMost projects kick off within 48 hours of agreement!`,
    cta: 'Start My Project',
  },
  support: {
    keywords: ['support', 'help', 'issue', 'problem', 'complaint', 'maintenance', 'update', 'after service', 'post delivery'],
    answer: `🛠️ *Support at Digiworq*\n\nWe offer 24/7 dedicated support:\n• Post-delivery bug fixes\n• Website maintenance packages\n• Monthly social media management\n• Regular performance reports\n• Dedicated account manager\n\nYou're never alone after a project delivers. We're always here!`,
    cta: 'Talk to Support',
  },
  influencer: {
    keywords: ['influencer', 'collab', 'collaboration', 'partner', 'enroll', 'join', 'creator', 'content creator'],
    answer: `🚀 *Influencer Network at Digiworq*\n\nJoin our growing network of content creators!\n\n✅ Free Registration — No cost to join\n✅ Best Earning Opportunities\n✅ Connect with top Indian brands\n✅ Barter & paid collaborations available\n\nFrom micro-influencers to mega creators — all welcome!`,
    cta: 'Enroll as Influencer',
  },
};

// ─── Bot Response Engine ─────────────────────────────────────────────────────
function getBotResponse(userInput) {
  const input = userInput.toLowerCase().trim();

  // Greeting check
  if (KB.greetings.some(g => input.includes(g))) {
    return {
      text: `👋 Hello! Welcome to *Digiworq* — Bangalore's #1 Digital Agency!\n\nI'm your AI assistant. I can help you with:\n• Our Services (Branding, Web, Marketing, Video)\n• Pricing & Packages\n• Project Process\n• Contact & Support\n\nWhat can I help you with today? 😊`,
      quickReplies: ['Our Services', 'Pricing', 'Contact Info', 'Portfolio'],
      cta: null,
    };
  }

  // Check service categories
  for (const [key, svc] of Object.entries(KB.services)) {
    if (svc.keywords.some(kw => input.includes(kw))) {
      return { text: svc.answer, quickReplies: ['Pricing', 'Contact Info', 'Our Process', 'View Portfolio'], cta: svc.cta };
    }
  }

  // Check other intents
  for (const [key, intent] of Object.entries({ ...KB, services: undefined })) {
    if (!intent || !intent.keywords) continue;
    if (intent.keywords.some(kw => input.includes(kw))) {
      return { text: intent.answer, quickReplies: ['Our Services', 'Pricing', 'Contact Info', 'Start a Project'], cta: intent.cta };
    }
  }

  // "our services" or "what do you do"
  if (input.includes('service') || input.includes('what do you') || input.includes('offer') || input.includes('provide') || input.includes('do you')) {
    return {
      text: `✨ *Digiworq's Full Service Portfolio:*\n\n🎨 Creative (Branding, Graphic Design, UI/UX)\n📈 Digital Marketing (SEO, SMM, PPC, Content)\n💻 Technology (Website, App, E-Commerce)\n🎬 Video Production\n✨ 2D & 3D Animation\n🖨️ Printing Solutions\n📸 Photography & Videography\n\nWhich service interests you most?`,
      quickReplies: ['Creative Design', 'Digital Marketing', 'Website Development', 'Video Production'],
      cta: 'View All Services',
    };
  }

  // Thank you
  if (input.includes('thank') || input.includes('thanks') || input.includes('great') || input.includes('awesome') || input.includes('perfect')) {
    return {
      text: `😊 You're most welcome! Happy to help.\n\nIf you have any more questions or are ready to start a project, our team is just a click away. Wishing you great success with your brand! 🚀`,
      quickReplies: ['Start a Project', 'Contact Info'],
      cta: 'Talk to Our Team',
    };
  }

  // Bye
  if (input.includes('bye') || input.includes('goodbye') || input.includes('see you') || input.includes('take care')) {
    return {
      text: `👋 Goodbye! It was great chatting with you.\n\nRemember, Digiworq is always here whenever you need a creative or digital partner. Have a wonderful day! 🌟`,
      quickReplies: [],
      cta: null,
    };
  }

  // Default fallback
  return {
    text: `🤔 I didn't quite get that, but I'm here to help!\n\nHere are some things I can assist you with:`,
    quickReplies: ['Our Services', 'Pricing & Packages', 'Contact Us', 'About Digiworq'],
    cta: 'Talk to a Human Expert',
  };
}

// ─── Quick Reply Maps ────────────────────────────────────────────────────────
const QUICK_REPLY_MAP = {
  'Our Services': 'What services do you offer?',
  'Pricing': 'What is your pricing?',
  'Contact Info': 'How can I contact you?',
  'Portfolio': 'Can I see your portfolio?',
  'Our Process': 'How do you work?',
  'View Portfolio': 'Can I see your portfolio?',
  'Creative Design': 'Tell me about your creative design services',
  'Digital Marketing': 'Tell me about your digital marketing services',
  'Website Development': 'Tell me about your website development services',
  'Video Production': 'Tell me about your video production services',
  'Start a Project': 'How do I start a project with you?',
  'Start My Project': 'How do I start a project with you?',
  'Pricing & Packages': 'What is your pricing?',
  'Contact Us': 'How can I contact you?',
  'About Digiworq': 'Tell me about Digiworq',
  'Talk to a Human Expert': 'I need to speak to someone from your team',
  'Talk to Our Team': 'I need to speak to someone from your team',
};

// ─── ChatBot Component ───────────────────────────────────────────────────────
export default function ChatBot({ onOpenContact, onOpenInfluencer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      text: `👋 Hi there! I'm *Worq AI* — Digiworq's virtual assistant.\n\nI can help you explore our services, answer your questions, and connect you with the right team. How can I help you today? 😊`,
      quickReplies: ['Our Services', 'Pricing', 'Contact Info', 'Portfolio'],
      time: new Date(),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addBotMessage = (response) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now(),
        from: 'bot',
        text: response.text,
        quickReplies: response.quickReplies || [],
        cta: response.cta || null,
        time: new Date(),
      }]);
    }, 900 + Math.random() * 600);
  };

  const handleSend = (text) => {
    const msg = (text || inputVal).trim();
    if (!msg) return;
    setInputVal('');

    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      from: 'user',
      text: msg,
      time: new Date(),
    }]);

    // Handle CTA clicks
    if (msg === 'Contact Us' || msg === 'Talk to a Human Expert' || msg === 'Talk to Our Team' || msg === 'Open Contact Form') {
      addBotMessage({ text: `Perfect! Opening the contact form for you right now. Our team typically responds within 2–4 hours! 📩`, quickReplies: ['Our Services', 'Pricing'] });
      setTimeout(() => onOpenContact?.(), 1400);
      return;
    }
    if (msg === 'Enroll as Influencer') {
      addBotMessage({ text: `Exciting! Redirecting you to our Influencer Enrollment form. Join our growing creator network! 🚀`, quickReplies: ['Our Services', 'Pricing'] });
      setTimeout(() => onOpenInfluencer?.(), 1400);
      return;
    }

    // Map quick replies to full text
    const resolvedMsg = QUICK_REPLY_MAP[msg] || msg;
    const response = getBotResponse(resolvedMsg);
    addBotMessage(response);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: 1,
      from: 'bot',
      text: `👋 Chat cleared! I'm *Worq AI* and I'm still here. How can I help you? 😊`,
      quickReplies: ['Our Services', 'Pricing', 'Contact Info', 'Portfolio'],
      time: new Date(),
    }]);
  };

  const formatText = (text) => {
    return text
      .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button — Left Side */}
      <div className={`chatbot-toggle-wrap ${isOpen ? 'is-open' : ''}`}>
        <button
          className="chatbot-toggle-btn"
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
          {!isOpen && unread > 0 && (
            <span className="chatbot-unread-badge">{unread}</span>
          )}
        </button>
        {!isOpen && (
          <div className="chatbot-toggle-label">Chat with Worq AI</div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="chatbot-avatar">
                <Bot size={18} color="#111827" />
              </div>
              <div>
                <div className="chatbot-name">Worq AI <Sparkles size={12} color="#F5B800" /></div>
                <div className="chatbot-status"><span className="status-dot" />Online — Avg reply &lt; 1 min</div>
              </div>
            </div>
            <div className="chatbot-header-actions">
              <button className="chatbot-action-btn" onClick={clearChat} title="Clear Chat">
                <RefreshCw size={15} />
              </button>
              <button className="chatbot-action-btn" onClick={() => setIsOpen(false)} title="Close">
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-msg-row ${msg.from === 'user' ? 'user-row' : 'bot-row'}`}>
                {msg.from === 'bot' && (
                  <div className="chatbot-msg-avatar"><Bot size={14} color="#111827" /></div>
                )}
                <div className={`chatbot-bubble ${msg.from === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                  <p dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
                  <span className="msg-time">{formatTime(msg.time)}</span>
                </div>
                {msg.from === 'user' && (
                  <div className="chatbot-msg-avatar user-msg-avatar"><User size={14} color="#fff" /></div>
                )}
              </div>
            ))}

            {/* Quick Replies */}
            {messages.length > 0 && messages[messages.length - 1].from === 'bot' && messages[messages.length - 1].quickReplies?.length > 0 && !isTyping && (
              <div className="chatbot-quick-replies">
                {messages[messages.length - 1].quickReplies.map((qr, i) => (
                  <button key={i} className="quick-reply-btn" onClick={() => handleSend(qr)}>
                    {qr} <ChevronRight size={12} />
                  </button>
                ))}
              </div>
            )}

            {/* CTA Button */}
            {messages.length > 0 && messages[messages.length - 1].from === 'bot' && messages[messages.length - 1].cta && !isTyping && (
              <div className="chatbot-cta-row">
                <button className="chatbot-cta-btn" onClick={() => handleSend(messages[messages.length - 1].cta)}>
                  {messages[messages.length - 1].cta} →
                </button>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="chatbot-msg-row bot-row">
                <div className="chatbot-msg-avatar"><Bot size={14} color="#111827" /></div>
                <div className="chatbot-bubble bot-bubble typing-bubble">
                  <span /><span /><span />
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              className="chatbot-input"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message…"
            />
            <button
              className="chatbot-send-btn"
              onClick={() => handleSend()}
              disabled={!inputVal.trim()}
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </div>

          <div className="chatbot-footer-note">Powered by Digiworq · Worq AI ✨</div>
        </div>
      )}
    </>
  );
}
