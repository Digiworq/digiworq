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
    heroSubtext: "Engaging 2D architectural visualizations, motion graphics, and logo animations that bring your ideas to life.",
    services: [
      {
        id: "2d-architecture-animation",
        title: "2D Architecture Animation",
        tagline: "Visualize Architecture & Spatial Plans",
        badge: "FEATURED",
        icon: "Building",
        overview: "Detailed 2D architectural animation and floorplan walkthroughs that illustrate architectural designs, building layouts, and spatial masterplans.",
        deliverables: ["2D Floorplan Motion Walkthroughs", "Architectural Blueprint Animations", "Elevation & Site Plan Motion", "Broadcast Quality 4K Exports"],
        process: [{ step: "01", title: "CAD Import", desc: "Setting up vector floorplans." }, { step: "02", title: "Motion Plan", desc: "Animating camera paths & layers." }, { step: "03", title: "Texturing", desc: "Adding vector materials & lighting." }, { step: "04", title: "Export", desc: "Delivering high-res video files." }],
        faqs: [{ q: "Do you accept CAD or DWG floorplan files?", a: "Yes, we support DWG, DXF, AI, and PDF architectural blueprints." }]
      },
      {
        id: "2d-motion-graphics",
        title: "2D Motion Graphics",
        tagline: "Animated Motion Graphics For Marketing & Apps",
        badge: "POPULAR",
        icon: "Zap",
        overview: "Dynamic motion graphics, kinetic typography, animated infographic overlays, and sleek UI animations for video ads and mobile applications.",
        deliverables: ["Kinetic Typography Ads", "Animated Explainer Graphics", "UI/UX Micro-Animations", "Social Media Motion Banners"],
        process: [{ step: "01", title: "Styleframes", desc: "Designing visual keyframes." }, { step: "02", title: "Animation", desc: "Rigging vectors & easing motion." }, { step: "03", title: "Audio Sync", desc: "Mixing voiceover & SFX." }, { step: "04", title: "Delivery", desc: "Exporting MP4 & Lottie files." }]
      },
      {
        id: "2d-logo-animation",
        title: "2D Logo Animation",
        tagline: "Eye-Catching Animated Logo Stings",
        icon: "Film",
        overview: "Transform your static logo into a memorable 2D animated sting for video intros, YouTube channels, presentations, and digital ads.",
        deliverables: ["Custom 2D Vector Logo Animation", "Transparent Alpha Channel Files", "Sound Effect (SFX) Design", "4K Video & GIF Formats"],
        process: [{ step: "01", title: "Vector Prep", desc: "Separating logo layers." }, { step: "02", title: "Concepting", desc: "Drafting motion directions." }, { step: "03", title: "Animation", desc: "Crafting fluid entrance motion." }, { step: "04", title: "Handoff", desc: "Delivering transparent MOV & MP4." }]
      }
    ]
  },
  "3d-animation": {
    categoryTitle: "3D Animation Services",
    heroTitle: "Photorealistic 3D Animation & VFX",
    heroSubtext: "3D architectural visualizations, dynamic 3D motion graphics, and photorealistic 3D logo animations.",
    services: [
      {
        id: "3d-architecture-animation",
        title: "3D Architecture Animation",
        tagline: "Photorealistic 3D Architectural Visualizations",
        badge: "POPULAR",
        icon: "Building",
        overview: "Immersive 3D architectural walkthroughs, exterior property renderings, interior flythroughs, and urban real estate visualizations.",
        deliverables: ["3D Exterior & Interior Walkthrough", "PBR Material Shading & Sunlight Simulation", "Drone Flythrough Integration", "4K Raytraced Video Renders"],
        process: [{ step: "01", title: "Modeling", desc: "Building 3D CAD geometry." }, { step: "02", title: "Materials", desc: "Applying realistic textures." }, { step: "03", title: "Lighting", desc: "Simulating natural sun & lights." }, { step: "04", title: "Rendering", desc: "Generating 4K animation frames." }]
      },
      {
        id: "3d-motion-graphics",
        title: "3D Motion Graphics",
        tagline: "Dynamic 3D Graphics & Visual Effects",
        badge: "FEATURED",
        icon: "Box",
        overview: "High-impact 3D motion graphics, particle simulations, product hero shots, and abstract 3D artwork for commercials and tech launches.",
        deliverables: ["High-Poly 3D Motion Graphics", "Particle & Physics Simulations", "Broadcast Commercial Sequences", "Studio Lighting Renders"],
        process: [{ step: "01", title: "Storyboard", desc: "Mapping camera motion." }, { step: "02", title: "3D Rigging", desc: "Animating objects & cameras." }, { step: "03", title: "VFX Pass", desc: "Adding simulations & depth." }, { step: "04", title: "Final Edit", desc: "Color grading & sound design." }]
      },
      {
        id: "3d-logo-animation",
        title: "3D Logo Animation",
        tagline: "Cinematic 3D Logo Animations",
        icon: "Sparkles",
        overview: "Elevate your brand with metallic, glass, or neon 3D animated logos featuring cinematic lighting, reflections, and camera sweeps.",
        deliverables: ["Photorealistic 3D Logo Modeling", "Metallic & Glass PBR Materials", "Cinematic Camera Sweep Animations", "Ultra HD 4K Render Files"],
        process: [{ step: "01", title: "3D Extrusion", desc: "Converting 2D logo to 3D mesh." }, { step: "02", title: "Texturing", desc: "Applying metallic/glass shaders." }, { step: "03", title: "Lighting", desc: "Studio HDRI light setup." }, { step: "04", title: "Render", desc: "Exporting 4K MP4 & MOV files." }]
      }
    ]
  },
  "printing-solutions": {
    categoryTitle: "Printing Solutions",
    heroTitle: "High-Precision Print & Packaging Solutions",
    heroSubtext: "From digital and offset printing to luxury foil stamping, embossed packaging, and custom vehicle wraps.",
    services: [
      {
        id: "digital-printing",
        title: "Digital Printing",
        tagline: "Fast & Precise Short-Run Printing",
        badge: "POPULAR",
        icon: "Printer",
        overview: "High-speed, crisp digital printing for marketing collateral, brochures, flyers, posters, and business cards with fast turnaround times.",
        deliverables: ["High-Res Digital Color Printing", "Custom Paper GSM Selection", "Variable Data & Personalization", "Same-Day / Next-Day Delivery"],
        process: [{ step: "01", title: "Pre-Press", desc: "Checking file resolution & CMYK." }, { step: "02", title: "Proofing", desc: "Generating digital print proof." }, { step: "03", title: "Press Run", desc: "High-speed digital printing." }, { step: "04", title: "Trim", desc: "Precision cutting & packing." }]
      },
      {
        id: "offset-printing",
        title: "Offset Printing",
        tagline: "High-Volume Commercial Printing",
        icon: "Layers",
        overview: "Cost-effective, razor-sharp offset printing for high-volume catalogs, magazines, annual reports, corporate brochures, and packaging.",
        deliverables: ["Large Volume Catalog Printing", "Pantone Matching System (PMS)", "Specialty Coated Finishes", "Bulk Volume Price Savings"],
        process: [{ step: "01", title: "Plate Making", desc: "Exposing CTP metal plates." }, { step: "02", title: "Color Match", desc: "Calibrating Pantone inks." }, { step: "03", title: "Press Run", desc: "High-volume sheetfed printing." }, { step: "04", title: "Finishing", desc: "Folding, binding & packing." }]
      },
      {
        id: "screen-printing",
        title: "Screen Printing",
        tagline: "Custom Apparel & Specialty Screen Printing",
        icon: "Palette",
        overview: "Durable custom screen printing for corporate t-shirts, hoodies, tote bags, acrylic boards, metal signs, and specialty merchandise.",
        deliverables: ["Custom Apparel Screen Prints", "Plastisol & Water-Based Inks", "Precision Multi-Color Registration", "Long-Lasting Wash Durability"],
        process: [{ step: "01", title: "Screen Burn", desc: "Preparing mesh stencils." }, { step: "02", title: "Ink Mixing", desc: "Matching brand Pantone colors." }, { step: "03", title: "Print Pass", desc: "Squeegee ink application." }, { step: "04", title: "Cure", desc: "Heat curing for wash fastness." }]
      },
      {
        id: "large-format-printing",
        title: "Large Format Printing",
        tagline: "Large-Scale Banners, Posters & Standees",
        icon: "Maximize",
        overview: "Heavy-duty large format UV and eco-solvent printing for billboards, exhibition backdrops, roll-up standees, and outdoor flex banners.",
        deliverables: ["Heavy Duty Vinyl Flex Banners", "Roll-Up Exhibition Standees", "Self-Adhesive Vinyl Graphics", "Weatherproof Outdoor Inks"],
        process: [{ step: "01", title: "File Scaling", desc: "Preparing ultra high-res files." }, { step: "02", title: "UV Printing", desc: "Wide-format eco-solvent printing." }, { step: "03", title: "Hemming", desc: "Adding eyelets & reinforced borders." }, { step: "04", title: "Dispatch", desc: "Delivery to site." }]
      },
      {
        id: "embossing-and-debossing",
        title: "Embossing & Debossing",
        tagline: "Textured & Tactile Premium Printing",
        icon: "FileText",
        overview: "Add touchable luxury to business cards, presentation folders, certificates, and packaging boxes with raised (embossed) or recessed (debossed) textures.",
        deliverables: ["Custom Brass & Copper Dies", "Blind Embossing & Foil Combinations", "Premium Heavyweight Cardstock", "3D Tactile Texture Finishes"],
        process: [{ step: "01", title: "Die Craft", desc: "Engraving custom metal die." }, { step: "02", title: "Paper Setup", desc: "Selecting high-density paper." }, { step: "03", title: "Pressing", desc: "Applying heat & pressure." }, { step: "04", title: "Inspection", desc: "Quality checking depth." }]
      },
      {
        id: "letterpress-printing",
        title: "Letterpress Printing",
        tagline: "Traditional Craftsmanship & Deep Impressions",
        icon: "Printer",
        overview: "Handcrafted heirloom-quality letterpress printing on cotton paper for luxury wedding invitations, high-end business cards, and boutique stationery.",
        deliverables: ["Deep Tactile Letterpress Impressions", "100% Cotton Fiber Paper Stocks", "Hand-Mixed Custom Pantone Inks", "Handcrafted Craftsmanship"],
        process: [{ step: "01", title: "Photopolymer", desc: "Exposing relief plates." }, { step: "02", title: "Ink Mix", desc: "Hand-blending custom ink." }, { step: "03", title: "Vintage Press", desc: "Hand-feeding paper into press." }, { step: "04", title: "Packing", desc: "Hand-inspecting every piece." }]
      },
      {
        id: "die-cutting",
        title: "Die Cutting",
        tagline: "Custom Shapes & Intricate Box Cuts",
        icon: "Scissors",
        overview: "Custom steel-rule die cutting for unique shaped business cards, stickers, pocket folders, retail packaging boxes, and hang tags.",
        deliverables: ["Custom Steel Rule Dieline Cutting", "Intricate Cutout Shapes & Windows", "Clean Creasing & Perforations", "Custom Product Hang Tags"],
        process: [{ step: "01", title: "Dieline", desc: "Creating CAD cut lines." }, { step: "02", title: "Blade Craft", desc: "Fabricating steel die blade." }, { step: "03", title: "Die Press", desc: "Stamping paper sheets." }, { step: "04", title: "Stripping", desc: "Removing waste edges." }]
      },
      {
        id: "uv-printing",
        title: "UV Printing",
        tagline: "Durable, Instant-Cured Spot UV Prints",
        icon: "Sparkles",
        overview: "High-gloss Spot UV coating and direct-to-substrate UV printing on acrylic, wood, metal, glass, plastic, and heavy cardstock.",
        deliverables: ["Spot Gloss & Matte Contrast Finishes", "Direct-to-Object Flatbed UV Printing", "Scratch-Resistant & Waterproof Inks", "Vibrant 3D Raised Ink Details"],
        process: [{ step: "01", title: "Mask Setup", desc: "Creating Spot UV vector mask." }, { step: "02", title: "Varnish Pass", desc: "Applying liquid UV polymer." }, { step: "03", title: "UV Curing", desc: "Instant UV lamp curing." }, { step: "04", title: "QA Check", desc: "Verifying gloss sheen." }]
      },
      {
        id: "foil-stamping",
        title: "Foil Stamping",
        tagline: "Metallic Gold, Silver & Copper Finishes",
        icon: "Award",
        overview: "Luxurious hot foil stamping in shiny gold, silver, rose gold, copper, or holographic foil to make logos and titles shine with elegance.",
        deliverables: ["Hot Foil Stamping Dies", "Metallic Gold, Silver & Custom Foils", "Holographic & Matte Foil Options", "Luxury Packaging Details"],
        process: [{ step: "01", title: "Metal Die", desc: "Making heated metal stamp." }, { step: "02", title: "Foil Roll", desc: "Feeding metallic foil film." }, { step: "03", title: "Heat Press", desc: "Bonding foil to paper." }, { step: "04", title: "Inspect", desc: "Checking foil adhesion." }]
      },
      {
        id: "binding-and-finishing",
        title: "Binding & Finishing",
        tagline: "Professional Book & Brochure Finishing",
        icon: "CheckCircle2",
        overview: "Complete post-press binding and finishing services including perfect binding, saddle stitching, wiro binding, laminating, and folding.",
        deliverables: ["Hardcover & Softcover Perfect Binding", "Saddle Stitched Booklet Binding", "Gloss, Matte & Soft-Touch Lamination", "Custom Folding & Creasing"],
        process: [{ step: "01", title: "Collating", desc: "Sorting printed signatures." }, { step: "02", title: "Binding", desc: "Gluing or stitching pages." }, { step: "03", title: "Lamination", desc: "Applying protective film." }, { step: "04", title: "Trim", desc: "3-side book trimming." }]
      },
      {
        id: "vehicle-wraps",
        title: "Vehicle Wraps",
        tagline: "Custom Commercial Vehicle Graphics & Wraps",
        icon: "Maximize",
        overview: "Turn your fleet into mobile billboards with high-durability, cast vinyl vehicle wraps, door decals, and full fleet branding.",
        deliverables: ["Full & Partial Vehicle Wraps", "3M / Avery Dennison Cast Vinyl", "UV Laminated Weatherproof Inks", "Professional On-Site Installation"],
        process: [{ step: "01", title: "Template", desc: "3D measuring vehicle model." }, { step: "02", title: "Print & Lam", desc: "Printing & laminating vinyl." }, { step: "03", title: "Prep", desc: "Cleaning vehicle surface." }, { step: "04", title: "Wrap", desc: "Heat-gun wrap installation." }]
      }
    ]
  },
  photography: {
    categoryTitle: "Photography Services",
    heroTitle: "Professional E-Commerce & Corporate Photography",
    heroSubtext: "Studio product shoots, event coverage, model shoots, corporate headshots, and real estate photography.",
    services: [
      {
        id: "event-photography",
        title: "Event Photography",
        tagline: "Capture Special Moments & Corporate Conferences",
        badge: "POPULAR",
        icon: "Camera",
        overview: "Professional event photography covering corporate AGMs, product launches, tech summits, trade shows, and social celebrations.",
        deliverables: ["Full Event Coverage", "Color Corrected High-Res Photos", "Same-Day Highlight Selection", "Online Client Cloud Gallery"],
        process: [{ step: "01", title: "Brief", desc: "Reviewing event schedule & key shots." }, { step: "02", title: "Coverage", desc: "Multi-photographer live shoot." }, { step: "03", title: "Selection", desc: "Culling & color editing." }, { step: "04", title: "Delivery", desc: "Delivering digital gallery." }]
      },
      {
        id: "product-photography",
        title: "Product Photography",
        tagline: "Showcase Your Products For E-Commerce & Ads",
        badge: "FEATURED",
        icon: "Box",
        overview: "High-resolution studio product photography on pure white backgrounds and stylized lifestyle sets for Amazon, Shopify, and catalogs.",
        deliverables: ["Pure White Background Product Photos", "Creative Props & Staged Settings", "High-End Skin & Reflection Retouching", "Amazon & Flipkart Compliant Crops"],
        process: [{ step: "01", title: "Prep", desc: "Styling products & lights." }, { step: "02", title: "Shoot", desc: "Multi-angle camera pass." }, { step: "03", title: "Retouch", desc: "Clipping path & shadow creation." }, { step: "04", title: "Export", desc: "Delivering web files." }]
      },
      {
        id: "model-shoots",
        title: "Model Shoots",
        tagline: "Professional Fashion & Apparel Model Photography",
        icon: "Users",
        overview: "Fashion, apparel, and lifestyle model shoots with professional makeup artists, stylists, studio lighting, and high-fashion retouching.",
        deliverables: ["Studio & Outdoor Model Shoots", "Hair, Makeup & Styling Team", "High-End Editorial Retouching", "Lookbook & Catalog Prints"],
        process: [{ step: "01", title: "Casting", desc: "Selecting models & outfits." }, { step: "02", title: "Shoot", desc: "Studio/Location photography." }, { step: "03", title: "Edit", desc: "Skin & color retouching." }, { step: "04", title: "Delivery", desc: "Exporting high-res images." }]
      },
      {
        id: "corporate-headshots-and-team-photography",
        title: "Corporate Headshots & Team Photography",
        tagline: "Professional Corporate Team Photos",
        icon: "UserCheck",
        overview: "On-location mobile studio setup to photograph executive team portraits, leadership headshots, and group photos for websites and PR.",
        deliverables: ["On-Location Mobile Studio Setup", "Retouched Individual Headshots", "Company Group & Team Photos", "Web-Ready & Print Formats"],
        process: [{ step: "01", title: "Setup", desc: "Bringing studio lights to your office." }, { step: "02", title: "Posing", desc: "Guided headshot sessions." }, { step: "03", title: "Proofing", desc: "On-screen photo selection." }, { step: "04", title: "Retouch", desc: "Delivering finished portraits." }]
      },
      {
        id: "real-estate-photography",
        title: "Real Estate Photography",
        tagline: "Stunning Property & Architectural Visuals",
        icon: "Building",
        overview: "HDR wide-angle architectural photography for luxury residential villas, commercial office spaces, hotels, and real estate listings.",
        deliverables: ["HDR Wide-Angle Interior & Exterior Shots", "Twilight / Golden Hour Photography", "Perspective Correction Editing", "High-Res MLS & Web Exports"],
        process: [{ step: "01", title: "Staging", desc: "Organizing room lighting & decor." }, { step: "02", title: "HDR Shoot", desc: "Bracketed exposure shooting." }, { step: "03", title: "Blending", desc: "HDR window & color editing." }, { step: "04", title: "Delivery", desc: "Delivering property gallery." }]
      },
      {
        id: "lifestyle-and-brand-photography",
        title: "Lifestyle & Brand Photography",
        tagline: "Authentic Brand Imagery & Social Storytelling",
        icon: "Sparkles",
        overview: "Candid lifestyle photography depicting real people interacting with your product in natural environments for authentic social media campaigns.",
        deliverables: ["Authentic Lifestyle Scenario Shoots", "Location Hunting & Props", "Social Media Image Content Bank", "Commercial Royalty-Free Licenses"],
        process: [{ step: "01", title: "Moodboard", desc: "Planning visual stories." }, { step: "02", title: "Location", desc: "Shooting in natural light." }, { step: "03", title: "Color Grade", desc: "Applying cinematic color." }, { step: "04", title: "Handoff", desc: "Delivering image library." }]
      }
    ]
  },
  videography: {
    categoryTitle: "Videography Services",
    heroTitle: "4K Cinematic Videography & Filming",
    heroSubtext: "Event videography, product shoots, commercial ad videos, real estate walkthroughs, aerial views, and training videos.",
    services: [
      {
        id: "event-videography",
        title: "Event Videography",
        tagline: "Capture Events in Motion & Highlight Reels",
        badge: "POPULAR",
        icon: "Video",
        overview: "Dynamic 4K event videography capturing high-energy corporate galas, product launches, summits, and festivals with cinematic highlight edits.",
        deliverables: ["4K Multi-Cam Event Coverage", "Cinematic 2-3 Min Teaser Video", "Full Length Event Recording", "Crisp Direct Sound Capture"],
        process: [{ step: "01", title: "Coverage", desc: "Filming key moments & crowds." }, { step: "02", title: "Audio Sync", desc: "Connecting mic feeds." }, { step: "03", title: "Editing", desc: "Cutting teaser & full reel." }, { step: "04", title: "Export", desc: "Delivering 4K video files." }]
      },
      {
        id: "product-shoot",
        title: "Product Shoot Videography",
        tagline: "Showcase Products in Motion",
        badge: "FEATURED",
        icon: "Box",
        overview: "360-degree turntable product videos, unboxing sequences, and feature walkthrough videos designed for e-commerce and social ads.",
        deliverables: ["Slow-Motion Product Closeups", "Turntable 360 Video Passes", "Macro Detail & Texture Shots", "Social Media Vertical Cuts"],
        process: [{ step: "01", title: "Studio Rig", desc: "Setting up motorized turntable." }, { step: "02", title: "Macro Filming", desc: "Capturing 120fps slow-motion." }, { step: "03", title: "Color Grade", desc: "Enhancing product colors." }, { step: "04", title: "Handoff", desc: "Exporting ad-ready cuts." }]
      },
      {
        id: "modelling",
        title: "Modelling Videography",
        tagline: "Fashion & Model Video Portfolios",
        icon: "Film",
        overview: "Fashion runway videography, model video reels, lookbook fashion films, and promotional brand video shoots with professional models.",
        deliverables: ["Cinematic Model Reel Video", "Fashion Runway Coverage", "Slow-Motion Motion Passes", "Instagram Reel & TikTok Edits"],
        process: [{ step: "01", title: "Direction", desc: "Guiding model motion & poses." }, { step: "02", title: "Filming", desc: "Smooth gimbal camera movement." }, { step: "03", title: "Sound", desc: "Editing to energetic beat tracks." }, { step: "04", title: "Delivery", desc: "Delivering video reels." }]
      },
      {
        id: "commercial-and-advertising-videography",
        title: "Commercial & Advertising Videography",
        tagline: "Engaging Commercial Ad Videos",
        icon: "Tv",
        overview: "High-impact video ads for Meta, YouTube, and TV featuring scripted storylines, professional actors, voiceovers, and motion titles.",
        deliverables: ["Script & Concept Development", "On-Set Director & Crew Filming", "Professional Voiceover & Music", "Multi-Ratio Ad Exports"],
        process: [{ step: "01", title: "Script", desc: "Writing high-converting hook." }, { step: "02", title: "Filming", desc: "Studio or location shoot." }, { step: "03", title: "Post", desc: "Editing, sound & graphics." }, { step: "04", title: "Deliver", desc: "Exporting ad variations." }]
      },
      {
        id: "real-estate-videography",
        title: "Real Estate Videography",
        tagline: "Immersive Property Walkthroughs",
        icon: "Building",
        overview: "Cinematic real estate video tours, luxury villa walkthroughs, and commercial site videos featuring smooth gimbal movements and voiceover.",
        deliverables: ["4K Property Walkthrough Tour", "Smooth Gimbal & Slider Shots", "Agent On-Camera Presentation", "Royalty-Free Background Music"],
        process: [{ step: "01", title: "Lighting", desc: "Opening blinds & staging lights." }, { step: "02", title: "Filming", desc: "Gimbal walkthrough passes." }, { step: "03", title: "Edit", desc: "Cutting smooth transitions." }, { step: "04", title: "Publish", desc: "Delivering web video." }]
      },
      {
        id: "ariel-views",
        title: "Aerial Views & Drone Filming",
        tagline: "4K Aerial Drone Video Footage",
        icon: "Maximize",
        overview: "Licensed 4K aerial drone videography for real estate masterplans, construction site monitoring, outdoor events, and landscape films.",
        deliverables: ["4K 60fps Drone Video Shots", "Licensed Drone Pilot Operations", "Architectural Site Progress Passes", "Stabilized Color Graded Clips"],
        process: [{ step: "01", title: "Permit", desc: "Checking airspace clearance." }, { step: "02", title: "Flight", desc: "Piloting 4K aerial passes." }, { step: "03", title: "Grading", desc: "Color correction & editing." }, { step: "04", title: "Delivery", desc: "Delivering master 4K files." }]
      },
      {
        id: "educational-and-training-videography",
        title: "Educational & Training Videography",
        tagline: "Instructional & Corporate Training Videos",
        icon: "CheckCircle2",
        overview: "Structured instructional videos, employee onboarding modules, safety demonstration videos, and online course video production.",
        deliverables: ["Multi-Module Training Video Series", "On-Screen Graphic & Text Overlays", "Crystal Clear Audio Recording", "LMS Compatible Video Formats"],
        process: [{ step: "01", title: "Scripting", desc: "Structuring training steps." }, { step: "02", title: "Filming", desc: "Recording instructor & demos." }, { step: "03", title: "Graphics", desc: "Adding callout text & graphics." }, { step: "04", title: "Export", desc: "Delivering LMS video files." }]
      }
    ]
  }
};
