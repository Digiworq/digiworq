export const allCategoriesData = {
  creative: {
    categoryTitle: "Creative Services",
    heroTitle: "Creative Design & Branding Solutions",
    heroSubtext: "Developing unique business identity, eye-catching packaging, modern UI/UX, and visual storytelling solutions.",
    services: [
      {
        id: "branding-solutions",
        title: "Branding Solutions",
        tagline: "Enhance Brand Identity & Build Trust",
        badge: "FEATURED",
        icon: "Palette",
        overview: "Branding is the soul of your business. Digiworq crafts compelling brand identities that stand out in crowded markets. From iconic logo creation and brand strategy to complete brand guidelines and color systems.",
        deliverables: [
          "Custom Logo Mark & Logotype Design",
          "Comprehensive Brand Guidelines Manual",
          "Color Palette & Typography System",
          "Corporate Identity (Visiting Cards, Letterheads)",
          "Brand Voice & Messaging Framework"
        ],
        process: [
          { step: "01", title: "Discovery", desc: "Understanding brand mission and market position." },
          { step: "02", title: "Exploration", desc: "Crafting logo concepts and visual directions." },
          { step: "03", title: "Refinement", desc: "Polishing geometry, fonts, and colors." },
          { step: "04", title: "Delivery", desc: "Supplying production-ready vector assets." }
        ],
        faqs: [
          { q: "What is included in a complete branding package?", a: "Includes logo variants, color palette, typography specs, brand style guide, and digital assets." }
        ]
      },
      {
        id: "package-designing",
        title: "Package Designing",
        tagline: "Eye-Catching Packaging That Sells On Shelves",
        icon: "Box",
        overview: "Product packaging is your product's first impression. We create high-impact packaging designs for retail shelves and e-commerce unboxing experiences.",
        deliverables: [
          "Custom Box, Bottle & Label Designs",
          "Die-Cut Dieline Creation & Print Files",
          "Photorealistic 3D Packaging Mockups",
          "Barcode & Regulatory Placement"
        ],
        process: [
          { step: "01", title: "Dieline Setup", desc: "Setting up exact box dimensions." },
          { step: "02", title: "Concepts", desc: "Developing visual shelf appeal." },
          { step: "03", title: "3D Rendering", desc: "Generating photorealistic 3D renders." },
          { step: "04", title: "Print Handoff", desc: "Delivering CMYK print-ready files." }
        ],
        faqs: [
          { q: "Do you supply print-ready dieline files?", a: "Yes, fully vector AI/PDF files ready for offset and flexo printing." }
        ]
      },
      {
        id: "graphic-designing",
        title: "Graphic Designing",
        tagline: "High Quality Visual Communications",
        icon: "PenTool",
        overview: "Communicating your message clearly and beautifully. Digiworq delivers top-tier graphic design services for marketing collateral, digital banners, brochures, and posters.",
        deliverables: [
          "Marketing Brochures & Flyers",
          "Event Banners & Standees",
          "Digital Banner Ads",
          "Annual Reports & Newsletters"
        ],
        process: [
          { step: "01", title: "Briefing", desc: "Aligning on campaign goals." },
          { step: "02", title: "Drafting", desc: "Developing layout hierarchy." },
          { step: "03", title: "Refining", desc: "Polishing visual balance." },
          { step: "04", title: "Export", desc: "Delivering print and web files." }
        ]
      },
      {
        id: "ui-ux-design",
        title: "UI-UX Design",
        tagline: "User-Friendly, Conversion-Driven Interfaces",
        icon: "Layout",
        overview: "Frictionless digital experiences for websites and web apps. We combine user research, wireframing, interactive prototyping, and design systems.",
        deliverables: [
          "User Journey Wireframing",
          "Interactive Figma Prototypes",
          "Design Systems & Component Libraries",
          "Responsive Layout Specs"
        ],
        process: [
          { step: "01", title: "Research", desc: "Analyzing user behavior and goals." },
          { step: "02", title: "Wireframes", desc: "Building structural flows." },
          { step: "03", title: "Prototypes", desc: "Creating interactive Figma screens." },
          { step: "04", title: "Handoff", desc: "Exporting tokens for developers." }
        ]
      },
      {
        id: "mobile-app-design",
        title: "Mobile App Design",
        tagline: "Modern App Interfaces for iOS & Android",
        icon: "Smartphone",
        overview: "Native-feeling mobile app interfaces focusing on touch ergonomics, smooth gestures, and clear visual hierarchy.",
        deliverables: ["iOS & Android Mobile Screens", "Onboarding Screens", "Dark & Light Mode Variants", "App Icon Design"],
        process: [{ step: "01", title: "Flows", desc: "Structuring navigation." }, { step: "02", title: "Design", desc: "Pixel-perfect screens." }, { step: "03", title: "Proto", desc: "Gesture testing." }, { step: "04", title: "Asset Export", desc: "Packaging for Xcode/Android." }]
      },
      {
        id: "ppt-design",
        title: "PPT Design",
        tagline: "Engaging Presentations That Win Pitch Deck Meetings",
        icon: "Presentation",
        overview: "Turn boring slide decks into powerful visual presentations. We design investor pitch decks, sales presentations, and conference keynotes.",
        deliverables: ["Investor Pitch Decks", "Sales Slide Decks", "Custom Editable PPTX Templates", "Data Infographics"],
        process: [{ step: "01", title: "Audit", desc: "Structuring text into visual points." }, { step: "02", title: "Theme", desc: "Creating master layouts." }, { step: "03", title: "Graphics", desc: "Adding charts and icons." }, { step: "04", title: "Handoff", desc: "Delivering editable PPTX files." }]
      },
      {
        id: "brand-consultation",
        title: "Brand Consultation",
        tagline: "Expert Strategic Guidance For Market Dominance",
        icon: "Users",
        overview: "Strategic advice on brand positioning, audience segmentation, competitive differentiation, and long-term brand equity.",
        deliverables: ["1-on-1 Strategy Sessions", "Competitor Audit", "Target Persona Definition", "Brand Positioning Deck"],
        process: [{ step: "01", title: "Audit", desc: "Evaluating current brand equity." }, { step: "02", title: "Research", desc: "Competitor positioning gaps." }, { step: "03", title: "Deck", desc: "Formulating messaging pillars." }, { step: "04", title: "Action Plan", desc: "Guiding design execution." }]
      },
      {
        id: "infographic-design",
        title: "Infographic Design",
        tagline: "Visual Storytelling That Simplifies Complex Data",
        icon: "PieChart",
        overview: "Transforming complex statistics and research reports into stunning visual infographics that get shared across social media and blogs.",
        deliverables: ["Vector Data Infographics", "Social Media Carousels", "Process Flowcharts", "Whitepaper Illustrations"],
        process: [{ step: "01", title: "Distill", desc: "Extracting core metrics." }, { step: "02", title: "Layout", desc: "Designing visual flow." }, { step: "03", title: "Illustrate", desc: "Drawing custom vector charts." }, { step: "04", title: "Export", desc: "Delivering high-res graphics." }]
      },
      {
        id: "social-media-content-creation",
        title: "Social Media Content Creation",
        tagline: "Engaging Visual Posts & Reels That Drive Virality",
        icon: "Share2",
        overview: "High-converting visual posts, Instagram reel graphics, carousel slides, and banner ads that increase brand engagement.",
        deliverables: ["Instagram & FB Post Graphics", "LinkedIn Carousel Slides", "YouTube Thumbnails", "Story Templates"],
        process: [{ step: "01", title: "Calendar", desc: "Planning thematic topics." }, { step: "02", title: "Design", desc: "Creating thumb-stopping posts." }, { step: "03", title: "Copy", desc: "Pairing graphics with captions." }, { step: "04", title: "Handoff", desc: "Delivering monthly packs." }]
      },
      {
        id: "illustrations-and-recreation-services",
        title: "Illustrations and Recreation",
        tagline: "Custom Artwork & Vector Logo Recreation",
        icon: "Brush",
        overview: "Custom 2D vector illustrations, character art, and converting pixelated raster logos into crisp infinite-scale vector files.",
        deliverables: ["2D Digital Vector Art", "Logo Vector Redraw", "Web & App Hero Art", "Character Mascot Design"],
        process: [{ step: "01", title: "Sketch", desc: "Hand-sketching composition." }, { step: "02", title: "Vectorize", desc: "Tracing in Illustrator." }, { step: "03", title: "Color", desc: "Applying brand palettes." }, { step: "04", title: "Handoff", desc: "Supplying SVG/AI files." }]
      },
      {
        id: "rebranding",
        title: "Rebranding",
        tagline: "Refresh Your Brand For Modern Market Leadership",
        icon: "RefreshCw",
        overview: "Modernizing legacy brands to connect with today's digital consumer. We overhaul visual identity and manage smooth brand transitions.",
        deliverables: ["Rebranding Strategy", "Modernized Logo Redesign", "Collateral Overhaul", "Launch Announcement Kit"],
        process: [{ step: "01", title: "Audit", desc: "Evaluating legacy brand perception." }, { step: "02", title: "Reposition", desc: "Crafting modern identity." }, { step: "03", title: "Update", desc: "Redesigning assets." }, { step: "04", title: "Launch", desc: "Executing rebrand campaign." }]
      }
    ]
  },
  technology: {
    categoryTitle: "Technology Services",
    heroTitle: "Scalable Web Development & Custom Software",
    heroSubtext: "Building high-performance websites, custom web applications, e-commerce stores, and AI-powered digital solutions.",
    services: [
      {
        id: "website-development",
        title: "Website Development",
        tagline: "Custom, Responsive & High-Performance Websites",
        badge: "POPULAR",
        icon: "Monitor",
        overview: "Digiworq is a premier website development company in Bangalore. We build high-speed, SEO-optimized, custom responsive websites tailored for business growth.",
        deliverables: ["Custom Frontend & Backend Architecture", "Responsive Layout for All Screens", "SEO Schema & Fast Speed Optimization", "Content Management System (CMS)"],
        process: [{ step: "01", title: "Architecture", desc: "Planning sitemap and tech stack." }, { step: "02", title: "Frontend", desc: "Building responsive UI." }, { step: "03", title: "Integration", desc: "Connecting CMS and APIs." }, { step: "04", title: "Launch", desc: "QA testing and deployment." }],
        faqs: [{ q: "What tech stack do you use for website development?", a: "We use React, Next.js, Node.js, PHP, WordPress, and custom modern frameworks." }]
      },
      {
        id: "app-development",
        title: "App Development",
        tagline: "Native & Cross-Platform Mobile Applications",
        icon: "Smartphone",
        overview: "Custom mobile app development for iOS and Android. High-performance, secure, and intuitive mobile applications for consumer and enterprise users.",
        deliverables: ["iOS & Android Mobile Apps", "Cross-Platform Flutter/React Native Development", "Backend API Integration", "App Store & Play Store Publishing"],
        process: [{ step: "01", title: "Scope", desc: "Defining feature requirements." }, { step: "02", title: "Development", desc: "Coding frontend and backend." }, { step: "03", title: "Testing", desc: "Security and performance QA." }, { step: "04", title: "Store Launch", desc: "Publishing to App Stores." }]
      },
      {
        id: "e-commerce-website-development",
        title: "E-commerce Website Development",
        tagline: "High-Converting Online Stores & Marketplaces",
        icon: "ShoppingCart",
        overview: "Build powerful online stores with seamless checkout, secure payment gateway integration, inventory management, and fast mobile shopping experiences.",
        deliverables: ["Custom E-commerce Storefronts", "Shopify / WooCommerce / Custom Stacks", "Payment Gateway & Shipping API Integration", "Product Catalog & Order Management"],
        process: [{ step: "01", title: "Store Plan", desc: "Catalog & gateway setup." }, { step: "02", title: "Build", desc: "Designing shopping UI." }, { step: "03", title: "Integrate", desc: "Connecting payment & logistics." }, { step: "04", title: "Go Live", desc: "Order testing & launch." }]
      },
      {
        id: "e-learning-solutions",
        title: "E-Learning Solutions",
        tagline: "Interactive Educational & LMS Platforms",
        icon: "GraduationCap",
        overview: "Custom Learning Management Systems (LMS), online course portals, interactive student dashboards, and video streaming for educational institutes.",
        deliverables: ["Custom LMS Platforms", "Student & Instructor Dashboards", "Course Video Streaming & Quizzes", "Payment & Certification Automation"],
        process: [{ step: "01", title: "Curriculum", desc: "Mapping learning modules." }, { step: "02", title: "LMS Build", desc: "Developing portal architecture." }, { step: "03", title: "Content", desc: "Integrating video & quizzes." }, { step: "04", title: "Deploy", desc: "Onboarding users." }]
      },
      {
        id: "ar-vr-solutions",
        title: "AR-VR Solutions",
        tagline: "Immersive Augmented & Virtual Reality Experiences",
        icon: "Glasses",
        overview: "Cutting-edge AR/VR applications for virtual product try-ons, 360-degree virtual property tours, and immersive industrial training simulations.",
        deliverables: ["AR Product Try-On Apps", "360 Virtual Property Tours", "VR Industrial Training Modules", "WebAR Browser Experiences"],
        process: [{ step: "01", title: "3D Assets", desc: "Modeling 3D environments." }, { step: "02", title: "Engine Build", desc: "Coding Unity/Unreal logic." }, { step: "03", title: "Testing", desc: "VR headset & mobile testing." }, { step: "04", title: "Delivery", desc: "App release." }]
      },
      {
        id: "emailer-design-and-development",
        title: "Emailer Design & Development",
        tagline: "High-Deliverability HTML Email Templates",
        icon: "Mail",
        overview: "Responsive HTML email newsletter templates optimized for all inbox clients (Gmail, Outlook, Apple Mail) to boost open and click-through rates.",
        deliverables: ["Responsive HTML Email Templates", "Mailchimp / Klaviyo / HubSpot Setup", "Spam Score & Client Compatibility Testing", "Dynamic Personalization Tags"],
        process: [{ step: "01", title: "Design", desc: "Visual email layout." }, { step: "02", title: "HTML Code", desc: "Building table-based HTML." }, { step: "03", title: "Litmus Test", desc: "Verifying rendering." }, { step: "04", title: "Handoff", desc: "Loading template to ESP." }]
      },
      {
        id: "software-development",
        title: "Software Development",
        tagline: "Custom Enterprise Software & SaaS Solutions",
        icon: "Code",
        overview: "Tailor-made enterprise software, custom CRM/ERP systems, SaaS platforms, and automated workflow applications designed for your business ops.",
        deliverables: ["Custom SaaS & Enterprise Software", "Cloud Backend & Database Design", "API Development & Integration", "Role-Based Security & Dashboards"],
        process: [{ step: "01", title: "Requirements", desc: "Deep dive into business logic." }, { step: "02", title: "Sprint Build", desc: "Agile module development." }, { step: "03", title: "QA Testing", desc: "Unit & stress testing." }, { step: "04", title: "Deploy", desc: "Cloud infrastructure setup." }]
      },
      {
        id: "artificial-intelligence",
        title: "Artificial Intelligence",
        tagline: "AI-Powered Automation & Smart Applications",
        badge: "NEW",
        icon: "Cpu",
        overview: "Integrate LLM AI chatbots, automated data processing models, predictive analytics, and AI workflow automation to streamline customer service and ops.",
        deliverables: ["Custom AI Chatbots & Customer Assistants", "Generative AI API Integration", "Automated Data Extraction Models", "Predictive Analytics Dashboards"],
        process: [{ step: "01", title: "AI Audit", desc: "Identifying automation targets." }, { step: "02", title: "Fine-Tuning", desc: "Configuring AI models." }, { step: "03", title: "Integration", desc: "Embedding into app flows." }, { step: "04", title: "Monitor", desc: "Accuracy tuning." }]
      }
    ]
  },
  "video-production": {
    categoryTitle: "Video Production Services",
    heroTitle: "Cinematic Video Production & Ad Films",
    heroSubtext: "High-end commercial shoots, corporate videos, ad films, and podcast production in Bangalore.",
    services: [
      {
        id: "corporate-videos",
        title: "Corporate Videos",
        tagline: "Showcase Your Brand & Enterprise Excellence",
        icon: "Video",
        overview: "High-definition corporate brand films, executive interviews, company culture videos, and facility walkthroughs that inspire confidence in stakeholders.",
        deliverables: ["Cinematic 4K Corporate Brand Film", "Executive & Client Interview Shoots", "Professional Scripting & Color Grading", "Licensed Background Score & Voiceover"],
        process: [{ step: "01", title: "Pre-Production", desc: "Scriptwriting & storyboarding." }, { step: "02", title: "Production", desc: "On-site 4K camera shoot." }, { step: "03", title: "Post-Production", desc: "Editing, color grading & audio." }, { step: "04", title: "Final Cut", desc: "Delivering master 4K video." }]
      },
      {
        id: "ad-films",
        title: "Commercial Ad Films",
        tagline: "High-Converting Commercials For TV & Digital",
        badge: "POPULAR",
        icon: "Tv",
        overview: "Captivating TV commercials and digital video ads engineered for maximum audience retention and high conversion rates across YouTube, Meta, and TV.",
        deliverables: ["Concept & Storyboard Creation", "Professional Casting & Director Shoot", "VFX & High-End Post-Production", "Multi-Ratio Cuts (16:9, 9:16, 1:1)"],
        process: [{ step: "01", title: "Concept", desc: "Scripting visual hooks." }, { step: "02", title: "Shoot", desc: "Studio set production." }, { step: "03", title: "VFX & Sound", desc: "Adding visual effects." }, { step: "04", title: "Delivery", desc: "Multi-platform export." }]
      },
      {
        id: "podcasts",
        title: "Podcast Production",
        tagline: "Studio Audio & Video Podcast Recording",
        icon: "Mic",
        overview: "Complete multi-camera video podcast production, crystal-clear studio audio recording, multi-track editing, reel clips, and distribution setup.",
        deliverables: ["Multi-Cam Video Podcast Recording", "Studio Audio Mixing & Noise Clean", "Short Viral Reels & Shorts Clips", "YouTube & Spotify Publishing"],
        process: [{ step: "01", title: "Setup", desc: "Studio mic & lighting prep." }, { step: "02", title: "Record", desc: "Live multi-cam session." }, { step: "03", title: "Edit", desc: "Cutting full episode & reels." }, { step: "04", title: "Publish", desc: "Exporting for Spotify/YouTube." }]
      }
    ]
  },
  "digital-marketing": {
    categoryTitle: "Digital Marketing Services",
    heroTitle: "Performance Marketing & Digital Growth",
    heroSubtext: "Data-driven Search Engine Optimization, social ads, lead generation, and performance marketing in Bangalore.",
    services: [
      {
        id: "seo-ranking",
        title: "SEO Ranking",
        tagline: "Dominate Google Page 1 Search Results",
        badge: "FEATURED",
        icon: "Search",
        overview: "Comprehensive Search Engine Optimization (SEO) strategies to rank your website at the top of Google for valuable high-intent search keywords.",
        deliverables: ["Technical SEO Audit & Keyword Research", "On-Page Content & Meta Optimization", "High-Authority Backlink Building", "Google Business Profile Local SEO"],
        process: [{ step: "01", title: "Audit", desc: "Identifying SEO gaps & keywords." }, { step: "02", title: "On-Page", desc: "Optimizing content & technical speed." }, { step: "03", title: "Off-Page", desc: "Building high-quality authority links." }, { step: "04", title: "Report", desc: "Monthly ranking & traffic reports." }]
      },
      {
        id: "social-ads",
        title: "Social Ads",
        tagline: "High-ROI Paid Campaigns on Meta & LinkedIn",
        icon: "Target",
        overview: "Targeted advertising campaigns on Facebook, Instagram, LinkedIn, and YouTube engineered to acquire customers at low acquisition costs.",
        deliverables: ["Audience Targeting & Funnel Strategy", "Ad Creative & Video Design", "A/B Testing & Bid Optimization", "Conversion Tracking & Pixel Setup"],
        process: [{ step: "01", title: "Funnel Setup", desc: "Building ad audiences." }, { step: "02", title: "Creatives", desc: "Designing ad banners & videos." }, { step: "03", title: "Launch", desc: "Running & bidding optimization." }, { step: "04", title: "Scale", desc: "Scaling high-performing ads." }]
      },
      {
        id: "lead-gen",
        title: "Lead Generation",
        tagline: "Qualified High-Intent B2B & B2C Leads",
        icon: "TrendingUp",
        overview: "End-to-end lead generation pipelines driving verified inbound inquiries for sales teams in real estate, education, healthcare, and B2B services.",
        deliverables: ["High-Converting Landing Pages", "Lead Magnet & Form Integration", "CRM Lead Sync & Automation", "Verified Contact Inquiries"],
        process: [{ step: "01", title: "Landing Page", desc: "Building offer page." }, { step: "02", title: "Traffic", desc: "Driving targeted ad clicks." }, { step: "03", title: "Capture", desc: "Capturing lead info." }, { step: "04", title: "Deliver", desc: "Pushing leads to client CRM." }]
      }
    ]
  },
  "2d-animation": {
    categoryTitle: "2D Animation Services",
    heroTitle: "Custom 2D Animation & Motion Graphics",
    heroSubtext: "Engaging character animations, motion graphics, and animated commercial videos that tell your brand story.",
    services: [
      {
        id: "character-animation",
        title: "Character Animation",
        tagline: "Custom Animated Characters & Storytelling",
        badge: "FEATURED",
        icon: "Film",
        overview: "Transform complex ideas into friendly, memorable animated stories with custom 2D characters and hand-drawn expressions.",
        deliverables: ["Custom Character Rigging", "Storyboarding & Animatic", "2D Animated Commercials", "Multi-Resolution Exports"],
        process: [{ step: "01", title: "Character Design", desc: "Crafting original character turnarounds." }, { step: "02", title: "Storyboard", desc: "Mapping visual scenes & audio." }, { step: "03", title: "Animation", desc: "Keyframe & motion rigging." }, { step: "04", title: "Export", desc: "Delivering broadcast files." }],
        faqs: [{ q: "What formats do you provide?", a: "We provide 4K MP4, MOV, WebM, and Lottie animations." }]
      },
      {
        id: "motion-graphics",
        title: "Motion Graphics",
        tagline: "Dynamic Visual Effects & Animated Titles",
        icon: "Zap",
        overview: "Eye-catching kinetic typography, animated logo stings, infographic motion, and sleek UI animations for video productions.",
        deliverables: ["Animated Logo Ident", "Kinetic Typography Videos", "UI/UX Micro-Animations", "Explainer Graphic Overlays"],
        process: [{ step: "01", title: "Styleframe", desc: "Designing visual keyframes." }, { step: "02", title: "Motion", desc: "Animating shapes & text." }, { step: "03", title: "Sound", desc: "Pairing SFX & music." }, { step: "04", title: "Delivery", desc: "Exporting video files." }]
      }
    ]
  },
  "3d-animation": {
    categoryTitle: "3D Animation Services",
    heroTitle: "Photorealistic 3D Renders & VFX",
    heroSubtext: "3D product modeling, architectural walkthroughs, industrial simulations, and high-impact VFX.",
    services: [
      {
        id: "3d-product-modeling",
        title: "3D Product Modeling",
        tagline: "Photorealistic 3D Renders For E-Commerce & Ads",
        badge: "POPULAR",
        icon: "Box",
        overview: "High-detail 3D product renders allowing customers to view your products from every angle before manufacturing.",
        deliverables: ["High-Poly 3D Product CAD Modeling", "Photorealistic Texturing & Lighting", "360 Product Spin Animations", "Studio Quality Render Images"],
        process: [{ step: "01", title: "CAD Import", desc: "Setting up 3D geometry." }, { step: "02", title: "Texturing", desc: "Applying PBR materials." }, { step: "03", title: "Lighting", desc: "Studio light setup." }, { step: "04", title: "Render", desc: "4K raytraced renders." }]
      },
      {
        id: "architectural-walkthrough",
        title: "Architectural Walkthrough",
        tagline: "3D Virtual Property Walkthroughs",
        icon: "Building",
        overview: "Immersive 3D architectural walkthroughs for real estate projects, interior design visualizations, and urban developments.",
        deliverables: ["3D Exterior & Interior Walkthrough", "Photorealistic Material Shading", "Cinematic Drone Flythrough Animation", "Virtual Staging Renders"],
        process: [{ step: "01", title: "Plan Import", desc: "Importing CAD floorplans." }, { step: "02", title: "3D Build", desc: "Building walls & furniture." }, { step: "03", title: "Animation", desc: "Camera flythrough path." }, { step: "04", title: "Final Edit", desc: "Color grading & sound." }]
      }
    ]
  },
  "printing-solutions": {
    categoryTitle: "Printing Solutions",
    heroTitle: "High-Precision Print & Packaging Solutions",
    heroSubtext: "Corporate stationery, large format flex banners, custom merchandise, and rigid packaging boxes.",
    services: [
      {
        id: "corporate-stationery",
        title: "Corporate Stationery",
        tagline: "Premium Business Cards, Letterheads & Folders",
        icon: "Printer",
        overview: "High-quality print marketing materials crafted on premium paper stocks with foil stamping, spot UV, and custom embossing.",
        deliverables: ["Luxury Business Cards with Spot UV", "Executive Letterheads & Envelopes", "Corporate Presentation Folders", "Custom Lanyards & ID Cards"],
        process: [{ step: "01", title: "Proofing", desc: "Checking CMYK print proofs." }, { step: "02", title: "Stock Select", desc: "Choosing paper GSM & finishes." }, { step: "03", title: "Printing", desc: "Offset & digital press run." }, { step: "04", title: "Dispatch", desc: "Delivering to your office." }]
      },
      {
        id: "flex-banners",
        title: "Flex Banners & Signage",
        tagline: "Large-Format Outdoor Banners & LED Boards",
        icon: "Maximize",
        overview: "High-durability outdoor flex banners, glow signboards, vinyl wall graphics, and exhibition booth displays.",
        deliverables: ["Heavy Duty Vinyl Flex Banners", "3D Acrylic & LED Letter Signboards", "Exhibition Standee Banners", "Custom Vehicle Wraps"],
        process: [{ step: "01", title: "Measure", desc: "Site measurement & specs." }, { step: "02", title: "Print", desc: "Large format UV printing." }, { step: "03", title: "Frame", desc: "Fabricating metal frames." }, { step: "04", title: "Install", desc: "On-site mounting." }]
      }
    ]
  },
  photography: {
    categoryTitle: "Photography Services",
    heroTitle: "Professional E-Commerce & Corporate Photography",
    heroSubtext: "Studio product shoots, corporate headshots, fashion portfolios, and commercial event coverage.",
    services: [
      {
        id: "ecommerce-product-photography",
        title: "E-Commerce Product Photography",
        tagline: "High-Resolution Amazon & Shopify Product Shoots",
        badge: "POPULAR",
        icon: "Camera",
        overview: "Studio product photography on pure white backgrounds and creative lifestyle staging tailored for online selling.",
        deliverables: ["Pure White Background Product Photos", "Creative Lifestyle Props Shooting", "High-End Skin & Reflection Retouching", "Amazon & Flipkart Ready Exports"],
        process: [{ step: "01", title: "Product Prep", desc: "Cleaning & styling products." }, { step: "02", title: "Studio Shoot", desc: "High-res strobe camera shoot." }, { step: "03", title: "Retouching", desc: "Clipping path & color correction." }, { step: "04", title: "Export", desc: "Delivering web-optimized files." }]
      },
      {
        id: "corporate-headshots",
        title: "Corporate Headshots",
        tagline: "Executive Portraits For Teams & Leadership",
        icon: "UserCheck",
        overview: "On-location mobile studio setup to capture professional executive headshots for team pages, LinkedIn profiles, and PR.",
        deliverables: ["On-Location Studio Setup", "Individual Retouched Portraits", "Team Group Photographs", "High-Res Digital Files"],
        process: [{ step: "01", title: "Lighting", desc: "Setting up softbox lights." }, { step: "02", title: "Portrait Shoot", desc: "Posing guidance & capture." }, { step: "03", title: "Selection", desc: "Client proof selection." }, { step: "04", title: "Retouch", desc: "Final retouching & delivery." }]
      }
    ]
  },
  videography: {
    categoryTitle: "Videography Services",
    heroTitle: "4K Cinematic Videography & Drone Filming",
    heroSubtext: "4K aerial drone videography, live multi-camera event streaming, and industrial site coverage.",
    services: [
      {
        id: "drone-videography",
        title: "4K Drone Videography",
        tagline: "Cinematic Aerial Drone Coverage",
        badge: "FEATURED",
        icon: "Video",
        overview: "Licensed 4K aerial drone videography for real estate developments, industrial plants, events, and tourism campaigns.",
        deliverables: ["4K 60fps Aerial Video Footage", "Licensed Drone Pilot Operation", "Color Graded Master Clips", "Dynamic Camera Motion Passes"],
        process: [{ step: "01", title: "Permits", desc: "Flight path & airspace check." }, { step: "02", title: "Flight", desc: "4K aerial video capture." }, { step: "03", title: "Grading", desc: "Color grading & stabilization." }, { step: "04", title: "Handoff", desc: "Delivering 4K video files." }]
      },
      {
        id: "live-streaming",
        title: "Live Multi-Cam Streaming",
        tagline: "Broadcast Quality Live Streaming For Events",
        icon: "Radio",
        overview: "Broadcast-quality multi-camera live streaming for corporate AGMs, product launches, conferences, and weddings.",
        deliverables: ["Multi-Camera Live Video Switcher", "Crisp Direct Audio Feed Integration", "YouTube & Facebook Live Stream", "Full Recording Backup"],
        process: [{ step: "01", title: "Rigging", desc: "Connecting cameras & switcher." }, { step: "02", title: "Test", desc: "Bandwidth & audio check." }, { step: "03", title: "Broadcast", desc: "Live event switching." }, { step: "04", title: "Archive", desc: "Delivering full event video." }]
      }
    ]
  }
};

