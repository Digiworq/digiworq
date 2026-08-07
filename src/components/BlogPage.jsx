import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
const creativeBanner = '/creative-3d-banner.jpg';
const agencyWorkspace = '/agency-3d-workspace.jpg';

export default function BlogPage({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Future', 'Branding', 'Growth Marketing', 'Tech & Dev'];

  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Autonomous AI Marketing Agents in 2026: What Brands Must Know",
      category: "AI & Future",
      author: "David Worq AI",
      date: "August 4, 2026",
      readTime: "6 min read",
      snippet: "Discover how multi-agent LLM systems are transforming campaign optimization, real-time creative generation, and hyper-personalized customer journeys.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Building Atmospheric Brand Containers: Moving Beyond Static Logos",
      category: "Branding",
      author: "Ananya Roy",
      date: "July 28, 2026",
      readTime: "5 min read",
      snippet: "Why modern consumer brands are ditching flat 2D visuals in favor of dynamic 3D studio environments and immersive glassmorphic design languages.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Scaling Meta & Google Ads to 8+ ROAS: The 2026 Performance Blueprint",
      category: "Growth Marketing",
      author: "R. K. Sharma",
      date: "July 19, 2026",
      readTime: "8 min read",
      snippet: "A deep dive into broad targeting, AI dynamic creative testing, server-side CAPI tracking, and post-purchase retention loops.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Why Headless Commerce is Outperforming Monolithic E-Commerce Stores",
      category: "Tech & Dev",
      author: "Vikram Malhotra",
      date: "July 11, 2026",
      readTime: "7 min read",
      snippet: "How pairing Next.js with Shopify Storefront API delivers 99+ Lighthouse performance scores and 34% higher checkout conversion rates.",
      img: "https://images.unsplash.com/photo-1556742049-0a67568d049f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "The Art of Micro-Animations in Modern Web UX: Principles & Best Practices",
      category: "Tech & Dev",
      author: "UI/UX Guild",
      date: "June 30, 2026",
      readTime: "4 min read",
      snippet: "Explore how subtle scroll reveals, hover parallax effects, and smooth spring physics enhance user engagement without sacrificing site speed.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Conversion-Focused Video Production: From 15-Second Reels to Brand Documentaries",
      category: "Branding",
      author: "Media Production Team",
      date: "June 22, 2026",
      readTime: "6 min read",
      snippet: "How to structure video scripts, visual hooks, and audio design to capture audience attention in the first 3 seconds.",
      img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page-wrapper">
      {/* Blog Hero Header */}
      <section className="blog-hero-section">
        <div className="section-container text-center">
          <h1 className="blog-hero-h1">
            Perspectives on Design, <span className="purple-gold-gradient-text">Technology & Growth</span>
          </h1>

          <p className="blog-hero-p">
            Articles, guides, and strategic breakdowns from Digiworq’s team of creative directors, engineers, and digital growth strategists.
          </p>

          {/* Search Bar */}
          <div className="blog-search-box-wrap">
            <Search size={18} className="search-icon-gold" />
            <input 
              type="text" 
              placeholder="Search articles on AI, branding, growth marketing..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="blog-categories-pills-row">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Main Post (Show if category is All and no search) */}
      {activeCategory === 'All' && !searchQuery && (
        <section className="blog-featured-section">
          <div className="section-container">
            <div className="featured-post-card">
              <div className="featured-img-col">
                <img src={blogPosts[0].img} alt={blogPosts[0].title} className="featured-post-img" />
                <span className="featured-cat-tag">{blogPosts[0].category}</span>
              </div>

              <div className="featured-content-col">
                <div className="post-meta-row">
                  <span><Calendar size={13} /> {blogPosts[0].date}</span>
                  <span><Clock size={13} /> {blogPosts[0].readTime}</span>
                  <span><User size={13} /> {blogPosts[0].author}</span>
                </div>

                <h2 className="featured-post-title">{blogPosts[0].title}</h2>
                <p className="featured-post-snippet">{blogPosts[0].snippet}</p>

                <button className="read-article-btn" onClick={onOpenContact}>
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Articles Grid */}
      <section className="blog-grid-section">
        <div className="section-container">
          <div className="blog-posts-grid">
            {filteredPosts.map((post) => (
              <div key={post.id} className="blog-card-item">
                <div className="blog-card-img-wrap">
                  <img src={post.img} alt={post.title} className="blog-card-img" />
                  <span className="blog-card-cat-badge">{post.category}</span>
                </div>

                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span><Calendar size={12} /> {post.date}</span>
                    <span><Clock size={12} /> {post.readTime}</span>
                  </div>

                  <h3 className="blog-card-h3">{post.title}</h3>
                  <p className="blog-card-p">{post.snippet}</p>

                  <div className="blog-card-footer">
                    <span className="blog-author-name">By {post.author}</span>
                    <button className="read-link-btn" onClick={onOpenContact}>
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Box */}
      <section className="blog-newsletter-section">
        <div className="section-container text-center">
          <div className="newsletter-glass-box">
            <h2>Stay Ahead of the Digital Curve</h2>
            <p>Subscribe to Digiworq’s weekly digest for actionable marketing frameworks and tech insights.</p>
            
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }}>
              <input type="email" placeholder="Enter your business email..." required className="newsletter-input" />
              <button type="submit" className="marketeam-primary-btn">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
