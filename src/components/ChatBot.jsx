import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ChevronRight, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

// ─── OpenRouter API Config ────────────────────────────────────────────────────
const OR_API_KEY = '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';
const OR_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
// Models to try in priority order
const OR_MODELS = [
  'google/gemini-2.0-flash-lite-001',
  'google/gemini-flash-1.5',
  'meta-llama/llama-3.1-8b-instruct:free',
  'mistralai/mistral-7b-instruct:free',
];

// ─── Digiworq System Prompt ───────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are "Worq AI", the friendly and highly knowledgeable virtual assistant for Digiworq — Bangalore's #1 Digital Marketing & Creative Agency.

YOUR PERSONA:
- Friendly, professional, and enthusiastic about helping clients
- Always speak as a representative of Digiworq using "we", "our team", "at Digiworq"
- Use emojis occasionally to make responses warm and engaging
- Keep responses concise (3–6 lines max unless detailed info is needed)
- Always end with a soft call-to-action when relevant

DIGIWORQ COMPANY DETAILS:
- Company: Digiworq
- Tagline: "Refining your vision"
- Location: Bangalore, Karnataka, India
- Phone: +91 96114 89001
- Email: hello@digiworq.com
- Working Hours: Mon–Sat, 9:00 AM – 7:00 PM
- Stats: 500+ projects delivered, 99%+ client satisfaction, 15+ years combined experience, 24/7 support

SERVICES WE OFFER:
1. Creative: Branding, Logo Design, Graphic Design, Package Designing, UI/UX Design, PPT Design, Infographic Design, Social Media Content Creation, Illustrations, Rebranding, Brand Consultation
2. Digital Marketing: SEO, Social Media Marketing, Google Ads, Facebook Ads, Content Marketing, Email Marketing, Influencer Marketing, Brand Campaigns
3. Technology: Website Design & Development, Mobile App Development (Android & iOS), E-Commerce (Shopify, WooCommerce), WordPress, Web Applications, Landing Pages
4. Video Production: Corporate Videos, Product Demo Videos, Explainer Videos, Testimonial Videos, Social Media Reels, YouTube Videos
5. 2D Animation: Character Animations, Story Animations, Explainer Animations, Whiteboard Animations, Logo Animations
6. 3D Animation: Product Animations, Brand Animations, Motion Graphics, Visual Effects, 3D Intros
7. Printing Solutions: Business Cards, Brochures, Flyers, Banners, Hoardings, Standees, Catalogues, Packaging, Posters
8. Photography: Product Photography, Corporate Headshots, Event Photography, Brand Lifestyle Photography, Food Photography
9. Videography: Event Coverage, Corporate Shoots, Behind-the-Scenes, Product Shoots

PROCESS:
Step 1: Free Consultation → Step 2: Strategy & Proposal → Step 3: Onboarding → Step 4: Execution → Step 5: Review → Step 6: Launch & Support

PRICING:
- Pricing is custom-tailored to each project
- Flexible packages for startups to large enterprises
- Transparent pricing with no hidden costs
- Free initial consultation available
- Typical project timelines: websites (2–4 weeks), branding (1–2 weeks), apps (6–12 weeks)

INFLUENCER PROGRAM:
- Free registration, no cost to join
- Best earning opportunities & brand collaborations
- Open to micro and macro influencers
- Barter and paid collaborations available

WHEN ASKED ABOUT PRICING: Always say pricing is custom and invite them to contact for a free quote.
WHEN ASKED ABOUT CONTACT: Give phone (+91 96114 89001), email (hello@digiworq.com), and suggest opening the Contact form.
WHEN SOMEONE WANTS TO START A PROJECT: Encourage them to click "Talk to Our Team" or call directly.
WHEN ASKED SOMETHING YOU DON'T KNOW: Politely say you'll connect them with a human expert.
NEVER discuss competitors. NEVER make up specific prices. NEVER promise specific timelines without caveats.`;

// ─── Call OpenRouter API (OpenAI-compatible format) ──────────────────────────
async function callAI(chatHistory, userMessage) {
  // Build OpenAI-format messages array
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...chatHistory
      .filter(m => m.from !== 'system')
      .map(m => ({
        role: m.from === 'user' ? 'user' : 'assistant',
        content: m.text,
      })),
    { role: 'user', content: userMessage },
  ];

  let lastError = null;

  for (const model of OR_MODELS) {
    try {
      const response = await fetch(OR_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OR_API_KEY}`,
          'HTTP-Referer': 'https://digiworq.com',
          'X-Title': 'Digiworq Worq AI Chatbot',
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.75,
          max_tokens: 400,
          top_p: 0.9,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errMsg = data?.error?.message || `HTTP ${response.status}`;
        console.warn(`[Worq AI] OpenRouter model ${model} failed: ${errMsg}`);
        lastError = errMsg;
        continue;
      }

      const text = data?.choices?.[0]?.message?.content?.trim();
      if (!text) {
        console.warn(`[Worq AI] OpenRouter model ${model} returned empty response`);
        lastError = 'Empty response';
        continue;
      }

      console.info(`[Worq AI] ✅ OpenRouter model ${model} responded successfully`);
      return text;
    } catch (err) {
      console.warn(`[Worq AI] OpenRouter model ${model} threw: ${err.message}`);
      lastError = err.message;
    }
  }

  throw new Error(lastError || 'All Gemini models failed');
}

// ─── Smart Quick Replies Generator ───────────────────────────────────────────
function getQuickReplies(botText) {
  const t = botText.toLowerCase();
  if (t.includes('service') || t.includes('offer') || t.includes('what we do')) {
    return ['Creative Design', 'Digital Marketing', 'Website Development', 'Pricing'];
  }
  if (t.includes('price') || t.includes('cost') || t.includes('quote')) {
    return ['Get a Quote', 'Our Services', 'Contact Team'];
  }
  if (t.includes('contact') || t.includes('phone') || t.includes('email')) {
    return ['Open Contact Form', 'Our Services', 'About Digiworq'];
  }
  if (t.includes('seo') || t.includes('marketing') || t.includes('campaign')) {
    return ['Pricing', 'Start a Project', 'Contact Team'];
  }
  if (t.includes('website') || t.includes('app') || t.includes('develop')) {
    return ['Pricing', 'Our Process', 'Contact Team'];
  }
  if (t.includes('video') || t.includes('animation') || t.includes('photo')) {
    return ['Pricing', 'View Portfolio', 'Contact Team'];
  }
  if (t.includes('thank') || t.includes('great') || t.includes('perfect')) {
    return ['Start a Project', 'Contact Team'];
  }
  // Default suggestions
  return ['Our Services', 'Pricing', 'Contact Team', 'About Digiworq'];
}

// ─── Rule-Based Fallback (activates when all Gemini models fail) ──────────────
function getRuleFallback(input) {
  const t = input.toLowerCase();
  if (['hi','hello','hey','namaste','good morning','good afternoon','howdy'].some(g => t.includes(g))) {
    return { text: `👋 Hello! Welcome to **Digiworq** — Bangalore's #1 Digital Agency!\n\nI can help with our services, pricing, process, and more. What would you like to know?`, qr: ['Our Services', 'Pricing', 'Contact Info', 'About Digiworq'] };
  }
  if (t.includes('brand') || t.includes('logo') || t.includes('graphic') || t.includes('design') || t.includes('ui') || t.includes('ux') || t.includes('creative')) {
    return { text: `🎨 Our **Creative Services** include:\n• Branding & Logo Design\n• Graphic & UI/UX Design\n• Social Media Content\n• PPT, Infographics, Illustrations\n• Package Design & Rebranding\n\nReady for a free consultation?`, qr: ['Pricing', 'Contact Team', 'Other Services'] };
  }
  if (t.includes('seo') || t.includes('marketing') || t.includes('ppc') || t.includes('ads') || t.includes('social media') || t.includes('leads') || t.includes('traffic')) {
    return { text: `📈 Our **Digital Marketing** services:\n• SEO & Google Ranking\n• Social Media Marketing (SMM)\n• Google & Facebook Ads (PPC)\n• Content & Email Marketing\n• Influencer Marketing\n\nWe've run 500+ successful campaigns!`, qr: ['Pricing', 'Contact Team', 'Our Process'] };
  }
  if (t.includes('website') || t.includes('web') || t.includes('app') || t.includes('development') || t.includes('ecommerce') || t.includes('shopify') || t.includes('wordpress')) {
    return { text: `💻 Our **Technology Services** include:\n• Website Design & Development\n• Mobile Apps (Android & iOS)\n• E-Commerce (Shopify, WooCommerce)\n• WordPress & Web Applications\n\nAll sites are mobile-friendly & SEO-ready!`, qr: ['Pricing', 'Contact Team', 'Our Process'] };
  }
  if (t.includes('video') || t.includes('reel') || t.includes('film') || t.includes('shoot')) {
    return { text: `🎬 Our **Video Production** services:\n• Corporate & Brand Videos\n• Product & Explainer Videos\n• Testimonial Videos\n• Social Media Reels & Shorts\n\nHigh-quality videos that drive conversions!`, qr: ['Pricing', 'Contact Team', 'Animation Services'] };
  }
  if (t.includes('animat') || t.includes('motion') || t.includes('2d') || t.includes('3d')) {
    return { text: `✨ Our **Animation Services**:\n• 2D Character & Story Animations\n• 3D Product & Brand Animations\n• Motion Graphics & VFX\n• Whiteboard & Explainer Animations\n\nAnimations that bring your brand to life!`, qr: ['Pricing', 'Contact Team', 'Video Production'] };
  }
  if (t.includes('print') || t.includes('brochure') || t.includes('banner') || t.includes('card') || t.includes('flyer') || t.includes('poster')) {
    return { text: `🖨️ Our **Printing Solutions**:\n• Business Cards, Brochures, Flyers\n• Banners, Hoardings, Standees\n• Catalogues, Packaging, Posters\n\nPremium quality delivered to your doorstep!`, qr: ['Pricing', 'Contact Team', 'Other Services'] };
  }
  if (t.includes('photo')) {
    return { text: `📸 Our **Photography** services:\n• Product & E-Commerce Photography\n• Corporate Headshots & Team Photos\n• Event & Lifestyle Photography\n• Food & Hospitality Photography`, qr: ['Pricing', 'Contact Team', 'Video Production'] };
  }
  if (t.includes('price') || t.includes('cost') || t.includes('how much') || t.includes('budget') || t.includes('afford') || t.includes('fee') || t.includes('rate') || t.includes('quote')) {
    return { text: `💰 Our pricing is **custom-tailored** to each project.\n\n• Flexible packages for startups to enterprises\n• Transparent pricing — no hidden fees\n• Free initial consultation included\n\nShare your requirements and get a quote within 24 hours!`, qr: ['Get a Quote', 'Contact Team', 'Our Services'] };
  }
  if (t.includes('contact') || t.includes('phone') || t.includes('call') || t.includes('email') || t.includes('reach') || t.includes('location') || t.includes('bangalore') || t.includes('office')) {
    return { text: `📞 **Contact Digiworq:**\n\n📱 Phone: +91 96114 89001\n📧 Email: hello@digiworq.com\n📍 Location: Bangalore, India\n⏰ Mon–Sat: 9 AM – 7 PM`, qr: ['Open Contact Form', 'Our Services', 'Pricing'] };
  }
  if (t.includes('about') || t.includes('who') || t.includes('company') || t.includes('digiworq') || t.includes('team') || t.includes('experience')) {
    return { text: `🏢 **About Digiworq:**\n\nBangalore's #1 Digital Marketing & Creative Agency, helping brands grow since inception.\n\n🏆 500+ Projects Delivered\n✅ 99%+ Client Satisfaction\n🌟 15+ Years Combined Experience\n🛠️ 24/7 Dedicated Support`, qr: ['Our Services', 'Pricing', 'Contact Team'] };
  }
  if (t.includes('process') || t.includes('how') || t.includes('start') || t.includes('begin') || t.includes('onboard') || t.includes('steps')) {
    return { text: `⚙️ **How We Work:**\n\n1. Free Consultation\n2. Strategy & Proposal\n3. Onboarding & Agreement\n4. Execution & Creation\n5. Review & Feedback\n6. Launch & Ongoing Support\n\nMost projects kick off within 48 hours!`, qr: ['Contact Team', 'Pricing', 'Our Services'] };
  }
  if (t.includes('influencer') || t.includes('creator') || t.includes('collab') || t.includes('enroll') || t.includes('join')) {
    return { text: `🚀 **Influencer Network:**\n\n✅ Free Registration — No cost\n✅ Paid & Barter Collaborations\n✅ Connect with top Indian brands\n✅ Open to all creators — micro to mega!`, qr: ['Enroll as Influencer', 'Our Services', 'Contact Team'] };
  }
  if (t.includes('thank') || t.includes('great') || t.includes('awesome') || t.includes('perfect')) {
    return { text: `😊 You're most welcome! We're always here to help.\n\nReady to grow your brand with Digiworq? Our team is just a message away! 🚀`, qr: ['Start a Project', 'Contact Team'] };
  }
  // Default
  return { text: `🤔 Great question! Let me point you to what I can help with:\n\n• Explore our services\n• Get pricing information\n• Contact our team\n• Learn about our process\n\nWhat interests you most?`, qr: ['Our Services', 'Pricing', 'Contact Team', 'About Digiworq'] };
}

// ─── Quick Reply to Prompt Map ────────────────────────────────────────────────
const QR_MAP = {
  'Our Services': 'What services does Digiworq offer?',
  'Pricing': 'What is your pricing?',
  'Contact Team': 'How can I contact Digiworq?',
  'Contact Info': 'How can I contact Digiworq?',
  'About Digiworq': 'Tell me about Digiworq',
  'Creative Design': 'Tell me about your creative design services',
  'Digital Marketing': 'Tell me about your digital marketing services',
  'Website Development': 'Tell me about website development services',
  'Start a Project': 'I want to start a project with Digiworq',
  'Get a Quote': 'I want to get a quote for my project',
  'Our Process': 'How does your project process work?',
  'View Portfolio': 'Can I see examples of your work?',
  'Open Contact Form': '__OPEN_CONTACT__',
  'Enroll as Influencer': '__OPEN_INFLUENCER__',
};

// ─── ChatBot Component ────────────────────────────────────────────────────────
export default function ChatBot({ onOpenContact, onOpenInfluencer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      text: `👋 Hi there! I'm **Worq AI** — Digiworq's intelligent assistant powered by Gemini AI.\n\nI can help you explore our services, get quotes, understand our process, and connect you with the right experts. What would you like to know? 😊`,
      quickReplies: ['Our Services', 'Pricing', 'Contact Info', 'About Digiworq'],
      time: new Date(),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const [unread, setUnread] = useState(1);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  // Tracks raw message history for Gemini context (no quick replies metadata)
  const chatHistoryRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addBotMessage = (text, qrs) => {
    const quickReplies = qrs || getQuickReplies(text);
    setMessages(prev => [...prev, {
      id: Date.now(),
      from: 'bot',
      text,
      quickReplies,
      time: new Date(),
    }]);
    // Add to history
    chatHistoryRef.current.push({ from: 'bot', text });
    if (!isOpen) setUnread(u => u + 1);
  };

  const handleSend = async (textOverride) => {
    const msg = (textOverride || inputVal).trim();
    if (!msg || isTyping) return;
    setInputVal('');
    setError(null);

    // Handle special quick-reply actions
    const mapped = QR_MAP[msg];
    if (mapped === '__OPEN_CONTACT__') {
      setMessages(prev => [...prev, { id: Date.now(), from: 'user', text: msg, time: new Date() }]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(`Perfect! 📩 Opening the contact form for you now. Our team typically responds within 2–4 hours!`, ['Our Services', 'Pricing']);
        setTimeout(() => onOpenContact?.(), 600);
      }, 700);
      return;
    }
    if (mapped === '__OPEN_INFLUENCER__') {
      setMessages(prev => [...prev, { id: Date.now(), from: 'user', text: msg, time: new Date() }]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(`Exciting! 🚀 Opening the Influencer Enrollment form for you. Join our growing creator network!`, ['Our Services', 'Pricing']);
        setTimeout(() => onOpenInfluencer?.(), 600);
      }, 700);
      return;
    }

    // Resolve quick reply to real prompt
    const promptText = mapped || msg;

    // Add user message to UI
    setMessages(prev => [...prev, {
      id: Date.now(),
      from: 'user',
      text: msg,
      time: new Date(),
    }]);

    // Add to history
    chatHistoryRef.current.push({ from: 'user', text: promptText });

    // Show typing
    setIsTyping(true);

    try {
      const botReply = await callAI(chatHistoryRef.current.slice(0, -1), promptText);
      setIsTyping(false);
      addBotMessage(botReply);
    } catch (err) {
      console.error('[Worq AI] OpenRouter AI models failed, using rule-based fallback:', err.message);
      setIsTyping(false);
      // Use rule-based fallback so chatbot always gives a relevant answer
      const fallback = getRuleFallback(promptText);
      addBotMessage(fallback.text, fallback.qr);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    chatHistoryRef.current = [];
    setError(null);
    setMessages([{
      id: Date.now(),
      from: 'bot',
      text: `Chat cleared! 👋 I'm **Worq AI** — still here and ready to help. What would you like to know about Digiworq?`,
      quickReplies: ['Our Services', 'Pricing', 'Contact Info', 'About Digiworq'],
      time: new Date(),
    }]);
  };

  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const lastBotMsg = [...messages].reverse().find(m => m.from === 'bot');

  return (
    <>
      {/* Toggle Button — Left Side */}
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
                <div className="chatbot-name">
                  Worq AI <Sparkles size={12} color="#F5B800" />
                  <span className="gemini-badge">AI 2.0</span>
                </div>
                <div className="chatbot-status">
                  <span className="status-dot" />
                  Online — Powered by OpenRouter AI
                </div>
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

            {/* Quick Replies — always show from last bot message */}
            {lastBotMsg?.quickReplies?.length > 0 && !isTyping && (
              <div className="chatbot-quick-replies">
                {lastBotMsg.quickReplies.map((qr, i) => (
                  <button key={i} className="quick-reply-btn" onClick={() => handleSend(qr)}>
                    {qr} <ChevronRight size={12} />
                  </button>
                ))}
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
              placeholder="Ask me anything about Digiworq…"
              disabled={isTyping}
            />
            <button
              className="chatbot-send-btn"
              onClick={() => handleSend()}
              disabled={!inputVal.trim() || isTyping}
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </div>

          <div className="chatbot-footer-note">Worq AI · Powered by OpenRouter AI ✨</div>
        </div>
      )}
    </>
  );
}
