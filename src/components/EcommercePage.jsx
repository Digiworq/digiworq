import React from 'react';
import { 
  ShoppingBag, 
  CreditCard, 
  Zap, 
  TrendingUp, 
  Smartphone, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Database
} from 'lucide-react';
const creativeBanner = '/creative-3d-banner.jpg';

export default function EcommercePage({ onOpenContact }) {
  const ecomCapabilities = [
    {
      icon: <ShoppingBag size={28} className="ecom-icon" />,
      title: "Shopify & WooCommerce Mastery",
      desc: "Custom theme development, app integrations, and conversion-engineered storefronts built for scale."
    },
    {
      icon: <Layers size={28} className="ecom-icon" />,
      title: "Headless Commerce Architecture",
      desc: "Blazing fast Next.js & Shopify Storefront API integrations delivering sub-second page loads globally."
    },
    {
      icon: <CreditCard size={28} className="ecom-icon" />,
      title: "Seamless Payment & Checkout Rails",
      desc: "Multi-currency checkout, UPI, Razorpay, Stripe, and 1-click buy flows optimized for zero drop-offs."
    },
    {
      icon: <TrendingUp size={28} className="ecom-icon" />,
      title: "Conversion Rate Optimization (CRO)",
      desc: "A/B testing, heatmaps, personalized upsells, and automated cart abandonment recovery engines."
    },
    {
      icon: <Database size={28} className="ecom-icon" />,
      title: "Omnichannel ERP & Inventory Sync",
      desc: "Automated real-time sync across Amazon, Flipkart, physical retail stores, and warehouse ERPs."
    },
    {
      icon: <Smartphone size={28} className="ecom-icon" />,
      title: "PWA & Native Mobile Commerce Apps",
      desc: "Turn your store into iOS & Android native apps with push notifications and instant re-ordering."
    }
  ];

  const ecomPlatforms = [
    { name: "Shopify Plus", desc: "Enterprise Scalability", badge: "Official Partner" },
    { name: "WooCommerce", desc: "Flexible Open-Source", badge: "Expert Devs" },
    { name: "Magento Commerce", desc: "Complex B2B Catalogs", badge: "Custom Stack" },
    { name: "Headless Next.js", desc: "Sub-Second Speed", badge: "Ultra Modern" }
  ];

  return (
    <div className="ecommerce-page-wrapper">
      {/* Hero Header Section */}
      <section className="ecom-hero-section">
        <div className="section-container text-center">
          <h1 className="ecom-hero-h1">
            Turn Casual Browsers into <span className="purple-gold-gradient-text">Repeat Customers</span>
          </h1>

          <p className="ecom-hero-p">
            We engineer high-performance online stores that combine striking visual luxury, lightning-fast checkout experiences, and data-backed conversion optimization.
          </p>

          <div className="btn-border-wrap inline-block mt-6">
            <button className="marketeam-primary-btn" onClick={onOpenContact}>
              <span>Launch Your Store Today</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Platforms Highlight Row */}
      <section className="ecom-platforms-section">
        <div className="section-container">
          <div className="platforms-grid">
            {ecomPlatforms.map((plat, idx) => (
              <div key={idx} className="platform-glass-card">
                <span className="plat-badge">{plat.badge}</span>
                <h3>{plat.name}</h3>
                <p>{plat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core E-Commerce Capabilities Grid */}
      <section className="ecom-capabilities-section">
        <div className="section-container">
          <div className="eventura-section-header text-center mb-12">
            <h2 className="eventura-section-h2">Everything You Need to Scale Online Sales</h2>
          </div>

          <div className="capabilities-grid">
            {ecomCapabilities.map((cap, idx) => (
              <div key={idx} className="capability-glass-card">
                <div className="cap-icon-box">{cap.icon}</div>
                <h4>{cap.title}</h4>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce Results & Stats Highlight */}
      <section className="ecom-stats-section">
        <div className="section-container">
          <div className="ecom-stats-banner-card">
            <div className="ecom-stats-header">
              <h2>Proven Results for Global E-Commerce Brands</h2>
              <p>Our store builds are engineered with a single goal: maximizing your Average Order Value (AOV) and Customer Lifetime Value (LTV).</p>
            </div>

            <div className="ecom-metrics-row">
              <div className="metric-col">
                <span className="m-num">+340%</span>
                <span className="m-text">Average Revenue Growth</span>
              </div>
              <div className="metric-col">
                <span className="m-num">1.4s</span>
                <span className="m-text">Avg Mobile Page Speed</span>
              </div>
              <div className="metric-col">
                <span className="m-num">+68%</span>
                <span className="m-text">Cart Conversion Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="ecom-cta-section">
        <div className="section-container text-center">
          <div className="ecom-cta-glass-box">
            <h2>Ready to Scale Your E-Commerce Revenue?</h2>
            <p>Get a complimentary store performance & UX audit from our senior e-commerce strategists.</p>
            <div className="btn-border-wrap inline-block mt-6">
              <button className="marketeam-primary-btn" onClick={onOpenContact}>
                <span>Claim Free Store Audit</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
